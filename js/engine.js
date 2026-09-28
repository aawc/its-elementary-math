import { getQuestion } from './generators/registry.js';
import { stateStore } from './state.js';
import { audio } from './fx/audio.js';
import { particles } from './fx/particles.js';

export class QuizEngine {
    constructor(uiManager) {
        this.ui = uiManager;
        this.lessonId = null;
        this.lessonTitle = "";
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.hearts = 5;
        this.sessionXp = 0;
        
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleQuitClick = this.handleQuitClick.bind(this);
    }
    
    async startLesson(lessonId) {
        this.lessonId = lessonId;
        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.hearts = 5; // Start every quiz with full 5 hearts
        this.sessionXp = 0;
        this.questions = [];
        
        try {
            // Generate 20 questions for this lesson
            for (let i = 0; i < 20; i++) {
                const seed = Date.now() + i * 997 + Math.floor(Math.random() * 100000);
                const q = await getQuestion(lessonId, seed, i);
                this.questions.push(q);
            }
            if (this.questions.length > 0) {
                this.lessonTitle = this.questions[0].lessonTitle;
            }
            this.renderCurrentQuestion();
        } catch (e) {
            console.error("Error starting lesson", e);
            alert("Failed to load lesson questions. Returning to lesson chooser.");
            window.location.hash = '';
        }
    }
    
    renderCurrentQuestion() {
        const q = this.questions[this.currentIndex];
        const hudHtml = this.ui.renderQuizHUD(q.lessonTitle, this.currentIndex, 20, this.sessionXp, this.hearts, this.streak);
        this.ui.renderQuestionGrid(q, hudHtml);
        
        // Bind events to option buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', this.handleOptionClick);
        });
        
        const quitBtn = document.getElementById('btn-quit');
        if (quitBtn) quitBtn.addEventListener('click', this.handleQuitClick);
    }
    
    handleOptionClick(e) {
        // Disable options after selection
        document.querySelectorAll('.option-btn').forEach(b => {
             b.disabled = true;
             b.classList.add('disabled');
        });
        
        const selectedBtn = e.currentTarget;
        const selectedIndex = parseInt(selectedBtn.getAttribute('data-index'));
        const q = this.questions[this.currentIndex];
        const isCorrect = selectedIndex === q.correctIndex;
        
        if (isCorrect) {
            selectedBtn.classList.add('correct-choice');
            audio.playCorrect();
            particles.burst(window.innerWidth / 2, window.innerHeight / 2);
            
            this.score++;
            this.streak++;
            const xpGain = 10 * Math.max(1, Math.min(4, Math.floor(this.streak / 2) + 1));
            this.sessionXp += xpGain;
            
            if (this.streak > 0 && this.streak % 5 === 0) {
                audio.playStreak();
            }
        } else {
            selectedBtn.classList.add('incorrect-choice');
            const correctBtn = document.querySelector(`.option-btn[data-index="${q.correctIndex}"]`);
            if (correctBtn) correctBtn.classList.add('correct-choice');
            
            audio.playIncorrect();
            this.streak = 0;
            this.hearts--;
        }
        
        this.ui.showFeedback(isCorrect, q.options[q.correctIndex], q.stepByStep);
        
        const nextBtn = document.getElementById('btn-next');
        if (nextBtn) nextBtn.addEventListener('click', this.handleNextClick);
    }
    
    handleNextClick() {
        if (this.hearts <= 0) {
            this.endLoss();
            return;
        }
        
        this.currentIndex++;
        if (this.currentIndex >= 20) {
            this.endVictory();
        } else {
            this.renderCurrentQuestion();
        }
    }
    
    endLoss() {
        stateStore.setHearts(5);
        stateStore.updateStreak(this.streak);
        
        // Give partial XP for effort
        stateStore.addXp(Math.floor(this.sessionXp / 2));
        
        this.ui.renderGameOver(this.lessonId, this.lessonTitle);
        
        const retryBtn = document.getElementById('btn-retry-lesson');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                this.startLesson(this.lessonId);
            });
        }
        
        const homeBtn = document.getElementById('btn-home');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                window.location.hash = '';
            });
        }
    }
    
    endVictory() {
        const { stars } = stateStore.recordQuizResult(this.lessonId, this.score, 20);
        stateStore.addXp(this.sessionXp);
        stateStore.updateStreak(this.streak);
        stateStore.setHearts(5);
        
        audio.playLevelUp();
        particles.burst(window.innerWidth / 3, window.innerHeight / 2, 80);
        particles.burst(window.innerWidth * 2 / 3, window.innerHeight / 2, 80);
        
        this.ui.renderResults(this.score, 20, stars, this.sessionXp, this.lessonId, this.lessonTitle);
        
        const retryBtn = document.getElementById('btn-retry-lesson');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                this.startLesson(this.lessonId);
            });
        }

        const homeBtn = document.getElementById('btn-home');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                window.location.hash = '';
            });
        }
    }
    
    handleQuitClick() {
        if (confirm("Exit quiz and return to lesson selection? Your progress on this quiz will not be saved.")) {
            window.location.hash = '';
        }
    }
}

const STORAGE_KEY = 'math_quest_state';

class StateStore {
    constructor() {
        this.state = this.getDefaultState();
    }
    
    getDefaultState() {
        return {
            xp: 0,
            level: 1,
            hearts: 5,
            bestStreak: 0,
            lessons: {}, // [lessonId] -> { maxScore, stars, timesPlayed }
            badges: []
        };
    }
    
    load() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (data) {
                this.state = { ...this.getDefaultState(), ...JSON.parse(data) };
            }
        } catch (e) {
            console.error("Failed to load state", e);
        }
        return this.state;
    }
    
    save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch (e) {
            console.error("Failed to save state", e);
        }
    }
    
    addXp(amount) {
        this.state.xp += amount;
        const oldLevel = this.state.level;
        this.state.level = Math.floor(this.state.xp / 1000) + 1;
        this.save();
        return this.state.level > oldLevel;
    }
    
    recordQuizResult(lessonId, score, maxScore) {
        if (!this.state.lessons[lessonId]) {
            this.state.lessons[lessonId] = { maxScore: 0, stars: 0, timesPlayed: 0 };
        }
        
        let stats = this.state.lessons[lessonId];
        stats.timesPlayed++;
        if (score > stats.maxScore) {
            stats.maxScore = score;
        }
        
        let stars = 0;
        const percentage = score / maxScore;
        if (percentage >= 0.9) stars = 3;
        else if (percentage >= 0.7) stars = 2;
        else if (percentage >= 0.5) stars = 1;
        
        if (stars > stats.stars) {
            stats.stars = stars;
        }
        this.save();
        return { stars, newHighScore: score === stats.maxScore && stats.timesPlayed > 1 };
    }
    
    getLessonStats(lessonId) {
        return this.state.lessons[lessonId] || null;
    }
    
    resetProgress() {
        this.state = this.getDefaultState();
        this.save();
    }
    
    setHearts(count) {
        this.state.hearts = Math.max(0, Math.min(5, count));
        this.save();
    }

    updateStreak(streak) {
        if (streak > this.state.bestStreak) {
            this.state.bestStreak = streak;
            this.save();
        }
    }
}

export const stateStore = new StateStore();

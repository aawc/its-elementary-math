function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export const SECTION_METADATA = {
    1: { name: "Section 1: Basic Operations & Number Sense", range: "Lessons 1–10" },
    2: { name: "Section 2: Place Value, Negatives & Factors", range: "Lessons 11–20" },
    3: { name: "Section 3: Fractions, Ratios & Division", range: "Lessons 21–30" },
    4: { name: "Section 4: Decimals, Percents & Area", range: "Lessons 31–40" },
    5: { name: "Section 5: Fraction Operations & Probability", range: "Lessons 41–50" },
    6: { name: "Section 6: Decimals, Rounding & Symmetry", range: "Lessons 51–60" },
    7: { name: "Section 7: Mixed Numbers, Regrouping & Rates", range: "Lessons 61–70" },
    8: { name: "Section 8: Geometry, Exponents & Roots", range: "Lessons 71–80" },
    9: { name: "Section 9: Units of Measure & Volume", range: "Lessons 81–90" },
    10: { name: "Section 10: Algebraic Formulas & Triangles", range: "Lessons 91–100" },
    11: { name: "Section 11: Ratios, Totals & Complex Shapes", range: "Lessons 101–110" },
    12: { name: "Section 12: Mixed Measures & Integers", range: "Lessons 111–120" }
};

export class UIManager {
    constructor(appRootId) {
        this.root = document.getElementById(appRootId);
    }
    
    renderDashboard(curriculum, state) {
        let totalStars = 0;
        let lessonsCompleted = 0;
        if (state.lessons) {
            Object.values(state.lessons).forEach(l => {
                if (l.stars) totalStars += l.stars;
                if (l.timesPlayed > 0) lessonsCompleted++;
            });
        }

        let html = `
        <header class="app-header">
            <div class="header-content">
                <div class="brand">
                    <h1>Elementary Math Challenge</h1>
                    <p class="brand-subtitle">Choose a lesson and take a 20-question quiz game</p>
                </div>
                <div class="profile-stats">
                    <div class="stat-pill"><span class="stat-label">Level</span> <strong>${state.level || 1}</strong></div>
                    <div class="stat-pill"><span class="stat-label">XP</span> <strong>${state.xp || 0}</strong></div>
                    <div class="stat-pill"><span class="stat-label">Stars</span> <strong>★ ${totalStars}</strong></div>
                    <div class="stat-pill"><span class="stat-label">Completed</span> <strong>${lessonsCompleted}/120</strong></div>
                    <button id="btn-sound-toggle" class="sound-toggle-btn" title="Toggle Sound">🔊 Sound</button>
                </div>
            </div>
        </header>

        <main class="dashboard-main">
            <!-- Quick Selection Card -->
            <section class="lesson-picker-hero">
                <h2>Choose a Lesson (1 to 120)</h2>
                <p>Pick any lesson from the curriculum to start your 20-question quiz challenge:</p>
                
                <div class="quick-selector-box">
                    <label for="quick-lesson-dropdown" class="selector-label"><strong>Jump Directly to Lesson:</strong></label>
                    <div class="selector-controls">
                        <select id="quick-lesson-dropdown" class="lesson-dropdown">
                            ${curriculum.map(l => `
                                <option value="${l.number}">
                                    Lesson ${l.number}: ${escapeHTML(l.title)}
                                </option>
                            `).join('')}
                        </select>
                        <button id="btn-start-dropdown" class="btn-primary start-quiz-btn">
                            ▶ Start 20-Question Quiz
                        </button>
                    </div>
                </div>

                <div class="filter-search-bar">
                    <div class="search-input-wrap">
                        <input type="text" id="lesson-search" class="search-input" placeholder="🔍 Search topics (e.g., Fractions, Multiplication, Division, Perimeter, Decimals)..." aria-label="Search lessons by topic">
                    </div>
                    <div class="section-pills-bar">
                        <button class="section-pill active" data-section="all">All Lessons (1–120)</button>
                        ${Object.entries(SECTION_METADATA).map(([secNum, secData]) => `
                            <button class="section-pill" data-section="${secNum}">Section ${secNum} (${secData.range})</button>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Lesson Cards Grouped by Section -->
            <div id="lessons-container" class="sections-container">`;

        let currentSec = -1;
        curriculum.forEach(lesson => {
            if (lesson.section !== currentSec) {
                if (currentSec !== -1) {
                    html += `</div></section>`; // Close previous section
                }
                currentSec = lesson.section;
                const secInfo = SECTION_METADATA[currentSec] || { name: `Section ${currentSec}`, range: "" };
                html += `
                <section class="section-group" data-section="${currentSec}">
                    <div class="section-header">
                        <h3>${escapeHTML(secInfo.name)}</h3>
                        <span class="section-range-badge">${escapeHTML(secInfo.range)}</span>
                    </div>
                    <div class="lessons-grid">`;
            }

            const stats = state.lessons && state.lessons[lesson.number];
            const starCount = stats ? stats.stars : 0;
            const starsDisplay = '★'.repeat(starCount) + '☆'.repeat(3 - starCount);
            const bestScore = stats && stats.highScore !== undefined ? `Best: ${stats.highScore}/20` : 'Not played yet';

            html += `
            <div class="lesson-card" data-lesson-id="${lesson.number}" data-lesson-title="${escapeHTML(lesson.title).toLowerCase()}" data-section="${currentSec}">
                <div class="lesson-card-top">
                    <span class="lesson-badge">Lesson ${lesson.number}</span>
                    <span class="stars-badge" title="${starCount} of 3 stars">${starsDisplay}</span>
                </div>
                <h4 class="lesson-title-text">${escapeHTML(lesson.title)}</h4>
                <div class="lesson-card-footer">
                    <span class="lesson-score-hint">${bestScore}</span>
                    <button class="btn-start-lesson start-btn" data-lesson="${lesson.number}">
                        Start Quiz (20 Qs) →
                    </button>
                </div>
            </div>`;
        });

        if (currentSec !== -1) {
            html += `</div></section>`;
        }

        html += `</div></main>`;
        this.root.innerHTML = html;
    }
    
    renderQuizHUD(title, questionIndex, totalQuestions, xp, hearts, streak) {
        return `
        <div class="hud">
            <button id="btn-quit" class="quit-btn" title="Return to Lesson Chooser">✕ Exit Quiz</button>
            <div class="hud-center">
                <span class="hud-lesson-tag">Question ${questionIndex + 1} of ${totalQuestions}</span>
                <div class="hud-title">${escapeHTML(title)}</div>
            </div>
            <div class="hud-stats">
                <span class="hud-stat-item hearts-stat" title="Lives Remaining">❤️ ${hearts}</span>
                <span class="hud-stat-item streak-stat" title="Combo Streak">🔥 ${streak}x</span>
                <span class="hud-stat-item xp-stat" title="XP Earned This Session">⭐ ${xp} XP</span>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${((questionIndex + 1) / totalQuestions) * 100}%"></div>
            </div>
        </div>`;
    }
    
    renderQuestionGrid(questionData, hudHtml) {
        let html = `
        <div class="quiz-view">
            ${hudHtml}
            <div class="quiz-container">
                <div class="question-pane">
                    <div class="question-header">
                        <span class="question-instruction">Choose the correct answer:</span>
                    </div>
                    <div class="question-text-box">
                        <h2 class="question-text">${escapeHTML(questionData.question)}</h2>
                    </div>
                    <div class="options-grid">`;
                    
        questionData.options.forEach((opt, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            html += `
            <button class="option-btn" data-index="${index}">
                <span class="option-letter">${letter}</span>
                <span class="option-content">${escapeHTML(opt)}</span>
            </button>`;
        });
        
        html += `   </div>
                </div>
                <div id="feedback-area" class="feedback-area hidden"></div>
            </div>
        </div>`;
        
        this.root.innerHTML = html;
    }
    
    showFeedback(isCorrect, correctAnswer, stepByStep) {
        const fbWrap = document.getElementById('feedback-area');
        if (!fbWrap) return;
        
        if (isCorrect) {
            fbWrap.innerHTML = `
            <div class="feedback-card correct-feedback">
                <div class="feedback-badge pass-badge">▲ [PASS] Correct!</div>
                <p class="feedback-message">Great job! Keep the streak going.</p>
                <button id="btn-next" class="btn-primary next-question-btn">Next Question →</button>
            </div>`;
        } else {
            fbWrap.innerHTML = `
            <div class="feedback-card incorrect-feedback">
                <div class="feedback-badge fail-badge">■ [FAIL] Incorrect</div>
                <div class="correct-answer-callout">
                    Correct Answer: <strong>${escapeHTML(correctAnswer)}</strong>
                </div>
                <div class="step-by-step-box">
                    <strong>Step-by-Step Explanation:</strong>
                    <ol class="steps-list">
                        ${stepByStep.map(s => `<li>${escapeHTML(s)}</li>`).join('')}
                    </ol>
                </div>
                <button id="btn-next" class="btn-primary next-question-btn">Next Question →</button>
            </div>`;
        }
        fbWrap.classList.remove('hidden');
    }
    
    renderResults(score, total, stars, xpGained, lessonId, lessonTitle) {
        const percentage = Math.round((score / total) * 100);
        let message = "Keep practicing!";
        if (stars === 3) message = "Spectacular! Perfect or Near-Perfect Score!";
        else if (stars === 2) message = "Great job! Strong mastery demonstrated!";
        else if (stars === 1) message = "Good effort! Practice again to earn more stars.";

        let html = `
        <div class="results-screen">
            <div class="results-card">
                <span class="results-kicker">Quiz Complete!</span>
                <h2>Lesson ${lessonId}: ${escapeHTML(lessonTitle || '')}</h2>
                
                <div class="stars-banner">
                    <span class="star-glyph">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</span>
                </div>
                
                <p class="results-message">${escapeHTML(message)}</p>

                <div class="score-grid">
                    <div class="score-card">
                        <span class="score-num">${score}/${total}</span>
                        <span class="score-lbl">Correct Answers</span>
                    </div>
                    <div class="score-card">
                        <span class="score-num">${percentage}%</span>
                        <span class="score-lbl">Accuracy</span>
                    </div>
                    <div class="score-card">
                        <span class="score-num">+${xpGained}</span>
                        <span class="score-lbl">XP Earned</span>
                    </div>
                </div>

                <div class="results-actions">
                    <button id="btn-retry-lesson" class="btn-secondary" data-lesson="${lessonId}">
                        🔄 Try Again (New 20 Questions)
                    </button>
                    <button id="btn-home" class="btn-primary">
                        📚 Choose Another Lesson
                    </button>
                </div>
            </div>
        </div>`;
        this.root.innerHTML = html;
    }

    renderGameOver(lessonId, lessonTitle) {
        let html = `
        <div class="results-screen">
            <div class="results-card game-over-card">
                <div class="fail-badge-large">■ [FAIL] Out of Hearts</div>
                <h2>Lesson ${lessonId}: ${escapeHTML(lessonTitle || '')}</h2>
                <p class="results-message">You ran out of lives on this attempt. Review the concepts and try again with full hearts!</p>
                
                <div class="results-actions">
                    <button id="btn-retry-lesson" class="btn-primary" data-lesson="${lessonId}">
                        🔄 Restart Lesson ${lessonId}
                    </button>
                    <button id="btn-home" class="btn-secondary">
                        📚 Back to Lesson Chooser
                    </button>
                </div>
            </div>
        </div>`;
        this.root.innerHTML = html;
    }
}

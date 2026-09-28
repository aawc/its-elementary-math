import { stateStore } from './state.js';
import { UIManager } from './ui.js';
import { QuizEngine } from './engine.js';
import { particles } from './fx/particles.js';
import { audio } from './fx/audio.js';

let curriculum = [];
let ui;
let engine;

async function init() {
    stateStore.load();
    ui = new UIManager('app-root');
    engine = new QuizEngine(ui);
    particles.init('particles-layer');

    try {
        try {
            const module = await import('../curriculum.js');
            curriculum = module.curriculumData;
        } catch (e1) {
            const response = await fetch('curriculum.json');
            curriculum = await response.json();
        }
    } catch (e) {
        console.error("Failed to load curriculum", e);
        document.getElementById('app-root').innerHTML = "<div class='error-msg'><h1>Error loading curriculum</h1><p>Please refresh the page.</p></div>";
        return;
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}

function handleRoute() {
    const hash = window.location.hash;
    
    if (hash.startsWith('#lesson=')) {
        const lessonId = parseInt(hash.replace('#lesson=', ''), 10);
        if (lessonId >= 1 && lessonId <= 120) {
            engine.startLesson(lessonId);
            return;
        }
    }
    
    // Render Dashboard & Lesson Selector
    ui.renderDashboard(curriculum, stateStore.state);
    bindDashboardEvents();
}

function bindDashboardEvents() {
    // 1. Quick Dropdown Start Button
    const startDropdownBtn = document.getElementById('btn-start-dropdown');
    const lessonDropdown = document.getElementById('quick-lesson-dropdown');
    if (startDropdownBtn && lessonDropdown) {
        startDropdownBtn.addEventListener('click', () => {
            const lessonId = lessonDropdown.value;
            audio.playClick();
            window.location.hash = `#lesson=${lessonId}`;
        });
        lessonDropdown.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                audio.playClick();
                window.location.hash = `#lesson=${lessonDropdown.value}`;
            }
        });
    }

    // 2. Individual Lesson Card Buttons
    document.querySelectorAll('.btn-start-lesson').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const lessonId = btn.getAttribute('data-lesson');
            audio.playClick();
            window.location.hash = `#lesson=${lessonId}`;
        });
    });

    // Also allow clicking the entire lesson card
    document.querySelectorAll('.lesson-card').forEach(card => {
        card.addEventListener('click', () => {
            const lessonId = card.getAttribute('data-lesson-id');
            audio.playClick();
            window.location.hash = `#lesson=${lessonId}`;
        });
    });

    // 3. Search Filter
    const searchInput = document.getElementById('lesson-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            filterLessons(query, getActiveSection());
        });
    }

    // 4. Section Filter Pills
    document.querySelectorAll('.section-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.section-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            audio.playClick();
            const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
            filterLessons(query, pill.getAttribute('data-section'));
        });
    });

    // 5. Sound Toggle
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            const isMuted = audio.toggleMute();
            soundBtn.textContent = isMuted ? '🔇 Sound OFF' : '🔊 Sound ON';
            soundBtn.classList.toggle('muted', isMuted);
        });
    }
}

function getActiveSection() {
    const activePill = document.querySelector('.section-pill.active');
    return activePill ? activePill.getAttribute('data-section') : 'all';
}

function filterLessons(query, sectionFilter) {
    document.querySelectorAll('.section-group').forEach(group => {
        const groupSec = group.getAttribute('data-section');
        const matchesSection = (sectionFilter === 'all' || sectionFilter === groupSec);
        
        let visibleCountInGroup = 0;
        group.querySelectorAll('.lesson-card').forEach(card => {
            const lessonTitle = card.getAttribute('data-lesson-title') || '';
            const lessonId = card.getAttribute('data-lesson-id') || '';
            const matchesQuery = !query || lessonTitle.includes(query) || lessonId === query || `lesson ${lessonId}`.includes(query);
            
            if (matchesSection && matchesQuery) {
                card.style.display = 'flex';
                visibleCountInGroup++;
            } else {
                card.style.display = 'none';
            }
        });
        
        group.style.display = (visibleCountInGroup > 0) ? 'block' : 'none';
    });
}

window.addEventListener('DOMContentLoaded', init);

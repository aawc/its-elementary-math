# Mathematical Quiz Platform Architecture

## Overview
A comprehensive, client-side gamified educational platform built as a Single Page Application (SPA). Designed for GitHub Pages, requiring zero build steps while strictly adhering to red-green colorblindness accessibility requirements.

## 1. Curriculum & Lesson Map
*   **Data Source**: Driven by `curriculum.json`, categorizing 120 lessons into 12 thematic "Quest Worlds" (mapped from sections 1-12).
*   **Progression Model**: Each Quest World acts as a container for progressive lesson nodes.
*   **State Persistence**: Progress is persisted continuously via `localStorage`.
    *   Schema: `userProgress = { xp: number, level: number, badges: string[], lessons: { [lessonId: number]: { maxScore: number, attempts: number, stars: number } } }`
*   **Exploration**: The map supports non-linear exploration but highlights recommended next-steps based on consecutive completion.

## 2. Question Engine Architecture
*   **Stateless Parametric Generators**: Instead of a static question bank, the engine uses parametric generator scripts assigned per lesson.
*   **Dynamic Loading**: Generators are lazy-loaded via ES6 `import()` (e.g., `await import('./generators/lesson_001.js')`) to minimize initial payload while keeping logic modular.
*   **Generator Interface**:
    Each generator module exports a single function matching the signature:
    ```javascript
    export function generateQuestion(seed) {
        // Example logic for Lesson 1: Addition and Subtraction
        // Returns structured payload
        return {
            type: "MULTIPLE_CHOICE", // or "INPUT"
            prompt: "What is 456 + 123?",
            options: [579, 589, 578, 679], // Randomly shuffled during render
            correctIndex: 0,
            stepByStep: ["Align numbers vertically.", "Add ones: 6 + 3 = 9...", "Result is 579."]
        };
    }
    ```
*   **Distractor Generation**: Generators employ specific heuristics to create plausible distractors (e.g., off-by-one errors from carrying, transposed digits, or misplaced decimals) to challenge common misconceptions.

## 3. Gamification & Engagement Mechanics
*   **Core Loop**: A typical session consists of 20 generated questions. Real-time feedback is provided after each response.
*   **Energy & Streaks**: 
    *   Players begin a quiz with 5 "Hearts" (Energy).
    *   Correct answers build a Combo Streak, feeding an XP Multiplier (e.g., 3-streak = +1.5x XP).
    *   Reaching 0 Hearts triggers game-over, transitioning to a pedagogical Review Mode.
*   **Achievements Systems**: Defined logical triggers (e.g., "Answer 50 questions", "Complete Section 1 perfectly").
*   **Procedural Audio (Zero Assets)**: All sound effects are generated via the modern Web Audio API (`AudioContext`).
    *   *Success*: Synthesized glissando (arpeggiated pentatonic scale).
    *   *Failure / Mistake*: Low-pitched flat sawtooth wave.
*   **Visual Effects**: An HTML5 Canvas layer overlay handles particle effects (confetti bursts, floating XP text) upon scoring correct answers or leveling up.

## 4. UI/UX Flow & Accessibility
*   **View Navigation (SPA)**: Custom event-based routing decoupling UI logic from standard URLs, manipulating the `id="app-root"` DOM node.
    *   Views: `Dashboard / World Selector`, `Lesson Picker`, `Active Quiz Session`, `Results / Review`.
*   **Strict Red-Green Colorblindness Compliance**:
    *   **Palette**: Blue (`#0072B2`) for Success/Primary, Orange (`#D55E00`) for Warning/Failure. Secondary tones utilize high-contrast greyscale.
    *   **Mandatory Double Encoding**: Colors are never used alone for feedback.
    *   **Explicit Status Badges**: Output requires explicit `[PASS]` and `[FAIL]` text labels.
    *   **Geometric Symbology**: Correct answers are denoted by distinct polygons (e.g., a Blue circle or Triangle), incorrect by a distinct contrasting shape (e.g., Orange cross or square).
*   **UI Architecture**: Vanilla JS utilizing template literals for layouts and global Event Delegation to avoid memory leaks.

## 5. Directory & File Structure
```text
/usr/local/google/home/vakh/git/hub/aawc/its-elementary-math/
├── index.html                   (SPA Shell, UI roots, script includes)
├── curriculum.json              (Existing JSON map covering 120 lessons)
├── css/
│   └── style.css                (CSS utilizing CSS variables for theme and colorblind palette)
└── js/
    ├── main.js                  (Application bootstrapping, routing events)
    ├── state.js                 (localStorage hydration, saving, XP/level logic)
    ├── engine.js                (Quiz execution, loading generators, scoring and life tracking)
    ├── ui.js                    (DOM manipulation, view rendering)
    ├── fx/
    │   ├── audio.js             (Web Audio API synthesizer tools)
    │   └── particles.js         (Canvas particle rendering)
    └── generators/
        ├── registry.js          (Index mapping lessons to generator implementations)
        ├── lesson_001.js        (Lesson specific problem logic)
        ├── lesson_002.js
        └── ...                  (Further generator modules)
```

## Verification Plan
1. **Curriculum Integrity**: Iterate through `curriculum.json` and ensure UI sections map 1:1 with JSON entries.
2. **Generator Robustness**: Write a headless test suite within `tools/` that invokes each generator with 100 different seeds, verifying format, distractor uniqueness, and solvable conditions.
3. **Accessibility Audit**: Audit UI via Chrome DevTools configured for protanomaly/deuteranomaly simulations to confirm contrast and explicit text indications `[PASS]` / `[FAIL]`.
4. **Environment Check**: Ensure zero dependencies, un-minified client-side evaluation works strictly over `file://` or `python3 -m http.server`, proving GitHub pages viability.

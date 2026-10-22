# It's Elementary Math

An interactive, gamified educational Single Page Application (SPA) built for practicing elementary mathematics. Designed to deploy directly to GitHub Pages with zero external dependencies, zero build steps, and full red-green colorblindness accessibility compliance.

---

## Overview

The application organizes a 120-lesson elementary mathematics curriculum into 12 thematic "Quest Worlds" (10 lessons per section). Instead of serving a static question bank, the platform dynamically generates procedural questions using seeded pseudo-random number generation, realistic distractor heuristics, and authentic problem categories derived directly from curriculum practice sets.

---

## Key Features

### 1. Procedural Question Generation
* **Stateless & Deterministic**: Every question is procedurally synthesized using a Mulberry32 PRNG seeded per question, ensuring consistent and reproducible problem variations.
* **Authentic Curriculum Framings**: Each of the 120 lessons implements 20 distinct question categories mirroring real-world problem types (word problems, geometric models, fractions, rates, proportions, algebraic equations, elapsed time, unit multipliers, probability, and arithmetic).
* **Pedagogical Distractors**: Heuristic distractor generator models plausible student misconceptions (such as common carry/borrow errors, transposed digits, off-by-one arithmetic, or misplaced decimal points).
* **Step-by-Step Solutions**: Every generated question provides clear, multi-step explanations for pedagogical review.

### 2. Gamified Learning Loop
* **Core Loop**: 20-question quiz sessions per lesson.
* **Energy & Lives**: Students start each quiz with 5 hearts. Incorrect answers cost 1 heart; losing all hearts transitions to an instructional Review Mode.
* **Streaks & Multipliers**: Consecutive correct answers build combo streaks that award scaled XP bonuses.
* **Persistence**: Player XP, levels, streak records, lesson mastery stars, and unlocked achievement badges are persisted locally via `localStorage`.

### 3. Procedural Audio & Visual FX (Zero Asset Overhead)
* **Web Audio API**: All sound effects (pentatonic success chimes, failure buzzers, UI clicks, victory fanfares) are procedurally synthesized via browser audio oscillators without audio asset files.
* **Canvas Particle Engine**: Lightweight HTML5 Canvas particle system renders reward celebrations and confetti bursts with automated lifecycle cleanup.

### 4. Accessibility & Inclusive Design
* **Okabe-Ito Colorblind Palette**: High-contrast, colorblind-safe color schemes using Blue (`#0072B2`) for Primary/Success and Orange (`#D55E00`) for Warning/Error.
* **Double Visual Encoding**: Visual state changes never rely solely on color. Information is paired with geometric iconography (polygons, checkmarks, crosses) and explicit text status indicators (`[PASS]`, `[FAIL]`, `[CORRECT]`, `[INCORRECT]`).

---

## Repository Structure

```text
.
├── index.html                   # SPA entrypoint and application shell
├── ARCHITECTURE.md              # Technical design and architecture specification
├── curriculum.json              # Structured 120-lesson curriculum database
├── curriculum.js                # ES module export of the curriculum map
├── css/
│   └── style.css                # CSS variables, responsive layout, and accessible theme
├── js/
│   ├── main.js                  # Application bootstrapper and view router
│   ├── state.js                 # State management and localStorage persistence
│   ├── engine.js                # Quiz state machine, hearts, streaks, and scoring
│   ├── ui.js                    # View rendering (World Map, Lesson Picker, Quiz, Review)
│   ├── fx/
│   │   ├── audio.js             # Web Audio API procedural sound synthesizer
│   │   └── particles.js         # Canvas particle effects and confetti engine
│   └── generators/
│       ├── registry.js          # Lazy-loading dynamic importer for section modules
│       ├── utils.js             # Mulberry32 PRNG, distractors, shuffling, formatting
│       └── section1.js - section12.js  # Procedural question generators (10 lessons each)
├── data/
│   └── written_practice_raw.json # Anonymized extracted practice question dataset
├── test/
│   ├── generator.test.js        # Generator validation suite across all 120 lessons
│   ├── framing_diversity.test.js # Session diversity gate (max 2 repeated framings / 20 Qs)
│   └── stress.test.js           # 6,000-permutation stress test across 50 seeds/lesson
└── tools/
    ├── serve/main.go            # Standalone zero-dependency Go HTTP development server
    └── ...                      # Offline builder utilities and dataset extraction scripts
```

---

## Local Development & Setup

The application requires no bundler or package installation to run. Any static HTTP server can host the application.

### Starting the Local Dev Server

Using the included Go development server:
```bash
go run tools/serve/main.go -port 8080
```

Alternatively, using Python:
```bash
python3 -m http.server 8080
```

Once running, navigate to `http://localhost:8080` in any modern web browser.

---

## Verification & Testing

The test suite validates question generation integrity, distractor uniqueness, schema compliance, and session diversity.

Run the test suites using Node.js:

```bash
# 1. Validate generator contracts across all 120 lessons
node test/generator.test.js

# 2. Verify framing diversity gates (no pattern repeated >2 times in 20 questions)
node test/framing_diversity.test.js

# 3. Execute 6,000-permutation stress test across 50 seeds per lesson
node test/stress.test.js
```

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

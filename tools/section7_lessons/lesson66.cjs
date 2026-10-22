module.exports = `    // Lesson 66: Using Prime Factorization to Reduce Fractions
    66: (rng, qIndex) => {
        const framings = [
            // Category 0: Reduce 36/81 using prime factorization (Lesson 66 PS a)
            (r) => {
                const q = "Use prime factorization to reduce the fraction 36/81.";
                const correct = "4/9";
                const distractors = ["2/9", "6/9", "12/27"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "36 = 2 · 2 · 3 · 3.",
                        "81 = 3 · 3 · 3 · 3.",
                        "Cancel common factors (3 · 3): (2 · 2) / (3 · 3) = 4/9."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 1: Reduce 125/500 using prime factorization (Lesson 66 PS b)
            (r) => {
                const q = "Write the prime factorization of both terms to reduce: 125/500.";
                const correct = "1/4";
                const distractors = ["1/5", "2/5", "1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "125 = 5 · 5 · 5.",
                        "500 = 2 · 2 · 5 · 5 · 5.",
                        "Cancel three 5s: 1 / (2 · 2) = 1/4."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 2: Reduce 48/400 using prime factorization (Lesson 66 PS c)
            (r) => {
                const q = "Simplify the fraction 48/400 by cancelling common prime factors.";
                const correct = "3/25";
                const distractors = ["6/25", "3/50", "12/100"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "48 = 2⁴ · 3 = 2 · 2 · 2 · 2 · 3.",
                        "400 = 2⁴ · 5² = 2 · 2 · 2 · 2 · 5 · 5.",
                        "Cancel four 2s: 3 / (5 · 5) = 3/25."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 3: Reduce 875/1000 using prime factorization (Lesson 66 PS d)
            (r) => {
                const q = "Using prime factor trees or division by primes, reduce the fraction: 875/1000.";
                const correct = "7/8";
                const distractors = ["5/8", "3/4", "7/10"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "875 = 5 · 5 · 5 · 7 = 5³ · 7.",
                        "1000 = 2 · 2 · 2 · 5 · 5 · 5 = 2³ · 5³.",
                        "Cancel three 5s: 7 / (2 · 2 · 2) = 7/8."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 4: Multiplying two mixed numbers (Lesson 66 Concept)
            (r) => {
                const q = "Calculate: 2 1/2 × 1 1/3";
                const correct = "3 1/3";
                const distractors = ["2 1/3", "3 1/2", "3 2/3"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert 2 1/2 = 5/2 and 1 1/3 = 4/3.",
                        "Multiply: 5/2 × 4/3 = 20/6.",
                        "Reduce and convert: 20/6 = 10/3 = 3 1/3."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 5: Multiplying mixed number by whole number (Lesson 66 Concept)
            (r) => {
                const q = "Calculate: 3 × 1 3/4";
                const correct = "5 1/4";
                const distractors = ["3 3/4", "4 1/2", "5 3/4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 3/4 = 7/4.",
                        "3 × 7/4 = 21/4.",
                        "21/4 = 5 1/4."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 6: Mixed number subtraction with regrouping (Lesson 66 WP)
            (r) => {
                const q = "Simplify: 4 1/4 − 2 7/8";
                const correct = "1 3/8";
                const distractors = ["1 5/8", "2 3/8", "1 1/8"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Find common denominator 8: 4 1/4 = 4 2/8.",
                        "Regroup: 4 2/8 = 3 10/8.",
                        "Subtract: 3 10/8 − 2 7/8 = 1 3/8."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 7: Number cube prime probability (Lesson 66 WP)
            (r) => {
                const q = "What is the probability of rolling a prime number with one toss of a standard number cube?";
                const correct = "1/2";
                const distractors = ["1/3", "2/3", "1/6"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Outcomes on a standard number cube: {1, 2, 3, 4, 5, 6} (6 total).",
                        "Prime numbers in this set: {2, 3, 5} (3 prime outcomes).",
                        "Probability = 3/6 = 1/2."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 8: Percent to fraction and decimal (Lesson 66 WP)
            (r) => {
                const pct = [51, 63, 71, 83][randInt(r, 0, 3)];
                const correct = pct + "/100 and 0." + pct;
                const q = "Write " + pct + "% as a fraction and as a decimal number.";
                const distractors = [
                    pct + "/10 and 0." + pct,
                    pct + "/100 and " + (pct / 10).toFixed(1),
                    "1/" + pct + " and 0." + pct
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        pct + "% means " + pct + "/100.",
                        "In decimal form, " + pct + "/100 = 0." + pct + "."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 9: Rectangular prism properties (Lesson 66 WP)
            (r) => {
                const q = "A rectangular prism has how many faces, edges, and vertices?";
                const correct = "6 faces, 12 edges, 8 vertices";
                const distractors = [
                    "6 faces, 8 edges, 12 vertices",
                    "4 faces, 8 edges, 6 vertices",
                    "8 faces, 12 edges, 6 vertices"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A rectangular prism has 6 rectangular faces.",
                        "It has 12 straight edges where faces meet.",
                        "It has 8 corners (vertices)."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 10: Ratio of boys to girls (Lesson 66 WP)
            (r) => {
                const pairs = [
                    { b: 15, g: 12, ratio: "5 to 4", step: "15/12 reduces by dividing by 3 to 5/4, which is 5 to 4." },
                    { b: 16, g: 12, ratio: "4 to 3", step: "16/12 reduces by dividing by 4 to 4/3, which is 4 to 3." },
                    { b: 18, g: 14, ratio: "9 to 7", step: "18/14 reduces by dividing by 2 to 9/7, which is 9 to 7." },
                    { b: 20, g: 15, ratio: "4 to 3", step: "20/15 reduces by dividing by 5 to 4/3, which is 4 to 3." }
                ];
                const item = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "There were " + item.b + " boys and " + item.g + " girls in a class. What was the ratio of boys to girls in simplest form?";
                const distractors = [
                    item.ratio.split(" to ").reverse().join(" to "),
                    (parseInt(item.ratio.split(" to ")[0]) + 1) + " to " + item.ratio.split(" to ")[1],
                    item.ratio.split(" to ")[0] + " to " + (parseInt(item.ratio.split(" to ")[1]) + 1)
                ];
                const s = shuffle(r, [item.ratio, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [item.step],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 11: Fraction of class made up of girls (Lesson 66 WP)
            (r) => {
                const b = 15;
                const g = 12;
                const correct = "4/9";
                const q = "There were " + b + " boys and " + g + " girls in the class. What fraction of the class was made up of girls in simplest form?";
                const distractors = ["5/9", "4/5", "12/25"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Total students = 15 + 12 = 27.",
                        "Fraction of girls = 12/27.",
                        "Reduce by dividing numerator and denominator by 3: 4/9."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 12: Decimal division (Lesson 66 WP)
            (r) => {
                const q = "Calculate: 2.4 ÷ 0.08";
                const correct = "30";
                const distractors = ["3", "300", "0.3"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply dividend and divisor by 100: 240 ÷ 8 = 30."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 13: Equal money division (Lesson 66 WP)
            (r) => {
                const q = "How many $0.25 stamps can be purchased with $10.00?";
                const correct = "40";
                const distractors = ["25", "50", "4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Each dollar buys 4 stamps.",
                        "10 × 4 = 40 stamps."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 14: Rectangle area with mixed fractions (Lesson 66 WP)
            (r) => {
                const q = "What is the area of a rectangle with length 2 1/2 cm and width 1 1/5 cm?";
                const correct = "3 cm²";
                const distractors = ["2 1/2 cm²", "3 1/5 cm²", "2 7/10 cm²"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "2 1/2 = 5/2 and 1 1/5 = 6/5.",
                        "Area = 5/2 × 6/5 = 30/10 = 3 cm²."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 15: Prime factorization of 250 (Lesson 66 WP)
            (r) => {
                const q = "What is the prime factorization of 250?";
                const correct = "2 · 5 · 5 · 5 (or 2 · 5³)";
                const distractors = [
                    "2 · 5 · 25",
                    "5 · 50",
                    "2 · 2 · 5 · 5"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "250 = 2 × 125.",
                        "125 = 5 × 25 = 5 × 5 × 5.",
                        "250 = 2 · 5 · 5 · 5 = 2 · 5³."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 16: Extreme temperature difference (Lesson 66 WP)
            (r) => {
                const q = "The highest temperature recorded on Earth was 136°F and the lowest was −129°F. What is the difference between these two temperatures?";
                const correct = "265°F";
                const distractors = ["7°F", "255°F", "275°F"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract the lowest from the highest: 136 − (−129) = 136 + 129 = 265°F."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 17: Solve fraction equation (Lesson 66 WP)
            (r) => {
                const q = "Solve for x: x − 2 1/3 = 3 1/2";
                const correct = "5 5/6";
                const distractors = ["5 2/5", "5 1/6", "6 1/6"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Add 2 1/3 to both sides: x = 3 1/2 + 2 1/3.",
                        "Common denominator 6: 3 3/6 + 2 2/6 = 5 5/6."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 18: Distance of dollar bills placed end to end (Lesson 66 WP)
            (r) => {
                const count = [1000, 2000, 4000][randInt(r, 0, 2)];
                const feet = Math.round(count * 6 / 12);
                const correct = feet + " feet";
                const q = "A dollar bill is about 6 inches long. Placed end to end, about how many feet would " + count + " dollar bills reach?";
                const distractors = [
                    (feet * 2) + " feet",
                    (feet / 2) + " feet",
                    (count) + " feet"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        count + " bills × 6 inches = " + (count * 6) + " inches.",
                        (count * 6) + " inches ÷ 12 = " + feet + " feet."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            },
            // Category 19: Equivalent division problem (Lesson 66 WP)
            (r) => {
                const q = "Which division problem is equivalent to 1.5 ÷ 0.05?";
                const correct = "150 ÷ 5";
                const distractors = ["15 ÷ 5", "150 ÷ 50", "1500 ÷ 5"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply both numbers by 100 to clear the decimal in the divisor:",
                        "1.5 × 100 = 150 and 0.05 × 100 = 5.",
                        "Equivalent problem: 150 ÷ 5."
                    ],
                    lessonNum: 66,
                    lessonTitle: "Using Prime Factorization to Reduce Fractions"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

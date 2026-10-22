module.exports = `    // Lesson 69: Reducing Fractions Before Multiplying
    69: (rng, qIndex) => {
        const framings = [
            // Category 0: Reducing before multiplying fractions (Lesson 69 PS a / WP)
            (r) => {
                const q = "Reduce before multiplying: 3/4 × 8/9";
                const correct = "2/3";
                const distractors = ["1/3", "4/9", "3/8"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Cancel 3 into 9 (giving 1 and 3).",
                        "Cancel 4 into 8 (giving 1 and 2).",
                        "Multiply reduced factors: (1 × 2)/(1 × 3) = 2/3."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 1: Reducing before multiplying fractions (Lesson 69 PS b)
            (r) => {
                const q = "Simplify by reducing fractions before multiplying: 5/6 × 4/5";
                const correct = "2/3";
                const distractors = ["5/6", "4/6", "1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Cancel 5 with 5 (giving 1 and 1).",
                        "Reduce 4/6 by dividing by 2 (giving 2 and 3).",
                        "Multiply: (1 × 2)/(3 × 1) = 2/3."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 2: Reducing before multiplying fractions (Lesson 69 PS c)
            (r) => {
                const q = "Multiply the fractions after cancelling common factors: 8/9 × 3/10";
                const correct = "4/15";
                const distractors = ["8/30", "2/15", "4/27"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide 3 and 9 by 3 (giving 1 and 3).",
                        "Divide 8 and 10 by 2 (giving 4 and 5).",
                        "Multiply: (4 × 1)/(3 × 5) = 4/15."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 3: Mixed number multiplication with reduction (Lesson 69 PS d / WP #21)
            (r) => {
                const q = "Write in fraction form and reduce before multiplying: 1 1/5 × 2 1/2";
                const correct = "3";
                const distractors = ["2 1/2", "3 1/5", "2 3/10"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 1/5 = 6/5 and 2 1/2 = 5/2.",
                        "Cancel 5 with 5.",
                        "6/2 = 3."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 4: Alaska purchase in digits (Lesson 69 WP #1)
            (r) => {
                const q = "Alaska was purchased in 1867 for seven million, two hundred thousand dollars. Use digits to write that amount.";
                const correct = "$7,200,000";
                const distractors = ["$7,020,000", "$72,000,000", "$7,002,000"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Seven million = 7,000,000.",
                        "Two hundred thousand = 200,000.",
                        "Combined = $7,200,000."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 5: Music notes eighth in half note (Lesson 69 WP #2)
            (r) => {
                const q = "In music, how many eighth notes equal a half note?";
                const correct = "4";
                const distractors = ["2", "8", "16"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A half note is 1/2.",
                        "(1/2) ÷ (1/8) = 1/2 × 8/1 = 4 eighth notes."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 6: Mental division by doubling (Lesson 69 WP #3)
            (r) => {
                const q = "Instead of dividing 12 by 2 1/2, Shannon doubled both numbers and then divided. What division problem did Shannon form, and what is its quotient?";
                const correct = "24 ÷ 5 = 4.8";
                const distractors = [
                    "24 ÷ 5 = 4.4",
                    "12 ÷ 5 = 2.4",
                    "24 ÷ 10 = 2.4"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Double 12: 12 × 2 = 24.",
                        "Double 2 1/2: 2.5 × 2 = 5.",
                        "24 ÷ 5 = 4.8 (or 4 4/5)."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 7: Number line midpoint (Lesson 69 WP #7)
            (r) => {
                const q = "What number is halfway between 1/2 and 1 on the number line?";
                const correct = "3/4";
                const distractors = ["2/3", "5/8", "7/8"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Average of 1/2 and 1: (1/2 + 1) ÷ 2 = (3/2) ÷ 2 = 3/4."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 8: Decimal addition (Lesson 69 WP #11)
            (r) => {
                const q = "Evaluate: 4.37 + 12.8 + 6";
                const correct = "23.17";
                const distractors = ["22.17", "23.25", "17.77"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Align decimal points: 4.37 + 12.80 + 6.00 = 23.17."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 9: Decimal division (Lesson 69 WP #12)
            (r) => {
                const q = "Divide the decimals: 0.46 ÷ 5";
                const correct = "0.092";
                const distractors = ["0.92", "0.082", "0.046"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "0.46 ÷ 5 = 0.092."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 10: Whole number divided by decimal (Lesson 69 WP #13)
            (r) => {
                const q = "Calculate the quotient: 60 ÷ 0.8";
                const correct = "75";
                const distractors = ["48", "7.5", "750"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply dividend and divisor by 10: 600 ÷ 8 = 75."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 11: Equivalent division problem (Lesson 69 WP #15)
            (r) => {
                const q = "The division problem 1.5 ÷ 0.06 is equivalent to which of the following?";
                const correct = "150 ÷ 6";
                const distractors = ["15 ÷ 6", "150 ÷ 60", "1500 ÷ 6"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply both numbers by 100 to clear the decimal in the divisor:",
                        "1.5 × 100 = 150 and 0.06 × 100 = 6.",
                        "Equivalent problem: 150 ÷ 6."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 12: Milliliters in liters (Lesson 69 WP #16)
            (r) => {
                const liters = [2.4, 3.5, 3.8, 4.2][randInt(r, 0, 3)];
                const ml = Math.round(liters * 1000);
                const correct = ml + " mL";
                const q = "There are 1000 milliliters in 1 liter. How many milliliters are in " + liters + " liters?";
                const distractors = [
                    (ml - 100) + " mL",
                    (ml + 100) + " mL",
                    Math.round(liters * 100) + " mL"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        liters + " × 1000 = " + ml + " mL."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 13: Triangular pyramid properties (Lesson 69 WP #20)
            (r) => {
                const q = "A pyramid with a triangular base has how many faces, edges, and vertices?";
                const correct = "4 faces, 6 edges, 4 vertices";
                const distractors = [
                    "5 faces, 8 edges, 5 vertices",
                    "4 faces, 4 edges, 4 vertices",
                    "3 faces, 6 edges, 3 vertices"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A triangular pyramid (tetrahedron) has 1 triangular base + 3 triangular sides = 4 faces.",
                        "It has 3 base edges + 3 lateral edges = 6 edges.",
                        "It has 3 base vertices + 1 top vertex = 4 vertices."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 14: Mixed number division with reduction (Lesson 69 WP #22)
            (r) => {
                const q = "Write in fraction form and reduce before multiplying: 8/9 ÷ 2 2/3";
                const correct = "1/3";
                const distractors = ["2/3", "3/8", "1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "2 2/3 = 8/3.",
                        "8/9 ÷ 8/3 = 8/9 × 3/8.",
                        "Cancel 8s, reduce 3/9 to 1/3."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 15: Heart rate pulse calculation (Lesson 69 WP #24)
            (r) => {
                const bpm = [64, 68, 72, 76][randInt(r, 0, 3)];
                const minutes = 3;
                const totalBeats = bpm * minutes;
                const correct = totalBeats + " beats";
                const q = "John took his pulse for " + minutes + " minutes. His pulse was " + bpm + " beats per minute. How many times did his heart beat in those " + minutes + " minutes?";
                const distractors = [
                    (totalBeats - bpm) + " beats",
                    (totalBeats + bpm) + " beats",
                    (bpm * 2) + " beats"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        bpm + " beats/min × " + minutes + " min = " + totalBeats + " beats."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 16: Prime factorization to reduce 72/300 (Lesson 69 WP #26)
            (r) => {
                const q = "Write the prime factorization of both the numerator and denominator of 72/300. Then reduce the fraction.";
                const correct = "6/25";
                const distractors = ["12/50", "3/25", "18/75"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "72 = 2 · 2 · 2 · 3 · 3 = 2³ · 3².",
                        "300 = 2 · 2 · 3 · 5 · 5 = 2² · 3 · 5².",
                        "Cancel 2² · 3: (2 · 3) / 5² = 6/25."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 17: Rectangle perimeter (Lesson 69 WP #27)
            (r) => {
                const l = 2.5;
                const w = 1.5;
                const p = (2 * (l + w)).toFixed(1);
                const correct = p + " cm";
                const q = "In rectangle ABCD, the length of AB is " + l + " cm and BC is " + w + " cm. What is the perimeter of this rectangle?";
                const distractors = [
                    (l + w).toFixed(1) + " cm",
                    (parseFloat(p) + 2).toFixed(1) + " cm",
                    (l * w).toFixed(2) + " cm"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Perimeter = 2 × (length + width) = 2 × (" + l + " + " + w + ") = 2 × 4.0 = " + p + " cm."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 18: Rectangle area (Lesson 69 WP #28)
            (r) => {
                const l = 2.5;
                const w = 1.5;
                const a = (l * w).toFixed(2);
                const correct = a + " cm²";
                const q = "In rectangle ABCD, the length of AB is " + l + " cm and BC is " + w + " cm. What is the area of this rectangle?";
                const distractors = [
                    (2 * (l + w)).toFixed(1) + " cm²",
                    (parseFloat(a) + 1).toFixed(2) + " cm²",
                    (l * 2).toFixed(2) + " cm²"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Area = length × width = " + l + " × " + w + " = " + a + " cm²."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            },
            // Category 19: Triangle area from diagonal dividing rectangle (Lesson 69 WP #30)
            (r) => {
                const l = 2.5;
                const w = 1.5;
                const rectArea = l * w; // 3.75
                const triArea = (rectArea / 2).toFixed(3);
                const correct = triArea + " cm²";
                const q = "If diagonal BD were drawn on rectangle ABCD (dimensions " + l + " cm by " + w + " cm) to divide the rectangle into two equal parts, what would be the area of each triangle?";
                const distractors = [
                    rectArea.toFixed(2) + " cm²",
                    (rectArea / 4).toFixed(3) + " cm²",
                    (rectArea - 1).toFixed(2) + " cm²"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Rectangle area = " + l + " × " + w + " = " + rectArea + " cm².",
                        "Diagonal divides the rectangle into 2 equal triangles: " + rectArea + " ÷ 2 = " + triArea + " cm²."
                    ],
                    lessonNum: 69,
                    lessonTitle: "Reducing Fractions Before Multiplying"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

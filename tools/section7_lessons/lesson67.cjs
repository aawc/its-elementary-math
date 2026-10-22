module.exports = `    // Lesson 67: Dividing Mixed Numbers
    67: (rng, qIndex) => {
        const framings = [
            // Category 0: Dividing two mixed numbers (Lesson 67 Concept)
            (r) => {
                const cases = [
                    { m1: "2 2/3", m2: "1 1/3", imp1: "8/3", imp2: "4/3", ans: "2", d: ["1 1/3", "2 1/2", "3"], step: "2 2/3 = 8/3 and 1 1/3 = 4/3. 8/3 ÷ 4/3 = 8/3 × 3/4 = 24/12 = 2." },
                    { m1: "3 1/2", m2: "1 3/4", imp1: "7/2", imp2: "7/4", ans: "2", d: ["1 1/2", "2 1/4", "3"], step: "3 1/2 = 7/2 and 1 3/4 = 7/4. 7/2 ÷ 7/4 = 7/2 × 4/7 = 28/14 = 2." },
                    { m1: "2 1/2", m2: "1 1/4", imp1: "5/2", imp2: "5/4", ans: "2", d: ["1 1/4", "2 1/2", "3/2"], step: "2 1/2 = 5/2 and 1 1/4 = 5/4. 5/2 ÷ 5/4 = 5/2 × 4/5 = 20/10 = 2." },
                    { m1: "1 1/2", m2: "2 2/3", imp1: "3/2", imp2: "8/3", ans: "9/16", d: ["3/4", "8/9", "1/2"], step: "1 1/2 = 3/2 and 2 2/3 = 8/3. 3/2 ÷ 8/3 = 3/2 × 3/8 = 9/16." }
                ];
                const c = cases[randInt(r, 0, cases.length - 1)];
                const q = "Divide: " + c.m1 + " ÷ " + c.m2;
                const s = shuffle(r, [c.ans, ...c.d]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert mixed numbers to improper fractions: " + c.m1 + " = " + c.imp1 + " and " + c.m2 + " = " + c.imp2 + ".",
                        c.step
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 1: Dividing mixed number by whole number (Lesson 67 Concept)
            (r) => {
                const q = "Divide: 3 1/2 ÷ 2";
                const correct = "1 3/4";
                const distractors = ["1 1/2", "1 1/4", "2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "3 1/2 = 7/2.",
                        "7/2 ÷ 2/1 = 7/2 × 1/2 = 7/4 = 1 3/4."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 2: Dividing whole number by mixed number (Lesson 67 Concept)
            (r) => {
                const q = "Divide: 6 ÷ 1 1/2";
                const correct = "4";
                const distractors = ["3", "4 1/2", "9"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 1/2 = 3/2.",
                        "6 ÷ 3/2 = 6/1 × 2/3 = 12/3 = 4."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 3: Dividing mixed number by fraction (Lesson 67 Concept)
            (r) => {
                const q = "Divide: 1 1/2 ÷ 3/4";
                const correct = "2";
                const distractors = ["1 1/8", "1 1/2", "2 1/4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 1/2 = 3/2.",
                        "3/2 ÷ 3/4 = 3/2 × 4/3 = 12/6 = 2."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 4: Parallel and perpendicular lines figure (Lesson 67 WP #1)
            (r) => {
                const q = "A student draws a pair of parallel lines, then draws a second pair of parallel lines perpendicular to the first pair. What kind of quadrilateral is formed by the intersecting pairs of lines?";
                const correct = "Rectangle";
                const distractors = ["Trapezoid", "Rhombus without right angles", "Scalene quadrilateral"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "The intersecting lines form four 90° angles.",
                        "Both pairs of opposite sides are parallel.",
                        "A parallelogram with four right angles is a rectangle."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 5: Quotient when dividend and divisor given (Lesson 67 WP #2)
            (r) => {
                const q = "What is the quotient in lowest terms if the dividend is 12 and the divisor is 18?";
                const correct = "2/3";
                const distractors = ["3/2", "1 1/2", "4/9"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Quotient = dividend ÷ divisor = 12 ÷ 18 = 12/18.",
                        "Reduce by dividing by 6: 12/18 = 2/3."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 6: Global temperature extreme difference (Lesson 67 WP #3)
            (r) => {
                const q = "The highest weather temperature recorded on Earth was 136°F in Africa, and the lowest was −129°F in Antarctica. How many degrees difference is there between these temperatures?";
                const correct = "265°F";
                const distractors = ["7°F", "255°F", "275°F"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Difference = 136 − (−129) = 136 + 129 = 265°F."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 7: Dollar bills end to end (Lesson 67 WP #4)
            (r) => {
                const q = "A dollar bill is about 6 inches long. Placed end to end, about how many feet would 1000 dollar bills reach?";
                const correct = "500 feet";
                const distractors = ["250 feet", "1000 feet", "600 feet"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1000 × 6 inches = 6000 inches.",
                        "6000 inches ÷ 12 inches per foot = 500 feet."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 8: Prime factorization of 45 and 72 to reduce (Lesson 67 WP #5)
            (r) => {
                const q = "Write the prime factorization of both the numerator and denominator of 45/72, then reduce the fraction.";
                const correct = "5/8";
                const distractors = ["9/16", "5/9", "3/8"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "45 = 3 · 3 · 5 = 3² · 5.",
                        "72 = 2 · 2 · 2 · 3 · 3 = 2³ · 3².",
                        "Cancel common factors (3²): 5 / 2³ = 5/8."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 9: Parallel segment in trapezoid (Lesson 67 WP #6)
            (r) => {
                const q = "In quadrilateral QRST, side QR is parallel to side TS. Which segment is parallel to QR?";
                const correct = "Segment TS";
                const distractors = ["Segment RS", "Segment QT", "Segment QS"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "In trapezoid QRST with horizontal bases QR and TS, segment TS is parallel to QR."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 10: Daily savings average (Lesson 67 WP #7)
            (r) => {
                const days = 10;
                const total = [27.50, 34.50, 42.50, 56.50][randInt(r, 0, 3)];
                const avg = (total / days).toFixed(2);
                const correct = "$" + avg;
                const q = "In " + days + " days Juana saved $" + total.toFixed(2) + ". On average, how much did she save per day?";
                const distractors = [
                    "$" + (parseFloat(avg) + 0.50).toFixed(2),
                    "$" + (parseFloat(avg) - 0.50).toFixed(2),
                    "$" + (total / 5).toFixed(2)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide total savings by number of days: $" + total.toFixed(2) + " ÷ " + days + " = $" + avg + " per day."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 11: Fraction equation with mixed number (Lesson 67 WP #8)
            (r) => {
                const q = "Solve for w: (2/5)w = 1 1/2";
                const correct = "3 3/4 (or 15/4)";
                const distractors = ["3/5", "2 1/4", "3 1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 1/2 = 3/2.",
                        "Divide both sides by 2/5: w = 3/2 ÷ 2/5 = 3/2 × 5/2 = 15/4 = 3 3/4."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 12: Proportion missing term (Lesson 67 WP #9)
            (r) => {
                const q = "Solve for n: n/100 = 8/25";
                const correct = "32";
                const distractors = ["24", "40", "16"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply numerator and denominator of 8/25 by 4: (8 × 4)/(25 × 4) = 32/100.",
                        "n = 32."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 13: Segment length subtraction (Lesson 67 PS a)
            (r) => {
                const ac = randInt(r, 55, 75);
                const bc = randInt(r, 20, 32);
                const ab = ac - bc;
                const correct = ab + " mm";
                const q = "In line segment AC with point B between A and C, the length of AC is " + ac + " mm and BC is " + bc + " mm. Find the length of AB.";
                const distractors = [
                    (ab + 4) + " mm",
                    (ab - 4) + " mm",
                    (ac + bc) + " mm"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "AB + BC = AC.",
                        "AB = AC − BC = " + ac + " − " + bc + " = " + ab + " mm."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 14: Complement of an angle (Lesson 67 PS b)
            (r) => {
                const deg = [30, 40, 50, 60, 70][randInt(r, 0, 4)];
                const comp = 90 - deg;
                const correct = comp + "°";
                const q = "The complement of a " + deg + "° angle is an angle that measures how many degrees?";
                const distractors = [
                    (180 - deg) + "°",
                    (comp + 10) + "°",
                    (comp - 10) + "°"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Complementary angles add up to 90°.",
                        "90° − " + deg + "° = " + comp + "°."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 15: Supplement of an angle (Lesson 67 PS c)
            (r) => {
                const deg = [50, 60, 75, 80, 110, 120][randInt(r, 0, 5)];
                const supp = 180 - deg;
                const correct = supp + "°";
                const q = "The supplement of a " + deg + "° angle is an angle that measures how many degrees?";
                const distractors = [
                    (90 - (deg > 90 ? deg - 90 : deg)) + "°",
                    (supp + 15) + "°",
                    (supp - 15) + "°"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Supplementary angles add up to 180°.",
                        "180° − " + deg + "° = " + supp + "°."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 16: Acute supplementary angles concept (Lesson 67 PS d)
            (r) => {
                const q = "If two angles are supplementary, can they both be acute? Why or why not?";
                const correct = "No, because the sum of two acute angles is always less than 180°";
                const distractors = [
                    "Yes, if each measures 45°",
                    "Yes, because acute angles can add to 180°",
                    "No, because both angles must be obtuse"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "An acute angle is less than 90°.",
                        "The sum of two angles that are both less than 90° must be less than 180°.",
                        "Therefore, two acute angles can never be supplementary."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 17: Product of three fractions (Lesson 67 WP)
            (r) => {
                const q = "Evaluate: (1/2) × (2/3) × (3/4)";
                const correct = "1/4";
                const distractors = ["1/2", "3/8", "1/3"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Cancel common factors: 2 in numerator and denominator, 3 in numerator and denominator.",
                        "Remaining product: 1/4."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 18: Mixed number addition equation (Lesson 67 WP)
            (r) => {
                const q = "Solve for m: m + 1 1/8 = 3 3/4";
                const correct = "2 5/8";
                const distractors = ["2 3/8", "2 1/4", "3 1/8"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract 1 1/8 from both sides: m = 3 3/4 − 1 1/8.",
                        "3 3/4 = 3 6/8.",
                        "3 6/8 − 1 1/8 = 2 5/8."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            },
            // Category 19: Decimal operations with parentheses (Lesson 67 WP)
            (r) => {
                const q = "Evaluate: 4.5 − (1.2 + 0.85)";
                const correct = "2.45";
                const distractors = ["2.35", "2.55", "3.15"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Inside parentheses: 1.2 + 0.85 = 2.05.",
                        "Subtract: 4.5 − 2.05 = 2.45."
                    ],
                    lessonNum: 67,
                    lessonTitle: "Dividing Mixed Numbers"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

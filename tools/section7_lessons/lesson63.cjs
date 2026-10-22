module.exports = `    // Lesson 63: Classifying Quadrilaterals
    63: (rng, qIndex) => {
        const framings = [
            // Category 0: Definition of quadrilateral (Lesson 63 PS a)
            (r) => {
                const q = "What is the definition of a quadrilateral?";
                const correct = "A closed geometric figure with four straight sides";
                const distractors = [
                    "A geometric figure with four right angles and equal sides",
                    "A polygon with five straight sides",
                    "A figure with two pairs of perpendicular lines"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The prefix 'quad-' means four and 'lateral' means side. A quadrilateral is any four-sided polygon."],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 1: Parallelogram vs trapezoid (Lesson 63 PS b)
            (r) => {
                const q = "What is the difference between a parallelogram and a trapezoid?";
                const correct = "A parallelogram has two pairs of parallel sides; a trapezoid has only one pair";
                const distractors = [
                    "A parallelogram has only one pair of parallel sides; a trapezoid has two pairs",
                    "A parallelogram must have right angles; a trapezoid never has right angles",
                    "A trapezoid has four equal sides; a parallelogram does not"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "By definition, a parallelogram has 2 pairs of parallel sides.",
                        "A trapezoid has exactly 1 pair of parallel sides."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 2: Rhombus and square relationship (Lesson 63 PS c/d)
            (r) => {
                const q = "Which statement accurately describes a rhombus that is also a square?";
                const correct = "A rhombus whose four angles are all right angles";
                const distractors = [
                    "A rhombus whose opposite sides are not parallel",
                    "A rhombus with sides of four different lengths",
                    "A rhombus that has only acute angles"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A rhombus has four equal sides.",
                        "If its angles are all 90° (right angles), it is a square."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 3: Rectangles and squares verification (Lesson 63 PS e/f)
            (r) => {
                const q = "Which statement is true regarding squares and rectangles?";
                const correct = "All squares are rectangles, but not all rectangles are squares";
                const distractors = [
                    "All rectangles are squares, but not all squares are rectangles",
                    "No squares are rectangles",
                    "A rectangle can never have four right angles"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A rectangle is a parallelogram with four right angles.",
                        "Every square has four right angles and two pairs of parallel sides, so every square is a rectangle.",
                        "However, rectangles do not require all four sides to be equal."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 4: Composite numbers from prime factors (Lesson 63 WP #25)
            (r) => {
                const items = [
                    { n: 12, f: "2 · 2 · 3", d: ["2 · 6", "3 · 4", "2 · 2 · 2"] },
                    { n: 18, f: "2 · 3 · 3", d: ["2 · 9", "3 · 6", "3 · 3 · 3"] },
                    { n: 20, f: "2 · 2 · 5", d: ["4 · 5", "2 · 10", "2 · 3 · 5"] },
                    { n: 24, f: "2 · 2 · 2 · 3", d: ["4 · 6", "3 · 8", "2 · 3 · 4"] }
                ];
                const item = items[randInt(r, 0, items.length - 1)];
                const q = "Show how to form " + item.n + " by multiplying prime numbers:";
                const s = shuffle(r, [item.f, ...item.d]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Find the prime factorization of " + item.n + ": " + item.f + "."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 5: Percent as unreduced fraction and decimal (Lesson 63 WP #26)
            (r) => {
                const pcts = [
                    { p: "75%", f: "75/100", dec: "0.75" },
                    { p: "25%", f: "25/100", dec: "0.25" },
                    { p: "60%", f: "60/100", dec: "0.60" },
                    { p: "40%", f: "40/100", dec: "0.40" }
                ];
                const item = pcts[randInt(r, 0, pcts.length - 1)];
                const correct = item.f + " and " + item.dec;
                const q = "Write " + item.p + " as an unreduced fraction and as a decimal number.";
                const distractors = [
                    item.f + " and " + (parseFloat(item.dec) / 10).toFixed(2),
                    "100/" + item.p.replace('%', '') + " and " + item.dec,
                    item.f + " and " + (parseFloat(item.dec) * 10).toFixed(2)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Percent means out of 100: " + item.p + " = " + item.f + ".",
                        "As a decimal, " + item.f + " = " + item.dec + "."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 6: Reducing products of primes (Lesson 63 WP #27)
            (r) => {
                const q = "Reduce: (2 · 2 · 2 · 3 · 3) / (2 · 2 · 3 · 5 · 5)";
                const correct = "6/25";
                const distractors = ["12/25", "6/50", "3/25"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Cancel common factors in numerator and denominator: cancel two 2s and one 3.",
                        "Remaining numerator: 2 · 3 = 6.",
                        "Remaining denominator: 5 · 5 = 25.",
                        "Result: 6/25."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 7: Missing distance equation (Lesson 63 WP #28)
            (r) => {
                const a = [14.4, 16.6, 18.2, 19.5][randInt(r, 0, 3)];
                const total = 26.2;
                const d = (total - a).toFixed(1);
                const correct = d + " mi";
                const q = "Find the missing distance d in the equation: " + a + " mi + d = " + total + " mi";
                const distractors = [
                    (parseFloat(d) + 1).toFixed(1) + " mi",
                    (parseFloat(d) - 1).toFixed(1) + " mi",
                    (total + a).toFixed(1) + " mi"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract " + a + " from " + total + ": d = " + total + " − " + a + " = " + d + " mi."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 8: High and low temperature difference (Lesson 63 WP #29)
            (r) => {
                const high = randInt(r, 8, 16);
                const low = -randInt(r, 2, 8);
                const diff = high - low;
                const correct = diff + "°C";
                const q = "On Tuesday the high temperature was " + high + "°C and the low was " + low + "°C. What was the difference between the high and low temperatures?";
                const distractors = [
                    (high + low) + "°C",
                    (diff - 2) + "°C",
                    (diff + 2) + "°C"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract the low from the high: " + high + " − (" + low + ") = " + high + " + " + (-low) + " = " + diff + "°C."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 9: Interior angles sum of a quadrilateral (Lesson 63 Concept)
            (r) => {
                const q = "What is the sum of the interior angle measures of any quadrilateral?";
                const correct = "360°";
                const distractors = ["180°", "540°", "720°"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Any quadrilateral can be divided into two triangles by a diagonal.",
                        "2 × 180° = 360°."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 10: Trapezoid property identification (Lesson 63 Concept)
            (r) => {
                const q = "A quadrilateral that has exactly one pair of parallel sides is called a:";
                const correct = "Trapezoid";
                const distractors = ["Parallelogram", "Rhombus", "Rectangle"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A trapezoid is defined as a quadrilateral with exactly one pair of parallel sides."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 11: Parallelogram opposite sides property (Lesson 63 Concept)
            (r) => {
                const q = "In any parallelogram, opposite sides are always:";
                const correct = "Both parallel and equal in length";
                const distractors = [
                    "Perpendicular and equal in length",
                    "Parallel but of different lengths",
                    "Neither parallel nor equal"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "By geometric theorem, opposite sides of a parallelogram are both parallel and congruent (equal in length)."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 12: Rhombus classification (Lesson 63 Concept)
            (r) => {
                const q = "A parallelogram with four sides of equal length is called a:";
                const correct = "Rhombus";
                const distractors = ["Trapezoid", "Kite", "Scalene quadrilateral"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "An equilateral parallelogram is called a rhombus."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 13: Rectangle classification (Lesson 63 Concept)
            (r) => {
                const q = "A parallelogram with four right angles is called a:";
                const correct = "Rectangle";
                const distractors = ["Rhombus", "Trapezoid", "Parallelogram without right angles"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "An equiangular parallelogram has four 90° angles and is called a rectangle."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 14: Square classification (Lesson 63 Concept)
            (r) => {
                const q = "A quadrilateral with four equal sides and four right angles is called a:";
                const correct = "Square";
                const distractors = ["Trapezoid", "Rhombus without right angles", "Rectangle with unequal sides"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A regular quadrilateral has equal sides and equal angles (four 90° angles), which is a square."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 15: Multiplying mixed numbers as improper fractions (Lesson 63 WP #24)
            (r) => {
                const q = "Write 1 1/2 and 2 1/2 as improper fractions, and multiply them. What is the simplified product?";
                const correct = "3 3/4";
                const distractors = ["2 1/4", "3 1/2", "4 1/4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 1/2 = 3/2 and 2 1/2 = 5/2.",
                        "3/2 × 5/2 = 15/4 = 3 3/4."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 16: Decimal multiplication (Lesson 63 WP #13)
            (r) => {
                const q = "Multiply: 3.6 × 0.45";
                const correct = "1.62";
                const distractors = ["16.2", "0.162", "1.80"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "36 × 45 = 1620.",
                        "Count 3 decimal places: 1.620 = 1.62."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 17: Decimal division (Lesson 63 WP #14)
            (r) => {
                const q = "Divide: 1 ÷ 0.25";
                const correct = "4";
                const distractors = ["0.25", "2.5", "40"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 ÷ 0.25 = 100 ÷ 25 = 4."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 18: Rectangular box face count (Lesson 63 WP #21)
            (r) => {
                const q = "A closed cardboard shipping box has the shape of a rectangular prism. How many faces does it have?";
                const correct = "6 faces";
                const distractors = ["4 faces", "8 faces", "12 faces"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A rectangular prism has top, bottom, front, back, left, and right faces: 6 faces total."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            },
            // Category 19: Regular hexagon perimeter from side (Lesson 63 WP #5)
            (r) => {
                const side = randInt(r, 6, 11);
                const p = side * 6;
                const correct = p + " inches";
                const q = "A regular hexagon has sides that are each " + side + " inches long. What is its perimeter?";
                const distractors = [
                    (side * 4) + " inches",
                    (side * 8) + " inches",
                    (p + 6) + " inches"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A regular hexagon has 6 equal sides.",
                        "Perimeter = 6 × " + side + " = " + p + " inches."
                    ],
                    lessonNum: 63,
                    lessonTitle: "Classifying Quadrilaterals"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

module.exports = `    // Lesson 68: Lengths of Segments • Complementary and Supplementary Angles
    68: (rng, qIndex) => {
        const framings = [
            // Category 0: Segment length by subtraction (Lesson 68 PS a / WP)
            (r) => {
                const ac = randInt(r, 55, 75);
                const bc = randInt(r, 20, 32);
                const ab = ac - bc;
                const correct = ab + " mm";
                const q = "Points A, B, and C lie on a line segment in that order. The length of AC is " + ac + " mm and BC is " + bc + " mm. Find the length of AB.";
                const distractors = [
                    (ab + 5) + " mm",
                    (ab - 5) + " mm",
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
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 1: Segment length by addition (Lesson 68 WP #22)
            (r) => {
                const wx = randInt(r, 45, 65);
                const xy = randInt(r, 25, 45);
                const wy = wx + xy;
                const correct = wy + " mm";
                const q = "Points W, X, and Y lie on a line segment in that order. The length of WX is " + wx + " mm and the length of XY is " + xy + " mm. What is the length of WY?";
                const distractors = [
                    (wy + 5) + " mm",
                    (wy - 5) + " mm",
                    (wx - xy) + " mm"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "WY = WX + XY = " + wx + " + " + xy + " = " + wy + " mm."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 2: Complement of an angle (Lesson 68 PS b)
            (r) => {
                const deg = [25, 35, 45, 55, 65][randInt(r, 0, 4)];
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
                        "Two angles are complementary if their sum is 90°.",
                        "90° − " + deg + "° = " + comp + "°."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 3: Supplement of an angle (Lesson 68 PS c)
            (r) => {
                const deg = [45, 65, 75, 85, 105, 115][randInt(r, 0, 5)];
                const supp = 180 - deg;
                const correct = supp + "°";
                const q = "The supplement of a " + deg + "° angle is an angle that measures how many degrees?";
                const distractors = [
                    (90 - (deg < 90 ? deg : 0)) + "°",
                    (supp + 10) + "°",
                    (supp - 10) + "°"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Two angles are supplementary if their sum is 180°.",
                        "180° − " + deg + "° = " + supp + "°."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 4: Definition of complementary and supplementary (Lesson 68 Concept)
            (r) => {
                const q = "Two angles whose measures add up to 90° are ________, while two angles whose measures add up to 180° are ________.";
                const correct = "complementary; supplementary";
                const distractors = [
                    "supplementary; complementary",
                    "congruent; parallel",
                    "acute; obtuse"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Complementary angles have a sum of 90°.",
                        "Supplementary angles have a sum of 180°."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 5: Dividing mixed numbers (Lesson 68 WP #14)
            (r) => {
                const q = "Evaluate: 2 1/2 ÷ 1 1/4";
                const correct = "2";
                const distractors = ["1 1/2", "2 1/4", "3/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "2 1/2 = 5/2 and 1 1/4 = 5/4.",
                        "5/2 ÷ 5/4 = 5/2 × 4/5 = 20/10 = 2."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 6: Multiplying mixed numbers (Lesson 68 WP #15)
            (r) => {
                const q = "Evaluate: 2 1/3 × 1 1/2";
                const correct = "3 1/2";
                const distractors = ["2 1/6", "3 1/3", "4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "2 1/3 = 7/3 and 1 1/2 = 3/2.",
                        "7/3 × 3/2 = 21/6 = 7/2 = 3 1/2."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 7: Decimal division (Lesson 68 WP #16)
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
                        "Multiply both numbers by 100: 240 ÷ 8 = 30."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 8: Perimeter of square with decimal side (Lesson 68 WP #17a)
            (r) => {
                const side = [1.5, 2.5, 3.5, 4.5][randInt(r, 0, 3)];
                const perim = (side * 4).toFixed(1);
                const correct = perim + " m";
                const q = "What is the perimeter of a square with a side length of " + side + " meters?";
                const distractors = [
                    (side * 2).toFixed(1) + " m",
                    (parseFloat(perim) + 2).toFixed(1) + " m",
                    (side * side).toFixed(2) + " m"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Perimeter = 4 × side = 4 × " + side + " = " + perim + " m."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 9: Area of square with decimal side (Lesson 68 WP #17b)
            (r) => {
                const side = [1.5, 2.5, 3.5][randInt(r, 0, 2)];
                const area = (side * side).toFixed(2);
                const correct = area + " m²";
                const q = "What is the area of a square with a side length of " + side + " meters?";
                const distractors = [
                    (side * 4).toFixed(1) + " m²",
                    (parseFloat(area) + 1).toFixed(2) + " m²",
                    (side * 2).toFixed(2) + " m²"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Area = side × side = " + side + " × " + side + " = " + area + " m²."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 10: Definition of composite number (Lesson 68 WP #18)
            (r) => {
                const q = "How can you determine whether a counting number is a composite number?";
                const correct = "It is greater than 1 and has more than two distinct factors";
                const distractors = [
                    "It has exactly two factors",
                    "It is an odd number",
                    "It cannot be divided by 2"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A prime number has exactly two factors (1 and itself).",
                        "A composite number is a whole number greater than 1 with more than two factors."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 11: Factor tree for 250 (Lesson 68 WP #19)
            (r) => {
                const q = "Make a factor tree to find the prime factorization of 250.";
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
                        "250 = 10 × 25.",
                        "10 = 2 × 5 and 25 = 5 × 5.",
                        "Prime factors: 2 · 5 · 5 · 5 = 2 · 5³."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 12: Octagon stop sign (Lesson 68 WP #20)
            (r) => {
                const q = "A standard traffic stop sign has the shape of an eight-sided polygon. What is the name of an eight-sided polygon?";
                const correct = "Octagon";
                const distractors = ["Hexagon", "Heptagon", "Decagon"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "An eight-sided polygon is called an octagon."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 13: Fraction of girls in class (Lesson 68 WP #21a)
            (r) => {
                const q = "There were 15 boys and 12 girls in a classroom. What fraction of the class was made up of girls?";
                const correct = "4/9";
                const distractors = ["5/9", "4/5", "12/15"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Total students = 15 + 12 = 27.",
                        "Fraction of girls = 12/27 = 4/9."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 14: Ratio of boys to girls (Lesson 68 WP #21b)
            (r) => {
                const q = "There were 15 boys and 12 girls in a classroom. What was the ratio of boys to girls in simplest form?";
                const correct = "5 to 4";
                const distractors = ["4 to 5", "5 to 9", "3 to 4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Ratio = 15/12.",
                        "Divide by 3: 5/4 = 5 to 4."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 15: Temperature rise from negative (Lesson 68 WP)
            (r) => {
                const low = randInt(r, 4, 10);
                const high = randInt(r, 12, 22);
                const rise = high + low;
                const correct = rise + "°F";
                const q = "At 6 a.m. the temperature was −" + low + "°F. At noon the temperature was " + high + "°F. From 6 a.m. to noon the temperature rose how many degrees?";
                const distractors = [
                    (high - low) + "°F",
                    (rise + 4) + "°F",
                    (rise - 4) + "°F"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract starting temp from ending temp: " + high + " − (−" + low + ") = " + high + " + " + low + " = " + rise + "°F."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 16: Centimeters to millimeters (Lesson 68 WP #25)
            (r) => {
                const cm = [3.5, 4.5, 5.5, 6.2][randInt(r, 0, 3)];
                const mm = Math.round(cm * 10);
                const correct = mm + " mm";
                const q = "A line segment is " + cm + " centimeters long. How many millimeters long is the line segment?";
                const distractors = [
                    (cm * 100) + " mm",
                    cm + " mm",
                    (mm + 10) + " mm"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 cm = 10 mm.",
                        cm + " × 10 = " + mm + " mm."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 17: Supplementary angles linear pair (Lesson 68 Concept)
            (r) => {
                const a = [105, 110, 115, 120, 125][randInt(r, 0, 4)];
                const b = 180 - a;
                const correct = b + "°";
                const q = "Two adjacent angles form a linear pair along a straight line. If one angle measures " + a + "°, what is the measure of the other angle?";
                const distractors = [
                    (90 - (a > 90 ? a - 90 : a)) + "°",
                    (b + 10) + "°",
                    (b - 10) + "°"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Angles on a straight line add up to 180°.",
                        "180° − " + a + "° = " + b + "°."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 18: Angle difference between supplement and complement (Lesson 68 Concept)
            (r) => {
                const q = "For any acute angle, how many degrees greater is its supplement than its complement?";
                const correct = "90°";
                const distractors = ["45°", "180°", "60°"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Supplement = 180° − x.",
                        "Complement = 90° − x.",
                        "(180° − x) − (90° − x) = 90°."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            },
            // Category 19: Dividing mixed number by whole number (Lesson 68 WP)
            (r) => {
                const q = "Divide: 4 1/2 ÷ 3";
                const correct = "1 1/2";
                const distractors = ["1 1/3", "2 1/2", "1 1/4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "4 1/2 = 9/2.",
                        "9/2 ÷ 3/1 = 9/2 × 1/3 = 9/6 = 3/2 = 1 1/2."
                    ],
                    lessonNum: 68,
                    lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

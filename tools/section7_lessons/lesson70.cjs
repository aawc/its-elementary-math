module.exports = `    // Lesson 70: Parallelograms
    70: (rng, qIndex) => {
        const framings = [
            // Category 0: Parallelogram opposite angle (Lesson 70 PS a)
            (r) => {
                const q = "In parallelogram QRST, which angle is opposite ∠Q?";
                const correct = "∠S";
                const distractors = ["∠R", "∠T", "∠Q itself"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "In parallelogram QRST, the vertices are ordered consecutively Q, R, S, T.",
                        "Opposite vertices are non-adjacent: the angle opposite ∠Q is ∠S."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 1: Parallelogram supplementary angles (Lesson 70 PS c)
            (r) => {
                const q = "In parallelogram QRST, which two angles are consecutive and therefore supplements of ∠T?";
                const correct = "∠Q and ∠S";
                const distractors = ["∠R and ∠S", "∠Q and ∠R", "Only ∠R"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Consecutive angles in a parallelogram are supplementary.",
                        "The angles adjacent to ∠T are ∠Q and ∠S."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 2: Parallelogram angle calculation (Lesson 70 PS d)
            (r) => {
                const deg = [100, 110, 115, 120, 125, 75, 80][randInt(r, 0, 6)];
                const supp = 180 - deg;
                const correct = supp + "°";
                const q = "In parallelogram QRST, if the measure of ∠R is " + deg + "°, what is the measure of consecutive angle ∠Q?";
                const distractors = [
                    deg + "°",
                    "90°",
                    (supp + 15) + "°"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Consecutive angles in a parallelogram are supplementary (sum = 180°).",
                        "Measure of ∠Q = 180° − " + deg + "° = " + supp + "°."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 3: Parallelogram area (Lesson 70 PS e)
            (r) => {
                const b = randInt(r, 6, 12);
                const h = randInt(r, 4, 8);
                const area = b * h;
                const correct = area + " sq. in.";
                const q = "Calculate the area of a parallelogram with a base of " + b + " inches and a perpendicular height of " + h + " inches.";
                const distractors = [
                    (2 * (b + h)) + " sq. in.",
                    (area + 6) + " sq. in.",
                    (area / 2) + " sq. in."
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Area of a parallelogram = base × height.",
                        "Area = " + b + " × " + h + " = " + area + " sq. in."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 4: Parallelogram perimeter (Lesson 70 PS f)
            (r) => {
                const a = randInt(r, 8, 14);
                const b = randInt(r, 5, a - 2);
                const p = 2 * (a + b);
                const correct = p + " inches";
                const q = "Calculate the perimeter of a parallelogram whose adjacent sides measure " + a + " inches and " + b + " inches.";
                const distractors = [
                    (a * b) + " inches",
                    (a + b) + " inches",
                    (p + 4) + " inches"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Perimeter = sum of all 4 sides = 2 × (" + a + " + " + b + ") = " + p + " inches."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 5: Height in two positions (Lesson 70 PS g)
            (r) => {
                const q = "A parallelogram has an area of 72 cm². If one of its bases is 9 cm, what is the perpendicular height to that base?";
                const correct = "8 cm";
                const distractors = ["6 cm", "9 cm", "12 cm"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Area = base × height.",
                        "72 = 9 × height.",
                        "Height = 72 ÷ 9 = 8 cm."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 6: Least common multiple (Lesson 70 WP #1)
            (r) => {
                const pairs = [
                    { a: 6, b: 10, lcm: 30 },
                    { a: 4, b: 6, lcm: 12 },
                    { a: 6, b: 8, lcm: 24 },
                    { a: 8, b: 10, lcm: 40 }
                ];
                const item = pairs[randInt(r, 0, pairs.length - 1)];
                const correct = "" + item.lcm;
                const q = "What is the least common multiple of " + item.a + " and " + item.b + "?";
                const distractors = [
                    "" + (item.a * item.b),
                    "" + (item.lcm / 2),
                    "" + (item.lcm + item.a)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiples of " + item.a + ": " + item.a + ", " + (item.a * 2) + ", " + (item.a * 3) + ", ...",
                        "Multiples of " + item.b + ": " + item.b + ", " + (item.b * 2) + ", ...",
                        "The smallest common multiple is " + item.lcm + "."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 7: Elevation difference (Lesson 70 WP #2)
            (r) => {
                const q = "The highest point on land is Mt. Everest at 29,035 feet above sea level. The lowest point on land is the Dead Sea at 1371 feet below sea level. What is the difference in elevation between these two points?";
                const correct = "30,406 feet";
                const distractors = ["27,664 feet", "28,664 feet", "31,406 feet"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Difference = 29,035 − (−1371) = 29,035 + 1371 = 30,406 feet."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 8: Movie duration elapsed time (Lesson 70 WP #3)
            (r) => {
                const q = "A movie lasted 105 minutes. If the movie started at 1:15 p.m., at what time did it end?";
                const correct = "3:00 p.m.";
                const distractors = ["2:45 p.m.", "3:15 p.m.", "2:50 p.m."];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "105 minutes = 1 hour and 45 minutes.",
                        "1:15 p.m. + 1 hour = 2:15 p.m.",
                        "2:15 p.m. + 45 minutes = 3:00 p.m."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 9: Reduce before multiplying (Lesson 70 WP #4)
            (r) => {
                const q = "Reduce before multiplying: 3/8 × 4/9";
                const correct = "1/6";
                const distractors = ["1/12", "1/4", "3/18"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide 3 and 9 by 3 (giving 1 and 3).",
                        "Divide 4 and 8 by 4 (giving 1 and 2).",
                        "Multiply: (1 × 1)/(2 × 3) = 1/6."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 10: Square of a decimal (Lesson 70 WP #11)
            (r) => {
                const nums = [2.5, 3.5, 4.5];
                const n = nums[randInt(r, 0, nums.length - 1)];
                const sq = (n * n).toFixed(2);
                const q = "Calculate: (" + n + ")²";
                const distractors = [
                    (n * 2).toFixed(2),
                    (parseFloat(sq) + 1).toFixed(2),
                    (parseFloat(sq) - 1).toFixed(2)
                ];
                const s = shuffle(r, [sq, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        n + " × " + n + " = " + sq + "."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 11: Decimal expression evaluation (Lesson 70 WP #13)
            (r) => {
                const q = "Evaluate: (1 + 0.6) ÷ (1 − 0.6)";
                const correct = "4";
                const distractors = ["2.5", "1.6", "0.4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 + 0.6 = 1.6.",
                        "1 − 0.6 = 0.4.",
                        "1.6 ÷ 0.4 = 16 ÷ 4 = 4."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 12: Sales tax and change (Lesson 70 WP #14)
            (r) => {
                const q = "Quan ordered a $4.50 bowl of soup. The sales tax rate was 7.5% ($0.34 tax). He paid with a $20 bill. How much change should Quan get back?";
                const correct = "$15.16";
                const distractors = ["$15.50", "$14.84", "$15.84"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Total price including tax: $4.50 + $0.34 = $4.84.",
                        "Change = $20.00 − $4.84 = $15.16."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 13: Coordinate plane origin (Lesson 70 WP #15)
            (r) => {
                const q = "What is the name for the point on the coordinate plane that has the coordinates (0, 0)?";
                const correct = "The origin";
                const distractors = ["The vertex", "The axis", "The intercept"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "The point (0, 0) where the x-axis and y-axis intersect is called the origin."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 14: Coordinate plane quadrant (Lesson 70 WP #16)
            (r) => {
                const q = "In which quadrant of the coordinate plane is the point (−3, 3) located?";
                const correct = "Quadrant II";
                const distractors = ["Quadrant I", "Quadrant III", "Quadrant IV"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "For (−3, 3), the x-coordinate is negative and the y-coordinate is positive.",
                        "Points with negative x and positive y lie in Quadrant II."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 15: Decimal linear equation (Lesson 70 WP #17)
            (r) => {
                const q = "Solve for f: 1.2f = 120";
                const correct = "100";
                const distractors = ["10", "1000", "12"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide both sides by 1.2: f = 120 ÷ 1.2.",
                        "1200 ÷ 12 = 100."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 16: Prime factorization to reduce 64/224 (Lesson 70 WP #19)
            (r) => {
                const q = "Write the prime factorizations of 64 and 224, then reduce 64/224.";
                const correct = "2/7";
                const distractors = ["4/7", "1/7", "8/28"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "64 = 2⁶ = 2 · 2 · 2 · 2 · 2 · 2.",
                        "224 = 32 × 7 = 2⁵ · 7.",
                        "Cancel 2⁵: 2 / 7 = 2/7."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 17: Square area from perimeter (Lesson 70 WP #20)
            (r) => {
                const perim = 6.4;
                const side = (perim / 4); // 1.6
                const area = (side * side).toFixed(2); // 2.56
                const correct = area + " m²";
                const q = "The perimeter of a square is " + perim + " meters. What is its area?";
                const distractors = [
                    (side * 2).toFixed(2) + " m²",
                    (parseFloat(area) + 1).toFixed(2) + " m²",
                    (perim / 2).toFixed(2) + " m²"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Side length = " + perim + " ÷ 4 = " + side + " m.",
                        "Area = side × side = " + side + " × " + side + " = " + area + " m²."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 18: Circumference of circle (Lesson 70 WP #22)
            (r) => {
                const radius = [1, 2, 5][randInt(r, 0, 2)];
                const circ = (2 * 3.14 * radius).toFixed(2);
                const correct = circ + " cm";
                const q = "If the radius of a circle is " + radius + " cm, what is the circumference of the circle? (Use 3.14 for π).";
                const distractors = [
                    (3.14 * radius * radius).toFixed(2) + " cm",
                    (parseFloat(circ) + 2).toFixed(2) + " cm",
                    (parseFloat(circ) - 2).toFixed(2) + " cm"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Circumference = 2 × π × radius = 2 × 3.14 × " + radius + " = " + circ + " cm."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            },
            // Category 19: Degrees above freezing (Lesson 70 WP #24)
            (r) => {
                const temp = randInt(r, 62, 78);
                const diff = temp - 32;
                const correct = diff + "°F";
                const q = "Water freezes at 32° Fahrenheit. A thermometer reads " + temp + "° Fahrenheit. How many degrees Fahrenheit is this above the freezing point of water?";
                const distractors = [
                    (diff + 10) + "°F",
                    (diff - 10) + "°F",
                    (temp - 30) + "°F"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        temp + "°F − 32°F = " + diff + "°F above freezing."
                    ],
                    lessonNum: 70,
                    lessonTitle: "Parallelograms"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

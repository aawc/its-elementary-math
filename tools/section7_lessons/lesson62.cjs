module.exports = `    // Lesson 62: Subtracting Mixed Numbers with Regrouping, Part 2
    62: (rng, qIndex) => {
        const framings = [
            // Category 0: Subtracting mixed numbers with regrouping (Lesson 62 Concept / #6)
            (r) => {
                const w1 = randInt(r, 4, 7);
                const w2 = randInt(r, 1, w1 - 2);
                const wholeDiff = w1 - 1 - w2;
                const correct = wholeDiff + " 1/3";
                const q = "Simplify: " + w1 + " 1/6 − " + w2 + " 5/6";
                const distractors = [
                    (w1 - w2) + " 4/6",
                    wholeDiff + " 2/3",
                    (wholeDiff + 1) + " 1/3"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Regroup " + w1 + " 1/6 as " + (w1 - 1) + " 7/6.",
                        "Subtract: " + (w1 - 1) + " 7/6 − " + w2 + " 5/6 = " + wholeDiff + " 2/6.",
                        "Reduce: " + wholeDiff + " 2/6 = " + correct + "."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 1: Sum divided by difference (Lesson 62 #1)
            (r) => {
                const pairs = [
                    { a: 1.3, b: 1.2, sum: "2.5", diff: "0.1", quot: "25" },
                    { a: 1.6, b: 1.4, sum: "3.0", diff: "0.2", quot: "15" },
                    { a: 2.3, b: 2.1, sum: "4.4", diff: "0.2", quot: "22" },
                    { a: 1.7, b: 1.3, sum: "3.0", diff: "0.4", quot: "7.5" }
                ];
                const p = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "When the sum of " + p.a + " and " + p.b + " is divided by the difference of " + p.a + " and " + p.b + ", what is the quotient?";
                const distractors = [
                    "" + (parseFloat(p.quot) + 5),
                    "" + (parseFloat(p.quot) - 5),
                    "" + (parseFloat(p.quot) * 2)
                ];
                const s = shuffle(r, [p.quot, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Find the sum: " + p.a + " + " + p.b + " = " + p.sum + ".",
                        "Find the difference: " + p.a + " − " + p.b + " = " + p.diff + ".",
                        "Divide: " + p.sum + " ÷ " + p.diff + " = " + p.quot + "."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 2: Historical lifespan word problem (Lesson 62 #2)
            (r) => {
                const bYear = randInt(r, 1540, 1590);
                const age = randInt(r, 48, 72);
                const dYear = bYear + age;
                const correct = age + " years";
                const q = "A famous historical playwright was born in " + bYear + " and died in " + dYear + ". How many years did he live?";
                const distractors = [
                    (age - 2) + " years",
                    (age + 2) + " years",
                    (age + 10) + " years"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract the birth year from the death year: " + dYear + " − " + bYear + " = " + age + " years."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 3: Field goal yards to feet (Lesson 62 #3)
            (r) => {
                const names = ["Duane", "Marcus", "Tyler", "Brandon"];
                const name = names[randInt(r, 0, names.length - 1)];
                const yards = randInt(r, 35, 52);
                const feet = yards * 3;
                const correct = feet + " feet";
                const q = name + " kicked a " + yards + "-yard field goal. How many feet is " + yards + " yards?";
                const distractors = [
                    (yards * 2) + " feet",
                    (feet + 6) + " feet",
                    (feet - 6) + " feet"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "There are 3 feet in one yard.",
                        yards + " × 3 = " + feet + " feet."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 4: Regular quadrilateral explanation (Lesson 62 #4)
            (r) => {
                const q = "Why is a square considered a regular quadrilateral?";
                const correct = "All four sides are equal in length and all four angles are equal in measure";
                const distractors = [
                    "It has four right angles but unequal sides",
                    "It has two pairs of parallel sides only",
                    "Its diagonals are parallel to its sides"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A polygon is regular if all sides are congruent and all angles are congruent.",
                        "A square has 4 equal sides and 4 equal 90° angles."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 5: Regular hexagon side from perimeter (Lesson 62 #5)
            (r) => {
                const side = randInt(r, 5, 12);
                const p = side * 6;
                const correct = side + " inches";
                const q = "A regular hexagon has a perimeter of " + p + " inches. How long is each side?";
                const distractors = [
                    (side - 1) + " inches",
                    (side + 2) + " inches",
                    (p / 4) + " inches"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A regular hexagon has 6 equal sides.",
                        p + " ÷ 6 = " + side + " inches per side."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 6: Whole number minus mixed number (Lesson 62 #8)
            (r) => {
                const whole = randInt(r, 6, 10);
                const subW = randInt(r, 2, whole - 3);
                const remW = whole - 1 - subW;
                const correct = remW + " 1/4";
                const q = "Simplify: " + whole + " − " + subW + " 3/4";
                const distractors = [
                    (whole - subW) + " 3/4",
                    remW + " 3/4",
                    (remW + 1) + " 1/4"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Regroup " + whole + " as " + (whole - 1) + " 4/4.",
                        (whole - 1) + " 4/4 − " + subW + " 3/4 = " + correct + "."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 7: Mixed number subtraction with denominator 8 (Lesson 62 #7)
            (r) => {
                const w1 = randInt(r, 5, 8);
                const w2 = randInt(r, 2, w1 - 2);
                const remW = w1 - 1 - w2;
                const correct = remW + " 1/2";
                const q = "Subtract the mixed numbers: " + w1 + " 1/8 − " + w2 + " 5/8";
                const distractors = [
                    (w1 - w2) + " 4/8",
                    remW + " 3/8",
                    (remW + 1) + " 1/2"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Regroup " + w1 + " 1/8 as " + (w1 - 1) + " 9/8.",
                        (w1 - 1) + " 9/8 − " + w2 + " 5/8 = " + remW + " 4/8.",
                        "Reduce: " + remW + " 4/8 = " + correct + "."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 8: Adding three mixed numbers (Lesson 62 #9)
            (r) => {
                const a = randInt(r, 2, 4);
                const b = randInt(r, 1, 3);
                const c = randInt(r, 1, 2);
                const sumWhole = a + b + c + 1;
                const correct = sumWhole + " 1/2";
                const q = "Simplify: " + a + " 1/4 + " + b + " 3/4 + " + c + " 1/2";
                const distractors = [
                    sumWhole + " 1/4",
                    (sumWhole - 1) + " 1/2",
                    (sumWhole + 1) + " 1/2"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Add " + a + " 1/4 + " + b + " 3/4 = " + (a + b + 1) + ".",
                        "Add " + (a + b + 1) + " + " + c + " 1/2 = " + correct + "."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 9: Decimal operation comparison (Lesson 62 #12)
            (r) => {
                const d = [0.3, 0.4, 0.5][randInt(r, 0, 2)];
                const prod = (2 * d).toFixed(1);
                const sum = (2 + d).toFixed(1);
                const q = "Compare: 2 × " + d + " O 2 + " + d;
                const correct = "<";
                const distractors = [">", "=", "Cannot be determined"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "2 × " + d + " = " + prod + ".",
                        "2 + " + d + " = " + sum + ".",
                        "Since " + prod + " < " + sum + ", the answer is <."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 10: Multi-digit decimal multiplication (Lesson 62 #13)
            (r) => {
                const a = [3.6, 4.8, 5.4][randInt(r, 0, 2)];
                const b = [0.25, 0.35, 0.45][randInt(r, 0, 2)];
                const prod = (a * b).toFixed(2);
                const q = "Multiply: " + a + " × " + b;
                const distractors = [
                    (a * b * 10).toFixed(2),
                    (a * b + 0.2).toFixed(2),
                    (a * b - 0.2).toFixed(2)
                ];
                const s = shuffle(r, [prod, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply numbers ignoring decimals: " + Math.round(a * 10) + " × " + Math.round(b * 100) + " = " + Math.round(a * b * 1000) + ".",
                        "Place decimal point 3 digits from right: " + prod + "."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 11: Whole number divided by decimal (Lesson 62 #14)
            (r) => {
                const pairs = [
                    { num: 1, den: 0.4, ans: "2.5" },
                    { num: 1, den: 0.5, ans: "2" },
                    { num: 1, den: 0.25, ans: "4" },
                    { num: 2, den: 0.4, ans: "5" }
                ];
                const p = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Divide: " + p.num + " ÷ " + p.den;
                const distractors = [
                    "" + (parseFloat(p.ans) + 1),
                    "" + (parseFloat(p.ans) - 0.5),
                    "" + (parseFloat(p.ans) * 2)
                ];
                const s = shuffle(r, [p.ans, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply dividend and divisor to remove decimals.",
                        p.num + " ÷ " + p.den + " = " + p.ans + "."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 12: Purchasing pencils unit cost (Lesson 62 #15)
            (r) => {
                const count = randInt(r, 25, 45);
                const costEach = 0.12;
                const total = (count * costEach).toFixed(2);
                const correct = "" + count;
                const q = "How many $0.12 pencils can Mr. Velazquez buy for $" + total + "?";
                const distractors = [
                    "" + (count - 5),
                    "" + (count + 5),
                    "" + (count + 10)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide total money by cost per pencil: $" + total + " ÷ $0.12 = " + count + "."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 13: Estimation product to nearest hundredth (Lesson 62 #16)
            (r) => {
                const a = 0.33;
                const b = 0.38;
                const exact = a * b; // 0.1254
                const correct = "0.13";
                const q = "Round the product of 0.33 and 0.38 to the nearest hundredth.";
                const distractors = ["0.12", "0.14", "0.15"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Calculate product: 0.33 × 0.38 = 0.1254.",
                        "Rounding 0.1254 to the nearest hundredth gives 0.13."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 14: Rectangle area with fraction dimensions (Lesson 62 #17)
            (r) => {
                const q = "Multiply the length by the width to find the area of a rectangle with length 3/4 in. and width 1/2 in.";
                const correct = "3/8 sq. in.";
                const distractors = ["3/4 sq. in.", "1/4 sq. in.", "5/8 sq. in."];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply length × width: 3/4 × 1/2 = 3/8 sq. in."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 15: Parallelogram classification (Lesson 62 #18)
            (r) => {
                const q = "Is every rectangle a parallelogram?";
                const correct = "Yes, because both pairs of opposite sides are parallel";
                const distractors = [
                    "No, because a parallelogram cannot have 90° angles",
                    "No, because all sides of a parallelogram must be equal",
                    "Only if all four sides are equal"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "By definition, a parallelogram is a quadrilateral with two pairs of parallel sides.",
                        "Since every rectangle has two pairs of parallel sides, every rectangle is a parallelogram."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 16: Twelfth prime number (Lesson 62 #19)
            (r) => {
                const q = "What is the twelfth prime number?";
                const correct = "37";
                const distractors = ["31", "39", "41"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "List the primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37.",
                        "The 12th prime number is 37."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 17: Square perimeter from area (Lesson 62 #20)
            (r) => {
                const squares = [
                    { a: 9, s: 3, p: 12 },
                    { a: 16, s: 4, p: 16 },
                    { a: 25, s: 5, p: 20 },
                    { a: 36, s: 6, p: 24 },
                    { a: 49, s: 7, p: 28 }
                ];
                const item = squares[randInt(r, 0, squares.length - 1)];
                const correct = item.p + " cm";
                const q = "The area of a square is " + item.a + " cm². What is the perimeter of the square?";
                const distractors = [
                    (item.s * 2) + " cm",
                    (item.p + 4) + " cm",
                    (item.a) + " cm"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Side length is √" + item.a + " = " + item.s + " cm.",
                        "Perimeter = 4 × " + item.s + " = " + item.p + " cm."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 18: Cube surface area (Lesson 62 #22)
            (r) => {
                const edge = randInt(r, 4, 10);
                const faceArea = edge * edge;
                const totalArea = 6 * faceArea;
                const correct = totalArea + " sq. in.";
                const q = "If a cube has edges " + edge + " inches long, what is the total surface area of the cube?";
                const distractors = [
                    (faceArea) + " sq. in.",
                    (4 * faceArea) + " sq. in.",
                    (edge * edge * edge) + " sq. in."
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Area of each square face: " + edge + " × " + edge + " = " + faceArea + " sq. in.",
                        "A cube has 6 faces: 6 × " + faceArea + " = " + totalArea + " sq. in."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            },
            // Category 19: Meters to centimeters (Lesson 62 #23)
            (r) => {
                const meters = [1.5, 2.5, 3.4, 4.5, 5.2][randInt(r, 0, 4)];
                const cm = Math.round(meters * 100);
                const correct = cm + " cm";
                const q = "There are 100 centimeters in a meter. How many centimeters equal " + meters + " meters?";
                const distractors = [
                    (meters * 10) + " cm",
                    (cm + 50) + " cm",
                    (cm - 50) + " cm"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply meters by 100: " + meters + " × 100 = " + cm + " cm."
                    ],
                    lessonNum: 62,
                    lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

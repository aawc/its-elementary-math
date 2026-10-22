module.exports = `    // Lesson 65: Multiplying Mixed Numbers
    65: (rng, qIndex) => {
        const framings = [
            // Category 0: Multiplying mixed numbers core topic (Lesson 65 Concept)
            (r) => {
                const cases = [
                    { m1: "1 1/3", m2: "2 1/4", imp1: "4/3", imp2: "9/4", ans: "3", d: ["2 1/4", "2 1/2", "3 1/3"], step: "1 1/3 = 4/3 and 2 1/4 = 9/4. 4/3 × 9/4 = 36/12 = 3." },
                    { m1: "2 1/2", m2: "1 1/3", imp1: "5/2", imp2: "4/3", ans: "3 1/3", d: ["2 1/3", "3 1/2", "4"], step: "2 1/2 = 5/2 and 1 1/3 = 4/3. 5/2 × 4/3 = 20/6 = 10/3 = 3 1/3." },
                    { m1: "1 1/2", m2: "1 3/5", imp1: "3/2", imp2: "8/5", ans: "2 2/5", d: ["2 1/2", "2 1/5", "1 4/5"], step: "1 1/2 = 3/2 and 1 3/5 = 8/5. 3/2 × 8/5 = 24/10 = 12/5 = 2 2/5." },
                    { m1: "3 1/3", m2: "1 1/2", imp1: "10/3", imp2: "3/2", ans: "5", d: ["4 1/2", "5 1/3", "6"], step: "3 1/3 = 10/3 and 1 1/2 = 3/2. 10/3 × 3/2 = 30/6 = 5." }
                ];
                const c = cases[randInt(r, 0, cases.length - 1)];
                const q = "Multiply: " + c.m1 + " × " + c.m2;
                const s = shuffle(r, [c.ans, ...c.d]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert each mixed number to an improper fraction: " + c.m1 + " = " + c.imp1 + " and " + c.m2 + " = " + c.imp2 + ".",
                        c.step
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 1: Allison ribbon collage (Lesson 65 WP #1)
            (r) => {
                const q = "Allison needs 2 1/3 yards of blue ribbon, 1/2 yard of yellow ribbon, and 3/4 yard of green ribbon. Ribbon costs $2 a yard. How much money will Allison need for ribbon (rounded to nearest cent)?";
                const correct = "$7.17";
                const distractors = ["$6.50", "$7.50", "$8.00"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Find total yards with common denominator 12: 2 4/12 + 6/12 + 9/12 = 2 19/12 = 3 7/12 yards = 43/12 yards.",
                        "Cost: (43/12) × $2 = 43/6 ≈ $7.17."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 2: Nautical mile vs statute mile (Lesson 65 WP #2)
            (r) => {
                const q = "A statute mile is 5280 feet. A nautical mile is about 6080 feet. About how much longer is a nautical mile than a statute mile?";
                const correct = "800 feet";
                const distractors = ["600 feet", "1000 feet", "1200 feet"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract the lengths: 6080 − 5280 = 800 feet."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 3: Equivalent division by scaling (Lesson 65 WP #3)
            (r) => {
                const q = "Instead of dividing $1.50 by $0.05, Marcus formed an equivalent problem by mentally multiplying both the dividend and the divisor by 100. What is the equivalent division problem and its quotient?";
                const correct = "150 ÷ 5 = 30";
                const distractors = [
                    "15 ÷ 5 = 3",
                    "150 ÷ 50 = 3",
                    "1500 ÷ 5 = 300"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "$1.50 × 100 = 150.",
                        "$0.05 × 100 = 5.",
                        "150 ÷ 5 = 30."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 4: Centimeter equation (Lesson 65 WP #4)
            (r) => {
                const a = randInt(r, 4, 8);
                const total = randInt(r, 11, 16);
                const k = total - a;
                const correct = k + " cm";
                const q = "Find the unknown number k: " + a + " cm + k = " + total + " cm";
                const distractors = [
                    (k + 2) + " cm",
                    (k - 2) + " cm",
                    (total + a) + " cm"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract " + a + " cm from " + total + " cm: k = " + total + " − " + a + " = " + k + " cm."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 5: Decimal equation (Lesson 65 WP #5)
            (r) => {
                const coef = randInt(r, 6, 9);
                const gVal = (randInt(r, 11, 19) / 10).toFixed(1);
                const prod = (coef * parseFloat(gVal)).toFixed(1);
                const q = "Solve for g: " + coef + "g = " + prod;
                const distractors = [
                    (parseFloat(gVal) + 0.5).toFixed(1),
                    (parseFloat(gVal) - 0.4).toFixed(1),
                    (parseFloat(gVal) * 2).toFixed(1)
                ];
                const s = shuffle(r, [gVal, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide both sides by " + coef + ": g = " + prod + " ÷ " + coef + " = " + gVal + "."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 6: Average side length of quadrilateral (Lesson 65 WP #8)
            (r) => {
                const avg = randInt(r, 35, 48);
                const perim = avg * 4;
                const correct = avg + " inches";
                const q = "The perimeter of a quadrilateral is " + perim + " inches. What is the average length of each side?";
                const distractors = [
                    (avg - 4) + " inches",
                    (avg + 4) + " inches",
                    (perim / 2) + " inches"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A quadrilateral has 4 sides.",
                        "Average length = " + perim + " ÷ 4 = " + avg + " inches."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 7: Money subtraction with parentheses (Lesson 65 WP #9)
            (r) => {
                const p1 = 46.75;
                const p2 = 9.68;
                const sum = p1 + p2;
                const diff = (100 - sum).toFixed(2);
                const correct = "$" + diff;
                const q = "Calculate: $100.00 − ($" + p1.toFixed(2) + " + $" + p2.toFixed(2) + ")";
                const distractors = [
                    "$" + (parseFloat(diff) + 10).toFixed(2),
                    "$" + (parseFloat(diff) - 5).toFixed(2),
                    "$" + sum.toFixed(2)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Inside parentheses: $" + p1.toFixed(2) + " + $" + p2.toFixed(2) + " = $" + sum.toFixed(2) + ".",
                        "Subtract from $100.00: $100.00 − $" + sum.toFixed(2) + " = $" + diff + "."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 8: Adding mixed numbers with unlike denominators (Lesson 65 WP #10)
            (r) => {
                const q = "Simplify: 3 1/3 + 2 1/4";
                const correct = "5 7/12";
                const distractors = ["5 2/7", "5 5/12", "6 1/12"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Common denominator of 3 and 4 is 12.",
                        "3 1/3 = 3 4/12 and 2 1/4 = 2 3/12.",
                        "Add: 3 4/12 + 2 3/12 = 5 7/12."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 9: Multiply mixed number and fraction (Lesson 65 WP #11)
            (r) => {
                const q = "Multiply: 1 1/3 × 3/4";
                const correct = "1";
                const distractors = ["3/4", "1 1/4", "1 1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert 1 1/3 to improper fraction: 4/3.",
                        "Multiply: 4/3 × 3/4 = 12/12 = 1."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 10: Money division (Lesson 65 WP #12)
            (r) => {
                const q = "Calculate: $6.00 ÷ $0.15";
                const correct = "40";
                const distractors = ["4", "400", "25"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply both by 100: 600 ÷ 15 = 40."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 11: Decimal division (Lesson 65 WP #13)
            (r) => {
                const q = "Calculate: 1.44 ÷ 60";
                const correct = "0.024";
                const distractors = ["0.24", "0.0024", "2.4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1.44 ÷ 6 = 0.24.",
                        "0.24 ÷ 10 = 0.024."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 12: Sharing money evenly (Lesson 65 WP #14)
            (r) => {
                const people = [4, 5, 8][randInt(r, 0, 2)];
                const dollars = [5, 10, 20][randInt(r, 0, 2)];
                const share = (dollars / people).toFixed(2);
                const correct = "$" + share;
                const q = "$" + dollars + " was divided evenly among " + people + " people. How much money did each receive?";
                const distractors = [
                    "$" + (parseFloat(share) + 0.25).toFixed(2),
                    "$" + (parseFloat(share) - 0.25).toFixed(2),
                    "$" + (dollars / (people + 1)).toFixed(2)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide total money by number of people: $" + dollars + ".00 ÷ " + people + " = $" + share + "."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 13: Regular quadrilateral area and perimeter (Lesson 65 WP #15)
            (r) => {
                const sLen = [8, 10, 12][randInt(r, 0, 2)];
                const area = sLen * sLen;
                const perim = sLen * 4;
                const correct = perim + " inches, square";
                const q = "The area of a regular quadrilateral is " + area + " square inches. What is its perimeter and what is its specific geometric name?";
                const distractors = [
                    perim + " inches, rectangle",
                    (area / 2) + " inches, rhombus",
                    (sLen * 2) + " inches, trapezoid"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A regular quadrilateral is a square.",
                        "Side length = √" + area + " = " + sLen + " inches.",
                        "Perimeter = 4 × " + sLen + " = " + perim + " inches."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 14: Prime factorizations of 625 and 1000 to reduce (Lesson 65 WP #16)
            (r) => {
                const q = "Write the prime factorizations of 625 and 1000. Then use them to reduce 625/1000.";
                const correct = "5/8";
                const distractors = ["25/40", "3/8", "5/4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "625 = 5 · 5 · 5 · 5 = 5⁴.",
                        "1000 = 2 · 2 · 2 · 5 · 5 · 5 = 2³ · 5³.",
                        "Cancel three 5s: 5 / (2 · 2 · 2) = 5/8."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 15: Rectangle area with mixed fraction dimensions (Lesson 65 WP #17)
            (r) => {
                const q = "What is the area of a rectangle with length 1 1/2 inches and width 3/4 inch?";
                const correct = "1 1/8 sq. in.";
                const distractors = ["1 1/4 sq. in.", "3/8 sq. in.", "1 1/2 sq. in."];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert 1 1/2 to improper fraction: 3/2.",
                        "Multiply length × width: 3/2 × 3/4 = 9/8 = 1 1/8 sq. in."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 16: Piano keys black fraction (Lesson 65 WP #18)
            (r) => {
                const q = "Thirty-six of the 88 piano keys are black. What fraction of the piano keys are black in reduced form?";
                const correct = "9/22";
                const distractors = ["18/44", "4/11", "9/20"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Fraction = 36/88.",
                        "Divide numerator and denominator by GCF (4): 36 ÷ 4 = 9, 88 ÷ 4 = 22.",
                        "Reduced fraction is 9/22."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 17: Reciprocal of mixed number (Lesson 65 WP #19)
            (r) => {
                const q = "Find the missing fraction that makes the statement true: 1 1/2 × [ ] = 1";
                const correct = "2/3";
                const distractors = ["1/2", "3/2", "1/3"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1 1/2 = 3/2.",
                        "The reciprocal of 3/2 is 2/3, because (3/2) × (2/3) = 1."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 18: Kilometers to meters (Lesson 65 WP #20)
            (r) => {
                const km = [1.5, 2.5, 3.2, 4.5][randInt(r, 0, 3)];
                const m = Math.round(km * 1000);
                const correct = m + " meters";
                const q = "There are 1000 meters in a kilometer. How many meters are in " + km + " kilometers?";
                const distractors = [
                    (m - 500) + " meters",
                    (m + 500) + " meters",
                    (km * 100) + " meters"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply kilometers by 1000: " + km + " × 1000 = " + m + " meters."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            },
            // Category 19: Geometric solid classification (Lesson 65 WP #22)
            (r) => {
                const q = "A basketball is an example of what geometric solid?";
                const correct = "Sphere";
                const distractors = ["Cylinder", "Circle", "Cone"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A basketball is a three-dimensional curved surface where every point on the surface is equidistant from the center, which is a sphere."
                    ],
                    lessonNum: 65,
                    lessonTitle: "Multiplying Mixed Numbers"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

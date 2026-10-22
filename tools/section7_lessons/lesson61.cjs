module.exports = `    // Lesson 61: Writing Mixed Numbers as Improper Fractions
    61: (rng, qIndex) => {
        const framings = [
            // Category 0: Convert mixed number to improper fraction (Lesson 61 Concept)
            (r) => {
                const w = randInt(r, 2, 6);
                const d = [3, 4, 5, 8][randInt(r, 0, 3)];
                const n = randInt(r, 1, d - 1);
                const impNum = w * d + n;
                const correct = impNum + "/" + d;
                const q = "Write " + w + " " + n + "/" + d + " as an improper fraction.";
                const distractors = [
                    (w * d) + "/" + d,
                    (impNum + 1) + "/" + d,
                    (impNum - 1) + "/" + d
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply whole number by denominator: " + w + " × " + d + " = " + (w * d) + ".",
                        "Add the numerator: " + (w * d) + " + " + n + " = " + impNum + ".",
                        "Place the total over the denominator: " + impNum + "/" + d + "."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 1: Music note fractions (Lesson 61 #1)
            (r) => {
                const questions = [
                    { q: "In music, how many quarter notes equal a whole note?", a: "4", d: ["2", "8", "16"], step: "There are 4 quarter notes (each 1/4) in one whole note (1)." },
                    { q: "In music, how many eighth notes equal a quarter note?", a: "2", d: ["4", "8", "1"], step: "There are 2 eighth notes (each 1/8) in one quarter note (1/4)." },
                    { q: "In music, how many eighth notes equal a half note?", a: "4", d: ["2", "8", "16"], step: "There are 4 eighth notes (each 1/8) in one half note (1/2)." },
                    { q: "In music, how many half notes equal a whole note?", a: "2", d: ["4", "8", "1"], step: "There are 2 half notes (each 1/2) in one whole note (1)." }
                ];
                const item = questions[randInt(r, 0, questions.length - 1)];
                const s = shuffle(r, [item.a, ...item.d]);
                return {
                    question: item.q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [item.step],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 2: Height in inches from feet and mixed number (Lesson 61 #2)
            (r) => {
                const names = ["Don", "Marcus", "Elena", "Tanya"];
                const name = names[randInt(r, 0, names.length - 1)];
                const feet = randInt(r, 4, 6);
                const extraWhole = randInt(r, 1, 8);
                const totalInches = feet * 12 + extraWhole;
                const correct = totalInches + " 1/2 inches";
                const q = name + " is " + feet + " feet " + extraWhole + " 1/2 inches tall. How many inches tall is that?";
                const distractors = [
                    (totalInches - 6) + " 1/2 inches",
                    (totalInches + 6) + " 1/2 inches",
                    (feet * 10 + extraWhole) + " 1/2 inches"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert feet to inches: " + feet + " × 12 = " + (feet * 12) + " inches.",
                        "Add remaining inches: " + (feet * 12) + " + " + extraWhole + " 1/2 = " + totalInches + " 1/2 inches."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 3: Prime vs composite classification (Lesson 61 #3)
            (r) => {
                const sets = [
                    { primes: [11, 31, 41], comp: 21, reason: "21 = 3 × 7" },
                    { primes: [13, 23, 43], comp: 33, reason: "33 = 3 × 11" },
                    { primes: [17, 37, 47], comp: 27, reason: "27 = 3 × 9" },
                    { primes: [19, 29, 59], comp: 39, reason: "39 = 3 × 13" },
                    { primes: [23, 43, 73], comp: 63, reason: "63 = 7 × 9" }
                ];
                const choice = sets[randInt(r, 0, sets.length - 1)];
                const correct = "" + choice.comp;
                const distractors = choice.primes.map(p => "" + p);
                const q = "Which of these numbers is not a prime number?";
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        choice.comp + " is composite because " + choice.reason + ".",
                        "The other three numbers have no factors other than 1 and themselves."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 4: Multiply improper fractions from mixed numbers (Lesson 61 #4)
            (r) => {
                const cases = [
                    { m1: "1 1/2", m2: "1 2/3", imp1: "3/2", imp2: "5/3", ans: "2 1/2", d: ["1 1/3", "3 1/3", "2 1/6"], step: "1 1/2 = 3/2 and 1 2/3 = 5/3. Then 3/2 × 5/3 = 15/6 = 5/2 = 2 1/2." },
                    { m1: "1 1/2", m2: "1 1/3", imp1: "3/2", imp2: "4/3", ans: "2", d: ["1 1/2", "2 1/3", "2 1/2"], step: "1 1/2 = 3/2 and 1 1/3 = 4/3. Then 3/2 × 4/3 = 12/6 = 2." },
                    { m1: "1 2/3", m2: "2 1/4", imp1: "5/3", imp2: "9/4", ans: "3 3/4", d: ["2 2/3", "3 1/2", "4 1/4"], step: "1 2/3 = 5/3 and 2 1/4 = 9/4. Then 5/3 × 9/4 = 45/12 = 15/4 = 3 3/4." },
                    { m1: "1 1/4", m2: "1 1/5", imp1: "5/4", imp2: "6/5", ans: "1 1/2", d: ["1 1/4", "2", "1 3/4"], step: "1 1/4 = 5/4 and 1 1/5 = 6/5. Then 5/4 × 6/5 = 30/20 = 3/2 = 1 1/2." }
                ];
                const c = cases[randInt(r, 0, cases.length - 1)];
                const q = "Write " + c.m1 + " and " + c.m2 + " as improper fractions, and multiply the improper fractions. What is the product?";
                const s = shuffle(r, [c.ans, ...c.d]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [c.step],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 5: Probability complement (Lesson 61 #5)
            (r) => {
                const rainPct = [10, 15, 20, 25, 30, 35, 40][randInt(r, 0, 6)];
                const notRain = 100 - rainPct;
                const correct = notRain + "%";
                const q = "If the chance of rain is " + rainPct + "%, what is the chance that it will not rain?";
                const distractors = [
                    rainPct + "%",
                    (notRain - 10) + "%",
                    (notRain + 10) + "%"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "The total probability of all outcomes is 100%.",
                        "100% − " + rainPct + "% = " + notRain + "% chance that it will not rain."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 6: Average price of three items (Lesson 61 #6)
            (r) => {
                const bases = [38, 40, 42, 45];
                const avg = bases[randInt(r, 0, bases.length - 1)];
                const p1 = (avg - 4.25).toFixed(2);
                const p2 = (avg + 1.00).toFixed(2);
                const p3 = (avg + 3.25).toFixed(2);
                const correct = "$" + avg.toFixed(2);
                const q = "The prices for three pairs of skates were $" + p1 + ", $" + p2 + ", and $" + p3 + ". What was the average price for a pair of skates?";
                const distractors = [
                    "$" + (avg - 2).toFixed(2),
                    "$" + (avg + 2).toFixed(2),
                    "$" + (avg + 5).toFixed(2)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Add the three prices: $" + p1 + " + $" + p2 + " + $" + p3 + " = $" + (avg * 3).toFixed(2) + ".",
                        "Divide by 3: $" + (avg * 3).toFixed(2) + " ÷ 3 = $" + avg.toFixed(2) + "."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 7: Mental division by doubling (Lesson 61 #7)
            (r) => {
                const nums = [15, 25, 35, 45];
                const num = nums[randInt(r, 0, nums.length - 1)];
                const doubledNum = num * 2;
                const quotient = doubledNum / 5;
                const correct = doubledNum + " ÷ 5 = " + quotient;
                const q = "Instead of dividing " + num + " by 2 1/2, Solomon doubled both numbers and then divided mentally. What was Solomon's mental division problem and its quotient?";
                const distractors = [
                    num + " ÷ 5 = " + (num / 5),
                    doubledNum + " ÷ 2 = " + (doubledNum / 2),
                    doubledNum + " ÷ 10 = " + (doubledNum / 10)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Double " + num + ": " + num + " × 2 = " + doubledNum + ".",
                        "Double 2 1/2: 2 1/2 × 2 = 5.",
                        "Divide: " + doubledNum + " ÷ 5 = " + quotient + "."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 8: Mixed number subtraction equation (Lesson 61 #8)
            (r) => {
                const w1 = randInt(r, 2, 5);
                const w2 = randInt(r, 2, 4);
                const sumW = w1 + w2;
                const correct = sumW + " 7/8";
                const q = "Find the unknown number m: m − " + w1 + " 1/8 = " + w2 + " 3/4";
                const distractors = [
                    (sumW - 1) + " 7/8",
                    sumW + " 5/8",
                    (sumW + 1) + " 1/8"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Add " + w1 + " 1/8 to both sides: m = " + w2 + " 3/4 + " + w1 + " 1/8.",
                        "Common denominator 8: " + w2 + " 3/4 = " + w2 + " 6/8.",
                        "Add: " + w2 + " 6/8 + " + w1 + " 1/8 = " + sumW + " 7/8."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 9: Fraction addition equation (Lesson 61 #9)
            (r) => {
                const pairs = [
                    { a: 3, b: 3, res: "3/10", step: "3/5 = 6/10, so n = 6/10 − 3/10 = 3/10." },
                    { a: 1, b: 2, res: "3/10", step: "2/5 = 4/10, so n = 4/10 − 1/10 = 3/10." },
                    { a: 1, b: 3, res: "1/2", step: "3/5 = 6/10, so n = 6/10 − 1/10 = 5/10 = 1/2." },
                    { a: 3, b: 4, res: "1/2", step: "4/5 = 8/10, so n = 8/10 − 3/10 = 5/10 = 1/2." }
                ];
                const p = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the unknown number n: n + " + p.a + "/10 = " + p.b + "/5";
                const d = generateDistractors(r, p.res, "fraction");
                const s = shuffle(r, [p.res, ...d]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [p.step],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 10: Decimal equation with two decimal places (Lesson 61 #10)
            (r) => {
                const a = [0.02, 0.04, 0.05][randInt(r, 0, 2)];
                const w = randInt(r, 22, 48);
                const b = (a * w).toFixed(2);
                const correct = "" + w;
                const q = "Find the unknown number w: " + a + "w = " + b;
                const distractors = ["" + (w + 10), "" + (w - 10), "" + (w * 10)];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide both sides by " + a + ": w = " + b + " ÷ " + a + ".",
                        "Multiply by 100/100: " + (b * 100) + " ÷ " + (a * 100) + " = " + w + "."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 11: Division equation with decimals (Lesson 61 #11)
            (r) => {
                const div = randInt(r, 4, 8);
                const dVal = randInt(r, 12, 85);
                const prod = ((div * dVal) / 1000).toFixed(3);
                const correct = (dVal / 1000).toFixed(3);
                const q = "Find the unknown number d: " + div + "d = " + prod;
                const distractors = [
                    (dVal / 100).toFixed(3),
                    ((dVal + 10) / 1000).toFixed(3),
                    ((dVal - 5) / 1000).toFixed(3)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide both sides by " + div + ": d = " + prod + " ÷ " + div + " = " + correct + "."],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 12: Addition of three fractions (Lesson 61 #12)
            (r) => {
                const q = "Simplify: 1/2 + 3/4 + 5/8";
                const correct = "1 7/8";
                const distractors = ["1 3/8", "1 5/8", "2 1/8"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Common denominator is 8.",
                        "1/2 = 4/8 and 3/4 = 6/8.",
                        "4/8 + 6/8 + 5/8 = 15/8 = 1 7/8."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 13: Subtraction of fractions with unlike denominators (Lesson 61 #13)
            (r) => {
                const q = "Simplify: 5/6 − 1/2";
                const correct = "1/3";
                const distractors = ["2/3", "1/6", "1/4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Common denominator is 6: 1/2 = 3/6.",
                        "5/6 − 3/6 = 2/6.",
                        "Reduce: 2/6 = 1/3."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 14: Multiplying fractions with cancellation (Lesson 61 #14)
            (r) => {
                const q = "Simplify: (1/2)(4/5)";
                const correct = "2/5";
                const distractors = ["4/5", "1/5", "3/5"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply numerators: 1 × 4 = 4.",
                        "Multiply denominators: 2 × 5 = 10.",
                        "Reduce 4/10 = 2/5."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 15: Dividing fractions by multiplying by reciprocal (Lesson 61 #15)
            (r) => {
                const q = "Simplify: 2/3 ÷ 1/2";
                const correct = "1 1/3";
                const distractors = ["1/3", "4/3", "3/4"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Invert the divisor and multiply: 2/3 × 2/1 = 4/3.",
                        "Convert 4/3 to a mixed number: 1 1/3."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 16: Order of operations with decimal subtraction (Lesson 61 #16)
            (r) => {
                const a = [0.2, 0.3, 0.4][randInt(r, 0, 2)];
                const b = [0.03, 0.04, 0.05][randInt(r, 0, 2)];
                const diff = (a - b);
                const ans = (1 - diff).toFixed(2);
                const q = "Simplify: 1 − (" + a.toFixed(1) + " − " + b.toFixed(2) + ")";
                const distractors = [
                    (1 - (a + b)).toFixed(2),
                    diff.toFixed(2),
                    (1 - a).toFixed(2)
                ];
                const s = shuffle(r, [ans, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Inside parentheses: " + a.toFixed(1) + " − " + b.toFixed(2) + " = " + diff.toFixed(2) + ".",
                        "Subtract from 1: 1 − " + diff.toFixed(2) + " = " + ans + "."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 17: Decimal multiplication product (Lesson 61 #17)
            (r) => {
                const a = [0.12, 0.14, 0.15][randInt(r, 0, 2)];
                const b = [0.16, 0.18, 0.25][randInt(r, 0, 2)];
                const prod = (a * b).toFixed(4);
                const q = "Multiply: (" + a + ")(" + b + ")";
                const distractors = [
                    (a * b * 10).toFixed(4),
                    (a * b / 10).toFixed(4),
                    (a * b + 0.01).toFixed(4)
                ];
                const s = shuffle(r, [prod, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply ignoring decimal points: " + Math.round(a * 100) + " × " + Math.round(b * 100) + " = " + Math.round(a * b * 10000) + ".",
                        "Count 4 decimal digits: " + prod + "."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 18: Centimeters to millimeters conversion (Lesson 61 #18)
            (r) => {
                const cm = [2.5, 3.5, 4.2, 5.8, 7.4][randInt(r, 0, 4)];
                const mm = Math.round(cm * 10);
                const correct = mm + " mm";
                const q = "One centimeter equals 10 millimeters. How many millimeters does " + cm + " centimeters equal?";
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
                        "Multiply centimeters by 10: " + cm + " × 10 = " + mm + " mm."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            },
            // Category 19: Greatest common factor (Lesson 61 #19)
            (r) => {
                const pairs = [
                    { a: 18, b: 24, gcf: 6, factors: "1, 2, 3, 6" },
                    { a: 12, b: 18, gcf: 6, factors: "1, 2, 3, 6" },
                    { a: 20, b: 30, gcf: 10, factors: "1, 2, 5, 10" },
                    { a: 16, b: 24, gcf: 8, factors: "1, 2, 4, 8" }
                ];
                const pair = pairs[randInt(r, 0, pairs.length - 1)];
                const correct = "" + pair.gcf;
                const q = "What is the greatest common factor (GCF) of " + pair.a + " and " + pair.b + "?";
                const distractors = [
                    "" + (pair.gcf / 2),
                    "" + (pair.gcf * 2),
                    "" + (pair.gcf + 1)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Common factors of " + pair.a + " and " + pair.b + " are " + pair.factors + ".",
                        "The largest factor is " + pair.gcf + "."
                    ],
                    lessonNum: 61,
                    lessonTitle: "Writing Mixed Numbers as Improper Fractions"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

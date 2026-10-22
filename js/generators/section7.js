import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 61: Writing Mixed Numbers as Improper Fractions
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
    },
    // Lesson 62: Subtracting Mixed Numbers with Regrouping, Part 2
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
    },
    // Lesson 63: Classifying Quadrilaterals
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
    },
    // Lesson 64: Prime Factorization • Division by Primes • Factor Trees
    64: (rng, qIndex) => {
        const framings = [
            // Category 0: Composite numbers identification (Lesson 64 PS a)
            (r) => {
                const sets = [
                    { list: "19, 20, 23, 29", comp: "20", reason: "20 has factors 1, 2, 4, 5, 10, 20" },
                    { list: "19, 21, 23, 29", comp: "21", reason: "21 = 3 × 7" },
                    { list: "17, 22, 23, 31", comp: "22", reason: "22 = 2 × 11" },
                    { list: "13, 25, 29, 31", comp: "25", reason: "25 = 5 × 5" }
                ];
                const item = sets[randInt(r, 0, sets.length - 1)];
                const q = "Which of the numbers in the list {" + item.list + "} is a composite number?";
                const opts = item.list.split(", ");
                const s = shuffle(r, [item.comp, ...opts.filter(x => x !== item.comp)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        item.comp + " is composite because " + item.reason + ".",
                        "The other numbers are prime numbers because they have only two factors."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 1: Prime factorization of 36 using factor tree (Lesson 64 PS c)
            (r) => {
                const q = "Use a factor tree to find the prime factorization of 36.";
                const correct = "2 · 2 · 3 · 3 (or 2² · 3²)";
                const distractors = [
                    "2 · 3 · 6",
                    "4 · 9",
                    "2 · 2 · 2 · 3"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Split 36 into 6 × 6 or 4 × 9.",
                        "Break 4 into 2 × 2 and 9 into 3 × 3.",
                        "All prime factors are 2 · 2 · 3 · 3 (or 2² · 3²)."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 2: Division by primes for 48 (Lesson 64 PS d)
            (r) => {
                const q = "Use division by primes to find the prime factorization of 48.";
                const correct = "2 · 2 · 2 · 2 · 3 (or 2⁴ · 3)";
                const distractors = [
                    "2 · 2 · 3 · 4",
                    "3 · 16",
                    "2 · 3 · 8"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "48 ÷ 2 = 24; 24 ÷ 2 = 12; 12 ÷ 2 = 6; 6 ÷ 2 = 3; 3 ÷ 3 = 1.",
                        "Prime factors: 2 · 2 · 2 · 2 · 3 = 2⁴ · 3."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 3: Prime factorization of 125 (Lesson 64 PS e)
            (r) => {
                const q = "Write 125 as a product of prime factors.";
                const correct = "5 · 5 · 5 (or 5³)";
                const distractors = [
                    "5 · 25",
                    "3 · 5 · 5",
                    "5 · 5 · 5 · 5"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "125 ÷ 5 = 25.",
                        "25 ÷ 5 = 5.",
                        "5 ÷ 5 = 1.",
                        "125 = 5 · 5 · 5 = 5³."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 4: Prime factorization of 1000 (Lesson 64 PS f)
            (r) => {
                const q = "What is the prime factorization of 1000?";
                const correct = "2³ · 5³ (or 2 · 2 · 2 · 5 · 5 · 5)";
                const distractors = [
                    "2² · 5²",
                    "10 · 10 · 10",
                    "2⁴ · 5⁴"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1000 = 10 × 10 × 10.",
                        "Each 10 = 2 × 5.",
                        "Therefore, 1000 = (2 × 5) × (2 × 5) × (2 × 5) = 2³ · 5³."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 5: Place value word problem in digits (Lesson 64 WP #1)
            (r) => {
                const q = "The total land area of a continent is about fifty-seven million, five hundred six thousand square miles. Use digits to write that number.";
                const correct = "57,506,000";
                const distractors = [
                    "57,560,000",
                    "57,056,000",
                    "575,006,000"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Millions period: 57.",
                        "Thousands period: 506.",
                        "Units period: 000.",
                        "Combined: 57,506,000."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 6: White rhino height in inches (Lesson 64 WP #2)
            (r) => {
                const feet = [4.5, 5.5, 6.5][randInt(r, 0, 2)];
                const inches = Math.round(feet * 12);
                const feetStr = Math.floor(feet) + " 1/2";
                const correct = inches + " inches";
                const q = "An African rhinoceros can reach a height of about " + feetStr + " feet. How many inches is " + feetStr + " feet?";
                const distractors = [
                    (inches - 6) + " inches",
                    (inches + 6) + " inches",
                    (inches + 12) + " inches"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        Math.floor(feet) + " feet = " + (Math.floor(feet) * 12) + " inches.",
                        "1/2 foot = 6 inches.",
                        (Math.floor(feet) * 12) + " + 6 = " + inches + " inches."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 7: Free throws percent (Lesson 64 WP #3)
            (r) => {
                const made = [6, 7, 8][randInt(r, 0, 2)];
                const pct = made * 10;
                const correct = pct + "%";
                const q = "Jenny shot 10 free throws and made " + made + ". What percent of her shots did she make?";
                const distractors = [
                    (pct - 10) + "%",
                    (pct + 10) + "%",
                    made + "%"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Fraction made: " + made + "/10.",
                        "Convert to percent: " + made + "/10 = " + pct + "/100 = " + pct + "%."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 8: Factor tree for 40 (Lesson 64 WP #4)
            (r) => {
                const q = "Make a factor tree for 40. Then write the prime factorization of 40.";
                const correct = "2 · 2 · 2 · 5 (or 2³ · 5)";
                const distractors = [
                    "2 · 4 · 5",
                    "2 · 2 · 10",
                    "4 · 10"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "40 = 4 × 10.",
                        "4 = 2 × 2 and 10 = 2 × 5.",
                        "Prime factors: 2 · 2 · 2 · 5 = 2³ · 5."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 9: Improper fraction times fraction (Lesson 64 WP #6)
            (r) => {
                const q = "Write 2 2/3 as an improper fraction. Then multiply the improper fraction by 3/8. What is the product?";
                const correct = "1";
                const distractors = ["2/3", "4/3", "1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert 2 2/3 = 8/3.",
                        "Multiply: 8/3 × 3/8 = 24/24 = 1."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 10: Marble probability of NOT red (Lesson 64 WP #7)
            (r) => {
                const red = 4;
                const total = 10;
                const notRed = total - red;
                const correct = "3/5";
                const q = "Four of the ten marbles in a bag are red. If one marble is drawn from the bag, what ratio in simplest form expresses the probability that the marble will NOT be red?";
                const distractors = ["2/5", "4/10", "1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Marbles that are not red: 10 − 4 = 6.",
                        "Probability = 6/10 = 3/5."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 11: Adding three fractions (Lesson 64 WP #8)
            (r) => {
                const q = "Simplify: 1/12 + 1/6 + 1/2";
                const correct = "3/4";
                const distractors = ["1/2", "5/6", "7/12"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Common denominator is 12: 1/6 = 2/12 and 1/2 = 6/12.",
                        "1/12 + 2/12 + 6/12 = 9/12 = 3/4."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 12: Proportion missing term (Lesson 64 WP #10)
            (r) => {
                const pairs = [
                    { num: 4, ans: 16 },
                    { num: 7, ans: 28 },
                    { num: 9, ans: 36 },
                    { num: 12, ans: 48 }
                ];
                const p = pairs[randInt(r, 0, pairs.length - 1)];
                const correct = "" + p.ans;
                const q = "Find the unknown number n: " + p.num + "/25 = n/100";
                const distractors = [
                    "" + (p.ans + 4),
                    "" + (p.ans - 4),
                    "" + (p.num * 2)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply numerator and denominator by 4: (" + p.num + " × 4)/(25 × 4) = " + p.ans + "/100.",
                        "n = " + p.ans + "."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 13: Reciprocal equation (Lesson 64 WP #11)
            (r) => {
                const q = "Solve for y: (3/8)y = 1";
                const correct = "2 2/3 (or 8/3)";
                const distractors = ["3/8", "1 1/3", "1"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "The product of a number and its reciprocal is 1.",
                        "The reciprocal of 3/8 is 8/3 = 2 2/3."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 14: Equation with decimal coefficient (Lesson 64 WP #12)
            (r) => {
                const q = "Solve for w: 12w = 0.0144";
                const correct = "0.0012";
                const distractors = ["0.012", "0.12", "0.00012"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "w = 0.0144 ÷ 12.",
                        "144 ÷ 12 = 12.",
                        "Placing decimal point 4 digits from right gives 0.0012."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 15: Decimal order of operations (Lesson 64 WP #13)
            (r) => {
                const q = "Evaluate: 1 − (0.2 + 0.48)";
                const correct = "0.32";
                const distractors = ["0.68", "0.22", "0.42"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Inside parentheses: 0.2 + 0.48 = 0.68.",
                        "Subtract from 1: 1 − 0.68 = 0.32."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 16: Two dozen erasers with sales tax (Lesson 64 WP #15)
            (r) => {
                const q = "What is the total cost of two dozen erasers that are priced at 50¢ each if 8% sales tax is added?";
                const correct = "$12.96";
                const distractors = ["$12.00", "$13.00", "$12.48"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Two dozen = 24 erasers.",
                        "24 × $0.50 = $12.00.",
                        "Tax: 8% of $12.00 = 0.08 × 12 = $0.96.",
                        "Total = $12.00 + $0.96 = $12.96."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 17: Quarters in dollars (Lesson 64 WP #16)
            (r) => {
                const d = [15, 20, 25, 30][randInt(r, 0, 3)];
                const qCount = d * 4;
                const correct = qCount + " quarters";
                const q = "The store manager put $" + d + ".00 worth of quarters in the change drawer. How many quarters are in $" + d + ".00?";
                const distractors = [
                    (qCount - 10) + " quarters",
                    (qCount + 10) + " quarters",
                    (d * 2) + " quarters"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Each dollar has 4 quarters.",
                        d + " × 4 = " + qCount + " quarters."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 18: Square-based pyramid geometry (Lesson 64 WP #17)
            (r) => {
                const q = "A pyramid with a square base has how many edges?";
                const correct = "8 edges";
                const distractors = ["5 edges", "6 edges", "10 edges"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A square-based pyramid has 4 edges around the square base and 4 triangular edges leading to the apex.",
                        "4 + 4 = 8 edges total."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 19: Carousel circumference (Lesson 64 WP #26)
            (r) => {
                const radius = [10, 15, 20][randInt(r, 0, 2)];
                const dist = Math.round(2 * 3.14 * radius);
                const correct = dist + " feet";
                const q = "The radius of a carousel is " + radius + " feet. If the carousel turns around once, about how far does a person riding on the outer edge travel? (Use 3.14 for π, round to nearest foot).";
                const distractors = [
                    (dist - 10) + " feet",
                    (dist + 10) + " feet",
                    Math.round(3.14 * radius * radius) + " feet"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Circumference = 2 × π × radius.",
                        "2 × 3.14 × " + radius + " = " + (2 * 3.14 * radius).toFixed(1) + " ≈ " + dist + " feet."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 65: Multiplying Mixed Numbers
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
    },
    // Lesson 66: Using Prime Factorization to Reduce Fractions
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
    },
    // Lesson 67: Dividing Mixed Numbers
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
    },
    // Lesson 68: Lengths of Segments • Complementary and Supplementary Angles
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
    },
    // Lesson 69: Reducing Fractions Before Multiplying
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
    },
    // Lesson 70: Parallelograms
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
    },
};

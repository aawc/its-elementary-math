// tools/build_section3.js
// Generates js/generators/section3.js with 20 authentic framings per lesson (Lessons 21-30)

import fs from 'node:fs';
import path from 'node:path';

const outPath = path.resolve('js/generators/section3.js');

const content = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 21: Divisibility
    21: (rng, qIndex) => {
        const framings = [
            // Category 0: Product of sum and difference (Lesson 21 #1)
            (r) => {
                const pairs = [[8, 5], [9, 4], [7, 3], [10, 6], [12, 5], [11, 4], [9, 5], [8, 3]];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const sum = a + b;
                const diff = a - b;
                const prod = sum * diff;
                const q = "What is the product of the sum of " + a + " and " + b + " and the difference of " + a + " and " + b + "?";
                const s = shuffle(r, ["" + prod, "" + (a * b - diff), "" + (sum + diff), "" + (sum * a)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Find the sum: " + a + " + " + b + " = " + sum + ".",
                        "Step 2: Find the difference: " + a + " − " + b + " = " + diff + ".",
                        "Step 3: Multiply the sum by the difference: " + sum + " × " + diff + " = " + prod + "."
                    ],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 1: Historical years elapsed (Lesson 21 #2)
            (r) => {
                const events = [
                    [1787, 1959, "Delaware became the first state", "Hawaii became the fiftieth state admitted to the Union"],
                    [1788, 1912, "Georgia ratified the Constitution", "Arizona was admitted as the 48th state"],
                    [1790, 1896, "Rhode Island became a state", "Utah was admitted to the Union"],
                    [1791, 1959, "Vermont joined the Union", "Alaska was admitted as the 49th state"]
                ];
                const [y1, y2, ev1, ev2] = events[randInt(r, 0, events.length - 1)];
                const diff = y2 - y1;
                const q = "In " + y1 + " " + ev1 + ". In " + y2 + " " + ev2 + ". How many years were there between these two events?";
                const s = shuffle(r, ["" + diff, "" + (diff + 1), "" + (diff - 1), "" + (diff + 10)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Subtract the earlier year from the later year: " + y2 + " − " + y1 + " = " + diff + " years."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 2: Bowling ball weight / division (Lesson 21 #3)
            (r) => {
                const weights = [12, 14, 15, 16];
                const counts = [12, 14, 15, 16, 18, 20];
                const p = weights[randInt(r, 0, weights.length - 1)];
                const count = counts[randInt(r, 0, counts.length - 1)];
                const total = p * count;
                const q = "Maria figured that the bowling balls on the rack weighed a total of " + total + " pounds. How many " + p + "-pound bowling balls weigh a total of " + total + " pounds?";
                const s = shuffle(r, [count + " bowling balls", (count + 2) + " bowling balls", (count - 2) + " bowling balls", (count + 4) + " bowling balls"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide total weight by the weight of each ball: " + total + " ÷ " + p + " = " + count + " bowling balls."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 3: Apple pie slices eaten fraction left (Lesson 21 #4)
            (r) => {
                const nValues = [4, 6, 8, 10, 12];
                const n = nValues[randInt(r, 0, nValues.length - 1)];
                const k = randInt(r, 1, 3);
                const left = n - k;
                const q = "An apple pie was cut into " + n + " equal slices. " + (k === 1 ? "One slice was" : k + " slices were") + " quickly eaten. What fraction of the pie was left?";
                const s = shuffle(r, [left + "/" + n, k + "/" + n, (left - 1 > 0 ? left - 1 : left + 2) + "/" + n, (left + 1 < n ? left + 1 : left - 2) + "/" + n]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The whole pie is " + n + "/" + n + ". Subtract the eaten slice(s): " + n + "/" + n + " − " + k + "/" + n + " = " + left + "/" + n + "."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 4: Classroom fraction of girls/boys (Lesson 21 #5)
            (r) => {
                const tots = [25, 28, 30, 32];
                const tot = tots[randInt(r, 0, tots.length - 1)];
                const g = randInt(r, 13, tot - 10);
                const b = tot - g;
                const q = "There are " + g + " girls in a class of " + tot + " students. What fraction of the class is made up of girls?";
                const s = shuffle(r, [g + "/" + tot, b + "/" + tot, (g - 1) + "/" + tot, (g + 1) + "/" + tot]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Place the number of girls over the total number of students: " + g + "/" + tot + "."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 5: Fraction words to digits (Lesson 21 #6)
            (r) => {
                const items = [
                    ["three hundredths", "3/100", ["3/10", "3/1000", "100/3"]],
                    ["seven hundredths", "7/100", ["7/10", "7/1000", "100/7"]],
                    ["nine tenths", "9/10", ["9/100", "1/9", "10/9"]],
                    ["five eighths", "5/8", ["5/80", "8/5", "3/8"]],
                    ["eleven hundredths", "11/100", ["11/10", "11/1000", "100/11"]],
                    ["four fifths", "4/5", ["4/50", "5/4", "1/5"]]
                ];
                const [word, correct, dists] = items[randInt(r, 0, items.length - 1)];
                const q = "Use digits to write the fraction " + word + ".";
                const s = shuffle(r, [correct, ...dists]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The words \\"" + word + "\\\" translate directly to the fraction " + correct + "."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 6: Fraction of money (Lesson 21 #7)
            (r) => {
                const amounts = [2.34, 3.50, 4.68, 5.80, 6.24, 7.50];
                const val = amounts[randInt(r, 0, amounts.length - 1)];
                const half = val / 2;
                const q = "How much money is 1/2 of $" + val.toFixed(2) + "?";
                const s = shuffle(r, [
                    "$" + half.toFixed(2),
                    "$" + (half + 0.50).toFixed(2),
                    "$" + (half - 0.30).toFixed(2),
                    "$" + (half + 1.00).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide the amount by 2: $" + val.toFixed(2) + " ÷ 2 = $" + half.toFixed(2) + "."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 7: Place value in large number (Lesson 21 #8)
            (r) => {
                const digits = [
                    ["7", "987,654,321", "millions", ["ten-millions", "hundred-thousands", "hundred-millions"]],
                    ["8", "987,654,321", "ten-millions", ["millions", "hundred-millions", "ten-thousands"]],
                    ["9", "987,654,321", "hundred-millions", ["ten-millions", "billions", "millions"]],
                    ["6", "987,654,321", "hundred-thousands", ["ten-thousands", "millions", "thousands"]]
                ];
                const [digit, numStr, place, dists] = digits[randInt(r, 0, digits.length - 1)];
                const q = "What is the place value of the " + digit + " in " + numStr + "?";
                const s = shuffle(r, [place, ...dists]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["In " + numStr + ", the digit " + digit + " is in the " + place + " place."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 8: Sequence rule and next term (Lesson 21 #9)
            (r) => {
                const seqs = [
                    [1, 4, 16, 64, 256, 128, 512, 100, "multiply by 4"],
                    [1, 3, 9, 27, 81, 54, 243, 36, "multiply by 3"],
                    [2, 6, 18, 54, 162, 108, 216, 72, "multiply by 3"],
                    [1, 5, 25, 125, 625, 250, 500, 150, "multiply by 5"]
                ];
                const [s1, s2, s3, s4, ans, d1, d2, d3, rule] = seqs[randInt(r, 0, seqs.length - 1)];
                const q = "Describe the rule of the sequence, then find the next term: " + s1 + ", " + s2 + ", " + s3 + ", " + s4 + ", ...";
                const s = shuffle(r, ["" + ans, "" + d1, "" + d2, "" + d3]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The rule is to " + rule + " each term: " + s4 + " × " + (s2 / s1) + " = " + ans + "."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 9: Identity comparison (Lesson 21 #10)
            (r) => {
                const n = randInt(r, 25, 85);
                const q = "Compare: " + n + " × 1 ○ " + n + " + 1";
                const s = shuffle(r, ["<", ">", "=", "≠"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Left: " + n + " × 1 = " + n + ".",
                        "Right: " + n + " + 1 = " + (n + 1) + ".",
                        "Since " + n + " < " + (n + 1) + ", the comparison is <."
                    ],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 10: Divisibility by 9 (Lesson 21 #11)
            (r) => {
                const sets = [
                    [1179, 365, 1556, 2410],
                    [1458, 524, 1234, 2005],
                    [2349, 1112, 3451, 4001],
                    [3528, 1244, 2155, 3004],
                    [2538, 1342, 2345, 3125]
                ];
                const [correct, d1, d2, d3] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Which of these numbers is divisible by 9?";
                const s = shuffle(r, ["" + correct, "" + d1, "" + d2, "" + d3]);
                const digits = String(correct).split("").map(Number);
                const digitSum = digits.reduce((acc, d) => acc + d, 0);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["A number is divisible by 9 if the sum of its digits is divisible by 9. For " + correct + ": " + digits.join(" + ") + " = " + digitSum + ", which is divisible by 9."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 11: Divisibility by 3 (Lesson 21 Practice Set b)
            (r) => {
                const sets = [
                    [3456, 1234, 2345, 4567],
                    [1245, 1235, 2344, 3455],
                    [2418, 1111, 2222, 3334],
                    [4122, 1342, 2345, 3125],
                    [5124, 2134, 3142, 4213]
                ];
                const [correct, d1, d2, d3] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Which of these numbers is divisible by 3?";
                const s = shuffle(r, ["" + correct, "" + d1, "" + d2, "" + d3]);
                const digits = String(correct).split("").map(Number);
                const digitSum = digits.reduce((acc, d) => acc + d, 0);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["A number is divisible by 3 if the sum of its digits is divisible by 3. For " + correct + ": " + digits.join(" + ") + " = " + digitSum + ", which is divisible by 3."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 12: Divisibility by both 2 and 5 (Lesson 21 Practice Set a/c)
            (r) => {
                const sets = [
                    [340, 345, 342, 347],
                    [520, 525, 522, 523],
                    [250, 252, 525, 255],
                    [680, 685, 682, 684]
                ];
                const [correct, d1, d2, d3] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Which of these numbers is divisible by both 2 and 5?";
                const s = shuffle(r, ["" + correct, "" + d1, "" + d2, "" + d3]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["A number divisible by both 2 and 5 must end in 0. Among the options, " + correct + " ends in 0."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 13: Estimation to nearest hundred (Lesson 21 #12)
            (r) => {
                const triplets = [
                    [396, 197, 203],
                    [298, 401, 195],
                    [499, 102, 296],
                    [198, 299, 397],
                    [295, 304, 398]
                ];
                const [a, b, c] = triplets[randInt(r, 0, triplets.length - 1)];
                const ra = Math.round(a / 100) * 100;
                const rb = Math.round(b / 100) * 100;
                const rc = Math.round(c / 100) * 100;
                const sum = ra + rb + rc;
                const q = "Find the sum of " + a + ", " + b + ", and " + c + " by rounding each number to the nearest hundred before adding.";
                const s = shuffle(r, ["" + sum, "" + (sum + 100), "" + (sum - 100), "" + (sum + 200)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Round each number: " + a + " rounds to " + ra + ", " + b + " rounds to " + rb + ", and " + c + " rounds to " + rc + ".",
                        "Add the rounded numbers: " + ra + " + " + rb + " + " + rc + " = " + sum + "."
                    ],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 14: Greatest Common Factor (GCF) (Lesson 21 #13)
            (r) => {
                const pairs = [
                    [12, 16, 4],
                    [15, 25, 5],
                    [18, 24, 6],
                    [20, 30, 10],
                    [14, 21, 7],
                    [16, 24, 8],
                    [24, 36, 12]
                ];
                const [a, b, g] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the greatest common factor (GCF) of " + a + " and " + b + "?";
                const s = shuffle(r, ["" + g, "" + (g * 2), "" + Math.max(1, Math.floor(g / 2)), "" + (g + 3)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The greatest whole number that divides both " + a + " and " + b + " without a remainder is " + g + "."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 15: Multiply money by 10 (Lesson 21 #17)
            (r) => {
                const cents = [475, 350, 225, 580, 625, 750];
                const c = cents[randInt(r, 0, cents.length - 1)];
                const val = c / 100;
                const prod = (c * 10) / 100;
                const q = "Find the product: $" + val.toFixed(2) + " × 10";
                const s = shuffle(r, [
                    "$" + prod.toFixed(2),
                    "$" + (prod / 10).toFixed(2),
                    "$" + (prod * 10).toFixed(2),
                    "$" + (prod + 5).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiplying by 10 shifts the decimal point one place to the right: $" + val.toFixed(2) + " × 10 = $" + prod.toFixed(2) + "."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 16: Unknown subtrahend with money (Lesson 21 #18)
            (r) => {
                const costs = [87, 75, 64, 45, 92, 38];
                const cost = costs[randInt(r, 0, costs.length - 1)];
                const w = 1000 - cost;
                const q = "Find the unknown number w: $10.00 − w = " + cost + "¢";
                const s = shuffle(r, [
                    "$" + (w / 100).toFixed(2),
                    "$" + ((w + 10) / 100).toFixed(2),
                    "$" + ((w - 10) / 100).toFixed(2),
                    "$" + (cost / 100).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Convert " + cost + "¢ to $" + (cost / 100).toFixed(2) + ", then subtract: $10.00 − $" + (cost / 100).toFixed(2) + " = $" + (w / 100).toFixed(2) + "."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 17: Unknown addend in 3 numbers (Lesson 21 #19)
            (r) => {
                const triplets = [
                    [463, 27, 500, 10],
                    [354, 36, 400, 10],
                    [528, 42, 600, 30],
                    [275, 15, 300, 10],
                    [440, 35, 500, 25]
                ];
                const [a, b, tot, m] = triplets[randInt(r, 0, triplets.length - 1)];
                const q = "Find the unknown number m: " + a + " + " + b + " + m = " + tot;
                const s = shuffle(r, ["" + m, "" + (m + 5), "" + (m - 5), "" + (m + 15)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Add the known numbers: " + a + " + " + b + " = " + (a + b) + ".",
                        "Subtract from the total: " + tot + " − " + (a + b) + " = " + m + "."
                    ],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 18: Average of three numbers (Lesson 21 #21)
            (r) => {
                const sets = [
                    [12, 16, 23],
                    [14, 18, 22],
                    [15, 21, 24],
                    [10, 20, 30],
                    [18, 24, 30],
                    [21, 27, 33]
                ];
                const [a, b, c] = sets[randInt(r, 0, sets.length - 1)];
                const sum = a + b + c;
                const avg = sum / 3;
                const q = "What is the average of " + a + ", " + b + ", and " + c + "?";
                const s = shuffle(r, ["" + avg, "" + (avg + 2), "" + (avg - 2), "" + (avg + 4)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Add the numbers: " + a + " + " + b + " + " + c + " = " + sum + ".",
                        "Divide by the count (3): " + sum + " ÷ 3 = " + avg + "."
                    ],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            },
            // Category 19: Perimeter of regular octagon (Lesson 21 #29)
            (r) => {
                const sides = [18, 15, 12, 14, 16, 20, 22];
                const side = sides[randInt(r, 0, sides.length - 1)];
                const peri = 8 * side;
                const q = "A regular octagon has eight sides of equal length. What is the perimeter of a regular octagon with sides " + side + " cm long?";
                const s = shuffle(r, [peri + " cm", (peri + 8) + " cm", (peri - 8) + " cm", (6 * side) + " cm"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Perimeter of a regular octagon is 8 × side: 8 × " + side + " = " + peri + " cm."],
                    lessonNum: 21,
                    lessonTitle: "Divisibility"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 22: “Equal Groups” Problems with Fractions
    22: (rng, qIndex) => {
        const framings = [
            // Category 0: Sum subtracted from product (Lesson 22 #1)
            (r) => {
                const pairs = [[15, 12], [14, 11], [16, 10], [12, 10], [15, 10], [18, 12], [20, 10]];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const prod = a * b;
                const sum = a + b;
                const diff = prod - sum;
                const q = "When the sum of " + a + " and " + b + " is subtracted from the product of " + a + " and " + b + ", what is the difference?";
                const s = shuffle(r, ["" + diff, "" + (diff + 10), "" + (diff - 10), "" + prod]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Product: " + a + " × " + b + " = " + prod + ".",
                        "Sum: " + a + " + " + b + " = " + sum + ".",
                        "Difference: " + prod + " − " + sum + " = " + diff + "."
                    ],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 1: Original states fraction (Lesson 22 #2)
            (r) => {
                const q = "There were 13 original states. There are now 50 states. What fraction of the states are the original states?";
                const s = shuffle(r, ["13/50", "37/50", "13/100", "7/25"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["13 of the 50 states were the original states, giving the fraction 13/50."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 2: Marathon yards (Lesson 22 #3)
            (r) => {
                const q = "A marathon race is 26 miles plus 385 yards long. A mile is 1760 yards. Altogether, how many yards long is a marathon?";
                const s = shuffle(r, ["46,145 yards", "45,760 yards", "46,530 yards", "45,375 yards"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Find yards in 26 miles: 26 × 1760 = 45,760 yards.",
                        "Add the remaining 385 yards: 45,760 + 385 = 46,145 yards."
                    ],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 3: Fraction of apples eaten (Lesson 22 #4)
            (r) => {
                const sets = [[2, 3, 12, 8], [3, 4, 16, 12], [2, 5, 20, 8], [3, 5, 25, 15], [5, 6, 24, 20], [3, 8, 24, 9]];
                const [num, den, tot, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "If " + num + "/" + den + " of the " + tot + " apples were eaten, how many apples were eaten?";
                const s = shuffle(r, [ans + " apples", (ans + 2) + " apples", (ans - 2) + " apples", (tot - ans) + " apples"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide " + tot + " by " + den + " to find 1/" + den + ": " + (tot / den) + " apples. Then multiply by " + num + ": " + (tot / den) + " × " + num + " = " + ans + " apples."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 4: Fraction of a whole number (Lesson 22 #5)
            (r) => {
                const sets = [[3, 4, 16, 12], [2, 3, 24, 16], [3, 10, 80, 24], [5, 6, 24, 20], [4, 5, 35, 28], [3, 8, 32, 12]];
                const [num, den, tot, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "What number is " + num + "/" + den + " of " + tot + "?";
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 2), "" + (ans + 4)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["(" + tot + " ÷ " + den + ") × " + num + " = " + (tot / den) + " × " + num + " = " + ans + "."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 5: Fraction of money (Lesson 22 #6)
            (r) => {
                const sets = [[3, 10, 3.50, 1.05], [1, 4, 2.40, 0.60], [2, 5, 4.00, 1.60], [3, 4, 4.80, 3.60], [1, 5, 3.50, 0.70]];
                const [num, den, amt, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "How much money is " + num + "/" + den + " of $" + amt.toFixed(2) + "?";
                const s = shuffle(r, [
                    "$" + ans.toFixed(2),
                    "$" + (ans + 0.50).toFixed(2),
                    "$" + (ans - 0.30).toFixed(2),
                    "$" + (ans + 1.00).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide $" + amt.toFixed(2) + " by " + den + ": $" + (amt / den).toFixed(2) + ". Then multiply by " + num + ": $" + ans.toFixed(2) + "."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 6: Elevation change (Lesson 22 #7)
            (r) => {
                const pairs = [[100, 600, 700], [50, 550, 600], [150, 650, 800], [200, 800, 1000], [80, 520, 600]];
                const [e1, e2, tot] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "As Shannon rode her bike out of the low desert, the elevation changed from −" + e1 + " ft to " + e2 + " ft. What was the total elevation change for her ride?";
                const s = shuffle(r, [tot + " ft", (e2 - e1) + " ft", (tot + 100) + " ft", (tot - 50) + " ft"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Subtract initial elevation from final elevation: " + e2 + " − (−" + e1 + ") = " + e2 + " + " + e1 + " = " + tot + " ft."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 7: Unknown in subtraction (Lesson 22 #8)
            (r) => {
                const pairs = [[15, 345, 360], [25, 425, 450], [18, 282, 300], [35, 515, 550], [12, 188, 200]];
                const [a, b, w] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the unknown number w: w − " + a + " = " + b;
                const s = shuffle(r, ["" + w, "" + (b - a), "" + (w + 10), "" + (w - 10)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Add " + a + " to both sides: w = " + b + " + " + a + " = " + w + "."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 8: Unknown dividend in division (Lesson 22 #9)
            (r) => {
                const pairs = [[15, 23, 345], [12, 25, 300], [14, 20, 280], [16, 25, 400], [15, 30, 450]];
                const [a, b, w] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the unknown number w: w ÷ " + a + " = " + b;
                const s = shuffle(r, ["" + w, "" + (w + a), "" + (w - a), "" + (w + 2 * a)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiply both sides by " + a + ": w = " + b + " × " + a + " = " + w + "."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 9: Adding mixed currency (Lesson 22 #10)
            (r) => {
                const triplets = [
                    [4.78, 34.09, 36, 39.23],
                    [5.65, 28.15, 45, 34.25],
                    [3.85, 42.50, 25, 46.60],
                    [6.40, 19.80, 50, 26.70]
                ];
                const [a, b, c, tot] = triplets[randInt(r, 0, triplets.length - 1)];
                const q = "Find the sum: $" + a.toFixed(2) + " + $" + b.toFixed(2) + " + " + c + "¢";
                const s = shuffle(r, [
                    "$" + tot.toFixed(2),
                    "$" + (tot + 1).toFixed(2),
                    "$" + (tot - 1).toFixed(2),
                    "$" + (tot + 0.50).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Convert " + c + "¢ to $" + (c / 100).toFixed(2) + ", then add: $" + a.toFixed(2) + " + $" + b.toFixed(2) + " + $" + (c / 100).toFixed(2) + " = $" + tot.toFixed(2) + "."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 10: Money division (Lesson 22 #11)
            (r) => {
                const sets = [[12.45, 3, 4.15], [16.80, 4, 4.20], [18.75, 5, 3.75], [15.60, 6, 2.60], [21.35, 7, 3.05]];
                const [amt, d, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Divide: $" + amt.toFixed(2) + " ÷ " + d;
                const s = shuffle(r, [
                    "$" + ans.toFixed(2),
                    "$" + (ans + 1).toFixed(2),
                    "$" + (ans - 0.50).toFixed(2),
                    "$" + (ans + 0.50).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["$" + amt.toFixed(2) + " ÷ " + d + " = $" + ans.toFixed(2) + "."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 11: Multi-step arithmetic with division (Lesson 22 #13)
            (r) => {
                const sets = [[7, 9, 14, 3, 10], [5, 11, 14, 3, 10], [8, 12, 16, 4, 9], [9, 15, 21, 5, 9], [11, 13, 16, 4, 10]];
                const [a, b, c, d, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: (" + a + " + " + b + " + " + c + ") ÷ " + d;
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 2), "" + (ans + 4)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Add the terms inside the parentheses: " + a + " + " + b + " + " + c + " = " + (a + b + c) + ".",
                        "Divide by " + d + ": " + (a + b + c) + " ÷ " + d + " = " + ans + "."
                    ],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 12: Estimating party favors cost (Lesson 22 #14)
            (r) => {
                const q = "Shannon bought three dozen party favors for $1.24 each. Thinking of 36 as 9 × 4 and $1.24 as $1.25, what was Shannon's estimate of the cost?";
                const s = shuffle(r, ["$45.00", "$36.00", "$48.00", "$40.00"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["36 × $1.25 = 9 × (4 × $1.25) = 9 × $5.00 = $45.00."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 13: Ten-millions place value (Lesson 22 #15)
            (r) => {
                const q = "Which digit in 375,426,198,000 is in the ten-millions place?";
                const s = shuffle(r, ["2", "4", "6", "5"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["In 375,426,198,000, 6 is in the millions place and 2 is in the ten-millions place."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 14: GCF of two numbers (Lesson 22 #16)
            (r) => {
                const q = "Find the greatest common factor (GCF) of 12 and 15.";
                const s = shuffle(r, ["3", "1", "6", "15"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 15: 1, 3, 5, 15. The greatest common factor is 3."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 15: Divisibility of 100 (Lesson 22 #18)
            (r) => {
                const q = "The number 100 is divisible by which of these sets of numbers?";
                const s = shuffle(r, ["2, 5, and 10", "2, 3, and 5", "3, 5, and 9", "2, 9, and 10"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["100 is even (divisible by 2), ends in 0 (divisible by 5 and 10), but sum of digits is 1 (not divisible by 3 or 9)."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 16: Fraction to percent (Lesson 22 #19)
            (r) => {
                const sets = [[4, 5, "80%"], [9, 10, "90%"], [3, 4, "75%"], [3, 5, "60%"], [7, 10, "70%"]];
                const [n, d, pct] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Jeb answered " + n + "/" + d + " of the questions correctly. What percent of the questions did Jeb answer correctly?";
                const numVal = parseInt(pct, 10);
                const s = shuffle(r, [pct, (numVal - 10) + "%", (numVal + 10) + "%", (numVal - 5) + "%"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [n + "/" + d + " = " + ((n / d) * 100) + "%."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 17: Prime number classification (Lesson 22 #21)
            (r) => {
                const sets = [[39, 19, 29, 31], [49, 31, 41, 53], [51, 43, 47, 59], [27, 17, 23, 31]];
                const [comp, p1, p2, p3] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Which of these numbers is not a prime number?";
                const s = shuffle(r, ["" + comp, "" + p1, "" + p2, "" + p3]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [comp + " is divisible by factors other than 1 and itself, so it is composite."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 18: Halfway number (Lesson 22 #23)
            (r) => {
                const pairs = [[27, 43, 35], [25, 45, 35], [31, 47, 39], [19, 39, 29], [23, 41, 32]];
                const [a, b, mid] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the number halfway between " + a + " and " + b + ".";
                const s = shuffle(r, ["" + mid, "" + (mid + 2), "" + (mid - 2), "" + (mid + 4)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Add the two numbers and divide by 2: (" + a + " + " + b + ") ÷ 2 = " + (a + b) + " ÷ 2 = " + mid + "."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            },
            // Category 19: Quarter of a year months (Lesson 22 #28)
            (r) => {
                const q = "A quarter of a year is 1/4 of a year. There are 12 months in a year. How many months are in a quarter of a year?";
                const s = shuffle(r, ["3 months", "4 months", "6 months", "2 months"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide 12 months by 4: 12 ÷ 4 = 3 months."],
                    lessonNum: 22,
                    lessonTitle: "“Equal Groups” Problems with Fractions"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 23: Ratio • Rate
    23: (rng, qIndex) => {
        const framings = [
            // Category 0: Pet ratio (Lesson 23 Practice Set a)
            (r) => {
                const pairs = [[12, 15], [8, 14], [10, 16], [14, 18], [9, 15]];
                const [d, c] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the ratio of dogs to cats in a neighborhood with " + d + " dogs and " + c + " cats?";
                const s = shuffle(r, [d + " to " + c, c + " to " + d, d + " to " + (d + c), c + " to " + (d + c)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Ratio of dogs to cats is (number of dogs) to (number of cats): " + d + " to " + c + "."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 1: Class gender ratio (Lesson 23 Practice Set b)
            (r) => {
                const q = "What is the girl-boy ratio in a class of 30 students with 17 boys?";
                const s = shuffle(r, ["13 to 17", "17 to 13", "13 to 30", "17 to 30"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Find the number of girls: 30 − 17 = 13. The girl-boy ratio is 13 to 17."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 2: Inverted ratio (Lesson 23 Practice Set c)
            (r) => {
                const pairs = [[7, 2], [5, 3], [8, 3], [9, 4], [6, 5]];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "If the ratio of cars to trucks in the parking lot is " + a + " to " + b + ", what is the ratio of trucks to cars in the parking lot?";
                const s = shuffle(r, [b + " to " + a, a + " to " + b, b + " to " + (a + b), a + " to " + (a + b)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Invert the ratio terms: if cars to trucks is " + a + " to " + b + ", then trucks to cars is " + b + " to " + a + "."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 3: Travel time rate (Lesson 23 Practice Set d)
            (r) => {
                const sets = [[400, 50, 8], [360, 60, 6], [300, 50, 6], [450, 50, 9], [350, 70, 5]];
                const [dist, speed, time] = sets[randInt(r, 0, sets.length - 1)];
                const q = "How long will it take a trucker to drive " + dist + " miles at " + speed + " miles per hour?";
                const s = shuffle(r, [time + " hours", (time + 1) + " hours", (time - 1) + " hours", (time + 2) + " hours"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Time = distance ÷ speed = " + dist + " ÷ " + speed + " = " + time + " hours."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 4: Unit cost rate (Lesson 23 Practice Set e)
            (r) => {
                const sets = [[4, 2.48, 0.62], [3, 2.76, 0.92], [4, 3.28, 0.82], [5, 3.75, 0.75]];
                const [qts, cost, unit] = sets[randInt(r, 0, sets.length - 1)];
                const q = "If a " + qts + "-quart container of milk costs $" + cost.toFixed(2) + ", what is the cost per quart?";
                const s = shuffle(r, [
                    "$" + unit.toFixed(2),
                    "$" + (unit + 0.10).toFixed(2),
                    "$" + (unit - 0.10).toFixed(2),
                    "$" + (unit + 0.20).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide total cost by number of quarts: $" + cost.toFixed(2) + " ÷ " + qts + " = $" + unit.toFixed(2) + " per quart."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 5: Metric ruler length (Lesson 23 #1)
            (r) => {
                const cms = [30, 20, 25, 40, 50];
                const cm = cms[randInt(r, 0, cms.length - 1)];
                const q = "How many millimeters long is a ruler that is " + cm + " cm long?";
                const s = shuffle(r, [(cm * 10) + " mm", cm + " mm", (cm * 100) + " mm", (cm * 10 - 20) + " mm"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1 cm = 10 mm, so " + cm + " cm = " + cm + " × 10 = " + (cm * 10) + " mm."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 6: Completed assignment problems (Lesson 23 #2)
            (r) => {
                const q = "Dan has finished 2/3 of the 30 problems on an assignment during class. How many problems did Dan finish during class?";
                const s = shuffle(r, ["20 problems", "10 problems", "15 problems", "25 problems"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Find 1/3 of 30: 30 ÷ 3 = 10. Multiply by 2: 10 × 2 = 20 problems."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 7: Gas mileage rate (Lesson 23 #4)
            (r) => {
                const sets = [[245, 7, 35], [240, 8, 30], [280, 7, 40], [270, 9, 30], [350, 10, 35]];
                const [m, g, mpg] = sets[randInt(r, 0, sets.length - 1)];
                const q = "On the open highway the car traveled " + m + " miles on " + g + " gallons of gas. What was the car's gas mileage for the trip in miles per gallon?";
                const s = shuffle(r, [mpg + " miles per gallon", (mpg + 5) + " miles per gallon", (mpg - 5) + " miles per gallon", (mpg + 10) + " miles per gallon"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Gas mileage = miles ÷ gallons = " + m + " ÷ " + g + " = " + mpg + " mpg."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 8: Fraction of whole number (Lesson 23 #5)
            (r) => {
                const sets = [[3, 5, 25, 15], [2, 5, 30, 12], [3, 4, 28, 21], [4, 5, 40, 32], [2, 3, 27, 18]];
                const [n, d, tot, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "What number is " + n + "/" + d + " of " + tot + "?";
                const s = shuffle(r, ["" + ans, "" + (ans + 3), "" + (ans - 3), "" + (ans + 6)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["(" + tot + " ÷ " + d + ") × " + n + " = " + (tot / d) + " × " + n + " = " + ans + "."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 9: Fraction of dollar amount (Lesson 23 #6)
            (r) => {
                const sets = [[7, 10, 36.00, 25.20], [3, 10, 40.00, 12.00], [3, 4, 32.00, 24.00], [2, 5, 45.00, 18.00]];
                const [n, d, amt, res] = sets[randInt(r, 0, sets.length - 1)];
                const q = "How much money is " + n + "/" + d + " of $" + amt.toFixed(2) + "?";
                const s = shuffle(r, [
                    "$" + res.toFixed(2),
                    "$" + (res + 2).toFixed(2),
                    "$" + (res - 2).toFixed(2),
                    "$" + (res + 5).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["($" + amt.toFixed(2) + " ÷ " + d + ") × " + n + " = $" + (amt / d).toFixed(2) + " × " + n + " = $" + res.toFixed(2) + "."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 10: Fraction sum with like denominators (Lesson 23 #7)
            (r) => {
                const sets = [[3, 4, 8], [2, 3, 7], [1, 4, 6], [2, 5, 9], [3, 2, 7]];
                const [a, b, d] = sets[randInt(r, 0, sets.length - 1)];
                const sum = a + b;
                const q = "What is the sum of " + a + "/" + d + " and " + b + "/" + d + "?";
                const s = shuffle(r, [sum + "/" + d, sum + "/" + (2 * d), (sum + 1) + "/" + d, Math.max(1, sum - 1) + "/" + d]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Add numerators and keep denominator: " + a + "/" + d + " + " + b + "/" + d + " = " + sum + "/" + d + "."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 11: Improper fraction to mixed number (Lesson 23 #8)
            (r) => {
                const sets = [
                    ["9/8", "1 1/8", ["1 2/8", "2 1/8", "1 7/8"]],
                    ["11/8", "1 3/8", ["1 1/8", "1 5/8", "2 3/8"]],
                    ["7/4", "1 3/4", ["1 1/4", "2 1/4", "1 2/4"]],
                    ["8/5", "1 3/5", ["1 2/5", "1 4/5", "2 3/5"]]
                ];
                const [imp, correct, dists] = sets[randInt(r, 0, sets.length - 1)];
                const q = "The improper fraction " + imp + " equals what mixed number?";
                const s = shuffle(r, [correct, ...dists]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [imp + " = " + correct + " by dividing numerator by denominator."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 12: Circle fraction to percent (Lesson 23 #9)
            (r) => {
                const q = "Two eighths of a circle is what percent of a circle?";
                const s = shuffle(r, ["25%", "12 1/2%", "50%", "37 1/2%"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["2/8 reduces to 1/4. 1/4 of 100% = 25%."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 13: Unknown factor in money multiplication (Lesson 23 #14)
            (r) => {
                const q = "Find the unknown number n: $0.35n = $35.00";
                const s = shuffle(r, ["100", "10", "1000", "35"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["n = $35.00 ÷ $0.35 = 100."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 14: Unknown subtrahend in money (Lesson 23 #15)
            (r) => {
                const q = "Find the unknown number m: $10.20 − m = $3.46";
                const s = shuffle(r, ["$6.74", "$7.74", "$6.84", "$13.66"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["m = $10.20 − $3.46 = $6.74."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 15: Rectangle perimeter with width half length (Lesson 23 #17)
            (r) => {
                const ls = [20, 16, 24, 30, 18];
                const L = ls[randInt(r, 0, ls.length - 1)];
                const W = L / 2;
                const peri = 2 * (L + W);
                const q = "The length of a rectangle is " + L + " inches. The width of the rectangle is half its length. What is the perimeter of the rectangle?";
                const s = shuffle(r, [peri + " inches", (2 * L) + " inches", (peri + 6) + " inches", (peri - 6) + " inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Width = " + L + " ÷ 2 = " + W + " inches.",
                        "Perimeter = 2 × (" + L + " + " + W + ") = 2 × " + (L + W) + " = " + peri + " inches."
                    ],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 16: Geometric sequence 6th term (Lesson 23 #18)
            (r) => {
                const q = "The rule for a sequence is doubling each term: 2, 4, 8, 16, ... What is the sixth number in the sequence?";
                const s = shuffle(r, ["64", "32", "48", "128"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["5th term is 16 × 2 = 32. 6th term is 32 × 2 = 64."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 17: Parentheses comparison (Lesson 23 #20)
            (r) => {
                const q = "Compare: 12 ÷ 6 − 2 ○ 12 ÷ (6 − 2)";
                const s = shuffle(r, ["<", ">", "=", "≠"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Left: 12 ÷ 6 − 2 = 2 − 2 = 0.",
                        "Right: 12 ÷ (6 − 2) = 12 ÷ 4 = 3.",
                        "0 < 3, so the comparison is <."
                    ],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 18: GCF of two numbers (Lesson 23 #21)
            (r) => {
                const q = "What is the greatest common factor (GCF) of 24 and 32?";
                const s = shuffle(r, ["8", "4", "16", "6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 32: 1, 2, 4, 8, 16, 32. GCF is 8."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            },
            // Category 19: Sum of first N positive odd numbers (Lesson 23 #22)
            (r) => {
                const ns = [7, 5, 6, 8, 9];
                const n = ns[randInt(r, 0, ns.length - 1)];
                const ans = n * n;
                const q = "What is the sum of the first " + n + " positive odd numbers?";
                const s = shuffle(r, ["" + ans, "" + (ans + n), "" + (ans - n), "" + (n * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The sum of the first n positive odd numbers is n²: " + n + " × " + n + " = " + ans + "."],
                    lessonNum: 23,
                    lessonTitle: "Ratio • Rate"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 24: Adding and Subtracting Fractions That Have
    24: (rng, qIndex) => {
        const framings = [
            // Category 0: Yard work earnings (Lesson 24 #1)
            (r) => {
                const sets = [[5, 6.00, 30.00], [4, 7.00, 28.00], [6, 6.50, 39.00], [5, 8.00, 40.00]];
                const [h, rate, tot] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Martin worked in the yard for " + h + " hours and was paid $" + rate.toFixed(2) + " per hour. How much did he earn?";
                const s = shuffle(r, [
                    "$" + tot.toFixed(2),
                    "$" + (tot + 5).toFixed(2),
                    "$" + (tot - 5).toFixed(2),
                    "$" + (tot + 10).toFixed(2)
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [h + " hours × $" + rate.toFixed(2) + " per hour = $" + tot.toFixed(2) + "."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 1: Fraction of dozen eggs (Lesson 24 #2)
            (r) => {
                const q = "Juan used 3/4 of a dozen eggs to make breakfast. How many eggs did Juan use?";
                const s = shuffle(r, ["9 eggs", "8 eggs", "6 eggs", "10 eggs"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["A dozen is 12 eggs. 1/4 of 12 is 3 eggs. 3 × 3 = 9 eggs."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 2: Fraction of a mile in yards (Lesson 24 #3)
            (r) => {
                const q = "One mile is 1760 yards. How many yards is 1/4 of a mile?";
                const s = shuffle(r, ["440 yards", "880 yards", "220 yards", "400 yards"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide 1760 by 4: 1760 ÷ 4 = 440 yards."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 3: Adding three fractions with like denominators (Lesson 24 #4)
            (r) => {
                const q = "Find the sum: 1/4 + 1/4 + 1/4";
                const s = shuffle(r, ["3/4", "3/12", "1/4", "1"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1/4 + 1/4 + 1/4 = (1 + 1 + 1)/4 = 3/4."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 4: Subtracting fractions with like denominators (Lesson 24 #5)
            (r) => {
                const q = "Find the difference: 7/8 − 3/8";
                const s = shuffle(r, ["4/8", "3/8", "5/8", "4/16"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["7/8 − 3/8 = (7 − 3)/8 = 4/8."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 5: Fractions adding to 1 (Lesson 24 #6)
            (r) => {
                const q = "Find the sum: 1/2 + 1/2";
                const s = shuffle(r, ["1", "2/4", "1/4", "2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1/2 + 1/2 = 2/2 = 1."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 6: Percent of circle sum (Lesson 24 #8)
            (r) => {
                const q = "What percent of a circle is 1/2 of a circle plus 1/4 of a circle?";
                const s = shuffle(r, ["75%", "50%", "25%", "100%"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1/2 = 50% and 1/4 = 25%. 50% + 25% = 75%."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 7: Classroom library book ratio (Lesson 24 #9)
            (r) => {
                const q = "In the classroom library there were 23 nonfiction books and 54 fiction books. What is the ratio of nonfiction books to fiction books?";
                const s = shuffle(r, ["23 to 54", "54 to 23", "23 to 77", "54 to 77"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Ratio of nonfiction to fiction is 23 to 54."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 8: Square corral fence perimeter (Lesson 24 #11)
            (r) => {
                const q = "Mr. Chen wanted to fence in a square corral for his horse. Each side needed to be 25 feet long. How many feet of fence did Mr. Chen need?";
                const s = shuffle(r, ["100 feet", "50 feet", "75 feet", "625 feet"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["A square has 4 equal sides: 4 × 25 feet = 100 feet."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 9: Prime number classification (Lesson 24 #12)
            (r) => {
                const q = "Which of these numbers is not a prime number: 21, 31, 41, 53?";
                const s = shuffle(r, ["21", "31", "41", "53"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["21 is divisible by 3 and 7 (3 × 7 = 21), so it is not prime."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 10: Division with remainder (Lesson 24 #13)
            (r) => {
                const q = "Divide: 1000 ÷ 9";
                const s = shuffle(r, ["111 R 1", "110 R 10", "111 R 2", "112 R 1"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1000 ÷ 9 = 111 with remainder 1."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 11: Division of money by 100 (Lesson 24 #15)
            (r) => {
                const q = "Divide: $350.00 ÷ 100";
                const s = shuffle(r, ["$3.50", "$35.00", "$0.35", "$3500.00"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Dividing by 100 shifts the decimal point two places to the left: $350.00 ÷ 100 = $3.50."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 12: Comparing fractions (Lesson 24 #16)
            (r) => {
                const q = "Compare: 1/3 ○ 1/2";
                const s = shuffle(r, ["<", ">", "=", "≠"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["When numerators are equal, the fraction with the larger denominator is smaller: 1/3 < 1/2."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 13: Average speed rate (Lesson 24 #18)
            (r) => {
                const q = "If Mr. Johnson drives 172 miles in 4 hours, what is the average speed of the rental van?";
                const s = shuffle(r, ["43 miles per hour", "40 miles per hour", "45 miles per hour", "48 miles per hour"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Average speed = distance ÷ time = 172 miles ÷ 4 hours = 43 miles per hour."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 14: Rounding to nearest million (Lesson 24 #20)
            (r) => {
                const q = "Round 32,987,145 to the nearest million.";
                const s = shuffle(r, ["33,000,000", "32,000,000", "30,000,000", "34,000,000"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The digit in the hundred-thousands place is 9, so round up: 32,987,145 rounds to 33,000,000."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 15: GCF of two numbers (Lesson 24 #21)
            (r) => {
                const q = "What is the greatest common factor (GCF) of 21 and 28?";
                const s = shuffle(r, ["7", "3", "4", "14"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Factors of 21: 1, 3, 7, 21. Factors of 28: 1, 2, 4, 7, 14, 28. GCF is 7."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 16: Divisibility by 2 (Lesson 24 #22)
            (r) => {
                const q = "Which of these numbers is divisible by 2: 123, 234, 345, 457?";
                const s = shuffle(r, ["234", "123", "345", "457"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["A number is divisible by 2 if its last digit is even (0, 2, 4, 6, 8). 234 ends in 4."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 17: Fraction equal to 1 (Lesson 24 #23)
            (r) => {
                const ds = [4, 6, 8, 10, 12];
                const d = ds[randInt(r, 0, ds.length - 1)];
                const q = "Write a fraction equal to 1 that has " + d + " as the denominator.";
                const s = shuffle(r, [d + "/" + d, "1/" + d, d + "/1", (d - 1) + "/" + d]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Any fraction where numerator equals denominator equals 1: " + d + "/" + d + " = 1."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 18: Unknown in division (Lesson 24 #24)
            (r) => {
                const q = "Find the unknown number w: w ÷ 8 = 20";
                const s = shuffle(r, ["160", "28", "12", "180"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiply both sides by 8: w = 20 × 8 = 160."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            },
            // Category 19: Unknown in multiplication (Lesson 24 #25)
            (r) => {
                const q = "Find the unknown number x: 7x = 84";
                const s = shuffle(r, ["12", "11", "13", "14"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide both sides by 7: x = 84 ÷ 7 = 12."],
                    lessonNum: 24,
                    lessonTitle: "Adding and Subtracting Fractions That Have"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 25: Writing Division Answers as Mixed Numbers • Multiples
    25: (rng, qIndex) => {
        const framings = [
            // Category 0: Fraction difference (Lesson 25 #1)
            (r) => {
                const q = "What is the difference between 5/6 and 1/6?";
                const s = shuffle(r, ["4/6", "3/6", "5/6", "4/12"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["5/6 − 1/6 = (5 − 1)/6 = 4/6."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 1: Football punts average (Lesson 25 #2)
            (r) => {
                const q = "In three tries Carlos punted the football 35 yards, 30 yards, and 40 yards. What was the average length of the punts?";
                const s = shuffle(r, ["35 yards", "30 yards", "40 yards", "38 yards"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Add the yards: 35 + 30 + 40 = 105 yards. Divide by 3: 105 ÷ 3 = 35 yards."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 2: Perimeter of equilateral triangle (Lesson 25 #4)
            (r) => {
                const sides = [8, 7, 9, 10, 12];
                const sVal = sides[randInt(r, 0, sides.length - 1)];
                const q = "What is the perimeter of an equilateral triangle with sides of length " + sVal + " inches?";
                const s = shuffle(r, [(3 * sVal) + " inches", (2 * sVal) + " inches", (4 * sVal) + " inches", (sVal * sVal) + " inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["An equilateral triangle has 3 equal sides: 3 × " + sVal + " = " + (3 * sVal) + " inches."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 3: Ribbon length division as mixed number (Lesson 25 #5)
            (r) => {
                const q = "A 30-inch length of ribbon was cut into 4 equal lengths. How long was each piece?";
                const s = shuffle(r, ["7 2/4 inches", "7 1/4 inches", "7 3/4 inches", "8 1/4 inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["30 ÷ 4 = 7 with a remainder of 2, which gives the mixed number 7 2/4 inches."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 4: Fraction of class not finished (Lesson 25 #6)
            (r) => {
                const q = "Two thirds of the class finished the test on time. What fraction of the class did not finish the test on time?";
                const s = shuffle(r, ["1/3", "2/3", "1/2", "3/3"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Subtract the finished fraction from the whole: 1 − 2/3 = 1/3."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 5: Compare fraction of a number (Lesson 25 #7)
            (r) => {
                const q = "Compare: 1/3 of 12 ○ 1/2 of 12";
                const s = shuffle(r, ["<", ">", "=", "≠"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1/3 of 12 = 4.",
                        "1/2 of 12 = 6.",
                        "4 < 6, so the comparison is <."
                    ],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 6: Fraction of half of a fraction (Lesson 25 #8)
            (r) => {
                const q = "What fraction is half of the fraction that is half of 1/2?";
                const s = shuffle(r, ["1/8", "1/4", "1/16", "1/6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Half of 1/2 is 1/4. Half of 1/4 is 1/8."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 7: Circle percent (Lesson 25 #9)
            (r) => {
                const q = "A whole circle is 100% of a circle. What percent of a circle is 3/4 of a circle?";
                const s = shuffle(r, ["75%", "25%", "50%", "80%"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["3/4 × 100% = 75%."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 8: Unit fractions in 1 (Lesson 25 #10)
            (r) => {
                const q = "How many 1/6s are in 1?";
                const s = shuffle(r, ["6", "1/6", "12", "3"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1 ÷ 1/6 = 6."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 9: Division answer as mixed number (Lesson 25 #12)
            (r) => {
                const q = "Divide 365 by 7 and write the answer as a mixed number.";
                const s = shuffle(r, ["52 1/7", "52 2/7", "51 1/7", "53 1/7"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["365 ÷ 7 = 52 with remainder 1, written as the mixed number 52 1/7."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 10: Adding fractions with like denominators (Lesson 25 #13)
            (r) => {
                const q = "Find the sum: 1/12 + 5/12";
                const s = shuffle(r, ["6/12", "6/24", "5/12", "7/12"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1/12 + 5/12 = (1 + 5)/12 = 6/12."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 11: Subtracting fractions with like denominators (Lesson 25 #14)
            (r) => {
                const q = "Find the difference: 5/6 − 2/6";
                const s = shuffle(r, ["3/6", "3/12", "2/6", "4/6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["5/6 − 2/6 = (5 − 2)/6 = 3/6."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 12: Order of operations with parentheses (Lesson 25 #15)
            (r) => {
                const q = "Simplify: (30 × 40) ÷ 60";
                const s = shuffle(r, ["20", "200", "12", "30"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["30 × 40 = 1200. 1200 ÷ 60 = 20."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 13: Team win-loss ratio (Lesson 25 #17)
            (r) => {
                const q = "A team won 7 games and lost 5 games. What was the team's win-loss ratio?";
                const s = shuffle(r, ["7 to 5", "5 to 7", "7 to 12", "5 to 12"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Win-loss ratio is (games won) to (games lost): 7 to 5."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 14: Multiplying pens cost (Lesson 25 #18)
            (r) => {
                const q = "Cheryl bought 10 pens for 25¢ each. How much did Cheryl spend?";
                const s = shuffle(r, ["$2.50", "$25.00", "$2.25", "$2.75"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["10 × $0.25 = $2.50."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 15: GCF of two numbers (Lesson 25 #19)
            (r) => {
                const q = "What is the greatest common factor (GCF) of 12 and 18?";
                const s = shuffle(r, ["6", "3", "2", "12"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. GCF is 6."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 16: Fraction of 100 (Lesson 25 #20)
            (r) => {
                const q = "What number is 5/100 of 100?";
                const s = shuffle(r, ["5", "50", "1", "10"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["5/100 × 100 = 5."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 17: Unknown factor in multiplication (Lesson 25 #22)
            (r) => {
                const q = "Find the unknown number n: 8n = 144";
                const s = shuffle(r, ["18", "16", "17", "19"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["n = 144 ÷ 8 = 18."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 18: Improper fraction to mixed number (Lesson 25 #27)
            (r) => {
                const q = "Write 15/4 as a mixed number.";
                const s = shuffle(r, ["3 3/4", "3 1/4", "4 1/4", "3 2/4"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["15 ÷ 4 = 3 with remainder 3, so 15/4 = 3 3/4."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            },
            // Category 19: First four multiples (Lesson 25 #29)
            (r) => {
                const q = "What are the first four multiples of 25?";
                const s = shuffle(r, [
                    "25, 50, 75, 100",
                    "50, 75, 100, 125",
                    "25, 50, 75, 125",
                    "1, 5, 25, 50"
                ]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiply 25 by 1, 2, 3, and 4: 25, 50, 75, 100."],
                    lessonNum: 25,
                    lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 26: Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers
    26: (rng, qIndex) => {
        const framings = [
            // Category 0: Bike trip round trip mixed numbers (Lesson 26 #1)
            (r) => {
                const q = "Maya rode her bike to the park and back. If the trip was 3 1/4 miles each way, how far did she ride altogether?";
                const s = shuffle(r, ["6 1/2 miles", "6 1/4 miles", "7 miles", "6 miles"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Add the two ways: 3 1/4 + 3 1/4 = 6 2/4 = 6 1/2 miles."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 1: Elephant age months to years (Lesson 26 #2)
            (r) => {
                const q = "The young elephant was 36 months old. How many years old was the elephant?";
                const s = shuffle(r, ["3 years", "2 years", "4 years", "3 1/2 years"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide by 12 months in a year: 36 ÷ 12 = 3 years."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 2: Party balloons fraction (Lesson 26 #3)
            (r) => {
                const q = "Mrs. Ling bought 2 dozen balloons for the party. If 1/4 of the balloons were red, how many balloons were red?";
                const s = shuffle(r, ["6 balloons", "8 balloons", "4 balloons", "12 balloons"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["2 dozen = 24 balloons. 1/4 of 24 = 24 ÷ 4 = 6 balloons."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 3: Centimeters in a kilometer (Lesson 26 #4)
            (r) => {
                const q = "There are 100 centimeters in a meter. There are 1000 meters in a kilometer. How many centimeters are in a kilometer?";
                const s = shuffle(r, ["100,000 centimeters", "10,000 centimeters", "1,000,000 centimeters", "1,000 centimeters"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["100 cm/m × 1000 m/km = 100,000 centimeters."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 4: Perimeter of equilateral triangle with mixed number (Lesson 26 #5)
            (r) => {
                const q = "What is the perimeter of an equilateral triangle with sides 2 1/2 inches long?";
                const s = shuffle(r, ["7 1/2 inches", "6 1/2 inches", "5 inches", "8 1/2 inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["3 × 2 1/2 = 3 × 2 + 3 × 1/2 = 6 + 1 1/2 = 7 1/2 inches."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 5: Compare sum of percents (Lesson 26 #6)
            (r) => {
                const q = "Compare: 12 1/2% + 12 1/2% ○ 25%";
                const s = shuffle(r, ["=", "<", ">", "≠"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["12 1/2% + 12 1/2% = 25%. Since 25% = 25%, the comparison is =."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 6: Adding fractions with sum greater than 1 (Lesson 26 #7)
            (r) => {
                const q = "Add and simplify: 5/8 + 7/8";
                const s = shuffle(r, ["1 1/2", "1 1/4", "1 3/8", "12/16"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["5/8 + 7/8 = 12/8 = 1 4/8 = 1 1/2."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 7: Circle fraction to percent (Lesson 26 #8)
            (r) => {
                const q = "One eighth of a circle is what percent of a circle?";
                const s = shuffle(r, ["12 1/2%", "25%", "15%", "10%"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1/8 of 100% = 100 ÷ 8 = 12 1/2%."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 8: Equivalent fraction with denominator 8 (Lesson 26 #9)
            (r) => {
                const q = "Write a fraction equal to 1/2 that has a denominator of 8.";
                const s = shuffle(r, ["4/8", "2/8", "6/8", "3/8"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiply numerator and denominator by 4: (1 × 4)/(2 × 4) = 4/8."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 9: GCF of two numbers (Lesson 26 #10)
            (r) => {
                const q = "What is the greatest common factor (GCF) of 15 and 25?";
                const s = shuffle(r, ["5", "1", "10", "15"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Factors of 15: 1, 3, 5, 15. Factors of 25: 1, 5, 25. GCF is 5."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 10: Fraction sequence next term (Lesson 26 #11)
            (r) => {
                const q = "Find the next term in the sequence: 1/8, 1/4, 3/8, 1/2, ...";
                const s = shuffle(r, ["5/8", "3/4", "7/8", "1"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Write in eighths: 1/8, 2/8, 3/8, 4/8, ... The next term is 5/8."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 11: Improper fraction to mixed number (Lesson 26 #12)
            (r) => {
                const q = "Write 17/5 as a mixed number.";
                const s = shuffle(r, ["3 2/5", "3 1/5", "2 2/5", "3 3/5"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["17 ÷ 5 = 3 with remainder 2, so 17/5 = 3 2/5."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 12: Adding mixed numbers with like denominators (Lesson 26 #13)
            (r) => {
                const q = "Add and simplify: 2 1/3 + 1 1/3";
                const s = shuffle(r, ["3 2/3", "3 1/3", "4 1/3", "3 2/6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Add whole numbers: 2 + 1 = 3. Add fractions: 1/3 + 1/3 = 2/3. Sum is 3 2/3."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 13: Subtracting mixed numbers (Lesson 26 #14)
            (r) => {
                const q = "Subtract: 4 5/8 − 2 3/8";
                const s = shuffle(r, ["2 1/4", "2 3/8", "2 1/2", "2 1/8"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Subtract whole numbers: 4 − 2 = 2. Subtract fractions: 5/8 − 3/8 = 2/8 = 1/4. Result is 2 1/4."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 14: Missing mixed number addend (Lesson 26 #16)
            (r) => {
                const q = "Find the unknown number n: n + 1 1/4 = 3 3/4";
                const s = shuffle(r, ["2 1/2", "2 1/4", "2 3/4", "1 1/2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["n = 3 3/4 − 1 1/4 = 2 2/4 = 2 1/2."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 15: Reducing fraction 6/8 (Lesson 26 Practice Set a)
            (r) => {
                const q = "Reduce the fraction: 6/8";
                const s = shuffle(r, ["3/4", "2/3", "1/2", "3/8"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide numerator and denominator by 2: (6 ÷ 2)/(8 ÷ 2) = 3/4."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 16: Reducing fraction 4/6 (Lesson 26 Practice Set b)
            (r) => {
                const q = "Reduce the fraction: 4/6";
                const s = shuffle(r, ["2/3", "1/2", "3/4", "2/6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide numerator and denominator by 2: (4 ÷ 2)/(6 ÷ 2) = 2/3."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 17: Adding mixed numbers with reduction (Lesson 26 Practice Set d)
            (r) => {
                const q = "Add and reduce the answer: 1 1/8 + 2 3/8";
                const s = shuffle(r, ["3 1/2", "3 1/4", "3 3/8", "3 5/8"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1 + 2 = 3. 1/8 + 3/8 = 4/8 = 1/2. Answer is 3 1/2."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 18: Subtracting mixed numbers with reduction (Lesson 26 Practice Set e)
            (r) => {
                const q = "Subtract and reduce the answer: 5 5/6 − 2 1/6";
                const s = shuffle(r, ["3 2/3", "3 1/3", "3 1/2", "3 5/6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["5 − 2 = 3. 5/6 − 1/6 = 4/6 = 2/3. Answer is 3 2/3."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            },
            // Category 19: Fractions adding to whole number (Lesson 26 Practice Set f)
            (r) => {
                const q = "Add: 1/4 + 3/4";
                const s = shuffle(r, ["1", "4/8", "1/2", "2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1/4 + 3/4 = 4/4 = 1."],
                    lessonNum: 26,
                    lessonTitle: "Using Manipulatives to Reduce Fractions • Adding and Subtracting Mixed Numbers"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 27: Measures of a Circle
    27: (rng, qIndex) => {
        const framings = [
            // Category 0: Distance across circle definition (Lesson 27 Practice Set a)
            (r) => {
                const q = "What is the name for the distance across a circle through its center?";
                const s = shuffle(r, ["Diameter", "Radius", "Circumference", "Perimeter"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The distance across a circle through its center is the diameter."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 1: Distance around circle definition (Lesson 27 Practice Set b)
            (r) => {
                const q = "What is the name for the distance around a circle?";
                const s = shuffle(r, ["Circumference", "Diameter", "Radius", "Area"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The distance around a circle is the circumference."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 2: Distance from center to circle definition (Lesson 27 Practice Set c)
            (r) => {
                const q = "What is the name for the distance from the center of a circle to any point on the circle?";
                const s = shuffle(r, ["Radius", "Diameter", "Circumference", "Chord"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The distance from the center to any point on the circle is the radius."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 3: Radius from diameter (Lesson 27 Practice Set d)
            (r) => {
                const diams = [10, 8, 12, 14, 16, 20];
                const d = diams[randInt(r, 0, diams.length - 1)];
                const rad = d / 2;
                const q = "If the diameter of a circle is " + d + " inches, what is the radius of the circle?";
                const s = shuffle(r, [rad + " inches", (2 * d) + " inches", d + " inches", (rad / 2) + " inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Radius is half the diameter: " + d + " ÷ 2 = " + rad + " inches."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 4: Diameter from radius (Lesson 27 #27)
            (r) => {
                const rads = [6, 5, 7, 8, 9, 10];
                const rad = rads[randInt(r, 0, rads.length - 1)];
                const diam = 2 * rad;
                const q = "If the radius of a circle is " + rad + " cm, what is the diameter of the circle?";
                const s = shuffle(r, [diam + " cm", Math.floor(rad / 2) + " cm", rad + " cm", (diam + 4) + " cm"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Diameter is twice the radius: 2 × " + rad + " = " + diam + " cm."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 5: Product of sum and difference (Lesson 27 #1)
            (r) => {
                const q = "What is the product of the sum of 55 and 45 and the difference of 55 and 45?";
                const s = shuffle(r, ["1000", "100", "10,000", "500"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Sum = 55 + 45 = 100. Difference = 55 − 45 = 10. Product = 100 × 10 = 1000."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 6: Water in sack of potatoes (Lesson 27 #2)
            (r) => {
                const q = "Potatoes are three-fourths water. If a sack of potatoes weighs 20 pounds, how many pounds of water are in the potatoes?";
                const s = shuffle(r, ["15 pounds", "12 pounds", "16 pounds", "5 pounds"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["3/4 of 20 = (20 ÷ 4) × 3 = 5 × 3 = 15 pounds."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 7: Rounding to nearest ten thousand (Lesson 27 #6)
            (r) => {
                const q = "Round 1,234,567 to the nearest ten thousand.";
                const s = shuffle(r, ["1,230,000", "1,200,000", "1,240,000", "1,235,000"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The thousands digit is 4, which is less than 5, so round down to 1,230,000."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 8: Price per pound rate (Lesson 27 #7)
            (r) => {
                const q = "If 10 pounds of apples cost $12.90, what is the price per pound?";
                const s = shuffle(r, ["$1.29", "$1.20", "$1.39", "$12.90"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["$12.90 ÷ 10 = $1.29 per pound."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 9: Denominator of fraction (Lesson 27 #8)
            (r) => {
                const q = "What is the denominator of the fraction 2/3?";
                const s = shuffle(r, ["3", "2", "5", "1"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["In 2/3, 2 is the numerator and 3 is the denominator."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 10: Adding fractions to make 1 (Lesson 27 #14)
            (r) => {
                const q = "Find the sum: 3/8 + 5/8";
                const s = shuffle(r, ["1", "8/16", "7/8", "2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["3/8 + 5/8 = 8/8 = 1."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 11: Unit fractions in 1 (Lesson 27 #15)
            (r) => {
                const q = "How many 1/8s are in 1?";
                const s = shuffle(r, ["8", "1/8", "4", "16"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1 ÷ 1/8 = 8."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 12: Half of a fraction (Lesson 27 #17)
            (r) => {
                const q = "What fraction is half of 1/4?";
                const s = shuffle(r, ["1/8", "1/2", "1/16", "1/6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Half of 1/4 = 1/4 ÷ 2 = 1/8."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 13: Division with remainder (Lesson 27 #19)
            (r) => {
                const q = "Divide 2100 by 52 and write the answer with a remainder.";
                const s = shuffle(r, ["40 R 20", "40 R 10", "41 R 20", "39 R 20"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["52 × 40 = 2080. 2100 − 2080 = 20 remainder. Result: 40 R 20."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 14: String shaped into a square (Lesson 27 #20)
            (r) => {
                const q = "If a 36-inch-long string is made into the shape of a square, how long will each side be?";
                const s = shuffle(r, ["9 inches", "6 inches", "12 inches", "18 inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["A square has 4 equal sides: 36 inches ÷ 4 = 9 inches."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 15: Improper fraction to mixed number (Lesson 27 #21)
            (r) => {
                const q = "Write 11/4 as a mixed number.";
                const s = shuffle(r, ["2 3/4", "2 1/4", "3 1/4", "2 2/4"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["11 ÷ 4 = 2 with remainder 3, so 11/4 = 2 3/4."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 16: Parentheses order of operations (Lesson 27 #22)
            (r) => {
                const q = "Simplify: (55 + 45) ÷ (55 − 45)";
                const s = shuffle(r, ["10", "1", "100", "20"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["(55 + 45) = 100. (55 − 45) = 10. 100 ÷ 10 = 10."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 17: Divisibility by 9 (Lesson 27 #25)
            (r) => {
                const q = "Which of these numbers is divisible by 9: 432, 433, 435, 436?";
                const s = shuffle(r, ["432", "433", "435", "436"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Sum of digits of 432: 4 + 3 + 2 = 9, which is divisible by 9."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 18: Even prime number (Lesson 27 #26)
            (r) => {
                const q = "Which prime number is not an odd number?";
                const s = shuffle(r, ["2", "1", "3", "0"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["2 is the only even prime number."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            },
            // Category 19: Ratio of boys to girls in class (Lesson 27 #28)
            (r) => {
                const q = "In a class of 28 students, 12 are boys. What is the ratio of boys to girls?";
                const s = shuffle(r, ["12 to 16", "16 to 12", "12 to 28", "16 to 28"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Girls = 28 − 12 = 16. Ratio of boys to girls is 12 to 16."],
                    lessonNum: 27,
                    lessonTitle: "Measures of a Circle"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 28: Angles
    28: (rng, qIndex) => {
        const framings = [
            // Category 0: Acute angle definition (Lesson 28 Practice Set a)
            (r) => {
                const q = "An angle that measures less than 90° is what type of angle?";
                const s = shuffle(r, ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["An angle measuring less than 90° is an acute angle."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 1: Right angle definition (Lesson 28 Practice Set a)
            (r) => {
                const q = "An angle that measures exactly 90° is what type of angle?";
                const s = shuffle(r, ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["An angle measuring exactly 90° is a right angle."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 2: Obtuse angle definition (Lesson 28 Practice Set a)
            (r) => {
                const q = "An angle that measures more than 90° but less than 180° is what type of angle?";
                const s = shuffle(r, ["Obtuse angle", "Acute angle", "Right angle", "Straight angle"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["An angle measuring between 90° and 180° is an obtuse angle."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 3: Clock angle at 4 o'clock (Lesson 28 Practice Set e)
            (r) => {
                const q = "What type of angle is formed by the hands of a clock at 4 o'clock?";
                const s = shuffle(r, ["Obtuse angle", "Acute angle", "Right angle", "Straight angle"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["At 4 o'clock, the angle between the hands is 4 × 30° = 120°, which is obtuse."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 4: Equilateral triangle from string (Lesson 28 #18)
            (r) => {
                const lengths = [36, 30, 45, 27, 42, 48];
                const len = lengths[randInt(r, 0, lengths.length - 1)];
                const side = len / 3;
                const q = "The three sides of an equilateral triangle are of equal length. If a " + len + "-inch-long string is formed into the shape of an equilateral triangle, how long will each side of the triangle be?";
                const s = shuffle(r, [side + " inches", (side + 2) + " inches", (side - 2) + " inches", (len / 4) + " inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide the total length by 3: " + len + " inches ÷ 3 = " + side + " inches."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 5: Corner of square paper angle (Lesson 28 Practice Set f)
            (r) => {
                const q = "What type of angle is formed at the corner of a square piece of paper?";
                const s = shuffle(r, ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The corner of a square piece of paper forms a 90° right angle."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 6: Fraction of two dozen eggs (Lesson 28 #24)
            (r) => {
                const sets = [[3, 4, 18], [2, 3, 16], [5, 6, 20], [1, 3, 8], [5, 12, 10]];
                const [n, d, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "What number of eggs is " + n + "/" + d + " of two dozen eggs?";
                const s = shuffle(r, [ans + " eggs", (ans + 2) + " eggs", (ans - 2) + " eggs", (ans + 4) + " eggs"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Two dozen eggs = 2 × 12 = 24 eggs. " + n + "/" + d + " of 24 = (24 ÷ " + d + ") × " + n + " = " + ans + " eggs."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 7: Sum of three unit fractions (Lesson 28 #1)
            (r) => {
                const q = "What is the sum of 1/3 and 1/3 and 1/3?";
                const s = shuffle(r, ["1", "3/9", "2/3", "1/3"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1/3 + 1/3 + 1/3 = 3/3 = 1."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 8: Fraction of money (Lesson 28 #10)
            (r) => {
                const q = "How much money is 2/3 of $24.00?";
                const s = shuffle(r, ["$16.00", "$8.00", "$12.00", "$18.00"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1/3 of $24.00 = $8.00. 2 × $8.00 = $16.00."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 9: Percent of 100% (Lesson 28 #11)
            (r) => {
                const q = "What is 1/10 of 100%?";
                const s = shuffle(r, ["10%", "1%", "5%", "20%"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["100% ÷ 10 = 10%."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 10: Circle percent to fraction (Lesson 28 #12)
            (r) => {
                const q = "Twenty-five percent of a circle is what fraction of a circle?";
                const s = shuffle(r, ["1/4", "1/2", "1/5", "1/8"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["25% = 25/100 = 1/4."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 11: Distance on gas rate (Lesson 28 #13)
            (r) => {
                const q = "At 26 miles per gallon, how far can Ms. Olsen expect to travel on 11 gallons of gas?";
                const s = shuffle(r, ["286 miles", "260 miles", "276 miles", "296 miles"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["26 miles/gal × 11 gal = 286 miles."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 12: Missing fraction addend (Lesson 28 #14)
            (r) => {
                const q = "Find the unknown number m: m + 1/4 = 3/4";
                const s = shuffle(r, ["1/2", "1/4", "3/4", "2/3"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["m = 3/4 − 1/4 = 2/4 = 1/2."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 13: Unknown in subtraction (Lesson 28 #15)
            (r) => {
                const q = "Find the unknown number w: 423 − w = 297";
                const s = shuffle(r, ["126", "116", "136", "720"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["w = 423 − 297 = 126."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 14: Average test score (Lesson 28 #17)
            (r) => {
                const q = "On the last four tests Christie's scores were 22, 20, 23, and 23. What was her average score?";
                const s = shuffle(r, ["22", "21", "23", "20"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Sum = 22 + 20 + 23 + 23 = 88. Average = 88 ÷ 4 = 22."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 15: GCF of three numbers (Lesson 28 #19)
            (r) => {
                const q = "What is the greatest common factor (GCF) of 24, 36, and 60?";
                const s = shuffle(r, ["12", "6", "4", "18"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The greatest number that divides 24, 36, and 60 evenly is 12."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 16: Multi-digit subtraction across zeros (Lesson 28 #20)
            (r) => {
                const q = "Subtract: 10,010 − 9909";
                const s = shuffle(r, ["101", "111", "91", "1001"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["10,010 − 9909 = 101."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 17: Distributive property mental math (Lesson 28 #21)
            (r) => {
                const q = "Simplify: (100 × 100) − (100 × 99)";
                const s = shuffle(r, ["100", "10", "1000", "1"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["100 × (100 − 99) = 100 × 1 = 100."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 18: Division as mixed number (Lesson 28 #23)
            (r) => {
                const q = "Divide 5097 by 10 and write the answer as a mixed number.";
                const s = shuffle(r, ["509 7/10", "509 1/10", "508 7/10", "510 7/10"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["5097 ÷ 10 = 509 with remainder 7, written as 509 7/10."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            },
            // Category 19: Flag stripes ratio (Lesson 28 #28)
            (r) => {
                const q = "There are 13 stripes on the flag. Seven of the stripes are red, and the rest are white. What is the ratio of red stripes to white stripes?";
                const s = shuffle(r, ["7 to 6", "6 to 7", "7 to 13", "6 to 13"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["White stripes = 13 − 7 = 6. Ratio of red to white stripes is 7 to 6."],
                    lessonNum: 28,
                    lessonTitle: "Angles"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 29: Multiplying Fractions • Reducing Fractions by Dividing by Common Factors
    29: (rng, qIndex) => {
        const framings = [
            // Category 0: Tons to pounds conversion (Lesson 29 #1)
            (r) => {
                const q = "An African elephant can weigh 8 tons. If a ton is 2000 pounds, how many pounds can an African elephant weigh?";
                const s = shuffle(r, ["16,000 pounds", "8,000 pounds", "14,000 pounds", "20,000 pounds"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["8 tons × 2000 pounds/ton = 16,000 pounds."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 1: Product subtracted from sum of fractions (Lesson 29 #3)
            (r) => {
                const q = "If the product of 1/2 and 1/2 is subtracted from the sum of 1/2 and 1/2, what is the result?";
                const s = shuffle(r, ["3/4", "1/4", "1/2", "1"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Sum: 1/2 + 1/2 = 1.",
                        "Product: 1/2 × 1/2 = 1/4.",
                        "Difference: 1 − 1/4 = 3/4."
                    ],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 2: Multiplying fractions with cancellation (Lesson 29 #7)
            (r) => {
                const q = "Multiply the fractions: 1/2 × 2/3";
                const s = shuffle(r, ["1/3", "2/5", "2/3", "1/6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["(1 × 2)/(2 × 3) = 2/6 = 1/3."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 3: Multiplying fractions with simplification (Lesson 29 #8)
            (r) => {
                const q = "Simplify the multiplication: 3/4 × 2/3";
                const s = shuffle(r, ["1/2", "5/7", "6/7", "1/3"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["(3 × 2)/(4 × 3) = 6/12 = 1/2."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 4: Sequence next term (Lesson 29 #10)
            (r) => {
                const q = "Find the next term in the sequence: 1, 4, 7, 10, ...";
                const s = shuffle(r, ["13", "12", "14", "15"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The sequence adds 3 each time: 10 + 3 = 13."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 5: Fraction of year remaining (Lesson 29 #11)
            (r) => {
                const q = "When 5 months of the year have passed, what fraction of the year remains?";
                const s = shuffle(r, ["7/12", "5/12", "6/12", "8/12"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["There are 12 months in a year: 12 − 5 = 7 months remain. The fraction is 7/12."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 6: Money multiplied by 100 (Lesson 29 #12)
            (r) => {
                const q = "Find the product: $3.60 × 100";
                const s = shuffle(r, ["$360.00", "$36.00", "$3600.00", "$3.60"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiplying by 100 moves the decimal two places right: $3.60 × 100 = $360.00."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 7: Quotient divided by 100 (Lesson 29 #13)
            (r) => {
                const q = "Find the quotient: 50,000 ÷ 100";
                const s = shuffle(r, ["500", "50", "5,000", "500,000"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Dividing by 100 removes two zeros: 50,000 ÷ 100 = 500."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 8: Improper fraction to mixed number with reduction (Lesson 29 #14)
            (r) => {
                const q = "Convert 18/4 to a mixed number with the fraction part reduced to simplest form.";
                const s = shuffle(r, ["4 1/2", "4 2/4", "4 1/4", "3 1/2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["18 ÷ 4 = 4 with remainder 2, giving 4 2/4. Reducing 2/4 gives 4 1/2."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 9: Temperature increase from negative (Lesson 29 #15)
            (r) => {
                const q = "The temperature rose from −8°F to 15°F. This was an increase of how many degrees?";
                const s = shuffle(r, ["23°F", "7°F", "15°F", "21°F"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Subtract initial from final: 15 − (−8) = 15 + 8 = 23°F."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 10: Unknown addend in 3 numbers (Lesson 29 #16)
            (r) => {
                const q = "Find the unknown number m: m + 496 + 2684 = 3217";
                const s = shuffle(r, ["37", "27", "47", "137"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["496 + 2684 = 3180. m = 3217 − 3180 = 37."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 11: Unknown in subtraction (Lesson 29 #17)
            (r) => {
                const q = "Find the unknown number n: 1000 − n = 857";
                const s = shuffle(r, ["143", "153", "133", "243"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["n = 1000 − 857 = 143."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 12: Unknown factor in multiplication (Lesson 29 #18)
            (r) => {
                const q = "Find the unknown number x: 24x = 480";
                const s = shuffle(r, ["20", "15", "25", "24"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["x = 480 ÷ 24 = 20."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 13: Product of three prime numbers (Lesson 29 #19)
            (r) => {
                const q = "Find the product: 7 × 11 × 13";
                const s = shuffle(r, ["1001", "1011", "991", "1000"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["7 × 11 = 77. 77 × 13 = 1001."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 14: Estimating quotient (Lesson 29 #20)
            (r) => {
                const q = "Estimate the quotient: 4963 ÷ 39";
                const s = shuffle(r, ["125", "100", "150", "120"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Round 4963 to 5000 and 39 to 40: 5000 ÷ 40 = 125."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 15: Rectangle length from perimeter and width (Lesson 29 #22)
            (r) => {
                const q = "The perimeter of a rectangle is 60 mm. The width of the rectangle is 10 mm. What is its length?";
                const s = shuffle(r, ["20 mm", "25 mm", "15 mm", "50 mm"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Half of the perimeter is length + width: 60 ÷ 2 = 30 mm. Length = 30 − 10 = 20 mm."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 16: Multiplying fractions product (Lesson 29 #27)
            (r) => {
                const q = "What is the product of 3/5 and 2/3?";
                const s = shuffle(r, ["2/5", "5/8", "6/15", "1/2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["3/5 × 2/3 = (3 × 2)/(5 × 3) = 6/15 = 2/5."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 17: Three pennies row length (Lesson 29 Example 4)
            (r) => {
                const q = "Three pennies are placed side by side. The diameter of one penny is 3/4 inch. How long is the row of pennies?";
                const s = shuffle(r, ["2 1/4 inches", "3 inches", "2 inches", "2 1/2 inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiply 3 by 3/4 inch: 3 × 3/4 = 9/4 = 2 1/4 inches."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 18: Product of fractions (Lesson 29 Practice Set c)
            (r) => {
                const q = "Find the product: 2/5 × 3/4";
                const s = shuffle(r, ["3/10", "5/9", "6/20", "1/2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["(2 × 3)/(5 × 4) = 6/20 = 3/10."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            },
            // Category 19: Reducing fraction by GCF (Lesson 29 Practice Set e)
            (r) => {
                const q = "Reduce the fraction 8/12 by dividing both terms by their greatest common factor.";
                const s = shuffle(r, ["2/3", "4/6", "1/2", "3/4"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["GCF of 8 and 12 is 4: (8 ÷ 4)/(12 ÷ 4) = 2/3."],
                    lessonNum: 29,
                    lessonTitle: "Multiplying Fractions • Reducing Fractions by Dividing by Common Factors"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 30: Least Common Multiple (LCM) • Reciprocals
    30: (rng, qIndex) => {
        const framings = [
            // Category 0: Subtracting multiples (Lesson 30 #1)
            (r) => {
                const q = "If the 4th multiple of 3 is subtracted from the 3rd multiple of 4, what is the difference?";
                const s = shuffle(r, ["0", "1", "12", "2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["4th multiple of 3 is 4 × 3 = 12. 3rd multiple of 4 is 3 × 4 = 12. 12 − 12 = 0."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 1: Water in body weight (Lesson 30 #2)
            (r) => {
                const weights = [90, 60, 75, 120, 150];
                const w = weights[randInt(r, 0, weights.length - 1)];
                const ans = (w / 3) * 2;
                const q = "About 2/3 of a person's body weight is water. If Albert weighs " + w + " pounds, how many pounds of Albert's weight is water?";
                const s = shuffle(r, [ans + " pounds", (ans / 2) + " pounds", (ans + 15) + " pounds", (w - 10) + " pounds"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["2/3 × " + w + " = (" + w + " ÷ 3) × 2 = " + (w / 3) + " × 2 = " + ans + " pounds."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 2: First three multiples (Lesson 30 #4)
            (r) => {
                const q = "What are the first three multiples of 12?";
                const s = shuffle(r, ["12, 24, 36", "1, 2, 3", "12, 24, 48", "6, 12, 18"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiples of 12 are 1 × 12 = 12, 2 × 12 = 24, 3 × 12 = 36."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 3: Least Common Multiple (LCM) of 4 and 6 (Lesson 30 #5)
            (r) => {
                const q = "What is the least common multiple (LCM) of 4 and 6?";
                const s = shuffle(r, ["12", "24", "2", "18"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiples of 4: 4, 8, 12, 16... Multiples of 6: 6, 12, 18... The least common multiple is 12."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 4: Multiplying fractions (Lesson 30 #10)
            (r) => {
                const q = "Multiply: 5/6 × 2/3";
                const s = shuffle(r, ["5/9", "7/9", "10/18", "1/2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["(5 × 2)/(6 × 3) = 10/18 = 5/9."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 5: Number of whole-number factors (Lesson 30 #13)
            (r) => {
                const q = "The number 12 has how many different whole-number factors?";
                const s = shuffle(r, ["6", "4", "5", "8"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["The factors of 12 are 1, 2, 3, 4, 6, and 12, for a total of 6 factors."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 6: Adding three money amounts (Lesson 30 #14)
            (r) => {
                const q = "Find the sum: $3.00 + $24.00 + $6.50";
                const s = shuffle(r, ["$33.50", "$32.50", "$34.50", "$30.50"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["$3.00 + $24.00 = $27.00. $27.00 + $6.50 = $33.50."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 7: Estimating product (Lesson 30 #16)
            (r) => {
                const q = "Estimate the product: 596 × 405";
                const s = shuffle(r, ["240,000", "200,000", "250,000", "24,000"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Round 596 to 600 and 405 to 400: 600 × 400 = 240,000."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 8: Division by 100 (Lesson 30 #19)
            (r) => {
                const q = "Divide: 500,000 ÷ 100";
                const s = shuffle(r, ["5,000", "500", "50,000", "50"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Dividing by 100 removes two zeros: 500,000 ÷ 100 = 5,000."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 9: Long division (Lesson 30 #20)
            (r) => {
                const q = "Divide: 8540 ÷ 35";
                const s = shuffle(r, ["244", "234", "254", "240"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["8540 ÷ 35 = 244."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 10: Reducing fraction (Lesson 30 #22)
            (r) => {
                const q = "Reduce the fraction: 9/12";
                const s = shuffle(r, ["3/4", "2/3", "1/2", "3/6"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Divide numerator and denominator by 3: (9 ÷ 3)/(12 ÷ 3) = 3/4."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 11: Average of three numbers (Lesson 30 #23)
            (r) => {
                const q = "What is the average of 375, 632, and 571?";
                const s = shuffle(r, ["526", "516", "536", "520"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Sum = 375 + 632 + 571 = 1578. Average = 1578 ÷ 3 = 526."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 12: Perimeter of regular hexagon (Lesson 30 #24)
            (r) => {
                const sides = [15, 12, 14, 16, 18, 20];
                const sVal = sides[randInt(r, 0, sides.length - 1)];
                const peri = 6 * sVal;
                const q = "A regular hexagon has six sides of equal length. If each side is " + sVal + " mm, what is the perimeter of the hexagon?";
                const s = shuffle(r, [peri + " mm", (4 * sVal) + " mm", (peri + 6) + " mm", (peri - 6) + " mm"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["A regular hexagon has 6 equal sides: 6 × " + sVal + " = " + peri + " mm."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 13: Product of number and its reciprocal (Lesson 30 #25)
            (r) => {
                const q = "What is the product of any nonzero number and its reciprocal?";
                const s = shuffle(r, ["1", "0", "2", "The number itself"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["By definition, the product of any nonzero number and its reciprocal is always 1."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 14: How many fractions in 1 (Lesson 30 #26)
            (r) => {
                const q = "How many 2/5s are in 1?";
                const s = shuffle(r, ["2 1/2", "2", "5/2", "1 1/2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["1 ÷ 2/5 = 1 × 5/2 = 5/2 = 2 1/2."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 15: Reciprocal of a fraction (Lesson 30 #27)
            (r) => {
                const items = [["3/8", "8/3", ["3/8", "5/8", "1/8"]], ["2/5", "5/2", ["2/5", "3/5", "1/5"]], ["3/4", "4/3", ["3/4", "1/4", "4/1"]], ["5/6", "6/5", ["5/6", "1/6", "6/1"]]];
                const [frac, rec, dists] = items[randInt(r, 0, items.length - 1)];
                const q = "What is the reciprocal of " + frac + "?";
                const s = shuffle(r, [rec, ...dists]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["To find the reciprocal of a fraction, invert the terms: the reciprocal of " + frac + " is " + rec + "."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 16: Reciprocal of a whole number (Lesson 30 #28)
            (r) => {
                const nums = [6, 5, 7, 8, 9];
                const n = nums[randInt(r, 0, nums.length - 1)];
                const q = "What is the reciprocal of " + n + "?";
                const s = shuffle(r, ["1/" + n, "" + n, n + "/1", "1"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Think of " + n + " as " + n + "/1. Inverting gives 1/" + n + "."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 17: Improper fraction to mixed number with reduction (Lesson 30 #29)
            (r) => {
                const q = "Convert 10/4 to a mixed number in simplest form.";
                const s = shuffle(r, ["2 1/2", "2 2/4", "2 1/4", "3 1/2"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["10 ÷ 4 = 2 with remainder 2, which gives 2 2/4. Reducing 2/4 gives 2 1/2."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 18: Coins placed side by side row length (Lesson 30 #30)
            (r) => {
                const q = "Four pennies are placed side by side. The diameter of one penny is 3/4 inch. What is the total length of the row of pennies?";
                const s = shuffle(r, ["3 inches", "2 1/2 inches", "3 1/4 inches", "4 inches"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiply the number of pennies by the diameter: 4 × 3/4 inch = 12/4 = 3 inches."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            },
            // Category 19: LCM of 6 and 8 (Lesson 30 Practice)
            (r) => {
                const q = "What is the least common multiple (LCM) of 6 and 8?";
                const s = shuffle(r, ["24", "48", "12", "16"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: ["Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... The LCM is 24."],
                    lessonNum: 30,
                    lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};
`;

fs.writeFileSync(outPath, content, 'utf8');
console.log('Successfully wrote', outPath, 'Length:', content.length);

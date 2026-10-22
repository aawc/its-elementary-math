import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 11: Problems About Comparing • Problems About Separating
    11: (rng, qIndex) => {
        const framings = [
            // Category 0: Laps word problem (Lesson 11 #1)
            (r) => {
                const names = ["Juan", "Darius", "Keisha", "Marcus", "Elena"];
                const name = names[randInt(r, 0, names.length - 1)];
                const run1 = randInt(r, 6, 14);
                const run2 = randInt(r, 8, 18);
                const total = run1 + run2;
                const q = name + " ran " + run1 + " laps and rested. Then he ran some more laps. If " + name + " ran " + total + " laps in all, how many laps did he run after he rested?";
                const s = shuffle(r, ["" + run2, "" + (run2 + 2), "" + (run2 - 2), "" + (total + run1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract the first part from the total: " + total + " - " + run1 + " = " + run2 + " laps."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 1: Product and sum comparison (Lesson 11 #2)
            (r) => {
                const pairs = [[8, 4], [7, 3], [9, 5], [6, 4], [8, 5], [9, 3]];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const prod = a * b;
                const sum = a + b;
                const q = "Find the product and sum of " + a + " and " + b + ". Which choice correctly lists both (product, sum)?";
                const correct = prod + ", " + sum;
                const s = shuffle(r, [correct, sum + ", " + prod, (prod + 2) + ", " + sum, prod + ", " + (sum + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Product: " + a + " × " + b + " = " + prod + ". Sum: " + a + " + " + b + " = " + sum + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 2: Product divided by difference (Lesson 11 #3)
            (r) => {
                const sets = [[6, 4, 8, 5], [8, 3, 10, 6], [9, 2, 7, 4], [6, 6, 9, 5], [10, 4, 12, 7]];
                const [a, b, c, d] = sets[randInt(r, 0, sets.length - 1)];
                const num = a * b;
                const den = c - d;
                const ans = Math.floor(num / den);
                const q = "The expression below means \"the product of " + a + " and " + b + " divided by the difference of " + c + " and " + d + ".\" What is the quotient? (" + a + " × " + b + ") ÷ (" + c + " − " + d + ")";
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 1), "" + (ans + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + num + "; " + c + " - " + d + " = " + den + "; " + num + " ÷ " + den + " = " + ans + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 3: Store money separating problem (Lesson 11 #4)
            (r) => {
                const names = ["Marcia", "Sandra", "Jill", "Fatima"];
                const name = names[randInt(r, 0, names.length - 1)];
                const startDollars = [20, 25, 30, 50][randInt(r, 0, 3)];
                const spentCents = randInt(r, 725, 1550);
                const returnedCents = startDollars * 100 - spentCents;
                const spentStr = (spentCents / 100).toFixed(2);
                const retStr = (returnedCents / 100).toFixed(2);
                const q = name + " went to the store with $" + startDollars + ".00 and returned home with $" + retStr + ". How much money did " + name + " spend at the store?";
                const s = shuffle(r, ["$" + spentStr, "$" + ((spentCents + 100) / 100).toFixed(2), "$" + ((spentCents - 100) / 100).toFixed(2), "$" + ((spentCents + 50) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + startDollars + ".00 - $" + retStr + " = $" + spentStr + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 4: Puppy weight gain (Lesson 11 #5)
            (r) => {
                const names = ["Franklin", "Leo", "Matt", "Johnny"];
                const name = names[randInt(r, 0, names.length - 1)];
                const w1 = randInt(r, 6, 12);
                const gain = randInt(r, 55, 75);
                const w2 = w1 + gain;
                const q = "When " + name + " got his puppy, it weighed " + w1 + " pounds. A year later, it weighed " + w2 + " pounds. How much weight did the dog gain in that year?";
                const s = shuffle(r, [gain + " pounds", (gain + 4) + " pounds", (gain - 4) + " pounds", (w2 + w1) + " pounds"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [w2 + " - " + w1 + " = " + gain + " pounds."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 5: Adding money in cents (Lesson 11 #6)
            (r) => {
                const c1 = randInt(r, 35, 85);
                const c2 = randInt(r, 25, 75);
                const totCents = c1 + c2;
                const s1 = (c1 / 100).toFixed(2);
                const s2 = (c2 / 100).toFixed(2);
                const totStr = (totCents / 100).toFixed(2);
                const q = "Find the sum: $" + s1 + " + $" + s2;
                const s = shuffle(r, ["$" + totStr, "$" + ((totCents + 10) / 100).toFixed(2), "$" + ((totCents - 10) / 100).toFixed(2), "$" + ((totCents + 20) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + s1 + " + $" + s2 + " = $" + totStr + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 6: Unknown addend (Lesson 11 #7)
            (r) => {
                const a = randInt(r, 45, 95);
                const w = randInt(r, 55, 95);
                const sum = a + w;
                const q = "Find the unknown number w: " + a + " + w = " + sum;
                const s = shuffle(r, ["" + w, "" + (w + 10), "" + (w - 10), "" + (sum + a)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + sum + " - " + a + " = " + w + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 7: Subtraction with unknown subtrahend (Lesson 11 #8)
            (r) => {
                const x = randInt(r, 250, 450);
                const diff = 1000 - x;
                const q = "Find the unknown number x: 1000 − x = " + diff;
                const s = shuffle(r, ["" + x, "" + (x + 10), "" + (x - 10), "" + (diff + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = 1000 - " + diff + " = " + x + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 8: Subtraction with unknown minuend (Lesson 11 #9)
            (r) => {
                const diff = randInt(r, 250, 550);
                const y = 1000 + diff;
                const q = "Find the unknown number y: y − 1000 = " + diff;
                const s = shuffle(r, ["" + y, "" + (y + 100), "" + (y - 100), "" + diff]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["y = 1000 + " + diff + " = " + y + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 9: 3-addend missing number (Lesson 11 #10)
            (r) => {
                const a = randInt(r, 25, 65);
                const b = randInt(r, 450, 620);
                const m = randInt(r, 50, 95);
                const total = a + b + m;
                const q = "Find the unknown number m: " + a + " + " + b + " + m = " + total;
                const s = shuffle(r, ["" + m, "" + (m + 10), "" + (m - 10), "" + (m + 20)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " = " + (a + b) + "; m = " + total + " - " + (a + b) + " = " + m + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 10: Comparison of expressions with parentheses (Lesson 11 #11)
            (r) => {
                const a = randInt(r, 120, 180);
                const b = randInt(r, 20, 50);
                const left = 1000 - (a - b);
                const right = 1000 - a - b;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare: 1000 − (" + a + " − " + b + ") ○ 1000 − " + a + " − " + b;
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left: 1000 - (" + (a - b) + ") = " + left + ". Right: " + (1000 - a) + " - " + b + " = " + right + ". Comparison is " + sym + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 11: Division of 1000 (Lesson 11 #12)
            (r) => {
                const divisors = [4, 5, 8, 10, 20, 25];
                const d = divisors[randInt(r, 0, divisors.length - 1)];
                const ans = 1000 / d;
                const q = "Divide: 1000 ÷ " + d;
                const s = shuffle(r, ["" + ans, "" + (ans + 10), "" + (ans - 10), "" + (ans * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1000 ÷ " + d + " = " + ans + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 12: Division with remainder by 10 (Lesson 11 #13)
            (r) => {
                const n = randInt(r, 450, 999);
                const qVal = Math.floor(n / 10);
                const rem = n % 10;
                const correct = qVal + " R " + rem;
                const q = "Divide: " + n + " ÷ 10";
                const s = shuffle(r, [correct, (qVal + 1) + " R " + rem, qVal + " R " + ((rem + 2) % 10), (qVal - 1) + " R " + rem]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " ÷ 10 = " + qVal + " with remainder " + rem + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 13: Product of round hundreds (Lesson 11 #15)
            (r) => {
                const a = randInt(r, 3, 8) * 100;
                const b = randInt(r, 2, 6) * 100;
                const prod = a * b;
                const q = "Find the product: " + a + " × " + b;
                const s = shuffle(r, [prod.toLocaleString(), (prod * 10).toLocaleString(), (prod / 10).toLocaleString(), (prod + 10000).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + prod.toLocaleString() + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 14: Identity property with variable (Lesson 11 #16)
            (r) => {
                const a = randInt(r, 125, 450);
                const q = "Find the unknown number w: " + a + "w = " + a;
                const s = shuffle(r, ["1", "0", "" + a, "2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any number multiplied by 1 equals itself, so w = 1."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 15: Sequence prediction (Lesson 11 #17)
            (r) => {
                const start = randInt(r, 2, 7);
                const diff = randInt(r, 3, 6);
                const s1 = start, s2 = start + diff, s3 = start + diff * 2;
                const n1 = start + diff * 3, n2 = start + diff * 4, n3 = start + diff * 5;
                const q = "What are the next three numbers in the sequence? " + s1 + ", " + s2 + ", " + s3 + ", ...";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, (n1 + 1) + ", " + (n2 + 1) + ", " + (n3 + 1), (n1 - 1) + ", " + (n2 - 1) + ", " + (n3 - 1), n1 + ", " + (n2 + diff) + ", " + (n3 + diff * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sequence adds " + diff + " each time: " + correct + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 16: Chain product of single digits (Lesson 11 #18)
            (r) => {
                const sets = [[2, 3, 4, 5], [1, 2, 3, 6], [2, 2, 3, 5], [3, 3, 2, 4], [2, 4, 5, 5]];
                const [a, b, c, d] = sets[randInt(r, 0, sets.length - 1)];
                const prod = a * b * c * d;
                const q = "Find the product: " + a + " × " + b + " × " + c + " × " + d;
                const s = shuffle(r, ["" + prod, "" + (prod + 10), "" + (prod - 10), "" + (prod + 20)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + (a*b) + "; " + (a*b) + " × " + c + " = " + (a*b*c) + "; " + (a*b*c) + " × " + d + " = " + prod + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 17: Fractional part of 360 (Lesson 11 #19-20)
            (r) => {
                const denoms = [2, 3, 4, 6, 8, 9, 10];
                const d = denoms[randInt(r, 0, denoms.length - 1)];
                const ans = 360 / d;
                const q = "What number is 1/" + d + " of 360?";
                const s = shuffle(r, ["" + ans, "" + (ans + 10), "" + (ans - 10), "" + (ans + 20)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["360 ÷ " + d + " = " + ans + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 18: Perimeter of square (Lesson 11 #24)
            (r) => {
                const side = randInt(r, 6, 18);
                const peri = 4 * side;
                const q = "What is the perimeter of a square with sides of length " + side + " mm?";
                const s = shuffle(r, [peri + " mm", (side * side) + " mm", (2 * side) + " mm", (peri + 4) + " mm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter of a square is 4 × side: 4 × " + side + " = " + peri + " mm."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 19: Classroom fraction of girls and boys (Lesson 11 #27)
            (r) => {
                const total = randInt(r, 26, 32);
                const girls = randInt(r, 12, total - 10);
                const boys = total - girls;
                const q = girls + " of the " + total + " students in the class are girls. What fraction of the students in the class are boys?";
                const correct = boys + "/" + total;
                const s = shuffle(r, [correct, girls + "/" + total, (boys - 1) + "/" + total, (boys + 1) + "/" + total]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [total + " - " + girls + " = " + boys + " boys. Fraction is " + boys + "/" + total + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 12: Place Value Through Trillions • Multistep Problems
    12: (rng, qIndex) => {
        const framings = [
            // Category 0: Difference between product of 1, 2, 3 and sum of 1, 2, 3 (multistep)
            (r) => {
                const useClassic = r() < 0.6;
                let a, b, c;
                if (useClassic) {
                    a = 1; b = 2; c = 3;
                } else {
                    const triads = [
                        [2, 3, 4],
                        [1, 3, 4],
                        [2, 2, 3],
                        [1, 2, 4],
                        [2, 3, 5]
                    ];
                    [a, b, c] = triads[randInt(r, 0, triads.length - 1)];
                }
                const prod = a * b * c;
                const sum = a + b + c;
                const diff = prod - sum;
                const q = "What is the difference between the product of " + a + ", " + b + ", and " + c + " and the sum of " + a + ", " + b + ", and " + c + "?";
                const s = shuffle(r, ["" + diff, "" + (diff + 1), "" + prod, "" + (prod + 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Find the product of " + a + ", " + b + ", and " + c + ": " + a + " × " + b + " × " + c + " = " + prod + ".",
                        "Step 2: Find the sum of " + a + ", " + b + ", and " + c + ": " + a + " + " + b + " + " + c + " = " + sum + ".",
                        "Step 3: Subtract the sum from the product to find the difference: " + prod + " - " + sum + " = " + diff + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 1: Subtracted from product (multistep two numbers)
            (r) => {
                const pairs = [
                    [8, 5], [7, 4], [9, 4], [6, 5], [8, 6], [7, 5], [9, 5], [10, 4]
                ];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const prod = a * b;
                const sum = a + b;
                const diff = prod - sum;
                const q = "When the sum of " + a + " and " + b + " is subtracted from the product of " + a + " and " + b + ", what is the difference?";
                const s = shuffle(r, ["" + diff, "" + (diff + 2), "" + (diff - 2), "" + sum]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Find the product of " + a + " and " + b + ": " + a + " × " + b + " = " + prod + ".",
                        "Step 2: Find the sum of " + a + " and " + b + ": " + a + " + " + b + " = " + sum + ".",
                        "Step 3: Subtract the sum from the product: " + prod + " - " + sum + " = " + diff + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 2: Product divided by difference (multistep)
            (r) => {
                const pairs = [
                    [6, 4], [8, 4], [10, 6], [10, 5], [12, 8], [12, 6], [9, 6], [6, 2], [15, 10], [12, 9]
                ];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const prod = a * b;
                const diff = a - b;
                const quot = prod / diff;
                const q = "When the product of " + a + " and " + b + " is divided by the difference of " + a + " and " + b + ", what is the quotient?";
                const s = shuffle(r, ["" + quot, "" + (quot + 2), "" + (quot - 2), "" + (quot + 4)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Find the product of " + a + " and " + b + ": " + a + " × " + b + " = " + prod + ".",
                        "Step 2: Find the difference of " + a + " and " + b + ": " + a + " - " + b + " = " + diff + ".",
                        "Step 3: Divide the product by the difference: " + prod + " ÷ " + diff + " = " + quot + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 3: Expression simplification with grouped operations (multistep)
            (r) => {
                const a = randInt(r, 3, 7);
                const b = randInt(r, 2, 5);
                const prod = a * b;
                const sum = a + b;
                const ans = prod - sum;
                const q = "Simplify: (" + a + " × " + b + ") − (" + a + " + " + b + ")";
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans > 2 ? ans - 2 : ans + 4), "" + prod]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Evaluate the first set of parentheses: " + a + " × " + b + " = " + prod + ".",
                        "Step 2: Evaluate the second set of parentheses: " + a + " + " + b + " = " + sum + ".",
                        "Step 3: Subtract the second result from the first: " + prod + " - " + sum + " = " + ans + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 4: Sum of consecutive even numbers greater than zero (multistep)
            (r) => {
                const k = randInt(r, 3, 6);
                const evens = [];
                for (let i = 1; i <= k; i++) evens.push(i * 2);
                const sum = evens.reduce((acc, v) => acc + v, 0);
                const q = "What is the sum of the first " + k + " even numbers greater than zero?";
                const s = shuffle(r, ["" + sum, "" + (sum + 2), "" + (sum - 2), "" + (sum + 4)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Identify the first " + k + " even numbers greater than zero: " + evens.join(', ') + ".",
                        "Step 2: Add them together: " + evens.join(' + ') + " = " + sum + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 5: Sum of consecutive odd numbers greater than zero (multistep)
            (r) => {
                const k = randInt(r, 3, 6);
                const odds = [];
                for (let i = 1; i <= k; i++) odds.push(i * 2 - 1);
                const sum = odds.reduce((acc, v) => acc + v, 0);
                const q = "What is the sum of the first " + k + " odd numbers greater than zero?";
                const s = shuffle(r, ["" + sum, "" + (sum + 2), "" + (sum - 2), "" + (sum + 4)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Identify the first " + k + " odd numbers greater than zero: " + odds.join(', ') + ".",
                        "Step 2: Add them together: " + odds.join(' + ') + " = " + sum + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 6: Large planetary distance in digits (place value)
            (r) => {
                const targets = [
                    ["Earth is about ninety-three million miles from the Sun.", "93,000,000", ["93,000", "9,300,000", "930,000,000"]],
                    ["Earth is about ninety-two million, nine hundred sixty thousand miles from the Sun.", "92,960,000", ["92,960", "9,296,000", "929,600,000"]],
                    ["Mars is about one hundred forty-one million, six hundred thousand miles from the Sun.", "141,600,000", ["14,160,000", "141,600", "1,416,000,000"]],
                    ["Mars is about one hundred forty-two million miles from the Sun.", "142,000,000", ["14,200,000", "142,000", "1,420,000,000"]]
                ];
                const [statement, correct, distractors] = targets[randInt(r, 0, targets.length - 1)];
                const q = statement + " Use digits to write that distance.";
                const s = shuffle(r, [correct + " miles", ...distractors.map(d => d + " miles")]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "The millions period is followed by 6 digit places.",
                        "Written with digits: " + correct + " miles."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 7: Identify digit in large place value
            (r) => {
                const testCases = [
                    { num: "123,456,789,000", place: "ten-billions", digit: "2" },
                    { num: "987,654,321,000", place: "hundred-billions", digit: "9" },
                    { num: "456,789,123,000", place: "billions", digit: "6" },
                    { num: "814,293,650,712", place: "ten-millions", digit: "9" },
                    { num: "987,654,321", place: "hundred-thousands", digit: "6" },
                    { num: "5,764,283,000", place: "ten-millions", digit: "6" }
                ];
                const tc = testCases[randInt(r, 0, testCases.length - 1)];
                const q = "In the number " + tc.num + ", which digit is in the " + tc.place + " place?";
                const s = shuffle(r, [tc.digit, "1", "3", "5"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Identify the periods from right to left: units, thousands, millions, billions, trillions.",
                        "The digit in the " + tc.place + " place of " + tc.num + " is " + tc.digit + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 8: Place value of a specific digit in large numbers
            (r) => {
                const testCases = [
                    { num: "5,764,283,000", digit: "4", place: "millions", distractors: ["ten-millions", "hundred-thousands", "billions"] },
                    { num: "12,453,000,000", digit: "1", place: "ten-billions", distractors: ["billions", "hundred-millions", "trillions"] },
                    { num: "847,125,000,000", digit: "8", place: "hundred-billions", distractors: ["ten-billions", "trillions", "hundred-millions"] },
                    { num: "3,500,200,400,000", digit: "3", place: "trillions", distractors: ["hundred-billions", "ten-billions", "billions"] }
                ];
                const tc = testCases[randInt(r, 0, testCases.length - 1)];
                const q = "In the number " + tc.num + ", what is the place value of the digit " + tc.digit + "?";
                const s = shuffle(r, [tc.place, ...tc.distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "In " + tc.num + ", locate the digit " + tc.digit + ".",
                        "Counting through the periods from right to left, the digit " + tc.digit + " occupies the " + tc.place + " place."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 9: Use digits to write large numbers (trillions / billions)
            (r) => {
                const testCases = [
                    { words: "four trillion", correct: "4,000,000,000,000", distractors: ["4,000,000,000", "400,000,000,000", "40,000,000,000,000"] },
                    { words: "four billion, five hundred twenty million", correct: "4,520,000,000", distractors: ["4,052,000,000", "4,520,000", "45,200,000,000"] },
                    { words: "twenty-one million, three hundred fifty thousand", correct: "21,350,000", distractors: ["21,035,000", "213,500,000", "2,135,000"] },
                    { words: "two trillion, five hundred billion", correct: "2,500,000,000,000", distractors: ["2,050,000,000,000", "250,000,000,000", "2,500,000,000"] }
                ];
                const tc = testCases[randInt(r, 0, testCases.length - 1)];
                const q = "Use digits to write: " + tc.words + ".";
                const s = shuffle(r, [tc.correct, ...tc.distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert the words period by period into standard numerical form.",
                        tc.words + " is written as " + tc.correct + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 10: Count zeros in large number names
            (r) => {
                const items = [
                    { name: "one trillion", count: 12, digits: "1,000,000,000,000" },
                    { name: "ten trillion", count: 13, digits: "10,000,000,000,000" },
                    { name: "one billion", count: 9, digits: "1,000,000,000" },
                    { name: "one hundred billion", count: 11, digits: "100,000,000,000" },
                    { name: "one million", count: 6, digits: "1,000,000" },
                    { name: "ten million", count: 7, digits: "10,000,000" }
                ];
                const item = items[randInt(r, 0, items.length - 1)];
                const q = "How many zeros are in the standard digit form of " + item.name + "?";
                const s = shuffle(r, ["" + item.count, "" + (item.count - 1), "" + (item.count + 1), "" + (item.count - 3)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Written with digits, " + item.name + " is " + item.digits + ".",
                        "Counting the zero digits gives " + item.count + " zeros."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 11: Multistep product chain with powers of 10
            (r) => {
                const chains = [
                    { expr: "1 × 10 × 100 × 1000", ans: "1,000,000", val: 1000000 },
                    { expr: "2 × 10 × 20 × 100", ans: "40,000", val: 40000 },
                    { expr: "3 × 10 × 10 × 100", ans: "30,000", val: 30000 },
                    { expr: "5 × 10 × 100 × 100", ans: "500,000", val: 500000 },
                    { expr: "4 × 100 × 1000", ans: "400,000", val: 400000 }
                ];
                const c = chains[randInt(r, 0, chains.length - 1)];
                const q = "Calculate the product: " + c.expr;
                const s = shuffle(r, [c.ans, (c.val * 10).toLocaleString(), (c.val / 10).toLocaleString(), (c.val * 2).toLocaleString()]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply the non-zero digits and accumulate all the zeros in the factors.",
                        c.expr + " = " + c.ans + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 12: Multistep equation with sum of multiple addends and unknown
            (r) => {
                const addends = [100, 200, 300, 400];
                const sumKnown = addends.reduce((a, b) => a + b, 0);
                const w = randInt(r, 2, 8) * 100;
                const total = sumKnown + w;
                const q = "Find the unknown number w: 100 + 200 + 300 + 400 + w = " + total;
                const s = shuffle(r, ["" + w, "" + (w + 100), "" + (w - 100), "" + (w + 200)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Add the known numbers: 100 + 200 + 300 + 400 = " + sumKnown + ".",
                        "Step 2: Subtract " + sumKnown + " from " + total + ": " + total + " - " + sumKnown + " = " + w + ".",
                        "Thus, w = " + w + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 13: Multistep word problem: Team points
            (r) => {
                const total = randInt(r, 85, 120);
                const winning = randInt(r, Math.floor(total / 2) + 2, total - 25);
                const losing = total - winning;
                const q = "The two basketball teams scored a combined total of " + total + " points. If the winning team scored " + winning + " points, how many points did the losing team score?";
                const s = shuffle(r, ["" + losing, "" + (losing + 5), "" + (losing - 5), "" + (winning + 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Let p be the points scored by the losing team: " + winning + " + p = " + total + ".",
                        "Subtract " + winning + " from " + total + ": " + total + " - " + winning + " = " + losing + " points."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 14: Multistep word problem: Items made for event
            (r) => {
                const total = randInt(r, 250, 450);
                const part = randInt(r, 100, total - 80);
                const remaining = total - part;
                const q = "Elena and Marcus baked " + total + " pancakes for the community breakfast. If Elena baked " + part + " pancakes, how many pancakes did Marcus bake?";
                const s = shuffle(r, ["" + remaining, "" + (remaining + 15), "" + (remaining - 15), "" + (part + remaining)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Write the addition equation: " + part + " + m = " + total + ".",
                        "Solve by subtracting: m = " + total + " - " + part + " = " + remaining + " pancakes."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 15: Multistep order of operations: Add then divide
            (r) => {
                const d = randInt(r, 3, 6);
                const m = randInt(r, 8, 18);
                const sum = d * m;
                const a = randInt(r, 5, sum - 15);
                const b = randInt(r, 5, sum - a - 5);
                const c = sum - a - b;
                const q = "Simplify: (" + a + " + " + b + " + " + c + ") ÷ " + d;
                const s = shuffle(r, ["" + m, "" + (m + 2), "" + (m - 2), "" + (m * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Evaluate the sum inside the parentheses: " + a + " + " + b + " + " + c + " = " + sum + ".",
                        "Step 2: Divide the sum by " + d + ": " + sum + " ÷ " + d + " = " + m + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 16: Multistep comparison (F1 Fix: guarantee distinct operators)
            (r) => {
                const triads = [
                    [3, 2, 1],
                    [4, 3, 2],
                    [2, 3, 4],
                    [1, 2, 3],
                    [2, 2, 2]
                ];
                const [a, b, c] = triads[randInt(r, 0, triads.length - 1)];
                const sum = a + b + c;
                const prod = a * b * c;
                const sym = sum > prod ? ">" : sum < prod ? "<" : "=";
                const q = "Compare using <, >, or =: (" + a + " + " + b + " + " + c + ") ○ (" + a + " × " + b + " × " + c + ")";
                const otherOps = ['<', '>', '='].filter(op => op !== sym);
                const s = shuffle(r, [sym, ...otherOps, "≠"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Left side: " + a + " + " + b + " + " + c + " = " + sum + ".",
                        "Right side: " + a + " × " + b + " × " + c + " = " + prod + ".",
                        "Since " + sum + " " + sym + " " + prod + ", the correct comparison is " + sym + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 17: Combined fractional parts (multistep)
            (r) => {
                const pairs = [
                    [100, 100], [80, 40], [60, 80], [120, 100], [200, 80]
                ];
                const [n1, n2] = pairs[randInt(r, 0, pairs.length - 1)];
                const p1 = n1 / 2;
                const p2 = n2 / 4;
                const total = p1 + p2;
                const q = "What is the sum of 1/2 of " + n1 + " and 1/4 of " + n2 + "?";
                const s = shuffle(r, ["" + total, "" + (total + 5), "" + (total - 5), "" + (total + 10)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Calculate 1/2 of " + n1 + ": " + n1 + " ÷ 2 = " + p1 + ".",
                        "Step 2: Calculate 1/4 of " + n2 + ": " + n2 + " ÷ 4 = " + p2 + ".",
                        "Step 3: Add the two amounts: " + p1 + " + " + p2 + " = " + total + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 18: Difference between product and quotient of two numbers (multistep - F2 Fix)
            (r) => {
                const pairs = [
                    [12, 3], [20, 4], [24, 6], [18, 2], [30, 5], [16, 4]
                ];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const prod = a * b;
                const quot = a / b;
                const diff = prod - quot;
                const q = "What is the difference between the product of " + a + " and " + b + " and the quotient of " + a + " divided by " + b + "?";
                const s = shuffle(r, ["" + diff, "" + (diff + 2), "" + (diff - 2), "" + (prod + 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Find the product of " + a + " and " + b + ": " + a + " × " + b + " = " + prod + ".",
                        "Step 2: Find the quotient of " + a + " divided by " + b + ": " + a + " ÷ " + b + " = " + quot + ".",
                        "Step 3: Find the difference: " + prod + " - " + quot + " = " + diff + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            },
            // Category 19: Multistep purchase and change with currency (F2 Fix)
            (r) => {
                const qty = randInt(r, 2, 4);
                const priceEach = [1.75, 2.25, 2.50, 3.25][randInt(r, 0, 3)];
                const totalCost = qty * priceEach;
                const bill = Math.ceil(totalCost / 5) * 5 + 5;
                const change = bill - totalCost;
                const costStr = totalCost.toFixed(2);
                const changeStr = change.toFixed(2);
                const q = "A student bought " + qty + " notebooks at $" + priceEach.toFixed(2) + " each and paid with a $" + bill + " bill. How much change should the student receive?";
                const s = shuffle(r, ["$" + changeStr, "$" + (change + 2).toFixed(2), "$" + (change > 1 ? (change - 1).toFixed(2) : (change + 4).toFixed(2)), "$" + (totalCost + 1).toFixed(2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Find the total cost: " + qty + " × $" + priceEach.toFixed(2) + " = $" + costStr + ".",
                        "Step 2: Subtract the total cost from the bill: $" + bill + ".00 - $" + costStr + " = $" + changeStr + "."
                    ],
                    lessonNum: 12,
                    lessonTitle: "Place Value Through Trillions • Multistep Problems"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 13: Problems About Comparing • Elapsed-Time Problems
    13: (rng, qIndex) => {
        const framings = [
            // Category 0: Elapsed time between historical years (from Practice Set b)
            (r) => {
                const events = [
                    { y1: 1066, y2: 1215, desc1: "a historic conquest", desc2: "a landmark charter signing" },
                    { y1: 1492, y2: 1776, desc1: "the arrival in the Americas", desc2: "the Declaration of Independence" },
                    { y1: 1789, y2: 1865, desc1: "the constitution ratification", desc2: "the conclusion of the Civil War" },
                    { y1: 1803, y2: 1914, desc1: "the Louisiana Purchase", desc2: "the opening of the Panama Canal" },
                    { y1: 1620, y2: 1776, desc1: "the Mayflower landing", desc2: "the founding declaration" }
                ];
                const e = events[randInt(r, 0, events.length - 1)];
                const diff = e.y2 - e.y1;
                const q = "Two historic milestones occurred in " + e.y1 + " (" + e.desc1 + ") and " + e.y2 + " (" + e.desc2 + "). How many years passed from " + e.y1 + " to " + e.y2 + "?";
                const s = shuffle(r, [diff + " years", (diff + 10) + " years", (diff - 10) + " years", (diff + 2) + " years"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract the earlier year from the later year: " + e.y2 + " - " + e.y1 + " = " + diff + " years."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 1: Population comparison (from Practice Set a)
            (r) => {
                const town1 = "Castor";
                const town2 = "Weston";
                const pop1 = randInt(r, 240, 320) * 100 + randInt(r, 10, 99);
                const pop2 = randInt(r, 160, 220) * 100 + randInt(r, 10, 99);
                const diff = pop1 - pop2;
                const q = "The population of " + town1 + " is " + pop1.toLocaleString() + ". The population of " + town2 + " is " + pop2.toLocaleString() + ". How many more people live in " + town1 + " than in " + town2 + "?";
                const s = shuffle(r, [diff.toLocaleString() + " people", (diff + 1000).toLocaleString() + " people", (diff - 1000).toLocaleString() + " people", (pop1 + pop2).toLocaleString() + " people"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Use the comparison subtraction pattern (Greater - Lesser = Difference):",
                        pop1.toLocaleString() + " - " + pop2.toLocaleString() + " = " + diff.toLocaleString() + " people."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 2: Distance comparison between cities (from Lesson 13 #7)
            (r) => {
                const d1 = randInt(r, 380, 440);
                const d2 = randInt(r, 650, 720);
                const diff = d2 - d1;
                const q = "It is " + d1 + " miles from Minneapolis to Chicago, and " + d2 + " miles from Minneapolis to Cincinnati. Cincinnati is how many miles farther from Minneapolis than Chicago?";
                const s = shuffle(r, [diff + " miles", (diff + 20) + " miles", (diff - 20) + " miles", (d1 + d2) + " miles"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To compare distances, subtract the shorter distance from the longer distance:",
                        d2 + " miles - " + d1 + " miles = " + diff + " miles."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 3: Event ticket sales remaining (from Lesson 13 #6)
            (r) => {
                const total = 1000;
                const sold = randInt(r, 420, 680);
                const remaining = total - sold;
                const q = "The auditorium at the Cultural Center has seats for " + total + " people. If " + sold + " tickets have already been sold for a symphony concert, how many more tickets are still available?";
                const s = shuffle(r, ["" + remaining, "" + (remaining + 10), "" + (remaining - 10), "" + (total - sold + 20)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Write an equation with the unknown available tickets t: " + sold + " + t = " + total + ".",
                        "Solve by subtraction: t = " + total + " - " + sold + " = " + remaining + " tickets."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 4: Age in scores (from Lesson 13 #5)
            (r) => {
                const scores = randInt(r, 3, 5);
                const scoreWords = ["three", "four", "five"][scores - 3];
                const age = scores * 20;
                const q = "A veteran chess grandmaster entered a tournament when she was " + scoreWords + "-score years old. How old was the grandmaster? (Recall that one score equals 20 years.)";
                const s = shuffle(r, [age + " years old", (age + 10) + " years old", (age - 10) + " years old", (scores * 10) + " years old"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "One score equals 20 years.",
                        scoreWords + "-score years means " + scores + " × 20 = " + age + " years old."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 5: Equilateral triangle perimeter (from Lesson 13 #12)
            (r) => {
                const side = randInt(r, 12, 35);
                const peri = 3 * side;
                const q = "The three sides of an equilateral triangle are equal in length. What is the perimeter of an equilateral triangle with sides measuring " + side + " mm?";
                const s = shuffle(r, [peri + " mm", (side * 4) + " mm", (peri + 6) + " mm", (side * 2) + " mm"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "An equilateral triangle has 3 congruent sides.",
                        "Perimeter = 3 × " + side + " mm = " + peri + " mm."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 6: Alternating sequence pattern (from Lesson 13 #18)
            (r) => {
                const start = randInt(r, 1, 5);
                const add = randInt(r, 3, 5);
                const sub = randInt(r, 1, 2);
                const seq = [start];
                let current = start;
                for (let i = 0; i < 5; i++) {
                    if (i % 2 === 0) current += add;
                    else current -= sub;
                    seq.push(current);
                }
                const nextVal = current - sub;
                const q = "The sequence below follows an alternating rule: " + seq.join(', ') + ", ... What is the next number in this sequence?";
                const s = shuffle(r, ["" + nextVal, "" + (nextVal + add), "" + (current + add), "" + (nextVal - 1)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Observe the pattern alternating between +" + add + " and -" + sub + ".",
                        "After the last step of +" + add + " to reach " + current + ", the next step is -" + sub + ": " + current + " - " + sub + " = " + nextVal + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 7: Mental math three consecutive numbers addition (from Lesson 13 #8)
            (r) => {
                const base = randInt(r, 5, 25) * 10;
                const a = base - 1;
                const b = base;
                const c = base + 1;
                const sum = a + b + c;
                const q = "Use mental math strategies to calculate the sum of three consecutive numbers: " + a + " + " + b + " + " + c;
                const s = shuffle(r, ["" + sum, "" + (sum + 10), "" + (sum - 10), "" + (base * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Notice that " + a + " is 1 less than " + b + " and " + c + " is 1 more than " + b + ".",
                        "Combining gives 3 × " + b + " = " + sum + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 8: Mental math three consecutive numbers product (from Lesson 13 #9)
            (r) => {
                const b = randInt(r, 5, 12);
                const a = b - 1;
                const c = b + 1;
                const prod = a * b * c;
                const q = "Calculate the product of three consecutive integers: " + a + " × " + b + " × " + c;
                const s = shuffle(r, ["" + prod, "" + (prod + b), "" + (prod - b), "" + (a * b)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply " + a + " × " + c + " = " + (a * c) + ".",
                        "Then multiply by " + b + ": " + (a * c) + " × " + b + " = " + prod + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 9: Boiling and freezing points on Fahrenheit scale (from Lesson 13 #25)
            (r) => {
                const isBoil = r() < 0.5;
                const eventName = isBoil ? "water boil" : "water freeze";
                const temp = isBoil ? "212°F" : "32°F";
                const distractors = isBoil ? ["32°F", "100°F", "98.6°F"] : ["0°F", "212°F", "100°F"];
                const q = "At what temperature on the Fahrenheit temperature scale does " + eventName + "?";
                const s = shuffle(r, [temp, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "On the standard Fahrenheit scale, water freezes at 32°F and boils at 212°F."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 10: Repeated addition rewritten as multiplication (from Lesson 13 #24)
            (r) => {
                const val = randInt(r, 15, 80) * 5;
                const count = randInt(r, 4, 7);
                const terms = Array(count).fill(val);
                const ans = count * val;
                const q = "Multiply to find the sum of this repeated addition problem: " + terms.join(' + ');
                const s = shuffle(r, ["" + ans, "" + (ans + val), "" + (ans - val), "" + (val * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Counting the identical addends gives " + count + " groups of " + val + ".",
                        "Multiplication fact: " + count + " × " + val + " = " + ans + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 11: Fraction of a mile in feet (from Lesson 13 #19)
            (r) => {
                const denomChoices = [
                    { frac: "1/2", d: 2, ans: 2640 },
                    { frac: "1/4", d: 4, ans: 1320 },
                    { frac: "1/3", d: 3, ans: 1760 },
                    { frac: "1/10", d: 10, ans: 528 }
                ];
                const choice = denomChoices[randInt(r, 0, denomChoices.length - 1)];
                const q = "Recall that one mile equals 5,280 feet. What is " + choice.frac + " of 5,280 feet?";
                const s = shuffle(r, [choice.ans + " feet", (choice.ans + 100) + " feet", (choice.ans - 100) + " feet", (choice.ans * 2) + " feet"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To calculate " + choice.frac + " of 5,280 feet, divide 5,280 by " + choice.d + ":",
                        "5,280 ÷ " + choice.d + " = " + choice.ans + " feet."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 12: Parenthetical mean / average (from Lesson 13 #21)
            (r) => {
                const a = randInt(r, 4, 18);
                const b = a + randInt(r, 1, 4);
                const c = b + randInt(r, 1, 4);
                const sum = a + b + c;
                const rem = sum % 3;
                const adjustedC = c + (rem === 0 ? 0 : 3 - rem);
                const finalSum = a + b + adjustedC;
                const ans = finalSum / 3;
                const q = "Evaluate the expression: (" + a + " + " + b + " + " + adjustedC + ") ÷ 3";
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 1), "" + (ans * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Compute inside parentheses: " + a + " + " + b + " + " + adjustedC + " = " + finalSum + ".",
                        "Step 2: Divide by 3: " + finalSum + " ÷ 3 = " + ans + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 13: Unknown factor in multiplication (from Lesson 13 #27: 8a = 816)
            (r) => {
                const factor = randInt(r, 6, 9);
                const ans = randInt(r, 102, 125);
                const product = factor * ans;
                const q = "Find the unknown number a that satisfies: " + factor + "a = " + product;
                const s = shuffle(r, ["" + ans, "" + (ans + 10), "" + (ans - 10), "" + (ans + 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To find the missing factor in " + factor + "a = " + product + ", divide by " + factor + ":",
                        "a = " + product + " ÷ " + factor + " = " + ans + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 14: Unknown dividend in division (from Lesson 13 #28: b / 4 = 12)
            (r) => {
                const divisor = randInt(r, 4, 8);
                const quot = randInt(r, 12, 25);
                const b = divisor * quot;
                const q = "Find the unknown number b that satisfies: b ÷ " + divisor + " = " + quot;
                const s = shuffle(r, ["" + b, "" + (b + divisor), "" + (b - divisor), "" + (quot * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "In a division problem, dividend = quotient × divisor:",
                        "b = " + quot + " × " + divisor + " = " + b + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 15: Unknown divisor in division (from Lesson 13 #29: 12 / c = 4)
            (r) => {
                const quot = randInt(r, 3, 9);
                const c = randInt(r, 3, 8);
                const dividend = quot * c;
                const q = "Find the unknown number c that satisfies: " + dividend + " ÷ c = " + quot;
                const s = shuffle(r, ["" + c, "" + (c + 2), "" + (c - 1), "" + (quot + 1)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To solve for the divisor in " + dividend + " ÷ c = " + quot + ", divide dividend by quotient:",
                        "c = " + dividend + " ÷ " + quot + " = " + c + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 16: Unknown minuend in subtraction (from Lesson 13 #30: d - 16 = 61)
            (r) => {
                const sub = randInt(r, 14, 38);
                const diff = randInt(r, 45, 85);
                const d = sub + diff;
                const q = "Find the unknown number d that satisfies: d − " + sub + " = " + diff;
                const s = shuffle(r, ["" + d, "" + (d + 10), "" + (d - 10), "" + (diff - sub)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To find the unknown minuend d, add the subtrahend to the difference:",
                        "d = " + diff + " + " + sub + " = " + d + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 17: Comparison with factor of zero (from Lesson 13 #17)
            (r) => {
                const a = randInt(r, 2, 5);
                const b = randInt(r, 2, 4);
                const c = randInt(r, 1, 3);
                const sum = a + b + c;
                const q = "Compare the two expressions using <, >, or =: (" + a + " + " + b + " + " + c + " + 0) ○ (" + a + " × " + b + " × " + c + " × 0)";
                const s = shuffle(r, [">", "<", "=", "≠"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Left side evaluates to " + sum + " + 0 = " + sum + ".",
                        "Right side multiplies by 0, so the product is 0.",
                        "Since " + sum + " > 0, the comparison symbol is >."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 18: Division of thousands by tens (from Lesson 13 #14: 60,000 / 30)
            (r) => {
                const base = randInt(r, 4, 9);
                const tens = randInt(r, 2, 4) * 10;
                const dividend = base * tens * 1000;
                const ans = dividend / tens;
                const q = "Calculate the quotient: " + dividend.toLocaleString() + " ÷ " + tens;
                const s = shuffle(r, [ans.toLocaleString(), (ans * 10).toLocaleString(), (ans / 10).toLocaleString(), (ans + 200).toLocaleString()]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Simplify by dividing out common factor of 10:",
                        dividend.toLocaleString() + " ÷ " + tens + " = " + ans.toLocaleString() + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 19: Division of money with cents (from Lesson 13 #16: $4.56 / 3)
            (r) => {
                const divisor = randInt(r, 3, 6);
                const centsEach = randInt(r, 120, 240);
                const totalCents = divisor * centsEach;
                const totalStr = (totalCents / 100).toFixed(2);
                const ansStr = (centsEach / 100).toFixed(2);
                const q = "Find the quotient when dividing money: $" + totalStr + " ÷ " + divisor;
                const s = shuffle(r, ["$" + ansStr, "$" + ((centsEach + 20) / 100).toFixed(2), "$" + ((centsEach - 20) / 100).toFixed(2), "$" + ((centsEach + 50) / 100).toFixed(2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide as with whole numbers, keeping the dollar sign and decimal point in the quotient:",
                        "$" + totalStr + " ÷ " + divisor + " = $" + ansStr + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 14: The Number Line: Negative Numbers
    14: (rng, qIndex) => {
        const framings = [
            // Category 0: Sum divided by difference (Lesson 14 #1)
            (r) => {
                const pairs = [[15, 12], [14, 10], [16, 12], [18, 14], [20, 16], [12, 8]];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const sum = a + b;
                const diff = a - b;
                const quot = sum / diff;
                const q = "What is the quotient when the sum of " + a + " and " + b + " is divided by the difference of " + a + " and " + b + "?";
                const s = shuffle(r, ["" + quot, "" + (quot + 2), "" + (quot - 1), "" + (quot + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " = " + sum + "; " + a + " - " + b + " = " + diff + "; " + sum + " ÷ " + diff + " = " + quot + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 1: Place value in large number (Lesson 14 #2)
            (r) => {
                const digits = [
                    { place: "billions", val: "7 in 987,654,321,000" },
                    { place: "ten-billions", val: "8 in 987,654,321,000" },
                    { place: "hundred-billions", val: "9 in 987,654,321,000" },
                    { place: "hundred-millions", val: "6 in 987,654,321,000" },
                    { place: "ten-millions", val: "5 in 987,654,321,000" },
                    { place: "millions", val: "4 in 987,654,321,000" }
                ];
                const d = digits[randInt(r, 0, digits.length - 1)];
                const q = "What is the place value of the " + d.val + "?";
                const s = shuffle(r, [d.place, d.place === "billions" ? "millions" : "billions", "ten-thousands", "hundred-thousands"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Identify the position of the digit: " + d.place + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 2: Speed of light in digits (Lesson 14 #3)
            (r) => {
                const q = "Light travels at a speed of about one hundred eighty-six thousand miles per second. Use digits to write that speed.";
                const s = shuffle(r, ["186,000", "186,000,000", "1,860,000", "18,600"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One hundred eighty-six thousand is written as 186,000."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 3: Integers to the left on number line (Lesson 14 #4)
            (r) => {
                const start = randInt(r, 1, 4);
                const steps = randInt(r, 3, 6);
                const ans = start - steps;
                const q = "What number is " + steps + " integers to the left of " + start + " on the number line?";
                const s = shuffle(r, ["" + ans, "" + (ans + 1), "" + (ans - 1), "" + (start + steps)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Count " + steps + " units to the left from " + start + ": " + start + " - " + steps + " = " + ans + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 4: Ordering negative and positive numbers (Lesson 14 #5)
            (r) => {
                const pos1 = randInt(r, 4, 7);
                const pos2 = randInt(r, 1, 3);
                const neg1 = -randInt(r, 1, 2);
                const neg2 = -randInt(r, 3, 5);
                const correct = neg2 + ", " + neg1 + ", 0, " + pos2 + ", " + pos1;
                const q = "Arrange these numbers in order from least to greatest: " + pos1 + ", " + neg2 + ", " + pos2 + ", 0, " + neg1;
                const s = shuffle(r, [correct, neg1 + ", " + neg2 + ", 0, " + pos2 + ", " + pos1, pos1 + ", " + pos2 + ", 0, " + neg1 + ", " + neg2, neg2 + ", " + neg1 + ", " + pos2 + ", 0, " + pos1]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Negative numbers are less than 0, with larger absolute values being smaller: " + correct + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 5: Halfway between negative and positive (Lesson 14 #6)
            (r) => {
                const n = randInt(r, 2, 6) * 2;
                const neg = -n;
                const mid = neg / 2;
                const q = "What number is halfway between " + neg + " and 0 on the number line?";
                const s = shuffle(r, ["" + mid, "" + (mid + 1), "" + (mid - 1), "" + Math.abs(mid)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Halfway between " + neg + " and 0 is " + neg + " ÷ 2 = " + mid + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 6: School sports participants (Lesson 14 #7)
            (r) => {
                const total = randInt(r, 120, 160);
                const sports = randInt(r, 60, 85);
                const notSports = total - sports;
                const q = "There are " + total + " sixth-grade students in the school. " + sports + " play on school sports teams. How many are not on school sports teams?";
                const s = shuffle(r, ["" + notSports, "" + (notSports + 10), "" + (notSports - 10), "" + (sports - 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [total + " - " + sports + " = " + notSports + " students."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 7: Comparing sum and product 1+2+3+4 vs 1*2*3*4 (Lesson 14 #8)
            (r) => {
                const sum = 1 + 2 + 3 + 4;
                const prod = 1 * 2 * 3 * 4;
                const sym = sum < prod ? "<" : ">";
                const q = "Compare: 1 + 2 + 3 + 4 ○ 1 × 2 × 3 × 4";
                const s = shuffle(r, [sym, sym === "<" ? ">" : "<", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 + 2 + 3 + 4 = 10; 1 × 2 × 3 × 4 = 24. Since 10 < 24, the answer is <."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 8: Perimeter of right triangle (Lesson 14 #9)
            (r) => {
                const triples = [[15, 20, 25], [9, 12, 15], [5, 12, 13], [6, 8, 10]];
                const [a, b, c] = triples[randInt(r, 0, triples.length - 1)];
                const peri = a + b + c;
                const q = "What is the perimeter of a right triangle with side lengths " + a + " mm, " + b + " mm, and " + c + " mm?";
                const s = shuffle(r, [peri + " mm", (peri + 5) + " mm", (peri - 5) + " mm", (a * b / 2) + " mm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " + " + c + " = " + peri + " mm."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 9: Halving sequence (Lesson 14 #10)
            (r) => {
                const start = [32, 64, 16][randInt(r, 0, 2)];
                const s1 = start, s2 = start / 2, s3 = start / 4;
                const n1 = start / 8, n2 = start / 16;
                const q = "What are the next two numbers in the sequence? " + s1 + ", " + s2 + ", " + s3 + ", ...";
                const correct = n1 + ", " + n2;
                const s = shuffle(r, [correct, (n1 - 1) + ", " + (n2 - 1), (n1 + 1) + ", " + (n2 + 1), "0, -2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each number is divided by 2: " + correct + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 10: Days in year difference from round number (Lesson 14 #11)
            (r) => {
                const roundNum = [500, 400, 600][randInt(r, 0, 2)];
                const days = 365;
                const diff = roundNum - days;
                const q = "There are 365 days in a common year. How much less than " + roundNum + " is 365?";
                const s = shuffle(r, ["" + diff, "" + (diff + 10), "" + (diff - 10), "" + (diff + 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [roundNum + " - " + days + " = " + diff + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 11: N less than M with negative result (Lesson 14 #12)
            (r) => {
                const m = randInt(r, 3, 7);
                const n = randInt(r, 8, 14);
                const ans = m - n;
                const q = "What number is " + n + " less than " + m + "?";
                const s = shuffle(r, ["" + ans, "" + (ans + 1), "" + (ans - 1), "" + (n - m)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [m + " - " + n + " = " + ans + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 12: Long division (Lesson 14 #14)
            (r) => {
                const quot = randInt(r, 2400, 3600);
                const div = 12;
                const dividend = quot * div;
                const q = "Calculate: " + dividend.toLocaleString() + " ÷ " + div;
                const s = shuffle(r, [quot.toLocaleString(), (quot + 10).toLocaleString(), (quot - 10).toLocaleString(), (quot + 100).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dividend.toLocaleString() + " ÷ " + div + " = " + quot.toLocaleString() + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 13: Subtraction of money (Lesson 14 #19)
            (r) => {
                const startCents = randInt(r, 300, 500);
                const diffCents = randInt(r, 5, 25);
                const mCents = diffCents;
                const resCents = startCents - diffCents;
                const s1 = (startCents / 100).toFixed(2);
                const sRes = (resCents / 100).toFixed(2);
                const sm = (mCents / 100).toFixed(2);
                const q = "Find the unknown number m: $" + s1 + " − m = $" + sRes;
                const s = shuffle(r, ["$" + sm, "$" + ((mCents + 5) / 100).toFixed(2), "$" + ((mCents + 10) / 100).toFixed(2), "$" + ((mCents + 1) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = $" + s1 + " - $" + sRes + " = $" + sm + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 14: Powers of 10 product (Lesson 14 #21)
            (r) => {
                const factors = ["(100)(100)(100)", "(10)(100)(100)", "(100)(1000)", "(10)(10)(1000)"];
                const f = factors[randInt(r, 0, factors.length - 1)];
                let val, ansStr;
                if (f === "(100)(100)(100)") { val = 1000000; ansStr = "1,000,000"; }
                else if (f === "(10)(100)(100)") { val = 100000; ansStr = "100,000"; }
                else if (f === "(100)(1000)") { val = 100000; ansStr = "100,000"; }
                else { val = 100000; ansStr = "100,000"; }
                const q = "Find the product: " + f;
                const s = shuffle(r, [ansStr, (val * 10).toLocaleString(), (val / 10).toLocaleString(), (val * 2).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [f + " = " + ansStr + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 15: Order of operations with division and multiplication (Lesson 14 #25)
            (r) => {
                const a = 12, b = 6, c = 2;
                const left = (a / b) * c; // 4
                const right = a / (b * c); // 1
                const sym = left > right ? ">" : "<";
                const q = "Compare: " + a + " ÷ " + b + " × " + c + " ○ " + a + " ÷ (" + b + " × " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left: 12 ÷ 6 × 2 = 2 × 2 = 4. Right: 12 ÷ 12 = 1. Since 4 > 1, the symbol is >."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 16: World population in digits (Lesson 14 #27)
            (r) => {
                const popWords = [
                    { words: "six billion, four hundred million", digits: "6,400,000,000" },
                    { words: "seven billion, two hundred million", digits: "7,200,000,000" },
                    { words: "eight billion, one hundred million", digits: "8,100,000,000" },
                    { words: "five billion, nine hundred million", digits: "5,900,000,000" }
                ];
                const p = popWords[randInt(r, 0, popWords.length - 1)];
                const q = "The world population was estimated at about " + p.words + " people. Use digits to write this number.";
                const s = shuffle(r, [p.digits, p.digits.replace(/,400|,200|,100|,900/, ",040"), p.digits + "0", p.digits.slice(0, -3)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [p.words + " is written as " + p.digits + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 17: Cracked eggs fraction problem (Lesson 14 #28)
            (r) => {
                const total = [12, 18, 24, 30][randInt(r, 0, 3)];
                const fracs = [{ num: 1, den: 3 }, { num: 1, den: 4 }, { num: 1, den: 6 }];
                const f = fracs.find(fr => total % fr.den === 0) || { num: 1, den: 3 };
                const cracked = total / f.den;
                const q = "One " + (f.den === 3 ? "third" : f.den === 4 ? "fourth" : "sixth") + " of the " + total + " eggs in the carton were cracked. How many eggs were cracked?";
                const s = shuffle(r, ["" + cracked, "" + (cracked + 2), "" + (cracked - 1), "" + (total - cracked)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + f.den + " of " + total + " = " + total + " ÷ " + f.den + " = " + cracked + " eggs."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 18: Opposite of integer (Lesson 14 #29)
            (r) => {
                const n = randInt(r, 7, 25);
                const opp = -n;
                const q = "What number is the opposite of " + n + "?";
                const s = shuffle(r, ["" + opp, "" + n, "0", "1/" + n]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The opposite of " + n + " is -" + n + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 19: Ordering fractions and negative integers (Lesson 14 #30)
            (r) => {
                const correct = "-1, 0, 1/2, 1";
                const q = "Arrange these numbers in order from least to greatest: 1, 0, −1, 1/2";
                const s = shuffle(r, [correct, "-1, 1/2, 0, 1", "0, -1, 1/2, 1", "1, 1/2, 0, -1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Negative numbers are least, followed by 0, then positive fractions, then whole numbers: " + correct + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 15: Problems About Equal Groups
    15: (rng, qIndex) => {
        const framings = [
            // Category 0: Fahrenheit freezing and boiling difference (Lesson 15 #2)
            (r) => {
                const q = "On the Fahrenheit scale, water freezes at 32°F and boils at 212°F. How many degrees difference is there between the freezing and boiling points of water?";
                const s = shuffle(r, ["180°F", "170°F", "190°F", "200°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["212°F - 32°F = 180°F."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 1: Cereal O's in box equal groups (Lesson 15 #3)
            (r) => {
                const perOz = randInt(r, 280, 360);
                const oz = 16;
                const total = perOz * oz;
                const q = "There are about " + perOz + " little O's of cereal in an ounce. About how many little O's are there in a one-pound box (1 pound = 16 ounces)?";
                const s = shuffle(r, [total.toLocaleString(), (total + 160).toLocaleString(), (total - 160).toLocaleString(), (perOz * 10).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [perOz + " × 16 = " + total.toLocaleString() + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 2: Days in month separating (Lesson 15 #4)
            (r) => {
                const months = [{ name: "August", days: 31 }, { name: "July", days: 31 }, { name: "June", days: 30 }, { name: "April", days: 30 }];
                const m = months[randInt(r, 0, months.length - 1)];
                const passed = randInt(r, 3, 9);
                const left = m.days - passed;
                const q = "There are " + m.days + " days in " + m.name + ". How many days are left in " + m.name + " after " + m.name + " " + passed + "?";
                const s = shuffle(r, [left + " days", (left + 1) + " days", (left - 1) + " days", (passed + 10) + " days"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [m.days + " - " + passed + " = " + left + " days."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 3: Subtraction order comparison (Lesson 15 #5)
            (r) => {
                const a = randInt(r, 3, 6);
                const b = randInt(r, 1, a - 1);
                const diff1 = a - b;
                const diff2 = b - a;
                const sym = diff1 > diff2 ? ">" : "<";
                const q = "Compare: " + a + " − " + b + " ○ " + b + " − " + a;
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " - " + b + " = " + diff1 + "; " + b + " - " + a + " = " + diff2 + ". " + diff1 + " > " + diff2 + ", so " + sym + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 4: Negative word answer (Lesson 15 #6)
            (r) => {
                const pairs = [[5, 2, "negative three"], [6, 2, "negative four"], [7, 3, "negative four"], [8, 3, "negative five"], [6, 1, "negative five"]];
                const [sub, from, word] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Subtract " + sub + " from " + from + ". Use words to write the answer.";
                const s = shuffle(r, [word, "positive " + word.replace("negative ", ""), "negative " + (sub + from), "zero"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [from + " - " + sub + " = -" + (sub - from) + ", which is written as " + word + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 5: Stock price drop with negative number (Lesson 15 #7)
            (r) => {
                const p1 = randInt(r, 26, 35);
                const dropCents = randInt(r, 150, 450);
                const p2Cents = p1 * 100 - dropCents;
                const s1 = p1.toFixed(2);
                const s2 = (p2Cents / 100).toFixed(2);
                const dropStr = (dropCents / 100).toFixed(2);
                const q = "A stock's value dropped from $" + s1 + " to $" + s2 + ". Use a negative number to show the change in the stock's value.";
                const correct = "-$" + dropStr;
                const s = shuffle(r, [correct, "$" + dropStr, "-$" + s2, "$" + s1]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Change = $" + s2 + " - $" + s1 + " = -$" + dropStr + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 6: Sequence crossing zero (Lesson 15 #8)
            (r) => {
                const step = randInt(r, 2, 4);
                const seq = [step * 3, step * 2, step, 0];
                const n1 = -step, n2 = -step * 2, n3 = -step * 3;
                const q = "What are the next three numbers in the sequence? " + seq.join(", ") + ", ...";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, (n1 + 1) + ", " + (n2 + 1) + ", " + (n3 + 1), "0, " + n1 + ", " + n2, Math.abs(n1) + ", " + Math.abs(n2) + ", " + Math.abs(n3)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sequence subtracts " + step + " each step: " + correct + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 7: Dollar minus cents (Lesson 15 #10)
            (r) => {
                const dollars = randInt(r, 5, 20);
                const cents = [10, 15, 25, 50, 75][randInt(r, 0, 4)];
                const diffCents = dollars * 100 - cents;
                const diffStr = (diffCents / 100).toFixed(2);
                const q = "Calculate: $" + dollars + " − " + cents + "¢";
                const s = shuffle(r, ["$" + diffStr, "$" + ((diffCents + 10) / 100).toFixed(2), "$" + ((diffCents - 10) / 100).toFixed(2), "$" + (dollars - 1) + "." + cents]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + dollars + ".00 - $" + (cents / 100).toFixed(2) + " = $" + diffStr + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 8: Half of money with cents (Lesson 15 #11)
            (r) => {
                const baseCents = [350, 450, 550, 650, 750][randInt(r, 0, 4)];
                const halfCents = baseCents / 2;
                const baseStr = (baseCents / 100).toFixed(2);
                const halfStr = (halfCents / 100).toFixed(2);
                const q = "How much money is 1/2 of $" + baseStr + "?";
                const s = shuffle(r, ["$" + halfStr, "$" + ((halfCents + 10) / 100).toFixed(2), "$" + ((halfCents - 10) / 100).toFixed(2), "$" + ((halfCents + 50) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + baseStr + " ÷ 2 = $" + halfStr + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 9: Round to nearest hundred on number line (Lesson 15 #12)
            (r) => {
                const h = randInt(r, 3, 7) * 100;
                const offset = randInt(r, 65, 95);
                const val = h + offset;
                const nextH = h + 100;
                const q = "To which hundred is " + val + " closest?";
                const s = shuffle(r, ["" + nextH, "" + h, "" + (nextH + 100), "" + (h - 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val + " is closest to " + nextH + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 10: Column addition of staggered digits (Lesson 15 #13)
            (r) => {
                const a = 9, b = 87, c = 654, d = 3210;
                const sum = a + b + c + d;
                const q = "Find the sum: 9 + 87 + 654 + 3210";
                const s = shuffle(r, ["" + sum, "" + (sum + 10), "" + (sum - 10), "" + (sum + 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["9 + 87 + 654 + 3210 = " + sum + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 11: Multi-digit multiplication (Lesson 15 #14)
            (r) => {
                const a = randInt(r, 350, 650);
                const b = randInt(r, 45, 85);
                const prod = a * b;
                const q = "Multiply: " + a + " × " + b;
                const s = shuffle(r, [prod.toLocaleString(), (prod + 100).toLocaleString(), (prod - 100).toLocaleString(), (prod + 1000).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + prod.toLocaleString() + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 12: Division with zeroes (Lesson 15 #15)
            (r) => {
                const d = randInt(r, 6, 9);
                const qVal = randInt(r, 4, 8) * 100 + randInt(r, 1, 9) * 10;
                const dividend = qVal * d;
                const q = "Divide: " + dividend + " ÷ " + d;
                const s = shuffle(r, ["" + qVal, "" + (qVal + 10), "" + (qVal - 10), "" + (qVal * 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dividend + " ÷ " + d + " = " + qVal + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 13: Unknown divisor (Lesson 15 #17)
            (r) => {
                const w = [3, 4, 5, 6][randInt(r, 0, 3)];
                const quot = 1200 / w;
                const q = "Find the unknown number w: 1200 ÷ w = " + quot;
                const s = shuffle(r, ["" + w, "" + (w + 1), "" + (w - 1), "" + (w * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 1200 ÷ " + quot + " = " + w + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 14: Unknown money in addition (Lesson 15 #20)
            (r) => {
                const add = randInt(r, 45, 85);
                const total = 1000;
                const w = total - add;
                const q = "Find the unknown number w: w + $" + add + " = $" + total;
                const s = shuffle(r, ["$" + w, "$" + (w + 10), "$" + (w - 10), "$" + (w + 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = $" + total + " - $" + add + " = $" + w + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 15: 4-term addition unknown (Lesson 15 #21)
            (r) => {
                const a = randInt(r, 2, 5);
                const b = randInt(r, 10, 15);
                const c = randInt(r, 20, 30);
                const n = randInt(r, 6, 12);
                const total = a + n + b + c;
                const q = "Find the unknown number n: " + a + " + n + " + b + " + " + c + " = " + total;
                const s = shuffle(r, ["" + n, "" + (n + 2), "" + (n - 2), "" + (n + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum known numbers: " + (a + b + c) + ". n = " + total + " - " + (a + b + c) + " = " + n + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 16: Grouped average calculation (Lesson 15 #23)
            (r) => {
                const a = randInt(r, 6, 10);
                const b = randInt(r, 8, 12);
                const c = 3 * randInt(r, 10, 15) - a - b;
                const sum = a + b + c;
                const avg = sum / 3;
                const q = "Evaluate: (" + a + " + " + b + " + " + c + ") ÷ 3";
                const s = shuffle(r, ["" + avg, "" + (avg + 2), "" + (avg - 2), "" + (avg + 1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add inside parentheses: " + a + " + " + b + " + " + c + " = " + sum + ". Divide by 3: " + sum + " ÷ 3 = " + avg + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 17: School mascot buttons sale (Lesson 15 #29)
            (r) => {
                const names = ["Reggie", "Johnny", "Marcus", "Dwayne"];
                const name = names[randInt(r, 0, names.length - 1)];
                const priceCents = [50, 75, 80, 85][randInt(r, 0, 3)];
                const qty = randInt(r, 5, 9);
                const totalCents = priceCents * qty;
                const totStr = (totalCents / 100).toFixed(2);
                const q = name + " sold buttons with a picture of his school's mascot for " + priceCents + "¢ each. If " + name + " sold " + qty + " buttons, how much money did he receive?";
                const s = shuffle(r, ["$" + totStr, "$" + ((totalCents + 50) / 100).toFixed(2), "$" + ((totalCents - 50) / 100).toFixed(2), "$" + ((totalCents + 100) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [qty + " × " + priceCents + "¢ = " + totalCents + "¢ = $" + totStr + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 18: Neither positive nor negative (Lesson 15 #30)
            (r) => {
                const q = "What number is neither positive nor negative?";
                const s = shuffle(r, ["0", "1", "-1", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Zero is neither positive nor negative."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 19: Equal groups division (Lesson 15 Practice Set)
            (r) => {
                const students = randInt(r, 20, 35);
                const desksPerRow = [4, 5, 6][randInt(r, 0, 2)];
                const rows = Math.floor(students / desksPerRow);
                const rem = students % desksPerRow;
                const q = "There are " + students + " students in a classroom. If there are " + desksPerRow + " desks in each row, how many full rows of desks are occupied?";
                const s = shuffle(r, [rows + " rows", (rows + 1) + " rows", (rows - 1) + " rows", (rows + 2) + " rows"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [students + " ÷ " + desksPerRow + " = " + rows + " with remainder " + rem + ". So there are " + rows + " full rows."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 16: Rounding Whole Numbers • Estimating
    16: (rng, qIndex) => {
        const framings = [
            // Category 0: Difference between product and sum of 20 and 5 (Lesson 16 #1)
            (r) => {
                const pairs = [[20, 5], [15, 4], [25, 4], [18, 5], [30, 4]];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const prod = a * b;
                const sum = a + b;
                const diff = prod - sum;
                const q = "What is the difference between the product of " + a + " and " + b + " and the sum of " + a + " and " + b + "?";
                const s = shuffle(r, ["" + diff, "" + (diff + 2), "" + (diff - 2), "" + prod]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Product: " + a + " × " + b + " = " + prod + ". Sum: " + a + " + " + b + " = " + sum + ". Difference: " + prod + " - " + sum + " = " + diff + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 1: Historical elapsed exploration years (Lesson 16 #2)
            (r) => {
                const y1 = 1584, y2 = 1803;
                const diff = y2 - y1;
                const q = "Walter Raleigh began exploring the coastline in " + y1 + ". Lewis and Clark began exploring in " + y2 + ". How many years after Raleigh did Lewis and Clark begin exploring?";
                const s = shuffle(r, [diff + " years", (diff + 10) + " years", (diff - 10) + " years", (diff + 2) + " years"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [y2 + " - " + y1 + " = " + diff + " years."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 2: Equal groups card sorting in binders (Lesson 16 #3)
            (r) => {
                const totalCards = randInt(r, 12, 24) * 10; // e.g. 140
                const groups = 5;
                const each = totalCards / groups;
                const inBox = each; // 1 group in box, 4 in binders
                const q = "Jacob separated his " + totalCards + " trading cards into " + groups + " equal groups. He placed four of the groups into binders. The remaining cards he placed in a box. How many cards did he put in the box?";
                const s = shuffle(r, ["" + inBox, "" + (inBox * 4), "" + (inBox + 5), "" + (inBox - 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [totalCards + " ÷ 5 = " + each + " cards per group. One group was placed in the box, so " + inBox + " cards."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 3: Hundred-thousands place (Lesson 16 #4)
            (r) => {
                const digits = [
                    { num: "159,342,876", place: "hundred-thousands", digit: "3" },
                    { num: "482,719,530", place: "hundred-thousands", digit: "7" },
                    { num: "925,641,380", place: "hundred-thousands", digit: "6" }
                ];
                const d = digits[randInt(r, 0, digits.length - 1)];
                const q = "Which digit in " + d.num + " is in the " + d.place + " place?";
                const s = shuffle(r, [d.digit, "" + (parseInt(d.digit) + 1), "" + (parseInt(d.digit) - 1), "4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The hundred-thousands place in " + d.num + " is occupied by " + d.digit + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 4: Presidential election votes in words (Lesson 16 #5)
            (r) => {
                const q = "In an election, 121,068,715 votes were tallied. Which choice uses words to write that number of votes?";
                const correct = "one hundred twenty-one million, sixty-eight thousand, seven hundred fifteen";
                const s = shuffle(r, [correct, "one hundred twenty-one billion, sixty-eight thousand, seven hundred fifteen", "one hundred twenty-one million, six hundred eight thousand, seven hundred fifteen", "twelve million, one hundred sixty-eight thousand, seven hundred fifteen"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Break into periods: 121 million, 068 thousand, 715."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 5: Halfway between two numbers (Lesson 16 #6)
            (r) => {
                const a = randInt(r, 3, 9);
                const diff = randInt(r, 3, 7) * 2;
                const b = a + diff;
                const mid = (a + b) / 2;
                const q = "What number is halfway between " + a + " and " + b + " on the number line?";
                const s = shuffle(r, ["" + mid, "" + (mid + 1), "" + (mid - 1), "" + (mid + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " + " + b + ") ÷ 2 = " + (a + b) + " ÷ 2 = " + mid + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 6: Round to nearest thousand (Lesson 16 #7)
            (r) => {
                const thousands = randInt(r, 25, 75);
                const hundreds = randInt(r, 550, 950);
                const val = thousands * 1000 + hundreds;
                const rounded = (thousands + 1) * 1000;
                const q = "Round " + val.toLocaleString() + " to the nearest thousand.";
                const s = shuffle(r, [rounded.toLocaleString(), (thousands * 1000).toLocaleString(), (rounded + 1000).toLocaleString(), (rounded - 2000).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since the hundreds digit is 5 or greater, round up to " + rounded.toLocaleString() + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 7: Round 550 to nearest hundred (Lesson 16 #8)
            (r) => {
                const h = randInt(r, 3, 8) * 100 + 50;
                const rounded = h + 50;
                const q = "Round " + h + " to the nearest hundred.";
                const s = shuffle(r, ["" + rounded, "" + (h - 50), "" + (rounded + 100), "" + h]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Numbers ending in 50 round up to the next hundred: " + rounded + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 8: Estimate product by rounding to nearest hundred (Lesson 16 #9)
            (r) => {
                const a = randInt(r, 280, 315);
                const b = randInt(r, 385, 420);
                const rA = Math.round(a / 100) * 100;
                const rB = Math.round(b / 100) * 100;
                const estProd = rA * rB;
                const q = "Estimate the product of " + a + " and " + b + " by rounding each number to the nearest hundred before multiplying.";
                const s = shuffle(r, [estProd.toLocaleString(), (estProd + 10000).toLocaleString(), (estProd - 10000).toLocaleString(), (estProd * 2).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + rA + "; " + b + " rounds to " + rB + ". " + rA + " × " + rB + " = " + estProd.toLocaleString() + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 9: Multi-digit subtraction with regrouping (Lesson 16 #11)
            (r) => {
                const a = randInt(r, 35000, 55000);
                const b = randInt(r, 12000, 24000);
                const diff = a - b;
                const q = "Subtract: " + a.toLocaleString() + " − " + b.toLocaleString();
                const s = shuffle(r, [diff.toLocaleString(), (diff + 100).toLocaleString(), (diff - 100).toLocaleString(), (diff + 1000).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a.toLocaleString() + " - " + b.toLocaleString() + " = " + diff.toLocaleString() + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 10: Division by 100 with remainder (Lesson 16 #13)
            (r) => {
                const n = randInt(r, 2500, 8500);
                const qVal = Math.floor(n / 100);
                const rem = n % 100;
                const correct = qVal + " R " + rem;
                const q = "Divide: " + n + " ÷ 100";
                const s = shuffle(r, [correct, (qVal + 1) + " R " + rem, qVal + " R " + (rem + 1), (qVal - 1) + " R " + rem]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " ÷ 100 = " + qVal + " with remainder " + rem + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 11: Average of two numbers (Lesson 16 #14)
            (r) => {
                const a = randInt(r, 3, 9);
                const diff = randInt(r, 2, 6) * 2;
                const b = a + diff;
                const avg = (a + b) / 2;
                const q = "Evaluate: (" + a + " + " + b + ") ÷ 2";
                const s = shuffle(r, ["" + avg, "" + (avg + 1), "" + (avg - 1), "" + (avg + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " = " + (a + b) + "; " + (a + b) + " ÷ 2 = " + avg + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 12: Half of $5 (Lesson 16 #15)
            (r) => {
                const q = "How much money is 1/2 of $5.00?";
                const s = shuffle(r, ["$2.50", "$2.00", "$2.25", "$3.00"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$5.00 ÷ 2 = $2.50."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 13: One fourth of $5 (Lesson 16 #16)
            (r) => {
                const q = "How much money is 1/4 of $5.00?";
                const s = shuffle(r, ["$1.25", "$1.50", "$1.20", "$1.75"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$5.00 ÷ 4 = $1.25."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 14: Multiplying cents by 10 (Lesson 16 #17)
            (r) => {
                const cents = [15, 25, 35, 45, 75][randInt(r, 0, 4)];
                const prod = (cents * 10) / 100;
                const prodStr = prod.toFixed(2);
                const sCents = (cents / 100).toFixed(2);
                const q = "Find the product: $" + sCents + " × 10";
                const s = shuffle(r, ["$" + prodStr, "$" + (prod + 1).toFixed(2), "$" + (prod - 0.5).toFixed(2), "$" + (prod * 10).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + sCents + " × 10 = $" + prodStr + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 15: Zero multiplication factor (Lesson 16 #18)
            (r) => {
                const a = randInt(r, 150, 450);
                const b = randInt(r, 200, 500);
                const q = "Evaluate: " + a + " × (" + b + " − " + b + ")";
                const s = shuffle(r, ["0", "" + a, "" + b, "1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [b + " - " + b + " = 0; " + a + " × 0 = 0."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 16: Associative property comparison (Lesson 16 #19)
            (r) => {
                const q = "Compare: 1 + (2 + 3) ○ (1 + 2) + 3";
                const s = shuffle(r, ["=", ">", "<", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Both sides equal 6, demonstrating the associative property of addition: =."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 17: Estimate sum by rounding to nearest thousand (Lesson 16 Practice Set)
            (r) => {
                const a = randInt(r, 3, 7) * 1000 + randInt(r, 150, 450);
                const b = randInt(r, 1, 4) * 1000 + randInt(r, 650, 950);
                const rA = Math.round(a / 1000) * 1000;
                const rB = Math.round(b / 1000) * 1000;
                const sum = rA + rB;
                const q = "Estimate the sum of " + a.toLocaleString() + " and " + b.toLocaleString() + " by rounding each number to the nearest thousand before adding.";
                const s = shuffle(r, [sum.toLocaleString(), (sum + 1000).toLocaleString(), (sum - 1000).toLocaleString(), (a + b).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + rA + "; " + b + " rounds to " + rB + ". " + rA + " + " + rB + " = " + sum.toLocaleString() + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 18: Estimate difference by rounding to nearest hundred (Lesson 16 Practice Set)
            (r) => {
                const a = randInt(r, 550, 850);
                const b = randInt(r, 180, 380);
                const rA = Math.round(a / 100) * 100;
                const rB = Math.round(b / 100) * 100;
                const diff = rA - rB;
                const q = "Estimate the difference of " + a + " and " + b + " by rounding each number to the nearest hundred before subtracting.";
                const s = shuffle(r, ["" + diff, "" + (diff + 100), "" + (diff - 100), "" + (a - b)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + rA + "; " + b + " rounds to " + rB + ". " + rA + " - " + rB + " = " + diff + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 19: Sequence with increasing step (Lesson 16 problem solving)
            (r) => {
                const q = "Find the next number in this sequence: 2, 3, 5, 8, 12, ...";
                const s = shuffle(r, ["17", "16", "18", "15"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The differences increase by 1 (+1, +2, +3, +4, +5): 12 + 5 = 17."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 17: The Number Line: Fractions and Mixed Numbers
    17: (rng, qIndex) => {
        const framings = [
            // Category 0: Sum of word numbers (Lesson 17 #1)
            (r) => {
                const pairs = [
                    { w1: "twelve thousand, five hundred", v1: 12500, w2: "ten thousand, six hundred ten", v2: 10610 },
                    { w1: "fifteen thousand, four hundred", v1: 15400, w2: "eight thousand, two hundred twenty", v2: 8220 },
                    { w1: "twenty thousand, three hundred", v1: 20300, w2: "eleven thousand, five hundred", v2: 11500 }
                ];
                const p = pairs[randInt(r, 0, pairs.length - 1)];
                const sum = p.v1 + p.v2;
                const q = "What is the sum of " + p.w1 + " and " + p.w2 + "?";
                const s = shuffle(r, [sum.toLocaleString(), (sum + 100).toLocaleString(), (sum - 100).toLocaleString(), (sum + 1000).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [p.v1.toLocaleString() + " + " + p.v2.toLocaleString() + " = " + sum.toLocaleString() + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 1: Wright brothers to moon landing elapsed years (Lesson 17 #2)
            (r) => {
                const y1 = 1903, y2 = 1969;
                const diff = y2 - y1;
                const q = "In " + y1 + " the first powered airplane flight was made. In " + y2 + " astronauts first landed on the moon. How many years was it from the first powered flight to the first moon landing?";
                const s = shuffle(r, [diff + " years", (diff + 10) + " years", (diff - 10) + " years", (diff + 4) + " years"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [y2 + " - " + y1 + " = " + diff + " years."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 2: Runner distance in seconds (Lesson 17 #3)
            (r) => {
                const names = ["Linda", "Keisha", "Shauna", "Courtney"];
                const name = names[randInt(r, 0, names.length - 1)];
                const yardsPerSec = randInt(r, 5, 8);
                const secs = randInt(r, 10, 15);
                const dist = yardsPerSec * secs;
                const q = name + " can run about " + yardsPerSec + " yards in one second. About how far can she run in " + secs + " seconds?";
                const s = shuffle(r, [dist + " yards", (dist + 6) + " yards", (dist - 6) + " yards", (dist + 12) + " yards"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [yardsPerSec + " yards/sec × " + secs + " sec = " + dist + " yards."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 3: Coin collector two dozen rare coins (Lesson 17 #4)
            (r) => {
                const priceEach = [500, 1000, 1500, 2000][randInt(r, 0, 3)];
                const total = 24 * priceEach;
                const q = "A coin collector has a collection of two dozen rare coins. If the value of each coin is $" + priceEach.toLocaleString() + ", what is the value of the entire collection?";
                const s = shuffle(r, ["$" + total.toLocaleString(), "$" + (total + 2000).toLocaleString(), "$" + (total - 2000).toLocaleString(), "$" + (12 * priceEach).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Two dozen = 24 coins. 24 × $" + priceEach.toLocaleString() + " = $" + total.toLocaleString() + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 4: Estimate sum by rounding to nearest thousand (Lesson 17 #5)
            (r) => {
                const a = 5280, b = 1760;
                const rA = 5000, rB = 2000;
                const sum = rA + rB;
                const q = "Estimate the sum of " + a + " and " + b + " by rounding each number to the nearest thousand before adding.";
                const s = shuffle(r, [sum.toLocaleString(), (sum + 1000).toLocaleString(), (sum - 1000).toLocaleString(), (a + b).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + rA + "; " + b + " rounds to " + rB + ". " + rA + " + " + rB + " = " + sum.toLocaleString() + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 5: Division with zero in quotient (Lesson 17 #6)
            (r) => {
                const d = [3, 4, 6][randInt(r, 0, 2)];
                const ans = randInt(r, 12, 25) * 10;
                const dividend = ans * d;
                const q = "Divide: " + dividend + " ÷ " + d;
                const s = shuffle(r, ["" + ans, "" + (ans + 10), "" + (ans - 10), "" + (ans + 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dividend + " ÷ " + d + " = " + ans + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 6: Order of operations with division first (Lesson 17 #7)
            (r) => {
                const a = 6, b = 66, c = 3;
                const ans = a + b / c;
                const q = "Simplify: " + a + " + " + b + " ÷ " + c;
                const s = shuffle(r, ["" + ans, "" + ((a + b) / c), "" + (ans + 2), "" + (ans - 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide first: " + b + " ÷ " + c + " = 22. Then add: " + a + " + 22 = " + ans + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 7: Ruler segment in sixteenths (Lesson 17 sequence)
            (r) => {
                const fracs = ["1/16", "1/8", "3/16", "1/4", "5/16", "3/8", "7/16", "1/2"];
                const q = "What fraction comes next in the inch ruler measurement sequence? 1/16, 1/8, 3/16, 1/4, 5/16, 3/8, ...";
                const s = shuffle(r, ["7/16", "1/2", "9/16", "6/16"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sequence counts by sixteenths: 1/16, 2/16 (1/8), 3/16, 4/16 (1/4), 5/16, 6/16 (3/8), 7/16."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 8: Mixed number on number line (Lesson 17 Concept)
            (r) => {
                const whole = randInt(r, 2, 5);
                const q = "What mixed number represents the point halfway between " + whole + " and " + (whole + 1) + " on the number line?";
                const correct = whole + " 1/2";
                const s = shuffle(r, [correct, whole + " 1/4", whole + " 3/4", (whole + 1) + " 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Halfway between " + whole + " and " + (whole + 1) + " is " + correct + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 9: Comparing mixed numbers (Lesson 17 Concept)
            (r) => {
                const w = randInt(r, 3, 7);
                const q = "Compare: " + w + " 1/2 ○ " + w + " 1/4";
                const s = shuffle(r, [">", "<", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since 1/2 is greater than 1/4, " + w + " 1/2 > " + w + " 1/4."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 10: Fractions equivalent to 1/2 (Lesson 17 Concept)
            (r) => {
                const denoms = [4, 6, 8, 10, 12, 16];
                const d = denoms[randInt(r, 0, denoms.length - 1)];
                const num = d / 2;
                const q = "Which fraction has denominator " + d + " and is equivalent to 1/2?";
                const correct = num + "/" + d;
                const s = shuffle(r, [correct, (num - 1) + "/" + d, (num + 1) + "/" + d, "1/" + d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Half of " + d + " is " + num + ", so " + correct + " = 1/2."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 11: Decades in a century (Lesson 17 Mental Math)
            (r) => {
                const q = "How many decades are in a century?";
                const s = shuffle(r, ["10", "100", "5", "20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A century is 100 years and a decade is 10 years: 100 ÷ 10 = 10 decades."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 12: Yards in feet conversion (Lesson 17 Mental Math)
            (r) => {
                const yards = randInt(r, 3, 9);
                const feet = yards * 3;
                const q = "How many yards are in " + feet + " feet?";
                const s = shuffle(r, [yards + " yards", (yards + 1) + " yards", (yards - 1) + " yards", (feet * 3) + " yards"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [feet + " ÷ 3 = " + yards + " yards."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 13: Mixed number distance on number line (Lesson 17 Concept)
            (r) => {
                const q = "What is the distance on the number line from 0 to 3 3/4?";
                const s = shuffle(r, ["3 3/4", "3 1/4", "4", "3 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distance from 0 to any positive number is the number itself: 3 3/4."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 14: Multiplying three numbers (Lesson 17)
            (r) => {
                const a = randInt(r, 4, 8);
                const b = randInt(r, 5, 10);
                const c = randInt(r, 2, 5);
                const prod = a * b * c;
                const q = "Calculate the product: " + a + " × " + b + " × " + c;
                const s = shuffle(r, ["" + prod, "" + (prod + 10), "" + (prod - 10), "" + (prod + 20)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + (a*b) + "; " + (a*b) + " × " + c + " = " + prod + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 15: Subtraction across zero (Lesson 17)
            (r) => {
                const a = randInt(r, 4000, 8000);
                const b = randInt(r, 1250, 3750);
                const diff = a - b;
                const q = "Subtract: " + a + " − " + b;
                const s = shuffle(r, ["" + diff, "" + (diff + 10), "" + (diff - 10), "" + (diff + 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " - " + b + " = " + diff + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 16: Finding fourths on a ruler (Lesson 17 Practice Set)
            (r) => {
                const q = "Which of the following measurements is equivalent to 2/4 inch?";
                const s = shuffle(r, ["1/2 inch", "1/4 inch", "3/4 inch", "1 inch"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/4 simplifies to 1/2 inch."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 17: Fractions of hours (Lesson 17 Concept)
            (r) => {
                const quarters = [1, 2, 3][randInt(r, 0, 2)];
                const mins = quarters * 15;
                const q = "How many minutes are in " + quarters + "/4 of an hour?";
                const s = shuffle(r, [mins + " minutes", (mins + 5) + " minutes", (mins - 5) + " minutes", (mins + 10) + " minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 hour = 60 minutes. 60 ÷ 4 = 15; " + quarters + " × 15 = " + mins + " minutes."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 18: Negative numbers compare on number line (Lesson 17)
            (r) => {
                const a = -randInt(r, 5, 10);
                const b = -randInt(r, 1, 4);
                const sym = a < b ? "<" : ">";
                const q = "Compare: " + a + " ○ " + b;
                const s = shuffle(r, [sym, sym === "<" ? ">" : "<", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " is further left on the number line than " + b + ", so " + a + " < " + b + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 19: Unknown subtrahend with fraction (Lesson 17)
            (r) => {
                const q = "What fraction completes the equation: 1 − 1/4 = ?";
                const s = shuffle(r, ["3/4", "1/2", "2/4", "1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 = 4/4; 4/4 - 1/4 = 3/4."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 18: Average • Line Graphs
    18: (rng, qIndex) => {
        const framings = [
            // Category 0: Peanuts word problem (Lesson 18 #1)
            (r) => {
                const am = randInt(r, 1800, 2400);
                const pm = randInt(r, 3400, 4200);
                const total = am + pm;
                const q = "Jumbo ate " + am.toLocaleString() + " peanuts in the morning and " + pm.toLocaleString() + " peanuts in the afternoon. How many peanuts did Jumbo eat in all?";
                const s = shuffle(r, [total.toLocaleString(), (total + 100).toLocaleString(), (total - 100).toLocaleString(), (total + 1000).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [am.toLocaleString() + " + " + pm.toLocaleString() + " = " + total.toLocaleString() + " peanuts."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 1: Permanent teeth word problem (Lesson 18 #2)
            (r) => {
                const top = randInt(r, 10, 13);
                const bottom = randInt(r, 10, 13);
                const current = top + bottom;
                const adult = 32;
                const needed = adult - current;
                const q = "Jimmy counted his permanent teeth. He had " + top + " on the top and " + bottom + " on the bottom. An adult has 32 permanent teeth. How many more of Jimmy's teeth need to grow in?";
                const s = shuffle(r, ["" + needed, "" + (needed + 2), "" + (needed - 2), "" + current]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Current teeth: " + top + " + " + bottom + " = " + current + ". Needed: 32 - " + current + " = " + needed + " teeth."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 2: Colored pencils equal groups (Lesson 18 #3)
            (r) => {
                const names = ["Olivia", "Marcie", "Keisha", "Mia"];
                const name = names[randInt(r, 0, names.length - 1)];
                const centsEach = randInt(r, 45, 65);
                const totalCents = 12 * centsEach;
                const totStr = (totalCents / 100).toFixed(2);
                const q = name + " bought one dozen colored pencils for an art project. Each pencil cost " + centsEach + "¢. How much did " + name + " spend on pencils?";
                const s = shuffle(r, ["$" + totStr, "$" + ((totalCents + 20) / 100).toFixed(2), "$" + ((totalCents - 20) / 100).toFixed(2), "$" + ((totalCents + 50) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 × " + centsEach + "¢ = " + totalCents + "¢ = $" + totStr + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 3: Estimate difference rounding to nearest thousand (Lesson 18 #4)
            (r) => {
                const a = randInt(r, 4800, 5200);
                const b = randInt(r, 1800, 2200);
                const rA = Math.round(a / 1000) * 1000;
                const rB = Math.round(b / 1000) * 1000;
                const diff = rA - rB;
                const q = "Estimate the difference of " + a + " and " + b + " by rounding each number to the nearest thousand before subtracting.";
                const s = shuffle(r, [diff.toLocaleString(), (diff + 1000).toLocaleString(), (diff - 1000).toLocaleString(), (a - b).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + rA + "; " + b + " rounds to " + rB + ". " + rA + " - " + rB + " = " + diff.toLocaleString() + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 4: Average of three numbers (Lesson 18 #5)
            (r) => {
                const avg = randInt(r, 7, 15);
                const d1 = randInt(r, 1, 3);
                const d2 = randInt(r, 1, 3);
                const n1 = avg - d1;
                const n2 = avg + d2;
                const n3 = 3 * avg - n1 - n2;
                const q = "Find the average of " + n1 + ", " + n2 + ", and " + n3 + ".";
                const s = shuffle(r, ["" + avg, "" + (avg + 1), "" + (avg - 1), "" + (avg + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the numbers: " + n1 + " + " + n2 + " + " + n3 + " = " + (n1+n2+n3) + ". Divide by 3: " + (n1+n2+n3) + " ÷ 3 = " + avg + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 5: Halfway between two numbers (Lesson 18 #6)
            (r) => {
                const a = randInt(r, 45, 65);
                const diff = randInt(r, 8, 16) * 2;
                const b = a + diff;
                const mid = (a + b) / 2;
                const q = "What number is halfway between " + a + " and " + b + "?";
                const s = shuffle(r, ["" + mid, "" + (mid + 1), "" + (mid - 1), "" + (mid + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " + " + b + ") ÷ 2 = " + (a + b) + " ÷ 2 = " + mid + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 6: Less than negative result (Lesson 18 #7)
            (r) => {
                const n = randInt(r, 5, 9);
                const m = randInt(r, 1, 4);
                const ans = m - n;
                const q = "What number is " + n + " less than " + m + "?";
                const s = shuffle(r, ["" + ans, "" + (ans + 1), "" + (ans - 1), "" + (n - m)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [m + " - " + n + " = " + ans + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 7: Cents multiplied by 100 (Lesson 18 #8)
            (r) => {
                const cents = [25, 35, 45, 65, 75][randInt(r, 0, 4)];
                const prod = (cents * 100) / 100;
                const q = "Find the product: $" + (cents / 100).toFixed(2) + " × 100";
                const s = shuffle(r, ["$" + prod.toFixed(2), "$" + (prod * 10).toFixed(2), "$" + (prod / 10).toFixed(2), "$" + (prod + 10).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiplying by 100 shifts the decimal point two places to the right: $" + prod.toFixed(2) + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 8: Division by 10 (Lesson 18 #9)
            (r) => {
                const base = randInt(r, 1001, 1009) * 10;
                const ans = base / 10;
                const q = "Divide: " + base.toLocaleString() + " ÷ 10";
                const s = shuffle(r, [ans.toLocaleString(), (ans * 10).toLocaleString(), (ans / 10).toLocaleString(), (ans + 10).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [base.toLocaleString() + " ÷ 10 = " + ans.toLocaleString() + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 9: Adding mixed currency and cents (Lesson 18 #11)
            (r) => {
                const d1 = 3.64, d2 = 94.28, d3 = 0.87;
                const total = (d1 + d2 + d3).toFixed(2);
                const q = "Add: $3.64 + $94.28 + 87¢";
                const s = shuffle(r, ["$" + total, "$" + (d1 + d2).toFixed(2), "$" + (parseFloat(total) + 1).toFixed(2), "$" + (parseFloat(total) - 1).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert 87¢ to $0.87. $3.64 + $94.28 + $0.87 = $" + total + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 10: Zero factor product chain (Lesson 18 #14)
            (r) => {
                const q = "Calculate: 4 × 3 × 2 × 1 × 0";
                const s = shuffle(r, ["0", "24", "1", "10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any multiplication expression with 0 as a factor equals 0."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 11: Unknown in division equation (Lesson 18 #16)
            (r) => {
                const div = randInt(r, 4, 8);
                const quot = randInt(r, 25, 45);
                const dividend = div * quot;
                const q = "Find the unknown number n: " + dividend + " ÷ n = " + quot;
                const s = shuffle(r, ["" + div, "" + (div + 1), "" + (div - 1), "" + (div * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = " + dividend + " ÷ " + quot + " = " + div + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 12: Equation with operations on both sides (Lesson 18 #17)
            (r) => {
                const left = (1 + 2) * 3; // 9
                const rightPart = 1 * 2; // 2
                const m = left - rightPart; // 7
                const q = "Find the unknown number m: (1 + 2) × 3 = (1 × 2) + m";
                const s = shuffle(r, ["" + m, "" + (m + 1), "" + (m - 1), "" + (m + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side: (1 + 2) × 3 = 3 × 3 = 9. Right side: 2 + m = 9, so m = 7."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 13: Perimeter of rectangle (Lesson 18 #18)
            (r) => {
                const len = randInt(r, 6, 12);
                const wid = randInt(r, 3, len - 2);
                const peri = 2 * (len + wid);
                const q = "What is the perimeter of a rectangle " + len + " cm long and " + wid + " cm wide?";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 2) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (" + len + " + " + wid + ") = 2 × " + (len + wid) + " = " + peri + " cm."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 14: Sum of first positive even numbers (Lesson 18 #19)
            (r) => {
                const k = randInt(r, 4, 7);
                const evens = [];
                for (let i = 1; i <= k; i++) evens.push(i * 2);
                const sum = evens.reduce((a, b) => a + b, 0);
                const q = "What is the sum of the first " + k + " positive even numbers?";
                const s = shuffle(r, ["" + sum, "" + (sum + 2), "" + (sum - 2), "" + (sum + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The first " + k + " positive evens are " + evens.join(", ") + ". Sum = " + sum + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 15: Geometric doubling sequence (Lesson 18 #20)
            (r) => {
                const q = "What is the missing term in the doubling sequence? 1, 2, 4, __, 16, 32";
                const s = shuffle(r, ["8", "6", "10", "12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each term is multiplied by 2: 4 × 2 = 8."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 16: Comparing multiplication and division by 1 (Lesson 18 #21)
            (r) => {
                const n = randInt(r, 200, 800);
                const q = "Compare: " + n + " × 1 ○ " + n + " ÷ 1";
                const s = shuffle(r, ["=", ">", "<", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " × 1 = " + n + " and " + n + " ÷ 1 = " + n + ". Both equal " + n + ", so =."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 17: Average of test scores (Lesson 18 Practice Set)
            (r) => {
                const scores = [80, 85, 90, 95, 100];
                const s1 = scores[randInt(r, 0, 4)];
                const s2 = scores[randInt(r, 0, 4)];
                const s3 = scores[randInt(r, 0, 4)];
                const sum = s1 + s2 + s3;
                const avg = Math.round(sum / 3);
                const q = "A student scored " + s1 + ", " + s2 + ", and " + s3 + " on three math tests. What was the student's average score?";
                const s = shuffle(r, ["" + avg, "" + (avg + 2), "" + (avg - 2), "" + (avg + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the scores: " + s1 + " + " + s2 + " + " + s3 + " = " + sum + ". Divide by 3: " + sum + " ÷ 3 ≈ " + avg + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 18: Line graph interpretation (Lesson 18 Concept)
            (r) => {
                const q = "Which type of graph is best suited for displaying changes in temperature over time?";
                const s = shuffle(r, ["Line graph", "Pictograph", "Circle graph", "Venn diagram"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Line graphs are ideal for showing continuous data and trends over time."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 19: Unknown minuend in subtraction (Lesson 18 #15)
            (r) => {
                const sub = randInt(r, 45, 95);
                const diff = randInt(r, 35, 75);
                const w = sub + diff;
                const q = "Find the unknown number w: w − " + sub + " = " + diff;
                const s = shuffle(r, ["" + w, "" + (w + 10), "" + (w - 10), "" + (diff - 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + diff + " + " + sub + " = " + w + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 19: Factors • Prime Numbers
    19: (rng, qIndex) => {
        const framings = [
            // Category 0: Divisor from dividend and quotient (Lesson 19 #1)
            (r) => {
                const pairs = [[252, 6, 42], [240, 8, 30], [216, 6, 36], [288, 9, 32], [350, 7, 50]];
                const [dend, quot, dsor] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "If " + dend + " is the dividend and " + quot + " is the quotient, what is the divisor?";
                const s = shuffle(r, ["" + dsor, "" + (dsor + 2), "" + (dsor - 2), "" + (dsor + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divisor = Dividend ÷ Quotient = " + dend + " ÷ " + quot + " = " + dsor + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 1: Gettysburg Address fourscore and seven years (Lesson 19 #2)
            (r) => {
                const q = "In 1863, President Abraham Lincoln gave his speech beginning 'Fourscore and seven years ago...'. A score equals twenty. What year was Lincoln referring to?";
                const s = shuffle(r, ["1776", "1789", "1756", "1792"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fourscore and seven = 4 × 20 + 7 = 87 years. 1863 - 87 = 1776."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 2: Temperature difference with negative winter reading (Lesson 19 #3)
            (r) => {
                const low = -randInt(r, 35, 50);
                const high = randInt(r, 60, 75);
                const diff = high - low;
                const q = "The winter temperature in Barrow was " + low + "°F and the summer temperature was " + high + "°F. How many degrees warmer was it in the summer than in the winter?";
                const s = shuffle(r, [diff + "°F", (diff - 10) + "°F", (high + low) + "°F", (diff + 10) + "°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [high + " - (" + low + ") = " + high + " + " + Math.abs(low) + " = " + diff + "°F."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 3: Turnips shared among rabbits equal groups (Lesson 19 #4)
            (r) => {
                const rabbits = 7;
                const perRabbit = randInt(r, 24, 35);
                const turnips = rabbits * perRabbit;
                const q = "If " + turnips + " turnips are to be shared equally among " + rabbits + " rabbits, how many should each receive?";
                const s = shuffle(r, ["" + perRabbit, "" + (perRabbit + 2), "" + (perRabbit - 2), "" + (perRabbit + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [turnips + " ÷ " + rabbits + " = " + perRabbit + " turnips per rabbit."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 4: Average of four numbers (Lesson 19 #5)
            (r) => {
                const nums = [1, 2, 4, 9];
                const sum = 1 + 2 + 4 + 9;
                const avg = sum / 4;
                const q = "What is the average of 1, 2, 4, and 9?";
                const s = shuffle(r, ["4", "3", "5", "4 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 + 2 + 4 + 9 = 16. 16 ÷ 4 = 4."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 5: Square numbers sequence (Lesson 19 #6)
            (r) => {
                const q = "What is the next number in the sequence? 1, 4, 9, 16, 25, ...";
                const s = shuffle(r, ["36", "30", "35", "49"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["These are squares of consecutive integers: 6 × 6 = 36."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 6: Perimeter of regular hexagon (Lesson 19 #7)
            (r) => {
                const side = randInt(r, 15, 35);
                const peri = 6 * side;
                const q = "A regular hexagon has six sides of equal length. If each side is " + side + " mm, what is the perimeter?";
                const s = shuffle(r, [peri + " mm", (peri + 6) + " mm", (peri - 6) + " mm", (5 * side) + " mm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 × " + side + " mm = " + peri + " mm."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 7: Centimeter to millimeter conversion (Lesson 19 #8)
            (r) => {
                const cm = randInt(r, 3, 9);
                const mm = cm * 10;
                const q = "One centimeter equals ten millimeters. How many millimeters long is a line segment of length " + cm + " cm?";
                const s = shuffle(r, [mm + " mm", (mm + 10) + " mm", (mm - 10) + " mm", (cm * 100) + " mm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [cm + " cm × 10 mm/cm = " + mm + " mm."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 8: Whole number factors of 20 (Lesson 19 #9)
            (r) => {
                const q = "Which list contains all the whole-number factors of 20?";
                const correct = "1, 2, 4, 5, 10, 20";
                const s = shuffle(r, [correct, "1, 2, 4, 5, 20", "2, 4, 5, 10", "1, 2, 5, 10, 20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Factors of 20 are 1, 2, 4, 5, 10, 20."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 9: Count of factors of a number (Lesson 19 #10)
            (r) => {
                const cases = [
                    { n: 15, factors: "1, 3, 5, 15", count: 4 },
                    { n: 12, factors: "1, 2, 3, 4, 6, 12", count: 6 },
                    { n: 16, factors: "1, 2, 4, 8, 16", count: 5 },
                    { n: 18, factors: "1, 2, 3, 6, 9, 18", count: 6 }
                ];
                const c = cases[randInt(r, 0, cases.length - 1)];
                const q = "How many different whole numbers are factors of " + c.n + "?";
                const s = shuffle(r, ["" + c.count, "" + (c.count + 1), "" + (c.count - 1), "" + (c.count + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The factors of " + c.n + " are " + c.factors + ", so there are " + c.count + " factors."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 10: Identify prime number (Lesson 19 #11)
            (r) => {
                const sets = [
                    { prime: "29", composites: ["25", "27", "21"] },
                    { prime: "31", composites: ["33", "35", "39"] },
                    { prime: "41", composites: ["45", "49", "51"] },
                    { prime: "19", composites: ["15", "21", "27"] }
                ];
                const item = sets[randInt(r, 0, sets.length - 1)];
                const q = "Which of the numbers below is a prime number?";
                const s = shuffle(r, [item.prime, ...item.composites]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.prime + " has only two factors (1 and itself), so it is prime."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 11: Division by 100 removing zeroes (Lesson 19 #12)
            (r) => {
                const n = randInt(r, 15, 65) * 10000;
                const ans = n / 100;
                const q = "Calculate: " + n.toLocaleString() + " ÷ 100";
                const s = shuffle(r, [ans.toLocaleString(), (ans * 10).toLocaleString(), (ans / 10).toLocaleString(), (ans + 100).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 100 removes two zeroes: " + ans.toLocaleString() + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 12: Order of operations with sum divided by 3 (Lesson 19 #14)
            (r) => {
                const a = randInt(r, 2, 5) * 3;
                const b = randInt(r, 4, 8) * 3;
                const c = randInt(r, 1, 4) * 3;
                const sum = a + b + c;
                const ans = sum / 3;
                const q = "Evaluate: (" + a + " + " + b + " + " + c + ") ÷ 3";
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 2), "" + (ans + 3)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " + " + c + " = " + sum + "; " + sum + " ÷ 3 = " + ans + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 13: Money subtraction with unknown (Lesson 19 #16)
            (r) => {
                const startDollars = 10;
                const remCents = randInt(r, 125, 475);
                const wCents = startDollars * 100 - remCents;
                const sRem = (remCents / 100).toFixed(2);
                const sW = (wCents / 100).toFixed(2);
                const q = "Find the unknown number w: $" + startDollars + ".00 − w = $" + sRem;
                const s = shuffle(r, ["$" + sW, "$" + ((wCents + 10) / 100).toFixed(2), "$" + ((wCents - 10) / 100).toFixed(2), "$" + ((wCents + 50) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = $" + startDollars + ".00 - $" + sRem + " = $" + sW + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 14: Smallest prime number (Lesson 19 Concept)
            (r) => {
                const q = "What is the smallest prime number?";
                const s = shuffle(r, ["2", "1", "3", "0"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 is the smallest prime number (1 is neither prime nor composite)."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 15: Prime numbers less than 10 (Lesson 19 Practice Set)
            (r) => {
                const q = "Which choice lists all the prime numbers less than 10?";
                const s = shuffle(r, ["2, 3, 5, 7", "1, 2, 3, 5, 7", "2, 3, 5, 7, 9", "3, 5, 7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The prime numbers less than 10 are 2, 3, 5, and 7."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 16: Factor pairs (Lesson 19 Concept)
            (r) => {
                const q = "Which of the following is NOT a factor of 24?";
                const s = shuffle(r, ["5", "6", "8", "12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["24 ÷ 5 = 4 R 4, so 5 is not a factor of 24."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 17: Only even prime number (Lesson 19 Concept)
            (r) => {
                const q = "Which number is the only even prime number?";
                const s = shuffle(r, ["2", "4", "0", "None"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 is the only even prime number because all other even numbers are divisible by 2."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 18: Array representation of factors (Lesson 19 Concept)
            (r) => {
                const q = "A number has exactly two factors: 1 and itself. What type of number is it?";
                const s = shuffle(r, ["Prime number", "Composite number", "Odd number", "Square number"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A prime number has exactly two factors: 1 and itself."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 19: Unknown factor in multiplication (Lesson 19)
            (r) => {
                const factor = randInt(r, 6, 12);
                const w = randInt(r, 7, 14);
                const prod = factor * w;
                const q = "Find the unknown number w: " + factor + "w = " + prod;
                const s = shuffle(r, ["" + w, "" + (w + 1), "" + (w - 1), "" + (w + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + prod + " ÷ " + factor + " = " + w + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 20: Greatest Common Factor (GCF)
    20: (rng, qIndex) => {
        const framings = [
            // Category 0: Difference between product and sum of 12 and 8 (Lesson 20 #1)
            (r) => {
                const pairs = [[12, 8], [10, 6], [14, 6], [15, 5], [16, 4]];
                const [a, b] = pairs[randInt(r, 0, pairs.length - 1)];
                const prod = a * b;
                const sum = a + b;
                const diff = prod - sum;
                const q = "What is the difference between the product of " + a + " and " + b + " and the sum of " + a + " and " + b + "?";
                const s = shuffle(r, ["" + diff, "" + (diff + 2), "" + (diff - 2), "" + prod]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + prod + "; " + a + " + " + b + " = " + sum + "; " + prod + " - " + sum + " = " + diff + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 1: Saturn solar distance in digits (Lesson 20 #2)
            (r) => {
                const q = "Saturn's average distance from the Sun is one billion, four hundred twenty-nine million kilometers. Use digits to write that distance.";
                const s = shuffle(r, ["1,429,000,000", "142,900,000", "14,290,000,000", "1,429,000"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One billion, four hundred twenty-nine million = 1,429,000,000."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 2: Ten-millions place digit (Lesson 20 #3)
            (r) => {
                const digits = [
                    { num: "497,325,186", place: "ten-millions", digit: "9" },
                    { num: "758,241,963", place: "ten-millions", digit: "5" },
                    { num: "382,914,650", place: "ten-millions", digit: "8" }
                ];
                const d = digits[randInt(r, 0, digits.length - 1)];
                const q = "Which digit in " + d.num + " is in the " + d.place + " place?";
                const s = shuffle(r, [d.digit, "" + (parseInt(d.digit) - 1), "" + (parseInt(d.digit) - 2), "4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In " + d.num + ", the ten-millions digit is " + d.digit + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 3: Round beads to nearest hundred (Lesson 20 #4)
            (r) => {
                const names = ["Jill", "Keisha", "Tatiana", "Marcie"];
                const name = names[randInt(r, 0, names.length - 1)];
                const beads = randInt(r, 415, 445);
                const rounded = 400;
                const q = name + " has exactly " + beads + " beads. If she rounds the amount to the nearest hundred, how many beads does she say she has?";
                const s = shuffle(r, ["" + rounded, "500", "420", "450"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [beads + " is closer to 400 than 500, so it rounds to 400."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 4: Temperature rise from negative Celsius (Lesson 20 #5)
            (r) => {
                const morning = -randInt(r, 2, 6);
                const afternoon = randInt(r, 6, 12);
                const rise = afternoon - morning;
                const q = "The morning temperature was " + morning + "°C. By afternoon it had warmed to " + afternoon + "°C. How many degrees had the temperature risen?";
                const s = shuffle(r, [rise + "°C", (rise - 2) + "°C", (afternoon - Math.abs(morning)) + "°C", (rise + 2) + "°C"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [afternoon + " - (" + morning + ") = " + afternoon + " + " + Math.abs(morning) + " = " + rise + "°C."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 5: Basketball average points (Lesson 20 #6)
            (r) => {
                const g1 = randInt(r, 25, 35);
                const g2 = randInt(r, 45, 55);
                const targetAvg = randInt(r, 38, 44);
                const g3 = 3 * targetAvg - g1 - g2;
                const sum = g1 + g2 + g3;
                const q = "In three basketball games a player scored " + g1 + ", " + g2 + ", and " + g3 + " points. What was the average number of points scored per game?";
                const s = shuffle(r, ["" + targetAvg, "" + (targetAvg + 2), "" + (targetAvg - 2), "" + (targetAvg + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [g1 + " + " + g2 + " + " + g3 + " = " + sum + "; " + sum + " ÷ 3 = " + targetAvg + " points."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 6: GCF of two numbers (Lesson 20 #7)
            (r) => {
                const pairs = [
                    { a: 12, b: 20, gcf: 4 },
                    { a: 18, b: 24, gcf: 6 },
                    { a: 15, b: 25, gcf: 5 },
                    { a: 16, b: 24, gcf: 8 },
                    { a: 20, b: 30, gcf: 10 }
                ];
                const p = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the greatest common factor (GCF) of " + p.a + " and " + p.b + ".";
                const s = shuffle(r, ["" + p.gcf, "2", "" + (p.gcf * 2), "1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Factors of " + p.a + " and " + p.b + ". The greatest shared factor is " + p.gcf + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 7: GCF of three numbers (Lesson 20 #8)
            (r) => {
                const triads = [
                    { nums: "9, 15, and 21", gcf: 3 },
                    { nums: "12, 18, and 30", gcf: 6 },
                    { nums: "8, 16, and 24", gcf: 8 },
                    { nums: "10, 20, and 35", gcf: 5 }
                ];
                const t = triads[randInt(r, 0, triads.length - 1)];
                const q = "Find the greatest common factor of " + t.nums + ".";
                const s = shuffle(r, ["" + t.gcf, "" + (t.gcf + 1), "1", "" + (t.gcf * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The greatest common factor of " + t.nums + " is " + t.gcf + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 8: One fourth of money (Lesson 20 #9)
            (r) => {
                const cents = randInt(r, 20, 60) * 4;
                const ansCents = cents / 4;
                const totStr = (cents / 100).toFixed(2);
                const ansStr = (ansCents / 100).toFixed(2);
                const q = "How much money is 1/4 of $" + totStr + "?";
                const s = shuffle(r, ["$" + ansStr, "$" + ((ansCents + 10) / 100).toFixed(2), "$" + ((ansCents - 10) / 100).toFixed(2), "$" + ((ansCents + 20) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + totStr + " ÷ 4 = $" + ansStr + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 9: Division by 10 with remainder (Lesson 20 #10)
            (r) => {
                const n = randInt(r, 3400, 6800);
                const qVal = Math.floor(n / 10);
                const rem = n % 10;
                const correct = qVal + " R " + rem;
                const q = "Divide: " + n + " ÷ 10";
                const s = shuffle(r, [correct, (qVal + 1) + " R " + rem, qVal + " R " + ((rem + 1) % 10), (qVal - 1) + " R " + rem]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " ÷ 10 = " + qVal + " with remainder " + rem + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 10: Sum divided by single denominator (Lesson 20 #11)
            (r) => {
                const a = 28, b = 42, d = 14;
                const ans = (a + b) / d; // 70 / 14 = 5
                const q = "Evaluate: (" + a + " + " + b + ") ÷ " + d;
                const s = shuffle(r, ["" + ans, "" + (ans + 1), "" + (ans - 1), "" + (ans + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " = " + (a + b) + "; " + (a + b) + " ÷ " + d + " = " + ans + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 11: Multi-digit addition with carry (Lesson 20 #12)
            (r) => {
                const a = randInt(r, 45000, 65000);
                const b = randInt(r, 35000, 55000);
                const sum = a + b;
                const q = "Find the sum: " + a.toLocaleString() + " + " + b.toLocaleString();
                const s = shuffle(r, [sum.toLocaleString(), (sum + 100).toLocaleString(), (sum - 100).toLocaleString(), (sum + 1000).toLocaleString()]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a.toLocaleString() + " + " + b.toLocaleString() + " = " + sum.toLocaleString() + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 12: Factorial of 5 (Lesson 20 #15)
            (r) => {
                const q = "Find the product: 5 × 4 × 3 × 2 × 1";
                const s = shuffle(r, ["120", "24", "720", "60"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 × 4 × 3 × 2 × 1 = 120."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 13: Unknown minuend in subtraction (Lesson 20 #16)
            (r) => {
                const sub = randInt(r, 55, 95);
                const diff = randInt(r, 450, 650);
                const w = sub + diff;
                const q = "Find the unknown number w: w − " + sub + " = " + diff;
                const s = shuffle(r, ["" + w, "" + (w + 10), "" + (w - 10), "" + (diff - sub)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + diff + " + " + sub + " = " + w + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 14: Unknown subtrahend in large subtraction (Lesson 20 #17)
            (r) => {
                const total = 14009;
                const diff = randInt(r, 8500, 10500);
                const w = total - diff;
                const q = "Find the unknown number w: " + total + " − w = " + diff;
                const s = shuffle(r, ["" + w, "" + (w + 100), "" + (w - 100), "" + (diff + 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + diff + " = " + w + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 15: Missing first term in arithmetic sequence (Lesson 20 #21)
            (r) => {
                const diff = randInt(r, 4, 8);
                const second = randInt(r, 8, 14);
                const first = second - diff;
                const third = second + diff;
                const fourth = third + diff;
                const q = "Find the missing first number in the sequence: __, " + second + ", " + third + ", " + fourth + ", ...";
                const s = shuffle(r, ["" + first, "" + (first + 1), "" + (first - 1), "" + (second - 1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sequence adds " + diff + " each step. First term is " + second + " - " + diff + " = " + first + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 16: Compare expressions with subtraction and addition (Lesson 20 #22)
            (r) => {
                const n = randInt(r, 40, 70);
                const left = n - 1;
                const right = (n - 1) + 1; // n
                const sym = left < right ? "<" : ">";
                const q = "Compare: " + n + " − 1 ○ " + (n - 1) + " + 1";
                const s = shuffle(r, [sym, sym === "<" ? ">" : "<", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " - 1 = " + left + "; " + (n - 1) + " + 1 = " + n + ". " + left + " < " + n + ", so <."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 17: GCF of prime numbers (Lesson 20 Concept)
            (r) => {
                const pairs = [[7, 11], [5, 13], [3, 17], [11, 19]];
                const [p1, p2] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the greatest common factor of the prime numbers " + p1 + " and " + p2 + "?";
                const s = shuffle(r, ["1", "2", "" + p1, "" + (p1 * p2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distinct prime numbers share only the factor 1."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 18: GCF where one number divides the other (Lesson 20 Concept)
            (r) => {
                const a = randInt(r, 4, 9);
                const mult = randInt(r, 2, 4);
                const b = a * mult;
                const q = "What is the greatest common factor of " + a + " and " + b + "?";
                const s = shuffle(r, ["" + a, "1", "" + b, "2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " divides " + b + ", the GCF of " + a + " and " + b + " is " + a + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 19: Unknown in multiplication equation (Lesson 20 #18)
            (r) => {
                const factor = randInt(r, 5, 9);
                const ans = randInt(r, 12, 18);
                const total = factor * ans;
                const q = "Find the unknown number w: " + factor + "w = " + total;
                const s = shuffle(r, ["" + ans, "" + (ans + 1), "" + (ans - 1), "" + (ans + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " ÷ " + factor + " = " + ans + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};

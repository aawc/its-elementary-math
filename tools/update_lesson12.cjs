const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../js/generators/section2.js');
let content = fs.readFileSync(targetFile, 'utf8');

const lesson12Code = `    // Lesson 12: Place Value Through Trillions • Multistep Problems
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
    },`;

// Replace Lesson 12 in section2.js
const lesson12Regex = / {4}\/\/ Lesson 12:[\s\S]*?return pickFraming\(framings, rng, qIndex\);\s*\},/m;

if (!lesson12Regex.test(content)) {
    console.error("Could not find Lesson 12 block in section2.js");
    process.exit(1);
}

content = content.replace(lesson12Regex, lesson12Code);
fs.writeFileSync(targetFile, content, 'utf8');
console.log("Successfully updated Lesson 12 in " + targetFile);

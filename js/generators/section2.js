import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 11: Problems About Comparing • Problems About Separating
    11: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Problems About Comparing" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Problems About Comparing" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Problems About Comparing" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 11, lessonTitle: "Problems About Comparing • Problems About Separating" };
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
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "The Number Line: Negative Numbers" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "The Number Line: Negative Numbers" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "The Number Line: Negative Numbers" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 14, lessonTitle: "The Number Line: Negative Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 15: Problems About Equal Groups
    15: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Problems About Equal Groups" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Problems About Equal Groups" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Problems About Equal Groups" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 15, lessonTitle: "Problems About Equal Groups" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 16: Rounding Whole Numbers • Estimating
    16: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Rounding Whole Numbers" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Rounding Whole Numbers" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Rounding Whole Numbers" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers • Estimating" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 17: The Number Line: Fractions and Mixed Numbers
    17: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "The Number Line: Fractions and Mixed Numbers" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "The Number Line: Fractions and Mixed Numbers" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "The Number Line: Fractions and Mixed Numbers" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 17, lessonTitle: "The Number Line: Fractions and Mixed Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 18: Average • Line Graphs
    18: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Average" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Average" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Average" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 18, lessonTitle: "Average • Line Graphs" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 19: Factors • Prime Numbers
    19: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Factors" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Factors" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Factors" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 19, lessonTitle: "Factors • Prime Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 20: Greatest Common Factor (GCF)
    20: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Greatest Common Factor (GCF)" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Greatest Common Factor (GCF)" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Greatest Common Factor (GCF)" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 20, lessonTitle: "Greatest Common Factor (GCF)" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
};

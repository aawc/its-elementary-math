module.exports = `    // Lesson 33: Writing Percents as Fractions, Part 1
    33: (rng, qIndex) => {
        const framings = [
            // Category 0: Product divided by sum (Lesson 33 #1)
            (r) => {
                const pairs = [
                    [10, 15, 6],
                    [12, 24, 8],
                    [20, 5, 4],
                    [6, 12, 4],
                    [12, 60, 10]
                ];
                const [a, b, ansVal] = pairs[randInt(r, 0, pairs.length - 1)];
                const prod = a * b;
                const sum = a + b;
                const q = "When the product of " + a + " and " + b + " is divided by the sum of " + a + " and " + b + ", what is the quotient?";
                const ans = "" + ansVal;
                const d1 = "" + (ansVal + 2);
                const d2 = "" + Math.max(1, ansVal - 2);
                const d3 = "" + (ansVal + 4);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Product: " + a + " × " + b + " = " + prod + ".", "Sum: " + a + " + " + b + " = " + sum + ".", "Quotient: " + prod + " ÷ " + sum + " = " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 1: Difference between river lengths (Lesson 33 #2)
            (r) => {
                const L1 = randInt(r, 6400, 6900);
                const L2 = randInt(r, 3600, 3990);
                const diff = L1 - L2;
                const q = "The Nile River is " + L1 + " kilometers long. The Mississippi River is " + L2 + " kilometers long. How much longer is the Nile River than the Mississippi River?";
                const ans = diff + " kilometers";
                const d1 = (diff + 100) + " kilometers";
                const d2 = (diff - 100) + " kilometers";
                const d3 = (diff + 200) + " kilometers";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [L1 + " − " + L2 + " = " + diff + " kilometers."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 2: Writing billions in digits (Lesson 33 #3)
            (r) => {
                const billions = [12, 14, 15, 18, 20][randInt(r, 0, 4)];
                const words = ["twelve", "fourteen", "fifteen", "eighteen", "twenty"][[12, 14, 15, 18, 20].indexOf(billions)];
                const q = "Some astronomers think that the universe is about " + words + " billion years old. Use digits to write that number of years.";
                const ans = billions + ",000,000,000 years";
                const d1 = billions + ",000,000 years";
                const d2 = (billions * 10) + ",000,000,000 years";
                const d3 = billions + ",000,000,000,000 years";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [words + " billion is written with digits as " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 3: Expanded notation with zeros (Lesson 33 #4)
            (r) => {
                const th = randInt(r, 2, 6);
                const ten = randInt(r, 2, 7);
                const num = th * 1000 + ten * 10;
                const q = "Write " + num + " in expanded notation.";
                const ans = "(" + th + " × 1000) + (" + ten + " × 10)";
                const d1 = "(" + th + " × 100) + (" + ten + " × 10)";
                const d2 = "(" + th + " × 1000) + (" + ten + " × 1)";
                const d3 = "(" + th + " × 10,000) + (" + ten + " × 10)";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [num + " has " + th + " thousands and " + ten + " tens: " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 4: Standard notation from expanded (Lesson 33 #5)
            (r) => {
                const h = randInt(r, 3, 8);
                const ones = randInt(r, 1, 9);
                const val = h * 100 + ones;
                const q = "Write (" + h + " × 100) + (" + ones + " × 1) in standard notation.";
                const ans = "" + val;
                const d1 = "" + (h * 100 + ones * 10);
                const d2 = "" + (h * 10 + ones);
                const d3 = "" + (val + 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + h + " × 100) = " + (h * 100) + ", (" + ones + " × 1) = " + ones + ".", (h * 100) + " + " + ones + " = " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 5: Fractions equal to 1 with denominators 10 and 100 (Lesson 33 #6)
            (r) => {
                const q = "Which choice shows two fractions that are both equal to 1, one with a denominator of 10 and the other with a denominator of 100?";
                const ans = "10/10 and 100/100";
                const d1 = "1/10 and 1/100";
                const d2 = "10/100 and 100/10";
                const d3 = "10/10 and 10/100";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A fraction equals 1 when its numerator equals its denominator: 10/10 = 1 and 100/100 = 1."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 6: Multiplicative inverse / reciprocal (Lesson 33 #7)
            (r) => {
                const pairs = [
                    [3, 5, "5/3"],
                    [2, 7, "7/2"],
                    [4, 9, "9/4"],
                    [5, 8, "8/5"],
                    [3, 8, "8/3"]
                ];
                const [n, d, rec] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "By what number should " + n + "/" + d + " be multiplied for the product to be 1?";
                const ans = rec;
                const d1 = n + "/" + d;
                const d2 = (d + 1) + "/" + n;
                const d3 = "1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The product of a number and its reciprocal is 1.", "The reciprocal of " + n + "/" + d + " is " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 7: Perimeter of rectangle (Lesson 33 #8)
            (r) => {
                const L = randInt(r, 10, 16);
                const W = randInt(r, 6, 9);
                const perim = 2 * (L + W);
                const area = L * W;
                const q = "What is the perimeter of a rectangle " + L + " inches long and " + W + " inches wide?";
                const ans = perim + " in.";
                const d1 = area + " in.";
                const d2 = (perim + 4) + " in.";
                const d3 = (perim - 4) + " in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (" + L + " + " + W + ") = 2 × " + (L + W) + " = " + perim + " in."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 8: Square tiles covering rectangle (Lesson 33 #9)
            (r) => {
                const L = randInt(r, 10, 15);
                const W = randInt(r, 5, 8);
                const area = L * W;
                const perim = 2 * (L + W);
                const q = "How many square tiles with sides 1 inch long would be needed to cover a rectangle " + L + " inches long and " + W + " inches wide?";
                const ans = "" + area;
                const d1 = "" + perim;
                const d2 = "" + (area + 10);
                const d3 = "" + (area - 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = " + L + " × " + W + " = " + area + " square inches.", "So " + area + " one-inch square tiles are needed."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 9: Divisibility by both 2 and 3 (Lesson 33 #10)
            (r) => {
                const multiplesOf6 = [48, 54, 72, 84, 96];
                const ansVal = multiplesOf6[randInt(r, 0, multiplesOf6.length - 1)];
                const d1Val = ansVal + 8; // even, not div by 3
                const d2Val = ansVal + 3; // odd, div by 3, not div by 2
                const d3Val = ansVal + 7; // prime / neither
                const q = "Which of these numbers is divisible by both 2 and 3?";
                const ans = "" + ansVal;
                const s = shuffle(r, [ans, "" + d1Val, "" + d2Val, "" + d3Val]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A number divisible by both 2 and 3 must be even and the sum of its digits must be a multiple of 3.", ans + " is divisible by both 2 and 3 (divisible by 6)."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 10: Estimating difference (Lesson 33 #11)
            (r) => {
                const a = randInt(r, 4700, 5200);
                const b = randInt(r, 1900, 2300);
                const ra = Math.round(a / 1000) * 1000;
                const rb = Math.round(b / 1000) * 1000;
                const diff = ra - rb;
                const q = "Estimate the difference of " + a + " and " + b + " by rounding each number to the nearest thousand before subtracting.";
                const ans = "" + diff;
                const d1 = "" + (diff + 1000);
                const d2 = "" + (diff - 1000);
                const d3 = "" + (ra + rb);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + ra + ".", b + " rounds to " + rb + ".", ra + " − " + rb + " = " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 11: Multiplying money by 100 (Lesson 33 #12)
            (r) => {
                const d = randInt(r, 2, 7);
                const c = [20, 30, 40, 50, 60, 75][randInt(r, 0, 5)];
                const amt = (d + c / 100).toFixed(2);
                const prod = (d * 100 + c).toFixed(2);
                const q = "Simplify: $" + amt + " × 100";
                const ans = "$" + prod;
                const d1 = "$" + (d * 10 + c / 10).toFixed(2);
                const d2 = "$" + (d * 1000 + c * 10).toFixed(2);
                const d3 = "$" + amt;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiplying by 100 shifts the decimal point two places to the right: $" + amt + " × 100 = " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 12: Dividing money by integer (Lesson 33 #13)
            (r) => {
                const qVal = randInt(r, 12, 24);
                const cVal = [0, 25, 50, 75][randInt(r, 0, 3)];
                const div = [20, 25][randInt(r, 0, 1)];
                const totCents = (qVal * 100 + cVal) * div;
                const totStr = "$" + (totCents / 100).toFixed(2);
                const ansStr = "$" + ((qVal * 100 + cVal) / 100).toFixed(2);
                const q = "Simplify: " + totStr + " ÷ " + div;
                const d1 = "$" + (((qVal + 2) * 100 + cVal) / 100).toFixed(2);
                const d2 = "$" + (((qVal - 2) * 100 + cVal) / 100).toFixed(2);
                const d3 = "$" + (((qVal * 100 + cVal) * 2) / 100).toFixed(2);
                const s = shuffle(r, [ansStr, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [totStr + " ÷ " + div + " = " + ansStr + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 13: Fraction of a whole number (Lesson 33 #14)
            (r) => {
                const sets = [
                    [3, 4, 20],
                    [2, 5, 25],
                    [4, 5, 30],
                    [3, 8, 24],
                    [5, 6, 30]
                ];
                const [n, d, tot] = sets[randInt(r, 0, sets.length - 1)];
                const ansVal = (tot / d) * n;
                const q = "What is " + n + "/" + d + " of " + tot + "?";
                const ans = "" + ansVal;
                const d1 = "" + (ansVal + 3);
                const d2 = "" + (ansVal - 3);
                const d3 = "" + (tot - ansVal);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [tot + " ÷ " + d + " = " + (tot / d) + ".", (tot / d) + " × " + n + " = " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 14: Adding like fractions > 1 (Lesson 33 #15)
            (r) => {
                const sets = [
                    [4, 5, 4, 5, "1 3/5"],
                    [5, 7, 4, 7, "1 2/7"],
                    [5, 8, 7, 8, "1 1/2"],
                    [3, 4, 3, 4, "1 1/2"],
                    [7, 10, 7, 10, "1 2/5"]
                ];
                const [n1, d, n2, _, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d + " + " + n2 + "/" + d;
                const d1 = "1 " + ((n1 + n2) % d + 1) + "/" + d;
                const d2 = (n1 + n2) + "/" + (d * 2);
                const d3 = (n1 + n2) + "/" + d;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + "/" + d + " + " + n2 + "/" + d + " = " + (n1 + n2) + "/" + d + " = " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 15: Subtracting like fractions and reducing (Lesson 33 #16)
            (r) => {
                const sets = [
                    [5, 8, 1, 8, "1/2"],
                    [7, 10, 1, 10, "3/5"],
                    [5, 6, 1, 6, "2/3"],
                    [7, 12, 1, 12, "1/2"],
                    [9, 10, 3, 10, "3/5"]
                ];
                const [n1, d, n2, _, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d + " − " + n2 + "/" + d;
                const d1 = (n1 - n2) + "/" + d;
                const d2 = (n1 + n2) + "/" + d;
                const d3 = "1/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + "/" + d + " − " + n2 + "/" + d + " = " + (n1 - n2) + "/" + d + " = " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 16: Multiplying fractions with powers of 10 (Lesson 33 #17/#18)
            (r) => {
                const pairs = [
                    [3, 10, 3, 100, "9/1000"],
                    [7, 10, 3, 10, "21/100"],
                    [1, 10, 7, 100, "7/1000"],
                    [9, 10, 9, 10, "81/100"]
                ];
                const [n1, d1, n2, d2, ans] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Simplify: " + n1 + "/" + d1 + " × " + n2 + "/" + d2;
                const d1_opt = (n1 + n2) + "/" + (d1 + d2);
                const d2_opt = (n1 * n2) + "/" + (d1 + d2);
                const d3_opt = (n1 * n2 + 1) + "/" + (d1 * d2);
                const s = shuffle(r, [ans, d1_opt, d2_opt, d3_opt]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + n1 + " × " + n2 + ") / (" + d1 + " × " + d2 + ") = " + ans + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 17: Linear reciprocal equation (Lesson 33 #21)
            (r) => {
                const den = [2, 3, 4, 5, 8][randInt(r, 0, 4)];
                const q = "Find the unknown number: (1/" + den + ")w = 1";
                const ans = "" + den;
                const d1 = "1/" + den;
                const d2 = "1";
                const d3 = "" + (den + 1);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply both sides by " + den + ": w = 1 × " + den + " = " + den + "."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 18: Prime factorization of 2-digit number (Lesson 33 #22)
            (r) => {
                const list = [
                    { num: 15, factors: "3 · 5", dist: ["3 · 3", "2 · 7", "3 · 5 · 2"] },
                    { num: 21, factors: "3 · 7", dist: ["3 · 3 · 2", "2 · 11", "3 · 7 · 1"] },
                    { num: 35, factors: "5 · 7", dist: ["5 · 5", "3 · 11", "2 · 17"] },
                    { num: 14, factors: "2 · 7", dist: ["2 · 2 · 3", "3 · 5", "2 · 9"] },
                    { num: 22, factors: "2 · 11", dist: ["2 · 2 · 5", "3 · 7", "2 · 13"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.num + " as a product of prime numbers.";
                const ans = item.factors;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.num + " = " + ans + ", where each factor is a prime number."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            },
            // Category 19: Writing percent as reduced fraction (Lesson 33 #26)
            (r) => {
                const list = [
                    { pct: 70, frac: "7/10" },
                    { pct: 30, frac: "3/10" },
                    { pct: 90, frac: "9/10" },
                    { pct: 10, frac: "1/10" },
                    { pct: 85, frac: "17/20" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.pct + "% as a reduced fraction.";
                const ans = item.frac;
                const pool = ["7/10", "3/10", "9/10", "1/10", "17/20", "4/5", "1/5"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% = " + item.pct + "/100 = " + ans + " in simplest form."], lessonNum: 33, lessonTitle: "Writing Percents as Fractions, Part 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

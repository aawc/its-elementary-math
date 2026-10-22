module.exports = `    // Lesson 38: Adding and Subtracting Decimal Numbers and • Squares and Square Roots
    38: (rng, qIndex) => {
        const framings = [
            // Category 0: Greatest common factor (Lesson 38 #1)
            (r) => {
                const pairs = [
                    [54, 45, 9],
                    [36, 48, 12],
                    [24, 40, 8],
                    [42, 28, 14],
                    [30, 45, 15]
                ];
                const [a, b, ansVal] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the greatest factor of both " + a + " and " + b + "?";
                const ans = "" + ansVal;
                const d1 = "" + (ansVal + 2);
                const d2 = "" + Math.max(1, ansVal - 2);
                const d3 = "" + (ansVal * 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The greatest common factor (GCF) of " + a + " and " + b + " is " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 1: Saving money per week for bicycle (Lesson 38 #2)
            (r) => {
                const weekly = [3, 4, 5, 6][randInt(r, 0, 3)];
                const weeks = randInt(r, 20, 35);
                const cost = weekly * weeks;
                const q = "Roberto began saving $" + weekly + " each week for a bicycle that costs $" + cost + ". How many weeks will it take him to save that amount of money?";
                const ans = weeks + " weeks";
                const d1 = (weeks + 2) + " weeks";
                const d2 = (weeks - 2) + " weeks";
                const d3 = (weeks + 5) + " weeks";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide total cost by weekly savings: $" + cost + " ÷ $" + weekly + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 2: Historical lifespan years (Lesson 38 #3)
            (r) => {
                const bYear = randInt(r, 1860, 1890);
                const age = randInt(r, 65, 85);
                const dYear = bYear + age;
                const q = "A historical figure was born in " + bYear + " and passed away in " + dYear + ". About how old was this person when they passed away?";
                const ans = age + " years";
                const d1 = (age + 2) + " years";
                const d2 = (age - 2) + " years";
                const d3 = (age + 10) + " years";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dYear + " − " + bYear + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 3: Adding whole number and decimal (Lesson 38 #4)
            (r) => {
                const whole = randInt(r, 15, 35);
                const decWhole = randInt(r, 1, 5);
                const decTenths = randInt(r, 1, 9);
                const decVal = decWhole + decTenths / 10;
                const decStr = decVal.toFixed(1);
                const sum = (whole + decVal).toFixed(1);
                const q = "Simplify: " + whole + " + " + decStr;
                const ans = sum;
                const d1 = (parseFloat(sum) + 1.0).toFixed(1);
                const d2 = (parseFloat(sum) - 1.0).toFixed(1);
                const d3 = (whole + decVal * 10).toFixed(1);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Line up decimal points: " + whole + ".0 + " + decStr + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 4: Subtracting decimal from whole number (Lesson 38 #5)
            (r) => {
                const whole = randInt(r, 15, 30);
                const decWhole = randInt(r, 1, 5);
                const decTenths = randInt(r, 1, 9);
                const decVal = decWhole + decTenths / 10;
                const decStr = decVal.toFixed(1);
                const diff = (whole - decVal).toFixed(1);
                const q = "Simplify: " + whole + " − " + decStr;
                const ans = diff;
                const d1 = (parseFloat(diff) + 1.0).toFixed(1);
                const d2 = (parseFloat(diff) - 1.0).toFixed(1);
                const d3 = (whole + decVal).toFixed(1);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Write " + whole + " as " + whole + ".0 and subtract " + decStr + " to get " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 5: Decimal addition with varying lengths (Lesson 38 #7)
            (r) => {
                const a = (randInt(r, 5100, 5600) / 1000).toFixed(3);
                const b = (randInt(r, 20, 45) / 100).toFixed(2);
                const sum = (parseFloat(a) + parseFloat(b)).toFixed(3);
                const q = "Simplify: " + a + " + " + b;
                const ans = sum;
                const d1 = (parseFloat(sum) + 0.01).toFixed(3);
                const d2 = (parseFloat(sum) - 0.01).toFixed(3);
                const d3 = (parseFloat(sum) + 0.1).toFixed(3);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Line up decimal points: " + a + " + " + b + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 6: Decimal subtraction with varying lengths (Lesson 38 #8)
            (r) => {
                const a = (randInt(r, 450, 490) / 100).toFixed(2);
                const b = (randInt(r, 4, 8) / 10).toFixed(1);
                const diff = (parseFloat(a) - parseFloat(b)).toFixed(2);
                const q = "Simplify: " + a + " − " + b;
                const ans = diff;
                const d1 = (parseFloat(diff) + 0.1).toFixed(2);
                const d2 = (parseFloat(diff) - 0.1).toFixed(2);
                const d3 = (parseFloat(a) - parseFloat(b) * 10).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Line up decimal points: " + a + " − " + b + "0 = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 7: Square root of a perfect square (Lesson 38 #9)
            (r) => {
                const list = [
                    { sq: 81, rt: 9 },
                    { sq: 64, rt: 8 },
                    { sq: 100, rt: 10 },
                    { sq: 144, rt: 12 },
                    { sq: 49, rt: 7 },
                    { sq: 121, rt: 11 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: √" + item.sq;
                const ans = "" + item.rt;
                const d1 = "" + (item.rt + 1);
                const d2 = "" + (item.rt - 1);
                const d3 = "" + (item.rt + 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.rt + " × " + item.rt + " = " + item.sq + ", so √" + item.sq + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 8: Difference of two square roots (Lesson 38 #9)
            (r) => {
                const list = [
                    { s1: 100, r1: 10, s2: 49, r2: 7, ans: 3 },
                    { s1: 64, r1: 8, s2: 25, r2: 5, ans: 3 },
                    { s1: 81, r1: 9, s2: 36, r2: 6, ans: 3 },
                    { s1: 100, r1: 10, s2: 64, r2: 8, ans: 2 },
                    { s1: 144, r1: 12, s2: 81, r2: 9, ans: 3 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: √" + item.s1 + " − √" + item.s2;
                const ans = "" + item.ans;
                const d1 = "" + (item.ans + 1);
                const d2 = "" + (item.ans + 2);
                const d3 = "" + Math.max(1, item.ans - 1);
                const s = shuffle(r, [ans, d1, d2, d3 === ans ? "" + (item.ans + 3) : d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["√" + item.s1 + " = " + item.r1 + ", √" + item.s2 + " = " + item.r2 + ".", item.r1 + " − " + item.r2 + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 9: Squaring a whole number (Practice Set #i)
            (r) => {
                const n = randInt(r, 8, 14);
                const sq = n * n;
                const q = "Simplify: " + n + "²";
                const ans = "" + sq;
                const d1 = "" + (sq + n);
                const d2 = "" + (sq - n);
                const d3 = "" + (2 * n);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + "² = " + n + " × " + n + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 10: Words to decimal number (Lesson 38 #10)
            (r) => {
                const list = [
                    { words: "forty-seven hundredths", dec: "0.47", dist: ["0.047", "4.7", "47.0"] },
                    { words: "thirty-nine hundredths", dec: "0.39", dist: ["0.039", "3.9", "39.0"] },
                    { words: "fifty-three hundredths", dec: "0.53", dist: ["0.053", "5.3", "53.0"] },
                    { words: "eighty-two hundredths", dec: "0.82", dist: ["0.082", "8.2", "82.0"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.words + " as a decimal number.";
                const ans = item.dec;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 11: Expanded notation with gaps to standard form (Lesson 38 #11)
            (r) => {
                const th = randInt(r, 3, 9);
                const tens = randInt(r, 2, 7);
                const ones = randInt(r, 1, 8);
                const val = th * 1000 + tens * 10 + ones;
                const q = "Write (" + th + " × 1000) + (" + tens + " × 10) + (" + ones + " × 1) in standard notation.";
                const ans = "" + val;
                const d1 = "" + (th * 100 + tens * 10 + ones);
                const d2 = "" + (th * 1000 + tens * 100 + ones);
                const d3 = "" + (val + 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + th + " × 1000) = " + (th * 1000) + ", (" + tens + " × 10) = " + (tens * 10) + ", (" + ones + " × 1) = " + ones + ". Total = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 12: Hundredths place digit in money (Lesson 38 #12)
            (r) => {
                const d = randInt(r, 100, 250);
                const tenths = randInt(r, 1, 9);
                const hundredths = randInt(r, 1, 9);
                const amt = "$" + d + "." + tenths + hundredths;
                const q = "Which digit is in the hundredths place in " + amt + "?";
                const ans = "" + hundredths;
                const d1 = "" + tenths;
                const d2 = "" + (d % 10);
                const d3 = "" + (Math.floor(d / 10) % 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The hundredths place is the second digit to the right of the decimal point: " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 13: Side of square from area (square root) (Lesson 38 #13a)
            (r) => {
                const list = [
                    { area: 81, side: 9 },
                    { area: 64, side: 8 },
                    { area: 100, side: 10 },
                    { area: 121, side: 11 },
                    { area: 144, side: 12 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "The area of a square is " + item.area + " square inches. What is the length of each side?";
                const ans = item.side + " inches";
                const d1 = (item.side + 1) + " inches";
                const d2 = (item.side - 1) + " inches";
                const d3 = (item.area / 4) + " inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = √" + item.area + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 14: Perimeter of square from area (Lesson 38 #13b)
            (r) => {
                const list = [
                    { area: 81, side: 9, perim: 36 },
                    { area: 64, side: 8, perim: 32 },
                    { area: 100, side: 10, perim: 40 },
                    { area: 121, side: 11, perim: 44 },
                    { area: 144, side: 12, perim: 48 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "The area of a square is " + item.area + " square inches. What is the perimeter of the square?";
                const ans = item.perim + " inches";
                const d1 = (item.perim + 4) + " inches";
                const d2 = (item.perim - 4) + " inches";
                const d3 = item.area + " inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = √" + item.area + " = " + item.side + " inches.", "Perimeter = 4 × " + item.side + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 15: LCM of 3 numbers (Lesson 38 #14)
            (r) => {
                const triplets = [
                    [2, 3, 5, 30],
                    [2, 4, 6, 12],
                    [2, 3, 4, 12],
                    [3, 4, 6, 12],
                    [2, 5, 10, 10]
                ];
                const [a, b, c, lcmVal] = triplets[randInt(r, 0, triplets.length - 1)];
                const q = "What is the least common multiple (LCM) of " + a + ", " + b + ", and " + c + "?";
                const ans = "" + lcmVal;
                const d1 = "" + (a * b * c);
                const d2 = "" + (lcmVal * 2);
                const d3 = "" + (lcmVal + a);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find the smallest positive integer divisible by " + a + ", " + b + ", and " + c + ": " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 16: Subtracting mixed number from whole number (Lesson 38 #16)
            (r) => {
                const whole = randInt(r, 3, 6);
                const subW = randInt(r, 1, whole - 2);
                const dens = [3, 4, 5];
                const den = dens[randInt(r, 0, dens.length - 1)];
                const num = randInt(r, 1, den - 1);
                const remNum = den - num;
                const ansW = whole - 1 - subW;
                const ans = ansW + " " + remNum + "/" + den;
                const q = "Simplify: " + whole + " − " + subW + " " + num + "/" + den;
                const d1 = (ansW + 1) + " " + remNum + "/" + den;
                const d2 = ansW + " " + num + "/" + den;
                const d3 = (ansW - 1) + " " + remNum + "/" + den;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rename " + whole + " as " + (whole - 1) + " " + den + "/" + den + ".", (whole - 1) + " " + den + "/" + den + " − " + subW + " " + num + "/" + den + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 17: Fraction multiplication (Lesson 38 #17/#18)
            (r) => {
                const sets = [
                    [2, 5, 3, 4, "3/10"],
                    [3, 4, 4, 5, "3/5"],
                    [1, 3, 3, 8, "1/8"],
                    [2, 3, 3, 5, "2/5"]
                ];
                const [n1, d1, n2, d2, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "What is " + n1 + "/" + d1 + " of " + n2 + "/" + d2 + "?";
                const d1_opt = (n1 + n2) + "/" + (d1 + d2);
                const d2_opt = (n1 * n2) + "/" + (d1 * d2);
                const d3_opt = (n1 * n2 + 1) + "/" + (d1 * d2);
                const s = shuffle(r, [ans, d1_opt, d2_opt, d3_opt]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + "/" + d1 + " × " + n2 + "/" + d2 + " = " + ans + "."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 18: Percent to reduced fraction (Lesson 38 #22)
            (r) => {
                const list = [
                    { pct: 35, frac: "7/20" },
                    { pct: 65, frac: "13/20" },
                    { pct: 45, frac: "9/20" },
                    { pct: 85, frac: "17/20" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.pct + "% as a reduced fraction.";
                const ans = item.frac;
                const pool = ["7/20", "13/20", "9/20", "17/20", "3/10", "7/10"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% = " + item.pct + "/100 = " + ans + " in simplest form."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            },
            // Category 19: Unit cost of item (Lesson 38 #28)
            (r) => {
                const count = 10;
                const costCents = [80, 90, 120, 150, 180][randInt(r, 0, 4)];
                const costStr = "$" + (costCents / 100).toFixed(2);
                const eachCents = costCents / count;
                const eachStr = "$" + (eachCents / 100).toFixed(2);
                const q = "Peter bought " + count + " carrots for " + costStr + ". What was the cost for each carrot?";
                const ans = eachStr;
                const d1 = "$" + ((eachCents + 2) / 100).toFixed(2);
                const d2 = "$" + ((eachCents - 2) / 100).toFixed(2);
                const d3 = "$" + (costCents / 100).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [costStr + " ÷ " + count + " = " + ans + " per carrot."], lessonNum: 38, lessonTitle: "Adding and Subtracting Decimal Numbers and • Squares and Square Roots" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

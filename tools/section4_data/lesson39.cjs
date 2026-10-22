module.exports = `    // Lesson 39: Multiplying Decimal Numbers
    39: (rng, qIndex) => {
        const framings = [
            // Category 0: Mountain elevation written in digits (Lesson 39 #1)
            (r) => {
                const list = [
                    { words: "twenty-nine thousand, twenty-nine", digits: "29,029" },
                    { words: "twenty-eight thousand, two hundred fifty-one", digits: "28,251" },
                    { words: "twenty-six thousand, five hundred forty-five", digits: "26,545" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "A mountain peak rises to an elevation of " + item.words + " feet above sea level. Use digits to write that elevation.";
                const ans = item.digits + " feet";
                const d1 = item.digits.replace(",", "") + "0 feet";
                const d2 = item.digits.replace(",", ".") + " feet";
                const d3 = (parseInt(item.digits.replace(",", "")) + 100).toLocaleString() + " feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " feet is written as " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 1: Convert feet elevation to yards (Lesson 39 #2)
            (r) => {
                const ft = [24000, 27000, 30000, 33000][randInt(r, 0, 3)];
                const yds = ft / 3;
                const q = "There are 3 feet in a yard. About how many yards above sea level is a mountain peak of " + ft.toLocaleString() + " feet?";
                const ans = yds.toLocaleString() + " yards";
                const d1 = (yds + 1000).toLocaleString() + " yards";
                const d2 = (yds - 1000).toLocaleString() + " yards";
                const d3 = (ft * 3).toLocaleString() + " yards";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft.toLocaleString() + " ÷ 3 = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 2: Historical currency bits to cents (Lesson 39 #3)
            (r) => {
                const bits = [2, 4, 6][randInt(r, 0, 2)];
                const cents = (bits / 8) * 100;
                const q = "A bit is 1/8 of a dollar. How many cents is " + bits + " bits?";
                const ans = cents + "¢";
                const d1 = (cents + 15) + "¢";
                const d2 = (cents - 10) + "¢";
                const d3 = (cents + 25) + "¢";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 bit = 100¢ ÷ 8 = 12.5¢.", bits + " bits = " + bits + " × 12.5¢ = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 3: Multiplying two decimals (Lesson 39 #4)
            (r) => {
                const sets = [
                    [0.25, 0.5, "0.125"],
                    [1.5, 0.3, "0.45"],
                    [0.15, 0.3, "0.045"],
                    [1.2, 0.4, "0.48"],
                    [0.8, 0.6, "0.48"]
                ];
                const [a, b, ansVal] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + a + " × " + b;
                const ans = ansVal;
                const d1 = (parseFloat(ansVal) * 10).toString();
                const d2 = (parseFloat(ansVal) / 10).toString();
                const d3 = (parseFloat(ansVal) + 0.1).toFixed(ansVal.split(".")[1].length);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply without decimals, then place the decimal point by counting the total decimal places: " + a + " × " + b + " = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 4: Multiplying money by 10 (Lesson 39 #5)
            (r) => {
                const amt = (randInt(r, 12, 45) / 10).toFixed(2);
                const prod = (parseFloat(amt) * 10).toFixed(2);
                const q = "Simplify: $" + amt + " × 10";
                const ans = "$" + prod;
                const d1 = "$" + (parseFloat(prod) * 10).toFixed(2);
                const d2 = "$" + (parseFloat(prod) / 10).toFixed(2);
                const d3 = "$" + (parseFloat(prod) + 1).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + amt + " × 10 = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 5: Multiplying whole number by decimal (Lesson 39 #6)
            (r) => {
                const w = randInt(r, 35, 65);
                const d = [0.3, 0.4, 0.6, 0.7][randInt(r, 0, 3)];
                const prod = (w * d).toFixed(1);
                const q = "Simplify: " + w + " × " + d;
                const ans = prod;
                const d1 = (parseFloat(prod) + 1.0).toFixed(1);
                const d2 = (parseFloat(prod) - 1.0).toFixed(1);
                const d3 = (parseFloat(prod) * 10).toFixed(1);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [w + " × " + d + " = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 6: Decimal addition with square root (Lesson 39 #7)
            (r) => {
                const dec1 = 1.23;
                const sq = 16;
                const rt = 4;
                const dec2 = 0.5;
                const sum = (dec1 + rt + dec2).toFixed(2);
                const q = "Simplify: " + dec1 + " + √" + sq + " + " + dec2;
                const ans = sum;
                const d1 = (parseFloat(sum) + 1.0).toFixed(2);
                const d2 = (parseFloat(sum) - 1.0).toFixed(2);
                const d3 = (dec1 + sq + dec2).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["√" + sq + " = " + rt + ".", dec1 + " + " + rt + " + " + dec2 + " = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 7: Subtracting decimals (Lesson 39 #8)
            (r) => {
                const a = (randInt(r, 1200, 1500) / 100).toFixed(2);
                const b = (randInt(r, 45, 75) / 10).toFixed(1);
                const diff = (parseFloat(a) - parseFloat(b)).toFixed(2);
                const q = "Simplify: " + a + " − " + b;
                const ans = diff;
                const d1 = (parseFloat(diff) + 0.1).toFixed(2);
                const d2 = (parseFloat(diff) - 0.1).toFixed(2);
                const d3 = (parseFloat(a) + parseFloat(b)).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " − " + b + " = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 8: Squaring a decimal number (Lesson 39 #9)
            (r) => {
                const list = [
                    { base: 1.1, sq: "1.21" },
                    { base: 0.8, sq: "0.64" },
                    { base: 1.2, sq: "1.44" },
                    { base: 0.9, sq: "0.81" },
                    { base: 1.5, sq: "2.25" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: (" + item.base + ")²";
                const ans = item.sq;
                const d1 = (parseFloat(item.sq) * 10).toFixed(2);
                const d2 = (item.base * 2).toFixed(1);
                const d3 = (parseFloat(item.sq) + 0.1).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.base + " × " + item.base + " = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 9: Mixed number and decimal words (Lesson 39 #10)
            (r) => {
                const list = [
                    { words: "ten and three tenths", dec: "10.3", dist: ["10.03", "1.3", "10.003"] },
                    { words: "twelve and seven tenths", dec: "12.7", dist: ["12.07", "1.27", "12.007"] },
                    { words: "eight and four tenths", dec: "8.4", dist: ["8.04", "0.84", "8.004"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.words + " as a decimal number.";
                const ans = item.dec;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 10: Writing thousandths decimal in words (Lesson 39 #12)
            (r) => {
                const list = [
                    { dec: "0.123", words: "one hundred twenty-three thousandths", dist: ["one hundred twenty-three hundredths", "one hundred twenty-three tenths", "one hundred twenty-three millionths"] },
                    { dec: "0.345", words: "three hundred forty-five thousandths", dist: ["three hundred forty-five hundredths", "three hundred forty-five tenths", "three hundred forty-five millionths"] },
                    { dec: "0.207", words: "two hundred seven thousandths", dist: ["two hundred seven hundredths", "twenty-seven hundredths", "two hundred seven tenths"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Which choice correctly writes the decimal number " + item.dec + " in words?";
                const ans = item.words;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dec + " has three decimal places, which represents thousandths: " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 11: Square tile coverage from perimeter (Lesson 39 #14)
            (r) => {
                const side = [8, 10, 12, 14][randInt(r, 0, 3)];
                const perim = 4 * side;
                const area = side * side;
                const q = "The perimeter of a square is " + perim + " inches. How many square tiles with sides 1 inch long are needed to cover its area?";
                const ans = "" + area;
                const d1 = "" + perim;
                const d2 = "" + (area + 10);
                const d3 = "" + (area - 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = " + perim + " ÷ 4 = " + side + " inches.", "Area = " + side + " × " + side + " = " + ans + " square inches.", "So " + ans + " tiles are needed."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 12: LCM of 2, 3, and 6 (Lesson 39 #15)
            (r) => {
                const triplets = [
                    [2, 3, 6, 6],
                    [2, 4, 8, 8],
                    [3, 6, 9, 18],
                    [2, 5, 10, 10]
                ];
                const [a, b, c, lcmVal] = triplets[randInt(r, 0, triplets.length - 1)];
                const q = "What is the least common multiple (LCM) of " + a + ", " + b + ", and " + c + "?";
                const ans = "" + lcmVal;
                const d1 = "" + (a * b * c);
                const d2 = "" + (lcmVal * 2);
                const d3 = "" + (lcmVal + a);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of " + c + " are divisible by " + a + " and " + b + ".", "The LCM is " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 13: Convert improper fraction to reduced mixed number (Lesson 39 #16)
            (r) => {
                const list = [
                    { num: 20, den: 8, ans: "2 1/2" },
                    { num: 28, den: 8, ans: "3 1/2" },
                    { num: 15, den: 6, ans: "2 1/2" },
                    { num: 30, den: 8, ans: "3 3/4" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Convert " + item.num + "/" + item.den + " to a mixed number. Simplify the fraction part.";
                const ans = item.ans;
                const pool = ["2 1/2", "3 1/2", "2 3/4", "3 3/4", "2 4/8", "3 4/8"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.num + " ÷ " + item.den + " = " + Math.floor(item.num / item.den) + " " + (item.num % item.den) + "/" + item.den + " = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 14: Multiplying reciprocal fractions (Lesson 39 #19)
            (r) => {
                const pairs = [
                    [8, 9],
                    [7, 10],
                    [5, 6],
                    [3, 8]
                ];
                const [n, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Simplify: " + n + "/" + d + " × " + d + "/" + n;
                const ans = "1";
                const d1 = (n * n) + "/" + (d * d);
                const d2 = "0";
                const d3 = "2";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + "/" + d + " and " + d + "/" + n + " are reciprocals, so their product is " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 15: Pie slices eaten fraction remaining (Lesson 39 #20)
            (r) => {
                const list = [
                    { tot: 6, eaten: 2, leftFrac: "2/3" },
                    { tot: 8, eaten: 2, leftFrac: "3/4" },
                    { tot: 8, eaten: 4, leftFrac: "1/2" },
                    { tot: 10, eaten: 4, leftFrac: "3/5" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "A pie was cut into " + item.tot + " equal slices. " + item.eaten + " slices were eaten. What fraction of the pie was left in simplest form?";
                const ans = item.leftFrac;
                const pool = ["2/3", "3/4", "1/2", "3/5", "1/3", "1/4"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Slices left = " + item.tot + " − " + item.eaten + " = " + (item.tot - item.eaten) + ".", "Fraction left = " + (item.tot - item.eaten) + "/" + item.tot + " = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 16: Time before a given time (Lesson 39 #21)
            (r) => {
                const list = [
                    { beforeH: 2, beforeM: 30, at: "1:00 a.m.", ans: "10:30 p.m.", dist: ["11:30 p.m.", "9:30 p.m.", "10:00 p.m."] },
                    { beforeH: 1, beforeM: 30, at: "2:00 p.m.", ans: "12:30 p.m.", dist: ["1:30 p.m.", "11:30 a.m.", "12:00 p.m."] },
                    { beforeH: 3, beforeM: 30, at: "5:00 p.m.", ans: "1:30 p.m.", dist: ["2:30 p.m.", "12:30 p.m.", "1:00 p.m."] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "What time is " + item.beforeH + " 1/2 hours before " + item.at + "?";
                const ans = item.ans;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Count backward from " + item.at + " by " + item.beforeH + " hours 30 minutes to get " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 17: Average of four assignment scores (Lesson 39 #22)
            (r) => {
                const avg = randInt(r, 24, 28);
                const scores = [avg - 1, avg + 2, avg + 1, avg - 2];
                const q = "On four assignments, a student had scores of " + scores[0] + ", " + scores[1] + ", " + scores[2] + ", and " + scores[3] + ". What was the average score?";
                const ans = "" + avg;
                const d1 = "" + (avg + 2);
                const d2 = "" + (avg - 2);
                const d3 = "" + (avg + 4);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the scores: " + scores.join(" + ") + " = " + (4 * avg) + ".", "Divide by 4: " + (4 * avg) + " ÷ 4 = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 18: Matching place value digit between decimals (Lesson 39 #25)
            (r) => {
                const q = "Which digit in 3.675 has the same place value as the 4 in 14.28?";
                const ans = "3";
                const d1 = "6";
                const d2 = "7";
                const d3 = "5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In 14.28, 4 is in the ones place.", "In 3.675, 3 is in the ones place."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            },
            // Category 19: Area of rectangle with decimal dimensions (Lesson 39 #29)
            (r) => {
                const list = [
                    { L: 0.5, W: 0.3, area: "0.15" },
                    { L: 0.6, W: 0.4, area: "0.24" },
                    { L: 0.8, W: 0.2, area: "0.16" },
                    { L: 0.7, W: 0.5, area: "0.35" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Find the area of a rectangle " + item.L + " m long and " + item.W + " m wide.";
                const ans = item.area + " sq. m";
                const d1 = (parseFloat(item.area) * 10).toFixed(1) + " sq. m";
                const d2 = (2 * (item.L + item.W)).toFixed(1) + " sq. m";
                const d3 = (parseFloat(item.area) + 0.1).toFixed(2) + " sq. m";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = length × width = " + item.L + " m × " + item.W + " m = " + ans + "."], lessonNum: 39, lessonTitle: "Multiplying Decimal Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

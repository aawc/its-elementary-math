module.exports = `    // Lesson 36: Subtracting Fractions and Mixed Numbers from
    36: (rng, qIndex) => {
        const framings = [
            // Category 0: Percent playing instruments to fraction (Lesson 36 #1)
            (r) => {
                const list = [
                    { pct: 25, frac: "1/4" },
                    { pct: 50, frac: "1/2" },
                    { pct: 75, frac: "3/4" },
                    { pct: 20, frac: "1/5" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = item.pct + " percent of the students played musical instruments. What fraction of the students played musical instruments in simplest form?";
                const ans = item.frac;
                const pool = ["1/4", "1/2", "3/4", "1/5", "2/5", "3/5"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% = " + item.pct + "/100 = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 1: Earth surface covered vs not covered with water (Lesson 36 #2)
            (r) => {
                const list = [
                    { cov: "7/10", notCov: "3/10", num: 7, den: 10 },
                    { cov: "3/4", notCov: "1/4", num: 3, den: 4 },
                    { cov: "4/5", notCov: "1/5", num: 4, den: 5 },
                    { cov: "2/3", notCov: "1/3", num: 2, den: 3 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "About " + item.cov + " of the Earth's surface is covered with water. What fraction of Earth's surface is not covered with water?";
                const ans = item.notCov;
                const d1 = item.cov;
                const d2 = "1/" + item.den;
                const d3 = (item.den - 1) + "/" + item.den;
                const s = shuffle(r, [ans, d1, d2 === ans ? "2/" + item.den : d2, d3 === ans ? "1/2" : d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract from 1: 1 − " + item.cov + " = " + item.den + "/" + item.den + " − " + item.cov + " = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 2: Yards in a mile conversion (Lesson 36 #3)
            (r) => {
                const q = "A mile is 5280 feet. There are 3 feet in a yard. How many yards are in a mile?";
                const ans = "1760 yards";
                const d1 = "1650 yards";
                const d2 = "1820 yards";
                const d3 = "1580 yards";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5280 feet ÷ 3 feet per yard = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 3: Place value matching (Lesson 36 #4)
            (r) => {
                const q = "Which digit in 23.47 has the same place value as the 6 in 516.9?";
                const ans = "3";
                const d1 = "2";
                const d2 = "4";
                const d3 = "7";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In 516.9, 6 is in the ones place.", "In 23.47, 3 is in the ones place."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 4: Writing decimal with words (Lesson 36 #5)
            (r) => {
                const list = [
                    { num: "1.3", words: "one and three tenths", dist: ["one point three tenths", "thirteen tenths", "one and three hundredths"] },
                    { num: "2.7", words: "two and seven tenths", dist: ["twenty-seven tenths", "two point seven tenths", "two and seven hundredths"] },
                    { num: "4.9", words: "four and nine tenths", dist: ["four point nine tenths", "forty-nine tenths", "four and nine hundredths"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.num + " with words.";
                const ans = item.words;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.num + " has whole number " + item.num[0] + " and tenths digit " + item.num[2] + ": " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 5: Decimal number from words (Lesson 36 #6)
            (r) => {
                const list = [
                    { words: "five hundredths", dec: "0.05", dist: ["0.5", "0.005", "5.00"] },
                    { words: "seven hundredths", dec: "0.07", dist: ["0.7", "0.007", "7.00"] },
                    { words: "three hundredths", dec: "0.03", dist: ["0.3", "0.003", "3.00"] },
                    { words: "nine hundredths", dec: "0.09", dist: ["0.9", "0.009", "9.00"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write the decimal number " + item.words + ".";
                const ans = item.dec;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 6: Hundredths as fraction and decimal (Lesson 36 #7)
            (r) => {
                const num = [31, 47, 53, 67, 79][randInt(r, 0, 4)];
                const words = { 31: "thirty-one", 47: "forty-seven", 53: "fifty-three", 67: "sixty-seven", 79: "seventy-nine" }[num];
                const q = "Write " + words + " hundredths as a fraction and as a decimal number. Which choice correctly lists both?";
                const ans = num + "/100, 0." + num;
                const d1 = num + "/10, 0." + num;
                const d2 = num + "/100, 0.0" + num;
                const d3 = "1/" + num + ", 0." + num;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [words + " hundredths = " + num + "/100 = 0." + num + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 7: Place value tenths digit (Lesson 36 #9)
            (r) => {
                const q = "Which digit in 4.375 is in the tenths place?";
                const ans = "3";
                const d1 = "4";
                const d2 = "7";
                const d3 = "5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The tenths place is the first digit to the right of the decimal point: 3."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 8: Side of square from area (Lesson 36 #10a)
            (r) => {
                const list = [
                    { area: 9, side: 3 },
                    { area: 16, side: 4 },
                    { area: 25, side: 5 },
                    { area: 36, side: 6 },
                    { area: 49, side: 7 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "If the area of a square is " + item.area + " square inches, how long is each side of the square?";
                const ans = item.side + " inches";
                const d1 = (item.side + 1) + " inches";
                const d2 = (item.side - 1) + " inches";
                const d3 = (item.area / 2) + " inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side × side = " + item.area + " sq. in.", "√" + item.area + " = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 9: Perimeter of square from area (Lesson 36 #10b)
            (r) => {
                const list = [
                    { area: 9, side: 3, perim: 12 },
                    { area: 16, side: 4, perim: 16 },
                    { area: 25, side: 5, perim: 20 },
                    { area: 36, side: 6, perim: 24 },
                    { area: 49, side: 7, perim: 28 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "If the area of a square is " + item.area + " square inches, what is the perimeter of the square?";
                const ans = item.perim + " inches";
                const d1 = (item.perim + 4) + " inches";
                const d2 = (item.perim - 4) + " inches";
                const d3 = item.area + " inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = √" + item.area + " = " + item.side + " inches.", "Perimeter = 4 × " + item.side + " = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 10: Adding mixed numbers with like denominators (Lesson 36 #12)
            (r) => {
                const sets = [
                    [3, 1, 4, 2, 2, 4, "5 3/4"],
                    [2, 1, 3, 3, 1, 3, "5 2/3"],
                    [4, 2, 5, 1, 1, 5, "5 3/5"],
                    [1, 3, 8, 2, 2, 8, "3 5/8"]
                ];
                const [w1, n1, d, w2, n2, _, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + w1 + " " + n1 + "/" + d + " + " + w2 + " " + n2 + "/" + d;
                const d1 = (w1 + w2 + 1) + " " + (n1 + n2) + "/" + d;
                const d2 = (w1 + w2) + " " + (n1 + n2 + 1) + "/" + d;
                const d3 = (w1 + w2 - 1) + " " + (n1 + n2) + "/" + d;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add whole numbers: " + w1 + " + " + w2 + " = " + (w1 + w2) + ".", "Add fractions: " + n1 + "/" + d + " + " + n2 + "/" + d + " = " + (n1 + n2) + "/" + d + ".", "Combined: " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 11: Core Lesson Topic: Subtract fraction from whole number (Lesson 36 #13)
            (r) => {
                const whole = randInt(r, 2, 5);
                const dens = [3, 4, 5, 8];
                const den = dens[randInt(r, 0, dens.length - 1)];
                const num = randInt(r, 1, den - 1);
                const remNum = den - num;
                const ansWhole = whole - 1;
                const ans = (ansWhole > 0 ? ansWhole + " " : "") + remNum + "/" + den;
                const q = "Simplify: " + whole + " − " + num + "/" + den;
                const d1 = whole + " " + remNum + "/" + den;
                const d2 = (ansWhole > 0 ? ansWhole + " " : "") + num + "/" + den;
                const d3 = (ansWhole + 1) + " " + num + "/" + den;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rename " + whole + " as " + ansWhole + " " + den + "/" + den + ".", ansWhole + " " + den + "/" + den + " − " + num + "/" + den + " = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 12: Core Lesson Topic: Subtract mixed number from whole number (Lesson 36 #13)
            (r) => {
                const whole = randInt(r, 4, 7);
                const subWhole = randInt(r, 1, whole - 2);
                const dens = [3, 4, 5, 8];
                const den = dens[randInt(r, 0, dens.length - 1)];
                const num = randInt(r, 1, den - 1);
                const remNum = den - num;
                const ansWhole = whole - 1 - subWhole;
                const ans = ansWhole + " " + remNum + "/" + den;
                const q = "Simplify: " + whole + " − " + subWhole + " " + num + "/" + den;
                const d1 = (ansWhole + 1) + " " + remNum + "/" + den;
                const d2 = ansWhole + " " + num + "/" + den;
                const d3 = (ansWhole - 1) + " " + remNum + "/" + den;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rename " + whole + " as " + (whole - 1) + " " + den + "/" + den + ".", (whole - 1) + " " + den + "/" + den + " − " + subWhole + " " + num + "/" + den + " = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 13: Multiplying fractions (Lesson 36 #16)
            (r) => {
                const sets = [
                    [3, 4, 4, 6, "1/2"],
                    [2, 3, 3, 4, "1/2"],
                    [3, 5, 5, 9, "1/3"],
                    [2, 5, 5, 8, "1/4"]
                ];
                const [n1, d1, n2, d2, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d1 + " × " + n2 + "/" + d2;
                const d1_opt = (n1 + n2) + "/" + (d1 + d2);
                const d2_opt = (n1 * n2) + "/" + (d1 * d2);
                const d3_opt = (n1 * n2 + 1) + "/" + (d1 * d2);
                const s = shuffle(r, [ans, d1_opt, d2_opt, d3_opt]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerators and denominators: (" + n1 + " × " + n2 + ") / (" + d1 + " × " + d2 + ") = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 14: Spending fraction of money in store (Lesson 36 #17)
            (r) => {
                const tot = [24, 30, 36, 42][randInt(r, 0, 3)];
                const n = 5;
                const d = 6;
                const ansVal = (tot / d) * n;
                const q = "Chen went to the mall with $" + tot + ". He spent " + n + "/" + d + " of his money in the music store. How much money did he spend in the music store?";
                const ans = "$" + ansVal;
                const d1 = "$" + (tot / d);
                const d2 = "$" + (ansVal + 5);
                const d3 = "$" + (ansVal - 5);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + d + " of $" + tot + " = $" + (tot / d) + ".", n + "/" + d + " of $" + tot + " = " + n + " × $" + (tot / d) + " = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 15: Average of three numbers (Lesson 36 #18)
            (r) => {
                const avg = randInt(r, 45, 65);
                const d1 = randInt(r, 6, 15);
                const d2 = randInt(r, 6, 15);
                const a = avg - d1;
                const b = avg + d2;
                const c = 3 * avg - a - b;
                const q = "What is the average of " + a + ", " + b + ", and " + c + "?";
                const ans = "" + avg;
                const d_1 = "" + (avg + 3);
                const d_2 = "" + (avg - 3);
                const d_3 = "" + (avg + 6);
                const s = shuffle(r, [ans, d_1, d_2, d_3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the numbers: " + a + " + " + b + " + " + c + " = " + (3 * avg) + ".", "Divide by 3: " + (3 * avg) + " ÷ 3 = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 16: List factors of a number (Lesson 36 #19)
            (r) => {
                const list = [
                    { num: 20, factors: "1, 2, 4, 5, 10, 20", dist: ["1, 2, 4, 10, 20", "1, 2, 5, 10, 20", "2, 4, 5, 10, 20"] },
                    { num: 18, factors: "1, 2, 3, 6, 9, 18", dist: ["1, 2, 3, 6, 18", "1, 3, 6, 9, 18", "2, 3, 6, 9, 18"] },
                    { num: 24, factors: "1, 2, 3, 4, 6, 8, 12, 24", dist: ["1, 2, 3, 4, 6, 12, 24", "1, 2, 4, 6, 8, 12, 24", "2, 3, 4, 6, 8, 12, 24"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Which choice lists all the factors of " + item.num + "?";
                const ans = item.factors;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find all numbers that divide evenly into " + item.num + ": " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 17: Least common multiple of two numbers (Lesson 36 #20a)
            (r) => {
                const pairs = [
                    [9, 6, 18],
                    [8, 6, 24],
                    [10, 4, 20],
                    [12, 8, 24]
                ];
                const [a, b, ansVal] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the least common multiple (LCM) of " + a + " and " + b + "?";
                const ans = "" + ansVal;
                const d1 = "" + (a * b);
                const d2 = "" + (ansVal / 2);
                const d3 = "" + (ansVal + a);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of " + a + ": " + a + ", " + (2 * a) + ", ...", "Multiples of " + b + ": " + b + ", " + (2 * b) + ", ...", "LCM = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 18: Greatest common factor of two numbers (Lesson 36 #20b)
            (r) => {
                const pairs = [
                    [9, 6, 3],
                    [12, 8, 4],
                    [15, 10, 5],
                    [18, 12, 6],
                    [20, 16, 4]
                ];
                const [a, b, ansVal] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the greatest common factor (GCF) of " + a + " and " + b + "?";
                const ans = "" + ansVal;
                const d1 = "" + (ansVal * 2);
                const d2 = "1";
                const d3 = "" + (ansVal + 1);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Factors of " + a + " and " + b + " have greatest common element " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            },
            // Category 19: Multiplying decimal by decimal via fractions (Lesson 36 #27)
            (r) => {
                const list = [
                    { a: "0.9", b: "0.09", ans: "0.081", frac: "81/1000" },
                    { a: "0.8", b: "0.08", ans: "0.064", frac: "64/1000" },
                    { a: "0.7", b: "0.07", ans: "0.049", frac: "49/1000" },
                    { a: "0.6", b: "0.06", ans: "0.036", frac: "36/1000" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.a + " and " + item.b + " as fractions, then multiply. What is the product as a decimal number?";
                const ans = item.ans;
                const d1 = (parseFloat(item.ans) * 10).toFixed(2);
                const d2 = (parseFloat(item.ans) / 10).toFixed(4);
                const d3 = "0." + (parseInt(item.ans.replace("0.0", "")) * 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " = " + item.a.replace("0.", "") + "/10, " + item.b + " = " + item.b.replace("0.0", "") + "/100.", "Product = " + item.frac + " = " + ans + "."], lessonNum: 36, lessonTitle: "Subtracting Fractions and Mixed Numbers from" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

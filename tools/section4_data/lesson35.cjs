module.exports = `    // Lesson 35: Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers
    35: (rng, qIndex) => {
        const framings = [
            // Category 0: Product of two fractions in words (Lesson 35 #1)
            (r) => {
                const list = [
                    { w1: "three fourths", w2: "three fifths", ans: "9/20", num: 9, den: 20 },
                    { w1: "two thirds", w2: "four fifths", ans: "8/15", num: 8, den: 15 },
                    { w1: "one half", w2: "three fifths", ans: "3/10", num: 3, den: 10 },
                    { w1: "three eighths", w2: "one half", ans: "3/16", num: 3, den: 16 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "What is the product of " + item.w1 + " and " + item.w2 + "?";
                const ans = item.ans;
                const d1 = (item.num + 1) + "/" + item.den;
                const d2 = item.num + "/" + (item.den + 2);
                const d3 = (item.num - 1) + "/" + item.den;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply the fractions: " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 1: Sprouted seeds fraction problem (Lesson 35 #2)
            (r) => {
                const total = [240, 360, 480, 500][randInt(r, 0, 3)];
                const ansVal = (total / 4) * 3;
                const q = "A gardener planted " + total + " carrot seeds. Three fourths of them sprouted. How many carrot seeds sprouted?";
                const ans = "" + ansVal;
                const d1 = "" + (total / 4);
                const d2 = "" + (ansVal + 20);
                const d3 = "" + (ansVal - 20);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 of " + total + " = " + (total / 4) + ".", "3/4 of " + total + " = 3 × " + (total / 4) + " = " + ans + " sprouted seeds."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 2: Baking time elapsed time (Lesson 35 #3)
            (r) => {
                const startH = 11;
                const startM = [30, 45][randInt(r, 0, 1)];
                const bakeH = 2;
                const bakeM = 15;
                const totM = startM + bakeM;
                const extraH = Math.floor(totM / 60);
                const remM = totM % 60;
                const totalH = startH + bakeH + extraH;
                const endH = totalH > 12 ? totalH - 12 : totalH;
                const remMStr = remM < 10 ? "0" + remM : "" + remM;
                const q = "A casserole must bake for " + bakeH + " hours " + bakeM + " minutes. If it was placed in the oven at " + startH + ":" + startM + " a.m., at what time will it be done?";
                const ans = endH + ":" + remMStr + " p.m.";
                const d1 = (endH + 1) + ":" + remMStr + " p.m.";
                const d2 = (endH - 1) + ":" + remMStr + " p.m.";
                const d3 = endH + ":" + ((remM + 30) % 60 < 10 ? "0" + ((remM + 30) % 60) : ((remM + 30) % 60)) + " p.m.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add " + bakeH + " hours to " + startH + ":" + startM + " a.m. to get " + (startH + bakeH) + ":" + startM + " p.m.", "Add " + bakeM + " minutes to get " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 3: Hundredths words to decimal (Lesson 35 #4)
            (r) => {
                const list = [
                    { word: "twenty-three hundredths", dec: "0.23", dist: ["0.023", "2.3", "23.0"] },
                    { word: "forty-seven hundredths", dec: "0.47", dist: ["0.047", "4.7", "47.0"] },
                    { word: "sixty-one hundredths", dec: "0.61", dist: ["0.061", "6.1", "61.0"] },
                    { word: "eighty-nine hundredths", dec: "0.89", dist: ["0.089", "8.9", "89.0"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.word + " as a decimal number.";
                const ans = item.dec;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.word + " = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 4: Decimal number written with words (Lesson 35 #5)
            (r) => {
                const list = [
                    { num: "10.01", text: "ten and one hundredth", dist: ["ten and one tenth", "ten point one", "ten and one thousandth"] },
                    { num: "12.05", text: "twelve and five hundredths", dist: ["twelve and five tenths", "twelve and five thousandths", "twelve point five"] },
                    { num: "8.03", text: "eight and three hundredths", dist: ["eight and three tenths", "eight and three thousandths", "eight point three"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Which choice correctly writes " + item.num + " with words?";
                const ans = item.text;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.num + " has whole part and hundredths: " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 5: Mixed decimal written from words (Lesson 35 #6)
            (r) => {
                const list = [
                    { word: "ten and five tenths", dec: "10.5", dist: ["10.05", "10.005", "1.5"] },
                    { word: "six and two tenths", dec: "6.2", dist: ["6.02", "6.002", "0.62"] },
                    { word: "fourteen and eight tenths", dec: "14.8", dist: ["14.08", "14.008", "1.48"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.word + " as a decimal number.";
                const ans = item.dec;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.word + " = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 6: Percent to reduced fraction (Lesson 35 #7)
            (r) => {
                const list = [
                    { pct: 25, frac: "1/4" },
                    { pct: 75, frac: "3/4" },
                    { pct: 50, frac: "1/2" },
                    { pct: 20, frac: "1/5" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.pct + "% as a reduced fraction.";
                const ans = item.frac;
                const pool = ["1/4", "3/4", "1/2", "1/5", "2/5", "3/5"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% = " + item.pct + "/100 = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 7: Standard notation from expanded (Lesson 35 #8)
            (r) => {
                const th = randInt(r, 3, 7);
                const h = randInt(r, 2, 8);
                const tens = randInt(r, 2, 6);
                const val = th * 1000 + h * 100 + tens * 10;
                const q = "Write (" + th + " × 1000) + (" + h + " × 100) + (" + tens + " × 10) in standard notation.";
                const ans = "" + val;
                const d1 = "" + (th * 1000 + h * 10 + tens);
                const d2 = "" + (th * 10000 + h * 100 + tens * 10);
                const d3 = "" + (val + 5);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + th + " × 1000) = " + (th * 1000) + ", (" + h + " × 100) = " + (h * 100) + ", (" + tens + " × 10) = " + (tens * 10) + ". Total = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 8: Place value comparison between decimals (Lesson 35 #9)
            (r) => {
                const q = "Which digit in 1.23 has the same place value as the 5 in 0.456?";
                const ans = "3";
                const d1 = "2";
                const d2 = "1";
                const d3 = "0";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In 0.456, 5 is in the hundredths place.", "In 1.23, 3 is in the hundredths place."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 9: Area of rectangle in millimeters (Lesson 35 #10)
            (r) => {
                const L = [20, 25, 30][randInt(r, 0, 2)];
                const W = [10, 12, 15][randInt(r, 0, 2)];
                const area = L * W;
                const perim = 2 * (L + W);
                const q = "What is the area of a rectangle " + L + " mm long and " + W + " mm wide?";
                const ans = area + " sq. mm";
                const d1 = perim + " sq. mm";
                const d2 = (area + 50) + " sq. mm";
                const d3 = (area - 50) + " sq. mm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = length × width = " + L + " mm × " + W + " mm = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 10: Perimeter of rectangle in millimeters (Lesson 35 #11)
            (r) => {
                const L = [20, 25, 30][randInt(r, 0, 2)];
                const W = [10, 12, 15][randInt(r, 0, 2)];
                const perim = 2 * (L + W);
                const area = L * W;
                const q = "What is the perimeter of a rectangle " + L + " mm long and " + W + " mm wide?";
                const ans = perim + " mm";
                const d1 = area + " mm";
                const d2 = (perim + 10) + " mm";
                const d3 = (perim - 10) + " mm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (" + L + " + " + W + ") = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 11: Metric conversion meters to centimeters (Lesson 35 #12)
            (r) => {
                const m = [8, 10, 12, 15, 20][randInt(r, 0, 4)];
                const cm = m * 100;
                const q = "There are 100 centimeters in a meter. How many centimeters are in " + m + " meters?";
                const ans = cm + " cm";
                const d1 = (m * 10) + " cm";
                const d2 = (m * 1000) + " cm";
                const d3 = (cm + 100) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [m + " × 100 = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 12: Ordering decimals and negative numbers (Lesson 35 #13)
            (r) => {
                const q = "Arrange these numbers in order from least to greatest: 0.001, 0.1, 1.0, 0.01, 0, −1";
                const ans = "−1, 0, 0.001, 0.01, 0.1, 1.0";
                const d1 = "0, −1, 0.001, 0.01, 0.1, 1.0";
                const d2 = "−1, 0, 0.01, 0.001, 0.1, 1.0";
                const d3 = "1.0, 0.1, 0.01, 0.001, 0, −1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Negative numbers are less than 0.", "Comparing decimals: 0.001 < 0.01 < 0.1 < 1.0.", "Order: " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 13: Adding mixed numbers with like denominators (Lesson 35 #15)
            (r) => {
                const sets = [
                    [3, 2, 5, 2, 2, 5, "5 4/5"],
                    [2, 1, 4, 3, 2, 4, "5 3/4"],
                    [1, 2, 7, 4, 3, 7, "5 5/7"]
                ];
                const [w1, n1, d, w2, n2, _, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + w1 + " " + n1 + "/" + d + " + " + w2 + " " + n2 + "/" + d;
                const d1 = (w1 + w2 + 1) + " " + (n1 + n2) + "/" + d;
                const d2 = (w1 + w2) + " " + (n1 + n2 + 1) + "/" + d;
                const d3 = (w1 + w2 - 1) + " " + (n1 + n2) + "/" + d;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add whole numbers: " + w1 + " + " + w2 + " = " + (w1 + w2) + ".", "Add fractions: " + n1 + "/" + d + " + " + n2 + "/" + d + " = " + (n1 + n2) + "/" + d + ".", "Combined: " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 14: How many [a/b]s in 1? (Lesson 35 #18a)
            (r) => {
                const list = [
                    { n: 2, d: 5, ans: "2 1/2" },
                    { n: 3, d: 4, ans: "1 1/3" },
                    { n: 2, d: 3, ans: "1 1/2" },
                    { n: 3, d: 5, ans: "1 2/3" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "How many " + item.n + "/" + item.d + "s are in 1?";
                const ans = item.ans;
                const pool = ["2 1/2", "1 1/3", "1 1/2", "1 2/3", "2 1/4"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The number of " + item.n + "/" + item.d + "s in 1 is the reciprocal: " + item.d + "/" + item.n + " = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 15: How many [a/b]s in W? (Lesson 35 #18b)
            (r) => {
                const list = [
                    { n: 2, d: 5, w: 2, ans: "5" },
                    { n: 1, d: 4, w: 3, ans: "12" },
                    { n: 2, d: 3, w: 4, ans: "6" },
                    { n: 3, d: 4, w: 6, ans: "8" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "How many " + item.n + "/" + item.d + "s are in " + item.w + "?";
                const ans = item.ans;
                const numAns = parseInt(ans);
                const d1 = "" + (numAns + 2);
                const d2 = "" + (numAns - 2);
                const d3 = "" + (numAns + 4);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.w + " ÷ (" + item.n + "/" + item.d + ") = " + item.w + " × (" + item.d + "/" + item.n + ") = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 16: Convert improper fraction to mixed number (Lesson 35 #19)
            (r) => {
                const list = [
                    { num: 20, den: 6, ans: "3 1/3" },
                    { num: 18, den: 4, ans: "4 1/2" },
                    { num: 22, den: 6, ans: "3 2/3" },
                    { num: 26, den: 8, ans: "3 1/4" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Convert " + item.num + "/" + item.den + " to a mixed number in simplest form.";
                const ans = item.ans;
                const pool = ["3 1/3", "4 1/2", "3 2/3", "3 1/4", "3 2/6", "4 2/4"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.num + " ÷ " + item.den + " = " + Math.floor(item.num / item.den) + " with remainder " + (item.num % item.den) + ".", "Reduce fraction part to get " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 17: Fraction of circle to percent (Lesson 35 #23)
            (r) => {
                const q = "One sixth of a circle is what percent of a circle?";
                const ans = "16 2/3%";
                const d1 = "16%";
                const d2 = "33 1/3%";
                const d3 = "12 1/2%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["100% ÷ 6 = 16 4/6% = 16 2/3%."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 18: Multiplying decimals via fractions (Lesson 35 #27)
            (r) => {
                const list = [
                    { a: "0.3", b: "0.7", ans: "0.21", frac: "21/100" },
                    { a: "0.4", b: "0.6", ans: "0.24", frac: "24/100" },
                    { a: "0.2", b: "0.8", ans: "0.16", frac: "16/100" },
                    { a: "0.5", b: "0.7", ans: "0.35", frac: "35/100" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.a + " and " + item.b + " as fractions, then multiply. What is the product as a decimal number?";
                const ans = item.ans;
                const d1 = (parseFloat(item.ans) * 10).toFixed(1);
                const d2 = (parseFloat(item.ans) / 10).toFixed(3);
                const d3 = (parseFloat(item.ans) + 0.1).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " × " + item.b + " = " + item.frac + " = " + ans + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            },
            // Category 19: Percent to fraction and decimal (Lesson 35 #28)
            (r) => {
                const p = [21, 31, 41, 51, 63][randInt(r, 0, 4)];
                const q = "Write " + p + "% as a fraction and as a decimal number. Which choice correctly lists both?";
                const ans = p + "/100, 0." + p;
                const d1 = p + "/10, 0." + p;
                const d2 = p + "/100, " + (p / 10).toFixed(1);
                const d3 = "1/" + p + ", 0.0" + p;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [p + "% means " + p + " hundredths, so as a fraction it is " + p + "/100 and as a decimal it is 0." + p + "."], lessonNum: 35, lessonTitle: "Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

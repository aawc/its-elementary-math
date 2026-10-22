module.exports = `    // Lesson 37: Adding and Subtracting Decimal Numbers
    37: (rng, qIndex) => {
        const framings = [
            // Category 0: Percent of class girls to fraction (Lesson 37 #1)
            (r) => {
                const list = [
                    { pct: 60, frac: "3/5" },
                    { pct: 40, frac: "2/5" },
                    { pct: 80, frac: "4/5" },
                    { pct: 70, frac: "7/10" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = item.pct + " percent of the students in the class were girls. What fraction of the students in the class were girls in simplest form?";
                const ans = item.frac;
                const pool = ["3/5", "2/5", "4/5", "7/10", "1/2", "3/10"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% = " + item.pct + "/100 = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 1: Broken pencils two-step problem (Lesson 37 #2)
            (r) => {
                const p1 = [6, 8, 10, 12][randInt(r, 0, 3)];
                const p2 = p1 / 2;
                const tot = p1 + p2;
                const q = "Penny broke " + p1 + " pencils during the math test. She broke half as many during the spelling test. How many pencils did she break in all?";
                const ans = "" + tot;
                const d1 = "" + (p1 + p1);
                const d2 = "" + p2;
                const d3 = "" + (tot + 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Spelling test: " + p1 + " ÷ 2 = " + p2 + ".", "Total: " + p1 + " + " + p2 + " = " + ans + " pencils."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 2: Number added to N to get 1000 (Lesson 37 #3)
            (r) => {
                const n = [375, 425, 480, 520, 640][randInt(r, 0, 4)];
                const diff = 1000 - n;
                const words = { 375: "three hundred seventy-five", 425: "four hundred twenty-five", 480: "four hundred eighty", 520: "five hundred twenty", 640: "six hundred forty" }[n];
                const q = "What number must be added to " + words + " to get the number one thousand?";
                const ans = "" + diff;
                const d1 = "" + (diff + 10);
                const d2 = "" + (diff - 10);
                const d3 = "" + (diff + 100);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1000 − " + n + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 3: Adding 3 decimals with varying decimal places (Lesson 37 #4)
            (r) => {
                const a = (randInt(r, 20, 45) / 10).toFixed(1);
                const b = (randInt(r, 40, 85) / 100).toFixed(2);
                const c = (randInt(r, 2, 8) / 10).toFixed(1);
                const sum = (parseFloat(a) + parseFloat(b) + parseFloat(c)).toFixed(2);
                const q = "Simplify: " + a + " + " + b + " + " + c;
                const ans = sum;
                const d1 = (parseFloat(sum) + 0.1).toFixed(2);
                const d2 = (parseFloat(sum) - 0.1).toFixed(2);
                const d3 = (parseFloat(sum) + 1.0).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Line up decimal points: " + a + " + " + b + " + " + c + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 4: Subtracting decimals (Lesson 37 #5)
            (r) => {
                const a = (randInt(r, 45, 85) / 10).toFixed(1);
                const b = (randInt(r, 12, 35) / 10).toFixed(1);
                const diff = (parseFloat(a) - parseFloat(b)).toFixed(1);
                const q = "Simplify: " + a + " − " + b;
                const ans = diff;
                const d1 = (parseFloat(diff) + 0.2).toFixed(1);
                const d2 = (parseFloat(diff) - 0.2).toFixed(1);
                const d3 = (parseFloat(a) + parseFloat(b)).toFixed(1);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Line up decimal points and subtract: " + a + " − " + b + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 5: Adding 3 money amounts (Lesson 37 #6)
            (r) => {
                const c1 = randInt(r, 20, 45);
                const c2 = randInt(r, 15, 35);
                const c3 = randInt(r, 30, 55);
                const totCents = c1 + c2 + c3;
                const q = "Simplify: $" + (c1 / 100).toFixed(2) + " + $" + (c2 / 100).toFixed(2) + " + $" + (c3 / 100).toFixed(2);
                const ans = "$" + (totCents / 100).toFixed(2);
                const d1 = "$" + ((totCents + 10) / 100).toFixed(2);
                const d2 = "$" + ((totCents - 10) / 100).toFixed(2);
                const d3 = "$" + ((totCents + 20) / 100).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the amounts: $" + (c1 / 100).toFixed(2) + " + $" + (c2 / 100).toFixed(2) + " + $" + (c3 / 100).toFixed(2) + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 6: Missing money amount from whole dollar (Lesson 37 #7)
            (r) => {
                const bill = [5, 10, 20][randInt(r, 0, 2)];
                const cents = [5, 15, 25, 35, 50][randInt(r, 0, 4)];
                const diffCents = bill * 100 - cents;
                const ansStr = "$" + (diffCents / 100).toFixed(2);
                const q = "Find the unknown number m: $" + bill + " − m = " + cents + "¢";
                const ans = ansStr;
                const d1 = "$" + ((diffCents - 100) / 100).toFixed(2);
                const d2 = "$" + ((diffCents + 10) / 100).toFixed(2);
                const d3 = "$" + ((diffCents - 10) / 100).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = $" + bill + ".00 − $" + (cents / 100).toFixed(2) + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 7: Geometric sequence powers of 10 (Lesson 37 #8)
            (r) => {
                const q = "What is the next number in this sequence: 1, 10, 100, 1000, ...?";
                const ans = "10,000";
                const d1 = "2000";
                const d2 = "100,000";
                const d3 = "1001";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each term is multiplied by 10.", "1000 × 10 = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 8: Side of square room from tile count (Lesson 37 #9a)
            (r) => {
                const side = [8, 9, 10, 12][randInt(r, 0, 3)];
                const tiles = side * side;
                const q = "A worker used " + tiles + " square floor tiles with sides 1 foot long to cover the floor of a square room. What was the length of each side of the room?";
                const ans = side + " feet";
                const d1 = (side + 2) + " feet";
                const d2 = (side - 2) + " feet";
                const d3 = (tiles / 4) + " feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["√" + tiles + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 9: Perimeter of square room from tile count (Lesson 37 #9b)
            (r) => {
                const side = [8, 9, 10, 12][randInt(r, 0, 3)];
                const tiles = side * side;
                const perim = 4 * side;
                const q = "A square room was covered by " + tiles + " one-foot square floor tiles. What was the perimeter of the room?";
                const ans = perim + " feet";
                const d1 = (perim + 8) + " feet";
                const d2 = (perim - 8) + " feet";
                const d3 = tiles + " feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = √" + tiles + " = " + side + " feet.", "Perimeter = 4 × " + side + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 10: Place value ten-millions digit in large number (Lesson 37 #10)
            (r) => {
                const q = "Which digit is in the ten-millions place in 1,234,567,890?";
                const ans = "3";
                const d1 = "2";
                const d2 = "4";
                const d3 = "1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In 1,234,567,890: 1 is billions, 2 is hundred-millions, 3 is ten-millions, and 4 is millions."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 11: Odd one out among equivalent decimal/fractions (Lesson 37 #11)
            (r) => {
                const q = "Three of the numbers shown below are equal. Which number is NOT equal to the others?";
                const ans = "0.01";
                const d1 = "1/10";
                const d2 = "10/100";
                const d3 = "0.1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/10, 10/100, and 0.1 are all equal to one tenth.", "0.01 is one hundredth, which is not equal to the others."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 12: Estimating product of 3 numbers (Lesson 37 #12)
            (r) => {
                const a = randInt(r, 28, 32);
                const b = randInt(r, 38, 42);
                const c = randInt(r, 18, 22);
                const ra = 30, rb = 40, rc = 20;
                const prod = ra * rb * rc;
                const q = "Estimate the product of " + a + ", " + b + ", and " + c + " by rounding each number to the nearest ten before multiplying.";
                const ans = "" + prod;
                const d1 = "" + (prod + 4000);
                const d2 = "" + (prod - 4000);
                const d3 = "" + (prod * 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + ra + ", " + b + " rounds to " + rb + ", and " + c + " rounds to " + rc + ".", ra + " × " + rb + " × " + rc + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 13: Mental division by 10 or 30 (Lesson 37 #13/#14)
            (r) => {
                const list = [
                    { dividend: 3210, div: 30, ans: "107" },
                    { dividend: 4560, div: 40, ans: "114" },
                    { dividend: 2480, div: 20, ans: "124" },
                    { dividend: 3690, div: 30, ans: "123" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: " + item.dividend + " ÷ " + item.div;
                const ans = item.ans;
                const ansNum = parseInt(ans);
                const d1 = "" + (ansNum + 10);
                const d2 = "" + (ansNum - 10);
                const d3 = "" + (ansNum + 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.div + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 14: Subtracting money from $10,000 (Lesson 37 #16)
            (r) => {
                const spent = [345, 465, 520, 680, 750][randInt(r, 0, 4)];
                const rem = 10000 - spent;
                const q = "Simplify: $10,000 − $" + spent;
                const ans = "$" + rem.toLocaleString();
                const d1 = "$" + (rem + 100).toLocaleString();
                const d2 = "$" + (rem - 100).toLocaleString();
                const d3 = "$" + (rem + 10).toLocaleString();
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$10,000 − $" + spent + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 15: Subtracting mixed number from whole number (Lesson 37 #18)
            (r) => {
                const list = [
                    { whole: 3, subW: 1, n: 3, d: 5, ans: "1 2/5" },
                    { whole: 4, subW: 2, n: 1, d: 4, ans: "1 3/4" },
                    { whole: 5, subW: 1, n: 2, d: 3, ans: "3 1/3" },
                    { whole: 4, subW: 1, n: 3, d: 8, ans: "2 5/8" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: " + item.whole + " − " + item.subW + " " + item.n + "/" + item.d;
                const ans = item.ans;
                const wAns = parseInt(ans.split(" ")[0]);
                const frAns = ans.split(" ")[1];
                const d1 = (wAns + 1) + " " + frAns;
                const d2 = wAns + " " + item.n + "/" + item.d;
                const d3 = (wAns - 1) + " " + frAns;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rename " + item.whole + " as " + (item.whole - 1) + " " + item.d + "/" + item.d + ".", (item.whole - 1) + " " + item.d + "/" + item.d + " − " + item.subW + " " + item.n + "/" + item.d + " = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 16: Converting improper fraction to mixed number (Lesson 37 #21)
            (r) => {
                const list = [
                    { num: 11, den: 3, ans: "3 2/3" },
                    { num: 13, den: 4, ans: "3 1/4" },
                    { num: 17, den: 5, ans: "3 2/5" },
                    { num: 19, den: 6, ans: "3 1/6" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Convert the improper fraction " + item.num + "/" + item.den + " to a mixed number.";
                const ans = item.ans;
                const d1 = "4 " + ans.split(" ")[1];
                const d2 = "2 " + ans.split(" ")[1];
                const d3 = ans.split(" ")[0] + " 1/" + item.den;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.num + " ÷ " + item.den + " = " + Math.floor(item.num / item.den) + " with remainder " + (item.num % item.den) + ", so " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 17: Average of three weights in pounds (Lesson 37 #22)
            (r) => {
                const avg = [90, 92, 95, 100][randInt(r, 0, 3)];
                const d1 = 6;
                const d2 = 12;
                const a = avg - d1;
                const b = avg + d2;
                const c = 3 * avg - a - b;
                const q = "What is the average of " + a + " lb, " + b + " lb, and " + c + " lb?";
                const ans = avg + " lb";
                const d_1 = (avg + 3) + " lb";
                const d_2 = (avg - 3) + " lb";
                const d_3 = (avg + 6) + " lb";
                const s = shuffle(r, [ans, d_1, d_2, d_3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the weights: " + a + " + " + b + " + " + c + " = " + (3 * avg) + " lb.", "Divide by 3: " + (3 * avg) + " ÷ 3 = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 18: Least common multiple of two numbers (Lesson 37 #23)
            (r) => {
                const pairs = [
                    [4, 5, 20],
                    [3, 8, 24],
                    [4, 7, 28],
                    [5, 6, 30]
                ];
                const [a, b, ansVal] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the least common multiple (LCM) of " + a + " and " + b + "?";
                const ans = "" + ansVal;
                const d1 = "" + (ansVal + a);
                const d2 = "" + (ansVal - b);
                const d3 = "" + (a + b);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of " + a + ": " + a + ", " + (2 * a) + ", ...", "Multiples of " + b + ": " + b + ", " + (2 * b) + ", ...", "LCM = " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            },
            // Category 19: Elapsed movie duration in p.m. (Lesson 37 #29)
            (r) => {
                const startH = 2;
                const startM = [45, 50][randInt(r, 0, 1)];
                const endH = 4;
                const endM = [15, 23, 25][randInt(r, 0, 2)];
                const totalStartM = startH * 60 + startM;
                const totalEndM = endH * 60 + endM;
                const durTot = totalEndM - totalStartM;
                const durH = Math.floor(durTot / 60);
                const durM = durTot % 60;
                const startMStr = startM < 10 ? "0" + startM : "" + startM;
                const endMStr = endM < 10 ? "0" + endM : "" + endM;
                const q = "A movie started at " + startH + ":" + startMStr + " p.m. and ended at " + endH + ":" + endMStr + " p.m. How long was the movie?";
                const ans = durH + " hr " + durM + " min";
                const d1 = (durH + 1) + " hr " + durM + " min";
                const d2 = durH + " hr " + (durM + 10) + " min";
                const d3 = durH + " hr " + Math.max(1, durM - 10) + " min";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From " + startH + ":" + startMStr + " p.m. to " + endH + ":" + endMStr + " p.m. is " + ans + "."], lessonNum: 37, lessonTitle: "Adding and Subtracting Decimal Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

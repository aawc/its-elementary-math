module.exports = `    // Lesson 34: Decimal Place Value
    34: (rng, qIndex) => {
        const framings = [
            // Category 0: Fraction of group (Lesson 34 #1)
            (r) => {
                const sets = [
                    [3, 8, 24],
                    [2, 5, 25],
                    [3, 4, 28],
                    [5, 6, 30],
                    [2, 3, 27]
                ];
                const [n, d, tot] = sets[randInt(r, 0, sets.length - 1)];
                const ansVal = (tot / d) * n;
                const q = n + "/" + d + " of the " + tot + " choir members were tenors. How many tenors were in the choir?";
                const ans = "" + ansVal;
                const d1 = "" + (ansVal + 3);
                const d2 = "" + (ansVal - 3);
                const d3 = "" + (tot - ansVal);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [tot + " ÷ " + d + " = " + (tot / d) + ".", (tot / d) + " × " + n + " = " + ans + " tenors."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 1: Recipe scaling (Lesson 34 #2)
            (r) => {
                const oz = randInt(r, 6, 12);
                const mult = randInt(r, 3, 4);
                const multWord = mult === 3 ? "triple" : "quadruple";
                const ansVal = oz * mult;
                const q = "A cook wants to " + multWord + " a recipe for fruit salad. If the recipe calls for " + oz + " ounces of pineapple juice, how many ounces of pineapple juice should be used?";
                const ans = ansVal + " ounces";
                const d1 = (ansVal + oz) + " ounces";
                const d2 = (ansVal - oz) + " ounces";
                const d3 = (oz * 2) + " ounces";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [oz + " × " + mult + " = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 2: Insect lifespan elapsed time (Lesson 34 #3)
            (r) => {
                const startH = randInt(r, 8, 9);
                const startM = [42, 45, 47][randInt(r, 0, 2)];
                const addH = 1;
                const addM = [15, 20, 25][randInt(r, 0, 2)];
                const totM = startM + addM;
                const endH = startH + addH + Math.floor(totM / 60);
                const remM = totM % 60;
                const remMStr = remM < 10 ? "0" + remM : "" + remM;
                const startMStr = startM < 10 ? "0" + startM : "" + startM;
                const q = "An adult mayfly sprouts wings at " + startH + ":" + startMStr + " a.m. and lives for " + addH + " hour and " + addM + " minutes. At what time does it die?";
                const ans = endH + ":" + remMStr + " a.m.";
                const d1 = (endH - 1) + ":" + remMStr + " a.m.";
                const d2 = (endH + 1) + ":" + remMStr + " a.m.";
                const d3 = endH + ":" + ((remM + 15) % 60 < 10 ? "0" + ((remM + 15) % 60) : ((remM + 15) % 60)) + " a.m.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startH + ":" + startMStr + " + " + addH + " hr " + addM + " min = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 3: Percent as reduced fraction (Lesson 34 #4)
            (r) => {
                const list = [
                    { pct: 60, frac: "3/5" },
                    { pct: 40, frac: "2/5" },
                    { pct: 80, frac: "4/5" },
                    { pct: 20, frac: "1/5" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.pct + "% as a reduced fraction.";
                const ans = item.frac;
                const pool = ["1/5", "2/5", "3/5", "4/5", "3/10", "7/10"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% = " + item.pct + "/100 = " + ans + " in simplest form."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 4: Standard notation from expanded (Lesson 34 #6)
            (r) => {
                const h = randInt(r, 4, 8);
                const o = randInt(r, 2, 7);
                const val = h * 100 + o;
                const q = "Write (" + h + " × 100) + (" + o + " × 1) in standard notation.";
                const ans = "" + val;
                const d1 = "" + (h * 100 + o * 10);
                const d2 = "" + (h * 10 + o);
                const d3 = "" + (val + 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + h + " × 100) = " + (h * 100) + ", (" + o + " × 1) = " + o + ".", (h * 100) + " + " + o + " = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 5: Identify digit in ones place of money (Lesson 34 #7)
            (r) => {
                const tenTh = randInt(r, 2, 5);
                const th = randInt(r, 1, 4);
                const h = randInt(r, 6, 9);
                const tens = randInt(r, 5, 8);
                const ones = randInt(r, 3, 7);
                const tenths = randInt(r, 2, 4);
                const hundredths = randInt(r, 6, 9);
                const amt = "$" + tenTh + th + "," + h + tens + ones + "." + tenths + hundredths;
                const q = "Which digit is in the ones place in " + amt + "?";
                const ans = "" + ones;
                const d1 = "" + tens;
                const d2 = "" + tenths;
                const d3 = "" + hundredths;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The ones place is immediately to the left of the decimal point: " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 6: Side length of square given perimeter (Lesson 34 #8a)
            (r) => {
                const side = randInt(r, 5, 10);
                const perim = 4 * side;
                const q = "If the perimeter of a square is " + perim + " inches, how long is each side of the square?";
                const ans = side + " inches";
                const d1 = (side + 2) + " inches";
                const d2 = (side - 1) + " inches";
                const d3 = (perim / 2) + " inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = Perimeter ÷ 4 = " + perim + " ÷ 4 = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 7: Area of square given perimeter (Lesson 34 #8b)
            (r) => {
                const side = randInt(r, 5, 10);
                const perim = 4 * side;
                const area = side * side;
                const q = "If the perimeter of a square is " + perim + " inches, what is the area of the square?";
                const ans = area + " sq. in.";
                const d1 = perim + " sq. in.";
                const d2 = (area + 12) + " sq. in.";
                const d3 = (area - 12) + " sq. in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = " + perim + " ÷ 4 = " + side + " in.", "Area = " + side + " × " + side + " = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 8: LCM of two numbers (Lesson 34 #10)
            (r) => {
                const pairs = [
                    [6, 8, 24],
                    [4, 6, 12],
                    [6, 9, 18],
                    [8, 12, 24],
                    [9, 12, 36]
                ];
                const [a, b, ansVal] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the least common multiple (LCM) of " + a + " and " + b + "?";
                const ans = "" + ansVal;
                const d1 = "" + (a * b);
                const d2 = "" + (ansVal / 2);
                const d3 = "" + (ansVal + a);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of " + a + ": " + a + ", " + (2 * a) + ", " + (3 * a) + ", ...", "Multiples of " + b + ": " + b + ", " + (2 * b) + ", ...", "The least common multiple is " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 9: Divide money by 10 (Lesson 34 #11)
            (r) => {
                const list = [5.60, 4.80, 7.20, 8.40, 9.50];
                const val = list[randInt(r, 0, list.length - 1)];
                const ansVal = (val / 10).toFixed(2);
                const q = "Simplify: $" + val.toFixed(2) + " ÷ 10";
                const ans = "$" + ansVal;
                const d1 = "$" + (val / 100).toFixed(2);
                const d2 = "$" + val.toFixed(2);
                const d3 = "$" + ((val / 10) + 0.1).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + val.toFixed(2) + " ÷ 10 = $" + ansVal + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 10: Squaring a fraction (Lesson 34 #12)
            (r) => {
                const list = [
                    [9, 10, "81/100"],
                    [3, 10, "9/100"],
                    [7, 10, "49/100"],
                    [1, 10, "1/100"]
                ];
                const [n, d, ans] = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: " + n + "/" + d + " × " + n + "/" + d;
                const d1 = (n + n) + "/" + (d + d);
                const d2 = (n * n) + "/" + (d * 2);
                const d3 = (n * n + 1) + "/" + (d * d);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + n + " × " + n + ") / (" + d + " × " + d + ") = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 11: Estimate quotient by rounding (Lesson 34 #13)
            (r) => {
                const a = randInt(r, 870, 920);
                const b = randInt(r, 28, 32);
                const ra = 900;
                const rb = 30;
                const ansVal = ra / rb;
                const q = "Estimate the quotient when " + a + " is divided by " + b + " by rounding each number to compatible whole numbers before dividing.";
                const ans = "" + ansVal;
                const d1 = "" + (ansVal + 10);
                const d2 = "" + (ansVal - 10);
                const d3 = "" + (ansVal * 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + ra + ", and " + b + " rounds to " + rb + ".", ra + " ÷ " + rb + " = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 12: Round to nearest hundred (Lesson 34 #14)
            (r) => {
                const th = randInt(r, 30, 45);
                const h = randInt(r, 5, 8);
                const tens = randInt(r, 41, 49);
                const num = th * 1000 + h * 100 + tens;
                const rounded = th * 1000 + h * 100;
                const q = "Round " + num.toLocaleString() + " to the nearest hundred.";
                const ans = rounded.toLocaleString();
                const d1 = (rounded + 100).toLocaleString();
                const d2 = (rounded - 100).toLocaleString();
                const d3 = (Math.round(num / 1000) * 1000).toLocaleString();
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The tens digit is " + Math.floor(tens / 10) + ", which is less than 5, so round down to " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 13: Solve one-step linear equation (Lesson 34 #15/#16)
            (r) => {
                const c = randInt(r, 5, 8);
                const val = randInt(r, 18, 30);
                const rhs = c * val;
                const q = "Find the unknown number: " + c + "d = " + rhs;
                const ans = "" + val;
                const d1 = "" + (val + 2);
                const d2 = "" + (val - 2);
                const d3 = "" + (val + 6);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both sides by " + c + ": d = " + rhs + " ÷ " + c + " = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 14: Ratio of terms in sequence (Lesson 34 #21)
            (r) => {
                const step = randInt(r, 5, 8);
                const seq = [step, 2 * step, 3 * step, 4 * step].join(", ");
                const q = "What is the ratio of the first term to the fifth term of the sequence: " + seq + ", ...?";
                const ans = "1 to 5";
                const d1 = "1 to 4";
                const d2 = "1 to 6";
                const d3 = "5 to 1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["First term = " + step + ", fifth term = " + (5 * step) + ".", "Ratio = " + step + " to " + (5 * step) + " = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 15: Theater ticket sales total (Lesson 34 #22)
            (r) => {
                const tickets = [70, 80, 88, 90][randInt(r, 0, 3)];
                const price = 7.50;
                const tot = (tickets * price).toFixed(2);
                const q = "A movie theater sold " + tickets + " tickets for $" + price.toFixed(2) + " per ticket. What was the total of the ticket sales?";
                const ans = "$" + tot;
                const d1 = "$" + (parseFloat(tot) + 75).toFixed(2);
                const d2 = "$" + (parseFloat(tot) - 75).toFixed(2);
                const d3 = "$" + (parseFloat(tot) + 150).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [tickets + " × $" + price.toFixed(2) + " = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 16: Order of operations with division (Lesson 34 #24)
            (r) => {
                const a = 80, b = 40, c = 8, d = 4;
                const q = "Simplify: (" + a + " ÷ " + b + ") − (" + c + " ÷ " + d + ")";
                const ans = "0";
                const d1 = "2";
                const d2 = "4";
                const d3 = "1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " ÷ " + b + ") = 2, (" + c + " ÷ " + d + ") = 2.", "2 − 2 = 0."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 17: Decimal place value thousandths (Lesson 34 #25)
            (r) => {
                const q = "Which digit in 2,345.678 is in the thousandths place?";
                const ans = "8";
                const d1 = "6";
                const d2 = "7";
                const d3 = "5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 is in the tenths place, 7 is in the hundredths place, and 8 is in the thousandths place."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 18: Division resulting in mixed number (Lesson 34 #27)
            (r) => {
                const list = [
                    [5225, 12, "435 5/12"],
                    [3125, 8, "390 5/8"],
                    [2451, 6, "408 1/2"],
                    [4235, 10, "423 1/2"]
                ];
                const [dividend, div, ans] = list[randInt(r, 0, list.length - 1)];
                const q = "Divide " + dividend + " by " + div + " and write the quotient as a mixed number in simplest form.";
                const d1 = (parseInt(ans) + 1) + " " + ans.split(" ")[1];
                const d2 = (parseInt(ans) - 1) + " " + ans.split(" ")[1];
                const d3 = ans.split(" ")[0] + " 1/" + div;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dividend + " ÷ " + div + " = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            },
            // Category 19: Equalizing liquid in containers / average (Lesson 34 #28)
            (r) => {
                const avg = randInt(r, 9, 13);
                const d1 = randInt(r, 2, 4);
                const d2 = randInt(r, 1, 3);
                const a = avg + d1;
                const b = avg + d2;
                const c = 3 * avg - a - b;
                const q = "The first glass contained " + a + " ounces of water. The second glass contained " + b + " ounces of water. The third glass contained " + c + " ounces of water. If water was poured between the glasses until each contained the same amount, how many ounces of water would be in each glass?";
                const ans = avg + " ounces";
                const d_1 = (avg + 2) + " ounces";
                const d_2 = (avg - 2) + " ounces";
                const d_3 = (avg + 4) + " ounces";
                const s = shuffle(r, [ans, d_1, d_2, d_3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find the total: " + a + " + " + b + " + " + c + " = " + (3 * avg) + " ounces.", "Divide by 3: " + (3 * avg) + " ÷ 3 = " + ans + "."], lessonNum: 34, lessonTitle: "Decimal Place Value" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 41: Finding a Percent of a Number
    41: (rng, qIndex) => {
        const framings = [
            // Framing 0: Test questions answered correctly (WP #1)
            (r) => {
                const pairs = [
                    { pct: 80, tot: 20, ans: 16 },
                    { pct: 75, tot: 40, ans: 30 },
                    { pct: 90, tot: 50, ans: 45 },
                    { pct: 70, tot: 30, ans: 21 },
                    { pct: 85, tot: 40, ans: 34 }
                ];
                const item = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "A student correctly answered " + item.pct + "% of the " + item.tot + " questions on the test. How many questions did the student answer correctly?";
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 2), "" + (item.ans - 2), "" + (item.tot - item.ans)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% of " + item.tot + " = (" + item.pct + "/100) × " + item.tot + " = " + item.ans + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 1: Sales tax on restaurant meal (WP #2)
            (r) => {
                const meals = [
                    { cost: 8.50, rate: 8, tax: "0.68" },
                    { cost: 12.50, rate: 6, tax: "0.75" },
                    { cost: 15.00, rate: 8, tax: "1.20" },
                    { cost: 22.00, rate: 7, tax: "1.54" },
                    { cost: 35.00, rate: 6, tax: "2.10" }
                ];
                const item = meals[randInt(r, 0, meals.length - 1)];
                const q = "Ramon ordered items from the menu totaling $" + item.cost.toFixed(2) + ". If the sales-tax rate is " + item.rate + "%, how much should be added to the bill for sales tax?";
                const correct = "$" + item.tax;
                const d1 = "$" + (parseFloat(item.tax) + 0.50).toFixed(2);
                const d2 = "$" + Math.max(0.10, parseFloat(item.tax) - 0.30).toFixed(2);
                const d3 = "$" + (parseFloat(item.tax) + 1.20).toFixed(2);
                const s = shuffle(r, [correct, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply $" + item.cost.toFixed(2) + " by 0.0" + item.rate + " = $" + item.tax + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 2: Perimeter of square farm (WP #3)
            (r) => {
                const side = randInt(r, 16, 30) * 10;
                const perim = side * 4;
                const q = "A farm is on a square piece of land " + side + " yards on each side. A fence surrounds the land. How many yards of fencing surround the farm?";
                const s = shuffle(r, [perim + " yards", (perim + 40) + " yards", (perim - 40) + " yards", (side * 2) + " yards"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter of a square = 4 × side = 4 × " + side + " = " + perim + " yards."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 3: Direct percent calculation (WP #4)
            (r) => {
                const items = [
                    { pct: 20, n: 30, ans: 6 },
                    { pct: 25, n: 48, ans: 12 },
                    { pct: 10, n: 350, ans: 35 },
                    { pct: 40, n: 50, ans: 20 },
                    { pct: 30, n: 80, ans: 24 }
                ];
                const item = items[randInt(r, 0, items.length - 1)];
                const q = "What number is " + item.pct + "% of " + item.n + "?";
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 3), "" + (item.ans - 3), "" + (item.ans + 8)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% of " + item.n + " = " + item.ans + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 4: Bill payment and change (WP #5)
            (r) => {
                const costCents = randInt(r, 850, 1550);
                const costStr = (costCents / 100).toFixed(2);
                const bill = 20;
                const changeStr = ((bill * 100 - costCents) / 100).toFixed(2);
                const q = "The dinner cost $" + costStr + ". Jeb paid with a $" + bill + " bill. How much money should he get back?";
                const correct = "$" + changeStr;
                const d1 = "$" + ((bill * 100 - costCents + 100) / 100).toFixed(2);
                const d2 = "$" + ((bill * 100 - costCents - 100) / 100).toFixed(2);
                const d3 = "$" + ((bill * 100 - costCents + 50) / 100).toFixed(2);
                const s = shuffle(r, [correct, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + bill + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 5: Chairs arranged in equal rows (WP #6)
            (r) => {
                const rows = [12, 14, 16, 18, 20][randInt(r, 0, 4)];
                const perRow = [14, 16, 18, 20, 24][randInt(r, 0, 4)];
                const total = rows * perRow;
                const q = total + " chairs were arranged in " + rows + " equal rows. How many chairs were in each row?";
                const s = shuffle(r, ["" + perRow, "" + (perRow + 2), "" + (perRow - 2), "" + (perRow + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [total + " ÷ " + rows + " = " + perRow + " chairs in each row."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 6: Bowling scores average (WP #7)
            (r) => {
                const avg = randInt(r, 115, 140);
                const d1 = randInt(r, 6, 18);
                const d2 = randInt(r, 6, 18);
                const s1 = avg - d1;
                const s2 = avg + d2;
                const s3 = avg * 3 - s1 - s2;
                const q = "Yuki's bowling scores for three games were " + s1 + ", " + s2 + ", and " + s3 + ". What was her average score for the three games?";
                const s = shuffle(r, ["" + avg, "" + (avg + 5), "" + (avg - 5), "" + (avg + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + s1 + " + " + s2 + " + " + s3 + ") ÷ 3 = " + (avg * 3) + " ÷ 3 = " + avg + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 7: Area of rectangle with decimal dimension (WP #8)
            (r) => {
                const len = [2.5, 3.5, 4.5][randInt(r, 0, 2)];
                const wid = [2, 4, 6][randInt(r, 0, 2)];
                const area = (len * wid).toFixed(1);
                const q = "What is the area of a rectangle that is " + len + " m long and " + wid + " m wide?";
                const s = shuffle(r, [area + " sq. m", (parseFloat(area) + 2).toFixed(1) + " sq. m", (parseFloat(area) - 1.5).toFixed(1) + " sq. m", ((len + wid) * 2).toFixed(1) + " sq. m"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [len + " m × " + wid + " m = " + area + " sq. m."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 8: Ordering numbers from least to greatest (WP #9)
            (r) => {
                const q = "Which choice shows the numbers 3/2, 2/3, 0, and −1 arranged in order from least to greatest?";
                const s = shuffle(r, ["−1, 0, 2/3, 3/2", "0, −1, 2/3, 3/2", "−1, 0, 3/2, 2/3", "2/3, 3/2, 0, −1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Negative numbers come first (−1), then 0, then 2/3 (less than 1), then 3/2 (1 1/2)."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 9: Identify prime number by rank (WP #10)
            (r) => {
                const items = [
                    { pos: "fifth", ans: 11, wrong: [9, 13, 15] },
                    { pos: "sixth", ans: 13, wrong: [11, 15, 17] },
                    { pos: "seventh", ans: 17, wrong: [15, 19, 21] },
                    { pos: "eighth", ans: 19, wrong: [17, 21, 23] }
                ];
                const item = items[randInt(r, 0, items.length - 1)];
                const q = "What is the " + item.pos + " prime number?";
                const s = shuffle(r, ["" + item.ans, "" + item.wrong[0], "" + item.wrong[1], "" + item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The primes in order are 2, 3, 5, 7, 11, 13, 17, 19, 23... The " + item.pos + " prime is " + item.ans + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 10: Divisibility test (WP #11)
            (r) => {
                const cases = [
                    { n: 600, notDiv: 9, divs: [2, 3, 5] },
                    { n: 450, notDiv: 4, divs: [2, 3, 5] },
                    { n: 300, notDiv: 7, divs: [2, 3, 5] },
                    { n: 800, notDiv: 3, divs: [2, 5, 10] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "By which of these numbers is " + item.n + " NOT divisible?";
                const s = shuffle(r, ["" + item.notDiv, "" + item.divs[0], "" + item.divs[1], "" + item.divs[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.n + " is not divisible by " + item.notDiv + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 11: Win-loss ratio (WP #12)
            (r) => {
                const cases = [
                    { total: 60, wins: 15, losses: 45, ratio: "1 to 3", wrong: ["1 to 4", "3 to 1", "1 to 2"] },
                    { total: 50, wins: 20, losses: 30, ratio: "2 to 3", wrong: ["2 to 5", "3 to 2", "1 to 2"] },
                    { total: 40, wins: 10, losses: 30, ratio: "1 to 3", wrong: ["1 to 4", "3 to 1", "1 to 2"] },
                    { total: 45, wins: 15, losses: 30, ratio: "1 to 2", wrong: ["1 to 3", "2 to 1", "2 to 3"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "A team won " + item.wins + " of its first " + item.total + " games. What was the team's win-loss ratio?";
                const s = shuffle(r, [item.ratio, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Losses = " + item.total + " - " + item.wins + " = " + item.losses + ". Win-loss ratio = " + item.wins + "/" + item.losses + " = " + item.ratio + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 12: Arm swing circle diameter (WP #13)
            (r) => {
                const arm = randInt(r, 24, 34);
                const diam = arm * 2;
                const q = "To loosen her shoulder, Mary swung her arm around in a big circle. If her arm was " + arm + " inches long, what was the diameter of the circle?";
                const s = shuffle(r, [diam + " inches", (diam + 6) + " inches", arm + " inches", (diam - 6) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = 2 × radius = 2 × " + arm + " = " + diam + " inches."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 13: Measure of an acute angle (WP #15)
            (r) => {
                const cases = [
                    { acute: 45, wrong: [90, 135, 180] },
                    { acute: 35, wrong: [90, 110, 145] },
                    { acute: 60, wrong: [90, 120, 150] },
                    { acute: 75, wrong: [90, 105, 135] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Which of the following could be the measure of an acute angle?";
                const s = shuffle(r, [item.acute + "°", item.wrong[0] + "°", item.wrong[1] + "°", item.wrong[2] + "°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An acute angle measures between 0° and 90°. " + item.acute + "° is acute."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 14: Square of decimal (WP #16)
            (r) => {
                const cases = [
                    { val: "2.5", ans: "6.25", wrong: ["5.0", "6.5", "5.25"] },
                    { val: "1.5", ans: "2.25", wrong: ["3.0", "2.5", "2.15"] },
                    { val: "0.5", ans: "0.25", wrong: ["1.0", "0.5", "0.025"] },
                    { val: "1.2", ans: "1.44", wrong: ["2.4", "1.24", "1.4"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: (" + item.val + ")²";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.val + " × " + item.val + " = " + item.ans + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 15: Percent to reduced fraction (WP #18 / PS a-f)
            (r) => {
                const cases = [
                    { pct: 40, frac: "2/5", wrong: ["4/10", "1/4", "3/5"] },
                    { pct: 60, frac: "3/5", wrong: ["6/10", "2/3", "4/5"] },
                    { pct: 75, frac: "3/4", wrong: ["7/10", "4/5", "1/2"] },
                    { pct: 20, frac: "1/5", wrong: ["2/10", "1/4", "1/2"] },
                    { pct: 80, frac: "4/5", wrong: ["8/10", "3/4", "7/10"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Write " + item.pct + "% as a reduced fraction.";
                const s = shuffle(r, [item.frac, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% = " + item.pct + "/100 = " + item.frac + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 16: Percent of dollar amount (WP #19 / PS o)
            (r) => {
                const cases = [
                    { pct: 9, amt: 10, ans: "$0.90", wrong: ["$0.09", "$9.00", "$0.80"] },
                    { pct: 8, amt: 15, ans: "$1.20", wrong: ["$0.80", "$1.50", "$1.12"] },
                    { pct: 6, amt: 25, ans: "$1.50", wrong: ["$0.60", "$2.50", "$1.25"] },
                    { pct: 15, amt: 20, ans: "$3.00", wrong: ["$1.50", "$3.50", "$0.30"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "What is " + item.pct + "% of $" + item.amt + ".00?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% of $" + item.amt + ".00 = 0.0" + item.pct + " × " + item.amt + " = " + item.ans + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 17: Reciprocal of a fraction (WP #20)
            (r) => {
                const cases = [
                    { f: "2/3", rec: "3/2", wrong: ["2/3", "1/3", "3/4"] },
                    { f: "3/5", rec: "5/3", wrong: ["3/5", "2/5", "5/4"] },
                    { f: "4/7", rec: "7/4", wrong: ["4/7", "3/7", "7/5"] },
                    { f: "5/8", rec: "8/5", wrong: ["5/8", "3/8", "8/3"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "What is the reciprocal of " + item.f + "?";
                const s = shuffle(r, [item.rec, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Invert the fraction: reciprocal of " + item.f + " is " + item.rec + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 18: Fraction of a whole number (WP #29)
            (r) => {
                const cases = [
                    { n: 3, d: 4, tot: 48, ans: 36, wrong: [12, 32, 40] },
                    { n: 2, d: 3, tot: 45, ans: 30, wrong: [15, 25, 35] },
                    { n: 3, d: 5, tot: 50, ans: 30, wrong: [10, 25, 35] },
                    { n: 5, d: 6, tot: 42, ans: 35, wrong: [7, 30, 40] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "What is " + item.n + "/" + item.d + " of " + item.tot + "?";
                const s = shuffle(r, ["" + item.ans, "" + item.wrong[0], "" + item.wrong[1], "" + item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.tot + " ÷ " + item.d + " = " + (item.tot/item.d) + "; " + (item.tot/item.d) + " × " + item.n + " = " + item.ans + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Framing 19: Baseball cards percent sold (PS q)
            (r) => {
                const pct = [60, 70, 80][randInt(r, 0, 2)];
                const total = [30, 40, 50, 60][randInt(r, 0, 3)];
                const sold = Math.round((pct * total) / 100);
                const q = "Erika sold " + pct + "% of her " + total + " baseball cards. How many baseball cards did she sell?";
                const s = shuffle(r, ["" + sold, "" + (sold + 4), "" + (sold - 4), "" + (total - sold)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% of " + total + " = " + sold + " cards."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 42: Renaming Fractions by Multiplying by 1
    42: (rng, qIndex) => {
        const framings = [
            // Framing 0: Renaming and adding fractions (WP #1)
            (r) => {
                const cases = [
                    { f1: "1/2", f2: "1/3", lcm: 6, ans: "5/6", wrong: ["2/5", "1/6", "4/6"] },
                    { f1: "1/3", f2: "1/4", lcm: 12, ans: "7/12", wrong: ["2/7", "5/12", "1/12"] },
                    { f1: "1/2", f2: "1/4", lcm: 4, ans: "3/4", wrong: ["2/6", "1/4", "1/2"] },
                    { f1: "2/3", f2: "1/6", lcm: 6, ans: "5/6", wrong: ["3/9", "1/2", "4/6"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Write " + item.f1 + " and " + item.f2 + " as fractions with denominators of " + item.lcm + ". Then add the renamed fractions.";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rename fractions to denominator " + item.lcm + " and add to get " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 1: Words to digits for large numbers (WP #2)
            (r) => {
                const cases = [
                    { words: "two hundred billion", ans: "200,000,000,000", wrong: ["20,000,000,000", "200,000,000", "2,000,000,000,000"] },
                    { words: "three hundred billion", ans: "300,000,000,000", wrong: ["30,000,000,000", "300,000,000", "3,000,000,000,000"] },
                    { words: "fifty billion", ans: "50,000,000,000", wrong: ["5,000,000,000", "50,000,000", "500,000,000,000"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Astronomers estimate that our galaxy contains about " + item.words + " stars. Use digits to write that number.";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " is written in digits as " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 2: Area of rectangular school yard (WP #3)
            (r) => {
                const len = randInt(r, 11, 16) * 10;
                const wid = randInt(r, 3, 6) * 10;
                const area = len * wid;
                const q = "A rectangular school yard is " + len + " yards long and " + wid + " yards wide. How many square yards is its area?";
                const s = shuffle(r, [area + " sq. yd", (area + 400) + " sq. yd", (area - 400) + " sq. yd", ((len + wid) * 2) + " sq. yd"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = length × width = " + len + " × " + wid + " = " + area + " square yards."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 3: Percent of a number (WP #4)
            (r) => {
                const pct = [20, 30, 40, 50, 60][randInt(r, 0, 4)];
                const n = [30, 40, 50, 60, 70, 80][randInt(r, 0, 5)];
                const ans = Math.round((pct * n) / 100);
                const q = "What number is " + pct + "% of " + n + "?";
                const s = shuffle(r, ["" + ans, "" + (ans + 4), "" + (ans - 4), "" + (ans + 8)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% of " + n + " = " + ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 4: Fraction equal to 1 to rename (WP #5 / PS a-d)
            (r) => {
                const cases = [
                    { orig: "1/2", targetD: 8, name1: "4/4", wrong: ["2/2", "3/3", "8/8"] },
                    { orig: "2/3", targetD: 6, name1: "2/2", wrong: ["3/3", "4/4", "6/6"] },
                    { orig: "3/4", targetD: 12, name1: "3/3", wrong: ["2/2", "4/4", "12/12"] },
                    { orig: "3/5", targetD: 10, name1: "2/2", wrong: ["5/5", "3/3", "10/10"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "By what fraction equal to 1 must " + item.orig + " be multiplied to write an equivalent fraction with a denominator of " + item.targetD + "?";
                const s = shuffle(r, [item.name1, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerator and denominator by " + item.name1.split("/")[0] + " using the fraction " + item.name1 + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 5: Missing numerator in equivalent fraction (WP #6)
            (r) => {
                const cases = [
                    { f: "1/2", d: 10, num: 5, wrong: [2, 4, 6] },
                    { f: "2/3", d: 12, num: 8, wrong: [6, 9, 10] },
                    { f: "3/4", d: 20, num: 15, wrong: [12, 16, 18] },
                    { f: "3/5", d: 15, num: 9, wrong: [6, 10, 12] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Complete the equivalent fraction: " + item.f + " = ?/" + item.d + ". What is the missing numerator?";
                const s = shuffle(r, ["" + item.num, "" + item.wrong[0], "" + item.wrong[1], "" + item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The missing numerator is " + item.num + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 6: Decimal division (WP #7)
            (r) => {
                const cases = [
                    { a: "4.32", b: "0.6", ans: "7.2", wrong: ["0.72", "72", "6.2"] },
                    { a: "3.24", b: "0.4", ans: "8.1", wrong: ["0.81", "81", "7.1"] },
                    { a: "2.52", b: "0.3", ans: "8.4", wrong: ["0.84", "84", "7.4"] },
                    { a: "1.44", b: "0.2", ans: "7.2", wrong: ["0.72", "72", "6.2"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the quotient: " + item.a + " ÷ " + item.b;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " ÷ " + item.b + " = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 7: Decimal subtraction with trailing zeros (WP #8)
            (r) => {
                const cases = [
                    { a: "6.3", b: "0.54", ans: "5.76", wrong: ["5.86", "6.24", "5.74"] },
                    { a: "7.2", b: "0.48", ans: "6.72", wrong: ["6.82", "7.28", "6.62"] },
                    { a: "5.4", b: "0.35", ans: "5.05", wrong: ["5.15", "5.01", "5.95"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: " + item.a + " − " + item.b;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " − " + item.b + " = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 8: Square of small decimal (WP #9)
            (r) => {
                const cases = [
                    { val: "0.15", ans: "0.0225", wrong: ["0.225", "0.030", "0.015"] },
                    { val: "0.12", ans: "0.0144", wrong: ["0.144", "0.024", "0.012"] },
                    { val: "0.25", ans: "0.0625", wrong: ["0.625", "0.050", "0.025"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: (" + item.val + ")²";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.val + " × " + item.val + " = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 9: Reciprocal of fraction (WP #10)
            (r) => {
                const cases = [
                    { f: "6/7", rec: "7/6", wrong: ["6/7", "1/7", "7/5"] },
                    { f: "5/8", rec: "8/5", wrong: ["5/8", "3/8", "8/3"] },
                    { f: "3/10", rec: "10/3", wrong: ["3/10", "7/10", "10/7"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "What is the reciprocal of " + item.f + "?";
                const s = shuffle(r, [item.rec, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Invert " + item.f + " to get " + item.rec + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 10: Same place value digit (WP #11)
            (r) => {
                const cases = [
                    { n1: "12,345", n2: "67.89", d2: "6", ans: "4 (tens place)", wrong: ["3 (hundreds place)", "5 (ones place)", "2 (thousands place)"] },
                    { n1: "54,321", n2: "78.95", d2: "7", ans: "2 (tens place)", wrong: ["3 (hundreds place)", "1 (ones place)", "4 (thousands place)"] },
                    { n1: "98,765", n2: "43.21", d2: "4", ans: "6 (tens place)", wrong: ["7 (hundreds place)", "5 (ones place)", "8 (thousands place)"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Which digit in " + item.n1 + " has the same place value as the " + item.d2 + " in " + item.n2 + "?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The " + item.d2 + " in " + item.n2 + " is in the tens place. The digit in " + item.n1 + " in the tens place is " + item.ans.split(" ")[0] + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 11: Least common multiple (WP #12)
            (r) => {
                const cases = [
                    { nums: "3, 4, and 6", ans: "12", wrong: ["24", "18", "6"] },
                    { nums: "2, 4, and 8", ans: "8", wrong: ["16", "12", "4"] },
                    { nums: "4, 6, and 8", ans: "24", wrong: ["12", "48", "16"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "What is the least common multiple (LCM) of " + item.nums + "?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The least common multiple of " + item.nums + " is " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 12: Sum of fractions with like denominators (WP #13)
            (r) => {
                const cases = [
                    { a: "3/5", b: "4/5", ans: "1 2/5", wrong: ["7/10", "1 1/5", "1 3/5"] },
                    { a: "5/8", b: "7/8", ans: "1 1/2", wrong: ["12/16", "1 3/8", "1 5/8"] },
                    { a: "2/3", b: "2/3", ans: "1 1/3", wrong: ["4/6", "1", "1 2/3"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: " + item.a + " + " + item.b;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " + " + item.b + " = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 13: Subtract mixed numbers with like denominators (WP #14)
            (r) => {
                const cases = [
                    { a: "4 3/8", b: "1 1/8", ans: "3 1/4", wrong: ["3 2/8", "3 1/2", "2 1/4"] },
                    { a: "5 5/6", b: "2 1/6", ans: "3 2/3", wrong: ["3 4/6", "3 1/3", "2 2/3"] },
                    { a: "6 7/10", b: "3 3/10", ans: "3 2/5", wrong: ["3 4/10", "3 1/5", "2 2/5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify and reduce: " + item.a + " − " + item.b;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " − " + item.b + " = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 14: Product of two fractions (WP #15)
            (r) => {
                const cases = [
                    { a: "2/3", b: "3/5", ans: "2/5", wrong: ["6/15", "5/8", "1/2"] },
                    { a: "3/4", b: "2/3", ans: "1/2", wrong: ["6/12", "5/7", "3/8"] },
                    { a: "4/5", b: "5/8", ans: "1/2", wrong: ["9/13", "4/8", "2/5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: " + item.a + " × " + item.b;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " × " + item.b + " = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 15: Fraction times whole number (WP #16)
            (r) => {
                const cases = [
                    { f: "3/5", w: 3, ans: "1 4/5", wrong: ["9/15", "1 1/5", "2"] },
                    { f: "2/3", w: 4, ans: "2 2/3", wrong: ["8/12", "2 1/3", "3"] },
                    { f: "3/4", w: 3, ans: "2 1/4", wrong: ["9/12", "2", "2 1/2"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the product: " + item.f + " × " + item.w;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.f + " × " + item.w + " = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 16: Prime factor pair (WP #20)
            (r) => {
                const cases = [
                    { n: 34, ans: "2 and 17", wrong: ["2 and 19", "3 and 11", "4 and 9"] },
                    { n: 38, ans: "2 and 19", wrong: ["2 and 17", "3 and 13", "4 and 9"] },
                    { n: 46, ans: "2 and 23", wrong: ["2 and 21", "3 and 17", "4 and 11"] },
                    { n: 58, ans: "2 and 29", wrong: ["2 and 27", "3 and 19", "4 and 13"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "The prime numbers that multiply to form 35 are 5 and 7. Which prime numbers can be multiplied to form " + item.n + "?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.n + " = " + item.ans.replace(" and ", " × ") + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 17: Fraction of a dozen eggs (WP #23)
            (r) => {
                const cases = [
                    { f: "2/3", ans: "8 eggs", wrong: ["6 eggs", "9 eggs", "10 eggs"] },
                    { f: "3/4", ans: "9 eggs", wrong: ["8 eggs", "6 eggs", "10 eggs"] },
                    { f: "5/6", ans: "10 eggs", wrong: ["8 eggs", "9 eggs", "11 eggs"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "How many eggs are in " + item.f + " of a dozen?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.f + " × 12 = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 18: Rename fraction and subtract (WP #24)
            (r) => {
                const cases = [
                    { f1: "3/4", targetD: 8, f2: "7/8", ans: "1/8", wrong: ["2/8", "3/8", "4/8"] },
                    { f1: "1/2", targetD: 6, f2: "5/6", ans: "1/3", wrong: ["2/6", "1/6", "1/2"] },
                    { f1: "2/5", targetD: 10, f2: "7/10", ans: "3/10", wrong: ["1/10", "2/10", "4/10"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Write " + item.f1 + " with a denominator of " + item.targetD + ". Then subtract the renamed fraction from " + item.f2 + ".";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.f2 + " − " + item.f1 + " = " + item.ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Framing 19: Decimal rectangle perimeter (WP #25)
            (r) => {
                const len = [0.4, 0.5, 0.6, 0.8][randInt(r, 0, 3)];
                const wid = [0.2, 0.3, 0.4][randInt(r, 0, 2)];
                const perim = ((len + wid) * 2).toFixed(1);
                const q = "What is the perimeter of a rectangle that is " + len + " m long and " + wid + " m wide?";
                const s = shuffle(r, [perim + " m", (parseFloat(perim) + 0.2).toFixed(1) + " m", (parseFloat(perim) - 0.2).toFixed(1) + " m", (len * wid).toFixed(2) + " m"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (" + len + " + " + wid + ") = " + perim + " m."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 43: Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems
    43: (rng, qIndex) => {
        const framings = [
            // Framing 0: Sales tax on bicycle (WP #1)
            (r) => {
                const cost = [120, 150, 180, 200][randInt(r, 0, 3)];
                const rate = [6, 7, 8, 9][randInt(r, 0, 3)];
                const tax = Math.round(cost * rate) / 100;
                const total = (cost + tax).toFixed(2);
                const q = "A bicycle cost $" + cost + ". The sales-tax rate was " + rate + "%. What was the total cost of the bicycle including sales tax?";
                const s = shuffle(r, ["$" + total, "$" + (cost + tax + 5).toFixed(2), "$" + (cost + tax - 5).toFixed(2), "$" + (cost + tax + 10).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = " + rate + "% of $" + cost + " = $" + tax.toFixed(2) + ". Total = $" + cost + " + $" + tax.toFixed(2) + " = $" + total + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 1: Knights at Round Table (WP #2)
            (r) => {
                const cap = [150, 160, 180, 200][randInt(r, 0, 3)];
                const seated = cap - randInt(r, 15, 32);
                const empty = cap - seated;
                const q = "If " + cap + " knights could sit at the Round Table and only " + seated + " knights were seated, how many empty places were at the table?";
                const s = shuffle(r, ["" + empty, "" + (empty + 5), "" + (empty - 5), "" + (empty + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [cap + " − " + seated + " = " + empty + " empty places."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 2: Olympic race margin (WP #3)
            (r) => {
                const t1 = 19.32;
                const t2 = 19.73;
                const diff = (t2 - t1).toFixed(2);
                const q = "A runner finished the 200-meter sprint in " + t1 + " seconds, breaking the previous Olympic record of " + t2 + " seconds. By how much was the previous Olympic record broken?";
                const s = shuffle(r, [diff + " seconds", "0.51 seconds", "0.31 seconds", "0.45 seconds"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [t2 + " − " + t1 + " = " + diff + " seconds."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 3: Rename fraction with denominator by multiplying by 1 (WP #4, 5)
            (r) => {
                const cases = [
                    { f: "1/2", d: 6, ans: "3/6", wrong: ["2/6", "4/6", "5/6"] },
                    { f: "2/3", d: 6, ans: "4/6", wrong: ["3/6", "5/6", "2/6"] },
                    { f: "3/4", d: 8, ans: "6/8", wrong: ["5/8", "7/8", "4/8"] },
                    { f: "3/5", d: 10, ans: "6/10", wrong: ["5/10", "7/10", "4/10"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Multiply " + item.f + " by a fraction equal to 1 to find an equivalent fraction with a denominator of " + item.d + ".";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.f + " = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 4: Unknown factor in fraction equation (WP #6)
            (r) => {
                const cases = [
                    { a: 2, b: 3, ans: "3/2", wrong: ["2/3", "1/2", "1/3"] },
                    { a: 3, b: 4, ans: "4/3", wrong: ["3/4", "1/4", "1/3"] },
                    { a: 4, b: 5, ans: "5/4", wrong: ["4/5", "1/5", "1/4"] },
                    { a: 5, b: 6, ans: "6/5", wrong: ["5/6", "1/6", "1/5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the unknown number n: (" + item.a + "/" + item.b + ")n = 1";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply by the reciprocal: n = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 5: Unknown subtrahend with mixed number (WP #7)
            (r) => {
                const cases = [
                    { whole: 6, w2: 1, n: 4, d: 5, ans: "4 1/5", wrong: ["5 1/5", "4 4/5", "5 4/5"] },
                    { whole: 5, w2: 2, n: 1, d: 4, ans: "2 3/4", wrong: ["3 3/4", "2 1/4", "3 1/4"] },
                    { whole: 7, w2: 3, n: 2, d: 3, ans: "3 1/3", wrong: ["4 1/3", "3 2/3", "4 2/3"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the unknown number w: " + item.whole + " − w = " + item.w2 + " " + item.n + "/" + item.d;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + item.whole + " − " + item.w2 + " " + item.n + "/" + item.d + " = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 6: Unknown minuend with mixed numbers (WP #8)
            (r) => {
                const cases = [
                    { w1: 4, n1: 1, d: 8, w2: 6, n2: 3, ans: "10 1/2", wrong: ["10 4/8", "9 1/2", "11 1/2"] },
                    { w1: 3, n1: 1, d: 6, w2: 4, n2: 2, ans: "7 1/2", wrong: ["7 3/6", "6 1/2", "8 1/2"] },
                    { w1: 2, n1: 1, d: 4, w2: 5, n2: 1, ans: "7 1/2", wrong: ["7 2/4", "6 1/2", "8 1/2"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the unknown number m: m − " + item.w1 + " " + item.n1 + "/" + item.d + " = " + item.w2 + " " + item.n2 + "/" + item.d;
                const s = shuffle(r, [item.ans, "10 1/4", "10 3/4", "11 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = " + item.w1 + " " + item.n1 + "/" + item.d + " + " + item.w2 + " " + item.n2 + "/" + item.d + " = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 7: Unknown decimal minuend (WP #9)
            (r) => {
                const sub = [2.45, 3.15, 1.85][randInt(r, 0, 2)];
                const diff = [1.3, 2.4, 3.2][randInt(r, 0, 2)];
                const ans = (sub + diff).toFixed(2);
                const q = "Find the unknown number c: c − " + sub + " = " + diff;
                const s = shuffle(r, ["" + ans, "" + (parseFloat(ans) + 1).toFixed(2), "" + (parseFloat(ans) - 1).toFixed(2), "" + (parseFloat(ans) + 0.5).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["c = " + diff + " + " + sub + " = " + ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 8: Unknown decimal subtrahend (WP #10)
            (r) => {
                const min = [12, 15, 20][randInt(r, 0, 2)];
                const diff = [1.43, 2.65, 3.82][randInt(r, 0, 2)];
                const ans = (min - diff).toFixed(2);
                const q = "Find the unknown number d: " + min + " − d = " + diff;
                const s = shuffle(r, ["" + ans, "" + (parseFloat(ans) + 1).toFixed(2), "" + (parseFloat(ans) - 1).toFixed(2), "" + (parseFloat(ans) + 0.1).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["d = " + min + " − " + diff + " = " + ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 9: Product of mixed number and fraction (WP #11)
            (r) => {
                const cases = [
                    { expr: "1 1/5 × 5/4", ans: "1 1/2", wrong: ["1 1/4", "1 3/4", "1 1/5"] },
                    { expr: "1 1/4 × 4/5", ans: "1", wrong: ["1 1/4", "4/5", "1 1/2"] },
                    { expr: "1 1/2 × 2/3", ans: "1", wrong: ["1 1/3", "3/2", "1 1/2"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: " + item.expr;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.expr + " = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 10: Identify non-prime number (WP #14)
            (r) => {
                const cases = [
                    { nonPrime: 33, primes: [23, 43, 53], reason: "33 is divisible by 3 and 11" },
                    { nonPrime: 27, primes: [17, 37, 47], reason: "27 is divisible by 3 and 9" },
                    { nonPrime: 35, primes: [29, 31, 41], reason: "35 is divisible by 5 and 7" },
                    { nonPrime: 49, primes: [39, 41, 43], reason: "49 is divisible by 7" }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Which of these numbers is NOT a prime number?";
                const s = shuffle(r, ["" + item.nonPrime, "" + item.primes[0], "" + item.primes[1], "" + item.primes[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.reason + ", so it is not a prime number."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 11: Compare exponents addition vs multiplication (WP #15)
            (r) => {
                const q = "Compare: 2² + 2² [?] 2² × 2²";
                const s = shuffle(r, ["< (8 < 16)", "> (8 > 16)", "= (8 = 8)", "= (16 = 16)"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2² + 2² = 4 + 4 = 8. 2² × 2² = 4 × 4 = 16. Since 8 < 16, the correct sign is <."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 12: Negative number yardage loss (WP #16)
            (r) => {
                const loss = randInt(r, 8, 16);
                const q = "In football, a loss of yardage is expressed as a negative number. If a team loses " + loss + " yards on a play, how would this yardage change be shown?";
                const s = shuffle(r, ["−" + loss, "+" + loss, "" + loss, "−" + (loss + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A loss of " + loss + " yards is represented as −" + loss + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 13: Words to decimal number (WP #17)
            (r) => {
                const cases = [
                    { words: "nine and twelve hundredths", ans: "9.12", wrong: ["9.012", "912", "9.120"] },
                    { words: "seven and fifteen hundredths", ans: "7.15", wrong: ["7.015", "715", "7.150"] },
                    { words: "four and eight hundredths", ans: "4.08", wrong: ["4.8", "4.80", "408"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Write the decimal number for " + item.words + ".";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " is written as " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 14: Round to nearest million (WP #18)
            (r) => {
                const cases = [
                    { n: "67,492,384", ans: "67,000,000", wrong: ["68,000,000", "67,500,000", "70,000,000"] },
                    { n: "84,815,200", ans: "85,000,000", wrong: ["84,000,000", "84,800,000", "80,000,000"] },
                    { n: "42,398,710", ans: "42,000,000", wrong: ["43,000,000", "42,400,000", "40,000,000"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Round " + item.n + " to the nearest million.";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The digit in the hundred-thousands place determines rounding: " + item.n + " rounds to " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 15: Multiply decimal by 10² (WP #19)
            (r) => {
                const cases = [
                    { dec: "0.37", ans: "37", wrong: ["3.7", "370", "0.037"] },
                    { dec: "0.45", ans: "45", wrong: ["4.5", "450", "0.045"] },
                    { dec: "0.82", ans: "82", wrong: ["8.2", "820", "0.082"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: " + item.dec + " × 10²";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10² = 100. " + item.dec + " × 100 = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 16: Product of three single-digit decimals (WP #20)
            (r) => {
                const cases = [
                    { expr: "0.6 × 0.4 × 0.2", ans: "0.048", wrong: ["0.48", "0.0048", "4.8"] },
                    { expr: "0.5 × 0.4 × 0.3", ans: "0.06", wrong: ["0.6", "0.006", "6.0"] },
                    { expr: "0.8 × 0.2 × 0.3", ans: "0.048", wrong: ["0.48", "0.0048", "4.8"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: " + item.expr;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.expr + " = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 17: Perimeter of square room to area (WP #21)
            (r) => {
                const side = [15, 20, 25, 30][randInt(r, 0, 3)];
                const perim = side * 4;
                const area = side * side;
                const q = "The perimeter of a square room is " + perim + " feet. What is the area of the room in square feet?";
                const s = shuffle(r, [area + " sq. ft", (area + 50) + " sq. ft", (area - 50) + " sq. ft", (perim * 2) + " sq. ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side = " + perim + " ÷ 4 = " + side + " ft. Area = " + side + " × " + side + " = " + area + " sq. ft."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 18: Division with remainder as reduced mixed number (WP #22)
            (r) => {
                const cases = [
                    { n: 100, d: 16, ans: "6 1/4", wrong: ["6 4/16", "6 1/2", "5 3/4"] },
                    { n: 100, d: 24, ans: "4 1/6", wrong: ["4 4/24", "4 1/4", "4 1/3"] },
                    { n: 90, d: 12, ans: "7 1/2", wrong: ["7 6/12", "7 1/4", "7 2/3"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Divide " + item.n + " by " + item.d + " and write the answer as a reduced mixed number.";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.n + " ÷ " + item.d + " = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Framing 19: Equivalent division problem by doubling (WP #23)
            (r) => {
                const cases = [
                    { dividend: "4 1/2", divisor: "1/2", equiv: "9 ÷ 1", ans: "9", wrong: ["8", "10", "4 1/2"] },
                    { dividend: "6 1/2", divisor: "1/2", equiv: "13 ÷ 1", ans: "13", wrong: ["12", "14", "6 1/2"] },
                    { dividend: "3 1/2", divisor: "1/2", equiv: "7 ÷ 1", ans: "7", wrong: ["6", "8", "3 1/2"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Form an equivalent division problem for " + item.dividend + " ÷ " + item.divisor + " by doubling both the dividend and divisor. What is the quotient?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Doubling both yields " + item.equiv + " = " + item.ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 44: Simplifying Decimal Numbers • Comparing Decimal Numbers
    44: (rng, qIndex) => {
        const framings = [
            // Framing 0: Multiples sum (WP #1)
            (r) => {
                const cases = [
                    { m1: 3, a: 4, m2: 3, b: 5, ans: 27, wrong: [24, 30, 25] },
                    { m1: 4, a: 3, m2: 2, b: 6, ans: 24, wrong: [20, 26, 28] },
                    { m1: 3, a: 6, m2: 4, b: 5, ans: 38, wrong: [35, 40, 42] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "What is the sum of the third multiple of " + item.a + " and the third multiple of " + item.b + "?";
                const s = shuffle(r, ["" + item.ans, "" + item.wrong[0], "" + item.wrong[1], "" + item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Third multiple of " + item.a + " is " + (3 * item.a) + "; third multiple of " + item.b + " is " + (3 * item.b) + "; sum = " + item.ans + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 1: Miles to feet conversion (WP #2)
            (r) => {
                const m = [3, 4, 5, 6][randInt(r, 0, 3)];
                const feet = m * 5280;
                const q = "One mile is 5280 feet. How many feet is " + m + " miles?";
                const s = shuffle(r, [feet + " feet", (feet + 1000) + " feet", (feet - 1000) + " feet", (feet + 528) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [m + " × 5280 = " + feet + " feet."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 2: Mountain elevation comparison (WP #3)
            (r) => {
                const e1 = 29035;
                const e2 = 14495;
                const diff = e1 - e2;
                const q = "The summit of Mt. Everest is 29,035 feet above sea level. The summit of Mt. Whitney is 14,495 feet above sea level. Mt. Everest is how many feet taller than Mt. Whitney?";
                const s = shuffle(r, [diff + " feet", (diff + 100) + " feet", (diff - 100) + " feet", (diff + 1000) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["29,035 − 14,495 = " + diff + " feet."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 3: Elevation above miles (WP #4)
            (r) => {
                const elev = 29035;
                const m = 5;
                const mFeet = m * 5280;
                const diff = elev - mFeet;
                const q = "The summit of Mt. Everest is 29,035 feet above sea level. How many feet higher than five miles above sea level is the summit? (1 mile = 5280 feet)";
                const s = shuffle(r, [diff + " feet", (diff + 100) + " feet", (diff - 100) + " feet", (diff + 500) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Five miles = 5 × 5280 = " + mFeet + " ft. Difference = 29,035 − " + mFeet + " = " + diff + " feet."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 4: Unknown in fraction subtraction (WP #5)
            (r) => {
                const q = "Find the unknown number w: 5 3/5 − w = 4 1/5";
                const s = shuffle(r, ["1 2/5", "1 1/5", "1 4/5", "2 2/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 5 3/5 − 4 1/5 = 1 2/5."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 5: Unknown minuend in fraction subtraction (WP #6)
            (r) => {
                const q = "Find the unknown number m: m − 6 4/5 = 1 3/5";
                const s = shuffle(r, ["8 2/5", "7 2/5", "8 1/5", "8 4/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 1 3/5 + 6 4/5 = 7 7/5 = 8 2/5."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 6: Decimal addition unknown addend (WP #7)
            (r) => {
                const q = "Find the unknown number f: 6.74 + 0.2853 + f = 11.0251";
                const s = shuffle(r, ["3.9998", "4.0002", "3.8998", "4.1251"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6.74 + 0.2853 = 7.0253; f = 11.0251 − 7.0253 = 3.9998."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 7: Decimal subtraction unknown subtrahend (WP #8)
            (r) => {
                const q = "Find the unknown number d: 0.4 − d = 0.33";
                const s = shuffle(r, ["0.07", "0.7", "0.17", "0.03"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["d = 0.40 − 0.33 = 0.07."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 8: Height without shoe heels (WP #9)
            (r) => {
                const q = "Wearing shoes, Fiona stands 67 3/4 inches tall. If the heels of her shoes are 1 1/4 inches thick, how tall does Fiona stand without shoes?";
                const s = shuffle(r, ["66 1/2 inches", "66 1/4 inches", "66 3/4 inches", "67 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["67 3/4 − 1 1/4 = 66 2/4 = 66 1/2 inches."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 9: Equivalent division by doubling (WP #10)
            (r) => {
                const q = "Form an equivalent division problem for 8 1/2 ÷ 1/2 by doubling both the dividend and divisor. What is the quotient?";
                const s = shuffle(r, ["17", "16", "18", "8 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Doubling both numbers gives 17 ÷ 1 = 17."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 10: Words to decimal thousandths (WP #11)
            (r) => {
                const cases = [
                    { words: "thirty-two thousandths", ans: "0.032", wrong: ["0.32", "0.0032", "32.000"] },
                    { words: "forty-five thousandths", ans: "0.045", wrong: ["0.45", "0.0045", "45.000"] },
                    { words: "eighty-four thousandths", ans: "0.084", wrong: ["0.84", "0.0084", "84.000"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Write " + item.words + " as a decimal number.";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " = " + item.ans + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 11: Unit fraction of large number (WP #12)
            (r) => {
                const q = "What number is 1/6 of 24,042?";
                const s = shuffle(r, ["4007", "407", "4070", "4700"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["24,042 ÷ 6 = 4007."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 12: Compare decimal numbers (WP #13a)
            (r) => {
                const cases = [
                    { d1: "0.2", d2: "0.15", sign: ">" },
                    { d1: "0.4", d2: "0.40", sign: "=" },
                    { d1: "0.012", d2: "0.12", sign: "<" }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Compare: " + item.d1 + " [?] " + item.d2;
                const correct = item.d1 + " " + item.sign + " " + item.d2;
                const allSigns = [">", "<", "="];
                const dists = allSigns.filter(s => s !== item.sign).map(s => item.d1 + " " + s + " " + item.d2);
                const s = shuffle(r, [correct, dists[0], dists[1], "Cannot be determined"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Compare place values: " + correct + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 13: Compare percents (WP #13b)
            (r) => {
                const q = "Compare: 25% [?] 12.5%";
                const s = shuffle(r, ["25% > 12.5%", "25% < 12.5%", "25% = 12.5%", "Cannot be compared"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["25% is greater than 12.5%."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 14: Expanded notation to standard numeral (WP #14)
            (r) => {
                const a = randInt(r, 4, 9);
                const b = randInt(r, 1, 9);
                const ans = a * 100 + b;
                const q = "Write the standard numeral for (" + a + " × 100) + (" + b + " × 1).";
                const s = shuffle(r, ["" + ans, "" + (a * 10 + b), "" + (a * 100 + b * 10), "" + (ans + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " × 100) + (" + b + " × 1) = " + (a * 100) + " + " + b + " = " + ans + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 15: Percent discount mental math (WP #15)
            (r) => {
                const prices = [36, 48, 60, 72];
                const price = prices[randInt(r, 0, prices.length - 1)];
                const disc = (price * 0.10).toFixed(2);
                const q = "A $" + price + " dress is on sale for 10% off the regular price. What is the amount of the 10% discount?";
                const s = shuffle(r, ["$" + disc, "$" + (parseFloat(disc) + 1).toFixed(2), "$" + (parseFloat(disc) - 1).toFixed(2), "$" + (price - parseFloat(disc)).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10% of $" + price + " = 0.10 × $" + price + " = $" + disc + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 16: How many fractions in whole (WP #16)
            (r) => {
                const q = "How many 5/8s are in 3?";
                const s = shuffle(r, ["4 4/5", "3 5/8", "4 1/5", "5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 ÷ (5/8) = 3 × (8/5) = 24/5 = 4 4/5."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 17: LCM of four numbers (WP #17)
            (r) => {
                const q = "What is the least common multiple of 2, 3, 4, and 6?";
                const s = shuffle(r, ["12", "24", "18", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The multiples of 6 are 6, 12, 18, 24... 12 is divisible by 2, 3, 4, and 6. LCM = 12."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 18: Average of four numbers (WP #21)
            (r) => {
                const q = "Find the average of 26, 37, 42, and 43.";
                const s = shuffle(r, ["37", "36", "38", "35"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(26 + 37 + 42 + 43) ÷ 4 = 148 ÷ 4 = 37."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Framing 19: Closest to 1 (WP #29)
            (r) => {
                const q = "Which of these numbers is closest to 1: 0.1, 0.8, 1.1, or 1.2?";
                const s = shuffle(r, ["1.1", "0.8", "1.2", "0.1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["|1 − 1.1| = 0.1, which is the smallest difference. 1.1 is closest to 1."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 45: Dividing a Decimal Number by a Whole Number
    45: (rng, qIndex) => {
        const framings = [
            // Framing 0: Fraction converted to mixed number and reduced (WP #1)
            (r) => {
                const cases = [
                    { num: 30, den: 8, ans: "3 3/4", wrong: ["3 6/8", "3 1/2", "3 5/8"] },
                    { num: 26, den: 6, ans: "4 1/3", wrong: ["4 2/6", "4 2/3", "4 1/2"] },
                    { num: 35, den: 10, ans: "3 1/2", wrong: ["3 5/10", "3 2/5", "3 3/5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "When a fraction with a numerator of " + item.num + " and a denominator of " + item.den + " is converted to a mixed number and reduced, what is the result?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.num + "/" + item.den + " = " + item.ans + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 1: Body temperature difference (WP #2)
            (r) => {
                const temps = [100.2, 100.6, 101.4, 102.1];
                const temp = temps[randInt(r, 0, temps.length - 1)];
                const diff = (temp - 98.6).toFixed(1);
                const q = "Normal body temperature is 98.6°F. A person with a temperature of " + temp + "°F has a temperature how many degrees above normal?";
                const s = shuffle(r, [diff + "°F", (parseFloat(diff) + 0.5).toFixed(1) + "°F", (parseFloat(diff) - 0.5).toFixed(1) + "°F", (parseFloat(diff) + 1.0).toFixed(1) + "°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [temp + " − 98.6 = " + diff + "°F."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 2: Counting in dozens (WP #3)
            (r) => {
                const cases = [
                    { words: "Four and twenty", n: 24, ans: "2 dozen", wrong: ["1 dozen", "3 dozen", "4 dozen"] },
                    { words: "Six and thirty", n: 36, ans: "3 dozen", wrong: ["2 dozen", "4 dozen", "5 dozen"] },
                    { words: "Eight and forty", n: 48, ans: "4 dozen", wrong: ["3 dozen", "5 dozen", "2 dozen"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = item.words + " is how many dozen?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.n + " ÷ 12 = " + item.ans + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 3: Expanded notation into decimal (WP #4)
            (r) => {
                const q = "Write (5 × 10) + (6 × 1/10) + (7 × 1/1000) in decimal form.";
                const s = shuffle(r, ["50.607", "50.67", "5.607", "50.067"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["50 + 0.6 + 0.007 = 50.607."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 4: Percent to fraction and decimal (WP #5)
            (r) => {
                const q = "Twenty-one percent of the Earth's atmosphere is oxygen. Which choice shows 21% written as a fraction and as a decimal number?";
                const s = shuffle(r, ["21/100 and 0.21", "21/10 and 2.1", "21/1000 and 0.021", "1/21 and 0.21"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["21% = 21/100 = 0.21."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 5: Percent to reduced fraction (WP #6)
            (r) => {
                const q = "Twenty percent is equivalent to what reduced fraction?";
                const s = shuffle(r, ["1/5", "2/10", "1/4", "1/20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["20% = 20/100 = 1/5."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 6: Dividing decimal by single-digit integer (WP #7 / PS a)
            (r) => {
                const cases = [
                    { dividend: "6.35", divisor: 5, ans: "1.27", wrong: ["1.37", "0.127", "1.25"] },
                    { dividend: "4.25", divisor: 5, ans: "0.85", wrong: ["0.75", "0.95", "8.5"] },
                    { dividend: "7.35", divisor: 5, ans: "1.47", wrong: ["1.37", "1.57", "0.147"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the quotient: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 7: Dividing decimal starting with zero (WP #8 / PS c)
            (r) => {
                const cases = [
                    { dividend: "0.5", divisor: 4, ans: "0.125", wrong: ["0.25", "0.0125", "1.25"] },
                    { dividend: "0.6", divisor: 4, ans: "0.15", wrong: ["0.25", "0.015", "1.5"] },
                    { dividend: "0.9", divisor: 6, ans: "0.15", wrong: ["0.25", "0.015", "1.5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Calculate the quotient: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 8: Dividing integer to get decimal quotient (WP #9 / PS d)
            (r) => {
                const cases = [
                    { dividend: "1.0", divisor: 8, ans: "0.125", wrong: ["0.25", "0.0125", "0.8"] },
                    { dividend: "2.0", divisor: 8, ans: "0.25", wrong: ["0.125", "0.5", "0.025"] },
                    { dividend: "3.0", divisor: 8, ans: "0.375", wrong: ["0.25", "0.0375", "0.75"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Divide: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 9: Unknown addend with mixed number (WP #10)
            (r) => {
                const q = "Find the unknown number x: x + 3 5/8 = 9";
                const s = shuffle(r, ["5 3/8", "6 3/8", "5 5/8", "6 5/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = 9 − 3 5/8 = 8 8/8 − 3 5/8 = 5 3/8."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 10: Unknown minuend with mixed numbers (WP #11)
            (r) => {
                const q = "Find the unknown number y: y − 16 3/4 = 4 1/4";
                const s = shuffle(r, ["21", "20 1/2", "21 1/2", "20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["y = 4 1/4 + 16 3/4 = 20 4/4 = 21."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 11: Unknown decimal subtrahend from 1 (WP #12)
            (r) => {
                const q = "Find the unknown number q: 1 − q = 0.235";
                const s = shuffle(r, ["0.765", "0.865", "0.775", "0.76"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["q = 1.000 − 0.235 = 0.765."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 12: Decimal addition with missing addend (WP #13)
            (r) => {
                const q = "Find the unknown number w: 4.26 + 1.2 + w = 9.25";
                const s = shuffle(r, ["3.79", "3.89", "3.69", "4.79"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4.26 + 1.2 = 5.46; w = 9.25 − 5.46 = 3.79."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 13: Area of shaded region from percent (WP #14)
            (r) => {
                const q = "Fifty percent of the area of a rectangle 4 cm long and 2.5 cm wide is shaded. What is the area of the shaded region?";
                const s = shuffle(r, ["5 cm²", "10 cm²", "2.5 cm²", "7.5 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total area = 4 × 2.5 = 10 cm². 50% of 10 = 5 cm²."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 14: Ratio of coins (WP #15)
            (r) => {
                const q = "What is the ratio of the value of a dime to the value of a quarter in lowest terms?";
                const s = shuffle(r, ["2 to 5", "1 to 2", "1 to 5", "4 to 10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dime = 10¢, quarter = 25¢. 10/25 = 2/5 (2 to 5)."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 15: Multiplying decimals (WP #17)
            (r) => {
                const q = "Simplify: 3.7 × 0.25";
                const s = shuffle(r, ["0.925", "9.25", "0.0925", "0.825"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3.7 × 0.25 = 0.925."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 16: LCM of 3, 4, and 8 (WP #18)
            (r) => {
                const q = "What is the least common multiple of 3, 4, and 8?";
                const s = shuffle(r, ["24", "12", "16", "48"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 8: 8, 16, 24... 24 is divisible by 3, 4, and 8. LCM = 24."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 17: Compare powers of decimals (WP #19)
            (r) => {
                const q = "Compare: (0.1)² [?] 0.1";
                const s = shuffle(r, ["(0.1)² < 0.1", "(0.1)² > 0.1", "(0.1)² = 0.1", "Cannot be compared"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(0.1)² = 0.01. Since 0.01 < 0.1, the correct sign is <."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 18: Area of square to perimeter (WP #22)
            (r) => {
                const cases = [
                    { area: 100, side: 10, perim: 40, wrong: [30, 50, 100] },
                    { area: 64, side: 8, perim: 32, wrong: [24, 40, 64] },
                    { area: 36, side: 6, perim: 24, wrong: [18, 30, 36] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "The area of a square is " + item.area + " cm². What is its perimeter?";
                const s = shuffle(r, [item.perim + " cm", item.wrong[0] + " cm", item.wrong[1] + " cm", item.wrong[2] + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side = √" + item.area + " = " + item.side + " cm. Perimeter = 4 × " + item.side + " = " + item.perim + " cm."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Framing 19: Football net yardage with negative number (WP #23)
            (r) => {
                const gain = randInt(r, 4, 8);
                const loss = randInt(r, 7, 12);
                const net = gain - loss;
                const q = "A football player carried the ball twice in a game. One play gained " + gain + " yards and the other play lost " + loss + " yards. What was the player's total net yardage?";
                const s = shuffle(r, [net + " yards", (net - 2) + " yards", (net + 2) + " yards", (gain + loss) + " yards"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [gain + " + (−" + loss + ") = " + net + " yards."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 46: Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000
    46: (rng, qIndex) => {
        const framings = [
            // Framing 0: Passenger jet travel time (WP #2)
            (r) => {
                const cases = [
                    { speed: 600, dist: 3000, time: 5 },
                    { speed: 500, dist: 2500, time: 5 },
                    { speed: 600, dist: 2400, time: 4 },
                    { speed: 550, dist: 2200, time: 4 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "A passenger jet can travel " + item.speed + " miles per hour. How long would it take a jet traveling at that speed to cross " + item.dist + " miles of ocean?";
                const s = shuffle(r, [item.time + " hours", (item.time + 1) + " hours", (item.time - 1) + " hours", (item.time + 2) + " hours"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dist + " ÷ " + item.speed + " = " + item.time + " hours."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 1: Roses per month known (WP #3)
            (r) => {
                const perMonth = randInt(r, 2, 4);
                const dozen = 12;
                const months = Math.floor(dozen / perMonth);
                const q = "José bought Carmen one dozen red roses, " + perMonth + " for each month he had known her. How long had he known her?";
                const s = shuffle(r, [months + " months", (months + 2) + " months", (months - 1) + " months", (months + 4) + " months"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 ÷ " + perMonth + " = " + months + " months."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 2: Area formula A = bh evaluation (WP #4)
            (r) => {
                const b = randInt(r, 6, 12);
                const h = randInt(r, 4, 8);
                const A = b * h;
                const q = "If A = bh, what is A when b = " + b + " and h = " + h + "?";
                const s = shuffle(r, ["" + A, "" + (A + 4), "" + (A - 4), "" + (b + h)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A = " + b + " × " + h + " = " + A + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 3: Commutative Property with prime factors (WP #5)
            (r) => {
                const q = "Use the commutative property of multiplication to rearrange these prime factors in order from least to greatest: 3 · 7 · 2 · 5 · 2 · 3 · 3 · 5.";
                const s = shuffle(r, ["2 · 2 · 3 · 3 · 3 · 5 · 5 · 7", "2 · 3 · 5 · 7 · 2 · 3 · 3 · 5", "7 · 5 · 5 · 3 · 3 · 3 · 2 · 2", "2 · 2 · 3 · 5 · 7 · 3 · 3 · 5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Group identical factors and sort from least to greatest: two 2s, three 3s, two 5s, one 7."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 4: Variable expression evaluation (WP #6)
            (r) => {
                const sVal = randInt(r, 8, 15);
                const ans = 4 * sVal;
                const q = "If s = " + sVal + ", what number does 4s equal?";
                const s = shuffle(r, ["" + ans, "" + (ans + 4), "" + (ans - 4), "" + (sVal + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4s = 4 × " + sVal + " = " + ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 5: Expanded notation of decimal number (WP #7)
            (r) => {
                const q = "Which choice represents 6.25 in expanded notation?";
                const s = shuffle(r, [
                    "(6 × 1) + (2 × 1/10) + (5 × 1/100)",
                    "(6 × 10) + (2 × 1) + (5 × 1/10)",
                    "(6 × 1) + (25 × 1/10)",
                    "(6 × 100) + (2 × 10) + (5 × 1)"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 is in the ones place, 2 in the tenths place, and 5 in the hundredths place."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 6: Percent to fraction and decimal (WP #8)
            (r) => {
                const cases = [
                    { pct: 99, frac: "99/100", dec: "0.99" },
                    { pct: 87, frac: "87/100", dec: "0.87" },
                    { pct: 63, frac: "63/100", dec: "0.63" }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Write " + item.pct + "% as a fraction and as a decimal number.";
                const s = shuffle(r, [item.frac + " and " + item.dec, item.pct + "/10 and " + item.dec, item.frac + " and " + (item.pct / 10).toFixed(1), "1/" + item.pct + " and " + item.dec]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% = " + item.frac + " = " + item.dec + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 7: Dividing decimal with zero in tenths (WP #9)
            (r) => {
                const cases = [
                    { dividend: "0.18", divisor: 12, ans: "0.015", wrong: ["0.15", "0.0015", "1.5"] },
                    { dividend: "0.24", divisor: 15, ans: "0.016", wrong: ["0.16", "0.0016", "1.6"] },
                    { dividend: "0.15", divisor: 6, ans: "0.025", wrong: ["0.25", "0.0025", "2.5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the quotient: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 8: Dividing decimal by 10 (WP #10)
            (r) => {
                const cases = [
                    { val: "12.30", ans: "1.23", wrong: ["123", "0.123", "12.3"] },
                    { val: "45.60", ans: "4.56", wrong: ["456", "0.456", "45.6"] },
                    { val: "87.50", ans: "8.75", wrong: ["875", "0.875", "87.5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Divide by 10: " + item.val + " ÷ 10";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shift the decimal point 1 place to the left: " + item.val + " ÷ 10 = " + item.ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 9: Division equation with unknown dividend (WP #11)
            (r) => {
                const divisor = randInt(r, 15, 25);
                const quotient = randInt(r, 4, 8);
                const ans = divisor * quotient;
                const q = "Find the unknown number w: w ÷ " + divisor + " = " + quotient;
                const s = shuffle(r, ["" + ans, "" + (ans + divisor), "" + (ans - divisor), "" + (quotient * 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + divisor + " × " + quotient + " = " + ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 10: Multiplication equation with decimal (WP #12)
            (r) => {
                const cases = [
                    { coeff: 5, prod: "1.25", ans: "0.25", wrong: ["0.5", "2.5", "0.025"] },
                    { coeff: 4, prod: "1.48", ans: "0.37", wrong: ["0.47", "0.27", "3.7"] },
                    { coeff: 3, prod: "1.05", ans: "0.35", wrong: ["0.45", "0.25", "3.5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the unknown number y: " + item.coeff + "y = " + item.prod;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["y = " + item.prod + " ÷ " + item.coeff + " = " + item.ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 11: Adding mixed numbers with like denominators (WP #15)
            (r) => {
                const q = "Simplify: 8 3/4 + 5 3/4";
                const s = shuffle(r, ["14 1/2", "13 3/4", "14 3/4", "13 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 + 5 = 13; 3/4 + 3/4 = 6/4 = 1 2/4 = 1 1/2; 13 + 1 1/2 = 14 1/2."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 12: Multiplying fractions (WP #16)
            (r) => {
                const q = "Simplify: 5/3 × 5/4";
                const s = shuffle(r, ["2 1/12", "1 1/12", "25/12", "1 5/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(5 × 5) / (3 × 4) = 25/12 = 2 1/12."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 13: Equivalent fraction with denominator 20 (WP #17, 18)
            (r) => {
                const cases = [
                    { f: "3/4", ans: "15/20", wrong: ["12/20", "16/20", "18/20"] },
                    { f: "3/5", ans: "12/20", wrong: ["15/20", "9/20", "10/20"] },
                    { f: "7/10", ans: "14/20", wrong: ["12/20", "17/20", "15/20"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Multiply " + item.f + " by a fraction equal to 1 to complete the equivalent fraction with denominator 20: " + item.f + " = ?/20.";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.f + " = " + item.ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 14: Average test score (WP #19)
            (r) => {
                const q = "Bob's scores on his first five tests were 18, 20, 18, 20, and 20. What was his average score?";
                const s = shuffle(r, ["19.2", "19.0", "18.8", "19.5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(18 + 20 + 18 + 20 + 20) ÷ 5 = 96 ÷ 5 = 19.2."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 15: Bicycle tire circumference (WP #20)
            (r) => {
                const cases = [
                    { diam: 20, circ: "62.8", wrong: ["31.4", "60.8", "125.6"] },
                    { diam: 24, circ: "75.36", wrong: ["37.68", "72.48", "150.72"] },
                    { diam: 26, circ: "81.64", wrong: ["40.82", "78.50", "163.28"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "A bicycle tire is " + item.diam + " inches in diameter. What is the circumference of the tire? (Use 3.14 for π.)";
                const s = shuffle(r, [item.circ + " inches", item.wrong[0] + " inches", item.wrong[1] + " inches", item.wrong[2] + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["C = πd = 3.14 × " + item.diam + " = " + item.circ + " inches."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 16: Common factors of two numbers (WP #21)
            (r) => {
                const q = "Which of the following lists all the common factors of 20 and 30?";
                const s = shuffle(r, ["1, 2, 5, 10", "1, 2, 4, 5, 10", "2, 5, 10", "1, 10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Factors of 20: 1, 2, 4, 5, 10, 20. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Common: 1, 2, 5, 10."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 17: Mental multiplication by 10 (WP #22)
            (r) => {
                const cases = [
                    { val: "6.25", ans: "62.5", wrong: ["6.250", "625", "0.625"] },
                    { val: "3.75", ans: "37.5", wrong: ["3.750", "375", "0.375"] },
                    { val: "8.45", ans: "84.5", wrong: ["8.450", "845", "0.845"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Mentally calculate: " + item.val + " × 10";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shift the decimal point 1 place to the right: " + item.val + " × 10 = " + item.ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 18: Percent of whole number (WP #24)
            (r) => {
                const cases = [
                    { pct: 90, tot: 40, ans: 36 },
                    { pct: 80, tot: 50, ans: 40 },
                    { pct: 70, tot: 60, ans: 42 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Shelly answered " + item.pct + "% of the " + item.tot + " questions correctly. What number is " + item.pct + "% of " + item.tot + "?";
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 2), "" + (item.ans - 2), "" + (item.tot - item.ans)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "% of " + item.tot + " = 0." + item.pct + " × " + item.tot + " = " + item.ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            },
            // Framing 19: Planetary orbit comparison (WP #25)
            (r) => {
                const mars = 687;
                const earth = 365;
                const diff = mars - earth;
                const q = "Mars takes 687 Earth days to orbit the Sun, and Earth takes 365 days. Mars takes how many more Earth days than Earth to orbit the Sun?";
                const s = shuffle(r, [diff + " days", (diff + 10) + " days", (diff - 10) + " days", (diff + 100) + " days"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [mars + " − " + earth + " = " + diff + " Earth days."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 47: Circumference • Pi (π)
    47: (rng, qIndex) => {
        const framings = [
            // Framing 0: Nth positive odd number (WP #1)
            (r) => {
                const cases = [
                    { nth: "tenth", n: 10, ans: 19 },
                    { nth: "twelfth", n: 12, ans: 23 },
                    { nth: "fifteenth", n: 15, ans: 29 },
                    { nth: "eighth", n: 8, ans: 15 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "The first positive odd number is 1, and the second is 3. What is the " + item.nth + " positive odd number?";
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 2), "" + (item.ans - 2), "" + (2 * item.n)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The nth odd number is 2n − 1. For n = " + item.n + ", 2(" + item.n + ") − 1 = " + item.ans + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 1: Circumference formula with radius (PS b, c)
            (r) => {
                const cases = [
                    { r: 3, ans: "18.84", wrong: ["9.42", "28.26", "12.56"] },
                    { r: 5, ans: "31.4", wrong: ["15.7", "62.8", "25.4"] },
                    { r: 4, ans: "25.12", wrong: ["12.56", "50.24", "20.12"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the circumference of a circle with a radius of " + item.r + " inches. (Use 3.14 for π.)";
                const s = shuffle(r, [item.ans + " inches", item.wrong[0] + " inches", item.wrong[1] + " inches", item.wrong[2] + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["C = 2πr = 2 × 3.14 × " + item.r + " = " + item.ans + " inches."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 2: Circumference formula with diameter (PS d)
            (r) => {
                const cases = [
                    { d: 10, ans: "31.4", wrong: ["15.7", "62.8", "3.14"] },
                    { d: 20, ans: "62.8", wrong: ["31.4", "125.6", "6.28"] },
                    { d: 12, ans: "37.68", wrong: ["18.84", "75.36", "36.28"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the circumference of a circle with a diameter of " + item.d + " cm. (Use 3.14 for π.)";
                const s = shuffle(r, [item.ans + " cm", item.wrong[0] + " cm", item.wrong[1] + " cm", item.wrong[2] + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["C = πd = 3.14 × " + item.d + " = " + item.ans + " cm."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 3: Circumference with fraction 22/7 for π
            (r) => {
                const cases = [
                    { d: 7, ans: 22 },
                    { d: 14, ans: 44 },
                    { d: 21, ans: 66 },
                    { d: 28, ans: 88 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the circumference of a circle with a diameter of " + item.d + " inches using 22/7 for π.";
                const s = shuffle(r, [item.ans + " inches", (item.ans + 7) + " inches", (item.ans - 7) + " inches", (item.ans + 14) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["C = (22/7) × " + item.d + " = " + item.ans + " inches."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 4: Radius given diameter
            (r) => {
                const diam = randInt(r, 8, 20) * 2;
                const rad = diam / 2;
                const q = "If the diameter of a circle is " + diam + " inches, what is the radius of the circle?";
                const s = shuffle(r, [rad + " inches", (rad + 2) + " inches", (rad - 2) + " inches", diam + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = diameter ÷ 2 = " + diam + " ÷ 2 = " + rad + " inches."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 5: Diameter given radius
            (r) => {
                const rad = randInt(r, 5, 15);
                const diam = rad * 2;
                const q = "If the radius of a circle is " + rad + " cm, what is the diameter of the circle?";
                const s = shuffle(r, [diam + " cm", (diam + 4) + " cm", (diam - 4) + " cm", rad + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = 2 × radius = 2 × " + rad + " = " + diam + " cm."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 6: Definition of Pi (π)
            (r) => {
                const q = "Which mathematical constant is defined as the ratio of the circumference of any circle to its diameter?";
                const s = shuffle(r, ["Pi (π)", "Radius", "Chord", "Diameter"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Pi (π) is the constant ratio of circumference to diameter for any circle: C/d = π."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 7: Average of two numbers to sum (WP #1)
            (r) => {
                const avg = randInt(r, 10, 25);
                const sum = avg * 2;
                const q = "The average of two numbers is " + avg + ". What is the sum of the two numbers?";
                const s = shuffle(r, ["" + sum, "" + (sum + 4), "" + (sum - 4), "" + avg]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = average × 2 = " + avg + " × 2 = " + sum + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 8: Cost of gasoline with tenths of cent (WP #2)
            (r) => {
                const price = "2.279";
                const gal = 10;
                const cost = "22.79";
                const q = "What is the cost of " + gal + ".0 gallons of gasoline priced at $" + price + " per gallon?";
                const s = shuffle(r, ["$" + cost, "$227.90", "$2.28", "$24.79"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [gal + " × $" + price + " = $" + cost + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 9: Movie elapsed time (WP #3)
            (r) => {
                const q = "The movie started at 11:45 a.m. and ended at 1:20 p.m. How many hours and minutes long was the movie?";
                const s = shuffle(r, ["1 hour 35 minutes", "1 hour 45 minutes", "2 hours 15 minutes", "1 hour 25 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From 11:45 a.m. to 12:00 p.m. is 15 min; from 12:00 p.m. to 1:20 p.m. is 1 hr 20 min. Total = 1 hr 35 min."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 10: Classify unequal number (WP #4)
            (r) => {
                const q = "Three of the numbers below are equal. Which number is NOT equal to the others?";
                const s = shuffle(r, ["0.2", "1/2", "0.5", "50%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 0.5 = 50%. 0.2 equals 1/5 (or 20%), so it is not equal."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 11: Ordering decimal numbers (WP #5)
            (r) => {
                const q = "Which choice shows these numbers arranged in order from least to greatest: 0.12, 0.012, 1.2, 0.125?";
                const s = shuffle(r, [
                    "0.012, 0.12, 0.125, 1.2",
                    "0.12, 0.012, 0.125, 1.2",
                    "0.012, 0.125, 0.12, 1.2",
                    "1.2, 0.125, 0.12, 0.012"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Comparing tenths and hundredths: 0.012 < 0.120 < 0.125 < 1.200."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 12: Decimal subtraction (WP #6)
            (r) => {
                const cases = [
                    { a: "4.3", b: "0.28", ans: "4.02", wrong: ["4.12", "4.08", "3.92"] },
                    { a: "5.4", b: "0.36", ans: "5.04", wrong: ["5.14", "5.08", "4.94"] },
                    { a: "6.2", b: "0.45", ans: "5.75", wrong: ["5.85", "5.65", "6.25"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the difference: " + item.a + " − " + item.b;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " − " + item.b + " = " + item.ans + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 13: Square of small decimal (WP #7)
            (r) => {
                const cases = [
                    { val: "0.12", ans: "0.0144", wrong: ["0.144", "0.024", "0.012"] },
                    { val: "0.04", ans: "0.0016", wrong: ["0.016", "0.16", "0.00016"] },
                    { val: "0.05", ans: "0.0025", wrong: ["0.025", "0.25", "0.00025"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: (" + item.val + ")²";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.val + " × " + item.val + " = " + item.ans + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 14: Expanded notation to decimal (WP #8)
            (r) => {
                const q = "Write (7 × 10) + (8 × 1/10) in decimal form.";
                const s = shuffle(r, ["70.8", "7.8", "78.0", "70.08"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["70 + 0.8 = 70.8."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 15: Dividing decimal by integer (WP #9)
            (r) => {
                const cases = [
                    { dividend: "0.144", divisor: 6, ans: "0.024", wrong: ["0.24", "0.0024", "2.4"] },
                    { dividend: "0.18", divisor: 9, ans: "0.02", wrong: ["0.2", "0.002", "2.0"] },
                    { dividend: "0.25", divisor: 5, ans: "0.05", wrong: ["0.5", "0.005", "5.0"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Divide: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 16: Subtracting mixed number from whole number (WP #13)
            (r) => {
                const cases = [
                    { whole: 6, w: 1, n: 4, d: 5, ans: "4 1/5", wrong: ["5 1/5", "4 4/5", "5 4/5"] },
                    { whole: 5, w: 2, n: 1, d: 3, ans: "2 2/3", wrong: ["3 2/3", "2 1/3", "3 1/3"] },
                    { whole: 7, w: 3, n: 3, d: 4, ans: "3 1/4", wrong: ["4 1/4", "3 3/4", "4 3/4"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: " + item.whole + " − " + item.w + " " + item.n + "/" + item.d;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.whole + " − " + item.w + " " + item.n + "/" + item.d + " = " + item.ans + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 17: Multiplying fractions with cancellation (WP #16)
            (r) => {
                const cases = [
                    { a: 3, b: 8, c: 4, d: 9, ans: "1/6", wrong: ["12/72", "1/4", "1/3"] },
                    { a: 2, b: 5, c: 5, d: 8, ans: "1/4", wrong: ["10/40", "1/2", "2/8"] },
                    { a: 3, b: 4, c: 2, d: 3, ans: "1/2", wrong: ["6/12", "1/3", "3/8"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify and reduce: " + item.a + "/" + item.b + " × " + item.c + "/" + item.d;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cancel common factors: (" + item.a + " × " + item.c + ") / (" + item.b + " × " + item.d + ") = " + item.ans + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 18: Soup can label circumference (WP #22)
            (r) => {
                const d = [7, 8, 10][randInt(r, 0, 2)];
                const circ = (d * 3.14).toFixed(2);
                const q = "A circular can has a diameter of " + d + " cm. About how long must a label be to wrap once around the can? (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " cm", (parseFloat(circ) + 2).toFixed(2) + " cm", (parseFloat(circ) - 2).toFixed(2) + " cm", (d * 2).toFixed(2) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["C = πd = 3.14 × " + d + " = " + circ + " cm."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Framing 19: Mental multiplication by 100 (WP #22)
            (r) => {
                const cases = [
                    { val: "0.375", ans: "37.5", wrong: ["3.75", "375", "0.0375"] },
                    { val: "0.425", ans: "42.5", wrong: ["4.25", "425", "0.0425"] },
                    { val: "0.185", ans: "18.5", wrong: ["1.85", "185", "0.0185"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Mentally calculate: " + item.val + " × 100";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shift the decimal point 2 places to the right: " + item.val + " × 100 = " + item.ans + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 48: Subtracting Mixed Numbers with Regrouping, Part 1
    48: (rng, qIndex) => {
        const framings = [
            // Framing 0: Subtracting mixed number from whole number (PS a-d / WP #13)
            (r) => {
                const cases = [
                    { whole: 5, w: 1, n: 2, d: 3, ans: "3 1/3", wrong: ["4 1/3", "3 2/3", "4 2/3"] },
                    { whole: 6, w: 2, n: 3, d: 4, ans: "3 1/4", wrong: ["4 1/4", "3 3/4", "4 3/4"] },
                    { whole: 4, w: 1, n: 3, d: 8, ans: "2 5/8", wrong: ["3 5/8", "2 3/8", "3 3/8"] },
                    { whole: 7, w: 3, n: 4, d: 5, ans: "3 1/5", wrong: ["4 1/5", "3 4/5", "4 4/5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: " + item.whole + " − " + item.w + " " + item.n + "/" + item.d;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Regroup " + item.whole + " as " + (item.whole - 1) + " " + item.d + "/" + item.d + ", then subtract " + item.w + " " + item.n + "/" + item.d + " = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 1: Difference between sum and product of decimals (WP #1)
            (r) => {
                const q = "When the product of 0.2 and 0.3 is subtracted from the sum of 0.2 and 0.3, what is the difference?";
                const s = shuffle(r, ["0.44", "0.56", "0.06", "0.50"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 0.2 + 0.3 = 0.5. Product = 0.2 × 0.3 = 0.06. Difference = 0.50 − 0.06 = 0.44."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 2: Fraction of dollar in cents (WP #2)
            (r) => {
                const cases = [
                    { n: 4, d: 5, ans: "80 cents", wrong: ["75 cents", "85 cents", "60 cents"] },
                    { n: 3, d: 4, ans: "75 cents", wrong: ["70 cents", "80 cents", "65 cents"] },
                    { n: 7, d: 10, ans: "70 cents", wrong: ["65 cents", "75 cents", "80 cents"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = item.n + "/" + item.d + " of a dollar is how many cents?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 dollar = 100 cents. (" + item.n + "/" + item.d + ") × 100 = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 3: Area of rectangular jigsaw puzzle (WP #3)
            (r) => {
                const len = 2.6;
                const wid = 2.2;
                const area = (len * wid).toFixed(2);
                const q = "A rectangular jigsaw puzzle is " + len + " inches long and " + wid + " inches wide. What is the area of the puzzle in square inches?";
                const s = shuffle(r, [area + " sq. in.", "5.20 sq. in.", "4.80 sq. in.", "9.60 sq. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [len + " × " + wid + " = " + area + " square inches."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 4: Perimeter of puzzle with decimal sides (WP #4)
            (r) => {
                const len = 2.6;
                const wid = 2.2;
                const perim = ((len + wid) * 2).toFixed(1);
                const q = "Find the perimeter of a rectangle that is " + len + " inches long and " + wid + " inches wide.";
                const s = shuffle(r, [perim + " inches", "4.8 inches", "10.2 inches", "5.7 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (" + len + " + " + wid + ") = " + perim + " inches."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 5: Comparing decimals and percents (WP #5)
            (r) => {
                const q = "Compare: 0.31 [?] 0.301";
                const s = shuffle(r, ["0.31 > 0.301", "0.31 < 0.301", "0.31 = 0.301", "Cannot be compared"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.310 is greater than 0.301, so 0.31 > 0.301."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 6: Sum of three decimals with integer (WP #6)
            (r) => {
                const a = "0.67";
                const b = 2;
                const c = "1.33";
                const q = "Simplify: " + a + " + " + b + " + " + c;
                const s = shuffle(r, ["4", "3.9", "4.1", "3.0"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.67 + 1.33 = 2.00; 2.00 + 2 = 4."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 7: Product of integer and decimal (WP #7)
            (r) => {
                const cases = [
                    { w: 12, dec: "0.25", ans: "3", wrong: ["30", "0.3", "4"] },
                    { w: 16, dec: "0.5", ans: "8", wrong: ["80", "0.8", "6"] },
                    { w: 20, dec: "0.15", ans: "3", wrong: ["30", "0.3", "5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the product: " + item.w + " × " + item.dec;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.w + " × " + item.dec + " = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 8: Dividing decimal by decimal hundredths (WP #8)
            (r) => {
                const cases = [
                    { dividend: "3.5", divisor: "0.07", ans: "50", wrong: ["5", "500", "0.5"] },
                    { dividend: "2.4", divisor: "0.06", ans: "40", wrong: ["4", "400", "0.4"] },
                    { dividend: "4.5", divisor: "0.09", ans: "50", wrong: ["5", "500", "0.5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the quotient: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Move decimal 2 places: " + (parseFloat(item.dividend) * 100) + " ÷ " + (parseFloat(item.divisor) * 100) + " = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 9: Dividing integer by decimal tenths (WP #9)
            (r) => {
                const cases = [
                    { dividend: 12, divisor: "0.5", ans: "24", wrong: ["6", "60", "2.4"] },
                    { dividend: 15, divisor: "0.5", ans: "30", wrong: ["7.5", "75", "3.0"] },
                    { dividend: 18, divisor: "0.5", ans: "36", wrong: ["9", "90", "3.6"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Divide: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + (item.dividend * 2) + " = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 10: Dividing decimal by integer (WP #10)
            (r) => {
                const cases = [
                    { dividend: "0.14", divisor: 8, ans: "0.0175", wrong: ["0.175", "0.00175", "1.75"] },
                    { dividend: "0.18", divisor: 8, ans: "0.0225", wrong: ["0.225", "0.00225", "2.25"] },
                    { dividend: "0.22", divisor: 8, ans: "0.0275", wrong: ["0.275", "0.00275", "2.75"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Calculate the quotient: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 11: Product of two small decimals (WP #11)
            (r) => {
                const cases = [
                    { a: "0.012", b: "1.5", ans: "0.018", wrong: ["0.18", "0.0018", "1.8"] },
                    { a: "0.015", b: "1.2", ans: "0.018", wrong: ["0.18", "0.0018", "1.8"] },
                    { a: "0.025", b: "1.4", ans: "0.035", wrong: ["0.35", "0.0035", "3.5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: (" + item.a + ")(" + item.b + ")";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " × " + item.b + " = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 12: Unknown minuend in mixed number subtraction (WP #12)
            (r) => {
                const q = "Find the unknown number n: n − 6 1/8 = 4 3/8";
                const s = shuffle(r, ["10 1/2", "10 4/8", "9 1/2", "11 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = 4 3/8 + 6 1/8 = 10 4/8 = 10 1/2."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 13: Unknown numerator in equivalent fraction (WP #13)
            (r) => {
                const cases = [
                    { a: 4, b: 5, newDenom: 100, ans: 80, wrong: [20, 75, 85] },
                    { a: 3, b: 4, newDenom: 100, ans: 75, wrong: [25, 70, 80] },
                    { a: 7, b: 10, newDenom: 100, ans: 70, wrong: [60, 75, 80] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the unknown number x: " + item.a + "/" + item.b + " = x/" + item.newDenom;
                const s = shuffle(r, ["" + item.ans, "" + item.wrong[0], "" + item.wrong[1], "" + item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = (" + item.a + " × " + item.newDenom + ") ÷ " + item.b + " = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 14: Unknown minuend with integer (WP #14)
            (r) => {
                const q = "Find the unknown number m: m − 7 = 1.37";
                const s = shuffle(r, ["8.37", "7.37", "6.63", "8.63"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 1.37 + 7 = 8.37."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 15: Words to decimal number (WP #16)
            (r) => {
                const cases = [
                    { words: "one and twelve thousandths", ans: "1.012", wrong: ["1.12", "1.0012", "112"] },
                    { words: "two and fifteen thousandths", ans: "2.015", wrong: ["2.15", "2.0015", "215"] },
                    { words: "three and eight thousandths", ans: "3.008", wrong: ["3.08", "3.8", "308"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Write the decimal number for " + item.words + ".";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " = " + item.ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 16: Adding mixed numbers with like denominators (WP #17)
            (r) => {
                const q = "Simplify: 5 7/10 + 4 9/10";
                const s = shuffle(r, ["10 3/5", "10 6/10", "9 16/10", "11 3/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 + 4 = 9; 7/10 + 9/10 = 16/10 = 1 6/10 = 1 3/5; 9 + 1 3/5 = 10 3/5."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 17: Multiplying fractions (WP #18)
            (r) => {
                const q = "Multiply: 5/2 × 5/3";
                const s = shuffle(r, ["4 1/6", "25/6", "3 5/6", "4 1/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(5 × 5) / (2 × 3) = 25/6 = 4 1/6."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 18: Percent of money amount (WP #19)
            (r) => {
                const q = "How much money is 40% of $25.00?";
                const s = shuffle(r, ["$10.00", "$8.00", "$12.00", "$15.00"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.40 × $25.00 = $10.00."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Framing 19: Fraction of day sleeping (WP #20)
            (r) => {
                const hours = [6, 8, 9][randInt(r, 0, 2)];
                const cases = {
                    6: { frac: "1/4", wrong: ["1/3", "1/6", "1/2"] },
                    8: { frac: "1/3", wrong: ["1/4", "1/8", "1/2"] },
                    9: { frac: "3/8", wrong: ["1/3", "3/10", "1/4"] }
                };
                const item = cases[hours];
                const q = "There are 24 hours in a day. If James sleeps " + hours + " hours each night, what fraction of a day does he sleep? (Write as a reduced fraction.)";
                const s = shuffle(r, [item.frac, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [hours + "/24 reduces to " + item.frac + " of a day."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 49: Dividing by a Decimal Number
    49: (rng, qIndex) => {
        const framings = [
            // Framing 0: Sum of first n positive odd numbers = n² (WP #1)
            (r) => {
                const cases = [
                    { n: 10, ans: 100 },
                    { n: 8, ans: 64 },
                    { n: 12, ans: 144 },
                    { n: 7, ans: 49 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "The sum of the first three positive odd numbers is 3² = 9. What is the sum of the first " + item.n + " positive odd numbers?";
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 10), "" + (item.ans - 10), "" + (item.n * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of the first n positive odd numbers is n². " + item.n + "² = " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 1: Stack of CD cases dividing by fraction (WP #2)
            (r) => {
                const cases = [
                    { thick: "3/8", h: 6, ans: 16 },
                    { thick: "1/2", h: 8, ans: 16 },
                    { thick: "3/4", h: 9, ans: 12 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Jack keeps his CDs stacked in plastic cases " + item.thick + " inch thick. How many cases are in a stack " + item.h + " inches tall?";
                const s = shuffle(r, [item.ans + " cases", (item.ans + 4) + " cases", (item.ans - 4) + " cases", (item.h * 2) + " cases"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.h + " ÷ " + item.thick + " = " + item.ans + " cases."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 2: Timed sports rounds (WP #3)
            (r) => {
                const q = "A game has 12 three-minute rounds. If the players stop after two minutes of the twelfth round, for how many total minutes did they play?";
                const s = shuffle(r, ["35 minutes", "36 minutes", "34 minutes", "33 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["11 full rounds = 11 × 3 = 33 minutes. 33 + 2 = 35 minutes."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 3: Comparing decimals of differing lengths (WP #4)
            (r) => {
                const cases = [
                    { d1: "3.4", d2: "3.389", sign: ">" },
                    { d1: "0.60", d2: "0.600", sign: "=" },
                    { d1: "2.499", d2: "2.5", sign: "<" }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Compare: " + item.d1 + " [?] " + item.d2;
                const correct = item.d1 + " " + item.sign + " " + item.d2;
                const allSigns = [">", "<", "="];
                const dists = allSigns.filter(s => s !== item.sign).map(s => item.d1 + " " + s + " " + item.d2);
                const s = shuffle(r, [correct, dists[0], dists[1], "Cannot be determined"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Compare place values: " + correct + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 4: Unknown addend in three-number sum (WP #5)
            (r) => {
                const q = "Find the unknown number w: 7.25 + 2 + w = 21";
                const s = shuffle(r, ["11.75", "11.25", "12.75", "10.75"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7.25 + 2 = 9.25; w = 21 − 9.25 = 11.75."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 5: Unknown subtrahend with mixed number (WP #6)
            (r) => {
                const q = "Find the unknown number x: 6 − x = 1 7/8";
                const s = shuffle(r, ["4 1/8", "5 1/8", "4 7/8", "5 7/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = 6 − 1 7/8 = 5 8/8 − 1 7/8 = 4 1/8."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 6: Unknown factor with decimal coefficient (WP #7)
            (r) => {
                const cases = [
                    { coeff: "0.4", b: 7, ans: "17.5", wrong: ["18.5", "16.5", "28"] },
                    { coeff: "0.5", b: 15, ans: "30", wrong: ["7.5", "25", "35"] },
                    { coeff: "0.8", b: 12, ans: "15", wrong: ["9.6", "16", "20"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the unknown number w: " + item.coeff + "w = " + item.b;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + item.b + " ÷ " + item.coeff + " = " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 7: Total cost of book with sales tax (WP #9)
            (r) => {
                const price = 20;
                const rate = 7;
                const tax = (price * rate / 100).toFixed(2);
                const total = (price + parseFloat(tax)).toFixed(2);
                const q = "A book cost $" + price + ".00. The sales-tax rate was " + rate + "%. What was the total cost of the book including sales tax?";
                const s = shuffle(r, ["$" + total, "$" + (parseFloat(total) + 1).toFixed(2), "$" + (parseFloat(total) - 1).toFixed(2), "$" + (price + 7).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = $" + price + " × 0.07 = $" + tax + ". Total = $" + total + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 8: Subtraction from 1 with decimal (WP #10)
            (r) => {
                const cases = [
                    { dec: "0.97", ans: "0.03", wrong: ["0.3", "0.003", "0.13"] },
                    { dec: "0.85", ans: "0.15", wrong: ["0.25", "0.015", "0.05"] },
                    { dec: "0.64", ans: "0.36", wrong: ["0.46", "0.036", "0.26"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: 1 − " + item.dec;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.00 − " + item.dec + " = " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 9: Dividing decimal by decimal hundredths (WP #11 / PS a-d)
            (r) => {
                const cases = [
                    { dividend: "7.2", divisor: "0.12", ans: "60", wrong: ["6", "600", "0.6"] },
                    { dividend: "14.4", divisor: "0.6", ans: "24", wrong: ["2.4", "240", "0.24"] },
                    { dividend: "2.4", divisor: "0.08", ans: "30", wrong: ["3", "300", "0.3"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the quotient: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 10: Dividing integer by decimal tenths (WP #12)
            (r) => {
                const cases = [
                    { dividend: 7, divisor: "0.4", ans: "17.5", wrong: ["18.5", "16.5", "2.8"] },
                    { dividend: 9, divisor: "0.2", ans: "45", wrong: ["4.5", "18", "450"] },
                    { dividend: 6, divisor: "0.5", ans: "12", wrong: ["3", "30", "1.2"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Divide: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 11: Dividing decimal by integer (WP #13)
            (r) => {
                const cases = [
                    { dividend: "0.138", divisor: 6, ans: "0.023", wrong: ["0.23", "0.0023", "2.3"] },
                    { dividend: "0.144", divisor: 8, ans: "0.018", wrong: ["0.18", "0.0018", "1.8"] },
                    { dividend: "0.175", divisor: 5, ans: "0.035", wrong: ["0.35", "0.0035", "3.5"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Calculate: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 12: Product of two decimals (WP #14)
            (r) => {
                const cases = [
                    { a: "3.75", b: "2.4", ans: "9", wrong: ["9.2", "8.8", "90"] },
                    { a: "2.5", b: "1.6", ans: "4", wrong: ["4.2", "3.8", "40"] },
                    { a: "1.25", b: "3.2", ans: "4", wrong: ["4.2", "3.8", "40"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Simplify: (" + item.a + ")(" + item.b + ")";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " × " + item.b + " = " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 13: Place value digit identification (WP #16)
            (r) => {
                const q = "Which digit in 4.637 is in the same place as the 2 in 85.21?";
                const s = shuffle(r, ["6 (tenths place)", "3 (hundredths place)", "7 (thousandths place)", "4 (ones place)"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 in 85.21 is in the tenths place. In 4.637, 6 is in the tenths place."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 14: Square centimeters in square meter (WP #17)
            (r) => {
                const q = "One meter equals 100 centimeters. How many square centimeters equal one square meter?";
                const s = shuffle(r, ["10,000 sq. cm", "1,000 sq. cm", "100 sq. cm", "100,000 sq. cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 m² = 100 cm × 100 cm = 10,000 sq. cm."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 15: LCM of two numbers (WP #18)
            (r) => {
                const cases = [
                    { a: 6, b: 9, ans: "18", wrong: ["36", "54", "12"] },
                    { a: 8, b: 12, ans: "24", wrong: ["48", "96", "16"] },
                    { a: 4, b: 10, ans: "20", wrong: ["40", "30", "10"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "What is the least common multiple of " + item.a + " and " + item.b + "?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The least common multiple of " + item.a + " and " + item.b + " is " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 16: Adding mixed numbers with like denominators (WP #19)
            (r) => {
                const q = "Simplify: 6 5/8 + 4 5/8";
                const s = shuffle(r, ["11 1/4", "10 5/8", "11 3/8", "10 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 + 4 = 10; 5/8 + 5/8 = 10/8 = 1 2/8 = 1 1/4; 10 + 1 1/4 = 11 1/4."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 17: Soup can label circumference using 22/7 (WP #22)
            (r) => {
                const cases = [
                    { d: 7, ans: 22 },
                    { d: 14, ans: 44 },
                    { d: 21, ans: 66 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "The diameter of a soup can is about " + item.d + " cm. About how many centimeters long must the label be to go all the way around the soup can? (Use 22/7 for π.)";
                const s = shuffle(r, [item.ans + " cm", (item.ans + 4) + " cm", (item.ans - 4) + " cm", (item.d * 2) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["C = πd = (22/7) × " + item.d + " = " + item.ans + " cm."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 18: Average of three decimals (WP #23)
            (r) => {
                const a = "2.4";
                const b = "6.3";
                const c = "5.7";
                const q = "Find the average of " + a + ", " + b + ", and " + c + ".";
                const s = shuffle(r, ["4.8", "4.6", "5.0", "4.5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(2.4 + 6.3 + 5.7) ÷ 3 = 14.4 ÷ 3 = 4.8."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Framing 19: Quarters in dollar amount (WP #24)
            (r) => {
                const cases = [
                    { amt: "8.75", ans: "35 quarters" },
                    { amt: "6.50", ans: "26 quarters" },
                    { amt: "5.25", ans: "21 quarters" }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the number of quarters in $" + item.amt + " by dividing " + item.amt + " by 0.25.";
                const count = parseInt(item.ans, 10);
                const s = shuffle(r, [item.ans, (count + 4) + " quarters", (count - 4) + " quarters", (count + 2) + " quarters"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.amt + " ÷ 0.25 = " + item.ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 50: Decimal Number Line (Tenths) • Dividing by a Fraction
    50: (rng, qIndex) => {
        const framings = [
            // Framing 0: Decimal number line value (WP #25 / PS a-f)
            (r) => {
                const start = randInt(r, 3, 7);
                const tenths = randInt(r, 2, 8);
                const ans = (start + tenths / 10).toFixed(1);
                const q = "On a number line divided into tenths between " + start + " and " + (start + 1) + ", what decimal number is " + tenths + " tenths past " + start + "?";
                const s = shuffle(r, [ans, (parseFloat(ans) + 0.2).toFixed(1), (parseFloat(ans) - 0.2).toFixed(1), (start + tenths).toFixed(1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [start + " + " + (tenths / 10).toFixed(1) + " = " + ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 1: Dividing whole number by fraction (PS g / WP #2)
            (r) => {
                const cases = [
                    { w: 6, n: 3, d: 4, ans: 8 },
                    { w: 4, n: 2, d: 3, ans: 6 },
                    { w: 5, n: 1, d: 2, ans: 10 },
                    { w: 6, n: 3, d: 8, ans: 16 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the quotient: " + item.w + " ÷ " + item.n + "/" + item.d;
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 2), "" + (item.ans - 2), "" + (item.w * item.n)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.w + " ÷ " + item.n + "/" + item.d + " = " + item.w + " × " + item.d + "/" + item.n + " = " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 2: Dividing fraction by fraction (PS)
            (r) => {
                const cases = [
                    { n1: 3, d1: 4, n2: 1, d2: 4, ans: 3 },
                    { n1: 2, d1: 3, n2: 1, d2: 6, ans: 4 },
                    { n1: 5, d1: 8, n2: 1, d2: 8, ans: 5 },
                    { n1: 4, d1: 5, n2: 2, d2: 5, ans: 2 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the quotient: " + item.n1 + "/" + item.d1 + " ÷ " + item.n2 + "/" + item.d2;
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 1), "" + (item.ans + 2), "" + (item.ans - 1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + item.n1 + "/" + item.d1 + ") × (" + item.d2 + "/" + item.n2 + ") = " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 3: Rename fraction with common denominator and subtract (WP #28)
            (r) => {
                const q = "Rename 2/3 as a fraction with 6 as the denominator. Then subtract the renamed fraction from 5/6. Reduce the answer.";
                const s = shuffle(r, ["1/6", "1/3", "1/2", "2/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/3 = 4/6; 5/6 − 4/6 = 1/6."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 4: Multiples difference (WP #1)
            (r) => {
                const q = "When the third multiple of 8 is subtracted from the fourth multiple of 6, what is the difference?";
                const s = shuffle(r, ["0", "2", "4", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3rd multiple of 8 = 24. 4th multiple of 6 = 24. 24 − 24 = 0."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 5: Round trip distance (WP #2)
            (r) => {
                const dist = [3.5, 4.2, 5.5][randInt(r, 0, 2)];
                const rt = (dist * 2).toFixed(1);
                const q = "From Mona's home to school is " + dist + " miles. How far does Mona travel riding from home to school and back home?";
                const s = shuffle(r, [rt + " miles", (parseFloat(rt) + 1).toFixed(1) + " miles", (parseFloat(rt) - 1).toFixed(1) + " miles", dist + " miles"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dist + " × 2 = " + rt + " miles."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 6: Historical age subtraction (WP #3)
            (r) => {
                const y1 = 1769;
                const y2 = 1804;
                const age = y2 - y1;
                const q = "A historic emperor was born in " + y1 + ". How old was he when he was crowned emperor in " + y2 + "?";
                const s = shuffle(r, [age + " years old", (age + 2) + " years old", (age - 2) + " years old", (age + 5) + " years old"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [y2 + " − " + y1 + " = " + age + " years old."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 7: CD purchase with sales tax and total price (WP #4)
            (r) => {
                const price = 15.00;
                const rate = 8;
                const tax = (price * rate / 100).toFixed(2);
                const total = (price + parseFloat(tax)).toFixed(2);
                const q = "Shelly purchased a music CD for $" + price.toFixed(2) + ". The sales-tax rate was " + rate + "%. What was the total price including tax?";
                const s = shuffle(r, ["$" + total, "$" + (parseFloat(total) + 1).toFixed(2), "$" + (parseFloat(total) - 1).toFixed(2), "$" + (price + 8).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = $" + price.toFixed(2) + " × 0.08 = $" + tax + ". Total = $" + total + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 8: Compass circle circumference (WP #5)
            (r) => {
                const rVal = randInt(r, 3, 6);
                const circ = (2 * 3.14 * rVal).toFixed(2);
                const q = "Malcolm used a compass to draw a circle with a radius of " + rVal + " inches. What is the circumference of the circle? (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " inches", (parseFloat(circ) + 3).toFixed(2) + " inches", (parseFloat(circ) - 3).toFixed(2) + " inches", (3.14 * rVal).toFixed(2) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["C = 2πr = 2 × 3.14 × " + rVal + " = " + circ + " inches."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 9: Dividing whole number by decimal hundredths (WP #6)
            (r) => {
                const cases = [
                    { w: 3, dec: "0.05", ans: "60", wrong: ["6", "600", "0.6"] },
                    { w: 4, dec: "0.2", ans: "20", wrong: ["2", "200", "0.8"] },
                    { w: 5, dec: "0.25", ans: "20", wrong: ["2", "200", "1.25"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Divide: " + item.w + " ÷ " + item.dec;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.w + " ÷ " + item.dec + " = " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 10: Dividing decimal tenths by decimal hundredths (WP #7)
            (r) => {
                const cases = [
                    { dividend: "0.3", divisor: "0.04", ans: "7.5", wrong: ["0.75", "75", "0.075"] },
                    { dividend: "1.2", divisor: "0.05", ans: "24", wrong: ["2.4", "240", "0.24"] },
                    { dividend: "0.45", divisor: "0.09", ans: "5", wrong: ["0.5", "50", "0.05"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the quotient: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 11: Dividing decimal by integer (WP #8)
            (r) => {
                const cases = [
                    { dividend: "0.048", divisor: 8, ans: "0.006", wrong: ["0.06", "0.6", "0.0006"] },
                    { dividend: "0.072", divisor: 9, ans: "0.008", wrong: ["0.08", "0.8", "0.0008"] },
                    { dividend: "0.035", divisor: 7, ans: "0.005", wrong: ["0.05", "0.5", "0.0005"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Calculate: " + item.dividend + " ÷ " + item.divisor;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.dividend + " ÷ " + item.divisor + " = " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 12: Unknown in decimal equation (WP #9)
            (r) => {
                const cases = [
                    { coeff: "0.4", b: "1.2", ans: "3", wrong: ["0.3", "30", "4.8"] },
                    { coeff: "0.5", b: "2.5", ans: "5", wrong: ["0.5", "50", "1.25"] },
                    { coeff: "0.3", b: "1.8", ans: "6", wrong: ["0.6", "60", "0.54"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Find the unknown number n: " + item.coeff + "n = " + item.b;
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = " + item.b + " ÷ " + item.coeff + " = " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 13: Comparing decimals with trailing zeros (WP #10)
            (r) => {
                const q = "Compare: 0.05 [?] 0.050";
                const s = shuffle(r, ["0.05 = 0.050", "0.05 > 0.050", "0.05 < 0.050", "Cannot be compared"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Trailing zeros after a decimal do not change its value: 0.05 = 0.050."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 14: Prime factorization using exponents (WP #11)
            (r) => {
                const cases = [
                    { n: 100, ans: "2² × 5²", wrong: ["2 × 5²", "2² × 5", "10²"] },
                    { n: 72, ans: "2³ × 3²", wrong: ["2² × 3³", "8 × 9", "2⁴ × 3"] },
                    { n: 36, ans: "2² × 3²", wrong: ["6²", "2³ × 3", "2 × 3³"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "What is the prime factorization of " + item.n + " written with exponents?";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The prime factorization of " + item.n + " is " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 15: Square root evaluation (WP #12)
            (r) => {
                const cases = [
                    { sq: 64, ans: 8 },
                    { sq: 81, ans: 9 },
                    { sq: 100, ans: 10 },
                    { sq: 144, ans: 12 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Evaluate: √" + item.sq;
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 1), "" + (item.ans - 1), "" + (item.ans + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["√" + item.sq + " = " + item.ans + " because " + item.ans + "² = " + item.sq + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 16: Fraction division reciprocal method (PS)
            (r) => {
                const cases = [
                    { w: 4, n: 2, d: 5, ans: 10 },
                    { w: 6, n: 3, d: 5, ans: 10 },
                    { w: 8, n: 4, d: 5, ans: 10 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "How many " + item.n + "/" + item.d + "s are in " + item.w + "?";
                const s = shuffle(r, ["" + item.ans, "" + (item.ans + 2), "" + (item.ans - 2), "" + (item.w * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.w + " ÷ " + item.n + "/" + item.d + " = " + item.w + " × " + item.d + "/" + item.n + " = " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 17: Ribbon cutting fraction division word problem
            (r) => {
                const cases = [
                    { len: 12, n: 3, d: 4, ans: 16 },
                    { len: 10, n: 1, d: 2, ans: 20 },
                    { len: 9, n: 3, d: 4, ans: 12 }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "A ribbon is " + item.len + " inches long. If each bow requires " + item.n + "/" + item.d + " inch of ribbon, how many complete bows can be made?";
                const s = shuffle(r, [item.ans + " bows", (item.ans + 2) + " bows", (item.ans - 2) + " bows", (item.len + 2) + " bows"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.len + " ÷ (" + item.n + "/" + item.d + ") = " + item.len + " × (" + item.d + "/" + item.n + ") = " + item.ans + " bows."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 18: Number line tenths point
            (r) => {
                const n = randInt(r, 3, 8);
                const k = randInt(r, 2, 7);
                const ans = (n + k / 10).toFixed(1);
                const q = "What decimal number is " + k + " tenths greater than " + n + "?";
                const s = shuffle(r, [ans, (parseFloat(ans) + 0.2).toFixed(1), (parseFloat(ans) - 0.2).toFixed(1), (n + k).toFixed(1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " + " + (k / 10).toFixed(1) + " = " + ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Framing 19: Mental multiplication by 1000
            (r) => {
                const cases = [
                    { dec: "0.035", ans: "35", wrong: ["3.5", "350", "0.35"] },
                    { dec: "1.45", ans: "1450", wrong: ["145", "14.5", "14500"] },
                    { dec: "0.082", ans: "82", wrong: ["8.2", "820", "0.82"] }
                ];
                const item = cases[randInt(r, 0, cases.length - 1)];
                const q = "Mentally calculate: " + item.dec + " × 1000";
                const s = shuffle(r, [item.ans, item.wrong[0], item.wrong[1], item.wrong[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shift the decimal point 3 places to the right: " + item.dec + " × 1000 = " + item.ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};

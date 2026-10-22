// Part 2: Lessons 46-50 for Section 5
module.exports = {
  getLessons46to50Code: function() {
    return `    // Lesson 46: Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by 10, by 100, and by 1000
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
`;
  }
};

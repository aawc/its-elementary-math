module.exports = `    // Lesson 31: Areas of Rectangles
    31: (rng, qIndex) => {
        const framings = [
            // Category 0: Multiple divided by multiple (Lesson 31 #1)
            (r) => {
                const pairs = [
                    [4, 3, 3, 4], // (4*3)/(3*4) = 12/12 = 1
                    [6, 4, 4, 2], // (6*4)/(4*2) = 24/8 = 3
                    [8, 3, 2, 4], // (8*3)/(2*4) = 24/8 = 3
                    [5, 4, 2, 5], // (5*4)/(2*5) = 20/10 = 2
                    [9, 2, 3, 2], // (9*2)/(3*2) = 18/6 = 3
                    [6, 3, 3, 3], // (6*3)/(3*3) = 18/9 = 2
                    [8, 2, 4, 2], // (8*2)/(4*2) = 16/8 = 2
                    [10, 2, 5, 2] // (10*2)/(5*2) = 20/10 = 2
                ];
                const [a, m, b, n] = pairs[randInt(r, 0, pairs.length - 1)];
                const ords = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
                const num = a * m;
                const den = b * n;
                const ans = Math.floor(num / den);
                const q = "When the " + ords[m - 1] + " multiple of " + a + " is divided by the " + ords[n - 1] + " multiple of " + b + ", what is the quotient?";
                const s = shuffle(r, ["" + ans, "" + (ans + 1), "" + (ans + 2), "" + Math.max(0, ans - 1) === "" + ans ? "" + (ans + 3) : "" + Math.max(0, ans - 1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ords[m - 1] + " multiple of " + a + " = " + num + ".", ords[n - 1] + " multiple of " + b + " = " + den + ".", num + " ÷ " + den + " = " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 1: Astronomical distance written in digits (Lesson 31 #2)
            (r) => {
                const list = [
                    { miles: 580, text: "five hundred eighty" },
                    { miles: 450, text: "four hundred fifty" },
                    { miles: 520, text: "five hundred twenty" },
                    { miles: 640, text: "six hundred forty" },
                    { miles: 750, text: "seven hundred fifty" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "The distance the Earth travels around the Sun each year is about " + item.text + " million miles. Use digits to write that distance.";
                const ans = item.miles + ",000,000 miles";
                const d1 = item.miles + ",000 miles";
                const d2 = (item.miles * 10) + ",000,000 miles";
                const d3 = (item.miles / 10) + ",000,000 miles";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.text + " million is written as " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 2: Convert improper fraction to mixed number (Lesson 31 #3)
            (r) => {
                const dens = [3, 4, 5, 7];
                const den = dens[randInt(r, 0, dens.length - 1)];
                const whole = randInt(r, 2, 5);
                const rem = randInt(r, 1, den - 1);
                const num = whole * den + rem;
                const q = "Convert " + num + "/" + den + " to a mixed number.";
                const ans = whole + " " + rem + "/" + den;
                const d1 = (whole + 1) + " " + rem + "/" + den;
                const d2 = (whole - 1) + " " + rem + "/" + den;
                const altRem = (rem % (den - 1)) + 1;
                const d3 = whole + " " + (altRem === rem ? ((rem + 1) % den) : altRem) + "/" + den;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide " + num + " by " + den + ": " + num + " ÷ " + den + " = " + whole + " with a remainder of " + rem + ".", "Write the remainder over the denominator: " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 3: Square stickers covering rectangle (Lesson 31 #4)
            (r) => {
                const L = randInt(r, 4, 8);
                const W = randInt(r, 2, 4);
                const area = L * W;
                const perim = 2 * (L + W);
                const q = "How many square stickers with sides 1 centimeter long would be needed to cover a rectangle " + L + " centimeters long and " + W + " centimeters wide?";
                const ans = "" + area;
                const d1 = "" + perim;
                const d2 = "" + (area + 2);
                const d3 = "" + Math.max(1, area - 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = length × width = " + L + " × " + W + " = " + area + " square centimeters.", "It takes " + area + " one-centimeter square stickers to cover the rectangle."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 4: Floor tiles covering square (Lesson 31 #5)
            (r) => {
                const S = randInt(r, 7, 12);
                const area = S * S;
                const perim = 4 * S;
                const q = "How many floor tiles with sides 1 foot long would be needed to cover a square room with sides " + S + " feet long?";
                const ans = "" + area;
                const d1 = "" + perim;
                const d2 = "" + (area + 10);
                const d3 = "" + (area - 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area of a square = side × side = " + S + " × " + S + " = " + area + " square feet.", "So " + area + " one-foot square tiles are needed."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 5: Area of rectangle in inches (Lesson 31 #6)
            (r) => {
                const L = randInt(r, 9, 14);
                const W = randInt(r, 5, 8);
                const area = L * W;
                const perim = 2 * (L + W);
                const q = "What is the area of a rectangle " + L + " inches long and " + W + " inches wide?";
                const ans = area + " sq. in.";
                const d1 = perim + " sq. in.";
                const d2 = (area + 8) + " sq. in.";
                const d3 = (area - 8) + " sq. in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = length × width = " + L + " in. × " + W + " in. = " + area + " sq. in."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 6: Sequence of square numbers (Lesson 31 #7)
            (r) => {
                const q = "What is the next term in this sequence? 1, 4, 9, 16, 25, 36, ...";
                const ans = "49";
                const d1 = "45";
                const d2 = "48";
                const d3 = "64";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The terms are squares of consecutive integers: 1², 2², 3², 4², 5², 6².", "The next term is 7² = 49."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 7: Fraction of a whole number (Lesson 31 #8)
            (r) => {
                const sets = [
                    [2, 3, 24],
                    [3, 4, 28],
                    [2, 5, 30],
                    [5, 6, 36],
                    [3, 5, 25],
                    [3, 8, 32]
                ];
                const [n, d, tot] = sets[randInt(r, 0, sets.length - 1)];
                const ans = (tot / d) * n;
                const q = "What number is " + n + "/" + d + " of " + tot + "?";
                const d1 = "" + (ans + 2);
                const d2 = "" + (ans - 2);
                const d3 = "" + (tot - ans);
                const s = shuffle(r, ["" + ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find 1/" + d + " of " + tot + ": " + tot + " ÷ " + d + " = " + (tot / d) + ".", "Multiply by " + n + ": " + (tot / d) + " × " + n + " = " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 8: Unknown in addition (Lesson 31 #9)
            (r) => {
                const a = randInt(r, 21, 35);
                const diff = randInt(r, 14, 25);
                const sum = a + diff;
                const q = "Find the unknown number: " + a + " + f = " + sum;
                const ans = "" + diff;
                const d1 = "" + (diff + 2);
                const d2 = "" + (diff - 2);
                const d3 = "" + (a + sum);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract " + a + " from both sides: f = " + sum + " − " + a + " = " + diff + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 9: Adding fractions with common denominator (Lesson 31 #10)
            (r) => {
                const sets = [
                    [1, 8, 1, 8, "1/4"],
                    [1, 6, 3, 6, "2/3"],
                    [1, 10, 3, 10, "2/5"],
                    [3, 8, 1, 8, "1/2"],
                    [1, 12, 5, 12, "1/2"]
                ];
                const [n1, d, n2, _, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d + " + " + n2 + "/" + d;
                const d1 = (n1 + n2) + "/" + (d * 2);
                const d2 = (n1 + n2) + "/" + d;
                const d3 = (n1 + n2 + 1) + "/" + d;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add numerators: " + n1 + " + " + n2 + " = " + (n1 + n2) + ".", "Write over common denominator: " + (n1 + n2) + "/" + d + " = " + ans + " in simplest form."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 10: Subtracting fractions with common denominator (Lesson 31 #11)
            (r) => {
                const sets = [
                    [5, 6, 1, 6, "2/3"],
                    [7, 8, 3, 8, "1/2"],
                    [5, 8, 1, 8, "1/2"],
                    [9, 10, 3, 10, "3/5"],
                    [7, 12, 1, 12, "1/2"]
                ];
                const [n1, d, n2, _, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d + " − " + n2 + "/" + d;
                const d1 = (n1 - n2) + "/" + d;
                const d2 = (n1 + n2) + "/" + d;
                const d3 = "1/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract numerators: " + n1 + " − " + n2 + " = " + (n1 - n2) + ".", "Write over common denominator: " + (n1 - n2) + "/" + d + " = " + ans + " in simplest form."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 11: Multiplying fractions (Lesson 31 #12)
            (r) => {
                const sets = [
                    [2, 3, 1, 2, "1/3"],
                    [3, 4, 2, 3, "1/2"],
                    [2, 5, 5, 6, "1/3"],
                    [3, 5, 1, 3, "1/5"],
                    [3, 4, 1, 2, "3/8"]
                ];
                const [n1, d1, n2, d2, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d1 + " × " + n2 + "/" + d2;
                const d_opt1 = (n1 + n2) + "/" + (d1 + d2);
                const d_opt2 = (n1 * n2 + 1) + "/" + (d1 * d2);
                const d_opt3 = (n1 * n2) + "/" + (d1 * d2);
                const s = shuffle(r, [ans, d_opt1, d_opt2, d_opt3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerators: " + n1 + " × " + n2 + " = " + (n1 * n2) + ".", "Multiply denominators: " + d1 + " × " + d2 + " = " + (d1 * d2) + ".", "Reduce: " + (n1 * n2) + "/" + (d1 * d2) + " = " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 12: Multiplying fraction by whole number (Lesson 31 #13)
            (r) => {
                const sets = [
                    [2, 3, 5, "3 1/3"],
                    [3, 4, 3, "2 1/4"],
                    [2, 5, 4, "1 3/5"],
                    [3, 5, 4, "2 2/5"],
                    [1, 3, 7, "2 1/3"]
                ];
                const [n, d, w, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n + "/" + d + " × " + w;
                const d1 = (parseInt(ans) + 1) + " " + ans.split(" ")[1];
                const d2 = (n * w) + "/" + (d * w);
                const d3 = (parseInt(ans) - 1) + " " + ans.split(" ")[1];
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerator by whole number: " + n + " × " + w + " = " + (n * w) + ".", "Write over denominator: " + (n * w) + "/" + d + " = " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 13: Estimating product by rounding to nearest hundred (Lesson 31 #14)
            (r) => {
                const a = randInt(r, 370, 420);
                const b = randInt(r, 480, 530);
                const ra = Math.round(a / 100) * 100;
                const rb = Math.round(b / 100) * 100;
                const ans = ra * rb;
                const q = "Estimate the product of " + a + " and " + b + " by rounding each number to the nearest hundred before multiplying.";
                const s = shuffle(r, ["" + ans, "" + (ans + 20000), "" + (ans - 20000), "" + (ans + 50000)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " rounds to " + ra + ".", b + " rounds to " + rb + ".", ra + " × " + rb + " = " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 14: Dividing money by 10 (Lesson 31 #15)
            (r) => {
                const dollars = [20, 30, 40, 50, 70][randInt(r, 0, 4)];
                const ansVal = (dollars / 10).toFixed(2);
                const q = "Simplify: $" + dollars + ".00 ÷ 10";
                const ans = "$" + ansVal;
                const d1 = "$" + (dollars / 100).toFixed(2);
                const d2 = "$" + dollars + ".00";
                const d3 = "$" + ((dollars / 10) + 1).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + dollars + ".00 ÷ 10 = $" + ansVal + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 15: Multiplying quantity by price in cents (Lesson 31 #16)
            (r) => {
                const qty = randInt(r, 45, 75);
                const cents = randInt(r, 25, 55);
                const totCents = qty * cents;
                const ans = "$" + (totCents / 100).toFixed(2);
                const q = "Find the total cost: (" + qty + ")(" + cents + "¢)";
                const d1 = "$" + ((totCents + 100) / 100).toFixed(2);
                const d2 = "$" + ((totCents - 100) / 100).toFixed(2);
                const d3 = "$" + ((totCents + 50) / 100).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [qty + " × " + cents + "¢ = " + totCents + "¢ = " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 16: Division with remainder (Lesson 31 #17)
            (r) => {
                const div = 22;
                const qVal = randInt(r, 150, 250);
                const rem = randInt(r, 3, 19);
                const dividend = div * qVal + rem;
                const q = "Divide " + dividend + " ÷ " + div + ". What is the quotient and remainder?";
                const ans = qVal + " R " + rem;
                const d1 = (qVal + 1) + " R " + rem;
                const d2 = qVal + " R " + (rem + 1);
                const d3 = (qVal - 1) + " R " + rem;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dividend + " ÷ " + div + " = " + qVal + " with remainder " + rem + " (" + ans + ")."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 17: Reciprocal of smallest odd prime (Lesson 31 #18)
            (r) => {
                const q = "What is the reciprocal of the smallest odd prime number?";
                const ans = "1/3";
                const d1 = "3";
                const d2 = "1/2";
                const d3 = "1/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The prime numbers are 2, 3, 5, 7, ...", "The smallest odd prime number is 3.", "The reciprocal of 3 is 1/3."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 18: Fraction of circle to percent (Lesson 31 #19)
            (r) => {
                const list = [
                    { frac: "Two thirds", pct: "66 2/3%" },
                    { frac: "Three fourths", pct: "75%" },
                    { frac: "One third", pct: "33 1/3%" },
                    { frac: "Two fifths", pct: "40%" },
                    { frac: "Four fifths", pct: "80%" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = item.frac + " of a circle is what percent of a circle?";
                const ans = item.pct;
                const pool = ["50%", "60%", "33 1/3%", "75%", "66 2/3%", "40%", "80%"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.frac + " = " + ans + "."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            },
            // Category 19: Closest to target number (Lesson 31 #20)
            (r) => {
                const target = 100;
                const delta = randInt(r, 7, 11);
                const correctVal = target + delta;
                const opt1 = target - delta - 3;
                const opt2 = target + delta + 5;
                const opt3 = target - delta - 8;
                const q = "Which of these numbers is closest to " + target + "?";
                const ans = "" + correctVal;
                const s = shuffle(r, [ans, "" + opt1, "" + opt2, "" + opt3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find the difference between each option and " + target + ":", "|" + correctVal + " − " + target + "| = " + delta + ".", "|" + opt1 + " − " + target + "| = " + (delta + 3) + ".", "|" + opt2 + " − " + target + "| = " + (delta + 5) + ".", "|" + opt3 + " − " + target + "| = " + (delta + 8) + ".", correctVal + " is closest."], lessonNum: 31, lessonTitle: "Areas of Rectangles" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

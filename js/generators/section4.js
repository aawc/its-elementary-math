import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 31: Areas of Rectangles
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

    // Lesson 32: Expanded Notation • More on Elapsed Time
    32: (rng, qIndex) => {
        const framings = [
            // Category 0: Product of sum and difference (Lesson 32 #1)
            (r) => {
                const a = randInt(r, 18, 28);
                const b = randInt(r, 5, 9);
                const c = randInt(r, 14, 20);
                const d = randInt(r, 4, 8);
                const sum = a + b;
                const diff = c - d;
                const prod = sum * diff;
                const q = "When the sum of " + a + " and " + b + " is multiplied by the difference of " + c + " and " + d + ", what is the product?";
                const ans = "" + prod;
                const d1 = "" + (prod + 10);
                const d2 = "" + (prod - 10);
                const d3 = "" + ((a * b) + (c * d));
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum: " + a + " + " + b + " = " + sum + ".", "Difference: " + c + " − " + d + " = " + diff + ".", "Product: " + sum + " × " + diff + " = " + prod + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 1: Lifespan elapsed years (Lesson 32 #2)
            (r) => {
                const bYear = randInt(r, 1775, 1825);
                const age = randInt(r, 48, 72);
                const dYear = bYear + age;
                const q = "A frontiersman was born in " + bYear + " and died in " + dYear + ". How many years did he live?";
                const ans = age + " years";
                const d1 = (age + 1) + " years";
                const d2 = (age - 1) + " years";
                const d3 = (age + 10) + " years";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dYear + " − " + bYear + " = " + age + " years."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 2: Unit cost per ounce (Lesson 32 #3)
            (r) => {
                const oz = [12, 16, 20, 24][randInt(r, 0, 3)];
                const cPerOz = [12, 14, 15, 16, 18][randInt(r, 0, 4)];
                const totCents = oz * cPerOz;
                const totStr = "$" + (totCents / 100).toFixed(2);
                const ansStr = "$" + (cPerOz / 100).toFixed(2);
                const q = "A " + oz + "-ounce box of cereal costs " + totStr + ". What is the cost per ounce of the cereal?";
                const d1 = "$" + ((cPerOz + 2) / 100).toFixed(2);
                const d2 = "$" + ((cPerOz - 2) / 100).toFixed(2);
                const d3 = "$" + ((cPerOz + 5) / 100).toFixed(2);
                const s = shuffle(r, [ansStr, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide total cost by ounces: " + totStr + " ÷ " + oz + " = " + ansStr + " per ounce."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 3: Elapsed time forward (Lesson 32 #4)
            (r) => {
                const startH = randInt(r, 6, 8);
                const startM = [40, 50][randInt(r, 0, 1)];
                const addH = randInt(r, 2, 4);
                const addM = [30, 40][randInt(r, 0, 1)];
                const totM = startM + addM;
                const extraH = Math.floor(totM / 60);
                const remM = totM % 60;
                const totalH = startH + addH + extraH;
                const endH = totalH > 12 ? totalH - 12 : totalH;
                const ampm = totalH >= 12 ? "p.m." : "a.m.";
                const remMStr = remM < 10 ? "0" + remM : "" + remM;
                const startMStr = startM < 10 ? "0" + startM : "" + startM;
                const q = "What time is " + addH + " hours " + addM + " minutes after " + startH + ":" + startMStr + " a.m.?";
                const ans = endH + ":" + remMStr + " " + ampm;
                const d1 = (endH === 1 ? 12 : endH - 1) + ":" + remMStr + " " + ampm;
                const d2 = (endH + 1) + ":" + remMStr + " " + ampm;
                const d3 = endH + ":" + ((remM + 20) % 60 < 10 ? "0" + ((remM + 20) % 60) : ((remM + 20) % 60)) + " " + ampm;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add hours: " + startH + " + " + addH + " = " + (startH + addH) + " hours.", "Add minutes: " + startM + " + " + addM + " = " + totM + " minutes = " + extraH + " hour " + remM + " minutes.", "Total: " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 4: Percent equals fraction, reduce (Lesson 32 #5)
            (r) => {
                const list = [
                    { pct: 40, frac: "2/5" },
                    { pct: 60, frac: "3/5" },
                    { pct: 80, frac: "4/5" },
                    { pct: 35, frac: "7/20" },
                    { pct: 75, frac: "3/4" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = item.pct + " percent equals " + item.pct + "/100. Write " + item.pct + "/100 as a reduced fraction.";
                const ans = item.frac;
                const pool = ["1/5", "2/5", "3/5", "4/5", "3/4", "7/20", "1/2"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.pct + "/100 reduces to " + ans + " by dividing numerator and denominator by their greatest common factor."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 5: Area of baseball diamond / square field (Lesson 32 #6)
            (r) => {
                const side = [60, 70, 80, 90][randInt(r, 0, 3)];
                const area = side * side;
                const q = "On a baseball field the distance between consecutive bases is " + side + " feet. What is the area of the baseball diamond (square infield)?";
                const ans = area + " sq ft";
                const d1 = (4 * side) + " sq ft";
                const d2 = (area + 400) + " sq ft";
                const d3 = (area - 400) + " sq ft";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area of a square = side × side = " + side + " × " + side + " = " + area + " sq ft."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 6: Perimeter of baseball diamond (Lesson 32 #7)
            (r) => {
                const side = [60, 70, 80, 90][randInt(r, 0, 3)];
                const perim = 4 * side;
                const q = "What is the perimeter of a baseball diamond with sides " + side + " feet long?";
                const ans = perim + " feet";
                const d1 = (side * side) + " feet";
                const d2 = (perim + 20) + " feet";
                const d3 = (perim - 20) + " feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter of a square = 4 × side = 4 × " + side + " = " + perim + " feet."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 7: Sequence eighth term (Lesson 32 #8)
            (r) => {
                const start = randInt(r, 1, 3);
                const diff = randInt(r, 2, 4);
                const seq = [start, start + diff, start + 2 * diff, start + 3 * diff].join(", ");
                const ansVal = start + 7 * diff;
                const q = "Describe the sequence and find the eighth term: " + seq + ", ...";
                const ans = "" + ansVal;
                const d1 = "" + (ansVal - diff);
                const d2 = "" + (ansVal + diff);
                const d3 = "" + (ansVal + 2 * diff);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sequence increases by " + diff + " each term.", "Eighth term = " + start + " + 7 × " + diff + " = " + ansVal + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 8: Expanded notation (Lesson 32 #9)
            (r) => {
                const th = randInt(r, 3, 8);
                const h = [2, 4, 5, 6, 7][randInt(r, 0, 4)];
                const num = th * 1000 + h * 100;
                const q = "Write " + num + " in expanded notation.";
                const ans = "(" + th + " × 1000) + (" + h + " × 100)";
                const d1 = "(" + th + " × 100) + (" + h + " × 10)";
                const d2 = "(" + th + " × 1000) + (" + h + " × 10)";
                const d3 = "(" + th + " × 10,000) + (" + h + " × 100)";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [num + " = " + th + " thousands and " + h + " hundreds = " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 9: Closest to 1000 (Lesson 32 #10)
            (r) => {
                const q = "Which of these numbers is closest to 1000?";
                const ans = "1009";
                const d1 = "990";
                const d2 = "909";
                const d3 = "1090";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find the distance to 1000 for each choice: |1009 − 1000| = 9, |990 − 1000| = 10, |909 − 1000| = 91, |1090 − 1000| = 90. 1009 is closest."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 10: Average of 3 bank accounts (Lesson 32 #11)
            (r) => {
                const avg = randInt(r, 460, 580);
                const d1 = randInt(r, 25, 55);
                const d2 = randInt(r, 25, 55);
                const a = avg + d1;
                const b = avg - d2;
                const c = 3 * avg - a - b;
                const q = "In three separate bank accounts, Sumi has $" + a + ", $" + b + ", and $" + c + ". What is the average amount of money she has per account?";
                const ans = "$" + avg;
                const d_1 = "$" + (avg + 20);
                const d_2 = "$" + (avg - 20);
                const d_3 = "$" + (avg + 40);
                const s = shuffle(r, [ans, d_1, d_2, d_3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum the accounts: $" + a + " + $" + b + " + $" + c + " = $" + (3 * avg) + ".", "Divide by 3: $" + (3 * avg) + " ÷ 3 = $" + avg + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 11: Multiply cents by 100 (Lesson 32 #12)
            (r) => {
                const cents = [5, 8, 12, 15, 25][randInt(r, 0, 4)];
                const costStr = "$" + (cents / 100).toFixed(2);
                const q = "Simplify: " + costStr + " × 100";
                const ans = "$" + cents + ".00";
                const d1 = "$" + (cents * 10) + ".00";
                const d2 = "$" + (cents / 10).toFixed(2);
                const d3 = "$" + (cents + 1) + ".00";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [costStr + " × 100 = $" + cents + ".00 (multiplying by 100 moves the decimal two places to the right)."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 12: How many [a/b]s in 1? (Lesson 32 #13)
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The number of " + item.n + "/" + item.d + "s in 1 is the reciprocal: " + item.d + "/" + item.n + " = " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 13: Fraction of money (Lesson 32 #14)
            (r) => {
                const sets = [
                    [3, 4, 24],
                    [2, 3, 30],
                    [4, 5, 25],
                    [5, 6, 36],
                    [3, 8, 32]
                ];
                const [n, d, tot] = sets[randInt(r, 0, sets.length - 1)];
                const ansVal = (tot / d) * n;
                const q = "How much money is " + n + "/" + d + " of $" + tot + "?";
                const ans = "$" + ansVal;
                const d1 = "$" + (ansVal + 4);
                const d2 = "$" + (ansVal - 4);
                const d3 = "$" + (tot - ansVal);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + d + " of $" + tot + " = $" + (tot / d) + ".", n + "/" + d + " of $" + tot + " = " + n + " × $" + (tot / d) + " = " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 14: Adding fractions with sum > 1 (Lesson 32 #15)
            (r) => {
                const sets = [
                    [3, 5, 3, 5, "1 1/5"],
                    [4, 7, 5, 7, "1 2/7"],
                    [5, 8, 5, 8, "1 1/4"],
                    [3, 4, 3, 4, "1 1/2"],
                    [5, 9, 7, 9, "1 1/3"]
                ];
                const [n1, d, n2, _, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify and write as a mixed number: " + n1 + "/" + d + " + " + n2 + "/" + d;
                const d1 = "1 " + ((n1 + n2) % d + 1) + "/" + d;
                const d2 = "2 " + ((n1 + n2) % d) + "/" + d;
                const d3 = (n1 + n2) + "/" + (d * 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + "/" + d + " + " + n2 + "/" + d + " = " + (n1 + n2) + "/" + d + " = " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 15: Subtracting fractions reducing (Lesson 32 #16)
            (r) => {
                const sets = [
                    [3, 4, 1, 4, "1/2"],
                    [5, 6, 1, 6, "2/3"],
                    [7, 8, 3, 8, "1/2"],
                    [7, 10, 3, 10, "2/5"],
                    [9, 10, 1, 10, "4/5"]
                ];
                const [n1, d, n2, _, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d + " − " + n2 + "/" + d;
                const d1 = (n1 - n2) + "/" + d;
                const d2 = (n1 + n2) + "/" + d;
                const d3 = "1/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + "/" + d + " − " + n2 + "/" + d + " = " + (n1 - n2) + "/" + d + " = " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 16: Multiplying fractions (Lesson 32 #17/#18)
            (r) => {
                const sets = [
                    [3, 4, 1, 3, "1/4"],
                    [7, 10, 3, 10, "21/100"],
                    [2, 3, 3, 5, "2/5"],
                    [3, 5, 5, 6, "1/2"],
                    [4, 5, 1, 4, "1/5"]
                ];
                const [n1, d1, n2, d2, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d1 + " × " + n2 + "/" + d2;
                const d1_opt = (n1 + n2) + "/" + (d1 + d2);
                const d2_opt = (n1 * n2 + 1) + "/" + (d1 * d2);
                const d3_opt = (n1 * n2) + "/" + (d1 * d2);
                const s = shuffle(r, [ans, d1_opt, d2_opt, d3_opt]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + n1 + " × " + n2 + ") / (" + d1 + " × " + d2 + ") = " + (n1 * n2) + "/" + (d1 * d2) + " = " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 17: Solve one-step linear equation (Lesson 32 #21/#22)
            (r) => {
                const coef = randInt(r, 6, 9);
                const val = randInt(r, 20, 45);
                const rhs = coef * val;
                const q = "Find the unknown number: " + coef + "q = " + rhs;
                const ans = "" + val;
                const d1 = "" + (val + 3);
                const d2 = "" + (val - 3);
                const d3 = "" + (val + 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both sides by " + coef + ": q = " + rhs + " ÷ " + coef + " = " + val + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 18: Ratio of boys to girls (Lesson 32 #23)
            (r) => {
                const tot = 36;
                const boys = [12, 15, 16, 20][randInt(r, 0, 3)];
                const girls = tot - boys;
                const g = (a, b) => b === 0 ? a : g(b, a % b);
                const div = g(boys, girls);
                const bR = boys / div;
                const gR = girls / div;
                const q = "In a science club of " + tot + " students, " + boys + " are boys. What is the ratio of boys to girls in the club in simplest form?";
                const ans = bR + " to " + gR;
                const d1 = gR + " to " + bR;
                const d2 = bR + " to " + (tot / div);
                const d3 = (bR + 1) + " to " + gR;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Number of girls = " + tot + " − " + boys + " = " + girls + ".", "Ratio of boys to girls = " + boys + " to " + girls + " = " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            },
            // Category 19: Hike elapsed time duration (Lesson 32 #27)
            (r) => {
                const startH = randInt(r, 6, 8);
                const startM = [30, 45][randInt(r, 0, 1)];
                const durH = randInt(r, 3, 5);
                const durM = [15, 30][randInt(r, 0, 1)];
                const totEndM = (startH * 60 + startM) + (durH * 60 + durM);
                const endH = Math.floor(totEndM / 60);
                const endM = totEndM % 60;
                const endHStr = endH > 12 ? (endH - 12) : endH;
                const ampm = endH >= 12 ? "p.m." : "a.m.";
                const startMStr = startM < 10 ? "0" + startM : "" + startM;
                const endMStr = endM < 10 ? "0" + endM : "" + endM;
                const q = "Ajani and Sharon began their hike at " + startH + ":" + startMStr + " a.m. and finished at " + endHStr + ":" + endMStr + " " + ampm + ". For how long did they hike?";
                const ans = durH + " hours " + durM + " minutes";
                const d1 = (durH + 1) + " hours " + durM + " minutes";
                const d2 = (durH - 1) + " hours " + durM + " minutes";
                const d3 = durH + " hours " + ((durM + 15) % 60) + " minutes";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Count forward from " + startH + ":" + startMStr + " a.m. to " + endHStr + ":" + endMStr + " " + ampm + ":", "Duration = " + ans + "."], lessonNum: 32, lessonTitle: "Expanded Notation • More on Elapsed Time" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 33: Writing Percents as Fractions, Part 1
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

    // Lesson 34: Decimal Place Value
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

    // Lesson 35: Writing Decimal Numbers as Fractions, Part 1 • Reading and Writing Decimal Numbers
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

    // Lesson 36: Subtracting Fractions and Mixed Numbers from
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

    // Lesson 37: Adding and Subtracting Decimal Numbers
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

    // Lesson 38: Adding and Subtracting Decimal Numbers and • Squares and Square Roots
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

    // Lesson 39: Multiplying Decimal Numbers
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

    // Lesson 40: Using Zero as a Placeholder • Circle Graphs
    40: (rng, qIndex) => {
        const framings = [
            // Category 0: Circle graph pet percentage (Lesson 40 #1)
            (r) => {
                const list = [
                    { count: 5, tot: 20, pct: "25%" },
                    { count: 4, tot: 20, pct: "20%" },
                    { count: 6, tot: 24, pct: "25%" },
                    { count: 8, tot: 32, pct: "25%" },
                    { count: 10, tot: 50, pct: "20%" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "In a circle graph of pets, " + item.count + " of the " + item.tot + " pets are birds. What percent of the pets are birds?";
                const ans = item.pct;
                const pool = ["20%", "25%", "30%", "15%", "50%"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.count + "/" + item.tot + " = " + (item.count / item.tot) + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 1: Historical elapsed years between events (Lesson 40 #2)
            (r) => {
                const y1 = 1788;
                const y2 = 1920;
                const diff = y2 - y1;
                const q = "The U.S. Constitution was ratified in " + y1 + ". In " + y2 + " the 19th amendment was ratified, guaranteeing women the right to vote. How many years after the Constitution was ratified were women guaranteed the right to vote?";
                const ans = diff + " years";
                const d1 = (diff + 10) + " years";
                const d2 = (diff - 10) + " years";
                const d3 = (diff + 20) + " years";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [y2 + " − " + y1 + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 2: Appointment time with late arrival (Lesson 40 #3)
            (r) => {
                const list = [
                    { lateH: 3, lateM: 30, curr: "2:00 p.m.", ans: "10:30 a.m.", dist: ["11:30 a.m.", "9:30 a.m.", "10:00 a.m."] },
                    { lateH: 2, lateM: 30, curr: "3:00 p.m.", ans: "12:30 p.m.", dist: ["1:30 p.m.", "11:30 a.m.", "12:00 p.m."] },
                    { lateH: 1, lateM: 30, curr: "4:00 p.m.", ans: "2:30 p.m.", dist: ["3:30 p.m.", "1:30 p.m.", "2:00 p.m."] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "A character is " + item.lateH + " and a half hours late for an appointment. If the current time is " + item.curr + ", what was the scheduled time of the appointment?";
                const ans = item.ans;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Count back " + item.lateH + " hours 30 minutes from " + item.curr + " to get " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 3: Multiplying decimals requiring zero placeholder (Lesson 40 #4)
            (r) => {
                const list = [
                    { a: "0.2", b: "0.3", ans: "0.06", dist: ["0.6", "0.006", "0.12"] },
                    { a: "0.1", b: "0.01", ans: "0.001", dist: ["0.01", "0.1", "0.0001"] },
                    { a: "0.12", b: "0.4", ans: "0.048", dist: ["0.48", "0.0048", "0.08"] },
                    { a: "0.04", b: "0.2", ans: "0.008", dist: ["0.08", "0.8", "0.0008"] },
                    { a: "0.3", b: "0.03", ans: "0.009", dist: ["0.09", "0.9", "0.0009"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: " + item.a + " × " + item.b;
                const ans = item.ans;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply digits and count total decimal places, using zeros as placeholders: " + item.a + " × " + item.b + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 4: Subtracting decimals requiring zero placeholder (Lesson 40 #5)
            (r) => {
                const list = [
                    { a: "1.2", b: "0.12", ans: "1.08", dist: ["1.18", "0.08", "1.8"] },
                    { a: "4.6", b: "0.46", ans: "4.14", dist: ["4.24", "4.04", "0.14"] },
                    { a: "0.4", b: "0.32", ans: "0.08", dist: ["0.18", "0.8", "0.008"] },
                    { a: "3.5", b: "0.35", ans: "3.15", dist: ["3.25", "3.05", "0.15"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: " + item.a + " − " + item.b;
                const ans = item.ans;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Attach a trailing zero to line up the decimal places: " + item.a + "0 − " + item.b + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 5: Subtracting decimal from 1 (Lesson 40 #6)
            (r) => {
                const list = [
                    { sub: "0.1", ans: "0.9", dist: ["0.09", "0.99", "0.8"] },
                    { sub: "0.98", ans: "0.02", dist: ["0.2", "0.002", "0.12"] },
                    { sub: "0.75", ans: "0.25", dist: ["0.35", "0.15", "0.025"] },
                    { sub: "0.04", ans: "0.96", dist: ["0.06", "0.86", "0.94"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: 1 − " + item.sub;
                const ans = item.ans;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.00 − " + item.sub + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 6: Squaring decimal with zero placeholder (Lesson 40 #8)
            (r) => {
                const list = [
                    { base: "0.1", ans: "0.01", dist: ["0.1", "0.001", "0.2"] },
                    { base: "0.3", ans: "0.09", dist: ["0.9", "0.009", "0.6"] },
                    { base: "0.12", ans: "0.0144", dist: ["0.144", "0.00144", "0.24"] },
                    { base: "0.2", ans: "0.04", dist: ["0.4", "0.004", "0.08"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: (" + item.base + ")²";
                const ans = item.ans;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.base + " × " + item.base + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 7: Multiplying decimal by two-decimal number (Lesson 40 #9)
            (r) => {
                const list = [
                    { a: 4.8, b: 0.23, ans: "1.104" },
                    { a: 3.6, b: 0.14, ans: "0.504" },
                    { a: 2.5, b: 0.32, ans: "0.8" },
                    { a: 5.2, b: 0.15, ans: "0.78" }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Simplify: " + item.a + " × " + item.b;
                const ans = item.ans;
                const d1 = (parseFloat(item.ans) * 10).toString();
                const d2 = (parseFloat(item.ans) / 10).toString();
                const d3 = (parseFloat(item.ans) + 0.1).toFixed(item.ans.includes(".") ? item.ans.split(".")[1].length : 1);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.a + " × " + item.b + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 8: Writing decimal with zero placeholder from words (Lesson 40 #10)
            (r) => {
                const list = [
                    { words: "one and two hundredths", dec: "1.02", dist: ["1.2", "1.002", "0.12"] },
                    { words: "ten and eleven thousandths", dec: "10.011", dist: ["10.11", "10.110", "1.011"] },
                    { words: "five and three hundredths", dec: "5.03", dist: ["5.3", "5.003", "0.53"] },
                    { words: "six and four thousandths", dec: "6.004", dist: ["6.04", "6.4", "0.604"] }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const q = "Write " + item.words + " as a decimal number.";
                const ans = item.dec;
                const s = shuffle(r, [ans, item.dist[0], item.dist[1], item.dist[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.words + " = " + ans + " (using zero as a placeholder)."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 9: Expanded notation with gaps to standard form (Lesson 40 #11)
            (r) => {
                const tenTh = randInt(r, 4, 8);
                const h = randInt(r, 3, 7);
                const val = tenTh * 10000 + h * 100;
                const q = "Write (" + tenTh + " × 10,000) + (" + h + " × 100) in standard form.";
                const ans = val.toLocaleString();
                const d1 = (tenTh * 1000 + h * 100).toLocaleString();
                const d2 = (tenTh * 10000 + h * 10).toLocaleString();
                const d3 = (val + 1000).toLocaleString();
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + tenTh + " × 10,000) = " + (tenTh * 10000) + ", (" + h + " × 100) = " + (h * 100) + ". Total = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 10: Square room tile count from perimeter (Lesson 40 #12)
            (r) => {
                const side = [6, 8, 10, 12][randInt(r, 0, 3)];
                const perim = 4 * side;
                const tiles = side * side;
                const q = "A square room has a perimeter of " + perim + " feet. How many square floor tiles with sides 1 foot long are needed to cover the floor of the room?";
                const ans = "" + tiles;
                const d1 = "" + perim;
                const d2 = "" + (tiles + 10);
                const d3 = "" + (tiles - 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = " + perim + " ÷ 4 = " + side + " feet.", "Area = " + side + " × " + side + " = " + ans + " square feet, so " + ans + " tiles are needed."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 11: LCM of three numbers (Lesson 40 #13)
            (r) => {
                const triplets = [
                    [2, 4, 8, 8],
                    [2, 3, 6, 6],
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of " + c + " are divisible by " + a + " and " + b + ", so LCM = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 12: Subtracting mixed number from whole number (Lesson 40 #15)
            (r) => {
                const list = [
                    { whole: 5, subW: 3, n: 5, d: 8, ans: "1 3/8" },
                    { whole: 6, subW: 2, n: 3, d: 4, ans: "3 1/4" },
                    { whole: 4, subW: 1, n: 2, d: 5, ans: "2 3/5" },
                    { whole: 7, subW: 4, n: 1, d: 3, ans: "2 2/3" }
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rename " + item.whole + " as " + (item.whole - 1) + " " + item.d + "/" + item.d + ".", (item.whole - 1) + " " + item.d + "/" + item.d + " − " + item.subW + " " + item.n + "/" + item.d + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 13: Multiplying three fractions (Lesson 40 #16)
            (r) => {
                const sets = [
                    [5, 8, 2, 3, 3, 5, "1/4"],
                    [1, 2, 2, 3, 3, 4, "1/4"],
                    [2, 5, 5, 6, 3, 4, "1/4"],
                    [3, 4, 2, 5, 5, 6, "1/4"]
                ];
                const [n1, d1, n2, d2, n3, d3, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Simplify: " + n1 + "/" + d1 + " × " + n2 + "/" + d2 + " × " + n3 + "/" + d3;
                const d1_opt = "1/2";
                const d2_opt = "3/8";
                const d3_opt = "1/8";
                const s = shuffle(r, [ans, d1_opt, d2_opt, d3_opt]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerators: " + (n1 * n2 * n3) + ", multiply denominators: " + (d1 * d2 * d3) + ".", "Reduce: " + (n1 * n2 * n3) + "/" + (d1 * d2 * d3) + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 14: Comparing fraction products (Lesson 40 #18)
            (r) => {
                const q = "Compare: (1/2 × 2/3) [?] (1/2 × 3/3)";
                const ans = "<";
                const d1 = ">";
                const d2 = "=";
                const d3 = "Cannot be determined";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 × 2/3 = 2/6 = 1/3.", "1/2 × 3/3 = 1/2.", "1/3 < 1/2, so (1/2 × 2/3) < (1/2 × 3/3)."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 15: Unknown number in subtraction from 1000 (Lesson 40 #19)
            (r) => {
                const diff = randInt(r, 450, 650);
                const wVal = 1000 - diff;
                const q = "Find the unknown number w: 1000 − w = " + diff;
                const ans = "" + wVal;
                const d1 = "" + (wVal + 10);
                const d2 = "" + (wVal - 10);
                const d3 = "" + (wVal + 100);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 1000 − " + diff + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 16: Factors of 100 (Lesson 40 #20)
            (r) => {
                const q = "Which of the following numbers is NOT a factor of 100?";
                const ans = "30";
                const d1 = "20";
                const d2 = "25";
                const d3 = "50";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The factors of 100 are 1, 2, 4, 5, 10, 20, 25, 50, and 100.", "30 does not divide evenly into 100, so it is not a factor."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 17: Sum of square and square root (Lesson 40 #21)
            (r) => {
                const list = [
                    { n: 9, sq: 81, rt: 3, sum: 84 },
                    { n: 8, sq: 64, rt: 4, sum: 68 },
                    { n: 7, sq: 49, rt: 3, sum: 52 },
                    { n: 6, sq: 36, rt: 4, sum: 40 }
                ];
                const item = list[randInt(r, 0, list.length - 1)];
                const sqRtInput = item.rt * item.rt;
                const q = "Simplify: " + item.n + "² + √" + sqRtInput;
                const ans = "" + item.sum;
                const d1 = "" + (item.sum + 2);
                const d2 = "" + (item.sum - 2);
                const d3 = "" + (item.sq + sqRtInput);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [item.n + "² = " + item.sq + ", √" + sqRtInput + " = " + item.rt + ".", item.sq + " + " + item.rt + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 18: Circle graph sports survey total (Lesson 40 #23)
            (r) => {
                const bBall = [12, 15, 18][randInt(r, 0, 2)];
                const soccer = [8, 10, 12][randInt(r, 0, 2)];
                const sBall = [4, 5, 6][randInt(r, 0, 2)];
                const tot = bBall + soccer + sBall;
                const q = "In a circle graph displaying students' favorite sports, " + bBall + " chose basketball, " + soccer + " chose soccer, and " + sBall + " chose softball. How many students responded to the survey in all?";
                const ans = tot + " students";
                const d1 = (tot + 5) + " students";
                const d2 = (tot - 5) + " students";
                const d3 = (tot + 10) + " students";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [bBall + " + " + soccer + " + " + sBall + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            },
            // Category 19: Percent of class to ratio (Lesson 40 #28)
            (r) => {
                const tot = 25;
                const pct = 40;
                const boys = (tot * pct) / 100; // 10
                const girls = tot - boys; // 15
                const g = 5;
                const bR = boys / g; // 2
                const gR = girls / g; // 3
                const q = pct + "% of the " + tot + " students in a class are boys. What is the ratio of girls to boys in the class in simplest form?";
                const ans = gR + " to " + bR;
                const d1 = bR + " to " + gR;
                const d2 = gR + " to " + (tot / g);
                const d3 = (gR + 1) + " to " + bR;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Number of boys = " + pct + "% of " + tot + " = " + boys + ".", "Number of girls = " + tot + " − " + boys + " = " + girls + ".", "Ratio of girls to boys = " + girls + " to " + boys + " = " + ans + "."], lessonNum: 40, lessonTitle: "Using Zero as a Placeholder • Circle Graphs" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
};

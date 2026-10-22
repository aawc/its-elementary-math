import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 51: Rounding Decimal Numbers
    51: (rng, qIndex) => {
        const framings = [
            // Category 0: Difference between multiples (Lesson 51 #1)
            (r) => {
                const ord = ['first', 'second', 'third', 'fourth', 'fifth'];
                const a = randInt(r, 6, 9), b = randInt(r, 6, 9);
                const m = randInt(r, 2, 3), n = randInt(r, 4, 5);
                const val1 = m * a, val2 = n * b;
                const diff = val2 - val1;
                const q = "When the " + ord[m - 1] + " multiple of " + a + " is subtracted from the " + ord[n - 1] + " multiple of " + b + ", what is the difference?";
                const s = shuffle(r, ["" + diff, "" + (diff + a), "" + (diff - b), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ord[m-1] + " multiple of " + a + " is " + val1 + "; " + ord[n-1] + " multiple of " + b + " is " + val2 + ". " + val2 + " - " + val1 + " = " + diff + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 1: Round-trip distance (Lesson 51 #2)
            (r) => {
                const names = ["Mona", "Clara", "Devon", "Mateo", "Brianna"];
                const name = names[randInt(r, 0, names.length - 1)];
                const d = (randInt(r, 25, 45) / 10).toFixed(1);
                const tot = (parseFloat(d) * 2).toFixed(1);
                const q = "From " + name + "'s home to school is " + d + " miles. How far does " + name + " travel riding from home to school and back home?";
                const s = shuffle(r, [tot + " miles", d + " miles", (parseFloat(tot) + 1).toFixed(1) + " miles", (parseFloat(tot) - 0.5).toFixed(1) + " miles"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Double the one-way distance: " + d + " + " + d + " = " + tot + " miles."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 2: Historical age problem (Lesson 51 #3)
            (r) => {
                const figs = [
                    ["Napoleon I", 1769, "crowned emperor of France", 1804],
                    ["Abraham Lincoln", 1809, "elected President of the United States", 1860],
                    ["Thomas Jefferson", 1743, "drafted the Declaration of Independence", 1776],
                    ["Alexander Hamilton", 1757, "appointed Secretary of the Treasury", 1789]
                ];
                const [fig, bYear, event, eYear] = figs[randInt(r, 0, figs.length - 1)];
                const age = eYear - bYear;
                const q = fig + " was born in " + bYear + ". How old was he when he was " + event + " in " + eYear + "?";
                const s = shuffle(r, [age + " years old", (age - 1) + " years old", (age + 1) + " years old", (age + 10) + " years old"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract birth year from event year: " + eYear + " - " + bYear + " = " + age + " years old."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 3: Sales tax calculation (Lesson 51 #4a)
            (r) => {
                const items = ["music CD", "book", "board game", "headphone set"];
                const item = items[randInt(r, 0, items.length - 1)];
                const priceCents = randInt(r, 1100, 2400);
                const priceStr = (priceCents / 100).toFixed(2);
                const rate = randInt(r, 6, 8);
                const taxCents = Math.round(priceCents * rate / 100);
                const taxStr = (taxCents / 100).toFixed(2);
                const q = "A student purchased a " + item + " for $" + priceStr + ". The sales-tax rate was " + rate + "%. What was the tax on the purchase? (Round to the nearest cent.)";
                const s = shuffle(r, ["$" + taxStr, "$" + ((taxCents + 10) / 100).toFixed(2), "$" + ((taxCents - 5) / 100).toFixed(2), "$" + ((taxCents + 5) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = $" + priceStr + " × " + (rate / 100) + " = $" + (priceCents * rate / 10000).toFixed(4) + ", which rounds to $" + taxStr + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 4: Total price including sales tax (Lesson 51 #4b)
            (r) => {
                const priceCents = randInt(r, 1200, 2500);
                const priceStr = (priceCents / 100).toFixed(2);
                const rate = randInt(r, 6, 8);
                const taxCents = Math.round(priceCents * rate / 100);
                const totCents = priceCents + taxCents;
                const totStr = (totCents / 100).toFixed(2);
                const q = "An item was priced at $" + priceStr + ". With a sales-tax rate of " + rate + "%, what was the total price including tax? (Round to the nearest cent.)";
                const s = shuffle(r, ["$" + totStr, "$" + ((totCents + 10) / 100).toFixed(2), "$" + ((totCents - 10) / 100).toFixed(2), "$" + ((totCents + 100) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = $" + (taxCents/100).toFixed(2) + ". Total = $" + priceStr + " + $" + (taxCents/100).toFixed(2) + " = $" + totStr + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 5: Circle diameter from radius (Lesson 51 #5a)
            (r) => {
                const rad = randInt(r, 3, 14);
                const diam = 2 * rad;
                const q = "A student used a compass to draw a circle with a radius of " + rad + " inches. What is the diameter of the circle?";
                const s = shuffle(r, [diam + " inches", rad + " inches", (diam + 2) + " inches", (diam - 2) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The diameter is twice the radius: 2 × " + rad + " = " + diam + " inches."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 6: Circle circumference rounded to nearest inch (Lesson 51 #5b)
            (r) => {
                const rad = randInt(r, 3, 8);
                const diam = 2 * rad;
                const circ = Math.round(3.14 * diam);
                const q = "Find the circumference of a circle with a radius of " + rad + " inches to the nearest inch. (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " inches", Math.round(3.14 * rad) + " inches", (circ + 3) + " inches", (circ - 3) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = 2 × " + rad + " = " + diam + " in. Circumference = 3.14 × " + diam + " = " + (3.14 * diam).toFixed(2) + ", which rounds to " + circ + " inches."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 7: Round decimal to nearest whole number (Lesson 51 #6 / PS g,h)
            (r) => {
                const whole = randInt(r, 12, 45);
                const frac = randInt(r, 15, 85);
                const val = parseFloat(whole + "." + frac);
                const ans = Math.round(val);
                const q = "Round " + val.toFixed(2) + " to the nearest whole number.";
                const s = shuffle(r, ["" + ans, "" + (ans === whole ? whole + 1 : whole), "" + (ans + 2), "" + (ans - 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Look at the tenths digit (" + Math.floor(frac / 10) + "). Since it is " + (Math.floor(frac/10) >= 5 ? "5 or greater, round up" : "less than 5, round down") + " to " + ans + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 8: Round decimal to nearest tenth (Lesson 51 PS d,e,f)
            (r) => {
                const whole = randInt(r, 2, 25);
                const tenths = randInt(r, 1, 8);
                const hundredths = randInt(r, 1, 9);
                const thousandths = randInt(r, 1, 9);
                const num = parseFloat(whole + "." + tenths + "" + hundredths + "" + thousandths);
                const ans = num.toFixed(1);
                const alt1 = (parseFloat(ans) + 0.1).toFixed(1);
                const alt2 = (parseFloat(ans) - 0.1).toFixed(1);
                const alt3 = num.toFixed(2);
                const q = "Round " + num.toFixed(3) + " to the nearest tenth.";
                const s = shuffle(r, [ans, alt1, alt2, alt3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Look at the hundredths digit (" + hundredths + "). Rounding to tenths gives " + ans + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 9: Round money to nearest cent (Lesson 51 PS a,b,c)
            (r) => {
                const d = randInt(r, 1, 9);
                const c1 = randInt(r, 10, 99);
                const c2 = randInt(r, 10, 99);
                const raw = parseFloat(d + "." + c1 + "" + c2);
                const ans = (Math.round(raw * 100) / 100).toFixed(2);
                const q = "Round $" + d + "." + c1 + "" + c2 + " to the nearest cent.";
                const s = shuffle(r, ["$" + ans, "$" + (parseFloat(ans) + 0.01).toFixed(2), "$" + (parseFloat(ans) - 0.01).toFixed(2), "$" + (parseFloat(ans) + 0.10).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Look at the third decimal place. Rounding to the nearest hundredth gives $" + ans + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 10: Decimal addition (Lesson 51 #7)
            (r) => {
                const triples = [[0.125, 0.25, 0.375], [0.375, 0.125, 0.5], [0.125, 0.375, 0.25], [0.25, 0.5, 0.125]];
                const [a, b, c] = triples[randInt(r, 0, triples.length - 1)];
                const sum = (a + b + c).toFixed(3);
                const sumNum = parseFloat(sum);
                const q = "Simplify: " + a + " + " + b + " + " + c;
                const s = shuffle(r, ["" + sumNum, "" + (sumNum + 0.1).toFixed(3), "" + (sumNum - 0.05).toFixed(3), "" + (sumNum + 0.05).toFixed(3)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Align decimal places and add: " + a + " + " + b + " + " + c + " = " + sumNum + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 11: Unknown in decimal addition (Lesson 51 #8)
            (r) => {
                const wVal = randInt(r, 1, 9);
                const w = (wVal / 1000).toFixed(3);
                const tot = 0.4;
                const start = (tot - parseFloat(w)).toFixed(3);
                const q = "Find the unknown number w: " + start + " + w = 0.4";
                const s = shuffle(r, ["" + w, "" + (parseFloat(w) * 10).toFixed(3), "" + (parseFloat(w) + 0.002).toFixed(3), "" + (parseFloat(w) + 0.01).toFixed(3)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract " + start + " from 0.400: 0.400 - " + start + " = " + w + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 12: Decimal division (Lesson 51 #11)
            (r) => {
                const divs = [0.25, 0.5, 0.2];
                const div = divs[randInt(r, 0, divs.length - 1)];
                const ans = randInt(r, 8, 24);
                const dividend = (ans * div).toFixed(2);
                const q = "Find the quotient: " + dividend + " ÷ " + div;
                const s = shuffle(r, ["" + ans, "" + (ans * 10), "" + (ans - 2), "" + (ans + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply both divisor and dividend to make the divisor a whole number: " + dividend + " ÷ " + div + " = " + ans + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 13: Multiplying small decimals (Lesson 51 #15)
            (r) => {
                const a = (randInt(r, 12, 28) / 100).toFixed(2);
                const b = (randInt(r, 15, 25) / 100).toFixed(2);
                const prod = (parseFloat(a) * parseFloat(b)).toFixed(4);
                const q = "Simplify: (" + a + ")(" + b + ")";
                const s = shuffle(r, ["" + prod, "" + (parseFloat(prod) * 10).toFixed(4), "" + (parseFloat(prod) + 0.01).toFixed(4), "" + (parseFloat(prod) - 0.01).toFixed(4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply without decimals, then place the decimal point 4 digits from the right: " + a + " × " + b + " = " + prod + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 14: Decimal to fraction (Lesson 51 #16)
            (r) => {
                const pairs = [["0.01", "1/100"], ["0.04", "1/25"], ["0.05", "1/20"], ["0.08", "2/25"], ["0.02", "1/50"]];
                const [dec, frac] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Write " + dec + " as a reduced fraction.";
                const s = shuffle(r, [frac, "1/10", "1/5", "1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dec + " means " + Math.round(parseFloat(dec)*100) + "/100, which reduces to " + frac + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 15: Expanded notation to decimal (Lesson 51 #17)
            (r) => {
                const t = randInt(r, 4, 8);
                const h = randInt(r, 1, 9);
                const dec = (t * 10 + h / 100).toFixed(2);
                const q = "Write (" + t + " × 10) + (" + h + " × 1/100) as a decimal number.";
                const s = shuffle(r, ["" + dec, (t * 10 + h / 10).toFixed(1), (t + h / 100).toFixed(2), (t * 10 + h).toFixed(1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [t + " × 10 = " + (t*10) + ", and " + h + " × 1/100 = 0.0" + h + ". Sum = " + dec + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 16: Area of square to perimeter (Lesson 51 #18)
            (r) => {
                const side = randInt(r, 5, 12);
                const area = side * side;
                const peri = 4 * side;
                const q = "The area of a square is " + area + " cm². What is the perimeter of the square?";
                const s = shuffle(r, [peri + " cm", (2 * side) + " cm", area + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side = √" + area + " = " + side + " cm. Perimeter = 4 × " + side + " = " + peri + " cm."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 17: LCM of three small numbers (Lesson 51 #19)
            (r) => {
                const triples = [[2, 3, 4, 12], [2, 4, 6, 12], [3, 4, 6, 12], [2, 3, 5, 30], [2, 4, 5, 20]];
                const [a, b, c, lcmVal] = triples[randInt(r, 0, triples.length - 1)];
                const q = "What is the least common multiple of " + a + ", " + b + ", and " + c + "?";
                const s = shuffle(r, ["" + lcmVal, "" + (a * b * c), "" + (lcmVal * 2), "" + (lcmVal + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The smallest positive integer that is a multiple of " + a + ", " + b + ", and " + c + " is " + lcmVal + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 18: Stack of paperback books (Lesson 51 #22)
            (r) => {
                const hList = [9, 12, 15, 18];
                const h = hList[randInt(r, 0, hList.length - 1)];
                const books = h * 4 / 3;
                const q = "A collection of paperback books was stacked " + h + " inches high. Each book in the stack was 3/4 inch thick. How many books were in the stack?";
                const s = shuffle(r, [books + " books", (books - 2) + " books", (books + 2) + " books", (h * 3 / 4) + " books"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide total height by thickness: " + h + " ÷ (3/4) = " + h + " × (4/3) = " + books + " books."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 19: Estimating product by rounding factors to whole numbers (Lesson 51 #25)
            (r) => {
                const aVal = (randInt(r, 115, 124) / 10).toFixed(1);
                const bVal = (randInt(r, 36, 44) / 10).toFixed(2);
                const rA = Math.round(parseFloat(aVal));
                const rB = Math.round(parseFloat(bVal));
                const est = rA * rB;
                const q = "Estimate the product of " + aVal + " and " + bVal + " by rounding the factors to the nearest whole number before multiplying.";
                const s = shuffle(r, ["" + est, "" + (est + 10), "" + (est - 10), "" + (rA * (rB + 1))]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [aVal + " rounds to " + rA + ", and " + bVal + " rounds to " + rB + ". " + rA + " × " + rB + " = " + est + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 52: Mentally Dividing Decimal Numbers by 10 and 100
    52: (rng, qIndex) => {
        const framings = [
            // Category 0: Mentally divide decimal by 10 (Lesson 52 PS a,c,e,g)
            (r) => {
                const vals = [2.5, 87.5, 0.5, 25, 6.4, 34.2, 4.8];
                const val = vals[randInt(r, 0, vals.length - 1)];
                const ans = (val / 10).toFixed(String(val).includes('.') ? String(val).split('.')[1].length + 1 : 1);
                const q = "Mentally calculate the quotient: " + val + " ÷ 10";
                const s = shuffle(r, [ans, (val * 10).toFixed(1), (val / 100).toFixed(3), (parseFloat(ans) + 0.1).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 10 shifts the decimal point 1 place to the left: " + val + " ÷ 10 = " + ans + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 1: Mentally divide decimal by 100 (Lesson 52 PS b,d,f,h)
            (r) => {
                const vals = [2.5, 87.5, 0.5, 25, 4.2, 65, 3.8];
                const val = vals[randInt(r, 0, vals.length - 1)];
                const ans = (val / 100).toFixed(String(val).includes('.') ? String(val).split('.')[1].length + 2 : 2);
                const q = "Mentally divide by 100 to find the quotient: " + val + " ÷ 100";
                const s = shuffle(r, [ans, (val / 10).toFixed(2), (val * 100).toFixed(0), (parseFloat(ans) + 0.05).toFixed(3)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 100 shifts the decimal point 2 places to the left: " + val + " ÷ 100 = " + ans + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 2: Stack of pennies thickness in mm (Lesson 52 PS i)
            (r) => {
                const h = (randInt(r, 14, 18) / 10).toFixed(1);
                const mm = (parseFloat(h) * 10 / 10).toFixed(1);
                const q = "A stack of 10 pennies is " + h + " cm high. How thick is one penny in millimeters?";
                const s = shuffle(r, [mm + " mm", (parseFloat(h) / 10).toFixed(2) + " mm", (parseFloat(mm) + 1).toFixed(1) + " mm", (parseFloat(mm) * 10).toFixed(0) + " mm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10 pennies = " + h + " cm = " + (parseFloat(h) * 10).toFixed(0) + " mm. One penny = " + (parseFloat(h) * 10).toFixed(0) + " ÷ 10 = " + mm + " mm."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 3: Product of two fractions (Lesson 52 #1)
            (r) => {
                const pairs = [[1, 2, "one half", 2, 3, "two thirds", "1/3"], [1, 3, "one third", 3, 4, "three fourths", "1/4"], [2, 3, "two thirds", 3, 5, "three fifths", "2/5"]];
                const p = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the product of " + p[2] + " and " + p[5] + " in simplest form?";
                const s = shuffle(r, [p[6], "1/2", "3/5", "2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerators and denominators: (" + p[0] + "/" + p[1] + ") × (" + p[3] + "/" + p[4] + ") = " + p[6] + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 4: Piano keys difference (Lesson 52 #2)
            (r) => {
                const tot = 88, white = 52, black = tot - white, diff = white - black;
                const q = "A standard piano has 88 keys. Fifty-two of the keys are white and the rest are black. How many more white keys are there than black keys?";
                const s = shuffle(r, [diff + " keys", black + " keys", "24 keys", "12 keys"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Black keys = 88 - 52 = 36. Difference = 52 - 36 = " + diff + " keys."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 5: Digits representation of large numbers (Lesson 52 #3)
            (r) => {
                const items = [
                    ["twenty-eight thousand, two hundred thirty-two", "28,232", ["28,223", "28,322", "28,230"]],
                    ["twenty-nine thousand, twenty-nine", "29,029", ["29,290", "29,092", "29,209"]],
                    ["thirty-five thousand, eight hundred forty", "35,840", ["35,804", "35,480", "35,844"]]
                ];
                const [words, digits, dList] = items[randInt(r, 0, items.length - 1)];
                const q = "Use digits to write the number: " + words + ".";
                const s = shuffle(r, [digits, ...dList]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [words + " written with digits is " + digits + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 6: Mental multiply and divide by 10 pair (Lesson 52 #4)
            (r) => {
                const v = (randInt(r, 225, 475) / 100).toFixed(2);
                const mul = (parseFloat(v) * 10).toFixed(1);
                const div = (parseFloat(v) / 10).toFixed(3);
                const q = "Mentally calculate both " + v + " × 10 and " + v + " ÷ 10. Which choice correctly pairs the (product, quotient)?";
                const s = shuffle(r, [mul + " and " + div, div + " and " + mul, mul + " and " + (parseFloat(v) / 100).toFixed(4), (parseFloat(v) * 100).toFixed(0) + " and " + div]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply by 10: " + v + " × 10 = " + mul + ". Divide by 10: " + v + " ÷ 10 = " + div + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 7: Student-teacher ratio (Lesson 52 #5)
            (r) => {
                const ratio = randInt(r, 18, 24);
                const teachers = randInt(r, 12, 16);
                const students = teachers * ratio;
                const q = "At Carver School there are " + students + " students and " + teachers + " teachers. What is the student-teacher ratio in lowest terms?";
                const s = shuffle(r, [ratio + " to 1", (ratio + 2) + " to 1", (ratio - 2) + " to 1", "1 to " + ratio]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both numbers by " + teachers + ": " + students + " ÷ " + teachers + " = " + ratio + ", so " + ratio + " to 1."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 8: Repeated multiplication power of 2 (Lesson 52 #6)
            (r) => {
                const count = randInt(r, 4, 6);
                const ans = Math.pow(2, count);
                const q = "Simplify: " + Array(count).fill("2").join(" · ");
                const s = shuffle(r, ["" + ans, "" + (ans * 2), "" + (count * 2), "" + (ans - 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 multiplied " + count + " times equals 2^" + count + " = " + ans + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 9: Multiply integer by decimal (Lesson 52 #7)
            (r) => {
                const pairs = [[4, 0.125, "0.5"], [8, 0.125, "1"], [5, 0.25, "1.25"], [6, 0.15, "0.9"]];
                const [n, d, ans] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Simplify: (" + n + ")(" + d + ")";
                const s = shuffle(r, [ans, (parseFloat(ans) * 10).toFixed(1), (parseFloat(ans) / 10).toFixed(2), (parseFloat(ans) + 0.2).toFixed(1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " × " + d + " = " + ans + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 10: Unknown in mixed number subtraction (Lesson 52 #8 / #11)
            (r) => {
                const w1 = randInt(r, 5, 8), w2 = randInt(r, 1, 3);
                const ansW = w1 - w2;
                const q = "Find the unknown number m: " + w1 + " 2/3 − m = " + w2 + " 1/3";
                const ans = ansW + " 1/3";
                const s = shuffle(r, [ans, (ansW + 1) + " 1/3", ansW + " 2/3", (ansW - 1) + " 1/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = " + w1 + " 2/3 - " + w2 + " 1/3 = " + ans + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 11: Unknown in money subtraction (Lesson 52 #13)
            (r) => {
                const bills = [10, 20];
                const bill = bills[randInt(r, 0, bills.length - 1)];
                const cents = randInt(r, 10, 25);
                const diffStr = (cents / 100).toFixed(2);
                const wCents = bill * 100 - cents;
                const wStr = (wCents / 100).toFixed(2);
                const q = "Find the unknown number w: $" + bill + " − w = $" + diffStr;
                const s = shuffle(r, ["$" + wStr, "$" + ((wCents + 10) / 100).toFixed(2), "$" + ((wCents - 10) / 100).toFixed(2), "$" + ((bill * 100 - cents * 2) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = $" + bill + ".00 - $" + diffStr + " = $" + wStr + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 12: Sales tax rounded to nearest cent (Lesson 52 #14)
            (r) => {
                const priceCents = randInt(r, 750, 950);
                const priceStr = (priceCents / 100).toFixed(2);
                const rate = 6;
                const taxCents = Math.round(priceCents * rate / 100);
                const taxStr = (taxCents / 100).toFixed(2);
                const q = "At a 6% sales-tax rate, what is the tax on an $" + priceStr + " purchase? (Round to the nearest cent.)";
                const s = shuffle(r, ["$" + taxStr, "$" + ((taxCents + 10) / 100).toFixed(2), "$" + ((taxCents - 5) / 100).toFixed(2), "$" + ((taxCents + 5) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = $" + priceStr + " × 0.06 = $" + (priceCents * 0.06 / 100).toFixed(4) + ", which rounds to $" + taxStr + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 13: Circumference of car tire (Lesson 52 #15)
            (r) => {
                const diam = randInt(r, 22, 28);
                const circ = Math.round(3.14 * diam);
                const q = "The diameter of a tire on a car was " + diam + " inches. Find the circumference of the tire to the nearest inch. (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " inches", (circ + 3) + " inches", (circ - 3) + " inches", Math.round(3.14 * diam / 2) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × d = 3.14 × " + diam + " = " + (3.14 * diam).toFixed(2) + ", which rounds to " + circ + " inches."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 14: Ordering decimals least to greatest (Lesson 52 #16)
            (r) => {
                const list = [1.02, 1.2, 0.21, 0.201];
                const correct = "0.201, 0.21, 1.02, 1.2";
                const q = "Arrange these numbers in order from least to greatest: 1.02, 1.2, 0.21, 0.201";
                const s = shuffle(r, [correct, "0.21, 0.201, 1.02, 1.2", "0.201, 0.21, 1.2, 1.02", "1.02, 1.2, 0.201, 0.21"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Comparing tenths and hundredths gives least to greatest: " + correct + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 15: Sequence of differences (Lesson 52 #17)
            (r) => {
                const q = "What is the missing number in this sequence? 1, 2, 4, 7, 11, __, 22";
                const s = shuffle(r, ["16", "15", "17", "18"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Differences increase by 1 each time (+1, +2, +3, +4, +5, +6). 11 + 5 = 16."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 16: Square room floor tiles (Lesson 52 #18)
            (r) => {
                const peris = [60, 80, 100, 120];
                const peri = peris[randInt(r, 0, peris.length - 1)];
                const side = peri / 4;
                const area = side * side;
                const q = "The perimeter of a square room is " + peri + " feet. How many floor tiles 1 foot square would be needed to cover the area of the room?";
                const s = shuffle(r, [area + " tiles", (side * 2) + " tiles", (area + 50) + " tiles", (area - 50) + " tiles"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = " + peri + " ÷ 4 = " + side + " ft. Area = " + side + " × " + side + " = " + area + " sq ft, so " + area + " tiles."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 17: Fraction of a foot (Lesson 52 #19)
            (r) => {
                const incs = [3, 4, 6, 8, 9];
                const inc = incs[randInt(r, 0, incs.length - 1)];
                const frac = formatFraction(inc, 12);
                const q = "One foot is 12 inches. What fraction of a foot is " + inc + " inches in simplest form?";
                const s = shuffle(r, [frac, "1/2", "3/4", "1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [inc + "/12 reduces to " + frac + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 18: Fraction of a dollar in cents (Lesson 52 #20)
            (r) => {
                const pairs = [["2/5", "40¢"], ["3/4", "75¢"], ["3/10", "30¢"], ["1/4", "25¢"], ["7/10", "70¢"]];
                const [f, c] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "How many cents is " + f + " of a dollar?";
                const s = shuffle(r, [c, "50¢", "20¢", "60¢"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [f + " of 100 cents = " + c + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            },
            // Category 19: Pennies in a row (Lesson 52 #21)
            (r) => {
                const lens = [6, 9, 12, 15];
                const len = lens[randInt(r, 0, lens.length - 1)];
                const count = len * 4 / 3;
                const q = "The diameter of a penny is 3/4 inch. How many pennies are needed to form a row " + len + " inches long?";
                const s = shuffle(r, [count + " pennies", (count - 2) + " pennies", (count + 2) + " pennies", (len * 3 / 4) + " pennies"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [len + " ÷ (3/4) = " + len + " × (4/3) = " + count + " pennies."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 53: Decimals Chart • Simplifying Fractions
    53: (rng, qIndex) => {
        const framings = [
            // Category 0: Purpose of lining up decimal points (Lesson 53 #1)
            (r) => {
                const q = "Why do we line up decimal points when adding or subtracting decimal numbers?";
                const correct = "To add or subtract digits that have the same place value";
                const s = shuffle(r, [correct, "To make both numbers have the same number of digits", "To convert decimals into whole numbers before computing", "To easily determine which decimal number is greater"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Lining up decimal points aligns tenths with tenths, hundredths with hundredths, ensuring like place values are combined."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 1: Turkey roasting elapsed time backwards (Lesson 53 #2)
            (r) => {
                const setups = [
                    ["4 hours 45 minutes", "3:00 p.m.", "10:15 a.m."],
                    ["3 hours 30 minutes", "2:00 p.m.", "10:30 a.m."],
                    ["5 hours 15 minutes", "4:00 p.m.", "10:45 a.m."]
                ];
                const [dur, done, start] = setups[randInt(r, 0, setups.length - 1)];
                const q = "A turkey must cook for " + dur + ". At what time must it be put into the oven in order to be done by " + done + "?";
                const s = shuffle(r, [start, "11:15 a.m.", "10:45 a.m.", "9:45 a.m."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Count backward from " + done + " by " + dur + " to get " + start + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 2: Pie eating contest rate (Lesson 53 #3)
            (r) => {
                const sec = randInt(r, 6, 9);
                const totSec = 4 * sec;
                const q = "Billy won the eating contest by finishing 1/4 of a berry pie in " + sec + " seconds. At this rate, how long would it take Billy to eat a whole berry pie?";
                const s = shuffle(r, [totSec + " seconds", (totSec + 4) + " seconds", (totSec - 4) + " seconds", (sec * 2) + " seconds"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A whole pie is 4 fourths: 4 × " + sec + " = " + totSec + " seconds."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 3: Mean of four game scores (Lesson 53 #4)
            (r) => {
                const sets = [[47, 52, 63, 66, 57], [45, 55, 60, 68, 57], [50, 54, 62, 70, 59]];
                const [a, b, c, d, mean] = sets[randInt(r, 0, sets.length - 1)];
                const q = "In four games the basketball team scored " + a + ", " + b + ", " + c + ", and " + d + " points. What is the mean of these scores?";
                const s = shuffle(r, [mean + " points", (mean + 2) + " points", (mean - 2) + " points", (mean + 5) + " points"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = " + (a + b + c + d) + ". Mean = " + (a + b + c + d) + " ÷ 4 = " + mean + " points."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 4: Range of four game scores (Lesson 53 #4b)
            (r) => {
                const sets = [[47, 52, 63, 66], [42, 50, 61, 68], [45, 55, 60, 72]];
                const arr = sets[randInt(r, 0, sets.length - 1)];
                const range = arr[3] - arr[0];
                const q = "In four games the basketball team scored " + arr.join(", ") + " points. What is the range of these scores?";
                const s = shuffle(r, [range + " points", (range + 3) + " points", (range - 3) + " points", (range + 10) + " points"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Range = highest score - lowest score = " + arr[3] + " - " + arr[0] + " = " + range + " points."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 5: Unknown in decimal equation (Lesson 53 #5)
            (r) => {
                const q = "Find the unknown number x: 0.375x = 37.5";
                const s = shuffle(r, ["100", "10", "1000", "0.1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide 37.5 by 0.375: 37.5 ÷ 0.375 = 100."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 6: Unknown in division equation (Lesson 53 #6)
            (r) => {
                const q = "Find the unknown number m: m ÷ 10 = 1.25";
                const s = shuffle(r, ["12.5", "0.125", "125", "1.25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply 1.25 by 10: 1.25 × 10 = 12.5."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 7: Percent as fraction and decimal (Lesson 53 #7)
            (r) => {
                const items = [[1, "1/100 and 0.01"], [5, "1/20 and 0.05"], [25, "1/4 and 0.25"], [50, "1/2 and 0.5"]];
                const [p, ans] = items[randInt(r, 0, items.length - 1)];
                const q = "Write " + p + "% as a reduced fraction and as a decimal number.";
                const s = shuffle(r, [ans, "1/10 and 0.1", "1/1000 and 0.001", "1/5 and 0.2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [p + "% = " + p + "/100, which as a decimal is " + (p/100).toFixed(2) + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 8: Add mixed integers and decimals (Lesson 53 #8)
            (r) => {
                const a = (randInt(r, 25, 45) / 10).toFixed(1);
                const b = randInt(r, 3, 6);
                const c = (randInt(r, 20, 45) / 100).toFixed(2);
                const sum = (parseFloat(a) + b + parseFloat(c)).toFixed(2);
                const q = "Find the sum: " + a + " + " + b + " + " + c;
                const s = shuffle(r, ["" + sum, (parseFloat(sum) + 0.1).toFixed(2), (parseFloat(sum) - 0.1).toFixed(2), (parseFloat(sum) + 1).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Align decimals: " + a + " + " + b + ".0 + " + c + " = " + sum + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 9: Divide integer by decimal (Lesson 53 #9)
            (r) => {
                const pairs = [[36, 0.12, 300], [48, 0.12, 400], [24, 0.08, 300], [45, 0.15, 300]];
                const [num, den, ans] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the quotient: " + num + " ÷ " + den;
                const s = shuffle(r, ["" + ans, "" + (ans / 10), "" + (ans * 10), "" + (ans + 50)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [num + " ÷ " + den + " = " + (num * 100) + " ÷ " + (den * 100) + " = " + ans + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 10: Subtract mixed numbers with like denominators (Lesson 53 #10)
            (r) => {
                const w1 = randInt(r, 6, 9), w2 = randInt(r, 2, 4);
                const ansW = w1 - w2;
                const q = "Simplify: " + w1 + " 3/4 − " + w2 + " 1/4";
                const ans = ansW + " 1/2";
                const s = shuffle(r, [ans, ansW + " 2/4", (ansW + 1) + " 1/2", (ansW - 1) + " 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [w1 + " - " + w2 + " = " + ansW + ", 3/4 - 1/4 = 2/4 = 1/2. Result: " + ans + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 11: Multiply fractions with cancellation (Lesson 53 #11)
            (r) => {
                const sets = [[2, 3, 3, 5, "2/5"], [3, 4, 2, 3, "1/2"], [3, 5, 5, 6, "1/2"], [2, 5, 5, 8, "1/4"]];
                const [n1, d1, n2, d2, ans] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Find the product in simplest form: (" + n1 + "/" + d1 + ") × (" + n2 + "/" + d2 + ")";
                const s = shuffle(r, [ans, "3/5", "2/3", "1/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cancel common factors and multiply: (" + n1 + "/" + d1 + ") × (" + n2 + "/" + d2 + ") = " + ans + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 12: Add mixed numbers to integer (Lesson 53 #12)
            (r) => {
                const w1 = randInt(r, 4, 7), w2 = randInt(r, 5, 8);
                const sum = w1 + w2 + 1;
                const q = "Find the sum: " + w1 + " 3/8 + " + w2 + " 5/8";
                const s = shuffle(r, ["" + sum, "" + (sum - 1), sum + " 1/8", "" + (sum + 1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [w1 + " + " + w2 + " = " + (w1 + w2) + "; 3/8 + 5/8 = 8/8 = 1. " + (w1 + w2) + " + 1 = " + sum + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 13: Place value comparison between whole number and decimal (Lesson 53 #14)
            (r) => {
                const q = "Which digit in 3456 has the same place value as the 2 in 28.7?";
                const s = shuffle(r, ["5", "4", "3", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The 2 in 28.7 is in the tens place. In 3456, the digit in the tens place is 5."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 14: Lunch sales tax and total (Lesson 53 #15)
            (r) => {
                const priceCents = randInt(r, 480, 680);
                const priceStr = (priceCents / 100).toFixed(2);
                const taxCents = Math.round(priceCents * 0.08);
                const taxStr = (taxCents / 100).toFixed(2);
                const q = "The items ordered for lunch totaled $" + priceStr + ". The sales-tax rate was 8%. Find the sales tax to the nearest cent.";
                const s = shuffle(r, ["$" + taxStr, "$" + ((taxCents + 5) / 100).toFixed(2), "$" + ((taxCents - 5) / 100).toFixed(2), "$" + ((taxCents + 10) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + priceStr + " × 0.08 = $" + (priceCents * 0.08 / 100).toFixed(4) + ", which rounds to $" + taxStr + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 15: Number closest to 1 (Lesson 53 #16)
            (r) => {
                const q = "Which of the following numbers is closest to 1?";
                const s = shuffle(r, ["0.9", "1.2", "0.15", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["|1 - 0.9| = 0.1, |1 - 1.2| = 0.2, |1 - 0.5| = 0.5, |1 - 0.15| = 0.85. The closest is 0.9."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 16: Circle circumference around a group (Lesson 53 #17)
            (r) => {
                const diams = [30, 40, 50, 60];
                const diam = diams[randInt(r, 0, diams.length - 1)];
                const circ = Math.round(3.14 * diam);
                const q = "A class held hands and formed a big circle " + diam + " feet across the center. How many feet around was the circle? Round to the nearest foot. (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " feet", (circ + 5) + " feet", (circ - 5) + " feet", Math.round(3.14 * diam / 2) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × d = 3.14 × " + diam + " = " + (3.14 * diam).toFixed(2) + ", which rounds to " + circ + " feet."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 17: Perimeter of square with fractional side (Lesson 53 #18)
            (r) => {
                const q = "What is the perimeter of a square with sides of length 3/8 inch?";
                const s = shuffle(r, ["1 1/2 inches", "3/2 inches", "12/8 inches", "3/4 inch"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 4 × (3/8) = 12/8 = 1 4/8 = 1 1/2 inches."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 18: Fraction of a yard in inches (Lesson 53 #19)
            (r) => {
                const incs = [3, 6, 9, 12, 18];
                const inc = incs[randInt(r, 0, incs.length - 1)];
                const frac = formatFraction(inc, 36);
                const q = "A yard is 36 inches. What fraction of a yard is " + inc + " inches in simplest form?";
                const s = shuffle(r, [frac, "1/3", "1/4", "1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [inc + "/36 reduces to " + frac + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 19: Difference between square and square root (Lesson 53 #21)
            (r) => {
                const pairs = [[4, 16, 2, 14], [9, 81, 3, 78], [16, 256, 4, 252]];
                const [base, sq, rt, diff] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = base + " squared is how much greater than the square root of " + base + "?";
                const s = shuffle(r, ["" + diff, "" + (sq - base), "" + sq, "" + (diff + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [base + " squared is " + sq + ". The square root of " + base + " is " + rt + ". " + sq + " - " + rt + " = " + diff + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 54: Reducing by Grouping Factors Equal to 1 • Dividing Fractions
    54: (rng, qIndex) => {
        const framings = [
            // Category 0: Dividing fractions (Lesson 54 core)
            (r) => {
                const q = "Divide: (3/4) ÷ (1/2)";
                const s = shuffle(r, ["1 1/2", "3/8", "2/3", "3/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Invert the divisor and multiply: (3/4) × (2/1) = 6/4 = 1 1/2."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 1: Dividing fraction by fraction (Lesson 54 core)
            (r) => {
                const q = "Find the quotient of the fractions: (2/3) ÷ (3/4)";
                const s = shuffle(r, ["8/9", "1/2", "9/8", "6/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Invert and multiply: (2/3) × (4/3) = 8/9."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 2: Reduce by grouping factors equal to 1 (Lesson 54 core / #28)
            (r) => {
                const q = "Simplify by grouping factors equal to 1: (2 · 3 · 5 · 3 · 2) / (2 · 3 · 2 · 5)";
                const s = shuffle(r, ["3", "6", "1", "2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Group (2/2) · (3/3) · (2/2) · (5/5) · 3 = 1 · 1 · 1 · 1 · 3 = 3."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 3: Dividend and divisor decimal division (Lesson 54 #2)
            (r) => {
                const pairs = [[0.4, 4, "0.1"], [0.6, 3, "0.2"], [0.8, 4, "0.2"], [0.9, 3, "0.3"]];
                const [dend, dsor, ans] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "If " + dend + " is the dividend and " + dsor + " is the divisor, what is the quotient?";
                const s = shuffle(r, [ans, "0.01", "1.0", (parseFloat(ans) + 0.1).toFixed(1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide dividend by divisor: " + dend + " ÷ " + dsor + " = " + ans + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 4: Population increase rounded to nearest million (Lesson 54 #3)
            (r) => {
                const q = "In 1900 the U.S. population was 76,212,168. In 1950 the population was 151,325,798. Estimate the increase in population between 1900 and 1950 to the nearest million.";
                const s = shuffle(r, ["75 million", "80 million", "70 million", "65 million"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Round to nearest million: 151,000,000 - 76,000,000 = 75,000,000 (75 million)."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 5: Height growth mixed numbers (Lesson 54 #4)
            (r) => {
                const names = ["Marjani", "Camila", "Darius", "Keisha"];
                const name = names[randInt(r, 0, names.length - 1)];
                const q = name + " was 59 1/4 inches tall when she turned 11 and 61 1/2 inches tall when she turned 12. How many inches did " + name + " grow during the year?";
                const s = shuffle(r, ["2 1/4 inches", "2 1/2 inches", "1 3/4 inches", "2 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["61 1/2 - 59 1/4 = 61 2/4 - 59 1/4 = 2 1/4 inches."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 6: Parentheses subtraction (Lesson 54 #5)
            (r) => {
                const q = "Simplify: 1000 − (100 − 1)";
                const s = shuffle(r, ["901", "899", "900", "910"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["First evaluate inside parentheses: 100 - 1 = 99. Then 1000 - 99 = 901."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 7: Halfway between two numbers (Lesson 54 #7)
            (r) => {
                const pairs = [[37, 143, 90], [25, 135, 80], [35, 125, 80], [45, 155, 100]];
                const [a, b, mid] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What number is halfway between " + a + " and " + b + "?";
                const s = shuffle(r, ["" + mid, "" + (mid + 5), "" + (mid - 5), "" + (mid + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find the average: (" + a + " + " + b + ") ÷ 2 = " + (a + b) + " ÷ 2 = " + mid + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 8: Unknown money subtraction (Lesson 54 #8)
            (r) => {
                const cents = [24, 35, 45, 15][randInt(r, 0, 3)];
                const ans = (3.00 - cents / 100).toFixed(2);
                const q = "Find the unknown number n: $3.00 − n = " + cents + "¢";
                const s = shuffle(r, ["$" + ans, "$" + (parseFloat(ans) - 0.10).toFixed(2), "$" + (parseFloat(ans) + 0.10).toFixed(2), "$" + (3.00 - (cents + 10)/100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = $3.00 - $" + (cents / 100).toFixed(2) + " = $" + ans + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 9: Unknown mixed number addition (Lesson 54 #9)
            (r) => {
                const q = "Find the unknown number m: m + 3 2/5 = 6 4/5";
                const s = shuffle(r, ["3 2/5", "3 1/5", "10 1/5", "3 4/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract 3 2/5 from 6 4/5: 6 4/5 - 3 2/5 = 3 2/5."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 10: Divide decimal by power of 10 (Lesson 54 #10)
            (r) => {
                const q = "Simplify: 4.2 ÷ 10²";
                const s = shuffle(r, ["0.042", "0.42", "420", "0.0042"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10² = 100. 4.2 ÷ 100 = 0.042."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 11: Combined decimal operations (Lesson 54 #11)
            (r) => {
                const q = "Simplify: (1.2 ÷ 0.12)(1.2)";
                const s = shuffle(r, ["12", "1.2", "120", "0.12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.2 ÷ 0.12 = 10. Then 10 × 1.2 = 12."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 12: Place value identification (Lesson 54 #14)
            (r) => {
                const q = "Which digit is in the hundred-thousands place in 123,456,789?";
                const s = shuffle(r, ["4", "3", "5", "2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In 123,456,789, the 4 is in the hundred-thousands place."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 13: Sales tax on television (Lesson 54 #15)
            (r) => {
                const priceCents = 28990;
                const taxCents = Math.round(priceCents * 0.08);
                const taxStr = (taxCents / 100).toFixed(2);
                const q = "A television cost $289.90. The sales-tax rate was 8%. How much was the sales tax on the television? (Round to the nearest cent.)";
                const s = shuffle(r, ["$" + taxStr, "$" + ((taxCents + 100) / 100).toFixed(2), "$" + ((taxCents - 100) / 100).toFixed(2), "$" + ((taxCents + 20) / 100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$289.90 × 0.08 = $23.192, which rounds to $" + taxStr + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 14: Metric vs customary comparison (Lesson 54 #16)
            (r) => {
                const q = "Compare: 2 centimeters ○ 1 inch";
                const s = shuffle(r, ["<", ">", "=", "≈"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 inch is approximately 2.54 centimeters. Since 2 cm < 2.54 cm, 2 cm < 1 inch."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 15: Odd sequence nth term prediction (Lesson 54 #17)
            (r) => {
                const termNum = randInt(r, 10, 14);
                const termVal = 2 * termNum - 1;
                const ord = ["tenth", "eleventh", "twelfth", "thirteenth", "fourteenth"][termNum - 10];
                const q = "In the sequence 1, 3, 5, 7, 9, ... each term is found by doubling the term number and subtracting 1. What is the " + ord + " term of this sequence?";
                const s = shuffle(r, ["" + termVal, "" + (termVal + 2), "" + (termVal - 2), "" + (2 * termNum)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Double the term number and subtract 1: 2 × " + termNum + " - 1 = " + termVal + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 16: Tile area for rectangular room (Lesson 54 #18)
            (r) => {
                const l = randInt(r, 12, 16), w = randInt(r, 10, 14);
                const area = l * w;
                const q = "How many square feet of tile would be needed to cover the area of a room " + l + " feet long and " + w + " feet wide?";
                const s = shuffle(r, [area + " square feet", (area + 12) + " square feet", (area - 12) + " square feet", (2 * (l + w)) + " square feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = length × width = " + l + " × " + w + " = " + area + " square feet."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 17: Basketball team fraction of students (Lesson 54 #19a)
            (r) => {
                const played = 9, tot = 30;
                const q = "Nine of the 30 students played basketball on the school team. What fraction of the students played on the team in simplest form?";
                const s = shuffle(r, ["3/10", "9/30", "1/3", "3/7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["9/30 reduces by dividing numerator and denominator by 3: 3/10."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 18: Ratio played to not played (Lesson 54 #19b)
            (r) => {
                const played = 9, notPlayed = 21;
                const q = "Nine of the 30 students played basketball on the school team. What is the ratio of students who played to students who did not play in lowest terms?";
                const s = shuffle(r, ["3 to 7", "9 to 21", "3 to 10", "7 to 3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Students who did not play = 30 - 9 = 21. Ratio 9:21 reduces to 3 to 7."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 19: Equivalent fraction target numerator (Lesson 54 #20)
            (r) => {
                const items = [[5, 6, 24, 20], [5, 8, 24, 15], [3, 4, 24, 18], [2, 3, 24, 16]];
                const [n, d, targetD, targetN] = items[randInt(r, 0, items.length - 1)];
                const q = "Complete the equivalent fraction: " + n + "/" + d + " = ?/" + targetD;
                const s = shuffle(r, ["" + targetN, "" + (targetN + 2), "" + (targetN - 2), "" + (targetN + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [targetD + " ÷ " + d + " = " + (targetD / d) + ". Multiply " + n + " × " + (targetD / d) + " = " + targetN + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 55: Common Denominators, Part 1
    55: (rng, qIndex) => {
        const framings = [
            // Category 0: Add fractions with common denominator (Lesson 55 core)
            (r) => {
                const q = "Add 1/2 and 1/3 by first finding a common denominator.";
                const s = shuffle(r, ["5/6", "2/5", "1/6", "5/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator is 6: 1/2 = 3/6, 1/3 = 2/6. 3/6 + 2/6 = 5/6."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 1: Subtract fractions with common denominator (Lesson 55 core)
            (r) => {
                const q = "Subtract 1/3 from 1/2 by first finding a common denominator.";
                const s = shuffle(r, ["1/6", "5/6", "0", "1/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator is 6: 3/6 - 2/6 = 1/6."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 2: Rename and add fractions (Lesson 55 core)
            (r) => {
                const q = "Rename 1/3 and 1/4 with a common denominator of 12, then find their sum.";
                const s = shuffle(r, ["7/12", "2/7", "5/12", "1/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/3 = 4/12, 1/4 = 3/12. 4/12 + 3/12 = 7/12."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 3: Rename and subtract fractions (Lesson 55 core)
            (r) => {
                const q = "Rename 2/3 and 1/4 with a common denominator of 12, then find their difference.";
                const s = shuffle(r, ["5/12", "7/12", "1/12", "1/7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/3 = 8/12, 1/4 = 3/12. 8/12 - 3/12 = 5/12."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 4: Pumpkin weight word problem (Lesson 55 #3)
            (r) => {
                const q = "An average pumpkin weighs 12 1/2 pounds. How much would a dozen average pumpkins weigh?";
                const s = shuffle(r, ["150 pounds", "144 pounds", "125 pounds", "156 pounds"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 × 12.5 = 150 pounds."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 5: Whole number divided by decimal (Lesson 55 #8)
            (r) => {
                const pairs = [[81, 0.9, 90], [64, 0.8, 80], [49, 0.7, 70], [36, 0.6, 60]];
                const [n, d, ans] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the quotient: " + n + " ÷ " + d;
                const s = shuffle(r, ["" + ans, "" + (ans / 10), "" + (ans * 10), "" + (ans - 9)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " ÷ " + d + " = " + (n * 10) + " ÷ " + (d * 10) + " = " + ans + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 6: Expanded notation to standard number (Lesson 55 #14)
            (r) => {
                const q = "Write the elevation in feet given in expanded notation: (2 × 10,000) + (3 × 100) + (2 × 10) feet";
                const s = shuffle(r, ["20,320 feet", "23,020 feet", "20,302 feet", "23,200 feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["20,000 + 300 + 20 = 20,320 feet."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 7: Decimal product rounded to hundredth (Lesson 55 #15)
            (r) => {
                const q = "Multiply 0.14 by 0.8 and round the product to the nearest hundredth.";
                const s = shuffle(r, ["0.11", "0.12", "0.112", "0.10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.14 × 0.8 = 0.112, which rounds to 0.11."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 8: Compare sum of squares (Lesson 55 #16 / #23)
            (r) => {
                const q = "Compare: 3² + 4² ○ 5²";
                const s = shuffle(r, ["=", "<", ">", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3² + 4² = 9 + 16 = 25. 5² = 25. 25 = 25."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 9: Lunar crater circumference (Lesson 55 #17)
            (r) => {
                const diam = 93;
                const circ = Math.round(3.14 * diam);
                const q = "The Copernicus impact crater on the moon has a diameter of about 93 km. Find the distance around the crater to the nearest kilometer. (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " km", (circ + 10) + " km", (circ - 10) + " km", Math.round(3.14 * diam / 2) + " km"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × d = 3.14 × 93 = 292.02, which rounds to " + circ + " km."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 10: Rope perimeter to square area (Lesson 55 #18)
            (r) => {
                const peri = 20;
                const side = peri / 4;
                const area = side * side;
                const q = "A 20-foot rope was used to make a square. How many square feet of area were enclosed?";
                const s = shuffle(r, [area + " square feet", (side * 2) + " square feet", (area + 5) + " square feet", (area - 5) + " square feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side = 20 ÷ 4 = 5 ft. Area = 5 × 5 = 25 sq ft."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 11: Factors of prime number 23 (Lesson 55 #21)
            (r) => {
                const q = "Which of the following lists all the factors of 23?";
                const s = shuffle(r, ["1, 23", "1, 2, 23", "23", "1, 3, 23"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["23 is a prime number, so its only factors are 1 and 23."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 12: Compare powers (Lesson 55 #23)
            (r) => {
                const q = "Determine whether <, >, or = belongs in the circle: 1² + 2² ○ 3²";
                const s = shuffle(r, ["<", ">", "=", "≥"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1² + 2² = 1 + 4 = 5. 3² = 9. Since 5 < 9, 1² + 2² < 3²."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 13: Window height to width ratio (Lesson 55 #26)
            (r) => {
                const q = "A window was 48 inches wide and 36 inches tall. What was the ratio of the height to the width in simplest terms?";
                const s = shuffle(r, ["3 to 4", "4 to 3", "3 to 7", "4 to 7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Height : Width = 36 : 48 = 3 to 4."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 14: Cancel prime factors (Lesson 55 #28)
            (r) => {
                const q = "Reduce by canceling common prime factors: (2 · 2 · 3 · 5 · 5 · 5) / (2 · 3 · 2 · 5 · 3 · 7)";
                const s = shuffle(r, ["25/21", "5/7", "25/7", "5/21"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cancel two 2s, one 3, and one 5: (5 · 5) / (3 · 7) = 25/21."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 15: Theater performance duration (Lesson 55 #29)
            (r) => {
                const q = "A theater performance began at 7:45 p.m. and concluded at 10:25 p.m. How long did the performance last?";
                const s = shuffle(r, ["2 hours 40 minutes", "2 hours 30 minutes", "3 hours 20 minutes", "2 hours 50 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7:45 to 9:45 is 2 hours. 9:45 to 10:25 is 40 minutes. Total: 2 hours 40 minutes."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 16: Add fractions with related denominators (Lesson 55)
            (r) => {
                const q = "Simplify: 1/4 + 1/8";
                const s = shuffle(r, ["3/8", "2/12", "1/6", "5/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 = 2/8. 2/8 + 1/8 = 3/8."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 17: Subtract fractions with related denominators (Lesson 55)
            (r) => {
                const q = "Simplify: 5/8 − 1/2";
                const s = shuffle(r, ["1/8", "4/6", "3/8", "1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 4/8. 5/8 - 4/8 = 1/8."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 18: Compare fractions by common denominator (Lesson 55)
            (r) => {
                const q = "Compare using common denominators: 5/6 ○ 7/8";
                const s = shuffle(r, ["<", ">", "=", "≥"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator is 24: 5/6 = 20/24, 7/8 = 21/24. Since 20/24 < 21/24, 5/6 < 7/8."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 19: Least common denominator (Lesson 55)
            (r) => {
                const q = "What is the least common denominator of 3/8 and 5/12?";
                const s = shuffle(r, ["24", "48", "96", "16"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 12: 12, 24, 36... 24 is divisible by 8, so LCD = 24."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 56: Common Denominators, Part 2
    56: (rng, qIndex) => {
        const framings = [
            // Category 0: Add fractions with common denominator 12 (Lesson 56 #1)
            (r) => {
                const q = "Add 1/4 and 1/3 using 12 as the common denominator.";
                const s = shuffle(r, ["7/12", "2/7", "5/12", "1/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 = 3/12, 1/3 = 4/12. 3/12 + 4/12 = 7/12."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 1: Subtract fractions with common denominator 6 (Lesson 56 #2)
            (r) => {
                const q = "Subtract 1/3 from 1/2 using 6 as the common denominator.";
                const s = shuffle(r, ["1/6", "5/6", "1/5", "2/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 3/6, 1/3 = 2/6. 3/6 - 2/6 = 1/6."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 2: Piano keys fraction white (Lesson 56 #3a)
            (r) => {
                const q = "Of the 88 keys on a piano, 52 are white. What fraction of a piano's keys are white in simplest form?";
                const s = shuffle(r, ["13/22", "52/88", "9/22", "26/44"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["52/88 reduces by dividing numerator and denominator by 4: 13/22."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 3: Piano keys ratio black to white (Lesson 56 #3b)
            (r) => {
                const q = "Of the 88 keys on a piano, 52 are white and 36 are black. What is the ratio of black keys to white keys in lowest terms?";
                const s = shuffle(r, ["9 to 13", "13 to 9", "9 to 22", "13 to 22"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["36 : 52 divides by 4 to give 9 to 13."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 4: Apples for apple pies (Lesson 56 #4)
            (r) => {
                const applesPerPie = 7;
                const pies = randInt(r, 2, 4);
                const tot = applesPerPie * pies;
                const q = "If " + applesPerPie + " apples are needed to make one apple pie, how many apples are needed to make " + pies + " apple pies?";
                const s = shuffle(r, [tot + " apples", (tot + 7) + " apples", (tot - 7) + " apples", (tot + 3) + " apples"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [applesPerPie + " × " + pies + " = " + tot + " apples."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 5: Subtract fractions using common denominator 12 (Lesson 56 #5)
            (r) => {
                const q = "Rename with a common denominator of 12 and subtract: 2/3 − 1/4";
                const s = shuffle(r, ["5/12", "7/12", "1/12", "1/7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/3 = 8/12, 1/4 = 3/12. 8/12 - 3/12 = 5/12."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 6: Add and reduce fractions (Lesson 56 #6)
            (r) => {
                const q = "Add 1/2 and 1/6 and reduce the sum to simplest form.";
                const s = shuffle(r, ["2/3", "4/6", "1/4", "3/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 3/6. 3/6 + 1/6 = 4/6 = 2/3."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 7: Subtract and reduce fractions (Lesson 56 #7)
            (r) => {
                const q = "Subtract 1/6 from 1/2 and reduce the difference to simplest form.";
                const s = shuffle(r, ["1/3", "2/6", "1/4", "2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 3/6. 3/6 - 1/6 = 2/6 = 1/3."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 8: Adding mixed dollars and cents (Lesson 56 #8)
            (r) => {
                const q = "Find the total: $3 + 65¢ + $1.75";
                const s = shuffle(r, ["$5.40", "$5.35", "$5.45", "$4.40"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$3.00 + $0.65 + $1.75 = $5.40."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 9: Multiplying decimals (Lesson 56 #9)
            (r) => {
                const q = "Simplify: (0.625)(0.4)";
                const s = shuffle(r, ["0.25", "2.5", "0.025", "0.24"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["625 × 4 = 2500. Four decimal places gives 0.2500 = 0.25."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 10: Dividing integer by decimal (Lesson 56 #10)
            (r) => {
                const q = "Find the quotient: 62 ÷ 0.08";
                const s = shuffle(r, ["775", "77.5", "7750", "750"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["62 ÷ 0.08 = 6200 ÷ 8 = 775."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 11: Subtract mixed numbers with like denominators (Lesson 56 #11)
            (r) => {
                const q = "Simplify: 3 5/8 − 1 1/8";
                const s = shuffle(r, ["2 1/2", "2 4/8", "2 3/8", "1 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 - 1 = 2; 5/8 - 1/8 = 4/8 = 1/2. Result: 2 1/2."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 12: Multiply fractions (Lesson 56 #12)
            (r) => {
                const q = "Find the product in simplest form: (5/8) × (2/3)";
                const s = shuffle(r, ["5/12", "10/24", "7/11", "5/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(5 × 2) / (8 × 3) = 10/24 = 5/12."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 13: Percent as reduced fraction (Lesson 56 #13a)
            (r) => {
                const q = "Forty percent of the students in the club speak more than two languages. Write 40% as a reduced fraction.";
                const s = shuffle(r, ["2/5", "4/10", "1/4", "3/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["40% = 40/100 = 2/5."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 14: Fractional part of group (Lesson 56 #13b)
            (r) => {
                const q = "Forty percent of the 30 students in the club speak more than two languages. How many students speak more than two languages?";
                const s = shuffle(r, ["12 students", "10 students", "15 students", "14 students"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/5 × 30 = 60 ÷ 5 = 12 students."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 15: Expanded notation with decimals (Lesson 56 #14)
            (r) => {
                const q = "Write as a decimal number: (8 × 10) + (6 × 1/10) + (5 × 1/100)";
                const s = shuffle(r, ["80.65", "86.5", "8.65", "80.065"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["80 + 0.6 + 0.05 = 80.65."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 16: Estimate sum to nearest hundred (Lesson 56 #15)
            (r) => {
                const q = "Estimate the sum of 3627 and 4187 to the nearest hundred.";
                const s = shuffle(r, ["7800", "7700", "7900", "7814"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3627 rounds to 3600; 4187 rounds to 4200. 3600 + 4200 = 7800."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 17: Distance per tire rotation (Lesson 56 #16)
            (r) => {
                const q = "A bike tire has a diameter of 2 feet. About how many feet does the bike travel forward with each turn of the tire? (Round to the nearest whole foot; use 3.14 for π.)";
                const s = shuffle(r, ["6 feet", "4 feet", "8 feet", "12 feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × d ≈ 3.14 × 2 = 6.28, which rounds to 6 feet."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 18: Mean of decimal list (Lesson 56 #17)
            (r) => {
                const q = "What is the mean of 1.2, 1.3, 1.4, and 1.5?";
                const s = shuffle(r, ["1.35", "1.3", "1.4", "1.25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 1.2 + 1.3 + 1.4 + 1.5 = 5.4. Mean = 5.4 ÷ 4 = 1.35."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 19: Area of square from perimeter (Lesson 56 #18)
            (r) => {
                const q = "The perimeter of a square is 36 inches. What is its area?";
                const s = shuffle(r, ["81 square inches", "36 square inches", "72 square inches", "144 square inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side = 36 ÷ 4 = 9 inches. Area = 9 × 9 = 81 square inches."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 57: Adding and Subtracting Fractions: Three Steps
    57: (rng, qIndex) => {
        const framings = [
            // Category 0: Fraction addition with mixed number result (Lesson 57 core)
            (r) => {
                const q = "Add and write the sum as a mixed number: 1/2 + 2/3";
                const s = shuffle(r, ["1 1/6", "3/5", "7/6", "1 1/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 3/6, 2/3 = 4/6. 3/6 + 4/6 = 7/6 = 1 1/6."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 1: Fraction subtraction requiring reduction (Lesson 57 core)
            (r) => {
                const q = "What is the difference when 1/3 is subtracted from 5/6 in simplest form?";
                const s = shuffle(r, ["1/2", "3/6", "4/3", "1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 - 2/6 = 3/6 = 1/2."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 2: Fraction subtraction (Lesson 57 core)
            (r) => {
                const q = "Subtract and simplify: 5/6 − 1/2";
                const s = shuffle(r, ["1/3", "2/6", "1/6", "2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 - 3/6 = 2/6 = 1/3."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 3: Fraction addition with unlike denominators (Lesson 57 core)
            (r) => {
                const q = "Find the sum as a mixed number: 3/4 + 5/8";
                const s = shuffle(r, ["1 3/8", "8/12", "1 1/8", "1 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 = 6/8. 6/8 + 5/8 = 11/8 = 1 3/8."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 4: Fraction subtraction (Lesson 57 core)
            (r) => {
                const q = "Subtract: 7/8 − 1/2";
                const s = shuffle(r, ["3/8", "6/6", "5/8", "1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7/8 - 4/8 = 3/8."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 5: Fraction subtraction (Lesson 57 core)
            (r) => {
                const q = "Evaluate the expression in simplest form: 2/3 − 1/6";
                const s = shuffle(r, ["1/2", "3/6", "1/3", "1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/3 = 4/6. 4/6 - 1/6 = 3/6 = 1/2."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 6: Dividing money by 10 (Lesson 57 #8)
            (r) => {
                const q = "Find the quotient: $32.50 ÷ 10";
                const s = shuffle(r, ["$3.25", "$0.33", "$325.00", "$3.50"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 10 shifts decimal 1 place left: $3.25."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 7: Percent shaded area (Lesson 57 #13)
            (r) => {
                const l = 8, w = 6;
                const totArea = l * w;
                const shaded = totArea / 2;
                const q = "Fifty percent of a rectangle with length " + l + " cm and width " + w + " cm is shaded. What is the area of the shaded portion?";
                const s = shuffle(r, [shaded + " cm²", totArea + " cm²", (shaded + 4) + " cm²", (shaded - 4) + " cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total area = " + l + " × " + w + " = " + totArea + " cm². 50% of " + totArea + " = " + shaded + " cm²."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 8: Place value in decimal (Lesson 57 #14)
            (r) => {
                const q = "What is the place value of the 7 in 3.567?";
                const s = shuffle(r, ["thousandths", "hundredths", "tenths", "ten-thousandths"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The 7 is 3 places to the right of the decimal point, which is the thousandths place."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 9: Divide decimal and round (Lesson 57 #15)
            (r) => {
                const q = "Divide 0.5 by 4 and round the quotient to the nearest hundredth.";
                const s = shuffle(r, ["0.13", "0.12", "0.125", "0.15"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.5 ÷ 4 = 0.125, which rounds to 0.13."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 10: Arrange decimals from least to greatest (Lesson 57 #16)
            (r) => {
                const correct = "0.012, 0.102, 0.12, 0.2";
                const q = "Arrange these numbers in order from least to greatest: 0.12, 0.2, 0.012, 0.102";
                const s = shuffle(r, [correct, "0.102, 0.012, 0.12, 0.2", "0.012, 0.12, 0.102, 0.2", "0.2, 0.12, 0.102, 0.012"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Compare place values: 0.012 < 0.102 < 0.12 < 0.2."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 11: Predict nth term in doubling sequence (Lesson 57 #17)
            (r) => {
                const q = "In this sequence the first term is 2, the second is 4, and the third is 8. What is the sixth term?";
                const s = shuffle(r, ["64", "32", "128", "16"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Terms double each time: 2, 4, 8, 16, 32, 64."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 12: Ratio of aces to all cards (Lesson 57 #18)
            (r) => {
                const q = "In a standard deck of 52 cards there are four aces. What is the ratio of aces to all cards in simplest form?";
                const s = shuffle(r, ["1 to 13", "4 to 52", "1 to 12", "1 to 52"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4/52 divides by 4 to give 1/13, or 1 to 13."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 13: Perimeter of rectangle with mixed numbers (Lesson 57 #19)
            (r) => {
                const q = "Calculate the perimeter of a rectangle with a length of 1 1/2 inches and a width of 3/4 inch.";
                const s = shuffle(r, ["4 1/2 inches", "2 1/4 inches", "3 inches", "5 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (1 2/4 + 3/4) = 2 × (2 1/4) = 4 1/2 inches."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 14: Unknown addend in fraction equation (Lesson 57 #20)
            (r) => {
                const q = "Find the unknown number x: x + 1/4 = 5/8";
                const s = shuffle(r, ["3/8", "4/8", "1/2", "6/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = 5/8 - 2/8 = 3/8."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 15: Factors of 29 (Lesson 57 #21)
            (r) => {
                const q = "Which list contains all the factors of 29?";
                const s = shuffle(r, ["1, 29", "1, 3, 29", "29", "1, 2, 29"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["29 is prime, so its only factors are 1 and 29."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 16: LCM of 12 and 18 (Lesson 57 #22)
            (r) => {
                const q = "What is the least common multiple of 12 and 18?";
                const s = shuffle(r, ["36", "72", "216", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 18: 18, 36... 36 is divisible by 12, so LCM = 36."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 17: Compare fractions with common denominator (Lesson 57 #23)
            (r) => {
                const q = "Compare: 5/6 ○ 7/8";
                const s = shuffle(r, ["<", ">", "=", "≥"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 = 20/24, 7/8 = 21/24. Since 20/24 < 21/24, 5/6 < 7/8."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 18: Temperature change (Lesson 57 #25)
            (r) => {
                const q = "The temperature was 8°F at sunset and dropped 12°F overnight. What was the morning temperature?";
                const s = shuffle(r, ["-4°F", "4°F", "-20°F", "20°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8°F - 12°F = -4°F."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 19: Regulation basketball hoop circumference (Lesson 57 #30)
            (r) => {
                const q = "The diameter of a regulation basketball hoop is 18 inches. Find the circumference of the hoop to the nearest inch. (Use 3.14 for π.)";
                const s = shuffle(r, ["57 inches", "56 inches", "54 inches", "113 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = 3.14 × 18 = 56.52, which rounds to 57 inches."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 58: Probability and Chance
    58: (rng, qIndex) => {
        const framings = [
            // Category 0: Probability as reduced fraction (Lesson 58 PS a)
            (r) => {
                const pcts = [[20, "1/5"], [40, "2/5"], [60, "3/5"], [75, "3/4"], [80, "4/5"]];
                const [pct, frac] = pcts[randInt(r, 0, pcts.length - 1)];
                const q = "There is a " + pct + "% chance of rain today. What is the probability of rain expressed as a reduced fraction?";
                const s = shuffle(r, [frac, (pct / 10) + "/10", "1/2", "1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% = " + pct + "/100, which reduces to " + frac + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 1: Complement of probability (Lesson 58 PS b)
            (r) => {
                const pcts = [25, 40, 60, 70, 80];
                const pct = pcts[randInt(r, 0, pcts.length - 1)];
                const comp = 100 - pct;
                const q = "There is a " + pct + "% chance that Juan will wait more than 15 minutes in line. What is the probability that Juan will NOT wait more than 15 minutes?";
                const s = shuffle(r, [comp + "%", (comp - 10) + "%", (comp + 10) + "%", pct + "%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The complement of an event has probability 100% - " + pct + "% = " + comp + "%."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 2: Sample space of number cube (Lesson 58 PS d)
            (r) => {
                const q = "A standard number cube with faces numbered 1 through 6 is rolled. What is the sample space?";
                const s = shuffle(r, ["{1, 2, 3, 4, 5, 6}", "{1, 2, 3, 4, 5}", "{0, 1, 2, 3, 4, 5, 6}", "{2, 4, 6}"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sample space is the set of all possible outcomes: {1, 2, 3, 4, 5, 6}."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 3: Probability odd on number cube (Lesson 58 PS e)
            (r) => {
                const q = "A standard 1–6 number cube is rolled once. What is the probability of rolling an odd number?";
                const s = shuffle(r, ["1/2", "1/3", "1/6", "2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Odd numbers are 1, 3, 5 (3 favorable outcomes). Probability = 3/6 = 1/2."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 4: Probability less than N on number cube (Lesson 58 PS f)
            (r) => {
                const items = [[5, "2/3", "1, 2, 3, and 4 (4 outcomes)"], [4, "1/2", "1, 2, and 3 (3 outcomes)"], [3, "1/3", "1 and 2 (2 outcomes)"]];
                const [n, frac, expl] = items[randInt(r, 0, items.length - 1)];
                const q = "A standard 1–6 number cube is rolled once. What is the probability that the number rolled will be less than " + n + "?";
                const s = shuffle(r, [frac, "1/6", "5/6", "3/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Numbers less than " + n + " are " + expl + ". Probability = " + frac + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 5: Difference between sum and product of fractions (Lesson 58 #1)
            (r) => {
                const q = "What is the difference between the sum of 1/2 and 1/3 and the product of 1/2 and 1/3 in simplest form?";
                const s = shuffle(r, ["2/3", "1/3", "5/6", "1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 1/2 + 1/3 = 5/6. Product = 1/2 × 1/3 = 1/6. Difference = 5/6 - 1/6 = 4/6 = 2/3."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 6: Flat of eggs dozen calculation (Lesson 58 #2)
            (r) => {
                const q = "A flat of eggs holds 2 1/2 dozen eggs. How many eggs are in 2 1/2 dozen?";
                const s = shuffle(r, ["30 eggs", "24 eggs", "25 eggs", "36 eggs"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 × 12 = 2.5 × 12 = 30 eggs."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 7: Rumpelstiltskin gold average (Lesson 58 #3)
            (r) => {
                const q = "In three nights Rumpelstiltskin spun $44,400 worth of gold thread. What was the average value of the thread he spun per night?";
                const s = shuffle(r, ["$14,800", "$14,400", "$15,200", "$13,800"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$44,400 ÷ 3 = $14,800 per night."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 8: Compare fractions with 1/2 (Lesson 58 #4)
            (r) => {
                const q = "Compare: 5/8 ○ 1/2";
                const s = shuffle(r, [">", "<", "=", "≤"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 4/8. Since 5/8 > 4/8, 5/8 > 1/2."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 9: Pythagorean triple comparison (Lesson 58 #5)
            (r) => {
                const q = "Compare: 6² + 8² ○ 10²";
                const s = shuffle(r, ["=", "<", ">", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6² + 8² = 36 + 64 = 100. 10² = 100. 100 = 100."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 10: Multiply money by 10 (Lesson 58 #9)
            (r) => {
                const q = "Simplify: $32.50 × 10";
                const s = shuffle(r, ["$325.00", "$32.50", "$3250.00", "$3.25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$32.50 × 10 = $325.00."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 11: Multiply decimals (Lesson 58 #10)
            (r) => {
                const q = "Find the product: (6.2)(0.48)";
                const s = shuffle(r, ["2.976", "29.76", "0.2976", "2.88"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["62 × 48 = 2976. Three decimal places gives 2.976."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 12: Divide whole number by decimal (Lesson 58 #11)
            (r) => {
                const q = "Find the quotient: 1.0 ÷ 0.8";
                const s = shuffle(r, ["1.25", "12.5", "0.8", "1.5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.0 ÷ 0.8 = 10 ÷ 8 = 1.25."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 13: Divide whole number by 0.5 (Lesson 58 #12)
            (r) => {
                const q = "Calculate the quotient: 120 ÷ 0.5";
                const s = shuffle(r, ["240", "60", "24", "120"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 0.5 is equivalent to multiplying by 2: 120 × 2 = 240."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 14: Total price with 7% tax (Lesson 58 #16)
            (r) => {
                const q = "Find the total price including 7% sales tax on a $9.79 purchase. (Round to the nearest cent.)";
                const s = shuffle(r, ["$10.48", "$10.45", "$10.50", "$9.86"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$9.79 × 1.07 = $10.4753, which rounds to $10.48."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 15: Decimal sequence continuation (Lesson 58 #17)
            (r) => {
                const q = "What number is next in this sequence? 0.6, 0.7, 0.8, 0.9, ...";
                const s = shuffle(r, ["1.0", "0.10", "1.1", "0.99"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each term increases by 0.1: 0.9 + 0.1 = 1.0."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 16: Square area from perimeter (Lesson 58 #18)
            (r) => {
                const q = "The perimeter of a square is 8 cm. What is the area of the square?";
                const s = shuffle(r, ["4 cm²", "8 cm²", "16 cm²", "2 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side = 8 ÷ 4 = 2 cm. Area = 2 × 2 = 4 cm²."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 17: How many fractions in another fraction (Lesson 58 #19)
            (r) => {
                const q = "How many 1/5s are in 3/4?";
                const s = shuffle(r, ["3 3/4", "15/4", "3/20", "1 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(3/4) ÷ (1/5) = (3/4) × (5/1) = 15/4 = 3 3/4."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 18: Unknown in decimal multiplication (Lesson 58 #20)
            (r) => {
                const q = "Find the unknown number w: 0.32w = 32";
                const s = shuffle(r, ["100", "10", "1000", "0.01"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 32 ÷ 0.32 = 100."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 19: Test score percentage to reduced fraction (Lesson 58 #24)
            (r) => {
                const q = "Larry correctly answered 45% of the questions on a test. Write 45% as a reduced fraction.";
                const s = shuffle(r, ["9/20", "45/100", "4/9", "9/25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["45/100 divides by 5 to become 9/20."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 59: Adding Mixed Numbers
    59: (rng, qIndex) => {
        const framings = [
            // Category 0: Add mixed numbers halves and thirds (Lesson 59 PS a)
            (r) => {
                const q = "Add: 1 1/2 + 1 1/3";
                const s = shuffle(r, ["2 5/6", "2 2/5", "3 1/6", "2 1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 3/6 + 1 2/6 = 2 5/6."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 1: Add mixed numbers halves and sixths (Lesson 59 PS b)
            (r) => {
                const q = "Add and reduce the fraction: 1 1/2 + 1 1/6";
                const s = shuffle(r, ["2 2/3", "2 4/6", "2 1/2", "3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 3/6 + 1 1/6 = 2 4/6 = 2 2/3."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 2: Add mixed numbers halves and thirds (Lesson 59 PS c)
            (r) => {
                const q = "Find the sum: 5 1/2 + 2 1/3";
                const s = shuffle(r, ["7 5/6", "7 2/5", "8 1/6", "7 1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 3/6 + 2 2/6 = 7 5/6."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 3: Add mixed numbers thirds and fourths (Lesson 59 PS d)
            (r) => {
                const q = "Calculate the total: 3 2/3 + 2 1/4";
                const s = shuffle(r, ["5 11/12", "5 3/7", "6 1/12", "5 7/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 8/12 + 2 3/12 = 5 11/12."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 4: Add mixed numbers halves and fourths (Lesson 59 PS e)
            (r) => {
                const q = "Combine the mixed numbers: 5 1/2 + 3 1/4";
                const s = shuffle(r, ["8 3/4", "8 2/6", "9", "8 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 2/4 + 3 1/4 = 8 3/4."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 5: Add mixed numbers with regrouping improper fraction (Lesson 59 PS f)
            (r) => {
                const q = "Add and write the sum as a simplified mixed number: 7 3/4 + 3 5/8";
                const s = shuffle(r, ["11 3/8", "10 11/8", "10 8/12", "11 1/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7 6/8 + 3 5/8 = 10 11/8 = 11 3/8."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 6: Cost per ounce of oatmeal (Lesson 59 #1)
            (r) => {
                const q = "What is the cost per ounce of a 42-ounce box of oatmeal priced at $1.26?";
                const s = shuffle(r, ["$0.03 per ounce", "$0.30 per ounce", "$0.04 per ounce", "$0.02 per ounce"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$1.26 ÷ 42 = $0.03 per ounce."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 7: Gas purchase with decimals (Lesson 59 #2)
            (r) => {
                const q = "Ling fills a lawn mower container with 1.1 gallons of gas at $2.47 per gallon. How much will Ling spend on gas, rounded to the nearest cent?";
                const s = shuffle(r, ["$2.72", "$2.71", "$2.62", "$2.82"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.1 × $2.47 = $2.717, which rounds to $2.72."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 8: Largest three-digit whole number (Lesson 59 #3)
            (r) => {
                const q = "The smallest three-digit whole number is 100. What is the largest three-digit whole number?";
                const s = shuffle(r, ["999", "1000", "990", "900"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The largest three-digit whole number is 999."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 9: Add fractions (Lesson 59 #4)
            (r) => {
                const q = "Add and write the sum as a mixed number: 3/4 + 5/8";
                const s = shuffle(r, ["1 3/8", "1 1/8", "8/12", "1 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6/8 + 5/8 = 11/8 = 1 3/8."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 10: Add mixed numbers (Lesson 59 #5)
            (r) => {
                const q = "Add and simplify: 1 1/2 + 3 1/6";
                const s = shuffle(r, ["4 2/3", "4 4/6", "4 1/3", "5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 3/6 + 3 1/6 = 4 4/6 = 4 2/3."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 11: Fraction division (Lesson 59 #8)
            (r) => {
                const q = "How many 1/3s are in 3/5?";
                const s = shuffle(r, ["1 4/5", "9/5", "1/5", "2/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(3/5) ÷ (1/3) = (3/5) × (3/1) = 9/5 = 1 4/5."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 12: Fraction of dollar amount (Lesson 59 #9)
            (r) => {
                const q = "How much money is 5/8 of $24?";
                const s = shuffle(r, ["$15", "$12", "$18", "$16"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$24 ÷ 8 = $3. $3 × 5 = $15."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 13: Multiply decimals (Lesson 59 #10)
            (r) => {
                const q = "Simplify: (0.65)(0.14)";
                const s = shuffle(r, ["0.091", "0.91", "0.0091", "0.101"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["65 × 14 = 910. Four decimal places gives 0.0910 = 0.091."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 14: Divide whole number by decimal (Lesson 59 #11)
            (r) => {
                const q = "Find the quotient: 65 ÷ 0.05";
                const s = shuffle(r, ["1300", "130", "13", "13000"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["65 ÷ 0.05 = 6500 ÷ 5 = 1300."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 15: Number of sides in quadrilateral (Lesson 59 #12)
            (r) => {
                const q = "A quadrilateral has how many sides?";
                const s = shuffle(r, ["4", "5", "3", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A quadrilateral is a 4-sided polygon."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 16: Round decimal product to hundredth (Lesson 59 #13)
            (r) => {
                const q = "Round the product of 0.24 and 0.26 to the nearest hundredth.";
                const s = shuffle(r, ["0.06", "0.07", "0.062", "0.05"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.24 × 0.26 = 0.0624, which rounds to 0.06."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 17: Average of decimals (Lesson 59 #14)
            (r) => {
                const q = "What is the average of 1.3, 2, and 0.81?";
                const s = shuffle(r, ["1.37", "1.35", "1.41", "1.27"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 1.3 + 2.0 + 0.81 = 4.11. 4.11 ÷ 3 = 1.37."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 18: Sum of first seven odd numbers (Lesson 59 #15)
            (r) => {
                const q = "What is the sum of the first seven numbers in the sequence 1, 3, 5, 7, ...?";
                const s = shuffle(r, ["49", "36", "64", "45"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of the first n odd numbers is n²: 7² = 49 (1+3+5+7+9+11+13 = 49)."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 19: Square feet in square yard (Lesson 59 #16)
            (r) => {
                const q = "How many square feet are needed to cover a square yard?";
                const s = shuffle(r, ["9 square feet", "3 square feet", "6 square feet", "12 square feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 yard = 3 feet. 1 square yard = 3 ft × 3 ft = 9 square feet."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 60: Polygons
    60: (rng, qIndex) => {
        const framings = [
            // Category 0: Six-sided polygon name (Lesson 60 PS a)
            (r) => {
                const q = "What is the name of a polygon that has six sides?";
                const s = shuffle(r, ["Hexagon", "Pentagon", "Heptagon", "Octagon"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A six-sided polygon is called a hexagon."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 1: Five-sided polygon sides (Lesson 60 PS b)
            (r) => {
                const q = "How many sides does a pentagon have?";
                const s = shuffle(r, ["5", "6", "4", "8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A pentagon has 5 sides."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 2: Definition of polygon (Lesson 60 PS c / Inv 6)
            (r) => {
                const q = "Which of the following describes a polygon?";
                const s = shuffle(r, [
                    "A closed, two-dimensional plane shape with straight sides",
                    "A three-dimensional solid with flat faces",
                    "A curved shape formed by a continuous line",
                    "An open geometric figure with line segments"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A polygon is a closed, 2D figure made entirely of straight line segments."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 3: Corner of polygon (Lesson 60 PS d)
            (r) => {
                const q = "What is the geometric name for a corner where two sides of a polygon meet?";
                const s = shuffle(r, ["Vertex", "Edge", "Face", "Segment"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A vertex (plural: vertices) is the point where two sides meet."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 4: Four-vertex polygon (Lesson 60 PS e)
            (r) => {
                const q = "What is the general name for a polygon with four vertices?";
                const s = shuffle(r, ["Quadrilateral", "Pentagon", "Triangle", "Hexagon"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any polygon with four vertices (and four sides) is a quadrilateral."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 5: Eight-sided polygon name (Lesson 60 PS)
            (r) => {
                const q = "What is the name of a polygon that has eight sides?";
                const s = shuffle(r, ["Octagon", "Hexagon", "Decagon", "Heptagon"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An eight-sided polygon is an octagon."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 6: Unknown in decimal addition (Lesson 60 WP #18)
            (r) => {
                const q = "Find the unknown number w: w + 1.2 + 1.2 = 3.6";
                const s = shuffle(r, ["1.2", "2.4", "0.6", "1.4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.2 + 1.2 = 2.4. w = 3.6 - 2.4 = 1.2."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 7: Unknown mixed number equation (Lesson 60 WP #20)
            (r) => {
                const q = "Find the unknown number m: m + 1 3/5 = 5";
                const s = shuffle(r, ["3 2/5", "4 2/5", "3 3/5", "4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 5 - 1 3/5 = 4 5/5 - 1 3/5 = 3 2/5."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 8: Unknown in mixed number subtraction (Lesson 60 WP #21)
            (r) => {
                const q = "Find the unknown number w: 6 5/8 − w = 3 1/8";
                const s = shuffle(r, ["3 1/2", "3 4/8", "3 5/8", "2 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 6 5/8 - 3 1/8 = 3 4/8 = 3 1/2."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 9: Prime numbers in range (Lesson 60 WP #22)
            (r) => {
                const primes = ["41", "43", "47"];
                const p = primes[randInt(r, 0, primes.length - 1)];
                const q = "Which of the following numbers between 40 and 50 is a prime number?";
                const s = shuffle(r, [p, "45", "49", "42"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [p + " has only two factors (1 and " + p + "), making it a prime number."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 10: Lime slice peel circumference (Lesson 60 WP #23)
            (r) => {
                const q = "Pedro cut a lime into thin slices. The largest slice had a diameter of 4 cm. About how long was the outer peel? (Round to the nearest centimeter; use 3.14 for π.)";
                const s = shuffle(r, ["13 cm", "12 cm", "8 cm", "16 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = 3.14 × 4 = 12.56, which rounds to 13 cm."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 11: Decimal rounding on number line (Lesson 60 WP #24)
            (r) => {
                const q = "A point is located at 5.7 on a number line. To what nearest whole number does this decimal round?";
                const s = shuffle(r, ["6", "5", "7", "5.5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since tenths digit 7 ≥ 5, 5.7 rounds up to 6."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 12: Spinner probability (Lesson 60 WP #25)
            (r) => {
                const q = "A spinner with 8 congruent sectors numbered 1 through 8 is spun once. What is the probability that the spinner stops on an odd number?";
                const s = shuffle(r, ["1/2", "3/8", "1/4", "5/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Odd numbers are 1, 3, 5, 7 (4 sectors). Probability = 4/8 = 1/2."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 13: Elm tree growth rings (Lesson 60 WP #26)
            (r) => {
                const q = "Mary found that an elm tree added about 3/8 inch to the diameter of its trunk every year. If the diameter of the trunk is about 12 inches, about how many years old is the tree?";
                const s = shuffle(r, ["32 years", "24 years", "36 years", "48 years"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 ÷ (3/8) = 12 × (8/3) = 96 ÷ 3 = 32 years."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 14: Fraction of TV commercials (Lesson 60 WP #27)
            (r) => {
                const q = "During a 60-minute television show, 12 minutes of commercials aired. Commercials were shown for what fraction of the hour in simplest form?";
                const s = shuffle(r, ["1/5", "1/6", "1/4", "12/60"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12/60 divides by 12 to equal 1/5."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 15: Equivalent division with 1-digit divisor (Lesson 60 WP #28)
            (r) => {
                const q = "Instead of dividing 400 by 16, what is an equivalent division problem with a one-digit divisor, and what is the quotient?";
                const s = shuffle(r, ["100 ÷ 4 = 25", "200 ÷ 8 = 20", "50 ÷ 2 = 20", "400 ÷ 8 = 50"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both numbers by 4: 400 ÷ 16 = 100 ÷ 4 = 25."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 16: Total price with sales tax (Lesson 60 WP #29)
            (r) => {
                const q = "What is the total price of a $6.89 item plus 6% sales tax, rounded to the nearest cent?";
                const s = shuffle(r, ["$7.30", "$7.25", "$7.35", "$6.95"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$6.89 × 1.06 = $7.3034, which rounds to $7.30."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 17: Compare fraction sums (Lesson 60 WP #30)
            (r) => {
                const q = "Compare: 5/8 + 1/2 ○ 3/4 + 3/8";
                const s = shuffle(r, ["=", "<", ">", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/8 + 4/8 = 9/8; 6/8 + 3/8 = 9/8. Since 9/8 = 9/8, the sums are equal."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 18: Faces of a cube (Lesson 60 Inv 6 #7)
            (r) => {
                const q = "How many faces does a geometric cube have?";
                const s = shuffle(r, ["6", "8", "12", "4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A cube has 6 flat faces (top, bottom, and four sides)."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 19: Edges of a cube (Lesson 60 Inv 6 #8)
            (r) => {
                const q = "How many edges does a geometric cube have?";
                const s = shuffle(r, ["12", "6", "8", "16"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A cube has 12 edges (4 on top, 4 on bottom, and 4 vertical edges)."], lessonNum: 60, lessonTitle: "Polygons" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
};

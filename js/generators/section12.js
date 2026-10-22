import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 111: Applications Using Division
    111: (rng, qIndex) => {
        const framings = [
            // Category 0: Balancing students across classrooms (Lesson 111 #1)
            (r) => {
                const total = randInt(r, 70, 95);
                const rooms = [3, 4][randInt(r, 0, 1)];
                const base = Math.floor(total / rooms);
                const rem = total % rooms;
                let dist = [];
                for (let i = 0; i < rooms; i++) {
                    dist.push(i < rem ? base + 1 : base);
                }
                const correct = dist.join(", ");
                let d1Arr, d2Arr, d3Arr;
                if (rooms === 3) {
                    if (rem === 0) {
                        d1Arr = [base + 1, base, base - 1];
                        d2Arr = [base + 2, base - 1, base - 1];
                        d3Arr = [base + 2, base, base - 2];
                    } else if (rem === 1) {
                        d1Arr = [base + 2, base, base - 1];
                        d2Arr = [base + 3, base - 1, base - 1];
                        d3Arr = [base + 2, base + 1, base - 2];
                    } else { // rem === 2
                        d1Arr = [base + 2, base, base];
                        d2Arr = [base + 3, base, base - 1];
                        d3Arr = [base + 2, base + 1, base - 1];
                    }
                } else { // rooms === 4
                    if (rem === 0) {
                        d1Arr = [base + 1, base, base, base - 1];
                        d2Arr = [base + 2, base, base - 1, base - 1];
                        d3Arr = [base + 1, base + 1, base - 1, base - 1];
                    } else if (rem === 1) {
                        d1Arr = [base + 2, base, base, base - 1];
                        d2Arr = [base + 2, base + 1, base - 1, base - 1];
                        d3Arr = [base + 3, base - 1, base, base - 1];
                    } else if (rem === 2) {
                        d1Arr = [base + 2, base + 1, base, base - 1];
                        d2Arr = [base + 2, base + 2, base - 1, base - 1];
                        d3Arr = [base + 3, base, base, base - 1];
                    } else { // rem === 3
                        d1Arr = [base + 2, base + 1, base + 1, base - 1];
                        d2Arr = [base + 2, base + 2, base, base - 1];
                        d3Arr = [base + 3, base + 1, base, base - 1];
                    }
                }
                const q = total + " students will be assigned to " + rooms + " classrooms. How many students should be in each class so that the numbers are as balanced as possible?";
                const s = shuffle(r, [correct, d1Arr.join(", "), d2Arr.join(", "), d3Arr.join(", ")]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [total + " ÷ " + rooms + " = " + base + " with a remainder of " + rem + ". So " + rem + " classes have " + (base + 1) + " and " + (rooms - rem) + " have " + base + ": " + correct + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 1: Splitting restaurant bill equally (Lesson 111 #2)
            (r) => {
                const friends = randInt(r, 4, 6);
                const centsEach = randInt(r, 11, 22) * 100 + [0, 25, 50, 75][randInt(r, 0, 3)];
                const totalBill = (friends * centsEach / 100).toFixed(2);
                const ans = formatCurrency(centsEach / 100);
                const q = friends + " friends went out to lunch. Their bill was $" + totalBill + ". If the friends divide the bill equally, how much will each friend pay?";
                const s = shuffle(r, [ans, formatCurrency((centsEach + 150) / 100), formatCurrency((centsEach - 150) / 100), formatCurrency((centsEach + 300) / 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide the total bill by " + friends + ": $" + totalBill + " ÷ " + friends + " = " + ans + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 2: Sheet of stamps at post office (Lesson 111 #3)
            (r) => {
                const names = ["Shauna", "Elena", "Maya", "Carlos", "Darius"];
                const name = names[randInt(r, 0, names.length - 1)];
                const count = randInt(r, 30, 50);
                const priceCents = [37, 39, 41, 44, 45][randInt(r, 0, 4)];
                const totalCost = (count * priceCents / 100).toFixed(2);
                const q = name + " bought a sheet of " + priceCents + "¢ stamps at the post office for $" + totalCost + ". How many stamps were in the sheet?";
                const s = shuffle(r, ["" + count, "" + (count + 5), "" + (count - 5), "" + (count + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide the total cost by the price per stamp: $" + totalCost + " ÷ $0." + priceCents + " = " + count + " stamps."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 3: Van capacity for field trip (Lesson 111 Practice Set c)
            (r) => {
                const children = randInt(r, 25, 45);
                const cap = [6, 7, 8][randInt(r, 0, 2)];
                const adjChildren = (children % cap === 0) ? children + 2 : children;
                const vans = Math.ceil(adjChildren / cap);
                const floorVans = Math.floor(adjChildren / cap);
                const q = adjChildren + " children need a ride to the fair. Each van can carry " + cap + " children. How many vans are needed?";
                const s = shuffle(r, ["" + vans, "" + floorVans, "" + (vans + 1), "" + (vans + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [adjChildren + " ÷ " + cap + " = " + floorVans + " with a remainder of " + (adjChildren % cap) + ". An additional van is needed for the remaining children, giving " + vans + " vans."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 4: Movie tickets with cash budget (Lesson 111 Practice Set b)
            (r) => {
                const names = ["Aluna", "Marcus", "Keisha", "Mateo", "Priya"];
                const name = names[randInt(r, 0, names.length - 1)];
                const ticketPrice = [7.50, 8.50, 9.50, 10.50][randInt(r, 0, 3)];
                const budget = [30, 40, 50, 60][randInt(r, 0, 3)];
                const tickets = Math.floor(budget / ticketPrice);
                const q = "Movie tickets cost $" + ticketPrice.toFixed(2) + ". " + name + " has $" + budget + ".00. How many movie tickets can " + name + " buy?";
                const s = shuffle(r, ["" + tickets, "" + (tickets + 1), "" + (tickets - 1), "" + (tickets + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + budget + ".00 ÷ $" + ticketPrice.toFixed(2) + " = " + (budget / ticketPrice).toFixed(2) + ". Drop the remainder because partial tickets cannot be bought: " + tickets + " tickets."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 5: Average price of four books (Lesson 111 Practice Set e)
            (r) => {
                const names = ["Kevin", "Andre", "Chloe", "Jamal", "Tara"];
                const name = names[randInt(r, 0, names.length - 1)];
                const avgCents = randInt(r, 650, 850);
                const p1 = avgCents - 40;
                const p2 = avgCents + 60;
                const p3 = avgCents - 80;
                const p4 = avgCents + 60;
                const p1Str = formatCurrency(p1 / 100);
                const p2Str = formatCurrency(p2 / 100);
                const p3Str = formatCurrency(p3 / 100);
                const p4Str = formatCurrency(p4 / 100);
                const ans = formatCurrency(avgCents / 100);
                const q = name + " ordered four books at the book fair. The books cost " + p1Str + ", " + p2Str + ", " + p3Str + ", and " + p4Str + ". Find the average (mean) price of the books.";
                const s = shuffle(r, [ans, formatCurrency((avgCents + 50) / 100), formatCurrency((avgCents - 50) / 100), formatCurrency((avgCents + 100) / 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the four prices and divide by 4: (" + p1Str + " + " + p2Str + " + " + p3Str + " + " + p4Str + ") ÷ 4 = " + ans + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 6: Dropping highest and lowest gymnastic scores and finding mean (Lesson 111 #16)
            (r) => {
                const names = ["Andrea", "Sora", "Devin", "Fatima", "Lucas"];
                const name = names[randInt(r, 0, names.length - 1)];
                const b = randInt(r, 65, 82);
                const scores = [
                    ((b - 6) / 10).toFixed(1),
                    ((b - 2) / 10).toFixed(1),
                    ((b - 1) / 10).toFixed(1),
                    (b / 10).toFixed(1),
                    ((b + 1) / 10).toFixed(1),
                    ((b + 2) / 10).toFixed(1),
                    ((b + 7) / 10).toFixed(1)
                ];
                const avgStr = (b / 10).toFixed(1);
                const q = name + " received the following scores in a gymnastic event: " + scores.join(", ") + ". The highest score and the lowest score are not counted. What is the average of the remaining scores?";
                const s = shuffle(r, [avgStr, ((b + 2) / 10).toFixed(1), ((b - 2) / 10).toFixed(1), ((b + 4) / 10).toFixed(1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Remove lowest (" + scores[0] + ") and highest (" + scores[6] + "). Sum the remaining 5 scores and divide by 5: (" + scores.slice(1, 6).join(" + ") + ") ÷ 5 = " + avgStr + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 7: Cubes needed to build an N-by-N-by-N cube (Lesson 111 #4)
            (r) => {
                const n = randInt(r, 3, 5);
                const ans = n * n * n;
                const q = "Eight cubes were used to build a 2-by-2-by-2 cube. How many cubes are needed to build a cube that has " + n + " cubes along each edge?";
                const s = shuffle(r, ["" + ans, "" + (n * n), "" + (ans + 10), "" + (ans - 9)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The volume is " + n + " × " + n + " × " + n + " = " + ans + " cubes."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 8: Standard notation from expanded notation with powers of 10 (Lesson 111 #5)
            (r) => {
                const a = randInt(r, 4, 9);
                const b = randInt(r, 2, 8);
                const c = randInt(r, 1, 9);
                const val = a * 1000 + b * 10 + c;
                const q = "Write the standard notation for: (" + a + " × 10³) + (" + b + " × 10¹) + (" + c + " × 10⁰)";
                const s = shuffle(r, ["" + val, "" + (a * 1000 + b * 100 + c), "" + (a * 100 + b * 10 + c), "" + (a * 10000 + b * 10 + c)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × 1000 = " + (a * 1000) + "; " + b + " × 10 = " + (b * 10) + "; " + c + " × 1 = " + c + ". Sum = " + val + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 9: Third angle of triangle given two angles (Lesson 111 #8)
            (r) => {
                const ang1 = randInt(r, 45, 75);
                const ang2 = randInt(r, 45, 75);
                const ang3 = 180 - ang1 - ang2;
                const q = "If two angles of a triangle measure " + ang1 + "° and " + ang2 + "°, what is the measure of the third angle?";
                const s = shuffle(r, [ang3 + "°", (ang3 + 15) + "°", (ang3 - 15) + "°", (180 - ang1) + "°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of angles in a triangle is 180°. Third angle = 180° − (" + ang1 + "° + " + ang2 + "°) = " + ang3 + "°."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 10: Fraction to percent conversion (Lesson 111 #9)
            (r) => {
                const num = [3, 7, 9, 11, 13][randInt(r, 0, 4)];
                const pct = num * 5;
                const q = "Convert the fraction " + num + "/20 to a percent.";
                const s = shuffle(r, [pct + "%", (pct + 10) + "%", (pct - 10) + "%", (num * 10) + "%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [num + "/20 = (" + num + " × 5) / (20 × 5) = " + pct + "/100 = " + pct + "%."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 11: Percent to fraction in simplest form (Lesson 111 #11)
            (r) => {
                const pct = [2, 4, 5, 8, 15][randInt(r, 0, 4)];
                const g = (pct === 2 ? 2 : pct === 4 ? 4 : pct === 5 ? 5 : pct === 8 ? 4 : 5);
                const n = pct / g;
                const d = 100 / g;
                const ans = formatFraction(n, d);
                const q = "Write " + pct + "% as a fraction in simplest form.";
                const s = shuffle(r, [ans, formatFraction(pct, 10), formatFraction(n + 1, d), formatFraction(1, 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% = " + pct + "/100 = " + ans + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 12: Signed integer subtraction: (−a) − (−b) (Lesson 111 #12)
            (r) => {
                const a = randInt(r, 5, 12);
                const b = randInt(r, 13, 20);
                const ans = b - a;
                const q = "Simplify: (−" + a + ") − (−" + b + ")";
                const s = shuffle(r, ["" + ans, "" + (-a - b), "" + (a - b), "" + (a + b)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtracting a negative is adding a positive: (−" + a + ") + " + b + " = " + ans + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 13: Mixed number divided by 100 (Lesson 111 #13)
            (r) => {
                const items = [
                    { mixed: "6 1/4", ans: "1/16", step: "6 1/4 = 25/4; 25/4 ÷ 100 = 25/400 = 1/16" },
                    { mixed: "12 1/2", ans: "1/8", step: "12 1/2 = 25/2; 25/2 ÷ 100 = 25/200 = 1/8" },
                    { mixed: "3 1/8", ans: "1/32", step: "3 1/8 = 25/8; 25/8 ÷ 100 = 25/800 = 1/32" }
                ];
                const choice = items[randInt(r, 0, items.length - 1)];
                const q = "Simplify: " + choice.mixed + " ÷ 100";
                const s = shuffle(r, [choice.ans, "1/4", "1/25", "1/40"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [choice.step + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 14: Linear decimal equation with money: 0.am = $B (Lesson 111 #14)
            (r) => {
                const a = [2, 3, 4, 5][randInt(r, 0, 3)];
                const mVal = randInt(r, 12, 25) + 0.5;
                const bStr = ((a * 0.1) * mVal).toFixed(2);
                const ans = formatCurrency(mVal);
                const q = "Solve for m: " + (a * 0.1).toFixed(1) + "m = $" + bStr;
                const s = shuffle(r, [ans, formatCurrency(mVal + 2), formatCurrency(mVal - 2), formatCurrency(mVal * 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both sides by " + (a * 0.1).toFixed(1) + ": m = $" + bStr + " ÷ " + (a * 0.1).toFixed(1) + " = " + ans + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 15: Points scored as percentage of team total (Lesson 111 #15)
            (r) => {
                const names = ["Kim", "Aaliyah", "Marcus", "Lucas", "Elena"];
                const name = names[randInt(r, 0, names.length - 1)];
                const pct = [20, 25, 30, 40][randInt(r, 0, 3)];
                const mult = randInt(r, 2, 5);
                const pts = mult * (pct / 5);
                const total = Math.round(pts / (pct / 100));
                const q = name + " scored " + pts + " points, which was " + pct + "% of the team's total. How many points did the team score in all?";
                const s = shuffle(r, [total + " points", (total + 10) + " points", (total - 10) + " points", (total + 20) + " points"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% = " + (pct / 100) + ". Total = " + pts + " ÷ " + (pct / 100) + " = " + total + " points."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 16: Area of trapezoid (Lesson 111 #18)
            (r) => {
                const b1 = randInt(r, 4, 8) * 2;
                const b2 = b1 + randInt(r, 2, 6) * 2;
                const h = randInt(r, 3, 7);
                const area = ((b1 + b2) / 2) * h;
                const q = "What is the area of a trapezoid with parallel bases of " + b1 + " m and " + b2 + " m and a perpendicular height of " + h + " m?";
                const s = shuffle(r, [area + " m²", (area + 10) + " m²", (area - 10) + " m²", (b2 * h) + " m²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (b₁ + b₂) / 2 × h = (" + b1 + " + " + b2 + ") / 2 × " + h + " = " + area + " m²."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 17: Ratio of vertices to edges on a pyramid (Lesson 111 #19)
            (r) => {
                const shapes = [
                    { name: "triangular", v: 4, e: 6 },
                    { name: "square", v: 5, e: 8 },
                    { name: "pentagonal", v: 6, e: 10 },
                    { name: "hexagonal", v: 7, e: 12 }
                ];
                const shape = shapes[randInt(r, 0, shapes.length - 1)];
                const correct = shape.v + " to " + shape.e;
                const q = "What is the ratio of vertices to edges on a pyramid with a " + shape.name + " base?";
                const s = shuffle(r, [correct, shape.e + " to " + shape.v, (shape.v + 1) + " to " + shape.e, shape.v + " to " + (shape.e - 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A pyramid with a " + shape.name + " base has " + shape.v + " vertices and " + shape.e + " edges, so the ratio is " + correct + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 18: Two-step linear equation: am + b = c (Lesson 111 #21)
            (r) => {
                const a = randInt(r, 3, 6);
                const m = randInt(r, 12, 35);
                const b = randInt(r, 1, 9);
                const c = a * m + b;
                const q = "Solve and check: " + a + "m + " + b + " = " + c;
                const s = shuffle(r, ["" + m, "" + (m + 2), "" + (m - 2), "" + (m + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "m = " + c + " − " + b + " = " + (c - b) + "; m = " + (c - b) + " ÷ " + a + " = " + m + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 19: Prime factorization using exponents (Lesson 111 #22)
            (r) => {
                const choices = [
                    { n: 600, ans: "2³ × 3 × 5²", dist: ["2² × 3² × 5²", "2³ × 3² × 5", "2⁴ × 3 × 5"] },
                    { n: 360, ans: "2³ × 3² × 5", dist: ["2² × 3³ × 5", "2³ × 3 × 5²", "2⁴ × 3² × 5"] },
                    { n: 500, ans: "2² × 5³", dist: ["2³ × 5²", "2² × 3 × 5²", "2³ × 5³"] },
                    { n: 720, ans: "2⁴ × 3² × 5", dist: ["2³ × 3³ × 5", "2⁴ × 3 × 5²", "2⁵ × 3 × 5"] }
                ];
                const choice = choices[randInt(r, 0, choices.length - 1)];
                const q = "Write the prime factorization of " + choice.n + " using exponents.";
                const s = shuffle(r, [choice.ans, ...choice.dist]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find prime factors of " + choice.n + ": " + choice.ans + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 112: Multiplying and Dividing Integers
    112: (rng, qIndex) => {
        const framings = [
            // Category 0: Multiplying integers with different signs: (−a)(+b) (Lesson 112 Practice Set a)
            (r) => {
                const a = randInt(r, 3, 9);
                const b = randInt(r, 3, 9);
                const ans = -a * b;
                const q = "Simplify: (−" + a + ")(+" + b + ")";
                const s = shuffle(r, ["" + ans, "" + (a * b), "" + (-a + b), "" + (-a - b)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A negative multiplied by a positive is negative: (−" + a + ") × (" + b + ") = " + ans + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 1: Multiplying two negative integers: (−a)(−b) (Lesson 112 Practice Set b)
            (r) => {
                const a = randInt(r, 3, 9);
                const b = randInt(r, 3, 9);
                const ans = a * b;
                const q = "Simplify: (−" + a + ")(−" + b + ")";
                const s = shuffle(r, ["" + ans, "" + (-ans), "" + (a + b), "" + (-a - b)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A negative multiplied by a negative is positive: (−" + a + ") × (−" + b + ") = " + ans + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 2: Dividing negative by positive: (−a) ÷ (+b) (Lesson 112 Practice Set e)
            (r) => {
                const b = randInt(r, 2, 8);
                const quot = randInt(r, 2, 9);
                const a = b * quot;
                const ans = -quot;
                const q = "Simplify: (−" + a + ") ÷ (+" + b + ")";
                const s = shuffle(r, ["" + ans, "" + quot, "" + (ans - 2), "" + (ans + 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A negative divided by a positive is negative: −" + a + " ÷ " + b + " = " + ans + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 3: Dividing negative by negative: (−a) ÷ (−b) (Lesson 112 Practice Set g)
            (r) => {
                const b = randInt(r, 2, 8);
                const quot = randInt(r, 2, 9);
                const a = b * quot;
                const q = "Simplify: (−" + a + ") ÷ (−" + b + ")";
                const s = shuffle(r, ["" + quot, "" + (-quot), "" + (quot + 2), "" + (quot - 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A negative divided by a negative is positive: −" + a + " ÷ (−" + b + ") = " + quot + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 4: Field trip bus capacity (Lesson 112 #1)
            (r) => {
                const students = randInt(r, 180, 260);
                const maxBus = randInt(r, 45, 60);
                const buses = Math.ceil(students / maxBus);
                const floorBuses = Math.floor(students / maxBus);
                const q = students + " students are traveling by bus on a field trip. The maximum number of students allowed on each bus is " + maxBus + ". How many buses are needed for the trip?";
                const s = shuffle(r, [buses + " buses", floorBuses + " buses", (buses + 1) + " buses", (buses + 2) + " buses"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [students + " ÷ " + maxBus + " = " + floorBuses + " R " + (students % maxBus) + ". Since all students must have a ride, round up to " + buses + " buses."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 5: Scale model aircraft wingspan / length (Lesson 112 #2)
            (r) => {
                const scaleFeet = randInt(r, 8, 15);
                const modelIn = randInt(r, 12, 24);
                const actualFt = modelIn * scaleFeet;
                const q = "A scale model of an aircraft is " + modelIn + " inches long. The scale of the model is 1 inch = " + scaleFeet + " feet. How long is the actual aircraft in feet?";
                const s = shuffle(r, [actualFt + " feet", (actualFt + scaleFeet * 2) + " feet", (actualFt - scaleFeet * 2) + " feet", (actualFt + 10) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply the model length by the scale factor: " + modelIn + " × " + scaleFeet + " = " + actualFt + " feet."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 6: Signed integer subtraction: (−a) − (−b) (Lesson 112 #4)
            (r) => {
                const a = randInt(r, 2, 9);
                const b = randInt(r, 4, 12);
                const ans = -a + b;
                const q = "Calculate mentally: (−" + a + ") − (−" + b + ")";
                const s = shuffle(r, ["" + ans, "" + (-a - b), "" + (a - b), "" + (a + b)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(−" + a + ") − (−" + b + ") = −" + a + " + " + b + " = " + ans + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 7: Chef chopped carrots: remaining percentage/count (Lesson 112 #5)
            (r) => {
                const total = randInt(r, 3, 6) * 10;
                const pct = [70, 80, 90][randInt(r, 0, 2)];
                const chopped = Math.round(total * (pct / 100));
                const remained = total - chopped;
                const q = "The chef chopped " + chopped + " carrots, which was " + pct + "% of the carrots in the bag. How many carrots remained?";
                const s = shuffle(r, [remained + " carrots", (remained + 2) + " carrots", (remained + 4) + " carrots", (total) + " carrots"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total carrots = " + chopped + " ÷ " + (pct / 100) + " = " + total + ". Remained = " + total + " − " + chopped + " = " + remained + " carrots."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 8: Expanded notation using exponents for large number (Lesson 112 #6)
            (r) => {
                const d1 = randInt(r, 2, 5);
                const d2 = randInt(r, 1, 9);
                const d3 = randInt(r, 1, 9);
                const num = d1 * 10000000 + d2 * 100000 + d3 * 10000;
                const numStr = num.toLocaleString('en-US');
                const correct = "(" + d1 + " × 10⁷) + (" + d2 + " × 10⁵) + (" + d3 + " × 10⁴)";
                const d1Opt = "(" + d1 + " × 10⁶) + (" + d2 + " × 10⁴) + (" + d3 + " × 10³)";
                const d2Opt = "(" + d1 + " × 10⁷) + (" + d2 + " × 10⁶) + (" + d3 + " × 10⁵)";
                const d3Opt = "(" + d1 + " × 10⁸) + (" + d2 + " × 10⁵) + (" + d3 + " × 10⁴)";
                const q = "Write " + numStr + " in expanded notation using exponents.";
                const s = shuffle(r, [correct, d1Opt, d2Opt, d3Opt]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [numStr + " = " + correct + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 9: Percent of money amount rounded to nearest cent (Lesson 112 #7)
            (r) => {
                const pct = randInt(r, 6, 9);
                const cents = randInt(r, 250, 480);
                const costStr = (cents / 100).toFixed(2);
                const taxCents = Math.round(cents * (pct / 100));
                const ans = formatCurrency(taxCents / 100);
                const q = "Find " + pct + "% of $" + costStr + " and round the product to the nearest cent.";
                const s = shuffle(r, [ans, formatCurrency((taxCents + 5) / 100), formatCurrency((taxCents - 5) / 100), formatCurrency((taxCents + 10) / 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + costStr + " × 0.0" + pct + " = $" + (cents * pct / 10000).toFixed(4) + ", which rounds to " + ans + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 10: Fraction subtraction equation: a − m = b (Lesson 112 #12)
            (r) => {
                const q = "Solve for m: 5 1/2 − m = 2 5/6";
                const ans = "2 2/3";
                const s = shuffle(r, [ans, "3 1/3", "2 1/6", "3 2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 5 1/2 − 2 5/6 = 5 3/6 − 2 5/6 = 4 9/6 − 2 5/6 = 2 4/6 = 2 2/3."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 11: Proportion with decimal: a / b = c / n (Lesson 112 #13)
            (r) => {
                const a = 6, b = 10;
                const c = (randInt(r, 6, 15) * 0.1).toFixed(1);
                const nVal = (parseFloat(c) * b / a).toFixed(1);
                const q = "Solve the proportion: " + a + "/" + b + " = " + c + "/n";
                const s = shuffle(r, ["" + parseFloat(nVal), "" + (parseFloat(nVal) + 0.5), "" + (parseFloat(nVal) - 0.5), "" + (parseFloat(nVal) + 1.5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "n = " + b + " × " + c + " = " + (b * parseFloat(c)).toFixed(1) + "; n = " + nVal + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 12: Two-step linear equation: ax − b = c (Lesson 112 #14)
            (r) => {
                const a = randInt(r, 4, 9);
                const x = randInt(r, 6, 15);
                const b = randInt(r, 3, 9);
                const c = a * x - b;
                const q = "Solve for x: " + a + "x − " + b + " = " + c;
                const s = shuffle(r, ["" + x, "" + (x + 2), "" + (x - 2), "" + (x + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "x = " + c + " + " + b + " = " + (c + b) + "; x = " + (c + b) + " ÷ " + a + " = " + x + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 13: Decimal division equation: 0.0aw = b (Lesson 112 #15)
            (r) => {
                const a = [2, 4, 5, 8][randInt(r, 0, 3)];
                const w = randInt(r, 5, 20) * 10;
                const b = (a / 100) * w;
                const coeff = (a / 100).toFixed(2);
                const q = "Solve: " + coeff + "w = " + b;
                const s = shuffle(r, ["" + w, "" + (w + 20), "" + (w - 20), "" + (w * 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + b + " ÷ " + coeff + " = " + w + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 14: Stack of identical books weight and total weight (Lesson 112 #16)
            (r) => {
                const n1 = 3;
                const unit = randInt(r, 2, 4);
                const w1 = n1 * unit;
                const totalBooks = randInt(r, 7, 10);
                const totalWeight = totalBooks * unit;
                const q = "All " + totalBooks + " books in a stack are the same weight. " + n1 + " books weigh a total of " + w1 + " pounds. How much do all " + totalBooks + " books weigh?";
                const s = shuffle(r, [totalWeight + " lb", (totalWeight + 4) + " lb", (totalWeight - 4) + " lb", (totalWeight + 8) + " lb"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each book weighs " + w1 + " ÷ " + n1 + " = " + unit + " lb. All " + totalBooks + " books weigh " + totalBooks + " × " + unit + " = " + totalWeight + " lb."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 15: Volume of rectangular prism V = lwh (Lesson 112 #17)
            (r) => {
                const l = randInt(r, 6, 12);
                const w = randInt(r, 3, 7);
                const h = randInt(r, 2, 5);
                const vol = l * w * h;
                const q = "Find the volume of a rectangular prism with length " + l + " cm, width " + w + " cm, and height " + h + " cm.";
                const s = shuffle(r, [vol + " cm³", (vol + 20) + " cm³", (vol - 20) + " cm³", (l * w + h) + " cm³"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = l × w × h = " + l + " × " + w + " × " + h + " = " + vol + " cm³."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 16: Metric unit conversion: meters to millimeters (Lesson 112 #18)
            (r) => {
                const m = (randInt(r, 12, 35) / 10).toFixed(1);
                const mm = Math.round(parseFloat(m) * 1000);
                const q = "How many millimeters is " + m + " meters? (1 m = 1000 mm)";
                const s = shuffle(r, [mm + " mm", (mm / 10) + " mm", (mm * 10) + " mm", (mm + 100) + " mm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [m + " × 1000 = " + mm + " mm."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 17: Perimeter of complex L-shaped polygon (Lesson 112 #19)
            (r) => {
                const W = randInt(r, 14, 20);
                const H = randInt(r, 10, 16);
                const perim = 2 * (W + H);
                const q = "An L-shaped polygon has an overall width of " + W + " mm and an overall height of " + H + " mm. All intersecting edges meet at right angles. What is the perimeter of the polygon?";
                const s = shuffle(r, [perim + " mm", (perim + 10) + " mm", (perim - 10) + " mm", (W + H) + " mm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The perimeter of an orthogonal L-shaped polygon is equal to 2 × (width + height) = 2 × (" + W + " + " + H + ") = " + perim + " mm."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 18: Area of complex L-shaped polygon (Lesson 112 #19, #20)
            (r) => {
                const W = 15;
                const H = 12;
                const cutW = 5;
                const cutH = 7;
                const area = W * H - cutW * cutH;
                const q = "An L-shaped polygon is formed by removing a " + cutW + " mm by " + cutH + " mm rectangle from a " + W + " mm by " + H + " mm rectangle. What is the area of the polygon?";
                const s = shuffle(r, [area + " mm²", (W * H) + " mm²", (area + 15) + " mm²", (area - 15) + " mm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = total area − cutout area = (" + W + " × " + H + ") − (" + cutW + " × " + cutH + ") = " + (W * H) + " − " + (cutW * cutH) + " = " + area + " mm²."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 19: Cylindrical wastebasket wallpaper wrapping length (Lesson 112 #23)
            (r) => {
                const names = ["Debbie", "Chloe", "Keisha", "Maya", "Elena"];
                const name = names[randInt(r, 0, names.length - 1)];
                const diam = randInt(r, 10, 16);
                const circum = Math.ceil(diam * 3.14159);
                const q = name + " wants to decorate a cylindrical wastebasket by wrapping it with wallpaper. The diameter of the wastebasket is " + diam + " inches. The length of the wallpaper should be at least how many inches? (Round up to the next inch.)";
                const s = shuffle(r, [circum + " inches", (circum - 2) + " inches", (circum + 4) + " inches", (diam * 3) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × d ≈ 3.1416 × " + diam + " = " + (diam * 3.14159).toFixed(2) + " inches. Rounding up to the next inch gives " + circum + " inches."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 113: Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten
    113: (rng, qIndex) => {
        const framings = [
            // Category 0: Adding feet and inches with regrouping (Lesson 113 Practice Set a)
            (r) => {
                const ft1 = randInt(r, 4, 8);
                const in1 = randInt(r, 5, 11);
                const ft2 = randInt(r, 2, 6);
                const in2 = randInt(r, 5, 11);
                const sumIn = in1 + in2;
                const extraFt = Math.floor(sumIn / 12);
                const remIn = sumIn % 12;
                const totFt = ft1 + ft2 + extraFt;
                const correct = totFt + " ft " + remIn + " in.";
                const q = "Add: " + ft1 + " ft " + in1 + " in. + " + ft2 + " ft " + in2 + " in.";
                const s = shuffle(r, [correct, (totFt - 1) + " ft " + (remIn + 6) + " in.", (ft1 + ft2) + " ft " + sumIn + " in.", (totFt + 1) + " ft " + remIn + " in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [in1 + " in. + " + in2 + " in. = " + sumIn + " in. = " + extraFt + " ft " + remIn + " in. Total feet = " + ft1 + " + " + ft2 + " + " + extraFt + " = " + totFt + " ft. Result: " + correct + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 1: Subtracting hours and minutes with regrouping (Lesson 113 Practice Set b)
            (r) => {
                const h1 = randInt(r, 3, 6);
                const m1 = randInt(r, 10, 25);
                const h2 = randInt(r, 1, h1 - 1);
                const m2 = randInt(r, 35, 55);
                const remMin = (m1 + 60) - m2;
                const remH = (h1 - 1) - h2;
                const correct = remH + " hr " + remMin + " min";
                const q = "Subtract: " + h1 + " hr " + m1 + " min − " + h2 + " hr " + m2 + " min";
                const s = shuffle(r, [correct, (remH + 1) + " hr " + remMin + " min", remH + " hr " + (remMin - 10) + " min", (remH - 1) + " hr " + (remMin + 15) + " min"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Regroup 1 hour as 60 minutes: " + (h1 - 1) + " hr " + (m1 + 60) + " min − " + h2 + " hr " + m2 + " min = " + correct + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 2: Subtracting feet and inches with regrouping (Lesson 113 #18)
            (r) => {
                const ft1 = randInt(r, 3, 7);
                const in1 = randInt(r, 1, 4);
                const ft2 = randInt(r, 1, ft1 - 1);
                const in2 = randInt(r, 7, 11);
                const remIn = (in1 + 12) - in2;
                const remFt = (ft1 - 1) - ft2;
                const correct = (remFt > 0 ? remFt + " ft " : "") + remIn + " in.";
                const q = "Subtract: " + ft1 + " feet " + in1 + " inches − " + ft2 + " feet " + in2 + " inches";
                const s = shuffle(r, [correct, (remFt + 1) + " ft " + remIn + " in.", remIn + " in.", (remFt > 0 ? remFt + " ft " : "") + (remIn + 2) + " in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Regroup 1 foot as 12 inches: " + (ft1 - 1) + " ft " + (in1 + 12) + " in. − " + ft2 + " ft " + in2 + " in. = " + correct + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 3: Multiplying decimal by power of 10: a.b × 10^k (Lesson 113 Practice Set c, #5)
            (r) => {
                const a = randInt(r, 1, 9);
                const b = randInt(r, 1, 9);
                const k = randInt(r, 4, 6);
                const expChar = (k === 4 ? "⁴" : k === 5 ? "⁵" : "⁶");
                const val = (a + b / 10) * Math.pow(10, k);
                const correct = val.toLocaleString('en-US');
                const q = "Write " + a + "." + b + " × 10" + expChar + " as a standard numeral.";
                const s = shuffle(r, [correct, (val / 10).toLocaleString('en-US'), (val * 10).toLocaleString('en-US'), (val + 1000).toLocaleString('en-US')]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply by 10" + expChar + " by shifting the decimal point " + k + " places to the right: " + correct + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 4: Mixed number millions to standard numeral (Lesson 113 Practice Set f, #23)
            (r) => {
                const items = [
                    { str: "1 1/4 million", val: 1250000 },
                    { str: "2 1/2 million", val: 2500000 },
                    { str: "3 3/4 million", val: 3750000 },
                    { str: "4 1/2 million", val: 4500000 }
                ];
                const choice = items[randInt(r, 0, items.length - 1)];
                const correct = choice.val.toLocaleString('en-US');
                const q = "Write the standard number for " + choice.str + ".";
                const s = shuffle(r, [correct, (choice.val / 10).toLocaleString('en-US'), (choice.val + 250000).toLocaleString('en-US'), (choice.val - 250000).toLocaleString('en-US')]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [choice.str + " = " + correct + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 5: Mixed number billions to standard numeral (Lesson 113 Practice Set e)
            (r) => {
                const items = [
                    { str: "1 1/2 billion", val: 1500000000 },
                    { str: "2 1/2 billion", val: 2500000000 }
                ];
                const choice = items[randInt(r, 0, items.length - 1)];
                const correct = choice.val.toLocaleString('en-US');
                const q = "Write the standard numeral for " + choice.str + ".";
                const s = shuffle(r, [correct, (choice.val / 10).toLocaleString('en-US'), (choice.val / 1000).toLocaleString('en-US'), (choice.val + 500000000).toLocaleString('en-US')]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [choice.str + " = " + correct + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 6: Yard work earnings divided equally among teenagers (Lesson 113 #1)
            (r) => {
                const teens = [4, 5][randInt(r, 0, 1)];
                const pay = [60, 75, 80, 100][randInt(r, 0, 3)];
                const each = pay / teens;
                const ans = formatCurrency(each);
                const q = "For cleaning the yard, " + teens + " teenagers were paid a total of $" + pay + ".00. If they divide the money equally, how much money will each teenager receive?";
                const s = shuffle(r, [ans, formatCurrency(each + 2.50), formatCurrency(each - 2.50), formatCurrency(each + 5.00)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + pay + ".00 ÷ " + teens + " = " + ans + " each."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 7: Ratio with total: walkers vs bus riders (Lesson 113 #4)
            (r) => {
                const w = 5, b = 3;
                const mult = randInt(r, 12, 25);
                const totalStudents = (w + b) * mult;
                const walkers = w * mult;
                const q = "The ratio of students who walk to school to students who ride a bus to school is " + w + " to " + b + ". If there are " + totalStudents + " students, how many students walk to school?";
                const s = shuffle(r, [walkers + " students", (b * mult) + " students", (walkers + 8) + " students", (walkers - 8) + " students"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total parts = " + w + " + " + b + " = " + (w + b) + ". Walkers fraction = " + w + "/" + (w + b) + ". " + w + "/" + (w + b) + " × " + totalStudents + " = " + walkers + " students."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 8: Probability of complementary event as decimal (Lesson 113 #3)
            (r) => {
                const pct = [70, 75, 80, 85][randInt(r, 0, 3)];
                const prob = ((100 - pct) / 100).toFixed(2);
                const q = "If the chance of rain is " + pct + "%, what is the probability that it will not rain? Express the answer as a decimal.";
                const s = shuffle(r, ["" + prob, "" + (pct / 100).toFixed(2), "" + (parseFloat(prob) + 0.1).toFixed(2), "" + (parseFloat(prob) - 0.05).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Probability of not raining = 100% − " + pct + "% = " + (100 - pct) + "% = " + prob + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 9: Multiplying signed integers: (−a)(−b) (Lesson 113 #6)
            (r) => {
                const a = randInt(r, 8, 15);
                const b = randInt(r, 3, 6);
                const prod = a * b;
                const q = "Calculate mentally: (−" + a + ")(−" + b + ")";
                const s = shuffle(r, ["" + prod, "" + (-prod), "" + (prod + 4), "" + (prod - 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(−" + a + ") × (−" + b + ") = " + prod + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 10: Subtracting mixed numbers with unlike denominators (Lesson 113 #12)
            (r) => {
                const q = "Simplify: 12 1/4 in. − 3 5/8 in.";
                const ans = "8 5/8 in.";
                const s = shuffle(r, [ans, "9 5/8 in.", "8 3/8 in.", "9 1/8 in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 1/4 − 3 5/8 = 12 2/8 − 3 5/8 = 11 10/8 − 3 5/8 = 8 5/8 in."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 11: Multiplying mixed numbers to find area (Lesson 113 #13)
            (r) => {
                const q = "Multiply: 3 1/3 ft × 2 1/4 ft";
                const ans = "7 1/2 sq ft";
                const s = shuffle(r, [ans, "6 1/12 sq ft", "8 1/2 sq ft", "7 3/4 sq ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10/3 × 9/4 = 90/12 = 15/2 = 7 1/2 sq ft."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 12: Box filled with 1-cm unit cubes (volume) (Lesson 113 #14, #20)
            (r) => {
                const l = randInt(r, 4, 7);
                const w = randInt(r, 3, 5);
                const h = randInt(r, 2, 4);
                const cubes = l * w * h;
                const q = "How many cubes one centimeter on each edge would be needed to fill a box that is " + l + " cm long, " + w + " cm wide, and " + h + " cm high?";
                const s = shuffle(r, [cubes + " cubes", (cubes + 6) + " cubes", (cubes - 6) + " cubes", (2 * (l + w + h)) + " cubes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = " + l + " × " + w + " × " + h + " = " + cubes + " cubic centimeters, which is " + cubes + " cubes."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 13: Area of rectangle with decimals (Lesson 113 #15)
            (r) => {
                const l = (randInt(r, 4, 9) * 0.1).toFixed(1);
                const w = (randInt(r, 3, 7) * 0.1).toFixed(1);
                const area = (parseFloat(l) * parseFloat(w)).toFixed(2);
                const q = "Multiply: " + l + " m × " + w + " m";
                const s = shuffle(r, [area + " m²", (parseFloat(area) * 10).toFixed(1) + " m²", (parseFloat(area) / 10).toFixed(3) + " m²", (parseFloat(l) + parseFloat(w)).toFixed(1) + " m²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [l + " × " + w + " = " + area + " m²."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 14: Sum of powers: a^p1 + b^p2 (Lesson 113 #16)
            (r) => {
                const pairs = [
                    { q: "5² + 2⁵", ans: 57, step: "5² = 25; 2⁵ = 32; 25 + 32 = 57" },
                    { q: "4² + 3³", ans: 43, step: "4² = 16; 3³ = 27; 16 + 27 = 43" },
                    { q: "2⁴ + 5²", ans: 41, step: "2⁴ = 16; 5² = 25; 16 + 25 = 41" }
                ];
                const choice = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Simplify: " + choice.q;
                const s = shuffle(r, ["" + choice.ans, "" + (choice.ans + 10), "" + (choice.ans - 10), "" + (choice.ans + 6)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [choice.step + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 15: Area of trapezoid (Lesson 113 #17)
            (r) => {
                const b1 = randInt(r, 5, 9);
                const b2 = b1 + randInt(r, 2, 5) * 2;
                const h = randInt(r, 3, 6);
                const area = ((b1 + b2) / 2) * h;
                const q = "Find the area of a trapezoid with parallel bases of " + b1 + " ft and " + b2 + " ft and a height of " + h + " ft.";
                const s = shuffle(r, [area + " sq ft", (area + 6) + " sq ft", (area - 6) + " sq ft", (b2 * h) + " sq ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (b₁ + b₂) / 2 × h = (" + b1 + " + " + b2 + ") / 2 × " + h + " = " + area + " sq ft."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 16: Work rate: earnings for N days given D days (Lesson 113 #21)
            (r) => {
                const names = ["Elizabeth", "Mateo", "Keisha", "Andre", "Elena"];
                const name = names[randInt(r, 0, names.length - 1)];
                const d1 = 3;
                const daily = randInt(r, 65, 95);
                const earn1 = d1 * daily;
                const d2 = 10;
                const earn2 = d2 * daily;
                const q = name + " worked for " + d1 + " days and earned $" + earn1 + ". At that rate, how much would " + name + " earn in " + d2 + " days?";
                const s = shuffle(r, ["$" + earn2, "$" + (earn2 + 50), "$" + (earn2 - 50), "$" + (earn2 + 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Daily earnings = $" + earn1 + " ÷ " + d1 + " = $" + daily + ". In " + d2 + " days: $" + daily + " × " + d2 + " = $" + earn2 + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 17: Product of three prime numbers (Lesson 113 #22)
            (r) => {
                const items = [
                    { n: 70, ans: "2 × 5 × 7" },
                    { n: 42, ans: "2 × 3 × 7" },
                    { n: 66, ans: "2 × 3 × 11" },
                    { n: 105, ans: "3 × 5 × 7" }
                ];
                const choice = items[randInt(r, 0, items.length - 1)];
                const q = choice.n + " is the product of which three prime numbers?";
                const s = shuffle(r, [choice.ans, "2 × 2 × " + (choice.n / 4), "3 × 3 × " + Math.round(choice.n / 9), "2 × 7 × 7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [choice.n + " factored into primes is " + choice.ans + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 18: Planetary distance in millions of miles to standard notation (Lesson 113 #23)
            (r) => {
                const dist = randInt(r, 400, 950);
                const correct = dist + ",000,000 miles";
                const q = "Saturn is about " + dist + " million miles from the Sun. Write that distance in standard notation.";
                const s = shuffle(r, [correct, dist + ",000 miles", dist + ",000,000,000 miles", (dist * 10) + ",000,000 miles"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dist + " million = " + correct + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 19: Perimeter and area of a rhombus (Lesson 113 #24)
            (r) => {
                const side = randInt(r, 6, 12);
                const height = randInt(r, 4, side - 1);
                const perim = 4 * side;
                const area = side * height;
                const correct = perim + " in., " + area + " sq in.";
                const q = "A rhombus has sides of " + side + " inches and a height of " + height + " inches. What are its perimeter and area?";
                const s = shuffle(r, [correct, (2 * side) + " in., " + area + " sq in.", perim + " in., " + (side * side) + " sq in.", (perim + 4) + " in., " + (area + 4) + " sq in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 4 × side = 4 × " + side + " = " + perim + " in. Area = base × height = " + side + " × " + height + " = " + area + " sq in."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 114: Unit Multipliers
    114: (rng, qIndex) => {
        const framings = [
            // Category 0: Converting gallons to quarts using unit multipliers (Lesson 114 Practice Set e, #6)
            (r) => {
                const gal = randInt(r, 5, 16);
                const qt = gal * 4;
                const q = "Use a unit multiplier to convert " + gal + " gallons to quarts. (1 gal = 4 qt)";
                const s = shuffle(r, [qt + " quarts", (qt + 4) + " quarts", (qt - 4) + " quarts", (gal * 2) + " quarts"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [gal + " gal × (4 qt / 1 gal) = " + qt + " quarts."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 1: Converting quarts to gallons using unit multipliers (Lesson 114 Practice Set e)
            (r) => {
                const gal = randInt(r, 4, 14);
                const qt = gal * 4;
                const q = "Use a unit multiplier to convert " + qt + " quarts to gallons. (1 gal = 4 qt)";
                const s = shuffle(r, [gal + " gallons", (gal + 2) + " gallons", (gal - 2) + " gallons", (qt * 4) + " gallons"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [qt + " qt × (1 gal / 4 qt) = " + gal + " gallons."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 2: Converting feet to yards using unit multipliers (Lesson 114 Practice Set g)
            (r) => {
                const yd = randInt(r, 12, 35);
                const ft = yd * 3;
                const q = "Use a unit multiplier to convert " + ft + " feet to yards. (1 yd = 3 ft)";
                const s = shuffle(r, [yd + " yards", (yd + 3) + " yards", (yd - 3) + " yards", (ft * 3) + " yards"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × (1 yd / 3 ft) = " + yd + " yards."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 3: Converting yards to feet using unit multipliers (Lesson 114 #15)
            (r) => {
                const yd = randInt(r, 40, 150);
                const ft = yd * 3;
                const q = "A landmark structure is approximately " + yd + " yards tall. Use a unit multiplier to convert this height to feet. (1 yd = 3 ft)";
                const s = shuffle(r, [ft + " feet", (ft + 30) + " feet", (ft - 30) + " feet", (yd * 2) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [yd + " yd × (3 ft / 1 yd) = " + ft + " feet."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 4: Converting meters to centimeters using unit multipliers (Lesson 114 Practice Set f)
            (r) => {
                const m = randInt(r, 15, 60);
                const cm = m * 100;
                const q = "Use a unit multiplier to convert " + m + " meters to centimeters. (1 m = 100 cm)";
                const s = shuffle(r, [cm.toLocaleString('en-US') + " cm", (cm / 10).toLocaleString('en-US') + " cm", (cm * 10).toLocaleString('en-US') + " cm", (cm + 100).toLocaleString('en-US') + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [m + " m × (100 cm / 1 m) = " + cm.toLocaleString('en-US') + " cm."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 5: Converting centimeters to meters using unit multipliers (Lesson 114 Practice Set d)
            (r) => {
                const m = randInt(r, 3, 20);
                const cm = m * 100;
                const q = "Use a unit multiplier to convert " + cm + " centimeters to meters. (1 m = 100 cm)";
                const s = shuffle(r, [m + " meters", (m * 10) + " meters", (m + 5) + " meters", (m / 10) + " meters"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [cm + " cm × (1 m / 100 cm) = " + m + " meters."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 6: Matinee tickets purchase with budget (Lesson 114 #1)
            (r) => {
                const names = ["Maela", "Elena", "Carlos", "Darius", "Chloe"];
                const name = names[randInt(r, 0, names.length - 1)];
                const cost = randInt(r, 6, 9);
                const budget = randInt(r, 20, 45);
                const tickets = Math.floor(budget / cost);
                const q = "Tickets to the matinee are $" + cost + " each. How many tickets can " + name + " buy with $" + budget + "?";
                const s = shuffle(r, [tickets + " tickets", (tickets + 1) + " tickets", (tickets - 1) + " tickets", (tickets + 2) + " tickets"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + budget + " ÷ $" + cost + " = " + tickets + " with $" + (budget % cost) + " remaining. So " + name + " can buy " + tickets + " tickets."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 7: Track laps running pace (Lesson 114 #2)
            (r) => {
                const names = ["Maria", "Jamal", "Andre", "Keisha", "Priya"];
                const name = names[randInt(r, 0, names.length - 1)];
                const laps1 = 3;
                const pace = randInt(r, 2, 4);
                const time1 = laps1 * pace;
                const totalLaps = 4;
                const totalTime = totalLaps * pace;
                const q = name + " ran four laps of the track at an even pace. If it took " + time1 + " minutes to run the first three laps, how long did it take to run all four laps?";
                const s = shuffle(r, [totalTime + " minutes", (totalTime + 2) + " minutes", (totalTime - 2) + " minutes", (totalTime + 4) + " minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Pace per lap = " + time1 + " ÷ " + laps1 + " = " + pace + " minutes per lap. For four laps: 4 × " + pace + " = " + totalTime + " minutes."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 8: Fraction of group that did not participate (Lesson 114 #3)
            (r) => {
                const total = 25;
                const played = [15, 20, 10][randInt(r, 0, 2)];
                const notPlayed = total - played;
                const ans = formatFraction(notPlayed, total);
                const q = played + " of the " + total + " members played in the game. What fraction of the members did not play?";
                const s = shuffle(r, [ans, formatFraction(played, total), formatFraction(notPlayed + 2, total), formatFraction(1, total)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Number who did not play = " + total + " − " + played + " = " + notPlayed + ". As a fraction: " + notPlayed + "/" + total + " = " + ans + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 9: Fractional acreage not planted (Lesson 114 #4)
            (r) => {
                const acres = randInt(r, 12, 28) * 10;
                const ans = (acres * 3) / 5;
                const q = "Two fifths of the " + acres + " acres were planted with alfalfa. How many acres were not planted with alfalfa?";
                const s = shuffle(r, [ans + " acres", (acres - ans) + " acres", (ans + 10) + " acres", (ans - 10) + " acres"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The fraction not planted is 1 − 2/5 = 3/5. Acres not planted = 3/5 × " + acres + " = " + ans + " acres."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 10: Place value digit identification in large number (Lesson 114 #5)
            (r) => {
                const numStr = "94,763,581";
                const places = [
                    { name: "ten-thousands", digit: "6" },
                    { name: "hundred-thousands", digit: "7" },
                    { name: "millions", digit: "4" },
                    { name: "ten-millions", digit: "9" }
                ];
                const choice = places[randInt(r, 0, places.length - 1)];
                const q = "Which digit in " + numStr + " is in the " + choice.name + " place?";
                const s = shuffle(r, [choice.digit, "3", "5", "8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In " + numStr + ", the digit in the " + choice.name + " place is " + choice.digit + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 11: Estimating sum of dollar amounts to nearest dollar (Lesson 114 #7)
            (r) => {
                const c1 = randInt(r, 3400, 3800);
                const c2 = randInt(r, 4100, 4400);
                const c3 = randInt(r, 2500, 2800);
                const s1 = (c1 / 100).toFixed(2);
                const s2 = (c2 / 100).toFixed(2);
                const s3 = (c3 / 100).toFixed(2);
                const estSum = Math.round(c1 / 100) + Math.round(c2 / 100) + Math.round(c3 / 100);
                const q = "Estimate the sum of $" + s1 + ", $" + s2 + ", and $" + s3 + " to the nearest dollar.";
                const s = shuffle(r, ["$" + estSum, "$" + (estSum + 5), "$" + (estSum - 5), "$" + (estSum + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Round each: $" + s1 + " ≈ $" + Math.round(c1 / 100) + ", $" + s2 + " ≈ $" + Math.round(c2 / 100) + ", $" + s3 + " ≈ $" + Math.round(c3 / 100) + ". Sum = $" + estSum + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 12: Order of operations with exponents and division (Lesson 114 #8)
            (r) => {
                const q = "Simplify: 4 + 4² ÷ 2⁴ − 4";
                const ans = "1";
                const s = shuffle(r, [ans, "4", "0", "2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4² = 16 and 2⁴ = 16. Then 16 ÷ 16 = 1. So 4 + 1 − 4 = 1."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 13: Adding three mixed numbers with unlike denominators (Lesson 114 #9)
            (r) => {
                const q = "Add: 3 5/8 in. + 2 1/4 in. + 4 1/2 in.";
                const ans = "10 3/8 in.";
                const s = shuffle(r, [ans, "9 7/8 in.", "10 1/8 in.", "9 5/8 in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to common denominator 8: 3 5/8 + 2 2/8 + 4 4/8 = 9 11/8 = 10 3/8 in."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 14: Dividing decimal by fraction: 3.25 ÷ 2/3 (Lesson 114 #13)
            (r) => {
                const q = "Simplify: 3.25 ÷ 2/3 (express as a mixed number)";
                const ans = "4 7/8";
                const s = shuffle(r, [ans, "4 3/8", "5 1/8", "3 7/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3.25 = 13/4. 13/4 ÷ 2/3 = 13/4 × 3/2 = 39/8 = 4 7/8."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 15: Two-step linear equation: am − b = c (Lesson 114 #14)
            (r) => {
                const a = 3;
                const m = randInt(r, 20, 35);
                const b = 10;
                const c = a * m - b;
                const q = "Solve for m: " + a + "m − " + b + " = " + c;
                const s = shuffle(r, ["" + m, "" + (m + 2), "" + (m - 2), "" + (m + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "m = " + c + " + " + b + " = " + (c + b) + "; m = " + (c + b) + " ÷ " + a + " = " + m + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 16: Proportion with decimal: a / b = c / m (Lesson 114 #15)
            (r) => {
                const a = 3, b = 2;
                const c = "1.8";
                const mVal = "1.2";
                const q = "Solve the proportion: " + a + "/" + b + " = " + c + "/m";
                const s = shuffle(r, [mVal, "2.4", "1.5", "0.9"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "m = " + b + " × " + c + " = 3.6; m = 3.6 ÷ 3 = " + mVal + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 17: Distance, rate, time travel question (Lesson 114 #17)
            (r) => {
                const names = ["Takara", "Mateo", "Keisha", "Darius", "Elena"];
                const name = names[randInt(r, 0, names.length - 1)];
                const hours = randInt(r, 5, 7);
                const speed = 55;
                const traveled = hours * speed;
                const q = name + " leaves on a trip and travels for " + hours + " hours at an average speed of " + speed + " miles per hour. How far does " + name + " travel?";
                const s = shuffle(r, [traveled + " miles", (traveled + 25) + " miles", (traveled - 25) + " miles", (traveled + 55) + " miles"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distance = speed × time = " + speed + " mph × " + hours + " hr = " + traveled + " miles."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 18: Area of stepped/L-shaped polygon (Lesson 114 #18)
            (r) => {
                const area = 15 * 10 - 6 * 2;
                const q = "A polygon is formed by removing a 6 m by 2 m rectangular notch from a 15 m by 10 m rectangle. What is the area of this polygon?";
                const s = shuffle(r, [area + " m²", (15 * 10) + " m²", (area + 10) + " m²", (area - 10) + " m²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (15 × 10) − (6 × 2) = 150 − 12 = " + area + " m²."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 19: Survey response percentage to find total mailed (Lesson 114 #22)
            (r) => {
                const pct = [4, 5, 8, 10][randInt(r, 0, 3)];
                const total = randInt(r, 8, 15) * 100;
                const resp = total * (pct / 100);
                const q = resp + " people responded to a survey, a number that represented " + pct + "% of the surveys mailed. How many surveys were mailed in all?";
                const s = shuffle(r, [total + " surveys", (total + 200) + " surveys", (total - 200) + " surveys", (total / 10) + " surveys"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total = " + resp + " ÷ " + (pct / 100) + " = " + total + " surveys."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 115: Writing Percents as Fractions, Part 2
    115: (rng, qIndex) => {
        const framings = [
            // Category 0: Converting 33 1/3% or 66 2/3% to fraction (Lesson 115 #2)
            (r) => {
                const isThird = randInt(r, 0, 1) === 0;
                const pctStr = isThird ? "33 1/3%" : "66 2/3%";
                const ans = isThird ? "1/3" : "2/3";
                const q = "Convert the repeating percent " + pctStr + " to a fraction in simplest form.";
                const s = shuffle(r, [ans, isThird ? "33/100" : "66/100", isThird ? "1/4" : "3/4", isThird ? "3/10" : "7/10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pctStr + " = (" + (isThird ? "100/3" : "200/3") + ") / 100 = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 1: Converting 16 2/3% or 83 1/3% to fraction (Lesson 115 #2)
            (r) => {
                const isSixth = randInt(r, 0, 1) === 0;
                const pctStr = isSixth ? "16 2/3%" : "83 1/3%";
                const ans = isSixth ? "1/6" : "5/6";
                const q = "Express " + pctStr + " as a reduced fraction.";
                const s = shuffle(r, [ans, isSixth ? "1/3" : "2/3", isSixth ? "16/100" : "83/100", isSixth ? "1/8" : "7/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pctStr + " = (" + (isSixth ? "50/3" : "250/3") + ") / 100 = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 2: Converting 12 1/2%, 37 1/2%, 62 1/2%, or 87 1/2% to fraction (Lesson 115 #2)
            (r) => {
                const items = [
                    { pct: "12 1/2%", ans: "1/8", num: 25 },
                    { pct: "37 1/2%", ans: "3/8", num: 75 },
                    { pct: "62 1/2%", ans: "5/8", num: 125 },
                    { pct: "87 1/2%", ans: "7/8", num: 175 }
                ];
                const choice = items[randInt(r, 0, items.length - 1)];
                const q = "Write the mixed percent " + choice.pct + " as a fraction in simplest form.";
                const s = shuffle(r, [choice.ans, "1/4", "3/4", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [choice.pct + " = (" + choice.num + "/2) / 100 = " + choice.num + "/200 = " + choice.ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 3: Converting 14 2/7% to fraction (Lesson 115 #2)
            (r) => {
                const q = "What fraction in simplest form is equivalent to 14 2/7%?";
                const ans = "1/7";
                const s = shuffle(r, [ans, "2/7", "1/14", "14/100"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["14 2/7% = (100/7) / 100 = 100/700 = 1/7."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 4: Converting 8 1/3% to fraction (Lesson 115 #2)
            (r) => {
                const q = "Find the simplest fraction equal to 8 1/3%.";
                const ans = "1/12";
                const s = shuffle(r, [ans, "1/8", "1/6", "8/100"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 1/3% = (25/3) / 100 = 25/300 = 1/12."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 5: Test score questions missed vs percent correct (Lesson 115 #3)
            (r) => {
                const names = ["Ines", "Mateo", "Darius", "Chloe", "Andre"];
                const name = names[randInt(r, 0, names.length - 1)];
                const missed = [2, 3, 4, 5][randInt(r, 0, 3)];
                const pctCorrect = 90;
                const missedPct = 10;
                const total = missed * 10;
                const q = name + " missed " + missed + " questions on the test but answered " + pctCorrect + "% of the questions correctly. How many questions were on the test?";
                const s = shuffle(r, [total + " questions", (total + 10) + " questions", (total - 10) + " questions", (total + 20) + " questions"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Missed percentage = 100% − " + pctCorrect + "% = " + missedPct + "%. Total questions = " + missed + " ÷ 0." + missedPct + " = " + total + " questions."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 6: Speed of sound distance in air (Lesson 115 #4)
            (r) => {
                const speed = 331;
                const time = [30, 45, 60, 90][randInt(r, 0, 3)];
                const dist = speed * time;
                const q = "Sound travels about " + speed + " meters per second in air. How far will it travel in " + time + " seconds?";
                const s = shuffle(r, [dist.toLocaleString('en-US') + " m", (dist + 1000).toLocaleString('en-US') + " m", (dist - 1000).toLocaleString('en-US') + " m", (speed * 100).toLocaleString('en-US') + " m"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distance = speed × time = " + speed + " m/s × " + time + " s = " + dist.toLocaleString('en-US') + " meters."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 7: Expanded notation with powers of 10 (Lesson 115 #5)
            (r) => {
                const a = randInt(r, 4, 8);
                const b = randInt(r, 3, 9);
                const val = a * 10000 + b * 100;
                const q = "Write the standard number for: (" + a + " × 10⁴) + (" + b + " × 10²)";
                const s = shuffle(r, [val.toLocaleString('en-US'), (a * 1000 + b * 10).toLocaleString('en-US'), (a * 100000 + b * 100).toLocaleString('en-US'), (a * 10000 + b * 10).toLocaleString('en-US')]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " × 10,000) + (" + b + " × 100) = " + (a * 10000) + " + " + (b * 100) + " = " + val.toLocaleString('en-US') + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 8: Circle diameter from decimal radius (Lesson 115 #6)
            (r) => {
                const rVal = [0.45, 0.65, 0.75, 0.85, 1.25][randInt(r, 0, 4)];
                const diam = (rVal * 2).toFixed(2);
                const q = "If the radius of a circle is " + rVal + " meters, what is its diameter?";
                const s = shuffle(r, [parseFloat(diam) + " meters", (rVal * 4).toFixed(2) + " meters", (rVal / 2).toFixed(2) + " meters", (parseFloat(diam) + 0.5).toFixed(2) + " meters"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = 2 × radius = 2 × " + rVal + " = " + parseFloat(diam) + " meters."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 9: Estimating product of mixed numbers to nearest whole number (Lesson 115 #7)
            (r) => {
                const q = "Round the product of 3 2/3 and 2 2/5 to the nearest whole number.";
                const ans = "9";
                const s = shuffle(r, [ans, "8", "10", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["11/3 × 12/5 = 132/15 = 44/5 = 8.8. Rounded to the nearest whole number is 9."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 10: Probability of two red marbles without replacement (Lesson 115 #8)
            (r) => {
                const red = 3;
                const white = 3;
                const q = "In a bag are " + red + " red marbles and " + white + " white marbles. If two marbles are taken from the bag at the same time, what is the probability that both marbles will be red?";
                const ans = "1/5";
                const s = shuffle(r, [ans, "1/4", "1/2", "3/10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P(first red) = 3/6 = 1/2. P(second red) = 2/5. P(both red) = 1/2 × 2/5 = 2/10 = 1/5."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 11: Two-step linear equation: 7x − 3 = 39 (Lesson 115 #11)
            (r) => {
                const a = randInt(r, 5, 9);
                const x = randInt(r, 5, 12);
                const b = randInt(r, 2, 7);
                const c = a * x - b;
                const q = "Solve for x: " + a + "x − " + b + " = " + c;
                const s = shuffle(r, ["" + x, "" + (x + 2), "" + (x - 2), "" + (x + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "x = " + c + " + " + b + " = " + (c + b) + "; x = " + (c + b) + " ÷ " + a + " = " + x + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 12: Proportion: x / a = b / c (Lesson 115 #12)
            (r) => {
                const a = 7, b = 35, c = 5;
                const xVal = (a * b) / c;
                const q = "Solve the proportion: x/" + a + " = " + b + "/" + c;
                const s = shuffle(r, ["" + xVal, "" + (xVal + 7), "" + (xVal - 7), "" + (xVal * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [c + "x = " + a + " × " + b + " = " + (a * b) + "; x = " + (a * b) + " ÷ " + c + " = " + xVal + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 13: Signed integer multiplication: (−a)(−b) (Lesson 115 #13)
            (r) => {
                const a = randInt(r, 3, 6);
                const b = randInt(r, 12, 18);
                const ans = a * b;
                const q = "Simplify: (−" + a + ")(−" + b + ")";
                const s = shuffle(r, ["" + ans, "" + (-ans), "" + (ans + 6), "" + (ans - 6)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(−" + a + ") × (−" + b + ") = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 14: Four-term signed integer arithmetic (Lesson 115 #14)
            (r) => {
                const q = "Simplify: −6 + −7 + +5 − −8";
                const ans = "0";
                const s = shuffle(r, [ans, "16", "−16", "−4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["−6 + (−7) = −13; −13 + 5 = −8; −8 − (−8) = −8 + 8 = 0."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 15: Decimal order of operations with parentheses (Lesson 115 #15)
            (r) => {
                const q = "Simplify: 0.12 ÷ (12 ÷ 0.4)";
                const ans = "0.004";
                const s = shuffle(r, [ans, "0.04", "0.4", "0.001"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Inside parentheses: 12 ÷ 0.4 = 30. Then 0.12 ÷ 30 = 0.004."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 16: Fraction 22/7 as rounded decimal (Lesson 115 #16)
            (r) => {
                const q = "Write 22/7 as a decimal rounded to the hundredths place.";
                const ans = "3.14";
                const s = shuffle(r, [ans, "3.15", "3.12", "3.24"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["22 ÷ 7 ≈ 3.142857..., which rounds to 3.14."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 17: Square root of power of 10 (10,000 or 1,000,000) (Lesson 115 #17)
            (r) => {
                const isTenK = randInt(r, 0, 1) === 0;
                const N = isTenK ? 10000 : 1000000;
                const ans = isTenK ? "100" : "1,000";
                const q = "What whole number multiplied by itself equals " + N.toLocaleString('en-US') + "?";
                const s = shuffle(r, [ans, isTenK ? "1,000" : "100", isTenK ? "10" : "10,000", isTenK ? "50" : "500"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["√" + N.toLocaleString('en-US') + " = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 18: Container capacity rate: N containers hold X oz (Lesson 115 #22)
            (r) => {
                const c1 = 7;
                const oz1 = 84;
                const unit = oz1 / c1; // 12
                const c2 = 10;
                const ans = c2 * unit;
                const q = "If seven identical containers can hold a total of 84 ounces, how many ounces can 10 containers hold?";
                const s = shuffle(r, [ans + " ounces", (ans + 12) + " ounces", (ans - 12) + " ounces", (ans + 24) + " ounces"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Capacity per container = 84 ÷ 7 = 12 oz. 10 containers hold 10 × 12 = " + ans + " ounces."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 19: Infant weight gain in pounds and ounces mixed measures (Lesson 115 #26)
            (r) => {
                const names = ["Rosita", "Maya", "Elena", "Chloe", "Keisha"];
                const name = names[randInt(r, 0, names.length - 1)];
                const w1_lb = 7, w1_oz = 9;
                const w2_lb = 9, w2_oz = 7;
                const ans = "1 pound 14 ounces";
                const q = "When " + name + " was born, she weighed " + w1_lb + " pounds " + w1_oz + " ounces. Two months later she weighed " + w2_lb + " pounds " + w2_oz + " ounces. How much weight did she gain in two months?";
                const s = shuffle(r, [ans, "2 pounds 2 ounces", "1 pound 12 ounces", "2 pounds 14 ounces"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Regroup 1 lb as 16 oz: 9 lb 7 oz = 8 lb 23 oz. Subtract: (8 lb 23 oz) − (7 lb 9 oz) = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 116: Compound Interest
    116: (rng, qIndex) => {
        const framings = [
            // Category 0: Compound interest after 2 or 3 years (Lesson 116 Practice Set a, b)
            (r) => {
                const names = ["Mrs. Vasquez", "Mr. Alvarez", "Dr. Chen", "Ms. Rodriguez"];
                const name = names[randInt(r, 0, names.length - 1)];
                const p = 2000;
                const rPct = 10;
                const years = [2, 3][randInt(r, 0, 1)];
                const amt = years === 2 ? 2420 : 2662;
                const ans = formatCurrency(amt);
                const q = name + " deposited $" + p + " in an account that pays " + rPct + "% interest compounded annually. If no withdrawals are made, how much money will be in the account after " + years + " years?";
                const s = shuffle(r, [ans, formatCurrency(p + (p * rPct / 100) * years), formatCurrency(amt + 100), formatCurrency(amt - 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["After 1 yr: $" + (p * 1.1).toFixed(2) + ". After 2 yr: $" + (p * 1.21).toFixed(2) + (years === 3 ? ". After 3 yr: $" + (p * 1.331).toFixed(2) : "") + ". Total = " + ans + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 1: Area of right triangle from 3 side lengths (Lesson 116 #1)
            (r) => {
                const triples = [
                    [6, 8, 10],
                    [5, 12, 13],
                    [9, 12, 15]
                ];
                const [a, b, c] = triples[randInt(r, 0, triples.length - 1)];
                const area = (a * b) / 2;
                const q = "A right triangle has side lengths of " + a + " inches, " + b + " inches, and " + c + " inches. What is the area of the triangle?";
                const s = shuffle(r, [area + " sq in.", (a * b) + " sq in.", (area + 6) + " sq in.", (area - 6) + " sq in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The legs are the two shorter sides, " + a + " in. and " + b + " in. Area = 1/2 × base × height = 1/2 × " + a + " × " + b + " = " + area + " sq in."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 2: Proportional cost of ribbon by length (Lesson 116 #2)
            (r) => {
                const l1 = 5;
                const cost1 = "1.20";
                const l2 = 10;
                const cost2 = "2.40";
                const q = "If " + l1 + " feet of ribbon costs $" + cost1 + ", how much would " + l2 + " feet of ribbon cost?";
                const s = shuffle(r, ["$" + cost2, "$3.00", "$2.20", "$2.60"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [l2 + " feet is twice as long as " + l1 + " feet, so the cost is 2 × $" + cost1 + " = $" + cost2 + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 3: A is what percent of B? (Lesson 116 #3)
            (r) => {
                const a = 6, b = 15;
                const pct = (a / b) * 100;
                const q = a + " is what percent of " + b + "?";
                const s = shuffle(r, [pct + "%", (pct + 10) + "%", (pct - 10) + "%", (pct + 20) + "%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "/" + b + " = 2/5 = 40/100 = " + pct + "%."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 4: Multiple-choice guessing probability (Lesson 116 #4)
            (r) => {
                const q = "A multiple-choice question has four choices. If a student simply guesses at random, what is the probability of guessing the correct answer?";
                const ans = "1/4 (25%)";
                const s = shuffle(r, [ans, "1/2 (50%)", "1/3 (33%)", "1/5 (20%)"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["There is 1 correct choice out of 4 possible choices: 1/4 = 25%."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 5: Cafeteria lunch ratio: buy vs bring from home (Lesson 116 #5)
            (r) => {
                const total = 30;
                const buy = 25;
                const ans = "5 to 1";
                const q = "If 25 of the 30 students in the class buy lunch in the school cafeteria, what is the ratio of students who buy lunch in the school cafeteria to students who bring their lunch from home?";
                const s = shuffle(r, [ans, "1 to 5", "5 to 6", "6 to 5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Number bringing lunch = 30 − 25 = 5. Ratio of buy to bring = 25 to 5 = 5 to 1."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 6: Scientific notation to standard number: a.b × 10^9 (Lesson 116 #6)
            (r) => {
                const a = randInt(r, 1, 9);
                const b = randInt(r, 1, 9);
                const val = (a + b / 10) * 1000000000;
                const q = "Write " + a + "." + b + " × 10⁹ as a standard number.";
                const s = shuffle(r, [val.toLocaleString('en-US'), (val / 10).toLocaleString('en-US'), (val * 10).toLocaleString('en-US'), (val + 10000000).toLocaleString('en-US')]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply by 10⁹ by moving the decimal 9 places right: " + val.toLocaleString('en-US') + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 7: Formula evaluation: cost c = pw (Lesson 116 #7)
            (r) => {
                const p = 1.25;
                const w = 5.5;
                const c = (p * w).toFixed(2);
                const ans = "$" + c;
                const q = "The cost (c) of apples is related to price per pound (p) and weight (w) by c = pw. Find the cost when p is $1.25 per pound and w is 5 1/2 pounds. (Round to the nearest cent.)";
                const s = shuffle(r, [ans, "$6.50", "$7.25", "$6.75"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["c = $1.25 × 5.5 = $6.875, which rounds to $" + c + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 8: Ordering decimals from least to greatest (Lesson 116 #8)
            (r) => {
                const list = ["9.9", "9.95", "9.925", "9.09"];
                const sorted = "9.09, 9.9, 9.925, 9.95";
                const q = "Arrange these numbers in order from least to greatest: " + list.join(", ");
                const s = shuffle(r, [sorted, "9.95, 9.925, 9.9, 9.09", "9.09, 9.925, 9.9, 9.95", "9.09, 9.9, 9.95, 9.925"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Compare place values: 9.09 < 9.900 < 9.925 < 9.950. Ordered: " + sorted + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 9: Two-step linear equation: ax + b = c (Lesson 116 #11)
            (r) => {
                const a = 9;
                const x = 7;
                const b = 17;
                const c = a * x + b;
                const q = "Solve and check: " + a + "x + " + b + " = " + c;
                const s = shuffle(r, ["" + x, "" + (x + 2), "" + (x - 2), "" + (x + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "x = " + c + " − " + b + " = " + (c - b) + "; x = " + (c - b) + " ÷ " + a + " = " + x + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 10: Proportion with decimal: x / a = b / c (Lesson 116 #12)
            (r) => {
                const a = 3, b = "1.6", c = "1.2";
                const ans = "4";
                const q = "Solve the proportion: x/" + a + " = " + b + "/" + c;
                const s = shuffle(r, [ans, "3.6", "4.8", "2.4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.2x = 3 × 1.6 = 4.8; x = 4.8 ÷ 1.2 = " + ans + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 11: Multi-term signed integer arithmetic (Lesson 116 #13)
            (r) => {
                const q = "Simplify: −6 + −4 − +3 − −8";
                const ans = "−5";
                const s = shuffle(r, [ans, "−21", "5", "−11"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["−6 + (−4) = −10; −10 − 3 = −13; −13 − (−8) = −13 + 8 = −5."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 12: Sum of mixed numbers and decimals as decimal (Lesson 116 #14)
            (r) => {
                const q = "Find the sum as a decimal: 6 3/4 + 3 1/2 + 4.6";
                const ans = "14.85";
                const s = shuffle(r, [ans, "14.65", "15.05", "13.85"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert fractions to decimals: 6.75 + 3.5 + 4.6 = 14.85."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 13: Height conversion: yards to feet using unit multiplier (Lesson 116 #15)
            (r) => {
                const yd = 210;
                const ft = yd * 3;
                const q = "The Gateway Arch in St. Louis is approximately " + yd + " yards tall. How tall is it in feet? (1 yd = 3 ft)";
                const s = shuffle(r, [ft + " feet", (ft + 30) + " feet", (ft - 30) + " feet", (yd * 2) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [yd + " yd × (3 ft / 1 yd) = " + ft + " feet."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 14: Prime factorization using exponents (Lesson 116 #16)
            (r) => {
                const N = 648;
                const ans = "2³ × 3⁴";
                const q = "Write the prime factorization of " + N + " using exponents.";
                const s = shuffle(r, [ans, "2⁴ × 3³", "2³ × 3³", "2² × 3⁵"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["648 ÷ 8 = 81 = 3⁴. So 648 = 2³ × 3⁴."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 15: Unit price: cost per ounce (Lesson 116 #17)
            (r) => {
                const oz = 32;
                const total = "3.84";
                const ans = "$0.12";
                const q = "If a " + oz + "-ounce box of cereal costs $" + total + ", what is the cost per ounce?";
                const s = shuffle(r, [ans + " per ounce", "$0.14 per ounce", "$0.10 per ounce", "$0.15 per ounce"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + total + " ÷ " + oz + " = " + ans + " per ounce."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 16: Area of trapezoid combining rectangle and triangle (Lesson 116 #18)
            (r) => {
                const rectW = 8;
                const h = 6;
                const triB = 4;
                const rectArea = rectW * h;
                const triArea = (triB * h) / 2;
                const totalArea = rectArea + triArea;
                const q = "Find the area of a trapezoid formed by combining a rectangle of base " + rectW + " m and height " + h + " m with a right triangle of base " + triB + " m and height " + h + " m.";
                const s = shuffle(r, [totalArea + " m²", rectArea + " m²", (totalArea + 6) + " m²", (totalArea - 6) + " m²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rectangle area = " + rectW + " × " + h + " = " + rectArea + " m². Triangle area = 1/2 × " + triB + " × " + h + " = " + triArea + " m². Total area = " + rectArea + " + " + triArea + " = " + totalArea + " m²."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 17: Circle area from radius (Lesson 116 #19)
            (r) => {
                const rVal = 10;
                const area = 314;
                const q = "The radius of a circle is " + rVal + " cm. Use 3.14 for π to calculate the area of the circle.";
                const s = shuffle(r, [area + " cm²", "62.8 cm²", "31.4 cm²", "628 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = π × r² = 3.14 × 10² = 3.14 × 100 = " + area + " cm²."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 18: Volume of pyramid as 1/3 volume of cube (Lesson 116 #20)
            (r) => {
                const sVal = 3;
                const cubeVol = sVal * sVal * sVal;
                const pyrVol = cubeVol / 3;
                const q = "The volume of a pyramid is 1/3 the volume of a cube with edge length " + sVal + " cm. What is the volume of the pyramid?";
                const s = shuffle(r, [pyrVol + " cm³", cubeVol + " cm³", (pyrVol * 2) + " cm³", (pyrVol + 3) + " cm³"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cube volume = " + sVal + "³ = " + cubeVol + " cm³. Pyramid volume = 1/3 × " + cubeVol + " = " + pyrVol + " cm³."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 19: Assigning students to rooms with two room sizes (Lesson 116 #23)
            (r) => {
                const totalStudents = 306;
                const totalRooms = 10;
                const q = totalStudents + " students were assigned to " + totalRooms + " rooms so that there were 30 or 31 students in each room. How many rooms had exactly 30 students?";
                const ans = "4 rooms";
                const s = shuffle(r, [ans, "6 rooms", "5 rooms", "3 rooms"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If all 10 rooms had 31 students, there would be 310 students. Since there are 306 students, 310 − 306 = 4 rooms had 30 students."], lessonNum: 116, lessonTitle: "Compound Interest" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 117: Finding a Whole When a Fraction is Known
    117: (rng, qIndex) => {
        const framings = [
            // Category 0: A is 2/5 (or F) of what number? (Lesson 117 #12)
            (r) => {
                const k = randInt(r, 3, 9);
                const part = 2 * k;
                const whole = 5 * k;
                const q = part + " is 2/5 of what number?";
                const s = shuffle(r, ["" + whole, "" + (whole + 5), "" + (whole - 5), "" + (whole + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [part + " ÷ (2/5) = " + part + " × (5/2) = " + whole + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 1: A is 3/4 of what number? (Lesson 117 #12 variant)
            (r) => {
                const k = randInt(r, 4, 10);
                const part = 3 * k;
                const whole = 4 * k;
                const q = "If " + part + " is 3/4 of a certain number, what is that number?";
                const s = shuffle(r, ["" + whole, "" + (whole + 4), "" + (whole - 4), "" + (whole + 8)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [part + " ÷ (3/4) = " + part + " × (4/3) = " + whole + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 2: Distributing items around a circle with remainder (Lesson 117 #1)
            (r) => {
                const names = ["Tabari", "Marcus", "Darius", "Andre", "Jamal"];
                const name = names[randInt(r, 0, names.length - 1)];
                const students = 7;
                const cards = 52;
                const q = name + " is giving out baseball cards to " + students + " students sitting in a circle. If he distributes " + cards + " cards one at a time around the circle, how many students will get 8 cards?";
                const ans = "3";
                const s = shuffle(r, [ans, "4", "2", "5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [cards + " ÷ " + students + " = 7 with a remainder of 3. The first 3 students receive an 8th card."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 3: Separating children into 4 balanced groups (Lesson 117 #2)
            (r) => {
                const total = 130;
                const ans = "33, 33, 32, 32";
                const q = "If " + total + " children are separated as equally as possible into four groups, how many will be in each group?";
                const s = shuffle(r, [ans, "34, 32, 32, 32", "33, 33, 33, 31", "34, 34, 31, 31"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [total + " ÷ 4 = 32 R 2. Two groups have 33 and two groups have 32: " + ans + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 4: Parking lot fee for elapsed time (Lesson 117 #3)
            (r) => {
                const halfHours = 7;
                const rateCents = 125;
                const totalCents = halfHours * rateCents;
                const ans = formatCurrency(totalCents / 100);
                const q = "If a parking lot charges $1.25 per half hour, what is the cost of parking a car from 11:15 a.m. to 2:45 p.m.?";
                const s = shuffle(r, [ans, "$7.50", "$10.00", "$8.25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Elapsed time is 3 hours 30 minutes, which is 7 half hours. 7 × $1.25 = " + ans + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 5: Circle inscribed in square of known area (Lesson 117 #4)
            (r) => {
                const side = 20;
                const sqArea = side * side;
                const rVal = side / 2;
                const circArea = (3.14 * rVal * rVal).toFixed(0);
                const q = "If the area of a square is " + sqArea + " m², what is the area of the circle inscribed inside it? (Use 3.14 for π.)";
                const s = shuffle(r, [circArea + " m²", "200 m²", "350 m²", "256 m²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side of square = √400 = 20 m. Circle diameter = 20 m, radius = 10 m. Circle area = 3.14 × 10² = " + circArea + " m²."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 6: Percent of states starting with other letters (Lesson 117 #5)
            (r) => {
                const countA = 4;
                const totalStates = 50;
                const pctOther = ((totalStates - countA) / totalStates) * 100;
                const q = "Only " + countA + " of the 50 states have names that begin with the letter A. What percent of the states have names that begin with letters other than A?";
                const s = shuffle(r, [pctOther + "%", (100 - pctOther) + "%", (pctOther - 4) + "%", "90%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [totalStates + " − " + countA + " = 46 states. 46/50 = 92/100 = " + pctOther + "%."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 7: Area of coordinate triangle with base on axis (Lesson 117 #6)
            (r) => {
                const b = 5, h = 6;
                const area = (b * h) / 2;
                const q = "The coordinates of the vertices of a triangle are (0, 0), (" + b + ", 0), and (3, " + h + "). What is the area of the triangle?";
                const s = shuffle(r, [area + " sq units", (b * h) + " sq units", (area + 3) + " sq units", (area - 3) + " sq units"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The base lies on the x-axis from (0,0) to (" + b + ",0) with length " + b + ". The height is the y-coordinate " + h + ". Area = 1/2 × " + b + " × " + h + " = " + area + " sq units."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 8: Writing decimal number from verbal description (Lesson 117 #7)
            (r) => {
                const q = "Write 'one hundred five thousandths' as a decimal number.";
                const ans = "0.105";
                const s = shuffle(r, [ans, "105.000", "0.0105", "1.05"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Thousandths means three decimal places: 105 thousandths = " + ans + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 9: Money division rounded to nearest cent (Lesson 117 #8)
            (r) => {
                const dollars = 7;
                const div = 9;
                const cents = Math.round((dollars / div) * 100);
                const ans = formatCurrency(cents / 100);
                const q = "Round the quotient of $" + dollars + ".00 ÷ " + div + " to the nearest cent.";
                const s = shuffle(r, [ans, "$0.77", "$0.80", "$0.75"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$7.00 ÷ 9 ≈ $0.7777..., which rounds to " + ans + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 10: Ordering fractions, decimals, and percents (Lesson 117 #9)
            (r) => {
                const sorted = "4/5, 81%, 0.815, 7/8";
                const q = "Arrange in order from least to greatest: 81%, 4/5, 7/8, 0.815";
                const s = shuffle(r, [sorted, "81%, 4/5, 0.815, 7/8", "4/5, 0.815, 81%, 7/8", "7/8, 0.815, 81%, 4/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to decimals: 4/5 = 0.800; 81% = 0.810; 0.815 = 0.815; 7/8 = 0.875. Order: " + sorted + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 11: Two-step linear equation: ax − b = c (Lesson 117 #10)
            (r) => {
                const a = 6, x = 12, b = 12;
                const c = a * x - b;
                const q = "Solve and check: " + a + "x − " + b + " = " + c;
                const s = shuffle(r, ["" + x, "" + (x + 2), "" + (x - 2), "" + (x + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "x = " + c + " + " + b + " = " + (c + b) + "; x = " + (c + b) + " ÷ " + a + " = " + x + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 12: Proportion: a / b = m / c (Lesson 117 #11)
            (r) => {
                const a = 9, b = 15, c = 25;
                const mVal = 15;
                const q = "Solve the proportion: " + a + "/" + b + " = m/" + c;
                const s = shuffle(r, ["" + mVal, "18", "12", "20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [b + "m = " + a + " × " + c + " = " + (a * c) + "; m = " + (a * c) + " ÷ " + b + " = " + mVal + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 13: Mixed number subtraction with parentheses (Lesson 117 #13)
            (r) => {
                const q = "Simplify: (5 1/2 − 1 2/3) − 1 1/6";
                const ans = "2 2/3";
                const s = shuffle(r, [ans, "2 1/3", "3 1/3", "2 5/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Inside parentheses: 5 3/6 − 1 4/6 = 4 9/6 − 1 4/6 = 3 5/6. Then 3 5/6 − 1 1/6 = 2 4/6 = 2 2/3."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 14: Dividing mixed numbers (Lesson 117 #14)
            (r) => {
                const q = "Simplify: 2 1/2 ÷ 1 2/3";
                const ans = "1 1/2";
                const s = shuffle(r, [ans, "2 1/6", "1 1/3", "1 2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/2 ÷ 5/3 = 5/2 × 3/5 = 3/2 = 1 1/2."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 15: Multiplying decimals (Lesson 117 #15)
            (r) => {
                const q = "Multiply: 0.625 × 2.4";
                const ans = "1.5";
                const s = shuffle(r, [ans, "1.45", "0.15", "15"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.625 = 5/8; 2.4 = 12/5; 5/8 × 12/5 = 12/8 = 1.5."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 16: Prime factorization using exponents (Lesson 117 #17)
            (r) => {
                const N = 36;
                const ans = "2² × 3²";
                const q = "Write the prime factorization of " + N + " using exponents.";
                const s = shuffle(r, [ans, "2³ × 3", "2 × 3³", "4 × 9"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["36 = 4 × 9 = 2² × 3²."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 17: Total price including sales tax (Lesson 117 #18)
            (r) => {
                const price = "12.50";
                const taxPct = 6;
                const total = "13.25";
                const q = "What is the total price of a $" + price + " item plus " + taxPct + "% sales tax?";
                const s = shuffle(r, ["$" + total, "$13.50", "$13.10", "$12.75"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = 0.06 × $12.50 = $0.75. Total = $12.50 + $0.75 = $" + total + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 18: Area of pentagon split into rectangle and triangle (Lesson 117 #19)
            (r) => {
                const base = 12;
                const rectH = 5;
                const totalH = 8;
                const triH = totalH - rectH;
                const rectArea = base * rectH;
                const triArea = (base * triH) / 2;
                const totalArea = rectArea + triArea;
                const q = "A symmetrical pentagon has a horizontal bottom base of " + base + " in., vertical sides of " + rectH + " in., and a total height to its top peak of " + totalH + " in. What is the area of this pentagon?";
                const s = shuffle(r, [totalArea + " sq in.", (base * totalH) + " sq in.", (totalArea + 6) + " sq in.", (totalArea - 6) + " sq in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rectangle area = " + base + " × " + rectH + " = " + rectArea + " sq in. Triangle area = 1/2 × " + base + " × " + triH + " = " + triArea + " sq in. Total area = " + rectArea + " + " + triArea + " = " + totalArea + " sq in."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 19: Ratio with total: cattle and horses (Lesson 117 #28)
            (r) => {
                const r1 = 15, r2 = 2;
                const sumParts = r1 + r2;
                const mult = 60;
                const total = sumParts * mult;
                const horses = r2 * mult;
                const q = "The ratio of cattle to horses on a ranch was " + r1 + " to " + r2 + ". The combined number of cattle and horses was " + total + ". How many horses were on the ranch?";
                const s = shuffle(r, [horses + " horses", (r1 * mult) + " horses", (horses + 20) + " horses", (horses - 20) + " horses"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total parts = " + r1 + " + " + r2 + " = " + sumParts + ". Fraction of horses = " + r2 + "/" + sumParts + ". " + r2 + "/" + sumParts + " × " + total + " = " + horses + " horses."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 118: Estimating Area
    118: (rng, qIndex) => {
        const framings = [
            // Category 0: Estimating area of irregular shape on 1-cm grid (Lesson 118 Practice Set)
            (r) => {
                const wholeSq = randInt(r, 12, 16);
                const partialSq = randInt(r, 10, 14);
                const halfCount = partialSq % 2 === 0 ? partialSq : partialSq + 1;
                const estArea = wholeSq + halfCount / 2;
                const q = "An irregular shape is drawn on a 1-cm grid. It covers approximately " + wholeSq + " whole squares and " + halfCount + " half-squares. What is the best estimate of the area of the shape?";
                const s = shuffle(r, [estArea + " cm²", (estArea + 4) + " cm²", (estArea - 4) + " cm²", (wholeSq + halfCount) + " cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Estimated area = whole squares + (half-squares ÷ 2) = " + wholeSq + " + (" + halfCount + " ÷ 2) = " + estArea + " cm²."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 1: Population fraction word problem: X million was F of total (Lesson 118 #3)
            (r) => {
                const youth = 6;
                const total = 20;
                const q = "About " + youth + " million people under the age of 18 lived in a state in a census year. This number was about 3/10 of the total population of the state at that time. About how many people lived in the state in all?";
                const s = shuffle(r, [total + " million", "18 million", "24 million", "30 million"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [youth + " ÷ (3/10) = " + youth + " × (10/3) = " + total + " million."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 2: Cookie package remaining fraction word problem (Lesson 118 #9)
            (r) => {
                const left = 9;
                const orig = 30;
                const q = left + " cookies were left in the package. That was 3/10 of the original number of cookies. How many cookies were in the package originally?";
                const s = shuffle(r, [orig + " cookies", "27 cookies", "33 cookies", "40 cookies"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [left + " ÷ (3/10) = " + left + " × (10/3) = " + orig + " cookies."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 3: A is 3/10 of what number? (Lesson 118 #11)
            (r) => {
                const part = 12;
                const whole = 40;
                const q = part + " is 3/10 of what number?";
                const s = shuffle(r, ["" + whole, "36", "48", "30"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [part + " ÷ (3/10) = " + part + " × (10/3) = " + whole + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 4: Tree diameter from circumference (Lesson 118 #10)
            (r) => {
                const names = ["Buz", "Carlos", "Darius", "Keisha", "Mateo"];
                const name = names[randInt(r, 0, names.length - 1)];
                const circ = "62.8";
                const diam = "20";
                const q = name + " measured the circumference of the trunk of an old oak tree as " + circ + " inches. Using 3.14 for π, what is the approximate diameter of the tree?";
                const s = shuffle(r, [diam + " inches", "10 inches", "31.4 inches", "25 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = circumference ÷ π = 62.8 ÷ 3.14 = " + diam + " inches."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 5: Vehicle ratio: trucks to cars (Lesson 118 #6)
            (r) => {
                const names = ["Elsa", "Maya", "Elena", "Chloe", "Priya"];
                const name = names[randInt(r, 0, names.length - 1)];
                const trucks = 48;
                const cars = 84;
                const ans = "4 to 7";
                const q = "As " + name + " peered out her window, she saw " + trucks + " trucks and " + cars + " cars go by. What was the simplified ratio of trucks to cars?";
                const s = shuffle(r, [ans, "7 to 4", "2 to 3", "4 to 9"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio = 48/84 = (48 ÷ 12) / (84 ÷ 12) = 4/7, which is " + ans + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 6: Mean of four whole numbers (Lesson 118 #7)
            (r) => {
                const nums = [17, 24, 27, 28];
                const sum = 96;
                const mean = 24;
                const q = "What is the mean of " + nums.join(", ") + "?";
                const s = shuffle(r, ["" + mean, "25", "23", "26"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the numbers: 17 + 24 + 27 + 28 = " + sum + ". Divide by 4: " + sum + " ÷ 4 = " + mean + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 7: Total price with sales tax (Lesson 118 #5)
            (r) => {
                const price = "14.49";
                const taxRate = 7;
                const total = "15.50";
                const q = "What is the total price, including " + taxRate + "% tax, of a $" + price + " item?";
                const s = shuffle(r, ["$" + total, "$15.40", "$15.65", "$15.00"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = 0.07 × $14.49 ≈ $1.01. Total = $14.49 + $1.01 = $" + total + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 8: Converting pounds to ounces using unit multiplier (Lesson 118 #17)
            (r) => {
                const lbs = "2.2";
                const ans = "35 ounces";
                const q = "On Earth a kilogram is about 2.2 pounds. Use a unit multiplier to convert 2.2 pounds to ounces. (Round to the nearest ounce; 1 lb = 16 oz)";
                const s = shuffle(r, [ans, "32 ounces", "36 ounces", "34 ounces"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2.2 lb × (16 oz / 1 lb) = 35.2 oz, which rounds to " + ans + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 9: Decimal expression with square: 1 − (0.1)² (Lesson 118 #15)
            (r) => {
                const q = "Simplify: 1 − (0.1)²";
                const ans = "0.99";
                const s = shuffle(r, [ans, "0.9", "0.81", "0.999"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(0.1)² = 0.01. 1 − 0.01 = " + ans + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 10: Mixed number plus decimal as decimal (Lesson 118 #14)
            (r) => {
                const q = "Simplify and write as a decimal: 4 1/2 + 3.2";
                const ans = "7.7";
                const s = shuffle(r, [ans, "7.2", "8.2", "7.5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 1/2 = 4.5. 4.5 + 3.2 = " + ans + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 11: Dividing mixed numbers (Lesson 118 #13)
            (r) => {
                const q = "Simplify: 6 2/3 ÷ 4 1/6";
                const ans = "1 3/5";
                const s = shuffle(r, [ans, "1 2/5", "1 1/2", "2 1/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["20/3 ÷ 25/6 = 20/3 × 6/25 = 8/5 = 1 3/5."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 12: Adding mixed numbers with unlike denominators (Lesson 118 #12)
            (r) => {
                const q = "Simplify: 2 1/3 + 2 1/2";
                const ans = "4 5/6";
                const s = shuffle(r, [ans, "4 2/5", "5 1/6", "4 1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 2/6 + 2 3/6 = 4 5/6."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 13: Area of parallelogram given base and height (Lesson 118 #18a)
            (r) => {
                const b = 6;
                const h = 4;
                const slant = 5;
                const area = b * h;
                const q = "A parallelogram has a base of " + b + " cm, a slant side of " + slant + " cm, and a perpendicular height of " + h + " cm. What is the area of the parallelogram?";
                const s = shuffle(r, [area + " cm²", (b * slant) + " cm²", (area / 2) + " cm²", (2 * (b + slant)) + " cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = base × height = " + b + " × " + h + " = " + area + " cm²."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 14: Acute angle of parallelogram from obtuse angle (Lesson 118 #18b)
            (r) => {
                const obtuse = 127;
                const acute = 180 - obtuse;
                const q = "If each obtuse angle of a parallelogram measures " + obtuse + "°, what is the measure of each acute angle?";
                const s = shuffle(r, [acute + "°", (acute + 10) + "°", (acute - 10) + "°", (90 - acute) + "°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Adjacent angles in a parallelogram are supplementary: 180° − " + obtuse + "° = " + acute + "°."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 15: Perimeter of polygon with decimal side lengths (Lesson 118 #19)
            (r) => {
                const perim = "10.2";
                const q = "Find the perimeter of a polygon whose consecutive sides measure 4 cm, 3 cm, 1.8 cm, and 1.4 cm.";
                const s = shuffle(r, [perim + " cm", "9.2 cm", "11.2 cm", "10.8 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 4 + 3 + 1.8 + 1.4 = " + perim + " cm."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 16: Lines of symmetry of geometric figure (Lesson 118 #20)
            (r) => {
                const q = "How many lines of symmetry does a square have in total?";
                const ans = "4";
                const s = shuffle(r, [ans, "2", "8", "1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A square has 4 lines of symmetry: 2 through opposite sides and 2 through opposite vertices."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 17: Estimating cube volume from edge length (Lesson 118 #21)
            (r) => {
                const edge = "4.11";
                const estEdge = 4;
                const estVol = estEdge * estEdge * estEdge;
                const q = "Each edge of a cube measures " + edge + " feet. What is a good estimate of the cube's volume?";
                const s = shuffle(r, [estVol + " cu ft", "16 cu ft", "125 cu ft", "48 cu ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Round " + edge + " ft to 4 ft. Volume ≈ 4³ = " + estVol + " cu ft."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 18: Card distribution around a circle with remainder (Lesson 118 #1)
            (r) => {
                const q = "If 52 items are distributed one by one in order among 7 people sitting in a circle, how many items are left over after everyone has received 7 items?";
                const ans = "3";
                const s = shuffle(r, [ans, "4", "2", "5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["52 = 7 × 7 + 3, so there are 3 items left over."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 19: Verifying inequality / equality statement (Lesson 118 #4)
            (r) => {
                const q = "The symbol ≠ means 'is not equal to.' Which statement is true?";
                const correct = "3/4 ≠ 9/16";
                const s = shuffle(r, [correct, "3/4 ≠ 9/12", "3/4 ≠ 0.75", "1/2 ≠ 2/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 = 12/16, which is not equal to 9/16. Thus '3/4 ≠ 9/16' is true."], lessonNum: 118, lessonTitle: "Estimating Area" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 119: Finding a Whole When a Percent is Known
    119: (rng, qIndex) => {
        const framings = [
            // Category 0: P percent of what number is N? (Lesson 119 Practice Set a-c, #10)
            (r) => {
                const pct = [20, 25, 40, 50][randInt(r, 0, 3)];
                const whole = randInt(r, 8, 30) * 5;
                const part = Math.round(whole * (pct / 100));
                const q = pct + " percent of what number is " + part + "?";
                const s = shuffle(r, ["" + whole, "" + (whole + 10), "" + (whole - 10), "" + (whole + 20)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% × n = " + part + "; n = " + part + " ÷ " + (pct / 100) + " = " + whole + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 1: N is P percent of what number? (Lesson 119 Practice Set d, #3)
            (r) => {
                const pct = [10, 15, 20, 25][randInt(r, 0, 3)];
                const whole = randInt(r, 10, 30) * 10;
                const part = Math.round(whole * (pct / 100));
                const q = part + " is " + pct + "% of what number?";
                const s = shuffle(r, ["" + whole, "" + (whole + 20), "" + (whole - 20), "" + (whole * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = " + part + " ÷ " + (pct / 100) + " = " + whole + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 2: Band members percentage word problem (Lesson 119 #3)
            (r) => {
                const names = ["Cantara", "Marcus", "Keisha", "Andre", "Elena"];
                const name = names[randInt(r, 0, names.length - 1)];
                const trumpets = randInt(r, 5, 9);
                const pct = 10;
                const band = trumpets * 10;
                const q = name + " said that the " + trumpets + " trumpet players made up " + pct + "% of the band. How many members did the band have in all?";
                const s = shuffle(r, [band + " members", (band + 10) + " members", (band - 10) + " members", (trumpets * 5) + " members"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total band members = " + trumpets + " ÷ 0.10 = " + band + " members."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 3: A is 2/3 of what number? (Lesson 119 #4)
            (r) => {
                const k = randInt(r, 4, 12);
                const part = 2 * k;
                const whole = 3 * k;
                const q = part + " is 2/3 of what number?";
                const s = shuffle(r, ["" + whole, "" + (whole + 3), "" + (whole - 3), "" + (whole + 6)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [part + " ÷ (2/3) = " + part + " × (3/2) = " + whole + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 4: Scale drawing length conversion (Lesson 119 #6)
            (r) => {
                const names = ["Rob", "Mateo", "Carlos", "Darius", "Chloe"];
                const name = names[randInt(r, 0, names.length - 1)];
                const scaleFt = 8;
                const inLength = "2 1/2";
                const actualFt = 2.5 * scaleFt;
                const q = "On " + name + "'s scale drawing, each inch represents " + scaleFt + " feet. One of the rooms in his drawing is " + inLength + " inches long. How long is the actual room?";
                const s = shuffle(r, [actualFt + " feet", (actualFt + 4) + " feet", (actualFt - 4) + " feet", (actualFt + 8) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 × " + scaleFt + " = 2.5 × " + scaleFt + " = " + actualFt + " feet."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 5: Sum of highest scores after dropping lowest (Lesson 119 #2)
            (r) => {
                const q = "Six gymnasts scored 9.75, 9.8, 9.9, 9.4, 9.9, and 9.95. The lowest score was not counted. What was the sum of the five highest scores?";
                const ans = "49.3";
                const s = shuffle(r, [ans, "49.5", "48.8", "58.7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Drop the lowest score 9.4. Sum the remaining five scores: 9.75 + 9.8 + 9.9 + 9.9 + 9.95 = " + ans + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 6: Standard number from powers of 10 (Lesson 119 #5)
            (r) => {
                const a = 1, b = 8, c = 6;
                const val = a * 100000 + b * 10000 + c * 1000;
                const q = "Write the standard number for: (" + a + " × 10⁵) + (" + b + " × 10⁴) + (" + c + " × 10³)";
                const s = shuffle(r, [val.toLocaleString('en-US'), "1,860,000", "18,600", "1,086,000"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "00,000 + " + b + "0,000 + " + c + ",000 = " + val.toLocaleString('en-US') + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 7: Third angle in right isosceles triangle (Lesson 119 #7)
            (r) => {
                const ang = 45;
                const third = 180 - 2 * ang;
                const q = "Two angles of a triangle each measure " + ang + "°. What is the measure of the third angle?";
                const s = shuffle(r, [third + "°", "80°", "100°", "45°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Third angle = 180° − (" + ang + "° + " + ang + "°) = 180° − 90° = " + third + "°."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 8: Convert mixed percent 8 1/3% to fraction (Lesson 119 #8)
            (r) => {
                const q = "Convert 8 1/3% to a fraction in simplest form.";
                const ans = "1/12";
                const s = shuffle(r, [ans, "1/8", "1/6", "1/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 1/3% = (25/3) / 100 = 25/300 = 1/12."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 9: A dollars is what percent of B dollars? (Lesson 119 #9)
            (r) => {
                const a = 9, b = 12;
                const pct = (a / b) * 100;
                const q = "Nine dollars is what percent of $12?";
                const s = shuffle(r, [pct + "%", "60%", "80%", "70%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["9/12 = 3/4 = 75/100 = " + pct + "%."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 10: Reducing large fraction to simplest form (Lesson 119 #14)
            (r) => {
                const n = 60, d = 84;
                const ans = "5/7";
                const q = "Reduce the fraction " + n + "/" + d + " to simplest form.";
                const s = shuffle(r, [ans, "6/7", "5/8", "3/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide numerator and denominator by 12: (60 ÷ 12) / (84 ÷ 12) = " + ans + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 11: Subtracting mixed numbers with regrouping (Lesson 119 #15)
            (r) => {
                const q = "Simplify: 2 1/2 − 1 2/3";
                const ans = "5/6";
                const s = shuffle(r, [ans, "1/6", "1 1/6", "2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 3/6 − 1 4/6 = 1 9/6 − 1 4/6 = 5/6."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 12: Two-event race ratio and total distance (Lesson 119 #16)
            (r) => {
                const names = ["Marcus", "Lucas", "Jordan", "Darius", "Andre"];
                const name = names[randInt(r, 0, names.length - 1)];
                const runDist = 10;
                const totalDist = 35;
                const q = name + " competes in a two-event race made up of biking and running. The ratio of the distance run to the bike ride is 2 to 5. If the distance run was " + runDist + " kilometers, what was the total length of the two-event race?";
                const s = shuffle(r, [totalDist + " km", "25 km", "30 km", "40 km"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Bike distance = (" + runDist + " ÷ 2) × 5 = 25 km. Total race length = " + runDist + " + 25 = " + totalDist + " km."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 13: Area of parallelogram from shaded triangle (Lesson 119 #17)
            (r) => {
                const triArea = "2.8";
                const pArea = "5.6";
                const q = "A diagonal divides a parallelogram into two congruent triangles. If the area of one triangle is " + triArea + " cm², what is the area of the parallelogram?";
                const s = shuffle(r, [pArea + " cm²", "4.2 cm²", "6.4 cm²", "8.4 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The parallelogram consists of two congruent triangles: 2 × " + triArea + " = " + pArea + " cm²."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 14: Volume of rectangular prism / box (Lesson 119 #18)
            (r) => {
                const l = 10, w = 3, d = 4;
                const vol = l * w * d;
                const q = "A figurine was packed in a box that was " + l + " in. long, " + w + " in. wide, and " + d + " in. deep. What was the volume of the box?";
                const s = shuffle(r, [vol + " cu in.", (vol + 20) + " cu in.", (vol - 20) + " cu in.", (l * w + d) + " cu in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = l × w × d = " + l + " × " + w + " × " + d + " = " + vol + " cu in."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 15: Lines of symmetry of non-square rectangle (Lesson 119 #19)
            (r) => {
                const q = "A rectangle that is not a square has a total of how many lines of symmetry?";
                const ans = "2";
                const s = shuffle(r, [ans, "4", "1", "0"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A non-square rectangle has 2 lines of symmetry (the vertical and horizontal midlines)."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 16: Two-step linear equation: 3m − 5 = 25 (Lesson 119 #21)
            (r) => {
                const a = 3, m = 10, b = 5;
                const c = a * m - b;
                const q = "Solve for m: " + a + "m − " + b + " = " + c;
                const s = shuffle(r, ["" + m, "" + (m + 2), "" + (m - 2), "" + (m + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "m = " + c + " + " + b + " = " + (c + b) + "; m = " + (c + b) + " ÷ " + a + " = " + m + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 17: Function table rule y = kx and finding missing input (Lesson 119 #22)
            (r) => {
                const k = 4;
                const xVal = 8;
                const yVal = k * xVal;
                const q = "A function table pairs values according to the rule y = " + k + "x. If y = " + yVal + ", what is the missing value of x?";
                const s = shuffle(r, ["" + xVal, "6", "7", "9"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = y ÷ " + k + " = " + yVal + " ÷ " + k + " = " + xVal + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 18: Weight conversion: tons to pounds (Lesson 119 #23)
            (r) => {
                const tons = randInt(r, 6, 15);
                const lbs = tons * 2000;
                const q = "How many pounds is " + tons + " tons? (1 ton = 2000 pounds)";
                const s = shuffle(r, [lbs.toLocaleString('en-US') + " pounds", (lbs - 2000).toLocaleString('en-US') + " pounds", (lbs + 2000).toLocaleString('en-US') + " pounds", (tons * 1000).toLocaleString('en-US') + " pounds"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [tons + " tons × (2000 lb / 1 ton) = " + lbs.toLocaleString('en-US') + " pounds."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 19: Probability of independent coin flips: 3 heads in a row (Lesson 119 #28)
            (r) => {
                const names = ["James", "Mateo", "Carlos", "Darius", "Andre"];
                const name = names[randInt(r, 0, names.length - 1)];
                const q = name + " is going to flip a fair coin three times. What is the probability that the coin will land heads up all three times?";
                const ans = "1/8";
                const s = shuffle(r, [ans, "1/6", "1/4", "3/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each flip has P(heads) = 1/2. P(three heads) = 1/2 × 1/2 × 1/2 = 1/8."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 120: Volume of a Cylinder
    120: (rng, qIndex) => {
        const framings = [
            // Category 0: Volume of cylinder / soup can rounded to nearest hundred (Lesson 120 Practice Set)
            (r) => {
                const diam = 8;
                const h = 12;
                const ans = "600 cm³";
                const q = "A large can of soup has a diameter of about " + diam + " cm and a height of about " + h + " cm. The volume of the can is about how many cubic centimeters? (Round to the nearest hundred cubic centimeters.)";
                const s = shuffle(r, [ans, "500 cm³", "700 cm³", "800 cm³"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = " + diam + " ÷ 2 = 4 cm. Volume = π × r² × h ≈ 3.14 × 16 × 12 = 602.88 cm³, which rounds to " + ans + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 1: Capacity / volume of cylindrical mug (Lesson 120 #28)
            (r) => {
                const diam = 8;
                const h = 7;
                const ans = "352 cm³";
                const q = "The inside diameter of a cylindrical mug is " + diam + " cm and its height is " + h + " cm. Using 3.14 for π, what is the capacity of the mug in cubic centimeters? (Round to the nearest whole cubic centimeter.)";
                const s = shuffle(r, [ans, "350 cm³", "360 cm³", "176 cm³"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = 4 cm. Volume = π × r² × h = 3.14 × 16 × 7 = 351.68 cm³, which rounds to " + ans + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 2: Volume of cylinder formula with given radius and height (Lesson 120 Core Topic)
            (r) => {
                const rVal = randInt(r, 2, 4);
                const h = randInt(r, 5, 10);
                const vol = Math.round(3.14 * rVal * rVal * h);
                const q = "What is the volume of a cylinder with radius " + rVal + " cm and height " + h + " cm? (Use 3.14 for π and round to the nearest whole cubic centimeter.)";
                const s = shuffle(r, [vol + " cm³", (vol + 20) + " cm³", (vol - 20) + " cm³", Math.round(2 * 3.14 * rVal * h) + " cm³"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = π × r² × h = 3.14 × " + (rVal * rVal) + " × " + h + " = " + (3.14 * rVal * rVal * h).toFixed(2) + " ≈ " + vol + " cm³."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 3: Prime factorization of 3-digit number with exponents (Lesson 120 #1)
            (r) => {
                const N = 750;
                const ans = "2 × 3 × 5³";
                const q = "Write the prime factorization of " + N + " using exponents.";
                const s = shuffle(r, [ans, "2² × 3 × 5²", "2 × 3² × 5²", "2 × 5⁴"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["750 ÷ 2 = 375; 375 ÷ 3 = 125; 125 = 5³. So 750 = " + ans + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 4: Ratio parts problem: A parts is X grams, how much is B parts? (Lesson 120 #3)
            (r) => {
                const p1 = 3, g1 = 24;
                const p2 = 8;
                const ans = (g1 / p1) * p2;
                const q = "If " + p1 + " parts of a compound weigh " + g1 + " grams, how much do " + p2 + " parts weigh?";
                const s = shuffle(r, [ans + " grams", (ans + 8) + " grams", (ans - 8) + " grams", (ans + 16) + " grams"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Weight per part = " + g1 + " ÷ " + p1 + " = " + (g1 / p1) + " g. For " + p2 + " parts: " + p2 + " × " + (g1 / p1) + " = " + ans + " grams."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 5: Proportion: a / b = c / w (Lesson 120 #4)
            (r) => {
                const a = 3, b = 24, c = 8;
                const w = (b * c) / a;
                const q = "Complete the proportion: " + a + "/" + b + " = " + c + "/w";
                const s = shuffle(r, ["" + w, "" + (w + 8), "" + (w - 8), "" + (w + 16)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "w = " + b + " × " + c + " = " + (b * c) + "; w = " + (b * c) + " ÷ " + a + " = " + w + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 6: Standard number from powers of 10 (Lesson 120 #5)
            (r) => {
                const a = 7, b = 4;
                const val = a * 1000 + b * 1;
                const q = "Write the standard number for: (" + a + " × 10³) + (" + b + " × 10⁰)";
                const s = shuffle(r, [val.toLocaleString('en-US'), "7,040", "7,400", "740"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × 1000 = " + (a * 1000) + "; " + b + " × 1 = " + b + ". Total = " + val.toLocaleString('en-US') + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 7: Writing large number in digits from words (Lesson 120 #6)
            (r) => {
                const words = "two hundred fifty-six million, five thousand";
                const ans = "256,005,000";
                const q = "Use digits to write: " + words;
                const s = shuffle(r, [ans, "256,500,000", "256,050,000", "25,605,000"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [words + " = " + ans + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 8: Missing 4th number given mean of 4 numbers (Lesson 120 #7a)
            (r) => {
                const mean = 25;
                const n1 = 17, n2 = 23, n3 = 25;
                const n4 = 4 * mean - (n1 + n2 + n3);
                const q = "The mean of four numbers is " + mean + ". Three of the numbers are " + n1 + ", " + n2 + ", and " + n3 + ". What is the fourth number?";
                const s = shuffle(r, ["" + n4, "30", "28", "32"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total sum = 4 × " + mean + " = 100. Fourth number = 100 − (" + n1 + " + " + n2 + " + " + n3 + ") = 100 − " + (n1 + n2 + n3) + " = " + n4 + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 9: Range of data set (Lesson 120 #7b)
            (r) => {
                const nums = [17, 23, 25, 35];
                const range = 35 - 17;
                const q = "What is the range of the four numbers: " + nums.join(", ") + "?";
                const s = shuffle(r, ["" + range, "16", "20", "25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Range = greatest − least = 35 − 17 = " + range + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 10: Party guests fraction whole word problem (Lesson 120 #10)
            (r) => {
                const guests = 24;
                const invited = 30;
                const q = guests + " guests came to the party. This was 4/5 of those who were invited. How many guests were invited?";
                const s = shuffle(r, [invited + " guests", "28 guests", "32 guests", "36 guests"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [guests + " ÷ (4/5) = " + guests + " × (5/4) = " + invited + " guests."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 11: Adding three mixed numbers with unlike denominators (Lesson 120 #11)
            (r) => {
                const q = "Add: 1 1/3 + 3 1/4 + 1 1/6";
                const ans = "5 3/4";
                const s = shuffle(r, [ans, "5 2/3", "5 5/12", "6 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator is 12: 1 4/12 + 3 3/12 + 1 2/12 = 5 9/12 = 5 3/4."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 12: Multiplying mixed numbers and fractions (Lesson 120 #12)
            (r) => {
                const q = "Multiply: 5/6 × 3 2/3 × 2 2/5";
                const ans = "7 1/3";
                const s = shuffle(r, [ans, "6 2/3", "7 2/3", "8 1/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 × 11/3 × 12/5 = (5 × 11 × 12) / (6 × 3 × 5) = 22/3 = 7 1/3."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 13: Decimal order of operations with division and parentheses (Lesson 120 #14)
            (r) => {
                const q = "Simplify: 0.08 ÷ (1 ÷ 0.4)";
                const ans = "0.032";
                const s = shuffle(r, [ans, "0.32", "0.0032", "3.2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 ÷ 0.4 = 2.5. Then 0.08 ÷ 2.5 = " + ans + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 14: Price per pound to price per ounce (Lesson 120 #17)
            (r) => {
                const priceLb = "1.12";
                const priceOz = "$0.07";
                const q = "At $" + priceLb + " per pound, what is the price per ounce? (1 pound = 16 ounces)";
                const s = shuffle(r, [priceOz + " per ounce", "$0.08 per ounce", "$0.06 per ounce", "$0.10 per ounce"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + priceLb + " ÷ 16 = " + priceOz + " per ounce."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 15: Circumference of circle given diameter (Lesson 120 #18)
            (r) => {
                const diam = 10;
                const circ = "31.4";
                const q = "Children stood in a circle with a diameter of " + diam + " m. Using 3.14 for π, what was the circumference of the circle?";
                const s = shuffle(r, [circ + " m", "62.8 m", "15.7 m", "314 m"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × d = 3.14 × " + diam + " = " + circ + " m."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 16: Perimeter of square given area (Lesson 120 #19)
            (r) => {
                const side = 6;
                const area = side * side;
                const perim = 4 * side;
                const q = "If the area of a square is " + area + " cm², what is the perimeter of the square?";
                const s = shuffle(r, [perim + " cm", (perim + 4) + " cm", (perim - 4) + " cm", (side * 2) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = √" + area + " = " + side + " cm. Perimeter = 4 × " + side + " = " + perim + " cm."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 17: Election votes percentage word problem (Lesson 120 #21)
            (r) => {
                const names = ["Shayla", "Maya", "Darius", "Lucas", "Elena"];
                const name = names[randInt(r, 0, names.length - 1)];
                const pct = 60;
                const votes = 18;
                const total = votes / (pct / 100);
                const q = pct + "% of the votes were cast for " + name + ". If " + name + " received " + votes + " votes, how many votes were cast in all?";
                const s = shuffle(r, [total + " votes", "28 votes", "32 votes", "36 votes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total votes = " + votes + " ÷ 0." + pct + " = " + total + " votes."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 18: Probability of spinning same letter 3 times in a row (Lesson 120 #22)
            (r) => {
                const names = ["Kareem", "Mateo", "Carlos", "Andre", "Jamal"];
                const name = names[randInt(r, 0, names.length - 1)];
                const q = name + " has a spinner divided into 4 equal sections labeled A, B, C, and D. If he spins the spinner three times, what is the probability he will spin A three times in a row?";
                const ans = "1/64";
                const s = shuffle(r, [ans, "1/16", "1/12", "3/64"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P(A on 1 spin) = 1/4. P(A on 3 spins) = (1/4)³ = 1/64."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 19: Area of right triangle on coordinate plane (Lesson 120 #26)
            (r) => {
                const sVal = 8;
                const area = (sVal * sVal) / 2;
                const q = "The three vertices of a triangle on the coordinate plane are (0, 0), (−" + sVal + ", 0), and (−" + sVal + ", −" + sVal + "). What is the area of the triangle?";
                const s = shuffle(r, [area + " sq units", (sVal * sVal) + " sq units", (area + 8) + " sq units", (area - 8) + " sq units"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Base length on x-axis is " + sVal + " units; height is " + sVal + " units. Area = 1/2 × " + sVal + " × " + sVal + " = " + area + " sq units."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
};

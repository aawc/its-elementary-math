// Section 12 - Part 1: Lessons 111, 112, 113

module.exports = {
  getLesson111: () => `    // Lesson 111: Applications Using Division
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
    },`,

  getLesson112: () => `    // Lesson 112: Multiplying and Dividing Integers
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
    },`,

  getLesson113: () => `    // Lesson 113: Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten
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
    },`
};

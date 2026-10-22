module.exports = `    // Lesson 32: Expanded Notation • More on Elapsed Time
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
`;

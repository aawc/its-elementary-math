module.exports = `    // Lesson 40: Using Zero as a Placeholder • Circle Graphs
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
`;

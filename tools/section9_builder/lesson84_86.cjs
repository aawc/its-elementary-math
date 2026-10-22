module.exports = `
    // Lesson 84: Order of Operations, Part 2
    84: (rng, qIndex) => {
        const framings = [
            // Category 0: n + n × n − n ÷ n (Lesson 84 Practice Set a/e)
            (r) => {
                const n = [3, 4, 5, 6][randInt(r, 0, 3)];
                const ans = n + n * n - 1;
                const quest = "Simplify: " + n + " + " + n + " × " + n + " − " + n + " ÷ " + n;
                const s = shuffle(r, ["" + ans, "" + (n * n), "" + (n * 3), "" + (ans + 2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply and divide first: " + n + " × " + n + " = " + (n * n) + ", " + n + " ÷ " + n + " = 1. Then " + n + " + " + (n * n) + " − 1 = " + ans + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 1: Base + rate(qty) (Lesson 84 Practice Set b)
            (r) => {
                const base = [32, 20, 25][randInt(r, 0, 2)];
                const qty = 20;
                const rate = 1.8;
                const ans = base + Math.round(rate * qty); // 32 + 36 = 68
                const quest = "Simplify: " + base + " + " + rate + "(" + qty + ")";
                const s = shuffle(r, ["" + ans, "" + (ans + 10), "" + (ans - 10), "" + (base + qty)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [rate + " × " + qty + " = 36. Then " + base + " + 36 = " + ans + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 2: Mixed operations chain (Lesson 84 Practice Set c)
            (r) => {
                const quest = "Simplify: 5 + 4 × 3 ÷ 2 − 1";
                const s = shuffle(r, ["10", "12", "8", "9"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 × 3 = 12. 12 ÷ 2 = 6. 5 + 6 − 1 = 10."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 3: 2(a) + 2(b) (Lesson 84 Practice Set d)
            (r) => {
                const a = [10, 12, 15][randInt(r, 0, 2)];
                const b = [6, 8, 10][randInt(r, 0, 2)];
                const ans = 2 * a + 2 * b;
                const quest = "Simplify: 2(" + a + ") + 2(" + b + ")";
                const s = shuffle(r, ["" + ans, "" + (ans + 4), "" + (ans - 4), "" + (a + b)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2(" + a + ") = " + (2 * a) + ". 2(" + b + ") = " + (2 * b) + ". " + (2 * a) + " + " + (2 * b) + " = " + ans + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 4: 2(a + b) (Lesson 84 Practice Set f)
            (r) => {
                const a = [10, 12, 15][randInt(r, 0, 2)];
                const b = [6, 8, 10][randInt(r, 0, 2)];
                const ans = 2 * (a + b);
                const quest = "Simplify: 2(" + a + " + " + b + ")";
                const s = shuffle(r, ["" + ans, "" + (ans + 4), "" + (2 * a + b), "" + (a + b)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " + " + b + ") = " + (a + b) + ". 2 × " + (a + b) + " = " + ans + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 5: Ratio of primes to composites (Lesson 84 #1)
            (r) => {
                const quest = "What is the ratio of prime numbers to composite numbers in this list? 2, 3, 4, 5, 6, 7, 8, 9, 10";
                const s = shuffle(r, ["4 to 5", "5 to 4", "4 to 9", "5 to 9"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Primes are 2, 3, 5, 7 (4 numbers). Composites are 4, 6, 8, 9, 10 (5 numbers). Ratio is 4 to 5."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 6: Milk cups from half-gallon (Lesson 84 #2)
            (r) => {
                const poured = [3, 4, 5][randInt(r, 0, 2)];
                const rem = 8 - poured;
                const quest = "Bianca poured " + poured + " cups of milk from a full half-gallon container. How many cups of milk were left in the container? (1 half-gallon = 8 cups)";
                const s = shuffle(r, [rem + " cups", (rem + 2) + " cups", (rem - 1) + " cups", (8 + poured) + " cups"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 half-gallon = 8 cups. 8 − " + poured + " = " + rem + " cups left."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 7: Percent to reduced fraction and decimal (Lesson 84 #4)
            (r) => {
                const pcts = [30, 40, 70, 80];
                const pct = pcts[randInt(r, 0, pcts.length - 1)];
                const frac = formatFraction(pct, 100);
                const dec = (pct / 100).toFixed(1);
                const quest = "Write " + pct + "% as a reduced fraction and as a decimal number.";
                const s = shuffle(r, [frac + ", " + dec, pct + "/100, " + dec, frac + ", " + (pct / 10).toFixed(1), formatFraction(pct + 10, 100) + ", " + dec]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% = " + pct + "/100 = " + frac + ", and as a decimal " + dec + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 8: Right triangle area (Lesson 84 #5)
            (r) => {
                const b = 6;
                const h = 4;
                const area = (b * h) / 2;
                const quest = "Find the area of a right triangle with perpendicular legs measuring " + b + " cm and " + h + " cm.";
                const s = shuffle(r, [area + " cm²", (b * h) + " cm²", (b + h) + " cm", (area + 4) + " cm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) / 2 = (6 × 4) / 2 = 12 cm²."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 9: Triangle area with base and height (Lesson 84 #6)
            (r) => {
                const b = 9;
                const h = 6;
                const area = (b * h) / 2;
                const quest = "Find the area of a triangle with a base of " + b + " cm and a height of " + h + " cm.";
                const s = shuffle(r, [area + " cm²", (b * h) + " cm²", (area + 6) + " cm²", (area - 6) + " cm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) / 2 = (9 × 6) / 2 = 27 cm²."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 10: 1/20 to decimal and percent (Lesson 84 #7)
            (r) => {
                const quest = "Write 1/20 as a decimal number and as a percent.";
                const s = shuffle(r, ["0.05, 5%", "0.5, 50%", "0.02, 2%", "0.2, 20%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/20 = 5/100 = 0.05 = 5%."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 11: Parallelograms and rectangles (Lesson 84 #8)
            (r) => {
                const quest = "Verify the statement: 'Some parallelograms are rectangles.' True or false? Why?";
                const s = shuffle(r, ["True; rectangles have two pairs of parallel sides and right angles.", "False; no parallelograms can have right angles.", "False; all parallelograms are rectangles.", "True; only parallelograms with equal sides are rectangles."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rectangles are parallelograms with four right angles, so the statement is true."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 12: Parallelogram area (Lesson 84 #9)
            (r) => {
                const b = 25;
                const h = 16;
                const area = b * h;
                const quest = "What is the area of a parallelogram with a base of " + b + " cm and a height of " + h + " cm?";
                const s = shuffle(r, [area + " cm²", (2 * (b + h)) + " cm", Math.floor(area / 2) + " cm²", (area + 40) + " cm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = base × height = 25 × 16 = 400 cm²."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 13: Parallelogram perimeter (Lesson 84 #10)
            (r) => {
                const s1 = 25;
                const s2 = 24;
                const peri = 2 * (s1 + s2);
                const quest = "What is the perimeter of a parallelogram with adjacent sides measuring " + s1 + " cm and " + s2 + " cm?";
                const s = shuffle(r, [peri + " cm", (s1 + s2) + " cm", (s1 * s2) + " cm²", (peri + 6) + " cm"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (25 + 24) = 2 × 49 = 98 cm."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 14: Decimal subtraction and division by 10 (Lesson 84 #14)
            (r) => {
                const quest = "Simplify: (4 − 3.2) ÷ 10";
                const s = shuffle(r, ["0.08", "0.8", "0.008", "0.12"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 − 3.2 = 0.8. 0.8 ÷ 10 = 0.08."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 15: Decimal order of operations (Lesson 84 #15)
            (r) => {
                const quest = "Simplify: 0.5 × 0.5 + 0.5 ÷ 0.5";
                const s = shuffle(r, ["1.25", "0.75", "1.0", "1.5"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.5 × 0.5 = 0.25. 0.5 ÷ 0.5 = 1. 0.25 + 1 = 1.25."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 16: Whole number divided by small decimal (Lesson 84 #16)
            (r) => {
                const quest = "Divide: 8 ÷ 0.04";
                const s = shuffle(r, ["200", "20", "2000", "32"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shift decimal point: 800 ÷ 4 = 200."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 17: Hundredths place digit (Lesson 84 #17)
            (r) => {
                const quest = "Which digit is in the hundredths place in 612.345678?";
                const s = shuffle(r, ["4", "3", "5", "1"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In 612.345678, 3 is in tenths, 4 is in hundredths, and 5 is in thousandths."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 18: Square perimeter 1 meter side in cm (Lesson 84 #21)
            (r) => {
                const quest = "The perimeter of a square is 1 meter. How many centimeters long is each side? (1 meter = 100 cm)";
                const s = shuffle(r, ["25 cm", "20 cm", "50 cm", "10 cm"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 meter = 100 cm. A square has 4 equal sides: 100 ÷ 4 = 25 cm."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 19: Fong team points percent (Lesson 84 #22)
            (r) => {
                const pts = [9, 12, 15][randInt(r, 0, 2)];
                const tot = [45, 60, 75][randInt(r, 0, 2)];
                const pct = Math.round((pts / tot) * 100);
                const quest = "Fong scored " + pts + " of her team's " + tot + " points. What percent of the team's points did she score?";
                const s = shuffle(r, [pct + "%", (pct + 5) + "%", (pct - 5) + "%", (pct + 10) + "%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [pts + "/" + tot + " = " + (pts / tot) + " = " + pct + "%."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 85: Using Cross Products to Solve Proportions
    85: (rng, qIndex) => {
        const framings = [
            // Category 0: Cross products proportion test (Lesson 85 Practice Set a/b)
            (r) => {
                const quest = "Use cross products to determine whether 6/8 and 9/12 form a proportion.";
                const s = shuffle(r, ["Yes, because 6 × 12 = 8 × 9 = 72", "No, because 6 × 9 ≠ 8 × 12", "No, because the denominators are different", "Cannot be determined"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cross products: 6 × 12 = 72, and 8 × 9 = 72. Since cross products are equal, they form a proportion."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 1: Cross products solve y/10 = 12/20 (Lesson 85 Practice Set c)
            (r) => {
                const quest = "Use cross products to solve for y: y/10 = 12/20";
                const s = shuffle(r, ["6", "8", "5", "4"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["20y = 10 × 12 = 120. y = 120 ÷ 20 = 6."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 2: Cross products 10 is to 15 as 30 is to what (Lesson 85 Practice Set e)
            (r) => {
                const quest = "Use cross products to find the unknown term in this proportion: 10 is to 15 as 30 is to what number?";
                const s = shuffle(r, ["45", "40", "50", "60"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10/15 = 30/x. 10x = 15 × 30 = 450. x = 450 ÷ 10 = 45."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 3: Craft books percent (Lesson 85 #1)
            (r) => {
                const craft = [21, 18, 19][randInt(r, 0, 2)];
                const pct = craft * 4;
                const quest = craft + " of the 25 books Aretha has are about crafts. What percent of the books are about crafts?";
                const s = shuffle(r, [pct + "%", (pct + 4) + "%", (pct - 4) + "%", (100 - pct) + "%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [craft + "/25 = " + (craft * 4) + "/100 = " + pct + "%."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 4: Temperature drop across zero (Lesson 85 #2)
            (r) => {
                const t1 = 17;
                const t2 = -6;
                const drop = t1 - t2; // 23
                const quest = "By the time the blizzard was over, the temperature had dropped from 17ºF to –6ºF. This was a drop of how many degrees?";
                const s = shuffle(r, ["23 degrees", "11 degrees", "24 degrees", "17 degrees"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Drop = 17 − (−6) = 17 + 6 = 23 degrees."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 5: Collect call tiered cost (Lesson 85 #3)
            (r) => {
                const mins = [5, 6, 7][randInt(r, 0, 2)];
                const cost = (1.50 + (mins - 1) * 1.00).toFixed(2);
                const quest = "The cost to place a collect call was $1.50 for the first minute plus $1.00 for each additional minute. What was the cost of a " + mins + "-minute phone call?";
                const s = shuffle(r, ["$" + cost, "$" + (parseFloat(cost) + 1).toFixed(2), "$" + (parseFloat(cost) - 1).toFixed(2), "$" + (mins * 1.50).toFixed(2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["First minute = $1.50. " + (mins - 1) + " additional minutes = $" + ((mins - 1) * 1.00).toFixed(2) + ". Total = $" + cost + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 6: Runners to walkers ratio (Lesson 85 #4)
            (r) => {
                const mult = [50, 70, 80][randInt(r, 0, 2)];
                const runners = 5 * mult;
                const walkers = 7 * mult;
                const quest = "The ratio of runners to walkers at the 10K fund-raiser was 5 to 7. If there were " + runners + " runners, how many walkers were there?";
                const s = shuffle(r, [walkers + " walkers", (walkers + 50) + " walkers", (walkers - 50) + " walkers", runners + " walkers"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/7 = " + runners + "/w. 5w = 7 × " + runners + ". w = " + walkers + " walkers."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 7: Complementary angles in right triangle (Lesson 85 #5)
            (r) => {
                const b = [35, 45, 55, 65][randInt(r, 0, 3)];
                const a = 90 - b;
                const quest = "The two acute angles in right triangle ABC are complementary. If the measure of angle B is " + b + "º, what is the measure of angle A?";
                const s = shuffle(r, [a + "º", (180 - b) + "º", (a + 10) + "º", (a - 10) + "º"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Complementary angles sum to 90º: 90º − " + b + "º = " + a + "º."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 8: 20% off shoe sale (Lesson 85 #6)
            (r) => {
                const p = 55;
                const sale = (p * 0.8).toFixed(2);
                const quest = "Athletic shoes are on sale for 20% off. Toni wants to buy running shoes regularly priced at $55. What is the sale price?";
                const s = shuffle(r, ["$44.00", "$11.00", "$45.00", "$40.00"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Discount = 20% of $55 = $11. Sale price = $55 − $11 = $44.00."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 9: 1/25 as decimal and percent (Lesson 85 #8)
            (r) => {
                const quest = "Write 1/25 as a decimal number and as a percent.";
                const s = shuffle(r, ["0.04, 4%", "0.4, 40%", "0.25, 25%", "0.025, 2.5%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/25 = 4/100 = 0.04 = 4%."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 10: Cross products 4 is to 6 as 10 is to n (Lesson 85 #10)
            (r) => {
                const quest = "Use cross products to find the unknown term in this proportion: 4 is to 6 as 10 is to what number?";
                const s = shuffle(r, ["15", "12", "16", "20"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4/6 = 10/n. 4n = 60. n = 60 ÷ 4 = 15."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 11: Whole number divided by mixed number (Lesson 85 #11)
            (r) => {
                const quest = "Divide: 10 ÷ 2 1/2";
                const s = shuffle(r, ["4", "5", "25", "2 1/2"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 = 5/2. 10 ÷ 5/2 = 10 × 2/5 = 20/5 = 4."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 12: Decimal operations with parentheses (Lesson 85 #12)
            (r) => {
                const quest = "Simplify: 6.5 − (4 − 0.32)";
                const s = shuffle(r, ["2.82", "2.18", "3.68", "2.5"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 − 0.32 = 3.68. 6.5 − 3.68 = 2.82."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 13: Multiply decimals (Lesson 85 #13)
            (r) => {
                const quest = "Multiply: (6.25)(1.6)";
                const s = shuffle(r, ["10", "10.25", "9.6", "100"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6.25 × 1.6 = 10.00 = 10."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 14: Divide decimal by integer (Lesson 85 #14)
            (r) => {
                const quest = "Divide: 0.06 ÷ 12";
                const s = shuffle(r, ["0.005", "0.05", "0.5", "0.002"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.06 ÷ 12 = 0.005."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 15: Solve proportion 9/12 = n/20 (Lesson 85 #17)
            (r) => {
                const quest = "Solve this proportion using cross products: 9/12 = n/20";
                const s = shuffle(r, ["15", "12", "16", "18"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12n = 9 × 20 = 180. n = 180 ÷ 12 = 15."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 16: Arrange fraction, decimal, and percent (Lesson 85 #18)
            (r) => {
                const quest = "Arrange in order from least to greatest: 1/2, 0.4, 30%";
                const s = shuffle(r, ["30%, 0.4, 1/2", "0.4, 30%, 1/2", "1/2, 0.4, 30%", "30%, 1/2, 0.4"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["30% = 0.3, 0.4 = 0.4, 1/2 = 0.5. Least to greatest: 30%, 0.4, 1/2."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 17: Student teacher ratio (Lesson 85 #19)
            (r) => {
                const sCount = [240, 300, 360][randInt(r, 0, 2)];
                const tCount = 15;
                const ratio = sCount / tCount;
                const quest = "In a school with " + sCount + " students and " + tCount + " teachers, what is the student-teacher ratio in simplest form?";
                const s = shuffle(r, [ratio + " to 1", (ratio + 5) + " to 1", (ratio - 5) + " to 1", tCount + " to " + sCount]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [sCount + " ÷ " + tCount + " = " + ratio + " to 1."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 18: Fraction of students without pets (Lesson 85 #21)
            (r) => {
                const tot = [24, 28, 32, 36][randInt(r, 0, 3)];
                const noPets = (tot * 3) / 4;
                const quest = "One fourth of " + tot + " students have pets. How many students do not have pets?";
                const s = shuffle(r, [noPets + " students", (tot / 4) + " students", (noPets + 4) + " students", (noPets - 4) + " students"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If 1/4 have pets, then 3/4 do not. 3/4 × " + tot + " = " + noPets + " students."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 19: Order of operations with 2 (Lesson 85 #23)
            (r) => {
                const quest = "Simplify: 2 + 2 × 2 − 2 ÷ 2";
                const s = shuffle(r, ["5", "3", "4", "6"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 × 2 = 4, 2 ÷ 2 = 1. Then 2 + 4 − 1 = 5."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 86: Area of a Circle
    86: (rng, qIndex) => {
        const framings = [
            // Category 0: Area of circle radius 4 cm (Lesson 86 Practice Set b)
            (r) => {
                const rVal = [3, 4, 5][randInt(r, 0, 2)];
                const area = (3.14 * rVal * rVal).toFixed(2);
                const quest = "Calculate the area of a circle with a radius of " + rVal + " cm. (Use 3.14 for π.)";
                const s = shuffle(r, [area + " cm²", (2 * 3.14 * rVal).toFixed(2) + " cm", (3.14 * rVal).toFixed(2) + " cm²", (area + 6.28) + " cm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = π × r² = 3.14 × (" + rVal + ")² = 3.14 × " + (rVal * rVal) + " = " + area + " cm²."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 1: Area of circle radius 2 feet (Lesson 86 Practice Set c)
            (r) => {
                const rVal = [2, 6, 8][randInt(r, 0, 2)];
                const area = (3.14 * rVal * rVal).toFixed(2);
                const quest = "Calculate the area of a circle with a radius of " + rVal + " feet. (Use 3.14 for π.)";
                const s = shuffle(r, [area + " sq ft", (2 * 3.14 * rVal).toFixed(2) + " sq ft", (rVal * rVal) + " sq ft", (parseFloat(area) + 5).toFixed(2) + " sq ft"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = π × r² = 3.14 × (" + rVal + ")² = " + area + " sq ft."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 2: Area of circle with diameter in feet (Lesson 86 Practice Set d)
            (r) => {
                const d = [2, 4, 6][randInt(r, 0, 2)];
                const rad = d / 2;
                const area = (3.14 * rad * rad).toFixed(2);
                const quest = "Calculate the area of a circle with a diameter of " + d + " feet. (Use 3.14 for π.)";
                const s = shuffle(r, [area + " sq ft", (3.14 * d * d).toFixed(2) + " sq ft", (3.14 * d).toFixed(2) + " sq ft", (rad * rad) + " sq ft"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = diameter ÷ 2 = " + rad + " ft. Area = 3.14 × " + rad + "² = " + area + " sq ft."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 3: Area of circle with diameter in inches (Lesson 86 Practice Set e)
            (r) => {
                const d = [10, 20][randInt(r, 0, 1)];
                const rad = d / 2;
                const area = (3.14 * rad * rad).toFixed(2);
                const quest = "Calculate the area of a circle with a diameter of " + d + " inches. (Use 3.14 for π.)";
                const s = shuffle(r, [area + " sq in.", (3.14 * d * d).toFixed(2) + " sq in.", (3.14 * d).toFixed(2) + " sq in.", (rad * rad) + " sq in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = " + d + " ÷ 2 = " + rad + " in. Area = 3.14 × (" + rad + ")² = " + area + " sq in."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 4: Decimal division ten and six tenths by four hundredths (Lesson 86 #1)
            (r) => {
                const quest = "What is the quotient when the decimal number ten and six tenths is divided by four hundredths?";
                const s = shuffle(r, ["265", "26.5", "2650", "2.65"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10.6 ÷ 0.04 = 1060 ÷ 4 = 265."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 5: Time zone earlier by 3 hours (Lesson 86 #2)
            (r) => {
                const nyHour = [1, 2, 3][randInt(r, 0, 2)];
                const laHour = nyHour - 3 + 12;
                const laStr = (laHour > 12 ? laHour - 12 : laHour) + ":15 a.m.";
                const quest = "The time in Los Angeles is 3 hours earlier than the time in New York. If it is " + nyHour + ":15 p.m. in New York, what time is it in Los Angeles?";
                const s = shuffle(r, [laStr, (nyHour + 3) + ":15 p.m.", nyHour + ":15 a.m.", ((laHour > 12 ? laHour - 12 : laHour) + 1) + ":15 a.m."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [nyHour + ":15 p.m. minus 3 hours = " + laStr + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 6: Keychains change from $10 bill (Lesson 86 #3)
            (r) => {
                const quest = "Geraldine paid with a $10 bill for 1 dozen keychains that cost 75¢ each. How much should she get back in change?";
                const s = shuffle(r, ["$1.00", "$2.00", "$1.50", "$0.75"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 dozen = 12 keychains. 12 × $0.75 = $9.00. Change = $10.00 − $9.00 = $1.00."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 7: Volume of prism unit cubes (Lesson 86 #4)
            (r) => {
                const l = [4, 5][randInt(r, 0, 1)];
                const w = [3, 4][randInt(r, 0, 1)];
                const h = [2, 3][randInt(r, 0, 1)];
                const vol = l * w * h;
                const quest = "If each block has a volume of 1 cubic inch, what is the volume of a rectangular prism with dimensions " + l + " in. by " + w + " in. by " + h + " in.?";
                const s = shuffle(r, [vol + " cu. in.", (vol + 8) + " cu. in.", (vol - 6) + " cu. in.", (l * w) + " cu. in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = " + l + " × " + w + " × " + h + " = " + vol + " cu. in."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 8: Circle circumference from radius (Lesson 86 #5)
            (r) => {
                const rVal = [5, 10, 15][randInt(r, 0, 2)];
                const circ = (2 * 3.14 * rVal).toFixed(2);
                const quest = "Find the circumference of a circle with a radius of " + rVal + " cm. (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " cm", (3.14 * rVal).toFixed(2) + " cm", (3.14 * rVal * rVal).toFixed(2) + " cm²", (2 * rVal) + " cm"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = 2 × π × r = 2 × 3.14 × " + rVal + " = " + circ + " cm."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 9: Proportion solve 8/12 = 12/x (Lesson 86 #7)
            (r) => {
                const quest = "Solve this proportion: 8/12 = 12/x";
                const s = shuffle(r, ["18", "16", "20", "24"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8x = 12 × 12 = 144. x = 144 ÷ 8 = 18."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 10: Prime factorization of 360 using exponents (Lesson 86 #8)
            (r) => {
                const quest = "Write the prime factorization of 360 using exponents.";
                const s = shuffle(r, ["2³ × 3² × 5", "2² × 3³ × 5", "2³ × 3 × 5²", "2 × 3² × 5²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["360 = 8 × 45 = 2³ × 9 × 5 = 2³ × 3² × 5."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 11: Parallelogram area (Lesson 86 #9)
            (r) => {
                const b = 20;
                const h = 12;
                const area = b * h;
                const quest = "What is the area of a parallelogram with a base of " + b + " mm and a height of " + h + " mm?";
                const s = shuffle(r, [area + " mm²", (2 * (b + h)) + " mm", Math.floor(area / 2) + " mm²", (area + 20) + " mm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = base × height = 20 × 12 = 240 mm²."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 12: Triangle area (Lesson 86 #10)
            (r) => {
                const b = 14;
                const h = 10;
                const area = (b * h) / 2;
                const quest = "What is the area of a triangle with a base of " + b + " mm and a height of " + h + " mm?";
                const s = shuffle(r, [area + " mm²", (b * h) + " mm²", (b + h) + " mm", (area + 10) + " mm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) / 2 = (14 × 10) / 2 = 70 mm²."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 13: Order of operations with 4 (Lesson 86 #11)
            (r) => {
                const quest = "Simplify: 4 + 4 × 4 − 4 ÷ 4";
                const s = shuffle(r, ["19", "16", "18", "24"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 × 4 = 16, 4 ÷ 4 = 1. 4 + 16 − 1 = 19."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 14: 45% to reduced fraction and decimal (Lesson 86 #13)
            (r) => {
                const quest = "Write 45% as a reduced fraction and as a decimal number.";
                const s = shuffle(r, ["9/20, 0.45", "45/100, 0.45", "9/20, 4.5", "9/25, 0.36"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["45% = 45/100 = 9/20, and as a decimal 0.45."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 15: Gallons to quarts (Lesson 86 #14)
            (r) => {
                const g = randInt(r, 3, 5);
                const qt = g * 4;
                const quest = "How many quarts are in " + g + " gallons of milk? (1 gallon = 4 quarts)";
                const s = shuffle(r, [qt + " quarts", (g * 2) + " quarts", (g * 8) + " quarts", (qt + 4) + " quarts"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [g + " gallons × 4 quarts/gallon = " + qt + " quarts."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 16: Regular hexagon perimeter (Lesson 86 #16)
            (r) => {
                const sVal = randInt(r, 6, 9);
                const peri = 6 * sVal;
                const quest = "What is the perimeter of a regular hexagon with sides measuring " + sVal + " cm?";
                const s = shuffle(r, [peri + " cm", (4 * sVal) + " cm", (8 * sVal) + " cm", (peri + 6) + " cm"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A regular hexagon has 6 equal sides: 6 × " + sVal + " = " + peri + " cm."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 17: Unknown factor (Lesson 86 #17)
            (r) => {
                const a = 5;
                const ans = 7;
                const prod = a * ans;
                const quest = "Find the unknown factor: " + a + "w = " + prod;
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 2), "" + (ans + 10)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + prod + " ÷ " + a + " = " + ans + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 18: Boys to girls ratio (Lesson 86 #18)
            (r) => {
                const mult = randInt(r, 4, 6);
                const tot = 9 * mult;
                const boys = 4 * mult;
                const quest = "In a classroom of " + tot + " students, the ratio of boys to girls is 4 to 5. How many boys are in the class?";
                const s = shuffle(r, [boys + " boys", (5 * mult) + " boys", (boys + 4) + " boys", (boys - 4) + " boys"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total parts = 4 + 5 = 9. Each part = " + tot + " ÷ 9 = " + mult + ". Boys = 4 × " + mult + " = " + boys + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 19: Supplementary angles (Lesson 86 #19)
            (r) => {
                const a = [65, 70, 75, 80][randInt(r, 0, 3)];
                const b = 180 - a;
                const quest = "Angles A and B are supplementary. If angle A measures " + a + "º, what is the measure of angle B?";
                const s = shuffle(r, [b + "º", (90 - a) + "º", (b + 10) + "º", (b - 10) + "º"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Supplementary angles sum to 180º: 180º − " + a + "º = " + b + "º."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

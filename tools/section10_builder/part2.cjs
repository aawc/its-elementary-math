// Lessons 94, 95, 96 generators for Section 10
const part2 = `
    // Lesson 94: Writing Fractions and Decimals as Percents, Part 2
    94: (rng, qIndex) => {
        const framings = [
            // Category 0: Part of students percent (WP 1)
            (r) => {
                const q = "Ten of the thirty students on the bus were boys. What percent of the students on the bus were boys?";
                const s = shuffle(r, ["33 1/3%", "30%", "33%", "25%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fraction of boys = 10/30 = 1/3.", "1/3 × 100% = 100/3% = 33 1/3%."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 1: Celsius midpoint (WP 2)
            (r) => {
                const q = "On the Celsius scale water freezes at 0°C and boils at 100°C. What temperature is halfway between the freezing and boiling temperatures of water?";
                const s = shuffle(r, ["50°C", "45°C", "55°C", "32°C"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Halfway temperature = (0°C + 100°C) ÷ 2 = 100°C ÷ 2 = 50°C."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 2: Segment fraction (WP 3)
            (r) => {
                const ac = [12, 15, 18, 24][randInt(r, 0, 3)];
                const ab = ac / 3;
                const bc = ac - ab;
                const q = "If the length of segment AB is 1/3 the length of segment AC, and segment AC is " + ac + " cm long, then how long is segment BC?";
                const s = shuffle(r, [bc + " cm", ab + " cm", (bc + 2) + " cm", (ac - 2) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["AB = 1/3 × " + ac + " = " + ab + " cm.", "BC = AC - AB = " + ac + " - " + ab + " = " + bc + " cm."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 3: Mixed number to percent by multiplying 100% (WP 5)
            (r) => {
                const q = "Change 1 2/3 to a percent by multiplying 1 2/3 by 100%.";
                const s = shuffle(r, ["166 2/3%", "166%", "160 2/3%", "133 1/3%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 2/3 = 5/3.", "5/3 × 100% = 500/3% = 166 2/3%."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 4: Decimal to percent by multiplying 100% (WP 6)
            (r) => {
                const d = [1.5, 1.25, 2.5, 3.2][randInt(r, 0, 3)];
                const pct = (d * 100) + "%";
                const q = "Change " + d + " to a percent by multiplying " + d + " by 100%.";
                const s = shuffle(r, [pct, (d * 10) + "%", (d * 1000) + "%", (d * 50) + "%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [d + " × 100% = " + pct + "."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 5: Decimal minus mixed number (WP 7)
            (r) => {
                const q = "Subtract 6 1/4 from 6.4 (write the answer as a decimal number).";
                const s = shuffle(r, ["0.15", "0.25", "0.1", "0.05"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert 6 1/4 to decimal: 6.25.", "6.40 - 6.25 = 0.15."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 6: Powers of 10 difference (WP 8)
            (r) => {
                const q = "Simplify: 10⁴ - 10³";
                const s = shuffle(r, ["9000", "900", "1000", "9900"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10⁴ = 10,000.", "10³ = 1,000.", "10,000 - 1,000 = 9,000."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 7: Fraction of 360 degrees (WP 9)
            (r) => {
                const q = "How many degrees is 3/4 of 360°?";
                const s = shuffle(r, ["270°", "240°", "280°", "180°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 × 360° = (3 × 360°) ÷ 4 = 1080° ÷ 4 = 270°."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 8: Can circumference (WP 10)
            (r) => {
                const d = 8;
                const circ = (3.14 * d).toFixed(2);
                const q = "A cylindrical can of spaghetti sauce has a diameter of " + d + " cm. The label wraps around the circumference of the can. How long does the label need to be? (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " cm", "24.12 cm", "26.12 cm", "50.24 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = πd.", "C = 3.14 × 8 cm = 25.12 cm."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 9: Can base area (WP 11)
            (r) => {
                const d = 8;
                const r_val = 4;
                const area = (3.14 * r_val * r_val).toFixed(2);
                const q = "A cylindrical can has a base diameter of " + d + " cm. How many square centimeters of countertop does the can occupy? (Use 3.14 for π.)";
                const s = shuffle(r, [area + " cm²", "25.12 cm²", "64.00 cm²", "48.24 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = diameter ÷ 2 = 8 ÷ 2 = 4 cm.", "Area = πr² = 3.14 × 4² = 3.14 × 16 = 50.24 cm²."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 10: Multiplying three fractions (WP 13)
            (r) => {
                const q = "Multiply: (9/10) · (5/6) · (8/9)";
                const s = shuffle(r, ["2/3", "3/4", "4/5", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cancel 9 in numerator and denominator: (1/10) × (5/6) × (8/1).", "Multiply and reduce: (5 × 8) / (10 × 6) = 40 / 60 = 2/3."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 11: Expanded notation with exponents (WP 14)
            (r) => {
                const q = "Write 250,000 in expanded notation using exponents.";
                const s = shuffle(r, [
                    "(2 × 10⁵) + (5 × 10⁴)",
                    "(2 × 10⁶) + (5 × 10⁵)",
                    "(25 × 10⁴)",
                    "(2 × 10⁴) + (5 × 10³)"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 is in the hundred thousands place: 2 × 10⁵.", "5 is in the ten thousands place: 5 × 10⁴.", "(2 × 10⁵) + (5 × 10⁴)."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 12: Money addition (WP 15)
            (r) => {
                const q = "Calculate: $8.47 + 95¢ + $12";
                const s = shuffle(r, ["$21.42", "$21.32", "$20.42", "$22.42"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Write 95¢ as $0.95 and $12 as $12.00.", "$8.47 + $0.95 + $12.00 = $21.42."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 13: Divide decimal by 100 (WP 16)
            (r) => {
                const q = "Divide: 37.5 ÷ 100";
                const s = shuffle(r, ["0.375", "3.75", "0.0375", "375"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 100 shifts the decimal point two places to the left: 0.375."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 14: Proportion solving (WP 17)
            (r) => {
                const q = "Solve the proportion: 3/x = 21/7";
                const s = shuffle(r, ["1", "2", "3", "7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Simplify 21/7 = 3.", "3/x = 3, so x = 1."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 15: Percent complement (WP 19)
            (r) => {
                const pct = [85, 90, 92, 95][randInt(r, 0, 3)];
                const inc = 100 - pct;
                const q = "If " + pct + "% of the answers were correct, what percent were incorrect?";
                const s = shuffle(r, [inc + "%", (inc + 5) + "%", (inc - 5) + "%", (100 - inc) + "%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total percentage is 100%.", "100% - " + pct + "% = " + inc + "% incorrect."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 16: Word to decimal (WP 20)
            (r) => {
                const q = "Write the decimal number: one hundred twenty and three hundredths.";
                const s = shuffle(r, ["120.03", "120.3", "100.23", "120.003"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One hundred twenty = 120.", "Three hundredths = 0.03.", "120 + 0.03 = 120.03."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 17: Square pyramid edges (WP 22)
            (r) => {
                const q = "A pyramid with a square base has how many edges?";
                const s = shuffle(r, ["8 edges", "5 edges", "6 edges", "10 edges"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The square base has 4 edges.", "There are 4 slant edges connecting to the top apex.", "4 + 4 = 8 edges."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 18: Parallelogram area (WP 23)
            (r) => {
                const b = 10, h = 8;
                const area = b * h;
                const q = "What is the area of a parallelogram with a base of " + b + " in. and a height of " + h + " in.?";
                const s = shuffle(r, [area + " sq. in.", (2 * (b + h)) + " sq. in.", (area + 10) + " sq. in.", (area - 10) + " sq. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = base × height = " + b + " in. × " + h + " in. = " + area + " sq. in."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            },
            // Category 19: Temperature range (WP 25)
            (r) => {
                const low = 37, high = 103;
                const range = high - (-low);
                const q = "During the year, the temperature ranged from -" + low + "°F in winter to " + high + "°F in summer. How many degrees was the temperature range for the year?";
                const s = shuffle(r, [range + "°F", (high - low) + "°F", (range + 10) + "°F", (range - 10) + "°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Range = highest - lowest = " + high + "°F - (-" + low + "°F) = " + high + " + " + low + " = " + range + "°F."], lessonNum: 94, lessonTitle: "Writing Fractions and Decimals as Percents, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 95: Reducing Rates Before Multiplying
    95: (rng, qIndex) => {
        const framings = [
            // Category 0: Sales tax total price (WP 1)
            (r) => {
                const cost = 45.79;
                const tax = 3.21;
                const tot = (cost + tax).toFixed(2);
                const q = "What is the total price of a $45.79 item when 7% sales tax is added to the price?";
                const s = shuffle(r, ["$" + tot, "$48.00", "$49.20", "$48.79"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = 7% of $45.79 = 0.07 × $45.79 ≈ $3.21.", "Total = $45.79 + $3.21 = $" + tot + "."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 1: Meters to centimeters rate (WP 2)
            (r) => {
                const h = 1.67;
                const cm = 167;
                const q = "Jeff is " + h + " meters tall. How many centimeters tall is Jeff? (Multiply " + h + " meters by 100 centimeters per meter.)";
                const s = shuffle(r, [cm + " cm", (cm / 10) + " cm", (cm * 10) + " cm", (cm + 10) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [h + " m × (100 cm / 1 m) = " + cm + " cm."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 2: Seeds not sprouted (WP 3)
            (r) => {
                const total = 40;
                const notSprouted = 15;
                const sprouted = 25;
                const q = "If 5/8 of the 40 seeds sprouted, how many seeds did NOT sprout?";
                const s = shuffle(r, [notSprouted + " seeds", sprouted + " seeds", "12 seeds", "20 seeds"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fraction not sprouted = 1 - 5/8 = 3/8.", "3/8 of 40 = (3 × 40) ÷ 8 = 15 seeds."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 3: Expanded notation to standard (WP 4)
            (r) => {
                const q = "Write in standard notation: (5 × 100) + (6 × 10) + (7 × 1/10) + (3 × 1/100)";
                const s = shuffle(r, ["560.73", "56.73", "560.073", "506.73"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["500 + 60 + 0.7 + 0.03 = 560.73."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 4: 1/6 to percent (WP 5)
            (r) => {
                const q = "Change 1/6 to its percent equivalent by multiplying 1/6 by 100%.";
                const s = shuffle(r, ["16 2/3%", "16 1/2%", "16.6%", "15 2/3%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/6 × 100% = 100/6% = 50/3% = 16 2/3%."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 5: 2.5 to percent (WP 6)
            (r) => {
                const q = "What is the percent equivalent of 2.5?";
                const s = shuffle(r, ["250%", "25%", "2.5%", "2500%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2.5 × 100% = 250%."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 6: Percent of money (WP 7)
            (r) => {
                const q = "How much money is 30% of $12.00?";
                const s = shuffle(r, ["$3.60", "$3.00", "$4.20", "$2.40"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.30 × $12.00 = $3.60."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 7: Minute hand turns 180 degrees (WP 8)
            (r) => {
                const q = "The minute hand of a clock turns 180° in how many minutes?";
                const s = shuffle(r, ["30 minutes", "15 minutes", "45 minutes", "60 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The minute hand turns 360° in 60 minutes (6° per minute).", "180° ÷ 6°/min = 30 minutes."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 8: Bike wheel turns (WP 9)
            (r) => {
                const q = "The circumference of the front tire on Elizabeth's bike is 8 feet. How many complete turns does the front wheel make as Elizabeth rides down her 30-foot driveway?";
                const s = shuffle(r, ["3 complete turns", "4 complete turns", "2 complete turns", "5 complete turns"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["30 ft ÷ 8 ft/turn = 3 3/4 turns.", "The number of complete turns is 3."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 9: Stack of 1-cu-ft boxes (WP 10)
            (r) => {
                const q = "Chad built a stack of one-cubic-foot boxes: 3 boxes long, 2 boxes wide, and 4 boxes high. What is the volume of the stack?";
                const s = shuffle(r, ["24 cu. ft", "20 cu. ft", "18 cu. ft", "28 cu. ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = length × width × height = 3 × 2 × 4 = 24 cubic feet."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 10: Adding fractions different denominators (WP 11)
            (r) => {
                const q = "Find the sum: 3/4 + 3/5";
                const s = shuffle(r, ["1 7/20", "6/9", "1 3/20", "1 9/20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator is 20: 3/4 = 15/20 and 3/5 = 12/20.", "15/20 + 12/20 = 27/20 = 1 7/20."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 11: Subtracting mixed numbers (WP 12)
            (r) => {
                const q = "Subtract: 18 1/8 - 12 1/2";
                const s = shuffle(r, ["5 5/8", "6 3/8", "5 3/8", "6 5/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 1/2 = 12 4/8.", "Regroup 18 1/8 as 17 9/8.", "17 9/8 - 12 4/8 = 5 5/8."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 12: Multiplying three mixed numbers (WP 13)
            (r) => {
                const q = "Simplify: 3 3/4 · 2 2/3 · 1 1/10";
                const s = shuffle(r, ["11", "10", "12", "9 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fractions: 15/4 × 8/3 × 11/10.", "Reduce before multiplying: (15 × 8 × 11) / (4 × 3 × 10) = 1320 / 120 = 11."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 13: How many fourths in mixed number (WP 15)
            (r) => {
                const q = "How many fourths are in 2 1/2?";
                const s = shuffle(r, ["10", "8", "6", "12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 = 5/2 = 10/4.", "There are 10 fourths in 2 1/2."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 14: Decimal addition (WP 16)
            (r) => {
                const q = "Add: 12 + 8.75 + 6.8";
                const s = shuffle(r, ["27.55", "26.55", "27.63", "28.55"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Align decimals: 12.00 + 8.75 + 6.80 = 27.55."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 15: Squaring decimal (WP 17)
            (r) => {
                const q = "Evaluate: (1.5)²";
                const s = shuffle(r, ["2.25", "3.0", "2.5", "0.225"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.5 × 1.5 = 2.25."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 16: Mixed number divided by decimal (WP 18)
            (r) => {
                const q = "Divide: 6 2/5 ÷ 0.8 (express as a decimal or whole number)";
                const s = shuffle(r, ["8", "7.5", "8.2", "6.8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 2/5 = 6.4.", "6.4 ÷ 0.8 = 8."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 17: Estimate sum by rounding (WP 19)
            (r) => {
                const q = "Estimate the sum of 6 1/4, 4.95, and 8.21 by rounding each number to the nearest whole number before adding.";
                const s = shuffle(r, ["19", "18", "20", "21"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 1/4 rounds to 6.", "4.95 rounds to 5.", "8.21 rounds to 8.", "6 + 5 + 8 = 19."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 18: Circular tabletop area (WP 20)
            (r) => {
                const d = 60;
                const r_val = 30;
                const area = Math.round(3.14 * r_val * r_val);
                const q = "The diameter of a round tabletop is 60 inches. What is the area of the tabletop? (Use 3.14 for π.)";
                const s = shuffle(r, [area + " sq. in.", "188.4 sq. in.", (area + 50) + " sq. in.", (area - 50) + " sq. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = 60 ÷ 2 = 30 inches.", "Area = πr² = 3.14 × 30² = 3.14 × 900 = 2826 sq. in."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            },
            // Category 19: Cube surface area (WP 24c)
            (r) => {
                const e = 6;
                const sa = 6 * e * e;
                const q = "A cube has edges that are " + e + " cm long. What is the total surface area of the cube?";
                const s = shuffle(r, [sa + " cm²", (e * e * e) + " cm²", (4 * e * e) + " cm²", (sa + 12) + " cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area of one face = 6 × 6 = 36 cm².", "A cube has 6 faces: 6 × 36 = 216 cm²."], lessonNum: 95, lessonTitle: "Reducing Rates Before Multiplying" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 96: Functions • Graphing Functions
    96: (rng, qIndex) => {
        const framings = [
            // Category 0: Function table linear rule 2x - 1 (PS a, WP 12)
            (r) => {
                const x = randInt(r, 10, 16);
                const y = 2 * x - 1;
                const q = "A function has the rule y = 2x - 1. When x = " + x + ", what is the value of y?";
                const s = shuffle(r, ["" + y, "" + (y + 2), "" + (y - 2), "" + (2 * x)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Substitute " + x + " into rule: y = 2(" + x + ") - 1 = " + (2 * x) + " - 1 = " + y + "."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 1: Solution weight function (PS e)
            (r) => {
                const qts = randInt(r, 6, 12);
                const lbs = 2 * qts;
                const q = "A chemist mixed a solution that weighs 2 pounds per quart. How many pounds would " + qts + " quarts of the solution weigh?";
                const s = shuffle(r, [lbs + " pounds", (qts + 2) + " pounds", (lbs + 2) + " pounds", (qts * 4) + " pounds"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Weight = 2 lb/quart × " + qts + " quarts = " + lbs + " pounds."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 2: Product minus sum of 2.0 (WP 1)
            (r) => {
                const q = "When the sum of 2.0 and 2.0 is subtracted from the product of 2.0 and 2.0, what is the difference?";
                const s = shuffle(r, ["0", "4.0", "2.0", "8.0"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Product: 2.0 × 2.0 = 4.0.", "Sum: 2.0 + 2.0 = 4.0.", "Difference: 4.0 - 4.0 = 0."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 3: Decimal weights division (WP 2)
            (r) => {
                const q = "A 4.2-kilogram object weighs the same as how many objects that each weigh 0.42 kilogram?";
                const s = shuffle(r, ["10", "100", "1", "0.1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4.2 ÷ 0.42 = 420 ÷ 42 = 10 objects."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 4: Sum from average (WP 3)
            (r) => {
                const count = 8, avg = 12;
                const sum = count * avg;
                const q = "If the average of 8 numbers is 12, what is the sum of the 8 numbers?";
                const s = shuffle(r, ["" + sum, "" + (sum + 8), "" + (sum - 8), "" + (avg * 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = average × count = 12 × 8 = 96."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 5: Trapezoid definition (WP 4)
            (r) => {
                const q = "What is the name of a quadrilateral that has exactly one pair of parallel sides?";
                const s = shuffle(r, ["Trapezoid", "Parallelogram", "Rhombus", "Rectangle"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A trapezoid is defined as a quadrilateral with exactly one pair of parallel sides."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 6: Decimal to percent (WP 5)
            (r) => {
                const q = "Write 0.15 as a percent.";
                const s = shuffle(r, ["15%", "1.5%", "150%", "0.15%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.15 × 100% = 15%."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 7: Fraction 5/6 to percent (WP 6)
            (r) => {
                const q = "Write 5/6 as a percent.";
                const s = shuffle(r, ["83 1/3%", "80%", "85%", "83%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 × 100% = 500/6% = 250/3% = 83 1/3%."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 8: Equivalence check (WP 7)
            (r) => {
                const q = "Three of the numbers below are equivalent. Which one is NOT equivalent to the others?";
                const s = shuffle(r, ["0.1", "1", "100%", "100/100"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 = 100% = 100/100.", "0.1 is 10%, which is not equivalent to 1."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 9: Power of 11 (WP 8)
            (r) => {
                const q = "Calculate: 11³";
                const s = shuffle(r, ["1331", "121", "1311", "1441"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["11 × 11 = 121.", "121 × 11 = 1331."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 10: Fraction of 360 degrees (WP 9)
            (r) => {
                const q = "How many degrees is 5/6 of 360°?";
                const s = shuffle(r, ["300°", "270°", "320°", "240°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 × 360° = 5 × (360° ÷ 6) = 5 × 60° = 300°."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 11: Square root evaluation (WP 10)
            (r) => {
                const q = "What whole number equals √289?";
                const s = shuffle(r, ["17", "19", "13", "18"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["17 × 17 = 289, so √289 = 17."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 12: Triangular field corner turns (WP 11)
            (r) => {
                const q = "Silvester ran around a triangular field, turning at each of the three corners. What was the average number of degrees he turned at each of the three corners?";
                const s = shuffle(r, ["120°", "60°", "90°", "180°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A complete trip around any convex polygon involves a total turn of 360°.", "360° ÷ 3 corners = 120° per corner."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 13: Factor and reduce (WP 13)
            (r) => {
                const q = "Factor and reduce: (45 · 54) / 81";
                const s = shuffle(r, ["30", "27", "36", "45"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["45 = 9 × 5 and 54 = 9 × 6.", "(9 × 5 × 9 × 6) / 81 = (81 × 30) / 81 = 30."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 14: Decimal division (WP 14)
            (r) => {
                const q = "Divide: 30 ÷ 0.08";
                const s = shuffle(r, ["375", "37.5", "3750", "240"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shift decimal two places: 3000 ÷ 8 = 375."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 15: Adding three mixed numbers (WP 15)
            (r) => {
                const q = "Add: 2 1/2 + 3 1/3 + 4 1/6";
                const s = shuffle(r, ["10", "9 5/6", "10 1/6", "9 2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to common denominator 6: 2 3/6 + 3 2/6 + 4 1/6.", "Whole numbers: 2 + 3 + 4 = 9.", "Fractions: 3/6 + 2/6 + 1/6 = 6/6 = 1.", "9 + 1 = 10."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 16: Dividing mixed number percent by 100 (WP 16)
            (r) => {
                const q = "Simplify: 16 2/3 ÷ 100";
                const s = shuffle(r, ["1/6", "1/3", "1/5", "1/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["16 2/3 = 50/3.", "50/3 ÷ 100 = 50/300 = 1/6."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 17: Multiplying mixed numbers (WP 17)
            (r) => {
                const q = "Multiply: 6 · 5 1/3 · 3/8";
                const s = shuffle(r, ["12", "16", "10", "14"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 1/3 = 16/3.", "6/1 × 16/3 × 3/8 = (6 × 16 × 3) / (1 × 3 × 8) = 288 / 24 = 12."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 18: Fraction of money (WP 18)
            (r) => {
                const q = "Find 2/5 of $12.00.";
                const s = shuffle(r, ["$4.80", "$4.50", "$5.20", "$2.40"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/5 of $12.00 = $2.40.", "2 × $2.40 = $4.80."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            },
            // Category 19: Rate multiplication with unit conversion (WP 26)
            (r) => {
                const h = 4, rate = 6;
                const tot = h * rate;
                const q = "Multiply 4 hours by 6 dollars per hour using unit multipliers: (4 hours / 1) · (6 dollars / 1 hour).";
                const s = shuffle(r, ["$24", "$20", "$28", "$10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cancel hours: 4 × $6 = $24."], lessonNum: 96, lessonTitle: "Functions • Graphing Functions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

module.exports = part2;

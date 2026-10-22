// Lessons 91, 92, 93 generators for Section 10
const part1 = `
    // Lesson 91: Geometric Formulas
    91: (rng, qIndex) => {
        const framings = [
            // Category 0: Rectangle area formula (PS a)
            (r) => {
                const l = randInt(r, 7, 18);
                const w = randInt(r, 4, 12);
                const ans = l * w;
                const q = "Use the formula for the area of a rectangle (A = lw) to find the area of a rectangle with length " + l + " cm and width " + w + " cm.";
                const s = shuffle(r, [ans + " cm²", (2 * (l + w)) + " cm²", (ans + l) + " cm²", Math.max(1, ans - w) + " cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Use formula A = lw.", "A = " + l + " cm × " + w + " cm = " + ans + " cm²."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 1: Parallelogram perimeter formula (PS b)
            (r) => {
                const b = randInt(r, 8, 20);
                const side = randInt(r, 5, 14);
                const p = 2 * (b + side);
                const q = "Use the formula for the perimeter of a parallelogram (P = 2b + 2s) to find the perimeter when the base is " + b + " cm and the side is " + side + " cm.";
                const s = shuffle(r, [p + " cm", (b + side) + " cm", (b * side) + " cm", (p + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2b + 2s = 2(" + b + ") + 2(" + side + ") = " + (2 * b) + " + " + (2 * side) + " = " + p + " cm."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 2: Ratio of primes to composites (WP 1)
            (r) => {
                const list = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
                // Primes: 11, 13, 17, 19 (4). Composites: 10, 12, 14, 15, 16, 18, 20, 21 (8). Ratio 4 to 8 = 1 to 2.
                const q = "What is the ratio of prime numbers to composite numbers in this list: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21?";
                const s = shuffle(r, ["1 to 2", "1 to 3", "2 to 3", "4 to 7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Prime numbers: 11, 13, 17, 19 (4 primes).", "Composite numbers: 10, 12, 14, 15, 16, 18, 20, 21 (8 composites).", "Ratio: 4 to 8, which reduces to 1 to 2."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 3: Elapsed time sunrise to sunset (WP 2)
            (r) => {
                const riseH = 6, riseM = 15;
                const setH = 5, setM = 45;
                const q = "Sunrise was at 6:15 a.m. and sunset was at 5:45 p.m. How many hours and minutes were there from sunrise to sunset?";
                const s = shuffle(r, ["11 hours 30 minutes", "11 hours 15 minutes", "12 hours 30 minutes", "10 hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From 6:15 a.m. to 12:00 noon is 5 hours 45 minutes.", "From 12:00 noon to 5:45 p.m. is 5 hours 45 minutes.", "5 h 45 min + 5 h 45 min = 10 h 90 min = 11 hours 30 minutes."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 4: Leapers to smilers ratio (WP 3)
            (r) => {
                const ratioL = 3, ratioS = 2;
                const mult = randInt(r, 4, 9);
                const leaped = ratioL * mult;
                const smiled = ratioS * mult;
                const q = "When the good news was announced, the ratio of leapers to smilers was " + ratioL + " to " + ratioS + ". If " + leaped + " leaped for joy, how many just smiled?";
                const s = shuffle(r, ["" + smiled, "" + (smiled + mult), "" + Math.max(1, smiled - mult), "" + (leaped + ratioS)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio of leapers to smilers = " + ratioL + "/" + ratioS + ".", "Set up proportion: " + ratioL + "/" + ratioS + " = " + leaped + "/s.", "s = (" + leaped + " × " + ratioS + ") ÷ " + ratioL + " = " + smiled + "."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 5: Prism faces comparison (WP 4)
            (r) => {
                const q = "A rectangular prism has how many more faces than a triangular prism?";
                const s = shuffle(r, ["1 more face", "2 more faces", "3 more faces", "0 more faces"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A rectangular prism has 6 faces.", "A triangular prism has 5 faces.", "6 - 5 = 1 more face."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 6: Parallelogram area formula (WP 5)
            (r) => {
                const b = randInt(r, 12, 24);
                const h = randInt(r, 4, 10);
                const area = b * h;
                const q = "Use the formula for the area of a parallelogram (A = bh) to find the area when the base is " + b + " cm and the height is " + h + " cm.";
                const s = shuffle(r, [area + " cm²", (2 * (b + h)) + " cm²", (area + b) + " cm²", Math.max(1, area - h) + " cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A = bh.", "A = " + b + " cm × " + h + " cm = " + area + " cm²."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 7: Clock minute hand degrees (WP 6)
            (r) => {
                const mins = [15, 20, 30, 40, 45, 50][randInt(r, 0, 5)];
                const deg = mins * 6;
                const q = "How many degrees does the minute hand of a clock turn in " + mins + " minutes?";
                const s = shuffle(r, [deg + "°", (deg + 30) + "°", (deg - 30) + "°", (deg + 60) + "°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The minute hand turns 360° in 60 minutes, which is 6° per minute.", mins + " × 6° = " + deg + "°."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 8: Triangular pyramid properties (WP 7)
            (r) => {
                const q = "A pyramid with a triangular base (tetrahedron) has how many vertices?";
                const s = shuffle(r, ["4 vertices", "5 vertices", "6 vertices", "3 vertices"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A pyramid with a triangular base has 3 vertices on its triangular base and 1 vertex at the top apex.", "3 + 1 = 4 vertices."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 9: Parallelogram perimeter and area (WP 8)
            (r) => {
                const b = 12, sSide = 10, h = 9;
                const area = b * h;
                const q = "A parallelogram has a base of 12 in., a side of 10 in., and a vertical height of 9 in. What is the area of the parallelogram?";
                const s = shuffle(r, [area + " sq. in.", (b * sSide) + " sq. in.", (2 * (b + sSide)) + " sq. in.", (area + 12) + " sq. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area of a parallelogram = base × height = 12 in. × 9 in. = 108 sq. in."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 10: Fraction to percent (WP 9b)
            (r) => {
                const num = [3, 7, 9, 11, 13, 17][randInt(r, 0, 5)];
                const pct = num * 5;
                const q = "Write " + num + "/20 as a percent.";
                const s = shuffle(r, [pct + "%", (pct + 5) + "%", (pct - 5) + "%", (num * 10) + "%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [num + "/20 × 100% = (" + num + " × 100) ÷ 20 = " + pct + "%."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 11: Diamond bases perimeter (WP 10)
            (r) => {
                const d = [60, 65, 90][randInt(r, 0, 2)];
                const total = 4 * d;
                const q = "The distance between bases in a diamond is " + d + " feet. What is the shortest distance a player runs around all four bases to score a home run?";
                const s = shuffle(r, [total + " feet", (total - d) + " feet", (2 * d) + " feet", (total + d) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A diamond is a square with 4 equal sides.", "Distance = 4 × " + d + " ft = " + total + " feet."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 12: Multiplying mixed numbers (WP 14)
            (r) => {
                // 3 * 3/4 * 2 2/3 = 3 * 3/4 * 8/3 = 6
                const q = "Simplify: 3 · (3/4) · 2 2/3";
                const s = shuffle(r, ["6", "5 1/2", "6 1/4", "4 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert 2 2/3 to improper fraction: 8/3.", "3/1 × 3/4 × 8/3 = (3 × 3 × 8) / (1 × 4 × 3) = 72 / 12 = 6."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 13: Division of mixed number by 100 (WP 15)
            (r) => {
                // 6 2/3 ÷ 100 = 20/3 ÷ 100 = 20/300 = 1/15
                const q = "Divide: 6 2/3 ÷ 100 (express as a simplified fraction)";
                const s = shuffle(r, ["1/15", "1/12", "2/15", "1/30"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert 6 2/3 to improper fraction: 20/3.", "20/3 ÷ 100 = 20/3 × 1/100 = 20/300 = 1/15."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 14: Seeds sprouted word problem (WP 19)
            (r) => {
                const total = [200, 250, 300, 350, 400][randInt(r, 0, 4)];
                const notSprouted = total * 2 / 5;
                const sprouted = total * 3 / 5;
                const q = "If 3/5 of the " + total + " seeds sprouted, how many seeds did NOT sprout?";
                const s = shuffle(r, ["" + notSprouted, "" + sprouted, "" + (notSprouted + 20), "" + (notSprouted - 20)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If 3/5 sprouted, 1 - 3/5 = 2/5 did not sprout.", "2/5 of " + total + " = (2 × " + total + ") ÷ 5 = " + notSprouted + " seeds."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 15: Linear equation (WP 20)
            (r) => {
                // 6y = 10 -> y = 10/6 = 1 2/3
                const q = "Solve for y: 6y = 10";
                const s = shuffle(r, ["1 2/3", "1 1/3", "1 1/2", "2 1/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both sides by 6: y = 10/6.", "10/6 = 5/3 = 1 2/3."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 16: Proportion (WP 21)
            (r) => {
                // w / 20 = 12 / 15 -> 15w = 240 -> w = 16
                const q = "Solve the proportion: w/20 = 12/15";
                const s = shuffle(r, ["16", "14", "18", "15"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cross multiply: 15w = 20 × 12 = 240.", "w = 240 ÷ 15 = 16."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 17: Triangle area (WP 22)
            (r) => {
                const b = 6, h = 4;
                const area = (b * h) / 2;
                const q = "What is the area of a triangle with a base of " + b + " ft and a height of " + h + " ft?";
                const s = shuffle(r, [area + " sq. ft", (b * h) + " sq. ft", (area + 3) + " sq. ft", (area - 3) + " sq. ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) ÷ 2 = (" + b + " × " + h + ") ÷ 2 = " + (b * h) + " ÷ 2 = " + area + " sq. ft."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 18: Cube volume in cubic inches (WP 23)
            (r) => {
                const q = "A cube has edges that are 1 foot long (12 inches). What is the volume of the cube in cubic inches?";
                const s = shuffle(r, ["1728 cu. in.", "144 cu. in.", "36 cu. in.", "864 cu. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = edge³ = 12 in. × 12 in. × 12 in. = 1728 cubic inches."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            },
            // Category 19: Square root between consecutive integers (WP 26)
            (r) => {
                const val = [60, 75, 85, 120, 135, 150][randInt(r, 0, 5)];
                const low = Math.floor(Math.sqrt(val));
                const high = low + 1;
                const q = "On a number line, √" + val + " is between which two consecutive whole numbers?";
                const s = shuffle(r, [low + " and " + high, (low - 1) + " and " + low, high + " and " + (high + 1), (low - 2) + " and " + (low - 1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [low + "² = " + (low * low) + " and " + high + "² = " + (high * high) + ".", "Since " + (low * low) + " < " + val + " < " + (high * high) + ", √" + val + " is between " + low + " and " + high + "."], lessonNum: 91, lessonTitle: "Geometric Formulas" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 92: Expanded Notation with Exponents • Order of Operations with Exponents
    92: (rng, qIndex) => {
        const framings = [
            // Category 0: Probability/chance of rain (WP 1)
            (r) => {
                const pct = [30, 35, 40, 45][randInt(r, 0, 3)];
                const noRain = 100 - pct;
                const q = "The weather forecast stated that the chance of rain for Wednesday is " + pct + "%. Does this forecast mean that it is more likely to rain or not to rain, and why?";
                const s = shuffle(r, [
                    "More likely not to rain, because " + noRain + "% > " + pct + "%",
                    "More likely to rain, because " + pct + "% is a positive probability",
                    "Equally likely to rain or not to rain",
                    "It will definitely not rain"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The chance of not raining is 100% - " + pct + "% = " + noRain + "%.", "Since " + noRain + "% is greater than " + pct + "%, it is more likely not to rain."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 1: Shape cards probability (WP 2)
            (r) => {
                const total = [24, 32, 36, 40, 48][randInt(r, 0, 4)];
                const q = "A set of " + total + " shape cards contains an equal number of cards with hexagons, squares, circles, and triangles. What is the probability of drawing a square from this set of cards as a fraction and as a decimal?";
                const s = shuffle(r, ["1/4 and 0.25", "1/2 and 0.50", "1/3 and 0.33", "1/8 and 0.125"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["There are 4 equally likely shapes.", "Probability = 1/4 = 0.25."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 2: Average of three numbers given sum (WP 3)
            (r) => {
                const avg = randInt(r, 36, 64);
                const sum = avg * 3;
                const q = "If the sum of three numbers is " + sum + ", what is the average of the three numbers?";
                const s = shuffle(r, ["" + avg, "" + (avg + 3), "" + (avg - 3), "" + (avg + 6)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Average = sum ÷ count = " + sum + " ÷ 3 = " + avg + "."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 3: Quadrilateral polygon statement (WP 4)
            (r) => {
                const q = "Evaluate the geometric statement: 'All quadrilaterals are polygons.' True or false?";
                const s = shuffle(r, [
                    "True, because all quadrilaterals are closed plane figures made of straight line segments",
                    "False, because some quadrilaterals have curved sides",
                    "False, because polygons must have at least five sides",
                    "True only for squares and rectangles"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A polygon is a closed plane figure formed by three or more straight line segments.", "A quadrilateral has 4 straight sides, so every quadrilateral is a polygon (True)."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 4: Square root of 3-digit perfect square (WP 5)
            (r) => {
                const base = [14, 15, 16, 17, 18, 19, 21][randInt(r, 0, 6)];
                const sq = base * base;
                const q = "Evaluate the principal square root: √" + sq;
                const s = shuffle(r, ["" + base, "" + (base + 2), "" + (base - 2), "" + (base + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [base + " × " + base + " = " + sq + ", so √" + sq + " = " + base + "."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 5: Order of operations with exponents (WP 6)
            (r) => {
                // 2 · 3² - √9 + (3 - 1)³ = 2·9 - 3 + 8 = 18 - 3 + 8 = 23
                const q = "Simplify: 2 · 3² - √9 + (3 - 1)³";
                const s = shuffle(r, ["23", "21", "25", "19"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Evaluate powers and roots: 3² = 9, √9 = 3, (3 - 1)³ = 2³ = 8.", "Multiply: 2 · 9 = 18.", "Add and subtract from left to right: 18 - 3 + 8 = 15 + 8 = 23."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 6: Perimeter of rectangle formula (WP 7)
            (r) => {
                const l = randInt(r, 10, 18);
                const w = randInt(r, 4, 9);
                const p = 2 * (l + w);
                const q = "Write the formula for the perimeter of a rectangle (P = 2l + 2w). Then substitute " + l + " in. for the length and " + w + " in. for the width. What is the perimeter?";
                const s = shuffle(r, [p + " in.", (l * w) + " in.", (l + w) + " in.", (p + 4) + " in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2l + 2w = 2(" + l + ") + 2(" + w + ") = " + (2 * l) + " + " + (2 * w) + " = " + p + " in."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 7: Arranging signed numbers and decimals (WP 8)
            (r) => {
                const q = "Arrange these numbers in order from least to greatest: 1, 0, 0.1, -1";
                const s = shuffle(r, ["-1, 0, 0.1, 1", "-1, 0.1, 0, 1", "0, -1, 0.1, 1", "0.1, 0, -1, 1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Negative numbers are less than 0: -1 < 0.", "Between 0 and 1: 0 < 0.1 < 1.", "Order: -1, 0, 0.1, 1."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 8: Absent members fraction (WP 9)
            (r) => {
                const total = [24, 30, 36, 42][randInt(r, 0, 3)];
                const absent = total / 6;
                const present = total * 5 / 6;
                const q = "If 5/6 of the " + total + " members were present at the meeting, how many members were absent?";
                const s = shuffle(r, ["" + absent, "" + present, "" + (absent + 2), "" + Math.max(1, absent - 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If 5/6 were present, 1 - 5/6 = 1/6 were absent.", "1/6 of " + total + " = " + total + " ÷ 6 = " + absent + " members."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 9: Reduce before multiplying (WP 10)
            (r) => {
                // (24 · 36) / 48 = 18
                const q = "Reduce before multiplying: (24 · 36) / 48";
                const s = shuffle(r, ["18", "16", "24", "12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide 24 and 48 by 24: 24/48 = 1/2.", "Then 36 ÷ 2 = 18."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 10: Adding mixed numbers (WP 12)
            (r) => {
                const w1 = randInt(r, 10, 15);
                const w2 = randInt(r, 12, 18);
                const sum = w1 + w2 + 1;
                const q = "Find the sum: " + w1 + " 1/6 + " + w2 + " 5/6";
                const s = shuffle(r, ["" + sum, "" + (sum - 1), sum + " 1/6", "" + (sum + 1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add whole numbers: " + w1 + " + " + w2 + " = " + (w1 + w2) + ".", "Add fractions: 1/6 + 5/6 = 6/6 = 1.", (w1 + w2) + " + 1 = " + sum + "."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 11: Decimal subtraction from 100 (WP 13)
            (r) => {
                const sub = randInt(r, 6, 14) + 0.9;
                const ans = (100 - sub).toFixed(1);
                const q = "Subtract: 100 - " + sub.toFixed(1);
                const s = shuffle(r, [ans, (100 - sub + 1).toFixed(1), (100 - sub - 1).toFixed(1), (90 - sub).toFixed(1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Align decimal points: 100.0 - " + sub.toFixed(1) + " = " + ans + "."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 12: Proportion solving (WP 15)
            (r) => {
                // 5/8 = w/48 -> w = 30
                const q = "Solve the proportion: 5/8 = w/48";
                const s = shuffle(r, ["30", "25", "35", "28"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 × 6 = 48, so multiply numerator by 6: 5 × 6 = 30.", "w = 30."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 13: Money multiplication by quarter (WP 16)
            (r) => {
                const q = "Calculate: 0.25 × $4.60";
                const s = shuffle(r, ["$1.15", "$1.25", "$1.05", "$1.35"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.25 = 1/4.", "$4.60 ÷ 4 = $1.15."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 14: Circular pan base area (WP 17)
            (r) => {
                const d = 6;
                const r_val = 3;
                const area = Math.round(3.14 * r_val * r_val);
                const q = "The diameter of a circular saucepan is 6 inches. What is the area of the circular base of the pan to the nearest square inch? (Use 3.14 for π.)";
                const s = shuffle(r, [area + " sq. in.", "19 sq. in.", "36 sq. in.", "24 sq. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = diameter ÷ 2 = 6 ÷ 2 = 3 inches.", "Area = πr² = 3.14 × 3² = 3.14 × 9 = 28.26 ≈ 28 sq. in."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 15: Convert mixed number to decimal and subtract (WP 18)
            (r) => {
                const q = "Write 3 3/4 as a decimal number and subtract that number from 7.4.";
                const s = shuffle(r, ["3.65", "3.75", "3.55", "4.15"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 3/4 = 3.75.", "7.40 - 3.75 = 3.65."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 16: Vowels percent of first 10 letters (WP 19)
            (r) => {
                const q = "What percent of the first ten letters of the alphabet (A, B, C, D, E, F, G, H, I, J) are vowels?";
                const s = shuffle(r, ["30%", "20%", "40%", "25%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The vowels in the first ten letters are A, E, and I (3 vowels).", "3/10 = 30%."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 17: Bike turns compass direction (WP 20)
            (r) => {
                const q = "Bobby rode his bike north. At Grand Avenue he turned left 90°. When he reached Arden Road, he turned left 90°. In what direction was Bobby riding on Arden Road?";
                const s = shuffle(r, ["South", "West", "East", "North"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Starting facing North, a 90° left turn faces West.", "From West, another 90° left turn faces South."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 18: Proportion statement (WP 22)
            (r) => {
                const q = "Write and solve a proportion for this statement: 16 is to 10 as what number is to 25?";
                const s = shuffle(r, ["40", "35", "50", "20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Set up proportion: 16/10 = n/25.", "10n = 16 × 25 = 400.", "n = 400 ÷ 10 = 40."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            },
            // Category 19: Triangle area (WP 23)
            (r) => {
                const b = 8, h = 6;
                const area = (b * h) / 2;
                const q = "What is the area of a triangle with a base of " + b + " cm, a vertical height of " + h + " cm, and a slant side of 11 cm?";
                const s = shuffle(r, [area + " cm²", (b * h) + " cm²", (area + 4) + " cm²", (area - 4) + " cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) ÷ 2 = (" + b + " × " + h + ") ÷ 2 = " + (b * h) + " ÷ 2 = " + area + " cm²."], lessonNum: 92, lessonTitle: "Expanded Notation with Exponents • Order of Operations with Exponents" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 93: Classifying Triangles
    93: (rng, qIndex) => {
        const framings = [
            // Category 0: Equilateral triangle perimeter (PS a)
            (r) => {
                const sSide = randInt(r, 12, 25);
                const p = 3 * sSide;
                const q = "One side of an equilateral triangle measures " + sSide + " cm. What is the perimeter of the triangle?";
                const s = shuffle(r, [p + " cm", (2 * sSide) + " cm", (4 * sSide) + " cm", (p + 3) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An equilateral triangle has 3 equal sides.", "Perimeter = 3 × " + sSide + " cm = " + p + " cm."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 1: Equilateral acute statement (PS b)
            (r) => {
                const q = "Evaluate this geometric statement: 'An equilateral triangle is also an acute triangle.' True or false?";
                const s = shuffle(r, [
                    "True, because each angle of an equilateral triangle measures 60°, and all three are acute",
                    "False, because equilateral triangles have a right angle",
                    "False, because equilateral triangles are obtuse",
                    "True only if the side length is less than 10 cm"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["All three interior angles of an equilateral triangle are 60°.", "Since 60° is less than 90°, all angles are acute (True)."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 2: Acute equilateral statement (PS c)
            (r) => {
                const q = "Evaluate this geometric statement: 'All acute triangles are equilateral triangles.' True or false?";
                const s = shuffle(r, [
                    "False, because an acute triangle can have angles like 70°, 70°, and 40° without having 3 equal sides",
                    "True, because every triangle with acute angles must have 3 equal sides",
                    "True, by the definition of acute triangles",
                    "False, because acute triangles always contain an obtuse angle"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An acute triangle merely has three acute angles.", "It does not require all three sides to be equal, so not all acute triangles are equilateral (False)."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 3: Triangle classification from perimeter (PS d)
            (r) => {
                const q = "Two sides of a triangle measure 3 inches and 4 inches. If the perimeter is 10 inches, what type of triangle is it classified by its sides?";
                const s = shuffle(r, ["Isosceles triangle", "Equilateral triangle", "Scalene triangle", "Right triangle"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The third side is 10 - (3 + 4) = 10 - 7 = 3 inches.", "Since two sides are equal (3 in. and 3 in.), it is an isosceles triangle."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 4: Ratio box rectangular lot (WP 1)
            (r) => {
                const rL = 5, rW = 2;
                const mult = randInt(r, 20, 40);
                const w = rW * mult;
                const l = rL * mult;
                const q = "The ratio of the length to the width of a rectangular lot was " + rL + " to " + rW + ". If the lot was " + w + " ft wide, how long was the lot?";
                const s = shuffle(r, [l + " ft", (l + 25) + " ft", (l - 25) + " ft", (w + 50) + " ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Length / Width = " + rL + " / " + rW + ".", "Length = (" + rL + " × " + w + ") ÷ " + rW + " = " + l + " ft."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 5: Guessing probability (WP 2)
            (r) => {
                const q = "Mitch does not know the correct answer to two multiple-choice questions. Each question has choices A, B, C, and D. If Mitch just guesses, what is the probability that Mitch will guess both answers correctly?";
                const s = shuffle(r, ["1/16", "1/8", "1/4", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Probability for question 1 = 1/4.", "Probability for question 2 = 1/4.", "P(both correct) = 1/4 × 1/4 = 1/16."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 6: Average of four numbers (WP 3)
            (r) => {
                const avg = randInt(r, 28, 48);
                const sum = avg * 4;
                const q = "If the sum of four numbers is " + sum + ", what is the average of the four numbers?";
                const s = shuffle(r, ["" + avg, "" + (avg + 4), "" + (avg - 4), "" + (avg + 8)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Average = sum ÷ count = " + sum + " ÷ 4 = " + avg + "."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 7: 25ths to decimal and percent (WP 5)
            (r) => {
                const n = [7, 9, 11, 13, 17][randInt(r, 0, 4)];
                const dec = (n / 25).toFixed(2);
                const pct = (n * 4) + "%";
                const q = "Write " + n + "/25 as a decimal number and as a percent.";
                const s = shuffle(r, [dec + " and " + pct, (n / 25).toFixed(1) + " and " + (n * 2) + "%", dec + " and " + (n * 2) + "%", (n / 50).toFixed(2) + " and " + pct]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + "/25 = " + (n * 4) + "/100 = " + dec + " = " + pct + "."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 8: Mixed number 1/5 to decimal and add (WP 6)
            (r) => {
                const w = randInt(r, 2, 6);
                const dec = w + 0.2;
                const sum = (dec + 3.5).toFixed(1);
                const q = "Write " + w + " 1/5 as a decimal number and add it to 3.5. What is the sum?";
                const s = shuffle(r, [sum, (parseFloat(sum) + 1).toFixed(1), (parseFloat(sum) - 1).toFixed(1), (w + 3.5).toFixed(1)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [w + " 1/5 = " + dec.toFixed(1) + ".", dec.toFixed(1) + " + 3.5 = " + sum + "."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 9: Percent of number (WP 7)
            (r) => {
                const q = "What number is 45% of 80?";
                const s = shuffle(r, ["36", "32", "40", "45"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["45% = 0.45.", "0.45 × 80 = 36."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 10: Cube of decimal (WP 8)
            (r) => {
                const q = "Calculate: (0.3)³";
                const s = shuffle(r, ["0.027", "0.27", "0.09", "0.009"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.3 × 0.3 = 0.09.", "0.09 × 0.3 = 0.027."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 11: Product of square roots (WP 10)
            (r) => {
                const q = "Simplify: √9 · √100";
                const s = shuffle(r, ["30", "300", "90", "13"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["√9 = 3.", "√100 = 10.", "3 × 10 = 30."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 12: Voting fraction (WP 11)
            (r) => {
                const q = "Twenty of the two dozen members voted yes. What fraction of the members voted yes in simplest form?";
                const s = shuffle(r, ["5/6", "4/5", "2/3", "5/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Two dozen = 24 members.", "Fraction = 20/24, which simplifies to 5/6."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 13: Ratio of no to yes votes (WP 12)
            (r) => {
                const q = "If 20 of the 24 members voted yes and the rest voted no, what was the ratio of 'no' votes to 'yes' votes in simplest form?";
                const s = shuffle(r, ["1 to 5", "1 to 6", "4 to 20", "5 to 1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["No votes = 24 - 20 = 4.", "Ratio of no to yes = 4 to 20, which reduces to 1 to 5."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 14: Triangle sides definition (WP 15)
            (r) => {
                const q = "In what type of triangle are all three sides the same length?";
                const s = shuffle(r, ["Equilateral triangle", "Isosceles triangle", "Scalene triangle", "Right triangle"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An equilateral triangle has all three sides of equal length."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 15: Fraction of 100 as mixed number (WP 16)
            (r) => {
                const q = "What mixed number is 3/8 of 100?";
                const s = shuffle(r, ["37 1/2", "37 1/4", "38 1/2", "36 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/8 × 100 = 300/8.", "300 ÷ 8 = 37 with remainder 4/8 = 37 1/2."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 16: Order of operations with exponents (WP 17)
            (r) => {
                // 10 + 6² ÷ 3² - √9 · 2 = 10 + 36 ÷ 9 - 3 · 2 = 10 + 4 - 6 = 8
                const q = "Simplify: 10 + 6² ÷ 3² - √9 · 2";
                const s = shuffle(r, ["8", "12", "6", "14"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6² = 36, 3² = 9, √9 = 3.", "36 ÷ 9 = 4 and 3 · 2 = 6.", "10 + 4 - 6 = 14 - 6 = 8."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 17: Triangular prism faces (WP 18)
            (r) => {
                const q = "A triangular prism has how many faces?";
                const s = shuffle(r, ["5 faces", "4 faces", "6 faces", "8 faces"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A triangular prism has 2 triangular bases and 3 rectangular sides.", "2 + 3 = 5 faces."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 18: Gallons to quarts (WP 19)
            (r) => {
                const g = randInt(r, 2, 5);
                const qts = g * 4 + 2;
                const q = "How many quarts of milk is " + g + " 1/2 gallons of milk?";
                const s = shuffle(r, [qts + " quarts", (qts + 2) + " quarts", (qts - 2) + " quarts", (g * 4) + " quarts"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 gallon = 4 quarts.", g + " 1/2 gallons = " + g + ".5 × 4 = " + qts + " quarts."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            },
            // Category 19: Decimal equation (WP 22)
            (r) => {
                const n = randInt(r, 12, 22);
                const cost = (0.08 * n).toFixed(2);
                const q = "Solve for n: 0.08n = $" + cost;
                const s = shuffle(r, ["" + n, "" + (n + 2), "" + (n - 2), "" + (n + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both sides by 0.08: n = " + cost + " ÷ 0.08.", "n = " + n + "."], lessonNum: 93, lessonTitle: "Classifying Triangles" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

module.exports = part1;

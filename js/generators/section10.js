import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {

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

    // Lesson 97: Transversals
    97: (rng, qIndex) => {
        const framings = [
            // Category 0: Transversal definition (PS a)
            (r) => {
                const q = "In geometry, what is the term for a line that intersects two or more other lines?";
                const s = shuffle(r, ["Transversal", "Parallel line", "Perpendicular line", "Ray"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A transversal is a line that intersects two or more other lines in a plane."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 1: Alternate interior angles concept (PS b)
            (r) => {
                const q = "When two parallel lines are cut by a transversal, which statement correctly describes alternate interior angles?";
                const s = shuffle(r, [
                    "They lie on opposite sides of the transversal between the parallel lines and have equal measures",
                    "They lie on the same side of the transversal and always sum to 90°",
                    "They are outside the parallel lines on opposite sides",
                    "They are adjacent angles that form a linear pair"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Alternate interior angles lie between the parallel lines on opposite sides of the transversal and are congruent (equal in measure)."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 2: Transversal angle calculation (PS e)
            (r) => {
                const a1 = 105;
                const acute = 75;
                const q = "Two parallel lines are intersected by a transversal. If one obtuse angle measures 105°, what is the measure of each acute angle?";
                const s = shuffle(r, ["75°", "85°", "65°", "105°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Consecutive interior/supplementary angles along a straight line sum to 180°.", "180° - 105° = 75°."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 3: Quarter-pound hamburgers from beef (WP 1)
            (r) => {
                const q = "How many quarter-pound hamburgers can be made from 100 pounds of ground beef?";
                const s = shuffle(r, ["400 hamburgers", "350 hamburgers", "450 hamburgers", "25 hamburgers"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each pound makes 4 quarter-pound hamburgers.", "100 × 4 = 400 hamburgers."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 4: Fahrenheit midpoint (WP 2)
            (r) => {
                const q = "On the Fahrenheit scale water freezes at 32°F and boils at 212°F. What temperature is halfway between the freezing and boiling temperatures of water?";
                const s = shuffle(r, ["122°F", "120°F", "100°F", "112°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Halfway temperature = (32°F + 212°F) ÷ 2 = 244°F ÷ 2 = 122°F."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 5: Celsius to Fahrenheit function table (WP 3)
            (r) => {
                const q = "Using the temperature conversion formula F = 1.8C + 32, what is the Fahrenheit temperature when the Celsius temperature is 30°C?";
                const s = shuffle(r, ["86°F", "76°F", "96°F", "62°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["F = 1.8(30) + 32.", "1.8 × 30 = 54.", "54 + 32 = 86°F."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 6: Compare 5/8 and 0.675 (WP 4)
            (r) => {
                const q = "Compare the two values using <, >, or =: 5/8 ○ 0.675";
                const s = shuffle(r, ["<", ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert 5/8 to a decimal: 5 ÷ 8 = 0.625.", "Since 0.625 < 0.675, the correct comparison symbol is <."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 7: 2 1/4 to percent (WP 5)
            (r) => {
                const q = "Write 2 1/4 as a percent.";
                const s = shuffle(r, ["225%", "214%", "250%", "220%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/4 = 9/4.", "9/4 × 100% = 900/4% = 225%."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 8: 1 2/5 to percent (WP 6)
            (r) => {
                const q = "Write 1 2/5 as a percent.";
                const s = shuffle(r, ["140%", "125%", "145%", "120%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 2/5 = 7/5.", "7/5 × 100% = 700/5% = 140%."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 9: 0.7 to percent (WP 7)
            (r) => {
                const q = "Write 0.7 as a percent.";
                const s = shuffle(r, ["70%", "7%", "0.7%", "700%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.7 × 100% = 70%."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 10: 7/8 to percent (WP 8)
            (r) => {
                const q = "Write 7/8 as a percent.";
                const s = shuffle(r, ["87 1/2%", "87%", "85 1/2%", "78%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7/8 × 100% = 700/8% = 175/2% = 87 1/2%."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 11: Prime factorization of 320 (WP 9)
            (r) => {
                const q = "Write the prime factorization of 320 using exponents.";
                const s = shuffle(r, ["2⁶ · 5", "2⁵ · 5", "2⁶ · 3", "2⁷ · 5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["320 = 32 × 10 = 2⁵ × (2 × 5) = 2⁶ × 5."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 12: Minute hand degrees in 1 minute (WP 10)
            (r) => {
                const q = "In one minute the second hand of a clock turns 360°. How many degrees does the minute hand of a clock turn in one minute?";
                const s = shuffle(r, ["6°", "5°", "10°", "1°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The minute hand turns 360° in 60 minutes.", "360° ÷ 60 = 6° in one minute."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 13: Parallelogram park skateboard turns (WP 11)
            (r) => {
                const q = "Jason rode his skateboard around Parallelogram Park. If he made four turns on each complete trip around the park, what was the average number of degrees in each turn?";
                const s = shuffle(r, ["90°", "80°", "100°", "60°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of exterior turns for any closed polygon is 360°.", "360° ÷ 4 turns = 90° per turn."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 14: Mixed number addition (WP 12)
            (r) => {
                const q = "Find the sum: 6 3/8 + 5 3/4";
                const s = shuffle(r, ["12 1/8", "11 6/12", "11 7/8", "12 3/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 3/4 = 5 6/8.", "6 3/8 + 5 6/8 = 11 9/8 = 12 1/8."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 15: Mixed number subtraction (WP 13)
            (r) => {
                const q = "Subtract: 6 1/3 - 2 1/2";
                const s = shuffle(r, ["3 5/6", "4 1/6", "3 1/6", "4 5/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator is 6: 6 2/6 - 2 3/6.", "Regroup: 5 8/6 - 2 3/6 = 3 5/6."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 16: Fraction division by 100 (WP 14)
            (r) => {
                const q = "Divide: 2 1/2 ÷ 100 (express as a simplified fraction)";
                const s = shuffle(r, ["1/40", "1/25", "1/50", "1/20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 = 5/2.", "5/2 ÷ 100 = 5/200 = 1/40."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 17: Percent failed test (WP 19)
            (r) => {
                const q = "If 80% of the 30 students passed the test, how many students did NOT pass?";
                const s = shuffle(r, ["6 students", "24 students", "8 students", "5 students"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Percent who did not pass = 100% - 80% = 20%.", "20% of 30 = 0.20 × 30 = 6 students."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 18: Triangle unknown angle equation (WP 22)
            (r) => {
                const q = "Find the unknown angle measure a: a + 60° + 70° = 180°";
                const s = shuffle(r, ["50°", "60°", "40°", "70°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["60° + 70° = 130°.", "a = 180° - 130° = 50°."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 19: Square diagonal triangle area (WP 24)
            (r) => {
                const q = "The perimeter of a square is 48 inches. A diagonal divides the square into two congruent triangles. What is the area of one of the triangles?";
                const s = shuffle(r, ["72 sq. in.", "144 sq. in.", "36 sq. in.", "48 sq. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side of square = 48 ÷ 4 = 12 inches.", "Total area of square = 12 × 12 = 144 sq. in.", "Area of one triangle = 144 ÷ 2 = 72 sq. in."], lessonNum: 97, lessonTitle: "Transversals" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 98: Sum of the Angle Measures of Triangles and
    98: (rng, qIndex) => {
        const framings = [
            // Category 0: Sum of triangle angles (PS a)
            (r) => {
                const q = "What is the sum of the measures of the three interior angles of any triangle?";
                const s = shuffle(r, ["180°", "360°", "90°", "270°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of the interior angle measures of any triangle is always 180°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 1: Sum of quadrilateral angles (PS c)
            (r) => {
                const q = "What is the sum of the measures of the four interior angles of any quadrilateral?";
                const s = shuffle(r, ["360°", "180°", "270°", "540°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A quadrilateral can be divided into two triangles.", "2 × 180° = 360°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 2: Third angle of triangle (PS d)
            (r) => {
                const q = "Two angles of triangle PQR measure 30° and 75°. What is the measure of the third angle?";
                const s = shuffle(r, ["75°", "65°", "85°", "70°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum of angles = 180°.", "30° + 75° = 105°.", "180° - 105° = 75°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 3: Regular quadrilateral interior angle (PS e)
            (r) => {
                const q = "What is the measure of each interior angle of a regular quadrilateral (a square)?";
                const s = shuffle(r, ["90°", "60°", "120°", "100°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A regular quadrilateral has 4 equal angles summing to 360°.", "360° ÷ 4 = 90°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 4: 5-turn park average angle (PS f)
            (r) => {
                const q = "Elizabeth made five left turns as she ran once around the park. What was the average number of degrees in each turn?";
                const s = shuffle(r, ["72°", "60°", "90°", "75°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Running once around a park completes a full 360° rotation.", "360° ÷ 5 turns = 72° per turn."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 5: Sum divided by product of fractions (WP 1)
            (r) => {
                const q = "When the sum of 1/2 and 1/4 is divided by the product of 1/2 and 1/4, what is the quotient?";
                const s = shuffle(r, ["6", "4", "8", "3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum: 1/2 + 1/4 = 2/4 + 1/4 = 3/4.", "Product: 1/2 × 1/4 = 1/8.", "Quotient: (3/4) ÷ (1/8) = 3/4 × 8/1 = 24/4 = 6."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 6: Feet to inches (WP 2)
            (r) => {
                const q = "Jenny is 5 1/2 feet tall. How many inches tall is Jenny?";
                const s = shuffle(r, ["66 inches", "60 inches", "72 inches", "64 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 foot = 12 inches.", "5 1/2 feet = 5.5 × 12 = 66 inches."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 7: Runners finished fraction (WP 3)
            (r) => {
                const q = "If 4/5 of the 200 runners finished the race, how many runners did NOT finish the race?";
                const s = shuffle(r, ["40 runners", "160 runners", "50 runners", "30 runners"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fraction not finishing = 1 - 4/5 = 1/5.", "1/5 of 200 = 200 ÷ 5 = 40 runners."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 8: Alternate interior angles measure (WP 4)
            (r) => {
                const q = "Lines p and q are parallel and intersected by a transversal. If ∠2 measures 85°, what is the measure of its alternate interior angle?";
                const s = shuffle(r, ["85°", "95°", "75°", "105°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Alternate interior angles formed by parallel lines and a transversal are equal in measure.", "Therefore, the alternate interior angle also measures 85°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 9: Earth circumference expanded notation (WP 5)
            (r) => {
                const q = "The circumference of the earth is about 25,000 miles. Write that distance in expanded notation using exponents.";
                const s = shuffle(r, [
                    "(2 × 10⁴) + (5 × 10³)",
                    "(2 × 10⁵) + (5 × 10⁴)",
                    "(25 × 10³)",
                    "(2 × 10³) + (5 × 10²)"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 is in the ten thousands place: 2 × 10⁴.", "5 is in the thousands place: 5 × 10³.", "(2 × 10⁴) + (5 × 10³)."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 10: Bicycle wheel circumference model (WP 7)
            (r) => {
                const q = "Which of these bicycle wheel parts is the best physical model of the circumference of the wheel?";
                const s = shuffle(r, ["Tire", "Spoke", "Axle", "Hub"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The circumference is the outer boundary/perimeter of a circle, which corresponds to the tire."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 11: Fibonacci sequence next term (WP 8)
            (r) => {
                const q = "In the sequence 1, 1, 2, 3, 5, 8, 13, ..., each term equals the sum of the two previous terms. What is the next term in this sequence?";
                const s = shuffle(r, ["21", "20", "19", "24"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the last two terms: 8 + 13 = 21."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 12: Probability of no rain (WP 9)
            (r) => {
                const q = "If there is a 20% chance of rain today, what is the probability that it will NOT rain?";
                const s = shuffle(r, ["80%", "20%", "75%", "85%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["100% - 20% = 80%."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 13: 1 1/3 to percent (WP 10)
            (r) => {
                const q = "Write 1 1/3 as a percent.";
                const s = shuffle(r, ["133 1/3%", "130%", "133%", "125%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 1/3 = 4/3.", "4/3 × 100% = 400/3% = 133 1/3%."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 14: Decimal unknown equation (WP 11)
            (r) => {
                const q = "Solve for w: 0.08w = $0.60";
                const s = shuffle(r, ["$7.50", "$7.20", "$8.00", "$6.50"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both sides by 0.08: w = 0.60 ÷ 0.08 = 60 ÷ 8 = $7.50."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 15: Mixed number plus decimal (WP 15)
            (r) => {
                const q = "Add: 6 1/2 + 4.95 (express your answer as a decimal)";
                const s = shuffle(r, ["11.45", "11.25", "10.95", "11.55"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 1/2 = 6.5.", "6.50 + 4.95 = 11.45."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 16: Mixed number minus decimal as fraction (WP 16)
            (r) => {
                const q = "Subtract: 2 1/6 - 1.5 (write the answer as a simplified fraction)";
                const s = shuffle(r, ["2/3", "1/3", "5/6", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.5 = 1 1/2 = 1 3/6.", "2 1/6 - 1 3/6 = 1 7/6 - 1 3/6 = 4/6 = 2/3."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 17: Inches as fraction of a foot (WP 18)
            (r) => {
                const q = "What fraction of a foot is 3 inches in simplest form?";
                const s = shuffle(r, ["1/4", "1/3", "1/6", "3/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 foot = 12 inches.", "3/12 simplifies to 1/4."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 18: Centimeters as percent of a meter (WP 19)
            (r) => {
                const q = "What percent of a meter is 3 centimeters?";
                const s = shuffle(r, ["3%", "30%", "0.3%", "33 1/3%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 meter = 100 centimeters.", "3/100 = 3%."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 19: Triangle exterior angle (WP 24b)
            (r) => {
                const q = "In triangle ABC, ∠A measures 40° and ∠B measures 110°. What is the measure of the exterior angle at vertex C?";
                const s = shuffle(r, ["150°", "140°", "30°", "130°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An exterior angle of a triangle equals the sum of its two remote interior angles.", "40° + 110° = 150°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 99: Fraction-Decimal-Percent Equivalents
    99: (rng, qIndex) => {
        const framings = [
            // Category 0: Ribbon cutting (WP 1)
            (r) => {
                const q = "A foot-long ribbon (12 inches) can be cut into how many 1 1/2-inch lengths?";
                const s = shuffle(r, ["8 lengths", "6 lengths", "9 lengths", "7 lengths"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 ÷ 1 1/2 = 12 ÷ 3/2 = 12 × 2/3 = 24/3 = 8 lengths."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 1: Can of beans solid (WP 2)
            (r) => {
                const q = "A can of beans is the shape of what geometric solid?";
                const s = shuffle(r, ["Cylinder", "Cone", "Sphere", "Rectangular prism"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A standard food can with two circular bases and a curved surface is a cylinder."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 2: Voting did not vote fraction (WP 3)
            (r) => {
                const q = "If 3/8 of the group voted yes and 3/8 voted no, what fraction of the group did not vote in simplest form?";
                const s = shuffle(r, ["1/4", "1/8", "3/8", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Voted = 3/8 + 3/8 = 6/8.", "Did not vote = 1 - 6/8 = 2/8 = 1/4."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 3: Months as fraction and percent of year (WP 4)
            (r) => {
                const q = "Nine months is what fraction and percent of a year?";
                const s = shuffle(r, ["3/4 and 75%", "3/4 and 70%", "2/3 and 66 2/3%", "4/5 and 80%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["9/12 simplifies to 3/4.", "3/4 = 75%."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 4: Compass counterclockwise turn (WP 6)
            (r) => {
                const q = "Tom was facing east. Then he turned counterclockwise 270°. After the turn, what direction was Tom facing?";
                const s = shuffle(r, ["South", "North", "West", "East"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A 90° CCW turn faces North.", "A 180° CCW turn faces West.", "A 270° CCW turn faces South."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 5: Pie percent left (WP 7)
            (r) => {
                const q = "If 1/5 of the pie was eaten, what percent of the pie was left?";
                const s = shuffle(r, ["80%", "20%", "75%", "85%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fraction left = 1 - 1/5 = 4/5.", "4/5 × 100% = 80%."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 6: Percent form of 1/7 (WP 8)
            (r) => {
                const q = "Write the percent form of 1/7.";
                const s = shuffle(r, ["14 2/7%", "14%", "15 2/7%", "14 1/7%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/7 × 100% = 100/7% = 14 2/7%."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 7: Mixed number minus decimal (WP 9)
            (r) => {
                const q = "Calculate: 6 3/4 - 6.2 (express your answer as a decimal)";
                const s = shuffle(r, ["0.55", "0.5", "0.65", "0.45"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 3/4 = 6.75.", "6.75 - 6.20 = 0.55."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 8: Product with factor of zero (WP 10)
            (r) => {
                const q = "Find the product: 5 · 4 · 3 · 2 · 1 · 0";
                const s = shuffle(r, ["0", "120", "24", "1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any real number multiplied by zero equals zero."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 9: Decimal division (WP 11)
            (r) => {
                const q = "Divide: 4.5 ÷ 0.18";
                const s = shuffle(r, ["25", "2.5", "250", "0.25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply dividend and divisor by 100: 450 ÷ 18 = 25."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 10: Square root of 1600 (WP 12)
            (r) => {
                const q = "Evaluate: √1600";
                const s = shuffle(r, ["40", "400", "4", "80"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["40 × 40 = 1600, so √1600 = 40."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 11: Order of operations with exponents and root (WP 13)
            (r) => {
                const q = "Simplify: 2³ + 5² - √25 · (2 · 3)";
                const s = shuffle(r, ["3", "8", "13", "0"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2³ = 8, 5² = 25, √25 = 5, (2 · 3) = 6.", "Multiply: 5 · 6 = 30.", "8 + 25 - 30 = 33 - 30 = 3."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 12: Proportion (WP 14)
            (r) => {
                const q = "Solve the proportion: 15/20 = 24/n";
                const s = shuffle(r, ["32", "30", "36", "28"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["15/20 reduces to 3/4.", "3/4 = 24/n.", "3 × 8 = 24, so n = 4 × 8 = 32."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 13: Multiplying mixed numbers (WP 15)
            (r) => {
                const q = "Multiply: 1 2/5 · 1 3/7 · 5 1/2";
                const s = shuffle(r, ["11", "10", "12", "9 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Improper fractions: 7/5 × 10/7 × 11/2.", "Cancel 7s: (1/5) × 10 × (11/2) = 2 × (11/2) = 11."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 14: Decimal operations (WP 16)
            (r) => {
                const q = "Simplify: (4.2 × 0.05) ÷ 7";
                const s = shuffle(r, ["0.03", "0.3", "0.003", "0.021"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4.2 × 0.05 = 0.21.", "0.21 ÷ 7 = 0.03."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 15: Sales tax on purchase (WP 17)
            (r) => {
                const q = "If the sales-tax rate is 7%, what is the tax on a $111.11 purchase?";
                const s = shuffle(r, ["$7.78", "$7.70", "$7.88", "$8.00"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.07 × $111.11 = $7.7777... ≈ $7.78."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 16: Prime factorization of 900 (WP 19)
            (r) => {
                const q = "Write the prime factorization of 900 using exponents.";
                const s = shuffle(r, ["2² · 3² · 5²", "2³ · 3² · 5", "2² · 3³ · 5", "2 · 3² · 5²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["900 = 9 × 100 = 3² × (10²) = 3² × (2 · 5)² = 2² · 3² · 5²."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 17: GCF of two different prime numbers (WP 20)
            (r) => {
                const q = "What is the greatest common factor (GCF) of any two different prime numbers?";
                const s = shuffle(r, ["1", "0", "Their product", "Their sum"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Prime numbers have only 1 and themselves as factors. Since they are different, their only shared common factor is 1."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 18: Square side in cm from perimeter in meters (WP 21)
            (r) => {
                const q = "The perimeter of a square is 2 meters. How many centimeters long is each side?";
                const s = shuffle(r, ["50 cm", "25 cm", "100 cm", "40 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 meters = 200 centimeters.", "A square has 4 equal sides: 200 cm ÷ 4 = 50 cm."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 19: Triangle area and classification (WP 22)
            (r) => {
                const q = "A triangle has a base of 8 cm, a vertical height of 5 cm, and side lengths of 5 cm, 8 cm, and 10 cm. What is its area and angle classification?";
                const s = shuffle(r, ["20 cm², obtuse triangle", "40 cm², acute triangle", "20 cm², right triangle", "25 cm², obtuse triangle"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) ÷ 2 = (8 × 5) ÷ 2 = 20 cm².", "Since 5² + 8² = 25 + 64 = 89 < 10² = 100, the triangle is obtuse."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 100: Algebraic Addition of Integers
    100: (rng, qIndex) => {
        const framings = [
            // Category 0: Adding negative and positive integers (PS a, d, WP 5)
            (r) => {
                const a = 3, b = 4;
                const ans = "+1";
                const q = "Find the algebraic sum: (-3) + (+4)";
                const s = shuffle(r, [ans, "-1", "-7", "+7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["When adding numbers with different signs, subtract the smaller absolute value from the larger and keep the sign of the larger.", "4 - 3 = 1, so the sum is +1."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 1: Adding two negative integers (PS b, g)
            (r) => {
                const q = "Find the algebraic sum: (-3) + (-4)";
                const s = shuffle(r, ["-7", "+7", "-1", "+1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["When adding numbers with the same sign, add their absolute values and keep the common sign.", "3 + 4 = 7, so the sum is -7."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 2: Sum of opposites (PS c, WP 5a)
            (r) => {
                const q = "Find the algebraic sum of the opposites: (-4) + (+4)";
                const s = shuffle(r, ["0", "+8", "-8", "1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Opposite numbers sum to zero."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 3: Opposite of number (PS i-k)
            (r) => {
                const q = "What is the opposite of -8?";
                const s = shuffle(r, ["+8", "-8", "0", "1/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The opposite of a negative number is the corresponding positive number: +8."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 4: Subtracting negative integer (PS l, WP 6a)
            (r) => {
                const q = "Solve the subtraction problem using algebraic addition: (-2) - (-5)";
                const s = shuffle(r, ["+3", "-3", "-7", "+7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["To subtract, add the opposite of the subtrahend: (-2) + (+5) = +3."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 5: Subtracting positive from negative (PS m, WP 6d)
            (r) => {
                const q = "Solve using algebraic addition: (-4) - (+2)";
                const s = shuffle(r, ["-6", "+6", "-2", "+2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the opposite: (-4) + (-2) = -6."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 6: Subtracting negative from positive (PS n, WP 6c)
            (r) => {
                const q = "Solve using algebraic addition: (+2) - (-3)";
                const s = shuffle(r, ["+5", "-5", "-1", "+1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the opposite: (+2) + (+3) = +5."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 7: Dividend from divisor and quotient (WP 1)
            (r) => {
                const q = "If 0.6 is the divisor and 1.2 is the quotient, what is the dividend?";
                const s = shuffle(r, ["0.72", "2", "0.5", "0.072"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividend = divisor × quotient = 0.6 × 1.2 = 0.72."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 8: Two-step number problem (WP 2)
            (r) => {
                const q = "If a number is twelve less than fifty, then it is how much more than twenty?";
                const s = shuffle(r, ["18", "28", "16", "22"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Twelve less than fifty = 50 - 12 = 38.", "38 - 20 = 18."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 9: Average of four numbers (WP 3)
            (r) => {
                const q = "If the sum of four numbers is 14.8, what is the average of the four numbers?";
                const s = shuffle(r, ["3.7", "3.5", "3.9", "4.2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Average = sum ÷ count = 14.8 ÷ 4 = 3.7."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 10: Angles of equilateral triangle (WP 7)
            (r) => {
                const q = "What is the measure of each angle of an equilateral triangle?";
                const s = shuffle(r, ["60°", "90°", "45°", "180°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The three angles of an equilateral triangle are equal: 180° ÷ 3 = 60°."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 11: Parallelogram angle measures (WP 8)
            (r) => {
                const q = "Quadrilateral ABCD is a parallelogram. If angle A measures 70°, what is the measure of consecutive angle B?";
                const s = shuffle(r, ["110°", "70°", "120°", "90°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Consecutive angles in a parallelogram are supplementary: 180° - 70° = 110°."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 12: Volume of rectangular prism (WP 10)
            (r) => {
                const q = "Find the volume of a rectangular prism with length 7 in., width 5 in., and height 6 in.";
                const s = shuffle(r, ["210 cu. in.", "230 cu. in.", "190 cu. in.", "142 cu. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = l × w × h = 7 × 5 × 6 = 210 cubic inches."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 13: Ratio of girls to boys in class (WP 11)
            (r) => {
                const q = "Twelve of the 27 students in the class are boys. What is the ratio of girls to boys in the class in simplest form?";
                const s = shuffle(r, ["5 to 4", "4 to 5", "5 to 9", "4 to 9"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Number of girls = 27 - 12 = 15.", "Ratio of girls to boys = 15 to 12 = 5 to 4."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 14: Order of operations with powers and roots (WP 12)
            (r) => {
                const q = "Simplify: 10² + (5² - 11) ÷ √49 - 3³";
                const s = shuffle(r, ["75", "73", "81", "68"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Powers and roots: 10² = 100, 5² = 25, √49 = 7, 3³ = 27.", "Parentheses: 25 - 11 = 14.", "Divide: 14 ÷ 7 = 2.", "100 + 2 - 27 = 75."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 15: 3/4 to percent (WP 13)
            (r) => {
                const q = "The fraction 3/4 is equal to what percent?";
                const s = shuffle(r, ["75%", "70%", "80%", "25%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 × 100% = 75%."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 16: Fraction who did not bring lunch (WP 14)
            (r) => {
                const q = "If 20% of the students brought their lunch to school, then what fraction of the students did NOT bring their lunch to school in simplest form?";
                const s = shuffle(r, ["4/5", "1/5", "3/5", "7/10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Percent who did not bring lunch = 100% - 20% = 80%.", "80% = 80/100 = 4/5."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 17: Decimal subtraction with parentheses (WP 18)
            (r) => {
                const q = "Simplify: 5 - (3.2 + 0.4)";
                const s = shuffle(r, ["1.4", "1.6", "2.2", "1.2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Inside parentheses: 3.2 + 0.4 = 3.6.", "5.0 - 3.6 = 1.4."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 18: Circular pool area (WP 19)
            (r) => {
                const q = "If the diameter of a circular plastic swimming pool is 6 feet, what is the approximate area of the bottom of the pool to the nearest square foot? (Use 3.14 for π.)";
                const s = shuffle(r, ["28 sq. ft", "19 sq. ft", "36 sq. ft", "24 sq. ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = 6 ÷ 2 = 3 ft.", "Area = πr² = 3.14 × 3² = 3.14 × 9 = 28.26 ≈ 28 sq. ft."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 19: Triangle ABC area from rectangle (WP 22)
            (r) => {
                const q = "Rectangle ABCD is 8 cm long and 6 cm wide. Diagonal AC is 10 cm long. What is the area of triangle ABC?";
                const s = shuffle(r, ["24 cm²", "48 cm²", "30 cm²", "28 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Triangle ABC is a right triangle with legs of length 8 cm and 6 cm.", "Area = (8 × 6) ÷ 2 = 48 ÷ 2 = 24 cm²."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};

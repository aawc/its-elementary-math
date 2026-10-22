import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 81: Arithmetic with Units of Measure
    81: (rng, qIndex) => {
        const framings = [
            // Category 0: Milk gallons and quarts (Lesson 81 #1)
            (r) => {
                const g = randInt(r, 2, 4);
                const q = randInt(r, 1, 3);
                const totalQ = g * 4;
                const rem = totalQ - q;
                const quest = "The Jones family had " + g + " gallons of milk before they ate breakfast. The family used " + q + " quarts of milk during breakfast. How many quarts of milk did the Jones family have after breakfast?";
                const s = shuffle(r, [rem + " quarts", (rem + 2) + " quarts", (rem - 1) + " quarts", totalQ + " quarts"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [g + " gallons = " + totalQ + " quarts. " + totalQ + " − " + q + " = " + rem + " quarts."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 1: Compare quart and gallon milliliters (Lesson 81 #2)
            (r) => {
                const quest = "One quart of milk is about 945 milliliters. About how many milliliters of milk are in 1 gallon? (1 gallon = 4 quarts)";
                const ans = 4 * 945;
                const s = shuffle(r, [ans + " milliliters", "3500 milliliters", "4000 milliliters", "1890 milliliters"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 gallon = 4 quarts. 4 × 945 mL = 3780 mL."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 2: Hair length cut multiple times (Lesson 81 #3)
            (r) => {
                const cuts = [[1.5, "1 1/2"], [2.5, "2 1/2"], [3.5, "3 1/2"]];
                const [val, str] = cuts[randInt(r, 0, cuts.length - 1)];
                const n = randInt(r, 3, 5);
                const total = n * val;
                const whole = Math.floor(total);
                const frac = total - whole === 0.5 ? " 1/2" : "";
                const ansStr = whole + frac + " inches";
                const d1 = (whole + 1) + frac + " inches";
                const d2 = Math.max(1, whole - 1) + frac + " inches";
                const d3 = (whole + 2) + " inches";
                const quest = "Carol cut " + str + " inches off her hair " + n + " times last year. How much longer would her hair have been at the end of the year if she had not cut it?";
                const s = shuffle(r, [ansStr, d1, d2, d3]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " × " + str + " inches = " + ansStr + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 3: Plane average speed rate (Lesson 81 #4)
            (r) => {
                const dists = [1200, 1500, 1800, 2000, 2400];
                const dist = dists[randInt(r, 0, dists.length - 1)];
                const hours = randInt(r, 3, 5);
                const speed = Math.floor(dist / hours);
                const quest = "The plane flew " + dist + " miles in " + hours + " hours. Divide the distance by the time to find the average speed of the plane.";
                const s = shuffle(r, [speed + " miles per hour", (speed + 50) + " miles per hour", (speed - 50) + " miles per hour", (speed + 100) + " miles per hour"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [dist + " miles ÷ " + hours + " hours = " + speed + " miles per hour."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 4: Subtract feet and inches (Lesson 81 Practice Set a)
            (r) => {
                const ft = randInt(r, 2, 5);
                const inch = randInt(r, 6, 18);
                const diff = ft * 12 - inch;
                const quest = "Simplify: " + ft + " ft − " + inch + " in. (Write the difference in inches.)";
                const s = shuffle(r, [diff + " in.", (diff + 6) + " in.", (diff - 6) + " in.", (ft * 12) + " in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft = " + (ft * 12) + " in. " + (ft * 12) + " − " + inch + " = " + diff + " in."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 5: Multiply length units (Lesson 81 Practice Set b)
            (r) => {
                const a = randInt(r, 2, 5);
                const b = randInt(r, 4, 8);
                const prod = a * b;
                const quest = "Simplify: " + a + " ft × " + b + " ft";
                const s = shuffle(r, [prod + " sq ft", (prod + 4) + " sq ft", (2 * (a + b)) + " ft", prod + " ft"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " ft × " + b + " ft = " + prod + " sq ft (or ft²)."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 6: Divide area by length (Lesson 81 Practice Set c)
            (r) => {
                const w = randInt(r, 3, 6);
                const k = randInt(r, 4, 8);
                const area = w * k;
                const quest = "Simplify: " + area + " cm² ÷ " + w + " cm";
                const s = shuffle(r, [k + " cm", k + " cm²", (k + 2) + " cm", (area - w) + " cm"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [area + " cm² ÷ " + w + " cm = " + k + " cm."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 7: Mileage rate distance over fuel (Lesson 81 Practice Set d)
            (r) => {
                const gal = [10, 12, 15, 20][randInt(r, 0, 3)];
                const mpg = [25, 30, 32, 35][randInt(r, 0, 3)];
                const miles = gal * mpg;
                const quest = "Simplify: " + miles + " mi ÷ " + gal + " gal";
                const s = shuffle(r, [mpg + " mpg", (mpg + 5) + " mpg", (mpg - 5) + " mpg", (mpg + 10) + " mpg"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [miles + " mi ÷ " + gal + " gal = " + mpg + " miles per gallon (mpg)."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 8: Basketball team percent points (Lesson 81 #6)
            (r) => {
                const pcts = [40, 50, 60, 75];
                const pct = pcts[randInt(r, 0, pcts.length - 1)];
                const tot = [60, 80, 100][randInt(r, 0, 2)];
                const pts = Math.round(tot * pct / 100);
                const quest = "The basketball team scored " + pct + "% of its " + tot + " points in the second half. How many points did the team score in the second half?";
                const s = shuffle(r, [pts + " points", (pts + 6) + " points", (pts - 6) + " points", (tot - pts + 3) + " points"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% of " + tot + " = (" + pct + "/100) × " + tot + " = " + pts + " points."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 9: Parallelogram area (Lesson 81 #7)
            (r) => {
                const b = randInt(r, 16, 26);
                const h = randInt(r, 10, 18);
                const area = b * h;
                const quest = "What is the area of a parallelogram with a base of " + b + " m and a height of " + h + " m?";
                const s = shuffle(r, [area + " m²", (2 * (b + h)) + " m", Math.floor(area / 2) + " m²", (area + 20) + " m²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = base × height = " + b + " m × " + h + " m = " + area + " m²."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 10: Parallelogram perimeter (Lesson 81 #8)
            (r) => {
                const s1 = randInt(r, 18, 28);
                const s2 = randInt(r, 12, 17);
                const peri = 2 * (s1 + s2);
                const quest = "What is the perimeter of a parallelogram whose sides measure " + s1 + " m and " + s2 + " m?";
                const s = shuffle(r, [peri + " m", (s1 + s2) + " m", (s1 * s2) + " m²", (peri + 6) + " m"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (" + s1 + " + " + s2 + ") = " + peri + " m."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 11: Red and blue marbles ratio (Lesson 81 #10)
            (r) => {
                const mult = randInt(r, 5, 8);
                const totBlue = 4 * mult;
                const totRed = 3 * mult;
                const quest = "The ratio of red marbles to blue marbles in the bag was 3 to 4. If there were " + totBlue + " blue marbles, how many marbles were red?";
                const s = shuffle(r, [totRed + " red marbles", (totRed + 3) + " red marbles", (totRed - 3) + " red marbles", totBlue + " red marbles"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio 3/4 = r/" + totBlue + ". Multiply by " + mult + ": 3 × " + mult + " = " + totRed + " red marbles."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 12: Ordering fractions and decimals (Lesson 81 #11)
            (r) => {
                const quest = "Arrange these numbers in order from least to greatest: 1/2, 1/5, 0.4";
                const s = shuffle(r, ["1/5, 0.4, 1/2", "0.4, 1/5, 1/2", "1/2, 0.4, 1/5", "1/5, 1/2, 0.4"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to decimals: 1/5 = 0.2, 0.4 = 0.4, 1/2 = 0.5. Least to greatest: 1/5, 0.4, 1/2."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 13: Fraction to decimal and percent (Lesson 81 #12)
            (r) => {
                const pairs = [[2, 5, "0.4", "40%"], [7, 25, "0.28", "28%"], [9, 25, "0.36", "36%"], [1, 20, "0.05", "5%"]];
                const [n, d, dec, pct] = pairs[randInt(r, 0, pairs.length - 1)];
                const quest = "What decimal number and percent are equivalent to " + n + "/" + d + "?";
                const correct = dec + ", " + pct;
                const s = shuffle(r, [correct, dec + ", " + (parseInt(pct) * 10) + "%", (parseFloat(dec) * 10).toFixed(2) + ", " + pct, dec + ", " + (parseInt(pct) + 5) + "%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + "/" + d + " = " + dec + " = " + pct + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 14: Decimal operation (Lesson 81 #13)
            (r) => {
                const a = [10, 20, 30][randInt(r, 0, 2)];
                const b = [0.1, 0.2][randInt(r, 0, 1)];
                const inside = a - b;
                const ans = (inside * b).toFixed(2);
                const quest = "Simplify: (" + a + " − " + b + ") × " + b;
                const s = shuffle(r, [ans, inside.toFixed(1), (parseFloat(ans) * 10).toFixed(2), (parseFloat(ans) + 0.1).toFixed(2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " − " + b + ") = " + inside + ". Then " + inside + " × " + b + " = " + ans + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 15: Decimal sum and division (Lesson 81 #14)
            (r) => {
                const a = [0.4, 0.6, 0.8][randInt(r, 0, 2)];
                const b = [3, 5, 7][randInt(r, 0, 2)];
                const sum = a + b;
                const ans = (sum / 2).toFixed(2);
                const quest = "Simplify: (" + a + " + " + b + ") ÷ 2";
                const s = shuffle(r, [ans, sum.toFixed(1), (parseFloat(ans) + 0.5).toFixed(2), (parseFloat(ans) - 0.5).toFixed(2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " + " + b + ") = " + sum + ". " + sum + " ÷ 2 = " + ans + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 16: Fraction multiplication (Lesson 81 #16/17)
            (r) => {
                const quest = "Multiply the fractions: 5/8 × 3/4";
                const s = shuffle(r, ["15/32", "8/12", "15/12", "5/6"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerators and denominators: (5 × 3) / (8 × 4) = 15/32."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 17: Square perimeter in meters to cm side (Lesson 81 #21)
            (r) => {
                const m = randInt(r, 1, 3);
                const cmTot = m * 100;
                const side = cmTot / 4;
                const quest = "The perimeter of a square is " + m + " meter" + (m > 1 ? "s" : "") + ". How many centimeters long is each side? (1 meter = 100 centimeters)";
                const s = shuffle(r, [side + " cm", (side + 10) + " cm", (side - 5) + " cm", cmTot + " cm"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [m + " meter(s) = " + cmTot + " cm. A square has 4 equal sides: " + cmTot + " ÷ 4 = " + side + " cm."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 18: Inscribed circle circumference (Lesson 81 #22)
            (r) => {
                const d = [10, 20, 30][randInt(r, 0, 2)];
                const circ = (d * 3.14).toFixed(2);
                const quest = "A circle has a diameter of " + d + " cm. What is the circumference of the circle? (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " cm", (d * 3.14 / 2).toFixed(2) + " cm", (d * 3.14 + 3.14).toFixed(2) + " cm", (2 * d) + " cm"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × diameter = 3.14 × " + d + " = " + circ + " cm."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 19: Sales tax on purchase (Lesson 81 #23)
            (r) => {
                const rate = [5, 6, 7, 8][randInt(r, 0, 3)];
                const dollars = [15, 20, 25, 40][randInt(r, 0, 3)];
                const tax = (dollars * rate / 100).toFixed(2);
                const quest = "If the sales-tax rate is " + rate + "%, what is the tax on a $" + dollars + ".00 purchase?";
                const s = shuffle(r, ["$" + tax, "$" + (parseFloat(tax) + 0.50).toFixed(2), "$" + (parseFloat(tax) - 0.25).toFixed(2), "$" + (dollars * rate / 10).toFixed(2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sales tax = " + rate + "% of $" + dollars + ".00 = (" + rate + "/100) × " + dollars + " = $" + tax + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 82: Volume of a Rectangular Prism
    82: (rng, qIndex) => {
        const framings = [
            // Category 0: Unit cubes in larger cube (Lesson 82 Practice Set a)
            (r) => {
                const sVal = randInt(r, 3, 6);
                const cubes = sVal * sVal * sVal;
                const quest = "How many 1-cm cubes would be needed to build a cube " + sVal + " cm on each edge?";
                const s = shuffle(r, [cubes + " cubes", (sVal * sVal) + " cubes", (6 * sVal * sVal) + " cubes", (12 * sVal) + " cubes"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = edge³ = " + sVal + " × " + sVal + " × " + sVal + " = " + cubes + " cubes."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 1: Volume of rectangular box in feet (Lesson 82 Practice Set b)
            (r) => {
                const l = randInt(r, 4, 6);
                const w = randInt(r, 2, 4);
                const h = randInt(r, 2, 3);
                const vol = l * w * h;
                const quest = "What is the volume of a rectangular box that is " + l + " feet long, " + w + " feet wide, and " + h + " feet tall?";
                const s = shuffle(r, [vol + " cubic feet", (vol + 6) + " cubic feet", (vol - 4) + " cubic feet", (2 * (l * w + w * h + l * h)) + " cubic feet"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = l × w × h = " + l + " × " + w + " × " + h + " = " + vol + " cubic feet."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 2: Cubes on bottom layer (Lesson 82 Practice Set c1)
            (r) => {
                const l = [8, 10, 12][randInt(r, 0, 2)];
                const w = [5, 6, 8][randInt(r, 0, 2)];
                const h = [3, 4, 5][randInt(r, 0, 2)];
                const bottom = l * w;
                const quest = "The interior dimensions of a rectangular box are " + l + " inches by " + w + " inches by " + h + " inches. The box is to be filled with 1-inch cubes. How many cubes can fit on the bottom layer?";
                const s = shuffle(r, [bottom + " cubes", (l * w * h) + " cubes", (2 * (l + w)) + " cubes", (bottom + 10) + " cubes"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The bottom layer has length × width = " + l + " × " + w + " = " + bottom + " cubes."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 3: Total cubes in box (Lesson 82 Practice Set c2)
            (r) => {
                const l = [8, 10, 12][randInt(r, 0, 2)];
                const w = [5, 6, 8][randInt(r, 0, 2)];
                const h = [3, 4, 5][randInt(r, 0, 2)];
                const total = l * w * h;
                const quest = "The interior dimensions of a rectangular box are " + l + " inches by " + w + " inches by " + h + " inches. The box is to be filled with 1-inch cubes. How many cubes can fit in the box in all?";
                const s = shuffle(r, [total + " cubes", (l * w) + " cubes", (total + 20) + " cubes", (total - 20) + " cubes"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total cubes = length × width × height = " + l + " × " + w + " × " + h + " = " + total + " cubes."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 4: Refrigerator volume unit (Lesson 82 Practice Set d)
            (r) => {
                const quest = "Choose the most appropriate unit to measure the volume of a kitchen refrigerator.";
                const s = shuffle(r, ["cubic feet", "cubic inches", "cubic miles", "square feet"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A kitchen refrigerator is measured in cubic feet."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 5: Write decimal from words (Lesson 82 #1)
            (r) => {
                const quest = "Write the number twenty-one and five hundredths in digits.";
                const s = shuffle(r, ["21.05", "21.5", "21.005", "215"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Twenty-one = 21, and five hundredths = 0.05, so 21.05."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 6: Tennis balls in cans cost (Lesson 82 #2)
            (r) => {
                const price = [2.49, 2.99, 3.49][randInt(r, 0, 2)];
                const cans = 4; // one dozen = 12 balls, 3 balls per can = 4 cans
                const cost = (cans * price).toFixed(2);
                const quest = "Tennis balls are sold in cans containing 3 balls. What would be the cost of one dozen tennis balls if the price per can was $" + price.toFixed(2) + "?";
                const s = shuffle(r, ["$" + cost, "$" + (3 * price).toFixed(2), "$" + (5 * price).toFixed(2), "$" + (12 * price).toFixed(2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One dozen = 12 balls. 12 ÷ 3 = 4 cans. 4 × $" + price.toFixed(2) + " = $" + cost + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 7: Cubits to feet (Lesson 82 #3)
            (r) => {
                const cubits = [4, 6, 8][randInt(r, 0, 2)];
                const feet = (cubits * 18) / 12;
                const quest = "A cubit is about 18 inches. If a person was " + cubits + " cubits tall, about how many feet tall was he?";
                const s = shuffle(r, [feet + " feet", (feet + 1) + " feet", (feet - 1) + " feet", (cubits * 18) + " feet"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [cubits + " cubits = " + (cubits * 18) + " inches. " + (cubits * 18) + " ÷ 12 = " + feet + " feet."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 8: Fraction to percent (Lesson 82 #4)
            (r) => {
                const items = [[7, 100, "7%"], [7, 10, "70%"], [7, 25, "28%"], [9, 25, "36%"]];
                const [n, d, pct] = items[randInt(r, 0, items.length - 1)];
                const pVal = parseInt(pct);
                const quest = "Write " + n + "/" + d + " as a percent.";
                const s = shuffle(r, [pct, (pVal + 5) + "%", Math.max(1, pVal - 5) + "%", (pVal + 10) + "%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + "/" + d + " × 100% = " + pct + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 9: Percent to reduced fraction and decimal (Lesson 82 #5)
            (r) => {
                const quest = "Write 90% as a reduced fraction and as a decimal number.";
                const s = shuffle(r, ["9/10, 0.9", "90/100, 0.9", "9/10, 9.0", "9/20, 0.45"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["90% = 90/100 = 9/10, and 90/100 = 0.9."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 10: Percent of students wearing hat (Lesson 82 #6)
            (r) => {
                const w = [21, 23, 27, 31][randInt(r, 0, 3)];
                const pct = w * 2;
                const quest = "Of the 50 students who went on a trip, " + w + " wore a hat. What percent of the students wore a hat?";
                const s = shuffle(r, [pct + "%", (pct + 4) + "%", (pct - 4) + "%", (100 - pct) + "%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [w + "/50 = " + (w * 2) + "/100 = " + pct + "%."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 11: Shape of cereal box (Lesson 82 #8)
            (r) => {
                const quest = "A box of cereal has the shape of what geometric solid?";
                const s = shuffle(r, ["rectangular prism", "cylinder", "sphere", "triangular prism"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A cereal box is a rectangular prism."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 12: Decimal unknown factor (Lesson 82 #11)
            (r) => {
                const a = [4, 6, 8][randInt(r, 0, 2)];
                const mult = [0.02, 0.03, 0.04][randInt(r, 0, 2)];
                const prod = (a * mult).toFixed(2);
                const quest = "Find the unknown number n: " + a + "n = " + prod;
                const s = shuffle(r, [mult.toFixed(2), (mult * 10).toFixed(2), (mult / 10).toFixed(3), (a * parseFloat(prod)).toFixed(2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = " + prod + " ÷ " + a + " = " + mult.toFixed(2) + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 13: Decimal division unknown factor (Lesson 82 #12)
            (r) => {
                const a = 0.12;
                const b = 6;
                const ans = 50;
                const quest = "Find the unknown number m: 0.12m = 6";
                const s = shuffle(r, ["" + ans, "" + (ans / 10), "" + (ans * 10), "45"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 6 ÷ 0.12 = 600 ÷ 12 = 50."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 14: Order of operations with 0.5 (Lesson 82 #16)
            (r) => {
                const quest = "Simplify: 0.5 + (0.5 ÷ 0.5) + (0.5 × 0.5)";
                const s = shuffle(r, ["1.75", "1.25", "1.5", "2.0"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.5 ÷ 0.5 = 1. 0.5 × 0.5 = 0.25. 0.5 + 1 + 0.25 = 1.75."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 15: Add three fractions (Lesson 82 #17)
            (r) => {
                const quest = "Find the sum: 1/2 + 1/5 + 1/10";
                const s = shuffle(r, ["4/5", "3/17", "7/10", "9/10"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator is 10: 5/10 + 2/10 + 1/10 = 8/10 = 4/5."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 16: Estimate product by rounding to tens (Lesson 82 #20)
            (r) => {
                const a = 39;
                const b = 41;
                const est = 40 * 40;
                const quest = "Estimate the product of 39 and 41 by rounding each number to the nearest ten before multiplying.";
                const s = shuffle(r, ["" + est, "" + (est + 200), "" + (est - 200), "1599"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["39 rounds to 40, and 41 rounds to 40. 40 × 40 = 1600."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 17: Marbles ratio in bag (Lesson 82 #21)
            (r) => {
                const rRed = 21;
                const rBlue = 36;
                const quest = "In a bag there are 21 red marbles and 36 blue marbles. What is the ratio of red marbles to blue marbles in simplest form?";
                const s = shuffle(r, ["7/12", "12/7", "7/19", "21/36"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio = 21/36. Divide numerator and denominator by 3: 7/12."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 18: Larger cube volume from 1-inch cubes (Lesson 82 #27)
            (r) => {
                const sVal = randInt(r, 2, 4);
                const vol = sVal * sVal * sVal;
                const quest = "A cube has edges of length " + sVal + " inches and is constructed of 1-inch cubes. What is the volume of the larger cube?";
                const s = shuffle(r, [vol + " cu. in.", (sVal * sVal) + " cu. in.", (6 * sVal * sVal) + " cu. in.", (vol + 8) + " cu. in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = " + sVal + " × " + sVal + " × " + sVal + " = " + vol + " cu. in."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 19: Milk gallon weight estimate (Lesson 82 #30)
            (r) => {
                const quest = "A pint of milk weighs about a pound. About how many pounds does a gallon of milk weigh? (1 gallon = 8 pints)";
                const s = shuffle(r, ["8 pounds", "4 pounds", "16 pounds", "2 pounds"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 gallon = 8 pints. Since 1 pint ≈ 1 pound, 1 gallon ≈ 8 pounds."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 83: Proportions
    83: (rng, qIndex) => {
        const framings = [
            // Category 0: Write proportion with digits (Lesson 83 Practice Set b)
            (r) => {
                const quest = "Which choice writes this proportion with digits: 'Six is to eight as nine is to twelve'?";
                const s = shuffle(r, ["6/8 = 9/12", "6/9 = 8/12", "8/6 = 9/12", "6 × 8 = 9 × 12"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["'Six is to eight' is 6/8. 'Nine is to twelve' is 9/12. So 6/8 = 9/12."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 1: Complete proportion 4 is to 3 (Lesson 83 Practice Set c)
            (r) => {
                const mult = randInt(r, 2, 4);
                const num = 4 * mult;
                const ans = 3 * mult;
                const quest = "Write and complete this proportion: Four is to three as " + num + " is to what number?";
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 2), "" + (num + 1)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4/3 = " + num + "/x. Since 4 × " + mult + " = " + num + ", 3 × " + mult + " = " + ans + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 2: Complete proportion 6 is to 9 (Lesson 83 Practice Set d)
            (r) => {
                const mult = randInt(r, 2, 5);
                const denom = 9 * mult;
                const ans = 6 * mult;
                const quest = "Write and complete this proportion: Six is to nine as what number is to " + denom + "?";
                const s = shuffle(r, ["" + ans, "" + (ans + 3), "" + (ans - 3), "" + (denom - 6)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6/9 = x/" + denom + ". Since 9 × " + mult + " = " + denom + ", 6 × " + mult + " = " + ans + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 3: Product of sum and difference (Lesson 83 #1)
            (r) => {
                const quest = "What is the product when the sum of 0.2 and 0.4 is multiplied by the difference of 0.4 and 0.2?";
                const s = shuffle(r, ["0.12", "1.2", "0.08", "0.24"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 0.2 + 0.4 = 0.6. Difference = 0.4 − 0.2 = 0.2. Product = 0.6 × 0.2 = 0.12."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 4: Camel speed comparison (Lesson 83 #2)
            (r) => {
                const quest = "Arabian camels travel about 3 times as fast as Bactrian camels. If Bactrian camels travel at 1 1/2 miles per hour, at how many miles per hour do Arabian camels travel?";
                const s = shuffle(r, ["4 1/2 miles per hour", "3 1/2 miles per hour", "4 miles per hour", "5 miles per hour"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 × 1 1/2 = 3 × 1.5 = 4.5 = 4 1/2 miles per hour."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 5: Yard work pay rate (Lesson 83 #3)
            (r) => {
                const rate = [4, 6, 8][randInt(r, 0, 2)];
                const hours = 1.75;
                const earned = (rate * hours).toFixed(2);
                const quest = "Mark was paid at a rate of $" + rate + " per hour for cleaning up a neighbor's yard. If he worked 1 3/4 hours, how much money was he paid?";
                const s = shuffle(r, ["$" + earned, "$" + (rate * 2).toFixed(2), "$" + (rate * 1).toFixed(2), "$" + (parseFloat(earned) + 1).toFixed(2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 3/4 hours = 1.75 hours. $" + rate + " × 1.75 = $" + earned + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 6: Volume of rectangular prism (Lesson 83 #4)
            (r) => {
                const l = randInt(r, 4, 6);
                const w = randInt(r, 3, 4);
                const h = randInt(r, 2, 3);
                const vol = l * w * h;
                const quest = "Find the volume of a rectangular prism with length " + l + " in., width " + w + " in., and height " + h + " in.";
                const s = shuffle(r, [vol + " cu. in.", (vol + 10) + " cu. in.", (vol - 10) + " cu. in.", (2 * (l * w + w * h + l * h)) + " cu. in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = l × w × h = " + l + " × " + w + " × " + h + " = " + vol + " cu. in."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 7: Unknown factor with decimal (Lesson 83 #5)
            (r) => {
                const ans = [50, 60, 70][randInt(r, 0, 2)];
                const prod = (0.7 * ans).toFixed(0);
                const quest = "Find the unknown number y: 0.7y = " + prod;
                const s = shuffle(r, ["" + ans, "" + (ans / 10), "" + (ans + 10), "" + (ans * 10)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["y = " + prod + " ÷ 0.7 = " + ans + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 8: Subtract decimal sum from 100 (Lesson 83 #6)
            (r) => {
                const quest = "Simplify: 100 − (3.45 + 0.6)";
                const s = shuffle(r, ["95.95", "96.05", "95.85", "96.95"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3.45 + 0.6 = 4.05. 100 − 4.05 = 95.95."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 9: Decimal division (Lesson 83 #7)
            (r) => {
                const quest = "Divide: 0.144 ÷ 0.6";
                const s = shuffle(r, ["0.24", "2.4", "0.024", "0.864"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shift decimal point: 1.44 ÷ 6 = 0.24."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 10: Round currency to nearest dollar (Lesson 83 #8)
            (r) => {
                const dollars = [18, 24, 37, 49][randInt(r, 0, 3)];
                const cents = [75, 85, 95][randInt(r, 0, 2)];
                const amt = (dollars + cents / 100).toFixed(2);
                const rounded = dollars + 1;
                const quest = "Round $" + amt + " to the nearest dollar.";
                const s = shuffle(r, ["$" + rounded, "$" + dollars, "$" + (rounded + 1), "$" + (dollars - 1)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + amt + " has " + cents + " cents (≥ 50¢), so it rounds up to $" + rounded + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 11: 75% to decimal and reduced fraction (Lesson 83 #9)
            (r) => {
                const quest = "Write 75% as a decimal and as a reduced fraction.";
                const s = shuffle(r, ["0.75, 3/4", "7.5, 3/4", "0.75, 75/100", "0.075, 3/4"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["75% = 75/100 = 0.75, and 75/100 reduces to 3/4."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 12: Solve 3/4 proportion (Lesson 83 #10)
            (r) => {
                const denom = [16, 20, 24, 28][randInt(r, 0, 3)];
                const ans = (3 * denom) / 4;
                const quest = "Solve the proportion: 3/4 = x/" + denom;
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 2), "" + (ans + 4)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4x = 3 × " + denom + " = " + (3 * denom) + ". x = " + (3 * denom) + " ÷ 4 = " + ans + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 13: Identifying proportion pair (Lesson 83 #11)
            (r) => {
                const quest = "Which two ratios below form a proportion?";
                const s = shuffle(r, ["6/8 and 9/12", "6/8 and 8/10", "5/6 and 6/7", "4/5 and 8/12"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Both 6/8 and 9/12 reduce to 3/4, so they form a proportion."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 14: Ceiling fan blade travel distance (Lesson 83 #12)
            (r) => {
                const d = randInt(r, 4, 6);
                const circ = (d * 3.14).toFixed(2);
                const quest = "If the diameter of a ceiling fan is " + d + " ft, about how far does the tip of one of the blades travel in one full turn? (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " ft", (d * 3.14 * 2).toFixed(2) + " ft", (d * d * 3.14).toFixed(2) + " ft", (d * 4) + " ft"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × d = 3.14 × " + d + " = " + circ + " ft."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 15: Area of right triangle (Lesson 83 #14)
            (r) => {
                const a = [6, 8, 10][randInt(r, 0, 2)];
                const b = [4, 6, 8][randInt(r, 0, 2)];
                const area = (a * b) / 2;
                const quest = "Find the area of a right triangle with legs of length " + a + " cm and " + b + " cm.";
                const s = shuffle(r, [area + " cm²", (a * b) + " cm²", (a + b) + " cm", (area + 4) + " cm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) / 2 = (" + a + " × " + b + ") / 2 = " + area + " cm²."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 16: Boys to girls ratio in classroom (Lesson 83 #15)
            (r) => {
                const total = 28;
                const boys = 12;
                const girls = total - boys; // 16
                const quest = "In a class of 28 students, there are 12 boys. What is the ratio of boys to girls in simplest form?";
                const s = shuffle(r, ["3/4", "4/3", "3/7", "4/7"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Girls = 28 − 12 = 16. Ratio boys to girls = 12/16 = 3/4."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 17: Probability of prime on number cube (Lesson 83 #16)
            (r) => {
                const quest = "If a standard six-sided number cube is rolled once, what is the probability that it will stop with a prime number facing up?";
                const s = shuffle(r, ["1/2", "1/3", "2/3", "1/6"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The prime numbers on a number cube are 2, 3, and 5 (3 favorable outcomes out of 6). 3/6 = 1/2."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 18: Average speed of driver (Lesson 83 #17)
            (r) => {
                const dist = [180, 240, 280][randInt(r, 0, 2)];
                const time = 4;
                const speed = dist / time;
                const quest = "A driver traveled " + dist + " miles in " + time + " hours. What was the average speed in miles per hour?";
                const s = shuffle(r, [speed + " mph", (speed + 5) + " mph", (speed - 5) + " mph", (speed + 10) + " mph"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [dist + " miles ÷ " + time + " hours = " + speed + " miles per hour."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 19: Cups in gallons (Lesson 83 #18)
            (r) => {
                const g = randInt(r, 2, 4);
                const cups = g * 16;
                const quest = "How many cups of liquid are in " + g + " gallons? (1 gallon = 16 cups)";
                const s = shuffle(r, [cups + " cups", (g * 4) + " cups", (g * 8) + " cups", (cups + 8) + " cups"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [g + " gallons × 16 cups/gallon = " + cups + " cups."], lessonNum: 83, lessonTitle: "Proportions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

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

    // Lesson 87: Finding Unknown Factors
    87: (rng, qIndex) => {
        const framings = [
            // Category 0: 6w = 21 -> w = 3 1/2 (Lesson 87 Practice Set a)
            (r) => {
                const quest = "Solve for the unknown factor: 6w = 21";
                const s = shuffle(r, ["3 1/2", "3 1/4", "3 2/3", "4"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 21 ÷ 6 = 21/6 = 3 3/6 = 3 1/2."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 1: 50 = 3f -> f = 16 2/3 (Lesson 87 Practice Set b)
            (r) => {
                const quest = "Solve for the unknown factor: 50 = 3f";
                const s = shuffle(r, ["16 2/3", "16 1/3", "17", "15 2/3"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["f = 50 ÷ 3 = 16 2/3."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 2: 5n = 36 -> n = 7 1/5 (Lesson 87 Practice Set c)
            (r) => {
                const quest = "Solve for the unknown factor: 5n = 36";
                const s = shuffle(r, ["7 1/5", "7 2/5", "7", "8"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = 36 ÷ 5 = 7 1/5 (or 7.2)."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 3: 0.3t = 0.24 -> t = 0.8 (Lesson 87 Practice Set d)
            (r) => {
                const quest = "Solve for the unknown factor: 0.3t = 0.24";
                const s = shuffle(r, ["0.8", "0.08", "8", "0.72"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["t = 0.24 ÷ 0.3 = 2.4 ÷ 3 = 0.8."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 4: 8m = 3.2 -> m = 0.4 (Lesson 87 Practice Set e)
            (r) => {
                const quest = "Solve for the unknown factor: 8m = 3.2";
                const s = shuffle(r, ["0.4", "0.04", "4", "25.6"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 3.2 ÷ 8 = 0.4."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 5: 0.8 = 0.5x -> x = 1.6 (Lesson 87 Practice Set f)
            (r) => {
                const quest = "Solve for the unknown factor: 0.8 = 0.5x";
                const s = shuffle(r, ["1.6", "0.4", "0.16", "16"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = 0.8 ÷ 0.5 = 8 ÷ 5 = 1.6."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 6: Divisor and quotient to dividend (Lesson 87 #1)
            (r) => {
                const div = [12, 15, 16][randInt(r, 0, 2)];
                const quo = [20, 24, 25][randInt(r, 0, 2)];
                const dividend = div * quo;
                const quest = "If the divisor is " + div + " and the quotient is " + quo + ", what is the dividend?";
                const s = shuffle(r, ["" + dividend, "" + (dividend + 12), "" + (dividend - 12), "" + Math.floor(dividend / 2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividend = divisor × quotient = " + div + " × " + quo + " = " + dividend + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 7: Brachiosaurus vs blue whale weight (Lesson 87 #2)
            (r) => {
                const whale = [120, 140, 160][randInt(r, 0, 2)];
                const brach = whale / 4;
                const quest = "The brachiosaurus weighed only 1/4 as much as a blue whale. If a blue whale can weigh " + whale + " tons, how much could a brachiosaurus have weighed?";
                const s = shuffle(r, [brach + " tons", (brach + 10) + " tons", (brach - 5) + " tons", (whale * 4) + " tons"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 of " + whale + " = " + whale + " ÷ 4 = " + brach + " tons."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 8: Boys to girls ratio in class (Lesson 87 #3)
            (r) => {
                const quest = "Fourteen of the 32 students in the class are boys. What is the ratio of boys to girls in simplest form?";
                const s = shuffle(r, ["7 to 9", "9 to 7", "7 to 16", "9 to 16"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Girls = 32 − 14 = 18. Ratio boys to girls = 14/18 = 7 to 9."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 9: Circle area radius 10 cm (Lesson 87 #4)
            (r) => {
                const quest = "Calculate the area of a circle with a radius of 10 cm. (Use 3.14 for π.)";
                const s = shuffle(r, ["314 cm²", "62.8 cm²", "31.4 cm²", "100 cm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = π × r² = 3.14 × (10)² = 3.14 × 100 = 314 cm²."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 10: Mixed number unknown factor 7n = 30 (Lesson 87 #5)
            (r) => {
                const quest = "Express the unknown factor as a mixed number: 7n = 30";
                const s = shuffle(r, ["4 2/7", "4 1/7", "4 3/7", "5"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = 30 ÷ 7 = 4 2/7."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 11: Cross products proportion 6/9 = 10/x (Lesson 87 #7)
            (r) => {
                const quest = "Solve this proportion using cross products: 6/9 = 10/x";
                const s = shuffle(r, ["15", "12", "18", "20"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6x = 9 × 10 = 90. x = 90 ÷ 6 = 15."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 12: Right triangle area (Lesson 87 #8)
            (r) => {
                const a = [6, 8, 10][randInt(r, 0, 2)];
                const b = [5, 7, 9][randInt(r, 0, 2)];
                const area = (a * b) / 2;
                const quest = "Find the area of a right triangle with perpendicular sides of length " + a + " inches and " + b + " inches.";
                const s = shuffle(r, [area + " sq in.", (a * b) + " sq in.", (a + b) + " in.", (area + 5) + " sq in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) / 2 = (" + a + " × " + b + ") / 2 = " + area + " sq in."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 13: Rectangular prism volume (Lesson 87 #9)
            (r) => {
                const l = 5;
                const w = 4;
                const h = 3;
                const vol = l * w * h;
                const quest = "Find the volume of a rectangular prism with length " + l + " ft, width " + w + " ft, and height " + h + " ft.";
                const s = shuffle(r, [vol + " cu ft", (vol + 10) + " cu ft", (vol - 10) + " cu ft", "47 cu ft"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = " + l + " × " + w + " × " + h + " = " + vol + " cu ft."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 14: Order of operations with 10 (Lesson 87 #10)
            (r) => {
                const quest = "Simplify: 10 + 10 × 10 − 10 ÷ 10";
                const s = shuffle(r, ["109", "99", "100", "110"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10 × 10 = 100, 10 ÷ 10 = 1. 10 + 100 − 1 = 109."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 15: Sales discount amount (Lesson 87 #12)
            (r) => {
                const p = [40, 50, 60][randInt(r, 0, 2)];
                const pct = [15, 20, 25][randInt(r, 0, 2)];
                const disc = (p * pct / 100).toFixed(2);
                const quest = "A jacket originally priced at $" + p + " is on sale for " + pct + "% off. How much money is saved with this discount?";
                const s = shuffle(r, ["$" + disc, "$" + (parseFloat(disc) + 5).toFixed(2), "$" + (p - parseFloat(disc)).toFixed(2), "$" + (parseFloat(disc) - 2).toFixed(2)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Discount = " + pct + "% of $" + p + " = (" + pct + "/100) × " + p + " = $" + disc + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 16: Elapsed time trip duration (Lesson 87 #13)
            (r) => {
                const quest = "A train departed the station at 9:15 a.m. and arrived at 11:45 a.m. How long was the train trip?";
                const s = shuffle(r, ["2 hours 30 minutes", "2 hours 15 minutes", "2 hours 45 minutes", "3 hours"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From 9:15 a.m. to 11:15 a.m. is 2 hours. From 11:15 a.m. to 11:45 a.m. is 30 minutes. Total = 2 hours 30 minutes."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 17: Fuel mileage rate (Lesson 87 #14)
            (r) => {
                const miles = [280, 320, 360][randInt(r, 0, 2)];
                const gal = 10;
                const mpg = miles / gal;
                const quest = "A car traveled " + miles + " miles on " + gal + " gallons of fuel. What was its average fuel efficiency in miles per gallon?";
                const s = shuffle(r, [mpg + " mpg", (mpg + 4) + " mpg", (mpg - 4) + " mpg", (mpg + 8) + " mpg"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [miles + " miles ÷ " + gal + " gallons = " + mpg + " mpg."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 18: Mixed number multiplication (Lesson 87 #15)
            (r) => {
                const quest = "Multiply: 1 1/2 × 2 2/3";
                const s = shuffle(r, ["4", "3 2/6", "3 1/3", "4 1/2"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fractions: 3/2 × 8/3 = 24/6 = 4."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 19: Complementary angles (Lesson 87 #19)
            (r) => {
                const d = [25, 35, 45, 55, 65][randInt(r, 0, 4)];
                const comp = 90 - d;
                const quest = "Two acute angles are complementary. If one angle measures " + d + "º, what is the measure of the other angle?";
                const s = shuffle(r, [comp + "º", (180 - d) + "º", (comp + 10) + "º", (comp - 10) + "º"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Complementary angles sum to 90º: 90º − " + d + "º = " + comp + "º."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 88: Using Proportions to Solve Ratio Word Problems
    88: (rng, qIndex) => {
        const framings = [
            // Category 0: DVDs to CDs ratio (Lesson 88 Practice Set a)
            (r) => {
                const mult = [12, 15, 20][randInt(r, 0, 2)];
                const cds = 4 * mult;
                const dvds = 5 * mult;
                const quest = "The ratio of DVDs to CDs was 5 to 4. If there were " + cds + " CDs, how many DVDs were there?";
                const s = shuffle(r, [dvds + " DVDs", (dvds + 5) + " DVDs", (dvds - 5) + " DVDs", cds + " DVDs"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/4 = D/" + cds + ". 4D = 5 × " + cds + ". D = " + dvds + " DVDs."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 1: Home team to away team fans (Lesson 88 Practice Set b)
            (r) => {
                const mult = [6, 8, 10][randInt(r, 0, 2)];
                const home = 5 * mult;
                const away = 3 * mult;
                const quest = "At the softball game, the ratio of fans for the home team to fans for the away team was 5 to 3. If there were " + home + " fans for the home team, how many fans for the away team were there?";
                const s = shuffle(r, [away + " fans", (away + 3) + " fans", (away - 3) + " fans", home + " fans"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/3 = " + home + "/A. 5A = 3 × " + home + ". A = " + away + " fans."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 2: Mavis scored percent (Lesson 88 #1)
            (r) => {
                const pts = [12, 14, 16][randInt(r, 0, 2)];
                const pct = pts * 5;
                const quest = "Mavis scored " + pts + " of the team's 20 points. What percent of the team's points did Mavis score?";
                const s = shuffle(r, [pct + "%", (pct + 5) + "%", (pct - 5) + "%", (pct + 10) + "%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [pts + "/20 = " + (pts * 5) + "/100 = " + pct + "%."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 3: Snowfall accumulation duration (Lesson 88 #2)
            (r) => {
                const snow = [3, 4, 5][randInt(r, 0, 2)];
                const hours = snow * 4;
                const quest = "One fourth of an inch of snow fell every hour during the storm. How many hours did the storm last if the total accumulation of snow was " + snow + " inches?";
                const s = shuffle(r, [hours + " hours", (hours + 4) + " hours", (hours - 4) + " hours", snow + " hours"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [snow + " ÷ (1/4) = " + snow + " × 4 = " + hours + " hours."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 4: Eamon baseball glove work hours (Lesson 88 #3)
            (r) => {
                const quest = "Eamon wants to buy a new baseball glove that costs $50. He has $14 and he earns $6 per hour cleaning yards. How many hours must he work to have enough money to buy the glove?";
                const s = shuffle(r, ["6 hours", "5 hours", "7 hours", "8 hours"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Money needed = $50 − $14 = $36. Hours = $36 ÷ $6/hour = 6 hours."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 5: Shelter dogs to cats ratio (Lesson 88 #4)
            (r) => {
                const mult = [5, 6, 7][randInt(r, 0, 2)];
                const cats = 3 * mult;
                const dogs = 5 * mult;
                const quest = "The ratio of dogs to cats in the shelter was 5 to 3. If there were " + cats + " cats, how many dogs were there?";
                const s = shuffle(r, [dogs + " dogs", (dogs + 5) + " dogs", (dogs - 5) + " dogs", cats + " dogs"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/3 = D/" + cats + ". 3D = 5 × " + cats + ". D = " + dogs + " dogs."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 6: Circle area radius 3 ft (Lesson 88 #5)
            (r) => {
                const quest = "Calculate the area of a circle with a radius of 3 feet. (Use 3.14 for π.)";
                const s = shuffle(r, ["28.26 sq ft", "18.84 sq ft", "9 sq ft", "31.4 sq ft"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = π × r² = 3.14 × (3)² = 3.14 × 9 = 28.26 sq ft."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 7: Mixed number unknown factor 4w = 38 (Lesson 88 #6)
            (r) => {
                const quest = "Express the unknown factor as a mixed number: 4w = 38";
                const s = shuffle(r, ["9 1/2", "9 1/4", "9 3/4", "10"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 38 ÷ 4 = 9 2/4 = 9 1/2."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 8: Cross products 8/100 = 6/w (Lesson 88 #7)
            (r) => {
                const quest = "Use cross products to solve this proportion: 8/100 = 6/w";
                const s = shuffle(r, ["75", "70", "80", "85"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8w = 6 × 100 = 600. w = 600 ÷ 8 = 75."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 9: Operations 6 × 3 − 6 ÷ 3 (Lesson 88 #8)
            (r) => {
                const quest = "Simplify: 6 × 3 − 6 ÷ 3";
                const s = shuffle(r, ["16", "12", "14", "18"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 × 3 = 18, 6 ÷ 3 = 2. 18 − 2 = 16."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 10: Milliliters in liters (Lesson 88 #9)
            (r) => {
                const l = randInt(r, 3, 5);
                const ml = l * 1000;
                const quest = "How many milliliters is " + l + " liters? (1 liter = 1000 milliliters)";
                const s = shuffle(r, [ml + " milliliters", (l * 100) + " milliliters", (ml + 1000) + " milliliters", (l * 10) + " milliliters"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [l + " liters × 1000 mL/liter = " + ml + " milliliters."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 11: Midpoint of line segment (Lesson 88 #10)
            (r) => {
                const quest = "A line segment AC is 2 1/4 inches long. Point B is at the midpoint of AC. What is the length of segment AB?";
                const s = shuffle(r, ["1 1/8 inches", "1 1/4 inches", "1 1/2 inches", "1 inch"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Midpoint divides segment into two equal parts: (2 1/4) ÷ 2 = (9/4) × (1/2) = 9/8 = 1 1/8 inches."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 12: Coordinate rectangle area (Lesson 88 #11)
            (r) => {
                const quest = "On a coordinate plane, a rectangle has vertices at (−2, −2), (4, −2), (4, 2), and (−2, 2). What is the area of the rectangle?";
                const s = shuffle(r, ["24", "20", "28", "16"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Length = 4 − (−2) = 6. Width = 2 − (−2) = 4. Area = 6 × 4 = 24."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 13: Ratio of length to width (Lesson 88 #12)
            (r) => {
                const quest = "For a rectangle with length 6 units and width 4 units, what is the ratio of length to width in simplest form?";
                const s = shuffle(r, ["3 to 2", "2 to 3", "3 to 4", "6 to 4"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio length to width = 6/4 = 3/2 = 3 to 2."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 14: Supplementary angles ADB and BDC (Lesson 88 #14)
            (r) => {
                const bdc = [30, 45, 60][randInt(r, 0, 2)];
                const adb = 180 - bdc;
                const quest = "Angles ADB and BDC are supplementary. If angle BDC measures " + bdc + "º, what is the measure of angle ADB?";
                const s = shuffle(r, [adb + "º", (90 - bdc) + "º", (adb + 10) + "º", (adb - 10) + "º"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Supplementary angles sum to 180º: 180º − " + bdc + "º = " + adb + "º."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 15: Square around circle area (Lesson 88 #15)
            (r) => {
                const rVal = [8, 10, 12][randInt(r, 0, 2)];
                const side = 2 * rVal;
                const area = side * side;
                const quest = "Nathan drew a circle with a radius of " + rVal + " cm. Then he drew a square around the circle touching each side. What is the area of the square?";
                const s = shuffle(r, [area + " cm²", (4 * side) + " cm", (rVal * rVal) + " cm²", (area + 50) + " cm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side of square = diameter = 2 × " + rVal + " = " + side + " cm. Area = (" + side + ")² = " + area + " cm²."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 16: Recipe proportion (Lesson 88 #16)
            (r) => {
                const mult = [4, 5, 6][randInt(r, 0, 2)];
                const sugar = 2 * mult;
                const flour = 3 * mult;
                const quest = "A recipe calls for 3 cups of flour for every 2 cups of sugar. If a baker uses " + sugar + " cups of sugar, how many cups of flour are needed?";
                const s = shuffle(r, [flour + " cups", (flour + 3) + " cups", (flour - 3) + " cups", sugar + " cups"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/2 = F/" + sugar + ". 2F = 3 × " + sugar + ". F = " + flour + " cups."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 17: Rectangular prism volume (Lesson 88 #17)
            (r) => {
                const l = 6;
                const w = 4;
                const h = 3;
                const vol = l * w * h;
                const quest = "Find the volume of a rectangular prism with length " + l + " cm, width " + w + " cm, and height " + h + " cm.";
                const s = shuffle(r, [vol + " cm³", (vol + 12) + " cm³", (vol - 12) + " cm³", "72 cm³"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = " + l + " × " + w + " × " + h + " = " + vol + " cm³."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 18: Simplify 3(a + b) (Lesson 88 #18)
            (r) => {
                const a = [8, 10, 12][randInt(r, 0, 2)];
                const b = [4, 5, 6][randInt(r, 0, 2)];
                const ans = 3 * (a + b);
                const quest = "Simplify: 3(" + a + " + " + b + ")";
                const s = shuffle(r, ["" + ans, "" + (3 * a + b), "" + (ans + 6), "" + (ans - 6)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " + " + b + ") = " + (a + b) + ". 3 × " + (a + b) + " = " + ans + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 19: Fraction to percent (Lesson 88 #19)
            (r) => {
                const pairs = [[3, 20, "15%"], [7, 20, "35%"], [9, 20, "45%"], [11, 20, "55%"]];
                const [n, d, pct] = pairs[randInt(r, 0, pairs.length - 1)];
                const pVal = parseInt(pct);
                const quest = "Write " + n + "/" + d + " as a percent.";
                const s = shuffle(r, [pct, (pVal + 5) + "%", (pVal - 5) + "%", (pVal + 10) + "%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + "/" + d + " = " + (n * 5) + "/100 = " + pct + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

// Lesson 89: Estimating Square Roots
    89: (rng, qIndex) => {
        const framings = [
            // Category 0: Number between 6 and 7 (Lesson 89 #5)
            (r) => {
                const quest = "Which of these numbers is greater than 6 but less than 7?";
                const s = shuffle(r, ["√40", "√26", "√52", "√67"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6² = 36 and 7² = 49. Since 40 is between 36 and 49, √40 is between 6 and 7."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 1: Estimate √50 between integers (Lesson 89 Concept)
            (r) => {
                const quest = "The value of √50 is between which two consecutive whole numbers?";
                const s = shuffle(r, ["7 and 8", "6 and 7", "8 and 9", "5 and 6"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7² = 49 and 8² = 64. Since 49 < 50 < 64, √50 is between 7 and 8."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 2: Evaluate square root of 900 (Lesson 89 #14)
            (r) => {
                const items = [[900, "30"], [400, "20"], [1600, "40"], [2500, "50"]];
                const [val, root] = items[randInt(r, 0, items.length - 1)];
                const quest = "Evaluate: √" + val;
                const s = shuffle(r, [root, "" + (parseInt(root) * 10), "" + (parseInt(root) / 2), "" + (parseInt(root) + 10)]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["√" + val + " = " + root + " because (" + root + ")² = " + val + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 3: Mixed number unknown factor 7n = 30 (Lesson 89 #6)
            (r) => {
                const quest = "Express the unknown factor as a mixed number: 7n = 30";
                const s = shuffle(r, ["4 2/7", "4 1/7", "4 3/7", "5"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = 30 ÷ 7 = 4 2/7."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 4: Circle diameter from radius 4 in. (Lesson 89 #7a)
            (r) => {
                const rVal = [4, 6, 8][randInt(r, 0, 2)];
                const d = 2 * rVal;
                const quest = "Amanda used a compass to draw a circle with a radius of " + rVal + " inches. What is the diameter of the circle?";
                const s = shuffle(r, [d + " inches", rVal + " inches", (d + 2) + " inches", (rVal * rVal) + " inches"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = 2 × radius = 2 × " + rVal + " = " + d + " inches."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 5: Circle circumference from radius 4 in. (Lesson 89 #7b)
            (r) => {
                const rVal = [4, 5, 6][randInt(r, 0, 2)];
                const circ = (2 * 3.14 * rVal).toFixed(2);
                const quest = "Amanda used a compass to draw a circle with a radius of " + rVal + " inches. What is the circumference of the circle? (Use 3.14 for π.)";
                const s = shuffle(r, [circ + " in.", (3.14 * rVal).toFixed(2) + " in.", (3.14 * rVal * rVal).toFixed(2) + " sq in.", (2 * rVal) + " in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = 2 × π × r = 2 × 3.14 × " + rVal + " = " + circ + " in."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 6: Circle area from radius 4 in. (Lesson 89 #8)
            (r) => {
                const rVal = [4, 5][randInt(r, 0, 1)];
                const area = (3.14 * rVal * rVal).toFixed(2);
                const quest = "What is the area of a circle with a radius of " + rVal + " inches? (Use 3.14 for π.)";
                const s = shuffle(r, [area + " sq in.", (2 * 3.14 * rVal).toFixed(2) + " sq in.", (rVal * rVal) + " sq in.", (parseFloat(area) + 6.28).toFixed(2) + " sq in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = π × r² = 3.14 × (" + rVal + ")² = 3.14 × " + (rVal * rVal) + " = " + area + " sq in."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 7: Right triangle area base 8 height 6 (Lesson 89 #9)
            (r) => {
                const quest = "What is the area of a triangle with a base of 8 inches and a height of 6 inches?";
                const s = shuffle(r, ["24 sq in.", "48 sq in.", "14 sq in.", "28 sq in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) / 2 = (8 × 6) / 2 = 24 sq in."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 8: Parallelogram area base 8 height 5 (Lesson 89 #10a)
            (r) => {
                const quest = "What is the area of a parallelogram with a base of 8 inches and a height of 5 inches?";
                const s = shuffle(r, ["40 sq in.", "26 in.", "20 sq in.", "48 sq in."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = base × height = 8 × 5 = 40 sq in."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 9: Parallelogram perimeter sides 8 and 5 (Lesson 89 #10b)
            (r) => {
                const quest = "What is the perimeter of a parallelogram with sides measuring 8 inches and 5 inches?";
                const s = shuffle(r, ["26 inches", "13 inches", "40 sq in.", "30 inches"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (8 + 5) = 2 × 13 = 26 inches."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 10: Subtract 0.5 as fraction from 3 1/4 (Lesson 89 #11)
            (r) => {
                const quest = "Write 0.5 as a fraction and subtract it from 3 1/4. What is the difference?";
                const s = shuffle(r, ["2 3/4", "2 1/4", "3", "2 1/2"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.5 = 1/2 = 2/4. 3 1/4 − 2/4 = 2 5/4 − 2/4 = 2 3/4."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 11: 3/4 as decimal multiplied by 0.6 (Lesson 89 #12)
            (r) => {
                const quest = "Write 3/4 as a decimal, and multiply it by 0.6. What is the product?";
                const s = shuffle(r, ["0.45", "4.5", "0.5", "0.35"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 = 0.75. 0.75 × 0.6 = 0.45."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 12: Operations 2 × 15 + 2 × 12 (Lesson 89 #13)
            (r) => {
                const quest = "Simplify: 2 × 15 + 2 × 12";
                const s = shuffle(r, ["54", "48", "60", "50"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 × 15 = 30, 2 × 12 = 24. 30 + 24 = 54."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 13: Divide $6.00 by 8 (Lesson 89 #15)
            (r) => {
                const quest = "Divide: $6.00 ÷ 8";
                const s = shuffle(r, ["$0.75", "$0.80", "$0.70", "$1.33"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$6.00 ÷ 8 = $0.75."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 14: Fraction product 1 1/5 × 10 × 3/4 (Lesson 89 #16)
            (r) => {
                const quest = "Multiply: 1 1/5 × 10 × 3/4";
                const s = shuffle(r, ["9", "8", "10", "7 1/2"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 1/5 = 6/5. (6/5 × 10) = 12. 12 × 3/4 = 9."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 15: Place value of 7 in 987,654.321 (Lesson 89 #19)
            (r) => {
                const quest = "What is the place value of the 7 in 987,654.321?";
                const s = shuffle(r, ["thousands", "hundreds", "ten-thousands", "thousandths"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The 7 is in the thousands place."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 16: Five hundred ten and five hundredths (Lesson 89 #20)
            (r) => {
                const quest = "Write the decimal number five hundred ten and five hundredths in digits.";
                const s = shuffle(r, ["510.05", "510.5", "500.15", "510.005"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Five hundred ten = 510, five hundredths = 0.05, so 510.05."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 17: Triangle angle sum 30 + 60 + m = 180 (Lesson 89 #21)
            (r) => {
                const a = [30, 40, 50][randInt(r, 0, 2)];
                const b = [60, 70, 80][randInt(r, 0, 2)];
                const m = 180 - a - b;
                const quest = "Find the missing angle measure m: " + a + "º + " + b + "º + m = 180º";
                const s = shuffle(r, [m + "º", (m + 10) + "º", (m - 10) + "º", (180 - a) + "º"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 180º − " + a + "º − " + b + "º = " + m + "º."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 18: Repeated halving of students (Lesson 89 #22)
            (r) => {
                const tot = [32, 48, 64][randInt(r, 0, 2)];
                const ans = tot / 8;
                const quest = "Half of the " + tot + " students are girls. Half of the girls have brown hair. Half of the brown-haired girls wear their hair long. How many are girls with long, brown hair?";
                const s = shuffle(r, [ans + " girls", (ans * 2) + " girls", (ans + 2) + " girls", (tot / 4) + " girls"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 × 1/2 × 1/2 = 1/8. " + tot + " ÷ 8 = " + ans + " girls."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 19: Proportion 12/8 = 21/m (Lesson 89 #26)
            (r) => {
                const quest = "Solve this proportion using cross products: 12/8 = 21/m";
                const s = shuffle(r, ["14", "12", "16", "15"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12m = 8 × 21 = 168. m = 168 ÷ 12 = 14."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 90: Measuring Turns
    90: (rng, qIndex) => {
        const framings = [
            // Category 0: Jose bike turns (Lesson 90 Practice Set a)
            (r) => {
                const quest = "Jose was heading south on his bike. When he reached Sycamore, he turned 90° to the right. Then at Highland he turned 90° to the right, and at Elkins he turned 90° to the right again. Assuming each street was straight, in which direction was Jose heading on Elkins?";
                const s = shuffle(r, ["East", "West", "North", "South"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Start South. 1st right turn: heading West. 2nd right turn: heading North. 3rd right turn: heading East."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 1: Full turns in degrees (Lesson 90 Practice Set b)
            (r) => {
                const turns = [2, 3, 4][randInt(r, 0, 2)];
                const deg = turns * 360;
                const quest = "Kiara made one full turn counterclockwise. Mary made " + turns + " full turns clockwise. How many degrees did Mary turn?";
                const s = shuffle(r, [deg + "°", (deg - 180) + "°", (deg + 180) + "°", (turns * 180) + "°"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One full turn is 360°. " + turns + " × 360° = " + deg + "°."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 2: Average degrees in park turns (Lesson 90 Written Practice Model)
            (r) => {
                const quest = "David ran three laps around the park. On each lap he made five turns to the left and no turns to the right. What was the average number of degrees in each of David's turns? (One complete closed lap is 360°.)";
                const s = shuffle(r, ["72°", "60°", "90°", "120°"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One full closed lap equals a 360° turn. 360° ÷ 5 turns = 72° per turn."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 3: Mean of three decimals (Lesson 90 #1)
            (r) => {
                const quest = "What is the mean of 4.2, 4.8, and 5.1?";
                const s = shuffle(r, ["4.7", "4.6", "4.8", "5.0"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 4.2 + 4.8 + 5.1 = 14.1. Mean = 14.1 ÷ 3 = 4.7."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 4: Movie length and end time (Lesson 90 #2)
            (r) => {
                const dur = [90, 120, 150][randInt(r, 0, 2)];
                const hours = Math.floor(dur / 60);
                const mins = dur % 60;
                let endH = 7 + hours;
                let endM = 15 + mins;
                if (endM >= 60) { endH++; endM -= 60; }
                const timeStr = endH + ":" + (endM < 10 ? "0" + endM : endM) + " p.m.";
                const quest = "A movie is " + dur + " minutes long. If it begins at 7:15 p.m., when will it be over?";
                const s = shuffle(r, [timeStr, (endH - 1) + ":" + (endM < 10 ? "0" + endM : endM) + " p.m.", endH + ":00 p.m.", (endH + 1) + ":" + (endM < 10 ? "0" + endM : endM) + " p.m."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [dur + " minutes = " + hours + " hour(s) and " + mins + " minutes. 7:15 p.m. + " + dur + " minutes = " + timeStr + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 5: Boys percent in classroom (Lesson 90 #3)
            (r) => {
                const boys = [15, 16, 18][randInt(r, 0, 2)];
                const pct = boys * 4;
                const quest = boys + " of the 25 students in Room 20 are boys. What percent of the students in Room 20 are boys?";
                const s = shuffle(r, [pct + "%", (pct + 5) + "%", (pct - 5) + "%", (100 - pct) + "%"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: [boys + "/25 = " + (boys * 4) + "/100 = " + pct + "%."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 6: Triangular prism edges vs vertices (Lesson 90 #4)
            (r) => {
                const quest = "A triangular prism has how many more edges than vertices?";
                const s = shuffle(r, ["3", "2", "4", "5"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A triangular prism has 9 edges and 6 vertices. 9 − 6 = 3."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 7: Construction paper circle radius (Lesson 90 #5)
            (r) => {
                const d = [10, 12, 14, 16][randInt(r, 0, 3)];
                const rad = d / 2;
                const quest = "A teacher cut a " + d + "-inch diameter circle from a sheet of construction paper. What was the radius of the circle?";
                const s = shuffle(r, [rad + " inches", (2 * d) + " inches", (rad + 1) + " inches", (rad - 1) + " inches"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = diameter ÷ 2 = " + d + " ÷ 2 = " + rad + " inches."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 8: Description of trapezoid (Lesson 90 #6)
            (r) => {
                const quest = "Which description correctly defines a trapezoid?";
                const s = shuffle(r, ["A quadrilateral with exactly one pair of parallel sides.", "A quadrilateral with two pairs of parallel sides.", "A parallelogram with four right angles.", "A polygon with three straight sides."]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["By definition, a trapezoid is a quadrilateral with exactly one pair of parallel sides."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 9: Mixed number unknown factor 25n = 70 (Lesson 90 #8)
            (r) => {
                const quest = "Express the unknown factor as a mixed number: 25n = 70";
                const s = shuffle(r, ["2 4/5", "2 2/5", "2 3/5", "3"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = 70 ÷ 25 = 70/25 = 2 20/25 = 2 4/5."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 10: Right triangle area (Lesson 90 #9)
            (r) => {
                const quest = "What is the area of a right triangle with legs measuring 15 mm and 20 mm, and a hypotenuse of 25 mm?";
                const s = shuffle(r, ["150 mm²", "300 mm²", "60 mm", "175 mm²"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) / 2 = (15 × 20) / 2 = 300 / 2 = 150 mm²."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 11: Right triangle perimeter (Lesson 90 #10)
            (r) => {
                const quest = "What is the perimeter of a right triangle with side lengths 15 mm, 20 mm, and 25 mm?";
                const s = shuffle(r, ["60 mm", "50 mm", "150 mm", "75 mm"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 15 + 20 + 25 = 60 mm."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 12: Ratio shortest to longest side (Lesson 90 #11)
            (r) => {
                const quest = "In a right triangle with sides 15 mm, 20 mm, and 25 mm, what is the ratio of the shortest side to the longest side in simplest fraction form?";
                const s = shuffle(r, ["3/5", "3/4", "4/5", "15/25"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shortest side = 15 mm, longest side = 25 mm. Ratio = 15/25 = 3/5."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 13: 6.25 as mixed number minus 5/8 (Lesson 90 #12)
            (r) => {
                const quest = "Write 6.25 as a mixed number and subtract 5/8 from it. What is the difference?";
                const s = shuffle(r, ["5 5/8", "5 3/8", "5 7/8", "6 1/8"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6.25 = 6 1/4 = 6 2/8. 6 2/8 − 5/8 = 5 10/8 − 5/8 = 5 5/8."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 14: 180° turn direction (Lesson 90 #13)
            (r) => {
                const dirs = [["north", "South"], ["south", "North"], ["east", "West"], ["west", "East"]];
                const [start, end] = dirs[randInt(r, 0, dirs.length - 1)];
                const quest = "Ali was facing " + start + ". Then he turned to his left 180°. What direction was he facing after he turned?";
                const s = shuffle(r, [end, start.charAt(0).toUpperCase() + start.slice(1), "Northeast", "Northwest"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A 180° turn reverses your heading: facing " + start + " turns to facing " + end + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 15: 28% to reduced fraction (Lesson 90 #14)
            (r) => {
                const quest = "Write 28% as a reduced fraction.";
                const s = shuffle(r, ["7/25", "14/50", "7/20", "28/100"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["28% = 28/100. Divide numerator and denominator by 4: 7/25."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 16: Proportion 20/12 = n/30 (Lesson 90 #15)
            (r) => {
                const quest = "Solve this proportion: 20/12 = n/30";
                const s = shuffle(r, ["50", "45", "60", "40"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12n = 20 × 30 = 600. n = 600 ÷ 12 = 50."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 17: Decimal division by 10 (Lesson 90 #16)
            (r) => {
                const quest = "Divide: 0.625 ÷ 10";
                const s = shuffle(r, ["0.0625", "6.25", "0.625", "0.00625"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 10 shifts decimal point one place to the left: 0.0625."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 18: Knights on horseback (Lesson 90 #21)
            (r) => {
                const quest = "One third of the two dozen knights were on horseback. How many knights were not on horseback?";
                const s = shuffle(r, ["16 knights", "8 knights", "12 knights", "18 knights"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Two dozen = 24 knights. 1/3 on horseback = 8 knights. Not on horseback = 24 − 8 = 16 knights."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 19: Balancing scale weights (Lesson 90 #22)
            (r) => {
                const left = 38;
                const right = 26;
                const avg = (left + right) / 2; // 32
                const move = left - avg; // 6
                const quest = "Weights totaling 38 ounces were placed on the left side of a balance scale, while weights totaling 26 ounces were placed on the right side. How many ounces of weights should be moved from the left side to the right side to balance the scale?";
                const s = shuffle(r, ["6 ounces", "12 ounces", "8 ounces", "4 ounces"]);
                return { question: quest, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Average weight = (38 + 26) ÷ 2 = 64 ÷ 2 = 32 ounces. Weights to move = 38 − 32 = 6 ounces."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};

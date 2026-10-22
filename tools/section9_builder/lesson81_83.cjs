module.exports = `
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
`;

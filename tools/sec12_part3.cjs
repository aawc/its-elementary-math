// Section 12 - Part 3: Lessons 117, 118, 119, 120

module.exports = {
  getLesson117: () => `    // Lesson 117: Finding a Whole When a Fraction is Known
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
    },`,

  getLesson118: () => `    // Lesson 118: Estimating Area
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
    },`,

  getLesson119: () => `    // Lesson 119: Finding a Whole When a Percent is Known
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
    },`,

  getLesson120: () => `    // Lesson 120: Volume of a Cylinder
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
    },`
};

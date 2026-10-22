module.exports = `
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
`;

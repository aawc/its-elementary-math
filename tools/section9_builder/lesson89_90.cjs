module.exports = `
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
`;

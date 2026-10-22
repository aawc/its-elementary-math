import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 71: Parallelograms
    71: (rng, qIndex) => {
        const framings = [
            // Category 0: Opposite angles in a parallelogram
            (r) => {
                const deg = [80, 100, 110, 115, 120, 70, 75][randInt(r, 0, 6)];
                const q = "In parallelogram QRST, the measure of ∠R is " + deg + "°. What is the measure of the opposite angle, ∠T?";
                const ans = deg + "°";
                const d1 = (180 - deg) + "°";
                const d2 = (deg + 10) + "°";
                const d3 = (deg - 10) + "°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Opposite angles in a parallelogram are equal in measure.", "Since ∠R = " + deg + "°, ∠T = " + deg + "°."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 1: Consecutive (supplementary) angles in a parallelogram
            (r) => {
                const deg = [100, 110, 115, 120, 125, 75, 80][randInt(r, 0, 6)];
                const supp = 180 - deg;
                const q = "In parallelogram QRST, the measure of ∠R is " + deg + "°. What is the measure of consecutive angle ∠Q?";
                const ans = supp + "°";
                const d1 = deg + "°";
                const d2 = (supp + 10) + "°";
                const d3 = (supp - 10) + "°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Consecutive angles in a parallelogram are supplementary (their sum is 180°).", "180° - " + deg + "° = " + supp + "°."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 2: Perimeter of a parallelogram
            (r) => {
                const b = randInt(r, 9, 16);
                const sSide = randInt(r, 4, 8);
                const p = 2 * (b + sSide);
                const q = "Find the perimeter of a parallelogram with a base of " + b + " cm and an adjacent side of " + sSide + " cm.";
                const ans = p + " cm";
                const d1 = (b * sSide) + " cm";
                const d2 = (b + sSide) + " cm";
                const d3 = (2 * b + sSide) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The perimeter of a parallelogram is the sum of all 4 sides: 2 × (" + b + " + " + sSide + ") = " + p + " cm."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 3: Area of a parallelogram
            (r) => {
                const b = randInt(r, 8, 15);
                const h = randInt(r, 4, 8);
                const slant = h + randInt(r, 1, 3);
                const area = b * h;
                const q = "A parallelogram has a base of " + b + " in., a height of " + h + " in., and a slant side of " + slant + " in. What is the area of the parallelogram?";
                const ans = area + " sq. in.";
                const d1 = (area + 6) + " sq. in.";
                const d2 = (area - 4) + " sq. in.";
                const d3 = (b * slant) + " sq. in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area of a parallelogram = base × height.", b + " × " + h + " = " + area + " sq. in. Note that the slant height (" + slant + " in.) is not used to calculate area."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 4: Height in alternate orientation (same area)
            (r) => {
                const pairs = [[12, 6, 9, 8], [15, 4, 10, 6], [16, 6, 12, 8], [20, 6, 15, 8], [14, 6, 12, 7]];
                const [b1, h1, b2, h2] = pairs[randInt(r, 0, pairs.length - 1)];
                const area = b1 * h1;
                const q = "The area of a parallelogram is the same regardless of orientation. If a parallelogram has a base of " + b1 + " cm and a height of " + h1 + " cm, what is its height when the base is " + b2 + " cm?";
                const ans = h2 + " cm";
                const d1 = (h2 + 3) + " cm";
                const d2 = (h2 - 1) + " cm";
                const d3 = (h2 + 5) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = base × height = " + b1 + " × " + h1 + " = " + area + " sq. cm.", "Height with base " + b2 + " cm = " + area + " ÷ " + b2 + " = " + h2 + " cm."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 5: Least Common Multiple (Lesson 71 #1)
            (r) => {
                const pairs = [[6, 10, 30], [8, 12, 24], [6, 8, 24], [9, 12, 36], [10, 15, 30], [4, 6, 12], [8, 10, 40]];
                const [a, b, lcmVal] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the least common multiple of " + a + " and " + b + "?";
                const ans = "" + lcmVal;
                const d1 = "" + (a * b);
                const d2 = "" + Math.floor(lcmVal / 2);
                const d3 = "" + (lcmVal + a);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["List multiples of " + b + " until finding a multiple of " + a + ".", "The least common multiple of " + a + " and " + b + " is " + lcmVal + "."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 6: Difference in elevation (Lesson 71 #2)
            (r) => {
                const peak = 29000 + randInt(r, 10, 80);
                const dip = 1300 + randInt(r, 10, 80);
                const diff = peak + dip;
                const q = "The highest point on land is Mt. Everest, whose peak is " + peak.toLocaleString() + " feet above sea level. The lowest point on land is the Dead Sea, which dips to " + dip.toLocaleString() + " feet below sea level. What is the difference in elevation between these two points?";
                const ans = diff.toLocaleString() + " feet";
                const d1 = (peak - dip).toLocaleString() + " feet";
                const d2 = peak.toLocaleString() + " feet";
                const d3 = (diff + 1000).toLocaleString() + " feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Difference = Peak elevation - Lowest elevation = " + peak + " - (-" + dip + ") = " + peak + " + " + dip + " = " + diff.toLocaleString() + " feet."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 7: Movie elapsed time (Lesson 71 #3)
            (r) => {
                const startHour = randInt(r, 1, 3);
                const startMin = 15;
                const durationMin = 105; // 1 hr 45 min
                const endHour = startHour + 2;
                const q = "The movie started at " + startHour + ":" + startMin + " p.m. If the movie lasted " + durationMin + " minutes, at what time did it end?";
                const ans = endHour + ":00 p.m.";
                const d1 = (endHour - 1) + ":45 p.m.";
                const d2 = (endHour + 1) + ":00 p.m.";
                const d3 = endHour + ":15 p.m.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [durationMin + " minutes = 1 hour and 45 minutes.", startHour + ":" + startMin + " + 1 hour 45 minutes = " + endHour + ":00 p.m."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 8: Reducing fractions before multiplying (Lesson 71 #4)
            (r) => {
                const pairs = [
                    [2, 3, 3, 8, "1/4", ["3/8", "1/6", "2/9"]],
                    [3, 4, 2, 5, "3/10", ["3/8", "1/5", "3/20"]],
                    [3, 8, 4, 9, "1/6", ["1/4", "2/9", "1/8"]],
                    [5, 6, 3, 10, "1/4", ["1/2", "3/10", "1/5"]],
                    [4, 5, 5, 8, "1/2", ["5/8", "1/4", "3/8"]]
                ];
                const [n1, d1, n2, d2, res, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Reduce the fractions before multiplying: (" + n1 + "/" + d1 + ") × (" + n2 + "/" + d2 + ")";
                const ans = res;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cancel common factors between numerators and denominators first.", "(" + n1 + "/" + d1 + ") × (" + n2 + "/" + d2 + ") = " + res + "."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 9: Adding mixed numbers with different denominators (Lesson 71 #8)
            (r) => {
                const q = "Add: 6 1/4 + 3 1/8 + 2 1/2";
                const ans = "11 7/8";
                const d1 = "11 5/8";
                const d2 = "12 1/8";
                const d3 = "11 3/8";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find common denominator 8: 6 2/8 + 3 1/8 + 2 4/8.", "Whole numbers: 6 + 3 + 2 = 11.", "Fractions: 2/8 + 1/8 + 4/8 = 7/8. Total = 11 7/8."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 10: Subtracting mixed numbers with regrouping (Lesson 71 #9)
            (r) => {
                const q = "Subtract: 5 1/4 − 3 3/8";
                const ans = "1 7/8";
                const d1 = "1 5/8";
                const d2 = "2 1/8";
                const d3 = "1 3/8";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rewrite with common denominator 8: 5 2/8 − 3 3/8.", "Regroup 5 2/8 as 4 10/8.", "4 10/8 − 3 3/8 = 1 7/8."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 11: Decimal squared (Lesson 71 #11)
            (r) => {
                const vals = [["3.5", "12.25", "7.0", "12.5", "11.25"], ["2.5", "6.25", "5.0", "6.5", "5.25"], ["1.5", "2.25", "3.0", "2.5", "1.75"], ["4.5", "20.25", "9.0", "20.5", "18.25"]];
                const [base, ans, d1, d2, d3] = vals[randInt(r, 0, vals.length - 1)];
                const q = "Simplify: (" + base + ")²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [base + " × " + base + " = " + ans + "."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 12: Dividing money (Lesson 71 #12)
            (r) => {
                const n = randInt(r, 12, 18);
                const rate = randInt(r, 4, 9);
                const total = n * rate;
                const q = "Divide: $" + total + ".00 ÷ " + n;
                const ans = "$" + rate + ".00";
                const d1 = "$" + (rate + 1) + ".00";
                const d2 = "$" + (rate - 1) + ".00";
                const d3 = "$" + (rate + 2) + ".00";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + total + ".00 ÷ " + n + " = $" + rate + ".00."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 13: Decimal order of operations (Lesson 71 #13)
            (r) => {
                const pairs = [
                    [0.6, "4", ["5", "3.5", "2"]],
                    [0.5, "3", ["4", "2.5", "1.5"]],
                    [0.2, "1.5", ["2.5", "1.0", "3.0"]],
                    [0.8, "9", ["10", "8.5", "4.5"]]
                ];
                const [d, ans, dist] = pairs[randInt(r, 0, pairs.length - 1)];
                const num = (1 + d).toFixed(1);
                const den = (1 - d).toFixed(1);
                const q = "Simplify: (1 + " + d + ") ÷ (1 − " + d + ")";
                const s = shuffle(r, [ans, ...dist]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Numerator: 1 + " + d + " = " + num + ".", "Denominator: 1 − " + d + " = " + den + ".", num + " ÷ " + den + " = " + ans + "."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 14: Soup sales tax and change (Lesson 71 #14)
            (r) => {
                const priceCents = 450;
                const taxCents = 36;
                const totalCents = priceCents + taxCents;
                const paidCents = 2000;
                const changeCents = paidCents - totalCents;
                const changeStr = (changeCents / 100).toFixed(2);
                const totalStr = (totalCents / 100).toFixed(2);
                const q = "Quan ordered a $4.50 bowl of soup. The sales tax was 8% ($0.36). He paid with a $20 bill. How much money should Quan get back in change?";
                const ans = "$" + changeStr;
                const d1 = "$" + ((changeCents + 100) / 100).toFixed(2);
                const d2 = "$" + ((changeCents - 100) / 100).toFixed(2);
                const d3 = "$" + totalStr;
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total price with tax: $4.50 + $0.36 = $" + totalStr + ".", "Change from $20.00: $20.00 − $" + totalStr + " = $" + changeStr + "."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 15: Coordinate plane origin definition (Lesson 71 #15)
            (r) => {
                const q = "What is the name for the point on the coordinate plane that has the coordinates (0, 0)?";
                const ans = "Origin";
                const d1 = "Y-intercept";
                const d2 = "Quadrant center";
                const d3 = "Axis point";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The intersection of the x-axis and y-axis at (0, 0) is called the origin."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 16: Linear equation with decimal (Lesson 71 #17)
            (r) => {
                const pairs = [[1.2, 120, 100], [1.5, 150, 100], [2.5, 100, 40], [1.2, 60, 50], [0.8, 80, 100]];
                const [coeff, rhs, val] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the unknown number f: " + coeff + "f = " + rhs;
                const ans = "" + val;
                const d1 = "" + (val * 10);
                const d2 = "" + (val / 10);
                const d3 = "" + (val + 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both sides by " + coeff + ": " + rhs + " ÷ " + coeff + " = " + val + "."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 17: Prime factorization to reduce fraction (Lesson 71 #19)
            (r) => {
                const fracs = [
                    ["64/224", "2/7", ["1/7", "4/7", "2/9"]],
                    ["48/120", "2/5", ["1/5", "3/5", "4/5"]],
                    ["72/108", "2/3", ["3/4", "1/3", "4/5"]],
                    ["36/90", "2/5", ["1/5", "3/5", "2/9"]],
                    ["40/96", "5/12", ["5/8", "1/3", "7/12"]]
                ];
                const [orig, reduced, d] = fracs[randInt(r, 0, fracs.length - 1)];
                const q = "Reduce the fraction " + orig + " to lowest terms.";
                const ans = reduced;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find the prime factorization or greatest common divisor to reduce " + orig + " to " + reduced + "."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 18: Perimeter of square to area (Lesson 71 #20)
            (r) => {
                const sides = [1.6, 2.1, 2.5, 1.2, 1.5];
                const sVal = sides[randInt(r, 0, sides.length - 1)];
                const perim = (sVal * 4).toFixed(1);
                const area = (sVal * sVal).toFixed(2);
                const q = "The perimeter of a square is " + perim + " meters. What is its area?";
                const ans = area + " sq. m";
                const d1 = (parseFloat(area) + 1.2).toFixed(2) + " sq. m";
                const d2 = (parseFloat(area) - 0.5).toFixed(2) + " sq. m";
                const d3 = (sVal * 4).toFixed(2) + " sq. m";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = Perimeter ÷ 4 = " + perim + " ÷ 4 = " + sVal + " m.", "Area = (" + sVal + ")² = " + area + " sq. m."], lessonNum: 71, lessonTitle: "Parallelograms" };
            },
            // Category 19: Degrees above freezing (Lesson 71 #24)
            (r) => {
                const temp = randInt(r, 55, 88);
                const above = temp - 32;
                const q = "Water freezes at 32° Fahrenheit. A thermometer indicates a temperature of " + temp + "°F. How many degrees Fahrenheit is that above the freezing temperature of water?";
                const ans = above + "°F";
                const d1 = (temp + 32) + "°F";
                const d2 = (above + 10) + "°F";
                const d3 = (above - 10) + "°F";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [temp + "°F − 32°F = " + above + "°F above freezing."], lessonNum: 71, lessonTitle: "Parallelograms" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 72: Fractions Chart • Multiplying Three Fractions
    72: (rng, qIndex) => {
        const framings = [
            // Category 0: Multiplying three fractions (Practice Set d, WP #7)
            (r) => {
                const sets = [
                    ["(2/3) × (4/5) × (3/8)", "1/5", ["2/15", "1/4", "3/10"]],
                    ["(1/2) × (2/3) × (3/4)", "1/4", ["1/3", "1/2", "3/8"]],
                    ["(3/5) × (1/2) × (5/6)", "1/4", ["1/5", "1/2", "3/10"]],
                    ["(2/5) × (3/4) × (5/6)", "1/4", ["1/2", "3/10", "1/5"]],
                    ["(1/3) × (3/4) × (4/5)", "1/5", ["1/4", "2/5", "3/10"]]
                ];
                const [expr, ans, d] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Multiply and simplify: " + expr;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cancel common factors between numerators and denominators.", expr + " = " + ans + "."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 1: Average of three decimal numbers (Lesson 72 #1)
            (r) => {
                const sets = [
                    [4.2, 2.61, 3.6, "3.47", ["3.25", "3.60", "4.00"]],
                    [3.5, 4.25, 2.75, "3.5", ["3.25", "3.75", "4.0"]],
                    [1.8, 3.45, 2.25, "2.5", ["2.25", "2.75", "3.0"]],
                    [5.1, 2.7, 4.2, "4.0", ["3.8", "4.2", "4.5"]]
                ];
                const [n1, n2, n3, avg, d] = sets[randInt(r, 0, sets.length - 1)];
                const q = "What is the average of " + n1 + ", " + n2 + ", and " + n3 + "?";
                const ans = "" + avg;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = " + n1 + " + " + n2 + " + " + n3 + " = " + (n1 + n2 + n3).toFixed(2) + ".", "Average = " + (n1 + n2 + n3).toFixed(2) + " ÷ 3 = " + ans + "."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 2: Tablespoons to cup ratio (Lesson 72 #2)
            (r) => {
                const q = "Four tablespoons equals 1/4 cup. How many tablespoons equal one full cup?";
                const ans = "16 tablespoons";
                const d1 = "12 tablespoons";
                const d2 = "8 tablespoons";
                const d3 = "20 tablespoons";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 full cup contains 4 quarter-cups.", "4 × 4 tablespoons = 16 tablespoons."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 3: Temperature range on the moon (Lesson 72 #3)
            (r) => {
                const high = 130;
                const low = -110;
                const diff = high - low;
                const q = "The temperature on the moon ranges from a high of about " + high + "°C to a low of about " + low + "°C. This is a difference of how many degrees?";
                const ans = diff + "°C";
                const d1 = "20°C";
                const d2 = high + "°C";
                const d3 = (diff - 20) + "°C";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Difference = High − Low = " + high + " − (" + low + ") = " + high + " + " + (-low) + " = " + diff + "°C."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 4: Complementary probability in bag of marbles (Lesson 72 #4)
            (r) => {
                const blue = 4;
                const total = 12;
                const notBlue = total - blue;
                const q = blue + " of the " + total + " marbles in a bag are blue. If one marble is taken from the bag, what is the probability that the marble is NOT blue?";
                const ans = "2/3";
                const d1 = "1/3";
                const d2 = "1/4";
                const d3 = "3/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [notBlue + " marbles are not blue out of " + total + ".", notBlue + "/" + total + " reduces to 2/3."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 5: Circumference in cm from diameter in meters (Lesson 72 #5)
            (r) => {
                const dMeters = randInt(r, 1, 2);
                const dCm = dMeters * 100;
                const circ = Math.round(dCm * 3.14);
                const q = "The diameter of a circle is " + dMeters + " meter" + (dMeters > 1 ? "s" : "") + ". The circumference is how many centimeters? (Use 3.14 for π.)";
                const ans = circ + " cm";
                const d1 = (circ + 50) + " cm";
                const d2 = (circ - 50) + " cm";
                const d3 = (dCm * 2) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dMeters + " meter = " + dCm + " cm.", "Circumference = πd = 3.14 × " + dCm + " = " + circ + " cm."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 6: Fraction of a dollar (Lesson 72 #6)
            (r) => {
                const coins = [["nickel", "1/20", "5 cents"], ["dime", "1/10", "10 cents"], ["quarter", "1/4", "25 cents"]];
                const [coin, ans, cents] = coins[randInt(r, 0, coins.length - 1)];
                const q = "What fraction of a dollar is a " + coin + "?";
                const d1 = coin === "nickel" ? "1/10" : "1/20";
                const d2 = "1/5";
                const d3 = "1/50";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A dollar has 100 cents. A " + coin + " is " + cents + ".", cents.split(' ')[0] + "/100 reduces to " + ans + "."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 7: Unknown number in fraction subtraction equation (Lesson 72 #8)
            (r) => {
                const q = "Find the unknown number n: n − 1/2 = 3/5";
                const ans = "1 1/10";
                const d1 = "1/10";
                const d2 = "4/7";
                const d3 = "1 3/10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add 1/2 to both sides: n = 3/5 + 1/2.", "Common denominator 10: 6/10 + 5/10 = 11/10 = 1 1/10."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 8: Subtraction equation with decimals (Lesson 72 #10)
            (r) => {
                const pairs = [
                    [0.23, "0.77", ["0.87", "0.67", "0.73"]],
                    [0.35, "0.65", ["0.75", "0.55", "0.45"]],
                    [0.42, "0.58", ["0.68", "0.48", "0.52"]],
                    [0.17, "0.83", ["0.93", "0.73", "0.87"]]
                ];
                const [sub, ans, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the unknown number w: 1 − w = " + sub;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 1.00 − " + sub + " = " + ans + "."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 9: Expanded notation with fractions to standard decimal (Lesson 72 #11)
            (r) => {
                const q = "Write the standard decimal number for: (6 × 10) + (4 × 1/10) + (3 × 1/100)";
                const ans = "60.43";
                const d1 = "6.43";
                const d2 = "60.043";
                const d3 = "64.3";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 × 10 = 60, 4 × 0.1 = 0.4, 3 × 0.01 = 0.03.", "60 + 0.4 + 0.03 = 60.43."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 10: Number closest to 1 (Lesson 72 #12)
            (r) => {
                const q = "Which of these numbers is closest to 1?";
                const ans = "0.95";
                const d1 = "0.1";
                const d2 = "-1";
                const d3 = "1.25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the distance to 1: |1 − 0.95| = 0.05, which is smaller than the distance for any other choice."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 11: Largest prime number less than 100 (Lesson 72 #13)
            (r) => {
                const q = "What is the largest prime number that is less than 100?";
                const ans = "97";
                const d1 = "99";
                const d2 = "95";
                const d3 = "91";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["99 is divisible by 3 and 9; 95 is divisible by 5; 91 is divisible by 7 and 13.", "97 has no divisors other than 1 and 97."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 12: Classify quadrilaterals (Lesson 72 #14)
            (r) => {
                const q = "Which of the following figures is NOT a parallelogram?";
                const ans = "Trapezoid";
                const d1 = "Rhombus";
                const d2 = "Rectangle";
                const d3 = "Square";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A parallelogram must have two pairs of parallel sides. A trapezoid has only one pair of parallel sides."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 13: String perimeter to square area (Lesson 72 #15)
            (r) => {
                const q = "A loop of string two feet (24 inches) around is formed to make a square. What is the area of the square in square inches?";
                const ans = "36 sq. in.";
                const d1 = "24 sq. in.";
                const d2 = "48 sq. in.";
                const d3 = "12 sq. in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = Perimeter ÷ 4 = 24 inches ÷ 4 = 6 inches.", "Area = 6 × 6 = 36 square inches."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 14: Complementary angles in geometry (Lesson 72 #16)
            (r) => {
                const deg = randInt(r, 25, 65);
                const comp = 90 - deg;
                const q = "Two acute angles are complementary. If one angle measures " + deg + "°, what is the measure of the other angle?";
                const ans = comp + "°";
                const d1 = (180 - deg) + "°";
                const d2 = (comp + 15) + "°";
                const d3 = (comp - 15) + "°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Complementary angles sum to 90°.", "90° − " + deg + "° = " + comp + "°."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 15: Restaurant menu total (Lesson 72 #17)
            (r) => {
                const q = "From a lunch menu, a customer ordered two sandwiches for $3.50 each, one salad for $3.00, and two juices for $1.10 each. What was the total price before tax?";
                const ans = "$12.20";
                const d1 = "$11.10";
                const d2 = "$13.20";
                const d3 = "$10.50";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 × $3.50 = $7.00.", "1 × $3.00 = $3.00.", "2 × $1.10 = $2.20.", "$7.00 + $3.00 + $2.20 = $12.20."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 16: Formula evaluation A = lw with decimals (Lesson 72 #20)
            (r) => {
                const pairs = [
                    [2.5, 0.4, "1.0", ["1.4", "0.8", "2.0"]],
                    [3.5, 0.6, "2.1", ["2.5", "1.8", "2.8"]],
                    [1.5, 0.8, "1.2", ["1.5", "1.0", "2.4"]],
                    [4.5, 0.2, "0.9", ["1.1", "0.7", "1.8"]]
                ];
                const [l, w, ans, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "If A = lw, and if l = " + l + " and w = " + w + ", what does A equal?";
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply: " + l + " × " + w + " = " + ans + "."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 17: Prime factorization to reduce fraction (Lesson 72 #21)
            (r) => {
                const q = "Write the prime factorization of both the numerator and the denominator of 72/120. Then reduce the fraction.";
                const ans = "3/5";
                const d1 = "2/3";
                const d2 = "3/4";
                const d3 = "4/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["72 = 2³ × 3².", "120 = 2³ × 3 × 5.", "Cancel common factors: 3/5."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 18: Multiplying mixed numbers (Lesson 72 Practice Set e)
            (r) => {
                const q = "Multiply: 2 1/2 × 1 1/10";
                const ans = "2 3/4";
                const d1 = "2 1/20";
                const d2 = "3 1/10";
                const d3 = "2 1/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fractions: 2 1/2 = 5/2, 1 1/10 = 11/10.", "(5/2) × (11/10) = 55/20 = 11/4 = 2 3/4."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            },
            // Category 19: Fractions chart concept (Lesson 72 Practice Set c / WP #25)
            (r) => {
                const q = "According to the Fractions Chart, before multiplying or dividing fractions, mixed numbers must be written in what form?";
                const ans = "Fraction form (improper fractions)";
                const d1 = "Decimal form";
                const d2 = "Whole number form";
                const d3 = "Expanded form";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The proper shape for multiplying and dividing fractions is fraction form (a/b), which requires converting mixed numbers to improper fractions."], lessonNum: 72, lessonTitle: "Fractions Chart • Multiplying Three Fractions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 73: Exponents • Writing Decimal Numbers as Fractions, Part 2
    73: (rng, qIndex) => {
        const framings = [
            // Category 0: Body temperature above normal (Lesson 73 #1)
            (r) => {
                const offsets = [2.6, 2.8, 3.0, 3.2, 3.4];
                const diff = offsets[randInt(r, 0, offsets.length - 1)];
                const temp = (98.6 + diff).toFixed(1);
                const q = "Tomas’s temperature was " + temp + "°F. Normal body temperature is 98.6°F. How many degrees above normal was Tomas’s temperature?";
                const ans = diff.toFixed(1) + "°F";
                const d1 = (diff + 1.2).toFixed(1) + "°F";
                const d2 = (diff - 1.0).toFixed(1) + "°F";
                const d3 = (diff + 2.0).toFixed(1) + "°F";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [temp + "°F − 98.6°F = " + diff.toFixed(1) + "°F."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 1: Pages left in a book (Lesson 73 #2)
            (r) => {
                const total = randInt(r, 160, 220);
                const read = randInt(r, 35, 65);
                const left = total - read;
                const q = "Jill has read " + read + " pages of a " + total + "-page book. How many pages are left for her to read?";
                const ans = left + " pages";
                const d1 = (left + 15) + " pages";
                const d2 = (left - 15) + " pages";
                const d3 = (left + 25) + " pages";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [total + " − " + read + " = " + left + " pages left."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 2: Average pages per day (Lesson 73 #3)
            (r) => {
                const pages = 138;
                const days = 3;
                const avg = Math.floor(pages / days);
                const q = "If a student has " + pages + " pages left to read and wants to finish the book in the next " + days + " days, what is the average number of pages per day the student should read?";
                const ans = avg + " pages per day";
                const d1 = (avg + 4) + " pages per day";
                const d2 = (avg - 4) + " pages per day";
                const d3 = (avg + 10) + " pages per day";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pages + " ÷ " + days + " = " + avg + " pages per day."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 3: Decimal to reduced mixed number (Lesson 73 #4, Practice Set)
            (r) => {
                const pairs = [
                    ["2.5", "2 1/2", ["2 1/5", "2 3/10", "2 2/5"]],
                    ["3.75", "3 3/4", ["3 1/2", "3 7/10", "3 3/5"]],
                    ["1.25", "1 1/4", ["1 1/2", "1 1/5", "1 3/4"]],
                    ["12.5", "12 1/2", ["12 1/5", "12 1/4", "12 3/10"]],
                    ["4.2", "4 1/5", ["4 1/2", "4 1/4", "4 2/5"]]
                ];
                const [dec, mix, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Write " + dec + " as a reduced mixed number.";
                const ans = mix;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Write the decimal part as a fraction over 10 or 100 and reduce to simplest form: " + dec + " = " + mix + "."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 4: Decimal to reduced fraction (Lesson 73 #5, Practice Set)
            (r) => {
                const pairs = [
                    ["0.35", "7/20", ["3/20", "7/10", "9/20"]],
                    ["0.125", "1/8", ["1/4", "3/8", "1/16"]],
                    ["0.24", "6/25", ["12/25", "4/25", "3/20"]],
                    ["0.05", "1/20", ["1/10", "1/5", "1/25"]],
                    ["0.65", "13/20", ["11/20", "7/10", "3/5"]]
                ];
                const [dec, frac, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Write " + dec + " as a reduced fraction.";
                const ans = frac;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dec + " = fraction in lowest terms: " + frac + "."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 5: Total cost with sales tax (Lesson 73 #6)
            (r) => {
                const q = "What is the total cost of a $12.00 item when 5% sales tax ($0.60) is added?";
                const ans = "$12.60";
                const d1 = "$12.05";
                const d2 = "$13.00";
                const d3 = "$11.40";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$12.00 + $0.60 = $12.60."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 6: Order of operations with exponents (Lesson 73 #7)
            (r) => {
                const q = "Simplify: (100 − 10²) ÷ 5²";
                const ans = "0";
                const d1 = "1";
                const d2 = "4";
                const d3 = "25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10² = 100, 5² = 25.", "(100 − 100) ÷ 25 = 0 ÷ 25 = 0."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 7: Product of powers (Lesson 73 Practice Set c)
            (r) => {
                const q = "Find the value of: 2³ × 5²";
                const ans = "200";
                const d1 = "100";
                const d2 = "250";
                const d3 = "60";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2³ = 8, 5² = 25.", "8 × 25 = 200."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 8: Compare fraction to decimal (Lesson 73 #13)
            (r) => {
                const pairs = [
                    ["1/8", "0.125", "="],
                    ["5/2", "2.4", ">"],
                    ["1/4", "0.3", "<"],
                    ["3/5", "0.58", ">"]
                ];
                const [frac, dec, sign] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Compare: " + frac + " O " + dec + " (Choose the correct comparison symbol)";
                const ans = sign;
                const d1 = sign === "=" ? "<" : "=";
                const d2 = sign === ">" ? "<" : ">";
                const d3 = "≤";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert " + frac + " to decimal.", "Then compare with " + dec + "."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 9: Ratio of radius to diameter (Lesson 73 #14)
            (r) => {
                const q = "What is the ratio of the radius of a circle to the diameter of the circle?";
                const ans = "1/2";
                const d1 = "2/1";
                const d2 = "3.14";
                const d3 = "1/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The diameter is twice the length of the radius (d = 2r).", "The ratio of radius to diameter is r / (2r) = 1/2."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 10: Division by a decimal (Lesson 73 #12)
            (r) => {
                const pairs = [
                    [7, 0.4, "17.5", ["16.5", "18.5", "15.0"]],
                    [6, 0.5, "12", ["10", "14", "15"]],
                    [9, 0.6, "15", ["12", "16", "18"]],
                    [8, 0.5, "16", ["14", "18", "20"]]
                ];
                const [n, d, ans, dist] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Divide: " + n + " ÷ " + d;
                const s = shuffle(r, [ans, ...dist]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n + " ÷ " + d + " = (" + n + " × 10) ÷ (" + d + " × 10) = " + (n * 10) + " ÷ " + (d * 10) + " = " + ans + "."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 11: Linear equation with decimal (Lesson 73 #15)
            (r) => {
                const pairs = [
                    [25, 0.175, "0.007", ["0.07", "0.005", "0.075"]],
                    [20, 0.16, "0.008", ["0.08", "0.006", "0.04"]],
                    [50, 0.25, "0.005", ["0.05", "0.002", "0.025"]]
                ];
                const [coeff, rhs, ans, dist] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the unknown number m: " + coeff + "m = " + rhs;
                const s = shuffle(r, [ans, ...dist]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = " + rhs + " ÷ " + coeff + " = " + ans + "."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 12: Decimal sum unknown (Lesson 73 #16)
            (r) => {
                const q = "Find the unknown number y: 1.2 + y + 4.25 = 7";
                const ans = "1.55";
                const d1 = "2.55";
                const d2 = "1.45";
                const d3 = "0.55";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.2 + 4.25 = 5.45.", "y = 7.00 − 5.45 = 1.55."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 13: Place value identification (Lesson 73 #17)
            (r) => {
                const q = "Which digit is in the ten-thousands place in 123,456.78?";
                const ans = "2";
                const d1 = "1";
                const d2 = "3";
                const d3 = "4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In 123,456.78: 1 is hundred-thousands, 2 is ten-thousands, 3 is thousands."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 14: Ordering numbers from least to greatest (Lesson 73 #18)
            (r) => {
                const q = "Which list arranges the following numbers in order from least to greatest: 1/2, 0, 1/10, 1, 1/4?";
                const ans = "0, 1/10, 1/4, 1/2, 1";
                const d1 = "0, 1/4, 1/10, 1/2, 1";
                const d2 = "1/10, 1/4, 1/2, 0, 1";
                const d3 = "0, 1/2, 1/4, 1/10, 1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0 = 0.0, 1/10 = 0.1, 1/4 = 0.25, 1/2 = 0.5, 1 = 1.0.", "Order: 0, 1/10, 1/4, 1/2, 1."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 15: Store discount calculation (Lesson 73 #20)
            (r) => {
                const price = 18;
                const discPct = 20;
                const disc = (price * discPct / 100).toFixed(2);
                const salePrice = (price - parseFloat(disc)).toFixed(2);
                const q = "A store offered a 20% discount on all tools. If the regular price of a hammer was $" + price + ".00, what was the price after the discount?";
                const ans = "$" + salePrice;
                const d1 = "$" + disc;
                const d2 = "$" + (parseFloat(salePrice) + 1).toFixed(2);
                const d3 = "$" + (parseFloat(salePrice) - 1).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Discount = 20% of $" + price + ".00 = $" + disc + ".", "Sale price = $" + price + ".00 − $" + disc + " = $" + salePrice + "."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 16: Segment length subtraction (Lesson 73 #21)
            (r) => {
                const total = 50;
                const part = 16;
                const rem = total - part;
                const q = "Points A, B, and C lie on a line in that order. The length of segment AC is " + total + " mm, and the length of segment AB is " + part + " mm. What is the length of segment BC?";
                const ans = rem + " mm";
                const d1 = (total + part) + " mm";
                const d2 = (rem + 10) + " mm";
                const d3 = (rem - 10) + " mm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["BC = AC − AB = " + total + " mm − " + part + " mm = " + rem + " mm."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 17: Half area of square (Lesson 73 #22)
            (r) => {
                const sVal = randInt(r, 6, 10);
                const totalArea = sVal * sVal;
                const halfArea = totalArea / 2;
                const q = "A square has a side length of " + sVal + " inches. One half of the area of the square is shaded. What is the area of the shaded region?";
                const ans = halfArea + " sq. in.";
                const d1 = totalArea + " sq. in.";
                const d2 = (halfArea + 8) + " sq. in.";
                const d3 = (halfArea - 8) + " sq. in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total area = " + sVal + " × " + sVal + " = " + totalArea + " sq. in.", "Shaded area = " + totalArea + " ÷ 2 = " + halfArea + " sq. in."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 18: Is every square a rectangle? (Lesson 73 #23)
            (r) => {
                const q = "Is every square a rectangle?";
                const ans = "Yes, because every square is a quadrilateral with four right angles";
                const d1 = "No, because a square has equal sides and a rectangle does not";
                const d2 = "No, because rectangles are three-dimensional figures";
                const d3 = "Yes, but only if all four side lengths are unequal";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["By definition, a rectangle is a quadrilateral with four right angles. Every square satisfies this definition."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            },
            // Category 19: Prime factorization using exponents (Lesson 73 #19, Practice Set d)
            (r) => {
                const pairs = [
                    [72, "2³ × 3²", ["2² × 3³", "2⁴ × 3", "2³ × 3³"]],
                    [200, "2³ × 5²", ["2² × 5³", "2⁴ × 5", "2³ × 5"]],
                    [100, "2² × 5²", ["2³ × 5", "2 × 5²", "2² × 5³"]],
                    [144, "2⁴ × 3²", ["2³ × 3³", "2⁵ × 3", "2⁴ × 3"]]
                ];
                const [n, ans, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Write the prime factorization of " + n + " using exponents.";
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find the prime factors of " + n + " and group equal prime factors using exponents: " + ans + "."], lessonNum: 73, lessonTitle: "Exponents • Writing Decimal Numbers as Fractions, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 74: Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers
    74: (rng, qIndex) => {
        const framings = [
            // Category 0: Difference of powers (Lesson 74 #1)
            (r) => {
                const q = "What is the difference when five squared is subtracted from four cubed?";
                const ans = "39";
                const d1 = "29";
                const d2 = "14";
                const d3 = "49";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Four cubed = 4³ = 64.", "Five squared = 5² = 25.", "64 − 25 = 39."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 1: Map scale word problem (Lesson 74 #2)
            (r) => {
                const scale = 10;
                const distInches = [3, 3.5, 4, 4.5, 5][randInt(r, 0, 4)];
                const realDist = distInches * scale;
                const q = "On a map, 1 inch represents a distance of " + scale + " miles. If two cities are " + distInches + " inches apart on the map, approximately how many miles apart are they?";
                const ans = realDist + " miles";
                const d1 = (realDist + 15) + " miles";
                const d2 = (realDist - 15) + " miles";
                const d3 = (realDist * 2) + " miles";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [distInches + " inches × " + scale + " miles/inch = " + realDist + " miles."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 2: Convert fraction to decimal (Lesson 74 #3, Practice Set)
            (r) => {
                const pairs = [
                    ["7/20", "0.35", ["0.45", "0.25", "0.7"]],
                    ["7/25", "0.28", ["0.38", "0.25", "0.7"]],
                    ["3/4", "0.75", ["0.5", "0.65", "0.34"]],
                    ["1/8", "0.125", ["0.18", "0.25", "0.8"]],
                    ["3/10", "0.3", ["0.03", "0.33", "0.13"]],
                    ["2 3/4", "2.75", ["2.34", "2.5", "2.25"]]
                ];
                const [frac, dec, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Convert " + frac + " to a decimal number.";
                const ans = dec;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide the numerator by the denominator: " + frac + " = " + dec + "."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 3: Spinner probability ratio as fraction and decimal (Lesson 74 #4)
            (r) => {
                const q = "A spinner is divided into 4 equal sectors numbered 1, 2, 3, and 4. What is the probability of spinning a number greater than 1? Express as a fraction and as a decimal.";
                const ans = "3/4 and 0.75";
                const d1 = "1/4 and 0.25";
                const d2 = "1/2 and 0.5";
                const d3 = "3/4 and 0.65";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Numbers greater than 1 are 2, 3, 4 (3 favorable outcomes out of 4).", "Probability = 3/4 = 0.75."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 4: Decimal to reduced fraction (Lesson 74 #5)
            (r) => {
                const q = "Write 0.24 as a reduced fraction.";
                const ans = "6/25";
                const d1 = "12/50";
                const d2 = "24/100";
                const d3 = "3/10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.24 = 24/100.", "Divide numerator and denominator by 4: 6/25."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 5: Yard to feet comparison word problem (Lesson 74 #6)
            (r) => {
                const bbFeet = 400;
                const golfYards = 300;
                const golfFeet = golfYards * 3;
                const diff = golfFeet - bbFeet;
                const q = "Steve hit a baseball " + bbFeet + " feet. Lesley hit a golf ball " + golfYards + " yards. How many feet farther did the golf ball travel than the baseball?";
                const ans = diff + " feet";
                const d1 = "100 feet";
                const d2 = "600 feet";
                const d3 = "900 feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert yards to feet: " + golfYards + " yards × 3 = " + golfFeet + " feet.", golfFeet + " − " + bbFeet + " = " + diff + " feet."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 6: Parallelogram area A = bh (Lesson 74 #7)
            (r) => {
                const b = 12;
                const h = 8;
                const area = b * h;
                const q = "If A = bh, and if b = " + b + " and h = " + h + ", what does A equal?";
                const ans = "" + area;
                const d1 = "" + (2 * (b + h));
                const d2 = "" + Math.floor(area / 2);
                const d3 = "" + (area + 12);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A = 12 × 8 = 96."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 7: Comparing exponent with addition (Lesson 74 #8)
            (r) => {
                const q = "Compare: 3² O 3 + 3 (Choose the correct comparison symbol)";
                const ans = ">";
                const d1 = "<";
                const d2 = "=";
                const d3 = "≤";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3² = 9.", "3 + 3 = 6.", "Since 9 > 6, 3² > 3 + 3."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 8: Decimal operations (Lesson 74 #14)
            (r) => {
                const q = "Simplify: (4 + 3.2) − 0.01";
                const ans = "7.19";
                const d1 = "7.1";
                const d2 = "7.21";
                const d3 = "6.19";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 + 3.2 = 7.2.", "7.20 − 0.01 = 7.19."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 9: Unit price calculation (Lesson 74 #16)
            (r) => {
                const cost = 10.44;
                const unitCost = (cost / 12).toFixed(2);
                const q = "LaFonda bought a dozen golf balls for $" + cost.toFixed(2) + ". What was the cost of each golf ball?";
                const ans = "$" + unitCost;
                const d1 = "$0.97";
                const d2 = "$0.77";
                const d3 = "$1.00";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 dozen = 12 items.", "$" + cost.toFixed(2) + " ÷ 12 = $" + unitCost + " each."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 10: Estimating product (Lesson 74 #17)
            (r) => {
                const q = "Estimate the product of 81 and 38 by rounding each number to the nearest ten before multiplying.";
                const ans = "3200";
                const d1 = "3000";
                const d2 = "2400";
                const d3 = "3600";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["81 rounds to 80.", "38 rounds to 40.", "80 × 40 = 3200."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 11: Average of 4 values (Lesson 74 #18)
            (r) => {
                const vals = [42, 46, 35, 57];
                const sum = vals.reduce((a, b) => a + b, 0);
                const avg = sum / vals.length;
                const q = "In four days Jamar read 42 pages, 46 pages, 35 pages, and 57 pages. What was the average number of pages he read per day?";
                const ans = avg + " pages";
                const d1 = (avg + 3) + " pages";
                const d2 = (avg - 3) + " pages";
                const d3 = (avg + 10) + " pages";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 42 + 46 + 35 + 57 = " + sum + ".", "Average = " + sum + " ÷ 4 = " + avg + " pages."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 12: Least Common Multiple of three numbers (Lesson 74 #19)
            (r) => {
                const q = "What is the least common multiple of 6, 8, and 12?";
                const ans = "24";
                const d1 = "48";
                const d2 = "12";
                const d3 = "72";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 12: 12, 24, 36...", "24 is divisible by 6, 8, and 12. LCM = 24."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 13: Three-term addition with unknown (Lesson 74 #20)
            (r) => {
                const q = "Find the unknown number c: 24 + c + 96 = 150";
                const ans = "30";
                const d1 = "20";
                const d2 = "40";
                const d3 = "25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["24 + 96 = 120.", "c = 150 − 120 = 30."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 14: Prime factorization to reduce fraction (Lesson 74 #21)
            (r) => {
                const q = "Reduce the fraction 40/96 to lowest terms.";
                const ans = "5/12";
                const d1 = "5/8";
                const d2 = "10/24";
                const d3 = "4/12";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both numerator and denominator by their GCF, 8: 40 ÷ 8 = 5, 96 ÷ 8 = 12. Fraction = 5/12."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 15: Circumference of circle inscribed in square (Lesson 74 #22)
            (r) => {
                const perim = 40;
                const side = perim / 4;
                const circ = (side * 3.14).toFixed(1);
                const q = "A circle is inscribed inside a square whose perimeter is " + perim + " centimeters. What is the circumference of the circle? (Use 3.14 for π.)";
                const ans = circ + " cm";
                const d1 = (side * 2 * 3.14).toFixed(1) + " cm";
                const d2 = perim + " cm";
                const d3 = (side * side).toFixed(1) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side of square = 40 ÷ 4 = 10 cm.", "Diameter of inscribed circle = side = 10 cm.", "Circumference = πd = 3.14 × 10 = " + circ + " cm."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 16: Fraction of cyclists (Lesson 74 #23)
            (r) => {
                const q = "Twenty-four of the three dozen cyclists rode mountain bikes. What fraction of the cyclists rode mountain bikes?";
                const ans = "2/3";
                const d1 = "3/4";
                const d2 = "1/2";
                const d3 = "5/6";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Three dozen = 3 × 12 = 36 cyclists.", "Fraction = 24/36 = 2/3."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 17: Classification why some rectangles not squares (Lesson 74 #24)
            (r) => {
                const q = "Why are some rectangles not squares?";
                const ans = "Because not all rectangles have four sides of equal length";
                const d1 = "Because rectangles do not have right angles";
                const d2 = "Because rectangles are open figures";
                const d3 = "Because rectangles have curved edges";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A square requires all four sides to be equal in length. Rectangles have four right angles, but opposite sides may have different lengths from adjacent sides."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 18: Fraction on number line (Lesson 74 #25)
            (r) => {
                const q = "An arrow points to a number three quarters of the way from 0 to 1 on a number line. To what decimal number is the arrow pointing?";
                const ans = "0.75";
                const d1 = "0.5";
                const d2 = "0.25";
                const d3 = "0.34";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 = 3 ÷ 4 = 0.75."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            },
            // Category 19: Total surface area of a cube (Lesson 74 #27)
            (r) => {
                const edge = randInt(r, 3, 5);
                const faceArea = edge * edge;
                const totalArea = 6 * faceArea;
                const q = "A cube has edges that are " + edge + " feet long. What is the total surface area of the cube?";
                const ans = totalArea + " sq. ft.";
                const d1 = (edge * edge * edge) + " sq. ft.";
                const d2 = faceArea + " sq. ft.";
                const d3 = (4 * faceArea) + " sq. ft.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area of each face = " + edge + " × " + edge + " = " + faceArea + " sq. ft.", "A cube has 6 faces: 6 × " + faceArea + " = " + totalArea + " sq. ft."], lessonNum: 74, lessonTitle: "Writing Fractions as Decimal Numbers • Writing Ratios as Decimal Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 75: Writing Fractions and Decimals as Percents, Part 1
    75: (rng, qIndex) => {
        const framings = [
            // Category 0: Reciprocal of mixed number (Lesson 75 #1)
            (r) => {
                const pairs = [
                    ["2 3/5", "5/13", "13/5", ["3/13", "5/8", "2/13"]],
                    ["1 3/4", "4/7", "7/4", ["3/7", "4/5", "1/7"]],
                    ["3 1/3", "3/10", "10/3", ["1/10", "3/8", "2/10"]],
                    ["2 1/2", "2/5", "5/2", ["1/5", "2/3", "1/2"]]
                ];
                const [mix, recip, imp, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the reciprocal of " + mix + "?";
                const ans = recip;
                const d1 = imp;
                const s = shuffle(r, [ans, d1, d[0], d[1]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fraction: " + mix + " = " + imp + ".", "Invert numerator and denominator: reciprocal is " + recip + "."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 1: Elapsed time forward (Lesson 75 #2)
            (r) => {
                const q = "What time is one hour thirty-five minutes after 2:30 p.m.?";
                const ans = "4:05 p.m.";
                const d1 = "3:45 p.m.";
                const d2 = "4:15 p.m.";
                const d3 = "3:05 p.m.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2:30 p.m. + 1 hour = 3:30 p.m.", "3:30 p.m. + 35 minutes = 4:05 p.m."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 2: Unit cost per ounce (Lesson 75 #3)
            (r) => {
                const q = "A 1-pound box of candy cost $4.00. What was the cost per ounce? (1 pound = 16 ounces)";
                const ans = "$0.25";
                const d1 = "$0.20";
                const d2 = "$0.30";
                const d3 = "$0.40";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$4.00 ÷ 16 ounces = $0.25 per ounce (or 25¢ per ounce)."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 3: Total price with sales tax (Lesson 75 #4)
            (r) => {
                const subtotal = 10.00;
                const taxRate = 8;
                const tax = 0.80;
                const total = (subtotal + tax).toFixed(2);
                const q = "A meal order totaled $" + subtotal.toFixed(2) + " before tax. What was the total price when " + taxRate + "% sales tax ($" + tax.toFixed(2) + ") was added?";
                const ans = "$" + total;
                const d1 = "$" + (subtotal - tax).toFixed(2);
                const d2 = "$" + (parseFloat(total) + 1).toFixed(2);
                const d3 = "$10.08";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + subtotal.toFixed(2) + " + $" + tax.toFixed(2) + " = $" + total + "."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 4: Complementary probability / chance (Lesson 75 #5)
            (r) => {
                const rainChance = [35, 40, 50, 60, 65][randInt(r, 0, 4)];
                const noRain = 100 - rainChance;
                const q = "If the chance of rain is " + rainChance + "%, what is the chance that it will NOT rain?";
                const ans = noRain + "%";
                const d1 = (noRain + 15) + "%";
                const d2 = (noRain - 15) + "%";
                const d3 = (noRain > 50 ? noRain - 25 : noRain + 25) + "%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total certainty is 100%.", "100% − " + rainChance + "% = " + noRain + "%."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 5: Cube edge count (Lesson 75 #6)
            (r) => {
                const q = "How many edges does a cube have?";
                const ans = "12";
                const d1 = "6";
                const d2 = "8";
                const d3 = "16";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A cube has 6 faces, 8 vertices, and 12 edges."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 6: Fraction to percent (Lesson 75 Practice Set a-f)
            (r) => {
                const pairs = [
                    ["3/4", "75%", ["70%", "80%", "65%"]],
                    ["3/20", "15%", ["20%", "10%", "30%"]],
                    ["7/25", "28%", ["25%", "35%", "20%"]],
                    ["2/5", "40%", ["25%", "50%", "30%"]],
                    ["1/10", "10%", ["15%", "5%", "20%"]],
                    ["3/50", "6%", ["12%", "3%", "15%"]]
                ];
                const [frac, pct, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Write the fraction " + frac + " as a percent.";
                const ans = pct;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply the fraction by 100%: " + frac + " × 100% = " + pct + "."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 7: Decimal to percent (Lesson 75 Practice Set i-n)
            (r) => {
                const pairs = [
                    ["0.25", "25%", ["20%", "30%", "2.5%"]],
                    ["0.3", "30%", ["3%", "33%", "40%"]],
                    ["0.05", "5%", ["50%", "0.5%", "15%"]],
                    ["0.7", "70%", ["7%", "75%", "60%"]],
                    ["0.15", "15%", ["1.5%", "20%", "50%"]],
                    ["1.0", "100%", ["10%", "1%", "50%"]]
                ];
                const [dec, pct, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Write the decimal number " + dec + " as a percent.";
                const ans = pct;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply by 100% (shift decimal point two places to the right): " + dec + " = " + pct + "."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 8: Equivalent fraction with denominator 100 (Lesson 75 #8)
            (r) => {
                const q = "Write 3/20 as a fraction with a denominator of 100.";
                const ans = "15/100";
                const d1 = "3/100";
                const d2 = "30/100";
                const d3 = "20/100";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerator and denominator by 5: (3 × 5) / (20 × 5) = 15/100."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 9: Percent to reduced fraction (Lesson 75 #9)
            (r) => {
                const pairs = [
                    ["12%", "3/25", ["6/25", "3/50", "1/8"]],
                    ["24%", "6/25", ["12/25", "3/25", "1/4"]],
                    ["15%", "3/20", ["1/5", "3/10", "1/20"]],
                    ["35%", "7/20", ["3/10", "2/5", "7/10"]],
                    ["45%", "9/20", ["4/10", "1/2", "9/10"]]
                ];
                const [pct, frac, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Write " + pct + " as a reduced fraction.";
                const ans = frac;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + " = " + pct.replace('%', '') + "/100.", "Reduce to lowest terms: " + frac + "."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 10: Test questions percentage correct (Lesson 75 #18)
            (r) => {
                const correct = randInt(r, 16, 19);
                const total = 20;
                const pct = (correct / total) * 100;
                const q = "Nathan correctly answered " + correct + " of the " + total + " questions on the test. What percent of the questions did Nathan answer correctly?";
                const ans = pct + "%";
                const d1 = (pct - 10) + "%";
                const d2 = (pct - 5) + "%";
                const d3 = (100 - pct) + "%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [correct + "/" + total + " = " + (correct * 5) + "/100 = " + pct + "%."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 11: Rolling tire distance / circumference (Lesson 75 #19)
            (r) => {
                const diam = 5;
                const circ = Math.round(diam * 3.14);
                const q = "The diameter of a big tractor tire is about " + diam + " feet. As the tire rolls one full turn, the tire rolls about how many feet? (Round to the nearest foot; use 3.14 for π.)";
                const ans = circ + " feet";
                const d1 = (circ + 5) + " feet";
                const d2 = (circ - 5) + " feet";
                const d3 = (diam * diam) + " feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distance in one turn = Circumference = πd = 3.14 × " + diam + " = 15.7 ≈ " + circ + " feet."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 12: Matching place value (Lesson 75 #20)
            (r) => {
                const q = "Which digit in 4.87 has the same place value as the 9 in 0.195?";
                const ans = "7";
                const d1 = "4";
                const d2 = "8";
                const d3 = "5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In 0.195, the 9 is in the hundredths place.", "In 4.87, the 7 is in the hundredths place."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 13: Reduce fraction via prime factorization (Lesson 75 #21)
            (r) => {
                const q = "Write the prime factorization of both the numerator and denominator of 18/30. Then reduce the fraction.";
                const ans = "3/5";
                const d1 = "2/5";
                const d2 = "3/10";
                const d3 = "6/10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["18 = 2 × 3².", "30 = 2 × 3 × 5.", "Cancel common factor (2 × 3 = 6): 18/30 = 3/5."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 14: Greatest Common Factor (Lesson 75 #22)
            (r) => {
                const pairs = [[18, 30, 6], [24, 36, 12], [20, 30, 10], [16, 24, 8]];
                const [a, b, gcf] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "What is the greatest common factor of " + a + " and " + b + "?";
                const ans = "" + gcf;
                const d1 = "" + (gcf * 2);
                const d2 = "" + Math.floor(gcf / 2);
                const d3 = "" + (gcf + 1);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Factors of " + a + " and " + b + " show that their greatest common divisor is " + gcf + "."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 15: Definition of reciprocals (Lesson 75 #23)
            (r) => {
                const q = "If the product of two numbers is 1, then the two numbers are which of the following?";
                const ans = "Reciprocals";
                const d1 = "Opposites";
                const d2 = "Prime numbers";
                const d3 = "Equal";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["By definition, two numbers whose product is 1 are reciprocals (multiplicative inverses)."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 16: Quadrilateral classification justification (Lesson 75 #24)
            (r) => {
                const q = "Why is every rectangle a quadrilateral?";
                const ans = "A rectangle is a polygon with four sides";
                const d1 = "A rectangle has four equal sides";
                const d2 = "A rectangle has no right angles";
                const d3 = "A rectangle is a three-dimensional prism";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A quadrilateral is any polygon with 4 sides. Every rectangle has 4 sides."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 17: Triangle area evaluation formula (Lesson 75 #25)
            (r) => {
                const b = 8;
                const h = 6;
                const ans = (b * h) / 2;
                const q = "If b = " + b + " and h = " + h + ", what does (bh)/2 equal?";
                const ansStr = "" + ans;
                const d1 = "" + (b * h);
                const d2 = "" + (b + h);
                const d3 = "" + (ans + 4);
                const s = shuffle(r, [ansStr, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["bh = " + b + " × " + h + " = " + (b * h) + ".", "(bh)/2 = " + (b * h) + " ÷ 2 = " + ans + "."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 18: Prime factorization with exponents (Lesson 75 #26)
            (r) => {
                const q = "Write the prime factorization of 400 using exponents.";
                const ans = "2⁴ × 5²";
                const d1 = "2² × 5⁴";
                const d2 = "2³ × 5²";
                const d3 = "2⁴ × 5³";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["400 = 16 × 25 = 2⁴ × 5²."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            },
            // Category 19: Rectangle area from coordinate vertices (Lesson 75 #27-28)
            (r) => {
                const q = "A rectangle has vertices at (3, 1), (3, −1), (−1, 1), and (−1, −1). What is the area of the rectangle?";
                const ans = "8 square units";
                const d1 = "12 square units";
                const d2 = "6 square units";
                const d3 = "16 square units";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Length = 3 − (−1) = 4 units.", "Width = 1 − (−1) = 2 units.", "Area = 4 × 2 = 8 square units."], lessonNum: 75, lessonTitle: "Writing Fractions and Decimals as Percents, Part 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 76: Comparing Fractions by Converting to Decimal Form
    76: (rng, qIndex) => {
        const framings = [
            // Category 0: Compare two fractions via decimal form (Practice Set a-d, WP #4)
            (r) => {
                const sets = [
                    ["3/5", "5/8", "<", "0.600 < 0.625"],
                    ["5/8", "3/5", ">", "0.625 > 0.600"],
                    ["2/5", "1/4", ">", "0.40 > 0.25"],
                    ["3/8", "2/5", "<", "0.375 < 0.400"],
                    ["1/4", "3/10", "<", "0.25 < 0.30"]
                ];
                const [f1, f2, sign, exp] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Compare by first converting to decimal form: " + f1 + " O " + f2 + " (Choose the correct symbol)";
                const ans = sign;
                const d1 = sign === "<" ? ">" : "<";
                const d2 = "=";
                const d3 = "≥";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert both fractions to decimals.", exp + ", so " + f1 + " " + sign + " " + f2 + "."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 1: Compare fraction and decimal (Practice Set e-f)
            (r) => {
                const sets = [
                    ["3/4", "0.7", ">", "3/4 = 0.75 and 0.75 > 0.70"],
                    ["2/5", "0.5", "<", "2/5 = 0.40 and 0.40 < 0.50"],
                    ["1/8", "0.15", "<", "1/8 = 0.125 and 0.125 < 0.150"],
                    ["7/10", "0.68", ">", "7/10 = 0.70 and 0.70 > 0.68"]
                ];
                const [frac, dec, sign, exp] = sets[randInt(r, 0, sets.length - 1)];
                const q = "Compare: " + frac + " O " + dec + " (Choose the correct comparison symbol)";
                const ans = sign;
                const d1 = sign === ">" ? "<" : ">";
                const d2 = "=";
                const d3 = "≤";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [exp + ", so " + frac + " " + sign + " " + dec + "."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 2: Product of powers (Lesson 76 #1)
            (r) => {
                const q = "What is the product of ten squared and two cubed?";
                const ans = "800";
                const d1 = "400";
                const d2 = "160";
                const d3 = "64";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ten squared = 10² = 100.", "Two cubed = 2³ = 8.", "100 × 8 = 800."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 3: Midpoint between two decimals (Lesson 76 #2)
            (r) => {
                const sets = [
                    [4.5, 6.7, "5.6", ["5.4", "5.8", "6.1"]],
                    [3.2, 5.8, "4.5", ["4.2", "4.8", "5.0"]],
                    [2.4, 4.6, "3.5", ["3.2", "3.8", "4.0"]],
                    [1.5, 3.5, "2.5", ["2.2", "2.8", "3.0"]]
                ];
                const [a, b, ans, d] = sets[randInt(r, 0, sets.length - 1)];
                const q = "What number is halfway between " + a + " and " + b + "?";
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the two numbers and divide by 2: (" + a + " + " + b + ") ÷ 2 = " + (a + b).toFixed(1) + " ÷ 2 = " + ans + "."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 4: Dog years word problem (Lesson 76 #3)
            (r) => {
                const age = randInt(r, 11, 15);
                const humanAge = age * 7;
                const q = "It is said that one year of a dog’s life is the same as 7 years of a human’s life. Using that thinking, a dog that is " + age + " years old is how many 'human' years old?";
                const ans = humanAge + " years";
                const d1 = (humanAge + 14) + " years";
                const d2 = (humanAge - 14) + " years";
                const d3 = (age + 14) + " years";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [age + " × 7 = " + humanAge + " human years."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 5: Fraction of circle to percent (Lesson 76 #5)
            (r) => {
                const q = "Three eighths of a circle is shaded. What percent of the circle is shaded?";
                const ans = "37.5%";
                const d1 = "38%";
                const d2 = "37%";
                const d3 = "75%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/8 = 0.375.", "0.375 × 100% = 37.5%."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 6: Measurement unit choice (Lesson 76 #6)
            (r) => {
                const q = "Choose the most appropriate unit for measuring the circumference of a juice glass.";
                const ans = "Centimeters";
                const d1 = "Meters";
                const d2 = "Kilometers";
                const d3 = "Miles";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A juice glass is a small object whose dimensions are best measured in centimeters."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 7: Mixed number to decimal (Lesson 76 #7)
            (r) => {
                const pairs = [
                    ["2 2/5", "2.4", ["2.2", "2.5", "2.6"]],
                    ["1 3/4", "1.75", ["1.5", "1.34", "1.8"]],
                    ["3 1/2", "3.5", ["3.2", "3.12", "3.8"]],
                    ["2 1/4", "2.25", ["2.4", "2.14", "2.5"]],
                    ["4 3/5", "4.6", ["4.3", "4.5", "4.8"]]
                ];
                const [mix, dec, d] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Convert " + mix + " to a decimal number.";
                const ans = dec;
                const s = shuffle(r, [ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert the fractional part to decimal: " + mix + " = " + dec + "."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 8: Decimal to fraction and percent (Lesson 76 #8)
            (r) => {
                const q = "Write 0.04 as a reduced fraction and as a percent.";
                const ans = "1/25 and 4%";
                const d1 = "1/4 and 40%";
                const d2 = "1/25 and 40%";
                const d3 = "4/10 and 4%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.04 = 4/100 = 1/25.", "0.04 × 100% = 4%."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 9: Division by halving both numbers (Lesson 76 #9)
            (r) => {
                const q = "Instead of dividing 200 by 18, Sam found half of each number and then divided. What is 100 ÷ 9 written as a mixed number?";
                const ans = "11 1/9";
                const d1 = "11 1/18";
                const d2 = "10 1/9";
                const d3 = "12 1/9";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 ÷ 9 = 11 with a remainder of 1, which equals 11 1/9."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 10: Equivalent fraction with 100 denominator (Lesson 76 #10)
            (r) => {
                const q = "Find the missing numerator: 4/5 = ?/100";
                const ans = "80";
                const d1 = "20";
                const d2 = "40";
                const d3 = "75";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerator and denominator by 20: 4 × 20 = 80, 5 × 20 = 100. ? = 80."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 11: Adding three mixed numbers (Lesson 76 #11)
            (r) => {
                const q = "Add: 6 1/3 + 3 1/4 + 2 1/2";
                const ans = "12 1/12";
                const d1 = "11 11/12";
                const d2 = "11 7/12";
                const d3 = "12 5/12";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator 12: 6 4/12 + 3 3/12 + 2 6/12 = 11 13/12 = 12 1/12."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 12: Dividing mixed numbers (Lesson 76 #13)
            (r) => {
                const q = "Divide: 5 1/3 ÷ 2 2/3";
                const ans = "2";
                const d1 = "2 1/3";
                const d2 = "1 1/2";
                const d3 = "3";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fractions: 16/3 ÷ 8/3.", "Multiply by reciprocal: (16/3) × (3/8) = 16/8 = 2."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 13: Multi-addend decimal equation (Lesson 76 #14)
            (r) => {
                const q = "Find the unknown number n: 16.7 + 0.48 + n = 20";
                const ans = "2.82";
                const d1 = "3.82";
                const d2 = "2.72";
                const d3 = "1.82";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["16.7 + 0.48 = 17.18.", "n = 20.00 − 17.18 = 2.82."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 14: Subtraction equation with decimal (Lesson 76 #15)
            (r) => {
                const q = "Find the unknown number d: 12 − d = 4.75";
                const ans = "7.25";
                const d1 = "8.25";
                const d2 = "7.75";
                const d3 = "6.25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["d = 12.00 − 4.75 = 7.25."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 15: Decimal multiplication (Lesson 76 #16)
            (r) => {
                const q = "Multiply: 0.35 × 0.45";
                const ans = "0.1575";
                const d1 = "1.575";
                const d2 = "0.01575";
                const d3 = "0.1475";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["35 × 45 = 1575.", "There are 4 decimal places in total, so 0.35 × 0.45 = 0.1575."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 16: Division by power of 10 (Lesson 76 #17)
            (r) => {
                const q = "Divide: 4.3 ÷ 10²";
                const ans = "0.043";
                const d1 = "0.43";
                const d2 = "430";
                const d3 = "0.0043";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10² = 100.", "4.3 ÷ 100 = 0.043."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 17: Median of decimals (Lesson 76 #18)
            (r) => {
                const q = "Find the median of these numbers: 0.3, 0.25, 0.313, 0.2, 0.27";
                const ans = "0.27";
                const d1 = "0.25";
                const d2 = "0.3";
                const d3 = "0.313";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Arrange in order from least to greatest: 0.2, 0.25, 0.27, 0.3, 0.313.", "The middle (median) number is 0.27."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 18: Prime numbers between 40 and 50 (Lesson 76 #20)
            (r) => {
                const q = "Which of the following lists all the prime numbers between 40 and 50?";
                const ans = "41, 43, 47";
                const d1 = "41, 43, 45, 47";
                const d2 = "43, 47, 49";
                const d3 = "41, 47";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Check odd numbers: 41 (prime), 43 (prime), 45 (divisible by 5), 47 (prime), 49 (divisible by 7). Prime numbers are 41, 43, 47."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            },
            // Category 19: Complementary angles in right triangle (Lesson 76 #23)
            (r) => {
                const deg = randInt(r, 45, 65);
                const comp = 90 - deg;
                const q = "In a right triangle, the two acute angles are complementary. If one acute angle measures " + deg + "°, what is the measure of the other acute angle?";
                const ans = comp + "°";
                const d1 = (comp + 15) + "°";
                const d2 = (comp - 15) + "°";
                const d3 = (180 - deg) + "°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Complementary angles sum to 90°.", "90° − " + deg + "° = " + comp + "°."], lessonNum: 76, lessonTitle: "Comparing Fractions by Converting to Decimal Form" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 77: Finding Unstated Information in Fraction Problems
    77: (rng, qIndex) => {
        const framings = [
            // Category 0: Weight on the Moon (Lesson 77 #1)
            (r) => {
                const mults = [114, 126, 138, 150, 96];
                const earthWeight = mults[randInt(r, 0, mults.length - 1)];
                const moonWeight = Math.floor(earthWeight / 6);
                const q = "The weight of an object on the Moon is about 1/6 of its weight on Earth. A person weighing " + earthWeight + " pounds on Earth would weigh about how much on the Moon?";
                const ans = moonWeight + " pounds";
                const d1 = (moonWeight + 6) + " pounds";
                const d2 = (moonWeight - 6) + " pounds";
                const d3 = (moonWeight + 12) + " pounds";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply Earth weight by 1/6: " + earthWeight + " ÷ 6 = " + moonWeight + " pounds."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 1: Batting average percent (Lesson 77 #3)
            (r) => {
                const q = "Mekhi was at bat 24 times and got 6 hits. What percent of the times at bat did Mekhi get a hit?";
                const ans = "25%";
                const d1 = "24%";
                const d2 = "20%";
                const d3 = "30%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fraction of hits = 6/24 = 1/4.", "Convert 1/4 to percent: 1/4 × 100% = 25%."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 2: Class boys/girls unstated info - girls count (Lesson 77 #4)
            (r) => {
                const total = 30;
                const boysFracNum = 3;
                const den = 5;
                const girls = total * (den - boysFracNum) / den;
                const q = "There are " + total + " students in a class. Three fifths of them are boys. How many girls are in the class?";
                const ans = girls + " girls";
                const d1 = "18 girls";
                const d2 = "15 girls";
                const d3 = "9 girls";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If 3/5 are boys, then 2/5 are girls.", "2/5 of 30 = (30 ÷ 5) × 2 = 6 × 2 = " + girls + " girls."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 3: Class boys/girls unstated info - boys count (Lesson 77 #4)
            (r) => {
                const total = 30;
                const boys = 30 * 3 / 5;
                const q = "There are " + total + " students in a class. Three fifths of them are boys. How many boys are in the class?";
                const ans = boys + " boys";
                const d1 = "12 boys";
                const d2 = "15 boys";
                const d3 = "20 boys";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each 1/5 of the class is 30 ÷ 5 = 6 students.", "3/5 is 3 × 6 = " + boys + " boys."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 4: Little engines unstated information (Lesson 77 Practice Set)
            (r) => {
                const total = 40;
                const climbFrac = 3 / 8;
                const notClimb = total * (1 - climbFrac);
                const q = "Three eighths of the 40 little engines could climb the hill. How many engines could NOT climb the hill?";
                const ans = notClimb + " engines";
                const d1 = "15 engines";
                const d2 = "30 engines";
                const d3 = "20 engines";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If 3/8 could climb, then 5/8 could not climb.", "5/8 of 40 = (40 ÷ 8) × 5 = 5 × 5 = " + notClimb + " engines."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 5: Decimal to reduced mixed number (Lesson 77 #6)
            (r) => {
                const q = "Write the decimal number 3.6 as a reduced mixed number.";
                const ans = "3 3/5";
                const d1 = "3 6/10";
                const d2 = "3 1/6";
                const d3 = "3 2/3";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3.6 = 3 6/10.", "Reduce 6/10 by dividing numerator and denominator by 2: 3 3/5."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 6: Decimal equation with unknown (Lesson 77 #7)
            (r) => {
                const q = "Find the unknown number a: 3.6 + a = 4.15";
                const ans = "0.55";
                const d1 = "1.55";
                const d2 = "0.45";
                const d3 = "0.75";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["a = 4.15 − 3.60 = 0.55."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 7: Fraction multiplication equation (Lesson 77 #8)
            (r) => {
                const q = "Find the unknown number x: (2/5)x = 1";
                const ans = "2 1/2";
                const d1 = "3/5";
                const d2 = "2/5";
                const d3 = "1 1/2";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["To equal 1, x must be the reciprocal of 2/5, which is 5/2 = 2 1/2."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 8: Probability comparison reasoning (Lesson 77 #9)
            (r) => {
                const q = "If the chance of rain is 60%, is it more likely to rain or not to rain, and why?";
                const ans = "More likely to rain because 60% > 40%";
                const d1 = "More likely not to rain because 40% < 50%";
                const d2 = "Equally likely because 60% is close to 50%";
                const d3 = "Impossible to determine without humidity levels";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The chance of not raining is 100% − 60% = 40%.", "Since 60% > 40%, it is more likely to rain."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 9: Fraction of circle to percent (Lesson 77 #10)
            (r) => {
                const q = "Three fifths of a circle is what percent of a circle?";
                const ans = "60%";
                const d1 = "35%";
                const d2 = "40%";
                const d3 = "75%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/5 × 100% = 300% ÷ 5 = 60%."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 10: Degrees below freezing point (Lesson 77 #11)
            (r) => {
                const neg = randInt(r, 2, 8);
                const below = 32 + neg;
                const q = "A temperature of −" + neg + "°F is how many degrees Fahrenheit below the freezing temperature of water?";
                const ans = below + "°F";
                const d1 = (32 - neg) + "°F";
                const d2 = (below + 10) + "°F";
                const d3 = (below - 10) + "°F";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Water freezes at 32°F.", "Distance from −" + neg + "°F to 32°F = 32 − (−" + neg + ") = 32 + " + neg + " = " + below + "°F."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 11: Compare fraction and decimal equivalence (Lesson 77 #12)
            (r) => {
                const q = "Compare: 7/20 O 0.35 (Choose the correct comparison symbol)";
                const ans = "=";
                const d1 = "<";
                const d2 = ">";
                const d3 = "≠";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7/20 = 7 ÷ 20 = 0.35.", "Since 0.35 = 0.35, 7/20 = 0.35."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 12: Rectangle perimeter with decimals (Lesson 77 #19)
            (r) => {
                const l = 1.5;
                const w = 0.9;
                const perim = (2 * (l + w)).toFixed(1);
                const q = "What is the perimeter of a rectangle with a length of " + l + " cm and a width of " + w + " cm?";
                const ans = perim + " cm";
                const d1 = "1.35 cm";
                const d2 = "2.4 cm";
                const d3 = "5.8 cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (" + l + " + " + w + ") = 2 × 2.4 = " + perim + " cm."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 13: Rectangle area with decimals (Lesson 77 #20)
            (r) => {
                const l = 1.5;
                const w = 0.9;
                const area = (l * w).toFixed(2);
                const q = "What is the area of a rectangle with a length of " + l + " cm and a width of " + w + " cm?";
                const ans = area + " sq. cm";
                const d1 = "4.8 sq. cm";
                const d2 = "13.5 sq. cm";
                const d3 = "0.135 sq. cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = length × width = " + l + " × " + w + " = " + area + " sq. cm."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 14: Prime factorization of 1000 (Lesson 77 #21)
            (r) => {
                const q = "Write the prime factorization of 1000 using exponents.";
                const ans = "2³ × 5³";
                const d1 = "2² × 5³";
                const d2 = "2³ × 5²";
                const d3 = "2⁴ × 5³";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1000 = 10³ = (2 × 5)³ = 2³ × 5³."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 15: Coat discount calculation (Lesson 77 #22)
            (r) => {
                const reg = 80;
                const discPct = 40;
                const disc = reg * discPct / 100;
                const salePrice = reg - disc;
                const q = "Coats were on sale for 40% off. One coat was regularly priced at $" + reg + ". What was the sale price of the coat?";
                const ans = "$" + salePrice;
                const d1 = "$" + disc;
                const d2 = "$" + (salePrice + 10);
                const d3 = "$" + (salePrice - 10);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Discount = 40% of $" + reg + " = $" + disc + ".", "Sale price = $" + reg + " − $" + disc + " = $" + salePrice + "."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 16: Sales tax and total on purchase (Lesson 77 #23)
            (r) => {
                const price = 38.80;
                const taxRate = 7;
                const tax = Math.round(price * taxRate) / 100;
                const total = (price + tax).toFixed(2);
                const q = "Patricia bought an item that cost $" + price.toFixed(2) + ". The sales-tax rate was 7%. What was the total price including tax?";
                const ans = "$" + total;
                const d1 = "$36.08";
                const d2 = "$40.80";
                const d3 = "$42.52";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = 7% of $" + price.toFixed(2) + " ≈ $" + tax.toFixed(2) + ".", "Total = $" + price.toFixed(2) + " + $" + tax.toFixed(2) + " = $" + total + "."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 17: Quadrilateral polygon classification (Lesson 77 #24)
            (r) => {
                const q = "Is every quadrilateral a polygon?";
                const ans = "Yes, every quadrilateral is a four-sided polygon";
                const d1 = "No, some quadrilaterals have curved sides";
                const d2 = "No, quadrilaterals are open lines";
                const d3 = "Yes, but only if all angles are 90 degrees";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A polygon is a closed, flat plane figure made of straight line segments. A quadrilateral has 4 straight sides and is closed, so every quadrilateral is a polygon."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 18: Elapsed time before noon (Lesson 77 #25)
            (r) => {
                const q = "What time is one hour fourteen minutes before noon?";
                const ans = "10:46 a.m.";
                const d1 = "10:14 a.m.";
                const d2 = "11:46 a.m.";
                const d3 = "10:44 a.m.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Noon is 12:00 p.m.", "1 hour before noon is 11:00 a.m.", "14 minutes before 11:00 a.m. is 10:46 a.m."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            },
            // Category 19: Spinner probability of not red (Lesson 77 Practice Set g-i)
            (r) => {
                const total = 12;
                const red = 3;
                const notRed = total - red;
                const q = "The face of a spinner is divided into " + total + " equal sectors. The probability of spinning red on one spin is " + red + "/" + total + " (1/4). What is the probability of spinning NOT red on one spin?";
                const ans = "3/4";
                const d1 = "1/4";
                const d2 = "1/2";
                const d3 = "2/3";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 − (1/4) = 3/4. Alternatively, " + notRed + " sectors are not red out of " + total + ": " + notRed + "/" + total + " = 3/4."], lessonNum: 77, lessonTitle: "Finding Unstated Information in Fraction Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 78: Capacity
    78: (rng, qIndex) => {
        const framings = [
            // Category 0: Fraction of a gallon is a quart (Lesson 78 Practice Set a)
            (r) => {
                const q = "What fraction of a gallon is a quart?";
                const ans = "1/4";
                const d1 = "1/2";
                const d2 = "1/8";
                const d3 = "1/16";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["There are 4 quarts in 1 gallon, so 1 quart is 1/4 of a gallon."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 1: Capacity of 2-liter bottle in milliliters (Lesson 78 Practice Set b)
            (r) => {
                const q = "A 2-liter bottle has a capacity of how many milliliters?";
                const ans = "2000 mL";
                const d1 = "200 mL";
                const d2 = "20,000 mL";
                const d3 = "500 mL";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 liter = 1000 milliliters.", "2 liters = 2 × 1000 = 2000 mL."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 2: Half gallon into 8-ounce cups (Lesson 78 Practice Set c)
            (r) => {
                const q = "A half gallon of orange juice will fill how many 8-ounce cups? (1 gallon = 128 fluid ounces)";
                const ans = "8 cups";
                const d1 = "4 cups";
                const d2 = "16 cups";
                const d3 = "12 cups";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 gallon = 128 ounces, so a half gallon = 64 ounces.", "64 ounces ÷ 8 ounces/cup = 8 cups."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 3: 2-liter vs half gallon container overflow (Lesson 78 Practice Set d)
            (r) => {
                const q = "The entire contents of a full 2-liter bottle are poured into an empty half-gallon carton. Will the half-gallon container overflow, and why?";
                const ans = "Yes, because 2 liters is about 67.6 oz, which is more than a half gallon (64 oz)";
                const d1 = "No, because a half gallon holds 128 oz and 2 liters is only 64 oz";
                const d2 = "No, because 2 liters equals exactly a half gallon";
                const d3 = "Yes, because liters can only be poured into metric containers";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 liter is approximately 33.8 fluid ounces, so 2 liters is about 67.6 fluid ounces.", "A half gallon is 64 fluid ounces.", "Since 67.6 oz > 64 oz, the carton will overflow."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 4: Difference of fraction sum and product (Lesson 78 #1)
            (r) => {
                const q = "What is the difference when the product of 1/2 and 1/2 is subtracted from the sum of 1/2 and 1/2?";
                const ans = "3/4";
                const d1 = "1/4";
                const d2 = "1/2";
                const d3 = "1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 1/2 + 1/2 = 1.", "Product = 1/2 × 1/2 = 1/4.", "Difference = 1 − 1/4 = 3/4."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 5: Metric centimeters to millimeters (Lesson 78 #2)
            (r) => {
                const cm = randInt(r, 8, 15);
                const mm = cm * 10;
                const q = "The claws of a tiger are " + cm + " centimeters long. How many millimeters is that?";
                const ans = mm + " mm";
                const d1 = (mm + 20) + " mm";
                const d2 = (mm - 20) + " mm";
                const d3 = (mm * 10) + " mm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 centimeter = 10 millimeters.", cm + " cm × 10 = " + mm + " mm."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 6: Multiple of 3 and 4 between 40 and 50 (Lesson 78 #3)
            (r) => {
                const q = "Sue was thinking of a number between 40 and 50 that is a multiple of both 3 and 4. Of what number was she thinking?";
                const ans = "48";
                const d1 = "42";
                const d2 = "44";
                const d3 = "45";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A multiple of both 3 and 4 is a multiple of 12.", "Multiples of 12: 12, 24, 36, 48, 60.", "The multiple between 40 and 50 is 48."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 7: Unstated information - lights off (Lesson 78 #4)
            (r) => {
                const total = 60;
                const off = total * 1 / 5;
                const q = "Four fifths of the " + total + " lights were on. How many lights were off?";
                const ans = off + " lights";
                const d1 = "48 lights";
                const d2 = "18 lights";
                const d3 = "8 lights";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If 4/5 were on, then 1/5 were off.", "1/5 of " + total + " = " + total + " ÷ 5 = " + off + " lights off."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 8: Neither prime nor composite classification (Lesson 78 #5)
            (r) => {
                const q = "Which counting number is neither a prime number nor a composite number?";
                const ans = "1";
                const d1 = "0";
                const d2 = "2";
                const d3 = "3";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 has only one positive factor (itself), so it is neither prime (which requires exactly two distinct factors) nor composite."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 9: Fraction multiplication equation (Lesson 78 #6)
            (r) => {
                const q = "Find the unknown number m: (4/5)m = 1";
                const ans = "1 1/4";
                const d1 = "4/5";
                const d2 = "1/5";
                const d3 = "1 4/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 1 ÷ (4/5) = 5/4 = 1 1/4."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 10: Fraction addition equation (Lesson 78 #7)
            (r) => {
                const q = "Find the unknown number w: 4/5 + w = 1";
                const ans = "1/5";
                const d1 = "4/5";
                const d2 = "5/4";
                const d3 = "0";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 1 − 4/5 = 5/5 − 4/5 = 1/5."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 11: Fraction division equation (Lesson 78 #8)
            (r) => {
                const q = "Find the unknown number x: (4/5) ÷ x = 1";
                const ans = "4/5";
                const d1 = "5/4";
                const d2 = "1/5";
                const d3 = "1";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any nonzero number divided by itself equals 1, so x = 4/5."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 12: Fraction subtraction equation (Lesson 78 #9)
            (r) => {
                const q = "Find the unknown number y: y − 4/5 = 1";
                const ans = "1 4/5";
                const d1 = "1/5";
                const d2 = "5/4";
                const d3 = "4/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["y = 1 + 4/5 = 1 4/5."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 13: Shaded fraction of rectangle to percent (Lesson 78 #10)
            (r) => {
                const q = "A rectangle is divided into 5 equal parts, and 3 parts are shaded. What percent of the rectangle is shaded?";
                const ans = "60%";
                const d1 = "30%";
                const d2 = "40%";
                const d3 = "75%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/5 × 100% = 60%."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 14: Decimal to mixed number (Lesson 78 #11)
            (r) => {
                const q = "Convert the decimal number 1.15 to a reduced mixed number.";
                const ans = "1 3/20";
                const d1 = "1 15/100";
                const d2 = "1 1/5";
                const d3 = "1 3/10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.15 = 1 15/100.", "Divide numerator and denominator by 5: 1 3/20."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 15: Compare decimal and fraction (Lesson 78 #12)
            (r) => {
                const q = "Compare: 0.35 O 1/3 (Choose the correct comparison symbol)";
                const ans = ">";
                const d1 = "<";
                const d2 = "=";
                const d3 = "≤";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/3 ≈ 0.333...", "Since 0.350 > 0.333, 0.35 > 1/3."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 16: Perimeter of square with mixed number side (Lesson 78 #19a)
            (r) => {
                const q = "A square has sides of length 2 1/2 inches. What is the perimeter of the square?";
                const ans = "10 inches";
                const d1 = "5 inches";
                const d2 = "8 inches";
                const d3 = "6 1/4 inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 4 × 2 1/2 = 4 × 5/2 = 20/2 = 10 inches."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 17: Area of square with mixed number side (Lesson 78 #19b)
            (r) => {
                const q = "A square has sides of length 2 1/2 inches. What is the area of the square?";
                const ans = "6 1/4 sq. in.";
                const d1 = "4 1/4 sq. in.";
                const d2 = "10 sq. in.";
                const d3 = "5 sq. in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (2 1/2)² = (5/2) × (5/2) = 25/4 = 6 1/4 sq. in."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 18: Multiplying mixed numbers (Lesson 78 #16)
            (r) => {
                const q = "Multiply: 1 1/2 × 2 2/3";
                const ans = "4";
                const d1 = "3 2/3";
                const d2 = "3 1/3";
                const d3 = "4 1/2";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fractions: 3/2 × 8/3.", "Multiply and simplify: 24/6 = 4."], lessonNum: 78, lessonTitle: "Capacity" };
            },
            // Category 19: Dividing mixed numbers (Lesson 78 #17)
            (r) => {
                const q = "Divide: 2 1/2 ÷ 1 1/4";
                const ans = "2";
                const d1 = "1 1/2";
                const d2 = "2 1/2";
                const d3 = "3";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fractions: 5/2 ÷ 5/4.", "Multiply by reciprocal: (5/2) × (4/5) = 20/10 = 2."], lessonNum: 78, lessonTitle: "Capacity" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 79: Area of a Triangle
    79: (rng, qIndex) => {
        const framings = [
            // Category 0: Area of right triangle (Lesson 79 Practice Set a-b)
            (r) => {
                const pairs = [[6, 8, 10, 24], [5, 12, 13, 30], [9, 12, 15, 54], [8, 15, 17, 60]];
                const [leg1, leg2, hyp, area] = pairs[randInt(r, 0, pairs.length - 1)];
                const q = "Find the area of a right triangle with legs of " + leg1 + " inches and " + leg2 + " inches, and a hypotenuse of " + hyp + " inches.";
                const ans = area + " sq. in.";
                const d1 = (leg1 * leg2) + " sq. in.";
                const d2 = (leg1 + leg2 + hyp) + " sq. in.";
                const d3 = (area + 10) + " sq. in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) ÷ 2.", "(" + leg1 + " × " + leg2 + ") ÷ 2 = " + (leg1 * leg2) + " ÷ 2 = " + area + " sq. in."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 1: Area of acute triangle with base and height (Lesson 79 Practice Set c)
            (r) => {
                const b = randInt(r, 8, 14);
                const h = randInt(r, 4, 8);
                const area = (b * h) / 2;
                const q = "A triangle has a base of " + b + " cm and a height of " + h + " cm. What is the area of the triangle?";
                const ans = area + " sq. cm";
                const d1 = (b * h) + " sq. cm";
                const d2 = (area + 6) + " sq. cm";
                const d3 = (area - 6) + " sq. cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) ÷ 2 = (" + b + " × " + h + ") ÷ 2 = " + (b * h) + " ÷ 2 = " + area + " sq. cm."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 2: Effect of doubling height on triangle area (Lesson 79 Practice Set e)
            (r) => {
                const q = "If the height of a triangle is doubled while the base remains the same, what happens to the area of the triangle?";
                const ans = "The area is doubled";
                const d1 = "The area is quadrupled";
                const d2 = "The area stays the same";
                const d3 = "The area increases by 2";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = 1/2 × base × height. If height is multiplied by 2, the area is also multiplied by 2."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 3: Determine rectangle width from perimeter and length (Lesson 79 #1)
            (r) => {
                const q = "If you know both the perimeter (P) and the length (l) of a rectangle, which formula determines the width (w)?";
                const ans = "w = (P − 2l) ÷ 2";
                const d1 = "w = P − l";
                const d2 = "w = P ÷ 2l";
                const d3 = "w = (P + 2l) ÷ 2";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter P = 2l + 2w. Subtract 2l: P − 2l = 2w. Divide by 2: w = (P − 2l) ÷ 2."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 4: Liter vs quart comparison (Lesson 79 #2)
            (r) => {
                const q = "A 2-liter bottle contains 2 quarts and 3.6 ounces. Which is greater: 1 liter or 1 quart?";
                const ans = "1 liter is greater than 1 quart";
                const d1 = "1 quart is greater than 1 liter";
                const d2 = "They are exactly equal";
                const d3 = "Cannot be compared because one is metric";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since 2 liters exceeds 2 quarts by 3.6 ounces, each liter is greater than 1 quart (1 liter ≈ 1.057 quarts)."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 5: Career duration and retirement age (Lesson 79 #3)
            (r) => {
                const startAge = randInt(r, 25, 40);
                const workedYears = randInt(r, 28, 35);
                const retireAge = startAge + workedYears;
                const q = "Mr. Johnson was " + startAge + " years old when he started his job. He worked for " + workedYears + " years. How old was he when he retired?";
                const ans = retireAge + " years old";
                const d1 = (retireAge - 5) + " years old";
                const d2 = (retireAge + 5) + " years old";
                const d3 = (retireAge + 10) + " years old";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startAge + " + " + workedYears + " = " + retireAge + " years old."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 6: Geometric true/false rectangle and parallelogram (Lesson 79 #4)
            (r) => {
                const q = "Which of the following statements is true?";
                const ans = "Every rectangle is a parallelogram";
                const d1 = "Every rectangle is a square";
                const d2 = "Every parallelogram is a rectangle";
                const d3 = "Every quadrilateral is a square";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A rectangle is by definition a parallelogram with 4 right angles. However, not every rectangle is a square."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 7: Percentage of trees (Lesson 79 #5)
            (r) => {
                const total = 30;
                const pct = 90;
                const count = total * pct / 100;
                const q = "Ninety percent of the " + total + " trees in a park are birch trees. How many trees are birch trees?";
                const ans = count + " trees";
                const d1 = "3 trees";
                const d2 = "24 trees";
                const d3 = "21 trees";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["90% of 30 = 0.90 × 30 = " + count + " trees."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 8: Percent of runners not finishing (Lesson 79 #6)
            (r) => {
                const total = 24;
                const finished = 18;
                const notFinished = total - finished;
                const pct = (notFinished / total) * 100;
                const q = finished + " of the " + total + " runners finished the race. What percent of the runners did NOT finish the race?";
                const ans = pct + "%";
                const d1 = "75%";
                const d2 = "30%";
                const d3 = "20%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [notFinished + " did not finish.", notFinished + "/" + total + " = 1/4 = 25%."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 9: Parallelogram divided into congruent triangles (Lesson 79 #7)
            (r) => {
                const b = 20;
                const h = 12;
                const area = (b * h) / 2;
                const q = "A parallelogram with a base of " + b + " mm and a height of " + h + " mm is divided by a diagonal into two congruent triangles. What is the area of each triangle?";
                const ans = area + " sq. mm";
                const d1 = (b * h) + " sq. mm";
                const d2 = (area / 2) + " sq. mm";
                const d3 = (area + 60) + " sq. mm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Parallelogram area = " + b + " × " + h + " = " + (b * h) + " sq. mm.", "Each triangle has half the area: " + (b * h) + " ÷ 2 = " + area + " sq. mm."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 10: Division of powers of 10 (Lesson 79 #8)
            (r) => {
                const q = "Simplify: 10³ ÷ 10²";
                const ans = "10";
                const d1 = "1";
                const d2 = "100";
                const d3 = "1000";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10³ = 1000, 10² = 100.", "1000 ÷ 100 = 10 (or subtract exponents: 3 − 2 = 1, so 10¹ = 10)."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 11: Multi-term decimal addition (Lesson 79 #9)
            (r) => {
                const q = "Add: 6.42 + 12.7 + 8";
                const ans = "27.12";
                const d1 = "26.12";
                const d2 = "27.2";
                const d3 = "19.92";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Line up decimal points: 6.42 + 12.70 + 8.00 = 27.12."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 12: Decimal multiplication (Lesson 79 #10)
            (r) => {
                const q = "Multiply: 1.2 × 0.12";
                const ans = "0.144";
                const d1 = "1.44";
                const d2 = "0.0144";
                const d3 = "14.4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 × 12 = 144.", "Count 3 decimal places in total: 1.2 × 0.12 = 0.144."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 13: Whole number divided by small decimal (Lesson 79 #11)
            (r) => {
                const q = "Divide: 64 ÷ 0.08";
                const ans = "800";
                const d1 = "80";
                const d2 = "8";
                const d3 = "8000";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Shift decimal point 2 places right in both divisor and dividend: 6400 ÷ 8 = 800."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 14: Decimal subtraction equation (Lesson 79 #14)
            (r) => {
                const q = "Find the unknown number q: 10 − q = 9.87";
                const ans = "0.13";
                const d1 = "1.13";
                const d2 = "0.23";
                const d3 = "0.03";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["q = 10.00 − 9.87 = 0.13."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 15: Perimeter of square to area (Lesson 79 #18)
            (r) => {
                const perim = 80;
                const side = perim / 4;
                const area = side * side;
                const q = "The perimeter of a square is " + perim + " cm. What is its area?";
                const ans = area + " sq. cm";
                const d1 = "160 sq. cm";
                const d2 = "40 sq. cm";
                const d3 = "200 sq. cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = " + perim + " ÷ 4 = " + side + " cm.", "Area = (" + side + ")² = " + area + " sq. cm."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 16: Expanded notation with fraction to decimal (Lesson 79 #19)
            (r) => {
                const q = "Write the decimal number for: (9 × 10) + (6 × 1) + (3 × 1/100)";
                const ans = "96.03";
                const d1 = "96.3";
                const d2 = "906.03";
                const d3 = "96.003";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["9 × 10 = 90, 6 × 1 = 6, 3 × 0.01 = 0.03.", "90 + 6 + 0.03 = 96.03."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 17: Circumference from compass radius (Lesson 79 #20)
            (r) => {
                const rVal = 10;
                const circ = (2 * 3.14 * rVal).toFixed(1);
                const q = "Juana set the radius on her compass to " + rVal + " cm and drew a circle. What was the circumference of the circle? (Use 3.14 for π.)";
                const ans = circ + " cm";
                const d1 = (3.14 * rVal).toFixed(1) + " cm";
                const d2 = "314 cm";
                const d3 = (parseFloat(circ) + 10).toFixed(1) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = 2 × radius = 2 × " + rVal + " = 20 cm.", "Circumference = πd = 3.14 × 20 = " + circ + " cm."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 18: Evaluating power of 3 (Lesson 79 #23)
            (r) => {
                const q = "The expression 3⁴ is the prime factorization of what number?";
                const ans = "81";
                const d1 = "27";
                const d2 = "12";
                const d3 = "64";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3⁴ = 3 × 3 × 3 × 3 = 9 × 9 = 81."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            },
            // Category 19: Quadrilateral with one pair of parallel sides (Lesson 79 #26)
            (r) => {
                const q = "Which quadrilateral has only one pair of parallel sides?";
                const ans = "Trapezoid";
                const d1 = "Parallelogram";
                const d2 = "Rhombus";
                const d3 = "Rectangle";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A trapezoid is defined as a quadrilateral with exactly one pair of parallel sides."], lessonNum: 79, lessonTitle: "Area of a Triangle" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 80: Using a Constant Factor to Solve Ratio Problems
    80: (rng, qIndex) => {
        const framings = [
            // Category 0: Ratio of boys to girls (Lesson 80 Practice Set a)
            (r) => {
                const rBoys = 6;
                const rGirls = 5;
                const factor = randInt(r, 8, 14);
                const actualGirls = rGirls * factor;
                const actualBoys = rBoys * factor;
                const q = "The ratio of boys to girls in the cafeteria was " + rBoys + " to " + rGirls + ". If there were " + actualGirls + " girls, how many boys were there?";
                const ans = actualBoys + " boys";
                const d1 = (actualBoys + 18) + " boys";
                const d2 = (actualBoys - 15) + " boys";
                const d3 = (actualBoys + 24) + " boys";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Constant factor = " + actualGirls + " ÷ " + rGirls + " = " + factor + ".", "Actual boys = " + rBoys + " × " + factor + " = " + actualBoys + " boys."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 1: Ratio of ants to flies (Lesson 80 Practice Set b)
            (r) => {
                const rAnts = 8;
                const rFlies = 3;
                const factor = randInt(r, 6, 10);
                const actualFlies = rFlies * factor;
                const actualAnts = rAnts * factor;
                const q = "The ratio of ants to flies at the picnic was " + rAnts + " to " + rFlies + ". If there were " + actualFlies + " flies, how many ants were there?";
                const ans = actualAnts + " ants";
                const d1 = (actualAnts + 16) + " ants";
                const d2 = (actualAnts - 16) + " ants";
                const d3 = (actualAnts + 24) + " ants";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Constant factor = " + actualFlies + " ÷ " + rFlies + " = " + factor + ".", "Actual ants = " + rAnts + " × " + factor + " = " + actualAnts + " ants."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 2: Mean and range of a data set (Lesson 80 #1)
            (r) => {
                const q = "What is the mean and the range of 96, 49, 68, and 75?";
                const ans = "Mean: 72, Range: 47";
                const d1 = "Mean: 72, Range: 45";
                const d2 = "Mean: 75, Range: 47";
                const d3 = "Mean: 68, Range: 50";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 96 + 49 + 68 + 75 = 288.", "Mean = 288 ÷ 4 = 72.", "Range = Highest − Lowest = 96 − 49 = 47."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 3: Depth of ocean in feet from miles (Lesson 80 #2)
            (r) => {
                const q = "The average depth of the ocean beyond the continental shelf is 2 1/2 miles. How many feet is that? (1 mile = 5280 feet)";
                const ans = "13,200 feet";
                const d1 = "10,560 feet";
                const d2 = "12,200 feet";
                const d3 = "15,840 feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 miles = 2.5 miles.", "2.5 × 5280 = 13,200 feet."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 4: Equal division into teams (Lesson 80 #3)
            (r) => {
                const total = 168;
                const teams = 12;
                const each = total / teams;
                const q = "The " + total + " players who signed up for soccer were divided equally into " + teams + " teams. How many players were on each team?";
                const ans = each + " players";
                const d1 = (each + 2) + " players";
                const d2 = (each - 2) + " players";
                const d3 = (each + 4) + " players";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [total + " ÷ " + teams + " = " + each + " players per team."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 5: Parallelogram perimeter with diagonal (Lesson 80 #4)
            (r) => {
                const s1 = 3;
                const s2 = 5;
                const perim = 2 * (s1 + s2);
                const q = "Parallelogram ABCD is divided into two congruent triangles by diagonal BD. Segments BA and CD measure " + s1 + " in., and segments AD and BC measure " + s2 + " in. What is the perimeter of the parallelogram?";
                const ans = perim + " in.";
                const d1 = "12 in.";
                const d2 = "15 in.";
                const d3 = "20 in.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter of parallelogram = 2 × (" + s1 + " + " + s2 + ") = 2 × 8 = " + perim + " in."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 6: Trapezoid classification (Lesson 80 #6)
            (r) => {
                const q = "A quadrilateral has exactly one pair of parallel sides. What is the name of this kind of quadrilateral?";
                const ans = "Trapezoid";
                const d1 = "Parallelogram";
                const d2 = "Rhombus";
                const d3 = "Rectangle";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A trapezoid is a quadrilateral with exactly one pair of parallel sides."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 7: All squares are rectangles truth value (Lesson 80 #7)
            (r) => {
                const q = "'All squares are rectangles.' True or false?";
                const ans = "True";
                const d1 = "False";
                const d2 = "True only if the sides are whole numbers";
                const d3 = "Cannot be determined";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A rectangle is a quadrilateral with four right angles. Since every square has four right angles, all squares are rectangles."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 8: Unstated information - absent students (Lesson 80 #8)
            (r) => {
                const total = 30;
                const absent = total * 1 / 5;
                const q = "If four fifths of the " + total + " students in the class were present, how many students were absent?";
                const ans = absent + " students";
                const d1 = "24 students";
                const d2 = "8 students";
                const d3 = "4 students";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If 4/5 were present, then 1/5 were absent.", "1/5 of " + total + " = " + total + " ÷ 5 = " + absent + " students."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 9: Neighborhood dogs to cats ratio (Lesson 80 #9)
            (r) => {
                const rDogs = 2;
                const rCats = 5;
                const actualDogs = 10;
                const factor = actualDogs / rDogs;
                const actualCats = rCats * factor;
                const q = "The ratio of dogs to cats in the neighborhood was " + rDogs + " to " + rCats + ". If there were " + actualDogs + " dogs, how many cats were there?";
                const ans = actualCats + " cats";
                const d1 = "30 cats";
                const d2 = "20 cats";
                const d3 = "15 cats";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Constant factor = " + actualDogs + " ÷ " + rDogs + " = " + factor + ".", "Number of cats = " + rCats + " × " + factor + " = " + actualCats + " cats."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 10: Fraction to percent (Lesson 80 #10)
            (r) => {
                const q = "Write 19/20 as a percent.";
                const ans = "95%";
                const d1 = "90%";
                const d2 = "19%";
                const d3 = "85%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["19/20 = (19 × 5) / (20 × 5) = 95/100 = 95%."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 11: Ratio of side to perimeter of a square (Lesson 80 #11)
            (r) => {
                const q = "What percent of the perimeter of a square is the length of one side?";
                const ans = "25%";
                const d1 = "20%";
                const d2 = "50%";
                const d3 = "40%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A square has 4 equal sides. One side is 1/4 of the perimeter.", "1/4 = 25%."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 12: Capacity comparison quarts and gallon (Lesson 80 #12)
            (r) => {
                const q = "Compare: 3 quarts O 1 gallon (Choose the correct comparison symbol)";
                const ans = "<";
                const d1 = ">";
                const d2 = "=";
                const d3 = "≥";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 gallon = 4 quarts.", "Since 3 quarts < 4 quarts, 3 quarts < 1 gallon."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 13: Decimal to reduced mixed number (Lesson 80 #13)
            (r) => {
                const q = "Write 4.4 as a reduced mixed number.";
                const ans = "4 2/5";
                const d1 = "4 4/10";
                const d2 = "4 1/4";
                const d3 = "4 1/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4.4 = 4 4/10.", "Reduce 4/10 by dividing numerator and denominator by 2: 4 2/5."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 14: Unit fraction to decimal (Lesson 80 #14)
            (r) => {
                const q = "Write 1/8 as a decimal number.";
                const ans = "0.125";
                const d1 = "0.18";
                const d2 = "0.8";
                const d3 = "0.12";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 ÷ 8 = 0.125."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 15: Decimal subtraction equation (Lesson 80 #18)
            (r) => {
                const q = "Find the unknown number a: 4 − a = 2.6";
                const ans = "1.4";
                const d1 = "2.4";
                const d2 = "1.6";
                const d3 = "6.6";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["a = 4.0 − 2.6 = 1.4."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 16: Decimal multiplication equation (Lesson 80 #21)
            (r) => {
                const q = "Find the unknown number y: 0.9y = 63";
                const ans = "70";
                const d1 = "7";
                const d2 = "700";
                const d3 = "56.7";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["y = 63 ÷ 0.9 = 630 ÷ 9 = 70."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 17: Rounding decimals to hundredths place (Lesson 80 #22)
            (r) => {
                const q = "Round 0.4287 to the hundredths place.";
                const ans = "0.43";
                const d1 = "0.42";
                const d2 = "0.429";
                const d3 = "0.4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The hundredths place is 2. The next digit is 8 (5 or greater), so round up to 0.43."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 18: Milk remaining in carton (Lesson 80 #26)
            (r) => {
                const q = "There was one quart of milk in the carton. Oscar poured one cup of milk on his cereal. How many cups of milk were left in the carton? (1 quart = 4 cups)";
                const ans = "3 cups";
                const d1 = "2 cups";
                const d2 = "1 cup";
                const d3 = "7 cups";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 quart = 4 cups.", "4 cups − 1 cup = 3 cups."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            },
            // Category 19: Fourth vertex of a square (Lesson 80 #27)
            (r) => {
                const q = "Three vertices of a square are located at (3, 0), (3, 3), and (0, 3). What are the coordinates of the fourth vertex of the square?";
                const ans = "(0, 0)";
                const d1 = "(0, -3)";
                const d2 = "(3, -3)";
                const d3 = "(1, 1)";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Plotting the points shows the missing corner of the square is at the origin, (0, 0)."], lessonNum: 80, lessonTitle: "Using a Constant Factor to Solve Ratio Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};

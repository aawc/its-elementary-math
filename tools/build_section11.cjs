const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../js/generators/section11.js');

let code = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
`;

// =========================================================================
// LESSON 101: Ratio Problems Involving Totals
// =========================================================================
code += `    // Lesson 101: Ratio Problems Involving Totals
    101: (rng, qIndex) => {
        const framings = [
            // Category 0: Sparrows and crows on wire ratio total
            (r) => {
                const r1 = [3, 4, 5, 7][randInt(r, 0, 3)];
                const r2 = [2, 3, 5][randInt(r, 0, 2)];
                const mult = randInt(r, 5, 12);
                const total = (r1 + r2) * mult;
                const crows = r2 * mult;
                const q = "Sparrows and crows perched on a wire in the ratio of " + r1 + " to " + r2 + ". If the total number of sparrows and crows on the wire was " + total + ", how many were crows?";
                const ans = "" + crows;
                const d1 = "" + (r1 * mult);
                const d2 = "" + (crows + mult);
                const d3 = "" + Math.max(1, crows - mult);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Set up a ratio box with sparrows (" + r1 + "), crows (" + r2 + "), and total (" + (r1 + r2) + ").", "Write the proportion: " + r2 + "/" + (r1 + r2) + " = crows/" + total + ".", "Solve for crows: (" + r2 + " × " + total + ") ÷ " + (r1 + r2) + " = " + crows + "."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 1: Boys and girls in class ratio total
            (r) => {
                const rBoys = [3, 4, 5][randInt(r, 0, 2)];
                const rGirls = [2, 3, 4][randInt(r, 0, 2)];
                const mult = randInt(r, 4, 9);
                const total = (rBoys + rGirls) * mult;
                const girls = rGirls * mult;
                const q = "The ratio of boys to girls in the class was " + rBoys + " to " + rGirls + ". If there were " + total + " students in the class, how many girls were there?";
                const ans = "" + girls;
                const d1 = "" + (rBoys * mult);
                const d2 = "" + (girls + mult);
                const d3 = "" + Math.max(1, girls - mult);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio parts total = " + rBoys + " + " + rGirls + " = " + (rBoys + rGirls) + ".", "Each ratio part represents " + total + " ÷ " + (rBoys + rGirls) + " = " + mult + " students.", "Girls = " + rGirls + " × " + mult + " = " + girls + "."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 2: Raisins and nuts mixture by weight
            (r) => {
                const r1 = [2, 3][randInt(r, 0, 1)];
                const r2 = [3, 5][randInt(r, 0, 1)];
                const mult = randInt(r, 6, 12);
                const total = (r1 + r2) * mult;
                const raisins = r1 * mult;
                const q = "Raisins and nuts were mixed by weight in a ratio of " + r1 + " to " + r2 + ". If " + total + " ounces of mix were prepared, how many ounces of raisins were used?";
                const ans = raisins + " ounces";
                const d1 = (r2 * mult) + " ounces";
                const d2 = (raisins + mult) + " ounces";
                const d3 = Math.max(1, raisins - mult) + " ounces";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total ratio parts = " + r1 + " + " + r2 + " = " + (r1 + r2) + ".", "Ounces per part = " + total + " ÷ " + (r1 + r2) + " = " + mult + " oz.", "Raisins = " + r1 + " × " + mult + " = " + raisins + " ounces."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 3: Shoe box geometric solid
            (r) => {
                const q = "A shoe box is in the shape of what geometric solid?";
                const ans = "Rectangular prism";
                const d1 = "Cube";
                const d2 = "Cylinder";
                const d3 = "Triangular prism";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A shoe box has six rectangular faces and opposite faces that are congruent.", "Therefore, it is in the shape of a rectangular prism."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 4: Average and sum of numbers
            (r) => {
                const count = randInt(r, 5, 8);
                const avg = randInt(r, 12, 24);
                const sum = count * avg;
                const q = "If the average of " + count + " numbers is " + avg + ", what is the sum of the " + count + " numbers?";
                const ans = "" + sum;
                const d1 = "" + (sum + count);
                const d2 = "" + (sum - count);
                const d3 = "" + (avg * 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Average = (Sum of numbers) ÷ (Count of numbers).", "Sum = Average × Count = " + avg + " × " + count + " = " + sum + "."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 5: Circle diameter to radius
            (r) => {
                const d = [3, 5, 7, 9][randInt(r, 0, 3)];
                const radius = (d / 2).toFixed(1);
                const q = "If the diameter of a circle is " + d + " inches, what is the radius of the circle?";
                const ans = radius + " inches";
                const d1 = d + " inches";
                const d2 = (d * 2) + " inches";
                const d3 = (parseFloat(radius) + 1).toFixed(1) + " inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The radius of a circle is half of its diameter.", "Radius = " + d + " ÷ 2 = " + radius + " inches."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 6: Meat cost multiplication
            (r) => {
                const lbs = [1.5, 2.5, 3.5][randInt(r, 0, 2)];
                const priceCents = [160, 180, 240][randInt(r, 0, 2)];
                const costCents = Math.round(lbs * priceCents);
                const q = "What is the cost of " + lbs + " pounds of meat priced at $" + (priceCents / 100).toFixed(2) + " per pound?";
                const ans = "$" + (costCents / 100).toFixed(2);
                const d1 = "$" + ((costCents + 100) / 100).toFixed(2);
                const d2 = "$" + ((costCents - 100) / 100).toFixed(2);
                const d3 = "$" + ((costCents + 50) / 100).toFixed(2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply weight by unit price: " + lbs + " × $" + (priceCents / 100).toFixed(2) + " = $" + (costCents / 100).toFixed(2) + "."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 7: Segment partition
            (r) => {
                const k = [3, 4][randInt(r, 0, 1)];
                const total = k * randInt(r, 4, 7);
                const ab = total / k;
                const bc = total - ab;
                const q = "Segment AC is " + total + " cm long. If segment AB is 1/" + k + " of the length of AC, how long is segment BC?";
                const ans = bc + " cm";
                const d1 = ab + " cm";
                const d2 = (bc + 2) + " cm";
                const d3 = (total + ab) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["AB = " + total + " ÷ " + k + " = " + ab + " cm.", "BC = AC − AB = " + total + " − " + ab + " = " + bc + " cm."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 8: Algebraic addition
            (r) => {
                const a = randInt(r, 3, 8);
                const b = randInt(r, 2, 7);
                const sum = b - a;
                const q = "Find the sum using algebraic addition: (−" + a + ") + (+" + b + ")";
                const ans = sum > 0 ? "+" + sum : "" + sum;
                const d1 = "" + (-(a + b));
                const d2 = "+" + (a + b);
                const d3 = (a - b) > 0 ? "+" + (a - b) : "" + (a - b);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Adding a positive number is moving right on the number line.", "(−" + a + ") + (+" + b + ") = " + ans + "."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 9: Algebraic subtraction
            (r) => {
                const a = randInt(r, 2, 7);
                const b = randInt(r, 3, 8);
                const diff = b - a;
                const q = "Solve the subtraction problem using algebraic addition: (−" + a + ") − (−" + b + ")";
                const ans = diff > 0 ? "+" + diff : "" + diff;
                const d1 = "" + (-(a + b));
                const d2 = "+" + (a + b);
                const d3 = (-(b - a)) > 0 ? "+" + (-(b - a)) : "" + (-(b - a));
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Change subtraction to adding the opposite: (−" + a + ") − (−" + b + ") = (−" + a + ") + (+" + b + ") = " + ans + "."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 10: Two-coin toss probability
            (r) => {
                const q = "Two fair coins are tossed. What is the probability that both coins will land heads up?";
                const ans = "1/4";
                const d1 = "1/2";
                const d2 = "3/4";
                const d3 = "1/8";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sample space for tossing two coins is {HH, HT, TH, TT}, which has 4 equally likely outcomes.", "Only 1 outcome is both heads (HH).", "Probability = 1/4."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 11: Fraction to percent
            (r) => {
                const items = [
                    [3, 4, "75%"],
                    [1, 4, "25%"],
                    [2, 5, "40%"],
                    [3, 5, "60%"],
                    [4, 5, "80%"]
                ];
                const item = items[randInt(r, 0, items.length - 1)];
                const q = "Convert the fraction " + item[0] + "/" + item[1] + " to a percent.";
                const ans = item[2];
                const pool = ["25%", "40%", "50%", "60%", "75%", "80%"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply the fraction by 100%: (" + item[0] + "/" + item[1] + ") × 100% = " + ans + "."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 12: Decimal to mixed number
            (r) => {
                const items = [
                    ["1.6", "1 3/5"],
                    ["2.4", "2 2/5"],
                    ["1.25", "1 1/4"],
                    ["1.75", "1 3/4"],
                    ["2.5", "2 1/2"]
                ];
                const item = items[randInt(r, 0, items.length - 1)];
                const q = "Convert the decimal number " + item[0] + " to a mixed number with the fraction reduced to lowest terms.";
                const ans = item[1];
                const pool = ["1 3/5", "2 2/5", "1 1/4", "1 3/4", "2 1/2", "1 1/2"].filter(x => x !== ans);
                const s = shuffle(r, [ans, pool[0], pool[1], pool[2]]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Write the decimal as a mixed number and reduce the fractional part to lowest terms: " + item[0] + " = " + ans + "."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 13: Multiplying mixed numbers
            (r) => {
                const q = "Multiply and simplify: 1 1/2 × 3/4";
                const ans = "1 1/8";
                const d1 = "1 1/4";
                const d2 = "3/8";
                const d3 = "1 3/8";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert 1 1/2 to an improper fraction: 3/2.", "Multiply numerators and denominators: (3/2) × (3/4) = 9/8.", "Convert to mixed number: 9/8 = 1 1/8."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 14: Dividing whole number by mixed number
            (r) => {
                const q = "Divide: 6 ÷ 1 1/2";
                const ans = "4";
                const d1 = "3";
                const d2 = "5";
                const d3 = "9";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Write 1 1/2 as the improper fraction 3/2.", "Multiply by the reciprocal: 6 × (2/3) = 12/3 = 4."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 15: Decimal division
            (r) => {
                const q = "Divide: 5 ÷ 0.4";
                const ans = "12.5";
                const d1 = "1.25";
                const d2 = "10.5";
                const d3 = "20";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Move the decimal point one place to the right: 50 ÷ 4 = 12.5."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 16: Solving proportion
            (r) => {
                const a = 8;
                const b = 5;
                const c = 40;
                const x = 25;
                const q = "Solve for x in the proportion: 8/5 = 40/x";
                const ans = "x = " + x;
                const d1 = "x = 20";
                const d2 = "x = 30";
                const d3 = "x = 16";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Notice that 8 × 5 = 40.", "Multiply the denominator by 5: x = 5 × 5 = 25."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 17: Unknown number in addition with mixed numbers
            (r) => {
                const q = "Find the unknown number x: x + 2 1/2 = 5 1/4";
                const ans = "x = 2 3/4";
                const d1 = "x = 3 1/4";
                const d2 = "x = 2 1/4";
                const d3 = "x = 3 3/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract 2 1/2 from 5 1/4:", "5 1/4 − 2 2/4 = 4 5/4 − 2 2/4 = 2 3/4."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 18: Equation with multiplication
            (r) => {
                const q = "Solve for n: 6n = 21 · 4";
                const ans = "n = 14";
                const d1 = "n = 12";
                const d2 = "n = 16";
                const d3 = "n = 28";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply the right side: 21 × 4 = 84.", "Divide by 6: n = 84 ÷ 6 = 14."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            },
            // Category 19: Temperature rise
            (r) => {
                const t1 = randInt(r, 6, 12);
                const t2 = randInt(r, 14, 22);
                const rise = t1 + t2;
                const q = "At 6 a.m. the temperature was −" + t1 + "°F. By noon the temperature was " + t2 + "°F. The temperature had risen how many degrees?";
                const ans = rise + "°F";
                const d1 = (t2 - t1) + "°F";
                const d2 = (rise + 3) + "°F";
                const d3 = (rise - 3) + "°F";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find the difference between noon and 6 a.m.: " + t2 + " − (−" + t1 + ") = " + t2 + " + " + t1 + " = " + rise + "°F."], lessonNum: 101, lessonTitle: "Ratio Problems Involving Totals" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 102: Mass and Weight
// =========================================================================
code += `    // Lesson 102: Mass and Weight
    102: (rng, qIndex) => {
        const framings = [
            // Category 0: Half a kilogram in grams
            (r) => {
                const q = "Half of a kilogram is how many grams?";
                const ans = "500 grams";
                const d1 = "250 grams";
                const d2 = "100 grams";
                const d3 = "1000 grams";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 kilogram = 1000 grams.", "Half of 1000 grams = 500 grams."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 1: Mass of water in liters to grams
            (r) => {
                const liters = randInt(r, 2, 4);
                const grams = liters * 1000;
                const q = "The mass of 1 liter of water is 1 kilogram. What is the mass of " + liters + " liters of water in grams?";
                const ans = grams + " grams";
                const d1 = (liters * 100) + " grams";
                const d2 = (grams + 500) + " grams";
                const d3 = (grams - 500) + " grams";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [liters + " liters of water has a mass of " + liters + " kg.", liters + " kg = " + liters + " × 1000 g = " + grams + " grams."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 2: Adding compound weights (lb and oz)
            (r) => {
                const q = "Add: 5 lb 10 oz + 1 lb 9 oz";
                const ans = "7 lb 3 oz";
                const d1 = "6 lb 19 oz";
                const d2 = "6 lb 3 oz";
                const d3 = "7 lb 9 oz";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add ounces: 10 oz + 9 oz = 19 oz = 1 lb 3 oz.", "Add pounds: 5 lb + 1 lb + 1 lb = 7 lb.", "Result: 7 lb 3 oz."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 3: Subtracting compound weights
            (r) => {
                const q = "Subtract: 9 lb 8 oz − 6 lb 10 oz";
                const ans = "2 lb 14 oz";
                const d1 = "3 lb 2 oz";
                const d2 = "2 lb 2 oz";
                const d3 = "3 lb 14 oz";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Borrow 1 lb (16 oz) from 9 lb: 9 lb 8 oz = 8 lb 24 oz.", "Subtract: 8 lb 24 oz − 6 lb 10 oz = 2 lb 14 oz."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 4: Half of a ton in pounds
            (r) => {
                const q = "A half-ton pickup truck can haul a half-ton load. Half of a ton is how many pounds?";
                const ans = "1000 pounds";
                const d1 = "500 pounds";
                const d2 = "2000 pounds";
                const d3 = "100 pounds";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 ton = 2000 pounds.", "Half of 2000 pounds = 1000 pounds."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 5: Baby weight gain
            (r) => {
                const q = "When Andy was born, he weighed 8 pounds 4 ounces. Three weeks later he weighed 10 pounds 1 ounce. How many pounds and ounces had he gained in three weeks?";
                const ans = "1 lb 13 oz";
                const d1 = "2 lb 3 oz";
                const d2 = "1 lb 5 oz";
                const d3 = "2 lb 13 oz";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract 8 lb 4 oz from 10 lb 1 oz.", "Borrow 1 lb (16 oz): 10 lb 1 oz = 9 lb 17 oz.", "9 lb 17 oz − 8 lb 4 oz = 1 lb 13 oz."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 6: Mode of test scores
            (r) => {
                const q = "On his first six tests, Chris had scores of 90%, 92%, 96%, 92%, 84%, and 92%. What is the mode of the scores?";
                const ans = "92%";
                const d1 = "90%";
                const d2 = "91%";
                const d3 = "96%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The mode is the number that occurs most frequently.", "92% occurs 3 times, which is more than any other score.", "Mode = 92%."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 7: Range of test scores
            (r) => {
                const q = "On his first six tests, Chris had scores of 90%, 92%, 96%, 92%, 84%, and 92%. What is the range of the scores?";
                const ans = "12 percentage points";
                const d1 = "8 percentage points";
                const d2 = "16 percentage points";
                const d3 = "6 percentage points";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The range is the difference between the highest and lowest scores.", "Highest score = 96%, Lowest score = 84%.", "Range = 96 − 84 = 12 percentage points."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 8: Mean of test scores
            (r) => {
                const q = "On his first six tests, Chris had scores of 90%, 92%, 96%, 92%, 84%, and 92%. What is the mean of the scores?";
                const ans = "91%";
                const d1 = "92%";
                const d2 = "90%";
                const d3 = "89%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the six scores: 90 + 92 + 96 + 92 + 84 + 92 = 546.", "Divide by 6: 546 ÷ 6 = 91%."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 9: Basketball scoring
            (r) => {
                const q = "A basketball team scored 96 points. They made 18 one-point free throws and 6 three-point baskets. How many two-point baskets did the team make?";
                const ans = "30";
                const d1 = "28";
                const d2 = "32";
                const d3 = "24";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Points from free throws and 3-pointers = 18(1) + 6(3) = 18 + 18 = 36 points.", "Points from two-point baskets = 96 − 36 = 60 points.", "Number of two-point baskets = 60 ÷ 2 = 30."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 10: Proportion in words
            (r) => {
                const q = "Complete this proportion: Four is to five as what number is to twenty?";
                const ans = "16";
                const d1 = "15";
                const d2 = "18";
                const d3 = "25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Write as an equation: 4/5 = x/20.", "Multiply numerator and denominator by 4: (4 × 4) / (5 × 4) = 16/20.", "x = 16."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 11: Ratio forming a proportion with 4/7
            (r) => {
                const q = "Which ratio forms a proportion with 4/7?";
                const ans = "12/21";
                const d1 = "14/17";
                const d2 = "7/4";
                const d3 = "8/21";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerator and denominator by 3: (4 × 3)/(7 × 3) = 12/21.", "12/21 is equal to 4/7, forming a proportion."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 12: Exponent rule multiplication
            (r) => {
                const q = "The product of 10³ · 10² equals which of the following?";
                const ans = "10⁵";
                const d1 = "10⁶";
                const d2 = "10⁹";
                const d3 = "10¹";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["When multiplying powers with the same base, add exponents: 10^(3 + 2) = 10⁵."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 13: Inscribed circle in square
            (r) => {
                const q = "The area of a square is 100 mm². What is the radius of a circle inscribed inside this square?";
                const ans = "5 mm";
                const d1 = "10 mm";
                const d2 = "2.5 mm";
                const d3 = "25 mm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length of square = √100 = 10 mm.", "The diameter of the inscribed circle equals the side length: d = 10 mm.", "Radius = 10 ÷ 2 = 5 mm."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 14: Fraction to decimal
            (r) => {
                const q = "Convert the fraction 4/25 to a decimal number.";
                const ans = "0.16";
                const d1 = "0.04";
                const d2 = "0.20";
                const d3 = "0.40";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerator and denominator by 4 to get a denominator of 100: (4 × 4)/(25 × 4) = 16/100 = 0.16."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 15: Decimal to fraction
            (r) => {
                const q = "Write the decimal number 0.01 as a fraction.";
                const ans = "1/100";
                const d1 = "1/10";
                const d2 = "1/1000";
                const d3 = "1/50";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The decimal 0.01 represents one hundredth: 1/100."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 16: Adding three mixed numbers
            (r) => {
                const q = "Find the sum: 1 1/3 + 3 1/2 + 4 1/6";
                const ans = "9";
                const d1 = "8 5/6";
                const d2 = "9 1/6";
                const d3 = "8 2/3";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Find a common denominator of 6: 1 2/6 + 3 3/6 + 4 1/6.", "Sum = 8 6/6 = 9."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 17: Octagon vs pentagon sides
            (r) => {
                const q = "An octagon has how many more sides than a pentagon?";
                const ans = "3";
                const d1 = "2";
                const d2 = "4";
                const d3 = "5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An octagon has 8 sides.", "A pentagon has 5 sides.", "8 − 5 = 3 sides."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 18: Spinner probability
            (r) => {
                const q = "Sector 2 on a spinner is a 90° sector. If the spinner is spun twice, what is the probability that it will stop in sector 2 both times?";
                const ans = "1/16";
                const d1 = "1/4";
                const d2 = "1/8";
                const d3 = "1/2";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Probability of stopping in sector 2 on one spin = 90°/360° = 1/4.", "For two independent spins: (1/4) × (1/4) = 1/16."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            },
            // Category 19: Cube volume in 1-inch cubes
            (r) => {
                const q = "How many 1-inch cubes would be needed to build a cube with edge length 4 inches?";
                const ans = "64";
                const d1 = "16";
                const d2 = "24";
                const d3 = "96";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = edge³ = 4 × 4 × 4 = 64 cubic inches.", "64 cubes of 1-inch edge are needed."], lessonNum: 102, lessonTitle: "Mass and Weight" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 103: Perimeter of Complex Shapes
// =========================================================================
code += `    // Lesson 103: Perimeter of Complex Shapes
    103: (rng, qIndex) => {
        const framings = [
            // Category 0: Perimeter of an L-shaped figure
            (r) => {
                const w = randInt(r, 10, 16);
                const h = randInt(r, 8, 14);
                const p = 2 * (w + h);
                const q = "Find the perimeter of an L-shaped hexagon with an overall width of " + w + " cm and an overall height of " + h + " cm.";
                const ans = p + " cm";
                const d1 = (w + h) + " cm";
                const d2 = (p + 4) + " cm";
                const d3 = (w * h) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In any rectilinear stepped figure, the sum of horizontal segments equals 2 × width, and vertical segments equals 2 × height.", "Perimeter = 2 × (" + w + " + " + h + ") = " + p + " cm."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 1: Sum of ages from average
            (r) => {
                const avg = randInt(r, 20, 26);
                const sum = 3 * avg;
                const q = "The average age of three men is " + avg + " years. What is the sum of their ages?";
                const ans = sum + " years";
                const d1 = (sum + 3) + " years";
                const d2 = (sum - 3) + " years";
                const d3 = (avg * 2) + " years";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = Average × Count = " + avg + " × 3 = " + sum + " years."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 2: Third age from average
            (r) => {
                const avg = 24;
                const two = 22;
                const third = 3 * avg - 2 * two;
                const q = "The average age of three men is " + avg + " years. If two of the men are " + two + " years old, how old is the third?";
                const ans = third + " years old";
                const d1 = (third - 2) + " years old";
                const d2 = (third + 2) + " years old";
                const d3 = two + " years old";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum of all three ages = 3 × " + avg + " = 72.", "Sum of two men = 2 × " + two + " = 44.", "Age of third man = 72 − 44 = " + third + " years old."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 3: String formed into square side length
            (r) => {
                const q = "A string one yard (36 inches) long is formed into the shape of a square. How many inches long is each side of the square?";
                const ans = "9 inches";
                const d1 = "6 inches";
                const d2 = "12 inches";
                const d3 = "8 inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 yard = 36 inches.", "A square has 4 congruent sides: 36 ÷ 4 = 9 inches."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 4: Area of square formed by string
            (r) => {
                const q = "A string one yard (36 inches) long is formed into the shape of a square. How many square inches is the area of the square?";
                const ans = "81 square inches";
                const d1 = "36 square inches";
                const d2 = "72 square inches";
                const d3 = "144 square inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side length = 36 ÷ 4 = 9 inches.", "Area = 9 × 9 = 81 square inches."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 5: Proportion in words
            (r) => {
                const q = "Complete this proportion: Five is to three as thirty is to what number?";
                const ans = "18";
                const d1 = "15";
                const d2 = "20";
                const d3 = "24";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/3 = 30/x.", "Since 5 × 6 = 30, multiply 3 by 6: 3 × 6 = 18."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 6: Ratio of mysteries to non-mysteries
            (r) => {
                const total = 30;
                const myst = 14;
                const non = total - myst;
                const q = "Mr. Cho has 30 books. Fourteen of the books are mysteries. What is the ratio of mysteries to non-mysteries in simplest form?";
                const ans = "7 to 8";
                const d1 = "8 to 7";
                const d2 = "7 to 15";
                const d3 = "14 to 15";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Non-mysteries = 30 − 14 = 16.", "Ratio = 14 to 16 = 7 to 8."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 7: Ratio with total students
            (r) => {
                const q = "In a class of 33 students, the ratio of boys to girls is 4 to 7. How many girls are in that class?";
                const ans = "21";
                const d1 = "12";
                const d2 = "14";
                const d3 = "24";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total ratio parts = 4 + 7 = 11.", "Students per part = 33 ÷ 11 = 3.", "Girls = 7 × 3 = 21."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 8: Pounds in a ton
            (r) => {
                const q = "A student complained that he had a \\"ton\\" of homework. Literally, how many pounds is a ton?";
                const ans = "2000 pounds";
                const d1 = "1000 pounds";
                const d2 = "500 pounds";
                const d3 = "4000 pounds";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One ton is defined as 2000 pounds."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 9: Convert 0.4 to fraction
            (r) => {
                const q = "Convert the decimal number 0.4 to a fraction reduced to lowest terms.";
                const ans = "2/5";
                const d1 = "4/10";
                const d2 = "1/4";
                const d3 = "3/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.4 = 4/10.", "Reduce by dividing numerator and denominator by 2: 2/5."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 10: Convert 8% to fraction
            (r) => {
                const q = "Convert 8% to a fraction reduced to lowest terms.";
                const ans = "2/25";
                const d1 = "8/100";
                const d2 = "4/25";
                const d3 = "1/8";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8% = 8/100.", "Divide numerator and denominator by 4: 2/25."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 11: Mixed number division
            (r) => {
                const q = "Divide: 10 1/2 ÷ 3 1/2";
                const ans = "3";
                const d1 = "3 1/2";
                const d2 = "2";
                const d3 = "4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fractions: 21/2 ÷ 7/2.", "Multiply by reciprocal: (21/2) × (2/7) = 21/7 = 3."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 12: Order of operations with decimal
            (r) => {
                const q = "Simplify: 2(6 + 2.4)";
                const ans = "16.8";
                const d1 = "14.4";
                const d2 = "16.4";
                const d3 = "18.8";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add inside parentheses: 6 + 2.4 = 8.4.", "Multiply: 2 × 8.4 = 16.8."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 13: Unknown addend with fractions
            (r) => {
                const q = "Find the unknown number n: 7 1/2 + 6 1/4 + n = 15";
                const ans = "1 1/4";
                const d1 = "1 1/2";
                const d2 = "1 3/4";
                const d3 = "2 1/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7 2/4 + 6 1/4 = 13 3/4.", "n = 15 − 13 3/4 = 1 1/4."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 14: Unknown minuend with mixed numbers
            (r) => {
                const q = "Find the unknown number x: x − 1 3/4 = 7 1/2";
                const ans = "9 1/4";
                const d1 = "8 3/4";
                const d2 = "9 1/2";
                const d3 = "9 3/4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add 1 3/4 to both sides: x = 7 2/4 + 1 3/4 = 8 5/4 = 9 1/4."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 15: Circumference / diameter ratio estimate
            (r) => {
                const q = "Mariabella measured a plate and found its circumference was about 35 inches and its diameter was about 11 inches. Find the approximate number of diameters in the circumference by dividing 35 by 11. Round to the nearest tenth.";
                const ans = "3.2";
                const d1 = "3.1";
                const d2 = "3.4";
                const d3 = "3.0";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["35 ÷ 11 = 3.1818...", "Rounded to the nearest tenth is 3.2."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 16: Prime numbers between 40 and 50
            (r) => {
                const q = "Name all the prime numbers between 40 and 50.";
                const ans = "41, 43, 47";
                const d1 = "41, 43, 49";
                const d2 = "41, 47";
                const d3 = "43, 47, 49";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Test odd numbers between 40 and 50: 41, 43, 45 (divisible by 5), 47, 49 (7×7).", "The prime numbers are 41, 43, and 47."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 17: Algebraic addition
            (r) => {
                const q = "Calculate mentally: (−3) + (−8)";
                const ans = "−11";
                const d1 = "+11";
                const d2 = "−5";
                const d3 = "+5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Adding two negative numbers: (−3) + (−8) = −(3 + 8) = −11."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 18: Isosceles triangle base angles
            (r) => {
                const a = [30, 40, 50, 70][randInt(r, 0, 3)];
                const c = (180 - a) / 2;
                const q = "In △ABC the measure of ∠A is " + a + "°. Angles B and C are congruent. What is the measure of ∠C?";
                const ans = c + "°";
                const d1 = (c + 10) + "°";
                const d2 = (c - 10) + "°";
                const d3 = (180 - a) + "°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of angles in a triangle is 180°.", "180° − " + a + "° = " + (180 - a) + "°.", "Since ∠B and ∠C are congruent: " + (180 - a) + "° ÷ 2 = " + c + "°."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            },
            // Category 19: Right triangle area
            (r) => {
                const q = "A right triangle has side lengths of 15 mm, 20 mm, and 25 mm. What is the area of this triangle?";
                const ans = "150 mm²";
                const d1 = "300 mm²";
                const d2 = "60 mm²";
                const d3 = "187.5 mm²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The two perpendicular legs are 15 mm and 20 mm.", "Area = (1/2) × 15 × 20 = 150 mm²."], lessonNum: 103, lessonTitle: "Perimeter of Complex Shapes" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 104: Algebraic Addition Activity
// =========================================================================
code += `    // Lesson 104: Algebraic Addition Activity
    104: (rng, qIndex) => {
        const framings = [
            // Category 0: Four-term algebraic addition
            (r) => {
                const q = "Simplify using algebraic addition: (−3) + (−5) − (−4) − (+2)";
                const ans = "−6";
                const d1 = "−10";
                const d2 = "−2";
                const d3 = "+6";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rewrite subtraction as addition of the opposite: (−3) + (−5) + (+4) + (−2).", "Combine negatives: (−3) + (−5) + (−2) = −10.", "Add positive: −10 + 4 = −6."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 1: Five-term signed arithmetic
            (r) => {
                const q = "Simplify: 2 + (−3) − (−9) − (+7) + (+1)";
                const ans = "2";
                const d1 = "0";
                const d2 = "4";
                const d3 = "−2";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert subtraction to addition: 2 + (−3) + (+9) + (−7) + (+1).", "Positive sum = 2 + 9 + 1 = 12.", "Negative sum = (−3) + (−7) = −10.", "Total = 12 + (−10) = 2."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 2: Square pyramid edges vs vertices
            (r) => {
                const q = "A pyramid with a square base has how many more edges than vertices?";
                const ans = "3";
                const d1 = "1";
                const d2 = "2";
                const d3 = "4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A square pyramid has 8 edges (4 on base + 4 triangular sides).", "It has 5 vertices (4 base corners + 1 apex).", "8 − 5 = 3."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 3: Ratio of fish to snails
            (r) => {
                const q = "There are 6 fish and 10 snails in an aquarium. What is the ratio of fish to snails in simplest form?";
                const ans = "3 to 5";
                const d1 = "5 to 3";
                const d2 = "3 to 8";
                const d3 = "6 to 10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio of fish to snails = 6 to 10.", "Divide both by 2: 3 to 5."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 4: Win-loss ratio with 20 games
            (r) => {
                const q = "A team's win-loss ratio was 3 to 2. If the team had played 20 games without a tie, how many games had it won?";
                const ans = "12";
                const d1 = "8";
                const d2 = "15";
                const d3 = "10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total ratio parts = 3 + 2 = 5.", "Games per part = 20 ÷ 5 = 4.", "Games won = 3 × 4 = 12."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 5: Compound probability of coin and number cube
            (r) => {
                const q = "If Molly tosses a fair coin and rolls a standard six-sided number cube, what is the probability of the coin landing heads up and the number cube stopping with a 6 on top?";
                const ans = "1/12";
                const d1 = "1/8";
                const d2 = "1/6";
                const d3 = "1/36";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P(heads) = 1/2.", "P(rolling a 6) = 1/6.", "P(heads and 6) = (1/2) × (1/6) = 1/12."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 6: Parallelogram perimeter
            (r) => {
                const b = randInt(r, 7, 10);
                const sSide = randInt(r, 4, 6);
                const p = 2 * (b + sSide);
                const q = "What is the perimeter of a parallelogram with a base of " + b + " cm and an adjacent side of " + sSide + " cm?";
                const ans = p + " cm";
                const d1 = (b + sSide) + " cm";
                const d2 = (b * sSide) + " cm";
                const d3 = (p + 4) + " cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (" + b + " + " + sSide + ") = " + p + " cm."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 7: Parallelogram area
            (r) => {
                const b = 8;
                const h = 6;
                const area = b * h;
                const q = "What is the area of a parallelogram with a base of " + b + " cm and a perpendicular height of " + h + " cm?";
                const ans = area + " cm²";
                const d1 = "24 cm²";
                const d2 = "30 cm²";
                const d3 = "56 cm²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = base × height = " + b + " × " + h + " = " + area + " cm²."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 8: Parallelogram obtuse angle
            (r) => {
                const acute = randInt(r, 50, 70);
                const obtuse = 180 - acute;
                const q = "If each acute angle of a parallelogram measures " + acute + "°, then what is the measure of each obtuse angle?";
                const ans = obtuse + "°";
                const d1 = (90 - acute) + "°";
                const d2 = (obtuse + 10) + "°";
                const d3 = (obtuse - 10) + "°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Consecutive angles in a parallelogram are supplementary (sum = 180°).", "180° − " + acute + "° = " + obtuse + "°."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 9: Circle area from radius 2
            (r) => {
                const q = "Find the area of a circle with a radius of 2 units. (Use 3.14 for π.)";
                const ans = "12.56 square units";
                const d1 = "6.28 square units";
                const d2 = "15.7 square units";
                const d3 = "25.12 square units";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = πr² = 3.14 × (2)² = 3.14 × 4 = 12.56 square units."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 10: Complete proportion
            (r) => {
                const q = "Complete this proportion: 6/8 = a/12";
                const ans = "a = 9";
                const d1 = "a = 8";
                const d2 = "a = 10";
                const d3 = "a = 16";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cross multiply: 8a = 6 × 12 = 72.", "Divide by 8: a = 72 ÷ 8 = 9."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 11: Percent discount on notebook
            (r) => {
                const q = "Sharon bought a notebook for 40% off the regular price of $6.95. What was the sale price of the notebook?";
                const ans = "$4.17";
                const d1 = "$2.78";
                const d2 = "$4.50";
                const d3 = "$3.95";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sale price is (100% − 40%) = 60% of regular price.", "0.60 × $6.95 = $4.17."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 12: Square root range
            (r) => {
                const q = "Between which two consecutive whole numbers is √200?";
                const ans = "14 and 15";
                const d1 = "13 and 14";
                const d2 = "15 and 16";
                const d3 = "19 and 20";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["14² = 196 and 15² = 225.", "Since 196 < 200 < 225, √200 is between 14 and 15."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 13: Decimal division and rounding
            (r) => {
                const q = "Divide 0.624 by 0.05 and round the quotient to the nearest whole number.";
                const ans = "12";
                const d1 = "13";
                const d2 = "11";
                const d3 = "12.5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.624 ÷ 0.05 = 62.4 ÷ 5 = 12.48.", "12.48 rounded to the nearest whole number is 12."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 14: Average to sum
            (r) => {
                const avg = randInt(r, 16, 25);
                const sum = 3 * avg;
                const q = "The average of three numbers is " + avg + ". What is the sum of the three numbers?";
                const ans = "" + sum;
                const d1 = "" + (sum + 3);
                const d2 = "" + (sum - 3);
                const d3 = "" + (avg * 2);
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = Average × Count = " + avg + " × 3 = " + sum + "."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 15: Prime factorization of 450
            (r) => {
                const q = "Write the prime factorization of 450 using exponents.";
                const ans = "2 · 3² · 5²";
                const d1 = "2² · 3 · 5²";
                const d2 = "2 · 3 · 5³";
                const d3 = "2³ · 3² · 5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["450 = 45 × 10 = (9 × 5) × (2 × 5) = 3² × 5 × 2 × 5 = 2 · 3² · 5²."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 16: Shoe box volume with 1-inch blocks
            (r) => {
                const q = "How many blocks 1 inch on each edge would it take to fill a shoe box that is 12 inches long, 6 inches wide, and 5 inches tall?";
                const ans = "360 blocks";
                const d1 = "180 blocks";
                const d2 = "300 blocks";
                const d3 = "720 blocks";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = length × width × height = 12 × 6 × 5 = 360 cubic inches.", "It takes 360 one-inch cubes."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 17: Athletes who did not play
            (r) => {
                const q = "Three fourths of the 60 athletes played in the game. How many athletes did not play?";
                const ans = "15";
                const d1 = "45";
                const d2 = "20";
                const d3 = "12";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The fraction that did not play is 1 − 3/4 = 1/4.", "1/4 × 60 = 15 athletes."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 18: Distance from speed and time
            (r) => {
                const q = "How far would a car travel in 4 hours at a steady speed of 88 kilometers per hour?";
                const ans = "352 km";
                const d1 = "342 km";
                const d2 = "362 km";
                const d3 = "264 km";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distance = speed × time = 88 km/h × 4 h = 352 km."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            },
            // Category 19: Order of operations with powers
            (r) => {
                const q = "Simplify: 3⁴ + 5² × 4 − 100";
                const ans = "81";
                const d1 = "181";
                const d2 = "105";
                const d3 = "64";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3⁴ = 81.", "5² × 4 = 25 × 4 = 100.", "81 + 100 − 100 = 81."], lessonNum: 104, lessonTitle: "Algebraic Addition Activity" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 105: Using Proportions to Solve Percent Problems
// =========================================================================
code += `    // Lesson 105: Using Proportions to Solve Percent Problems
    105: (rng, qIndex) => {
        const framings = [
            // Category 0: Airline discount seats
            (r) => {
                const q = "An airline sold 25% of the seats on an airplane at a discount. If 45 seats were sold at a discount, how many total seats were on the airplane?";
                const ans = "180 seats";
                const d1 = "135 seats";
                const d2 = "225 seats";
                const d3 = "160 seats";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Set up a proportion: 25/100 = 45/Total.", "Total = (45 × 100) ÷ 25 = 4500 ÷ 25 = 180 seats."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 1: School survey walking students
            (r) => {
                const q = "In a school survey, 30% of the students said they walk to school. If 60 students walk to school, how many students were surveyed in all?";
                const ans = "200 students";
                const d1 = "180 students";
                const d2 = "220 students";
                const d3 = "150 students";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["30/100 = 60/Total.", "Total = (60 × 100) ÷ 30 = 6000 ÷ 30 = 200 students."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 2: Map scale distance
            (r) => {
                const q = "A map of Texas is drawn to a scale of 1 inch = 50 miles. Houston and San Antonio are 4 inches apart on the map. What is the actual distance between Houston and San Antonio?";
                const ans = "200 miles";
                const d1 = "150 miles";
                const d2 = "250 miles";
                const d3 = "100 miles";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distance = 4 inches × 50 miles/inch = 200 miles."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 3: Whales ratio
            (r) => {
                const q = "The ratio of humpback whales to orcas was 2 to 1. If there were 900 humpback whales, how many orcas were there?";
                const ans = "450";
                const d1 = "1800";
                const d2 = "300";
                const d3 = "600";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio = 2/1 = 900/orcas.", "Orcas = 900 ÷ 2 = 450."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 4: Frozen yogurt box volume
            (r) => {
                const q = "When Robert measured a half-gallon box of frozen yogurt, he found it had a length of 7 inches, a width of 5 inches, and a height of 3.5 inches. What was the volume of the box in cubic inches?";
                const ans = "122.5 cubic inches";
                const d1 = "115.5 cubic inches";
                const d2 = "125 cubic inches";
                const d3 = "245 cubic inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = 7 × 5 × 3.5 = 35 × 3.5 = 122.5 cubic inches."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 5: Mass conversion estimate
            (r) => {
                const q = "On Earth a 1-kilogram object weighs about 2.2 pounds. A rock has a mass of 50 kilograms. About how many pounds does the rock weigh?";
                const ans = "110 pounds";
                const d1 = "100 pounds";
                const d2 = "120 pounds";
                const d3 = "105 pounds";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Weight = 50 × 2.2 = 110 pounds."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 6: Dimes and nickels ratio with total
            (r) => {
                const q = "Sonia has only dimes and nickels in her coin jar; they are in a ratio of 3 to 5. If she has 120 coins in the jar, how many are dimes?";
                const ans = "45";
                const d1 = "75";
                const d2 = "40";
                const d3 = "50";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio total = 3 + 5 = 8 parts.", "Coins per part = 120 ÷ 8 = 15.", "Dimes = 3 × 15 = 45."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 7: Fraction 3/50 to percent
            (r) => {
                const q = "Convert the fraction 3/50 to a percent.";
                const ans = "6%";
                const d1 = "3%";
                const d2 = "15%";
                const d3 = "60%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(3/50) × 100% = 3 × 2% = 6%."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 8: Percent 150% to mixed number
            (r) => {
                const q = "Convert 150% to a mixed number reduced to lowest terms.";
                const ans = "1 1/2";
                const d1 = "1 1/5";
                const d2 = "1 1/4";
                const d3 = "15/10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["150% = 150/100 = 1 50/100 = 1 1/2."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 9: Decimal expression
            (r) => {
                const q = "Simplify: (1 + 0.5) ÷ (1 − 0.5)";
                const ans = "3";
                const d1 = "1.5";
                const d2 = "2";
                const d3 = "0.5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(1 + 0.5) = 1.5 and (1 − 0.5) = 0.5.", "1.5 ÷ 0.5 = 3."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 10: Solve proportion
            (r) => {
                const q = "Solve for c: 3/12 = c/4";
                const ans = "c = 1";
                const d1 = "c = 2";
                const d2 = "c = 3";
                const d3 = "c = 4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Simplify left side: 3/12 = 1/4.", "1/4 = c/4 implies c = 1."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 11: Sales tax total cost
            (r) => {
                const q = "What is the total cost of an $8.75 purchase after 8% sales tax is added?";
                const ans = "$9.45";
                const d1 = "$9.40";
                const d2 = "$9.50";
                const d3 = "$9.25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tax = 0.08 × $8.75 = $0.70.", "Total = $8.75 + $0.70 = $9.45."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 12: Decimal number from words
            (r) => {
                const q = "Write the decimal number: one hundred five and five hundredths.";
                const ans = "105.05";
                const d1 = "105.5";
                const d2 = "105.005";
                const d3 = "150.05";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One hundred five = 105.", "Five hundredths = 0.05.", "Together: 105.05."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 13: Isosceles triangle longest side
            (r) => {
                const q = "The perimeter of an isosceles triangle is 18 cm. The two congruent sides each measure 5 cm. What is the length of its longest side?";
                const ans = "8 cm";
                const d1 = "6 cm";
                const d2 = "7 cm";
                const d3 = "10 cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum of two equal sides = 5 + 5 = 10 cm.", "Third side = 18 − 10 = 8 cm."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 14: Isosceles triangle area
            (r) => {
                const q = "An isosceles triangle has a base of 8 cm and a perpendicular height of 3 cm. What is the area of the triangle?";
                const ans = "12 cm²";
                const d1 = "24 cm²";
                const d2 = "14 cm²";
                const d3 = "11 cm²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (1/2) × base × height = (1/2) × 8 × 3 = 12 cm²."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 15: Temperature rise from negative
            (r) => {
                const q = "The temperature was −5°F at 6:00 a.m. By noon the temperature had risen 12 degrees. What was the noontime temperature?";
                const ans = "7°F";
                const d1 = "−7°F";
                const d2 = "17°F";
                const d3 = "5°F";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["−5°F + 12°F = 7°F."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 16: Rain probability complement
            (r) => {
                const q = "The weather report stated that the chance of rain is 30%. Use a decimal number to express the probability that it will not rain.";
                const ans = "0.7";
                const d1 = "0.3";
                const d2 = "0.07";
                const d3 = "0.6";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Chance of not raining = 100% − 30% = 70%.", "As a decimal, 70% = 0.7."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 17: Room dimensions in square yards
            (r) => {
                const q = "A room is 15 feet long and 12 feet wide. What is the area of the room in square yards?";
                const ans = "20 square yards";
                const d1 = "60 square yards";
                const d2 = "180 square yards";
                const d3 = "27 square yards";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert feet to yards: 15 ft = 5 yd, 12 ft = 4 yd.", "Area = 5 × 4 = 20 square yards."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 18: Adding fractions with unlike denominators
            (r) => {
                const q = "Find the sum: 1/12 + 5/6 + 2 1/4";
                const ans = "3 1/6";
                const d1 = "3 1/3";
                const d2 = "2 5/6";
                const d3 = "3 5/12";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to common denominator 12: 1/12 + 10/12 + 2 3/12.", "Sum = 2 14/12 = 3 2/12 = 3 1/6."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            },
            // Category 19: Prime factorization of 500
            (r) => {
                const q = "Write the prime factorization of 500 using exponents.";
                const ans = "2² · 5³";
                const d1 = "2³ · 5²";
                const d2 = "2 · 5⁴";
                const d3 = "4 · 5³";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["500 = 5 × 100 = 5 × (4 × 25) = 5 × 2² × 5² = 2² · 5³."], lessonNum: 105, lessonTitle: "Using Proportions to Solve Percent Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 106: Two-Step Equations
// =========================================================================
code += `    // Lesson 106: Two-Step Equations
    106: (rng, qIndex) => {
        const framings = [
            // Category 0: Two-step equation with addition
            (r) => {
                const q = "Solve and check the equation: 8x + 1 = 25";
                const ans = "x = 3";
                const d1 = "x = 4";
                const d2 = "x = 2";
                const d3 = "x = 3.25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract 1 from both sides: 8x = 24.", "Divide both sides by 8: x = 24 ÷ 8 = 3."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 1: Two-step equation with subtraction
            (r) => {
                const q = "Solve and check the equation: 3w − 5 = 25";
                const ans = "w = 10";
                const d1 = "w = 9";
                const d2 = "w = 8";
                const d3 = "w = 12";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add 5 to both sides: 3w = 30.", "Divide both sides by 3: w = 30 ÷ 3 = 10."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 2: Two-step equation: 5m + 3 = 33
            (r) => {
                const q = "Solve and check the equation: 5m + 3 = 33";
                const ans = "m = 6";
                const d1 = "m = 5";
                const d2 = "m = 7";
                const d3 = "m = 8";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract 3 from both sides: 5m = 30.", "Divide by 5: m = 30 ÷ 5 = 6."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 3: Two-step equation: 4w − 1 = 35
            (r) => {
                const q = "Solve and check the equation: 4w − 1 = 35";
                const ans = "w = 9";
                const d1 = "w = 8";
                const d2 = "w = 10";
                const d3 = "w = 8.5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add 1 to both sides: 4w = 36.", "Divide by 4: w = 36 ÷ 4 = 9."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 4: Third number from average and extremes
            (r) => {
                const q = "The average of three numbers is 20. If the greatest is 28 and the least is 15, what is the third number?";
                const ans = "17";
                const d1 = "16";
                const d2 = "18";
                const d3 = "19";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total sum = 3 × 20 = 60.", "Sum of greatest and least = 28 + 15 = 43.", "Third number = 60 − 43 = 17."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 5: Map scale with mixed number
            (r) => {
                const q = "A map is drawn to the scale of 1 inch = 10 miles. How many miles apart are two points that are 2 1/2 inches apart on the map?";
                const ans = "25 miles";
                const d1 = "20 miles";
                const d2 = "30 miles";
                const d3 = "22.5 miles";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 × 10 = (5/2) × 10 = 25 miles."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 6: Fraction of 360
            (r) => {
                const q = "What number is one fourth of 360?";
                const ans = "90";
                const d1 = "60";
                const d2 = "120";
                const d3 = "80";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(1/4) × 360 = 360 ÷ 4 = 90."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 7: Percent of a quarter is a nickel
            (r) => {
                const q = "What percent of a quarter is a nickel?";
                const ans = "20%";
                const d1 = "25%";
                const d2 = "15%";
                const d3 = "5%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A nickel is 5¢ and a quarter is 25¢.", "(5 ÷ 25) × 100% = (1/5) × 100% = 20%."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 8: Elevator load in tons
            (r) => {
                const q = "A sign in an elevator says that the maximum load is 4000 pounds. How many tons is 4000 pounds?";
                const ans = "2 tons";
                const d1 = "1 ton";
                const d2 = "3 tons";
                const d3 = "4 tons";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 ton = 2000 pounds.", "4000 ÷ 2000 = 2 tons."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 9: Liquid capacity
            (r) => {
                const q = "One gallon minus one quart equals how many pints?";
                const ans = "6 pints";
                const d1 = "7 pints";
                const d2 = "5 pints";
                const d3 = "3 pints";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 gallon = 8 pints.", "1 quart = 2 pints.", "8 pints − 2 pints = 6 pints."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 10: Kangaroos to koalas ratio
            (r) => {
                const q = "The ratio of kangaroos to koalas was 9 to 5. If there were 414 kangaroos, how many koalas were there?";
                const ans = "230";
                const d1 = "210";
                const d2 = "240";
                const d3 = "180";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["9/5 = 414/koalas.", "Koalas = (414 × 5) ÷ 9 = 46 × 5 = 230."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 11: Converting 1/8 to decimal
            (r) => {
                const q = "Convert 1/8 to a decimal number.";
                const ans = "0.125";
                const d1 = "0.12";
                const d2 = "0.8";
                const d3 = "0.25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide 1 by 8: 1 ÷ 8 = 0.125."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 12: Subtraction of mixed numbers with regrouping
            (r) => {
                const q = "Subtract: 8 1/3 − 3 1/2";
                const ans = "4 5/6";
                const d1 = "5 1/6";
                const d2 = "4 1/6";
                const d3 = "5 5/6";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator 6: 8 2/6 − 3 3/6.", "Regroup: 7 8/6 − 3 3/6 = 4 5/6."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 13: Expanded notation standard form
            (r) => {
                const q = "Write the standard notation for: (6 × 10⁴) + (9 × 10²) + (7 × 10⁰)";
                const ans = "60,907";
                const d1 = "69,007";
                const d2 = "60,970";
                const d3 = "6,907";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 × 10,000 = 60,000.", "9 × 100 = 900.", "7 × 1 = 7.", "Sum = 60,907."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 14: Prime factorization of 1,000,000
            (r) => {
                const q = "Write the prime factorization of one million using exponents.";
                const ans = "2⁶ · 5⁶";
                const d1 = "2⁵ · 5⁵";
                const d2 = "2⁶ · 5⁵";
                const d3 = "2³ · 5³";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1,000,000 = 10⁶ = (2 × 5)⁶ = 2⁶ · 5⁶."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 15: Broken ruler subtraction
            (r) => {
                const q = "A 1-foot ruler broke into two pieces so that one piece was 5 1/4 inches long. How long was the other piece?";
                const ans = "6 3/4 inches";
                const d1 = "6 1/4 inches";
                const d2 = "7 1/4 inches";
                const d3 = "7 3/4 inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 foot = 12 inches.", "12 − 5 1/4 = 11 4/4 − 5 1/4 = 6 3/4 inches."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 16: Three inches percent of a foot
            (r) => {
                const q = "Three inches is what percent of a foot?";
                const ans = "25%";
                const d1 = "30%";
                const d2 = "20%";
                const d3 = "33 1/3%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 foot = 12 inches.", "(3 ÷ 12) × 100% = (1/4) × 100% = 25%."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 17: Bike tire circumference
            (r) => {
                const q = "The diameter of each tire on Jan's bike is 2 feet. Which choice is closest to the circumference of each tire? (Use 3.14 for π.)";
                const ans = "6 ft 3 in.";
                const d1 = "6 ft";
                const d2 = "6 ft 8 in.";
                const d3 = "7 ft";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = πd = 3.14 × 2 ft = 6.28 feet.", "0.28 feet × 12 inches/foot ≈ 3.36 inches.", "Closest is 6 ft 3 in."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 18: Triangle area
            (r) => {
                const q = "Find the area of a triangle with a base of 5 cm and a perpendicular height of 4 cm.";
                const ans = "10 cm²";
                const d1 = "20 cm²";
                const d2 = "9 cm²";
                const d3 = "14 cm²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (1/2) × base × height = (1/2) × 5 × 4 = 10 cm²."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            },
            // Category 19: Median of distances
            (r) => {
                const q = "Celina rode her bike distances of 4 miles, 7 miles, 3 miles, 10 miles, and 6 miles. What is the median distance?";
                const ans = "6 miles";
                const d1 = "7 miles";
                const d2 = "5 miles";
                const d3 = "4 miles";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Order the values from least to greatest: 3, 4, 6, 7, 10.", "The middle number is 6 miles."], lessonNum: 106, lessonTitle: "Two-Step Equations" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 107: Area of Complex Shapes
// =========================================================================
code += `    // Lesson 107: Area of Complex Shapes
    107: (rng, qIndex) => {
        const framings = [
            // Category 0: Combined area of two rectangles forming L-shape
            (r) => {
                const q = "An L-shaped figure is formed by two joined rectangles measuring 10 inches by 3 inches and 6 inches by 4 inches. What is the combined area of the figure?";
                const ans = "54 square inches";
                const d1 = "48 square inches";
                const d2 = "60 square inches";
                const d3 = "30 square inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area 1 = 10 × 3 = 30 sq in.", "Area 2 = 6 × 4 = 24 sq in.", "Total area = 30 + 24 = 54 square inches."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 1: Area of trapezoid divided into rectangle and triangle
            (r) => {
                const q = "A trapezoid with parallel bases of 10 cm and 14 cm and a height of 6 cm is divided into a rectangle and a triangle. What is the area of the trapezoid?";
                const ans = "72 cm²";
                const d1 = "60 cm²";
                const d2 = "84 cm²";
                const d3 = "144 cm²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rectangle area = 10 × 6 = 60 cm².", "Triangle base = 14 − 10 = 4 cm; triangle area = (1/2) × 4 × 6 = 12 cm².", "Total area = 60 + 12 = 72 cm²."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 2: Decimal quotient described in words
            (r) => {
                const q = "If the divisor is eight tenths (0.8) and the dividend is forty-eight hundredths (0.48), what is the quotient?";
                const ans = "0.6";
                const d1 = "6";
                const d2 = "0.06";
                const d3 = "0.384";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Quotient = Dividend ÷ Divisor = 0.48 ÷ 0.8 = 4.8 ÷ 8 = 0.6."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 3: Clubhouse scale height
            (r) => {
                const q = "The plans for a clubhouse were drawn so that 1 inch equals 2 feet. In the plans the clubhouse was 4 inches tall. How tall will the actual clubhouse be?";
                const ans = "8 feet";
                const d1 = "6 feet";
                const d2 = "10 feet";
                const d3 = "12 feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Actual height = 4 inches × 2 feet/inch = 8 feet."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 4: Ratio of tulips to roses
            (r) => {
                const q = "If 600 roses and 800 tulips were sold, what was the ratio of tulips sold to roses sold in simplest form?";
                const ans = "4 to 3";
                const d1 = "3 to 4";
                const d2 = "4 to 7";
                const d3 = "3 to 7";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tulips to roses = 800 to 600.", "Divide both by 200: 4 to 3."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 5: Regular pentagon side percent
            (r) => {
                const q = "What percent of the perimeter of a regular pentagon is the length of one side?";
                const ans = "20%";
                const d1 = "25%";
                const d2 = "15%";
                const d3 = "10%";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A regular pentagon has 5 equal sides.", "One side is 1/5 of the perimeter: (1/5) × 100% = 20%."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 6: Mass of gram to kilogram fraction
            (r) => {
                const q = "The mass of a dollar bill is about one gram. A gram is what fraction of a kilogram?";
                const ans = "1/1000";
                const d1 = "1/100";
                const d2 = "1/10";
                const d3 = "1/10000";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 kilogram = 1000 grams.", "1 gram is 1/1000 of a kilogram."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 7: Mental signed addition
            (r) => {
                const q = "Calculate mentally: (+15) + (−10)";
                const ans = "+5";
                const d1 = "−5";
                const d2 = "+25";
                const d3 = "−25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["15 + (−10) = 15 − 10 = +5."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 8: Mental signed subtraction
            (r) => {
                const q = "Calculate mentally: (−15) − (−10)";
                const ans = "−5";
                const d1 = "+5";
                const d2 = "−25";
                const d3 = "+25";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(−15) − (−10) = (−15) + (+10) = −5."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 9: Complete proportion with decimal
            (r) => {
                const q = "Complete this proportion: 6/8 = u/1.2";
                const ans = "u = 0.9";
                const d1 = "u = 1.0";
                const d2 = "u = 0.8";
                const d3 = "u = 1.6";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6/8 = 3/4 = 0.75.", "u = 0.75 × 1.2 = 0.9."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 10: Convert 3/8 to decimal
            (r) => {
                const q = "Convert 3/8 to a decimal number.";
                const ans = "0.375";
                const d1 = "0.38";
                const d2 = "0.37";
                const d3 = "0.625";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide 3 by 8: 3 ÷ 8 = 0.375."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 11: Convert 0.45 to fraction
            (r) => {
                const q = "Convert 0.45 to a fraction reduced to lowest terms.";
                const ans = "9/20";
                const d1 = "45/100";
                const d2 = "9/10";
                const d3 = "4/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.45 = 45/100.", "Divide numerator and denominator by 5: 9/20."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 12: Convert 80% to fraction
            (r) => {
                const q = "Convert 80% to a fraction reduced to lowest terms.";
                const ans = "4/5";
                const d1 = "8/10";
                const d2 = "3/4";
                const d3 = "7/10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["80% = 80/100.", "Divide by 20: 4/5."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 13: Multiplying three fractions
            (r) => {
                const q = "Multiply and simplify: 3/8 × 4/5 × 5/9";
                const ans = "1/6";
                const d1 = "1/5";
                const d2 = "1/8";
                const d3 = "2/9";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cancel 5 with 5, leaving (3/8) × (4/9).", "Cancel 3 and 9 (gives 1 and 3), cancel 4 and 8 (gives 1 and 2): (1/2) × (1/3) = 1/6."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 14: Right triangle other acute angle
            (r) => {
                const q = "If one acute angle of a right triangle measures 55°, what is the measure of the other acute angle?";
                const ans = "35°";
                const d1 = "45°";
                const d2 = "25°";
                const d3 = "125°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The acute angles of a right triangle are complementary (sum to 90°).", "90° − 55° = 35°."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 15: Half of a pint in fluid ounces
            (r) => {
                const q = "How many fluid ounces is one half of a pint?";
                const ans = "8 fluid ounces";
                const d1 = "16 fluid ounces";
                const d2 = "4 fluid ounces";
                const d3 = "2 fluid ounces";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 pint = 16 fluid ounces.", "Half of 16 = 8 fluid ounces."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 16: Two-step equation
            (r) => {
                const q = "Solve and check: 3m + 8 = 44";
                const ans = "m = 12";
                const d1 = "m = 10";
                const d2 = "m = 14";
                const d3 = "m = 11";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract 8 from both sides: 3m = 36.", "Divide by 3: m = 36 ÷ 3 = 12."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 17: Greatest common factor
            (r) => {
                const q = "What is the greatest common factor (GCF) of 30 and 45?";
                const ans = "15";
                const d1 = "5";
                const d2 = "10";
                const d3 = "3";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30.", "Factors of 45: 1, 3, 5, 9, 15, 45.", "Greatest common factor is 15."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 18: Area of unit rectangle in unit square
            (r) => {
                const q = "A square with sides 1 inch long is divided into 1/2-inch-by-1/4-inch rectangles. What is the area of each small rectangle?";
                const ans = "1/8 square inch";
                const d1 = "1/4 square inch";
                const d2 = "1/6 square inch";
                const d3 = "1/16 square inch";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (1/2 in.) × (1/4 in.) = 1/8 square inch."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            },
            // Category 19: Yard cube filled with foot blocks
            (r) => {
                const q = "How many blocks that are 1 foot on each edge would be needed to fill a cubical box with edges 1 yard long?";
                const ans = "27 blocks";
                const d1 = "9 blocks";
                const d2 = "3 blocks";
                const d3 = "36 blocks";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 yard = 3 feet.", "Volume in cubic feet = 3 × 3 × 3 = 27 cubic feet.", "27 blocks of 1-foot edge are needed."], lessonNum: 107, lessonTitle: "Area of Complex Shapes" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 108: Transformations
// =========================================================================
code += `    // Lesson 108: Transformations
    108: (rng, qIndex) => {
        const framings = [
            // Category 0: Reflection definition
            (r) => {
                const q = "Which geometric transformation creates a mirror image by flipping a figure across a line?";
                const ans = "Reflection";
                const d1 = "Translation";
                const d2 = "Rotation";
                const d3 = "Dilation";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A reflection flips a figure across a line to produce a mirror image."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 1: Translation definition
            (r) => {
                const q = "Which geometric transformation slides a figure in one direction without turning or flipping it?";
                const ans = "Translation";
                const d1 = "Reflection";
                const d2 = "Rotation";
                const d3 = "Symmetry";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A translation slides a figure in a specified distance and direction without rotating or reflecting."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 2: Rotation definition
            (r) => {
                const q = "Which geometric transformation turns a figure about a fixed point?";
                const ans = "Rotation";
                const d1 = "Reflection";
                const d2 = "Translation";
                const d3 = "Tessellation";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A rotation turns a figure around a center point."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 3: Coordinate reflection across y-axis
            (r) => {
                const q = "On a coordinate plane, point R has coordinates (−1, 4). What are the coordinates of its reflection across the y-axis?";
                const ans = "(1, 4)";
                const d1 = "(−1, −4)";
                const d2 = "(1, −4)";
                const d3 = "(4, −1)";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Reflecting across the y-axis negates the x-coordinate while leaving the y-coordinate unchanged: (−(−1), 4) = (1, 4)."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 4: Sum of first five positive even numbers
            (r) => {
                const q = "What is the sum of the first five positive even numbers?";
                const ans = "30";
                const d1 = "20";
                const d2 = "25";
                const d3 = "35";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The first five positive even numbers are 2, 4, 6, 8, 10.", "Sum = 2 + 4 + 6 + 8 + 10 = 30."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 5: Win-loss ratio
            (r) => {
                const q = "A team's win-loss ratio is 4 to 3. If the team has won 12 games, how many games has the team lost?";
                const ans = "9 games";
                const d1 = "8 games";
                const d2 = "10 games";
                const d3 = "15 games";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4/3 = 12/lost.", "Lost = (3 × 12) ÷ 4 = 36 ÷ 4 = 9 games."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 6: Present and absent percent
            (r) => {
                const q = "Five students were absent today. The teacher reported that 80% of the students were present. How many students were present?";
                const ans = "20 students";
                const d1 = "25 students";
                const d2 = "16 students";
                const d3 = "15 students";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Percent absent = 100% − 80% = 20%.", "If 20% is 5 students, then total students = 5 ÷ 0.20 = 25.", "Students present = 25 − 5 = 20."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 7: Drum head area
            (r) => {
                const q = "A circular drum head has a diameter of 12 inches. What is the area of the top of the drum rounded to the nearest square inch? (Use 3.14 for π.)";
                const ans = "113 square inches";
                const d1 = "38 square inches";
                const d2 = "452 square inches";
                const d3 = "144 square inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = 12 ÷ 2 = 6 inches.", "Area = πr² = 3.14 × (6)² = 3.14 × 36 = 113.04 ≈ 113 square inches."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 8: Band woodwind players
            (r) => {
                const q = "Three eighths of the 48 band members played woodwinds. How many woodwind players were in the band?";
                const ans = "18";
                const d1 = "16";
                const d2 = "24";
                const d3 = "12";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(3/8) × 48 = 3 × 6 = 18."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 9: LCM of 6, 8, and 12
            (r) => {
                const q = "What is the least common multiple (LCM) of 6, 8, and 12?";
                const ans = "24";
                const d1 = "48";
                const d2 = "12";
                const d3 = "72";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 12: 12, 24, 36...", "24 is divisible by both 6 and 8.", "LCM = 24."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 10: Proportion with decimal
            (r) => {
                const q = "Complete this proportion: 0.7/20 = n/100";
                const ans = "n = 3.5";
                const d1 = "n = 35";
                const d2 = "n = 0.35";
                const d3 = "n = 7";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply 20 by 5 to get 100.", "Multiply 0.7 by 5: n = 0.7 × 5 = 3.5."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 11: Percent of money rounded to nearest cent
            (r) => {
                const q = "Find 6% of $2.89. Round the product to the nearest cent.";
                const ans = "$0.17";
                const d1 = "$0.18";
                const d2 = "$0.16";
                const d3 = "$1.73";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.06 × $2.89 = $0.1734.", "Round to the nearest cent: $0.17."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 12: Millimeter fraction of a meter
            (r) => {
                const q = "What fraction of a meter is a millimeter?";
                const ans = "1/1000";
                const d1 = "1/100";
                const d2 = "1/10";
                const d3 = "1/10000";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 meter = 1000 millimeters.", "1 millimeter = 1/1000 of a meter."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 13: Ordering close decimals
            (r) => {
                const q = "Arrange these numbers in order from least to greatest: 0.3, 0.31, 0.305";
                const ans = "0.3, 0.305, 0.31";
                const d1 = "0.305, 0.3, 0.31";
                const d2 = "0.31, 0.305, 0.3";
                const d3 = "0.3, 0.31, 0.305";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Write with equal decimal places: 0.300, 0.310, 0.305.", "From least to greatest: 0.300 (0.3), 0.305, 0.310 (0.31)."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 14: Volume of 10-cm cube
            (r) => {
                const q = "If each edge of a cube is 10 centimeters long, then its volume is how many cubic centimeters?";
                const ans = "1000 cm³";
                const d1 = "100 cm³";
                const d2 = "600 cm³";
                const d3 = "10,000 cm³";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = 10 × 10 × 10 = 1000 cm³."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 15: Two-step equation
            (r) => {
                const q = "Solve and check: 8a − 4 = 60";
                const ans = "a = 8";
                const d1 = "a = 7";
                const d2 = "a = 9";
                const d3 = "a = 6";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add 4 to both sides: 8a = 64.", "Divide by 8: a = 64 ÷ 8 = 8."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 16: Fraction of a right angle
            (r) => {
                const q = "Acute angle a is one third of a right angle (90°). What is the measure of angle a?";
                const ans = "30°";
                const d1 = "45°";
                const d2 = "60°";
                const d3 = "15°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A right angle measures 90°.", "(1/3) × 90° = 30°."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 17: Trapezoid area
            (r) => {
                const q = "The parallel sides of a trapezoid are 20 mm and 12 mm long and are 10 mm apart. What is the area of the trapezoid?";
                const ans = "160 mm²";
                const d1 = "320 mm²";
                const d2 = "120 mm²";
                const d3 = "200 mm²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = ((b1 + b2) ÷ 2) × h = ((20 + 12) ÷ 2) × 10 = 16 × 10 = 160 mm²."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 18: Weight of 2-gallon bucket of water
            (r) => {
                const q = "A pint of water weighs about one pound. About how much does a two-gallon bucket of water weigh? (Disregard the weight of the bucket.)";
                const ans = "16 pounds";
                const d1 = "8 pounds";
                const d2 = "32 pounds";
                const d3 = "2 pounds";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 gallon = 4 quarts = 8 pints.", "2 gallons = 16 pints.", "Since 1 pint weighs about 1 pound, 16 pints weigh about 16 pounds."], lessonNum: 108, lessonTitle: "Transformations" };
            },
            // Category 19: Marble probability without replacement
            (r) => {
                const q = "A bag contains 6 red marbles and 4 blue marbles. If Delia draws one marble from the bag and then draws a second marble without replacing the first, what is the probability that both marbles will be red?";
                const ans = "1/3";
                const d1 = "9/25";
                const d2 = "3/5";
                const d3 = "1/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P(first red) = 6/10 = 3/5.", "P(second red) = 5/9.", "P(both red) = (6/10) × (5/9) = 30/90 = 1/3."], lessonNum: 108, lessonTitle: "Transformations" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 109: Corresponding Parts • Similar Figures
// =========================================================================
code += `    // Lesson 109: Corresponding Parts • Similar Figures
    109: (rng, qIndex) => {
        const framings = [
            // Category 0: Similar polygons corresponding angles
            (r) => {
                const q = "If two polygons are similar, which of the following must be true about their corresponding angles?";
                const ans = "Their corresponding angles are equal in measure";
                const d1 = "Their corresponding angles are supplementary";
                const d2 = "Their corresponding angles add to 180°";
                const d3 = "Their corresponding angles are proportional but not equal";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["By definition of similar polygons, corresponding angles are equal in measure, and corresponding sides are proportional."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 1: Similar vs congruent true/false
            (r) => {
                const q = "Verify the statement: \\"All similar triangles are congruent.\\" Is this statement true or false?";
                const ans = "False, because similar triangles have the same shape but can have different sizes.";
                const d1 = "True, because similar figures have identical dimensions.";
                const d2 = "True, because congruent triangles have different angles.";
                const d3 = "False, because similar triangles must have different angle measures.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Similar triangles have identical shape (equal angles) but may differ in size. Only congruent triangles must have the same size."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 2: All squares similar
            (r) => {
                const q = "Verify the statement: \\"All squares are similar.\\" True or false?";
                const ans = "True, because all squares have four 90° angles and proportional sides.";
                const d1 = "False, because squares can have different side lengths.";
                const d2 = "False, because only congruent squares are similar.";
                const d3 = "True, because all squares have the exact same area.";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["All squares have four 90° angles, and the ratio of any side to any other side is equal. Thus all squares are similar."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 3: Similar pentagons scale factor
            (r) => {
                const q = "Two pentagons are similar with a scale factor of 3. If a side of the smaller pentagon is 2 inches long, how long is the corresponding side of the larger pentagon?";
                const ans = "6 inches";
                const d1 = "5 inches";
                const d2 = "9 inches";
                const d3 = "1.5 inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply the smaller side by the scale factor: 2 × 3 = 6 inches."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 4: Similar pentagons finding smaller side
            (r) => {
                const q = "Two pentagons are similar with a scale factor of 3. If a side of the larger pentagon is 9 inches long, how long is the corresponding side of the smaller pentagon?";
                const ans = "3 inches";
                const d1 = "6 inches";
                const d2 = "27 inches";
                const d3 = "12 inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide the larger side by the scale factor: 9 ÷ 3 = 3 inches."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 5: Product of next three prime numbers
            (r) => {
                const q = "The first three prime numbers are 2, 3, and 5, and their product is 30. What is the product of the next three prime numbers (7, 11, and 13)?";
                const ans = "1001";
                const d1 = "999";
                const d2 = "1015";
                const d3 = "935";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply: 7 × 11 = 77.", "77 × 13 = 1001."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 6: Map scale street length
            (r) => {
                const q = "On a map, 2 cm equals 1 km. What is the actual length of a street that is 10 cm long on the map?";
                const ans = "5 km";
                const d1 = "20 km";
                const d2 = "10 km";
                const d3 = "2.5 km";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10 cm ÷ 2 cm/km = 5 km."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 7: Commercial to noncommercial ratio
            (r) => {
                const q = "Between 8 p.m. and 9 p.m. (60 minutes), a television station broadcasts 8 minutes of commercials. What is the ratio of commercial time to noncommercial time during that hour in simplest form?";
                const ans = "2 to 13";
                const d1 = "2 to 15";
                const d2 = "4 to 26";
                const d3 = "1 to 7";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Noncommercial time = 60 − 8 = 52 minutes.", "Ratio = 8 to 52.", "Divide both by 4: 2 to 13."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 8: Isosceles right triangle acute angles
            (r) => {
                const q = "If the two acute angles of a right triangle are congruent, what is the measure of each acute angle?";
                const ans = "45°";
                const d1 = "90°";
                const d2 = "30°";
                const d3 = "60°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The two acute angles sum to 90°.", "Since they are congruent: 90° ÷ 2 = 45°."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 9: Single state report probability
            (r) => {
                const q = "A teacher assigns each student in class one of the fifty U.S. states at random to write a report. What is the probability that a student is assigned Massachusetts?";
                const ans = "1/50";
                const d1 = "1/25";
                const d2 = "1/5";
                const d3 = "1/100";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["There are 50 equally likely states.", "The probability of choosing any specific one state is 1/50."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 10: Proportion with decimal
            (r) => {
                const q = "Solve for x: x/2.5 = 4/10";
                const ans = "x = 1";
                const d1 = "x = 2.5";
                const d2 = "x = 0.5";
                const d3 = "x = 4";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["10x = 2.5 × 4 = 10.", "x = 10 ÷ 10 = 1."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 11: Adding three mixed numbers
            (r) => {
                const q = "Find the sum: 4 1/2 + 2 1/3 + 1 1/6";
                const ans = "8";
                const d1 = "7 5/6";
                const d2 = "8 1/6";
                const d3 = "7 1/2";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator 6: 4 3/6 + 2 2/6 + 1 1/6.", "Sum = 7 6/6 = 8."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 12: Multiplying mixed numbers
            (r) => {
                const q = "Multiply and simplify: 2 1/2 × 1 1/5";
                const ans = "3";
                const d1 = "2 1/10";
                const d2 = "3 1/2";
                const d3 = "2 3/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fractions: 5/2 × 6/5.", "Cancel 5s: 6/2 = 3."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 13: Decimal subtraction from whole number
            (r) => {
                const q = "Simplify: 12 − (4.3 + 2.18)";
                const ans = "5.52";
                const d1 = "6.52";
                const d2 = "5.48";
                const d3 = "6.48";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add inside parentheses: 4.3 + 2.18 = 6.48.", "12 − 6.48 = 5.52."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 14: Two-step equation
            (r) => {
                const q = "Solve and check: 5x + 3 = 38";
                const ans = "x = 7";
                const d1 = "x = 8";
                const d2 = "x = 6";
                const d3 = "x = 7.5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract 3 from both sides: 5x = 35.", "Divide by 5: x = 35 ÷ 5 = 7."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 15: Circumference of circle using 22/7
            (r) => {
                const q = "Find the circumference of a circle with a diameter of 14 inches. (Use 22/7 for π.)";
                const ans = "44 inches";
                const d1 = "88 inches";
                const d2 = "22 inches";
                const d3 = "28 inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = πd = (22/7) × 14 = 22 × 2 = 44 inches."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 16: Converting 60% to fraction
            (r) => {
                const q = "Convert 60% to a fraction in lowest terms.";
                const ans = "3/5";
                const d1 = "6/10";
                const d2 = "2/3";
                const d3 = "4/5";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["60% = 60/100.", "Divide numerator and denominator by 20: 3/5."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 17: Converting 0.15 to fraction
            (r) => {
                const q = "Convert 0.15 to a fraction in lowest terms.";
                const ans = "3/20";
                const d1 = "15/100";
                const d2 = "1/6";
                const d3 = "3/10";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.15 = 15/100.", "Divide by 5: 3/20."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 18: Area of right triangle
            (r) => {
                const q = "What is the area of a right triangle with legs measuring 6 cm and 8 cm?";
                const ans = "24 cm²";
                const d1 = "48 cm²";
                const d2 = "14 cm²";
                const d3 = "28 cm²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (1/2) × 6 × 8 = 24 cm²."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            },
            // Category 19: Triangle angle sum theorem
            (r) => {
                const q = "What is the sum of the interior angle measures of any triangle?";
                const ans = "180°";
                const d1 = "360°";
                const d2 = "90°";
                const d3 = "270°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The interior angles of any triangle always add up to 180°."], lessonNum: 109, lessonTitle: "Corresponding Parts • Similar Figures" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

// =========================================================================
// LESSON 110: Symmetry
// =========================================================================
code += `    // Lesson 110: Symmetry
    110: (rng, qIndex) => {
        const framings = [
            // Category 0: Letter without line of symmetry
            (r) => {
                const q = "All but one of these capital letters can be drawn to have a line of symmetry. Which letter does NOT have a line of symmetry: A, B, C, D, E, or F?";
                const ans = "F";
                const d1 = "A";
                const d2 = "C";
                const d3 = "E";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A has a vertical line of symmetry; B, C, D, and E have horizontal lines of symmetry.", "F has no line of symmetry."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 1: Letter with rotational symmetry
            (r) => {
                const q = "Which of the following capital letters has rotational symmetry (looks identical after a half turn of 180°)?";
                const ans = "N";
                const d1 = "L";
                const d2 = "P";
                const d3 = "Q";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rotating N by 180° yields the same letter N.", "L, P, and Q do not look the same when rotated 180°."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 2: Number of lines of symmetry in a square
            (r) => {
                const q = "How many lines of symmetry does a square have?";
                const ans = "4";
                const d1 = "2";
                const d2 = "1";
                const d3 = "8";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A square has 2 lines connecting midpoints of opposite sides and 2 diagonal lines connecting opposite corners.", "Total lines of symmetry = 4."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 3: Dividing greatest four-digit by greatest two-digit number
            (r) => {
                const q = "When the greatest four-digit whole number is divided by the greatest two-digit whole number, what is the quotient?";
                const ans = "101";
                const d1 = "11";
                const d2 = "100";
                const d3 = "1001";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Greatest four-digit whole number = 9999.", "Greatest two-digit whole number = 99.", "9999 ÷ 99 = 101."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 4: Alamo length from width ratio
            (r) => {
                const q = "The ratio of the length to the width of the Alamo is about 5 to 3. If the width of the Alamo is approximately 63 ft, about how long is the Alamo?";
                const ans = "105 ft";
                const d1 = "95 ft";
                const d2 = "125 ft";
                const d3 = "75 ft";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Length/Width = 5/3 = Length/63.", "Length = (5 × 63) ÷ 3 = 5 × 21 = 105 ft."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 5: Cracker box square prism volume
            (r) => {
                const q = "A box of crackers in the shape of a square prism has a length, width, and height of 4 inches, 4 inches, and 10 inches respectively. What is the volume of the box in cubic inches?";
                const ans = "160 cubic inches";
                const d1 = "80 cubic inches";
                const d2 = "40 cubic inches";
                const d3 = "320 cubic inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = length × width × height = 4 × 4 × 10 = 160 cubic inches."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 6: Fraction of a full turn in degrees
            (r) => {
                const q = "A full turn is 360°. How many degrees is 1/6 of a turn?";
                const ans = "60°";
                const d1 = "45°";
                const d2 = "90°";
                const d3 = "30°";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(1/6) × 360° = 360° ÷ 6 = 60°."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 7: Equilateral triangle lines of symmetry
            (r) => {
                const q = "How many lines of symmetry does an equilateral triangle have?";
                const ans = "3";
                const d1 = "1";
                const d2 = "2";
                const d3 = "6";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An equilateral triangle has 3 lines of symmetry, each passing through a vertex and the midpoint of the opposite side."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 8: Scaled similar equilateral triangle perimeter
            (r) => {
                const q = "An equilateral triangle has sides measuring 2 cm each. A similar triangle is drawn with a scale factor of 3. What is the perimeter of the new triangle?";
                const ans = "18 cm";
                const d1 = "6 cm";
                const d2 = "12 cm";
                const d3 = "24 cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Original perimeter = 2 + 2 + 2 = 6 cm.", "New perimeter = 6 cm × 3 = 18 cm (or new side = 6 cm, 3 × 6 = 18 cm)."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 9: Right triangle area
            (r) => {
                const q = "What is the area of a right triangle with legs measuring 3 cm and 4 cm and a hypotenuse of 5 cm?";
                const ans = "6 cm²";
                const d1 = "12 cm²";
                const d2 = "7 cm²";
                const d3 = "10 cm²";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (1/2) × base × height = (1/2) × 3 × 4 = 6 cm²."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 10: Photo percent problem
            (r) => {
                const q = "Ms. Mendez is sorting her photographs. She notes that 12 of the photos are black and white and that 40% of the photos are color. How many photos does she have in all?";
                const ans = "20 photos";
                const d1 = "30 photos";
                const d2 = "18 photos";
                const d3 = "24 photos";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Percent black and white = 100% − 40% = 60%.", "60% of total = 12 photos.", "Total = 12 ÷ 0.60 = 20 photos."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 11: Converting 64% to fraction
            (r) => {
                const q = "Convert 64% to a fraction in lowest terms.";
                const ans = "16/25";
                const d1 = "64/100";
                const d2 = "8/25";
                const d3 = "32/50";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["64% = 64/100.", "Divide numerator and denominator by 4: 16/25."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 12: Sum of powers of 2
            (r) => {
                const q = "Evaluate: 2⁴ + 2³ + 2²";
                const ans = "28";
                const d1 = "24";
                const d2 = "32";
                const d3 = "14";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2⁴ = 16, 2³ = 8, 2² = 4.", "16 + 8 + 4 = 28."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 13: Decimal operations
            (r) => {
                const q = "Simplify: 9 − (6.2 + 2.79)";
                const ans = "0.01";
                const d1 = "0.1";
                const d2 = "0.001";
                const d3 = "0.11";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add inside parentheses: 6.2 + 2.79 = 8.99.", "9.00 − 8.99 = 0.01."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 14: Prime factorization of 1000
            (r) => {
                const q = "Write the prime factorization of 1000 using exponents.";
                const ans = "2³ · 5³";
                const d1 = "2⁴ · 5²";
                const d2 = "2² · 5⁴";
                const d3 = "10³";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1000 = 10³ = (2 × 5)³ = 2³ · 5³."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 15: Order of operations with powers
            (r) => {
                const q = "Simplify: 3³ − 3² ÷ 3 − 3 × 3";
                const ans = "15";
                const d1 = "18";
                const d2 = "9";
                const d3 = "21";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Powers: 3³ = 27, 3² = 9.", "Division and multiplication: 9 ÷ 3 = 3, 3 × 3 = 9.", "Subtract: 27 − 3 − 9 = 15."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 16: Triangle shortest side from perimeter
            (r) => {
                const q = "The perimeter of a triangle is 24 cm. Two of its sides measure 10 cm and 8 cm. What is the length of the shortest side?";
                const ans = "6 cm";
                const d1 = "4 cm";
                const d2 = "8 cm";
                const d3 = "5 cm";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum of given sides = 10 + 8 = 18 cm.", "Shortest side = 24 − 18 = 6 cm."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 17: Ferris wheel circumference estimation
            (r) => {
                const q = "The original Ferris wheel had a diameter of 250 feet. What was the circumference of the Ferris wheel rounded to the nearest hundred feet? (Use 3.14 for π.)";
                const ans = "800 feet";
                const d1 = "700 feet";
                const d2 = "900 feet";
                const d3 = "500 feet";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = πd = 3.14 × 250 = 785 feet.", "785 rounded to the nearest hundred is 800 feet."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 18: Midpoint of segment with fraction
            (r) => {
                const q = "Segment AB is 1 3/4 inches long. Point M is the midpoint of AB. How long is segment AM?";
                const ans = "7/8 inch";
                const d1 = "3/4 inch";
                const d2 = "1/2 inch";
                const d3 = "1 1/8 inches";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to improper fraction: 1 3/4 = 7/4 inches.", "Midpoint distance = (7/4) ÷ 2 = 7/8 inch."], lessonNum: 110, lessonTitle: "Symmetry" };
            },
            // Category 19: Four sequential coin tosses probability
            (r) => {
                const q = "If a fair coin is tossed four times, what is the probability that the coin will turn up heads, tails, heads, tails in that exact order?";
                const ans = "1/16";
                const d1 = "1/8";
                const d2 = "1/4";
                const d3 = "1/32";
                const s = shuffle(r, [ans, d1, d2, d3]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each flip has P = 1/2.", "For four independent flips: (1/2)⁴ = 1/16."], lessonNum: 110, lessonTitle: "Symmetry" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

code += `};
`;

fs.writeFileSync(targetFile, code, 'utf8');
console.log('Successfully wrote section11.js');

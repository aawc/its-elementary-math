import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 81: Arithmetic with Units of Measure
    81: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Arithmetic with Units of Measure" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Arithmetic with Units of Measure" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Arithmetic with Units of Measure" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 81, lessonTitle: "Arithmetic with Units of Measure" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 82: Volume of a Rectangular Prism
    82: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Volume of a Rectangular Prism" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Volume of a Rectangular Prism" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Volume of a Rectangular Prism" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 82, lessonTitle: "Volume of a Rectangular Prism" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 83: Proportions
    83: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Proportions" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Proportions" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Proportions" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 83, lessonTitle: "Proportions" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 83, lessonTitle: "Proportions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 84: Order of Operations, Part 2
    84: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Order of Operations, Part 2" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Order of Operations, Part 2" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Order of Operations, Part 2" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 84, lessonTitle: "Order of Operations, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 85: Using Cross Products to Solve Proportions
    85: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Using Cross Products to Solve Proportions" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Using Cross Products to Solve Proportions" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Using Cross Products to Solve Proportions" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 85, lessonTitle: "Using Cross Products to Solve Proportions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 86: Area of a Circle
    86: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Area of a Circle" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Area of a Circle" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Area of a Circle" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 86, lessonTitle: "Area of a Circle" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 87: Finding Unknown Factors
    87: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Finding Unknown Factors" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Finding Unknown Factors" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Finding Unknown Factors" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 87, lessonTitle: "Finding Unknown Factors" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 88: Using Proportions to Solve Ratio Word Problems
    88: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Using Proportions to Solve Ratio Word Problems" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Using Proportions to Solve Ratio Word Problems" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Using Proportions to Solve Ratio Word Problems" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 88, lessonTitle: "Using Proportions to Solve Ratio Word Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 89: Estimating Square Roots
    89: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Estimating Square Roots" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Estimating Square Roots" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Estimating Square Roots" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 89, lessonTitle: "Estimating Square Roots" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 90: Measuring Turns
    90: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Measuring Turns" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Measuring Turns" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 2: Financial transaction with dollars and cents
            (r) => {
                const paid = randInt(r, 10, 25);
                const costD = randInt(r, 4, paid - 2);
                const costC = randInt(r, 15, 85);
                const costCents = costD * 100 + costC;
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "A student bought supplies for $" + costStr + " and paid with a $" + paid + " bill. Find the change returned.";
                const d = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 4: Multi-term horizontal equation
            (r) => {
                const n1 = randInt(r, 15, 35);
                const n2 = randInt(r, 10, 25);
                const n3 = randInt(r, 5, 15);
                const sum = n1 + n2 + n3;
                const q = "Calculate the total sum: " + n1 + " + " + n2 + " + " + n3;
                const d = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 6: Comparison of two mathematical statements
            (r) => {
                const a = randInt(r, 20, 50);
                const b = randInt(r, 5, 15);
                const c = randInt(r, 2, 8);
                const left = a - (b - c);
                const right = (a - b) - c;
                const sym = left > right ? ">" : left < right ? "<" : "=";
                const q = "Compare the two values using <, >, or =: (" + a + " - (" + b + " - " + c + ")) ○ ((" + a + " - " + b + ") - " + c + ")";
                const s = shuffle(r, [sym, sym === ">" ? "<" : ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 10: Estimation by rounding
            (r) => {
                const val1 = randInt(r, 280, 520);
                const val2 = randInt(r, 190, 410);
                const r1 = Math.round(val1 / 100) * 100;
                const r2 = Math.round(val2 / 100) * 100;
                const estSum = r1 + r2;
                const q = "Estimate the sum of " + val1 + " and " + val2 + " by rounding each to the nearest hundred.";
                const s = shuffle(r, ["" + estSum, "" + (estSum + 100), "" + (estSum - 100), "" + (val1 + val2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Measuring Turns" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 90, lessonTitle: "Measuring Turns" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
};

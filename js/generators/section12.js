import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 111: Applications Using Division
    111: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Applications Using Division" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Applications Using Division" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 111, lessonTitle: "Applications Using Division" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 111, lessonTitle: "Applications Using Division" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Applications Using Division" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 111, lessonTitle: "Applications Using Division" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 112: Multiplying and Dividing Integers
    112: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Multiplying and Dividing Integers" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Multiplying and Dividing Integers" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Multiplying and Dividing Integers" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 112, lessonTitle: "Multiplying and Dividing Integers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 113: Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten
    113: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Adding and Subtracting Mixed Measures" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Adding and Subtracting Mixed Measures" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Adding and Subtracting Mixed Measures" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 113, lessonTitle: "Adding and Subtracting Mixed Measures • Multiplying by Powers of Ten" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 114: Unit Multipliers
    114: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Unit Multipliers" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Unit Multipliers" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Unit Multipliers" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 115: Writing Percents as Fractions, Part 2
    115: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Writing Percents as Fractions, Part 2" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Writing Percents as Fractions, Part 2" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Writing Percents as Fractions, Part 2" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 116: Compound Interest
    116: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Compound Interest" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Compound Interest" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 116, lessonTitle: "Compound Interest" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 116, lessonTitle: "Compound Interest" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Compound Interest" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 117: Finding a Whole When a Fraction is Known
    117: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Finding a Whole When a Fraction is Known" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Finding a Whole When a Fraction is Known" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Finding a Whole When a Fraction is Known" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 117, lessonTitle: "Finding a Whole When a Fraction is Known" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 118: Estimating Area
    118: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Estimating Area" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Estimating Area" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 118, lessonTitle: "Estimating Area" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 118, lessonTitle: "Estimating Area" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Estimating Area" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 118, lessonTitle: "Estimating Area" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 118, lessonTitle: "Estimating Area" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 119: Finding a Whole When a Percent is Known
    119: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Finding a Whole When a Percent is Known" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Finding a Whole When a Percent is Known" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Finding a Whole When a Percent is Known" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 119, lessonTitle: "Finding a Whole When a Percent is Known" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 120: Volume of a Cylinder
    120: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Volume of a Cylinder" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Volume of a Cylinder" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Volume of a Cylinder" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 120, lessonTitle: "Volume of a Cylinder" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
};

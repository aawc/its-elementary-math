import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 51: Rounding Decimal Numbers
    51: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Rounding Decimal Numbers" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Rounding Decimal Numbers" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Rounding Decimal Numbers" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 51, lessonTitle: "Rounding Decimal Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 52: Mentally Dividing Decimal Numbers by 10 and
    52: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Mentally Dividing Decimal Numbers by 10 and" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Mentally Dividing Decimal Numbers by 10 and" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Mentally Dividing Decimal Numbers by 10 and" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 52, lessonTitle: "Mentally Dividing Decimal Numbers by 10 and" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 53: Decimals Chart • Simplifying Fractions
    53: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Decimals Chart" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Decimals Chart" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Decimals Chart" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 53, lessonTitle: "Decimals Chart • Simplifying Fractions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 54: Reducing by Grouping Factors Equal to 1 • Dividing Fractions
    54: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Reducing by Grouping Factors Equal to 1" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Reducing by Grouping Factors Equal to 1" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Reducing by Grouping Factors Equal to 1" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 54, lessonTitle: "Reducing by Grouping Factors Equal to 1 • Dividing Fractions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 55: Common Denominators, Part 1
    55: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Common Denominators, Part 1" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Common Denominators, Part 1" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Common Denominators, Part 1" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 55, lessonTitle: "Common Denominators, Part 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 56: Common Denominators, Part 2
    56: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Common Denominators, Part 2" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Common Denominators, Part 2" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Common Denominators, Part 2" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 57: Adding and Subtracting Fractions: Three Steps
    57: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Adding and Subtracting Fractions: Three Steps" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Adding and Subtracting Fractions: Three Steps" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Adding and Subtracting Fractions: Three Steps" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 58: Probability and Chance
    58: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Probability and Chance" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Probability and Chance" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 58, lessonTitle: "Probability and Chance" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 58, lessonTitle: "Probability and Chance" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Probability and Chance" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 59: Adding Mixed Numbers
    59: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Adding Mixed Numbers" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Adding Mixed Numbers" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Adding Mixed Numbers" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 60: Polygons
    60: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Polygons" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Polygons" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 60, lessonTitle: "Polygons" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 60, lessonTitle: "Polygons" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 60, lessonTitle: "Polygons" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 60, lessonTitle: "Polygons" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Polygons" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 60, lessonTitle: "Polygons" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
};

import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 41: Finding a Percent of a Number
    41: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Finding a Percent of a Number" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Finding a Percent of a Number" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Finding a Percent of a Number" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 41, lessonTitle: "Finding a Percent of a Number" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 42: Renaming Fractions by Multiplying by 1
    42: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Renaming Fractions by Multiplying by 1" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Renaming Fractions by Multiplying by 1" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Renaming Fractions by Multiplying by 1" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 42, lessonTitle: "Renaming Fractions by Multiplying by 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 43: Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems
    43: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Equivalent Division Problems" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Equivalent Division Problems" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Equivalent Division Problems" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 43, lessonTitle: "Equivalent Division Problems • Finding Unknowns in Fraction and Decimal Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 44: Simplifying Decimal Numbers • Comparing Decimal Numbers
    44: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Simplifying Decimal Numbers" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Simplifying Decimal Numbers" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Simplifying Decimal Numbers" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 44, lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 45: Dividing a Decimal Number by a Whole Number
    45: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Dividing a Decimal Number by a Whole Number" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Dividing a Decimal Number by a Whole Number" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Dividing a Decimal Number by a Whole Number" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 45, lessonTitle: "Dividing a Decimal Number by a Whole Number" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 46: Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by
    46: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Writing Decimal Numbers in Expanded Notation" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Writing Decimal Numbers in Expanded Notation" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Writing Decimal Numbers in Expanded Notation" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 46, lessonTitle: "Writing Decimal Numbers in Expanded Notation • Mentally Multiplying Decimal Numbers by" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 47: Circumference • Pi (π)
    47: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Circumference" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Circumference" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Circumference" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 47, lessonTitle: "Circumference • Pi (π)" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 48: Subtracting Mixed Numbers with Regrouping, Part 1
    48: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Subtracting Mixed Numbers with Regrouping, Part 1" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Subtracting Mixed Numbers with Regrouping, Part 1" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Subtracting Mixed Numbers with Regrouping, Part 1" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 48, lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 49: Dividing by a Decimal Number
    49: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Dividing by a Decimal Number" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Dividing by a Decimal Number" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Dividing by a Decimal Number" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 49, lessonTitle: "Dividing by a Decimal Number" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
    // Lesson 50: Decimal Number Line (Tenths) • Dividing by a Fraction
    50: (rng, qIndex) => {
        const framings = [
            // Category 0: Direct evaluation of core topic
            (r) => {
                const a = randInt(r, 12, 45);
                const b = randInt(r, 6, 25);
                const ans = a + b;
                const q = "What is the result when " + a + " and " + b + " are combined according to the concepts in " + "Decimal Number Line (Tenths)" + "?";
                const d = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Calculate the direct result: " + a + " + " + b + " = " + ans + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 1: Real-world classroom or activity scenario
            (r) => {
                const count = randInt(r, 15, 45);
                const group = randInt(r, 3, 5);
                const each = Math.floor(count / group);
                const q = "During a math activity on " + "Decimal Number Line (Tenths)" + ", " + count + " items were distributed equally among " + group + " student groups. How many items went to each group?";
                const s = shuffle(r, ["" + each + " items", "" + (each + 2) + " items", "" + (each - 1) + " items", "" + (each + 5) + " items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " ÷ " + group + " = " + each + " items per group."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 3: Expression simplification with explicit operation
            (r) => {
                const x = randInt(r, 8, 24);
                const y = randInt(r, 3, 9);
                const res = x * y;
                const q = "Simplify the expression: " + x + " × " + y;
                const d = generateDistractors(r, "" + res, "integer", res);
                const s = shuffle(r, ["" + res, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [x + " × " + y + " = " + res + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [n1 + " + " + n2 + " + " + n3 + " = " + sum + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 5: Solving for an unknown variable
            (r) => {
                const val = randInt(r, 14, 38);
                const add = randInt(r, 12, 45);
                const total = val + add;
                const q = "Find the unknown number w that satisfies: w + " + add + " = " + total;
                const d = generateDistractors(r, "" + val, "integer", val);
                const s = shuffle(r, ["" + val, ...d]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + total + " - " + add + " = " + val + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Left side evaluates to " + left + "; right side evaluates to " + right + ". Comparison: " + sym + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 7: Ordering a set of numbers or measurements
            (r) => {
                const n1 = randInt(r, 10, 30);
                const n2 = n1 + randInt(r, 5, 15);
                const n3 = n2 + randInt(r, 5, 15);
                const q = "Which list displays the numbers in order from least to greatest?";
                const correct = n1 + ", " + n2 + ", " + n3;
                const s = shuffle(r, [correct, n2 + ", " + n1 + ", " + n3, n3 + ", " + n2 + ", " + n1, n1 + ", " + n3 + ", " + n2]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["From least to greatest: " + correct + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 8: Unit conversion or dimensional relationship
            (r) => {
                const ft = randInt(r, 2, 7);
                const inches = ft * 12;
                const q = "Convert the linear measurement of " + ft + " feet into inches.";
                const s = shuffle(r, [inches + " inches", (inches + 6) + " inches", (inches - 6) + " inches", (ft * 10) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × 12 in/ft = " + inches + " inches."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 9: Geometry and spatial perimeter/area problem
            (r) => {
                const len = randInt(r, 8, 20);
                const wid = randInt(r, 4, len - 2);
                const peri = 2 * (len + wid);
                const q = "Determine the perimeter of a rectangle with length " + len + " cm and width " + wid + " cm.";
                const s = shuffle(r, [peri + " cm", (len * wid) + " cm", (len + wid) + " cm", (peri + 4) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (" + len + " + " + wid + ") = " + peri + " cm."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
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
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [val1 + " rounds to " + r1 + "; " + val2 + " rounds to " + r2 + ". " + r1 + " + " + r2 + " = " + estSum + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 11: Conceptual terminology and mathematical definitions
            (r) => {
                const q = "In the curriculum study of " + "Decimal Number Line (Tenths)" + ", which statement accurately defines the fundamental mathematical principle?";
                const correct = "Operations must strictly preserve equality and follow standard structural order";
                const s = shuffle(r, [correct, "Operations can be evaluated in arbitrary order without parentheses", "Fractions and whole numbers cannot be combined in equations", "Division and subtraction always commute"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Standard mathematical definitions require strict operational order and balance."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 12: Relationship between inverse operations or fact families
            (r) => {
                const a = randInt(r, 6, 15);
                const b = randInt(r, 5, 14);
                const c = a + b;
                const q = "Which of the following equations belongs to the exact fact family for " + a + ", " + b + ", and " + c + "?";
                const correct = c + " - " + a + " = " + b;
                const s = shuffle(r, [correct, a + " + " + c + " = " + b, b + " - " + a + " = " + c, c + " + " + b + " = " + a]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since " + a + " + " + b + " = " + c + ", the subtraction fact is " + c + " - " + a + " = " + b + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 13: Elapsed duration or sequence interval
            (r) => {
                const startHour = randInt(r, 2, 6);
                const durHour = randInt(r, 2, 4);
                const endHour = startHour + durHour;
                const q = "An event started at " + startHour + ":15 p.m. and concluded at " + endHour + ":45 p.m. What was the elapsed duration?";
                const s = shuffle(r, [durHour + " hours 30 minutes", (durHour + 1) + " hours", durHour + " hours", (durHour - 1) + " hours 45 minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [startHour + ":15 to " + endHour + ":15 is " + durHour + " hours; + 30 min = " + durHour + " hours 30 minutes."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            },
            // Category 14: Fractional portion or part-to-whole computation
            (r) => {
                const den = randInt(r, 3, 6);
                const mult = randInt(r, 4, 12);
                const total = den * mult;
                const q = "Calculate the numerical value of 1/" + den + " of " + total + ".";
                const s = shuffle(r, ["" + mult, "" + (mult + 2), "" + (mult - 1), "" + (mult * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/" + den + " of " + total + " = " + total + " ÷ " + den + " = " + mult + "."], lessonNum: 50, lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
};

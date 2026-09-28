const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'js', 'generators');

// Helper to write section file
function writeSection(secNum, lessonsCode) {
    const filePath = path.join(outDir, `section${secNum}.js`);
    const code = `import { randInt, formatCurrency, generateDistractors, shuffle } from './utils.js';

export default {
${lessonsCode}
};
`;
    fs.writeFileSync(filePath, code, 'utf-8');
    console.log(`[PASS] Wrote section${secNum}.js`);
}

// -------------------------------------------------------------
// SECTION 1 (Lessons 1-10)
// -------------------------------------------------------------
const sec1 = `
    // Lesson 1: Adding/Subtracting Whole Numbers and Money • Fact Families, Part 1
    1: (rng) => {
        const type = randInt(rng, 0, 2);
        let question, correctAnswer, options, correctIndex, stepByStep;

        if (type === 0) {
            // Addition with dollars and cents (e.g. $6.25 + $8.23 + $12.00)
            const d1 = randInt(rng, 3, 14);
            const c1 = randInt(rng, 10, 95);
            const d2 = randInt(rng, 2, 12);
            const c2 = randInt(rng, 10, 95);
            const d3 = randInt(rng, 4, 18);
            const totalCents = (d1 * 100 + c1) + (d2 * 100 + c2) + (d3 * 100);
            
            const s1 = (d1 + c1/100).toFixed(2);
            const s2 = (d2 + c2/100).toFixed(2);
            const s3 = d3.toFixed(2);
            const totalStr = (totalCents / 100).toFixed(2);

            question = "Simplify: $" + s1 + " + $" + s2 + " + $" + s3;
            correctAnswer = "$" + totalStr;
            const distractors = generateDistractors(rng, correctAnswer, "currency", totalCents / 100);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "Line up the decimal points vertically: $" + s1 + " + $" + s2 + " + $" + s3,
                "Add the cents column first with any regrouping.",
                "Add the whole dollars column including any carry.",
                "The total sum is $" + totalStr + "."
            ];
        } else if (type === 1) {
            // Subtraction with dollars and cents (e.g. Keisha paid $5.00 for a $3.75 item)
            const wholeDollar = randInt(rng, 5, 20);
            const costDollar = randInt(rng, 1, wholeDollar - 1);
            const costCents = randInt(rng, 15, 85);
            const costTotal = costDollar * 100 + costCents;
            const changeCents = (wholeDollar * 100) - costTotal;
            const costStr = (costTotal / 100).toFixed(2);
            const changeStr = (changeCents / 100).toFixed(2);

            question = "Keisha paid $" + wholeDollar + ".00 for a book that cost $" + costStr + ". How much change should she get back?";
            correctAnswer = "$" + changeStr;
            const distractors = generateDistractors(rng, correctAnswer, "currency", changeCents / 100);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "Subtract the cost ($" + costStr + ") from the amount paid ($" + wholeDollar + ".00).",
                "Line up the decimal points: $" + wholeDollar + ".00 - $" + costStr + ".",
                "Regroup from the dollars column to subtract cents.",
                "Keisha should receive $" + changeStr + " in change."
            ];
        } else {
            // Fact families: e.g. 5, 6, 11
            const a = randInt(rng, 5, 15);
            const b = randInt(rng, 6, 16);
            const sum = a + b;

            question = "Which number sentence is NOT part of the addition and subtraction fact family for " + a + ", " + b + ", and " + sum + "?";
            correctAnswer = sum + " + " + a + " = " + b;
            const distractors = [
                a + " + " + b + " = " + sum,
                sum + " - " + a + " = " + b,
                sum + " - " + b + " = " + a
            ];
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "A fact family with " + a + ", " + b + ", and " + sum + " consists of:",
                "1) " + a + " + " + b + " = " + sum,
                "2) " + b + " + " + a + " = " + sum,
                "3) " + sum + " - " + a + " = " + b,
                "4) " + sum + " - " + b + " = " + a,
                'The sentence "' + sum + ' + ' + a + ' = ' + b + '" is false and is not part of the fact family.'
            ];
        }

        return { question, options, correctIndex, stepByStep, lessonNum: 1, lessonTitle: "Adding Whole Numbers and Money • Subtracting Whole Numbers and Money • Fact Families, Part 1" };
    },

    // Lesson 2: Multiplying Whole Numbers and Money • Dividing Whole Numbers and Money • Fact Families, Part 2
    2: (rng) => {
        const type = randInt(rng, 0, 2);
        let question, correctAnswer, options, correctIndex, stepByStep;

        if (type === 0) {
            // Multiplying money with cents: e.g. 24 pencils at 35¢ each
            const count = randInt(rng, 4, 16);
            const cents = randInt(rng, 25, 95);
            const totalCents = count * cents;
            const costEachStr = (cents / 100).toFixed(2);
            const totalStr = (totalCents / 100).toFixed(2);

            question = "Find the total cost of " + count + " notebooks at $" + costEachStr + " each.";
            correctAnswer = "$" + totalStr;
            const distractors = generateDistractors(rng, correctAnswer, "currency", totalCents / 100);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "Multiply quantity (" + count + ") by the unit cost ($" + costEachStr + ").",
                count + " × " + cents + "¢ = " + totalCents + "¢.",
                "Convert cents to dollars: " + totalCents + "¢ = $" + totalStr + "."
            ];
        } else if (type === 1) {
            // Dividing money with cents: e.g. $8.40 ÷ 5 = $1.68
            const divisor = randInt(rng, 3, 8);
            const quotientCents = randInt(rng, 120, 380);
            const totalCents = divisor * quotientCents;
            const totalStr = (totalCents / 100).toFixed(2);
            const quotientStr = (quotientCents / 100).toFixed(2);

            question = "Divide: $" + totalStr + " ÷ " + divisor;
            correctAnswer = "$" + quotientStr;
            const distractors = generateDistractors(rng, correctAnswer, "currency", quotientCents / 100);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "Place the decimal point in the quotient directly above the decimal in the dividend.",
                "Divide " + totalCents + "¢ by " + divisor + " = " + quotientCents + "¢.",
                "The quotient is $" + quotientStr + "."
            ];
        } else {
            // Terminology: factors and product
            const a = randInt(rng, 6, 12);
            const b = randInt(rng, 4, 9);
            const prod = a * b;

            question = "If the factors are " + a + " and " + b + ", what is the product?";
            correctAnswer = "" + prod;
            const distractors = generateDistractors(rng, correctAnswer, "integer", prod);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "The numbers multiplied together are factors, and the answer is the product.",
                a + " × " + b + " = " + prod + "."
            ];
        }

        return { question, options, correctIndex, stepByStep, lessonNum: 2, lessonTitle: "Multiplying Whole Numbers and Money • Dividing Whole Numbers and Money • Fact Families, Part 2" };
    },

    // Lesson 3: Unknown Numbers in Addition • Unknown Numbers in Subtraction
    3: (rng) => {
        const type = randInt(rng, 0, 1);
        let question, correctAnswer, options, correctIndex, stepByStep;

        if (type === 0) {
            const a = randInt(rng, 18, 55);
            const w = randInt(rng, 12, 38);
            const b = a + w;

            question = "Find the unknown number: w + " + a + " = " + b;
            correctAnswer = "" + w;
            const distractors = generateDistractors(rng, correctAnswer, "integer", w);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "Subtract the known addend from the sum: w = " + b + " - " + a + ".",
                "w = " + w + "."
            ];
        } else {
            const m = randInt(rng, 14, 42);
            const b = randInt(rng, 22, 58);
            const a = m + b;

            question = "Find the unknown number: " + a + " - m = " + b;
            correctAnswer = "" + m;
            const distractors = generateDistractors(rng, correctAnswer, "integer", m);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "To find the subtrahend (m), subtract the difference from the minuend: m = " + a + " - " + b + ".",
                "m = " + m + "."
            ];
        }

        return { question, options, correctIndex, stepByStep, lessonNum: 3, lessonTitle: "Unknown Numbers in Addition • Unknown Numbers in Subtraction" };
    },

    // Lesson 4: Unknown Numbers in Multiplication • Unknown Numbers in Division
    4: (rng) => {
        const type = randInt(rng, 0, 1);
        let question, correctAnswer, options, correctIndex, stepByStep;

        if (type === 0) {
            const factor = randInt(rng, 4, 11);
            const x = randInt(rng, 5, 14);
            const prod = factor * x;

            question = "Find the unknown number: " + factor + "x = " + prod;
            correctAnswer = "" + x;
            const distractors = generateDistractors(rng, correctAnswer, "integer", x);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "Divide the product by the known factor: x = " + prod + " ÷ " + factor + ".",
                "x = " + x + "."
            ];
        } else {
            const divisor = randInt(rng, 3, 9);
            const quotient = randInt(rng, 6, 12);
            const dividend = divisor * quotient;

            question = "Find the unknown number: n ÷ " + divisor + " = " + quotient;
            correctAnswer = "" + dividend;
            const distractors = generateDistractors(rng, correctAnswer, "integer", dividend);
            const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
            options = shuffled.options;
            correctIndex = shuffled.correctIndex;
            stepByStep = [
                "Multiply the divisor by the quotient: n = " + quotient + " × " + divisor + ".",
                "n = " + dividend + "."
            ];
        }

        return { question, options, correctIndex, stepByStep, lessonNum: 4, lessonTitle: "Unknown Numbers in Multiplication • Unknown Numbers in Division" };
    },

    // Lesson 5: Order of Operations, Part 1
    5: (rng) => {
        const a = randInt(rng, 20, 48);
        const b = randInt(rng, 10, 16);
        const c = randInt(rng, 2, 7);
        const ans = a - (b - c);

        const question = "Simplify: " + a + " - (" + b + " - " + c + ")";
        const correctAnswer = "" + ans;
        const distractors = generateDistractors(rng, correctAnswer, "integer", ans);
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Evaluate inside parentheses first: " + b + " - " + c + " = " + (b - c) + ".",
                "Subtract from " + a + ": " + a + " - " + (b - c) + " = " + ans + "."
            ],
            lessonNum: 5,
            lessonTitle: "Order of Operations, Part 1"
        };
    },

    // Lesson 6: Fractional Parts
    6: (rng) => {
        const den = [2, 3, 4, 5][randInt(rng, 0, 3)];
        const part = randInt(rng, 12, 45);
        const total = den * part;

        const question = "What number is 1/" + den + " of " + total + "?";
        const correctAnswer = "" + part;
        const distractors = generateDistractors(rng, correctAnswer, "integer", part);
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "To find 1/" + den + " of " + total + ", divide " + total + " by " + den + ".",
                total + " ÷ " + den + " = " + part + "."
            ],
            lessonNum: 6,
            lessonTitle: "Fractional Parts"
        };
    },

    // Lesson 7: Lines, Segments, and Rays • Linear Measure
    7: (rng) => {
        const ft = randInt(rng, 2, 8);
        const inches = ft * 12;

        const question = "How many inches are in " + ft + " feet?";
        const correctAnswer = inches + " inches";
        const distractors = [
            (inches - 6) + " inches",
            (inches + 12) + " inches",
            (inches - 12) + " inches"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1 foot = 12 inches.",
                ft + " feet × 12 inches/foot = " + inches + " inches."
            ],
            lessonNum: 7,
            lessonTitle: "Lines, Segments, and Rays • Linear Measure"
        };
    },

    // Lesson 8: Perimeter
    8: (rng) => {
        const l = randInt(rng, 8, 24);
        const w = randInt(rng, 4, l - 1);
        const p = 2 * (l + w);

        const question = "What is the perimeter of a rectangle with length " + l + " cm and width " + w + " cm?";
        const correctAnswer = p + " cm";
        const distractors = [
            (l * w) + " cm",
            (l + w) + " cm",
            (p + 6) + " cm"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Perimeter = 2 × (length + width).",
                "P = 2 × (" + l + " + " + w + ") = 2 × " + (l + w) + " = " + p + " cm."
            ],
            lessonNum: 8,
            lessonTitle: "Perimeter"
        };
    },

    // Lesson 9: The Number Line: Ordering and Comparing
    9: (rng) => {
        const question = "Which shows these amounts of money arranged in order from least to greatest?";
        const correctAnswer = "15¢, $1.50, $15.00";
        const distractors = [
            "$1.50, 15¢, $15.00",
            "$15.00, $1.50, 15¢",
            "15¢, $15.00, $1.50"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Convert to cents to compare: 15¢ = 15¢, $1.50 = 150¢, $15.00 = 1500¢.",
                "From least to greatest: 15¢, $1.50, $15.00."
            ],
            lessonNum: 9,
            lessonTitle: "The Number Line: Ordering and Comparing"
        };
    },

    // Lesson 10: Sequences • Scales
    10: (rng) => {
        const start = randInt(rng, 5, 15);
        const step = randInt(rng, 6, 12);
        const t1 = start, t2 = start + step, t3 = start + 2*step, t4 = start + 3*step;
        const n1 = start + 4*step, n2 = start + 5*step, n3 = start + 6*step;

        const question = "Find the next three terms in the sequence: " + t1 + ", " + t2 + ", " + t3 + ", " + t4 + ", ...";
        const correctAnswer = n1 + ", " + n2 + ", " + n3;
        const distractors = [
            (n1 + 1) + ", " + (n2 + 1) + ", " + (n3 + 1),
            (n1 - step) + ", " + (n2 - step) + ", " + (n3 - step),
            (n1 + step) + ", " + (n2 + 2*step) + ", " + (n3 + 3*step)
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Pattern rule: add " + step + " to each term.",
                t4 + " + " + step + " = " + n1 + ", " + n1 + " + " + step + " = " + n2 + ", " + n2 + " + " + step + " = " + n3 + "."
            ],
            lessonNum: 10,
            lessonTitle: "Sequences • Scales"
        };
    }
`;

writeSection(1, sec1);

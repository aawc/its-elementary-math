const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'js', 'generators');

function writeSection(secNum, code) {
    fs.writeFileSync(path.join(outDir, `section${secNum}.js`), code, 'utf-8');
    console.log(`[PASS] Wrote section${secNum}.js`);
}

// -------------------------------------------------------------
// SECTION 1 (Lessons 1-10)
// -------------------------------------------------------------
const sec1 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    1: (rng) => {
        const type = randInt(rng, 0, 2);
        let question, correctAnswer, options, correctIndex, stepByStep;

        if (type === 0) {
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
                "Add the cents column: ." + (c1 < 10 ? '0' + c1 : c1) + " + ." + (c2 < 10 ? '0' + c2 : c2) + " + .00",
                "Add the dollars column with any regrouping.",
                "The total sum is $" + totalStr + "."
            ];
        } else if (type === 1) {
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
                "Line up decimal points: $" + wholeDollar + ".00 - $" + costStr + ".",
                "Regroup from the dollars column to subtract cents.",
                "Keisha should get $" + changeStr + " in change."
            ];
        } else {
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
                a + " + " + b + " = " + sum + ", " + b + " + " + a + " = " + sum + ", " + sum + " - " + a + " = " + b + ", and " + sum + " - " + b + " = " + a + ".",
                '"' + sum + " + " + a + " = " + b + '" is false and is not in the fact family.'
            ];
        }

        return { question, options, correctIndex, stepByStep, lessonNum: 1, lessonTitle: "Adding Whole Numbers and Money • Subtracting Whole Numbers and Money • Fact Families, Part 1" };
    },

    2: (rng) => {
        const type = randInt(rng, 0, 2);
        let question, correctAnswer, options, correctIndex, stepByStep;

        if (type === 0) {
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
                "Multiply quantity (" + count + ") by the unit price ($" + costEachStr + ").",
                count + " × " + cents + "¢ = " + totalCents + "¢.",
                "Convert cents to dollars: " + totalCents + "¢ = $" + totalStr + "."
            ];
        } else if (type === 1) {
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
                "Divide " + totalCents + "¢ by " + divisor + " = " + quotientCents + "¢.",
                "The quotient is $" + quotientStr + "."
            ];
        } else {
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
                "In multiplication, the factors are multiplied to find the product.",
                a + " × " + b + " = " + prod + "."
            ];
        }

        return { question, options, correctIndex, stepByStep, lessonNum: 2, lessonTitle: "Multiplying Whole Numbers and Money • Dividing Whole Numbers and Money • Fact Families, Part 2" };
    },

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
                "Subtract the difference from the minuend: m = " + a + " - " + b + ".",
                "m = " + m + "."
            ];
        }

        return { question, options, correctIndex, stepByStep, lessonNum: 3, lessonTitle: "Unknown Numbers in Addition • Unknown Numbers in Subtraction" };
    },

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
};
`;

// -------------------------------------------------------------
// SECTION 2 (Lessons 11-20)
// -------------------------------------------------------------
const sec2 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    11: (rng) => {
        const year1 = randInt(rng, 650, 950);
        const year2 = randInt(rng, 1200, 1950);
        const diff = year2 - year1;

        const question = "The school collected " + year1 + " cans of food last year and " + year2 + " cans this year. How many fewer cans were collected last year than this year?";
        const correctAnswer = diff + " cans";
        const distractors = [
            (diff + 100) + " cans",
            (diff - 50) + " cans",
            (year1 + year2) + " cans"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Difference = Greater - Lesser.",
                year2 + " - " + year1 + " = " + diff + " cans."
            ],
            lessonNum: 11,
            lessonTitle: "Problems About Comparing • Problems About Separating"
        };
    },

    12: (rng) => {
        const question = "Which digit in 497,325,186 is in the ten-millions place?";
        const correctAnswer = "9";
        const distractors = ["4", "7", "3"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "In 497,325,186:",
                "7 is in the millions place, 9 is in the ten-millions place, and 4 is in the hundred-millions place.",
                "The digit in the ten-millions place is 9."
            ],
            lessonNum: 12,
            lessonTitle: "Place Value Through Trillions • Multistep Problems"
        };
    },

    13: (rng) => {
        const y1 = randInt(rng, 1492, 1620);
        const y2 = randInt(rng, 1750, 1865);
        const diff = y2 - y1;

        const question = "Find how many years there were from the year " + y1 + " to the year " + y2 + ".";
        const correctAnswer = diff + " years";
        const distractors = [
            (diff + 10) + " years",
            (diff - 10) + " years",
            (diff + 1) + " years"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Elapsed time = Later year - Earlier year.",
                y2 + " - " + y1 + " = " + diff + " years."
            ],
            lessonNum: 13,
            lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
        };
    },

    14: (rng) => {
        const neg = -randInt(rng, 3, 9);
        const pos = randInt(rng, 1, 6);

        const question = "Which comparison is true?";
        const correctAnswer = neg + " < " + pos;
        const distractors = [
            neg + " > " + pos,
            pos + " < " + neg,
            neg + " = " + pos
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Negative numbers are to the left of positive numbers on the number line.",
                neg + " is less than " + pos + " (" + neg + " < " + pos + ")."
            ],
            lessonNum: 14,
            lessonTitle: "The Number Line: Negative Numbers"
        };
    },

    15: (rng) => {
        const priceCents = 25;
        const cups = randInt(rng, 12, 36);
        const totalCents = cups * priceCents;
        const totalStr = (totalCents / 100).toFixed(2);

        const question = "Marcie collected $" + totalStr + " selling lemonade at " + priceCents + "¢ for each cup. How many cups of lemonade did Marcie sell?";
        const correctAnswer = cups + " cups";
        const distractors = [
            (cups + 4) + " cups",
            (cups - 4) + " cups",
            (cups + 8) + " cups"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Convert $" + totalStr + " to cents: " + totalCents + "¢.",
                totalCents + "¢ ÷ " + priceCents + "¢ = " + cups + " cups.",
                "Marcie sold " + cups + " cups of lemonade."
            ],
            lessonNum: 15,
            lessonTitle: "Problems About Equal Groups"
        };
    },

    16: (rng) => {
        const num = randInt(rng, 235, 875);
        const rounded = Math.round(num / 100) * 100;

        const question = "Round " + num + " to the nearest hundred.";
        const correctAnswer = "" + rounded;
        const distractors = [
            "" + (rounded + 100),
            "" + (rounded - 100),
            "" + (Math.round(num / 10) * 10)
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Look at the tens digit of " + num + " (" + Math.floor((num % 100) / 10) + ").",
                Math.floor((num % 100) / 10) >= 5 ? "Round up." : "Round down.",
                num + " rounded to the nearest hundred is " + rounded + "."
            ],
            lessonNum: 16,
            lessonTitle: "Rounding Whole Numbers • Estimating"
        };
    },

    17: (rng) => {
        const whole = randInt(rng, 2, 7);
        const question = "Which mixed number represents the point halfway between " + whole + " and " + (whole + 1) + "?";
        const correctAnswer = whole + " 1/2";
        const distractors = [
            whole + " 1/4",
            whole + " 3/4",
            (whole + 1) + " 1/2"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Halfway between " + whole + " and " + (whole + 1) + " is " + whole + " + 1/2 = " + whole + " 1/2."
            ],
            lessonNum: 17,
            lessonTitle: "The Number Line: Fractions and Mixed Numbers"
        };
    },

    18: (rng) => {
        const avg = randInt(rng, 75, 95);
        const d1 = randInt(rng, -8, 8);
        const d2 = randInt(rng, -8, 8);
        const d3 = randInt(rng, -8, 8);
        const d4 = -(d1 + d2 + d3);
        const n1 = avg + d1, n2 = avg + d2, n3 = avg + d3, n4 = avg + d4;
        const sum = n1 + n2 + n3 + n4;

        const question = "Find the average of these four test scores: " + n1 + ", " + n2 + ", " + n3 + ", and " + n4 + ".";
        const correctAnswer = "" + avg;
        const distractors = generateDistractors(rng, correctAnswer, "integer", avg);
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Sum the numbers: " + n1 + " + " + n2 + " + " + n3 + " + " + n4 + " = " + sum + ".",
                "Divide by 4: " + sum + " ÷ 4 = " + avg + ".",
                "The average is " + avg + "."
            ],
            lessonNum: 18,
            lessonTitle: "Average • Line Graphs"
        };
    },

    19: (rng) => {
        const primes = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
        const composites = [15, 21, 25, 27, 33, 35, 39, 45, 49];
        const p = primes[randInt(rng, 0, primes.length - 1)];
        const c1 = composites[randInt(rng, 0, 2)];
        const c2 = composites[randInt(rng, 3, 5)];
        const c3 = composites[randInt(rng, 6, 8)];

        const question = "Which of the following numbers is a prime number?";
        const correctAnswer = "" + p;
        const distractors = ["" + c1, "" + c2, "" + c3];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A prime number has exactly two factors: 1 and itself.",
                p + " has only factors 1 and " + p + ", so it is prime."
            ],
            lessonNum: 19,
            lessonTitle: "Factors • Prime Numbers"
        };
    },

    20: (rng) => {
        const pairs = [
            { a: 18, b: 24, gcf: 6 },
            { a: 12, b: 18, gcf: 6 },
            { a: 15, b: 20, gcf: 5 },
            { a: 16, b: 24, gcf: 8 },
            { a: 14, b: 21, gcf: 7 },
            { a: 20, b: 30, gcf: 10 }
        ];
        const choice = pairs[randInt(rng, 0, pairs.length - 1)];

        const question = "Find the greatest common factor (GCF) of " + choice.a + " and " + choice.b + ".";
        const correctAnswer = "" + choice.gcf;
        const distractors = [
            "" + (choice.gcf * 2),
            "" + Math.max(1, Math.floor(choice.gcf / 2)),
            "" + (choice.gcf + 1)
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "List factors of " + choice.a + " and " + choice.b + ".",
                "The greatest factor common to both is " + choice.gcf + "."
            ],
            lessonNum: 20,
            lessonTitle: "Greatest Common Factor (GCF)"
        };
    }
};
`;

// -------------------------------------------------------------
// SECTION 3 (Lessons 21-30)
// -------------------------------------------------------------
const sec3 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    21: (rng) => {
        const n = randInt(rng, 12, 45) * 10;
        const question = "Which of the following numbers is divisible by both 2 and 5?";
        const correctAnswer = "" + n;
        const distractors = ["" + (n + 3), "" + (n + 5), "" + (n + 7)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A number divisible by 2 has an even last digit.",
                "A number divisible by 5 ends in 0 or 5.",
                "To be divisible by both, it must end in 0: " + n + "."
            ],
            lessonNum: 21,
            lessonTitle: "Divisibility"
        };
    },

    22: (rng) => {
        const unit = randInt(rng, 6, 15);
        const total = 3 * unit;
        const ans = 2 * unit;

        const question = "There are " + total + " marbles in a bag. If 2/3 of the marbles are blue, how many marbles are blue?";
        const correctAnswer = ans + " marbles";
        const distractors = [
            unit + " marbles",
            (total - ans) + " marbles",
            (ans + 2) + " marbles"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1/3 of " + total + " = " + total + " ÷ 3 = " + unit + ".",
                "2/3 of " + total + " = 2 × " + unit + " = " + ans + " marbles."
            ],
            lessonNum: 22,
            lessonTitle: "“Equal Groups” Problems with Fractions"
        };
    },

    23: (rng) => {
        const boys = randInt(rng, 12, 18);
        const girls = randInt(rng, 13, 19);

        const question = "In a classroom there are " + boys + " boys and " + girls + " girls. What is the ratio of boys to girls?";
        const correctAnswer = boys + " to " + girls;
        const distractors = [
            girls + " to " + boys,
            boys + " to " + (boys + girls),
            girls + " to " + (boys + girls)
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "The ratio of boys to girls compares the count of boys (" + boys + ") to girls (" + girls + "): " + boys + " to " + girls + "."
            ],
            lessonNum: 23,
            lessonTitle: "Ratio"
        };
    },

    24: (rng) => {
        const den = 8;
        const n1 = randInt(rng, 1, 3);
        const n2 = randInt(rng, 1, 4);
        const sum = n1 + n2;

        const question = "Add: " + n1 + "/" + den + " + " + n2 + "/" + den;
        const correctAnswer = sum + "/" + den;
        const distractors = [
            sum + "/" + (den * 2),
            Math.abs(n1 - n2) + "/" + den,
            (sum + 1) + "/" + den
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "When adding fractions with the same denominator, add numerators: " + n1 + " + " + n2 + " = " + sum + ".",
                "Result: " + sum + "/" + den + "."
            ],
            lessonNum: 24,
            lessonTitle: "Adding and Subtracting Fractions That Have the Same Denominator"
        };
    },

    25: (rng) => {
        const divisor = 4;
        const whole = randInt(rng, 4, 9);
        const rem = randInt(rng, 1, 3);
        const dividend = whole * divisor + rem;

        const question = "Divide and write the answer as a mixed number: " + dividend + " ÷ " + divisor;
        const correctAnswer = whole + " " + rem + "/" + divisor;
        const distractors = [
            whole + " R " + rem,
            (whole + 1) + " " + rem + "/" + divisor,
            whole + " " + (divisor - rem) + "/" + divisor
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                dividend + " ÷ " + divisor + " = " + whole + " with a remainder of " + rem + ".",
                "Write the remainder as a fraction: " + whole + " " + rem + "/" + divisor + "."
            ],
            lessonNum: 25,
            lessonTitle: "Writing Division Answers as Mixed Numbers • Multiples"
        };
    },

    26: (rng) => {
        const reductions = [
            { orig: "4/8", reduced: "1/2" },
            { orig: "6/8", reduced: "3/4" },
            { orig: "4/12", reduced: "1/3" },
            { orig: "6/10", reduced: "3/5" },
            { orig: "8/12", reduced: "2/3" }
        ];
        const choice = reductions[randInt(rng, 0, reductions.length - 1)];

        const question = "Reduce the fraction " + choice.orig + " to simplest form.";
        const correctAnswer = choice.reduced;
        const distractors = ["1/4", "2/5", "3/8"].filter(d => d !== choice.reduced).slice(0, 3);
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Divide numerator and denominator by their greatest common factor: " + choice.orig + " = " + choice.reduced + "."
            ],
            lessonNum: 26,
            lessonTitle: "Using Manipulatives for Fractions • Reducing Fractions"
        };
    },

    27: (rng) => {
        const r = randInt(rng, 3, 14);
        const d = 2 * r;

        const question = "If the radius of a circle is " + r + " inches, what is its diameter?";
        const correctAnswer = d + " inches";
        const distractors = [
            r + " inches",
            (r * r) + " inches",
            (d + 2) + " inches"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Diameter is twice the radius: d = 2r = 2 × " + r + " = " + d + " inches."
            ],
            lessonNum: 27,
            lessonTitle: "Measures of a Circle"
        };
    },

    28: (rng) => {
        const question = "An angle that measures less than 90° is called:";
        const correctAnswer = "An acute angle";
        const distractors = ["An obtuse angle", "A right angle", "A straight angle"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "An angle less than 90° is an acute angle.",
                "An angle equal to 90° is a right angle.",
                "An angle greater than 90° and less than 180° is an obtuse angle."
            ],
            lessonNum: 28,
            lessonTitle: "Angles"
        };
    },

    29: (rng) => {
        const question = "Multiply: 1/2 × 3/4";
        const correctAnswer = "3/8";
        const distractors = ["4/6", "3/6", "1/4"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Multiply numerators: 1 × 3 = 3.",
                "Multiply denominators: 2 × 4 = 8.",
                "Product: 3/8."
            ],
            lessonNum: 29,
            lessonTitle: "Multiplying Fractions"
        };
    },

    30: (rng) => {
        const question = "What is the reciprocal of 2/3?";
        const correctAnswer = "3/2";
        const distractors = ["-2/3", "1/2", "1/3"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Invert numerator and denominator: the reciprocal of 2/3 is 3/2."
            ],
            lessonNum: 30,
            lessonTitle: "Least Common Multiple (LCM) • Reciprocals"
        };
    }
};
`;

// -------------------------------------------------------------
// SECTION 4 (Lessons 31-40)
// -------------------------------------------------------------
const sec4 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    31: (rng) => {
        const l = randInt(rng, 6, 16);
        const w = randInt(rng, 3, l - 1);
        const a = l * w;

        const question = "Find the area of a rectangle with length " + l + " cm and width " + w + " cm.";
        const correctAnswer = a + " sq cm";
        const distractors = [
            (2 * (l + w)) + " sq cm",
            (a + 8) + " sq cm",
            (a - l) + " sq cm"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Area = length × width.",
                "Area = " + l + " × " + w + " = " + a + " square centimeters."
            ],
            lessonNum: 31,
            lessonTitle: "Areas of Rectangles"
        };
    },

    32: (rng) => {
        const d3 = randInt(rng, 3, 7);
        const d2 = randInt(rng, 1, 9);
        const d1 = randInt(rng, 2, 8);
        const num = d3 * 100 + d2 * 10 + d1;

        const question = "Write " + num + " in expanded notation using multiplication.";
        const correctAnswer = "(" + d3 + " × 100) + (" + d2 + " × 10) + (" + d1 + " × 1)";
        const distractors = [
            "(" + d3 + " × 1000) + (" + d2 + " × 10) + (" + d1 + " × 1)",
            "(" + d3 + " × 10) + (" + d2 + " × 100) + (" + d1 + " × 1)",
            "(" + d3 + " × 100) + (" + d2 + " × 1) + (" + d1 + " × 1)"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                num + " = (" + d3 + " × 100) + (" + d2 + " × 10) + (" + d1 + " × 1)."
            ],
            lessonNum: 32,
            lessonTitle: "Expanded Notation • More on Elapsed Time"
        };
    },

    33: (rng) => {
        const question = "Write 25% as a fraction in simplest form.";
        const correctAnswer = "1/4";
        const distractors = ["2/5", "1/5", "1/25"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "25% = 25/100.",
                "Divide numerator and denominator by 25: 25/100 = 1/4."
            ],
            lessonNum: 33,
            lessonTitle: "Writing Percents as Fractions, Part 1"
        };
    },

    34: (rng) => {
        const question = "In the decimal number 12.345, which digit is in the hundredths place?";
        const correctAnswer = "4";
        const distractors = ["3", "5", "2"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Right of decimal point: 3 is tenths, 4 is hundredths, 5 is thousandths.",
                "The hundredths digit is 4."
            ],
            lessonNum: 34,
            lessonTitle: "Decimal Place Value"
        };
    },

    35: (rng) => {
        const question = "Write 0.75 as a fraction in simplest form.";
        const correctAnswer = "3/4";
        const distractors = ["7/10", "3/5", "75/10"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "0.75 = 75/100.",
                "Divide by 25: 75/100 = 3/4."
            ],
            lessonNum: 35,
            lessonTitle: "Writing Decimal Numbers as Fractions • Reading and Writing Decimal Numbers"
        };
    },

    36: (rng) => {
        const whole = randInt(rng, 4, 8);
        const sub = 1;
        const ansWhole = whole - sub - 1;

        const question = "Subtract: " + whole + " - " + sub + " 1/4";
        const correctAnswer = ansWhole + " 3/4";
        const distractors = [
            (ansWhole + 1) + " 3/4",
            ansWhole + " 1/4",
            (ansWhole - 1) + " 3/4"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Regroup: " + whole + " = " + (whole - 1) + " 4/4.",
                (whole - 1) + " 4/4 - " + sub + " 1/4 = " + ansWhole + " 3/4."
            ],
            lessonNum: 36,
            lessonTitle: "Subtracting Fractions and Mixed Numbers from Whole Numbers"
        };
    },

    37: (rng) => {
        const a = (randInt(rng, 25, 75) / 10).toFixed(1);
        const b = (randInt(rng, 15, 65) / 100).toFixed(2);
        const sum = (parseFloat(a) + parseFloat(b)).toFixed(2);

        const question = "Add: " + a + " + " + b;
        const correctAnswer = "" + sum;
        const distractors = [
            (parseFloat(sum) + 0.1).toFixed(2),
            (parseFloat(sum) - 0.05).toFixed(2),
            (parseFloat(sum) + 0.2).toFixed(2)
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Line up decimal points: " + a + "0 + " + b + " = " + sum + "."
            ],
            lessonNum: 37,
            lessonTitle: "Adding and Subtracting Decimal Numbers"
        };
    },

    38: (rng) => {
        const whole = randInt(rng, 5, 15);
        const dec = (randInt(rng, 120, 380) / 100).toFixed(2);
        const diff = (whole - parseFloat(dec)).toFixed(2);

        const question = "Subtract: $" + whole + ".00 - $" + dec;
        const correctAnswer = "$" + diff;
        const distractors = generateDistractors(rng, correctAnswer, "currency", parseFloat(diff));
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Line up decimal points: $" + whole + ".00 - $" + dec + " = $" + diff + "."
            ],
            lessonNum: 38,
            lessonTitle: "Adding and Subtracting Decimal Numbers and Whole Numbers"
        };
    },

    39: (rng) => {
        const d1 = 0.3;
        const d2 = 0.4;
        const prod = (d1 * d2).toFixed(2);

        const question = "Multiply: " + d1 + " × " + d2;
        const correctAnswer = "" + prod;
        const distractors = ["1.2", "0.012", "0.7"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Multiply: 3 × 4 = 12.",
                "Count 2 total decimal places: 0.12."
            ],
            lessonNum: 39,
            lessonTitle: "Multiplying Decimal Numbers"
        };
    },

    40: (rng) => {
        const d1 = 0.2;
        const d2 = 0.03;
        const prod = (d1 * d2).toFixed(3);

        const question = "Multiply: " + d1 + " × " + d2;
        const correctAnswer = "" + prod;
        const distractors = ["0.06", "0.6", "0.0006"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Multiply: 2 × 3 = 6.",
                "Count 3 decimal places, using zero as placeholder: " + prod + "."
            ],
            lessonNum: 40,
            lessonTitle: "Using Zero as a Placeholder • Circle Graphs"
        };
    }
};
`;

writeSection(1, sec1);
writeSection(2, sec2);
writeSection(3, sec3);
writeSection(4, sec4);

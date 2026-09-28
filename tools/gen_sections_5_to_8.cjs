const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'js', 'generators');

function writeSection(secNum, code) {
    fs.writeFileSync(path.join(outDir, `section${secNum}.js`), code, 'utf-8');
    console.log(`[PASS] Wrote section${secNum}.js`);
}

// -------------------------------------------------------------
// SECTION 5 (Lessons 41-50)
// -------------------------------------------------------------
const sec5 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    41: (rng) => {
        const pcts = [
            { pct: "25%", frac: 4 },
            { pct: "50%", frac: 2 },
            { pct: "10%", frac: 10 }
        ];
        const choice = pcts[randInt(rng, 0, 2)];
        const total = choice.frac * randInt(rng, 4, 18);
        const ans = total / choice.frac;

        const question = "What is " + choice.pct + " of " + total + "?";
        const correctAnswer = "" + ans;
        const distractors = generateDistractors(rng, correctAnswer, "integer", ans);
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                choice.pct + " is equivalent to the fraction 1/" + choice.frac + ".",
                "Divide " + total + " by " + choice.frac + ": " + total + " ÷ " + choice.frac + " = " + ans + "."
            ],
            lessonNum: 41,
            lessonTitle: "Finding a Percent of a Number"
        };
    },

    42: (rng) => {
        const n = randInt(rng, 2, 4);
        const d = randInt(rng, 5, 7);
        const mult = randInt(rng, 3, 6);
        const newN = n * mult;
        const newD = d * mult;

        const question = "Complete the equivalent fraction: " + n + "/" + d + " = ?/" + newD;
        const correctAnswer = "" + newN;
        const distractors = ["" + (newN + mult), "" + (newN - 1), "" + n];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                newD + " ÷ " + d + " = " + mult + ".",
                "Multiply numerator by " + mult + ": " + n + " × " + mult + " = " + newN + "."
            ],
            lessonNum: 42,
            lessonTitle: "Renaming Fractions by Multiplying by 1"
        };
    },

    43: (rng) => {
        const question = "Which division problem is equivalent to 700 ÷ 50?";
        const correctAnswer = "70 ÷ 5";
        const distractors = ["700 ÷ 5", "70 ÷ 50", "7000 ÷ 50"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Dividing both numbers by 10 gives 700 ÷ 10 = 70 and 50 ÷ 10 = 5.",
                "Equivalent problem: 70 ÷ 5."
            ],
            lessonNum: 43,
            lessonTitle: "Equivalent Division Problems • Missing-Number Problems with Fractions"
        };
    },

    44: (rng) => {
        const question = "Compare: 0.4 ○ 0.35";
        const correctAnswer = ">";
        const distractors = ["<", "=", "≤"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "0.4 is 0.40 (40 hundredths), which is greater than 0.35 (35 hundredths).",
                "Therefore, 0.4 > 0.35."
            ],
            lessonNum: 44,
            lessonTitle: "Simplifying Decimal Numbers • Comparing Decimal Numbers"
        };
    },

    45: (rng) => {
        const divisor = randInt(rng, 3, 5);
        const ans = (randInt(rng, 12, 35) / 10).toFixed(1);
        const dividend = (parseFloat(ans) * divisor).toFixed(1);

        const question = "Divide: " + dividend + " ÷ " + divisor;
        const correctAnswer = "" + ans;
        const distractors = [
            (parseFloat(ans) * 10).toFixed(0),
            (parseFloat(ans) + 0.2).toFixed(1),
            (parseFloat(ans) - 0.2).toFixed(1)
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Line up the decimal point in the quotient directly above the dividend.",
                dividend + " ÷ " + divisor + " = " + ans + "."
            ],
            lessonNum: 45,
            lessonTitle: "Dividing a Decimal Number by a Whole Number"
        };
    },

    46: (rng) => {
        const hours = randInt(rng, 3, 5);
        const speed = randInt(rng, 45, 65);
        const miles = hours * speed;

        const question = "A family drove at an average rate of " + speed + " miles per hour for " + hours + " hours. How many miles did they travel?";
        const correctAnswer = miles + " miles";
        const distractors = [
            (miles - 20) + " miles",
            (miles + 30) + " miles",
            (speed + hours) + " miles"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Distance = Rate × Time.",
                speed + " mph × " + hours + " hours = " + miles + " miles."
            ],
            lessonNum: 46,
            lessonTitle: "Rates"
        };
    },

    47: (rng) => {
        const roots = [
            { sq: 25, r: 5 },
            { sq: 36, r: 6 },
            { sq: 49, r: 7 },
            { sq: 64, r: 8 },
            { sq: 81, r: 9 },
            { sq: 100, r: 10 }
        ];
        const choice = roots[randInt(rng, 0, roots.length - 1)];

        const question = "What is the value of √" + choice.sq + "?";
        const correctAnswer = "" + choice.r;
        const distractors = ["" + (choice.r * 2), "" + (choice.r + 1), "" + (choice.r - 1)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                choice.r + " × " + choice.r + " = " + choice.sq + ".",
                "Therefore, √" + choice.sq + " = " + choice.r + "."
            ],
            lessonNum: 47,
            lessonTitle: "Powers and Roots"
        };
    },

    48: (rng) => {
        const question = "Which decimal and percent are equivalent to 3/4?";
        const correctAnswer = "0.75 and 75%";
        const distractors = ["0.34 and 34%", "0.75 and 7.5%", "0.43 and 43%"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "3/4 = 3 ÷ 4 = 0.75.",
                "0.75 × 100 = 75%."
            ],
            lessonNum: 48,
            lessonTitle: "Fraction-Decimal-Percent Equivalents"
        };
    },

    49: (rng) => {
        const divisor = 0.3;
        const quotient = randInt(rng, 4, 12);
        const dividend = (divisor * quotient).toFixed(1);

        const question = "Divide: " + dividend + " ÷ " + divisor;
        const correctAnswer = "" + quotient;
        const distractors = ["" + (quotient / 10).toFixed(1), "" + (quotient * 10), "" + (quotient + 2)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Move the decimal point 1 place right in both numbers: " + Math.round(dividend * 10) + " ÷ 3 = " + quotient + "."
            ],
            lessonNum: 49,
            lessonTitle: "Dividing by a Decimal Number"
        };
    },

    50: (rng) => {
        const whole = randInt(rng, 3, 6);
        const den = randInt(rng, 2, 4);
        const ans = whole * den;

        const question = "Divide: " + whole + " ÷ (1/" + den + ")";
        const correctAnswer = "" + ans;
        const distractors = ["" + whole, "" + (ans + 2), "" + Math.floor(whole / den)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Multiply by the reciprocal: " + whole + " × " + den + " = " + ans + "."
            ],
            lessonNum: 50,
            lessonTitle: "Decimal Number Line (Tenths) • Dividing by a Fraction"
        };
    }
};
`;

// -------------------------------------------------------------
// SECTION 6 (Lessons 51-60)
// -------------------------------------------------------------
const sec6 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    51: (rng) => {
        const whole = randInt(rng, 3, 12);
        const tenth = randInt(rng, 1, 8);
        const hund = randInt(rng, 1, 9);
        const num = whole + "." + tenth + "" + hund;
        const rounded = (hund >= 5) ? whole + "." + (tenth + 1) : whole + "." + tenth;

        const question = "Round " + num + " to the nearest tenth.";
        const correctAnswer = "" + rounded;
        const distractors = [
            "" + whole,
            whole + "." + (tenth + 2),
            (parseFloat(rounded) - 0.2).toFixed(1)
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Examine the hundredths digit (" + hund + ").",
                hund >= 5 ? "Round up." : "Round down.",
                num + " rounded to the nearest tenth is " + rounded + "."
            ],
            lessonNum: 51,
            lessonTitle: "Rounding Decimal Numbers"
        };
    },

    52: (rng) => {
        const num = 34.5;
        const question = "Mentally divide: " + num + " ÷ 10";
        const correctAnswer = "3.45";
        const distractors = ["345", "0.345", "34.05"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Dividing by 10 moves the decimal point one place to the left.",
                "34.5 ÷ 10 = 3.45."
            ],
            lessonNum: 52,
            lessonTitle: "Mentally Dividing Decimal Numbers by 10 and 100"
        };
    },

    53: (rng) => {
        const question = "Simplify the fraction 8/24 to lowest terms.";
        const correctAnswer = "1/3";
        const distractors = ["2/6", "4/12", "1/4"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "GCF of 8 and 24 is 8.",
                "(8 ÷ 8) / (24 ÷ 8) = 1/3."
            ],
            lessonNum: 53,
            lessonTitle: "Decimals Chart • Simplifying Fractions"
        };
    },

    54: (rng) => {
        const question = "Reduce 12/18 to lowest terms.";
        const correctAnswer = "2/3";
        const distractors = ["6/9", "3/4", "1/2"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Divide numerator and denominator by 6: 12/18 = 2/3."
            ],
            lessonNum: 54,
            lessonTitle: "Reducing Fractions, Part 2"
        };
    },

    55: (rng) => {
        const question = "Add: 1/2 + 1/4";
        const correctAnswer = "3/4";
        const distractors = ["2/6", "1/8", "2/4"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Common denominator is 4: 1/2 = 2/4.",
                "2/4 + 1/4 = 3/4."
            ],
            lessonNum: 55,
            lessonTitle: "Common Denominators • Adding and Subtracting Fractions with Different Denominators"
        };
    },

    56: (rng) => {
        const x = randInt(rng, 2, 7);
        const y = randInt(rng, 2, 7);

        const question = "In the coordinate pair (" + x + ", " + y + "), what does the first coordinate (" + x + ") represent?";
        const correctAnswer = "The horizontal position along the x-axis";
        const distractors = [
            "The vertical position along the y-axis",
            "The distance from the origin along a diagonal",
            "The slope of the line"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "In an ordered pair (x, y), x is the horizontal coordinate along the x-axis."
            ],
            lessonNum: 56,
            lessonTitle: "Reference Frames"
        };
    },

    57: (rng) => {
        const question = "Add: 2 1/2 + 1 1/4";
        const correctAnswer = "3 3/4";
        const distractors = ["3 2/6", "3 1/8", "4 1/4"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Convert: 1/2 = 2/4.",
                "Fractions: 2/4 + 1/4 = 3/4. Whole numbers: 2 + 1 = 3.",
                "Result: 3 3/4."
            ],
            lessonNum: 57,
            lessonTitle: "Adding and Subtracting Mixed Numbers with Different Denominators"
        };
    },

    58: (rng) => {
        const question = "A standard 6-sided number cube is rolled once. What is the probability of rolling a number greater than 4?";
        const correctAnswer = "1/3";
        const distractors = ["1/6", "1/2", "2/3"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Favorable numbers: 5 and 6 (2 outcomes).",
                "Total outcomes: 6.",
                "Probability = 2/6 = 1/3."
            ],
            lessonNum: 58,
            lessonTitle: "Probability"
        };
    },

    59: (rng) => {
        const question = "Subtract: 4 1/3 - 1 2/3";
        const correctAnswer = "2 2/3";
        const distractors = ["3 1/3", "2 1/3", "3 2/3"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Regroup: 4 1/3 = 3 4/3.",
                "3 4/3 - 1 2/3 = 2 2/3."
            ],
            lessonNum: 59,
            lessonTitle: "Adding and Subtracting Mixed Numbers with Regrouping"
        };
    },

    60: (rng) => {
        const question = "How many vertices does a rectangular prism have?";
        const correctAnswer = "8 vertices";
        const distractors = ["6 vertices", "12 vertices", "10 vertices"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A rectangular prism has 6 rectangular faces, 12 edges, and 8 vertices (corners)."
            ],
            lessonNum: 60,
            lessonTitle: "Polygons • Geometric Solids"
        };
    }
};
`;

// -------------------------------------------------------------
// SECTION 7 (Lessons 61-70)
// -------------------------------------------------------------
const sec7 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    61: (rng) => {
        const question = "Add: 1/2 + 1/3 + 1/6";
        const correctAnswer = "1";
        const distractors = ["3/11", "5/6", "1 1/6"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Common denominator is 6: 3/6 + 2/6 + 1/6 = 6/6 = 1."
            ],
            lessonNum: 61,
            lessonTitle: "Adding Three or More Fractions"
        };
    },

    62: (rng) => {
        const whole = randInt(rng, 2, 5);
        const num = randInt(rng, 1, 3);
        const den = 4;
        const imp = whole * den + num;

        const question = "Write the mixed number " + whole + " " + num + "/" + den + " as an improper fraction.";
        const correctAnswer = imp + "/" + den;
        const distractors = [
            (whole * num) + "/" + den,
            (imp + 1) + "/" + den,
            imp + "/" + (den * 2)
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "(" + whole + " × " + den + ") + " + num + " = " + imp + ".",
                "Improper fraction: " + imp + "/" + den + "."
            ],
            lessonNum: 62,
            lessonTitle: "Writing Mixed Numbers as Improper Fractions"
        };
    },

    63: (rng) => {
        const question = "Subtract: 5 1/4 - 2 3/4";
        const correctAnswer = "2 1/2";
        const distractors = ["3 1/2", "2 3/4", "3 1/4"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Regroup: 5 1/4 = 4 5/4.",
                "4 5/4 - 2 3/4 = 2 2/4 = 2 1/2."
            ],
            lessonNum: 63,
            lessonTitle: "Subtracting Mixed Numbers with Regrouping, Part 2"
        };
    },

    64: (rng) => {
        const question = "Which quadrilateral has exactly one pair of parallel sides?";
        const correctAnswer = "Trapezoid";
        const distractors = ["Parallelogram", "Rhombus", "Rectangle"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A trapezoid is a quadrilateral with exactly one pair of parallel sides."
            ],
            lessonNum: 64,
            lessonTitle: "Classifying Quadrilaterals"
        };
    },

    65: (rng) => {
        const question = "What is the prime factorization of 36?";
        const correctAnswer = "2 × 2 × 3 × 3";
        const distractors = ["4 × 9", "2 × 3 × 6", "2 × 2 × 9"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "36 = 2 × 18 = 2 × 2 × 9 = 2 × 2 × 3 × 3."
            ],
            lessonNum: 65,
            lessonTitle: "Prime Factorization • Division by Primes"
        };
    },

    66: (rng) => {
        const question = "Multiply: 1 1/2 × 2 1/3";
        const correctAnswer = "3 1/2";
        const distractors = ["2 1/6", "3 1/6", "3 2/3"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Convert: 1 1/2 = 3/2, and 2 1/3 = 7/3.",
                "(3/2) × (7/3) = 21/6 = 3 3/6 = 3 1/2."
            ],
            lessonNum: 66,
            lessonTitle: "Multiplying Mixed Numbers"
        };
    },

    67: (rng) => {
        const question = "Reduce 24/36 to simplest form using prime factors.";
        const correctAnswer = "2/3";
        const distractors = ["4/6", "3/4", "1/2"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "24 = 2 × 2 × 2 × 3; 36 = 2 × 2 × 3 × 3.",
                "Cancel common factors (2 × 2 × 3): 2/3 remains."
            ],
            lessonNum: 67,
            lessonTitle: "Using Prime Factorization to Reduce Fractions"
        };
    },

    68: (rng) => {
        const question = "Divide: 2 1/2 ÷ 1 1/4";
        const correctAnswer = "2";
        const distractors = ["1 1/2", "3 1/8", "2 1/4"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Convert: 2 1/2 = 5/2, and 1 1/4 = 5/4.",
                "(5/2) × (4/5) = 20/10 = 2."
            ],
            lessonNum: 68,
            lessonTitle: "Dividing Mixed Numbers"
        };
    },

    69: (rng) => {
        const ang = randInt(rng, 25, 65);
        const comp = 90 - ang;

        const question = "If two angles are complementary and one angle measures " + ang + "°, what is the measure of the other angle?";
        const correctAnswer = comp + "°";
        const distractors = [
            (180 - ang) + "°",
            (comp + 10) + "°",
            (comp - 10) + "°"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Complementary angles add to 90°: 90° - " + ang + "° = " + comp + "°."
            ],
            lessonNum: 69,
            lessonTitle: "Lengths of Segments • Complementary and Supplementary Angles"
        };
    },

    70: (rng) => {
        const question = "Simplify before multiplying: 3/4 × 2/3";
        const correctAnswer = "1/2";
        const distractors = ["6/12", "2/4", "5/7"].filter(d => d !== "1/2").slice(0, 3);
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Cancel 3 with 3, and 2 with 4: (1/2) × (1/1) = 1/2."
            ],
            lessonNum: 70,
            lessonTitle: "Reducing Fractions Before Multiplying"
        };
    }
};
`;

// -------------------------------------------------------------
// SECTION 8 (Lessons 71-80)
// -------------------------------------------------------------
const sec8 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    71: (rng) => {
        const question = "In any parallelogram, which statement about opposite sides is always true?";
        const correctAnswer = "Opposite sides are parallel and equal in length";
        const distractors = [
            "Opposite sides are perpendicular",
            "Opposite sides meet at acute angles",
            "Opposite sides must all have equal length"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A parallelogram has two pairs of opposite sides that are parallel and equal in length."
            ],
            lessonNum: 71,
            lessonTitle: "Parallelograms"
        };
    },

    72: (rng) => {
        const question = "Multiply: 1/2 × 2/3 × 3/4";
        const correctAnswer = "1/4";
        const distractors = ["6/24", "1/2", "3/8"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Cancel common factors: the 2s and 3s cancel, leaving 1/4."
            ],
            lessonNum: 72,
            lessonTitle: "Fractions Chart • Multiplying Three Fractions"
        };
    },

    73: (rng) => {
        const base = randInt(rng, 2, 5);
        const ans = base * base * base;

        const question = "What is the value of " + base + "³?";
        const correctAnswer = "" + ans;
        const distractors = ["" + (base * 3), "" + (ans + base), "" + (base * base)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                base + "³ = " + base + " × " + base + " × " + base + " = " + ans + "."
            ],
            lessonNum: 73,
            lessonTitle: "Exponents"
        };
    },

    74: (rng) => {
        const yds = randInt(rng, 4, 12);
        const ft = yds * 3;

        const question = "How many feet are equal to " + yds + " yards?";
        const correctAnswer = ft + " feet";
        const distractors = [(yds * 12) + " feet", (ft + 3) + " feet", (ft - 3) + " feet"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1 yard = 3 feet.",
                yds + " yards × 3 feet/yard = " + ft + " feet."
            ],
            lessonNum: 74,
            lessonTitle: "Units of Length"
        };
    },

    75: (rng) => {
        const km = randInt(rng, 2, 7);
        const m = km * 1000;

        const question = "How many meters are in " + km + " kilometers?";
        const correctAnswer = m + " meters";
        const distractors = [(km * 100) + " meters", (km * 10) + " meters", (m + 500) + " meters"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1 kilometer = 1000 meters.",
                km + " km × 1000 m/km = " + m + " meters."
            ],
            lessonNum: 75,
            lessonTitle: "Metric System"
        };
    },

    76: (rng) => {
        const question = "Simplify the complex fraction: (1/2) / (3/4)";
        const correctAnswer = "2/3";
        const distractors = ["3/8", "3/2", "1/4"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "(1/2) ÷ (3/4) = (1/2) × (4/3) = 4/6 = 2/3."
            ],
            lessonNum: 76,
            lessonTitle: "Complex Fractions"
        };
    },

    77: (rng) => {
        const lbs = randInt(rng, 2, 6);
        const oz = lbs * 16;

        const question = "How many ounces are in " + lbs + " pounds?";
        const correctAnswer = oz + " ounces";
        const distractors = [(lbs * 12) + " ounces", (oz + 8) + " ounces", (oz - 8) + " ounces"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1 pound = 16 ounces.",
                lbs + " lbs × 16 oz/lb = " + oz + " ounces."
            ],
            lessonNum: 77,
            lessonTitle: "Converting Units of Weight and Mass"
        };
    },

    78: (rng) => {
        const gal = randInt(rng, 2, 6);
        const qt = gal * 4;

        const question = "How many quarts are in " + gal + " gallons?";
        const correctAnswer = qt + " quarts";
        const distractors = [(gal * 2) + " quarts", (gal * 8) + " quarts", (qt + 2) + " quarts"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1 gallon = 4 quarts.",
                gal + " gallons × 4 quarts/gallon = " + qt + " quarts."
            ],
            lessonNum: 78,
            lessonTitle: "Capacity"
        };
    },

    79: (rng) => {
        const b = randInt(rng, 4, 10) * 2;
        const h = randInt(rng, 3, 9);
        const area = (b * h) / 2;

        const question = "Find the area of a triangle with base " + b + " cm and height " + h + " cm.";
        const correctAnswer = area + " sq cm";
        const distractors = [(b * h) + " sq cm", (area + 4) + " sq cm", (b + h) + " sq cm"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Area = 1/2 × base × height.",
                "Area = 1/2 × " + b + " × " + h + " = " + area + " sq cm."
            ],
            lessonNum: 79,
            lessonTitle: "Area of a Triangle"
        };
    },

    80: (rng) => {
        const ratioA = 2;
        const ratioB = 3;
        const m = randInt(rng, 4, 9);
        const actualA = ratioA * m;
        const actualB = ratioB * m;

        const question = "The ratio of cats to dogs is " + ratioA + " to " + ratioB + ". If there are " + actualA + " cats, how many dogs are there?";
        const correctAnswer = actualB + " dogs";
        const distractors = [(actualA + 3) + " dogs", (actualB + 2) + " dogs", (actualA + actualB) + " dogs"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Multiplier = " + actualA + " ÷ " + ratioA + " = " + m + ".",
                actualB + " = " + ratioB + " × " + m + " = " + actualB + " dogs."
            ],
            lessonNum: 80,
            lessonTitle: "Using a Ratio Box to Solve Ratio Problems"
        };
    }
};
`;

writeSection(5, sec5);
writeSection(6, sec6);
writeSection(7, sec7);
writeSection(8, sec8);

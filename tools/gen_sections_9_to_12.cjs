const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'js', 'generators');

function writeSection(secNum, code) {
    fs.writeFileSync(path.join(outDir, `section${secNum}.js`), code, 'utf-8');
    console.log(`[PASS] Wrote section${secNum}.js`);
}

// -------------------------------------------------------------
// SECTION 9 (Lessons 81-90)
// -------------------------------------------------------------
const sec9 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    81: (rng) => {
        const ft1 = 6, in1 = 8, ft2 = 2, in2 = 7;
        const totalIn = in1 + in2;
        const ansFt = ft1 + ft2 + Math.floor(totalIn / 12);
        const ansIn = totalIn % 12;

        const question = "Add: " + ft1 + " ft " + in1 + " in + " + ft2 + " ft " + in2 + " in";
        const correctAnswer = ansFt + " ft " + ansIn + " in";
        const distractors = [
            (ft1 + ft2) + " ft " + totalIn + " in",
            (ansFt + 1) + " ft " + ansIn + " in",
            ansFt + " ft " + (ansIn + 2) + " in"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                in1 + " in + " + in2 + " in = " + totalIn + " in = 1 ft " + ansIn + " in.",
                ft1 + " ft + " + ft2 + " ft + 1 ft = " + ansFt + " ft.",
                "Total: " + ansFt + " ft " + ansIn + " in."
            ],
            lessonNum: 81,
            lessonTitle: "Arithmetic with Units of Measure"
        };
    },

    82: (rng) => {
        const l = randInt(rng, 4, 8);
        const w = randInt(rng, 3, 5);
        const h = randInt(rng, 2, 4);
        const vol = l * w * h;

        const question = "Find the volume of a rectangular prism that is " + l + " cm long, " + w + " cm wide, and " + h + " cm high.";
        const correctAnswer = vol + " cu cm";
        const distractors = [
            (2 * (l*w + l*h + w*h)) + " cu cm",
            (vol + 12) + " cu cm",
            (l + w + h) + " cu cm"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Volume = length × width × height.",
                "Volume = " + l + " × " + w + " × " + h + " = " + vol + " cubic centimeters."
            ],
            lessonNum: 82,
            lessonTitle: "Volume of a Rectangular Prism"
        };
    },

    83: (rng) => {
        const a = 3, b = 4;
        const m = randInt(rng, 4, 9);
        const top = a * m, bot = b * m;

        const question = "Solve the proportion for x: " + a + "/" + b + " = x/" + bot;
        const correctAnswer = "" + top;
        const distractors = ["" + (top + 2), "" + (top - 2), "" + (bot - 1)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                bot + " ÷ " + b + " = " + m + ".",
                "x = " + a + " × " + m + " = " + top + "."
            ],
            lessonNum: 83,
            lessonTitle: "Proportions"
        };
    },

    84: (rng) => {
        const a = randInt(rng, 3, 8);
        const b = randInt(rng, 2, 4);
        const c = 3;
        const ans = a + b * (c * c);

        const question = "Simplify: " + a + " + " + b + " × " + c + "²";
        const correctAnswer = "" + ans;
        const distractors = ["" + ((a + b) * (c * c)), "" + (ans + 4), "" + (a + b * c * 2)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Exponents first: " + c + "² = " + (c*c) + ".",
                "Multiply: " + b + " × " + (c*c) + " = " + (b*c*c) + ".",
                "Add: " + a + " + " + (b*c*c) + " = " + ans + "."
            ],
            lessonNum: 84,
            lessonTitle: "Order of Operations with Exponents"
        };
    },

    85: (rng) => {
        const question = "Solve using cross products: 4/6 = 10/x";
        const correctAnswer = "15";
        const distractors = ["12", "14", "16"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Cross multiply: 4 × x = 6 × 10 = 60.",
                "x = 60 ÷ 4 = 15."
            ],
            lessonNum: 85,
            lessonTitle: "Using Cross Products to Solve Proportions"
        };
    },

    86: (rng) => {
        const r = 10;
        const question = "Using π ≈ 3.14, find the area of a circle with a radius of " + r + " cm.";
        const correctAnswer = "314 sq cm";
        const distractors = ["62.8 sq cm", "31.4 sq cm", "3140 sq cm"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Area = π × r².",
                "Area ≈ 3.14 × " + r + "² = 3.14 × 100 = 314 sq cm."
            ],
            lessonNum: 86,
            lessonTitle: "Area of a Circle"
        };
    },

    87: (rng) => {
        const question = "Find the unknown factor: 0.3n = 1.2";
        const correctAnswer = "4";
        const distractors = ["0.4", "40", "0.36"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "n = 1.2 ÷ 0.3 = 4."
            ],
            lessonNum: 87,
            lessonTitle: "Finding Unknown Factors"
        };
    },

    88: (rng) => {
        const d = 10;
        const question = "Using π ≈ 3.14, what is the circumference of a circle with a diameter of " + d + " inches?";
        const correctAnswer = "31.4 inches";
        const distractors = ["314 inches", "15.7 inches", "62.8 inches"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Circumference = π × diameter.",
                "C ≈ 3.14 × " + d + " = 31.4 inches."
            ],
            lessonNum: 88,
            lessonTitle: "Circumference and Pi"
        };
    },

    89: (rng) => {
        const question = "How many lines of symmetry does a regular square have?";
        const correctAnswer = "4";
        const distractors = ["2", "1", "8"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A square has 2 perpendicular lines of symmetry through sides and 2 diagonal lines of symmetry (total 4)."
            ],
            lessonNum: 89,
            lessonTitle: "Symmetries"
        };
    },

    90: (rng) => {
        const question = "Which number family includes negative whole numbers, zero, and positive whole numbers?";
        const correctAnswer = "Integers";
        const distractors = ["Counting numbers", "Whole numbers", "Fractions"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "The integers include {..., -3, -2, -1, 0, 1, 2, 3, ...}."
            ],
            lessonNum: 90,
            lessonTitle: "Number Families"
        };
    }
};
`;

// -------------------------------------------------------------
// SECTION 10 (Lessons 91-100)
// -------------------------------------------------------------
const sec10 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    91: (rng) => {
        const s = randInt(rng, 5, 12);
        const area = s * s;

        const question = "Using the formula Area = s², find the area of a square with sides of length " + s + " inches.";
        const correctAnswer = area + " sq in";
        const distractors = [(4 * s) + " sq in", (area + 10) + " sq in", (2 * s) + " sq in"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Area = s² = " + s + " × " + s + " = " + area + " sq in."
            ],
            lessonNum: 91,
            lessonTitle: "Geometric Formulas"
        };
    },

    92: (rng) => {
        const question = "Write (4 × 10⁴) + (7 × 10²) as a standard whole number.";
        const correctAnswer = "40,700";
        const distractors = ["4,700", "400,700", "47,000"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "4 × 10,000 = 40,000.",
                "7 × 100 = 700.",
                "40,000 + 700 = 40,700."
            ],
            lessonNum: 92,
            lessonTitle: "Expanded Notation with Exponents"
        };
    },

    93: (rng) => {
        const question = "A triangle with three sides of equal length is called:";
        const correctAnswer = "An equilateral triangle";
        const distractors = ["An isosceles triangle", "A scalene triangle", "A right triangle"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "An equilateral triangle has 3 equal sides and 3 equal 60° angles."
            ],
            lessonNum: 93,
            lessonTitle: "Classifying Triangles"
        };
    },

    94: (rng) => {
        const question = "Convert the fraction 3/5 to a percent.";
        const correctAnswer = "60%";
        const distractors = ["35%", "30%", "75%"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "(3/5) × 100% = 300% ÷ 5 = 60%."
            ],
            lessonNum: 94,
            lessonTitle: "Writing Fractions and Decimals as Percents"
        };
    },

    95: (rng) => {
        const question = "Multiply and simplify units: (60 miles / 1 hour) × 3 hours";
        const correctAnswer = "180 miles";
        const distractors = ["180 miles/hour", "20 miles", "63 miles"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Cancel the hours unit: 60 miles × 3 = 180 miles."
            ],
            lessonNum: 95,
            lessonTitle: "Reducing Units Before Multiplying"
        };
    },

    96: (rng) => {
        const x = randInt(rng, 3, 7);
        const y = 2 * x + 1;

        const question = "A function follows the rule y = 2x + 1. If x = " + x + ", what is y?";
        const correctAnswer = "" + y;
        const distractors = ["" + (2 * x), "" + (x + 1), "" + (y + 2)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "y = 2(" + x + ") + 1 = " + (2 * x) + " + 1 = " + y + "."
            ],
            lessonNum: 96,
            lessonTitle: "Functions and Graphing"
        };
    },

    97: (rng) => {
        const question = "When a transversal intersects two parallel lines, how are all acute angles related?";
        const correctAnswer = "They are all equal in measure";
        const distractors = ["They add to 90°", "They are all right angles", "They have different measures"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "All acute angles formed by a transversal intersecting parallel lines are equal."
            ],
            lessonNum: 97,
            lessonTitle: "Transversals"
        };
    },

    98: (rng) => {
        const a1 = 50, a2 = 70;
        const a3 = 180 - (a1 + a2);

        const question = "Two angles of a triangle measure " + a1 + "° and " + a2 + "°. What is the third angle?";
        const correctAnswer = a3 + "°";
        const distractors = [(90 - a1) + "°", (a3 + 10) + "°", (180 - a1) + "°"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Triangle angle sum is 180°.",
                "180° - (" + a1 + "° + " + a2 + "°) = 180° - " + (a1 + a2) + "° = " + a3 + "°."
            ],
            lessonNum: 98,
            lessonTitle: "Sum of the Angle Measures of a Triangle"
        };
    },

    99: (rng) => {
        const question = "Convert 1/8 to a decimal and a percent.";
        const correctAnswer = "0.125 and 12.5%";
        const distractors = ["0.18 and 18%", "0.125 and 1.25%", "0.8 and 80%"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1 ÷ 8 = 0.125.",
                "0.125 × 100% = 12.5%."
            ],
            lessonNum: 99,
            lessonTitle: "Fraction-Decimal-Percent Equivalents, Part 2"
        };
    },

    100: (rng) => {
        const s = 3;
        const sa = 6 * s * s;

        const question = "What is the total surface area of a cube with edges of length " + s + " cm?";
        const correctAnswer = sa + " sq cm";
        const distractors = [(s*s*s) + " cu cm", (4*s*s) + " sq cm", (12*s) + " sq cm"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A cube has 6 square faces.",
                "Area = 6 × s² = 6 × " + (s*s) + " = " + sa + " sq cm."
            ],
            lessonNum: 100,
            lessonTitle: "Surface Area of Prisms"
        };
    }
};
`;

// -------------------------------------------------------------
// SECTION 11 (Lessons 101-110)
// -------------------------------------------------------------
const sec11 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    101: (rng) => {
        const bRatio = 2, gRatio = 3, totalRatio = 5;
        const m = randInt(rng, 5, 8);
        const total = totalRatio * m;
        const boys = bRatio * m;

        const question = "The ratio of boys to girls is " + bRatio + " to " + gRatio + ". If there are " + total + " students in all, how many are boys?";
        const correctAnswer = boys + " boys";
        const distractors = [(gRatio * m) + " boys", (boys + 4) + " boys", (boys - 2) + " boys"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Total parts: " + bRatio + " + " + gRatio + " = " + totalRatio + ".",
                "Each part: " + total + " ÷ " + totalRatio + " = " + m + ".",
                "Boys: " + bRatio + " × " + m + " = " + boys + " boys."
            ],
            lessonNum: 101,
            lessonTitle: "Ratio Problems Involving Totals"
        };
    },

    102: (rng) => {
        const kg = randInt(rng, 3, 8);
        const g = kg * 1000;

        const question = "Convert " + kg + " kilograms to grams.";
        const correctAnswer = g + " grams";
        const distractors = [(kg * 100) + " grams", (kg * 10) + " grams", (g + 500) + " grams"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1 kg = 1000 grams.",
                kg + " kg × 1000 g/kg = " + g + " grams."
            ],
            lessonNum: 102,
            lessonTitle: "Mass and Weight"
        };
    },

    103: (rng) => {
        const w = 10, h = 8;
        const p = 2 * (w + h);

        const question = "An L-shaped figure has an overall width of " + w + " meters and height of " + h + " meters with all right angles. What is its perimeter?";
        const correctAnswer = p + " meters";
        const distractors = [(w * h) + " meters", (p - 4) + " meters", (w + h) + " meters"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Perimeter = 2 × (width + height) = 2 × (" + w + " + " + h + ") = " + p + " meters."
            ],
            lessonNum: 103,
            lessonTitle: "Perimeter of Complex Shapes"
        };
    },

    104: (rng) => {
        const a = -randInt(rng, 4, 8);
        const b = randInt(rng, 2, 6);
        const sum = a + b;

        const question = "Simplify: (" + a + ") + (+" + b + ")";
        const correctAnswer = "" + sum;
        const distractors = ["" + (-(Math.abs(a) + b)), "" + (Math.abs(a) - b), "" + (sum + 2)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Adding opposite signs: subtract absolute values and keep sign of larger: " + sum + "."
            ],
            lessonNum: 104,
            lessonTitle: "Algebraic Addition of Integers"
        };
    },

    105: (rng) => {
        const pct = 30, total = 200;
        const count = (pct / 100) * total;

        const question = "Thirty percent (30%) of 200 club members attended the meeting. How many members attended?";
        const correctAnswer = count + " members";
        const distractors = [(count + 10) + " members", (count - 10) + " members", (total - count) + " members"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "0.30 × 200 = " + count + " members."
            ],
            lessonNum: 105,
            lessonTitle: "Using a Ratio Box to Solve Percent Problems"
        };
    },

    106: (rng) => {
        const question = "An L-shaped room decomposes into two rectangles: 6 ft by 4 ft, and 5 ft by 3 ft. What is the total area?";
        const correctAnswer = "39 sq ft";
        const distractors = ["35 sq ft", "42 sq ft", "48 sq ft"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "(6 × 4) + (5 × 3) = 24 + 15 = 39 sq ft."
            ],
            lessonNum: 106,
            lessonTitle: "Area of Complex Shapes"
        };
    },

    107: (rng) => {
        const question = "What is the exact measure of a straight angle?";
        const correctAnswer = "180°";
        const distractors = ["90°", "360°", "270°"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A straight angle forms a line and measures 180°."
            ],
            lessonNum: 107,
            lessonTitle: "Acute, Obtuse, and Straight Angles"
        };
    },

    108: (rng) => {
        const question = 'Which geometric transformation is commonly referred to as a "flip"?';
        const correctAnswer = "Reflection";
        const distractors = ["Translation", "Rotation", "Dilation"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Reflection is a flip across a line of symmetry."
            ],
            lessonNum: 108,
            lessonTitle: "Transformations"
        };
    },

    109: (rng) => {
        const question = "When two geometric figures are similar, their corresponding angles are always:";
        const correctAnswer = "Equal in measure";
        const distractors = ["Supplementary", "Proportional", "Right angles"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Similar figures maintain identical angle measures."
            ],
            lessonNum: 109,
            lessonTitle: "Corresponding Parts of Similar Figures"
        };
    },

    110: (rng) => {
        const question = "Which capital letter possesses both vertical and horizontal line symmetry?";
        const correctAnswer = "H";
        const distractors = ["A", "B", "E"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Letter H can be reflected vertically and horizontally."
            ],
            lessonNum: 110,
            lessonTitle: "Symmetry"
        };
    }
};
`;

// -------------------------------------------------------------
// SECTION 12 (Lessons 111-120)
// -------------------------------------------------------------
const sec12 = `import { randInt, generateDistractors, shuffle } from './utils.js';

export default {
    111: (rng) => {
        const people = 25, perCar = 4;
        const cars = Math.ceil(people / perCar);

        const question = "Twenty-five (" + people + ") students are going on a trip. Each car holds " + perCar + " students. How many cars are needed?";
        const correctAnswer = cars + " cars";
        const distractors = [Math.floor(people/perCar) + " cars", (cars + 1) + " cars", (people - perCar) + " cars"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "25 ÷ 4 = 6 R 1. An extra car is needed for the remaining student, so 7 cars are required."
            ],
            lessonNum: 111,
            lessonTitle: "Applications Using Division"
        };
    },

    112: (rng) => {
        const a = -randInt(rng, 3, 7);
        const b = -randInt(rng, 4, 8);
        const prod = a * b;

        const question = "Multiply: (" + a + ") × (" + b + ")";
        const correctAnswer = "" + prod;
        const distractors = ["-" + prod, "" + (a + b), "" + (prod + 4)];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "A negative times a negative is positive: (" + a + ") × (" + b + ") = " + prod + "."
            ],
            lessonNum: 112,
            lessonTitle: "Multiplying and Dividing Integers"
        };
    },

    113: (rng) => {
        const h1 = 3, m1 = 45, h2 = 1, m2 = 30;
        const totalM = m1 + m2;
        const ansH = h1 + h2 + Math.floor(totalM / 60);
        const ansM = totalM % 60;

        const question = "Add: " + h1 + " hr " + m1 + " min + " + h2 + " hr " + m2 + " min";
        const correctAnswer = ansH + " hr " + ansM + " min";
        const distractors = [
            (h1 + h2) + " hr " + totalM + " min",
            ansH + " hr " + (ansM + 15) + " min",
            (ansH + 1) + " hr " + ansM + " min"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "45 min + 30 min = 75 min = 1 hr 15 min.",
                "3 hr + 1 hr + 1 hr = 5 hr.",
                "Total: 5 hr 15 min."
            ],
            lessonNum: 113,
            lessonTitle: "Adding and Subtracting Mixed Measures"
        };
    },

    114: (rng) => {
        const yds = randInt(rng, 4, 10);
        const ft = yds * 3;

        const question = "Using the unit multiplier (3 ft / 1 yd), convert " + yds + " yards to feet.";
        const correctAnswer = ft + " ft";
        const distractors = [(yds * 12) + " ft", Math.round(yds / 3) + " ft", (ft + 6) + " ft"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                yds + " yd × (3 ft / 1 yd) = " + ft + " ft."
            ],
            lessonNum: 114,
            lessonTitle: "Unit Multipliers"
        };
    },

    115: (rng) => {
        const question = "Write 0.125 as a fraction in simplest form.";
        const correctAnswer = "1/8";
        const distractors = ["1/4", "1/5", "3/8"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "0.125 = 125/1000 = 1/8."
            ],
            lessonNum: 115,
            lessonTitle: "Writing Decimals as Fractions in Simplest Form"
        };
    },

    116: (rng) => {
        const question = "If $100 is deposited in an account earning 10% compound annual interest, what is the balance after 2 years?";
        const correctAnswer = "$121.00";
        const distractors = ["$120.00", "$110.00", "$130.00"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Year 1: $100 + $10 = $110.",
                "Year 2: $110 + 10%($110) = $110 + $11 = $121.00."
            ],
            lessonNum: 116,
            lessonTitle: "Compound Interest"
        };
    },

    117: (rng) => {
        const question = "Three-fourths (3/4) of a number is 24. What is the number?";
        const correctAnswer = "32";
        const distractors = ["24", "18", "36"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "1 part = 24 ÷ 3 = 8.",
                "Whole number = 4 × 8 = 32."
            ],
            lessonNum: 117,
            lessonTitle: "Finding a Whole When a Fraction is Known"
        };
    },

    118: (rng) => {
        const question = "To estimate the area of an irregular shape drawn on grid paper, count full grid squares and add:";
        const correctAnswer = "About half of the partially covered grid squares";
        const distractors = [
            "All of the partially covered grid squares",
            "None of the partially covered grid squares",
            "Double the perimeter"
        ];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Standard estimation counts full squares plus half the partial squares."
            ],
            lessonNum: 118,
            lessonTitle: "Estimating Area"
        };
    },

    119: (rng) => {
        const question = "Forty percent (40%) of a number is 20. What is the number?";
        const correctAnswer = "50";
        const distractors = ["40", "60", "80"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "0.40 × n = 20 -> n = 20 ÷ 0.40 = 50."
            ],
            lessonNum: 119,
            lessonTitle: "Finding a Whole When a Percent is Known"
        };
    },

    120: (rng) => {
        const r = 2, h = 5;
        const question = "Using π ≈ 3.14, find the volume of a cylinder with radius " + r + " cm and height " + h + " cm. (Formula: V = πr²h)";
        const correctAnswer = "62.8 cu cm";
        const distractors = ["31.4 cu cm", "125.6 cu cm", "20 cu cm"];
        const shuffled = shuffle(rng, [correctAnswer, ...distractors]);
        return {
            question,
            options: shuffled.options,
            correctIndex: shuffled.correctIndex,
            stepByStep: [
                "Base Area = π × 2² ≈ 3.14 × 4 = 12.56 sq cm.",
                "Volume = 12.56 × 5 = 62.8 cubic centimeters."
            ],
            lessonNum: 120,
            lessonTitle: "Volume of a Cylinder"
        };
    }
};
`;

writeSection(9, sec9);
writeSection(10, sec10);
writeSection(11, sec11);
writeSection(12, sec12);

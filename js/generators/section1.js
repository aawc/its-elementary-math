import { randInt, generateDistractors, shuffle } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 1: Adding/Subtracting Whole Numbers and Money • Fact Families, Part 1
    1: (rng, qIndex) => {
        const framings = [
            // Framing 0: Direct sum of two whole numbers
            (r) => {
                const a = randInt(r, 20, 65);
                const b = randInt(r, 15, 55);
                const ans = a + b;
                const q = "What is the sum of " + a + " and " + b + "?";
                const distractors = generateDistractors(r, "" + ans, "integer", ans);
                const s = shuffle(r, ["" + ans, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the two numbers: " + a + " + " + b + " = " + ans + "."], lessonNum: 1, lessonTitle: "Adding Whole Numbers and Money" };
            },
            // Framing 1: Crowd / event counting word problem
            (r) => {
                const n1 = randInt(r, 110, 180);
                const n2 = randInt(r, 60, 95);
                const n3 = randInt(r, 8, 25);
                const total = n1 + n2 + n3;
                const q = "At a planetarium show, Johnny counted " + n1 + " students, " + n2 + " adults, and " + n3 + " preschoolers. How many people did Johnny count in all?";
                const distractors = ["" + (total + 10), "" + (total - 10), "" + (total + 100)];
                const s = shuffle(r, ["" + total, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add all three groups: " + n1 + " + " + n2 + " + " + n3 + " = " + total + " people in all."], lessonNum: 1, lessonTitle: "Adding Whole Numbers and Money" };
            },
            // Framing 2: "What is the difference when A is subtracted from B?"
            (r) => {
                const a = randInt(r, 45, 98);
                const b = randInt(r, 240, 480);
                const diff = b - a;
                const q = "What is the difference when " + a + " is subtracted from " + b + "?";
                const distractors = ["" + (diff + 10), "" + (diff - 10), "" + (b + a)];
                const s = shuffle(r, ["" + diff, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract " + a + " from " + b + ": " + b + " - " + a + " = " + diff + "."], lessonNum: 1, lessonTitle: "Subtracting Whole Numbers and Money" };
            },
            // Framing 3: Making change with ticket/book
            (r) => {
                const paid = 5;
                const costCents = randInt(r, 215, 475);
                const changeCents = paid * 100 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "Keisha paid $" + paid + " for a movie ticket that cost $" + costStr + ". Find how much change Keisha should get back.";
                const distractors = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract the cost ($" + costStr + ") from $" + paid + ".00: $" + paid + ".00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 1, lessonTitle: "Subtracting Whole Numbers and Money" };
            },
            // Framing 4: Earning money word problem with cents
            (r) => {
                const d1 = randInt(r, 3, 8), c1 = randInt(r, 15, 85);
                const d2 = randInt(r, 2, 7), c2 = randInt(r, 15, 85);
                const total = (d1 * 100 + c1) + (d2 * 100 + c2);
                const s1 = (d1 + c1/100).toFixed(2);
                const s2 = (d2 + c2/100).toFixed(2);
                const totStr = (total / 100).toFixed(2);
                const q = "Tatiana had $" + s1 + " and earned $" + s2 + " more taking care of a neighbor's cat. How much money did she have then?";
                const distractors = generateDistractors(r, "$" + totStr, "currency", total / 100);
                const s = shuffle(r, ["$" + totStr, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the amounts: $" + s1 + " + $" + s2 + " = $" + totStr + "."], lessonNum: 1, lessonTitle: "Adding Whole Numbers and Money" };
            },
            // Framing 5: Lunch total with 3 items (cents)
            (r) => {
                const soup = 1.25, fruit = 0.70, drink = 0.60;
                const tot = (soup + fruit + drink).toFixed(2);
                const q = "The soup cost $" + soup.toFixed(2) + ", the fruit cost $" + fruit.toFixed(2) + ", and the drink cost $" + drink.toFixed(2) + ". What is the total price of the lunch?";
                const distractors = ["$2.45", "$2.65", "$2.35"];
                const s = shuffle(r, ["$" + tot, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the three prices: $" + soup.toFixed(2) + " + $" + fruit.toFixed(2) + " + $" + drink.toFixed(2) + " = $" + tot + "."], lessonNum: 1, lessonTitle: "Adding Whole Numbers and Money" };
            },
            // Framing 6: 3-number vertical addition (e.g. 63 + 47 + 50)
            (r) => {
                const a = randInt(r, 35, 75);
                const b = randInt(r, 25, 65);
                const c = randInt(r, 30, 80);
                const sum = a + b + c;
                const q = "Simplify: " + a + " + " + b + " + " + c;
                const distractors = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " + " + c + " = " + sum + "."], lessonNum: 1, lessonTitle: "Adding Whole Numbers" };
            },
            // Framing 7: Column addition with carry (e.g. 632 + 57 + 198)
            (r) => {
                const a = randInt(r, 450, 750);
                const b = randInt(r, 35, 85);
                const c = randInt(r, 120, 250);
                const sum = a + b + c;
                const q = "Find the sum: " + a + " + " + b + " + " + c;
                const distractors = ["" + (sum + 10), "" + (sum - 10), "" + (sum + 100)];
                const s = shuffle(r, ["" + sum, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " + " + c + " = " + sum + "."], lessonNum: 1, lessonTitle: "Adding Whole Numbers" };
            },
            // Framing 8: Multi-digit subtraction with regrouping (e.g. 345 - 67)
            (r) => {
                const a = randInt(r, 280, 550);
                const b = randInt(r, 45, 95);
                const diff = a - b;
                const q = "Subtract: " + a + " - " + b;
                const distractors = generateDistractors(r, "" + diff, "integer", diff);
                const s = shuffle(r, ["" + diff, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " - " + b + " = " + diff + "."], lessonNum: 1, lessonTitle: "Subtracting Whole Numbers" };
            },
            // Framing 9: 4-digit addition (e.g. 875 + 1086 + 980)
            (r) => {
                const a = randInt(r, 600, 950);
                const b = randInt(r, 1000, 1500);
                const c = randInt(r, 500, 990);
                const sum = a + b + c;
                const q = "Calculate: " + a + " + " + b + " + " + c;
                const distractors = ["" + (sum + 100), "" + (sum - 100), "" + (sum + 20)];
                const s = shuffle(r, ["" + sum, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " + " + c + " = " + sum + "."], lessonNum: 1, lessonTitle: "Adding Whole Numbers" };
            },
            // Framing 10: Decimal money subtraction (e.g. $3.47 - $0.92)
            (r) => {
                const d1 = randInt(r, 3, 7), c1 = randInt(r, 35, 95);
                const d2 = randInt(r, 0, 1), c2 = randInt(r, 15, 85);
                const centsA = d1 * 100 + c1;
                const centsB = d2 * 100 + c2;
                const diff = centsA - centsB;
                const sA = (centsA / 100).toFixed(2);
                const sB = (centsB / 100).toFixed(2);
                const sDiff = (diff / 100).toFixed(2);
                const q = "Subtract: $" + sA + " - $" + sB;
                const distractors = generateDistractors(r, "$" + sDiff, "currency", diff / 100);
                const s = shuffle(r, ["$" + sDiff, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + sA + " - $" + sB + " = $" + sDiff + "."], lessonNum: 1, lessonTitle: "Subtracting Money" };
            },
            // Framing 11: Multi-dollar subtraction with cents (e.g. $24.15 - $1.45)
            (r) => {
                const centsA = randInt(r, 1800, 3200);
                const centsB = randInt(r, 120, 480);
                const diff = centsA - centsB;
                const sA = (centsA / 100).toFixed(2);
                const sB = (centsB / 100).toFixed(2);
                const sDiff = (diff / 100).toFixed(2);
                const q = "Subtract: $" + sA + " - $" + sB;
                const distractors = generateDistractors(r, "$" + sDiff, "currency", diff / 100);
                const s = shuffle(r, ["$" + sDiff, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + sA + " - $" + sB + " = $" + sDiff + "."], lessonNum: 1, lessonTitle: "Subtracting Money" };
            },
            // Framing 12: Decimal cents addition (e.g. $0.75 + $0.75)
            (r) => {
                const c1 = randInt(r, 25, 95);
                const c2 = randInt(r, 25, 95);
                const tot = c1 + c2;
                const s1 = (c1 / 100).toFixed(2);
                const s2 = (c2 / 100).toFixed(2);
                const sTot = (tot / 100).toFixed(2);
                const q = "Add: $" + s1 + " + $" + s2;
                const distractors = generateDistractors(r, "$" + sTot, "currency", tot / 100);
                const s = shuffle(r, ["$" + sTot, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + s1 + " + $" + s2 + " = $" + sTot + "."], lessonNum: 1, lessonTitle: "Adding Money" };
            },
            // Framing 13: 3 decimal money amounts addition (e.g. $0.12 + $0.46 + $0.50)
            (r) => {
                const c1 = randInt(r, 10, 40);
                const c2 = randInt(r, 20, 50);
                const c3 = randInt(r, 30, 60);
                const tot = c1 + c2 + c3;
                const s1 = (c1 / 100).toFixed(2);
                const s2 = (c2 / 100).toFixed(2);
                const s3 = (c3 / 100).toFixed(2);
                const sTot = (tot / 100).toFixed(2);
                const q = "Add: $" + s1 + " + $" + s2 + " + $" + s3;
                const distractors = generateDistractors(r, "$" + sTot, "currency", tot / 100);
                const s = shuffle(r, ["$" + sTot, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + s1 + " + $" + s2 + " + $" + s3 + " = $" + sTot + "."], lessonNum: 1, lessonTitle: "Adding Money" };
            },
            // Framing 14: Vocabulary: addition answer name
            (r) => {
                const q = "What is the mathematical term for the answer when we add two or more numbers?";
                const s = shuffle(r, ["Sum", "Difference", "Product", "Quotient"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The answer to an addition problem is called the sum."], lessonNum: 1, lessonTitle: "Fact Families, Part 1" };
            },
            // Framing 15: Vocabulary: subtraction answer name
            (r) => {
                const q = "What is the mathematical term for the answer when we subtract one number from another?";
                const s = shuffle(r, ["Difference", "Sum", "Product", "Remainder"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The answer to a subtraction problem is called the difference."], lessonNum: 1, lessonTitle: "Fact Families, Part 1" };
            },
            // Framing 16: Fact families from 3 numbers
            (r) => {
                const a = randInt(r, 4, 12);
                let b = randInt(r, 5, 14); if (b === a) b = a + 1;
                const c = a + b;
                const q = "The numbers " + a + ", " + b + ", and " + c + " form a fact family. Which number sentence does NOT belong to this fact family?";
                const ans = c + " + " + a + " = " + b;
                const distractors = [a + " + " + b + " = " + c, c + " - " + a + " = " + b, c + " - " + b + " = " + a];
                const s = shuffle(r, [ans, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ans + " is false and does not belong to the fact family."], lessonNum: 1, lessonTitle: "Fact Families, Part 1" };
            },
            // Framing 17: Rearranging addition fact (e.g. 27 + 16 = 43)
            (r) => {
                const a = 27, b = 16, c = 43;
                const q = "Rearranging the addition fact " + a + " + " + b + " = " + c + " produces another addition fact. Which of the following is it?";
                const ans = b + " + " + a + " = " + c;
                const distractors = [c + " + " + a + " = " + b, a + " - " + b + " = " + c, b + " - " + a + " = " + c];
                const s = shuffle(r, [ans, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["By the Commutative Property of Addition, " + b + " + " + a + " = " + c + "."], lessonNum: 1, lessonTitle: "Fact Families, Part 1" };
            },
            // Framing 18: Rearranging subtraction fact (e.g. 50 - 21 = 29)
            (r) => {
                const a = 50, b = 21, c = 29;
                const q = "Which addition fact can be formed by rearranging the numbers in " + a + " - " + b + " = " + c + "?";
                const ans = b + " + " + c + " = " + a;
                const distractors = [a + " + " + b + " = " + c, a + " + " + c + " = " + b, b + " + " + a + " = " + c];
                const s = shuffle(r, [ans, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In a subtraction fact, the sum is the first number (" + a + "). So " + b + " + " + c + " = " + a + "."], lessonNum: 1, lessonTitle: "Fact Families, Part 1" };
            },
            // Framing 19: Checking subtraction correctness
            (r) => {
                const q = "Which method correctly checks the answer to a subtraction problem?";
                const ans = "Add the difference to the subtrahend to see if it equals the minuend";
                const distractors = [
                    "Subtract the difference from the subtrahend",
                    "Add the minuend to the subtrahend",
                    "Multiply the difference by the subtrahend"
                ];
                const s = shuffle(r, [ans, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["To check subtraction: Difference + Subtrahend = Minuend."], lessonNum: 1, lessonTitle: "Fact Families, Part 1" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 2: Multiplying Whole Numbers and Money • Dividing Whole Numbers and Money • Fact Families, Part 2
    2: (rng, qIndex) => {
        const framings = [
            // Framing 0: If factors are A and B, what is product?
            (r) => {
                const a = randInt(r, 6, 12), b = randInt(r, 5, 12);
                const prod = a * b;
                const q = "If the factors are " + a + " and " + b + ", what is the product?";
                const distractors = generateDistractors(r, "" + prod, "integer", prod);
                const s = shuffle(r, ["" + prod, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + prod + "."], lessonNum: 2, lessonTitle: "Multiplying Whole Numbers" };
            },
            // Framing 1: Difference between A and B
            (r) => {
                const a = randInt(r, 80, 99), b = randInt(r, 60, 79);
                const diff = a - b;
                const q = "What is the difference between " + a + " and " + b + "?";
                const distractors = generateDistractors(r, "" + diff, "integer", diff);
                const s = shuffle(r, ["" + diff, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " - " + b + " = " + diff + "."], lessonNum: 2, lessonTitle: "Subtracting Whole Numbers" };
            },
            // Framing 2: If addends are A and B, what is sum?
            (r) => {
                const a = randInt(r, 120, 180), b = randInt(r, 110, 150);
                const sum = a + b;
                const q = "If the addends are " + a + " and " + b + ", what is the sum?";
                const distractors = generateDistractors(r, "" + sum, "integer", sum);
                const s = shuffle(r, ["" + sum, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " = " + sum + "."], lessonNum: 2, lessonTitle: "Adding Whole Numbers" };
            },
            // Framing 3: If dividend is D and divisor is d, what is quotient?
            (r) => {
                const divisor = randInt(r, 3, 9);
                const quotient = randInt(r, 4, 12);
                const dividend = divisor * quotient;
                const q = "If " + dividend + " is the dividend and " + divisor + " is the divisor, what is the quotient?";
                const distractors = generateDistractors(r, "" + quotient, "integer", quotient);
                const s = shuffle(r, ["" + quotient, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [dividend + " ÷ " + divisor + " = " + quotient + "."], lessonNum: 2, lessonTitle: "Dividing Whole Numbers" };
            },
            // Framing 4: Find sum of 3 numbers
            (r) => {
                const a = randInt(r, 250, 450), b = randInt(r, 60, 110), c = randInt(r, 1200, 1800);
                const sum = a + b + c;
                const q = "Find the sum of " + a + ", " + b + ", and " + c + ".";
                const distractors = ["" + (sum + 10), "" + (sum - 10), "" + (sum + 100)];
                const s = shuffle(r, ["" + sum, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " + " + c + " = " + sum + "."], lessonNum: 2, lessonTitle: "Adding Whole Numbers" };
            },
            // Framing 5: Spent money with five-dollar bill
            (r) => {
                const costCents = randInt(r, 175, 425);
                const changeCents = 500 - costCents;
                const costStr = (costCents / 100).toFixed(2);
                const changeStr = (changeCents / 100).toFixed(2);
                const q = "Fatima spent $" + costStr + " for a book. She paid for it with a five-dollar bill. Find how much change she should get back.";
                const distractors = generateDistractors(r, "$" + changeStr, "currency", changeCents / 100);
                const s = shuffle(r, ["$" + changeStr, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$5.00 - $" + costStr + " = $" + changeStr + "."], lessonNum: 2, lessonTitle: "Subtracting Money" };
            },
            // Framing 6: Radio purchase remaining money
            (r) => {
                const total = 70;
                const have = 47.50;
                const need = (total - have).toFixed(2);
                const q = "Luke wants to buy a $" + total + ".00 radio. He has $" + have.toFixed(2) + ". Find how much more money he needs.";
                const distractors = ["$23.50", "$21.50", "$32.50"];
                const s = shuffle(r, ["$" + need, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + total + ".00 - $" + have.toFixed(2) + " = $" + need + "."], lessonNum: 2, lessonTitle: "Subtracting Money" };
            },
            // Framing 7: Each item costs cents, cost of one dozen
            (r) => {
                const cents = 75;
                const totalCents = 12 * cents;
                const totStr = (totalCents / 100).toFixed(2);
                const q = "Each energy bar costs " + cents + "¢. Find the cost of one dozen energy bars.";
                const distractors = ["$8.50", "$9.50", "$7.50"];
                const s = shuffle(r, ["$" + totStr, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["One dozen = 12. 12 × 75¢ = 900¢ = $" + totStr + "."], lessonNum: 2, lessonTitle: "Multiplying Money" };
            },
            // Framing 8: Multiply: 20 × 37¢
            (r) => {
                const count = randInt(r, 15, 25);
                const cents = randInt(r, 25, 45);
                const tot = count * cents;
                const totStr = (tot / 100).toFixed(2);
                const q = "Simplify: " + count + " × " + cents + "¢";
                const distractors = generateDistractors(r, "$" + totStr, "currency", tot / 100);
                const s = shuffle(r, ["$" + totStr, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [count + " × " + cents + "¢ = " + tot + "¢ = $" + totStr + "."], lessonNum: 2, lessonTitle: "Multiplying Money" };
            },
            // Framing 9: Property of zero in multiplication
            (r) => {
                const n = randInt(r, 15, 95);
                const q = "Simplify: " + n + " × 0";
                const s = shuffle(r, ["0", "" + n, "1", "" + (n * 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any number multiplied by zero equals zero."], lessonNum: 2, lessonTitle: "Multiplying Whole Numbers" };
            },
            // Framing 10: Two-digit multiplication (e.g. 37 × 24)
            (r) => {
                const a = randInt(r, 22, 45);
                const b = randInt(r, 14, 28);
                const prod = a * b;
                const q = "Multiply: " + a + " × " + b;
                const distractors = generateDistractors(r, "" + prod, "integer", prod);
                const s = shuffle(r, ["" + prod, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + prod + "."], lessonNum: 2, lessonTitle: "Multiplying Whole Numbers" };
            },
            // Framing 11: Money division with cents (e.g. $8.40 ÷ 5)
            (r) => {
                const divisor = 5;
                const cents = 840;
                const ans = (cents / divisor / 100).toFixed(2);
                const q = "Divide: $8.40 ÷ " + divisor;
                const distractors = ["$1.58", "$1.72", "$1.64"];
                const s = shuffle(r, ["$" + ans, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$8.40 ÷ 5 = $1.68."], lessonNum: 2, lessonTitle: "Dividing Money" };
            },
            // Framing 12: Division with remainder (e.g. 200 ÷ 12)
            (r) => {
                const dividend = 200, divisor = 12;
                const q = 16, rRem = 8;
                const qText = "Divide: 200 ÷ 12";
                const ans = "16 R 8";
                const distractors = ["16 R 4", "15 R 8", "17 R 2"];
                const s = shuffle(r, [ans, ...distractors]);
                return { question: qText, options: s.options, correctIndex: s.correctIndex, stepByStep: ["200 ÷ 12 = 16 with remainder 8 (16 R 8)."], lessonNum: 2, lessonTitle: "Dividing Whole Numbers" };
            },
            // Framing 13: Identifying divisor in division
            (r) => {
                const q = "In the problem 24 ÷ 6 = 4, which number is the divisor?";
                const s = shuffle(r, ["6", "24", "4", "0"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The number doing the dividing is the divisor (6)."], lessonNum: 2, lessonTitle: "Dividing Whole Numbers" };
            },
            // Framing 14: Multiplication and division fact family
            (r) => {
                const q = "Using the numbers 8, 9, and 72, which of the following is NOT part of their fact family?";
                const ans = "72 × 8 = 9";
                const distractors = ["8 × 9 = 72", "72 ÷ 9 = 8", "72 ÷ 8 = 9"];
                const s = shuffle(r, [ans, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["72 × 8 = 576, which is not in the fact family."], lessonNum: 2, lessonTitle: "Fact Families, Part 2" };
            },
            // Framing 15: Auditorium rows of chairs
            (r) => {
                const rows = randInt(r, 15, 28);
                const perRow = randInt(r, 14, 22);
                const total = rows * perRow;
                const q = "In an auditorium there are " + rows + " rows of chairs with " + perRow + " chairs in each row. How many chairs are in the auditorium?";
                const distractors = ["" + (total + 10), "" + (total - 10), "" + (rows + perRow)];
                const s = shuffle(r, ["" + total, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [rows + " × " + perRow + " = " + total + " chairs."], lessonNum: 2, lessonTitle: "Multiplying Whole Numbers" };
            },
            // Framing 16: Dollars and cents multiplication (e.g. $1.35 × 6)
            (r) => {
                const cents = 135;
                const count = 6;
                const tot = cents * count;
                const totStr = (tot / 100).toFixed(2);
                const q = "Multiply: $1.35 × 6";
                const distractors = ["$7.10", "$8.20", "$8.00"];
                const s = shuffle(r, ["$" + totStr, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$1.35 × 6 = $8.10."], lessonNum: 2, lessonTitle: "Multiplying Money" };
            },
            // Framing 17: Short division with money (e.g. $4.80 ÷ 3)
            (r) => {
                const q = "Divide: $4.80 ÷ 3";
                const ans = "$1.60";
                const distractors = ["$1.50", "$1.70", "$1.40"];
                const s = shuffle(r, [ans, ...distractors]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$4.80 ÷ 3 = $1.60."], lessonNum: 2, lessonTitle: "Dividing Money" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 3: Unknown Numbers in Addition • Unknown Numbers in Subtraction
    3: (rng, qIndex) => {
        const framings = [
            // Framing 0: Unknown addend w + A = B
            (r) => {
                const a = randInt(r, 15, 45), w = randInt(r, 12, 35), b = a + w;
                const q = "Find the unknown number: w + " + a + " = " + b;
                const s = shuffle(r, ["" + w, "" + (w + 2), "" + (w - 2), "" + (b + a)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + b + " - " + a + " = " + w + "."], lessonNum: 3, lessonTitle: "Unknown Numbers in Addition" };
            },
            // Framing 1: Unknown addend A + m = B
            (r) => {
                const a = randInt(r, 20, 50), m = randInt(r, 10, 30), b = a + m;
                const q = "Find the unknown number: " + a + " + m = " + b;
                const s = shuffle(r, ["" + m, "" + (m + 3), "" + (m - 3), "" + (b + a)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = " + b + " - " + a + " = " + m + "."], lessonNum: 3, lessonTitle: "Unknown Numbers in Addition" };
            },
            // Framing 2: Unknown subtrahend A - m = B
            (r) => {
                const m = randInt(r, 12, 35), b = randInt(r, 20, 45), a = m + b;
                const q = "Find the unknown number: " + a + " - m = " + b;
                const s = shuffle(r, ["" + m, "" + (m + 4), "" + (m - 4), "" + (a + b)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = " + a + " - " + b + " = " + m + "."], lessonNum: 3, lessonTitle: "Unknown Numbers in Subtraction" };
            },
            // Framing 3: Unknown minuend n - A = B
            (r) => {
                const a = randInt(r, 15, 40), b = randInt(r, 20, 50), n = a + b;
                const q = "Find the unknown number: n - " + a + " = " + b;
                const s = shuffle(r, ["" + n, "" + (b - a), "" + (n + 5), "" + (n - 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = " + b + " + " + a + " = " + n + "."], lessonNum: 3, lessonTitle: "Unknown Numbers in Subtraction" };
            },
            // Framing 4: Word problem: Library books checked out
            (r) => {
                const total = 120, remaining = 85, checkedOut = total - remaining;
                const q = "The library had " + total + " books on a shelf. After some were checked out, " + remaining + " books remained. How many books were checked out?";
                const s = shuffle(r, ["" + checkedOut, "" + (checkedOut + 5), "" + (checkedOut - 5), "" + (total + remaining)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [total + " - " + remaining + " = " + checkedOut + " books."], lessonNum: 3, lessonTitle: "Unknown Numbers in Subtraction" };
            },
            // Framing 5: 3 addends with unknown (A + B + y = C)
            (r) => {
                const a = 15, b = 25, y = 18, total = a + b + y;
                const q = "Find y: " + a + " + " + b + " + y = " + total;
                const s = shuffle(r, ["" + y, "" + (y + 2), "" + (y - 2), "" + (a + b)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " + " + b + " = " + (a+b) + "; y = " + total + " - " + (a+b) + " = " + y + "."], lessonNum: 3, lessonTitle: "Unknown Numbers in Addition" };
            },
            // Framing 6: Money unknown in addition
            (r) => {
                const aCents = 350, bCents = 825, wCents = bCents - aCents;
                const sA = (aCents / 100).toFixed(2), sB = (bCents / 100).toFixed(2), sW = (wCents / 100).toFixed(2);
                const q = "Solve for m: $" + sA + " + m = $" + sB;
                const s = shuffle(r, ["$" + sW, "$" + ((wCents + 50)/100).toFixed(2), "$" + ((wCents - 50)/100).toFixed(2), "$" + ((bCents + aCents)/100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = $" + sB + " - $" + sA + " = $" + sW + "."], lessonNum: 3, lessonTitle: "Unknown Numbers in Addition" };
            },
            // Framing 7: Money unknown in subtraction
            (r) => {
                const aCents = 1000, bCents = 345, mCents = aCents - bCents;
                const sA = (aCents / 100).toFixed(2), sB = (bCents / 100).toFixed(2), sM = (mCents / 100).toFixed(2);
                const q = "Solve for x: $" + sA + " - x = $" + sB;
                const s = shuffle(r, ["$" + sM, "$" + ((mCents + 100)/100).toFixed(2), "$" + ((mCents - 100)/100).toFixed(2), "$" + ((aCents + bCents)/100).toFixed(2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = $" + sA + " - $" + sB + " = $" + sM + "."], lessonNum: 3, lessonTitle: "Unknown Numbers in Subtraction" };
            },
            // Framing 8: If factors are 25 and 12, what is product?
            (r) => {
                const a = 25, b = 12, prod = a * b;
                const q = "If the two factors are " + a + " and " + b + ", what is the product?";
                const s = shuffle(r, ["" + prod, "" + (prod + 25), "" + (prod - 25), "" + (a + b)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + " × " + b + " = " + prod + "."], lessonNum: 3, lessonTitle: "Strengthening Concepts" };
            },
            // Framing 9: Difference of 25 and 12
            (r) => {
                const q = "What is the difference of 25 and 12?";
                const s = shuffle(r, ["13", "37", "17", "11"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["25 - 12 = 13."], lessonNum: 3, lessonTitle: "Strengthening Concepts" };
            },
            // Framing 10: Inverse operation definition
            (r) => {
                const q = "Which operation is the inverse (opposite) of addition?";
                const s = shuffle(r, ["Subtraction", "Multiplication", "Division", "Rounding"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtraction reverses addition."], lessonNum: 3, lessonTitle: "Unknown Numbers in Addition" };
            },
            // Framing 11: Inverse operation of subtraction
            (r) => {
                const q = "Which operation is the inverse (opposite) of subtraction?";
                const s = shuffle(r, ["Addition", "Multiplication", "Division", "Estimation"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Addition reverses subtraction."], lessonNum: 3, lessonTitle: "Unknown Numbers in Subtraction" };
            },
            // Framing 12: Sequence with unknown
            (r) => {
                const q = "Find the missing number in the addition fact: 36 + ___ = 90";
                const s = shuffle(r, ["54", "44", "64", "126"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["90 - 36 = 54."], lessonNum: 3, lessonTitle: "Unknown Numbers in Addition" };
            },
            // Framing 13: Subtraction check equation
            (r) => {
                const q = "If 74 - 28 = 46, which addition equation can be used to check the answer?";
                const s = shuffle(r, ["46 + 28 = 74", "74 + 28 = 102", "74 + 46 = 120", "28 + 28 = 56"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Difference (46) + Subtrahend (28) = Minuend (74)."], lessonNum: 3, lessonTitle: "Unknown Numbers in Subtraction" };
            },
            // Framing 14: Difference between sum and number
            (r) => {
                const q = "The sum of two numbers is 85. If one number is 32, what is the other number?";
                const s = shuffle(r, ["53", "43", "63", "117"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["85 - 32 = 53."], lessonNum: 3, lessonTitle: "Unknown Numbers in Addition" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 4: Unknown Numbers in Multiplication • Unknown Numbers in Division
    4: (rng, qIndex) => {
        const framings = [
            (r) => {
                const factor = 6, x = 12, prod = 72;
                const q = "Find the unknown number: " + factor + "x = " + prod;
                const s = shuffle(r, ["" + x, "11", "13", "8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = " + prod + " ÷ " + factor + " = " + x + "."], lessonNum: 4, lessonTitle: "Unknown Numbers in Multiplication" };
            },
            (r) => {
                const w = 8, factor = 8, prod = 64;
                const q = "Find the unknown number: w × " + factor + " = " + prod;
                const s = shuffle(r, ["" + w, "7", "9", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = " + prod + " ÷ " + factor + " = " + w + "."], lessonNum: 4, lessonTitle: "Unknown Numbers in Multiplication" };
            },
            (r) => {
                const divisor = 7, quotient = 8, dividend = 56;
                const q = "Find the unknown number: n ÷ " + divisor + " = " + quotient;
                const s = shuffle(r, ["" + dividend, "48", "64", "49"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["n = " + quotient + " × " + divisor + " = " + dividend + "."], lessonNum: 4, lessonTitle: "Unknown Numbers in Division" };
            },
            (r) => {
                const dividend = 54, quotient = 6, y = 9;
                const q = "Find the unknown number: " + dividend + " ÷ y = " + quotient;
                const s = shuffle(r, ["" + y, "8", "7", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["y = " + dividend + " ÷ " + quotient + " = " + y + "."], lessonNum: 4, lessonTitle: "Unknown Numbers in Division" };
            },
            (r) => {
                const q = "Five dozen carrot sticks are to be divided evenly among 15 children. How many carrot sticks will each child receive?";
                const ans = "4 carrot sticks";
                const s = shuffle(r, [ans, "5 carrot sticks", "3 carrot sticks", "6 carrot sticks"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 dozen = 5 × 12 = 60 sticks. 60 ÷ 15 = 4."], lessonNum: 4, lessonTitle: "Word Problems" };
            },
            (r) => {
                const q = "Matt separated 100 pennies into 4 equal piles. Find how many pennies were in each pile.";
                const s = shuffle(r, ["25 pennies", "20 pennies", "30 pennies", "50 pennies"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 ÷ 4 = 25 pennies."], lessonNum: 4, lessonTitle: "Word Problems" };
            },
            (r) => {
                const q = "Sandra put 100 pennies into stacks of 5 pennies each. Find how many stacks she formed.";
                const s = shuffle(r, ["20 stacks", "25 stacks", "15 stacks", "10 stacks"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 ÷ 5 = 20 stacks."], lessonNum: 4, lessonTitle: "Word Problems" };
            },
            (r) => {
                const q = "Find the unknown factor: 7k = $4.20";
                const s = shuffle(r, ["$0.60", "$0.70", "$0.50", "$6.00"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$4.20 ÷ 7 = $0.60."], lessonNum: 4, lessonTitle: "Unknown Numbers with Money" };
            },
            (r) => {
                const q = "Which operation is the inverse (opposite) of multiplication?";
                const s = shuffle(r, ["Division", "Addition", "Subtraction", "Exponentiation"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Division reverses multiplication."], lessonNum: 4, lessonTitle: "Mathematical Concepts" };
            },
            (r) => {
                const q = "Solve for p: p / 4 = $1.25";
                const s = shuffle(r, ["$5.00", "$4.00", "$6.25", "$3.75"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["p = $1.25 × 4 = $5.00."], lessonNum: 4, lessonTitle: "Unknown Numbers with Money" };
            },
            (r) => {
                const q = "If 8 × 9 = 72, which division fact belongs to the same fact family?";
                const s = shuffle(r, ["72 ÷ 8 = 9", "72 ÷ 6 = 12", "72 ÷ 4 = 18", "72 ÷ 2 = 36"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["72 ÷ 8 = 9."], lessonNum: 4, lessonTitle: "Fact Families" };
            },
            (r) => {
                const q = "There are 48 students divided equally into 4 teams. How many students are on each team?";
                const s = shuffle(r, ["12 students", "14 students", "10 students", "16 students"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["48 ÷ 4 = 12 students."], lessonNum: 4, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const q = "Solve for x: 9x = 0";
                const s = shuffle(r, ["0", "9", "1", "Undefined"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0 ÷ 9 = 0."], lessonNum: 4, lessonTitle: "Multiplication Properties" };
            },
            (r) => {
                const q = "Find the missing number: ___ ÷ 5 = 15";
                const s = shuffle(r, ["75", "65", "85", "3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["15 × 5 = 75."], lessonNum: 4, lessonTitle: "Unknown Numbers in Division" };
            },
            (r) => {
                const q = "If 12 boxes hold 144 items in total with an equal count per box, how many items are in each box?";
                const s = shuffle(r, ["12 items", "14 items", "10 items", "16 items"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["144 ÷ 12 = 12 items."], lessonNum: 4, lessonTitle: "Word Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 5: Order of Operations, Part 1
    5: (rng, qIndex) => {
        const framings = [
            (r) => {
                const q = "Simplify: 16 - (8 - 2)";
                const s = shuffle(r, ["10", "6", "8", "12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Parentheses first: 8 - 2 = 6.", "16 - 6 = 10."], lessonNum: 5, lessonTitle: "Order of Operations, Part 1" };
            },
            (r) => {
                const q = "Simplify: (16 - 8) - 2";
                const s = shuffle(r, ["6", "10", "8", "4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Parentheses first: 16 - 8 = 8.", "8 - 2 = 6."], lessonNum: 5, lessonTitle: "Order of Operations, Part 1" };
            },
            (r) => {
                const q = "Simplify: 10 + 2 × 5";
                const s = shuffle(r, ["20", "60", "25", "17"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply first: 2 × 5 = 10.", "10 + 10 = 20."], lessonNum: 5, lessonTitle: "Order of Operations, Part 1" };
            },
            (r) => {
                const q = "Simplify: (10 + 2) × 5";
                const s = shuffle(r, ["60", "20", "50", "22"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Parentheses first: 10 + 2 = 12.", "12 × 5 = 60."], lessonNum: 5, lessonTitle: "Order of Operations, Part 1" };
            },
            (r) => {
                const q = "Simplify: 24 ÷ (6 - 2)";
                const s = shuffle(r, ["6", "2", "8", "4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 - 2 = 4.", "24 ÷ 4 = 6."], lessonNum: 5, lessonTitle: "Order of Operations, Part 1" };
            },
            (r) => {
                const q = "Jack paid $5 for a sandwich that cost $1.25 and milk that cost $0.60. How much change should he receive?";
                const s = shuffle(r, ["$3.15", "$3.25", "$3.05", "$3.75"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$1.25 + $0.60 = $1.85.", "$5.00 - $1.85 = $3.15."], lessonNum: 5, lessonTitle: "Multi-Step Money Word Problems" };
            },
            (r) => {
                const q = "In one day an elephant ate 82 kg of hay, 8 kg of apples, and 12 kg of carrots. How many kilograms of food did the elephant eat in all?";
                const s = shuffle(r, ["102 kg", "92 kg", "112 kg", "98 kg"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["82 + 8 + 12 = 102 kg."], lessonNum: 5, lessonTitle: "Multi-Addend Word Problems" };
            },
            (r) => {
                const q = "What is the difference of 110 and 25?";
                const s = shuffle(r, ["85", "75", "95", "135"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["110 - 25 = 85."], lessonNum: 5, lessonTitle: "Strengthening Concepts" };
            },
            (r) => {
                const q = "A family planned a 300-mile car trip. They traveled 85 miles the first day and 110 miles the second day. How far must they travel the third day to complete the trip?";
                const s = shuffle(r, ["105 miles", "95 miles", "115 miles", "125 miles"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["85 + 110 = 195 miles.", "300 - 195 = 105 miles."], lessonNum: 5, lessonTitle: "Multi-Step Word Problems" };
            },
            (r) => {
                const q = "Simplify: 18 - 3 × 4";
                const s = shuffle(r, ["6", "60", "12", "15"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply first: 3 × 4 = 12.", "18 - 12 = 6."], lessonNum: 5, lessonTitle: "Order of Operations, Part 1" };
            },
            (r) => {
                const q = "Compare: 16 - (8 - 2) ○ (16 - 8) - 2";
                const s = shuffle(r, [">", "<", "=", "≥"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["16 - 6 = 10.", "8 - 2 = 6.", "10 > 6."], lessonNum: 5, lessonTitle: "Comparing Expressions" };
            },
            (r) => {
                const q = "Simplify: 40 - (15 + 5)";
                const s = shuffle(r, ["20", "30", "25", "10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["15 + 5 = 20.", "40 - 20 = 20."], lessonNum: 5, lessonTitle: "Order of Operations, Part 1" };
            },
            (r) => {
                const q = "Which operation should be performed first in: 12 + 6 ÷ 3?";
                const s = shuffle(r, ["Division (6 ÷ 3)", "Addition (12 + 6)", "Both at the same time", "Left to right"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiplication and division take precedence over addition."], lessonNum: 5, lessonTitle: "Order of Operations Rules" };
            },
            (r) => {
                const q = "Evaluate: (18 - 6) ÷ (4 - 2)";
                const s = shuffle(r, ["6", "4", "8", "12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["18 - 6 = 12.", "4 - 2 = 2.", "12 ÷ 2 = 6."], lessonNum: 5, lessonTitle: "Order of Operations, Part 1" };
            },
            (r) => {
                const q = "Tickets cost $6 each. How much will 4 adult tickets and 2 child tickets cost if all cost the same?";
                const s = shuffle(r, ["$36", "$30", "$42", "$24"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(4 + 2) × $6 = 6 × $6 = $36."], lessonNum: 5, lessonTitle: "Word Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

        // Lesson 6: Fractional Parts
    6: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["117", "112", "127", "116"]);
                return { question: "What number is one half of 234?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["234 ÷ 2 = 117."], lessonNum: 6, lessonTitle: "Fractional Parts" };
            },
            (r) => {
                const s = shuffle(r, ["24", "26", "22", "18"]);
                return { question: "Divide 72 into 3 equal parts. What is the value of one part?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["72 ÷ 3 = 24."], lessonNum: 6, lessonTitle: "Fractional Parts" };
            },
            (r) => {
                const s = shuffle(r, ["25", "20", "30", "15"]);
                return { question: "Find one fourth of 100.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 ÷ 4 = 25."], lessonNum: 6, lessonTitle: "Fractional Parts" };
            },
            (r) => {
                const s = shuffle(r, ["45", "40", "50", "30"]);
                return { question: "Calculate three fourths of 60.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 of 60 = 15; 3 × 15 = 45."], lessonNum: 6, lessonTitle: "Fractional Parts" };
            },
            (r) => {
                const s = shuffle(r, ["10 students", "15 students", "8 students", "12 students"]);
                return { question: "There are 30 students in the class. If 1/3 of them walk to school, how many walk to school?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["30 ÷ 3 = 10."], lessonNum: 6, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["2 pounds", "1 pound", "3 pounds", "4 pounds"]);
                return { question: "A recipe calls for 1/2 pound of butter. If Mia makes 4 batches, how many pounds of butter are needed?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 × (1/2) = 2."], lessonNum: 6, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["3/8", "5/8", "3/5", "1/8"]);
                return { question: "A circle is divided into 8 equal parts with 3 parts shaded. What fraction of the circle is shaded?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 parts out of 8 = 3/8."], lessonNum: 6, lessonTitle: "Visual Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["5/8", "3/8", "5/3", "1/8"]);
                return { question: "A pizza has 8 slices. If 3 are eaten, what fraction of the pizza remains?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 - 3 = 5 slices remain, which is 5/8."], lessonNum: 6, lessonTitle: "Visual Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/4", "1/2", "1/10", "1/5"]);
                return { question: "What fraction of a dollar is equal to 25¢?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["25¢ / 100¢ = 1/4."], lessonNum: 6, lessonTitle: "Fraction Applications" };
            },
            (r) => {
                const s = shuffle(r, ["30 minutes", "15 minutes", "20 minutes", "45 minutes"]);
                return { question: "How many minutes are in one half of an hour?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["60 ÷ 2 = 30 minutes."], lessonNum: 6, lessonTitle: "Fraction Applications" };
            },
            (r) => {
                const s = shuffle(r, ["6 items", "4 items", "8 items", "5 items"]);
                return { question: "How many eggs are in one half of a dozen?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 ÷ 2 = 6 eggs."], lessonNum: 6, lessonTitle: "Fraction Applications" };
            },
            (r) => {
                const s = shuffle(r, ["5 marbles", "4 marbles", "6 marbles", "8 marbles"]);
                return { question: "Leo has 20 marbles. If one fourth are red, how many red marbles does he have?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["20 ÷ 4 = 5 marbles."], lessonNum: 6, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["Numerator", "Denominator", "Quotient", "Factor"]);
                return { question: "In the fraction 3/8, what is the term for the top number (3)?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The top number is the numerator."], lessonNum: 6, lessonTitle: "Fraction Terms" };
            },
            (r) => {
                const s = shuffle(r, ["Denominator", "Numerator", "Divisor", "Addend"]);
                return { question: "In the fraction 3/8, what is the term for the bottom number (8)?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The bottom number is the denominator."], lessonNum: 6, lessonTitle: "Fraction Terms" };
            },
            (r) => {
                const s = shuffle(r, ["<", ">", "=", "≤"]);
                return { question: "Compare the values: one half of 50 ○ one third of 90", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 of 50 = 25; 1/3 of 90 = 30; 25 < 30."], lessonNum: 6, lessonTitle: "Comparing Fractional Parts" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 7: Lines, Segments, and Rays • Linear Measure
    7: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["Ray", "Line segment", "Line", "Plane"]);
                return { question: "Which geometric term describes a path that has one endpoint and extends indefinitely in one direction?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A ray has one endpoint."], lessonNum: 7, lessonTitle: "Geometry Definitions" };
            },
            (r) => {
                const s = shuffle(r, ["Line segment", "Ray", "Line", "Angle"]);
                return { question: "Which geometric term describes a part of a line bounded by two distinct endpoints?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A line segment has two endpoints."], lessonNum: 7, lessonTitle: "Geometry Definitions" };
            },
            (r) => {
                const s = shuffle(r, ["36 inches", "30 inches", "48 inches", "24 inches"]);
                return { question: "How many inches are in 3 feet?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 × 12 = 36 inches."], lessonNum: 7, lessonTitle: "Linear Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["60 inches", "50 inches", "72 inches", "48 inches"]);
                return { question: "Convert 5 feet into inches.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 × 12 = 60 inches."], lessonNum: 7, lessonTitle: "Linear Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["40 mm", "400 mm", "4 mm", "4000 mm"]);
                return { question: "How many millimeters are in 4 centimeters?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 × 10 = 40 mm."], lessonNum: 7, lessonTitle: "Metric Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["2 1/2 inches", "2 inches", "3 inches", "1 1/2 inches"]);
                return { question: "Point A is at 1 1/2 inches and Point B is at 4 inches. What is the length of segment AB?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 - 1 1/2 = 2 1/2 inches."], lessonNum: 7, lessonTitle: "Ruler Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["Perpendicular lines", "Parallel lines", "Oblique lines", "Rays"]);
                return { question: "Two lines that intersect at right angles (90°) are described as:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perpendicular lines form right angles."], lessonNum: 7, lessonTitle: "Geometry Concepts" };
            },
            (r) => {
                const s = shuffle(r, ["Parallel lines", "Perpendicular lines", "Skew lines", "Concurrent lines"]);
                return { question: "Two lines in the same plane that never intersect are called:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Parallel lines never meet."], lessonNum: 7, lessonTitle: "Geometry Concepts" };
            },
            (r) => {
                const s = shuffle(r, ["4 feet", "3 feet", "5 feet", "6 feet"]);
                return { question: "How many feet are equal to 48 inches?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["48 ÷ 12 = 4 feet."], lessonNum: 7, lessonTitle: "Linear Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["Inch", "Millimeter", "Kilogram", "Liter"]);
                return { question: "Which measurement unit belongs to the U.S. Customary System?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Inches are U.S. Customary."], lessonNum: 7, lessonTitle: "Measurement Systems" };
            },
            (r) => {
                const s = shuffle(r, ["6 feet", "4 feet", "8 feet", "12 feet"]);
                return { question: "A ribbon is 2 yards long. How many feet long is the ribbon?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 × 3 = 6 feet."], lessonNum: 7, lessonTitle: "Linear Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["5 cm", "500 cm", "0.5 cm", "50 cm"]);
                return { question: "Convert 50 millimeters to centimeters.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["50 ÷ 10 = 5 cm."], lessonNum: 7, lessonTitle: "Metric Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["0", "1", "2", "Infinite"]);
                return { question: "How many endpoints does a geometric line have?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A line has 0 endpoints."], lessonNum: 7, lessonTitle: "Geometry Definitions" };
            },
            (r) => {
                const s = shuffle(r, ["2", "1", "0", "4"]);
                return { question: "How many endpoints does a line segment have?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A segment has 2 endpoints."], lessonNum: 7, lessonTitle: "Geometry Definitions" };
            },
            (r) => {
                const s = shuffle(r, [">", "<", "=", "≤"]);
                return { question: "Compare the lengths: 1 foot ○ 10 inches", options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 inches > 10 inches."], lessonNum: 7, lessonTitle: "Measurement Comparisons" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 8: Perimeter
    8: (rng, qIndex) => {
        const framings = [
            (r) => {
                const l = 15, w = 10, p = 2 * (l + w);
                const q = "Find the perimeter of a rectangle that is " + l + " mm long and " + w + " mm wide.";
                const s = shuffle(r, [p + " mm", (l*w) + " mm", (l+w) + " mm", (p+10) + " mm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (15 + 10) = 2 × 25 = 50 mm."], lessonNum: 8, lessonTitle: "Perimeter of Rectangles" };
            },
            (r) => {
                const sVal = 12, p = 4 * sVal;
                const q = "What is the perimeter of a square with sides of length " + sVal + " inches?";
                const s = shuffle(r, [p + " inches", (sVal*sVal) + " inches", (2*sVal) + " inches", (p+4) + " inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 4 × 12 = 48 inches."], lessonNum: 8, lessonTitle: "Perimeter of Squares" };
            },
            (r) => {
                const a = 5, b = 6, c = 7, p = a + b + c;
                const q = "A triangle has side lengths of " + a + " cm, " + b + " cm, and " + c + " cm. What is its perimeter?";
                const s = shuffle(r, [p + " cm", (p+2) + " cm", (p-2) + " cm", (a*b) + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the three sides: 5 + 6 + 7 = 18 cm."], lessonNum: 8, lessonTitle: "Perimeter of Triangles" };
            },
            (r) => {
                const sVal = 6, p = 5 * sVal;
                const q = "A regular pentagon has sides of length " + sVal + " feet. What is its perimeter?";
                const s = shuffle(r, [p + " feet", "25 feet", "36 feet", "24 feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A regular pentagon has 5 equal sides: 5 × 6 = 30 feet."], lessonNum: 8, lessonTitle: "Perimeter of Regular Polygons" };
            },
            (r) => {
                const sVal = 4, p = 6 * sVal;
                const q = "A regular hexagon has sides measuring " + sVal + " meters each. What is its perimeter?";
                const s = shuffle(r, [p + " meters", "20 meters", "28 meters", "16 meters"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A hexagon has 6 sides: 6 × 4 = 24 meters."], lessonNum: 8, lessonTitle: "Perimeter of Regular Polygons" };
            },
            (r) => {
                const l = 20, w = 15, p = 2 * (l + w);
                const q = "Courtney wants to put a fence around a garden " + l + " feet long and " + w + " feet wide. How many feet of fencing does she need?";
                const s = shuffle(r, [p + " feet", (l*w) + " feet", (l+w) + " feet", (p+10) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (20 + 15) = 2 × 35 = 70 feet."], lessonNum: 8, lessonTitle: "Word Problems" };
            },
            (r) => {
                const q = "What is the perimeter of an equilateral triangle with sides of length 9 cm?";
                const s = shuffle(r, ["27 cm", "18 cm", "81 cm", "24 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 × 9 = 27 cm."], lessonNum: 8, lessonTitle: "Perimeter of Triangles" };
            },
            (r) => {
                const p = 36, sVal = p / 4;
                const q = "The perimeter of a square is " + p + " inches. How long is each side?";
                const s = shuffle(r, [sVal + " inches", "8 inches", "6 inches", "12 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["36 ÷ 4 = 9 inches."], lessonNum: 8, lessonTitle: "Inverse Perimeter Problems" };
            },
            (r) => {
                const q = "Which formula represents the perimeter of a rectangle with length l and width w?";
                const s = shuffle(r, ["P = 2l + 2w", "P = l × w", "P = l + w", "P = 4s"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2l + 2w."], lessonNum: 8, lessonTitle: "Perimeter Formulas" };
            },
            (r) => {
                const q = "Which term describes the total distance around the outside edge of a closed figure?";
                const s = shuffle(r, ["Perimeter", "Area", "Volume", "Diameter"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter is the distance around a shape."], lessonNum: 8, lessonTitle: "Geometry Terms" };
            },
            (r) => {
                const q = "A rectangular swimming pool is 25 meters long and 10 meters wide. What is its perimeter?";
                const s = shuffle(r, ["70 meters", "250 meters", "35 meters", "60 meters"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 × (25 + 10) = 70 meters."], lessonNum: 8, lessonTitle: "Word Problems" };
            },
            (r) => {
                const q = "If a square has perimeter 20 cm and another has perimeter 28 cm, what is the difference in their perimeters?";
                const s = shuffle(r, ["8 cm", "4 cm", "10 cm", "6 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["28 - 20 = 8 cm."], lessonNum: 8, lessonTitle: "Comparing Perimeters" };
            },
            (r) => {
                const q = "A regular octagon has sides of length 5 cm. What is its perimeter?";
                const s = shuffle(r, ["40 cm", "35 cm", "48 cm", "30 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 × 5 = 40 cm."], lessonNum: 8, lessonTitle: "Regular Polygons" };
            },
            (r) => {
                const q = "A rectangular room is 12 ft by 9 ft. Baseboard molding costs $2 per foot. What is the cost of baseboard around the room?";
                const s = shuffle(r, ["$84", "$42", "$216", "$96"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P = 2 × (12 + 9) = 42 ft. 42 × $2 = $84."], lessonNum: 8, lessonTitle: "Multi-Step Word Problems" };
            },
            (r) => {
                const q = "Find the perimeter of a rectangle with length 8.5 cm and width 4.5 cm.";
                const s = shuffle(r, ["26 cm", "13 cm", "38.25 cm", "25 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 × (8.5 + 4.5) = 2 × 13 = 26 cm."], lessonNum: 8, lessonTitle: "Perimeter with Decimals" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 9: The Number Line: Ordering and Comparing
    9: (rng, qIndex) => {
        const framings = [
            (r) => {
                const q = "Arrange these amounts of money from least to greatest: 12¢, $12, $1.20";
                const s = shuffle(r, ["12¢, $1.20, $12", "$1.20, 12¢, $12", "$12, $1.20, 12¢", "12¢, $12, $1.20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12¢ = $0.12 < $1.20 < $12.00."], lessonNum: 9, lessonTitle: "Ordering Money" };
            },
            (r) => {
                const q = "Compare: 16 - 8 - 2 ○ 16 - (8 - 2)";
                const s = shuffle(r, ["<", ">", "=", "≥"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["16 - 8 - 2 = 6.", "16 - 6 = 10.", "6 < 10."], lessonNum: 9, lessonTitle: "Comparing Expressions" };
            },
            (r) => {
                const q = "Compare: 8 ÷ 4 × 2 ○ 8 ÷ (4 × 2)";
                const s = shuffle(r, [">", "<", "=", "≤"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 ÷ 4 × 2 = 2 × 2 = 4.", "8 ÷ 8 = 1.", "4 > 1."], lessonNum: 9, lessonTitle: "Comparing Expressions" };
            },
            (r) => {
                const q = "Tamara arranged 144 books into 8 equal stacks. How many books were in each stack?";
                const s = shuffle(r, ["18 books", "16 books", "19 books", "17 books"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["144 ÷ 8 = 18 books."], lessonNum: 9, lessonTitle: "Word Problems" };
            },
            (r) => {
                const q = "Find how many years there were from 1492 to 1603 by subtracting 1492 from 1603.";
                const s = shuffle(r, ["111 years", "101 years", "121 years", "91 years"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1603 - 1492 = 111 years."], lessonNum: 9, lessonTitle: "Elapsed Time" };
            },
            (r) => {
                const q = "Martin is carrying groceries in from the car. If he can carry 2 bags at a time, how many trips will it take him to carry in 9 bags?";
                const s = shuffle(r, ["5 trips", "4 trips", "4.5 trips", "6 trips"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["9 ÷ 2 = 4 R 1. He needs 5 trips to bring all 9 bags."], lessonNum: 9, lessonTitle: "Interpreting Remainders" };
            },
            (r) => {
                const q = "Which number is greater: -3 or -8?";
                const s = shuffle(r, ["-3", "-8", "They are equal", "Cannot be determined"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["-3 is to the right of -8 on the number line, so -3 is greater."], lessonNum: 9, lessonTitle: "Comparing Negative Numbers" };
            },
            (r) => {
                const q = "Which comparison symbol correctly completes: -10 ○ 0?";
                const s = shuffle(r, ["<", ">", "=", "≥"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["All negative numbers are less than 0."], lessonNum: 9, lessonTitle: "Number Line Comparison" };
            },
            (r) => {
                const q = "Arrange from least to greatest: 0, -4, 4, -1";
                const s = shuffle(r, ["-4, -1, 0, 4", "-1, -4, 0, 4", "0, -1, 4, -4", "4, 0, -1, -4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Least to greatest: -4, -1, 0, 4."], lessonNum: 9, lessonTitle: "Ordering Integers" };
            },
            (r) => {
                const q = "Compare: 3 × 4 + 2 ○ 3 × (4 + 2)";
                const s = shuffle(r, ["<", ">", "=", "≤"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 + 2 = 14.", "3 × 6 = 18.", "14 < 18."], lessonNum: 9, lessonTitle: "Comparing Expressions" };
            },
            (r) => {
                const q = "On a number line, which point is located directly halfway between 10 and 20?";
                const s = shuffle(r, ["15", "14", "16", "12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(10 + 20) ÷ 2 = 15."], lessonNum: 9, lessonTitle: "Number Line Midpoint" };
            },
            (r) => {
                const q = "Which of the following is the greatest amount?";
                const s = shuffle(r, ["$2.50", "205¢", "$0.95", "240¢"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$2.50 = 250¢, which is the greatest."], lessonNum: 9, lessonTitle: "Comparing Money" };
            },
            (r) => {
                const q = "Compare: 500 - 250 ○ 150 + 100";
                const s = shuffle(r, ["=", "<", ">", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["500 - 250 = 250.", "150 + 100 = 250.", "250 = 250."], lessonNum: 9, lessonTitle: "Comparing Equations" };
            },
            (r) => {
                const q = "Order these numbers from least to greatest: 102, 98, 120, 89";
                const s = shuffle(r, ["89, 98, 102, 120", "98, 89, 102, 120", "89, 102, 98, 120", "120, 102, 98, 89"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["89 < 98 < 102 < 120."], lessonNum: 9, lessonTitle: "Ordering Whole Numbers" };
            },
            (r) => {
                const q = "Compare: 1/2 of 100 ○ 1/4 of 200";
                const s = shuffle(r, ["=", "<", ">", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 of 100 = 50.", "1/4 of 200 = 50.", "50 = 50."], lessonNum: 9, lessonTitle: "Comparing Fractional Parts" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 10: Sequences • Scales
    10: (rng, qIndex) => {
        const framings = [
            (r) => {
                const q = "State the rule and find the next term for the sequence: 16, 24, 32, ...";
                const s = shuffle(r, ["Add 8; next term is 40", "Add 6; next term is 38", "Add 8; next term is 48", "Multiply by 2; next term is 64"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["24 - 16 = 8. 32 + 8 = 40."], lessonNum: 10, lessonTitle: "Arithmetic Sequences" };
            },
            (r) => {
                const q = "What is the rule and next term for the sequence: 1, 2, 4, 8, ...?";
                const s = shuffle(r, ["Multiply by 2; next term is 16", "Add 2; next term is 10", "Multiply by 2; next term is 12", "Add 4; next term is 12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each term is multiplied by 2: 8 × 2 = 16."], lessonNum: 10, lessonTitle: "Geometric Sequences" };
            },
            (r) => {
                const q = "Find the next three terms in the sequence: 9, 18, 27, 36, ...";
                const s = shuffle(r, ["45, 54, 63", "40, 50, 60", "45, 55, 65", "42, 51, 60"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 9: 45, 54, 63."], lessonNum: 10, lessonTitle: "Arithmetic Sequences" };
            },
            (r) => {
                const q = "How many years were there from the year the Pilgrims landed in 1620 to the Declaration of Independence in 1776?";
                const s = shuffle(r, ["156 years", "146 years", "166 years", "150 years"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1776 - 1620 = 156 years."], lessonNum: 10, lessonTitle: "Elapsed Time" };
            },
            (r) => {
                const q = "On the Fahrenheit scale, water freezes at 32°F and boils at 212°F. How many degrees difference is there between freezing and boiling?";
                const s = shuffle(r, ["180°F", "100°F", "200°F", "170°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["212 - 32 = 180°F."], lessonNum: 10, lessonTitle: "Thermometer Scales" };
            },
            (r) => {
                const q = "On the Celsius scale, water freezes at 0°C and boils at 100°C. What is the difference between freezing and boiling?";
                const s = shuffle(r, ["100°C", "180°C", "50°C", "212°C"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 - 0 = 100°C."], lessonNum: 10, lessonTitle: "Thermometer Scales" };
            },
            (r) => {
                const q = "If the temperature at 6 a.m. was 45°F and rose 18°F by noon, what was the noon temperature?";
                const s = shuffle(r, ["63°F", "62°F", "53°F", "65°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["45 + 18 = 63°F."], lessonNum: 10, lessonTitle: "Temperature Word Problems" };
            },
            (r) => {
                const q = "Find the missing number in this sequence: 100, 90, 80, ___, 60";
                const s = shuffle(r, ["70", "75", "65", "85"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Subtract 10: 80 - 10 = 70."], lessonNum: 10, lessonTitle: "Decreasing Sequences" };
            },
            (r) => {
                const q = "The sequence of square numbers begins: 1, 4, 9, 16, 25, ... What is the 6th term?";
                const s = shuffle(r, ["36", "30", "49", "35"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 × 6 = 36."], lessonNum: 10, lessonTitle: "Square Numbers" };
            },
            (r) => {
                const q = "A thermometer shows a temperature of -4°F. If the temperature rises 10°F, what is the new temperature?";
                const s = shuffle(r, ["6°F", "14°F", "-14°F", "4°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["-4 + 10 = 6°F."], lessonNum: 10, lessonTitle: "Negative Temperature" };
            },
            (r) => {
                const q = "On a scale, the marks between 0 and 100 are spaced every 10 units. Which number is at the 7th tick mark after 0?";
                const s = shuffle(r, ["70", "60", "75", "80"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7 × 10 = 70."], lessonNum: 10, lessonTitle: "Reading Scales" };
            },
            (r) => {
                const q = "What is the 8th term in the sequence of multiples of 7: 7, 14, 21, 28, ...?";
                const s = shuffle(r, ["56", "49", "63", "54"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 × 7 = 56."], lessonNum: 10, lessonTitle: "Multiples Sequence" };
            },
            (r) => {
                const q = "If the temperature drops from 12°F to -3°F, how many degrees did it drop?";
                const s = shuffle(r, ["15°F", "9°F", "-9°F", "12°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 - (-3) = 15°F."], lessonNum: 10, lessonTitle: "Temperature Range" };
            },
            (r) => {
                const q = "What is the pattern rule for: 3, 6, 12, 24, 48, ...?";
                const s = shuffle(r, ["Double the previous term", "Add 3 to each term", "Add 6 to each term", "Square the previous term"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each term is twice the previous term."], lessonNum: 10, lessonTitle: "Sequence Rules" };
            },
            (r) => {
                const q = "Find the missing term: 5, 10, 20, ___, 80";
                const s = shuffle(r, ["40", "30", "50", "35"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["20 × 2 = 40."], lessonNum: 10, lessonTitle: "Geometric Sequences" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};

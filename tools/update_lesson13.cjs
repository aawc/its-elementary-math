const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../js/generators/section2.js');
let content = fs.readFileSync(targetFile, 'utf8');

const lesson13Code = `    // Lesson 13: Problems About Comparing • Elapsed-Time Problems
    13: (rng, qIndex) => {
        const framings = [
            // Category 0: Elapsed time between historical years (from Practice Set b)
            (r) => {
                const events = [
                    { y1: 1066, y2: 1215, desc1: "a historic conquest", desc2: "a landmark charter signing" },
                    { y1: 1492, y2: 1776, desc1: "the arrival in the Americas", desc2: "the Declaration of Independence" },
                    { y1: 1789, y2: 1865, desc1: "the constitution ratification", desc2: "the conclusion of the Civil War" },
                    { y1: 1803, y2: 1914, desc1: "the Louisiana Purchase", desc2: "the opening of the Panama Canal" },
                    { y1: 1620, y2: 1776, desc1: "the Mayflower landing", desc2: "the founding declaration" }
                ];
                const e = events[randInt(r, 0, events.length - 1)];
                const diff = e.y2 - e.y1;
                const q = "Two historic milestones occurred in " + e.y1 + " (" + e.desc1 + ") and " + e.y2 + " (" + e.desc2 + "). How many years passed from " + e.y1 + " to " + e.y2 + "?";
                const s = shuffle(r, [diff + " years", (diff + 10) + " years", (diff - 10) + " years", (diff + 2) + " years"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Subtract the earlier year from the later year: " + e.y2 + " - " + e.y1 + " = " + diff + " years."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 1: Population comparison (from Practice Set a)
            (r) => {
                const town1 = "Castor";
                const town2 = "Weston";
                const pop1 = randInt(r, 240, 320) * 100 + randInt(r, 10, 99);
                const pop2 = randInt(r, 160, 220) * 100 + randInt(r, 10, 99);
                const diff = pop1 - pop2;
                const q = "The population of " + town1 + " is " + pop1.toLocaleString() + ". The population of " + town2 + " is " + pop2.toLocaleString() + ". How many more people live in " + town1 + " than in " + town2 + "?";
                const s = shuffle(r, [diff.toLocaleString() + " people", (diff + 1000).toLocaleString() + " people", (diff - 1000).toLocaleString() + " people", (pop1 + pop2).toLocaleString() + " people"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Use the comparison subtraction pattern (Greater - Lesser = Difference):",
                        pop1.toLocaleString() + " - " + pop2.toLocaleString() + " = " + diff.toLocaleString() + " people."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 2: Distance comparison between cities (from Lesson 13 #7)
            (r) => {
                const d1 = randInt(r, 380, 440);
                const d2 = randInt(r, 650, 720);
                const diff = d2 - d1;
                const q = "It is " + d1 + " miles from Minneapolis to Chicago, and " + d2 + " miles from Minneapolis to Cincinnati. Cincinnati is how many miles farther from Minneapolis than Chicago?";
                const s = shuffle(r, [diff + " miles", (diff + 20) + " miles", (diff - 20) + " miles", (d1 + d2) + " miles"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To compare distances, subtract the shorter distance from the longer distance:",
                        d2 + " miles - " + d1 + " miles = " + diff + " miles."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 3: Event ticket sales remaining (from Lesson 13 #6)
            (r) => {
                const total = 1000;
                const sold = randInt(r, 420, 680);
                const remaining = total - sold;
                const q = "The auditorium at the Cultural Center has seats for " + total + " people. If " + sold + " tickets have already been sold for a symphony concert, how many more tickets are still available?";
                const s = shuffle(r, ["" + remaining, "" + (remaining + 10), "" + (remaining - 10), "" + (total - sold + 20)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Write an equation with the unknown available tickets t: " + sold + " + t = " + total + ".",
                        "Solve by subtraction: t = " + total + " - " + sold + " = " + remaining + " tickets."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 4: Age in scores (from Lesson 13 #5)
            (r) => {
                const scores = randInt(r, 3, 5);
                const scoreWords = ["three", "four", "five"][scores - 3];
                const age = scores * 20;
                const q = "A veteran chess grandmaster entered a tournament when she was " + scoreWords + "-score years old. How old was the grandmaster? (Recall that one score equals 20 years.)";
                const s = shuffle(r, [age + " years old", (age + 10) + " years old", (age - 10) + " years old", (scores * 10) + " years old"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "One score equals 20 years.",
                        scoreWords + "-score years means " + scores + " × 20 = " + age + " years old."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 5: Equilateral triangle perimeter (from Lesson 13 #12)
            (r) => {
                const side = randInt(r, 12, 35);
                const peri = 3 * side;
                const q = "The three sides of an equilateral triangle are equal in length. What is the perimeter of an equilateral triangle with sides measuring " + side + " mm?";
                const s = shuffle(r, [peri + " mm", (side * 4) + " mm", (peri + 6) + " mm", (side * 2) + " mm"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "An equilateral triangle has 3 congruent sides.",
                        "Perimeter = 3 × " + side + " mm = " + peri + " mm."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 6: Alternating sequence pattern (from Lesson 13 #18)
            (r) => {
                const start = randInt(r, 1, 5);
                const add = randInt(r, 3, 5);
                const sub = randInt(r, 1, 2);
                const seq = [start];
                let current = start;
                for (let i = 0; i < 5; i++) {
                    if (i % 2 === 0) current += add;
                    else current -= sub;
                    seq.push(current);
                }
                const nextVal = current - sub;
                const q = "The sequence below follows an alternating rule: " + seq.join(', ') + ", ... What is the next number in this sequence?";
                const s = shuffle(r, ["" + nextVal, "" + (nextVal + add), "" + (current + add), "" + (nextVal - 1)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Observe the pattern alternating between +" + add + " and -" + sub + ".",
                        "After the last step of +" + add + " to reach " + current + ", the next step is -" + sub + ": " + current + " - " + sub + " = " + nextVal + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 7: Mental math three consecutive numbers addition (from Lesson 13 #8)
            (r) => {
                const base = randInt(r, 5, 25) * 10;
                const a = base - 1;
                const b = base;
                const c = base + 1;
                const sum = a + b + c;
                const q = "Use mental math strategies to calculate the sum of three consecutive numbers: " + a + " + " + b + " + " + c;
                const s = shuffle(r, ["" + sum, "" + (sum + 10), "" + (sum - 10), "" + (base * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Notice that " + a + " is 1 less than " + b + " and " + c + " is 1 more than " + b + ".",
                        "Combining gives 3 × " + b + " = " + sum + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 8: Mental math three consecutive numbers product (from Lesson 13 #9)
            (r) => {
                const b = randInt(r, 5, 12);
                const a = b - 1;
                const c = b + 1;
                const prod = a * b * c;
                const q = "Calculate the product of three consecutive integers: " + a + " × " + b + " × " + c;
                const s = shuffle(r, ["" + prod, "" + (prod + b), "" + (prod - b), "" + (a * b)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply " + a + " × " + c + " = " + (a * c) + ".",
                        "Then multiply by " + b + ": " + (a * c) + " × " + b + " = " + prod + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 9: Boiling and freezing points on Fahrenheit scale (from Lesson 13 #25)
            (r) => {
                const isBoil = r() < 0.5;
                const eventName = isBoil ? "water boil" : "water freeze";
                const temp = isBoil ? "212°F" : "32°F";
                const distractors = isBoil ? ["32°F", "100°F", "98.6°F"] : ["0°F", "212°F", "100°F"];
                const q = "At what temperature on the Fahrenheit temperature scale does " + eventName + "?";
                const s = shuffle(r, [temp, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "On the standard Fahrenheit scale, water freezes at 32°F and boils at 212°F."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 10: Repeated addition rewritten as multiplication (from Lesson 13 #24)
            (r) => {
                const val = randInt(r, 15, 80) * 5;
                const count = randInt(r, 4, 7);
                const terms = Array(count).fill(val);
                const ans = count * val;
                const q = "Multiply to find the sum of this repeated addition problem: " + terms.join(' + ');
                const s = shuffle(r, ["" + ans, "" + (ans + val), "" + (ans - val), "" + (val * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Counting the identical addends gives " + count + " groups of " + val + ".",
                        "Multiplication fact: " + count + " × " + val + " = " + ans + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 11: Fraction of a mile in feet (from Lesson 13 #19)
            (r) => {
                const denomChoices = [
                    { frac: "1/2", d: 2, ans: 2640 },
                    { frac: "1/4", d: 4, ans: 1320 },
                    { frac: "1/3", d: 3, ans: 1760 },
                    { frac: "1/10", d: 10, ans: 528 }
                ];
                const choice = denomChoices[randInt(r, 0, denomChoices.length - 1)];
                const q = "Recall that one mile equals 5,280 feet. What is " + choice.frac + " of 5,280 feet?";
                const s = shuffle(r, [choice.ans + " feet", (choice.ans + 100) + " feet", (choice.ans - 100) + " feet", (choice.ans * 2) + " feet"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To calculate " + choice.frac + " of 5,280 feet, divide 5,280 by " + choice.d + ":",
                        "5,280 ÷ " + choice.d + " = " + choice.ans + " feet."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 12: Parenthetical mean / average (from Lesson 13 #21)
            (r) => {
                const a = randInt(r, 4, 18);
                const b = a + randInt(r, 1, 4);
                const c = b + randInt(r, 1, 4);
                const sum = a + b + c;
                const rem = sum % 3;
                const adjustedC = c + (rem === 0 ? 0 : 3 - rem);
                const finalSum = a + b + adjustedC;
                const ans = finalSum / 3;
                const q = "Evaluate the expression: (" + a + " + " + b + " + " + adjustedC + ") ÷ 3";
                const s = shuffle(r, ["" + ans, "" + (ans + 2), "" + (ans - 1), "" + (ans * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Step 1: Compute inside parentheses: " + a + " + " + b + " + " + adjustedC + " = " + finalSum + ".",
                        "Step 2: Divide by 3: " + finalSum + " ÷ 3 = " + ans + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 13: Unknown factor in multiplication (from Lesson 13 #27: 8a = 816)
            (r) => {
                const factor = randInt(r, 6, 9);
                const ans = randInt(r, 102, 125);
                const product = factor * ans;
                const q = "Find the unknown number a that satisfies: " + factor + "a = " + product;
                const s = shuffle(r, ["" + ans, "" + (ans + 10), "" + (ans - 10), "" + (ans + 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To find the missing factor in " + factor + "a = " + product + ", divide by " + factor + ":",
                        "a = " + product + " ÷ " + factor + " = " + ans + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 14: Unknown dividend in division (from Lesson 13 #28: b / 4 = 12)
            (r) => {
                const divisor = randInt(r, 4, 8);
                const quot = randInt(r, 12, 25);
                const b = divisor * quot;
                const q = "Find the unknown number b that satisfies: b ÷ " + divisor + " = " + quot;
                const s = shuffle(r, ["" + b, "" + (b + divisor), "" + (b - divisor), "" + (quot * 2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "In a division problem, dividend = quotient × divisor:",
                        "b = " + quot + " × " + divisor + " = " + b + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 15: Unknown divisor in division (from Lesson 13 #29: 12 / c = 4)
            (r) => {
                const quot = randInt(r, 3, 9);
                const c = randInt(r, 3, 8);
                const dividend = quot * c;
                const q = "Find the unknown number c that satisfies: " + dividend + " ÷ c = " + quot;
                const s = shuffle(r, ["" + c, "" + (c + 2), "" + (c - 1), "" + (quot + 1)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To solve for the divisor in " + dividend + " ÷ c = " + quot + ", divide dividend by quotient:",
                        "c = " + dividend + " ÷ " + quot + " = " + c + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 16: Unknown minuend in subtraction (from Lesson 13 #30: d - 16 = 61)
            (r) => {
                const sub = randInt(r, 14, 38);
                const diff = randInt(r, 45, 85);
                const d = sub + diff;
                const q = "Find the unknown number d that satisfies: d − " + sub + " = " + diff;
                const s = shuffle(r, ["" + d, "" + (d + 10), "" + (d - 10), "" + (diff - sub)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "To find the unknown minuend d, add the subtrahend to the difference:",
                        "d = " + diff + " + " + sub + " = " + d + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 17: Comparison with factor of zero (from Lesson 13 #17)
            (r) => {
                const a = randInt(r, 2, 5);
                const b = randInt(r, 2, 4);
                const c = randInt(r, 1, 3);
                const sum = a + b + c;
                const q = "Compare the two expressions using <, >, or =: (" + a + " + " + b + " + " + c + " + 0) ○ (" + a + " × " + b + " × " + c + " × 0)";
                const s = shuffle(r, [">", "<", "=", "≠"]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Left side evaluates to " + sum + " + 0 = " + sum + ".",
                        "Right side multiplies by 0, so the product is 0.",
                        "Since " + sum + " > 0, the comparison symbol is >."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 18: Division of thousands by tens (from Lesson 13 #14: 60,000 / 30)
            (r) => {
                const base = randInt(r, 4, 9);
                const tens = randInt(r, 2, 4) * 10;
                const dividend = base * tens * 1000;
                const ans = dividend / tens;
                const q = "Calculate the quotient: " + dividend.toLocaleString() + " ÷ " + tens;
                const s = shuffle(r, [ans.toLocaleString(), (ans * 10).toLocaleString(), (ans / 10).toLocaleString(), (ans + 200).toLocaleString()]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Simplify by dividing out common factor of 10:",
                        dividend.toLocaleString() + " ÷ " + tens + " = " + ans.toLocaleString() + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            },
            // Category 19: Division of money with cents (from Lesson 13 #16: $4.56 / 3)
            (r) => {
                const divisor = randInt(r, 3, 6);
                const centsEach = randInt(r, 120, 240);
                const totalCents = divisor * centsEach;
                const totalStr = (totalCents / 100).toFixed(2);
                const ansStr = (centsEach / 100).toFixed(2);
                const q = "Find the quotient when dividing money: $" + totalStr + " ÷ " + divisor;
                const s = shuffle(r, ["$" + ansStr, "$" + ((centsEach + 20) / 100).toFixed(2), "$" + ((centsEach - 20) / 100).toFixed(2), "$" + ((centsEach + 50) / 100).toFixed(2)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Divide as with whole numbers, keeping the dollar sign and decimal point in the quotient:",
                        "$" + totalStr + " ÷ " + divisor + " = $" + ansStr + "."
                    ],
                    lessonNum: 13,
                    lessonTitle: "Problems About Comparing • Elapsed-Time Problems"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

// Replace Lesson 13 in section2.js
const lesson13Regex = / {4}\/\/ Lesson 13:[\s\S]*?return pickFraming\(framings, rng, qIndex\);\s*\},/m;

if (!lesson13Regex.test(content)) {
    console.error("Could not find Lesson 13 block in section2.js");
    process.exit(1);
}

content = content.replace(lesson13Regex, lesson13Code);
fs.writeFileSync(targetFile, content, 'utf8');
console.log("Successfully updated Lesson 13 in " + targetFile);

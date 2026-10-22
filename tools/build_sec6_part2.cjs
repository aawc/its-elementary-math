// Lesson 56 to 60 generator definitions
module.exports = {
  getLesson56: () => `    // Lesson 56: Common Denominators, Part 2
    56: (rng, qIndex) => {
        const framings = [
            // Category 0: Add fractions with common denominator 12 (Lesson 56 #1)
            (r) => {
                const q = "Add 1/4 and 1/3 using 12 as the common denominator.";
                const s = shuffle(r, ["7/12", "2/7", "5/12", "1/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 = 3/12, 1/3 = 4/12. 3/12 + 4/12 = 7/12."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 1: Subtract fractions with common denominator 6 (Lesson 56 #2)
            (r) => {
                const q = "Subtract 1/3 from 1/2 using 6 as the common denominator.";
                const s = shuffle(r, ["1/6", "5/6", "1/5", "2/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 3/6, 1/3 = 2/6. 3/6 - 2/6 = 1/6."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 2: Piano keys fraction white (Lesson 56 #3a)
            (r) => {
                const q = "Of the 88 keys on a piano, 52 are white. What fraction of a piano's keys are white in simplest form?";
                const s = shuffle(r, ["13/22", "52/88", "9/22", "26/44"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["52/88 reduces by dividing numerator and denominator by 4: 13/22."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 3: Piano keys ratio black to white (Lesson 56 #3b)
            (r) => {
                const q = "Of the 88 keys on a piano, 52 are white and 36 are black. What is the ratio of black keys to white keys in lowest terms?";
                const s = shuffle(r, ["9 to 13", "13 to 9", "9 to 22", "13 to 22"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["36 : 52 divides by 4 to give 9 to 13."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 4: Apples for apple pies (Lesson 56 #4)
            (r) => {
                const applesPerPie = 7;
                const pies = randInt(r, 2, 4);
                const tot = applesPerPie * pies;
                const q = "If " + applesPerPie + " apples are needed to make one apple pie, how many apples are needed to make " + pies + " apple pies?";
                const s = shuffle(r, [tot + " apples", (tot + 7) + " apples", (tot - 7) + " apples", (tot + 3) + " apples"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [applesPerPie + " × " + pies + " = " + tot + " apples."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 5: Subtract fractions using common denominator 12 (Lesson 56 #5)
            (r) => {
                const q = "Rename with a common denominator of 12 and subtract: 2/3 − 1/4";
                const s = shuffle(r, ["5/12", "7/12", "1/12", "1/7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/3 = 8/12, 1/4 = 3/12. 8/12 - 3/12 = 5/12."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 6: Add and reduce fractions (Lesson 56 #6)
            (r) => {
                const q = "Add 1/2 and 1/6 and reduce the sum to simplest form.";
                const s = shuffle(r, ["2/3", "4/6", "1/4", "3/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 3/6. 3/6 + 1/6 = 4/6 = 2/3."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 7: Subtract and reduce fractions (Lesson 56 #7)
            (r) => {
                const q = "Subtract 1/6 from 1/2 and reduce the difference to simplest form.";
                const s = shuffle(r, ["1/3", "2/6", "1/4", "2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 3/6. 3/6 - 1/6 = 2/6 = 1/3."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 8: Adding mixed dollars and cents (Lesson 56 #8)
            (r) => {
                const q = "Find the total: $3 + 65¢ + $1.75";
                const s = shuffle(r, ["$5.40", "$5.35", "$5.45", "$4.40"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$3.00 + $0.65 + $1.75 = $5.40."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 9: Multiplying decimals (Lesson 56 #9)
            (r) => {
                const q = "Simplify: (0.625)(0.4)";
                const s = shuffle(r, ["0.25", "2.5", "0.025", "0.24"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["625 × 4 = 2500. Four decimal places gives 0.2500 = 0.25."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 10: Dividing integer by decimal (Lesson 56 #10)
            (r) => {
                const q = "Find the quotient: 62 ÷ 0.08";
                const s = shuffle(r, ["775", "77.5", "7750", "750"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["62 ÷ 0.08 = 6200 ÷ 8 = 775."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 11: Subtract mixed numbers with like denominators (Lesson 56 #11)
            (r) => {
                const q = "Simplify: 3 5/8 − 1 1/8";
                const s = shuffle(r, ["2 1/2", "2 4/8", "2 3/8", "1 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 - 1 = 2; 5/8 - 1/8 = 4/8 = 1/2. Result: 2 1/2."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 12: Multiply fractions (Lesson 56 #12)
            (r) => {
                const q = "Find the product in simplest form: (5/8) × (2/3)";
                const s = shuffle(r, ["5/12", "10/24", "7/11", "5/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(5 × 2) / (8 × 3) = 10/24 = 5/12."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 13: Percent as reduced fraction (Lesson 56 #13a)
            (r) => {
                const q = "Forty percent of the students in the club speak more than two languages. Write 40% as a reduced fraction.";
                const s = shuffle(r, ["2/5", "4/10", "1/4", "3/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["40% = 40/100 = 2/5."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 14: Fractional part of group (Lesson 56 #13b)
            (r) => {
                const q = "Forty percent of the 30 students in the club speak more than two languages. How many students speak more than two languages?";
                const s = shuffle(r, ["12 students", "10 students", "15 students", "14 students"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/5 × 30 = 60 ÷ 5 = 12 students."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 15: Expanded notation with decimals (Lesson 56 #14)
            (r) => {
                const q = "Write as a decimal number: (8 × 10) + (6 × 1/10) + (5 × 1/100)";
                const s = shuffle(r, ["80.65", "86.5", "8.65", "80.065"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["80 + 0.6 + 0.05 = 80.65."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 16: Estimate sum to nearest hundred (Lesson 56 #15)
            (r) => {
                const q = "Estimate the sum of 3627 and 4187 to the nearest hundred.";
                const s = shuffle(r, ["7800", "7700", "7900", "7814"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3627 rounds to 3600; 4187 rounds to 4200. 3600 + 4200 = 7800."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 17: Distance per tire rotation (Lesson 56 #16)
            (r) => {
                const q = "A bike tire has a diameter of 2 feet. About how many feet does the bike travel forward with each turn of the tire? (Round to the nearest whole foot; use 3.14 for π.)";
                const s = shuffle(r, ["6 feet", "4 feet", "8 feet", "12 feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = π × d ≈ 3.14 × 2 = 6.28, which rounds to 6 feet."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 18: Mean of decimal list (Lesson 56 #17)
            (r) => {
                const q = "What is the mean of 1.2, 1.3, 1.4, and 1.5?";
                const s = shuffle(r, ["1.35", "1.3", "1.4", "1.25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 1.2 + 1.3 + 1.4 + 1.5 = 5.4. Mean = 5.4 ÷ 4 = 1.35."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            },
            // Category 19: Area of square from perimeter (Lesson 56 #18)
            (r) => {
                const q = "The perimeter of a square is 36 inches. What is its area?";
                const s = shuffle(r, ["81 square inches", "36 square inches", "72 square inches", "144 square inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side = 36 ÷ 4 = 9 inches. Area = 9 × 9 = 81 square inches."], lessonNum: 56, lessonTitle: "Common Denominators, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`,

  getLesson57: () => `    // Lesson 57: Adding and Subtracting Fractions: Three Steps
    57: (rng, qIndex) => {
        const framings = [
            // Category 0: Fraction addition with mixed number result (Lesson 57 core)
            (r) => {
                const q = "Add and write the sum as a mixed number: 1/2 + 2/3";
                const s = shuffle(r, ["1 1/6", "3/5", "7/6", "1 1/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 3/6, 2/3 = 4/6. 3/6 + 4/6 = 7/6 = 1 1/6."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 1: Fraction subtraction requiring reduction (Lesson 57 core)
            (r) => {
                const q = "What is the difference when 1/3 is subtracted from 5/6 in simplest form?";
                const s = shuffle(r, ["1/2", "3/6", "4/3", "1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 - 2/6 = 3/6 = 1/2."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 2: Fraction subtraction (Lesson 57 core)
            (r) => {
                const q = "Subtract and simplify: 5/6 − 1/2";
                const s = shuffle(r, ["1/3", "2/6", "1/6", "2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 - 3/6 = 2/6 = 1/3."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 3: Fraction addition with unlike denominators (Lesson 57 core)
            (r) => {
                const q = "Find the sum as a mixed number: 3/4 + 5/8";
                const s = shuffle(r, ["1 3/8", "8/12", "1 1/8", "1 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 = 6/8. 6/8 + 5/8 = 11/8 = 1 3/8."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 4: Fraction subtraction (Lesson 57 core)
            (r) => {
                const q = "Subtract: 7/8 − 1/2";
                const s = shuffle(r, ["3/8", "6/6", "5/8", "1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7/8 - 4/8 = 3/8."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 5: Fraction subtraction (Lesson 57 core)
            (r) => {
                const q = "Evaluate the expression in simplest form: 2/3 − 1/6";
                const s = shuffle(r, ["1/2", "3/6", "1/3", "1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/3 = 4/6. 4/6 - 1/6 = 3/6 = 1/2."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 6: Dividing money by 10 (Lesson 57 #8)
            (r) => {
                const q = "Find the quotient: $32.50 ÷ 10";
                const s = shuffle(r, ["$3.25", "$0.33", "$325.00", "$3.50"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 10 shifts decimal 1 place left: $3.25."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 7: Percent shaded area (Lesson 57 #13)
            (r) => {
                const l = 8, w = 6;
                const totArea = l * w;
                const shaded = totArea / 2;
                const q = "Fifty percent of a rectangle with length " + l + " cm and width " + w + " cm is shaded. What is the area of the shaded portion?";
                const s = shuffle(r, [shaded + " cm²", totArea + " cm²", (shaded + 4) + " cm²", (shaded - 4) + " cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total area = " + l + " × " + w + " = " + totArea + " cm². 50% of " + totArea + " = " + shaded + " cm²."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 8: Place value in decimal (Lesson 57 #14)
            (r) => {
                const q = "What is the place value of the 7 in 3.567?";
                const s = shuffle(r, ["thousandths", "hundredths", "tenths", "ten-thousandths"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The 7 is 3 places to the right of the decimal point, which is the thousandths place."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 9: Divide decimal and round (Lesson 57 #15)
            (r) => {
                const q = "Divide 0.5 by 4 and round the quotient to the nearest hundredth.";
                const s = shuffle(r, ["0.13", "0.12", "0.125", "0.15"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.5 ÷ 4 = 0.125, which rounds to 0.13."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 10: Arrange decimals from least to greatest (Lesson 57 #16)
            (r) => {
                const correct = "0.012, 0.102, 0.12, 0.2";
                const q = "Arrange these numbers in order from least to greatest: 0.12, 0.2, 0.012, 0.102";
                const s = shuffle(r, [correct, "0.102, 0.012, 0.12, 0.2", "0.012, 0.12, 0.102, 0.2", "0.2, 0.12, 0.102, 0.012"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Compare place values: 0.012 < 0.102 < 0.12 < 0.2."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 11: Predict nth term in doubling sequence (Lesson 57 #17)
            (r) => {
                const q = "In this sequence the first term is 2, the second is 4, and the third is 8. What is the sixth term?";
                const s = shuffle(r, ["64", "32", "128", "16"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Terms double each time: 2, 4, 8, 16, 32, 64."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 12: Ratio of aces to all cards (Lesson 57 #18)
            (r) => {
                const q = "In a standard deck of 52 cards there are four aces. What is the ratio of aces to all cards in simplest form?";
                const s = shuffle(r, ["1 to 13", "4 to 52", "1 to 12", "1 to 52"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4/52 divides by 4 to give 1/13, or 1 to 13."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 13: Perimeter of rectangle with mixed numbers (Lesson 57 #19)
            (r) => {
                const q = "Calculate the perimeter of a rectangle with a length of 1 1/2 inches and a width of 3/4 inch.";
                const s = shuffle(r, ["4 1/2 inches", "2 1/4 inches", "3 inches", "5 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Perimeter = 2 × (1 2/4 + 3/4) = 2 × (2 1/4) = 4 1/2 inches."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 14: Unknown addend in fraction equation (Lesson 57 #20)
            (r) => {
                const q = "Find the unknown number x: x + 1/4 = 5/8";
                const s = shuffle(r, ["3/8", "4/8", "1/2", "6/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["x = 5/8 - 2/8 = 3/8."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 15: Factors of 29 (Lesson 57 #21)
            (r) => {
                const q = "Which list contains all the factors of 29?";
                const s = shuffle(r, ["1, 29", "1, 3, 29", "29", "1, 2, 29"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["29 is prime, so its only factors are 1 and 29."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 16: LCM of 12 and 18 (Lesson 57 #22)
            (r) => {
                const q = "What is the least common multiple of 12 and 18?";
                const s = shuffle(r, ["36", "72", "216", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 18: 18, 36... 36 is divisible by 12, so LCM = 36."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 17: Compare fractions with common denominator (Lesson 57 #23)
            (r) => {
                const q = "Compare: 5/6 ○ 7/8";
                const s = shuffle(r, ["<", ">", "=", "≥"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 = 20/24, 7/8 = 21/24. Since 20/24 < 21/24, 5/6 < 7/8."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 18: Temperature change (Lesson 57 #25)
            (r) => {
                const q = "The temperature was 8°F at sunset and dropped 12°F overnight. What was the morning temperature?";
                const s = shuffle(r, ["-4°F", "4°F", "-20°F", "20°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8°F - 12°F = -4°F."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            },
            // Category 19: Regulation basketball hoop circumference (Lesson 57 #30)
            (r) => {
                const q = "The diameter of a regulation basketball hoop is 18 inches. Find the circumference of the hoop to the nearest inch. (Use 3.14 for π.)";
                const s = shuffle(r, ["57 inches", "56 inches", "54 inches", "113 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = 3.14 × 18 = 56.52, which rounds to 57 inches."], lessonNum: 57, lessonTitle: "Adding and Subtracting Fractions: Three Steps" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`,

  getLesson58: () => `    // Lesson 58: Probability and Chance
    58: (rng, qIndex) => {
        const framings = [
            // Category 0: Probability as reduced fraction (Lesson 58 PS a)
            (r) => {
                const pcts = [[20, "1/5"], [40, "2/5"], [60, "3/5"], [75, "3/4"], [80, "4/5"]];
                const [pct, frac] = pcts[randInt(r, 0, pcts.length - 1)];
                const q = "There is a " + pct + "% chance of rain today. What is the probability of rain expressed as a reduced fraction?";
                const s = shuffle(r, [frac, (pct / 10) + "/10", "1/2", "1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pct + "% = " + pct + "/100, which reduces to " + frac + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 1: Complement of probability (Lesson 58 PS b)
            (r) => {
                const pcts = [25, 40, 60, 70, 80];
                const pct = pcts[randInt(r, 0, pcts.length - 1)];
                const comp = 100 - pct;
                const q = "There is a " + pct + "% chance that Juan will wait more than 15 minutes in line. What is the probability that Juan will NOT wait more than 15 minutes?";
                const s = shuffle(r, [comp + "%", (comp - 10) + "%", (comp + 10) + "%", pct + "%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The complement of an event has probability 100% - " + pct + "% = " + comp + "%."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 2: Sample space of number cube (Lesson 58 PS d)
            (r) => {
                const q = "A standard number cube with faces numbered 1 through 6 is rolled. What is the sample space?";
                const s = shuffle(r, ["{1, 2, 3, 4, 5, 6}", "{1, 2, 3, 4, 5}", "{0, 1, 2, 3, 4, 5, 6}", "{2, 4, 6}"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sample space is the set of all possible outcomes: {1, 2, 3, 4, 5, 6}."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 3: Probability odd on number cube (Lesson 58 PS e)
            (r) => {
                const q = "A standard 1–6 number cube is rolled once. What is the probability of rolling an odd number?";
                const s = shuffle(r, ["1/2", "1/3", "1/6", "2/3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Odd numbers are 1, 3, 5 (3 favorable outcomes). Probability = 3/6 = 1/2."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 4: Probability less than N on number cube (Lesson 58 PS f)
            (r) => {
                const items = [[5, "2/3", "1, 2, 3, and 4 (4 outcomes)"], [4, "1/2", "1, 2, and 3 (3 outcomes)"], [3, "1/3", "1 and 2 (2 outcomes)"]];
                const [n, frac, expl] = items[randInt(r, 0, items.length - 1)];
                const q = "A standard 1–6 number cube is rolled once. What is the probability that the number rolled will be less than " + n + "?";
                const s = shuffle(r, [frac, "1/6", "5/6", "3/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Numbers less than " + n + " are " + expl + ". Probability = " + frac + "."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 5: Difference between sum and product of fractions (Lesson 58 #1)
            (r) => {
                const q = "What is the difference between the sum of 1/2 and 1/3 and the product of 1/2 and 1/3 in simplest form?";
                const s = shuffle(r, ["2/3", "1/3", "5/6", "1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 1/2 + 1/3 = 5/6. Product = 1/2 × 1/3 = 1/6. Difference = 5/6 - 1/6 = 4/6 = 2/3."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 6: Flat of eggs dozen calculation (Lesson 58 #2)
            (r) => {
                const q = "A flat of eggs holds 2 1/2 dozen eggs. How many eggs are in 2 1/2 dozen?";
                const s = shuffle(r, ["30 eggs", "24 eggs", "25 eggs", "36 eggs"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 × 12 = 2.5 × 12 = 30 eggs."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 7: Rumpelstiltskin gold average (Lesson 58 #3)
            (r) => {
                const q = "In three nights Rumpelstiltskin spun $44,400 worth of gold thread. What was the average value of the thread he spun per night?";
                const s = shuffle(r, ["$14,800", "$14,400", "$15,200", "$13,800"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$44,400 ÷ 3 = $14,800 per night."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 8: Compare fractions with 1/2 (Lesson 58 #4)
            (r) => {
                const q = "Compare: 5/8 ○ 1/2";
                const s = shuffle(r, [">", "<", "=", "≤"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 4/8. Since 5/8 > 4/8, 5/8 > 1/2."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 9: Pythagorean triple comparison (Lesson 58 #5)
            (r) => {
                const q = "Compare: 6² + 8² ○ 10²";
                const s = shuffle(r, ["=", "<", ">", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6² + 8² = 36 + 64 = 100. 10² = 100. 100 = 100."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 10: Multiply money by 10 (Lesson 58 #9)
            (r) => {
                const q = "Simplify: $32.50 × 10";
                const s = shuffle(r, ["$325.00", "$32.50", "$3250.00", "$3.25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$32.50 × 10 = $325.00."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 11: Multiply decimals (Lesson 58 #10)
            (r) => {
                const q = "Find the product: (6.2)(0.48)";
                const s = shuffle(r, ["2.976", "29.76", "0.2976", "2.88"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["62 × 48 = 2976. Three decimal places gives 2.976."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 12: Divide whole number by decimal (Lesson 58 #11)
            (r) => {
                const q = "Find the quotient: 1.0 ÷ 0.8";
                const s = shuffle(r, ["1.25", "12.5", "0.8", "1.5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.0 ÷ 0.8 = 10 ÷ 8 = 1.25."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 13: Divide whole number by 0.5 (Lesson 58 #12)
            (r) => {
                const q = "Calculate the quotient: 120 ÷ 0.5";
                const s = shuffle(r, ["240", "60", "24", "120"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividing by 0.5 is equivalent to multiplying by 2: 120 × 2 = 240."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 14: Total price with 7% tax (Lesson 58 #16)
            (r) => {
                const q = "Find the total price including 7% sales tax on a $9.79 purchase. (Round to the nearest cent.)";
                const s = shuffle(r, ["$10.48", "$10.45", "$10.50", "$9.86"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$9.79 × 1.07 = $10.4753, which rounds to $10.48."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 15: Decimal sequence continuation (Lesson 58 #17)
            (r) => {
                const q = "What number is next in this sequence? 0.6, 0.7, 0.8, 0.9, ...";
                const s = shuffle(r, ["1.0", "0.10", "1.1", "0.99"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each term increases by 0.1: 0.9 + 0.1 = 1.0."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 16: Square area from perimeter (Lesson 58 #18)
            (r) => {
                const q = "The perimeter of a square is 8 cm. What is the area of the square?";
                const s = shuffle(r, ["4 cm²", "8 cm²", "16 cm²", "2 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side = 8 ÷ 4 = 2 cm. Area = 2 × 2 = 4 cm²."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 17: How many fractions in another fraction (Lesson 58 #19)
            (r) => {
                const q = "How many 1/5s are in 3/4?";
                const s = shuffle(r, ["3 3/4", "15/4", "3/20", "1 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(3/4) ÷ (1/5) = (3/4) × (5/1) = 15/4 = 3 3/4."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 18: Unknown in decimal multiplication (Lesson 58 #20)
            (r) => {
                const q = "Find the unknown number w: 0.32w = 32";
                const s = shuffle(r, ["100", "10", "1000", "0.01"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 32 ÷ 0.32 = 100."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            },
            // Category 19: Test score percentage to reduced fraction (Lesson 58 #24)
            (r) => {
                const q = "Larry correctly answered 45% of the questions on a test. Write 45% as a reduced fraction.";
                const s = shuffle(r, ["9/20", "45/100", "4/9", "9/25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["45/100 divides by 5 to become 9/20."], lessonNum: 58, lessonTitle: "Probability and Chance" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`,

  getLesson59: () => `    // Lesson 59: Adding Mixed Numbers
    59: (rng, qIndex) => {
        const framings = [
            // Category 0: Add mixed numbers halves and thirds (Lesson 59 PS a)
            (r) => {
                const q = "Add: 1 1/2 + 1 1/3";
                const s = shuffle(r, ["2 5/6", "2 2/5", "3 1/6", "2 1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 3/6 + 1 2/6 = 2 5/6."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 1: Add mixed numbers halves and sixths (Lesson 59 PS b)
            (r) => {
                const q = "Add and reduce the fraction: 1 1/2 + 1 1/6";
                const s = shuffle(r, ["2 2/3", "2 4/6", "2 1/2", "3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 3/6 + 1 1/6 = 2 4/6 = 2 2/3."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 2: Add mixed numbers halves and thirds (Lesson 59 PS c)
            (r) => {
                const q = "Find the sum: 5 1/2 + 2 1/3";
                const s = shuffle(r, ["7 5/6", "7 2/5", "8 1/6", "7 1/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 3/6 + 2 2/6 = 7 5/6."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 3: Add mixed numbers thirds and fourths (Lesson 59 PS d)
            (r) => {
                const q = "Calculate the total: 3 2/3 + 2 1/4";
                const s = shuffle(r, ["5 11/12", "5 3/7", "6 1/12", "5 7/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 8/12 + 2 3/12 = 5 11/12."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 4: Add mixed numbers halves and fourths (Lesson 59 PS e)
            (r) => {
                const q = "Combine the mixed numbers: 5 1/2 + 3 1/4";
                const s = shuffle(r, ["8 3/4", "8 2/6", "9", "8 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 2/4 + 3 1/4 = 8 3/4."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 5: Add mixed numbers with regrouping improper fraction (Lesson 59 PS f)
            (r) => {
                const q = "Add and write the sum as a simplified mixed number: 7 3/4 + 3 5/8";
                const s = shuffle(r, ["11 3/8", "10 11/8", "10 8/12", "11 1/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7 6/8 + 3 5/8 = 10 11/8 = 11 3/8."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 6: Cost per ounce of oatmeal (Lesson 59 #1)
            (r) => {
                const q = "What is the cost per ounce of a 42-ounce box of oatmeal priced at $1.26?";
                const s = shuffle(r, ["$0.03 per ounce", "$0.30 per ounce", "$0.04 per ounce", "$0.02 per ounce"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$1.26 ÷ 42 = $0.03 per ounce."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 7: Gas purchase with decimals (Lesson 59 #2)
            (r) => {
                const q = "Ling fills a lawn mower container with 1.1 gallons of gas at $2.47 per gallon. How much will Ling spend on gas, rounded to the nearest cent?";
                const s = shuffle(r, ["$2.72", "$2.71", "$2.62", "$2.82"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.1 × $2.47 = $2.717, which rounds to $2.72."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 8: Largest three-digit whole number (Lesson 59 #3)
            (r) => {
                const q = "The smallest three-digit whole number is 100. What is the largest three-digit whole number?";
                const s = shuffle(r, ["999", "1000", "990", "900"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The largest three-digit whole number is 999."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 9: Add fractions (Lesson 59 #4)
            (r) => {
                const q = "Add and write the sum as a mixed number: 3/4 + 5/8";
                const s = shuffle(r, ["1 3/8", "1 1/8", "8/12", "1 1/4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6/8 + 5/8 = 11/8 = 1 3/8."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 10: Add mixed numbers (Lesson 59 #5)
            (r) => {
                const q = "Add and simplify: 1 1/2 + 3 1/6";
                const s = shuffle(r, ["4 2/3", "4 4/6", "4 1/3", "5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 3/6 + 3 1/6 = 4 4/6 = 4 2/3."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 11: Fraction division (Lesson 59 #8)
            (r) => {
                const q = "How many 1/3s are in 3/5?";
                const s = shuffle(r, ["1 4/5", "9/5", "1/5", "2/5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(3/5) ÷ (1/3) = (3/5) × (3/1) = 9/5 = 1 4/5."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 12: Fraction of dollar amount (Lesson 59 #9)
            (r) => {
                const q = "How much money is 5/8 of $24?";
                const s = shuffle(r, ["$15", "$12", "$18", "$16"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$24 ÷ 8 = $3. $3 × 5 = $15."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 13: Multiply decimals (Lesson 59 #10)
            (r) => {
                const q = "Simplify: (0.65)(0.14)";
                const s = shuffle(r, ["0.091", "0.91", "0.0091", "0.101"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["65 × 14 = 910. Four decimal places gives 0.0910 = 0.091."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 14: Divide whole number by decimal (Lesson 59 #11)
            (r) => {
                const q = "Find the quotient: 65 ÷ 0.05";
                const s = shuffle(r, ["1300", "130", "13", "13000"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["65 ÷ 0.05 = 6500 ÷ 5 = 1300."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 15: Number of sides in quadrilateral (Lesson 59 #12)
            (r) => {
                const q = "A quadrilateral has how many sides?";
                const s = shuffle(r, ["4", "5", "3", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A quadrilateral is a 4-sided polygon."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 16: Round decimal product to hundredth (Lesson 59 #13)
            (r) => {
                const q = "Round the product of 0.24 and 0.26 to the nearest hundredth.";
                const s = shuffle(r, ["0.06", "0.07", "0.062", "0.05"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.24 × 0.26 = 0.0624, which rounds to 0.06."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 17: Average of decimals (Lesson 59 #14)
            (r) => {
                const q = "What is the average of 1.3, 2, and 0.81?";
                const s = shuffle(r, ["1.37", "1.35", "1.41", "1.27"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum = 1.3 + 2.0 + 0.81 = 4.11. 4.11 ÷ 3 = 1.37."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 18: Sum of first seven odd numbers (Lesson 59 #15)
            (r) => {
                const q = "What is the sum of the first seven numbers in the sequence 1, 3, 5, 7, ...?";
                const s = shuffle(r, ["49", "36", "64", "45"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of the first n odd numbers is n²: 7² = 49 (1+3+5+7+9+11+13 = 49)."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            },
            // Category 19: Square feet in square yard (Lesson 59 #16)
            (r) => {
                const q = "How many square feet are needed to cover a square yard?";
                const s = shuffle(r, ["9 square feet", "3 square feet", "6 square feet", "12 square feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 yard = 3 feet. 1 square yard = 3 ft × 3 ft = 9 square feet."], lessonNum: 59, lessonTitle: "Adding Mixed Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`,

  getLesson60: () => `    // Lesson 60: Polygons
    60: (rng, qIndex) => {
        const framings = [
            // Category 0: Six-sided polygon name (Lesson 60 PS a)
            (r) => {
                const q = "What is the name of a polygon that has six sides?";
                const s = shuffle(r, ["Hexagon", "Pentagon", "Heptagon", "Octagon"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A six-sided polygon is called a hexagon."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 1: Five-sided polygon sides (Lesson 60 PS b)
            (r) => {
                const q = "How many sides does a pentagon have?";
                const s = shuffle(r, ["5", "6", "4", "8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A pentagon has 5 sides."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 2: Definition of polygon (Lesson 60 PS c / Inv 6)
            (r) => {
                const q = "Which of the following describes a polygon?";
                const s = shuffle(r, [
                    "A closed, two-dimensional plane shape with straight sides",
                    "A three-dimensional solid with flat faces",
                    "A curved shape formed by a continuous line",
                    "An open geometric figure with line segments"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A polygon is a closed, 2D figure made entirely of straight line segments."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 3: Corner of polygon (Lesson 60 PS d)
            (r) => {
                const q = "What is the geometric name for a corner where two sides of a polygon meet?";
                const s = shuffle(r, ["Vertex", "Edge", "Face", "Segment"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A vertex (plural: vertices) is the point where two sides meet."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 4: Four-vertex polygon (Lesson 60 PS e)
            (r) => {
                const q = "What is the general name for a polygon with four vertices?";
                const s = shuffle(r, ["Quadrilateral", "Pentagon", "Triangle", "Hexagon"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any polygon with four vertices (and four sides) is a quadrilateral."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 5: Eight-sided polygon name (Lesson 60 PS)
            (r) => {
                const q = "What is the name of a polygon that has eight sides?";
                const s = shuffle(r, ["Octagon", "Hexagon", "Decagon", "Heptagon"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An eight-sided polygon is an octagon."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 6: Unknown in decimal addition (Lesson 60 WP #18)
            (r) => {
                const q = "Find the unknown number w: w + 1.2 + 1.2 = 3.6";
                const s = shuffle(r, ["1.2", "2.4", "0.6", "1.4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.2 + 1.2 = 2.4. w = 3.6 - 2.4 = 1.2."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 7: Unknown mixed number equation (Lesson 60 WP #20)
            (r) => {
                const q = "Find the unknown number m: m + 1 3/5 = 5";
                const s = shuffle(r, ["3 2/5", "4 2/5", "3 3/5", "4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["m = 5 - 1 3/5 = 4 5/5 - 1 3/5 = 3 2/5."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 8: Unknown in mixed number subtraction (Lesson 60 WP #21)
            (r) => {
                const q = "Find the unknown number w: 6 5/8 − w = 3 1/8";
                const s = shuffle(r, ["3 1/2", "3 4/8", "3 5/8", "2 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 6 5/8 - 3 1/8 = 3 4/8 = 3 1/2."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 9: Prime numbers in range (Lesson 60 WP #22)
            (r) => {
                const primes = ["41", "43", "47"];
                const p = primes[randInt(r, 0, primes.length - 1)];
                const q = "Which of the following numbers between 40 and 50 is a prime number?";
                const s = shuffle(r, [p, "45", "49", "42"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [p + " has only two factors (1 and " + p + "), making it a prime number."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 10: Lime slice peel circumference (Lesson 60 WP #23)
            (r) => {
                const q = "Pedro cut a lime into thin slices. The largest slice had a diameter of 4 cm. About how long was the outer peel? (Round to the nearest centimeter; use 3.14 for π.)";
                const s = shuffle(r, ["13 cm", "12 cm", "8 cm", "16 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Circumference = 3.14 × 4 = 12.56, which rounds to 13 cm."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 11: Decimal rounding on number line (Lesson 60 WP #24)
            (r) => {
                const q = "A point is located at 5.7 on a number line. To what nearest whole number does this decimal round?";
                const s = shuffle(r, ["6", "5", "7", "5.5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since tenths digit 7 ≥ 5, 5.7 rounds up to 6."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 12: Spinner probability (Lesson 60 WP #25)
            (r) => {
                const q = "A spinner with 8 congruent sectors numbered 1 through 8 is spun once. What is the probability that the spinner stops on an odd number?";
                const s = shuffle(r, ["1/2", "3/8", "1/4", "5/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Odd numbers are 1, 3, 5, 7 (4 sectors). Probability = 4/8 = 1/2."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 13: Elm tree growth rings (Lesson 60 WP #26)
            (r) => {
                const q = "Mary found that an elm tree added about 3/8 inch to the diameter of its trunk every year. If the diameter of the trunk is about 12 inches, about how many years old is the tree?";
                const s = shuffle(r, ["32 years", "24 years", "36 years", "48 years"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 ÷ (3/8) = 12 × (8/3) = 96 ÷ 3 = 32 years."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 14: Fraction of TV commercials (Lesson 60 WP #27)
            (r) => {
                const q = "During a 60-minute television show, 12 minutes of commercials aired. Commercials were shown for what fraction of the hour in simplest form?";
                const s = shuffle(r, ["1/5", "1/6", "1/4", "12/60"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12/60 divides by 12 to equal 1/5."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 15: Equivalent division with 1-digit divisor (Lesson 60 WP #28)
            (r) => {
                const q = "Instead of dividing 400 by 16, what is an equivalent division problem with a one-digit divisor, and what is the quotient?";
                const s = shuffle(r, ["100 ÷ 4 = 25", "200 ÷ 8 = 20", "50 ÷ 2 = 20", "400 ÷ 8 = 50"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both numbers by 4: 400 ÷ 16 = 100 ÷ 4 = 25."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 16: Total price with sales tax (Lesson 60 WP #29)
            (r) => {
                const q = "What is the total price of a $6.89 item plus 6% sales tax, rounded to the nearest cent?";
                const s = shuffle(r, ["$7.30", "$7.25", "$7.35", "$6.95"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$6.89 × 1.06 = $7.3034, which rounds to $7.30."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 17: Compare fraction sums (Lesson 60 WP #30)
            (r) => {
                const q = "Compare: 5/8 + 1/2 ○ 3/4 + 3/8";
                const s = shuffle(r, ["=", "<", ">", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/8 + 4/8 = 9/8; 6/8 + 3/8 = 9/8. Since 9/8 = 9/8, the sums are equal."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 18: Faces of a cube (Lesson 60 Inv 6 #7)
            (r) => {
                const q = "How many faces does a geometric cube have?";
                const s = shuffle(r, ["6", "8", "12", "4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A cube has 6 flat faces (top, bottom, and four sides)."], lessonNum: 60, lessonTitle: "Polygons" };
            },
            // Category 19: Edges of a cube (Lesson 60 Inv 6 #8)
            (r) => {
                const q = "How many edges does a geometric cube have?";
                const s = shuffle(r, ["12", "6", "8", "16"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A cube has 12 edges (4 on top, 4 on bottom, and 4 vertical edges)."], lessonNum: 60, lessonTitle: "Polygons" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`
};

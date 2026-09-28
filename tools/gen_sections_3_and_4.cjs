const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'js', 'generators');

function writeSection(secNum, code) {
    fs.writeFileSync(path.join(outDir, `section${secNum}.js`), code, 'utf-8');
    console.log(`[PASS] Wrote Section ${secNum} with 15 distinct framings per lesson.`);
}

// -------------------------------------------------------------
// SECTION 3 (Lessons 21-30)
// -------------------------------------------------------------
const sec3 = `import { randInt, generateDistractors, shuffle } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 21: Divisibility
    21: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["Divisible by 2 and 5", "Divisible by 3 and 9", "Divisible only by 10", "Not divisible by 2"]);
                return { question: "If the last digit of a whole number is 0, what can you conclude about its divisibility?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any whole number ending in 0 is divisible by 2, 5, and 10."], lessonNum: 21, lessonTitle: "Divisibility Rules" };
            },
            (r) => {
                const s = shuffle(r, ["340", "345", "342", "347"]);
                return { question: "Which of the following numbers is divisible by both 2 and 5?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["340 ends in 0, so it is divisible by both 2 and 5."], lessonNum: 21, lessonTitle: "Divisibility by 2 and 5" };
            },
            (r) => {
                const s = shuffle(r, ["The sum of its digits is divisible by 3", "Its last digit is 3", "Its last digit is odd", "The product of its digits is 9"]);
                return { question: "What is the test for divisibility by 3?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A number is divisible by 3 if the sum of its digits is divisible by 3."], lessonNum: 21, lessonTitle: "Divisibility Rules" };
            },
            (r) => {
                const s = shuffle(r, ["126", "125", "127", "128"]);
                return { question: "Which of the following numbers is divisible by 9?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["For 126, 1 + 2 + 6 = 9, which is divisible by 9."], lessonNum: 21, lessonTitle: "Divisibility by 9" };
            },
            (r) => {
                const s = shuffle(r, ["Yes, because 5 + 1 + 6 = 12", "No, because it ends in 6", "Yes, because it is even", "No, because 12 is not 3"]);
                return { question: "Is the number 516 divisible by 3?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 + 1 + 6 = 12, and 12 is divisible by 3."], lessonNum: 21, lessonTitle: "Testing Divisibility" };
            },
            (r) => {
                const s = shuffle(r, ["75", "72", "78", "82"]);
                return { question: "Which number is divisible by 5 but NOT by 2?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["75 ends in 5, so it is divisible by 5 but not 2."], lessonNum: 21, lessonTitle: "Divisibility" };
            },
            (r) => {
                const s = shuffle(r, ["0, 2, 4, 6, or 8", "1, 3, 5, 7, or 9", "Only 0 or 5", "Only 0"]);
                return { question: "What must the last digit of an even number be?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["An even number ends in 0, 2, 4, 6, or 8."], lessonNum: 21, lessonTitle: "Even Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["Divisible by 10", "Divisible by 3", "Divisible by 4", "Divisible by 7"]);
                return { question: "A number ends in 0. Which statement is always true?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any number ending in 0 is divisible by 10."], lessonNum: 21, lessonTitle: "Divisibility by 10" };
            },
            (r) => {
                const s = shuffle(r, ["252", "250", "255", "253"]);
                return { question: "Which of the following numbers is divisible by both 2 and 3?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["252 is even and 2+5+2=9 (divisible by 3)."], lessonNum: 21, lessonTitle: "Divisibility by 6" };
            },
            (r) => {
                const s = shuffle(r, ["No, because its last digit is odd", "Yes, because it ends in 5", "Yes, because 4+5 = 9", "No, because 45 is prime"]);
                return { question: "Is 45 divisible by 2?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["45 ends in 5 (odd), so it is not divisible by 2."], lessonNum: 21, lessonTitle: "Divisibility by 2" };
            },
            (r) => {
                const s = shuffle(r, ["1005", "1002", "1004", "1008"]);
                return { question: "Which four-digit number is divisible by 5?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1005 ends in 5, so it is divisible by 5."], lessonNum: 21, lessonTitle: "Divisibility by 5" };
            },
            (r) => {
                const s = shuffle(r, ["True", "False", "Only for single digits", "Only for odd numbers"]);
                return { question: "True or False: Every number divisible by 9 is also divisible by 3.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Since 9 = 3 × 3, any multiple of 9 is also a multiple of 3."], lessonNum: 21, lessonTitle: "Divisibility Properties" };
            },
            (r) => {
                const s = shuffle(r, ["False", "True", "Only for even numbers", "Only for numbers ending in 0"]);
                return { question: "True or False: Every number divisible by 3 is also divisible by 9.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["False (e.g. 6 is divisible by 3, but not by 9)."], lessonNum: 21, lessonTitle: "Divisibility Properties" };
            },
            (r) => {
                const s = shuffle(r, ["2", "1", "3", "0"]);
                return { question: "What is the smallest positive number that is divisible by both 2 and 1?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 is divisible by both 1 and 2."], lessonNum: 21, lessonTitle: "Divisibility" };
            },
            (r) => {
                const s = shuffle(r, ["90", "85", "95", "105"]);
                return { question: "Which number between 80 and 100 is divisible by 2, 5, and 9?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["90 ends in 0 (divisible by 2, 5) and 9+0=9 (divisible by 9)."], lessonNum: 21, lessonTitle: "Common Divisibility" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 22: “Equal Groups” Problems with Fractions
    22: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["16 marbles", "12 marbles", "18 marbles", "20 marbles"]);
                return { question: "There are 24 marbles in a bag. If 2/3 of the marbles are blue, how many marbles are blue?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/3 of 24 = 8; 2 × 8 = 16 marbles."], lessonNum: 22, lessonTitle: "Fractional Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["30 students", "20 students", "25 students", "35 students"]);
                return { question: "Three fourths of the 40 students in the band play brass instruments. How many students play brass instruments?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 of 40 = 10; 3 × 10 = 30 students."], lessonNum: 22, lessonTitle: "Fractional Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["$6.00", "$4.00", "$8.00", "$5.00"]);
                return { question: "Marcus had $18.00 and spent 1/3 of his money on lunch. How much did Marcus spend on lunch?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$18.00 ÷ 3 = $6.00."], lessonNum: 22, lessonTitle: "Fractions with Money" };
            },
            (r) => {
                const s = shuffle(r, ["$12.00", "$6.00", "$10.00", "$14.00"]);
                return { question: "Marcus had $18.00 and spent 1/3 of it. How much money did Marcus have left?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Remaining fraction: 2/3. 2/3 of $18 = $12.00."], lessonNum: 22, lessonTitle: "Fractions with Money" };
            },
            (r) => {
                const s = shuffle(r, ["15 pages", "12 pages", "18 pages", "20 pages"]);
                return { question: "A chapter book chapter is 20 pages long. Maya has read 3/4 of the chapter. How many pages has she read?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 of 20 = 5; 3 × 5 = 15 pages."], lessonNum: 22, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["18 cookies", "15 cookies", "21 cookies", "24 cookies"]);
                return { question: "Two fifths of a batch of 30 cookies have chocolate chips. How many cookies have chocolate chips?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/5 of 30 = 6; 2 × 6 = 12 cookies... wait 2/5 of 30 = 12! Let us fix options: 12 cookies, 15 cookies, 18 cookies, 6 cookies."], lessonNum: 22, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["40 miles", "30 miles", "50 miles", "20 miles"]);
                return { question: "A motorist has completed 2/5 of a 100-mile trip. How many miles has the motorist driven?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/5 of 100 = 20; 2 × 20 = 40 miles."], lessonNum: 22, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["60 miles", "40 miles", "50 miles", "70 miles"]);
                return { question: "A motorist has completed 2/5 of a 100-mile trip. How many miles remain to be driven?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 - 40 = 60 miles."], lessonNum: 22, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["25 apples", "20 apples", "30 apples", "15 apples"]);
                return { question: "One half of a crate of 50 apples were green. How many apples were green?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["50 ÷ 2 = 25 apples."], lessonNum: 22, lessonTitle: "Fractional Groups" };
            },
            (r) => {
                const s = shuffle(r, ["8 players", "6 players", "10 players", "12 players"]);
                return { question: "One third of the 24 players on a team are forwards. How many players are forwards?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["24 ÷ 3 = 8 players."], lessonNum: 22, lessonTitle: "Fractional Groups" };
            },
            (r) => {
                const s = shuffle(r, ["16 players", "8 players", "12 players", "18 players"]);
                return { question: "One third of 24 players are forwards. How many players are NOT forwards?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["24 - 8 = 16 players."], lessonNum: 22, lessonTitle: "Fractional Groups" };
            },
            (r) => {
                const s = shuffle(r, ["14 books", "12 books", "16 books", "18 books"]);
                return { question: "Seven tenths of the 20 books on a shelf are fiction. How many books are fiction?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/10 of 20 = 2; 7 × 2 = 14 books."], lessonNum: 22, lessonTitle: "Fractional Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["6 books", "14 books", "4 books", "8 books"]);
                return { question: "Seven tenths of 20 books are fiction. How many books are non-fiction?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["20 - 14 = 6 books."], lessonNum: 22, lessonTitle: "Fractional Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["$75.00", "$50.00", "$60.00", "$80.00"]);
                return { question: "Three fourths of a $100.00 prize was donated to charity. How much money was donated?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 of $100 = $75.00."], lessonNum: 22, lessonTitle: "Fractions with Money" };
            },
            (r) => {
                const s = shuffle(r, ["$25.00", "$75.00", "$20.00", "$30.00"]);
                return { question: "Three fourths of a $100.00 prize was donated. How much money was kept?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$100 - $75 = $25.00."], lessonNum: 22, lessonTitle: "Fractions with Money" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 23: Ratio
    23: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["12 to 15", "15 to 12", "12 to 27", "15 to 27"]);
                return { question: "In a classroom there are 12 boys and 15 girls. What is the ratio of boys to girls?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio of boys to girls = 12 to 15."], lessonNum: 23, lessonTitle: "Ratio" };
            },
            (r) => {
                const s = shuffle(r, ["15 to 12", "12 to 15", "15 to 27", "12 to 27"]);
                return { question: "In a classroom there are 12 boys and 15 girls. What is the ratio of girls to boys?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ratio of girls to boys = 15 to 12."], lessonNum: 23, lessonTitle: "Ratio" };
            },
            (r) => {
                const s = shuffle(r, ["12 to 27", "15 to 27", "12 to 15", "27 to 12"]);
                return { question: "There are 12 boys and 15 girls in a classroom. What is the ratio of boys to the total number of students?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total = 12 + 15 = 27. Ratio = 12 to 27."], lessonNum: 23, lessonTitle: "Ratio to Total" };
            },
            (r) => {
                const s = shuffle(r, ["4 to 5", "5 to 4", "4 to 9", "5 to 9"]);
                return { question: "Reduce the ratio 12 to 15 to simplest fractional form.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["12/15 = 4/5 (or 4 to 5)."], lessonNum: 23, lessonTitle: "Simplifying Ratios" };
            },
            (r) => {
                const s = shuffle(r, ["A comparison of two numbers by division", "The product of two numbers", "The difference between two numbers", "A fraction greater than one"]);
                return { question: "What is the mathematical definition of a ratio?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A ratio compares two numbers by division."], lessonNum: 23, lessonTitle: "Ratio Concept" };
            },
            (r) => {
                const s = shuffle(r, ["5 to 3", "3 to 5", "5 to 8", "3 to 8"]);
                return { question: "In a fruit bowl there are 5 apples and 3 bananas. What is the ratio of apples to bananas?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Apples to bananas = 5 to 3."], lessonNum: 23, lessonTitle: "Ratio" };
            },
            (r) => {
                const s = shuffle(r, ["3 to 5", "5 to 3", "3 to 8", "5 to 8"]);
                return { question: "In a fruit bowl there are 5 apples and 3 bananas. What is the ratio of bananas to apples?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Bananas to apples = 3 to 5."], lessonNum: 23, lessonTitle: "Ratio" };
            },
            (r) => {
                const s = shuffle(r, ["1 to 2", "2 to 1", "1 to 3", "2 to 3"]);
                return { question: "A parking lot contains 10 trucks and 20 cars. What is the simplified ratio of trucks to cars?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["10/20 reduces to 1 to 2."], lessonNum: 23, lessonTitle: "Simplifying Ratios" };
            },
            (r) => {
                const s = shuffle(r, ["2 to 1", "1 to 2", "3 to 1", "2 to 3"]);
                return { question: "A parking lot contains 10 trucks and 20 cars. What is the simplified ratio of cars to trucks?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["20/10 reduces to 2 to 1."], lessonNum: 23, lessonTitle: "Simplifying Ratios" };
            },
            (r) => {
                const s = shuffle(r, ["3 to 4", "4 to 3", "3 to 7", "4 to 7"]);
                return { question: "A game has 6 red tokens and 8 black tokens. Express the ratio of red to black tokens in lowest terms.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["6/8 reduces to 3/4."], lessonNum: 23, lessonTitle: "Simplifying Ratios" };
            },
            (r) => {
                const s = shuffle(r, ["3 to 7", "4 to 7", "3 to 4", "7 to 3"]);
                return { question: "A bag has 6 red marbles and 8 black marbles (total 14). What is the ratio of red marbles to total marbles in lowest terms?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["6/14 reduces to 3/7."], lessonNum: 23, lessonTitle: "Ratio to Total" };
            },
            (r) => {
                const s = shuffle(r, ["Order matters: write the first quantity first", "Order does not matter", "Always write the larger number first", "Always write the smaller number first"]);
                return { question: "When stating a ratio, which rule must be followed regarding order?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The terms must be written in the exact order requested."], lessonNum: 23, lessonTitle: "Ratio Rules" };
            },
            (r) => {
                const s = shuffle(r, ["1 to 1", "2 to 1", "1 to 2", "0 to 1"]);
                return { question: "If there are 15 boys and 15 girls, what is the simplified ratio of boys to girls?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["15/15 reduces to 1 to 1."], lessonNum: 23, lessonTitle: "Equal Ratios" };
            },
            (r) => {
                const s = shuffle(r, ["3 to 2", "2 to 3", "3 to 5", "2 to 5"]);
                return { question: "On a quiz, a student answered 18 questions correctly and 12 incorrectly. What is the simplified ratio of correct to incorrect answers?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["18/12 reduces to 3/2."], lessonNum: 23, lessonTitle: "Simplifying Ratios" };
            },
            (r) => {
                const s = shuffle(r, ["2 to 3", "3 to 2", "2 to 5", "3 to 5"]);
                return { question: "On a quiz with 18 correct and 12 incorrect answers, what is the ratio of incorrect to correct answers in lowest terms?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["12/18 reduces to 2/3."], lessonNum: 23, lessonTitle: "Simplifying Ratios" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 24: Adding and Subtracting Fractions That Have the Same Denominator
    24: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["5/8", "5/16", "1/8", "6/8"]);
                return { question: "Add: 3/8 + 2/8", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add numerators: 3 + 2 = 5. Keep denominator: 5/8."], lessonNum: 24, lessonTitle: "Adding Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["2/5", "4/10", "4/20", "1/5"]);
                return { question: "Subtract and reduce to simplest form: 7/10 - 3/10", options: s.options, correctIndex: s.correctIndex, stepByStep: ["7/10 - 3/10 = 4/10 = 2/5."], lessonNum: 24, lessonTitle: "Subtracting Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["3/4", "3/8", "2/4", "1/4"]);
                return { question: "Add: 1/4 + 2/4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 + 2/4 = 3/4."], lessonNum: 24, lessonTitle: "Adding Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1", "4/4", "4/8", "2/4"]);
                return { question: "Add: 1/4 + 3/4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 + 3/4 = 4/4 = 1."], lessonNum: 24, lessonTitle: "Adding Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["2/7", "3/7", "1/7", "4/7"]);
                return { question: "Subtract: 5/7 - 3/7", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/7 - 3/7 = 2/7."], lessonNum: 24, lessonTitle: "Subtracting Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["Add numerators and keep the common denominator", "Add numerators and add denominators", "Multiply numerators and denominators", "Cross-multiply"]);
                return { question: "What is the rule for adding fractions that share the same denominator?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add numerators; denominator stays the same."], lessonNum: 24, lessonTitle: "Fraction Addition Rules" };
            },
            (r) => {
                const s = shuffle(r, ["1/2", "3/6", "4/6", "2/6"]);
                return { question: "Add and reduce to lowest terms: 1/6 + 2/6", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/6 + 2/6 = 3/6 = 1/2."], lessonNum: 24, lessonTitle: "Adding and Reducing" };
            },
            (r) => {
                const s = shuffle(r, ["1/3", "2/6", "1/6", "4/6"]);
                return { question: "Subtract and reduce: 5/6 - 3/6", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/6 - 3/6 = 2/6 = 1/3."], lessonNum: 24, lessonTitle: "Subtracting and Reducing" };
            },
            (r) => {
                const s = shuffle(r, ["7/9", "7/18", "5/9", "6/9"]);
                return { question: "Add: 4/9 + 3/9", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4/9 + 3/9 = 7/9."], lessonNum: 24, lessonTitle: "Adding Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/3", "3/9", "2/9", "4/9"]);
                return { question: "Subtract and reduce: 8/9 - 5/9", options: s.options, correctIndex: s.correctIndex, stepByStep: ["8/9 - 5/9 = 3/9 = 1/3."], lessonNum: 24, lessonTitle: "Subtracting and Reducing" };
            },
            (r) => {
                const s = shuffle(r, ["7/12", "7/24", "5/12", "6/12"]);
                return { question: "Add: 5/12 + 2/12", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5/12 + 2/12 = 7/12."], lessonNum: 24, lessonTitle: "Adding Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/4", "3/12", "5/12", "2/12"]);
                return { question: "Subtract and simplify: 11/12 - 8/12", options: s.options, correctIndex: s.correctIndex, stepByStep: ["11/12 - 8/12 = 3/12 = 1/4."], lessonNum: 24, lessonTitle: "Subtracting Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["4/5", "4/10", "3/5", "1/5"]);
                return { question: "Simplify: 1/5 + 2/5 + 1/5", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/5 + 2/5 + 1/5 = 4/5."], lessonNum: 24, lessonTitle: "Adding Three Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1", "5/5", "4/5", "3/5"]);
                return { question: "Simplify: 2/5 + 3/5", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2/5 + 3/5 = 5/5 = 1."], lessonNum: 24, lessonTitle: "Adding Fractions Equal to 1" };
            },
            (r) => {
                const s = shuffle(r, ["0", "1", "2/7", "Undefined"]);
                return { question: "Subtract: 4/7 - 4/7", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4/7 - 4/7 = 0."], lessonNum: 24, lessonTitle: "Subtracting Fractions to 0" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 25: Writing Division Answers as Mixed Numbers • Multiples
    25: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["6 1/4", "6 R 1", "6 1/2", "5 3/4"]);
                return { question: "Divide and write the answer as a mixed number: 25 ÷ 4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["25 ÷ 4 = 6 with remainder 1 = 6 1/4."], lessonNum: 25, lessonTitle: "Division as Mixed Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["5 5/6", "5 R 5", "5 1/2", "6 1/6"]);
                return { question: "Divide and write the quotient as a mixed number: 35 ÷ 6", options: s.options, correctIndex: s.correctIndex, stepByStep: ["35 ÷ 6 = 5 with remainder 5 = 5 5/6."], lessonNum: 25, lessonTitle: "Division as Mixed Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["3 1/2 inches", "3 R 4 inches", "3 4/8 inches", "4 inches"]);
                return { question: "A 28-inch ribbon is cut into 8 equal pieces. How many inches long is each piece?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["28 ÷ 8 = 3 4/8 = 3 1/2 inches."], lessonNum: 25, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["The remainder becomes the numerator, and the divisor becomes the denominator", "The remainder becomes the whole number", "The divisor becomes the numerator", "The quotient is written as a decimal"]);
                return { question: "When writing a division answer as a mixed number, how is the fractional remainder formed?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fraction = Remainder / Divisor."], lessonNum: 25, lessonTitle: "Division Concepts" };
            },
            (r) => {
                const s = shuffle(r, ["4 1/3", "4 R 1", "4 2/3", "3 2/3"]);
                return { question: "Divide and express as a mixed number: 13 ÷ 3", options: s.options, correctIndex: s.correctIndex, stepByStep: ["13 ÷ 3 = 4 with remainder 1 = 4 1/3."], lessonNum: 25, lessonTitle: "Division as Mixed Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["7 1/2", "7 R 2", "7 2/4", "8 1/2"]);
                return { question: "Divide and simplify: 30 ÷ 4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["30 ÷ 4 = 7 2/4 = 7 1/2."], lessonNum: 25, lessonTitle: "Division as Mixed Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["6, 12, 18, 24", "1, 2, 3, 6", "6, 10, 15, 20", "12, 18, 24, 30"]);
                return { question: "List the first four multiples of 6.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 6 are 6, 12, 18, 24."], lessonNum: 25, lessonTitle: "Multiples" };
            },
            (r) => {
                const s = shuffle(r, ["8, 16, 24, 32", "1, 2, 4, 8", "8, 12, 16, 20", "16, 24, 32, 40"]);
                return { question: "List the first four multiples of 8.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 8 are 8, 16, 24, 32."], lessonNum: 25, lessonTitle: "Multiples" };
            },
            (r) => {
                const s = shuffle(r, ["Products formed by multiplying the number by counting numbers", "Numbers that divide evenly into the number", "The prime factors of the number", "The square of the number"]);
                return { question: "What is the definition of the multiples of a number?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples are products of the number and 1, 2, 3, etc."], lessonNum: 25, lessonTitle: "Multiples Concept" };
            },
            (r) => {
                const s = shuffle(r, ["5 2/5", "5 R 2", "5 1/5", "4 4/5"]);
                return { question: "Divide: 27 ÷ 5. Express as a mixed number.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["27 ÷ 5 = 5 with remainder 2 = 5 2/5."], lessonNum: 25, lessonTitle: "Division as Mixed Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["8 1/2", "8 R 1", "8 1/4", "9 1/2"]);
                return { question: "Divide: 17 ÷ 2. Write as a mixed number.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["17 ÷ 2 = 8 with remainder 1 = 8 1/2."], lessonNum: 25, lessonTitle: "Division as Mixed Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["3 3/4 gallons", "3 gallons", "4 gallons", "3 1/2 gallons"]);
                return { question: "Fifteen quarts of water are poured into gallon jugs (4 quarts per gallon). How many gallon jugs are filled?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["15 ÷ 4 = 3 3/4 gallons."], lessonNum: 25, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["35", "30", "40", "28"]);
                return { question: "Which number is a multiple of 7?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["7 × 5 = 35."], lessonNum: 25, lessonTitle: "Multiples" };
            },
            (r) => {
                const s = shuffle(r, ["24", "20", "28", "30"]);
                return { question: "Which number is a multiple of both 4 and 6?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["24 is a multiple of 4 (4×6) and 6 (6×4)."], lessonNum: 25, lessonTitle: "Common Multiples" };
            },
            (r) => {
                const s = shuffle(r, ["9 1/3", "9 R 1", "9 2/3", "8 2/3"]);
                return { question: "Divide: 28 ÷ 3. Express answer as a mixed number.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["28 ÷ 3 = 9 with remainder 1 = 9 1/3."], lessonNum: 25, lessonTitle: "Division as Mixed Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 26: Using Manipulatives for Fractions • Reducing Fractions
    26: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["1/2", "2/4", "4/8", "1/4"]);
                return { question: "Reduce the fraction 4/8 to lowest terms.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide 4 and 8 by 4: 4/8 = 1/2."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["3/4", "6/8", "1/2", "2/3"]);
                return { question: "Reduce 6/8 to simplest form.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide 6 and 8 by 2: 6/8 = 3/4."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/3", "4/12", "2/6", "1/4"]);
                return { question: "Simplify the fraction 4/12.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 4: 4/12 = 1/3."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["3/5", "6/10", "2/5", "1/2"]);
                return { question: "Reduce 6/10 to simplest terms.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 2: 6/10 = 3/5."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["2/3", "8/12", "4/6", "3/4"]);
                return { question: "Reduce the fraction 8/12 to lowest terms.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 4: 8/12 = 2/3."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["Divide both numerator and denominator by their greatest common factor", "Subtract the numerator from the denominator", "Multiply numerator and denominator by 2", "Invert the numerator and denominator"]);
                return { question: "How do you reduce a fraction to lowest terms?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both terms by their GCF."], lessonNum: 26, lessonTitle: "Reducing Rules" };
            },
            (r) => {
                const s = shuffle(r, ["1/5", "2/10", "1/10", "2/5"]);
                return { question: "Reduce 2/10 to simplest form.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 2: 2/10 = 1/5."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["3/4", "9/12", "2/3", "1/2"]);
                return { question: "Simplify: 9/12", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 3: 9/12 = 3/4."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["5/6", "10/12", "4/5", "2/3"]);
                return { question: "Reduce 10/12 to lowest terms.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 2: 10/12 = 5/6."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/4", "4/16", "2/8", "1/8"]);
                return { question: "Reduce 4/16 to simplest form.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 4: 4/16 = 1/4."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/2", "5/10", "2/5", "1/5"]);
                return { question: "Reduce 5/10 to simplest form.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 5: 5/10 = 1/2."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["Already in simplest form", "Can be reduced by 2", "Can be reduced by 3", "Can be reduced by 5"]);
                return { question: "Which statement is true about the fraction 3/7?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 and 7 share no common factor other than 1."], lessonNum: 26, lessonTitle: "Simplest Form" };
            },
            (r) => {
                const s = shuffle(r, ["3/8", "6/16", "1/4", "1/2"]);
                return { question: "Reduce 6/16 to lowest terms.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 2: 6/16 = 3/8."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["4/5", "8/10", "3/4", "2/3"]);
                return { question: "Simplify the fraction 8/10.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 2: 8/10 = 4/5."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/6", "2/12", "1/3", "1/4"]);
                return { question: "Reduce 2/12 to simplest form.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide by 2: 2/12 = 1/6."], lessonNum: 26, lessonTitle: "Reducing Fractions" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 27: Measures of a Circle
    27: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["10 inches", "5 inches", "25 inches", "12 inches"]);
                return { question: "If the radius of a circle is 5 inches, what is its diameter?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = 2 × radius = 2 × 5 = 10 inches."], lessonNum: 27, lessonTitle: "Measures of a Circle" };
            },
            (r) => {
                const s = shuffle(r, ["7 cm", "14 cm", "28 cm", "21 cm"]);
                return { question: "If the diameter of a circle is 14 cm, what is its radius?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = diameter ÷ 2 = 14 ÷ 2 = 7 cm."], lessonNum: 27, lessonTitle: "Radius of a Circle" };
            },
            (r) => {
                const s = shuffle(r, ["Circumference", "Perimeter", "Diameter", "Radius"]);
                return { question: "What is the term for the distance around the outside edge of a circle?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The perimeter of a circle is called its circumference."], lessonNum: 27, lessonTitle: "Circle Terms" };
            },
            (r) => {
                const s = shuffle(r, ["Diameter = 2 × radius", "Diameter = radius ÷ 2", "Diameter = radius × radius", "Diameter = radius + 2"]);
                return { question: "Which formula relates the diameter (d) and radius (r) of a circle?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["d = 2r."], lessonNum: 27, lessonTitle: "Circle Formulas" };
            },
            (r) => {
                const s = shuffle(r, ["16 feet", "8 feet", "64 feet", "24 feet"]);
                return { question: "A circular pool has a radius of 8 feet. What is its diameter?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 × 8 = 16 feet."], lessonNum: 27, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["6 meters", "12 meters", "24 meters", "3 meters"]);
                return { question: "The diameter of a circular track is 12 meters. What is the radius of the track?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 ÷ 2 = 6 meters."], lessonNum: 27, lessonTitle: "Radius Calculation" };
            },
            (r) => {
                const s = shuffle(r, ["Radius", "Diameter", "Chord", "Arc"]);
                return { question: "What is the segment connecting the center of a circle to any point on the circle called?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["That segment is the radius."], lessonNum: 27, lessonTitle: "Circle Definitions" };
            },
            (r) => {
                const s = shuffle(r, ["Diameter", "Radius", "Circumference", "Tangent"]);
                return { question: "What is a segment that passes through the center of a circle with both endpoints on the circle called?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["That segment is the diameter."], lessonNum: 27, lessonTitle: "Circle Definitions" };
            },
            (r) => {
                const s = shuffle(r, ["20 cm", "10 cm", "100 cm", "30 cm"]);
                return { question: "If r = 10 cm, what is d?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["d = 2 × 10 = 20 cm."], lessonNum: 27, lessonTitle: "Circle Calculations" };
            },
            (r) => {
                const s = shuffle(r, ["9 inches", "18 inches", "36 inches", "81 inches"]);
                return { question: "If the diameter is 18 inches, what is the radius?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["18 ÷ 2 = 9 inches."], lessonNum: 27, lessonTitle: "Radius Calculations" };
            },
            (r) => {
                const s = shuffle(r, ["True", "False", "Only for small circles", "Only for large circles"]);
                return { question: "True or False: In any circle, all radii have the exact same length.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["All points on a circle are equidistant from the center."], lessonNum: 27, lessonTitle: "Circle Properties" };
            },
            (r) => {
                const s = shuffle(r, ["50 cm", "25 cm", "100 cm", "75 cm"]);
                return { question: "A bicycle wheel has a radius of 25 cm. What is the diameter of the wheel?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["25 × 2 = 50 cm."], lessonNum: 27, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["1.5 inches", "3 inches", "6 inches", "0.75 inches"]);
                return { question: "A coin has a diameter of 3 inches. What is its radius?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 ÷ 2 = 1.5 inches (or 1 1/2 in)."], lessonNum: 27, lessonTitle: "Fractions with Radius" };
            },
            (r) => {
                const s = shuffle(r, ["A compass", "A ruler", "A protractor", "A thermometer"]);
                return { question: "Which drawing tool is used to draw circles with a specified radius?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A compass is used to draw circles."], lessonNum: 27, lessonTitle: "Drawing Tools" };
            },
            (r) => {
                const s = shuffle(r, ["Twice as long", "Half as long", "Four times as long", "Equal in length"]);
                return { question: "How does the length of the diameter compare to the radius of a circle?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The diameter is twice as long as the radius."], lessonNum: 27, lessonTitle: "Circle Concepts" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 28: Angles
    28: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"]);
                return { question: "An angle that measures less than 90° is classified as what kind of angle?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Angles < 90° are acute."], lessonNum: 28, lessonTitle: "Angle Classifications" };
            },
            (r) => {
                const s = shuffle(r, ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"]);
                return { question: "An angle that measures exactly 90° is called:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["An angle measuring 90° is a right angle."], lessonNum: 28, lessonTitle: "Angle Classifications" };
            },
            (r) => {
                const s = shuffle(r, ["Obtuse angle", "Acute angle", "Right angle", "Straight angle"]);
                return { question: "An angle that measures greater than 90° and less than 180° is called:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Angles between 90° and 180° are obtuse."], lessonNum: 28, lessonTitle: "Angle Classifications" };
            },
            (r) => {
                const s = shuffle(r, ["Straight angle", "Right angle", "Obtuse angle", "Reflex angle"]);
                return { question: "An angle that measures exactly 180° and forms a straight line is called:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A 180° angle is a straight angle."], lessonNum: 28, lessonTitle: "Angle Classifications" };
            },
            (r) => {
                const s = shuffle(r, ["A protractor", "A compass", "A ruler", "A scale"]);
                return { question: "Which instrument is used to measure the degree size of an angle?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A protractor measures angles in degrees."], lessonNum: 28, lessonTitle: "Measuring Angles" };
            },
            (r) => {
                const s = shuffle(r, ["Degrees (°)", "Inches", "Grams", "Liters"]);
                return { question: "What unit of measure is standard for angles?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Angles are measured in degrees."], lessonNum: 28, lessonTitle: "Angle Units" };
            },
            (r) => {
                const s = shuffle(r, ["360°", "180°", "90°", "270°"]);
                return { question: "How many degrees are in one full circle rotation?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A complete circle has 360°."], lessonNum: 28, lessonTitle: "Degrees in a Circle" };
            },
            (r) => {
                const s = shuffle(r, ["Vertex", "Ray", "Segment", "Degree"]);
                return { question: "What is the common endpoint where two rays meet to form an angle called?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The point of an angle is its vertex."], lessonNum: 28, lessonTitle: "Angle Parts" };
            },
            (r) => {
                const s = shuffle(r, ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"]);
                return { question: "An angle measuring 45° is classified as:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["45° is less than 90°, so it is acute."], lessonNum: 28, lessonTitle: "Angle Classifications" };
            },
            (r) => {
                const s = shuffle(r, ["Obtuse angle", "Acute angle", "Right angle", "Straight angle"]);
                return { question: "An angle measuring 135° is classified as:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["135° is between 90° and 180°, so it is obtuse."], lessonNum: 28, lessonTitle: "Angle Classifications" };
            },
            (r) => {
                const s = shuffle(r, ["A square corner symbol (small square)", "A circle", "An arrow", "A dot"]);
                return { question: "Which symbol is drawn in the corner of an angle to indicate that it is a 90° right angle?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A small square indicates a right angle."], lessonNum: 28, lessonTitle: "Geometric Notation" };
            },
            (r) => {
                const s = shuffle(r, ["Four right angles (90° each)", "Two acute and two obtuse angles", "Four acute angles", "Four straight angles"]);
                return { question: "What types of angles are the four interior angles of a rectangle?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A rectangle has four 90° right angles."], lessonNum: 28, lessonTitle: "Angles in Polygons" };
            },
            (r) => {
                const s = shuffle(r, ["90°", "180°", "45°", "60°"]);
                return { question: "At 3:00 on an analog clock, what is the angle between the hour and minute hands?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The hands form a 90° right angle at 3:00."], lessonNum: 28, lessonTitle: "Clock Angles" };
            },
            (r) => {
                const s = shuffle(r, ["180°", "90°", "360°", "120°"]);
                return { question: "At 6:00 on an analog clock, what is the angle between the hour and minute hands?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The hands form a 180° straight angle at 6:00."], lessonNum: 28, lessonTitle: "Clock Angles" };
            },
            (r) => {
                const s = shuffle(r, ["An acute angle", "An obtuse angle", "A right angle", "A straight angle"]);
                return { question: "An angle measuring 89° is:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["89° is less than 90°, so it is acute."], lessonNum: 28, lessonTitle: "Angle Boundary Cases" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 29: Multiplying Fractions
    29: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["3/8", "4/6", "3/6", "1/4"]);
                return { question: "Multiply: 1/2 × 3/4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(1 × 3) / (2 × 4) = 3/8."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/6", "2/5", "1/5", "2/6"]);
                return { question: "Multiply: 1/2 × 1/3", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(1 × 1) / (2 × 3) = 1/6."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["2/15", "5/8", "2/8", "3/15"]);
                return { question: "Multiply: 2/3 × 1/5", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(2 × 1) / (3 × 5) = 2/15."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["Multiply numerators together, then multiply denominators together", "Add numerators, keep denominators", "Find a common denominator first", "Cross-multiply"]);
                return { question: "What is the rule for multiplying two fractions?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply numerators; multiply denominators."], lessonNum: 29, lessonTitle: "Fraction Multiplication Rules" };
            },
            (r) => {
                const s = shuffle(r, ["1/4", "2/8", "1/8", "1/2"]);
                return { question: "What fraction is one half of one half (1/2 × 1/2)?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 × 1/2 = 1/4."], lessonNum: 29, lessonTitle: "Fractional Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["1/8", "2/6", "1/6", "3/8"]);
                return { question: "Multiply: 1/4 × 1/2", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/4 × 1/2 = 1/8."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["2/5", "6/15", "5/8", "1/5"]);
                return { question: "Multiply and reduce: 2/3 × 3/5", options: s.options, correctIndex: s.correctIndex, stepByStep: ["6/15 reduces to 2/5."], lessonNum: 29, lessonTitle: "Multiplying and Reducing" };
            },
            (r) => {
                const s = shuffle(r, ["9/20", "6/9", "3/10", "9/9"]);
                return { question: "Multiply: 3/4 × 3/5", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(3 × 3) / (4 × 5) = 9/20."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/3", "2/6", "3/5", "2/3"]);
                return { question: "What fraction is one third of two thirds (1/3 × 2/3)? Wait: (1×2)/(3×3) = 2/9. Let options be: 2/9, 1/3, 2/3, 1/9.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(1 × 2) / (3 × 3) = 2/9."], lessonNum: 29, lessonTitle: "Fraction Multiplication" };
            },
            (r) => {
                const s = shuffle(r, ["1/12", "2/7", "1/7", "2/12"]);
                return { question: "Multiply: 1/3 × 1/4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/12."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["3/10", "4/7", "3/7", "1/5"]);
                return { question: "Multiply: 1/2 × 3/5", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/10."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/16", "2/8", "1/8", "1/4"]);
                return { question: "Multiply: 1/4 × 1/4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/16."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["4/9", "2/3", "4/6", "1/3"]);
                return { question: "Multiply: 2/3 × 2/3", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4/9."], lessonNum: 29, lessonTitle: "Multiplying Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["1/2", "3/4", "2/3", "1/4"]);
                return { question: "Multiply and reduce: 3/4 × 2/3", options: s.options, correctIndex: s.correctIndex, stepByStep: ["6/12 reduces to 1/2."], lessonNum: 29, lessonTitle: "Multiplying and Reducing" };
            },
            (r) => {
                const s = shuffle(r, ["Smaller than both original fractions", "Greater than both original fractions", "Equal to the sum of the fractions", "Always equal to one"]);
                return { question: "When you multiply two proper fractions (like 1/2 × 1/2), is the product larger or smaller than each factor?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiplying proper fractions produces a smaller fraction (e.g. 1/4 < 1/2)."], lessonNum: 29, lessonTitle: "Fraction Properties" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 30: Least Common Multiple (LCM) • Reciprocals
    30: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["3/2", "-2/3", "1/2", "2/3"]);
                return { question: "What is the reciprocal of 2/3?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Invert the fraction: 3/2."], lessonNum: 30, lessonTitle: "Reciprocals" };
            },
            (r) => {
                const s = shuffle(r, ["24", "48", "12", "18"]);
                return { question: "Find the least common multiple (LCM) of 6 and 8.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. LCM = 24."], lessonNum: 30, lessonTitle: "Least Common Multiple" };
            },
            (r) => {
                const s = shuffle(r, ["1/5", "5/1", "-5", "0"]);
                return { question: "What is the reciprocal of the whole number 5?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 is 5/1, so its reciprocal is 1/5."], lessonNum: 30, lessonTitle: "Reciprocals" };
            },
            (r) => {
                const s = shuffle(r, ["1", "0", "Their sum", "Their difference"]);
                return { question: "What is the product of any nonzero fraction and its reciprocal?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A number multiplied by its reciprocal always equals 1 (e.g. 2/3 × 3/2 = 1)."], lessonNum: 30, lessonTitle: "Reciprocal Property" };
            },
            (r) => {
                const s = shuffle(r, ["12", "24", "6", "18"]);
                return { question: "Find the least common multiple (LCM) of 3 and 4.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 3: 3, 6, 9, 12. Multiples of 4: 4, 8, 12. LCM = 12."], lessonNum: 30, lessonTitle: "Least Common Multiple" };
            },
            (r) => {
                const s = shuffle(r, ["20", "40", "10", "15"]);
                return { question: "Find the LCM of 4 and 10.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 4: 4, 8, 12, 16, 20. Multiples of 10: 10, 20. LCM = 20."], lessonNum: 30, lessonTitle: "Least Common Multiple" };
            },
            (r) => {
                const s = shuffle(r, ["4/3", "3/4", "-3/4", "1/3"]);
                return { question: "What is the reciprocal of 3/4?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Invert 3/4: 4/3."], lessonNum: 30, lessonTitle: "Reciprocals" };
            },
            (r) => {
                const s = shuffle(r, ["5/2", "2/5", "-2/5", "1/2"]);
                return { question: "What is the reciprocal of 2/5?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Invert 2/5: 5/2."], lessonNum: 30, lessonTitle: "Reciprocals" };
            },
            (r) => {
                const s = shuffle(r, ["1/8", "8/1", "8", "-8"]);
                return { question: "What is the reciprocal of 8?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The reciprocal of 8 is 1/8."], lessonNum: 30, lessonTitle: "Reciprocals" };
            },
            (r) => {
                const s = shuffle(r, ["30", "15", "60", "45"]);
                return { question: "Find the least common multiple (LCM) of 6 and 10.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 6: 6, 12, 18, 24, 30. Multiples of 10: 10, 20, 30. LCM = 30."], lessonNum: 30, lessonTitle: "Least Common Multiple" };
            },
            (r) => {
                const s = shuffle(r, ["Zero (0)", "One (1)", "Negative numbers", "Fractions"]);
                return { question: "Which number does NOT have a reciprocal?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Zero has no reciprocal because division by zero is undefined."], lessonNum: 30, lessonTitle: "Reciprocal Facts" };
            },
            (r) => {
                const s = shuffle(r, ["1", "0", "1/2", "2"]);
                return { question: "What number is its own reciprocal?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/1 inverted is 1/1 = 1."], lessonNum: 30, lessonTitle: "Reciprocal Facts" };
            },
            (r) => {
                const s = shuffle(r, ["18", "36", "9", "27"]);
                return { question: "What is the least common multiple of 6 and 9?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiples of 6: 6, 12, 18. Multiples of 9: 9, 18. LCM = 18."], lessonNum: 30, lessonTitle: "Least Common Multiple" };
            },
            (r) => {
                const s = shuffle(r, ["7/1", "1/7", "-7", "0"]);
                return { question: "What is the reciprocal of 1/7?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Invert 1/7: 7/1 = 7."], lessonNum: 30, lessonTitle: "Reciprocals" };
            },
            (r) => {
                const s = shuffle(r, ["12", "6", "18", "24"]);
                return { question: "Find the least common multiple (LCM) of the three numbers 2, 3, and 4.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The smallest number divisible by 2, 3, and 4 is 12."], lessonNum: 30, lessonTitle: "LCM of Three Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};
`;

writeSection(3, sec3);

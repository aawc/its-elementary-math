const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'js', 'generators');

const sec2 = `import { randInt, generateDistractors, shuffle } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
    // Lesson 11: Problems About Comparing • Problems About Separating
    11: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["985 cans", "885 cans", "1085 cans", "2515 cans"]);
                return { question: "The school collected 765 cans of food last year and 1750 cans this year. How many fewer cans were collected last year than this year?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1750 - 765 = 985 cans."], lessonNum: 11, lessonTitle: "Comparing Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["53 marbles", "43 marbles", "63 marbles", "117 marbles"]);
                return { question: "Darius had 85 marbles. He gave 32 marbles to his brother. How many marbles does Darius have left?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["85 - 32 = 53 marbles."], lessonNum: 11, lessonTitle: "Separating Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["14 students", "12 students", "16 students", "42 students"]);
                return { question: "There are 28 students in Room A and 14 students in Room B. How many more students are in Room A than Room B?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["28 - 14 = 14 students."], lessonNum: 11, lessonTitle: "Comparing Problems" };
            },
            (r) => {
                const s = shuffle(r, ["$14.25", "$15.25", "$13.75", "$35.75"]);
                return { question: "Maria went to the store with $25.00 and returned home with $10.75. How much money did she spend?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$25.00 - $10.75 = $14.25."], lessonNum: 11, lessonTitle: "Separating Money Problems" };
            },
            (r) => {
                const s = shuffle(r, ["Difference = Greater - Lesser", "Difference = Greater + Lesser", "Difference = Lesser - Greater", "Difference = Greater × Lesser"]);
                return { question: "Which formula is used to solve problems about comparing?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Comparing formula: Difference = Greater - Lesser."], lessonNum: 11, lessonTitle: "Comparing Concepts" };
            },
            (r) => {
                const s = shuffle(r, ["Starting amount - Amount removed = Amount left", "Starting amount + Amount removed = Amount left", "Amount left - Amount removed = Starting amount", "Starting amount × Amount removed = Amount left"]);
                return { question: "Which formula models problems about separating?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Separating formula: Starting - Removed = Left."], lessonNum: 11, lessonTitle: "Separating Concepts" };
            },
            (r) => {
                const s = shuffle(r, ["18 miles", "16 miles", "20 miles", "82 miles"]);
                return { question: "A runner ran 50 miles this week and 32 miles last week. How many more miles did she run this week?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["50 - 32 = 18 miles."], lessonNum: 11, lessonTitle: "Comparing Problems" };
            },
            (r) => {
                const s = shuffle(r, ["$3.45", "$3.55", "$4.45", "$2.45"]);
                return { question: "Sam had $8.20 and spent $4.75 on a movie poster. How much money remained?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$8.20 - $4.75 = $3.45."], lessonNum: 11, lessonTitle: "Separating Money" };
            },
            (r) => {
                const s = shuffle(r, ["250 books", "240 books", "260 books", "750 books"]);
                return { question: "A bookstore started with 500 books and sold 250 books on Saturday. How many books were left?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["500 - 250 = 250 books."], lessonNum: 11, lessonTitle: "Separating Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["$12.50", "$11.50", "$13.00", "$67.50"]);
                return { question: "A bicycle costs $40.00 and a helmet costs $27.50. How much more does the bicycle cost than the helmet?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$40.00 - $27.50 = $12.50."], lessonNum: 11, lessonTitle: "Comparing Money" };
            },
            (r) => {
                const s = shuffle(r, ["112 passengers", "102 passengers", "122 passengers", "342 passengers"]);
                return { question: "A train had 227 passengers. At the first stop, 115 passengers got off. How many passengers remained on the train?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["227 - 115 = 112 passengers."], lessonNum: 11, lessonTitle: "Separating Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["35 points", "25 points", "45 points", "155 points"]);
                return { question: "The basketball team scored 95 points in game one and 60 points in game two. What was the difference in scores?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["95 - 60 = 35 points."], lessonNum: 11, lessonTitle: "Comparing Problems" };
            },
            (r) => {
                const s = shuffle(r, ["175 pages", "165 pages", "185 pages", "325 pages"]);
                return { question: "A novel is 250 pages long. Leo has read 75 pages. How many pages are left to read?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["250 - 75 = 175 pages."], lessonNum: 11, lessonTitle: "Separating Problems" };
            },
            (r) => {
                const s = shuffle(r, ["$6.35", "$7.35", "$5.35", "$23.65"]);
                return { question: "A hardcover book costs $15.00 and a paperback costs $8.65. Find the difference in price.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$15.00 - $8.65 = $6.35."], lessonNum: 11, lessonTitle: "Comparing Money" };
            },
            (r) => {
                const s = shuffle(r, ["42 apples", "38 apples", "45 apples", "158 apples"]);
                return { question: "A farmer picked 100 apples and gave away 58 apples. How many apples does the farmer keep?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 - 58 = 42 apples."], lessonNum: 11, lessonTitle: "Separating Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 12: Place Value Through Trillions • Multistep Problems
    12: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["9", "4", "7", "3"]);
                return { question: "Which digit in 497,325,186 is in the ten-millions place?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["9 is in the ten-millions place."], lessonNum: 12, lessonTitle: "Place Value" };
            },
            (r) => {
                const s = shuffle(r, ["4", "9", "7", "1"]);
                return { question: "In the number 497,325,186, which digit is in the hundred-millions place?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 is in the hundred-millions place."], lessonNum: 12, lessonTitle: "Place Value" };
            },
            (r) => {
                const s = shuffle(r, ["1,429,000,000", "1,429,000", "142,900,000", "1,429,000,000,000"]);
                return { question: "Saturn's average distance from the Sun is one billion, four hundred twenty-nine million kilometers. Use digits to write that distance.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1,429,000,000 km."], lessonNum: 12, lessonTitle: "Writing Large Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["12", "14", "10", "15"]);
                return { question: "How many zeros are in the number one trillion when written in standard form?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1,000,000,000,000 has 12 zeros."], lessonNum: 12, lessonTitle: "Trillions Place Value" };
            },
            (r) => {
                const s = shuffle(r, ["76", "96", "20", "116"]);
                return { question: "What is the difference between the product of 12 and 8 and the sum of 12 and 8?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(12 × 8) - (12 + 8) = 96 - 20 = 76."], lessonNum: 12, lessonTitle: "Multistep Problems" };
            },
            (r) => {
                const s = shuffle(r, ["40", "30", "50", "25"]);
                return { question: "What is the sum of the product of 5 and 6 and the quotient of 20 and 2?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(5 × 6) + (20 ÷ 2) = 30 + 10 = 40."], lessonNum: 12, lessonTitle: "Multistep Problems" };
            },
            (r) => {
                const s = shuffle(r, ["5", "3", "2", "8"]);
                return { question: "In the numeral 1,234,567,890, which digit is in the hundred-thousands position?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 is in the hundred-thousands place."], lessonNum: 12, lessonTitle: "Place Value" };
            },
            (r) => {
                const s = shuffle(r, ["Millions", "Billions", "Thousands", "Trillions"]);
                return { question: "In the number 52,400,000, what period is represented by 52?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["52 is in the millions period."], lessonNum: 12, lessonTitle: "Number Periods" };
            },
            (r) => {
                const s = shuffle(r, ["250,000,000", "25,000,000", "2,500,000", "250,000"]);
                return { question: "Write two hundred fifty million with digits.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["250,000,000."], lessonNum: 12, lessonTitle: "Place Value" };
            },
            (r) => {
                const s = shuffle(r, ["Thousands place", "Tens place", "Hundreds place", "Ten-thousands place"]);
                return { question: "In the number 84,312, what is the place value of the digit 4?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 is in the thousands place."], lessonNum: 12, lessonTitle: "Place Value" };
            },
            (r) => {
                const s = shuffle(r, ["10 times", "100 times", "2 times", "1000 times"]);
                return { question: "In our base-ten number system, each place value is how many times the value of the place to its right?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each place is 10 times the place to its right."], lessonNum: 12, lessonTitle: "Place Value Concepts" };
            },
            (r) => {
                const s = shuffle(r, ["700,000", "7,000", "70,000", "700"]);
                return { question: "What is the value of the digit 7 in 3,745,210?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["7 is in the hundred-thousands place, so its value is 700,000."], lessonNum: 12, lessonTitle: "Digit Values" };
            },
            (r) => {
                const s = shuffle(r, ["1,000,000,000", "100,000,000", "1,000,000", "10,000,000,000"]);
                return { question: "Write one billion as a standard number.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1,000,000,000."], lessonNum: 12, lessonTitle: "Billions" };
            },
            (r) => {
                const s = shuffle(r, ["100", "50", "200", "150"]);
                return { question: "Multiply 4 by 5, then multiply that product by 5. What is the result?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 × 5 = 20; 20 × 5 = 100."], lessonNum: 12, lessonTitle: "Multistep Problems" };
            },
            (r) => {
                const s = shuffle(r, ["10", "12", "8", "14"]);
                return { question: "Add 15 and 25, then divide that sum by 4. What is the result?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["15 + 25 = 40; 40 ÷ 4 = 10."], lessonNum: 12, lessonTitle: "Multistep Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 13: Problems About Comparing • Elapsed-Time Problems
    13: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["111 years", "101 years", "121 years", "91 years"]);
                return { question: "Find how many years there were from 1492 to 1603 by subtracting 1492 from 1603.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1603 - 1492 = 111 years."], lessonNum: 13, lessonTitle: "Elapsed Time" };
            },
            (r) => {
                const s = shuffle(r, ["156 years", "146 years", "166 years", "176 years"]);
                return { question: "How many years elapsed from 1620 to 1776?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1776 - 1620 = 156 years."], lessonNum: 13, lessonTitle: "Elapsed Time" };
            },
            (r) => {
                const s = shuffle(r, ["56 years", "61 years", "51 years", "65 years"]);
                return { question: "Abraham Lincoln was born in 1809 and died in 1865. How old was Lincoln when he died?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1865 - 1809 = 56 years."], lessonNum: 13, lessonTitle: "Historical Elapsed Time" };
            },
            (r) => {
                const s = shuffle(r, ["3 hours 30 minutes", "3 hours", "4 hours", "2 hours 30 minutes"]);
                return { question: "How much time passes between 8:15 a.m. and 11:45 a.m.?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["8:15 to 11:15 is 3 hours; + 30 min = 3 hours 30 minutes."], lessonNum: 13, lessonTitle: "Clock Elapsed Time" };
            },
            (r) => {
                const s = shuffle(r, ["2 hours 15 minutes", "2 hours", "1 hour 45 minutes", "2 hours 30 minutes"]);
                return { question: "A concert started at 1:30 p.m. and concluded at 3:45 p.m. What was the duration?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1:30 to 3:30 is 2 hours; + 15 min = 2 hours 15 minutes."], lessonNum: 13, lessonTitle: "Clock Elapsed Time" };
            },
            (r) => {
                const s = shuffle(r, ["100 years", "10 years", "50 years", "1000 years"]);
                return { question: "How many years are in one century?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 century = 100 years."], lessonNum: 13, lessonTitle: "Time Units" };
            },
            (r) => {
                const s = shuffle(r, ["10 years", "100 years", "5 years", "20 years"]);
                return { question: "How many years are in one decade?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 decade = 10 years."], lessonNum: 13, lessonTitle: "Time Units" };
            },
            (r) => {
                const s = shuffle(r, ["5:15 p.m.", "5:45 p.m.", "4:45 p.m.", "6:15 p.m."]);
                return { question: "What time is 2 hours 30 minutes after 2:45 p.m.?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2:45 + 2 hours = 4:45; + 30 min = 5:15 p.m."], lessonNum: 13, lessonTitle: "Clock Time" };
            },
            (r) => {
                const s = shuffle(r, ["Later year - Earlier year", "Later year + Earlier year", "Earlier year - Later year", "Later year × Earlier year"]);
                return { question: "Which formula is used to calculate elapsed time in years?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Elapsed time = Later year - Earlier year."], lessonNum: 13, lessonTitle: "Elapsed Time Formulas" };
            },
            (r) => {
                const s = shuffle(r, ["45 minutes", "35 minutes", "50 minutes", "40 minutes"]);
                return { question: "Recess started at 10:15 a.m. and ended at 11:00 a.m. How many minutes long was recess?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["10:15 to 11:00 = 45 minutes."], lessonNum: 13, lessonTitle: "Clock Elapsed Time" };
            },
            (r) => {
                const s = shuffle(r, ["250,000 miles", "25,000 miles", "2,500,000 miles", "250 miles"]);
                return { question: "The Moon is about two hundred fifty thousand miles from Earth. Use digits to write that distance.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["250,000 miles."], lessonNum: 13, lessonTitle: "Written Practice Number Form" };
            },
            (r) => {
                const s = shuffle(r, ["160 seats", "140 seats", "180 seats", "200 seats"]);
                return { question: "An auditorium has seats for 1000 people. If 840 tickets were sold, how many seats were empty?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1000 - 840 = 160 seats."], lessonNum: 13, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["27", "13", "40", "14"]);
                return { question: "When the sum of 8 and 5 is subtracted from the product of 8 and 5, what is the difference?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Product: 8 × 5 = 40.", "Sum: 8 + 5 = 13.", "Difference: 40 - 13 = 27."], lessonNum: 13, lessonTitle: "Multistep Problems" };
            },
            (r) => {
                const s = shuffle(r, ["10 decades", "100 decades", "5 decades", "20 decades"]);
                return { question: "How many decades are in one century?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 ÷ 10 = 10 decades."], lessonNum: 13, lessonTitle: "Time Units" };
            },
            (r) => {
                const s = shuffle(r, ["8:30 a.m.", "8:00 a.m.", "9:00 a.m.", "7:30 a.m."]);
                return { question: "If it is currently 10:00 a.m., what time was it 1 hour 30 minutes earlier?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["10:00 - 1 hr 30 min = 8:30 a.m."], lessonNum: 13, lessonTitle: "Clock Time" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 14: The Number Line: Negative Numbers
    14: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["-5 < 2", "-5 > 2", "2 < -5", "-5 = 2"]);
                return { question: "Which comparison between negative and positive integers is true?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["-5 < 2."], lessonNum: 14, lessonTitle: "Negative Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["-8 < -3", "-8 > -3", "-3 < -8", "-8 = -3"]);
                return { question: "Which comparison between two negative numbers is correct?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["-8 < -3."], lessonNum: 14, lessonTitle: "Comparing Negatives" };
            },
            (r) => {
                const s = shuffle(r, ["-3°F", "3°F", "-13°F", "0°F"]);
                return { question: "The temperature was 5°F and dropped 8°F. What is the new temperature?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 - 8 = -3°F."], lessonNum: 14, lessonTitle: "Temperature Drops" };
            },
            (r) => {
                const s = shuffle(r, ["-$2.50", "$2.50", "-$3.00", "$0.50"]);
                return { question: "A stock's value dropped from $28.00 to $25.50. Use a signed number to show the change in value.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["-$2.50."], lessonNum: 14, lessonTitle: "Signed Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["-3", "3", "-7", "7"]);
                return { question: "Subtract 5 from 2: (2 - 5). What is the answer?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 - 5 = -3."], lessonNum: 14, lessonTitle: "Subtracting Integers" };
            },
            (r) => {
                const s = shuffle(r, ["4 units", "-4 units", "0 units", "8 units"]);
                return { question: "What is the distance on the number line from -4 to 0?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["|-4| = 4 units."], lessonNum: 14, lessonTitle: "Absolute Value" };
            },
            (r) => {
                const s = shuffle(r, ["7 units", "-7 units", "5 units", "6 units"]);
                return { question: "How many units apart are -3 and +4 on a number line?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 - (-3) = 7 units."], lessonNum: 14, lessonTitle: "Number Line Distance" };
            },
            (r) => {
                const s = shuffle(r, ["-4, -1, 0, 3", "-1, -4, 0, 3", "3, 0, -1, -4", "0, -1, 3, -4"]);
                return { question: "Arrange these numbers in order from least to greatest: 3, -1, 0, -4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["-4 < -1 < 0 < 3."], lessonNum: 14, lessonTitle: "Ordering Integers" };
            },
            (r) => {
                const s = shuffle(r, ["Negative numbers", "Whole numbers", "Counting numbers", "Natural numbers"]);
                return { question: "Numbers that are less than zero are called:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Negative numbers."], lessonNum: 14, lessonTitle: "Definitions" };
            },
            (r) => {
                const s = shuffle(r, ["0", "-1", "1", "Cannot be determined"]);
                return { question: "Which number is neither positive nor negative?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Zero is neither positive nor negative."], lessonNum: 14, lessonTitle: "Zero Property" };
            },
            (r) => {
                const s = shuffle(r, ["-10°C", "10°C", "-2°C", "0°C"]);
                return { question: "Water freezes at 0°C. If a freezer is set 10°C colder than freezing, what is the temperature in the freezer?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["0 - 10 = -10°C."], lessonNum: 14, lessonTitle: "Temperature Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["-2", "2", "-8", "8"]);
                return { question: "What is the opposite of +2?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The opposite of +2 is -2."], lessonNum: 14, lessonTitle: "Opposites" };
            },
            (r) => {
                const s = shuffle(r, ["5", "-5", "10", "0"]);
                return { question: "What is the absolute value of -5?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["|-5| = 5."], lessonNum: 14, lessonTitle: "Absolute Value" };
            },
            (r) => {
                const s = shuffle(r, ["-1", "-10", "-5", "-20"]);
                return { question: "Which of the following negative numbers is closest to zero?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["-1 is closest to zero."], lessonNum: 14, lessonTitle: "Number Line Position" };
            },
            (r) => {
                const s = shuffle(r, ["<", ">", "=", "≥"]);
                return { question: "Compare: -7 ○ -2", options: s.options, correctIndex: s.correctIndex, stepByStep: ["-7 < -2."], lessonNum: 14, lessonTitle: "Comparing Integers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 15: Problems About Equal Groups
    15: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["18 cups", "16 cups", "20 cups", "24 cups"]);
                return { question: "Marcie collected $4.50 selling lemonade at 25¢ for each cup. How many cups of lemonade did Marcie sell?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$4.50 = 450¢; 450 ÷ 25 = 18 cups."], lessonNum: 15, lessonTitle: "Equal Groups with Money" };
            },
            (r) => {
                const s = shuffle(r, ["24 desks", "20 desks", "28 desks", "25 desks"]);
                return { question: "A teacher arranged 120 desks into 5 equal rows. How many desks were in each row?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["120 ÷ 5 = 24 desks."], lessonNum: 15, lessonTitle: "Equal Groups Problems" };
            },
            (r) => {
                const s = shuffle(r, ["$0.35", "$0.40", "$0.30", "$0.45"]);
                return { question: "Twelve pencils cost $4.20 in total. What was the price of each pencil?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$4.20 ÷ 12 = $0.35."], lessonNum: 15, lessonTitle: "Equal Groups Unit Cost" };
            },
            (r) => {
                const s = shuffle(r, ["Number of groups × Items in each group = Total", "Number of groups + Items in each group = Total", "Total × Number of groups = Items", "Items in each group - Number of groups = Total"]);
                return { question: "Which formula represents problems about equal groups?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Groups × Items in group = Total."], lessonNum: 15, lessonTitle: "Equal Groups Formula" };
            },
            (r) => {
                const s = shuffle(r, ["15 cards", "12 cards", "18 cards", "20 cards"]);
                return { question: "David put 90 trading cards into 6 equal packets. How many cards are in each packet?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["90 ÷ 6 = 15 cards."], lessonNum: 15, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["16 packages", "14 packages", "18 packages", "20 packages"]);
                return { question: "A bakery packed 192 cookies with 12 cookies in each package. How many packages did they pack?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["192 ÷ 12 = 16 packages."], lessonNum: 15, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["$7.50", "$6.50", "$8.00", "$9.00"]);
                return { question: "Tickets to the zoo cost $1.50 each. How much will 5 tickets cost?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 × $1.50 = $7.50."], lessonNum: 15, lessonTitle: "Equal Groups with Money" };
            },
            (r) => {
                const s = shuffle(r, ["8 players", "7 players", "9 players", "6 players"]);
                return { question: "Fifty-six players are assigned equally to 7 teams. How many players are on each team?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["56 ÷ 7 = 8 players."], lessonNum: 15, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["140 miles", "120 miles", "160 miles", "100 miles"]);
                return { question: "A cyclist rode at 20 miles per hour for 7 hours. How many miles did the cyclist travel?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["20 × 7 = 140 miles."], lessonNum: 15, lessonTitle: "Rate and Time" };
            },
            (r) => {
                const s = shuffle(r, ["$0.75", "$0.65", "$0.85", "$0.50"]);
                return { question: "Six juice boxes cost $4.50. What is the cost per box?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$4.50 ÷ 6 = $0.75."], lessonNum: 15, lessonTitle: "Unit Cost" };
            },
            (r) => {
                const s = shuffle(r, ["25 marbles", "20 marbles", "30 marbles", "15 marbles"]);
                return { question: "Four friends equally shared a bag of 100 marbles. How many marbles did each friend receive?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["100 ÷ 4 = 25 marbles."], lessonNum: 15, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["36 stamps", "40 stamps", "32 stamps", "44 stamps"]);
                return { question: "A stamp collector has 4 album pages with 9 stamps on each page. How many stamps in total?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 × 9 = 36 stamps."], lessonNum: 15, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["$18.00", "$15.00", "$20.00", "$16.50"]);
                return { question: "Three students each contributed $6.00 for a gift. What was the total amount contributed?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 × $6.00 = $18.00."], lessonNum: 15, lessonTitle: "Equal Groups with Money" };
            },
            (r) => {
                const s = shuffle(r, ["8 shelves", "6 shelves", "10 shelves", "7 shelves"]);
                return { question: "A library has 240 books to place on shelves holding 30 books each. How many shelves are needed?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["240 ÷ 30 = 8 shelves."], lessonNum: 15, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["48 eggs", "36 eggs", "60 eggs", "24 eggs"]);
                return { question: "How many eggs are in 4 cartons if each carton holds one dozen (12) eggs?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["4 × 12 = 48 eggs."], lessonNum: 15, lessonTitle: "Equal Groups" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 16: Rounding Whole Numbers • Estimating
    16: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["400", "500", "430", "420"]);
                return { question: "Jill has 427 beads. Dwayne rounded the number to the nearest hundred. What was Dwayne's rounded number?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Tens digit is 2; round down to 400."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["680", "670", "700", "690"]);
                return { question: "Round 678 to the nearest ten.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Ones digit is 8; round up to 680."], lessonNum: 16, lessonTitle: "Rounding Whole Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["4000", "3000", "3500", "5000"]);
                return { question: "Round 3650 to the nearest thousand.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Hundreds digit is 6; round up to 4000."], lessonNum: 16, lessonTitle: "Rounding to Thousands" };
            },
            (r) => {
                const s = shuffle(r, ["$12.00", "$11.00", "$11.50", "$13.00"]);
                return { question: "Round $11.89 to the nearest dollar.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["89¢ is 50¢ or more; round up to $12.00."], lessonNum: 16, lessonTitle: "Rounding Money" };
            },
            (r) => {
                const s = shuffle(r, ["800", "700", "900", "750"]);
                return { question: "Estimate the sum of 496 and 312 by rounding each number to the nearest hundred before adding.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["500 + 300 = 800."], lessonNum: 16, lessonTitle: "Estimating Sums" };
            },
            (r) => {
                const s = shuffle(r, ["300", "400", "200", "250"]);
                return { question: "Estimate the difference of 689 and 394 by rounding each to the nearest hundred.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["700 - 400 = 300."], lessonNum: 16, lessonTitle: "Estimating Differences" };
            },
            (r) => {
                const s = shuffle(r, ["75", "100", "25", "50"]);
                return { question: "What is the difference between the product of 20 and 5 and the sum of 20 and 5?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(20 × 5) - (20 + 5) = 100 - 25 = 75."], lessonNum: 16, lessonTitle: "Multistep Estimation" };
            },
            (r) => {
                const s = shuffle(r, ["Look at the digit in the tens place", "Look at the digit in the hundreds place", "Look at the digit in the thousands place", "Count the total number of digits"]);
                return { question: "When rounding a whole number to the nearest hundred, which digit determines whether to round up or down?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The tens digit."], lessonNum: 16, lessonTitle: "Rounding Rules" };
            },
            (r) => {
                const s = shuffle(r, ["220 years", "210 years", "230 years", "180 years"]);
                return { question: "Walter Raleigh explored in 1584 and Lewis and Clark explored in 1804. How many years elapsed between expeditions?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1804 - 1584 = 220 years."], lessonNum: 16, lessonTitle: "Historical Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["28 cards", "35 cards", "25 cards", "30 cards"]);
                return { question: "Jacob separated 140 trading cards into 5 equal groups. How many cards were in each group?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["140 ÷ 5 = 28 cards."], lessonNum: 16, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["8", "7", "9", "6"]);
                return { question: "What number is halfway between 5 and 11 on the number line?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(5 + 11) ÷ 2 = 16 ÷ 2 = 8."], lessonNum: 16, lessonTitle: "Number Line Midpoint" };
            },
            (r) => {
                const s = shuffle(r, ["3", "1", "5", "9"]);
                return { question: "Which digit in 159,342,876 is in the hundred-thousands place?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 is in the hundred-thousands place."], lessonNum: 16, lessonTitle: "Place Value" };
            },
            (r) => {
                const s = shuffle(r, ["121,100,000", "121,000,000", "121,070,000", "120,000,000"]);
                return { question: "In an election, 121,068,715 votes were tallied. Round that count to the nearest hundred thousand.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["121,100,000."], lessonNum: 16, lessonTitle: "Rounding Large Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["200", "180", "220", "150"]);
                return { question: "Estimate the product of 19 and 11 by rounding each number to the nearest ten before multiplying.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["20 × 10 = 200."], lessonNum: 16, lessonTitle: "Estimating Products" };
            },
            (r) => {
                const s = shuffle(r, ["40", "30", "50", "45"]);
                return { question: "Estimate the quotient of 238 ÷ 6 by rounding 238 to 240.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["240 ÷ 6 = 40."], lessonNum: 16, lessonTitle: "Estimating Quotients" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 17: The Number Line: Fractions and Mixed Numbers
    17: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["3 1/2", "3 1/4", "3 3/4", "4 1/2"]);
                return { question: "Which mixed number represents the point halfway between 3 and 4 on the number line?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 + 1/2 = 3 1/2."], lessonNum: 17, lessonTitle: "Mixed Numbers on Number Line" };
            },
            (r) => {
                const s = shuffle(r, ["2 1/4", "2 1/2", "2 3/4", "3 1/4"]);
                return { question: "On an inch ruler marked to sixteenths, what point is located one quarter inch past 2 inches?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 + 1/4 = 2 1/4 inches."], lessonNum: 17, lessonTitle: "Ruler Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["1 3/4 inches", "1 1/2 inches", "2 inches", "1 1/4 inches"]);
                return { question: "Which point is three quarters of an inch past 1 inch on a ruler?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 + 3/4 = 1 3/4 inches."], lessonNum: 17, lessonTitle: "Ruler Measurement" };
            },
            (r) => {
                const s = shuffle(r, ["16 marks", "8 marks", "4 marks", "12 marks"]);
                return { question: "How many sixteenth-inch division intervals are in one whole inch?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["16 sixteenths = 1 inch."], lessonNum: 17, lessonTitle: "Ruler Scales" };
            },
            (r) => {
                const s = shuffle(r, ["4 eighths", "2 eighths", "6 eighths", "8 eighths"]);
                return { question: "How many eighths of an inch are equal to one half of an inch?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 4/8."], lessonNum: 17, lessonTitle: "Equivalent Fractions on Ruler" };
            },
            (r) => {
                const s = shuffle(r, ["66 years", "60 years", "70 years", "56 years"]);
                return { question: "In 1903 the first airplane flight took place, and in 1969 astronauts landed on the moon. How many years elapsed between events?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1969 - 1903 = 66 years."], lessonNum: 17, lessonTitle: "Historical Elapsed Time" };
            },
            (r) => {
                const s = shuffle(r, ["A number made of a whole number and a fraction", "A fraction greater than one", "Two fractions multiplied together", "A decimal number"]);
                return { question: "What is the definition of a mixed number?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["A mixed number combines a whole number and a fraction."], lessonNum: 17, lessonTitle: "Mixed Number Concepts" };
            },
            (r) => {
                const s = shuffle(r, ["72 yards", "60 yards", "80 yards", "18 yards"]);
                return { question: "Linda can run about 6 yards in one second. How far can she run in 12 seconds?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 × 12 = 72 yards."], lessonNum: 17, lessonTitle: "Rate Problems" };
            },
            (r) => {
                const s = shuffle(r, ["$360.00", "$300.00", "$320.00", "$240.00"]);
                return { question: "A coin collector has two dozen (24) rare coins worth $15.00 each. What is the total value of the collection?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["24 × $15.00 = $360.00."], lessonNum: 17, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["7000", "6000", "8000", "7500"]);
                return { question: "Estimate the sum of 5280 and 1760 by rounding each number to the nearest thousand.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5000 + 2000 = 7000."], lessonNum: 17, lessonTitle: "Estimating Sums" };
            },
            (r) => {
                const s = shuffle(r, ["8/16", "4/16", "12/16", "2/16"]);
                return { question: "What fraction with denominator 16 is equivalent to 1/2?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/2 = 8/16."], lessonNum: 17, lessonTitle: "Equivalent Fractions" };
            },
            (r) => {
                const s = shuffle(r, ["4", "3", "5", "6"]);
                return { question: "Between which two consecutive whole numbers is 3 3/4 located? Name the larger whole number.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 3/4 is between 3 and 4."], lessonNum: 17, lessonTitle: "Number Line Position" };
            },
            (r) => {
                const s = shuffle(r, [">", "<", "=", "≤"]);
                return { question: "Compare on the number line: 2 1/2 ○ 2 1/4", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 > 2 1/4."], lessonNum: 17, lessonTitle: "Comparing Mixed Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["1 7/8 inches", "1 3/4 inches", "2 inches", "1 1/2 inches"]);
                return { question: "What measurement is 1/8 inch less than 2 inches?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 - 1/8 = 1 7/8 inches."], lessonNum: 17, lessonTitle: "Ruler Subtraction" };
            },
            (r) => {
                const s = shuffle(r, ["3 1/8 inches", "3 1/4 inches", "3 inches", "3 1/2 inches"]);
                return { question: "What measurement is 1/8 inch greater than 3 inches?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["3 + 1/8 = 3 1/8 inches."], lessonNum: 17, lessonTitle: "Ruler Addition" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 18: Average • Line Graphs
    18: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["85", "80", "90", "88"]);
                return { question: "Find the average (mean) of these four test scores: 80, 85, 90, and 85.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["340 ÷ 4 = 85."], lessonNum: 18, lessonTitle: "Average (Mean)" };
            },
            (r) => {
                const s = shuffle(r, ["15", "14", "16", "18"]);
                return { question: "What is the average of 12, 15, and 18?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["45 ÷ 3 = 15."], lessonNum: 18, lessonTitle: "Average (Mean)" };
            },
            (r) => {
                const s = shuffle(r, ["Add all numbers and divide by the count of numbers", "Multiply all numbers together", "Subtract the smallest from the largest", "Find the number in the middle"]);
                return { question: "How do you calculate the average (mean) of a set of numbers?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum ÷ Count = Average."], lessonNum: 18, lessonTitle: "Average Formula" };
            },
            (r) => {
                const s = shuffle(r, ["20", "18", "22", "25"]);
                return { question: "If the sum of four numbers is 80, what is their average?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["80 ÷ 4 = 20."], lessonNum: 18, lessonTitle: "Inverse Average" };
            },
            (r) => {
                const s = shuffle(r, ["22 points", "20 points", "25 points", "24 points"]);
                return { question: "A basketball player scored 20, 22, 24, and 22 points in four games. What was the average points per game?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["88 ÷ 4 = 22 points."], lessonNum: 18, lessonTitle: "Sports Averages" };
            },
            (r) => {
                const s = shuffle(r, ["75", "70", "80", "85"]);
                return { question: "Find the mean of 70, 75, and 80.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["225 ÷ 3 = 75."], lessonNum: 18, lessonTitle: "Average" };
            },
            (r) => {
                const s = shuffle(r, ["150", "120", "180", "100"]);
                return { question: "If the average of three numbers is 50, what is the sum of the three numbers?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["50 × 3 = 150."], lessonNum: 18, lessonTitle: "Finding Sum from Average" };
            },
            (r) => {
                const s = shuffle(r, ["Line graph", "Bar graph", "Circle graph", "Pictograph"]);
                return { question: "Which type of graph is best suited for showing changes in data over continuous time?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Line graphs display changes over time."], lessonNum: 18, lessonTitle: "Line Graphs" };
            },
            (r) => {
                const s = shuffle(r, ["10", "8", "12", "15"]);
                return { question: "Find the average of 6, 8, 10, 12, and 14.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["50 ÷ 5 = 10."], lessonNum: 18, lessonTitle: "Average" };
            },
            (r) => {
                const s = shuffle(r, ["25 miles", "24 miles", "26 miles", "30 miles"]);
                return { question: "Elena rode her bicycle 20 miles on Monday, 30 miles on Tuesday, and 25 miles on Wednesday. What was her average daily distance?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["75 ÷ 3 = 25 miles."], lessonNum: 18, lessonTitle: "Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["$5.00", "$4.50", "$5.50", "$6.00"]);
                return { question: "Three friends spent $4.00, $5.00, and $6.00 on snacks. What was the average amount spent per friend?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$15 ÷ 3 = $5.00."], lessonNum: 18, lessonTitle: "Average with Money" };
            },
            (r) => {
                const s = shuffle(r, ["Mean", "Median", "Mode", "Range"]);
                return { question: "What is another mathematical term for the average of a data set?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The mean is the average."], lessonNum: 18, lessonTitle: "Statistics Vocabulary" };
            },
            (r) => {
                const s = shuffle(r, ["95", "90", "100", "85"]);
                return { question: "A student scored 90, 95, and 100 on three quizzes. What was the average quiz score?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["285 ÷ 3 = 95."], lessonNum: 18, lessonTitle: "Score Averages" };
            },
            (r) => {
                const s = shuffle(r, ["8 hours", "7 hours", "9 hours", "6 hours"]);
                return { question: "A person slept 7 hours, 8 hours, and 9 hours over three nights. What was the average sleep per night?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["24 ÷ 3 = 8 hours."], lessonNum: 18, lessonTitle: "Average" };
            },
            (r) => {
                const s = shuffle(r, ["30", "28", "32", "35"]);
                return { question: "Find the average of 25 and 35.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["60 ÷ 2 = 30."], lessonNum: 18, lessonTitle: "Average" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 19: Factors • Prime Numbers
    19: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["17", "15", "21", "25"]);
                return { question: "Which of the following numbers is a prime number?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["17 has only two factors (1 and 17), so it is prime."], lessonNum: 19, lessonTitle: "Prime Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["21", "13", "19", "23"]);
                return { question: "Which of the following numbers is a composite number?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["21 has factors 1, 3, 7, and 21."], lessonNum: 19, lessonTitle: "Composite Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["42", "36", "48", "32"]);
                return { question: "If two hundred fifty-two is the dividend and six is the quotient, what is the divisor?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["252 ÷ 6 = 42."], lessonNum: 19, lessonTitle: "Written Practice Division" };
            },
            (r) => {
                const s = shuffle(r, ["87 years", "80 years", "77 years", "97 years"]);
                return { question: "A historical address began 'Fourscore and seven years ago'. A score is 20 years. How many years is fourscore and seven?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(4 × 20) + 7 = 80 + 7 = 87 years."], lessonNum: 19, lessonTitle: "Historical Word Problems" };
            },
            (r) => {
                const s = shuffle(r, ["115°F", "105°F", "23°F", "125°F"]);
                return { question: "The temperature was -46°F on a winter day and 69°F on a summer day. What was the difference in temperature?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["69 - (-46) = 69 + 46 = 115°F."], lessonNum: 19, lessonTitle: "Temperature Range" };
            },
            (r) => {
                const s = shuffle(r, ["29 turnips", "27 turnips", "31 turnips", "25 turnips"]);
                return { question: "If 203 turnips are to be shared equally among seven rabbits, how many should each receive?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["203 ÷ 7 = 29 turnips."], lessonNum: 19, lessonTitle: "Equal Groups" };
            },
            (r) => {
                const s = shuffle(r, ["4", "3", "5", "6"]);
                return { question: "What is the average of 1, 2, 4, and 9?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["(1 + 2 + 4 + 9) = 16; 16 ÷ 4 = 4."], lessonNum: 19, lessonTitle: "Average" };
            },
            (r) => {
                const s = shuffle(r, ["36", "30", "49", "35"]);
                return { question: "What is the next number in the following sequence: 1, 4, 9, 16, 25, ___?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 × 6 = 36."], lessonNum: 19, lessonTitle: "Square Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["2", "1", "3", "0"]);
                return { question: "What is the only even prime number?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 is the only even prime number."], lessonNum: 19, lessonTitle: "Prime Facts" };
            },
            (r) => {
                const s = shuffle(r, ["Neither prime nor composite", "Prime", "Composite", "An even number"]);
                return { question: "The counting number 1 is classified as:", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 is neither prime nor composite."], lessonNum: 19, lessonTitle: "Number Classifications" };
            },
            (r) => {
                const s = shuffle(r, ["1, 2, 3, 4, 6, 12", "1, 2, 4, 6, 12", "2, 3, 4, 6", "1, 12"]);
                return { question: "List all the factors of 12.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1, 2, 3, 4, 6, 12."], lessonNum: 19, lessonTitle: "Listing Factors" };
            },
            (r) => {
                const s = shuffle(r, ["29", "27", "25", "21"]);
                return { question: "Which number between 20 and 30 is prime?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["29 is prime."], lessonNum: 19, lessonTitle: "Prime Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["4 factors", "2 factors", "6 factors", "3 factors"]);
                return { question: "How many factors does the number 10 have?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["1, 2, 5, 10 = 4 factors."], lessonNum: 19, lessonTitle: "Counting Factors" };
            },
            (r) => {
                const s = shuffle(r, ["31", "33", "35", "39"]);
                return { question: "Which number in the 30s is a prime number?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["31 is prime."], lessonNum: 19, lessonTitle: "Prime Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["41", "45", "49", "51"]);
                return { question: "Which of the following numbers is prime?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["41 is prime."], lessonNum: 19, lessonTitle: "Prime Numbers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 20: Greatest Common Factor (GCF)
    20: (rng, qIndex) => {
        const framings = [
            (r) => {
                const s = shuffle(r, ["4", "2", "6", "8"]);
                return { question: "Find the greatest common factor of 12 and 20.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["GCF of 12 and 20 is 4."], lessonNum: 20, lessonTitle: "Greatest Common Factor" };
            },
            (r) => {
                const s = shuffle(r, ["3", "6", "9", "1"]);
                return { question: "Find the GCF of the three numbers 9, 15, and 21.", options: s.options, correctIndex: s.correctIndex, stepByStep: ["GCF of 9, 15, 21 is 3."], lessonNum: 20, lessonTitle: "GCF of Three Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["$0.81", "$0.80", "$0.75", "$0.85"]);
                return { question: "How much money is 1/4 of $3.24?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$3.24 ÷ 4 = $0.81."], lessonNum: 20, lessonTitle: "Fractional Parts with Money" };
            },
            (r) => {
                const s = shuffle(r, ["543 R 2", "543 R 0", "54 R 32", "5430"]);
                return { question: "Divide: 5432 ÷ 10", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5432 ÷ 10 = 543 R 2."], lessonNum: 20, lessonTitle: "Division by 10" };
            },
            (r) => {
                const s = shuffle(r, ["5", "4", "6", "7"]);
                return { question: "Simplify using order of operations: (28 + 42) ÷ 14", options: s.options, correctIndex: s.correctIndex, stepByStep: ["28 + 42 = 70. 70 ÷ 14 = 5."], lessonNum: 20, lessonTitle: "Order of Operations" };
            },
            (r) => {
                const s = shuffle(r, ["106,027", "105,927", "106,127", "105,027"]);
                return { question: "Add: 56,042 + 49,985", options: s.options, correctIndex: s.correctIndex, stepByStep: ["56,042 + 49,985 = 106,027."], lessonNum: 20, lessonTitle: "Multi-Digit Addition" };
            },
            (r) => {
                const s = shuffle(r, ["3090", "309", "390", "3080"]);
                return { question: "Divide: 37,080 ÷ 12", options: s.options, correctIndex: s.correctIndex, stepByStep: ["37,080 ÷ 12 = 3090."], lessonNum: 20, lessonTitle: "Long Division" };
            },
            (r) => {
                const s = shuffle(r, ["$64.70", "$6.47", "$647.00", "$64.07"]);
                return { question: "Multiply: $6.47 × 10", options: s.options, correctIndex: s.correctIndex, stepByStep: ["$6.47 × 10 = $64.70."], lessonNum: 20, lessonTitle: "Multiplying Money by 10" };
            },
            (r) => {
                const s = shuffle(r, ["120", "100", "60", "24"]);
                return { question: "Evaluate the product: 5 × 4 × 3 × 2 × 1", options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 × 4 = 20; 20 × 3 = 60; 60 × 2 = 120."], lessonNum: 20, lessonTitle: "Multi-Factor Multiplication" };
            },
            (r) => {
                const s = shuffle(r, ["604", "504", "452", "614"]);
                return { question: "Find the unknown number: w - 76 = 528", options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 528 + 76 = 604."], lessonNum: 20, lessonTitle: "Unknown Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["15", "12", "18", "14"]);
                return { question: "Find the unknown number: 6w = 90", options: s.options, correctIndex: s.correctIndex, stepByStep: ["w = 90 ÷ 6 = 15."], lessonNum: 20, lessonTitle: "Unknown Numbers" };
            },
            (r) => {
                const s = shuffle(r, ["11°C", "5°C", "10°C", "8°C"]);
                return { question: "The morning temperature was -3°C. By afternoon it had warmed to 8°C. How many degrees did it warm?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 - (-3) = 11°C."], lessonNum: 20, lessonTitle: "Temperature Range" };
            },
            (r) => {
                const s = shuffle(r, ["4", "10", "6", "16"]);
                return { question: "Find the missing number in the sequence: ___, 10, 16, 22, 28, ...", options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sequence adds 6 each term: 10 - 6 = 4."], lessonNum: 20, lessonTitle: "Sequences" };
            },
            (r) => {
                const s = shuffle(r, ["1", "0", "Their product", "Their sum"]);
                return { question: "What is the greatest common factor (GCF) of any two different prime numbers?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["Prime numbers share only 1 as a common factor."], lessonNum: 20, lessonTitle: "GCF of Primes" };
            },
            (r) => {
                const s = shuffle(r, ["6", "12", "3", "2"]);
                return { question: "What is the difference between the product of 12 and 8 and the sum of 12 and 8?", options: s.options, correctIndex: s.correctIndex, stepByStep: ["96 - 20 = 76."], lessonNum: 20, lessonTitle: "Multistep Problems" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
};
`;

fs.writeFileSync(path.join(outDir, 'section2.js'), sec2, 'utf-8');
console.log("[PASS] Wrote Section 2 with 15 distinct framings per lesson.");

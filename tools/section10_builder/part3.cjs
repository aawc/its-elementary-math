// Lessons 97 and 98 generators for Section 10
const part3 = `
    // Lesson 97: Transversals
    97: (rng, qIndex) => {
        const framings = [
            // Category 0: Transversal definition (PS a)
            (r) => {
                const q = "In geometry, what is the term for a line that intersects two or more other lines?";
                const s = shuffle(r, ["Transversal", "Parallel line", "Perpendicular line", "Ray"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A transversal is a line that intersects two or more other lines in a plane."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 1: Alternate interior angles concept (PS b)
            (r) => {
                const q = "When two parallel lines are cut by a transversal, which statement correctly describes alternate interior angles?";
                const s = shuffle(r, [
                    "They lie on opposite sides of the transversal between the parallel lines and have equal measures",
                    "They lie on the same side of the transversal and always sum to 90°",
                    "They are outside the parallel lines on opposite sides",
                    "They are adjacent angles that form a linear pair"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Alternate interior angles lie between the parallel lines on opposite sides of the transversal and are congruent (equal in measure)."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 2: Transversal angle calculation (PS e)
            (r) => {
                const a1 = 105;
                const acute = 75;
                const q = "Two parallel lines are intersected by a transversal. If one obtuse angle measures 105°, what is the measure of each acute angle?";
                const s = shuffle(r, ["75°", "85°", "65°", "105°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Consecutive interior/supplementary angles along a straight line sum to 180°.", "180° - 105° = 75°."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 3: Quarter-pound hamburgers from beef (WP 1)
            (r) => {
                const q = "How many quarter-pound hamburgers can be made from 100 pounds of ground beef?";
                const s = shuffle(r, ["400 hamburgers", "350 hamburgers", "450 hamburgers", "25 hamburgers"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Each pound makes 4 quarter-pound hamburgers.", "100 × 4 = 400 hamburgers."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 4: Fahrenheit midpoint (WP 2)
            (r) => {
                const q = "On the Fahrenheit scale water freezes at 32°F and boils at 212°F. What temperature is halfway between the freezing and boiling temperatures of water?";
                const s = shuffle(r, ["122°F", "120°F", "100°F", "112°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Halfway temperature = (32°F + 212°F) ÷ 2 = 244°F ÷ 2 = 122°F."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 5: Celsius to Fahrenheit function table (WP 3)
            (r) => {
                const q = "Using the temperature conversion formula F = 1.8C + 32, what is the Fahrenheit temperature when the Celsius temperature is 30°C?";
                const s = shuffle(r, ["86°F", "76°F", "96°F", "62°F"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["F = 1.8(30) + 32.", "1.8 × 30 = 54.", "54 + 32 = 86°F."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 6: Compare 5/8 and 0.675 (WP 4)
            (r) => {
                const q = "Compare the two values using <, >, or =: 5/8 ○ 0.675";
                const s = shuffle(r, ["<", ">", "=", "≠"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert 5/8 to a decimal: 5 ÷ 8 = 0.625.", "Since 0.625 < 0.675, the correct comparison symbol is <."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 7: 2 1/4 to percent (WP 5)
            (r) => {
                const q = "Write 2 1/4 as a percent.";
                const s = shuffle(r, ["225%", "214%", "250%", "220%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/4 = 9/4.", "9/4 × 100% = 900/4% = 225%."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 8: 1 2/5 to percent (WP 6)
            (r) => {
                const q = "Write 1 2/5 as a percent.";
                const s = shuffle(r, ["140%", "125%", "145%", "120%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 2/5 = 7/5.", "7/5 × 100% = 700/5% = 140%."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 9: 0.7 to percent (WP 7)
            (r) => {
                const q = "Write 0.7 as a percent.";
                const s = shuffle(r, ["70%", "7%", "0.7%", "700%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.7 × 100% = 70%."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 10: 7/8 to percent (WP 8)
            (r) => {
                const q = "Write 7/8 as a percent.";
                const s = shuffle(r, ["87 1/2%", "87%", "85 1/2%", "78%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["7/8 × 100% = 700/8% = 175/2% = 87 1/2%."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 11: Prime factorization of 320 (WP 9)
            (r) => {
                const q = "Write the prime factorization of 320 using exponents.";
                const s = shuffle(r, ["2⁶ · 5", "2⁵ · 5", "2⁶ · 3", "2⁷ · 5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["320 = 32 × 10 = 2⁵ × (2 × 5) = 2⁶ × 5."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 12: Minute hand degrees in 1 minute (WP 10)
            (r) => {
                const q = "In one minute the second hand of a clock turns 360°. How many degrees does the minute hand of a clock turn in one minute?";
                const s = shuffle(r, ["6°", "5°", "10°", "1°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The minute hand turns 360° in 60 minutes.", "360° ÷ 60 = 6° in one minute."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 13: Parallelogram park skateboard turns (WP 11)
            (r) => {
                const q = "Jason rode his skateboard around Parallelogram Park. If he made four turns on each complete trip around the park, what was the average number of degrees in each turn?";
                const s = shuffle(r, ["90°", "80°", "100°", "60°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of exterior turns for any closed polygon is 360°.", "360° ÷ 4 turns = 90° per turn."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 14: Mixed number addition (WP 12)
            (r) => {
                const q = "Find the sum: 6 3/8 + 5 3/4";
                const s = shuffle(r, ["12 1/8", "11 6/12", "11 7/8", "12 3/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["5 3/4 = 5 6/8.", "6 3/8 + 5 6/8 = 11 9/8 = 12 1/8."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 15: Mixed number subtraction (WP 13)
            (r) => {
                const q = "Subtract: 6 1/3 - 2 1/2";
                const s = shuffle(r, ["3 5/6", "4 1/6", "3 1/6", "4 5/6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Common denominator is 6: 6 2/6 - 2 3/6.", "Regroup: 5 8/6 - 2 3/6 = 3 5/6."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 16: Fraction division by 100 (WP 14)
            (r) => {
                const q = "Divide: 2 1/2 ÷ 100 (express as a simplified fraction)";
                const s = shuffle(r, ["1/40", "1/25", "1/50", "1/20"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 1/2 = 5/2.", "5/2 ÷ 100 = 5/200 = 1/40."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 17: Percent failed test (WP 19)
            (r) => {
                const q = "If 80% of the 30 students passed the test, how many students did NOT pass?";
                const s = shuffle(r, ["6 students", "24 students", "8 students", "5 students"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Percent who did not pass = 100% - 80% = 20%.", "20% of 30 = 0.20 × 30 = 6 students."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 18: Triangle unknown angle equation (WP 22)
            (r) => {
                const q = "Find the unknown angle measure a: a + 60° + 70° = 180°";
                const s = shuffle(r, ["50°", "60°", "40°", "70°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["60° + 70° = 130°.", "a = 180° - 130° = 50°."], lessonNum: 97, lessonTitle: "Transversals" };
            },
            // Category 19: Square diagonal triangle area (WP 24)
            (r) => {
                const q = "The perimeter of a square is 48 inches. A diagonal divides the square into two congruent triangles. What is the area of one of the triangles?";
                const s = shuffle(r, ["72 sq. in.", "144 sq. in.", "36 sq. in.", "48 sq. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Side of square = 48 ÷ 4 = 12 inches.", "Total area of square = 12 × 12 = 144 sq. in.", "Area of one triangle = 144 ÷ 2 = 72 sq. in."], lessonNum: 97, lessonTitle: "Transversals" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 98: Sum of the Angle Measures of Triangles and
    98: (rng, qIndex) => {
        const framings = [
            // Category 0: Sum of triangle angles (PS a)
            (r) => {
                const q = "What is the sum of the measures of the three interior angles of any triangle?";
                const s = shuffle(r, ["180°", "360°", "90°", "270°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The sum of the interior angle measures of any triangle is always 180°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 1: Sum of quadrilateral angles (PS c)
            (r) => {
                const q = "What is the sum of the measures of the four interior angles of any quadrilateral?";
                const s = shuffle(r, ["360°", "180°", "270°", "540°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A quadrilateral can be divided into two triangles.", "2 × 180° = 360°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 2: Third angle of triangle (PS d)
            (r) => {
                const q = "Two angles of triangle PQR measure 30° and 75°. What is the measure of the third angle?";
                const s = shuffle(r, ["75°", "65°", "85°", "70°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum of angles = 180°.", "30° + 75° = 105°.", "180° - 105° = 75°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 3: Regular quadrilateral interior angle (PS e)
            (r) => {
                const q = "What is the measure of each interior angle of a regular quadrilateral (a square)?";
                const s = shuffle(r, ["90°", "60°", "120°", "100°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A regular quadrilateral has 4 equal angles summing to 360°.", "360° ÷ 4 = 90°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 4: 5-turn park average angle (PS f)
            (r) => {
                const q = "Elizabeth made five left turns as she ran once around the park. What was the average number of degrees in each turn?";
                const s = shuffle(r, ["72°", "60°", "90°", "75°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Running once around a park completes a full 360° rotation.", "360° ÷ 5 turns = 72° per turn."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 5: Sum divided by product of fractions (WP 1)
            (r) => {
                const q = "When the sum of 1/2 and 1/4 is divided by the product of 1/2 and 1/4, what is the quotient?";
                const s = shuffle(r, ["6", "4", "8", "3"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Sum: 1/2 + 1/4 = 2/4 + 1/4 = 3/4.", "Product: 1/2 × 1/4 = 1/8.", "Quotient: (3/4) ÷ (1/8) = 3/4 × 8/1 = 24/4 = 6."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 6: Feet to inches (WP 2)
            (r) => {
                const q = "Jenny is 5 1/2 feet tall. How many inches tall is Jenny?";
                const s = shuffle(r, ["66 inches", "60 inches", "72 inches", "64 inches"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 foot = 12 inches.", "5 1/2 feet = 5.5 × 12 = 66 inches."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 7: Runners finished fraction (WP 3)
            (r) => {
                const q = "If 4/5 of the 200 runners finished the race, how many runners did NOT finish the race?";
                const s = shuffle(r, ["40 runners", "160 runners", "50 runners", "30 runners"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fraction not finishing = 1 - 4/5 = 1/5.", "1/5 of 200 = 200 ÷ 5 = 40 runners."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 8: Alternate interior angles measure (WP 4)
            (r) => {
                const q = "Lines p and q are parallel and intersected by a transversal. If ∠2 measures 85°, what is the measure of its alternate interior angle?";
                const s = shuffle(r, ["85°", "95°", "75°", "105°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Alternate interior angles formed by parallel lines and a transversal are equal in measure.", "Therefore, the alternate interior angle also measures 85°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 9: Earth circumference expanded notation (WP 5)
            (r) => {
                const q = "The circumference of the earth is about 25,000 miles. Write that distance in expanded notation using exponents.";
                const s = shuffle(r, [
                    "(2 × 10⁴) + (5 × 10³)",
                    "(2 × 10⁵) + (5 × 10⁴)",
                    "(25 × 10³)",
                    "(2 × 10³) + (5 × 10²)"
                ]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 is in the ten thousands place: 2 × 10⁴.", "5 is in the thousands place: 5 × 10³.", "(2 × 10⁴) + (5 × 10³)."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 10: Bicycle wheel circumference model (WP 7)
            (r) => {
                const q = "Which of these bicycle wheel parts is the best physical model of the circumference of the wheel?";
                const s = shuffle(r, ["Tire", "Spoke", "Axle", "Hub"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The circumference is the outer boundary/perimeter of a circle, which corresponds to the tire."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 11: Fibonacci sequence next term (WP 8)
            (r) => {
                const q = "In the sequence 1, 1, 2, 3, 5, 8, 13, ..., each term equals the sum of the two previous terms. What is the next term in this sequence?";
                const s = shuffle(r, ["21", "20", "19", "24"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the last two terms: 8 + 13 = 21."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 12: Probability of no rain (WP 9)
            (r) => {
                const q = "If there is a 20% chance of rain today, what is the probability that it will NOT rain?";
                const s = shuffle(r, ["80%", "20%", "75%", "85%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["100% - 20% = 80%."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 13: 1 1/3 to percent (WP 10)
            (r) => {
                const q = "Write 1 1/3 as a percent.";
                const s = shuffle(r, ["133 1/3%", "130%", "133%", "125%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 1/3 = 4/3.", "4/3 × 100% = 400/3% = 133 1/3%."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 14: Decimal unknown equation (WP 11)
            (r) => {
                const q = "Solve for w: 0.08w = $0.60";
                const s = shuffle(r, ["$7.50", "$7.20", "$8.00", "$6.50"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Divide both sides by 0.08: w = 0.60 ÷ 0.08 = 60 ÷ 8 = $7.50."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 15: Mixed number plus decimal (WP 15)
            (r) => {
                const q = "Add: 6 1/2 + 4.95 (express your answer as a decimal)";
                const s = shuffle(r, ["11.45", "11.25", "10.95", "11.55"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 1/2 = 6.5.", "6.50 + 4.95 = 11.45."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 16: Mixed number minus decimal as fraction (WP 16)
            (r) => {
                const q = "Subtract: 2 1/6 - 1.5 (write the answer as a simplified fraction)";
                const s = shuffle(r, ["2/3", "1/3", "5/6", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.5 = 1 1/2 = 1 3/6.", "2 1/6 - 1 3/6 = 1 7/6 - 1 3/6 = 4/6 = 2/3."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 17: Inches as fraction of a foot (WP 18)
            (r) => {
                const q = "What fraction of a foot is 3 inches in simplest form?";
                const s = shuffle(r, ["1/4", "1/3", "1/6", "3/12"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 foot = 12 inches.", "3/12 simplifies to 1/4."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 18: Centimeters as percent of a meter (WP 19)
            (r) => {
                const q = "What percent of a meter is 3 centimeters?";
                const s = shuffle(r, ["3%", "30%", "0.3%", "33 1/3%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1 meter = 100 centimeters.", "3/100 = 3%."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            },
            // Category 19: Triangle exterior angle (WP 24b)
            (r) => {
                const q = "In triangle ABC, ∠A measures 40° and ∠B measures 110°. What is the measure of the exterior angle at vertex C?";
                const s = shuffle(r, ["150°", "140°", "30°", "130°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["An exterior angle of a triangle equals the sum of its two remote interior angles.", "40° + 110° = 150°."], lessonNum: 98, lessonTitle: "Sum of the Angle Measures of Triangles and" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },
`;

module.exports = part3;

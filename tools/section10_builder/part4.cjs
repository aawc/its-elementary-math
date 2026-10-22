// Lessons 99 and 100 generators for Section 10
const part4 = `
    // Lesson 99: Fraction-Decimal-Percent Equivalents
    99: (rng, qIndex) => {
        const framings = [
            // Category 0: Ribbon cutting (WP 1)
            (r) => {
                const q = "A foot-long ribbon (12 inches) can be cut into how many 1 1/2-inch lengths?";
                const s = shuffle(r, ["8 lengths", "6 lengths", "9 lengths", "7 lengths"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["12 ÷ 1 1/2 = 12 ÷ 3/2 = 12 × 2/3 = 24/3 = 8 lengths."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 1: Can of beans solid (WP 2)
            (r) => {
                const q = "A can of beans is the shape of what geometric solid?";
                const s = shuffle(r, ["Cylinder", "Cone", "Sphere", "Rectangular prism"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A standard food can with two circular bases and a curved surface is a cylinder."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 2: Voting did not vote fraction (WP 3)
            (r) => {
                const q = "If 3/8 of the group voted yes and 3/8 voted no, what fraction of the group did not vote in simplest form?";
                const s = shuffle(r, ["1/4", "1/8", "3/8", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Voted = 3/8 + 3/8 = 6/8.", "Did not vote = 1 - 6/8 = 2/8 = 1/4."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 3: Months as fraction and percent of year (WP 4)
            (r) => {
                const q = "Nine months is what fraction and percent of a year?";
                const s = shuffle(r, ["3/4 and 75%", "3/4 and 70%", "2/3 and 66 2/3%", "4/5 and 80%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["9/12 simplifies to 3/4.", "3/4 = 75%."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 4: Compass counterclockwise turn (WP 6)
            (r) => {
                const q = "Tom was facing east. Then he turned counterclockwise 270°. After the turn, what direction was Tom facing?";
                const s = shuffle(r, ["South", "North", "West", "East"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["A 90° CCW turn faces North.", "A 180° CCW turn faces West.", "A 270° CCW turn faces South."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 5: Pie percent left (WP 7)
            (r) => {
                const q = "If 1/5 of the pie was eaten, what percent of the pie was left?";
                const s = shuffle(r, ["80%", "20%", "75%", "85%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Fraction left = 1 - 1/5 = 4/5.", "4/5 × 100% = 80%."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 6: Percent form of 1/7 (WP 8)
            (r) => {
                const q = "Write the percent form of 1/7.";
                const s = shuffle(r, ["14 2/7%", "14%", "15 2/7%", "14 1/7%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1/7 × 100% = 100/7% = 14 2/7%."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 7: Mixed number minus decimal (WP 9)
            (r) => {
                const q = "Calculate: 6 3/4 - 6.2 (express your answer as a decimal)";
                const s = shuffle(r, ["0.55", "0.5", "0.65", "0.45"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["6 3/4 = 6.75.", "6.75 - 6.20 = 0.55."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 8: Product with factor of zero (WP 10)
            (r) => {
                const q = "Find the product: 5 · 4 · 3 · 2 · 1 · 0";
                const s = shuffle(r, ["0", "120", "24", "1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Any real number multiplied by zero equals zero."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 9: Decimal division (WP 11)
            (r) => {
                const q = "Divide: 4.5 ÷ 0.18";
                const s = shuffle(r, ["25", "2.5", "250", "0.25"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply dividend and divisor by 100: 450 ÷ 18 = 25."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 10: Square root of 1600 (WP 12)
            (r) => {
                const q = "Evaluate: √1600";
                const s = shuffle(r, ["40", "400", "4", "80"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["40 × 40 = 1600, so √1600 = 40."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 11: Order of operations with exponents and root (WP 13)
            (r) => {
                const q = "Simplify: 2³ + 5² - √25 · (2 · 3)";
                const s = shuffle(r, ["3", "8", "13", "0"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2³ = 8, 5² = 25, √25 = 5, (2 · 3) = 6.", "Multiply: 5 · 6 = 30.", "8 + 25 - 30 = 33 - 30 = 3."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 12: Proportion (WP 14)
            (r) => {
                const q = "Solve the proportion: 15/20 = 24/n";
                const s = shuffle(r, ["32", "30", "36", "28"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["15/20 reduces to 3/4.", "3/4 = 24/n.", "3 × 8 = 24, so n = 4 × 8 = 32."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 13: Multiplying mixed numbers (WP 15)
            (r) => {
                const q = "Multiply: 1 2/5 · 1 3/7 · 5 1/2";
                const s = shuffle(r, ["11", "10", "12", "9 1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Improper fractions: 7/5 × 10/7 × 11/2.", "Cancel 7s: (1/5) × 10 × (11/2) = 2 × (11/2) = 11."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 14: Decimal operations (WP 16)
            (r) => {
                const q = "Simplify: (4.2 × 0.05) ÷ 7";
                const s = shuffle(r, ["0.03", "0.3", "0.003", "0.021"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4.2 × 0.05 = 0.21.", "0.21 ÷ 7 = 0.03."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 15: Sales tax on purchase (WP 17)
            (r) => {
                const q = "If the sales-tax rate is 7%, what is the tax on a $111.11 purchase?";
                const s = shuffle(r, ["$7.78", "$7.70", "$7.88", "$8.00"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["0.07 × $111.11 = $7.7777... ≈ $7.78."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 16: Prime factorization of 900 (WP 19)
            (r) => {
                const q = "Write the prime factorization of 900 using exponents.";
                const s = shuffle(r, ["2² · 3² · 5²", "2³ · 3² · 5", "2² · 3³ · 5", "2 · 3² · 5²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["900 = 9 × 100 = 3² × (10²) = 3² × (2 · 5)² = 2² · 3² · 5²."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 17: GCF of two different prime numbers (WP 20)
            (r) => {
                const q = "What is the greatest common factor (GCF) of any two different prime numbers?";
                const s = shuffle(r, ["1", "0", "Their product", "Their sum"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Prime numbers have only 1 and themselves as factors. Since they are different, their only shared common factor is 1."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 18: Square side in cm from perimeter in meters (WP 21)
            (r) => {
                const q = "The perimeter of a square is 2 meters. How many centimeters long is each side?";
                const s = shuffle(r, ["50 cm", "25 cm", "100 cm", "40 cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["2 meters = 200 centimeters.", "A square has 4 equal sides: 200 cm ÷ 4 = 50 cm."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            },
            // Category 19: Triangle area and classification (WP 22)
            (r) => {
                const q = "A triangle has a base of 8 cm, a vertical height of 5 cm, and side lengths of 5 cm, 8 cm, and 10 cm. What is its area and angle classification?";
                const s = shuffle(r, ["20 cm², obtuse triangle", "40 cm², acute triangle", "20 cm², right triangle", "25 cm², obtuse triangle"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (base × height) ÷ 2 = (8 × 5) ÷ 2 = 20 cm².", "Since 5² + 8² = 25 + 64 = 89 < 10² = 100, the triangle is obtuse."], lessonNum: 99, lessonTitle: "Fraction-Decimal-Percent Equivalents" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },

    // Lesson 100: Algebraic Addition of Integers
    100: (rng, qIndex) => {
        const framings = [
            // Category 0: Adding negative and positive integers (PS a, d, WP 5)
            (r) => {
                const a = 3, b = 4;
                const ans = "+1";
                const q = "Find the algebraic sum: (-3) + (+4)";
                const s = shuffle(r, [ans, "-1", "-7", "+7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["When adding numbers with different signs, subtract the smaller absolute value from the larger and keep the sign of the larger.", "4 - 3 = 1, so the sum is +1."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 1: Adding two negative integers (PS b, g)
            (r) => {
                const q = "Find the algebraic sum: (-3) + (-4)";
                const s = shuffle(r, ["-7", "+7", "-1", "+1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["When adding numbers with the same sign, add their absolute values and keep the common sign.", "3 + 4 = 7, so the sum is -7."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 2: Sum of opposites (PS c, WP 5a)
            (r) => {
                const q = "Find the algebraic sum of the opposites: (-4) + (+4)";
                const s = shuffle(r, ["0", "+8", "-8", "1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Opposite numbers sum to zero."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 3: Opposite of number (PS i-k)
            (r) => {
                const q = "What is the opposite of -8?";
                const s = shuffle(r, ["+8", "-8", "0", "1/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The opposite of a negative number is the corresponding positive number: +8."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 4: Subtracting negative integer (PS l, WP 6a)
            (r) => {
                const q = "Solve the subtraction problem using algebraic addition: (-2) - (-5)";
                const s = shuffle(r, ["+3", "-3", "-7", "+7"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["To subtract, add the opposite of the subtrahend: (-2) + (+5) = +3."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 5: Subtracting positive from negative (PS m, WP 6d)
            (r) => {
                const q = "Solve using algebraic addition: (-4) - (+2)";
                const s = shuffle(r, ["-6", "+6", "-2", "+2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the opposite: (-4) + (-2) = -6."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 6: Subtracting negative from positive (PS n, WP 6c)
            (r) => {
                const q = "Solve using algebraic addition: (+2) - (-3)";
                const s = shuffle(r, ["+5", "-5", "-1", "+1"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Add the opposite: (+2) + (+3) = +5."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 7: Dividend from divisor and quotient (WP 1)
            (r) => {
                const q = "If 0.6 is the divisor and 1.2 is the quotient, what is the dividend?";
                const s = shuffle(r, ["0.72", "2", "0.5", "0.072"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Dividend = divisor × quotient = 0.6 × 1.2 = 0.72."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 8: Two-step number problem (WP 2)
            (r) => {
                const q = "If a number is twelve less than fifty, then it is how much more than twenty?";
                const s = shuffle(r, ["18", "28", "16", "22"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Twelve less than fifty = 50 - 12 = 38.", "38 - 20 = 18."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 9: Average of four numbers (WP 3)
            (r) => {
                const q = "If the sum of four numbers is 14.8, what is the average of the four numbers?";
                const s = shuffle(r, ["3.7", "3.5", "3.9", "4.2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Average = sum ÷ count = 14.8 ÷ 4 = 3.7."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 10: Angles of equilateral triangle (WP 7)
            (r) => {
                const q = "What is the measure of each angle of an equilateral triangle?";
                const s = shuffle(r, ["60°", "90°", "45°", "180°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The three angles of an equilateral triangle are equal: 180° ÷ 3 = 60°."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 11: Parallelogram angle measures (WP 8)
            (r) => {
                const q = "Quadrilateral ABCD is a parallelogram. If angle A measures 70°, what is the measure of consecutive angle B?";
                const s = shuffle(r, ["110°", "70°", "120°", "90°"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Consecutive angles in a parallelogram are supplementary: 180° - 70° = 110°."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 12: Volume of rectangular prism (WP 10)
            (r) => {
                const q = "Find the volume of a rectangular prism with length 7 in., width 5 in., and height 6 in.";
                const s = shuffle(r, ["210 cu. in.", "230 cu. in.", "190 cu. in.", "142 cu. in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Volume = l × w × h = 7 × 5 × 6 = 210 cubic inches."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 13: Ratio of girls to boys in class (WP 11)
            (r) => {
                const q = "Twelve of the 27 students in the class are boys. What is the ratio of girls to boys in the class in simplest form?";
                const s = shuffle(r, ["5 to 4", "4 to 5", "5 to 9", "4 to 9"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Number of girls = 27 - 12 = 15.", "Ratio of girls to boys = 15 to 12 = 5 to 4."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 14: Order of operations with powers and roots (WP 12)
            (r) => {
                const q = "Simplify: 10² + (5² - 11) ÷ √49 - 3³";
                const s = shuffle(r, ["75", "73", "81", "68"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Powers and roots: 10² = 100, 5² = 25, √49 = 7, 3³ = 27.", "Parentheses: 25 - 11 = 14.", "Divide: 14 ÷ 7 = 2.", "100 + 2 - 27 = 75."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 15: 3/4 to percent (WP 13)
            (r) => {
                const q = "The fraction 3/4 is equal to what percent?";
                const s = shuffle(r, ["75%", "70%", "80%", "25%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3/4 × 100% = 75%."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 16: Fraction who did not bring lunch (WP 14)
            (r) => {
                const q = "If 20% of the students brought their lunch to school, then what fraction of the students did NOT bring their lunch to school in simplest form?";
                const s = shuffle(r, ["4/5", "1/5", "3/5", "7/10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Percent who did not bring lunch = 100% - 20% = 80%.", "80% = 80/100 = 4/5."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 17: Decimal subtraction with parentheses (WP 18)
            (r) => {
                const q = "Simplify: 5 - (3.2 + 0.4)";
                const s = shuffle(r, ["1.4", "1.6", "2.2", "1.2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Inside parentheses: 3.2 + 0.4 = 3.6.", "5.0 - 3.6 = 1.4."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 18: Circular pool area (WP 19)
            (r) => {
                const q = "If the diameter of a circular plastic swimming pool is 6 feet, what is the approximate area of the bottom of the pool to the nearest square foot? (Use 3.14 for π.)";
                const s = shuffle(r, ["28 sq. ft", "19 sq. ft", "36 sq. ft", "24 sq. ft"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Radius = 6 ÷ 2 = 3 ft.", "Area = πr² = 3.14 × 3² = 3.14 × 9 = 28.26 ≈ 28 sq. ft."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            },
            // Category 19: Triangle ABC area from rectangle (WP 22)
            (r) => {
                const q = "Rectangle ABCD is 8 cm long and 6 cm wide. Diagonal AC is 10 cm long. What is the area of triangle ABC?";
                const s = shuffle(r, ["24 cm²", "48 cm²", "30 cm²", "28 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Triangle ABC is a right triangle with legs of length 8 cm and 6 cm.", "Area = (8 × 6) ÷ 2 = 48 ÷ 2 = 24 cm²."], lessonNum: 100, lessonTitle: "Algebraic Addition of Integers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    }
`;

module.exports = part4;

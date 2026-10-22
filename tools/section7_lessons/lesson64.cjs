module.exports = `    // Lesson 64: Prime Factorization • Division by Primes • Factor Trees
    64: (rng, qIndex) => {
        const framings = [
            // Category 0: Composite numbers identification (Lesson 64 PS a)
            (r) => {
                const sets = [
                    { list: "19, 20, 23, 29", comp: "20", reason: "20 has factors 1, 2, 4, 5, 10, 20" },
                    { list: "19, 21, 23, 29", comp: "21", reason: "21 = 3 × 7" },
                    { list: "17, 22, 23, 31", comp: "22", reason: "22 = 2 × 11" },
                    { list: "13, 25, 29, 31", comp: "25", reason: "25 = 5 × 5" }
                ];
                const item = sets[randInt(r, 0, sets.length - 1)];
                const q = "Which of the numbers in the list {" + item.list + "} is a composite number?";
                const opts = item.list.split(", ");
                const s = shuffle(r, [item.comp, ...opts.filter(x => x !== item.comp)]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        item.comp + " is composite because " + item.reason + ".",
                        "The other numbers are prime numbers because they have only two factors."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 1: Prime factorization of 36 using factor tree (Lesson 64 PS c)
            (r) => {
                const q = "Use a factor tree to find the prime factorization of 36.";
                const correct = "2 · 2 · 3 · 3 (or 2² · 3²)";
                const distractors = [
                    "2 · 3 · 6",
                    "4 · 9",
                    "2 · 2 · 2 · 3"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Split 36 into 6 × 6 or 4 × 9.",
                        "Break 4 into 2 × 2 and 9 into 3 × 3.",
                        "All prime factors are 2 · 2 · 3 · 3 (or 2² · 3²)."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 2: Division by primes for 48 (Lesson 64 PS d)
            (r) => {
                const q = "Use division by primes to find the prime factorization of 48.";
                const correct = "2 · 2 · 2 · 2 · 3 (or 2⁴ · 3)";
                const distractors = [
                    "2 · 2 · 3 · 4",
                    "3 · 16",
                    "2 · 3 · 8"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "48 ÷ 2 = 24; 24 ÷ 2 = 12; 12 ÷ 2 = 6; 6 ÷ 2 = 3; 3 ÷ 3 = 1.",
                        "Prime factors: 2 · 2 · 2 · 2 · 3 = 2⁴ · 3."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 3: Prime factorization of 125 (Lesson 64 PS e)
            (r) => {
                const q = "Write 125 as a product of prime factors.";
                const correct = "5 · 5 · 5 (or 5³)";
                const distractors = [
                    "5 · 25",
                    "3 · 5 · 5",
                    "5 · 5 · 5 · 5"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "125 ÷ 5 = 25.",
                        "25 ÷ 5 = 5.",
                        "5 ÷ 5 = 1.",
                        "125 = 5 · 5 · 5 = 5³."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 4: Prime factorization of 1000 (Lesson 64 PS f)
            (r) => {
                const q = "What is the prime factorization of 1000?";
                const correct = "2³ · 5³ (or 2 · 2 · 2 · 5 · 5 · 5)";
                const distractors = [
                    "2² · 5²",
                    "10 · 10 · 10",
                    "2⁴ · 5⁴"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "1000 = 10 × 10 × 10.",
                        "Each 10 = 2 × 5.",
                        "Therefore, 1000 = (2 × 5) × (2 × 5) × (2 × 5) = 2³ · 5³."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 5: Place value word problem in digits (Lesson 64 WP #1)
            (r) => {
                const q = "The total land area of a continent is about fifty-seven million, five hundred six thousand square miles. Use digits to write that number.";
                const correct = "57,506,000";
                const distractors = [
                    "57,560,000",
                    "57,056,000",
                    "575,006,000"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Millions period: 57.",
                        "Thousands period: 506.",
                        "Units period: 000.",
                        "Combined: 57,506,000."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 6: White rhino height in inches (Lesson 64 WP #2)
            (r) => {
                const feet = [4.5, 5.5, 6.5][randInt(r, 0, 2)];
                const inches = Math.round(feet * 12);
                const feetStr = Math.floor(feet) + " 1/2";
                const correct = inches + " inches";
                const q = "An African rhinoceros can reach a height of about " + feetStr + " feet. How many inches is " + feetStr + " feet?";
                const distractors = [
                    (inches - 6) + " inches",
                    (inches + 6) + " inches",
                    (inches + 12) + " inches"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        Math.floor(feet) + " feet = " + (Math.floor(feet) * 12) + " inches.",
                        "1/2 foot = 6 inches.",
                        (Math.floor(feet) * 12) + " + 6 = " + inches + " inches."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 7: Free throws percent (Lesson 64 WP #3)
            (r) => {
                const made = [6, 7, 8][randInt(r, 0, 2)];
                const pct = made * 10;
                const correct = pct + "%";
                const q = "Jenny shot 10 free throws and made " + made + ". What percent of her shots did she make?";
                const distractors = [
                    (pct - 10) + "%",
                    (pct + 10) + "%",
                    made + "%"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Fraction made: " + made + "/10.",
                        "Convert to percent: " + made + "/10 = " + pct + "/100 = " + pct + "%."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 8: Factor tree for 40 (Lesson 64 WP #4)
            (r) => {
                const q = "Make a factor tree for 40. Then write the prime factorization of 40.";
                const correct = "2 · 2 · 2 · 5 (or 2³ · 5)";
                const distractors = [
                    "2 · 4 · 5",
                    "2 · 2 · 10",
                    "4 · 10"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "40 = 4 × 10.",
                        "4 = 2 × 2 and 10 = 2 × 5.",
                        "Prime factors: 2 · 2 · 2 · 5 = 2³ · 5."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 9: Improper fraction times fraction (Lesson 64 WP #6)
            (r) => {
                const q = "Write 2 2/3 as an improper fraction. Then multiply the improper fraction by 3/8. What is the product?";
                const correct = "1";
                const distractors = ["2/3", "4/3", "1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Convert 2 2/3 = 8/3.",
                        "Multiply: 8/3 × 3/8 = 24/24 = 1."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 10: Marble probability of NOT red (Lesson 64 WP #7)
            (r) => {
                const red = 4;
                const total = 10;
                const notRed = total - red;
                const correct = "3/5";
                const q = "Four of the ten marbles in a bag are red. If one marble is drawn from the bag, what ratio in simplest form expresses the probability that the marble will NOT be red?";
                const distractors = ["2/5", "4/10", "1/2"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Marbles that are not red: 10 − 4 = 6.",
                        "Probability = 6/10 = 3/5."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 11: Adding three fractions (Lesson 64 WP #8)
            (r) => {
                const q = "Simplify: 1/12 + 1/6 + 1/2";
                const correct = "3/4";
                const distractors = ["1/2", "5/6", "7/12"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Common denominator is 12: 1/6 = 2/12 and 1/2 = 6/12.",
                        "1/12 + 2/12 + 6/12 = 9/12 = 3/4."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 12: Proportion missing term (Lesson 64 WP #10)
            (r) => {
                const pairs = [
                    { num: 4, ans: 16 },
                    { num: 7, ans: 28 },
                    { num: 9, ans: 36 },
                    { num: 12, ans: 48 }
                ];
                const p = pairs[randInt(r, 0, pairs.length - 1)];
                const correct = "" + p.ans;
                const q = "Find the unknown number n: " + p.num + "/25 = n/100";
                const distractors = [
                    "" + (p.ans + 4),
                    "" + (p.ans - 4),
                    "" + (p.num * 2)
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Multiply numerator and denominator by 4: (" + p.num + " × 4)/(25 × 4) = " + p.ans + "/100.",
                        "n = " + p.ans + "."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 13: Reciprocal equation (Lesson 64 WP #11)
            (r) => {
                const q = "Solve for y: (3/8)y = 1";
                const correct = "2 2/3 (or 8/3)";
                const distractors = ["3/8", "1 1/3", "1"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "The product of a number and its reciprocal is 1.",
                        "The reciprocal of 3/8 is 8/3 = 2 2/3."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 14: Equation with decimal coefficient (Lesson 64 WP #12)
            (r) => {
                const q = "Solve for w: 12w = 0.0144";
                const correct = "0.0012";
                const distractors = ["0.012", "0.12", "0.00012"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "w = 0.0144 ÷ 12.",
                        "144 ÷ 12 = 12.",
                        "Placing decimal point 4 digits from right gives 0.0012."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 15: Decimal order of operations (Lesson 64 WP #13)
            (r) => {
                const q = "Evaluate: 1 − (0.2 + 0.48)";
                const correct = "0.32";
                const distractors = ["0.68", "0.22", "0.42"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Inside parentheses: 0.2 + 0.48 = 0.68.",
                        "Subtract from 1: 1 − 0.68 = 0.32."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 16: Two dozen erasers with sales tax (Lesson 64 WP #15)
            (r) => {
                const q = "What is the total cost of two dozen erasers that are priced at 50¢ each if 8% sales tax is added?";
                const correct = "$12.96";
                const distractors = ["$12.00", "$13.00", "$12.48"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Two dozen = 24 erasers.",
                        "24 × $0.50 = $12.00.",
                        "Tax: 8% of $12.00 = 0.08 × 12 = $0.96.",
                        "Total = $12.00 + $0.96 = $12.96."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 17: Quarters in dollars (Lesson 64 WP #16)
            (r) => {
                const d = [15, 20, 25, 30][randInt(r, 0, 3)];
                const qCount = d * 4;
                const correct = qCount + " quarters";
                const q = "The store manager put $" + d + ".00 worth of quarters in the change drawer. How many quarters are in $" + d + ".00?";
                const distractors = [
                    (qCount - 10) + " quarters",
                    (qCount + 10) + " quarters",
                    (d * 2) + " quarters"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Each dollar has 4 quarters.",
                        d + " × 4 = " + qCount + " quarters."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 18: Square-based pyramid geometry (Lesson 64 WP #17)
            (r) => {
                const q = "A pyramid with a square base has how many edges?";
                const correct = "8 edges";
                const distractors = ["5 edges", "6 edges", "10 edges"];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "A square-based pyramid has 4 edges around the square base and 4 triangular edges leading to the apex.",
                        "4 + 4 = 8 edges total."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            },
            // Category 19: Carousel circumference (Lesson 64 WP #26)
            (r) => {
                const radius = [10, 15, 20][randInt(r, 0, 2)];
                const dist = Math.round(2 * 3.14 * radius);
                const correct = dist + " feet";
                const q = "The radius of a carousel is " + radius + " feet. If the carousel turns around once, about how far does a person riding on the outer edge travel? (Use 3.14 for π, round to nearest foot).";
                const distractors = [
                    (dist - 10) + " feet",
                    (dist + 10) + " feet",
                    Math.round(3.14 * radius * radius) + " feet"
                ];
                const s = shuffle(r, [correct, ...distractors]);
                return {
                    question: q,
                    options: s.options,
                    correctIndex: s.correctIndex,
                    stepByStep: [
                        "Circumference = 2 × π × radius.",
                        "2 × 3.14 × " + radius + " = " + (2 * 3.14 * radius).toFixed(1) + " ≈ " + dist + " feet."
                    ],
                    lessonNum: 64,
                    lessonTitle: "Prime Factorization • Division by Primes • Factor Trees"
                };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`;

// Section 12 - Part 2: Lessons 114, 115, 116

module.exports = {
  getLesson114: () => `    // Lesson 114: Unit Multipliers
    114: (rng, qIndex) => {
        const framings = [
            // Category 0: Converting gallons to quarts using unit multipliers (Lesson 114 Practice Set e, #6)
            (r) => {
                const gal = randInt(r, 5, 16);
                const qt = gal * 4;
                const q = "Use a unit multiplier to convert " + gal + " gallons to quarts. (1 gal = 4 qt)";
                const s = shuffle(r, [qt + " quarts", (qt + 4) + " quarts", (qt - 4) + " quarts", (gal * 2) + " quarts"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [gal + " gal × (4 qt / 1 gal) = " + qt + " quarts."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 1: Converting quarts to gallons using unit multipliers (Lesson 114 Practice Set e)
            (r) => {
                const gal = randInt(r, 4, 14);
                const qt = gal * 4;
                const q = "Use a unit multiplier to convert " + qt + " quarts to gallons. (1 gal = 4 qt)";
                const s = shuffle(r, [gal + " gallons", (gal + 2) + " gallons", (gal - 2) + " gallons", (qt * 4) + " gallons"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [qt + " qt × (1 gal / 4 qt) = " + gal + " gallons."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 2: Converting feet to yards using unit multipliers (Lesson 114 Practice Set g)
            (r) => {
                const yd = randInt(r, 12, 35);
                const ft = yd * 3;
                const q = "Use a unit multiplier to convert " + ft + " feet to yards. (1 yd = 3 ft)";
                const s = shuffle(r, [yd + " yards", (yd + 3) + " yards", (yd - 3) + " yards", (ft * 3) + " yards"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [ft + " ft × (1 yd / 3 ft) = " + yd + " yards."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 3: Converting yards to feet using unit multipliers (Lesson 114 #15)
            (r) => {
                const yd = randInt(r, 40, 150);
                const ft = yd * 3;
                const q = "A landmark structure is approximately " + yd + " yards tall. Use a unit multiplier to convert this height to feet. (1 yd = 3 ft)";
                const s = shuffle(r, [ft + " feet", (ft + 30) + " feet", (ft - 30) + " feet", (yd * 2) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [yd + " yd × (3 ft / 1 yd) = " + ft + " feet."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 4: Converting meters to centimeters using unit multipliers (Lesson 114 Practice Set f)
            (r) => {
                const m = randInt(r, 15, 60);
                const cm = m * 100;
                const q = "Use a unit multiplier to convert " + m + " meters to centimeters. (1 m = 100 cm)";
                const s = shuffle(r, [cm.toLocaleString('en-US') + " cm", (cm / 10).toLocaleString('en-US') + " cm", (cm * 10).toLocaleString('en-US') + " cm", (cm + 100).toLocaleString('en-US') + " cm"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [m + " m × (100 cm / 1 m) = " + cm.toLocaleString('en-US') + " cm."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 5: Converting centimeters to meters using unit multipliers (Lesson 114 Practice Set d)
            (r) => {
                const m = randInt(r, 3, 20);
                const cm = m * 100;
                const q = "Use a unit multiplier to convert " + cm + " centimeters to meters. (1 m = 100 cm)";
                const s = shuffle(r, [m + " meters", (m * 10) + " meters", (m + 5) + " meters", (m / 10) + " meters"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [cm + " cm × (1 m / 100 cm) = " + m + " meters."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 6: Matinee tickets purchase with budget (Lesson 114 #1)
            (r) => {
                const names = ["Maela", "Elena", "Carlos", "Darius", "Chloe"];
                const name = names[randInt(r, 0, names.length - 1)];
                const cost = randInt(r, 6, 9);
                const budget = randInt(r, 20, 45);
                const tickets = Math.floor(budget / cost);
                const q = "Tickets to the matinee are $" + cost + " each. How many tickets can " + name + " buy with $" + budget + "?";
                const s = shuffle(r, [tickets + " tickets", (tickets + 1) + " tickets", (tickets - 1) + " tickets", (tickets + 2) + " tickets"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + budget + " ÷ $" + cost + " = " + tickets + " with $" + (budget % cost) + " remaining. So " + name + " can buy " + tickets + " tickets."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 7: Track laps running pace (Lesson 114 #2)
            (r) => {
                const names = ["Maria", "Jamal", "Andre", "Keisha", "Priya"];
                const name = names[randInt(r, 0, names.length - 1)];
                const laps1 = 3;
                const pace = randInt(r, 2, 4);
                const time1 = laps1 * pace;
                const totalLaps = 4;
                const totalTime = totalLaps * pace;
                const q = name + " ran four laps of the track at an even pace. If it took " + time1 + " minutes to run the first three laps, how long did it take to run all four laps?";
                const s = shuffle(r, [totalTime + " minutes", (totalTime + 2) + " minutes", (totalTime - 2) + " minutes", (totalTime + 4) + " minutes"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Pace per lap = " + time1 + " ÷ " + laps1 + " = " + pace + " minutes per lap. For four laps: 4 × " + pace + " = " + totalTime + " minutes."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 8: Fraction of group that did not participate (Lesson 114 #3)
            (r) => {
                const total = 25;
                const played = [15, 20, 10][randInt(r, 0, 2)];
                const notPlayed = total - played;
                const ans = formatFraction(notPlayed, total);
                const q = played + " of the " + total + " members played in the game. What fraction of the members did not play?";
                const s = shuffle(r, [ans, formatFraction(played, total), formatFraction(notPlayed + 2, total), formatFraction(1, total)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Number who did not play = " + total + " − " + played + " = " + notPlayed + ". As a fraction: " + notPlayed + "/" + total + " = " + ans + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 9: Fractional acreage not planted (Lesson 114 #4)
            (r) => {
                const acres = randInt(r, 12, 28) * 10;
                const ans = (acres * 3) / 5;
                const q = "Two fifths of the " + acres + " acres were planted with alfalfa. How many acres were not planted with alfalfa?";
                const s = shuffle(r, [ans + " acres", (acres - ans) + " acres", (ans + 10) + " acres", (ans - 10) + " acres"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The fraction not planted is 1 − 2/5 = 3/5. Acres not planted = 3/5 × " + acres + " = " + ans + " acres."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 10: Place value digit identification in large number (Lesson 114 #5)
            (r) => {
                const numStr = "94,763,581";
                const places = [
                    { name: "ten-thousands", digit: "6" },
                    { name: "hundred-thousands", digit: "7" },
                    { name: "millions", digit: "4" },
                    { name: "ten-millions", digit: "9" }
                ];
                const choice = places[randInt(r, 0, places.length - 1)];
                const q = "Which digit in " + numStr + " is in the " + choice.name + " place?";
                const s = shuffle(r, [choice.digit, "3", "5", "8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["In " + numStr + ", the digit in the " + choice.name + " place is " + choice.digit + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 11: Estimating sum of dollar amounts to nearest dollar (Lesson 114 #7)
            (r) => {
                const c1 = randInt(r, 3400, 3800);
                const c2 = randInt(r, 4100, 4400);
                const c3 = randInt(r, 2500, 2800);
                const s1 = (c1 / 100).toFixed(2);
                const s2 = (c2 / 100).toFixed(2);
                const s3 = (c3 / 100).toFixed(2);
                const estSum = Math.round(c1 / 100) + Math.round(c2 / 100) + Math.round(c3 / 100);
                const q = "Estimate the sum of $" + s1 + ", $" + s2 + ", and $" + s3 + " to the nearest dollar.";
                const s = shuffle(r, ["$" + estSum, "$" + (estSum + 5), "$" + (estSum - 5), "$" + (estSum + 10)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Round each: $" + s1 + " ≈ $" + Math.round(c1 / 100) + ", $" + s2 + " ≈ $" + Math.round(c2 / 100) + ", $" + s3 + " ≈ $" + Math.round(c3 / 100) + ". Sum = $" + estSum + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 12: Order of operations with exponents and division (Lesson 114 #8)
            (r) => {
                const q = "Simplify: 4 + 4² ÷ 2⁴ − 4";
                const ans = "1";
                const s = shuffle(r, [ans, "4", "0", "2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["4² = 16 and 2⁴ = 16. Then 16 ÷ 16 = 1. So 4 + 1 − 4 = 1."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 13: Adding three mixed numbers with unlike denominators (Lesson 114 #9)
            (r) => {
                const q = "Add: 3 5/8 in. + 2 1/4 in. + 4 1/2 in.";
                const ans = "10 3/8 in.";
                const s = shuffle(r, [ans, "9 7/8 in.", "10 1/8 in.", "9 5/8 in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert to common denominator 8: 3 5/8 + 2 2/8 + 4 4/8 = 9 11/8 = 10 3/8 in."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 14: Dividing decimal by fraction: 3.25 ÷ 2/3 (Lesson 114 #13)
            (r) => {
                const q = "Simplify: 3.25 ÷ 2/3 (express as a mixed number)";
                const ans = "4 7/8";
                const s = shuffle(r, [ans, "4 3/8", "5 1/8", "3 7/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["3.25 = 13/4. 13/4 ÷ 2/3 = 13/4 × 3/2 = 39/8 = 4 7/8."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 15: Two-step linear equation: am − b = c (Lesson 114 #14)
            (r) => {
                const a = 3;
                const m = randInt(r, 20, 35);
                const b = 10;
                const c = a * m - b;
                const q = "Solve for m: " + a + "m − " + b + " = " + c;
                const s = shuffle(r, ["" + m, "" + (m + 2), "" + (m - 2), "" + (m + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "m = " + c + " + " + b + " = " + (c + b) + "; m = " + (c + b) + " ÷ " + a + " = " + m + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 16: Proportion with decimal: a / b = c / m (Lesson 114 #15)
            (r) => {
                const a = 3, b = 2;
                const c = "1.8";
                const mVal = "1.2";
                const q = "Solve the proportion: " + a + "/" + b + " = " + c + "/m";
                const s = shuffle(r, [mVal, "2.4", "1.5", "0.9"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "m = " + b + " × " + c + " = 3.6; m = 3.6 ÷ 3 = " + mVal + "."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 17: Distance, rate, time travel question (Lesson 114 #17)
            (r) => {
                const names = ["Takara", "Mateo", "Keisha", "Darius", "Elena"];
                const name = names[randInt(r, 0, names.length - 1)];
                const hours = randInt(r, 5, 7);
                const speed = 55;
                const traveled = hours * speed;
                const q = name + " leaves on a trip and travels for " + hours + " hours at an average speed of " + speed + " miles per hour. How far does " + name + " travel?";
                const s = shuffle(r, [traveled + " miles", (traveled + 25) + " miles", (traveled - 25) + " miles", (traveled + 55) + " miles"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distance = speed × time = " + speed + " mph × " + hours + " hr = " + traveled + " miles."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 18: Area of stepped/L-shaped polygon (Lesson 114 #18)
            (r) => {
                const area = 15 * 10 - 6 * 2;
                const q = "A polygon is formed by removing a 6 m by 2 m rectangular notch from a 15 m by 10 m rectangle. What is the area of this polygon?";
                const s = shuffle(r, [area + " m²", (15 * 10) + " m²", (area + 10) + " m²", (area - 10) + " m²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = (15 × 10) − (6 × 2) = 150 − 12 = " + area + " m²."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            },
            // Category 19: Survey response percentage to find total mailed (Lesson 114 #22)
            (r) => {
                const pct = [4, 5, 8, 10][randInt(r, 0, 3)];
                const total = randInt(r, 8, 15) * 100;
                const resp = total * (pct / 100);
                const q = resp + " people responded to a survey, a number that represented " + pct + "% of the surveys mailed. How many surveys were mailed in all?";
                const s = shuffle(r, [total + " surveys", (total + 200) + " surveys", (total - 200) + " surveys", (total / 10) + " surveys"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Total = " + resp + " ÷ " + (pct / 100) + " = " + total + " surveys."], lessonNum: 114, lessonTitle: "Unit Multipliers" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`,

  getLesson115: () => `    // Lesson 115: Writing Percents as Fractions, Part 2
    115: (rng, qIndex) => {
        const framings = [
            // Category 0: Converting 33 1/3% or 66 2/3% to fraction (Lesson 115 #2)
            (r) => {
                const isThird = randInt(r, 0, 1) === 0;
                const pctStr = isThird ? "33 1/3%" : "66 2/3%";
                const ans = isThird ? "1/3" : "2/3";
                const q = "Convert the repeating percent " + pctStr + " to a fraction in simplest form.";
                const s = shuffle(r, [ans, isThird ? "33/100" : "66/100", isThird ? "1/4" : "3/4", isThird ? "3/10" : "7/10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pctStr + " = (" + (isThird ? "100/3" : "200/3") + ") / 100 = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 1: Converting 16 2/3% or 83 1/3% to fraction (Lesson 115 #2)
            (r) => {
                const isSixth = randInt(r, 0, 1) === 0;
                const pctStr = isSixth ? "16 2/3%" : "83 1/3%";
                const ans = isSixth ? "1/6" : "5/6";
                const q = "Express " + pctStr + " as a reduced fraction.";
                const s = shuffle(r, [ans, isSixth ? "1/3" : "2/3", isSixth ? "16/100" : "83/100", isSixth ? "1/8" : "7/8"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [pctStr + " = (" + (isSixth ? "50/3" : "250/3") + ") / 100 = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 2: Converting 12 1/2%, 37 1/2%, 62 1/2%, or 87 1/2% to fraction (Lesson 115 #2)
            (r) => {
                const items = [
                    { pct: "12 1/2%", ans: "1/8", num: 25 },
                    { pct: "37 1/2%", ans: "3/8", num: 75 },
                    { pct: "62 1/2%", ans: "5/8", num: 125 },
                    { pct: "87 1/2%", ans: "7/8", num: 175 }
                ];
                const choice = items[randInt(r, 0, items.length - 1)];
                const q = "Write the mixed percent " + choice.pct + " as a fraction in simplest form.";
                const s = shuffle(r, [choice.ans, "1/4", "3/4", "1/2"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [choice.pct + " = (" + choice.num + "/2) / 100 = " + choice.num + "/200 = " + choice.ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 3: Converting 14 2/7% to fraction (Lesson 115 #2)
            (r) => {
                const q = "What fraction in simplest form is equivalent to 14 2/7%?";
                const ans = "1/7";
                const s = shuffle(r, [ans, "2/7", "1/14", "14/100"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["14 2/7% = (100/7) / 100 = 100/700 = 1/7."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 4: Converting 8 1/3% to fraction (Lesson 115 #2)
            (r) => {
                const q = "Find the simplest fraction equal to 8 1/3%.";
                const ans = "1/12";
                const s = shuffle(r, [ans, "1/8", "1/6", "8/100"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["8 1/3% = (25/3) / 100 = 25/300 = 1/12."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 5: Test score questions missed vs percent correct (Lesson 115 #3)
            (r) => {
                const names = ["Ines", "Mateo", "Darius", "Chloe", "Andre"];
                const name = names[randInt(r, 0, names.length - 1)];
                const missed = [2, 3, 4, 5][randInt(r, 0, 3)];
                const pctCorrect = 90;
                const missedPct = 10;
                const total = missed * 10;
                const q = name + " missed " + missed + " questions on the test but answered " + pctCorrect + "% of the questions correctly. How many questions were on the test?";
                const s = shuffle(r, [total + " questions", (total + 10) + " questions", (total - 10) + " questions", (total + 20) + " questions"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Missed percentage = 100% − " + pctCorrect + "% = " + missedPct + "%. Total questions = " + missed + " ÷ 0." + missedPct + " = " + total + " questions."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 6: Speed of sound distance in air (Lesson 115 #4)
            (r) => {
                const speed = 331;
                const time = [30, 45, 60, 90][randInt(r, 0, 3)];
                const dist = speed * time;
                const q = "Sound travels about " + speed + " meters per second in air. How far will it travel in " + time + " seconds?";
                const s = shuffle(r, [dist.toLocaleString('en-US') + " m", (dist + 1000).toLocaleString('en-US') + " m", (dist - 1000).toLocaleString('en-US') + " m", (speed * 100).toLocaleString('en-US') + " m"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Distance = speed × time = " + speed + " m/s × " + time + " s = " + dist.toLocaleString('en-US') + " meters."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 7: Expanded notation with powers of 10 (Lesson 115 #5)
            (r) => {
                const a = randInt(r, 4, 8);
                const b = randInt(r, 3, 9);
                const val = a * 10000 + b * 100;
                const q = "Write the standard number for: (" + a + " × 10⁴) + (" + b + " × 10²)";
                const s = shuffle(r, [val.toLocaleString('en-US'), (a * 1000 + b * 10).toLocaleString('en-US'), (a * 100000 + b * 100).toLocaleString('en-US'), (a * 10000 + b * 10).toLocaleString('en-US')]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(" + a + " × 10,000) + (" + b + " × 100) = " + (a * 10000) + " + " + (b * 100) + " = " + val.toLocaleString('en-US') + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 8: Circle diameter from decimal radius (Lesson 115 #6)
            (r) => {
                const rVal = [0.45, 0.65, 0.75, 0.85, 1.25][randInt(r, 0, 4)];
                const diam = (rVal * 2).toFixed(2);
                const q = "If the radius of a circle is " + rVal + " meters, what is its diameter?";
                const s = shuffle(r, [parseFloat(diam) + " meters", (rVal * 4).toFixed(2) + " meters", (rVal / 2).toFixed(2) + " meters", (parseFloat(diam) + 0.5).toFixed(2) + " meters"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Diameter = 2 × radius = 2 × " + rVal + " = " + parseFloat(diam) + " meters."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 9: Estimating product of mixed numbers to nearest whole number (Lesson 115 #7)
            (r) => {
                const q = "Round the product of 3 2/3 and 2 2/5 to the nearest whole number.";
                const ans = "9";
                const s = shuffle(r, [ans, "8", "10", "6"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["11/3 × 12/5 = 132/15 = 44/5 = 8.8. Rounded to the nearest whole number is 9."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 10: Probability of two red marbles without replacement (Lesson 115 #8)
            (r) => {
                const red = 3;
                const white = 3;
                const q = "In a bag are " + red + " red marbles and " + white + " white marbles. If two marbles are taken from the bag at the same time, what is the probability that both marbles will be red?";
                const ans = "1/5";
                const s = shuffle(r, [ans, "1/4", "1/2", "3/10"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["P(first red) = 3/6 = 1/2. P(second red) = 2/5. P(both red) = 1/2 × 2/5 = 2/10 = 1/5."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 11: Two-step linear equation: 7x − 3 = 39 (Lesson 115 #11)
            (r) => {
                const a = randInt(r, 5, 9);
                const x = randInt(r, 5, 12);
                const b = randInt(r, 2, 7);
                const c = a * x - b;
                const q = "Solve for x: " + a + "x − " + b + " = " + c;
                const s = shuffle(r, ["" + x, "" + (x + 2), "" + (x - 2), "" + (x + 5)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "x = " + c + " + " + b + " = " + (c + b) + "; x = " + (c + b) + " ÷ " + a + " = " + x + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 12: Proportion: x / a = b / c (Lesson 115 #12)
            (r) => {
                const a = 7, b = 35, c = 5;
                const xVal = (a * b) / c;
                const q = "Solve the proportion: x/" + a + " = " + b + "/" + c;
                const s = shuffle(r, ["" + xVal, "" + (xVal + 7), "" + (xVal - 7), "" + (xVal * 2)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [c + "x = " + a + " × " + b + " = " + (a * b) + "; x = " + (a * b) + " ÷ " + c + " = " + xVal + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 13: Signed integer multiplication: (−a)(−b) (Lesson 115 #13)
            (r) => {
                const a = randInt(r, 3, 6);
                const b = randInt(r, 12, 18);
                const ans = a * b;
                const q = "Simplify: (−" + a + ")(−" + b + ")";
                const s = shuffle(r, ["" + ans, "" + (-ans), "" + (ans + 6), "" + (ans - 6)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["(−" + a + ") × (−" + b + ") = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 14: Four-term signed integer arithmetic (Lesson 115 #14)
            (r) => {
                const q = "Simplify: −6 + −7 + +5 − −8";
                const ans = "0";
                const s = shuffle(r, [ans, "16", "−16", "−4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["−6 + (−7) = −13; −13 + 5 = −8; −8 − (−8) = −8 + 8 = 0."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 15: Decimal order of operations with parentheses (Lesson 115 #15)
            (r) => {
                const q = "Simplify: 0.12 ÷ (12 ÷ 0.4)";
                const ans = "0.004";
                const s = shuffle(r, [ans, "0.04", "0.4", "0.001"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Inside parentheses: 12 ÷ 0.4 = 30. Then 0.12 ÷ 30 = 0.004."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 16: Fraction 22/7 as rounded decimal (Lesson 115 #16)
            (r) => {
                const q = "Write 22/7 as a decimal rounded to the hundredths place.";
                const ans = "3.14";
                const s = shuffle(r, [ans, "3.15", "3.12", "3.24"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["22 ÷ 7 ≈ 3.142857..., which rounds to 3.14."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 17: Square root of power of 10 (10,000 or 1,000,000) (Lesson 115 #17)
            (r) => {
                const isTenK = randInt(r, 0, 1) === 0;
                const N = isTenK ? 10000 : 1000000;
                const ans = isTenK ? "100" : "1,000";
                const q = "What whole number multiplied by itself equals " + N.toLocaleString('en-US') + "?";
                const s = shuffle(r, [ans, isTenK ? "1,000" : "100", isTenK ? "10" : "10,000", isTenK ? "50" : "500"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["√" + N.toLocaleString('en-US') + " = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 18: Container capacity rate: N containers hold X oz (Lesson 115 #22)
            (r) => {
                const c1 = 7;
                const oz1 = 84;
                const unit = oz1 / c1; // 12
                const c2 = 10;
                const ans = c2 * unit;
                const q = "If seven identical containers can hold a total of 84 ounces, how many ounces can 10 containers hold?";
                const s = shuffle(r, [ans + " ounces", (ans + 12) + " ounces", (ans - 12) + " ounces", (ans + 24) + " ounces"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Capacity per container = 84 ÷ 7 = 12 oz. 10 containers hold 10 × 12 = " + ans + " ounces."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            },
            // Category 19: Infant weight gain in pounds and ounces mixed measures (Lesson 115 #26)
            (r) => {
                const names = ["Rosita", "Maya", "Elena", "Chloe", "Keisha"];
                const name = names[randInt(r, 0, names.length - 1)];
                const w1_lb = 7, w1_oz = 9;
                const w2_lb = 9, w2_oz = 7;
                const ans = "1 pound 14 ounces";
                const q = "When " + name + " was born, she weighed " + w1_lb + " pounds " + w1_oz + " ounces. Two months later she weighed " + w2_lb + " pounds " + w2_oz + " ounces. How much weight did she gain in two months?";
                const s = shuffle(r, [ans, "2 pounds 2 ounces", "1 pound 12 ounces", "2 pounds 14 ounces"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Regroup 1 lb as 16 oz: 9 lb 7 oz = 8 lb 23 oz. Subtract: (8 lb 23 oz) − (7 lb 9 oz) = " + ans + "."], lessonNum: 115, lessonTitle: "Writing Percents as Fractions, Part 2" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`,

  getLesson116: () => `    // Lesson 116: Compound Interest
    116: (rng, qIndex) => {
        const framings = [
            // Category 0: Compound interest after 2 or 3 years (Lesson 116 Practice Set a, b)
            (r) => {
                const names = ["Mrs. Vasquez", "Mr. Alvarez", "Dr. Chen", "Ms. Rodriguez"];
                const name = names[randInt(r, 0, names.length - 1)];
                const p = 2000;
                const rPct = 10;
                const years = [2, 3][randInt(r, 0, 1)];
                const amt = years === 2 ? 2420 : 2662;
                const ans = formatCurrency(amt);
                const q = name + " deposited $" + p + " in an account that pays " + rPct + "% interest compounded annually. If no withdrawals are made, how much money will be in the account after " + years + " years?";
                const s = shuffle(r, [ans, formatCurrency(p + (p * rPct / 100) * years), formatCurrency(amt + 100), formatCurrency(amt - 100)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["After 1 yr: $" + (p * 1.1).toFixed(2) + ". After 2 yr: $" + (p * 1.21).toFixed(2) + (years === 3 ? ". After 3 yr: $" + (p * 1.331).toFixed(2) : "") + ". Total = " + ans + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 1: Area of right triangle from 3 side lengths (Lesson 116 #1)
            (r) => {
                const triples = [
                    [6, 8, 10],
                    [5, 12, 13],
                    [9, 12, 15]
                ];
                const [a, b, c] = triples[randInt(r, 0, triples.length - 1)];
                const area = (a * b) / 2;
                const q = "A right triangle has side lengths of " + a + " inches, " + b + " inches, and " + c + " inches. What is the area of the triangle?";
                const s = shuffle(r, [area + " sq in.", (a * b) + " sq in.", (area + 6) + " sq in.", (area - 6) + " sq in."]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["The legs are the two shorter sides, " + a + " in. and " + b + " in. Area = 1/2 × base × height = 1/2 × " + a + " × " + b + " = " + area + " sq in."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 2: Proportional cost of ribbon by length (Lesson 116 #2)
            (r) => {
                const l1 = 5;
                const cost1 = "1.20";
                const l2 = 10;
                const cost2 = "2.40";
                const q = "If " + l1 + " feet of ribbon costs $" + cost1 + ", how much would " + l2 + " feet of ribbon cost?";
                const s = shuffle(r, ["$" + cost2, "$3.00", "$2.20", "$2.60"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [l2 + " feet is twice as long as " + l1 + " feet, so the cost is 2 × $" + cost1 + " = $" + cost2 + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 3: A is what percent of B? (Lesson 116 #3)
            (r) => {
                const a = 6, b = 15;
                const pct = (a / b) * 100;
                const q = a + " is what percent of " + b + "?";
                const s = shuffle(r, [pct + "%", (pct + 10) + "%", (pct - 10) + "%", (pct + 20) + "%"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "/" + b + " = 2/5 = 40/100 = " + pct + "%."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 4: Multiple-choice guessing probability (Lesson 116 #4)
            (r) => {
                const q = "A multiple-choice question has four choices. If a student simply guesses at random, what is the probability of guessing the correct answer?";
                const ans = "1/4 (25%)";
                const s = shuffle(r, [ans, "1/2 (50%)", "1/3 (33%)", "1/5 (20%)"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["There is 1 correct choice out of 4 possible choices: 1/4 = 25%."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 5: Cafeteria lunch ratio: buy vs bring from home (Lesson 116 #5)
            (r) => {
                const total = 30;
                const buy = 25;
                const ans = "5 to 1";
                const q = "If 25 of the 30 students in the class buy lunch in the school cafeteria, what is the ratio of students who buy lunch in the school cafeteria to students who bring their lunch from home?";
                const s = shuffle(r, [ans, "1 to 5", "5 to 6", "6 to 5"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Number bringing lunch = 30 − 25 = 5. Ratio of buy to bring = 25 to 5 = 5 to 1."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 6: Scientific notation to standard number: a.b × 10^9 (Lesson 116 #6)
            (r) => {
                const a = randInt(r, 1, 9);
                const b = randInt(r, 1, 9);
                const val = (a + b / 10) * 1000000000;
                const q = "Write " + a + "." + b + " × 10⁹ as a standard number.";
                const s = shuffle(r, [val.toLocaleString('en-US'), (val / 10).toLocaleString('en-US'), (val * 10).toLocaleString('en-US'), (val + 10000000).toLocaleString('en-US')]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Multiply by 10⁹ by moving the decimal 9 places right: " + val.toLocaleString('en-US') + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 7: Formula evaluation: cost c = pw (Lesson 116 #7)
            (r) => {
                const p = 1.25;
                const w = 5.5;
                const c = (p * w).toFixed(2);
                const ans = "$" + c;
                const q = "The cost (c) of apples is related to price per pound (p) and weight (w) by c = pw. Find the cost when p is $1.25 per pound and w is 5 1/2 pounds. (Round to the nearest cent.)";
                const s = shuffle(r, [ans, "$6.50", "$7.25", "$6.75"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["c = $1.25 × 5.5 = $6.875, which rounds to $" + c + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 8: Ordering decimals from least to greatest (Lesson 116 #8)
            (r) => {
                const list = ["9.9", "9.95", "9.925", "9.09"];
                const sorted = "9.09, 9.9, 9.925, 9.95";
                const q = "Arrange these numbers in order from least to greatest: " + list.join(", ");
                const s = shuffle(r, [sorted, "9.95, 9.925, 9.9, 9.09", "9.09, 9.925, 9.9, 9.95", "9.09, 9.9, 9.95, 9.925"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Compare place values: 9.09 < 9.900 < 9.925 < 9.950. Ordered: " + sorted + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 9: Two-step linear equation: ax + b = c (Lesson 116 #11)
            (r) => {
                const a = 9;
                const x = 7;
                const b = 17;
                const c = a * x + b;
                const q = "Solve and check: " + a + "x + " + b + " = " + c;
                const s = shuffle(r, ["" + x, "" + (x + 2), "" + (x - 2), "" + (x + 4)]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [a + "x = " + c + " − " + b + " = " + (c - b) + "; x = " + (c - b) + " ÷ " + a + " = " + x + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 10: Proportion with decimal: x / a = b / c (Lesson 116 #12)
            (r) => {
                const a = 3, b = "1.6", c = "1.2";
                const ans = "4";
                const q = "Solve the proportion: x/" + a + " = " + b + "/" + c;
                const s = shuffle(r, [ans, "3.6", "4.8", "2.4"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["1.2x = 3 × 1.6 = 4.8; x = 4.8 ÷ 1.2 = " + ans + "."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 11: Multi-term signed integer arithmetic (Lesson 116 #13)
            (r) => {
                const q = "Simplify: −6 + −4 − +3 − −8";
                const ans = "−5";
                const s = shuffle(r, [ans, "−21", "5", "−11"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["−6 + (−4) = −10; −10 − 3 = −13; −13 − (−8) = −13 + 8 = −5."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 12: Sum of mixed numbers and decimals as decimal (Lesson 116 #14)
            (r) => {
                const q = "Find the sum as a decimal: 6 3/4 + 3 1/2 + 4.6";
                const ans = "14.85";
                const s = shuffle(r, [ans, "14.65", "15.05", "13.85"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Convert fractions to decimals: 6.75 + 3.5 + 4.6 = 14.85."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 13: Height conversion: yards to feet using unit multiplier (Lesson 116 #15)
            (r) => {
                const yd = 210;
                const ft = yd * 3;
                const q = "The Gateway Arch in St. Louis is approximately " + yd + " yards tall. How tall is it in feet? (1 yd = 3 ft)";
                const s = shuffle(r, [ft + " feet", (ft + 30) + " feet", (ft - 30) + " feet", (yd * 2) + " feet"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: [yd + " yd × (3 ft / 1 yd) = " + ft + " feet."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 14: Prime factorization using exponents (Lesson 116 #16)
            (r) => {
                const N = 648;
                const ans = "2³ × 3⁴";
                const q = "Write the prime factorization of " + N + " using exponents.";
                const s = shuffle(r, [ans, "2⁴ × 3³", "2³ × 3³", "2² × 3⁵"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["648 ÷ 8 = 81 = 3⁴. So 648 = 2³ × 3⁴."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 15: Unit price: cost per ounce (Lesson 116 #17)
            (r) => {
                const oz = 32;
                const total = "3.84";
                const ans = "$0.12";
                const q = "If a " + oz + "-ounce box of cereal costs $" + total + ", what is the cost per ounce?";
                const s = shuffle(r, [ans + " per ounce", "$0.14 per ounce", "$0.10 per ounce", "$0.15 per ounce"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["$" + total + " ÷ " + oz + " = " + ans + " per ounce."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 16: Area of trapezoid combining rectangle and triangle (Lesson 116 #18)
            (r) => {
                const rectW = 8;
                const h = 6;
                const triB = 4;
                const rectArea = rectW * h;
                const triArea = (triB * h) / 2;
                const totalArea = rectArea + triArea;
                const q = "Find the area of a trapezoid formed by combining a rectangle of base " + rectW + " m and height " + h + " m with a right triangle of base " + triB + " m and height " + h + " m.";
                const s = shuffle(r, [totalArea + " m²", rectArea + " m²", (totalArea + 6) + " m²", (totalArea - 6) + " m²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Rectangle area = " + rectW + " × " + h + " = " + rectArea + " m². Triangle area = 1/2 × " + triB + " × " + h + " = " + triArea + " m². Total area = " + rectArea + " + " + triArea + " = " + totalArea + " m²."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 17: Circle area from radius (Lesson 116 #19)
            (r) => {
                const rVal = 10;
                const area = 314;
                const q = "The radius of a circle is " + rVal + " cm. Use 3.14 for π to calculate the area of the circle.";
                const s = shuffle(r, [area + " cm²", "62.8 cm²", "31.4 cm²", "628 cm²"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Area = π × r² = 3.14 × 10² = 3.14 × 100 = " + area + " cm²."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 18: Volume of pyramid as 1/3 volume of cube (Lesson 116 #20)
            (r) => {
                const sVal = 3;
                const cubeVol = sVal * sVal * sVal;
                const pyrVol = cubeVol / 3;
                const q = "The volume of a pyramid is 1/3 the volume of a cube with edge length " + sVal + " cm. What is the volume of the pyramid?";
                const s = shuffle(r, [pyrVol + " cm³", cubeVol + " cm³", (pyrVol * 2) + " cm³", (pyrVol + 3) + " cm³"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["Cube volume = " + sVal + "³ = " + cubeVol + " cm³. Pyramid volume = 1/3 × " + cubeVol + " = " + pyrVol + " cm³."], lessonNum: 116, lessonTitle: "Compound Interest" };
            },
            // Category 19: Assigning students to rooms with two room sizes (Lesson 116 #23)
            (r) => {
                const totalStudents = 306;
                const totalRooms = 10;
                const q = totalStudents + " students were assigned to " + totalRooms + " rooms so that there were 30 or 31 students in each room. How many rooms had exactly 30 students?";
                const ans = "4 rooms";
                const s = shuffle(r, [ans, "6 rooms", "5 rooms", "3 rooms"]);
                return { question: q, options: s.options, correctIndex: s.correctIndex, stepByStep: ["If all 10 rooms had 31 students, there would be 310 students. Since there are 306 students, 310 − 306 = 4 rooms had 30 students."], lessonNum: 116, lessonTitle: "Compound Interest" };
            }
        ];
        return pickFraming(framings, rng, qIndex);
    },`
};

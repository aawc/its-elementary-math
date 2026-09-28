const fs = require('fs');

const curriculum = JSON.parse(fs.readFileSync('curriculum.json', 'utf8'));

const sections = {};

curriculum.forEach(lesson => {
    if (!sections[lesson.section]) {
        sections[lesson.section] = [];
    }
    sections[lesson.section].push(lesson);
});

for (const [sectionId, lessons] of Object.entries(sections)) {
    let content = `import { randInt, generateDistractors, formatCurrency, finalizeQuestion, pick } from './utils.js';\n\n`;
    content += `const generators = {};\n\n`;
    
    for (const lesson of lessons) {
        content += `// Lesson ${lesson.number}: ${lesson.title}\n`;
        content += `generators[${lesson.number}] = function(rng) {\n`;
        content += `    const title = ${JSON.stringify(lesson.title)};\n`;
        content += `    const topics = ${JSON.stringify(lesson.topics)};\n`;
        content += `    const lessonNum = ${lesson.number};\n`;
        
        // 2-3 distinct archetypes
        content += `    const archetype = randInt(rng, 1, 3);\n`;
        
        let logic = ``;
        logic += `    let a = randInt(rng, 10, 100);\n`;
        logic += `    let b = randInt(rng, 1, 50);\n`;
        logic += `    let correctAns;\n`;
        logic += `    let question;\n`;
        logic += `    let type = "number";\n`;
        logic += `    let stepByStep = [];\n`;
        
        // Simple heuristics based on title topics
        logic += `    let isCurrency = title.toLowerCase().includes('money');\n`;
        logic += `    if (isCurrency) type = 'currency';\n`;
        
        logic += `    let operation = 'add';\n`;
        logic += `    let t = title.toLowerCase();\n`;
        logic += `    if (t.includes('fraction')) type = 'fraction';\n`;
        logic += `    if (t.includes('divi')) operation = 'divide';\n`;
        logic += `    else if (t.includes('multipl')) operation = 'multiply';\n`;
        logic += `    else if (t.includes('subtract')) operation = 'subtract';\n`;
        
        logic += `    if (type === 'fraction') {\n`;
        logic += `        if (archetype <= 2) {\n`;
        logic += `            correctAns = \`\${a}/\${a+b}\`;\n`;
        logic += `            question = \`What fraction represents \${a} out of \${a+b} parts?\`;\n`;
        logic += `            stepByStep = [\`The part is \${a} and the whole is \${a+b}.\`, \`The fraction is \${correctAns}.\`];\n`;
        logic += `        } else {\n`;
        logic += `            correctAns = \`\${b}/\${a+b}\`;\n`;
        logic += `            question = \`A pizza has \${a+b} slices. If \${a} are eaten, what fraction remains?\`;\n`;
        logic += `            stepByStep = [\`Total is \${a+b}. Remaining is \${a+b} - \${a} = \${b}.\`, \`The fraction is \${correctAns}.\`];\n`;
        logic += `        }\n`;
        logic += `    } else if (operation === 'multiply') {\n`;
        logic += `        a = randInt(rng, 2, 12);\n`;
        logic += `        b = randInt(rng, 2, 12);\n`;
        logic += `        correctAns = isCurrency ? formatCurrency(a * b) : a * b;\n`;
        logic += `        let aStr = isCurrency ? formatCurrency(a) : a;\n`;
        logic += `        if (archetype === 1) {\n`;
        logic += `            question = \`What is \${aStr} × \${b}?\`;\n`;
        logic += `        } else if (archetype === 2) {\n`;
        logic += `            question = \`If you have \${b} groups of \${aStr}, how much total?\`;\n`;
        logic += `        } else {\n`;
        logic += `            question = \`Calculate \${aStr} multiplied by \${b}.\`;\n`;
        logic += `        }\n`;
        logic += `        stepByStep = [\`Multiply \${aStr} by \${b}.\`, \`Result is \${correctAns}\`];\n`;
        logic += `    } else if (operation === 'divide') {\n`;
        logic += `        b = randInt(rng, 2, 12);\n`;
        logic += `        let ans = randInt(rng, 2, 12);\n`;
        logic += `        a = b * ans;\n`;
        logic += `        correctAns = isCurrency ? formatCurrency(ans) : ans;\n`;
        logic += `        let aStr = isCurrency ? formatCurrency(a) : a;\n`;
        logic += `        if (archetype === 1) {\n`;
        logic += `            question = \`What is \${aStr} ÷ \${b}?\`;\n`;
        logic += `        } else if (archetype === 2) {\n`;
        logic += `            question = \`Share \${aStr} equally among \${b} groups. How much per group?\`;\n`;
        logic += `        } else {\n`;
        logic += `            question = \`If \${b} times a number is \${aStr}, what is the number?\`;\n`;
        logic += `        }\n`;
        logic += `        stepByStep = [\`Divide \${aStr} by \${b}.\`, \`Result is \${correctAns}\`];\n`;
        logic += `    } else if (operation === 'subtract') {\n`;
        logic += `        if (a < b) { let tmp = a; a = b; b = tmp; }\n`;
        logic += `        correctAns = isCurrency ? formatCurrency(a - b) : a - b;\n`;
        logic += `        let aStr = isCurrency ? formatCurrency(a) : a;\n`;
        logic += `        let bStr = isCurrency ? formatCurrency(b) : b;\n`;
        logic += `        if (archetype === 1) {\n`;
        logic += `            question = \`What is \${aStr} - \${bStr}?\`;\n`;
        logic += `        } else if (archetype === 2) {\n`;
        logic += `            question = \`You have \${aStr} and lose \${bStr}. How much remains?\`;\n`;
        logic += `        } else {\n`;
        logic += `            question = \`Subtract \${bStr} from \${aStr}.\`;\n`;
        logic += `        }\n`;
        logic += `        stepByStep = [\`Subtract \${bStr} from \${aStr}.\`, \`Result is \${correctAns}\`];\n`;
        logic += `    } else { // add\n`;
        logic += `        correctAns = isCurrency ? formatCurrency(a + b) : a + b;\n`;
        logic += `        let aStr = isCurrency ? formatCurrency(a) : a;\n`;
        logic += `        let bStr = isCurrency ? formatCurrency(b) : b;\n`;
        logic += `        if (archetype === 1) {\n`;
        logic += `            question = \`What is \${aStr} + \${bStr}?\`;\n`;
        logic += `        } else if (archetype === 2) {\n`;
        logic += `            question = \`Sum of \${aStr} and \${bStr}?\`;\n`;
        logic += `        } else {\n`;
        logic += `            question = \`You have \${aStr} and receive \${bStr} more. Total?\`;\n`;
        logic += `        }\n`;
        logic += `        stepByStep = [\`Add \${aStr} and \${bStr}.\`, \`Result is \${correctAns}\`];\n`;
        logic += `    }\n`;

        logic += `    let distractors = generateDistractors(correctAns, rng, type);\n`;
        logic += `    return finalizeQuestion(question, correctAns, distractors, stepByStep, "Think about the operation.", lessonNum, title, rng);\n`;
        
        content += logic;
        content += `};\n\n`;
    }
    
    content += `export default generators;\n`;
    fs.writeFileSync(`js/generators/section${sectionId}.js`, content, 'utf8');
}
console.log('Sections generated.');

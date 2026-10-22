const fs = require('fs');
const path = require('path');

const part1 = require('./sec12_part1.cjs');
const part2 = require('./sec12_part2.cjs');
const part3 = require('./sec12_part3.cjs');

const targetFile = path.resolve(__dirname, '../js/generators/section12.js');

const header = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
`;

const footer = `};
`;

const lessons = [
    part1.getLesson111(),
    part1.getLesson112(),
    part1.getLesson113(),
    part2.getLesson114(),
    part2.getLesson115(),
    part2.getLesson116(),
    part3.getLesson117(),
    part3.getLesson118(),
    part3.getLesson119(),
    part3.getLesson120()
];

const fullCode = header + lessons.join('\n\n') + '\n' + footer;

fs.writeFileSync(targetFile, fullCode, 'utf8');
console.log(`[OK] Successfully wrote ${targetFile} (${fullCode.length} characters)`);

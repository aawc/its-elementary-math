const fs = require('fs');
const path = require('path');

const part1 = require('./build_sec6_part1.cjs');
const part2 = require('./build_sec6_part2.cjs');

const targetFile = path.resolve(__dirname, '../js/generators/section6.js');

const content = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
${part1.getLesson51()}

${part1.getLesson52()}

${part1.getLesson53()}

${part1.getLesson54()}

${part1.getLesson55()}

${part2.getLesson56()}

${part2.getLesson57()}

${part2.getLesson58()}

${part2.getLesson59()}

${part2.getLesson60()}
};
`;

fs.writeFileSync(targetFile, content, 'utf8');
console.log(`[OK] Successfully assembled ${targetFile}`);

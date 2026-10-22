const fs = require('fs');
const path = require('path');
const part1 = require('./sec5_part1.cjs');
const part2 = require('./sec5_part2.cjs');

const targetFile = path.resolve(__dirname, '../js/generators/section5.js');

const header = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
`;

const footer = `\n`;

const fullCode = header + part1.getLessons41to45Code() + part2.getLessons46to50Code().replace(/\n\s*};\s*$/, '\n};\n');

fs.writeFileSync(targetFile, fullCode, 'utf8');
console.log(`[PASS] Successfully generated ${targetFile} (${fullCode.length} bytes)`);

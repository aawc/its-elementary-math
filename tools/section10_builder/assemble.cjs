const fs = require('fs');
const path = require('path');

const part1 = require('./part1.cjs');
const part2 = require('./part2.cjs');
const part3 = require('./part3.cjs');
const part4 = require('./part4.cjs');

const header = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
`;

const footer = `};
`;

const fullFile = header + part1 + part2 + part3 + part4 + footer;

const targetPath = path.resolve(__dirname, '../../js/generators/section10.js');
fs.writeFileSync(targetPath, fullFile, 'utf8');
console.log(`[OK] Successfully wrote Section 10 to ${targetPath} (${fullFile.length} bytes, ${fullFile.split('\n').length} lines)`);

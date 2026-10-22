const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../js/generators/section7.js');

const l61 = require('./section7_lessons/lesson61.cjs');
const l62 = require('./section7_lessons/lesson62.cjs');
const l63 = require('./section7_lessons/lesson63.cjs');
const l64 = require('./section7_lessons/lesson64.cjs');
const l65 = require('./section7_lessons/lesson65.cjs');
const l66 = require('./section7_lessons/lesson66.cjs');
const l67 = require('./section7_lessons/lesson67.cjs');
const l68 = require('./section7_lessons/lesson68.cjs');
const l69 = require('./section7_lessons/lesson69.cjs');
const l70 = require('./section7_lessons/lesson70.cjs');

const header = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
`;

const footer = `
};
`;

const fullCode = header + [l61, l62, l63, l64, l65, l66, l67, l68, l69, l70].join('\n') + footer;
fs.writeFileSync(targetFile, fullCode, 'utf8');
console.log('Successfully wrote section7.js! Total length:', fullCode.length);

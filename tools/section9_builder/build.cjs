const fs = require('fs');
const path = require('path');

const l81_83 = require('./lesson81_83.cjs');
const l84_86 = require('./lesson84_86.cjs');
const l87_88 = require('./lesson87_88.cjs');
const l89_90 = require('./lesson89_90.cjs');

const header = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {`;

// Note: l89_90 ends with "};", so remove the trailing "};" from l89_90 and close cleanly
let l89_90_trimmed = l89_90.trim();
if (l89_90_trimmed.endsWith('};')) {
    l89_90_trimmed = l89_90_trimmed.slice(0, -2).trim();
}

const content = header + l81_83 + l84_86 + l87_88 + '\n' + l89_90_trimmed + '\n};\n';

const targetFile = path.resolve(__dirname, '../../js/generators/section9.js');
fs.writeFileSync(targetFile, content, 'utf8');
console.log("[PASS] Successfully wrote js/generators/section9.js");

const fs = require('fs');
const path = require('path');

const lessons = [
    require('./section4_data/lesson31.cjs'),
    require('./section4_data/lesson32.cjs'),
    require('./section4_data/lesson33.cjs'),
    require('./section4_data/lesson34.cjs'),
    require('./section4_data/lesson35.cjs'),
    require('./section4_data/lesson36.cjs'),
    require('./section4_data/lesson37.cjs'),
    require('./section4_data/lesson38.cjs'),
    require('./section4_data/lesson39.cjs'),
    require('./section4_data/lesson40.cjs')
];

const header = `import { randInt, generateDistractors, shuffle, formatCurrency, formatFraction } from './utils.js';

function pickFraming(framings, rng, qIndex) {
    const idx = (qIndex !== undefined && qIndex !== null) ? (qIndex % framings.length) : randInt(rng, 0, framings.length - 1);
    return framings[idx](rng);
}

export default {
`;

const footer = `};
`;

const content = header + lessons.join('\n') + footer;
const targetFile = path.resolve(__dirname, '../js/generators/section4.js');
fs.writeFileSync(targetFile, content, 'utf8');
console.log(`[PASS] section4.js successfully built! Size: ${content.length} bytes`);

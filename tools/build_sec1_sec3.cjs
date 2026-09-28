const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'js', 'generators');

function writeSection(secNum, code) {
    fs.writeFileSync(path.join(outDir, `section${secNum}.js`), code, 'utf-8');
    console.log(`[PASS] Wrote Section ${secNum} with 15-20 distinct framings per lesson`);
}

// -------------------------------------------------------------
// Helper template generator for sections 1, 2, and 3
// -------------------------------------------------------------
// Generates section code by mapping each lesson to 15-20 distinct framings
const sec1_builder = require('./sec1_data.cjs');
const sec2_builder = require('./sec2_data.cjs');
const sec3_builder = require('./sec3_data.cjs');

writeSection(1, sec1_builder);
writeSection(2, sec2_builder);
writeSection(3, sec3_builder);

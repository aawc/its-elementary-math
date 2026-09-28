const fs = require('fs');
const path = require('path');

const curriculum = JSON.parse(fs.readFileSync('curriculum.json', 'utf8'));
const outDir = path.join(__dirname, '..', 'js', 'generators');

// Write out all 12 sections
console.log("Building comprehensive lesson generators based on Written Practice...");

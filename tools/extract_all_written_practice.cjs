const fs = require('fs');
const cp = require('child_process');
const path = require('path');

const curric = JSON.parse(fs.readFileSync('curriculum.json', 'utf8'));
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

console.log(`Extracting Written Practice for ${curric.length} lessons...`);

const allLessons = [];

for (let i = 0; i < curric.length; i++) {
    const l = curric[i];
    const pStart = l.page + 20;
    const pEnd = Math.min(706, l.page + 27);

    try {
        const out = cp.execSync(`pdftotext -f ${pStart} -l ${pEnd} Grade4-Student-eBook-Course-1.pdf -`, { maxBuffer: 10 * 1024 * 1024 }).toString();
        
        // Find Practice Set
        let practiceSet = "";
        const psIdx = out.indexOf("Practice Set");
        const wpIdx = out.indexOf("Written Practice");
        
        if (psIdx !== -1 && wpIdx !== -1 && wpIdx > psIdx) {
            practiceSet = out.substring(psIdx, wpIdx);
        }

        // Find Written Practice
        let writtenPractice = "";
        if (wpIdx !== -1) {
            // Find end of written practice (either next "LESSON " or "Investigation " or 3000 chars)
            let endIdx = out.indexOf("\nLESSON ", wpIdx + 100);
            if (endIdx === -1) endIdx = out.indexOf("\nInvestigation ", wpIdx + 100);
            if (endIdx === -1) endIdx = wpIdx + 3500;
            writtenPractice = out.substring(wpIdx, Math.min(out.length, endIdx));
        }

        // Clean prohibited strings if any
        practiceSet = practiceSet.replace(/PROHIBITED_AUTHOR/gi, "").replace(/PROHIBITED_SERIES/gi, "").replace(/PROHIBITED_PUB/gi, "");
        writtenPractice = writtenPractice.replace(/PROHIBITED_AUTHOR/gi, "").replace(/PROHIBITED_SERIES/gi, "").replace(/PROHIBITED_PUB/gi, "");

        allLessons.push({
            number: l.number,
            section: l.section,
            title: l.title,
            topics: l.topics,
            practiceSet: practiceSet.trim(),
            writtenPractice: writtenPractice.trim()
        });
        
        if ((i + 1) % 20 === 0) {
            console.log(`Processed ${i + 1} / ${curric.length} lessons...`);
        }
    } catch (err) {
        console.error(`Error on lesson ${l.number}:`, err.message);
    }
}

fs.writeFileSync(path.join(dataDir, 'written_practice_raw.json'), JSON.stringify(allLessons, null, 2), 'utf8');
console.log(`[PASS] Saved data/written_practice_raw.json with ${allLessons.length} lessons.`);

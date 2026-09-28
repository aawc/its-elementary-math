import test from 'node:test';
import assert from 'node:assert';
import { getQuestion } from '../js/generators/registry.js';

test('Framing Diversity Gate: No more than 2 questions in any 20-question quiz session share the same framing', async (t) => {
    // Helper to extract the framing pattern from a question prompt
    // Replaces numbers, dollar amounts, and specific names to get the syntactic skeleton
    function getFramingSkeleton(qText) {
        return qText
            .replace(/\$[0-9]+(?:\.[0-9]{2})?/g, '$MONEY')
            .replace(/\b[0-9]+(?:\.[0-9]+)?\b/g, 'NUM')
            .replace(/\b(Johnny|Keisha|Tatiana|Darius|Marcie|Courtney|Dwayne|Jill|Jack|Mia|Leo|Matt|Sandra|Fatima|Luke|Ramon|Jeb|Shelly|Malcom|Chris|Shauna|Don|Ruben|Carol|Elena|Marcus)\b/g, 'NAME')
            .replace(/\s+/g, ' ')
            .trim();
    }

    for (let lessonId = 1; lessonId <= 120; lessonId++) {
        await t.test(`Lesson ${lessonId} Framing Diversity`, async () => {
            const seed = 123456 + lessonId * 789;
            const framingCounts = new Map();
            const questions = [];

            for (let i = 0; i < 20; i++) {
                const q = await getQuestion(lessonId, seed + i * 37, i);
                questions.push(q);
                const skeleton = getFramingSkeleton(q.question);
                framingCounts.set(skeleton, (framingCounts.get(skeleton) || 0) + 1);
            }

            // Assert: No framing pattern appears more than 2 times in the 20-question quiz
            for (const [skeleton, count] of framingCounts.entries()) {
                assert.ok(
                    count <= 2,
                    `Lesson ${lessonId}: Framing "${skeleton}" appeared ${count} times (max allowed is 2).`
                );
            }

            // Assert: All 20 questions have 4 unique options with no synthetic fallbacks
            for (let i = 0; i < 20; i++) {
                const q = questions[i];
                assert.strictEqual(new Set(q.options).size, 4, `Lesson ${lessonId} Q${i+1}: Options must be unique`);
                assert.ok(q.correctIndex >= 0 && q.correctIndex <= 3, `Lesson ${lessonId} Q${i+1}: Valid correctIndex`);
                assert.ok(q.stepByStep && q.stepByStep.length >= 1, `Lesson ${lessonId} Q${i+1}: Must have stepByStep`);
                for (const opt of q.options) {
                    assert.ok(!/Option \d+/.test(opt), `Lesson ${lessonId} Q${i+1}: Found synthetic fallback option: "${opt}"`);
                }
            }
        });
    }
});

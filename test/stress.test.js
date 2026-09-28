import test from 'node:test';
import assert from 'node:assert';
import { getQuestion } from '../js/generators/registry.js';

test('Stress Test: 50 seeds for 120 lessons (6000 total permutations)', async (t) => {
    // Test each lesson across 50 distinct seeds
    for (let lessonId = 1; lessonId <= 120; lessonId++) {
        await t.test(`Lesson ${lessonId} Stress`, async () => {
            const promises = [];
            
            for (let seed = 1; seed <= 50; seed++) {
                promises.push((async () => {
                    const qIndex = (seed - 1) % 20;
                    const q = await getQuestion(lessonId, seed * 1000 + 7, qIndex);
                    
                    assert.ok(q, `Lesson ${lessonId} Seed ${seed}: Question object must exist`);
                    assert.ok(typeof q.question === 'string' && q.question.length > 5, `Lesson ${lessonId} Seed ${seed}: Question text invalid`);
                    
                    assert.ok(Array.isArray(q.options), `Lesson ${lessonId} Seed ${seed}: options must be array`);
                    assert.strictEqual(q.options.length, 4, `Lesson ${lessonId} Seed ${seed}: options must have exactly 4 items`);
                    
                    // Assert 4 unique options
                    const uniqueOptions = new Set(q.options);
                    assert.strictEqual(uniqueOptions.size, 4, `Lesson ${lessonId} Seed ${seed}: options must be 4 unique choices`);
                    
                    // Assert correctIndex is 0..3
                    assert.ok(q.correctIndex >= 0 && q.correctIndex <= 3, `Lesson ${lessonId} Seed ${seed}: correctIndex must be 0..3`);
                    
                    // Assert options[correctIndex] exists and is non-empty
                    const answer = q.options[q.correctIndex];
                    assert.ok(answer !== undefined && answer !== null && answer !== '', `Lesson ${lessonId} Seed ${seed}: Correct option must be populated`);
                    
                    assert.ok(Array.isArray(q.stepByStep), `Lesson ${lessonId} Seed ${seed}: stepByStep must be an array`);
                    assert.ok(q.stepByStep.length >= 1, `Lesson ${lessonId} Seed ${seed}: stepByStep must have at least 1 item`);
                    
                    // Assert no NaNs, undefined, or synthetic Option fallback
                    const checkStr = (str, field) => {
                        const s = String(str);
                        if (/NaN|undefined|null/.test(s)) {
                            assert.fail(`Lesson ${lessonId} Seed ${seed}: Found invalid artifact in ${field}: "${s}"`);
                        }
                        if (/Option \d+/.test(s)) {
                            assert.fail(`Lesson ${lessonId} Seed ${seed}: Found synthetic fallback in ${field}: "${s}"`);
                        }
                    };
                    
                    checkStr(q.question, 'question');
                    q.options.forEach((opt, idx) => checkStr(opt, `options[${idx}]`));
                    q.stepByStep.forEach((step, idx) => checkStr(step, `stepByStep[${idx}]`));
                })());
            }
            
            await Promise.all(promises);
        });
    }
});

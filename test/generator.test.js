import test from 'node:test';
import assert from 'node:assert/strict';
import { getQuestion } from '../js/generators/registry.js';
import fs from 'node:fs';

const curriculum = JSON.parse(fs.readFileSync('curriculum.json', 'utf8'));
const lessons = curriculum.map(l => l.number);

test('Generators for all 120 lessons', async (t) => {
    for (const lessonId of lessons) {
        await t.test(`Lesson ${lessonId}`, async (t2) => {
            for (let seed = 1; seed <= 5; seed++) {
                const q = await getQuestion(lessonId, seed);
                
                assert.ok(q, "Should return a question object");
                assert.ok(q.question, "Question prompt should exist");
                assert.strictEqual(q.options.length, 4, "Should have exactly 4 options");
                
                const uniqueOptions = new Set(q.options);
                assert.strictEqual(uniqueOptions.size, 4, "Options must be unique");
                
                assert.ok(q.correctIndex >= 0 && q.correctIndex < 4, "correctIndex must be in range 0-3");
                assert.ok(q.options[q.correctIndex], "Correct option must exist");
                
                assert.ok(Array.isArray(q.stepByStep), "stepByStep must be an array");
                
                // Assert no NaNs or undefined visually
                q.options.forEach(opt => {
                    assert.doesNotMatch(String(opt), /NaN|undefined|null/);
                });
                assert.doesNotMatch(String(q.question), /NaN|undefined|null/);
            }
        });
    }
});

import { mulberry32 } from './utils.js';

export async function getQuestion(lessonId, seed, questionIndex = null) {
    const sectionNum = Math.ceil(lessonId / 10);
    let sectionModule;
    try {
        sectionModule = await import(`./section${sectionNum}.js`);
    } catch (e) {
        console.error("Failed to load section module", e);
        throw e;
    }
    const generator = sectionModule.default[lessonId];
    if (!generator) {
        throw new Error(`Generator for lesson ${lessonId} not found in section ${sectionNum}`);
    }
    
    const rng = mulberry32(seed);
    return generator(rng, questionIndex);
}

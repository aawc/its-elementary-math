import { getQuestion } from '../js/generators/registry.js';
async function run() {
  const q = await getQuestion(1, 1);
  console.log(JSON.stringify(q, null, 2));
}
run();

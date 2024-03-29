import OpenAI from 'openai';
import { systemPrompt } from './systemPrompt.js';

const openai = new OpenAI({
  apiKey: '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',
});

console.log(systemPrompt);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'flag of czech republic' },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
}

main();

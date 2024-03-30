import OpenAI from 'openai';
import { systemPromptColorPaletteObject } from './systemPrompt.js';

const openai = new OpenAI({
  apiKey: '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',
});

console.log(systemPromptColorPaletteObject);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemPromptColorPaletteObject },
      { role: 'user', content: 'car' },
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 100,
    response_format: { type: 'json_object' },
  });

  console.log(completion.choices[0].message.content);
}

main();

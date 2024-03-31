import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { systemPromptColorPaletteObject } from './systemPrompt.js';

const app = express();
dotenv.config();

// const corsOptions = {
//   origin: '*',
// };

app.use(cors());
app.use(express.json());
const port = 3000;
const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

app.post('/color-palette', async (req, res) => {
  try {
    const userInput = req.body.user_input;
    console.log('User input:', userInput);

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPromptColorPaletteObject },
        { role: 'user', content: userInput },
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 100,
      response_format: { type: 'json_object' },
    });

    const colorPalette = completion.choices[0].message.content;
    res.json(colorPalette); // Send the JSON object as the response
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch color palette' });
  }
});

app.get('/test', (req, res) => {
  res.json({ message: 'Hello from test GET route!' });
});

app.listen(port, () => {
  console.log('Server started!')
  console.log(`Server listening on port ${port}`);
});

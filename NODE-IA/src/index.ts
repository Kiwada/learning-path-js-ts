import dotenv from 'dotenv';
import OpenAI from 'openai';
import { Completions } from 'openai/resources';
dotenv.config()



const client = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,


});
console.log('API Key', process.env.OPEN_AI_API_KEY);


client.chat.completions.create({
    model :'gpt-4o-mini',
    messages: [
        {
            role : "user",
            content: "White a one-sentence bedtime story about god"
        },
    ],

})
    .then((completion) => {
    console.log(completion.choices[0].message.content);
  });

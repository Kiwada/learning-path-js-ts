import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config()



const client = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,


});
console.log('API Key', process.env.OPEN_AI_API_KEY);

async function generateText() {
    const completion = await client.chat.completions.create({
    model :'gpt-4o-mini',
    max_completion_tokens: 100,
    temperature: 1,
    messages: [
        {
            role : "user",
            content: "White a one-sentence bedtime story about god"
        },

        {
            role : "developer",
            content: "About GOD"
        },
        {
            role : "assistant",
            content : "GOD"
        }
    ],

})

console.log(completion.choices[0].message.content)



}

 

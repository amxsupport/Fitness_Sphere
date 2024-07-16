const router = require("express").Router();
// const fetch = require('node-fetch');
const { Readable } = require('stream');
const { createParser } = require('eventsource-parser');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Make sure you set the OpenAI API key

router.post('/prompt', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).send('No prompt in the request');
    }

    const payload = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 1000,
        stream: true,
        n: 1,
    };

    try {
        const stream = await openAIStream(payload);
        stream.pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

async function openAIStream(payload) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(payload),
    });

    return new Readable({
        async read() {
            const parser = createParser((event) => {
                if (event.type === 'event') {
                    const data = event.data;
                    if (data === '[DONE]') {
                        parser.close();
                        this.push(null);
                    } else {
                        try {
                            const json = JSON.parse(data);
                            const text = json.choices[0].delta?.content || '';
                            this.push(text);
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }
            });

            for await (const chunk of res.body) {
                parser.feed(chunk.toString());
            }
        },
    });
}

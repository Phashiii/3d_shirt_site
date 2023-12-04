import express, { request } from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

const router = express.Router()
dotenv.config();
const api = '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'

const openai = new OpenAI({
    apiKey: api
});


router.get('/',(request, response) => {
    response.status(200).json({ message: 'Hello from YOUR FATHER SON SONNY BOY.:('})
})


router.post('/', async(request, response) => {
    try{
        const { prompt } = request.body;

        const res = await openai.images.generate({ 
            model: "dall-e-3",
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = res
        console.log(image)
        response.status(200).json({ photo: image });

    }catch(error){
        console.error(error);
        response.status(500).json({ message: 'Something went wrong'})
    }
})
export default router;
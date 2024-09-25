import * as dotenv from 'dotenv';
import { createError } from '../error.js';

dotenv.config();

//setup openai api key

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});



//controller to generate image

export const generateImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;
        const response = await openai.images.generate({
            n:1,
            prompt,
            size: "1024x1024",
            response_format: "b64_json"
        });
        const generatedImage = response.data[0].b64_json;
        return res.status(200).json({
            success: true,
            photo: generatedImage,
        });
    } catch (error) {
        next(createError(500, error.message));
    }
}
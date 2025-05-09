import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.API_SECRET_KEY,
  dangerouslyAllowBrowser: true
});

export default openai;
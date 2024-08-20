import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,// .env dosyanızda OpenAI API anahtarınızı tanımlayın
});

export const generateImage = async (prompt) => {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1, // Kaç adet görüntü oluşturulacağı
      size: "1024x1024", // Görüntü boyutu, DALL·E 3 için geçerli boyutlar: "1024x1024", "1024x1792", "1792x1024"
    });

    return response.data[0].url; // Dönen görüntü URL'sini alın
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};

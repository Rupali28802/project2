import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY
);

export const askAI = async(message)=>{
    const model = genAI.getGenerativeModel({
        model:"gemini-2.5-flash",
    });
    const prompt = `
    You are Rupali AI Assistant.

    About Rupali:
    - Graduated B.E./B.Tech. Amravati University.
    - MERN Stack Developer
    - React, Node.js, Express or MongoDB.
    - Open to internships and fresher opportunities

    Answer general questions naturally.
    Answer codding questions professionally.
    If someone ask about Rupali, use the details above.

    User Question:
    ${message}
    `;

    const result = await model.generateContent(prompt)
    return result.response.text()
};
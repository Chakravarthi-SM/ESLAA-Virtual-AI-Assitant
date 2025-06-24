
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model : "gemini-1.5-flash",
});

const generationConfig = {
temperature :1,
topP :0.95,
topK :40,
maxOutputTokens:  40,
responseMimeType : "text/plain",
};


async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    }
    catch (error) {
        console.error("Error in Gemini API call:", error);
        throw error;
    }
}
export  default run;
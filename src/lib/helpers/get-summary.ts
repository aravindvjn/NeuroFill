import { ResumeInputType } from "@/components/forms/resume-form/type";
import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export async function generateSummary(resumeData: ResumeInputType) {
  try {
    console.log("getting...")
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const prompt = `Generate a professional resume summary in JSON format based on the given details:
    
    - Profession: ${resumeData.profession}
    - Skills: ${resumeData?.skills?.map(skill => skill.name).join(", ") || "Not provided"}
    - Talk as I am

    Response format (JSON):
    {
      "experienceLevel": "Mid-Level",
      "summary": "I am a skilled software engineer with expertise in React and Node.js..."
    }
      
    for all levels`;

    const result = await chatSession.sendMessage([{ text: prompt }]);

    const responseText = result.response.text(); 
    const summaryData = JSON.parse(responseText); 

    console.log("Resume Summary:", summaryData);
    return summaryData;
  } catch (error) {
    console.error("Error generating summary:", error);
    return [{ experienceLevel: "Unknown", summary: "Failed to generate summary." }];
  }
}

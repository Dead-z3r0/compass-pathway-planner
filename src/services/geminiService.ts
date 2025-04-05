
import { toast } from "sonner";

// Interface for the assessment form data
export interface AssessmentFormData {
  name: string;
  email: string;
  major: string;
  year: string;
  interests: string[];
  longTermGoals: string;
  shortTermGoals: string;
  currentCourses: string[];
  strengths: string[];
  challenges: string[];
  preferredLearningStyle: string;
}

// The curriculum data (static for now, could be fetched from an API)
const curriculum = `First Year – Semester I
  1. MA101 - Mathematics-I (Linear Algebra and Matrices) [L:3, T:1, P:0, C:4]
  2. PH100* - Mechanics and Thermodynamics [L:3, T:1, P:0, C:4]
  3. PH160* - Mechanics and Thermodynamics Lab [L:0, T:0, P:2, C:1]
  4. IT101 - Computer Programming and Problem Solving [L:3, T:0, P:0, C:3]
  5. IT161 - Computer Programming and Problem Solving Lab [L:0, T:0, P:3, C:2]
  6. EC100* - Basic Electronic Circuits [L:3, T:1, P:0, C:4]
  7. EC160* - Basic Electronic Circuits Lab [L:0, T:0, P:3, C:2]
  8. HS101 - Spoken and Written Communication [L:2, T:0, P:2, C:3]

Total: L = 14, T = 3, P = 10, C = 23

*Courses marked with an asterisk may be offered in both Autumn and Winter Semesters.`;

// Google Gemini API endpoint
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
const API_KEY = "AIzaSyAVvR6ptdqZDt-eSvnq1zfGEFyfh8Bh0ko"; // This would be better stored securely

/**
 * Generate a personalized roadmap using Gemini API
 */
export const generateRoadmap = async (formData: AssessmentFormData): Promise<string> => {
  try {
    // Convert the form data to a string
    const userData = JSON.stringify(formData, null, 2);
    console.log('Sending User Data:', userData);

    // Prepare the prompt for Gemini
    const prompt = `You are an expert AI mentor helping a student build a personalized learning roadmap based on the provided user data and the institute's curriculum structure, generate a personalized roadmap that aligns with the academic timeline and milestones. The roadmap should assess the student's current knowledge, identify gaps, and recommend a step-by-step plan to master GenAI concepts, tools, and applications.

      1. Assess the student's current knowledge and experience from the input.
      2. Design a roadmap with monthly goals.
      3. Align the roadmap with the curriculum's timeline.
      4. Include online resource links from internet searches.
      5. List specific action items: topics, tools, projects, and milestones.

      Output rules:
      1 Enclose all content in one <div>.
      2 Use a new <div style="border: 1px solid; padding: 10px; margin: 10px 0;"> for each month.
      3 Use HTML tags for formatting (e.g., <b>, <i>, <ul>, <li>) without Markdown.
      4 Do not add code fences
      5 Do not specify font colors or background colors.
      6 Ensure clear, structured, and readable output.

      User Data:
      [${userData}]

      Curriculum Structure:
      [${curriculum}]`;

    // Make the API call to Gemini
    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the generated text from the response
    const generatedText = data.candidates[0].content.parts[0].text;
    console.log('Generated Roadmap:', generatedText);
    
    return generatedText;
  } catch (error) {
    console.error('Error generating roadmap:', error);
    toast.error('Failed to generate roadmap. Please try again.');
    throw error;
  }
};

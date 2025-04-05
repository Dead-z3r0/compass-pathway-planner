
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import PageLayout from '@/components/PageLayout';

const Assessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    interests: [] as string[],
    longTermGoals: '',
    shortTermGoals: '',
    currentCourses: [] as string[],
    strengths: [] as string[],
    challenges: [] as string[],
    preferredLearningStyle: '',
  });

  const totalSteps = 4;

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle multi-select changes (interests, current courses, etc.)
  const handleMultiInputChange = (name: string, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      if (!formData[name as keyof typeof formData].includes(value)) {
        setFormData(prev => ({ 
          ...prev, 
          [name]: [...(prev[name as keyof typeof formData] as string[]), value]
        }));
      }
      e.currentTarget.value = '';
    }
  };

  // Remove item from multi-select array
  const removeItem = (name: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [name]: (prev[name as keyof typeof formData] as string[]).filter((_, i) => i !== index)
    }));
  };

  // Navigate between steps
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the form
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Submit the form
  const handleSubmit = () => {
    // Here you would send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast and navigate to the roadmap page
    toast({
      title: "Assessment Completed!",
      description: "Your personalized roadmap is being generated.",
    });
    
    // In a real app, you'd wait for the backend to process the data
    // For now, we'll just navigate to the roadmap page
    setTimeout(() => {
      navigate('/roadmap');
    }, 1500);
  };

  return (
    <PageLayout
      title="Personalized Assessment"
      subtitle="Help us understand your goals and interests to create your custom academic roadmap"
    >
      <div className="max-w-3xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div 
                key={index}
                className={`w-full ${index > 0 ? 'ml-2' : ''}`}
              >
                <div 
                  className={`h-2 rounded-full ${index + 1 <= currentStep ? 'bg-compass-600' : 'bg-gray-200'}`}
                ></div>
              </div>
            ))}
          </div>
          <div className="text-right text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">
              {currentStep === 1 && "Basic Information"}
              {currentStep === 2 && "Academic Background"}
              {currentStep === 3 && "Goals & Aspirations"}
              {currentStep === 4 && "Learning Preferences"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Let's start with some basic information about you."}
              {currentStep === 2 && "Tell us about your current academic situation."}
              {currentStep === 3 && "What are you hoping to achieve?"}
              {currentStep === 4 && "Help us understand how you learn best."}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
                    Major/Field of Study
                  </label>
                  <Input
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    placeholder="e.g. Computer Science, Business, etc."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Year
                  </label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) => handleSelectChange('year', value)}
                  >
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Select your current year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freshman">Freshman</SelectItem>
                      <SelectItem value="sophomore">Sophomore</SelectItem>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            
            {/* Step 2: Academic Background */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Courses (Press Enter after each course)
                  </label>
                  <Input
                    onKeyDown={(e) => handleMultiInputChange('currentCourses', e)}
                    placeholder="Add a course you're currently taking"
                  />
                  
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.currentCourses.map((course, index) => (
                      <div 
                        key={index} 
                        className="bg-compass-100 text-compass-800 px-3 py-1 rounded-full flex items-center"
                      >
                        <span className="mr-1">{course}</span>
                        <button 
                          onClick={() => removeItem('currentCourses', index)}
                          className="text-compass-600 hover:text-compass-800"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Areas of Interest (Press Enter after each interest)
                  </label>
                  <Input
                    onKeyDown={(e) => handleMultiInputChange('interests', e)}
                    placeholder="Add an area of interest"
                  />
                  
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.interests.map((interest, index) => (
                      <div 
                        key={index} 
                        className="bg-compass-100 text-compass-800 px-3 py-1 rounded-full flex items-center"
                      >
                        <span className="mr-1">{interest}</span>
                        <button 
                          onClick={() => removeItem('interests', index)}
                          className="text-compass-600 hover:text-compass-800"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Strengths (Press Enter after each strength)
                  </label>
                  <Input
                    onKeyDown={(e) => handleMultiInputChange('strengths', e)}
                    placeholder="Add an academic strength"
                  />
                  
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.strengths.map((strength, index) => (
                      <div 
                        key={index} 
                        className="bg-compass-100 text-compass-800 px-3 py-1 rounded-full flex items-center"
                      >
                        <span className="mr-1">{strength}</span>
                        <button 
                          onClick={() => removeItem('strengths', index)}
                          className="text-compass-600 hover:text-compass-800"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Challenges (Press Enter after each challenge)
                  </label>
                  <Input
                    onKeyDown={(e) => handleMultiInputChange('challenges', e)}
                    placeholder="Add an academic challenge"
                  />
                  
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.challenges.map((challenge, index) => (
                      <div 
                        key={index} 
                        className="bg-compass-100 text-compass-800 px-3 py-1 rounded-full flex items-center"
                      >
                        <span className="mr-1">{challenge}</span>
                        <button 
                          onClick={() => removeItem('challenges', index)}
                          className="text-compass-600 hover:text-compass-800"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 3: Goals & Aspirations */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="longTermGoals" className="block text-sm font-medium text-gray-700 mb-1">
                    Long-term Career Goals
                  </label>
                  <Textarea
                    id="longTermGoals"
                    name="longTermGoals"
                    value={formData.longTermGoals}
                    onChange={handleChange}
                    placeholder="Describe your career aspirations after graduation"
                    rows={4}
                  />
                </div>
                
                <div>
                  <label htmlFor="shortTermGoals" className="block text-sm font-medium text-gray-700 mb-1">
                    Short-term Academic Goals
                  </label>
                  <Textarea
                    id="shortTermGoals"
                    name="shortTermGoals"
                    value={formData.shortTermGoals}
                    onChange={handleChange}
                    placeholder="What do you want to achieve this semester or year?"
                    rows={4}
                  />
                </div>
              </div>
            )}
            
            {/* Step 4: Learning Preferences */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Learning Style
                  </label>
                  <Select
                    value={formData.preferredLearningStyle}
                    onValueChange={(value) => handleSelectChange('preferredLearningStyle', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your learning style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="visual">Visual (learn by seeing)</SelectItem>
                      <SelectItem value="auditory">Auditory (learn by hearing)</SelectItem>
                      <SelectItem value="reading">Reading/Writing</SelectItem>
                      <SelectItem value="kinesthetic">Kinesthetic (learn by doing)</SelectItem>
                      <SelectItem value="mixed">Mixed/Combination</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4">
                  <p className="text-center text-gray-600 mb-4">
                    Thank you for completing the assessment! Click "Submit" to generate your personalized roadmap.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            
            <Button 
              onClick={nextStep}
              className="bg-compass-600 hover:bg-compass-700"
            >
              {currentStep < totalSteps ? 'Next' : 'Submit'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Assessment;

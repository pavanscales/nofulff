
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Submit = () => {
  const [step, setStep] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTag, setSearchTag] = useState("");

  const tags = [
    "Technology", "Software Development", "Digital Privacy", "Cybersecurity", 
    "AI & Automation", "Mobile Apps", "Digital Accessibility", "Web Development",
    "Cloud Computing", "Environment", "Climate Action", "Renewable Energy",
    "Waste Management", "Sustainable Living", "Conservation", "Urban Planning",
    "Healthcare", "Mental Health", "Fitness & Exercise", "Nutrition",
    "Elder Care", "Telehealth", "Health Tech", "Education", "Online Learning",
    "Professional Development", "STEM Education", "Coding Bootcamps",
    "Technical Documentation", "Learning Resources", "Community Building", 
    "Online Communities", "Open Source Projects"
  ];

  const filteredTags = tags.filter(tag => 
    !selectedTags.includes(tag) && 
    tag.toLowerCase().includes(searchTag.toLowerCase())
  );

  const handleTagSelect = (tag: string) => {
    if (selectedTags.length < 5 && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setSearchTag("");
  };

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto max-w-3xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Submit a Problem</h1>

        <div className="flex justify-between items-center my-8">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <span className="text-sm mt-1">Problem Details</span>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="text-sm mt-1">Context & Impact</span>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              3
            </div>
            <span className="text-sm mt-1">Review & Submit</span>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Tell us about the problem</h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Problem Title</Label>
                    <Input id="title" placeholder="e.g., Finding affordable short-term housing for internships" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Describe the problem in detail. What specifically makes this difficult?</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe the problem in detail. What specifically makes this difficult?"
                      rows={6}
                    />
                    <p className="text-sm text-gray-500">Min 50 characters. Be specific about what makes this challenging.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Tags (select up to 5)</Label>
                    <p className="text-sm text-gray-500 mb-2">Select categories that best describe this problem</p>
                    
                    <Input
                      placeholder="Search tags..."
                      value={searchTag}
                      onChange={(e) => setSearchTag(e.target.value)}
                    />
                    
                    {selectedTags.length > 0 && (
                      <div className="flex flex-wrap gap-2 my-3">
                        {selectedTags.map((tag) => (
                          <Badge 
                            key={tag} 
                            className="bg-blue-50 text-blue-700 hover:bg-red-50 hover:text-red-700 px-3 py-1.5"
                            onClick={() => handleTagRemove(tag)}
                          >
                            {tag} ×
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {filteredTags.slice(0, 20).map((tag) => (
                        <Badge 
                          key={tag} 
                          className="bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer px-3 py-1.5"
                          onClick={() => handleTagSelect(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 w-full">
                    Continue to Context & Impact
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Context & Impact</h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="context">Who is affected by this problem?</Label>
                    <Textarea 
                      id="context" 
                      placeholder="Describe who experiences this problem and how it affects them"
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="impact">What would the impact be if this problem was solved?</Label>
                    <Textarea 
                      id="impact" 
                      placeholder="Explain the potential benefits of solving this problem"
                      rows={4}
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <Button variant="outline" onClick={handlePrevious} className="w-1/2">
                    Back
                  </Button>
                  <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 w-1/2">
                    Continue to Review
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Review & Submit</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Problem Summary</h3>
                    <p className="text-gray-500">Please review your submission before finalizing.</p>
                  </div>
                  
                  <div className="border rounded-md p-4 space-y-4">
                    <div>
                      <h3 className="font-medium">Title</h3>
                      <p>Finding affordable short-term housing for internships</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Categories</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedTags.map((tag) => (
                          <Badge key={tag} className="bg-blue-50 text-blue-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <Button variant="outline" onClick={handlePrevious} className="w-1/2">
                    Back
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-1/2">
                    Submit Problem
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Submit;

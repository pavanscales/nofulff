"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const allTags = [
  "Technology", "Software Development", "Digital Privacy", "Cybersecurity", "AI & Automation", "Mobile Apps",
  "Digital Accessibility", "Web Development", "Cloud Computing", "Environment", "Climate Action",
  "Renewable Energy", "Waste Management", "Sustainable Living", "Conservation", "Urban Planning",
  "Healthcare", "Mental Health", "Fitness & Exercise", "Nutrition", "Elder Care", "Telehealth", "Health Tech",
  "Education", "Online Learning", "Professional Development", "STEM Education", "Coding Bootcamps",
  "Technical Documentation", "Learning Resources", "Community Building", "Online Communities",
  "Open Source Projects", "Volunteer Management", "Tech Conferences", "Public Safety", "Civic Tech", "Remote Work",
  "Workplace Tools", "Small Business", "Entrepreneurship", "Job Search", "Career Development",
  "Work-Life Balance", "Freelancing", "Housing", "Transportation", "Public Transit", "Digital Infrastructure",
  "Smart Cities", "Rural Connectivity", "Internet Access", "Personal Productivity", "Personal Finance",
  "Time Management", "Smart Home", "Tech Support", "Home Office", "Consumer Tech", "Communication",
  "Social Media", "Digital Literacy", "Content Creation", "Podcasting", "Media Production", "Information Access",
  "Personal Branding", "Digital Marketing", "E-commerce", "Online Privacy", "Identity Management",
  "Subscription Services", "Digital Wellness", "Arts & Technology", "Gaming & Esports", "Travel Tech",
  "Emergency Tech", "Legal Tech", "Research & Innovation", "Open Source"
];

const Submit = () => {
  const [step, setStep] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTag, setSearchTag] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [context, setContext] = useState("");
  const [impact, setImpact] = useState("");

  const filteredTags = allTags.filter(tag =>
    !selectedTags.includes(tag) &&
    (searchTag === "" || tag.toLowerCase().includes(searchTag.toLowerCase()))
  );

  const handleTagSelect = (tag: string) => {
    if (selectedTags.length < 5 && !selectedTags.includes(tag)) {
      setSelectedTags(prev => [...prev, tag]);
      setSearchTag("");
    }
  };

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };


const handleContinue = async () => {
  if (step < 3) {
    setStep(step + 1);
  } else {
    try {
      const res = await fetch('http://localhost:4000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          tags: selectedTags,
          context,
          impact,
        }),
      });

      if (!res.ok) {
        let errorMessage = "Unknown error";
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || JSON.stringify(errorData) || errorMessage;
        } catch {
          try {
            const clonedRes = res.clone();
            const text = await clonedRes.text();
            if (text) errorMessage = text;
          } catch {
            // fallback if clone or text fails
          }
        }
        alert("Submission failed: " + errorMessage);
        return;
      }

      alert("Submitted successfully!");
      setStep(1);
      setTitle("");
      setDescription("");
      setSelectedTags([]);
      setContext("");
      setImpact("");
    } catch (error) {
      alert("Submission failed: " + error);
    }
  }
};


  const isStep1Valid = title.length >= 5 && selectedTags.length > 0;
  const isStep2Valid = context.length > 10 && impact.length > 10;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Submit a Problem</h1>

      <div className="flex justify-between items-center my-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center w-full">
            <div className="flex flex-col items-center">
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", step >= s ? "bg-blue-600 text-white" : "bg-gray-200")}>
                {s}
              </div>
              <span className="text-sm mt-1">
                {["Problem Details", "Context & Impact", "Review & Submit"][s - 1]}
              </span>
            </div>
            {s !== 3 && <div className="flex-1 h-px bg-gray-300 mx-2"></div>}
          </div>
        ))}
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold">Tell us about the problem</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Problem Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Finding affordable short-term housing for internships"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Describe the problem in detail</Label>
                  <Textarea
                    id="description"
                    placeholder="Be specific about what makes this difficult"
                    rows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">{description.length} / 50 characters minimum</p>
                </div>

                <div>
                  <Label>Tags (up to 5)</Label>
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
                          className="bg-blue-50 text-blue-700 hover:bg-red-50 hover:text-red-700 px-3 py-1.5 cursor-pointer"
                          onClick={() => handleTagRemove(tag)}
                        >
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-3 max-h-60 overflow-auto border rounded p-2 bg-gray-50">
                    {filteredTags.map((tag) => (
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
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold">Provide Context & Impact</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="context">Context</Label>
                  <Textarea
                    id="context"
                    placeholder="Explain the background or setting"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="impact">Impact</Label>
                  <Textarea
                    id="impact"
                    placeholder="What happens if this problem isn't solved?"
                    value={impact}
                    onChange={(e) => setImpact(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold">Review & Submit</h2>
              <p><strong>Title:</strong> {title}</p>
              <p><strong>Description:</strong> {description}</p>
              <p><strong>Tags:</strong> {selectedTags.join(", ")}</p>
              <p><strong>Context:</strong> {context}</p>
              <p><strong>Impact:</strong> {impact}</p>
            </>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && <Button onClick={() => setStep(step - 1)}>Back</Button>}
            <Button
              onClick={handleContinue}
              disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)}
            >
              {step === 3 ? "Submit" : "Continue"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Submit;

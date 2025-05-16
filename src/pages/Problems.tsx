
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";

const Problems = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const problems = [
    {
      id: 1,
      title: "Finding like-minded people is rather difficult",
      description: "Finding people who have similar interests is becoming increasingly hard due to people not interacting as much as they used to, besides work or education there are not many places where you can meet people.",
      categories: ["Online Communities", "Community Building", "Mental Health"],
      votes: 9,
      comments: 3,
    },
    {
      id: 2,
      title: "Fragmented Digital Identity Management",
      description: "Managing multiple digital identities across various platforms has become increasingly complex. Users struggle with remembering and securely storing dozens of login credentials, managing different privacy settings across services and maintaining consistent personal/professional boundaries online. Current password managers solve only part of the problem, lacking holistic identity management capabilities. Users need a way to centrally manage, monitor, and control their digital identities while maintaining strong security and privacy.",
      categories: ["Digital Privacy", "Cybersecurity", "Digital Accessibility", "Time Management", "Digital Literacy"],
      votes: 5,
      comments: 1,
    },
    {
      id: 3,
      title: "Subscription and Content Management",
      description: "Managing multiple subscriptions across different platforms is becoming increasingly difficult for consumers.",
      categories: ["Digital Literacy", "Software Development"],
      votes: 173,
      comments: 12,
    },
    {
      id: 4,
      title: "Remote Work Collaboration",
      description: "Tools for effective collaboration and communication in distributed teams across time zones.",
      categories: ["Software Development", "Professional Development"],
      votes: 156,
      comments: 8,
    },
  ];

  const categories = [
    "Community Building", "Cybersecurity", "Digital Accessibility", 
    "Digital Literacy", "Digital Privacy", "Mental Health", 
    "Online Communities", "Social Media", "Software Development",
    "Time Management", "Transportation", "Waste Management"
  ];

  const filteredProblems = problems.filter(problem => 
    problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    problem.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Problems</h1>
        <p className="text-gray-600 mb-8">Browse challenges that need solutions or add your own.</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <Input 
              type="text" 
              placeholder="Search problems..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-40">
            <select className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md">
              <option>Most Votes</option>
              <option>Recent</option>
              <option>Most Comments</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge 
              key={category} 
              className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-200 cursor-pointer py-1.5 px-3"
              onClick={() => setSearchQuery(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="space-y-4">
          {filteredProblems.map((problem) => (
            <Card key={problem.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold mb-2">{problem.title}</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-500">
                      <ChevronUp size={16} />
                      <span>{problem.votes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      <span>{problem.comments}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {problem.categories.map((category) => (
                    <Badge 
                      key={`${problem.id}-${category}`} 
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;

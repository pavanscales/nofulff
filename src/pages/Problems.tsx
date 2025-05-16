
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      id: 1,
      title: "Finding like-minded people",
      description: "Connecting with people who share your interests and goals can be challenging in today's fragmented digital landscape.",
      category: "Social",
      votes: 245,
    },
    {
      id: 2,
      title: "Encrypted Digital Communication",
      description: "Secure messaging that really protects your privacy without compromising on features and usability.",
      category: "Security",
      votes: 189,
    },
    {
      id: 3,
      title: "Subscription and Content Management",
      description: "Managing multiple subscriptions across different platforms is becoming increasingly difficult for consumers.",
      category: "Productivity",
      votes: 173,
    },
    {
      id: 4,
      title: "Remote Work Collaboration",
      description: "Tools for effective collaboration and communication in distributed teams across time zones.",
      category: "Productivity",
      votes: 156,
    },
    {
      id: 5,
      title: "Digital Identity Verification",
      description: "Secure and privacy-preserving identity verification for online services without excessive data collection.",
      category: "Security",
      votes: 142,
    },
    {
      id: 6,
      title: "Mental Health Support",
      description: "Accessible mental health resources and support systems for people in need.",
      category: "Health",
      votes: 135,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">All Problems</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card key={problem.id} className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold">{problem.title}</CardTitle>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                    {problem.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
              <CardFooter className="pt-2 flex justify-between items-center">
                <div className="flex items-center text-gray-500 text-sm">
                  <span>{problem.votes} votes</span>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600 p-0">
                  View Details <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;

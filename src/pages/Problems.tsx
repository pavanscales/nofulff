import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      description:
        "Finding people who have similar interests is becoming increasingly hard due to people not interacting as much as they used to.",
      categories: ["Online Communities", "Community Building", "Mental Health"],
      votes: 9,
      comments: 3,
    },
    {
      id: 2,
      title: "Fragmented Digital Identity Management",
      description:
        "Managing multiple digital identities across platforms is complex. Password managers don’t fully solve it.",
      categories: ["Digital Privacy", "Cybersecurity", "Digital Accessibility"],
      votes: 5,
      comments: 1,
    },
    {
      id: 3,
      title: "Subscription and Content Management",
      description:
        "Managing multiple subscriptions across different platforms is increasingly difficult.",
      categories: ["Digital Literacy", "Software Development"],
      votes: 173,
      comments: 12,
    },
    {
      id: 4,
      title: "Remote Work Collaboration",
      description:
        "Tools for effective collaboration across time zones in distributed teams are limited.",
      categories: ["Software Development", "Professional Development"],
      votes: 156,
      comments: 8,
    },
  ];

  const categories = [
    "Community Building",
    "Cybersecurity",
    "Digital Accessibility",
    "Digital Literacy",
    "Digital Privacy",
    "Mental Health",
    "Online Communities",
    "Social Media",
    "Software Development",
    "Time Management",
    "Transportation",
    "Waste Management",
  ];

  const filteredProblems = problems.filter(
    (problem) =>
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.categories.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-semibold mb-6">Problems</h1>
        <p className="text-gray-500 mb-6 text-sm">
          Browse challenges or add your own.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <Input
            type="text"
            placeholder="Search problems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-sm h-9"
          />
          <select className="w-full md:w-36 h-9 px-2 py-1 bg-white border border-gray-300 rounded text-sm">
            <option>Most Votes</option>
            <option>Recent</option>
            <option>Most Comments</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-200 cursor-pointer py-1 px-2 text-xs"
              onClick={() => setSearchQuery(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          {filteredProblems.map((problem) => (
            <Card key={problem.id} className="shadow-sm border border-gray-200 overflow-hidden">
              <CardContent className="px-4 py-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold">{problem.title}</h2>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <ChevronUp size={16} />
                      <span>{problem.votes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>{problem.comments}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {problem.categories.map((category) => (
                    <Badge
                      key={`${problem.id}-${category}`}
                      className="bg-blue-50 text-blue-700 border-none text-xs px-2 py-0.5"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-700 mb-4 text-sm">{problem.description}</p>

                <Button variant="outline" className="w-full text-xs h-8">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;

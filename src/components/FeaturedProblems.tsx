
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type ProblemCardProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  votes: number;
};

const ProblemCard = ({ title, description, category, votes }: ProblemCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <span>{votes} votes</span>
        </div>
        <Button variant="ghost" size="sm" className="text-blue-600 p-0">
          View Details <ChevronRight size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedProblems = () => {
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
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Featured Problems
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Discover the most popular problems that need solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProblems;

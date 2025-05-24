import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

type Thread = {
  id: number;
  title: string;
  category: string;
  author: string;
  replies: number;
  lastActivity: string;
};

const threads: Thread[] = [
  {
    id: 1,
    title: "How do you validate your solutions before building?",
    category: "Methodology",
    author: "Alex Johnson",
    replies: 24,
    lastActivity: "10 minutes ago",
  },
  {
    id: 2,
    title: "Looking for feedback on my solution to the 'Finding like-minded people' problem",
    category: "Feedback",
    author: "Samantha Chen",
    replies: 18,
    lastActivity: "2 hours ago",
  },
  {
    id: 3,
    title: "Any recommendations for secure communication libraries?",
    category: "Technical",
    author: "David Lee",
    replies: 31,
    lastActivity: "5 hours ago",
  },
  {
    id: 4,
    title: "Should I build a team before starting on a solution?",
    category: "Strategy",
    author: "Priya Sharma",
    replies: 42,
    lastActivity: "1 day ago",
  },
  {
    id: 5,
    title: "Share your success stories solving Hurdle Hunt problems",
    category: "Success Stories",
    author: "Marcus Wilson",
    replies: 56,
    lastActivity: "2 days ago",
  },
  {
    id: 6,
    title: "Has anyone tackled the 'Subscription Management' problem yet?",
    category: "Collaboration",
    author: "Emma Thompson",
    replies: 12,
    lastActivity: "3 days ago",
  },
];

const ThreadCard = React.memo(function ThreadCard({
  title,
  category,
  author,
  replies,
  lastActivity,
}: Omit<Thread, "id">) {
  return (
    <Card className="hover:border-blue-300 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 hover:bg-blue-50 whitespace-nowrap"
          >
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-500 gap-2">
          <div>
            Posted by <span className="text-gray-700">{author}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>{replies} replies</span>
            <span>Last activity: {lastActivity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

const Forums = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Forums</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white w-full sm:w-auto">
            New Thread
          </Button>
        </div>

        <div className="space-y-4">
          {threads.map(({ id, ...thread }) => (
            <ThreadCard key={id} {...thread} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Forums;

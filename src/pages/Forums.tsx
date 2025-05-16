
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Forums = () => {
  const threads = [
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Forums</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">New Thread</Button>
        </div>
        
        <div className="space-y-4">
          {threads.map((thread) => (
            <Card key={thread.id} className="hover:border-blue-200 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg font-semibold">{thread.title}</CardTitle>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                    {thread.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div>
                    Posted by <span className="text-gray-700">{thread.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{thread.replies} replies</span>
                    <span>Last activity: {thread.lastActivity}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;

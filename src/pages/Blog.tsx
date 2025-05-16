
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Identify Problems Worth Solving",
      excerpt: "Learn our framework for evaluating problems based on impact, reach, and feasibility.",
      author: "Alex Johnson",
      date: "May 10, 2025",
      category: "Methodology",
    },
    {
      id: 2,
      title: "From Problem to Solution: A Case Study",
      excerpt: "See how one Hurdle Hunt problem led to a successful startup serving thousands of users.",
      author: "Samantha Chen",
      date: "May 5, 2025",
      category: "Success Stories",
    },
    {
      id: 3,
      title: "The Psychology of Problem Solving",
      excerpt: "Understanding cognitive biases that affect how we approach problems and solutions.",
      author: "Dr. Marcus Wilson",
      date: "April 28, 2025",
      category: "Psychology",
    },
    {
      id: 4,
      title: "Building in Public: Why Transparency Matters",
      excerpt: "The benefits of sharing your problem-solving journey with the community.",
      author: "Priya Sharma",
      date: "April 21, 2025",
      category: "Community",
    },
    {
      id: 5,
      title: "Validating Your Solution: Beyond MVP",
      excerpt: "Strategies for testing your solution with real users before full deployment.",
      author: "David Lee",
      date: "April 15, 2025",
      category: "Validation",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <Badge variant="outline" className="mb-2 w-fit bg-blue-50 text-blue-700 hover:bg-blue-50">
                  {post.category}
                </Badge>
                <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="mt-auto text-sm text-gray-500">
                  <p>{post.author} • {post.date}</p>
                </div>
              </CardContent>
              <div className="p-4 pt-0">
                <Button variant="ghost" className="text-blue-600 p-0">
                  Read More <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

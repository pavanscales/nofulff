
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Submit = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto max-w-3xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Submit a Problem</h1>
        <p className="text-gray-600 mb-8">
          Have a problem that needs solving? Share it with our community.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Problem Details</CardTitle>
            <CardDescription>
              Provide clear details about the problem you've identified.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Problem Title</Label>
                <Input id="title" placeholder="Give your problem a clear, concise title" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="productivity">Productivity</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Problem Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the problem in detail. Who experiences it? Why is it important to solve?" 
                  rows={6}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="impact">Potential Impact</Label>
                <Textarea 
                  id="impact" 
                  placeholder="What would the impact be if this problem was solved?" 
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">
                Submit Problem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Submit;

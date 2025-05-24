
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Sun } from "lucide-react"

export default function Component() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [problemDescription, setProblemDescription] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const allTags = [
    "Renewable Energy",
    "Waste Management",
    "Web Development",
    "Cloud Computing",
    "Environment",
    "Technology",
    "Software Development",
    "Digital Privacy",
    "Cybersecurity",
    "AI & Automation",
    "Mobile Apps",
    "Digital Accessibility",
    "Climate Action",
    "Mental Health",
    "Fitness & Exercise",
    "Nutrition",
    "Elder Care",
    "Telehealth",
    "Health Tech",
    "Education",
    "Online Learning",
    "Professional Development",
    "STEM Education",
    "Coding Bootcamps",
    "Technical Documentation",
    "Learning Resources",
    "Community Building",
    "Online Communities",
    "Open Source Projects",
    "Volunteer Management",
    "Sustainable Living",
    "Conservation",
    "Urban Planning",
    "Healthcare",
  ]

  const filteredTags = allTags.filter((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">HH</div>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Problems
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Leaderboard
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Blog
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Forums
              </a>
              <a href="#" className="text-blue-600 font-medium">
                Submit
              </a>
            </nav>
            <Button variant="ghost" size="icon">
              <Sun className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-12">Submit a Problem</h1>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="text-sm text-gray-600 mt-2">Problem Details</span>
            </div>
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-sm text-gray-600 mt-2">Context & Impact</span>
            </div>
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm text-gray-600 mt-2">Review & Submit</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-6">Tell us about the problem</h2>

            <div className="space-y-6">
              <div>
                <Input placeholder="yh5yh5yhybhh5yh" className="w-full" />
              </div>

              <div>
                <Input placeholder="yhyhyh" className="w-full" />
              </div>

              <div>
                <Textarea
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  placeholder="Describe the problem in detail..."
                  className="w-full h-32 resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Min 50 characters. Be specific about what makes this challenging.
                </p>
              </div>

              {/* Tags Section */}
              <div>
                <div className="mb-4">
                  <h3 className="font-medium mb-1">Tags (select up to 5)</h3>
                  <p className="text-sm text-gray-600">Select categories that best describe this problem</p>
                </div>

                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "secondary"}
                      className={`cursor-pointer transition-colors ${
                        selectedTags.includes(tag)
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {selectedTags.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Selected tags ({selectedTags.length}/5):</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <Badge key={tag} variant="default" className="bg-blue-600 text-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

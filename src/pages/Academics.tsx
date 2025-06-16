
import React from 'react';
import { BookOpen, FileText, Users, Download, Upload, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Academics = () => {
  const resources = [
    {
      category: "Engineering",
      subjects: ["Mathematics", "Physics", "Engineering Drawing", "Computer Science"],
      papers: 45,
      notes: 30
    },
    {
      category: "Business",
      subjects: ["Accounting", "Economics", "Business Law", "Marketing"],
      papers: 35,
      notes: 25
    },
    {
      category: "Sciences",
      subjects: ["Chemistry", "Biology", "Statistics", "Research Methods"],
      papers: 40,
      notes: 28
    }
  ];

  const studyGroups = [
    {
      subject: "Engineering Mathematics",
      members: 12,
      schedule: "Tuesdays & Thursdays, 7 PM",
      leader: "Alex Mwangi"
    },
    {
      subject: "Computer Programming",
      members: 8,
      schedule: "Mondays & Wednesdays, 6 PM",
      leader: "Sarah Wanjiku"
    },
    {
      subject: "Business Statistics",
      members: 15,
      schedule: "Fridays, 5 PM",
      leader: "John Otieno"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Resources</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Peer-to-Peer Learning & Academic Excellence
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <FileText className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <FileText className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Available Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {resources.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">{category.category}</CardTitle>
                  <CardDescription>
                    {category.subjects.join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Past Papers:</span>
                      <span className="font-semibold text-green-600">{category.papers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Study Notes:</span>
                      <span className="font-semibold text-green-600">{category.notes}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    Browse Resources
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upload & Contribute */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contribute to Our Resource Library</h2>
              <p className="text-xl text-gray-600">
                Help your fellow DeKUMSA members by sharing your notes, past papers, and study materials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Upload className="w-6 h-6 mr-2" />
                    Upload Materials
                  </CardTitle>
                  <CardDescription>
                    Share your past papers, notes, or project samples with the community.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Upload Resources
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    Accepted formats: PDF, DOC, PPT. Max size: 10MB per file.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center">
                    <Search className="w-6 h-6 mr-2" />
                    Search Resources
                  </CardTitle>
                  <CardDescription>
                    Find specific past papers, notes, or materials for your courses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Search Library
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    Search by subject, course code, year, or keyword.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Study Groups */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Study Groups</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {studyGroups.map((group, index) => (
              <Card key={index} className="border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-yellow-700">{group.subject}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {group.members} members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">Schedule:</span> {group.schedule}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Group Leader:</span> {group.leader}
                    </p>
                  </div>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    Join Study Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gray-50">
              <CardHeader>
                <CardTitle className="text-gray-800">Start Your Own Study Group</CardTitle>
                <CardDescription>
                  Can't find a study group for your subject? Create one and invite fellow students!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Users className="w-5 h-5 mr-2" />
                  Create Study Group
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Support CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Academic Support?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our academic committee is here to help with tutoring, study resources, and peer support.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
            <a href="/contact">
              Contact Academic Committee
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Academics;

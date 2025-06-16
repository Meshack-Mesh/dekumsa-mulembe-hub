
import React from 'react';
import { Vote, Users, FileText, Shield, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Elections = () => {
  const positions = [
    { title: "Chairperson", responsibilities: "Overall leadership, strategic planning, external representation" },
    { title: "Vice Chairperson", responsibilities: "Assists chairperson, leads welfare committee" },
    { title: "Secretary", responsibilities: "Minutes, correspondence, record keeping" },
    { title: "Treasurer", responsibilities: "Financial management and budgeting" },
    { title: "Organizing Secretary", responsibilities: "Event planning and coordination" },
    { title: "Public Relations Officer", responsibilities: "Communications, marketing, public relations" },
    { title: "Captain", responsibilities: "Sports coordination and team leadership" },
    { title: "Patron", responsibilities: "Advisory role and mentorship" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Vote className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elections & Constitution</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Democratic Leadership & Transparent Governance
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Shield className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Shield className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Current Election Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">2025 Elections</h2>
              <p className="text-xl text-gray-600">
                Upcoming DeKUMSA elections scheduled for early 2025. Nominations open soon!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Calendar className="w-6 h-6 mr-2" />
                    Election Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nominations Open:</span>
                    <span className="font-semibold">January 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Campaigns Begin:</span>
                    <span className="font-semibold">February 1, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Voting Day:</span>
                    <span className="font-semibold">February 20, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Results Announcement:</span>
                    <span className="font-semibold">February 22, 2025</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Voter Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Must be a registered DeKUMSA member</li>
                    <li>• Up-to-date membership contributions</li>
                    <li>• Valid student ID required</li>
                    <li>• Secret ballot voting system</li>
                    <li>• One vote per position</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Executive Positions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-700">{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {position.responsibilities}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Candidate Eligibility</h2>
            
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-700">Requirements for Candidacy</CardTitle>
                <CardDescription>
                  Based on DeKUMSA Constitution Sections 12-17
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">General Requirements:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Active DeKUMSA member for at least one semester</li>
                      <li>• Good academic standing (minimum 2.0 GPA)</li>
                      <li>• No disciplinary actions in the past year</li>
                      <li>• Endorsement by two current members</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Additional Criteria:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Demonstrated leadership experience</li>
                      <li>• Active participation in DeKUMSA activities</li>
                      <li>• Strong communication skills</li>
                      <li>• Commitment to serve full term</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Constitution Download */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">DeKUMSA Constitution</h2>
            <p className="text-xl text-gray-600 mb-8">
              Download the complete DeKUMSA Constitution to understand our governance structure, 
              election procedures, and member rights.
            </p>
            
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center justify-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Constitution Document
                </CardTitle>
                <CardDescription>
                  Official DeKUMSA Constitution (2024 Edition)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Download className="w-5 h-5 mr-2" />
                  Download Constitution (PDF)
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Last updated: January 2024 | File size: 2.5 MB
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved in Democracy</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of DeKUMSA's democratic process. Whether as a candidate or voter, your participation matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
              <a href="/membership">
                Register to Vote
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="/contact">
                Learn About Candidacy
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elections;


import React from 'react';
import { GraduationCap, Heart, Users, Star, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Alumni = () => {
  const alumniStories = [
    {
      name: "Collins Nyongesa",
      year: "Class of 2023",
      course: "Polymer Chemistry",
      currentPosition: "Electonics Dealer $ Supplier",
      impact: "A very active coalition spokesperson, former DeKUMSA chair and a champion for the rights of many not only in the association but the whole school",
      quote: "DeKUMSA taught me the value of unity and giving back. Every contribution counts.",
      image: "/lovable-uploads/placeholder.jpg"
    },
    {
      name: "Yvonne Washika",
      year: "Class of 2024",
      course: "Information Technology",
      currentPosition: "ICT Officer",
      impact: "As a former DEKUMSA Secretary and passionate Mulembe voice, organizing one of the most unforgettable DEKUMSA bashes at Munyeni House remains a proud highlight of my leadership.",
      quote: " DEKUMSA taught me the value of unity, cultural pride, and servant leadership — lessons I carry with me to this day.",
      image: "/lovable-uploads/placeholder.jpg"
    },
    {
      name: "John Kituyi",
      year: "Class of 2025",
      course: "Electrical and Electronics Engineering",
      currentPosition: "KPLC officer",
      impact: "Organized different activities as the DeKUMSA chair and alos an active political member championing for the betterment of the Mulembe assoication. Also served as a  delegate",
      quote: "DeKUMSA showed me the importance of community care and supporting each other.",
      image: "/lovable-uploads/placeholder.jpg"
    },
    {
      name: "Emmanuel Lumbasi",
      year: "Class of 2025",
      course: "Civil Engineering",
      currentPosition: "Project Manager",
      impact: "Mentors current engineering students",
      quote: "Through DeKUMSA, I learned leadership skills that shaped my professional life having served as a captain and the Chair in different executives.",
      image: "/lovable-uploads/placeholder.jpg"
    }
  ];

  const impactStats = [
    {
      icon: GraduationCap,
      number: "500+",
      label: "Alumni Members",
      description: "Former students who remain connected"
    },
    {
      icon: Heart,
      number: "KES 1M+",
      label: "Total Contributions",
      description: "Raised for student welfare and development"
    },
    {
      icon: Users,
      number: "50+",
      label: "Students Supported",
      description: "Beneficiaries of alumni contributions"
    },
    {
      icon: Award,
      number: "15+",
      label: "Scholarships",
      description: "Full and partial scholarships provided"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Association</h1>
          <p className="text-xl md:text-2xl opacity-90">Continuing the Legacy of Unity and Excellence</p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <Star className="w-6 h-6 text-yellow-300" />
            <p className="text-xl font-semibold text-yellow-300">Once DeKUMSA, Always DeKUMSA</p>
            <Star className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Alumni Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-l-4 border-green-500">
                  <CardHeader>
                    <Icon className="w-12 h-12 mx-auto text-green-600 mb-4" />
                    <CardTitle className="text-3xl font-bold text-red-600">{stat.number}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700">
                      {stat.label}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Alumni Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {alumniStories.map((alumni, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-red-700">{alumni.name}</CardTitle>
                      <CardDescription className="text-green-600 font-medium">
                        {alumni.year} • {alumni.course}
                      </CardDescription>
                      <p className="text-sm text-gray-600 mt-1">{alumni.currentPosition}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <Heart className="w-4 h-4 mr-2" />
                        Impact & Contributions
                      </h4>
                      <p className="text-gray-700 text-sm">{alumni.impact}</p>
                    </div>
                    <blockquote className="italic text-gray-600 border-l-4 border-red-500 pl-4">
                      "{alumni.quote}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Alumni Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Ways Our Alumni Give Back</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-l-4 border-red-500">
              <CardHeader>
                <BookOpen className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <CardTitle className="text-red-700">Educational Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Providing scholarships, school fees assistance, and educational materials for struggling students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-green-500">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-green-700">Mentorship Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Career guidance, internship opportunities, and professional development for current students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-yellow-500">
              <CardHeader>
                <Heart className="w-12 h-12 mx-auto text-yellow-600 mb-4" />
                <CardTitle className="text-yellow-700">Welfare Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Emergency financial support, medical assistance, and welfare fund contributions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Alumni Network CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Alumni Network</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay connected with your DeKUMSA family and continue making a difference in students' lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/254741224547" 
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Connect with Alumni
            </a>
            <a 
              href="mailto:dekumsafamily@gmail.com" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
            >
              <Heart className="w-5 h-5 mr-2" />
              Share Your Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;

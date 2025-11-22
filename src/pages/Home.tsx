
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, BookOpen, ChevronRight, Star, Shield, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const announcements = [
    "📅 Join us for weekly meetings every Friday at 5:00 PM in Room 14 SOB",
    "🎉 Get ready for Mulembe Night on 12th December 2025 at Freedom Hall - A night to celebrate our culture!",
    "👥 Become a member today and be part of our growing community",
    "📱 Follow us on social media for updates and announcements",
  ];

  const quickStats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: Calendar, label: "Events This Year", value: "10" },
    { icon: Heart, label: "Welfare Cases Helped", value: "15" },
    { icon: BookOpen, label: "Community Activities", value: "15+" }
  ];

  const objectives = [
    {
      icon: Users,
      title: "Social & Educational Support",
      description: "Provide comprehensive social and educational support to DeKUT students"
    },
    {
      icon: Heart,
      title: "Community Development",
      description: "Engage in community roles and development initiatives"
    },
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Undertake projects to improve members' academic and living standards"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Entrepreneurship",
      description: "Promote entrepreneurship, science fairs, and technology trends"
    },
    {
      icon: Shield,
      title: "Sustainable Growth",
      description: "Build sustainable internal funding through economic activities"
    },
    {
      icon: Users,
      title: "Membership Growth",
      description: "Encourage annual growth of membership base"
    }
  ];

  return (
    <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-red-500 via-green-500 to-yellow-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-4">
              <img
                src="/lovable-uploads/dekumsa logo.jpg"
                alt="DeKUMSA Logo"
                className="w-full h-full object-contain rounded-full shadow-lg bg-white/20 p-2 backdrop-blur-sm"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
              DeKUMSA
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-2">
              Dedan Kimathi University Mulembe Students Association
            </p>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="w-6 h-6 text-yellow-300" />
              <p className="text-2xl font-bold text-yellow-300">Together We Can</p>
              <Star className="w-6 h-6 text-yellow-300" />
            </div>
          </div>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Building unity, culture, and excellence among Luhya students at Dedan Kimathi University of Technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 shadow-lg">
              <Link to="/membership">
                Join DeKUMSA <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-red-600 backdrop-blur-sm shadow-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>

      {/* Scrolling Announcements */}
      <section className="bg-yellow-400 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-red-800 font-semibold text-lg inline-block">
            {announcements.join(" • ")} • {announcements.join(" • ")} • 
          </span>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">DeKUMSA Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About DeKUMSA */}
      <section id="about-section" className="py-16 bg-gradient-to-r from-red-500 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DeKUMSA</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Dedan Kimathi University Mulembe Students Association
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-red-700">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To protect the DeKUMSA Members through professional policing and through leadership of community partnerships, while fostering the educational mission in the university.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <Shield className="w-10 h-10 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-green-700">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To support a climate of excellence, promote an organization that commands the respect of our peers and enrich the quality of life of our members in the university.
              </p>
            </div>
          </div>

          {/* Statement of Intent */}
          <div className="bg-yellow-50 p-8 rounded-xl border-l-4 border-yellow-500 mb-16">
            <h2 className="text-3xl font-bold text-yellow-700 mb-6">Statement of Intent</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              DeKUMSA operates under the guidance of the DeKUT Constitution and Student Union, committed to providing equal opportunities for all members while maintaining the highest standards of professional conduct. We believe in fostering an inclusive environment where every Luhya student can thrive academically, socially, and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Objectives</h2>
            <p className="text-xl text-gray-600">
              Six core objectives guide everything we do at DeKUMSA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-500">
                  <Icon className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                Building bridges, creating opportunities, and fostering excellence
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Dedan Kimathi University Mulembe Students Association (DeKUMSA) was established to create a home away from home for Luhya students at Dedan Kimathi University of Technology. Our association serves as a beacon of unity, bringing together students from various Luhya communities under one umbrella.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Since our inception, we have been committed to preserving and promoting our rich cultural heritage while embracing modern educational values. We believe that by staying connected to our roots, we can better navigate the challenges of university life and emerge as well-rounded individuals ready to contribute to society.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Today, DeKUMSA stands as one of the most active and impactful student associations at DeKUT, with a growing membership base and an impressive track record of community service, academic support, and cultural preservation. Our motto, "Together We Can," reflects our unwavering belief in the power of unity and collective action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Constitution Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              DeKUMSA Constitution (2024)
            </h2>
            <p className="text-gray-600 text-lg">
              View or download the official DeKUMSA Constitution.
            </p>
          </div>

          {/* PDF Viewer (Google Drive Embed) */}
          <div className="w-full h-[600px] border rounded-lg shadow-lg overflow-hidden mb-6">
            <iframe
              src="https://drive.google.com/file/d/1y4PYl7E_XfMLMfEZDToSqMsZoXfRT4dZ/preview"
              title="DeKUMSA Constitution PDF"
              width="100%"
              height="100%"
              allow="autoplay"
              className="border-0"
            />
          </div>

          {/* External Download Button */}
          <div className="text-center">
            <a
              href="https://drive.google.com/file/d/1y4PYl7E_XfMLMfEZDToSqMsZoXfRT4dZ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
            >
              Download DeKUMSA Constitution (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Become a Member</h3>
              <p className="text-gray-300 mb-4">Join our vibrant community for just KES 100</p>
              <Button asChild variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                <Link to="/membership">Join Now</Link>
              </Button>
            </div>
            
            <div className="text-center bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
              <Calendar className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Attend Events</h3>
              <p className="text-gray-300 mb-4">Join our fun activities and community outreach</p>
              <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                <Link to="/events">View Events</Link>
              </Button>
            </div>
            
            <div className="text-center bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Welfare Support</h3>
              <p className="text-gray-300 mb-4">Access support when you need it most</p>
              <Button asChild variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900">
                <Link to="/welfare">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-bold mb-6">Follow Us on Social Media</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                <a href="https://youtube.com/@dekumsa?si=ADafkdPy-YjLTovO" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
                <a href="https://www.tiktok.com/@dekutmulembeassociation?_t=ZM-8yBNiMc6FBm&_r=1" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

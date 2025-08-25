
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, BookOpen, ChevronRight, Star, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const announcements = [
    "🎉 WELCOME to all incoming first years! DeKUMSA is your home away from home.",
    "📅 Let's meet for our weekly meetings from 5th September for more fun, more social topics and most importantly welcome our fellow first years in style.",
    "DeKUMSa wishes you all incoming first year a happy stay in DEKUT",
  ];

  const quickStats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: Calendar, label: "Events This Year", value: "10" },
    { icon: Heart, label: "Welfare Cases Helped", value: "15" },
    { icon: BookOpen, label: "Community Activities", value: "15+" }
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
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-red-600 backdrop-blur-sm shadow-lg"
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

      {/* Welcome Section for First Years */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome First Years! 🎉
              </h2>
              <p className="text-lg mb-6 opacity-90">
                On behalf of the entire DeKUMSA fraternity, it is our greatest joy to welcome you into our family. 
                As you begin this exciting chapter of your academic journey, know that you are not alone. 
                Here, you have a community that values culture, friendship, mentorship, and growth.
              </p>
              <p className="text-lg mb-6 opacity-90">
                DeKUMSA is more than an association, it is a home away from home. We are bound together by 
                our shared heritage, and through unity, we support one another both socially and academically. 
                This is a space where you will find guidance, laughter, and lifelong friendships.
                From Joseph Okwemba - DeKUMSA Chairman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link to="/membership">Join DeKUMSA Family</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Link to="/events">View Events</Link>
                </Button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold">#TOGETHERWECAN #MULEMBE #DEKUMSA</p>
                <p className="text-lg italic mt-2">"Omundu ni wefwe, sibwangu"</p>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/lovable-uploads/3ebdab4a-8af4-443d-9cb7-06643b0aff23.png"
                alt="DeKUMSA Welcome Poster for First Years"
                className="w-full h-auto max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-semibold">For more info: Call/WhatsApp Joseka</p>
                <p className="text-2xl font-bold text-yellow-300">0796 190382</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Announcements */}
      <section className="bg-yellow-400 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-red-800 font-semibold text-lg">
            {announcements.join(" • ")} • 
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

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-700">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To protect the DeKUMSA Members through professional policing and through leadership of community partnerships, while fostering the educational mission in the university.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-700">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To support a climate of excellence, promote an organization that commands the respect of our peers and enrich the quality of life of our members in the university.
              </p>
            </div>
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

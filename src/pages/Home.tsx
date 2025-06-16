
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, BookOpen, ChevronRight, Star, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const Home = () => {
  const announcements = [
    "📅 Weekly Meetings Every Friday Room 14 SOB from 5PM",
    "🎉 Upcoming events: Charity and Mulembe Bash - dates to be communicated",
    "❤️ Welfare support applications are being reviewed",
    "📱 Join our WhatsApp group: +254741224547"
  ];

  const quickStats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: Calendar, label: "Events This Year", value: "12" },
    { icon: Heart, label: "Welfare Cases Helped", value: "45" },
    { icon: BookOpen, label: "Community Activities", value: "15+" }
  ];

  const heroImages = [
    "/lovable-uploads/ca3b50d9-0e17-4bd1-9a46-68976f6c72ca.png",
    "/lovable-uploads/afe7df02-4f5b-4b34-8b73-a3c8b93cf58b.png",
    "/lovable-uploads/33c2deb0-b14c-4901-bd79-45b3c7b15031.png",
    "/lovable-uploads/9bcd49d8-c17d-4503-b1c4-1cda9d74a0d6.png",
    "/lovable-uploads/ab87b3f3-7dde-4e9c-af37-2f9a0a4cd66b.png",
    "/lovable-uploads/fd66e8be-e1df-4e36-a3f5-7dd00ed46e4f.png",
    "/lovable-uploads/21f0b00e-0ee1-47c3-b36e-e8b5a24b1f8c.png",
    "/lovable-uploads/7e4b11a2-9e8d-4e82-8d81-15b4f3b91075.png",
    "/lovable-uploads/a2e2fd8a-99e0-4b49-b1aa-fc1a2bbef41c.png"
  ];

  return (
    <div>
      {/* Hero Section with Background Carousel */}
      <section className="relative overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <Carousel 
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="h-full">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative h-full">
                    <img 
                      src={image} 
                      alt={`DeKUMSA Activity ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/80 via-green-500/80 to-yellow-500/80"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 min-h-[70vh] flex items-center">
          <div className="text-center text-white w-full">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white" />
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
              <Button asChild variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white hover:text-red-600 backdrop-blur-sm shadow-lg">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
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
          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>
    </div>
  );
};

export default Home;

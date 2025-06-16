
import React from 'react';
import { Mail, MessageCircle, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Leadership = () => {
  const executives = [
    {
      name: "Joseph Okwemba",
      position: "Chairperson",
      image: "/placeholder.svg",
      duties: "Overall leadership, strategic planning, and external representation",
      message: "Fellow DeKUMSA members and friends, it is my honour to lead a vibrant association committed to unity, culture, and excellence. We aim to uplift each other socially and academically. Let's continue working together to build an impactful legacy. Together We Can!"
    },
    {
      name: "Ivy Dina",
      position: "Vice Chairperson",
      image: "/placeholder.svg",
      duties: "Assists the chairperson and leads welfare committee",
      message: ""
    },
    {
      name: "Austin Ouma",
      position: "Secretary",
      image: "/placeholder.svg",
      duties: "Minutes, correspondence, and record keeping",
      message: ""
    },
    {
      name: "Edith Asachita",
      position: "Treasurer",
      image: "/placeholder.svg",
      duties: "Financial management and budgeting",
      message: ""
    },
    {
      name: "Sceva Asaquila",
      position: "Organizing Secretary",
      image: "/placeholder.svg",
      duties: "Event planning and coordination",
      message: ""
    },
    {
      name: "Emmanuel Juma",
      position: "Public Relations Officer",
      image: "/placeholder.svg",
      duties: "Communications, marketing, and public relations",
      message: "As your Public Relations Officer, I'm here to amplify your voices, share your stories, and keep you connected to everything DeKUMSA. Let's stay informed, involved, and inspired."
    },
    {
      name: "Emmanuel Wasike",
      position: "Captain",
      image: "/placeholder.svg",
      duties: "Sports coordination and team leadership",
      message: ""
    },
    {
      name: "Beatrice Shanyisa",
      position: "Patron",
      image: "/placeholder.svg",
      duties: "Advisory role and mentorship",
      message: ""
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership</h1>
            <p className="text-xl md:text-2xl opacity-90">
              2024 Executive Committee
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Star className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Star className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img 
                    src={executive.image} 
                    alt={executive.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{executive.name}</h3>
                    <p className="text-yellow-300 font-semibold">{executive.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                    <p className="text-gray-600 text-sm">{executive.duties}</p>
                  </div>
                  
                  {executive.message && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Message:</h4>
                      <p className="text-gray-600 text-sm italic">"{executive.message}"</p>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Leadership Messages</h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Chairperson Message */}
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JO
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Message from the Chairperson</h3>
                  <p className="text-red-600 font-semibold mb-1">Joseph Okwemba</p>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Fellow DeKUMSA members and friends, it is my honour to lead a vibrant association committed to unity, culture, and excellence. We aim to uplift each other socially and academically. Let's continue working together to build an impactful legacy. Together We Can!"
                  </p>
                </div>
              </div>
            </div>

            {/* PRO Message */}
            <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  EJ
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Message from the PRO</h3>
                  <p className="text-green-600 font-semibold mb-1">Emmanuel Juma</p>
                  <p className="text-gray-700 italic leading-relaxed">
                    "As your Public Relations Officer, I'm here to amplify your voices, share your stories, and keep you connected to everything DeKUMSA. Let's stay informed, involved, and inspired."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Connect with Our Leadership</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our executive team is always available to listen to your concerns and suggestions. Reach out to us!
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
            <a href="mailto:dekumsa@students.dkut.ac.ke">
              Contact Executive Team
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Leadership;


import React from 'react';
import { MessageCircle, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Leadership = () => {
  const leaders = [
    {
      name: "Joseph Okwemba",
      position: "Chairperson",
      phone: "0796190382",
      image: "/lovable-uploads/85d4e858-3fee-401f-a945-61b90c9b42bd.png",
      message: "Leading with vision and dedication to serve our community. Together we build a stronger DeKUMSA for all members."
    },
    {
      name: "Ivy Dina",
      position: "Vice Chairperson",
      phone: "0750847351",
      image: "/lovable-uploads/36522acf-48f9-4c5e-9c41-3e03f4aa03e6.png",
      message: "Supporting our chairperson and ensuring smooth operations. Always ready to step up when needed."
    },
    {
      name: "Austin Ouma",
      position: "Secretary",
      phone: "0743892264",
      image: "/lovable-uploads/97c88e96-d2be-497f-8f2c-e2f62a0455a9.png",
      message: "Keeping accurate records and ensuring transparency in all our proceedings. Your voice matters in every meeting."
    },
    {
      name: "Edith Asachita",
      position: "Treasurer",
      phone: "0703299411",
      image: "/lovable-uploads/39bd1f1f-ddf7-4ca3-93d8-efee46c591da.png",
      message: "Managing our finances with integrity and accountability. Every shilling is invested wisely for our members' benefit."
    },
    {
      name: "Sceva Asaquila",
      position: "Organizing Secretary",
      phone: "0745256547",
      image: "/lovable-uploads/162b0cea-279a-4c0b-b49c-18afce1250f5.png",
      message: "Coordinating events and activities that bring us together. Making every DeKUMSA event memorable and meaningful."
    },
    {
      name: "Emmanuel Juma",
      position: "Public Relations Officer",
      phone: "0741224547",
      image: "/lovable-uploads/5e4b3a83-07b5-458d-8ae6-26ade4ba6358.png",
      message: "Building bridges and maintaining our reputation. Connecting DeKUMSA with the wider university community."
    },
    {
      name: "Emmanuel Wasike",
      position: "Captain",
      phone: "0757239192",
      image: null,
      message: "Leading by example in sports and physical activities. Promoting health, fitness, and team spirit among members."
    },
    {
      name: "Beatrice Shanyisa",
      position: "Patron",
      phone: null,
      image: "/lovable-uploads/772c43f0-bef7-4a46-bc0d-df477741f96d.png",
      message: "Providing guidance and wisdom to our leadership team. Ensuring we stay true to our values and mission."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <User className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Meet the Dedicated Team Leading DeKUMSA Forward
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      {leader.image ? (
                        <AvatarImage src={leader.image} alt={leader.name} />
                      ) : (
                        <AvatarFallback className="bg-red-100 text-red-600">
                          <User className="w-12 h-12" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </div>
                  <CardTitle className="text-red-700">{leader.name}</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm italic">
                    "{leader.message}"
                  </p>
                  {leader.phone && (
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                    >
                      <a href={`https://wa.me/254${leader.phone.substring(1)}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions or suggestions? Our leadership team is here to listen and help.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <a href="https://wa.me/254741224547">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Executive Team
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Leadership;

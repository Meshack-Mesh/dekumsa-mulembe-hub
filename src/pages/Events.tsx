
import React from 'react';
import { Calendar, MapPin, Users, Camera, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Weekly Meetings",
      date: "Every Friday",
      time: "5:00 PM",
      location: "Room 14 SOB, DeKUT",
      description: "Join us for our regular weekly meetings to discuss association matters and plan upcoming activities.",
      type: "Regular"
    },
    {
      title: "Charity Activity",
      date: "Date to be communicated",
      time: "TBD",
      location: "Venue TBD",
      description: "Join us for our upcoming charity activity to give back to the community.",
      type: "Community"
    },
    {
      title: "Mulembe Bash",
      date: "Date to be communicated",
      time: "TBD",
      location: "Venue TBD",
      description: "Celebrate Luhya culture and heritage with music, dance, food, and fellowship.",
      type: "Cultural"
    }
  ];

  const pastEvents = [
    {
      title: "Charity Visit - Huruma Children's Home",
      date: "November 2024",
      description: "DeKUMSA members visited Huruma Children's Home with donations and spent time with the children.",
      image: "/lovable-uploads/97c88e96-d2be-497f-8f2c-e2f62a0455a9.png",
      participants: "25+ members"
    },
    {
      title: "Hiking Adventure - Mau Caves, Nyeri",
      date: "October 2024", 
      description: "Adventurous hiking trip to Mau Caves in Nyeri that brought members together in nature's beauty.",
      image: "/lovable-uploads/334da0a3-cdbf-460d-b263-44084980ea78.png",
      participants: "30+ members"
    },
    {
      title: "Visit to Karatina University",
      date: "September 2024",
      description: "Educational visit to Karatina University that strengthened inter-university bonds.",
      image: "/lovable-uploads/772c43f0-bef7-4a46-bc0d-df477741f96d.png",
      participants: "40+ members"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Building Community Through Shared Experiences
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Users className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Users className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-red-700">{event.title}</CardTitle>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <CardDescription className="flex items-center space-x-4 text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Past Events Highlights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.participants}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-green-700">{event.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Miss Out!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay updated with DeKUMSA events and be part of our vibrant community activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
              <a href="https://wa.me/254741224547">
                <Camera className="w-5 h-5 mr-2" />
                Join Our WhatsApp Group
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="https://youtube.com/@DeKUMSA">
                Visit Our YouTube Channel
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

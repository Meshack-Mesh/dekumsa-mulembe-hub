
import React from 'react';
import { Calendar, MapPin, Users, Camera, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual General Meeting",
      date: "December 15, 2024",
      time: "2:00 PM",
      location: "Main Hall, DeKUT",
      description: "Join us for our annual meeting to review the year's achievements and plan for 2025.",
      type: "Meeting"
    },
    {
      title: "Fun Day 2024",
      date: "December 20, 2024",
      time: "9:00 AM",
      location: "University Grounds",
      description: "A day of games, music, food, and celebration with fellow DeKUMSA members.",
      type: "Social"
    }
  ];

  const pastEvents = [
    {
      title: "Charity Visit - Nyeri Children's Home",
      date: "November 2024",
      description: "DeKUMSA members visited local children's home with donations and spent time with the children.",
      image: "/placeholder.svg",
      participants: "25+ members"
    },
    {
      title: "Hiking Adventure - Mt. Kenya",
      date: "October 2024", 
      description: "Adventurous hiking trip that brought members together in nature's beauty.",
      image: "/placeholder.svg",
      participants: "30+ members"
    },
    {
      title: "Beach Excursion - Mombasa",
      date: "September 2024",
      description: "Relaxing beach trip that strengthened bonds among DeKUMSA members.",
      image: "/placeholder.svg",
      participants: "40+ members"
    },
    {
      title: "Welcome Party - New Members",
      date: "August 2024",
      description: "Orientation and welcome celebration for new DeKUMSA members.",
      image: "/placeholder.svg",
      participants: "60+ members"
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
              <a href="/contact">
                <Camera className="w-5 h-5 mr-2" />
                Join Our WhatsApp Group
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="/gallery">
                View Event Gallery
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

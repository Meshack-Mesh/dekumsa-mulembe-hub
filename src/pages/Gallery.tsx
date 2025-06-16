
import React from 'react';
import { Camera, Heart, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Gallery = () => {
  const photoAlbums = [
    {
      title: "Fun Day 2024",
      date: "December 2024",
      photos: 48,
      cover: "/placeholder.svg",
      description: "Games, music, and celebration with DeKUMSA family"
    },
    {
      title: "Charity Visit - Children's Home",
      date: "November 2024",
      photos: 32,
      cover: "/placeholder.svg",
      description: "Spreading love and joy to children in need"
    },
    {
      title: "Beach Excursion - Mombasa",
      date: "September 2024",
      photos: 65,
      cover: "/placeholder.svg",
      description: "Sun, sand, and unforgettable memories"
    },
    {
      title: "Hiking Adventure - Mt. Kenya",
      date: "October 2024",
      photos: 42,
      cover: "/placeholder.svg",
      description: "Conquering heights together"
    },
    {
      title: "Annual General Meeting",
      date: "August 2024",
      photos: 25,
      cover: "/placeholder.svg",
      description: "Democratic leadership in action"
    },
    {
      title: "Welcome Party - New Members",
      date: "August 2024",
      photos: 38,
      cover: "/placeholder.svg",
      description: "Welcoming new DeKUMSA family members"
    },
    {
      title: "Cultural Day Celebration",
      date: "July 2024",
      photos: 55,
      cover: "/placeholder.svg",
      description: "Celebrating our rich Luhya heritage"
    },
    {
      title: "Sports Day Tournament",
      date: "June 2024",
      photos: 71,
      cover: "/placeholder.svg",
      description: "Competition, teamwork, and sportsmanship"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Camera className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Capturing Memories, Building Stories
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Heart className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Heart className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <Camera className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-gray-800">8</p>
              <p className="text-gray-600">Photo Albums</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <Calendar className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-gray-800">376</p>
              <p className="text-gray-600">Total Photos</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-gray-800">12</p>
              <p className="text-gray-600">Events Covered</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-gray-800">2024</p>
              <p className="text-gray-600">Memories Made</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Albums */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Photo Albums</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoAlbums.map((album, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={album.cover} 
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {album.photos} photos
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{album.title}</h3>
                    <p className="text-sm opacity-90">{album.date}</p>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <CardDescription className="text-gray-600">
                    {album.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Moments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Moments</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <img 
                  src="/placeholder.svg" 
                  alt={`Featured moment ${index}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Photos CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Memories</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have photos from DeKUMSA events? Share them with our community and help us build our visual story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-3 rounded-md font-semibold text-lg transition-colors">
              <Camera className="w-5 h-5 mr-2 inline" />
              Upload Photos
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-semibold text-lg transition-colors">
              Follow on Instagram
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

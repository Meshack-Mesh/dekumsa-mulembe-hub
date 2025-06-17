import React, { useState, useEffect } from 'react';
import { Calendar, Users } from 'lucide-react';
import WeeklyMeetingCard from '@/components/WeeklyMeetingCard';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch events from database or any other source
    // For now, let's use a dummy array
    const dummyEvents = [
      {
        id: 1,
        title: 'DeKUMSA Cultural Night',
        date: '2024-08-15',
        description: 'A night of cultural performances, food, and music.',
      },
      {
        id: 2,
        title: 'Career Workshop',
        date: '2024-09-20',
        description: 'A workshop to help students prepare for their future careers.',
      },
    ];

    setEvents(dummyEvents);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DeKUMSA Events</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Join Us for Exciting Activities and Programs
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Users className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Users className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Meeting Card */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <WeeklyMeetingCard />
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
          
          {loading ? (
            <div className="text-center">Loading events...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't miss out on our exciting events and activities. Join our mailing list to receive updates.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full">
            Subscribe to Newsletter
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;

import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, Camera, Clock, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const useWeeklyMeeting = () => {
  const { toast } = useToast();
  const [nextMeeting, setNextMeeting] = useState<Date | null>(null);

  useEffect(() => {
    const calculateNextFriday = () => {
      const today = new Date();
      const nextFriday = new Date();
      const dayOfWeek = today.getDay();
      const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
      nextFriday.setDate(today.getDate() + (daysUntilFriday || 7));
      setNextMeeting(nextFriday);
    };
    calculateNextFriday();
  }, []);

  const addToGoogleCalendar = () => {
    if (!nextMeeting) return;

    const startDate = new Date(nextMeeting);
    startDate.setHours(17, 0, 0);
    const endDate = new Date(startDate);
    endDate.setHours(18, 0, 0);

    const formatDate = (date: Date) =>
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'DeKUMSA Weekly Meeting'
    )}&dates=${formatDate(startDate)}/${formatDate(
      endDate
    )}&details=${encodeURIComponent(
      'Join us for our regular weekly meetings to discuss association matters and plan upcoming activities.'
    )}&location=${encodeURIComponent(
      'Room 14 SOB, DeKUT'
    )}&recur=${encodeURIComponent('RRULE:FREQ=WEEKLY;BYDAY=FR')}`;

    window.open(googleCalendarUrl, '_blank');

    toast({
      title: 'Calendar Event',
      description: 'Opening Google Calendar to add the event',
    });
  };

  return { nextMeeting, addToGoogleCalendar };
};

const Events = () => {
  const { nextMeeting, addToGoogleCalendar } = useWeeklyMeeting();
  const { toast } = useToast();

  const addEventToGoogleCalendar = (event: any) => {
    if (!event.date || event.date.toLowerCase().includes("to be communicated")) {
      toast({
        title: 'Event Date Missing',
        description: 'The date for this event is yet to be communicated.',
      });
      return;
    }

    const eventDate = new Date(event.date);
    const startDate = new Date(eventDate);
    startDate.setHours(9, 0, 0);
    const endDate = new Date(startDate);
    endDate.setHours(17, 0, 0);

    const formatDate = (date: Date) =>
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, '_blank');

    toast({
      title: 'Calendar Event',
      description: `Opening Google Calendar to add "${event.title}"`,
    });
  };

  const upcomingEvents = [
    {
      title: "DeKUMSA Fun Day",
      date: "2025-07-05",
      time: "9:00AM",
      location: "Farm House",
      description: "Join us for our upcoming Fun day as we break class monopoly to do some social interaction and many other games. ",
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

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Weekly Meetings
                </CardTitle>
                <CardDescription>Join us for our regular weekly meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">
                      Next Meeting: {nextMeeting?.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>5:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Room 14 SOB, DeKUT</span>
                  </div>
                  <div className="pt-4">
                    <Button onClick={addToGoogleCalendar} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 w-full">
                      <Plus className="w-4 h-4" />
                      <span>Add to Google Calendar</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                  <Button onClick={() => addEventToGoogleCalendar(event)} className="w-full bg-red-600 hover:bg-red-700">
                    Add to Google Calendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

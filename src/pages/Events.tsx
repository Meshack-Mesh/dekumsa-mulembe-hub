import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, Camera, Clock, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

/**
 * -----------------------------------------------------------------------------
 *   EVENTS PAGE  •  DeKUMSA
 * -----------------------------------------------------------------------------
 *  ✓ One source of truth – no duplicate definitions
 *  ✓ "Add to Google Calendar" for weekly meeting **and** ad‑hoc events
 *  ✓ Graceful fallback (toast) when date is "TBD / to be communicated"
 *  ✓ Strong typing for event objects for easier maintenance
 * -----------------------------------------------------------------------------
 */

// ───────────────────────────────────────────────────────────────────────────────
//  Shared helpers
// ───────────────────────────────────────────────────────────────────────────────
const formatForGoogle = (date: Date) =>
  date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

// ───────────────────────────────────────────────────────────────────────────────
//  Weekly‑meeting hook
// ───────────────────────────────────────────────────────────────────────────────
const useWeeklyMeeting = () => {
  const { toast } = useToast();
  const [nextMeeting, setNextMeeting] = useState<Date | null>(null);

  // Calculate the **next** Friday (skip to the following week if today is Fri)
  useEffect(() => {
    const today = new Date();
    const nextFriday = new Date(today);
    const daysUntilFriday = ((5 - today.getDay() + 7) % 7) || 7; // ensures ≥ 1 day
    nextFriday.setDate(today.getDate() + daysUntilFriday);
    setNextMeeting(nextFriday);
  }, []);

  const addToGoogleCalendar = () => {
    if (!nextMeeting) return;

    const start = new Date(nextMeeting);
    start.setHours(17, 0, 0);
    const end = new Date(start);
    end.setHours(18, 0, 0);

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent('DeKUMSA Weekly Meeting')}` +
      `&dates=${formatForGoogle(start)}/${formatForGoogle(end)}` +
      `&details=${encodeURIComponent('Regular weekly meeting to discuss association matters and plan upcoming activities.')}` +
      `&location=${encodeURIComponent('Room 14 SOB, DeKUT')}` +
      `&recur=${encodeURIComponent('RRULE:FREQ=WEEKLY;BYDAY=FR')}`;

    window.open(url, '_blank');
    toast({ title: 'Calendar Event', description: 'Opening Google Calendar…' });
  };

  return { nextMeeting, addToGoogleCalendar };
};

// ───────────────────────────────────────────────────────────────────────────────
//  Types
// ───────────────────────────────────────────────────────────────────────────────
interface UpcomingEvent {
  title: string;
  date: string;  // ISO date or human‑readable "TBD" line
  time: string;
  location: string;
  description: string;
  type: string;
}

interface PastEvent {
  title: string;
  date: string;
  description: string;
  participants: string;
  images: string[];
}

const Events = () => {
  const { toast } = useToast();
  const { nextMeeting, addToGoogleCalendar } = useWeeklyMeeting();

  // --- Data -------------------------------------------------------------------
  const upcomingEvents: UpcomingEvent[] = [
    {
      title: 'DeKUMSA Fun Day',
      date: '2025-07-05',            // ISO format → universally parsable
      time: '09:00 AM',
      location: 'Farm House',
      description:
        'Join us for our Fun day as we break class monopoly to socialise and play games.',
      type: 'Community',
    },
    {
      title: 'Mulembe Bash',
      date: 'Date to be communicated',
      time: 'TBD',
      location: 'Venue TBD',
      description:
        'Celebrate Luhya culture and heritage with music, dance, food, and fellowship.',
      type: 'Cultural',
    },
  ];

  const pastEvents: PastEvent[] = [
    {
      title: 'Mau Caves Excursion',
      date: 'June 2025',
      description:
        'An amazing trip to Mau Forest where members enjoyed nature walks, team building, and environmental conservation activities.',
      participants: '45 members',
      images: [
        '/lovable-uploads/mau1.jpg',
        '/lovable-uploads/mau2.jpg',
        '/lovable-uploads/mau3.jpg',
        '/lovable-uploads/mau4.jpg',
        '/lovable-uploads/mau5.jpg',
        '/lovable-uploads/mau6.jpg',
        '/lovable-uploads/mau7.jpg',
        '/lovable-uploads/mau8.jpg',
        '/lovable-uploads/mau9.jpg',
        '/lovable-uploads/mau10.jpg',
      ],
    },
    {
      title: 'Karatina Fun Day',
      date: 'March 2025',
      description:
        'A fun‑filled day at Karatina with games, sports, and fellowship activities that brought the DeKUMSA family together.',
      participants: '60 members',
      images: [
        '/lovable-uploads/kara.jpg',
        '/lovable-uploads/kara1.jpg',
        '/lovable-uploads/kara2.jpg',
        '/lovable-uploads/kara3.jpg',
        '/lovable-uploads/kara4.jpg',
        '/lovable-uploads/kara5.jpg',
      ],
    },
    {
      title: "Huruma Children's Home Visit",
      date: 'February 2025',
      description:
        'A heart‑warming visit to Huruma Children\'s Home where we donated supplies and spent quality time with the children.',
      participants: '30 members',
      images: [
        '/lovable-uploads/huruma.jpg',
        '/lovable-uploads/huruma1.jpg',
        '/lovable-uploads/huruma2.jpg',
        '/lovable-uploads/huruma3.jpg',
        '/lovable-uploads/huruma4.jpg',
        '/lovable-uploads/huruma5.jpg',
        '/lovable-uploads/huruma6.jpg',
        '/lovable-uploads/huruma7.jpg',
        '/lovable-uploads/huruma8.jpg',
        '/lovable-uploads/huruma9.jpg',
        '/lovable-uploads/huruma10.jpg',
      ],
    },
  ];

  // --- Helpers ----------------------------------------------------------------
  const addEventToGoogleCalendar = (event: UpcomingEvent) => {
    if (!event.date || event.date.toLowerCase().includes('to be communicated')) {
      toast({
        title: 'Event Date Missing',
        description: 'The date for this event is yet to be communicated.',
      });
      return;
    }

    const startDate = new Date(event.date);
    if (isNaN(startDate.getTime())) {
      toast({ title: 'Invalid Date', description: 'Cannot parse event date.' });
      return;
    }

    startDate.setHours(9, 0, 0);
    const endDate = new Date(startDate);
    endDate.setHours(17, 0, 0);

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(event.title)}` +
      `&dates=${formatForGoogle(startDate)}/${formatForGoogle(endDate)}` +
      `&details=${encodeURIComponent(event.description)}` +
      `&location=${encodeURIComponent(event.location)}`;

    window.open(url, '_blank');
    toast({ title: 'Calendar Event', description: `Opening Google Calendar for "${event.title}"` });
  };

  // --- UI Components ----------------------------------------------------------
  const PastEventCarousel = ({ event }: { event: PastEvent }) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
      const id = setInterval(() => setIndex((i) => (i + 1) % event.images.length), 3000);
      return () => clearInterval(id);
    }, [event.images.length]);

    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video bg-gray-200 relative">
          <img
            src={event.images[index]}
            alt={`${event.title} – slide ${index + 1}`}
            className="w-full h-full object-cover transition-opacity duration-700"
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
    );
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Events</h1>
          <p className="text-2xl opacity-90">Building Community through Shared Experiences</p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <Users className="w-6 h-6 text-yellow-300" />
            <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
            <Users className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Weekly Meeting Card */}
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
                                      Next Meeting:{' '}
                                      {nextMeeting?.toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                      })}
                                    </span>
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span>5:00 PM – 6:00 PM</span>
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span>Room 14 SOB, DeKUT</span>
                                  </div>
                                  <div className="pt-4">
                                    <Button
                                      onClick={addToGoogleCalendar}
                                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 w-full"
                                    >
                                      <Plus className="w-4 h-4" />
                                      <span>Add to Google Calendar</span>
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Additional Upcoming Events */}
                            {upcomingEvents.map((event, idx) => (
                              <Card
                                key={idx}
                                className="border-l-4 border-green-500 hover:shadow-lg transition-shadow"
                              >
                                <CardHeader>
                                  <CardTitle className="text-green-700">{event.title}</CardTitle>
                                  <CardDescription className="flex items-center text-gray-600">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {event.date}
                                  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-gray-700 mb-4">{event.description}</p>
                                  <div className="text-sm text-gray-600 space-y-1">
                                    <div className="flex items-center">
                                      <Clock className="w-4 h-4 mr-2" />
                                      {event.time}
                                    </div>
                                    <div className="flex items-center">
                                      <MapPin className="w-4 h-4 mr-2" />
                                      {event.location}
                                    </div>
                                  </div>
                                  <div className="pt-4">
                                    <Button
                                      onClick={() => addEventToGoogleCalendar(event)}
                                      className="bg-green-600 hover:bg-green-700 w-full"
                                    >
                                      Add to Google Calendar
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </section>

                      {/* Past Events */}
                      <section className="py-16 bg-muted">
                        <div className="container mx-auto px-4">
                          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Past Events</h2>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {pastEvents.map((event, idx) => (
                              <PastEventCarousel key={idx} event={event} />
                            ))}
                          </div>
                        </div>
                      </section>
                    </div>
                  );
                };

                export default Events;


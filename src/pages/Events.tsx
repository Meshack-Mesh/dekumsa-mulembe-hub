
import React, { useEffect, useState } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Camera,
  Clock,
  Plus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

// ───────────────────────────────────────────────────────────────────────────
// Helpers
// ───────────────────────────────────────────────────────────────────────────
const formatForGoogle = (d: Date) =>
  d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

// ───────────────────────────────────────────────────────────────────────────
// Weekly-meeting hook
// ───────────────────────────────────────────────────────────────────────────
const useWeeklyMeeting = () => {
  const { toast } = useToast();
  const [nextMeeting, setNextMeeting] = useState<Date | null>(null);

  useEffect(() => {
    const today = new Date();
    const nextFri = new Date(today);
    const daysUntilFri = ((5 - today.getDay() + 7) % 7) || 7; // ≥1 day
    nextFri.setDate(today.getDate() + daysUntilFri);
    setNextMeeting(nextFri);
  }, []);

  const addToCalendar = () => {
    if (!nextMeeting) return;

    const start = new Date(nextMeeting);
    start.setHours(17, 0, 0);
    const end = new Date(start);
    end.setHours(18, 0, 0);

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent('DeKUMSA Weekly Meeting')}` +
      `&dates=${formatForGoogle(start)}/${formatForGoogle(end)}` +
      `&details=${encodeURIComponent(
        'Regular weekly meeting to discuss association matters and plan upcoming activities.'
      )}` +
      `&location=${encodeURIComponent('Room 14 SOB, DeKUT')}` +
      `&recur=${encodeURIComponent('RRULE:FREQ=WEEKLY;BYDAY=FR')}`;

    window.open(url, '_blank');
    toast({ title: 'Calendar Event', description: 'Opening Google Calendar…' });
  };

  return { nextMeeting, addToCalendar };
};

// ───────────────────────────────────────────────────────────────────────────
// Types
// ───────────────────────────────────────────────────────────────────────────
interface UpcomingEvent {
  title: string;
  date: string; // ISO date or TBD text
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

// ───────────────────────────────────────────────────────────────────────────
// Component
// ───────────────────────────────────────────────────────────────────────────
const Events = () => {
  const { toast } = useToast();
  const { nextMeeting, addToCalendar } = useWeeklyMeeting();

  // ── Data ────────────────────────────────────────────────────────────────
  const upcomingEvents: UpcomingEvent[] = [
    {
      title: 'Fun Day',
      date: '2025-10-25',
      time: '10:00 AM',
      location: 'Venue TBD',
      description: 'A day filled with games, entertainment, and fellowship activities for all DeKUMSA members.',
      type: 'Recreation',
    },
    {
      title: 'Executive Elections',
      date: '2025-11-07',
      time: '4:30 PM',
      location: 'Room 14 SOB',
      description: 'Democratic elections for the new DeKUMSA executive committee. Your voice matters!',
      type: 'Elections',
    },
    {
      title: 'Mulembe Night Bash',
      date: '2025-11-21',
      time: '6:00 PM - 6:00 AM',
      location: 'Venue TBD',
      description: 'Khabusie, Wandindi and all. All-night celebration of Luhya culture with music, dance, food, and entertainment. ',
      type: 'Cultural',
    },
  ];

  const pastEvents: PastEvent[] = [
    {
      title: 'Mau Caves Excursion',
      date: 'June 2025',
      description:
        'An amazing trip to Mau Forest where members enjoyed nature walks, team building, and environmental conservation activities.',
      participants: '51 members',
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
      title: 'Zaina Falls Hike',
      date: '27th September 2025',
      description:
        'A fun-filled hike to Zaina Falls brought the DeKUMSA family together with joy, laughter, and breathtaking scenery. The day was crowned with swimming, games, and dancing that made it truly unforgettable.',
      participants: '60 members',
      images: [
        '/lovable-uploads/IMG_0820.JPG',
        '/lovable-uploads/IMG_0844 (1).JPG',
        '/lovable-uploads/IMG_0856.JPG',
        '/lovable-uploads/IMG_0909 (1).JPG',
        '/lovable-uploads/IMG_0949.JPG',
        '/lovable-uploads/IMG_1026 (1).JPG',
        '/lovable-uploads/IMG_1034.JPG',
        '/lovable-uploads/IMG_1149.JPG',
        '/lovable-uploads/IMG_1217.JPG',
        '/lovable-uploads/IMG_1281.JPG',
        '/lovable-uploads/IMG_1368.JPG',

      ],
    },
    {
      title: "Freshers Induction 2025",
      date: '12th September 2025',
      description:
        'A heart-warming welcome of our junior members into the larger Mulembe family.',
      participants: '60 members',
      images: [
        '/lovable-uploads/Canon EOS 60D (119).jpg',
        '/lovable-uploads/Canon EOS 60D (129).jpg',
        '/lovable-uploads/Canon EOS 60D (136).jpg',
        '/lovable-uploads/Canon EOS 60D (145).jpg',
        '/lovable-uploads/Canon EOS 60D (146).jpg',
        '/lovable-uploads/Canon EOS 60D (187).jpg',
        '/lovable-uploads/Canon EOS 60D (196).jpg',
        '/lovable-uploads/Canon EOS 60D (119).jpg',
        '/lovable-uploads/Canon EOS 60D (198).jpg',
        '/lovable-uploads/Canon EOS 60D (201).jpg',
        '/lovable-uploads/Canon EOS 60D (342).jpg',
        '/lovable-uploads/Canon EOS 60D (357).jpg',
        '/lovable-uploads/Canon EOS 60D (362).jpg',
        '/lovable-uploads/Canon EOS 60D (369).jpg',
        '/lovable-uploads/Canon EOS 60D (374).jpg',
        '/lovable-uploads/Canon EOS 60D (385).jpg',
        '/lovable-uploads/Canon EOS 60D (386).jpg',
        '/lovable-uploads/Canon EOS 60D (393).jpg',
        '/lovable-uploads/Canon EOS 60D (397).jpg',
      ],
    },
  ];

  // ── Helper: add ad-hoc event to Google Calendar ─────────────────────────
  const addEventToGoogleCalendar = (e: UpcomingEvent) => {
    if (!e.date || e.date.toLowerCase().includes('to be communicated')) {
      toast({
        title: 'Event Date Missing',
        description: 'The date for this event is yet to be communicated.',
      });
      return;
    }

    const start = new Date(e.date);
    if (isNaN(start.getTime())) {
      toast({ title: 'Invalid Date', description: 'Cannot parse event date.' });
      return;
    }

    start.setHours(9, 0, 0);
    const end = new Date(start);
    end.setHours(17, 0, 0);

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(e.title)}` +
      `&dates=${formatForGoogle(start)}/${formatForGoogle(end)}` +
      `&details=${encodeURIComponent(e.description)}` +
      `&location=${encodeURIComponent(e.location)}`;

    window.open(url, '_blank');
    toast({
      title: 'Calendar Event',
      description: `Opening Google Calendar for "${e.title}"`,
    });
  };

  // ── Past-event carousel (auto) ───────────────────────────────────────────
  const PastEventCarousel = ({ event }: { event: PastEvent }) => {
    const [index, setIndex] = useState(0);
    const total = event.images.length;

    useEffect(() => {
      const id = setInterval(
        () => setIndex((i) => (i + 1) % total),
        3000 // 3 s
      );
      return () => clearInterval(id);
    }, [total]);

    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        {/* Image area */}
        <div className="relative aspect-video bg-gray-200">
          {event.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${event.title} – slide ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Participants badge */}
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {event.participants}
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {event.images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text */}
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

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Events</h1>
          <p className="text-2xl opacity-90">
            Building Community through Shared Experiences
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <Users className="w-6 h-6 text-yellow-300" />
            <p className="text-xl font-semibold text-yellow-300">
              Together We Can
            </p>
            <Users className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Upcoming Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Weekly Meeting */}
            <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Weekly Meetings
                </CardTitle>
                <CardDescription>
                  Join us for our regular weekly meetings
                </CardDescription>
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
                      onClick={addToCalendar}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 w-full"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Google Calendar</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ad-hoc events */}
            {upcomingEvents.map((e, i) => (
              <Card
                key={i}
                className="border-l-4 border-green-500 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-green-700">{e.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {e.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{e.description}</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {e.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {e.location}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button
                      onClick={() => addEventToGoogleCalendar(e)}
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

      {/* Past */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Past Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pastEvents.map((p, i) => (
              <PastEventCarousel key={i} event={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
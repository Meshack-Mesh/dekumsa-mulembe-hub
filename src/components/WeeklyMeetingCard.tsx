
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const WeeklyMeetingCard = () => {
  const { toast } = useToast();
  const [nextMeeting, setNextMeeting] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, just calculate next Friday since events table doesn't exist yet
    calculateNextFriday();
    setLoading(false);
  }, []);

  const calculateNextFriday = () => {
    const today = new Date();
    const nextFriday = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    
    if (daysUntilFriday === 0 && today.getDay() === 5) {
      // If today is Friday, get next Friday
      nextFriday.setDate(today.getDate() + 7);
    } else {
      nextFriday.setDate(today.getDate() + (daysUntilFriday || 7));
    }
    setNextMeeting(nextFriday);
  };

  const addToGoogleCalendar = () => {
    if (!nextMeeting) return;

    const startDate = new Date(nextMeeting);
    startDate.setHours(17, 0, 0); // 5:00 PM
    const endDate = new Date(startDate);
    endDate.setHours(18, 0, 0); // 6:00 PM

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const eventDetails = {
      text: 'DeKUMSA Weekly Meeting',
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details: 'Join us for our regular weekly meetings to discuss association matters and plan upcoming activities.',
      location: 'Room 14 SOB, DeKUT',
      recur: 'RRULE:FREQ=WEEKLY;BYDAY=FR'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&dates=${eventDetails.dates}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&recur=${encodeURIComponent(eventDetails.recur)}`;

    window.open(googleCalendarUrl, '_blank');

    toast({
      title: "Calendar Event",
      description: "Opening Google Calendar to add the event",
    });
  };

  if (loading) {
    return (
      <Card className="border-l-4 border-blue-500">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
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
            <Button 
              onClick={addToGoogleCalendar}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Google Calendar</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyMeetingCard;

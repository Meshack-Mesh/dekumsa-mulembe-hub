
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

const WeeklyMeetingCard = () => {
  const [nextMeetingDate, setNextMeetingDate] = useState<string>('');

  useEffect(() => {
    fetchNextMeetingDate();
    
    // Update weekly meeting dates automatically
    const updateMeetingDate = () => {
      const now = new Date();
      if (now.getDay() === 5) { // Friday
        // Update after Friday
        setTimeout(fetchNextMeetingDate, 1000 * 60 * 60); // Check after 1 hour
      }
    };

    updateMeetingDate();
  }, []);

  const fetchNextMeetingDate = async () => {
    try {
      // First, update the meeting date
      await supabase.rpc('update_weekly_meeting_date');
      
      // Then fetch the updated date
      const { data } = await supabase
        .from('events')
        .select('next_date')
        .eq('title', 'Weekly Meetings')
        .eq('is_recurring', true)
        .single();

      if (data?.next_date) {
        setNextMeetingDate(data.next_date);
      } else {
        // Fallback: calculate next Friday
        const today = new Date();
        const nextFriday = new Date();
        const daysUntilFriday = (5 - today.getDay() + 7) % 7 || 7;
        nextFriday.setDate(today.getDate() + daysUntilFriday);
        setNextMeetingDate(nextFriday.toISOString().split('T')[0]);
      }
    } catch (error) {
      console.error('Error fetching meeting date:', error);
      // Fallback calculation
      const today = new Date();
      const nextFriday = new Date();
      const daysUntilFriday = (5 - today.getDay() + 7) % 7 || 7;
      nextFriday.setDate(today.getDate() + daysUntilFriday);
      setNextMeetingDate(nextFriday.toISOString().split('T')[0]);
    }
  };

  const addToGoogleCalendar = () => {
    const meetingDate = new Date(nextMeetingDate);
    meetingDate.setHours(17, 0, 0, 0); // 5:00 PM
    
    const startTime = meetingDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endTime = new Date(meetingDate.getTime() + 2 * 60 * 60 * 1000)
      .toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=DeKUMSA Weekly Meeting&dates=${startTime}/${endTime}&location=Room 14 SOB, DeKUT&details=Join us for our regular weekly meeting to discuss association matters and plan upcoming activities.`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="border-l-4 border-red-500">
      <CardHeader>
        <CardTitle className="text-red-700 flex items-center">
          <Calendar className="w-6 h-6 mr-2" />
          Weekly Meetings
        </CardTitle>
        <CardDescription>
          Join us for our regular weekly meetings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <Calendar className="w-5 h-5 text-red-600" />
            <span className="font-medium">
              Next Meeting: {nextMeetingDate ? formatDate(nextMeetingDate) : 'Loading...'}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-700">
            <Clock className="w-5 h-5 text-red-600" />
            <span>Every Friday at 5:00 PM</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-700">
            <MapPin className="w-5 h-5 text-red-600" />
            <span>Room 14 SOB, DeKUT</span>
          </div>

          <div className="pt-4">
            <Button
              onClick={addToGoogleCalendar}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!nextMeetingDate}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add to Google Calendar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyMeetingCard;

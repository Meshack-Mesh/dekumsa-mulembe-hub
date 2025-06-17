
import React from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface MembershipData {
  fullName: string;
  registrationNumber: string;
  course: string;
  year: string;
  phone: string;
  email: string;
  reason: string;
}

export const useMembershipSubmission = () => {
  const { toast } = useToast();

  const submitMembership = async (formData: MembershipData) => {
    try {
      // For now, we'll use the contact_messages table as a temporary storage
      // until the dekumsa_members table is created
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.fullName,
          email: formData.email,
          subject: `Membership Application - ${formData.registrationNumber}`,
          message: `Registration Number: ${formData.registrationNumber}\nCourse: ${formData.course}\nYear: ${formData.year}\nPhone: ${formData.phone}\nReason: ${formData.reason}`,
          is_read: false
        }]);

      if (error) {
        console.error('Database error:', error);
        throw error;
      }

      // Send email notification
      await sendEmailNotification(formData);

      toast({
        title: "Application Submitted!",
        description: "Thank you for joining DeKUMSA. We'll be in touch soon.",
      });

      return true;
    } catch (error) {
      console.error('Error submitting membership:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const sendEmailNotification = async (formData: MembershipData) => {
    try {
      // Send via edge function
      const { error } = await supabase.functions.invoke('send-membership-email', {
        body: {
          to: 'dekumsafamily@gmail.com',
          subject: `New Membership Application - ${formData.fullName}`,
          memberData: formData
        }
      });

      if (error) {
        console.error('Email sending error:', error);
      } else {
        console.log('Email notification sent successfully');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return { submitMembership };
};

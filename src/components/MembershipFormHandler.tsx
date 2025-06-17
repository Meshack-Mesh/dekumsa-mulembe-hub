
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
      // Store in Supabase
      const { error } = await supabase
        .from('dekumsa_members')
        .insert([{
          full_name: formData.fullName,
          registration_number: formData.registrationNumber,
          course: formData.course,
          year: formData.year,
          phone: formData.phone,
          email: formData.email,
          reason: formData.reason
        }]);

      if (error) throw error;

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
      // Create email content
      const emailContent = `
        New DeKUMSA Membership Application

        Name: ${formData.fullName}
        Registration Number: ${formData.registrationNumber}
        Course: ${formData.course}
        Year: ${formData.year}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Reason for joining: ${formData.reason}

        Submitted on: ${new Date().toLocaleString()}
      `;

      // Send via edge function
      const { error } = await supabase.functions.invoke('send-membership-email', {
        body: {
          to: 'dekumsafamily@gmail.com',
          subject: `New Membership Application - ${formData.fullName}`,
          text: emailContent,
          memberData: formData
        }
      });

      if (error) {
        console.error('Email sending error:', error);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return { submitMembership };
};


import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface MembershipFormData {
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

  const submitMembership = async (formData: MembershipFormData): Promise<boolean> => {
    try {
      console.log('Submitting membership data:', formData);

      // Insert into dekumsa_members table
      const { data, error } = await supabase
        .from('dekumsa_members')
        .insert([
          {
            full_name: formData.fullName,
            registration_number: formData.registrationNumber,
            course: formData.course,
            year: formData.year,
            phone: formData.phone,
            email: formData.email,
            reason: formData.reason || ''
          }
        ])
        .select();

      if (error) {
        console.error('Error inserting member data:', error);
        toast({
          title: 'Submission Error',
          description: 'Failed to submit membership application. Please try again.',
          variant: 'destructive',
        });
        return false;
      }

      console.log('Member data inserted successfully:', data);

      // Send notification email via edge function
      try {
        const emailResponse = await fetch('/api/send-membership-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!emailResponse.ok) {
          console.error('Failed to send notification email');
        }
      } catch (emailError) {
        console.error('Email notification error:', emailError);
        // Don't fail the whole process if email fails
      }

      toast({
        title: 'Application Submitted!',
        description: 'Your membership application has been submitted successfully. You will be contacted soon.',
      });

      return true;
    } catch (error) {
      console.error('Unexpected error during membership submission:', error);
      toast({
        title: 'Submission Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      return false;
    }
  };

  return { submitMembership };
};

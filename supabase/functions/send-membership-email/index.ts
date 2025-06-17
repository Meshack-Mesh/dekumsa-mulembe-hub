
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { to, subject, text, memberData } = await req.json()

    console.log('Sending membership notification email to:', to)
    console.log('Member data:', memberData)

    // Create detailed email content
    const emailBody = `
New DeKUMSA Membership Application Received

Applicant Details:
- Full Name: ${memberData.fullName}
- Registration Number: ${memberData.registrationNumber}
- Course/Program: ${memberData.course}
- Year of Study: ${memberData.year}
- Phone Number: ${memberData.phone}
- Email Address: ${memberData.email}
- Reason for Joining: ${memberData.reason}

Application submitted on: ${new Date().toLocaleString('en-US', {
  timeZone: 'Africa/Nairobi',
  dateStyle: 'full',
  timeStyle: 'short'
})}

Please review and process this application.

Best regards,
DeKUMSA Registration System
    `.trim()

    // Check if Resend API key is available
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (RESEND_API_KEY) {
      console.log('Sending email via Resend...')
      
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'DeKUMSA Registration <noreply@dekumsa.org>',
          to: [to],
          subject: subject,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #dc2626;">New DeKUMSA Membership Application</h2>
              
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Applicant Details:</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Full Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${memberData.fullName}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Registration Number:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${memberData.registrationNumber}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Course/Program:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${memberData.course}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Year of Study:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${memberData.year}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone Number:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${memberData.phone}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email Address:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${memberData.email}</td></tr>
                  <tr><td style="padding: 8px 0;"><strong>Reason for Joining:</strong></td><td style="padding: 8px 0;">${memberData.reason}</td></tr>
                </table>
              </div>
              
              <p style="color: #6b7280; font-size: 14px;">
                Application submitted on: ${new Date().toLocaleString('en-US', {
                  timeZone: 'Africa/Nairobi',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}
              </p>
              
              <p style="color: #374151;">Please review and process this application.</p>
              
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px;">
                Best regards,<br>
                DeKUMSA Registration System
              </p>
            </div>
          `
        }),
      })

      const responseData = await res.json()
      
      if (res.ok) {
        console.log('Email sent successfully:', responseData)
        return new Response(JSON.stringify({
          success: true,
          message: 'Email sent successfully',
          data: responseData
        }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      } else {
        console.error('Resend API error:', responseData)
        throw new Error(`Resend API error: ${responseData.message || 'Unknown error'}`)
      }
    } else {
      console.log('No Resend API key configured, logging email content instead')
      console.log('Email would be sent to:', to)
      console.log('Subject:', subject)
      console.log('Content:', emailBody)
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Email logged (no Resend API key configured)',
          recipient: to,
          subject: subject
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }
  } catch (error) {
    console.error('Error in send-membership-email function:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message,
        details: 'Check function logs for more information'
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})

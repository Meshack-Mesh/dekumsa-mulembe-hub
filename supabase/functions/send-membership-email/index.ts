
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

    // Here you would integrate with your email service (Resend, SendGrid, etc.)
    // For now, we'll just log the email content
    console.log('Sending membership notification email:', {
      to,
      subject,
      memberData
    })

    // Example with Resend (if you have the API key configured)
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'DeKUMSA <noreply@dekumsa.org>',
          to: [to],
          subject: subject,
          text: text,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        return new Response(JSON.stringify(data), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      } else {
        throw new Error('Failed to send email')
      }
    }

    return new Response(
      JSON.stringify({ message: 'Email logged (no service configured)' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})

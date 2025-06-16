
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "dekumsafamily@gmail.com",
      link: "mailto:dekumsafamily@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+254 741 224 547",
      link: "https://wa.me/254741224547",
      description: "Chat with us on WhatsApp"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Dedan Kimathi University of Technology",
      link: "#",
      description: "Nyeri, Kenya"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday",
      link: "#",
      description: "9:00 AM - 5:00 PM"
    }
  ];

  const socialLinks = [
    {
      name: "WhatsApp Group",
      url: "https://wa.me/254741224547",
      description: "Join our community chat"
    },
           {
      name: "YouTube",
      url: "https://youtube.com/@DeKUMSA",
      description: "DeKUMSA Channel"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Mail className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90">
              We're Here to Help and Listten
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <MessageCircle className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <MessageCircle className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-l-4 border-red-500">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-red-600 mx-auto mb-2" />
                    <CardTitle className="text-red-700">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-800 mb-2">{info.content}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                    {info.link !== "#" && (
                      <Button asChild variant="outline" size="sm" className="mt-3">
                        <a href={info.link}>Contact</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact & Social Links */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Quick Contact</CardTitle>
                  <CardDescription>
                    Need immediate assistance? Reach out to us directly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/254741224547">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp: +254 741 224 547
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:dekumsafamily@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      dekumsafamily@gmail.com
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-yellow-600">Follow Us</CardTitle>
                  <CardDescription>
                    Stay connected with DeKUMSA on social media.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-800">{social.name}</p>
                        <p className="text-sm text-gray-600">{social.description}</p>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          Visit
                        </a>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">How can I join DeKUMSA?</h3>
                <p className="text-gray-600 text-sm">
                  Visit our Membership page, fill out the registration form, and pay the KES 100 registration fee.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">When are the weekly meetings?</h3>
                <p className="text-gray-600 text-sm">
                  Every Friday at 5:00 PM in Room 14 SOB at DeKUT campus.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">How can I access welfare support?</h3>
                <p className="text-gray-600 text-sm">
                  Contact our welfare committee through the Vice Chairperson or visit our Welfare page for more information.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">How can I volunteer for events?</h3>
                <p className="text-gray-600 text-sm">
                  Join our WhatsApp group or contact our Organizing Secretary to get involved in upcoming events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Emergency Contact</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For urgent matters or emergencies, contact our executive team immediately.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="https://wa.me/254741224547">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Contact: +254 741 224 547
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;

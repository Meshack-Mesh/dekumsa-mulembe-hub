
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Mail className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Get in Touch with the DeKUMSA Community
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
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-red-500">
              <CardHeader>
                <Mail className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-red-700">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Send us an email for any inquiries</p>
                <a 
                  href="mailto:dekumsa@students.dkut.ac.ke" 
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  dekumsa@students.dkut.ac.ke
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-green-500">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-green-700">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Join our WhatsApp community</p>
                <a 
                  href="https://wa.me/254712345678" 
                  className="text-green-600 hover:text-green-800 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +254 712 345 678
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <CardHeader>
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-blue-700">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Find us on campus</p>
                <p className="text-blue-600 font-semibold">
                  Dedan Kimathi University<br />
                  Nyeri, Kenya
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">Send us a Message</CardTitle>
                <CardDescription className="text-center">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="welfare">Welfare Support</option>
                      <option value="events">Events & Activities</option>
                      <option value="academics">Academic Resources</option>
                      <option value="leadership">Leadership Contact</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Follow Us</h2>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="https://instagram.com/dekumsa_dkut" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors"
            >
              <Instagram className="w-12 h-12 text-pink-500 mb-2" />
              <span className="font-semibold text-pink-700">@dekumsa_dkut</span>
            </a>
            
            <a 
              href="https://facebook.com/dekumsa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
            >
              <Facebook className="w-12 h-12 text-blue-500 mb-2" />
              <span className="font-semibold text-blue-700">DeKUMSA Official</span>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For urgent welfare matters or emergencies, contact our leadership directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
              <a href="tel:+254712345678">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
                WhatsApp Leadership
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

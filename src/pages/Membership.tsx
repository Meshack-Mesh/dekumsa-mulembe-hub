
import React, { useState } from 'react';
import { Heart, Users, Star, CreditCard, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Membership = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    registrationNumber: '',
    course: '',
    year: '',
    phone: '',
    email: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for joining DeKUMSA. We'll be in touch soon.",
    });
    setFormData({
      fullName: '',
      registrationNumber: '',
      course: '',
      year: '',
      phone: '',
      email: '',
      reason: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    "Access to welfare support during emergencies",
    "Priority registration for all DeKUMSA events",
    "Networking opportunities with fellow Luhya students",
    "Academic support and study group access",
    "Cultural activities and heritage celebrations",
    "Leadership development opportunities",
    "Community outreach and volunteer programs",
    "Alumni network connections"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join DeKUMSA</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Become Part of Our Growing Family
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Star className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Star className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Membership Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Fees */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Membership Fees</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-red-500">
              <CardHeader className="text-center">
                <CardTitle className="text-red-700 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 mr-2" />
                  One-Time Registration
                </CardTitle>
                <CardDescription>Join DeKUMSA today</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-4">KES 100</div>
                <p className="text-gray-600 mb-6">One-time registration fee to become a member</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Lifetime membership</p>
                  <p>✓ Access to all member benefits</p>
                  <p>✓ Voting rights in elections</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardHeader className="text-center">
                <CardTitle className="text-green-700 flex items-center justify-center">
                  <Heart className="w-6 h-6 mr-2" />
                  Semester Contribution
                </CardTitle>
                <CardDescription>Support ongoing activities</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-4">KES 50</div>
                <p className="text-gray-600 mb-6">Per semester to support activities and welfare</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Event participation</p>
                  <p>✓ Welfare fund contribution</p>
                  <p>✓ Administrative costs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Membership Registration</h2>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-red-700">Join DeKUMSA Today</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below to become a member of our vibrant community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Student Registration Number *</Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="course">Course/Program *</Label>
                    <Input
                      id="course"
                      value={formData.course}
                      onChange={(e) => handleInputChange('course', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study *</Label>
                    <Select onValueChange={(value) => handleInputChange('year', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                        <SelectItem value="5">5th Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
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
                  <Label htmlFor="reason">Why do you want to join DeKUMSA? (Optional)</Label>
                  <Textarea
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => handleInputChange('reason', e.target.value)}
                    placeholder="Share your motivation for joining our community..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Complete Your Registration</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            After submitting your application, pay the registration fee to complete your membership.
          </p>
          <div className="bg-gray-800 p-6 rounded-xl max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Payment Details</h3>
            <div className="space-y-2 text-left">
              <p><strong>M-Pesa Number:</strong> 0746902609</p>
              <p><strong>Name:</strong> Faith Mukabane</p>
              <p><strong>Amount:</strong> KES 100 (Registration)</p>
              <p className="text-sm text-gray-400 mt-4">
                Send payment confirmation to our WhatsApp for verification.
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
            <a href="https://wa.me/254741224547">
              Confirm Payment via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Membership;

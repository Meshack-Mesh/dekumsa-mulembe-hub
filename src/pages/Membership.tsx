
import React, { useState } from 'react';
import { Users, CreditCard, CheckCircle, Upload, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const Membership = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    defaultValues: {
      fullName: '',
      studentId: '',
      course: '',
      year: '',
      phone: '',
      email: '',
      reason: ''
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Registration Submitted!",
      description: "Your membership application has been received. We'll contact you soon with payment details.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with fellow Luhya students and build lasting friendships"
    },
    {
      icon: Star,
      title: "Cultural Events",
      description: "Participate in cultural celebrations and heritage activities"
    },
    {
      icon: CheckCircle,
      title: "Academic Support",
      description: "Access to past papers, study groups, and peer tutoring"
    },
    {
      icon: CreditCard,
      title: "Welfare Support",
      description: "Emergency financial assistance and counseling services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join DeKUMSA</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-6">
              Become part of our vibrant community today
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Star className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Membership Requirements</h2>
              <p className="text-xl text-gray-600">Simple, affordable, and open to all Luhya students</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
                <CreditCard className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold text-red-700 mb-4">Membership Fee</h3>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>One-time Registration:</strong> KES 100</p>
                  <p className="text-gray-700"><strong>Semester Contribution:</strong> KES 50</p>
                  <p className="text-sm text-gray-600 mt-4">
                    This covers your membership card, orientation materials, and administrative costs.
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-green-700 mb-4">Eligibility</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Current DeKUT student</li>
                  <li>✓ Luhya community member</li>
                  <li>✓ Commitment to DeKUMSA values</li>
                  <li>✓ Good academic standing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Membership Benefits</h2>
            <p className="text-xl text-gray-600">What you gain by joining our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <Icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Registration Form</h2>
              <p className="text-gray-600">Fill out the form below to begin your membership journey</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="studentId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student ID *</FormLabel>
                          <FormControl>
                            <Input placeholder="DKU/XXX/XXXX" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course/Program *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Computer Science" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Study *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 2nd Year" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+254 7XX XXX XXX" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@student.dkut.ac.ke" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want to join DeKUMSA? (Optional)</FormLabel>
                        <FormControl>
                          <textarea 
                            className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Share your motivation for joining our community..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload Payment Receipt (Optional)</p>
                    <p className="text-sm text-gray-500">Upload M-Pesa receipt or other payment proof</p>
                    <Button type="button" variant="outline" className="mt-4">
                      Choose File
                    </Button>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Payment Information</h3>
            <p className="text-gray-700 mb-6">
              Once you submit your registration, our treasurer will contact you with payment details including M-Pesa paybill numbers and bank account information.
            </p>
            <div className="bg-white p-6 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Membership is confirmed only after payment verification. 
                You'll receive your membership card and welcome package within 7 days of payment confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;

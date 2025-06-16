
import React from 'react';
import { Heart, Users, Shield, DollarSign, FileText, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Welfare = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welfare Support</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Supporting Our Members in Times of Need
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <HandHeart className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <HandHeart className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Welfare Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Welfare Commitment</h2>
              <p className="text-xl text-gray-600">
                DeKUMSA is committed to supporting our members through financial assistance, 
                emotional support, and community care during challenging times.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <Shield className="w-6 h-6 mr-2" />
                    Eligibility Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Must attend at least 70% of DeKUMSA meetings</li>
                    <li>• Active participation in association activities</li>
                    <li>• Current member with up-to-date contributions</li>
                    <li>• Minimum welfare contribution: KES 100/semester</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Users className="w-6 h-6 mr-2" />
                    Welfare Committee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700">
                    <p className="font-semibold">Led by: Vice Chairperson Ivy Dina</p>
                    <p className="mt-2">Our dedicated welfare committee reviews cases with:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Complete confidentiality</li>
                      <li>• Fair assessment</li>
                      <li>• Timely response</li>
                      <li>• Transparent process</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How We Support Our Members</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-green-700">Financial Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Emergency financial support for tuition, medical bills, and essential needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-red-700">Emotional Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Counseling referrals, peer support groups, and mental health resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-yellow-700">Community Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Food donations, clothing drives, and essential supplies during emergencies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Support & Donations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Request Support */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700 text-2xl">Request Welfare Support</CardTitle>
                <CardDescription>
                  If you need assistance, our welfare committee is here to help. All requests are treated with complete confidentiality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Welfare Request
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Note: Welfare requests are reviewed by the committee and handled with strict confidentiality.
                </p>
              </CardContent>
            </Card>

            {/* Anonymous Donations */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 text-2xl">Make a Donation</CardTitle>
                <CardDescription>
                  Support your fellow DeKUMSA members by making an anonymous donation to our welfare fund.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Donate Funds (M-Pesa)
                  </Button>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    <HandHeart className="w-4 h-4 mr-2" />
                    Donate Goods/Supplies
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  All donations are anonymous and go directly to supporting members in need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Welfare Committee */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Our Welfare Committee</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For welfare-related inquiries, contact our Vice Chairperson Ivy Dina and the welfare committee.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
            <a href="mailto:welfare@dekumsa.ac.ke">
              Contact Welfare Committee
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Welfare;

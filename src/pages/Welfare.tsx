import React from 'react';
import { Heart, Users, Shield, DollarSign, FileText, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const reps = [
  { name: 'Agani Chelsea', county: 'Vihiga', phone: '0742298348' },
  { name: 'Luttah Bravin', county: 'Bungoma', phone: '0758373915' },
  { name: 'Faith Mukabane', county: 'Kakamega', phone: '0746902609' },
  { name: 'patricia Bella', county: 'Busia', phone: '0726890401' },
];

const Welfare = () => {
  const handleDonation = () => {
    window.location.href = 'sms:0746902609';
  };

  const handleGoodsDonation = () => {
    const selectedCounty = prompt('Enter your county: Bungoma, Busia, Kakamega, or Vihiga').toLowerCase();
    const contact = reps.find(r => r.county.toLowerCase() === selectedCounty);
    if (contact) {
      window.open(`https://wa.me/254${contact.phone.slice(1)}`, '_blank');
    } else {
      alert('County not recognized. Please enter a valid one.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welfare Support</h1>
          <p className="text-xl md:text-2xl opacity-90">Supporting Our Members in Times of Need</p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <HandHeart className="w-6 h-6 text-yellow-300" />
            <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
            <HandHeart className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Welfare Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
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
                <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => window.open('https://wa.me/254746902609', '_blank')}>
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Welfare Request
                </Button>
                <div className="mt-4 space-y-2 text-sm text-gray-800">
                  <p className="font-semibold">County Representatives:</p>
                  {reps.map((rep) => (
                    <p key={rep.phone} className="flex items-center space-x-2">
                      <span>{rep.name} - {rep.county}</span>
                      <a href={`https://wa.me/254${rep.phone.slice(1)}`} target="_blank" rel="noopener noreferrer" className="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.19 2 11.32c0 1.99.7 3.84 1.87 5.34L2 22l5.5-1.8a10.5 10.5 0 004.5 1.02c5.52 0 10-4.19 10-9.32S17.52 2 12 2z" />
                          <path d="M16.64 13.17c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13s-.69.85-.85 1.02c-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.3-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.17 1.83 2.8 4.44 3.92.62.27 1.1.43 1.47.55.62.2 1.19.17 1.64.1.5-.07 1.53-.62 1.74-1.23.21-.6.21-1.11.15-1.23-.06-.12-.24-.19-.5-.32z" />
                        </svg>
                      </a>
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Note: Welfare requests are reviewed by the committee and handled with strict confidentiality.
                </p>
              </CardContent>
            </Card>

            {/* Welfare Donations */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 text-2xl">Make a Welfare Donation</CardTitle>
                <CardDescription>
                  Support your fellow DeKUMSA members by making a donation to our welfare fund.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-800 mb-2">Welfare Treasurer: Faith Mukabane</h4>
                    <p className="text-gray-600 mb-2">Send M-Pesa donations to:</p>
                    <p className="text-xl font-bold text-green-600">0746902609</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleDonation}>
                    <DollarSign className="w-4 h-4 mr-2" />
                    Send M-Pesa Donation
                  </Button>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50" onClick={handleGoodsDonation}>
                    <HandHeart className="w-4 h-4 mr-2" />
                    Donate Goods/Supplies
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  All donations go directly to supporting members in need.
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
            For welfare-related inquiries, contact our Vice Chairperson Ivy Dina.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
            <a href="https://wa.me/254741224547">Contact Welfare Committee</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Welfare;

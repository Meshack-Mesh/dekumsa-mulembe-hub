import React, { useState } from 'react';
import { Heart, Users, Shield, DollarSign, FileText, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const reps = [
  { name: 'Agani Chelsea', county: 'Vihiga', phone: '0742298348' },
  { name: 'Luttah Bravin', county: 'Bungoma', phone: '0758373915' },
  { name: 'Faith Mukabane', county: 'Kakamega', phone: '0746902609' },
  { name: 'Debra Musimbi', county: 'Busia', phone: '0746260817' },
];

const Welfare = () => {
  const [selectedCounty, setSelectedCounty] = useState('');

  const handleGoodsDonation = () => {
    const rep = reps.find(r => r.county.toLowerCase() === selectedCounty.toLowerCase());
    if (rep) {
      window.open(`https://wa.me/254${rep.phone.slice(1)}`, '_blank');
    } else {
      alert('Please select a county first.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header and other sections remain unchanged */}
      {/* ... */}

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
                <Button
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => window.open('https://wa.me/254746902609', '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Welfare Request
                </Button>

                <div className="mt-4 space-y-2 text-sm text-gray-800">
                  <p className="font-semibold">County Representatives:</p>
                  {reps.map((rep) => (
                    <p key={rep.phone}>
                      {rep.name} - {rep.county} -{' '}
                      <a
                        href={`https://wa.me/254${rep.phone.slice(1)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {rep.phone}
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
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() =>
                      window.location.href = `tel:*234*1*1*0746902609#`
                    }
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Send M-Pesa Donation
                  </Button>

                  <div>
                    <select
                      value={selectedCounty}
                      onChange={(e) => setSelectedCounty(e.target.value)}
                      className="w-full p-2 border rounded-md mb-2"
                    >
                      <option value="">Select County Representative</option>
                      {reps.map((rep) => (
                        <option key={rep.phone} value={rep.county}>
                          {rep.county} - {rep.name}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      onClick={handleGoodsDonation}
                    >
                      <HandHeart className="w-4 h-4 mr-2" />
                      Donate Goods/Supplies
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  All donations go directly to supporting members in need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Welfare Committee section remains unchanged */}
    </div>
  );
};

export default Welfare;

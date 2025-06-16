
import React from 'react';
import { DollarSign, FileText, PieChart, Download, Eye, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Transparency = () => {
  const financialSummary = {
    totalRevenue: "KES 125,000",
    totalExpenses: "KES 98,500",
    currentBalance: "KES 26,500",
    membershipFees: "KES 85,000",
    welfareContributions: "KES 40,000"
  };

  const majorExpenses = [
    { category: "Events & Activities", amount: "KES 45,000", percentage: 46 },
    { category: "Welfare Support", amount: "KES 25,000", percentage: 25 },
    { category: "Administrative Costs", amount: "KES 15,000", percentage: 15 },
    { category: "Equipment & Supplies", amount: "KES 8,500", percentage: 9 },
    { category: "Communications", amount: "KES 5,000", percentage: 5 }
  ];

  const reports = [
    {
      title: "Annual Budget 2024",
      type: "Budget",
      date: "January 2024",
      size: "2.1 MB",
      description: "Comprehensive budget plan for 2024 activities"
    },
    {
      title: "Q3 Financial Report",
      type: "Report",
      date: "September 2024",
      size: "1.8 MB",
      description: "Third quarter financial performance and activities"
    },
    {
      title: "Welfare Fund Report",
      type: "Report",
      date: "November 2024",
      size: "1.2 MB",
      description: "Detailed report on welfare fund utilization"
    },
    {
      title: "Annual Activity Report",
      type: "Activity",
      date: "December 2024",
      size: "3.5 MB",
      description: "Comprehensive overview of 2024 activities and achievements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <PieChart className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparency & Finance</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Open, Accountable, and Transparent Financial Management
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Eye className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Eye className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">2024 Financial Overview</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <Card className="text-center border-t-4 border-green-500">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto" />
                <CardTitle className="text-green-700">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800">{financialSummary.totalRevenue}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-red-500">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-red-500 mx-auto" />
                <CardTitle className="text-red-700">Total Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800">{financialSummary.totalExpenses}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-blue-500">
              <CardHeader>
                <PieChart className="w-8 h-8 text-blue-500 mx-auto" />
                <CardTitle className="text-blue-700">Current Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800">{financialSummary.currentBalance}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-yellow-500">
              <CardHeader>
                <FileText className="w-8 h-8 text-yellow-500 mx-auto" />
                <CardTitle className="text-yellow-700">Membership Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800">{financialSummary.membershipFees}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-purple-500">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-purple-500 mx-auto" />
                <CardTitle className="text-purple-700">Welfare Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800">{financialSummary.welfareContributions}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expense Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Expense Breakdown</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">Major Expense Categories</CardTitle>
                <CardDescription>
                  How DeKUMSA funds are allocated across different activities and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {majorExpenses.map((expense, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-gray-800">{expense.category}</span>
                          <span className="text-gray-600">{expense.amount}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${expense.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="ml-4 text-sm text-gray-500 font-semibold">
                        {expense.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Financial Reports & Documents</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-gray-800">{report.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-4 mt-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                          {report.type}
                        </span>
                        <span>{report.date}</span>
                        <span>{report.size}</span>
                      </CardDescription>
                    </div>
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Support DeKUMSA</h2>
              <p className="text-xl text-gray-600">
                Alumni and sponsors can contribute to our mission of supporting Luhya students at DeKUT.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">Alumni Donations</CardTitle>
                  <CardDescription>
                    Former DeKUMSA members supporting current students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Donate as Alumni
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700">Corporate Sponsorship</CardTitle>
                  <CardDescription>
                    Partner with us to support student development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Sponsorship Packages
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Finance Committee */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Finances?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our treasurer and finance committee are available to answer any questions about our financial management.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
            <a href="/contact">
              Contact Finance Committee
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Transparency;

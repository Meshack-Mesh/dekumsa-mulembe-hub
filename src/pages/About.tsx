
import React from 'react';
import { Target, Shield, Heart, Users, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Users,
      title: "Social & Educational Support",
      description: "Provide comprehensive social and educational support to DeKUT students"
    },
    {
      icon: Heart,
      title: "Community Development",
      description: "Engage in community roles and development initiatives"
    },
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Undertake projects to improve members' academic and living standards"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Entrepreneurship",
      description: "Promote entrepreneurship, science fairs, and technology trends"
    },
    {
      icon: Shield,
      title: "Sustainable Growth",
      description: "Build sustainable internal funding through economic activities"
    },
    {
      icon: Users,
      title: "Membership Growth",
      description: "Encourage annual growth of membership base"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DeKUMSA</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Dedan Kimathi University Mulembe Students Association
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Heart className="w-6 h-6 text-yellow-300" />
              <p className="text-xl font-semibold text-yellow-300">Together We Can</p>
              <Heart className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-red-700">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To protect the DeKUMSA Members through professional policing and through leadership of community partnerships, while fostering the educational mission in the university.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <Shield className="w-10 h-10 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-green-700">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To support a climate of excellence, promote an organization that commands the respect of our peers and enrich the quality of life of our members in the university.
              </p>
            </div>
          </div>

          {/* Statement of Intent */}
          <div className="bg-yellow-50 p-8 rounded-xl border-l-4 border-yellow-500 mb-16">
            <h2 className="text-3xl font-bold text-yellow-700 mb-6">Statement of Intent</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              DeKUMSA operates under the guidance of the DeKUT Constitution and Student Union, committed to providing equal opportunities for all members while maintaining the highest standards of professional conduct. We believe in fostering an inclusive environment where every Luhya student can thrive academically, socially, and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Objectives</h2>
            <p className="text-xl text-gray-600">
              Six core objectives guide everything we do at DeKUMSA
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-500">
                  <Icon className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                Building bridges, creating opportunities, and fostering excellence
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Dedan Kimathi University Mulembe Students Association (DeKUMSA) was established to create a home away from home for Luhya students at Dedan Kimathi University of Technology. Our association serves as a beacon of unity, bringing together students from various Luhya communities under one umbrella.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Since our inception, we have been committed to preserving and promoting our rich cultural heritage while embracing modern educational values. We believe that by staying connected to our roots, we can better navigate the challenges of university life and emerge as well-rounded individuals ready to contribute to society.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, DeKUMSA stands as one of the most active and impactful student associations at DeKUT, with a growing membership base and an impressive track record of community service, academic support, and cultural preservation. Our motto, "Together We Can," reflects our unwavering belief in the power of unity and collective action.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Briefcase, Scale, Building2, ShoppingBag, Heart, Home, GraduationCap, Plane } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: "Consultants",
      icon: <Briefcase className="w-12 h-12" />,
      description: "Tailored strategies to build personal brands and attract clients.",
      features: [
        "Personal Brand Development",
        "Lead Generation Campaigns",
        "Professional Website Design",
        "Content Marketing Strategy"
      ]
    },
    {
      title: "Law Firms",
      icon: <Scale className="w-12 h-12" />,
      description: "Legal SEO, PPC campaigns, and content marketing to drive high-value leads.",
      features: [
        "Legal SEO Optimization",
        "Client Acquisition Campaigns",
        "Authority Content Creation",
        "Local SEO Strategies"
      ]
    },
    {
      title: "Corporate Businesses",
      icon: <Building2 className="w-12 h-12" />,
      description: "Comprehensive solutions for increased visibility and client acquisition.",
      features: [
        "Corporate Branding",
        "B2B Marketing Campaigns",
        "Lead Generation",
        "Marketing Automation"
      ]
    },
    {
      title: "E-commerce Stores",
      icon: <ShoppingBag className="w-12 h-12" />,
      description: "Strategies for driving traffic and increasing sales.",
      features: [
        "E-commerce SEO",
        "Product Marketing",
        "Shopping Campaigns",
        "Conversion Optimization"
      ]
    },
    {
      title: "Healthcare Providers",
      icon: <Heart className="w-12 h-12" />,
      description: "Local SEO, reputation management, and lead generation.",
      features: [
        "Healthcare Marketing",
        "Patient Acquisition",
        "HIPAA Compliant Campaigns",
        "Online Reputation Management"
      ]
    },
    {
      title: "Real Estate Agencies",
      icon: <Home className="w-12 h-12" />,
      description: "High-quality visuals and targeted campaigns to attract buyers and sellers.",
      features: [
        "Property Marketing",
        "Virtual Tours",
        "Lead Generation",
        "Local SEO"
      ]
    },
    {
      title: "Educational Institutions",
      icon: <GraduationCap className="w-12 h-12" />,
      description: "Branding, SEO, and PPC to boost enrollments.",
      features: [
        "Student Recruitment",
        "Educational Content",
        "Social Media Management",
        "Virtual Events"
      ]
    },
    {
      title: "Hospitality & Travel",
      icon: <Plane className="w-12 h-12" />,
      description: "Social media and content strategies to attract guests and travelers.",
      features: [
        "Travel Marketing",
        "Booking Optimization",
        "Experience Showcasing",
        "Guest Engagement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Specialized digital marketing solutions tailored to your industry's unique needs
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-blue-600">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {industry.description}
                  </p>
                  <div className="space-y-3">
                    {industry.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:px-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get a customized digital marketing strategy for your industry
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
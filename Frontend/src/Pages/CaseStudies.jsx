import React, { useState } from 'react';
import { TrendingUp, BarChart2, Users, Award, Search, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState('success-stories');

  const successStories = [
    {
      company: "TechCorp Solutions",
      industry: "Technology",
      challenge: "Needed to increase online visibility and generate more B2B leads",
      solution: "Implemented comprehensive SEO and LinkedIn marketing strategy",
      results: [
        "250% increase in organic traffic",
        "185% increase in qualified leads",
        "45% reduction in cost per acquisition"
      ],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      company: "HealthPlus Medical",
      industry: "Healthcare",
      challenge: "Wanted to establish local presence and attract more patients",
      solution: "Local SEO optimization and targeted social media campaigns",
      results: [
        "300% increase in local search visibility",
        "200% increase in appointment bookings",
        "4.9/5 average patient rating"
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      company: "Global E-commerce",
      industry: "Retail",
      challenge: "Needed to boost online sales and reduce cart abandonment",
      solution: "E-commerce optimization and retargeting campaigns",
      results: [
        "175% increase in online sales",
        "45% reduction in cart abandonment",
        "3x return on ad spend"
      ],
      icon: <BarChart2 className="w-6 h-6" />
    }
  ];

  const beforeAfterCases = [
    {
      company: "Fashion Retailer",
      category: "Social Media Marketing",
      before: {
        metrics: [
          "5,000 followers",
          "2% engagement rate",
          "100 monthly website visits"
        ]
      },
      after: {
        metrics: [
          "50,000+ followers",
          "8% engagement rate",
          "2,000+ monthly website visits"
        ]
      },
      timeframe: "6 months"
    },
    {
      company: "Law Firm",
      category: "SEO & Content Marketing",
      before: {
        metrics: [
          "Page 3 rankings",
          "500 monthly organic visits",
          "5 leads per month"
        ]
      },
      after: {
        metrics: [
          "Top 3 rankings for key terms",
          "5,000+ monthly organic visits",
          "50+ leads per month"
        ]
      },
      timeframe: "8 months"
    },
    {
      company: "SaaS Startup",
      category: "PPC & Lead Generation",
      before: {
        metrics: [
          "$200 cost per lead",
          "10% conversion rate",
          "20 trials per month"
        ]
      },
      after: {
        metrics: [
          "$50 cost per lead",
          "25% conversion rate",
          "200+ trials per month"
        ]
      },
      timeframe: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Case Studies</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how we've helped businesses achieve extraordinary growth through digital marketing
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('success-stories')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'success-stories'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Success Stories
            </button>
            <button
              onClick={() => setActiveTab('before-after')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'before-after'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Before & After
            </button>
          </nav>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className={`py-16 ${activeTab === 'success-stories' ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                      {story.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{story.company}</h3>
                      <p className="text-sm text-gray-500">{story.industry}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Challenge</h4>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Solution</h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Results</h4>
                      <ul className="mt-2 space-y-2">
                        {story.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Before & After Section */}
      <div className={`py-16 ${activeTab === 'before-after' ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {beforeAfterCases.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-sm text-blue-600">{study.category}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Before</h4>
                      <ul className="space-y-2">
                        {study.before.metrics.map((metric, idx) => (
                          <li key={idx} className="text-sm text-gray-600">{metric}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">After</h4>
                      <ul className="space-y-2">
                        {study.after.metrics.map((metric, idx) => (
                          <li key={idx} className="text-sm text-blue-600">{metric}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    Timeframe: {study.timeframe}
                  </p>
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
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help grow your business
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
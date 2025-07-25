import React, { useState } from 'react';
import { Book, FileText, HelpCircle, ArrowRight, Download } from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('blog');

  const blogPosts = [
    {
      title: "10 SEO Strategies That Actually Work in 2025",
      category: "SEO",
      date: "January 2, 2025",
      excerpt: "Learn about the latest SEO techniques that are driving results in the current digital landscape.",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "The Complete Guide to Social Media Marketing",
      category: "Social Media",
      date: "January 4, 2025",
      excerpt: "Master the art of social media marketing with our comprehensive guide for businesses.",
      readTime: "12 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Understanding PPC Advertising in 2025",
      category: "PPC",
      date: "January 5, 2025",
      excerpt: "Discover the latest trends and best practices in pay-per-click advertising.",
      readTime: "10 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const guides = [
    {
      title: "The Ultimate SEO Checklist",
      description: "A comprehensive checklist to optimize your website for search engines",
      format: "PDF",
      size: "2.5 MB",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Social Media Content Calendar Template",
      description: "Plan and organize your social media content effectively",
      format: "Excel",
      size: "1.8 MB",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Email Marketing Best Practices",
      description: "Learn how to create engaging email campaigns that convert",
      format: "PDF",
      size: "3.2 MB",
      image: "/api/placeholder/400/250"
    }
  ];

  const faqs = [
    {
      question: "What services does Pangea360 offer?",
      answer: "We offer a comprehensive range of digital marketing services including SEO, Social Media Marketing, PPC Advertising, Content Marketing, Branding & Design, and E-commerce Solutions."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy, typically taking 3-6 months to see significant results. However, this can vary based on factors like competition, current website status, and target keywords."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with a wide range of industries including consultants, law firms, healthcare providers, real estate agencies, educational institutions, and more. Each solution is tailored to the specific industry needs."
    },
    {
      question: "How do you measure success?",
      answer: "We track various KPIs based on your goals, including website traffic, conversion rates, lead generation, social media engagement, and ROI. Regular reports keep you informed of progress."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Resources</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our library of resources to help you master digital marketing
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('blog')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'blog'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setActiveTab('guides')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'guides'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Free Guides
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'faqs'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              FAQs
            </button>
          </nav>
        </div>
      </div>

      {/* Blog Section */}
      <div className={`py-16 ${activeTab === 'blog' ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <div className={`py-16 ${activeTab === 'guides' ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.format} • {guide.size}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className={`py-16 ${activeTab === 'faqs' ? 'block' : 'hidden'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
import React, { useState } from 'react';
import { Search, Users, Target, Award, FileText, Palette, TrendingUp, Box, 
         Monitor, PenTool, Video, ShoppingCart, ChevronDown } from 'lucide-react';

const Service = () => {
  // State for service category expansion
  const [expandedCategory, setExpandedCategory] = useState('digital-marketing');

  const serviceCategories = {
    'digital-marketing': {
      title: "Digital Marketing",
      services: [
        {
          title: "SEO",
          icon: <Search className="w-8 h-8" />,
          tagline: "Rank higher, grow faster.",
          description: "We optimize your website to increase visibility and drive organic traffic through on-page, off-page, and technical SEO.",
          features: [
            "Local SEO",
            "Keyword Research",
            "Backlinking",
            "Content Optimization",
            "Technical SEO Audit",
            "Competitor Analysis"
          ]
        },
        {
          title: "Social Media Marketing",
          icon: <Users className="w-8 h-8" />,
          tagline: "Turn followers into customers.",
          description: "We manage your social media platforms, create engaging content, and run targeted ad campaigns to boost brand awareness and engagement.",
          platforms: [
            "Facebook Marketing",
            "Instagram Growth",
            "LinkedIn B2B",
            "Twitter Engagement",
            "Platform Management",
            "Community Building"
          ]
        },
        {
          title: "PPC Ads",
          icon: <Target className="w-8 h-8" />,
          tagline: "Get instant leads.",
          description: "We design and manage high-performance ad campaigns on Google Ads, YouTube, Facebook, Instagram, and more.",
          specialties: [
            "Search Ads",
            "Display Ads",
            "Remarketing",
            "E-commerce PPC",
            "Video Advertising",
            "Performance Tracking"
          ]
        },
        {
          title: "Lead Generation",
          icon: <TrendingUp className="w-8 h-8" />,
          tagline: "Fill your sales pipeline.",
          description: "We implement data-driven strategies to attract, nurture, and convert leads.",
          features: [
            "Lead Magnets",
            "Email Marketing",
            "Landing Pages",
            "Marketing Automation",
            "CRM Integration",
            "Lead Scoring"
          ]
        }
      ]
    },
    'branding-design': {
      title: "Branding & Design",
      services: [
        {
          title: "Graphics Design",
          icon: <Palette className="w-8 h-8" />,
          tagline: "Stand out with stunning visuals.",
          description: "From logos to social media posts, we deliver high-quality designs tailored to your brand identity.",
          features: [
            "Logo Design",
            "Social Media Graphics",
            "Marketing Materials",
            "Infographics",
            "Print Design",
            "Digital Assets"
          ]
        },
        {
          title: "Branding Solutions",
          icon: <Award className="w-8 h-8" />,
          tagline: "Build a lasting impression.",
          description: "We craft branding strategies, including logo design, tone of voice, and brand positioning.",
          features: [
            "Brand Strategy",
            "Visual Identity",
            "Brand Guidelines",
            "Brand Messaging",
            "Brand Voice",
            "Market Positioning"
          ]
        },
        {
          title: "VFX & 3D Animation",
          icon: <Box className="w-8 h-8" />,
          tagline: "Bring your vision to life.",
          description: "Our team creates engaging 3D animations and stunning VFX for ads, corporate presentations, and more.",
          features: [
            "3D Modeling",
            "Character Animation",
            "Motion Graphics",
            "Visual Effects",
            "Product Visualization",
            "Architectural Visualization"
          ]
        }
      ]
    },
    'content-marketing': {
      title: "Content Marketing",
      services: [
        {
          title: "Content Strategy",
          icon: <FileText className="w-8 h-8" />,
          tagline: "Content that converts.",
          description: "We plan, create, and distribute content to enhance your online presence and drive results.",
          features: [
            "Content Planning",
            "Content Calendar",
            "Content Audit",
            "Distribution Strategy",
            "Performance Analysis",
            "Content Optimization"
          ]
        },
        {
          title: "Blog Writing",
          icon: <PenTool className="w-8 h-8" />,
          tagline: "Tell your story.",
          description: "High-quality blogs optimized for SEO to establish authority and connect with your audience.",
          features: [
            "SEO Articles",
            "Industry News",
            "How-to Guides",
            "Case Studies",
            "Thought Leadership",
            "Guest Posting"
          ]
        },
        {
          title: "Video Marketing",
          icon: <Video className="w-8 h-8" />,
          tagline: "Engage like never before.",
          description: "We create compelling videos that capture attention and drive engagement.",
          features: [
            "Promotional Videos",
            "Product Demos",
            "Corporate Videos",
            "Social Media Videos",
            "Video Ads",
            "Animation"
          ]
        }
      ]
    },
    'ecommerce': {
      title: "E-commerce Solutions",
      services: [
        {
          title: "Website Development",
          icon: <ShoppingCart className="w-8 h-8" />,
          tagline: "Sell more online.",
          description: "We create custom e-commerce solutions that drive sales and improve customer experience.",
          features: [
            "Custom E-commerce Development",
            "Shopping Cart Integration",
            "Payment Gateway Setup",
            "Mobile Commerce",
            "Inventory Management",
            "Order Processing"
          ]
        }
      ]
    }
  };

  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="text-blue-600 mr-3">
          {service.icon}
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
      </div>
      <p className="text-blue-600 font-medium mb-2">{service.tagline}</p>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="mt-4">
        <p className="font-medium text-gray-900 mb-2">Key Features:</p>
        <div className="grid grid-cols-2 gap-2">
          {service.features && service.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the digital age
            </p>
          </div>
        </div>
      </div>

      {/* Services Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(serviceCategories).map((category) => (
              <button
                key={category}
                onClick={() => setExpandedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  expandedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {serviceCategories[category].title}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          {Object.keys(serviceCategories).map((category) => (
            <div
              key={category}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                expandedCategory === category ? 'block' : 'hidden'
              }`}
            >
              {serviceCategories[category].services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:px-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our services can help achieve your business goals
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Get a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
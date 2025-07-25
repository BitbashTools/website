import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const WhyChooseSection = () => {
  const [expandedItem, setExpandedItem] = useState('AI-Native Approach');

  const faqItems = [
    {
      id: 'AI-Native Approach',
      title: 'AI-Native Approach',
      description: 'We integrate AI at the core of every project with transparent roadmaps and measurable results. This ensures your solutions deliver real, scalable business impact.',
      initial: 'AI'
    },
    {
      id: 'Full-Stack Expertise',
      title: 'Full-Stack Expertise', 
      description: 'Our team masters every layer of technology, from frontend interfaces to backend systems and cloud infrastructure. This allows us to build robust, seamless, and secure end-to-end solutions.',
      initial: 'FS'
    },
    {
      id: 'Applied Machine Learning',
      title: 'Applied Machine Learning',
      description: 'We develop practical ML models tailored to solve your unique challenges, turning data into actionable insights. Our focus is on real-world applications that drive measurable business outcomes.',
      initial: 'ML'
    },
    {
      id: 'Cloud-Ready & Scalable',
      title: 'Cloud-Ready & Scalable',
      description: 'Our cloud-native designs enable your systems to scale effortlessly on platforms like AWS, Azure, and GCP. This ensures performance, security, and cost-efficiency as you grow.',
      initial: 'CS'
    },
    {
      id: 'Transparent & Strategic',
      title: 'Transparent & Strategic',
      description: 'We foster trust through open communication and regular updates, aligning our work closely with your goals. Our strategic approach keeps your projects on track and maximizes value.',
      initial: 'TS'
    }
  ];

  const toggleItem = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section className="py-20 relative" style={{backgroundColor: '#0d0d0d'}}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-6 relative group"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              lineHeight: '1.1'
            }}
          >
            {/* Metallic shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
            
            <span 
              className="relative z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}
            >
              Why Choose{' '}
            </span>
            <span 
              className="relative z-10"
              style={{
                background: 'linear-gradient(135deg, #ff7a47, #ff6b35, #e55a2b, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 10px rgba(255, 107, 53, 0.4)'
              }}
            >
              Folium AI
            </span>
            <span 
              className="relative z-10"
              style={{
                background: 'linear-gradient(135deg, #e5e5e5, #ffffff, #cccccc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}
            >
              ?
            </span>
          </h2>
          <p 
            className="text-lg text-gray-300"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              lineHeight: '1.4'
            }}
          >
            We move at startup speed—with enterprise discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Brain Illustration */}
          <div className="flex justify-center">
            <div 
              className="w-96 h-96 rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundColor: '#1a1a1a',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-20 rounded-3xl"></div>
              
              <div className="text-center relative z-10">
                <div 
                  className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl font-bold"
                  style={{
                    background: 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)',
                    color: 'white',
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                    boxShadow: `
                      inset 0 1px 0 rgba(255, 255, 255, 0.15),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                      0 4px 8px rgba(0, 0, 0, 0.3),
                      0 2px 4px rgba(220, 38, 38, 0.15)
                    `,
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                  }}
                >
                  AI
                </div>
                <p 
                  className="text-gray-400 text-lg"
                  style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                >
                  AI Brain Network
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
           <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <div
                  className="rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: '#1a1a1a',
                    background: expandedItem === item.id 
                      ? 'linear-gradient(135deg, #2d1a14 0%, #3d2418 100%)' 
                      : 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                    boxShadow: expandedItem === item.id 
                      ? 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 6px 16px rgba(255, 107, 53, 0.1)' 
                      : 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    if (expandedItem !== item.id) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 122, 71, 0.08) 0%, rgba(220, 38, 38, 0.08) 100%)';
                      e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 20px rgba(255, 107, 53, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (expandedItem !== item.id) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)';
                      e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                
                >
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-2xl"></div>
                  
                  {/* FAQ Header */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left relative z-10"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Icon Badge */}
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300"
                        style={{
                          background: 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)',
                          color: 'white',
                          border: '1px solid rgba(255, 107, 53, 0.3)',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 4px 8px rgba(0, 0, 0, 0.3)',
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                        }}
                      >
                        {item.initial}
                      </div>
                      
                      <h3 
                        className="text-lg font-semibold transition-colors duration-300"
                        style={{
                          color: '#cccccc',
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          lineHeight: '1.2'
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Plus/Minus Button */}
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)',
                        color: '#cccccc',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 2px 4px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {expandedItem === item.id ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>
                  </button>

                  {/* FAQ Content */}
                  <div 
                    className="transition-all duration-300 overflow-hidden"
                    style={{
                      maxHeight: expandedItem === item.id ? '200px' : '0',
                      opacity: expandedItem === item.id ? 1 : 0
                    }}
                  >
                    <div className="px-6 pb-6 relative z-10">
                      <div className="pl-14">
                        <p 
                          className="text-gray-300 transition-colors duration-300"
                          style={{
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                            lineHeight: '1.4'
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
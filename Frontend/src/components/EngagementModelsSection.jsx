import React from 'react';

const EngagementModelsSection = () => {
  const engagementModels = [
    {
      id: 1,
      title: "Fixed Cost",
      description: "Ideal for clearly defined projects with established requirements and timelines, our fixed-cost model ensures predictable budgeting and transparent delivery."
    },
    {
      id: 2,
      title: "Staff/ Resource Augmentation", 
      description: "Quickly scale your internal teams by integrating our experienced professionals into your existing workflow. This model allows for agile expansion without the long-term commitment of hiring."
    },
    {
      id: 3,
      title: "Startup",
      description: "We understand the fast-paced and resource-conscious nature of startups. This engagement offers flexible, scalable solutions tailored to early-stage companies, enabling rapid development and market entry."
    },
    {
      id: 4,
      title: "Dedicated Development Team",
      description: "Establish a long-term strategic partnership with a dedicated team that works exclusively on your projects. This model fosters deep domain understanding, continuous collaboration, and sustained innovation."
    }
  ];

  return (
    <section className="py-20 relative" style={{backgroundColor: '#0d0d0d'}}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-2xl">
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
                Engagement
              </span>
              <br />
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
                Models
              </span>
            </h2>

            <p 
              className="text-lg text-gray-300"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.4'
              }}
            >
              At Folium AI, we offer versatile engagement models designed to align with your specific business needs, technical requirements, and budget considerations. Whether you're launching a new product, scaling operations, or seeking long-term development support, our models provide the flexibility and expertise you need to succeed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side - Engagement Models */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {engagementModels.map((model, index) => (
              <div key={model.id} className="group">
                <div 
                  className="p-8 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden h-full"
                  style={{
                    backgroundColor: '#1a1a1a',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 20px rgba(0, 0, 0, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <h3 
                      className="text-xl font-semibold mb-3 group-hover:text-white transition-all duration-300"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        lineHeight: '1.2',
                        background: 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 0 10px rgba(255, 107, 53, 0.2)'
                      }}
                    >
                      {model.title}
                    </h3>
                    <p 
                      className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      {model.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="lg:col-span-4">
            <div 
              className="w-full aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden sticky lg:top-8 lg:ml-auto lg:max-w-[320px]"
              style={{
                backgroundColor: '#1a1a1a',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="text-center">
                <div 
                  className="w-28 h-28 mx-auto mb-5 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)',
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                    boxShadow: `
                      inset 0 1px 0 rgba(255, 255, 255, 0.15),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                      0 4px 8px rgba(0, 0, 0, 0.3),
                      0 2px 4px rgba(220, 38, 38, 0.15)
                    `
                  }}
                >
                  <span 
                    className="text-white text-2xl font-bold"
                    style={{
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    EM
                  </span>
                </div>
                <p 
                  className="text-gray-400 text-lg"
                  style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                >
                  Engagement Models
                </p>
              </div>
            </div>
            

          </div>
        </div>

        {/* Explore Price Button - Centered */}
        <div className="mt-16 flex justify-center">
          <button 
            className="text-white font-semibold px-12 py-2 rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              background: 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)',
              border: '1px solid rgba(255, 107, 53, 0.3)',
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                0 4px 8px rgba(0, 0, 0, 0.3),
                0 2px 4px rgba(220, 38, 38, 0.15)
              `,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span className="relative z-10">Explore Price</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
          </button>
        </div>

        {/* CTA Section */}
        <div 
          className="mt-20 rounded-3xl p-12 flex items-center relative overflow-hidden"
          style={{
            backgroundColor: '#1a1a1a',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-20 rounded-3xl"></div>
          
          {/* Left Side - AI Illustration (30%) */}
          <div className="w-[30%] flex justify-center relative z-10">
            <div 
              className="w-40 h-40 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: '#2a2a2a',
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 24px rgba(0, 0, 0, 0.4)'
              }}
            >
              <span 
                className="text-4xl font-bold"
                style={{
                  color: '#ff6b35',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                }}
              >
                AI
              </span>
            </div>
          </div>

          {/* Text and Button Container */}
          <div className="w-[70%] relative z-10">
            <div className="flex flex-col items-start">
              {/* CTA Text */}
              <h3 
                className="text-3xl lg:text-4xl font-bold text-white mb-8"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.1'
                }}
              >
                Let's transform your vision into functional software—faster, smarter, and with greater ease.
              </h3>

              {/* CTA Button */}
              <button 
                className="text-white font-semibold px-12 py-2 rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  background: 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.15),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                    0 4px 8px rgba(0, 0, 0, 0.3),
                    0 2px 4px rgba(220, 38, 38, 0.15)
                  `,
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                }}
              >
                <span className="relative z-10">Schedule Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;
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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 relative" style={{backgroundColor: '#0d0d0d'}}>
      <div className="relative z-10 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
          <div className="max-w-full md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 xl:mb-8 2xl:mb-10 relative group"
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
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.4'
              }}
            >
              At Folium AI, we offer versatile engagement models designed to align with your specific business needs, technical requirements, and budget considerations. Whether you're launching a new product, scaling operations, or seeking long-term development support, our models provide the flexibility and expertise you need to succeed.
            </p>
          </div>
        </div>

        {/* Mobile Layout (xs to sm) - Avatar First */}
        <div className="block md:hidden">
          {/* AI Avatar - Mobile Only */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div 
              className="w-24 sm:w-32 h-24 sm:h-32 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundColor: '#1a1a1a',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="text-center">
                <div 
                  className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-1 sm:mb-2 rounded-full flex items-center justify-center"
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
                    className="text-white text-sm sm:text-lg font-bold"
                    style={{
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    EM
                  </span>
                </div>
                <p 
                  className="text-gray-400 text-xs sm:text-sm"
                  style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                >
                  Models
                </p>
              </div>
            </div>
          </div>

          {/* Banner Description - Mobile */}
          <div className="text-center mb-6 sm:mb-8">
            <h3 
              className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.2'
              }}
            >
              Choose Your Perfect Engagement Model
            </h3>
            <p 
              className="text-xs sm:text-sm text-gray-300 px-2 sm:px-4"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.4'
              }}
            >
              Flexible solutions tailored to your business needs, budget, and timeline requirements.
            </p>
          </div>

          {/* Engagement Models Grid - Mobile */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {engagementModels.map((model, index) => (
              <div key={model.id} className="group">
                <div 
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden h-full"
                  style={{
                    backgroundColor: '#1a1a1a',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-lg sm:rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <h3 
                      className="text-sm sm:text-base font-semibold mb-2 group-hover:text-white transition-all duration-300"
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
                      className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
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

        {/* Tablet and Desktop Layout (md and up) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-start">
          {/* Left Side - Engagement Models */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
              {engagementModels.map((model, index) => (
              <div key={model.id} className="group">
                <div 
                  className="p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl transition-all duration-300 cursor-pointer relative overflow-hidden h-full"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <h3 
                      className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 group-hover:text-white transition-all duration-300"
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
                      className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
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

          {/* Right Side - Illustration - Tablet and Desktop */}
          <div className="lg:col-span-4">
            <div 
              className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto aspect-square rounded-2xl md:rounded-3xl lg:rounded-4xl flex items-center justify-center relative overflow-hidden lg:sticky lg:top-8 lg:ml-auto"
              style={{
                backgroundColor: '#1a1a1a',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="text-center">
                <div 
                  className="w-16 md:w-20 lg:w-28 xl:w-32 2xl:w-40 h-16 md:h-20 lg:h-28 xl:h-32 2xl:h-40 mx-auto mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 rounded-full flex items-center justify-center"
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
                    className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold"
                    style={{
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    EM
                  </span>
                </div>
                <p 
                  className="text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                  style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                >
                  Engagement Models
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Price Button - Centered */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex justify-center">
          <button 
            className="text-white font-semibold px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 2xl:py-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
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
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 flex flex-col md:flex-row items-center relative overflow-hidden"
          style={{
            backgroundColor: '#1a1a1a',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-20 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl"></div>
          
          {/* AI Illustration */}
          <div className="w-full md:w-[30%] flex justify-center relative z-10 mb-4 sm:mb-6 md:mb-0">
            <div 
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-40 2xl:w-48 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-40 2xl:h-48 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: '#2a2a2a',
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 24px rgba(0, 0, 0, 0.4)'
              }}
            >
              <span 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold"
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
          <div className="w-full md:w-[70%] relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* CTA Text */}
              <h3 
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 xl:mb-10 2xl:mb-12"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.1'
                }}
              >
                Let's transform your vision into functional software—faster, smarter, and with greater ease.
              </h3>

              {/* CTA Button */}
              <button 
                className="text-white font-semibold px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 2xl:py-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
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
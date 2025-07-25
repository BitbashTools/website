import React from 'react';

const HowWeWorkSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Ideate",
      description: "We start by understanding your business goals and exploring the best AI-driven ideas to solve your challenges."
    },
    {
      number: "02", 
      title: "Design",
      description: "We design user-friendly workflows and smart system architecture tailored to your needs."
    },
    {
      number: "03",
      title: "Develop",
      description: "Our team builds the solution using the right technologies, focusing on quality and speed."
    },
    {
      number: "04",
      title: "Test", 
      description: "We test everything thoroughly to ensure it works well, is secure, and performs reliably."
    },
    {
      number: "05",
      title: "Launch",
      description: "Once ready, we deploy the solution and make sure it integrates smoothly into your existing systems."
    },
    {
      number: "06",
      title: "Support",
      description: "After launch, we provide ongoing support, monitor performance, and improve the solution as your needs evolve."
    }
  ];

  return (
    <section className="min-h-screen flex items-center relative" style={{backgroundColor: '#0d0d0d'}}>
      <div className="relative z-10 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-[1440px] 2xl:max-w-8xl w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-8 md:py-12 lg:py-20 xl:py-24 2xl:py-28">
        <div className="flex flex-col lg:flex-row lg:items-start gap-2 sm:gap-4 md:gap-6 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Side - Header */}
          <div className="lg:w-1/3 mb-2 sm:mb-4 md:mb-6 lg:mb-0">
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-1.5 sm:mb-2 md:mb-3 xl:mb-4 2xl:mb-6"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.1'
              }}
            >
              <span 
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
              >
                How
              </span>
              <br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #ff7a47, #ff6b35, #e55a2b, #dc2626)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 10px rgba(255, 107, 53, 0.4)'
                }}
              >
                we work
              </span>
            </h2>
            <p 
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.4'
              }}
            >
              Take a moment to get familiar with our approach
            </p>
          </div>

          {/* Right Side - Process Steps */}
          <div className="lg:w-2/3 space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-2 xl:space-y-3 2xl:space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div 
                  className="p-2.5 sm:p-3 md:p-4 lg:p-4 xl:p-5 2xl:p-6 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundColor: '#1a1a1a',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1f1f1f 0%, #262626 100%)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 12px rgba(255, 107, 53, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-7 2xl:space-x-8 relative z-10">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold transition-all duration-300"
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          color: '#ff6b35',
                          textShadow: '0 0 8px rgba(255, 107, 53, 0.3)'
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="pt-0.5 sm:pt-1 md:pt-1.5 lg:pt-1 xl:pt-2 2xl:pt-3 flex-1">
                      <h3 
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-1 sm:mb-1.5 md:mb-2 xl:mb-3 2xl:mb-4 text-white group-hover:text-orange-300 transition-colors duration-300"
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          lineHeight: '1.2'
                        }}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          lineHeight: '1.4'
                        }}
                      >
                        {step.description}
                      </p>
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

export default HowWeWorkSection;
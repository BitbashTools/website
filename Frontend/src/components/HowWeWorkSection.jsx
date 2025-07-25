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
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Left Side - Header */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
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
              className="text-lg text-gray-300"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.4'
              }}
            >
              Take a moment to get familiar with our approach
            </p>
          </div>

          {/* Right Side - Process Steps */}
          <div className="lg:w-2/3 space-y-2">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div 
                  className="p-3 lg:p-4 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-2xl"></div>
                  
                  <div className="flex items-start space-x-6 relative z-10">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div 
                        className="text-4xl lg:text-5xl font-bold transition-all duration-300"
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
                    <div className="pt-1 flex-1">
                      <h3 
                        className="text-lg lg:text-xl font-bold mb-2 text-white group-hover:text-orange-300 transition-colors duration-300"
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          lineHeight: '1.2'
                        }}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
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
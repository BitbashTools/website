import React, { useState } from 'react';
import { Code, RefreshCw, Cloud, Zap, Database, Cog } from 'lucide-react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState('data-analytics');

  const services = [
    {
      id: 'custom-development',
      title: 'Custom Software Development',
      icon: <Code className="w-8 h-8" />,
      description: 'We build software solutions designed specifically to fit your unique business needs.',
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'],
      details: 'Our custom software development team creates tailored solutions that perfectly align with your business requirements and objectives.'
    },
    {
      id: 'app-modernization',
      title: 'App Modernization',
      icon: <RefreshCw className="w-8 h-8" />,
      description: 'We update and improve older applications to make them faster, safer, and compatible with today\'s technology.',
      technologies: ['Docker', 'Kubernetes', 'Microservices', 'Cloud Migration'],
      details: 'Transform your legacy applications into modern, scalable solutions that leverage the latest technologies and best practices.'
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: <Cloud className="w-8 h-8" />,
      description: 'We set up automated development and deployment pipelines to speed up your software delivery.',
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
      details: 'Streamline your development process with automated CI/CD pipelines and infrastructure as code.'
    },
    {
      id: 'mvp-development',
      title: 'MVP Development',
      icon: <Zap className="w-8 h-8" />,
      description: 'We help startups launch their first product quickly and effectively to test ideas in the market.',
      technologies: ['Rapid Prototyping', 'Agile', 'Market Validation'],
      details: 'Get to market faster with our MVP development approach that focuses on core features and user feedback.'
    },
    {
      id: 'data-analytics',
      title: 'Data & Advanced Analytics',
      icon: <Database className="w-8 h-8" />,
      description: 'We turn your data into valuable insights that support smart business decisions.',
      technologies: ['AIRFLOW', 'DATA BRICKS', 'POWER BI', 'DATA LAKE', 'DATA WAREHOUSE', 'AWS BEDROCK', 'LLMS', 'PYTORCH', 'SUPERSET'],
      details: 'We turn your data into valuable insights that support smart business decisions.',
      isSelected: true
    },
    {
      id: 'robotic-automation',
      title: 'Robotic Process Automation',
      icon: <Cog className="w-8 h-8" />,
      description: 'We automate routine tasks to save time and increase productivity.',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism'],
      details: 'Automate repetitive tasks and processes to increase efficiency and reduce human error.'
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <>
      <style jsx global>{`
        /* Service Cards Animation */
        @keyframes cardHover {
          0% { transform: translateY(0); }
          100% { transform: translateY(-4px); }
        }
        
        .service-card-hover:hover {
          animation: cardHover 0.3s ease forwards;
        }
      `}</style>
      
      <section className="relative min-h-screen overflow-hidden" style={{backgroundColor: '#0d0d0d'}}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        
        {/* Subtle shine effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-radial from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 gap-4 sm:gap-6">
            <div className="flex-1">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 xl:mb-8 2xl:mb-10"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.1',
                }}
              >
                <span 
                  style={{
                    background:  'linear-gradient(to right , rgba(240, 234, 234, 1), rgba(143, 138, 138, 1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Software Consulting &
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
                  Development Services
                </span>
              </h2>
              <p 
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.4',
                }}
              >
                Folium AI offers a range of expert services to help your business grow and stay ahead.
              </p>
            </div>
            
            {/* See All Services Button - Responsive */}
            <button 
              className="text-white font-semibold 
                         px-4 py-2 text-xs rounded-lg
                         xs:px-5 xs:py-2.5 xs:text-xs xs:rounded-xl
                         sm:px-6 sm:py-3 sm:text-sm sm:rounded-2xl
                         md:px-7 md:py-3 md:text-sm md:rounded-2xl
                         lg:px-8 lg:py-3.5 lg:text-base lg:rounded-3xl
                         xl:px-10 xl:py-4 xl:text-lg xl:rounded-3xl
                         2xl:px-12 2xl:py-4.5 2xl:text-xl 2xl:rounded-full
                         min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[180px] 2xl:min-w-[200px]
                         transition-all duration-300 transform 
                         hover:scale-105 hover:shadow-lg 
                         active:scale-95 active:shadow-md
                         focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-black
                         relative overflow-hidden group"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(145deg, #ff8a57, #ff7a47, #e55a2b)';
                e.currentTarget.style.boxShadow = `
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.3),
                  0 8px 16px rgba(0, 0, 0, 0.4),
                  0 4px 8px rgba(220, 38, 38, 0.2)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)';
                e.currentTarget.style.boxShadow = `
                  inset 0 1px 0 rgba(255, 255, 255, 0.15),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                  0 4px 8px rgba(0, 0, 0, 0.3),
                  0 2px 4px rgba(220, 38, 38, 0.15)
                `;
              }}
            >
              <span className="relative z-10 whitespace-nowrap">See All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
              
              {/* Loading animation effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent opacity-0 rounded-full transform translate-x-[-100%] group-active:opacity-100 group-active:translate-x-[100%] transition-all duration-300"></div>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
            {/* Left Side - Service Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 rounded-lg sm:rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 service-card-hover relative overflow-hidden group ${
                    selectedService === service.id ? 'selected-card' : ''
                  }`}
                  style={{
                    backgroundColor: selectedService === service.id ? '#1a1a1a' : '#151515',
                    border: selectedService === service.id ? '2px solid #ff6b35' : '2px solid #333333',
                    background: selectedService === service.id 
                      ? 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)' 
                      : 'linear-gradient(135deg, #151515 0%, #1f1f1f 100%)',
                    boxShadow: selectedService === service.id 
                      ? 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 24px rgba(255, 107, 53, 0.2)' 
                      : 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedService !== service.id) {
                      e.currentTarget.style.borderColor = '#ff6b35';
                      e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 6px 16px rgba(255, 107, 53, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedService !== service.id) {
                      e.currentTarget.style.borderColor = '#333333';
                      e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                >
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-3 sm:mb-4">
                      {React.cloneElement(service.icon, {
                        className: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12',
                        style: {
                          color: selectedService === service.id ? '#ff6b35' : '#888888'
                        }
                      })}
                    </div>
                    <h3 
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-2"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        color: selectedService === service.id ? '#ffffff' : '#cccccc',
                        lineHeight: '1.2'
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Service Details */}
            <div 
              className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 relative overflow-hidden"
              style={{
                backgroundColor: '#1a1a1a',
                border: '2px solid #333333',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              <h3 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 xl:mb-8 2xl:mb-10"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.1',
                  background: 'linear-gradient(to right, rgba(240, 234, 234, 1), rgba(143, 138, 138, 1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {selectedServiceData?.title}
              </h3>
              <p 
                className="mb-4 sm:mb-6 md:mb-8 xl:mb-10 2xl:mb-12 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.4',
                  background: 'linear-gradient(to right, rgba(240, 234, 234, 1), rgba(143, 138, 138, 1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {selectedServiceData?.details}
              </p>

              {/* Technology Points */}
              <div className="mb-6 sm:mb-8 md:mb-10 xl:mb-12 2xl:mb-16">
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  {selectedServiceData?.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-200"
                      style={{
                        backgroundColor: '#2a2a2a',
                        color: '#ffffff',
                        border: '1px solid #404040',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: window.innerWidth >= 768 ? '12px' : '10px',
                        fontWeight: '600'
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Button - Responsive */}
              <button 
                className="text-white font-semibold 
                           px-4 py-2 text-xs rounded-lg
                           xs:px-5 xs:py-2.5 xs:text-xs xs:rounded-xl
                           sm:px-6 sm:py-3 sm:text-sm sm:rounded-2xl
                           md:px-7 md:py-3 md:text-sm md:rounded-2xl
                           lg:px-8 lg:py-3.5 lg:text-base lg:rounded-3xl
                           xl:px-10 xl:py-4 xl:text-lg xl:rounded-3xl
                           2xl:px-12 2xl:py-4.5 2xl:text-xl 2xl:rounded-full
                           min-w-[100px] sm:min-w-[110px] md:min-w-[120px] lg:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[180px]
                           transition-all duration-300 transform 
                           hover:scale-105 hover:shadow-lg 
                           active:scale-95 active:shadow-md
                           focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-black
                           relative overflow-hidden group"
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(145deg, #ff8a57, #ff7a47, #e55a2b)';
                  e.currentTarget.style.boxShadow = `
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.3),
                    0 8px 16px rgba(0, 0, 0, 0.4),
                    0 4px 8px rgba(220, 38, 38, 0.2)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)';
                  e.currentTarget.style.boxShadow = `
                    inset 0 1px 0 rgba(255, 255, 255, 0.15),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                    0 4px 8px rgba(0, 0, 0, 0.3),
                    0 2px 4px rgba(220, 38, 38, 0.15)
                  `;
                }}
              >
                <span className="relative z-10 whitespace-nowrap">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                
                {/* Loading animation effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent opacity-0 rounded-full transform translate-x-[-100%] group-active:opacity-100 group-active:translate-x-[100%] transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
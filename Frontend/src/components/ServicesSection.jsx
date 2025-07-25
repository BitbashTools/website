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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6"
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
                className="text-lg text-gray-300"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.4',
                }}
              >
                Folium AI offers a range of expert services to help your business grow and stay ahead.
              </p>
            </div>
            <button 
              className="text-white font-semibold px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
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
                e.currentTarget.style.background = 'linear-gradient(145deg, #e55a2b, #dc2626, #b91c1c)';
              }}
            >
              <span className="relative z-10">See All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 service-card-hover relative overflow-hidden group ${
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      {React.cloneElement(service.icon, {
                        className: 'w-8 h-8',
                        style: {
                          color: selectedService === service.id ? '#ff6b35' : '#888888'
                        }
                      })}
                    </div>
                    <h3 
                      className="text-lg font-semibold mb-2"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        color: selectedService === service.id ? '#ffffff' : '#cccccc'
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
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                backgroundColor: '#1a1a1a',
                border: '2px solid #333333',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              <h3 
                className="text-3xl font-bold mb-4"
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
                className="mb-6"
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
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {selectedServiceData?.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                      style={{
                        backgroundColor: '#2a2a2a',
                        color: '#ffffff',
                        border: '1px solid #404040',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Button */}
              <button 
                className="text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
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
                  e.currentTarget.style.background = 'linear-gradient(145deg, #e55a2b, #dc2626, #b91c1c)';
                }}
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
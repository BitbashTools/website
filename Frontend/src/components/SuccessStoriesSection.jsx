import React from 'react';

const SuccessStoriesSection = () => {
  const projects = [
    {
      id: 1,
      company: "FOREX",
      category: "AI TRADING PLATFORM",
      title: "AI-driven trading decisions with gamified learning layers",
      devices: ["mobile", "desktop"],
      logoColor: "orange"
    },
    {
      id: 2,
      company: "CRYPTO",
      category: "CRYPTO DATA PLATFORM", 
      title: "Real-time crypto insights, personalized tracking & alerts",
      devices: ["tablet", "desktop"],
      logoColor: "purple"
    },
    {
      id: 3,
      company: "RioTinto",
      category: "ENTERPRISE DASHBOARD",
      title: "Unified trade and resource dashboard for global operations", 
      devices: ["laptop", "tablet"],
      logoColor: "red"
    },
    {
      id: 4,
      company: "GALAXY",
      category: "GAMING PLATFORM",
      title: "Gamified learning experience with interactive elements",
      devices: ["mobile", "tablet"],
      logoColor: "blue"
    },
    {
      id: 5,
      company: "STEMULI",
      category: "EDUCATION PLATFORM",
      title: "Interactive learning management system for students",
      devices: ["desktop", "mobile"],
      logoColor: "green"
    },
    {
      id: 6,
      company: "ANALYTICS",
      category: "DATA VISUALIZATION",
      title: "Advanced analytics dashboard with real-time insights",
      devices: ["desktop", "tablet"],
      logoColor: "indigo"
    }
  ];

  const getLogoColorStyle = (color) => {
    const colors = {
      orange: '#ff6b35',
      purple: '#8b5cf6',
      red: '#ef4444',
      blue: '#3b82f6',
      green: '#10b981',
      indigo: '#6366f1'
    };
    return { color: colors[color] };
  };

  const DeviceMockup = ({ devices }) => {
    return (
      <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-56 flex items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden" style={{
        backgroundColor: '#1a1a1a',
        border: '2px solid #333333',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 24px rgba(0, 0, 0, 0.4)'
      }}>
        
        {/* Dotted background pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.3
        }}></div>

        {/* Connection lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b35" />
                <stop offset="50%" stopColor="#ff8c69" />
                <stop offset="100%" stopColor="#ffa500" />
              </linearGradient>
            </defs>
            <path 
              d="M20,30 Q60,10 100,30 T180,50" 
              stroke="url(#connectionGrad)" 
              strokeWidth="2" 
              fill="none"
            />
            <circle cx="20" cy="30" r="3" fill="#ff6b35"/>
            <circle cx="100" cy="30" r="3" fill="#ff8c69"/>
            <circle cx="180" cy="50" r="3" fill="#ffa500"/>
          </svg>
        </div>

        {devices.includes("mobile") && (
          <div className="absolute left-2 sm:left-3 md:left-4 top-4 sm:top-6 md:top-8 w-10 sm:w-12 md:w-14 lg:w-16 xl:w-18 2xl:w-20 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 rounded-lg sm:rounded-xl shadow-2xl z-20" style={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #404040'
          }}>
            <div style={{
              backgroundColor: '#333',
              height: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px 6px 0 0'
            }}>
              <div style={{
                width: '16px',
                height: '2px',
                backgroundColor: '#555',
                borderRadius: '2px'
              }}></div>
            </div>
            <div className="p-1 sm:p-2 space-y-1 sm:space-y-2">
              <div style={{
                height: '4px',
                background: 'linear-gradient(135deg, #ff6b35, #dc2626)',
                borderRadius: '2px'
              }}></div>
              <div style={{
                height: '4px',
                background: 'linear-gradient(135deg, #ff8c69, #ffa500)',
                borderRadius: '2px'
              }}></div>
              <div style={{
                background: 'linear-gradient(135deg, #ff6b35, #ff8c69, #ffa500)',
                height: '20px',
                borderRadius: '4px',
                opacity: 0.8
              }}></div>
            </div>
          </div>
        )}
        
        {devices.includes("tablet") && (
          <div className="absolute left-4 sm:left-6 md:left-8 top-2 sm:top-3 md:top-4 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40 rounded-lg sm:rounded-xl shadow-2xl z-10" style={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #404040'
          }}>
            <div style={{
              backgroundColor: '#333',
              height: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px 6px 0 0'
            }}>
              <div style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#555',
                borderRadius: '2px'
              }}></div>
            </div>
            <div className="p-1 sm:p-2 space-y-1 sm:space-y-2">
              <div style={{
                height: '6px',
                background: 'linear-gradient(135deg, #666, #888)',
                borderRadius: '4px'
              }}></div>
              <div className="grid grid-cols-2 gap-1">
                <div style={{
                  height: '6px',
                  background: 'linear-gradient(135deg, #ff6b35, #dc2626)',
                  borderRadius: '2px'
                }}></div>
                <div style={{
                  height: '6px',
                  background: 'linear-gradient(135deg, #ff8c69, #ffa500)',
                  borderRadius: '2px'
                }}></div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #ff6b35, #ff8c69, #ffa500)',
                height: '100%',
                borderRadius: '4px',
                opacity: 0.8
              }}></div>
            </div>
          </div>
        )}

        {devices.includes("desktop") && (
          <div className="absolute right-2 sm:right-3 md:right-4 top-3 sm:top-4 md:top-6 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 rounded-md sm:rounded-lg shadow-2xl" style={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #404040'
          }}>
            <div style={{
              backgroundColor: '#333',
              height: '12px',
              borderRadius: '4px 4px 0 0'
            }}>
              <div className="flex items-center space-x-1 px-2 py-1">
                <div style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#FF5F57',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#FFBD2E',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#28CA42',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
            <div className="p-1 sm:p-2 space-y-1">
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 105, 0.1), rgba(255, 165, 0, 0.1))',
                height: '100%',
                borderRadius: '4px'
              }}></div>
            </div>
          </div>
        )}

        {devices.includes("laptop") && (
          <div className="absolute right-1 sm:right-2 top-4 sm:top-6 md:top-8 w-18 sm:w-22 md:w-26 lg:w-28 xl:w-32 2xl:w-36 h-12 sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 rounded-md sm:rounded-lg shadow-2xl">
            <div style={{
              backgroundColor: '#333',
              height: '48px',
              borderRadius: '4px 4px 0 0',
              padding: '6px'
            }}>
              <div style={{
                height: '6px',
                background: 'linear-gradient(135deg, #666, #888)',
                borderRadius: '2px',
                marginBottom: '3px'
              }}></div>
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 105, 0.1), rgba(255, 165, 0, 0.1))',
                height: '100%',
                borderRadius: '4px'
              }}></div>
            </div>
            <div style={{
              height: '3px',
              backgroundColor: '#444',
              borderRadius: '0 0 4px 4px'
            }}></div>
          </div>
        )}

        {/* Floating elements */}
        <div className="absolute top-2 sm:top-3 right-4 sm:right-6">
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#ff6b35',
            boxShadow: '0 0 12px rgba(255, 107, 53, 0.4)'
          }}></div>
        </div>
        <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-6">
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#ffa500',
            boxShadow: '0 0 8px rgba(255, 165, 0, 0.4)'
          }}></div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden" style={{backgroundColor: '#0d0d0d'}}>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      
      <div className="relative z-10 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 sm:py-4 md:py-8 lg:py-20 xl:py-24 2xl:py-28">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-4 md:mb-6 lg:mb-16 xl:mb-20 2xl:mb-24 gap-2 sm:gap-3 md:gap-4">
          <div className="flex-1 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 xl:mb-8 2xl:mb-10"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.1'
              }}
            >
              <span 
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
              >
                Highlighting Our
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
                Success Stories
              </span>
            </h2>
            <p 
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.4'
              }}
            >
              Our passion for innovation has driven us to achieve remarkable milestones in AI, Machine 
              Learning, and Data Engineering. We're excited to share some of our standout projects that 
              showcase how we create impactful solutions across various industries.
            </p>
          </div>
          
          {/* See All Button - Responsive */}
          <button 
            className="text-white font-semibold 
                       px-4 py-2 text-xs rounded-lg
                       xs:px-5 xs:py-2.5 xs:text-xs xs:rounded-xl
                       sm:px-6 sm:py-3 sm:text-sm sm:rounded-2xl
                       md:px-7 md:py-3 md:text-sm md:rounded-2xl
                       lg:px-8 lg:py-3.5 lg:text-base lg:rounded-3xl
                       xl:px-10 xl:py-4 xl:text-lg xl:rounded-3xl
                       2xl:px-12 2xl:py-4.5 2xl:text-xl 2xl:rounded-full
                       min-w-[90px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[180px]
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
            <span className="flex items-center gap-1 sm:gap-2 relative z-10 whitespace-nowrap">
              See All
              <span className="group-hover:translate-x-1 transition-transform duration-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
            
            {/* Loading animation effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent opacity-0 rounded-full transform translate-x-[-100%] group-active:opacity-100 group-active:translate-x-[100%] transition-all duration-300"></div>
          </button>
        </div>

        {/* Project Showcase */}
        <div className="overflow-hidden py-4 sm:py-6 md:py-8">
          <div className="flex space-x-8 sm:space-x-12 md:space-x-16 animate-scroll">
            {/* First set of projects */}
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] project-card group cursor-pointer">
                
                {/* Project Mockup */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <DeviceMockup devices={project.devices} />
                </div>

                {/* Project Info */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Company and Category */}
                  <div className="flex items-start justify-between">
                    <div 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold whitespace-nowrap"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        ...getLogoColorStyle(project.logoColor)
                      }}
                    >
                      {project.company}
                    </div>
                    <div 
                      className="text-xs sm:text-sm md:text-base text-gray-400 text-right max-w-24 sm:max-w-28 md:max-w-32 lg:max-w-36 xl:max-w-40 uppercase tracking-wide"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-tight group-hover:text-orange-400 transition-colors duration-300"
                    style={{
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      lineHeight: '1.4'
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Decorative Elements */}
                  <div className="flex items-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div 
                      className="w-8 sm:w-10 md:w-12 h-px"
                      style={{
                        background: 'linear-gradient(90deg, #ff6b35, transparent)'
                      }}
                    ></div>
                    <div 
                      className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full"
                      style={{backgroundColor: '#ff6b35'}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scroll */}
            {projects.map((project) => (
              <div key={`dup-${project.id}`} className="flex-shrink-0 w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] project-card group cursor-pointer">
                
                {/* Project Mockup */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <DeviceMockup devices={project.devices} />
                </div>

                {/* Project Info */}  
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Company and Category */}
                  <div className="flex items-start justify-between">
                    <div 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold whitespace-nowrap"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        ...getLogoColorStyle(project.logoColor)
                      }}
                    >
                      {project.company}
                    </div>
                    <div 
                      className="text-xs sm:text-sm md:text-base text-gray-400 text-right max-w-24 sm:max-w-28 md:max-w-32 lg:max-w-36 xl:max-w-40 uppercase tracking-wide"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-tight group-hover:text-orange-400 transition-colors duration-300"
                    style={{
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      lineHeight: '1.4'
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Decorative Elements */}
                  <div className="flex items-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div 
                      className="w-8 sm:w-10 md:w-12 h-px"
                      style={{
                        background: 'linear-gradient(90deg, #ff6b35, transparent)'
                      }}
                    ></div>
                    <div 
                      className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full"
                      style={{backgroundColor: '#ff6b35'}}
                    ></div>
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
    <section className="flex items-center relative" style={{backgroundColor: '#0d0d0d'}}>
      <div className="relative z-10 w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-[1440px] 2xl:max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 sm:py-8 md:py-12 lg:py-20 xl:py-24 2xl:py-28">
        <div className="flex flex-col lg:flex-row lg:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Side - Header */}
          <div className="w-full lg:w-1/3 mb-2 sm:mb-4 md:mb-6 lg:mb-0">
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-1.5 sm:mb-2 md:mb-3 xl:mb-4 2xl:mb-6"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.1'
              }}
            >
              <span 
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4))',
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
          <div className="w-full lg:w-2/3 space-y-2 sm:space-y-2 md:space-y-2.5 lg:space-y-2 xl:space-y-3 2xl:space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div 
                  className="p-2 sm:p-3 md:p-4 lg:p-4 xl:p-5 2xl:p-6 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
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
                  
                  <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-7 2xl:space-x-8 relative z-10">
                    {/* Step Number */}
                    <div className="flex-shrink-0 mb-1 sm:mb-0">
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

// Combined Component
const CombinedSections = () => {
  return (
    <div>
      <SuccessStoriesSection />
      <HowWeWorkSection />
    </div>
  );
};

export default CombinedSections;
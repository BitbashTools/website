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
      <div className="relative h-48 flex items-center justify-center rounded-xl overflow-hidden" style={{
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
          <div className="absolute left-4 top-8 w-16 h-28 rounded-xl shadow-2xl z-20" style={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #404040'
          }}>
            <div style={{
              backgroundColor: '#333',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px 8px 0 0'
            }}>
              <div style={{
                width: '24px',
                height: '3px',
                backgroundColor: '#555',
                borderRadius: '2px'
              }}></div>
            </div>
            <div className="p-2 space-y-2">
              <div style={{
                height: '8px',
                background: 'linear-gradient(135deg, #ff6b35, #dc2626)',
                borderRadius: '2px'
              }}></div>
              <div style={{
                height: '8px',
                background: 'linear-gradient(135deg, #ff8c69, #ffa500)',
                borderRadius: '2px'
              }}></div>
              <div style={{
                background: 'linear-gradient(135deg, #ff6b35, #ff8c69, #ffa500)',
                height: '40px',
                borderRadius: '4px',
                opacity: 0.8
              }}></div>
            </div>
          </div>
        )}
        
        {devices.includes("tablet") && (
          <div className="absolute left-8 top-4 w-24 h-32 rounded-xl shadow-2xl z-10" style={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #404040'
          }}>
            <div style={{
              backgroundColor: '#333',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px 8px 0 0'
            }}>
              <div style={{
                width: '32px',
                height: '3px',
                backgroundColor: '#555',
                borderRadius: '2px'
              }}></div>
            </div>
            <div className="p-2 space-y-2">
              <div style={{
                height: '12px',
                background: 'linear-gradient(135deg, #666, #888)',
                borderRadius: '4px'
              }}></div>
              <div className="grid grid-cols-2 gap-1">
                <div style={{
                  height: '12px',
                  background: 'linear-gradient(135deg, #ff6b35, #dc2626)',
                  borderRadius: '2px'
                }}></div>
                <div style={{
                  height: '12px',
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
          <div className="absolute right-4 top-6 w-32 h-24 rounded-lg shadow-2xl" style={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #404040'
          }}>
            <div style={{
              backgroundColor: '#333',
              height: '16px',
              borderRadius: '6px 6px 0 0'
            }}>
              <div className="flex items-center space-x-1 px-2 py-1">
                <div style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#FF5F57',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#FFBD2E',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#28CA42',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
            <div className="p-2 space-y-1">
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 105, 0.1), rgba(255, 165, 0, 0.1))',
                height: '100%',
                borderRadius: '4px'
              }}></div>
            </div>
          </div>
        )}

        {devices.includes("laptop") && (
          <div className="absolute right-2 top-8 w-28 h-20 rounded-lg shadow-2xl">
            <div style={{
              backgroundColor: '#333',
              height: '64px',
              borderRadius: '4px 4px 0 0',
              padding: '8px'
            }}>
              <div style={{
                height: '8px',
                background: 'linear-gradient(135deg, #666, #888)',
                borderRadius: '2px',
                marginBottom: '4px'
              }}></div>
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 105, 0.1), rgba(255, 165, 0, 0.1))',
                height: '100%',
                borderRadius: '4px'
              }}></div>
            </div>
            <div style={{
              height: '4px',
              backgroundColor: '#444',
              borderRadius: '0 0 4px 4px'
            }}></div>
          </div>
        )}

        {/* Floating elements */}
        <div className="absolute top-3 right-6">
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ff6b35',
            boxShadow: '0 0 12px rgba(255, 107, 53, 0.4)'
          }}></div>
        </div>
        <div className="absolute bottom-4 left-6">
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#ffa500',
            boxShadow: '0 0 8px rgba(255, 165, 0, 0.4)'
          }}></div>
        </div>
      </div>
    );
  };

  return (
    <>
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
      
      <section className="relative min-h-screen overflow-hidden" style={{backgroundColor: '#0d0d0d'}}>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="flex justify-between items-start mb-16">
            <div className="max-w-2xl">
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6"
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
                className="text-lg text-gray-300"
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
            
            {/* Button */}
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
            >
              <span className="flex items-center gap-2 relative z-10">
                See All
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
            </button>
          </div>

          {/* Project Showcase */}
          <div className="overflow-hidden py-8">
            <div className="flex space-x-16 animate-scroll">
              {/* First set of projects */}
              {projects.map((project) => (
                <div key={project.id} className="flex-shrink-0 w-96 project-card group cursor-pointer">
                  
                  {/* Project Mockup */}
                  <div className="mb-8">
                    <DeviceMockup devices={project.devices} />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    {/* Company and Category */}
                    <div className="flex items-start justify-between">
                      <div 
                        className="text-3xl font-bold whitespace-nowrap"
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          ...getLogoColorStyle(project.logoColor)
                        }}
                      >
                        {project.company}
                      </div>
                      <div 
                        className="text-xs text-gray-400 text-right max-w-32 uppercase tracking-wide"
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                        }}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 
                      className="text-xl text-white leading-tight group-hover:text-orange-400 transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Decorative Elements */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div 
                        className="w-12 h-px"
                        style={{
                          background: 'linear-gradient(90deg, #ff6b35, transparent)'
                        }}
                      ></div>
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{backgroundColor: '#ff6b35'}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless scroll */}
              {projects.map((project) => (
                <div key={`dup-${project.id}`} className="flex-shrink-0 w-96 project-card group cursor-pointer">
                  
                  {/* Project Mockup */}
                  <div className="mb-8">
                    <DeviceMockup devices={project.devices} />
                  </div>

                  {/* Project Info */}  
                  <div className="space-y-4">
                    {/* Company and Category */}
                    <div className="flex items-start justify-between">
                      <div 
                        className="text-3xl font-bold whitespace-nowrap"
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          ...getLogoColorStyle(project.logoColor)
                        }}
                      >
                        {project.company}
                      </div>
                      <div 
                        className="text-xs text-gray-400 text-right max-w-32 uppercase tracking-wide"
                        style={{
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                        }}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 
                      className="text-xl text-white leading-tight group-hover:text-orange-400 transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Decorative Elements */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div 
                        className="w-12 h-px"
                        style={{
                          background: 'linear-gradient(90deg, #ff6b35, transparent)'
                        }}
                      ></div>
                      <div 
                        className="w-2 h-2 rounded-full"
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
    </>
  );
};

export default SuccessStoriesSection;
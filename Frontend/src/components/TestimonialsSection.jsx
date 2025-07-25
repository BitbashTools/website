import React from 'react';

const TestimonialsSection = () => {
  const stats = [
    { number: '100+', label: 'Clients' },
    { number: '40+', label: 'Team Size' },
    { number: '3000+', label: 'Agile Sprints' },
    { number: '2', label: 'Dev Centers' }
  ];

  const badges = [
    { name: 'GoodFirms', initial: 'GF' },
    { name: 'Top Developer', initial: 'TD' },
    { name: 'Top Rated', initial: 'TR' },
    { name: 'Best Company', initial: 'BC' },
    { name: 'Excellence', initial: 'EX' },
    { name: 'Upwork Top Rated', initial: 'UT' }
  ];

  const testimonial = {
    company: 'Botics',
    companyInitial: 'B',
    quote: 'Folium AI has been instrumental in the evolution of our AI-driven solutions. Their expertise in web and mobile app development, combined with a deep understanding of AI and machine learning, has empowered us to deliver innovative solutions to our clients. Their team\'s dedication, agility, and knack for problem-solving have been pivotal in navigating the complex challenges of our industry. Partnering with Folium AI has undoubtedly been one of our best strategic decisions.',
    author: 'Aric Recker',
    role: 'CEO',
    companyName: 'Botics.ai'
  };

  return (
    <section className="py-20 relative" style={{backgroundColor: '#0d0d0d'}}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Stats and Badges */}
          <div className="lg:sticky lg:top-8">
            {/* Header */}
            <div className="mb-12 lg:pr-8">
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
                  Reviews that{' '}
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
                  speak volumes!
                </span>
              </h2>
              <p 
                className="text-lg text-gray-300"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.4'
                }}
              >
                Let us take a look at what our valued clients think about our AI/ML and data engineering services.
              </p>
            </div>

            {/* Stats - Single Row */}
            <div className="flex justify-between gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center flex-1">
                  <div 
                    className="text-3xl lg:text-4xl font-bold mb-2"
                    style={{
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      background: 'linear-gradient(135deg, #ff7a47, #ff6b35, #e55a2b, #dc2626)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-gray-400 font-medium text-sm"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Badges */}
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group relative overflow-hidden"
                  style={{
                    backgroundColor: '#1a1a1a',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #2d1a14 0%, #3d2418 100%)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 6px 16px rgba(255, 107, 53, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-xl"></div>
                  
                  <div className="text-center relative z-10">
                    <div 
                      className="w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center text-sm font-bold"
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
                      {badge.initial}
                    </div>
                    <div 
                      className="text-xs font-medium text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      {badge.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Single Testimonial */}
          <div className="relative lg:mt-8">
            {/* Testimonial Card */}
            <div 
              className="rounded-2xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden group lg:min-h-[500px]"
              style={{
                backgroundColor: '#1a1a1a',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-20 rounded-2xl"></div>
              
              {/* Company Header */}
              <div className="flex items-center space-x-4 mb-6 relative z-10">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{
                    background: 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)',
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
                  {testimonial.companyInitial}
                </div>
                <h3 
                  className="text-xl font-semibold text-white"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    lineHeight: '1.2'
                  }}
                >
                  {testimonial.company}
                </h3>
              </div>

              {/* Quote */}
              <div className="flex-1 mb-8 relative z-10">
                <p 
                  className="text-gray-300 leading-relaxed text-lg italic"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    lineHeight: '1.4'
                  }}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div 
                className="border-t pt-6 relative z-10"
                style={{borderColor: '#333333'}}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{
                      backgroundColor: '#2a2a2a',
                      background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3)',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                    }}
                  >
                    AR
                  </div>
                  <div>
                    <div 
                      className="font-semibold text-lg"
                      style={{
                        color: '#ff6b35',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        lineHeight: '1.2'
                      }}
                    >
                      {testimonial.author}
                    </div>
                    <div 
                      className="text-gray-400"
                      style={{
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      {testimonial.role} - {testimonial.companyName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import React, { useState } from 'react';

const EmergingTechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState('Backend');

  const tabs = ['Mobile', 'Front End', 'Database', 'Backend', 'CMS', 'Infra and DevOps'];

  const technologies = {
    Mobile: [
      { name: 'React Native' },
      { name: 'Flutter' },
      { name: 'Swift' },
      { name: 'Kotlin' },
      { name: 'Xamarin' },
      { name: 'Ionic' },
      { name: 'PhoneGap' },
      { name: 'Cordova' }
    ],
    'Front End': [
      { name: 'React' },
      { name: 'Vue.js' },
      { name: 'Angular' },
      { name: 'Svelte' },
      { name: 'Next.js' },
      { name: 'Nuxt.js' },
      { name: 'TypeScript' },
      { name: 'Sass' }
    ],
    Database: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Redis' },
      { name: 'Cassandra' },
      { name: 'Firebase' },
      { name: 'DynamoDB' },
      { name: 'SQLite' }
    ],
    Backend: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'Flask' },
      { name: 'Node' },
      { name: 'Laravel' },
      { name: 'Nest' },
      { name: 'GraphQL' },
      { name: 'Codeigniter' },
      { name: 'Java' }
    ],
    CMS: [
      { name: 'WordPress' },
      { name: 'Drupal' },
      { name: 'Strapi' },
      { name: 'Contentful' },
      { name: 'Ghost' },
      { name: 'Sanity' },
      { name: 'Webflow' },
      { name: 'Prismic' }
    ],
    'Infra and DevOps': [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'Azure' },
      { name: 'Jenkins' },
      { name: 'Terraform' },
      { name: 'Ansible' },
      { name: 'GitLab CI' }
    ]
  };

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
                Emerging
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
                Technologies
              </span>
            </h2>

            <p 
              className="text-lg text-gray-300"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.4'
              }}
            >
              Using the most up-to-date and current technology, we create effective solutions for businesses ranging from startups to Fortune 1000.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 relative">
          <div 
            className="absolute bottom-0 w-full h-px"
            style={{backgroundColor: '#333333'}}
          ></div>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-6 py-4 font-medium text-lg transition-all duration-300 border-b-2 relative group"
              style={{
                color: activeTab === tab ? '#ff6b35' : '#888888',
                borderBottomColor: activeTab === tab ? '#ff6b35' : 'transparent',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                background: activeTab === tab 
                  ? 'linear-gradient(145deg, rgba(255, 107, 53, 0.1), rgba(220, 38, 38, 0.05))' 
                  : 'transparent'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.color = '#cccccc';
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01))';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.03)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.color = '#888888';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {tab}
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded"></div>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies[activeTab]?.map((tech, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden"
            >
              <div
                className="flex flex-col items-center p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 relative"
                style={{
                  backgroundColor: '#1a1a1a',
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(255, 107, 53, 0.02) 100%)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 16px rgba(255, 107, 53, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-2xl"></div>
                
                {/* Technology Icon/Initial */}
                <div 
                  className="w-12 h-12 mb-4 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-110 relative z-10"
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
                  {tech.name.charAt(0)}
                </div>
                
                {/* Technology Name */}
                <h3 
                  className="text-sm font-semibold transition-all duration-300 group-hover:scale-105 text-center relative z-10 text-white group-hover:text-orange-300"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                  }}
                >
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p 
            className="text-xl font-semibold text-white"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              lineHeight: '1.4'
            }}
          >
            We move at startup speed—with{' '}
            <span style={{color: '#ff6b35'}}>enterprise discipline</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergingTechnologiesSection;
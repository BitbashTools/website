import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative py-12 px-6" style={{backgroundColor: '#0d0d0d'}}>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Container */}
        <div 
          className="rounded-3xl p-8 lg:p-12 relative overflow-hidden mb-8"
          style={{
            backgroundColor: '#1a1a1a',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-20 rounded-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 text-white">
            
            {/* Contact Us Section */}
            <div className="lg:col-span-2">
              <h3 
                className="text-xl font-semibold mb-6 pb-2"
                style={{
                  color: 'rgb(255, 107, 53)',
                  borderBottom: '2px solid rgb(255, 107, 53)',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontWeight: '600'
                }}
              >
                Contact Us
              </h3>
              
              <div className="space-y-6">
                {/* US Office */}
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: '#1e40af',
                      background: 'linear-gradient(145deg, #1e40af, #1d4ed8)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM14 10a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="font-semibold text-white mb-1"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      (415)316-1346
                    </p>
                    <p 
                      className="text-gray-300 text-sm leading-relaxed"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      1880 S Dairy Ashford Rd Ste 207 #141 Houston,<br />
                      TX 77077, United States of America
                    </p>
                  </div>
                </div>

                {/* UAE Office */}
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: '#dc2626',
                      background: 'linear-gradient(145deg, #dc2626, #b91c1c)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM14 10a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="font-semibold text-white mb-1"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      +971-42-216756
                    </p>
                    <p 
                      className="text-gray-300 text-sm leading-relaxed"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      Office 206, Sobha Ivory 1, Business Bay, Dubai,<br />
                      P.O. Box 122621, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* Pakistan Office */}
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgb(255, 107, 53)',
                      background: 'linear-gradient(145deg, #059669, #047857)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM14 10a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="font-semibold text-white mb-1"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      +92-326-0944458
                    </p>
                    <p 
                      className="text-gray-300 text-sm leading-relaxed"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      Office # 615, 6th Floor, Al Hafeez Executive<br />
                      Block, C Near Firdous Mkt Rd, Block G Gulberg<br />
                      III, Lahore, Punjab
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: '#2a2a2a',
                      border: '2px solid #404040',
                      background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="font-semibold text-white"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      hi@folium.ai
                    </p>
                  </div>
                </div>

                {/* Follow Us Section */}
                <div className="pt-6">
                  <h4 
                    className="text-lg font-semibold mb-4 pb-2"
                    style={{
                      color: 'rgb(255, 107, 53)',
                      borderBottom: '2px solid rgb(255, 107, 53)',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    {['facebook', 'instagram', 'linkedin', 'twitter'].map((social, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-green-400"
                        style={{
                          backgroundColor: 'transparent'
                        }}
                      >
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          {social === 'facebook' && (
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          )}
                          {social === 'instagram' && (
                            <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.386c-.494.191-.92.444-1.34.864-.42.42-.673.846-.864 1.34-.182.484-.304 1.058-.338 2.005C2.461 7.989 2.448 8.396 2.448 12.017c0 3.621.013 4.028.048 4.976.034.947.156 1.521.338 2.005.191.494.444.92.864 1.34.42.42.846.673 1.34.864.484.182 1.058.304 2.005.338.947.035 1.354.048 4.976.048 3.621 0 4.028-.013 4.976-.048.947-.034 1.521-.156 2.005-.338.494-.191.92-.444 1.34-.864.42-.42.673-.846.864-1.34.182-.484.304-1.058.338-2.005.035-.947.048-1.354.048-4.976 0-3.621-.013-4.028-.048-4.976-.034-.947-.156-1.521-.338-2.005-.191-.494-.444-.92-.864-1.34-.42-.42-.846-.673-1.34-.864-.484-.182-1.058-.304-2.005-.338C16.045.013 15.638 0 12.017 0zM12.017 21.986c-5.52 0-9.969-4.449-9.969-9.969S6.497 2.048 12.017 2.048s9.969 4.449 9.969 9.969-4.449 9.969-9.969 9.969zM12.017 5.838A6.179 6.179 0 1 0 18.196 12.017 6.179 6.179 0 0 0 12.017 5.838zM19.846 5.595a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                          )}
                          {social === 'linkedin' && (
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          )}
                          {social === 'twitter' && (
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          )}
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Section */}
                <div className="pt-6">
                  <h4 
                    className="text-lg font-semibold mb-4 pb-2"
                    style={{
                      color: 'rgb(255, 107, 53)',
                      borderBottom: '2px solid rgb(255, 107, 53)',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    Sign Up for our Newsletter
                  </h4>
                  <div className="flex space-x-3">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-full transition-all duration-300 focus:outline-none"
                      style={{
                        backgroundColor: 'transparent',
                        border: '2px solid #404040',
                        color: '#ffffff',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgb(255, 107, 53)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#404040';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    <button 
                      className="px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                      style={{
                        backgroundColor: 'rgb(255, 107, 53)',
                        color: 'white',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 
                className="text-lg font-semibold mb-6 pb-2"
                style={{
                  color: 'rgb(255, 107, 53)',
                  borderBottom: '2px solid rgb(255, 107, 53)',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontWeight: '600'
                }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Home', 'Portfolio', 'About Us', 'Blogs', 'Contact', 'Careers'].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h3 
                className="text-lg font-semibold mb-6 pb-2"
                style={{
                  color: 'rgb(255, 107, 53)',
                  borderBottom: '2px solid rgb(255, 107, 53)',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontWeight: '600'
                }}
              >
                Services
              </h3>
              <ul className="space-y-3">
                {['Artificial Intelligence', 'Serverless Computing', 'Robotics', 'Internet of Things'].map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hire Developers Section */}
            <div>
              <h3 
                className="text-lg font-semibold mb-6 pb-2"
                style={{
                  color: 'rgb(255, 107, 53)',
                  borderBottom: '2px solid rgb(255, 107, 53)',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontWeight: '600'
                }}
              >
                Hire Developers
              </h3>
              <ul className="space-y-3">
                {[
                  'ReactJS Developers',
                  'NodeJS Developers', 
                  'Python Developers',
                  'Django Developers',
                  'MERN Stack Developers',
                  'Data Engineers',
                  'React Native Developers'
                ].map((developer, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      {developer}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with Logo and Copyright */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Logo and Description */}
          <div>
            <div className="mb-6">
              <h2 
                className="text-4xl font-bold"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  lineHeight: '1.1'
                }}
              >
                <span className="text-white">folium</span>
                <span style={{color: 'rgb(255, 107, 53)'}}>ai</span>
              </h2>
            </div>
            <p 
              className="text-gray-300 text-lg mb-6"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                lineHeight: '1.6'
              }}
            >
              The goal is to deliver quality-focused software products to aspiring businesses.
            </p>
            <div 
              className="pt-6 border-t"
              style={{borderColor: '#333333'}}
            >
              <p 
                className="text-gray-400"
                style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
              >
                Copyright © Folium AI 2024
              </p>
            </div>
          </div>

          {/* Right Side - Security Badges and Links */}
          <div className="text-right">
            <div className="flex justify-end space-x-4 mb-6">
              <div className="w-16 h-12 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">SSL</span>
              </div>
              <div className="w-16 h-12 bg-yellow-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">Norton</span>
              </div>
              <div className="w-16 h-12 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">Trusted</span>
              </div>
            </div>
            <div className="flex justify-end space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
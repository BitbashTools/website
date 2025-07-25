import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Navigation Component
const Navbar = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home', route: '/' },
    { name: 'About Us', id: 'about', route: '/about' },
    { name: 'Services', id: 'services', route: '/services' },
    { name: 'Contact Us', id: 'contact', route: '/contact' },
  ];

  const handleNavigation = (pageId) => {
    if (onNavigate) onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('home')}
              className="flex-shrink-0 flex items-center space-x-1"
            >
              <span 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-white"
                style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
              >
                folium
              </span>
              <span 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #ff7a47, #ff6b35, #e55a2b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                ai
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="inline-flex items-center px-2 lg:px-3 py-1 lg:py-1.5 rounded-lg text-xs sm:text-sm lg:text-base font-medium transition-all duration-300"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  backgroundColor: activePage === item.id ? '#1a1a1a' : 'transparent',
                  border: activePage === item.id ? '1px solid #ff6b35' : '1px solid transparent',
                  color: activePage === item.id ? '#ff6b35' : '#d1d5db',
                }}
                onMouseEnter={(e) => {
                  if (activePage !== item.id) {
                    e.currentTarget.style.color = '#ff6b35';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 107, 53, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activePage !== item.id) {
                    e.currentTarget.style.color = '#d1d5db';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.name}
              </button>
            ))}
            
            {/* Portfolio Button */}
            <button 
              className="text-black font-semibold 
                         px-3 py-1.5 text-xs rounded-lg
                         xs:px-4 xs:py-2 xs:text-xs xs:rounded-xl
                         sm:px-4 sm:py-2 sm:text-xs sm:rounded-xl
                         md:px-5 md:py-2 md:text-sm md:rounded-2xl
                         lg:px-6 lg:py-2.5 lg:text-sm lg:rounded-2xl
                         xl:px-7 xl:py-3 xl:text-base xl:rounded-3xl
                         2xl:px-8 2xl:py-3.5 2xl:text-lg 2xl:rounded-full
                         min-w-[70px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[110px] 2xl:min-w-[120px]
                         transition-all duration-300 transform 
                         hover:scale-105 hover:shadow-lg 
                         active:scale-95 active:shadow-md
                         focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 focus:ring-offset-black
                         relative overflow-hidden group"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                background: 'linear-gradient(145deg, #e5e7eb, #d1d5db, #9ca3af)',
                border: '1px solid #000000',
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1),
                  0 4px 8px rgba(0, 0, 0, 0.3),
                  0 2px 4px rgba(0, 0, 0, 0.15)
                `,
                textShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(145deg, #f3f4f6, #e5e7eb, #d1d5db)';
                e.currentTarget.style.boxShadow = `
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.15),
                  0 8px 16px rgba(0, 0, 0, 0.4),
                  0 4px 8px rgba(0, 0, 0, 0.2)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(145deg, #e5e7eb, #d1d5db, #9ca3af)';
                e.currentTarget.style.boxShadow = `
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1),
                  0 4px 8px rgba(0, 0, 0, 0.3),
                  0 2px 4px rgba(0, 0, 0, 0.15)
                `;
              }}
            >
              <span className="relative z-10 whitespace-nowrap">Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-full"></div>
              
              {/* Loading animation effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent opacity-0 rounded-full transform translate-x-[-100%] group-active:opacity-100 group-active:translate-x-[100%] transition-all duration-300"></div>
            </button>

            {/* Get Quote Button */}
            <button 
              className="text-white font-semibold 
                         px-3 py-1.5 text-xs rounded-lg
                         xs:px-4 xs:py-2 xs:text-xs xs:rounded-xl
                         sm:px-4 sm:py-2 sm:text-xs sm:rounded-xl
                         md:px-5 md:py-2 md:text-sm md:rounded-2xl
                         lg:px-6 lg:py-2.5 lg:text-sm lg:rounded-2xl
                         xl:px-7 xl:py-3 xl:text-base xl:rounded-3xl
                         2xl:px-8 2xl:py-3.5 2xl:text-lg 2xl:rounded-full
                         min-w-[70px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[110px] 2xl:min-w-[120px]
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
              <span className="relative z-10 whitespace-nowrap">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-full"></div>
              
              {/* Loading animation effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent opacity-0 rounded-full transform translate-x-[-100%] group-active:opacity-100 group-active:translate-x-[100%] transition-all duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="block h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden backdrop-blur-sm border-t"
          style={{
            backgroundColor: 'rgba(26, 26, 26, 0.95)',
            borderColor: '#333333'
          }}
        >
          <div className="pt-2 pb-3 space-y-1 px-3 sm:px-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="block w-full text-left px-3 py-2 text-sm sm:text-base font-medium rounded-lg transition-colors"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  color: '#d1d5db'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Brand Slider Component
const BrandSlider = () => {
  const brands = [
    { name: "3X", logo: "3X" },
    { name: "CRYPTO WZRD", logo: "CW" },
    { name: "Tribaja", logo: "TB" },
    { name: "Avvinue", logo: "AV" },
    { name: "knowledj", logo: "KJ" },
    { name: "Stemuli", logo: "ST" }
  ];

  return (
    <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-0 right-0 overflow-hidden">
      <div className="flex space-x-6 sm:space-x-8 md:space-x-12 animate-scroll">
        {/* First set of brands */}
        <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 min-w-full">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <div 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #404040',
                  color: '#cccccc',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                }}
              >
                {brand.logo}
              </div>
              <span style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 min-w-full">
          {brands.map((brand, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <div 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #404040',
                  color: '#cccccc',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                }}
              >
                {brand.logo}
              </div>
              <span style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Continuous Vertical Sliding Grid Component
const SlidingCardsGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Systems Forecast",
      type: "forecast",
      content: {
        performance: "98%",
        uptime: "99.9%",
        efficiency: "95%"
      }
    },
    {
      id: 2,
      title: "FOREX Dashboard",
      type: "forex",
      content: {
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
      }
    },
    {
      id: 3,
      title: "Welcome Dashboard",
      type: "welcome",
      content: {
        user: "Daniel",
        greeting: "Good Morning"
      }
    },
    {
      id: 4,
      title: "Project Progress",
      type: "progress",
      content: {
        development: "85%"
      }
    },
    {
      id: 5,
      title: "Analytics Overview",
      type: "analytics",
      content: {
        revenue: "$2.4M",
        growth: "+12%"
      }
    },
    {
      id: 6,
      title: "Team Performance",
      type: "team",
      content: {
        members: "24",
        productivity: "94%"
      }
    }
  ];

  const renderCard = (card) => {
    const baseStyle = {
      backgroundColor: '#1a1a1a',
      border: '1px solid #333333',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
    };

    switch (card.type) {
      case 'forecast':
        return (
          <div 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 rounded-lg sm:rounded-xl p-2 sm:p-3 transform transition-all duration-300 hover:scale-95 relative overflow-hidden group"
            style={baseStyle}
          >
            <div className="text-white relative z-10">
              <div 
                className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2"
                style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
              >
                {card.title}
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <div className="flex justify-between">
                  <span 
                    className="text-gray-400 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Performance
                  </span>
                  <span 
                    className="font-medium text-xs"
                    style={{color: '#ff6b35', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.performance}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span 
                    className="text-gray-400 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Uptime
                  </span>
                  <span 
                    className="font-medium text-xs"
                    style={{color: '#ff6b35', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.uptime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span 
                    className="text-gray-400 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Efficiency
                  </span>
                  <span 
                    className="font-medium text-xs"
                    style={{color: '#ff6b35', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.efficiency}
                  </span>
                </div>
              </div>
              <div className="mt-2 sm:mt-3 grid grid-cols-6 gap-0.5">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-0.5 rounded"
                    style={{backgroundColor: i % 3 === 0 ? '#ff6b35' : '#404040'}}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'forex':
        return (
          <div 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 rounded-lg sm:rounded-xl p-2 sm:p-3 transform transition-all duration-300 hover:scale-95 relative overflow-hidden group"
            style={baseStyle}
          >
            <div className="flex items-center justify-between mb-1 sm:mb-2 relative z-10">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(145deg, #ff7a47, #e55a2b)',
                  }}
                >
                  <span 
                    className="text-white text-xs font-bold"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    FX
                  </span>
                </div>
                <span 
                  className="font-semibold text-white text-xs sm:text-sm md:text-base"
                  style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                >
                  Dashboard
                </span>
              </div>
            </div>
            
            <div className="space-y-1 sm:space-y-1.5 relative z-10">
              {card.content.items.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-center justify-between py-0.5">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full"
                      style={{backgroundColor: i % 2 === 0 ? '#ff6b35' : '#ff8c69'}}
                    ></div>
                    <span 
                      className="text-gray-300 text-xs"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      {item}
                    </span>
                  </div>
                  <div 
                    className="text-gray-500 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Active
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'welcome':
        return (
          <div 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 rounded-lg sm:rounded-xl p-2 sm:p-3 transform transition-all duration-300 hover:scale-95 relative overflow-hidden group"
            style={baseStyle}
          >
            <div className="flex items-center justify-between mb-1 sm:mb-2 relative z-10">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                  style={{
                    background: 'linear-gradient(145deg, #ff7a47, #e55a2b)',
                  }}
                ></div>
                <div>
                  <div 
                    className="text-gray-400 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Welcome back {card.content.user}
                  </div>
                  <div 
                    className="text-xs sm:text-sm font-medium text-white"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.greeting}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-1 sm:space-y-2 relative z-10">
              <div className="flex space-x-1 sm:space-x-1.5">
                <div 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full"
                  style={{background: 'linear-gradient(135deg, #ff8c69, #ff6b35)'}}
                ></div>
                <div 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full"
                  style={{background: 'linear-gradient(135deg, #ff6b35, #e55a2b)'}}
                ></div>
                <div 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full"
                  style={{background: 'linear-gradient(135deg, #ff9f80, #ff6b35)'}}
                ></div>
              </div>
              <div className="grid grid-cols-4 gap-0.5">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 rounded"
                    style={{backgroundColor: '#404040'}}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 rounded-lg sm:rounded-xl p-2 sm:p-3 transform transition-all duration-300 hover:scale-95 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ff7a47, #e55a2b)',
              boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
            }}
          >
            <div className="text-white relative z-10">
              <div 
                className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2"
                style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
              >
                {card.title}
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-orange-100 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Development
                  </span>
                  <span 
                    className="text-white font-medium text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.development}
                  </span>
                </div>
                <div className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full">
                  <div className="w-4/5 h-1 sm:h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="mt-2 sm:mt-3 grid grid-cols-3 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-1.5 sm:h-2 bg-white/10 rounded"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 rounded-lg sm:rounded-xl p-2 sm:p-3 transform transition-all duration-300 hover:scale-95 relative overflow-hidden group"
            style={baseStyle}
          >
            <div className="text-white relative z-10">
              <div 
                className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2"
                style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
              >
                {card.title}
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex justify-between">
                  <span 
                    className="text-gray-400 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Revenue
                  </span>
                  <span 
                    className="font-medium text-xs sm:text-sm"
                    style={{color: '#ff6b35', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.revenue}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span 
                    className="text-gray-400 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Growth
                  </span>
                  <span 
                    className="font-medium text-xs sm:text-sm"
                    style={{color: '#10b981', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.growth}
                  </span>
                </div>
                <div className="mt-2 sm:mt-3 flex space-x-0.5">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 rounded"
                      style={{
                        height: `${Math.random() * 15 + 8}px`,
                        backgroundColor: i % 2 === 0 ? '#ff6b35' : '#404040'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 rounded-lg sm:rounded-xl p-2 sm:p-3 transform transition-all duration-300 hover:scale-95 relative overflow-hidden group"
            style={baseStyle}
          >
            <div className="text-white relative z-10">
              <div 
                className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2"
                style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
              >
                {card.title}
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex justify-between">
                  <span 
                    className="text-gray-400 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Team Members
                  </span>
                  <span 
                    className="font-medium text-xs sm:text-sm"
                    style={{color: '#ff6b35', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.members}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span 
                    className="text-gray-400 text-xs"
                    style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    Productivity
                  </span>
                  <span 
                    className="font-medium text-xs sm:text-sm"
                    style={{color: '#10b981', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                  >
                    {card.content.productivity}
                  </span>
                </div>
                <div className="mt-2 sm:mt-3 grid grid-cols-4 gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full"
                      style={{backgroundColor: i % 3 === 0 ? '#ff6b35' : '#404040'}}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto h-64 sm:h-72 md:h-80 lg:h-88 xl:h-96 2xl:h-[28rem] overflow-hidden">
      {/* Continuous Sliding Grid Container */}
      <div className="relative h-full">
        {/* Infinite scrolling animation */}
        <div 
          className="flex flex-col animate-continuous-slide"
          style={{
            height: `${cards.length * 180}px`,
            animation: 'continuous-slide 20s linear infinite'
          }}
        >
          {/* First set of cards */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
            {cards.map((card, index) => (
              <div 
                key={`first-${card.id}`} 
                className="transform transition-all duration-300"
              >
                {renderCard(card)}
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {cards.map((card, index) => (
              <div 
                key={`second-${card.id}`} 
                className="transform transition-all duration-300"
              >
                {renderCard(card)}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient masks for smooth fade */}
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 md:h-12 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 md:h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

// Main Hero Section Component
const HeroSection = ({ activePage, onNavigate }) => {
  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes continuous-slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-continuous-slide {
          animation: continuous-slide 20s linear infinite;
        }
      `}</style>
      
      <section className="relative min-h-screen overflow-hidden" style={{backgroundColor: '#0d0d0d'}}>
        {/* Navigation */}
        <Navbar activePage={activePage} onNavigate={onNavigate} />

        {/* Main Content Container - Responsive spacing and alignment */}
        <div className="relative z-10 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center w-full">
            {/* Left Content - Responsive typography and spacing */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 lg:pr-4 xl:pr-8">
              <div>
                <h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 xl:mb-8 2xl:mb-10 relative group"
                  style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                >
                  {/* Reduced metallic shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                  
                  <span 
                    className="relative z-10"
                    style={{
                      background: 'linear-gradient(to right , rgba(240, 234, 234, 1), rgba(143, 138, 138, 1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    Your Next-Gen{' '}
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
                    Technology Partner
                  </span>
                </h1>

                <p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed mb-6 sm:mb-7 md:mb-8 xl:mb-10 2xl:mb-12"
                  style={{ 
                    background: 'linear-gradient(135deg, #e5e5e5, #ffffff, #cccccc, #b8b8b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                  }}
                >
                  We are a dynamic software development company committed to building intelligent systems that create scalable impact.
                </p>
              </div>

              {/* Service Tags - Responsive sizing */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-7 md:mb-8 xl:mb-10 2xl:mb-12">
                {['Full-Stack Engineering', 'Cloud Solutions', 'AI & ML Solutions'].map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-1.5 sm:space-x-2 rounded-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 transition-all duration-300 hover:scale-105 cursor-pointer group relative overflow-hidden"
                    style={{
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #404040',
                      background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ff6b35';
                      e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 12px rgba(255, 107, 53, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#404040';
                      e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 2px 8px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    {/* Reduced metallic shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 rounded-full"></div>
                    
                    <div 
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full relative z-10"
                      style={{backgroundColor: '#ff6b35'}}
                    ></div>
                    <span 
                      className="text-gray-300 text-xs sm:text-sm md:text-base font-medium relative z-10"
                      style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                    >
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button - Fully responsive with consistent properties */}
              <button 
                className="text-white font-semibold 
                           px-4 py-2 text-xs rounded-lg
                           xs:px-5 xs:py-2.5 xs:text-xs xs:rounded-xl
                           sm:px-6 sm:py-3 sm:text-sm sm:rounded-2xl
                           md:px-8 md:py-3.5 md:text-base md:rounded-2xl
                           lg:px-10 lg:py-4 lg:text-lg lg:rounded-3xl
                           xl:px-12 xl:py-4.5 xl:text-xl xl:rounded-3xl
                           2xl:px-16 2xl:py-5 2xl:text-2xl 2xl:rounded-full
                           min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[180px] 2xl:min-w-[200px]
                           transition-all duration-300 transform 
                           hover:scale-105 hover:shadow-lg 
                           active:scale-95 active:shadow-md
                           focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-black
                           relative overflow-hidden group"
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
                <span className="relative z-10 whitespace-nowrap">Let's Chat</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                
                {/* Loading animation effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent opacity-0 rounded-full transform translate-x-[-100%] group-active:opacity-100 group-active:translate-x-[100%] transition-all duration-300"></div>
              </button>

              {/* Trusted Brands Section - Responsive text */}
              <div className="pt-2 sm:pt-3 md:pt-4">
                <p 
                  className="text-gray-400 text-xs sm:text-sm md:text-base mb-2 sm:mb-3"
                  style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}
                >
                  Partnered with Trusted Brands
                </p>
              </div>
            </div>

            {/* Right Content - Responsive card grid */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <SlidingCardsGrid />
            </div>
          </div>
        </div>

        {/* Brand Slider at Bottom */}
        <BrandSlider />
      </section>
    </>
  );
};

export default HeroSection;
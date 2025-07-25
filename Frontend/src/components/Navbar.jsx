import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for routing

const Navbar = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home', route: '/' },
    { name: 'About Us', id: 'about', route: '/about' },
    { name: 'Services', id: 'services', route: '/services' },
    { name: 'Industries', id: 'industries', route: '/industries' },
    { name: 'Case Studies', id: 'case-studies', route: '/case-studies' },
    { name: 'Resources', id: 'resources', route: '/resources' },
    { name: 'Contact Us', id: 'contact', route: '/contact' },
  ];

  const handleNavigation = (pageId) => {
    onNavigate(pageId); // Use the passed onNavigate function
    setIsMenuOpen(false); // Close the mobile menu after navigation
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex-shrink-0 flex items-center"
            >
              <span className="text-2xl font-bold text-blue-600">Pangea360</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.route} // Directly navigate using react-router Link
                onClick={() => handleNavigation(item.id)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activePage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.route} // Directly navigate using react-router Link
                onClick={() => handleNavigation(item.id)}
                className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

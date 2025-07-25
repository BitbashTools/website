import React, { useState } from 'react';
import { MessageSquare, DollarSign, Users } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    company: '',
    techStack: '',
    projectRequirements: '',
    captcha: '',
    agreementChecked: false
  });

  const [captchaQuestion] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.captcha) !== captchaQuestion.answer) {
      alert('Please solve the captcha correctly');
      return;
    }
    if (!formData.agreementChecked) {
      alert('Please accept the non-disclosure agreement');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const benefits = [
    {
      icon: <MessageSquare className="w-6 h-6 text-white-500" />,
      title: "Quick Response",
      description: "Receive prompt assistance and support whenever you need it."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white-500" />,
      title: "Best Pricing", 
      description: "Unlock unbeatable value with our competitive rates and cost-effective solutions."
    },
    {
      icon: <Users className="w-6 h-6 text-white-00" />,
      title: "Agile and Transparent",
      description: "Stay informed every step of the way with our transparent processes."
    }
  ];

  const inputStyle = {
    backgroundColor: '#2a2a2a',
    border: '1px solid rgba(255, 107, 53, 0.2)',
    color: '#cccccc',
    borderRadius: '24px',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    '&:focus': {
      borderColor: '#ff6b35',
      boxShadow: '0 0 0 2px rgba(255, 107, 53, 0.2)'
    }
  };

  const headingStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#0d0d0d'}}>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Container */}
          <div className="rounded-[40px] p-8 lg:p-12" style={{
            backgroundColor: '#1a1a1a',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Contact Form */}
              <div>
                {/* Header */}
                <div className="mb-8">
                  <p style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                  }} className="font-medium mb-2 text-lg">We are always happy to help</p>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    <span style={{
                      background: 'linear-gradient(135deg, #ff7a47, #ff6b35, #e55a2b, #dc2626)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 10px rgba(255, 107, 53, 0.4)'
                    }}>Let's Work Together</span>
                  </h2>
                  <div className="w-24 h-1" style={{
                    background: 'linear-gradient(to right, #ff6b35, #dc2626)'
                  }}></div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                  {/* Contact Info Section */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={headingStyle}>Contact Info</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="contactNumber"
                          placeholder="Contact Number*"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                          style={inputStyle}
                        />
                      </div>
                    </div>
                  </div>

                  {/* About Project Section */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={headingStyle}>About Project</h3>
                    
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="techStack"
                        placeholder="Enter your Tech Stack"
                        value={formData.techStack}
                        onChange={handleInputChange}
                        className="w-full px-6 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={inputStyle}
                      />
                      
                      <textarea
                        name="projectRequirements"
                        placeholder="Fill Your Project Requirements"
                        value={formData.projectRequirements}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-6 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                        style={inputStyle}
                      ></textarea>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Agreement Checkbox */}
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        name="agreementChecked"
                        checked={formData.agreementChecked}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-orange-400 rounded cursor-pointer accent-[#ff6b35]"
                        style={{
                          backgroundColor: formData.agreementChecked ? '#ff6b35' : 'transparent',
                          borderColor: '#ff6b35'
                        }}
                      />
                      <label className="text-sm text-gray-400">
                        Please send me a non-disclosure agreement.
                      </label>
                    </div>

                    {/* Captcha */}
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300">
                        {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                      </span>
                      <input
                        type="number"
                        name="captcha"
                        placeholder="Ans*"
                        value={formData.captcha}
                        onChange={handleInputChange}
                        required
                        className="w-16 px-2 py-1 rounded focus:ring-2 focus:ring-[#ff6b35] focus:outline-none"
                        style={{
                          backgroundColor: '#2a2a2a',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#cccccc'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                      style={{
                        background: 'linear-gradient(145deg, #ff7a47, #e55a2b, #dc2626)',
                        color: 'white',
                        border: '1px solid rgba(255, 107, 53, 0.3)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 4px 8px rgba(255, 107, 53, 0.2)'
                      }}
                    >
                      <span className="relative z-10">Submit</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Why FoliumAI */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  <span style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                  }}>
                    Why<br />
                    <span style={{
                      background: 'linear-gradient(135deg, #ff7a47, #ff6b35, #e55a2b, #dc2626)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 10px rgba(255, 107, 53, 0.4)'
                    }}>FoliumAI?</span>
                  </span>
                </h2>

                {/* Benefits */}
                <div className="space-y-8 mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}
                      >
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2" style={{color: '#e5e5e5'}}>
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievement Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((badge) => (
                    <div key={badge} className="flex justify-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                        style={{
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          border: '2px solid rgba(16, 185, 129, 0.3)',
                          color: '#10b981'
                        }}
                      >
                        {badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
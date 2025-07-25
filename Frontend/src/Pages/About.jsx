import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/api/placeholder/150/150",
      bio: "15+ years of digital marketing experience"
    },
    {
      name: "Jane Smith",
      position: "Marketing Director",
      image: "/api/placeholder/150/150",
      bio: "Former Google strategist"
    },
    {
      name: "Mike Johnson",
      position: "Creative Director",
      image: "/api/placeholder/150/150",
      bio: "Award-winning designer"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Who We Are Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Who We Are</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pangea360 is a full-service digital marketing agency and a subsidiary of Pangea Global Enterprises. 
              We combine creativity, technology, and strategy to help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-600">
                To be the global leader in digital marketing innovation, empowering businesses 
                to achieve extraordinary growth through cutting-edge digital solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-600">
                To deliver exceptional value to our clients through innovative digital marketing 
                strategies, fostering long-term partnerships built on trust, transparency, and results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Our team of experts is dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of digital trends to provide cutting-edge solutions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
              <p className="text-gray-600">
                We focus on delivering measurable outcomes for our clients
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                We prioritize our clients' success and satisfaction above all
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
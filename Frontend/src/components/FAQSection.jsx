import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [expandedItem, setExpandedItem] = useState('How do you calculate the cost of a basic software development project?');

  const faqItems = [
    {
      question: "How long does it take to deliver a software project?",
      answer: "For a small software project, it takes around 6 to 8 weeks whereas for a large project, it can take anywhere in between 12 to 16 weeks. However, this timeline can vary according to the complexity of the project and the required features."
    },
    {
      question: "How do you calculate the cost of a basic software development project?",
      answer: "We calculate the cost of a software project by multiplying our hourly rate by the total number of hours required to complete the project."
    },
    {
      question: "Which software development methodology do you follow?",
      answer: "We mostly work with the Agile methodology to match our pace with the latest technological trends. This allows us to deliver iterative improvements and maintain flexibility throughout the development process."
    },
    {
      question: "How do you ensure the quality of software projects?",
      answer: "We ensure quality through rigorous testing procedures, code reviews, automated testing, and continuous integration. Our QA team performs comprehensive testing at every stage of development to maintain high standards."
    },
    {
      question: "Can you provide a concrete timeline for the delivery of the project?",
      answer: "Yes, we provide detailed project timelines based on the scope and complexity of your project. We break down the project into milestones and provide realistic delivery dates for each phase."
    },
    {
      question: "Do you also take care of the post-launch maintenance?",
      answer: "Absolutely! We provide comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. Our maintenance packages are designed to keep your software running smoothly."
    },
    {
      question: "How can I obtain a rough quote for my software project?",
      answer: "You can get a rough quote by contacting us with your project requirements. We'll schedule a consultation to understand your needs and provide an estimated cost based on the project scope, timeline, and complexity."
    },
    {
      question: "Which steps do you take to develop a software project?",
      answer: "Our development process includes: 1) Requirements gathering and analysis, 2) System design and architecture, 3) Development and coding, 4) Testing and quality assurance, 5) Deployment, and 6) Post-launch support and maintenance."
    }
  ];

  const toggleItem = (question) => {
    setExpandedItem(expandedItem === question ? null : question);
  };

  return (
    <section className="py-20 relative" style={{backgroundColor: '#0d0d0d'}}>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
              Frequently Asked{' '}
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
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-600"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(item.question)}
                className="w-full py-6 flex items-center justify-between text-left transition-all duration-300 px-2 rounded-lg hover:bg-[#1a1a1a]"
                style={{
                  background: expandedItem === item.question 
                    ? 'linear-gradient(135deg, rgba(255, 122, 71, 0.08) 0%, rgba(220, 38, 38, 0.08) 100%)'
                    : 'transparent'
                }}
              >
                <h3 
                  className="text-lg lg:text-xl font-medium pr-4"
                  style={{
                    color: expandedItem === item.question ? '#ff6b35' : '#cccccc',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                  }}
                >
                  {item.question}
                </h3>
                
                <div 
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300"
                  style={{
                    color: expandedItem === item.question ? '#ff6b35' : '#cccccc'
                  }}
                >
                  {expandedItem === item.question ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div className={`transition-all duration-300 overflow-hidden ${
                expandedItem === item.question ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-2">
                  <p 
                    className="leading-relaxed text-lg"
                    style={{
                      color: '#9ca3af',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
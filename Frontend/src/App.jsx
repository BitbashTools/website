import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import EngagementModelsSection from './components/EngagementModelsSection';
import EmergingTechnologiesSection from './components/EmergingTechnologiesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Add more sections here as we build them */}
      <SuccessStoriesSection />
      <HowWeWorkSection />
      <EngagementModelsSection />
      <EmergingTechnologiesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer/>
    </div>
  );
}

export default App;
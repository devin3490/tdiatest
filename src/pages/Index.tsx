
import React from 'react';
import HeroSection from '../components/HeroSection';
import BrandsSection from '../components/BrandsSection';
import ResultsSection from '../components/ResultsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CaseStudiesCarousel from '../components/CaseStudiesCarousel';
import AdStrategiesSection from '../components/AdStrategiesSection';
import BraggingSection from '../components/BraggingSection';
import EcommerceProblemSection from '../components/EcommerceProblemSection';
import WhatYouGetSection from '../components/WhatYouGetSection';
import ComparisonSection from '../components/ComparisonSection';
import FounderSection from '../components/FounderSection';
import FAQSection from '../components/FAQSection';
import StickyHeader from '../components/StickyHeader';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <StickyHeader />
      <HeroSection />
      <BrandsSection />
      <EcommerceProblemSection />
      <ResultsSection />
      <AdStrategiesSection />
      <TestimonialsSection />
      <CaseStudiesCarousel />
      <BraggingSection />
      <WhatYouGetSection />
      <FounderSection />
      <ComparisonSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

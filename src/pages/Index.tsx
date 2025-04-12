
import React from 'react';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
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

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <StickyHeader />
      <HeroSection />
      <VideoSection />
      <BrandsSection />
      <ResultsSection />
      <TestimonialsSection />
      <CaseStudiesCarousel />
      <AdStrategiesSection />
      <BraggingSection />
      <EcommerceProblemSection />
      <WhatYouGetSection />
      <ComparisonSection />
      <FounderSection />
      <FAQSection />
    </div>
  );
};

export default Index;

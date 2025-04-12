
import React from 'react';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import BrandsSection from '../components/BrandsSection';
import ResultsSection from '../components/ResultsSection';
import AdStrategiesSection from '../components/AdStrategiesSection';
import BraggingSection from '../components/BraggingSection';
import EcommerceProblemSection from '../components/EcommerceProblemSection';
import WhatYouGetSection from '../components/WhatYouGetSection';
import ComparisonSection from '../components/ComparisonSection';
import FounderSection from '../components/FounderSection';
import FAQSection from '../components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <VideoSection />
      <BrandsSection />
      <ResultsSection />
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

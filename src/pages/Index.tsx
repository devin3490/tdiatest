
import React from 'react';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import BrandsSection from '../components/BrandsSection';
import ResultsSection from '../components/ResultsSection';
import BraggingSection from '../components/BraggingSection';
import EcommerceProblemSection from '../components/EcommerceProblemSection';
import WhatYouGetSection from '../components/WhatYouGetSection';
import ComparisonSection from '../components/ComparisonSection';
import FounderSection from '../components/FounderSection';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <VideoSection />
      <BrandsSection />
      <ResultsSection />
      <BraggingSection />
      <EcommerceProblemSection />
      <WhatYouGetSection />
      <ComparisonSection />
      <FounderSection />
    </div>
  );
};

export default Index;

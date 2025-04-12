
import React from 'react';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import BrandsSection from '../components/BrandsSection';
import ResultsSection from '../components/ResultsSection';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <VideoSection />
      <ResultsSection />
      <BrandsSection />
    </div>
  );
};

export default Index;

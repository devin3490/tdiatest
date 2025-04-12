
import React from 'react';
import { Link } from 'react-router-dom';
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
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <nav className="bg-black py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">Agency</div>
          <Link to="/case-studies">
            <Button variant="ghost" className="text-white hover:bg-gray-800">
              Case Studies
            </Button>
          </Link>
        </div>
      </nav>
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

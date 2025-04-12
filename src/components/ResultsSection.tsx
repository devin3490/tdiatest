
import React from 'react';
import { Button } from "@/components/ui/button";
import Card3D from './Card3D';

const ResultsSection: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Main heading with highlight on "Creativity" */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            We Own <span className="text-[#006fff]">Creativity</span> So Your Ads Always Get The Best Results
          </h2>
          <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
            High-converting ads rely on bold, optimized creatives, which is why we design, test, and refine every asset to ensure your ads capture attention and drive sales.
          </p>
        </div>
        
        {/* Platforms we work with logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
          <img src="/lovable-uploads/0a9f5c3a-f32d-4d4d-bb6e-93fdbe7ab21d.png" alt="Facebook Ads" className="h-8 md:h-10" />
          <img src="/lovable-uploads/8b0c8b6b-dcb7-4936-b244-464b838e377d.png" alt="Instagram Ads" className="h-8 md:h-10" />
          <img src="/lovable-uploads/2f423ce1-a0eb-4fe6-9fca-52e98352b921.png" alt="Google Ads" className="h-7 md:h-9" />
          <img src="/lovable-uploads/0a9f5c3a-f32d-4d4d-bb6e-93fdbe7ab21d.png" alt="TikTok Ads" className="h-8 md:h-10" />
        </div>
        
        {/* Results cards grid with 3D effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {/* Card 1 */}
          <Card3D glowColor="rgba(179, 255, 23, 0.2)">
            <div className="rounded-lg overflow-hidden relative bg-pink-200/10 h-full transform-style-preserve-3d">
              <img 
                src="/lovable-uploads/15e81cc9-46f1-4a30-af8a-e4aefeb71f63.png" 
                alt="Woman in black outfit" 
                className="w-full h-52 object-cover translate-z-10"
              />
              <div className="bg-[#006fff] p-3 translate-z-15">
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-white">↑ ROAS by 33%</p>
                  <p className="font-medium text-white">↑ CTR by 14%</p>
                </div>
              </div>
            </div>
          </Card3D>
          
          {/* Card 2 */}
          <Card3D glowColor="rgba(179, 255, 23, 0.2)">
            <div className="rounded-lg overflow-hidden relative bg-pink-200/10 h-full transform-style-preserve-3d">
              <div className="w-full h-52 bg-gray-700 flex items-center justify-center translate-z-10">
                {/* Placeholder for the nail product image */}
                <span className="text-gray-400">Nail Product Image</span>
              </div>
              <div className="bg-[#006fff] p-3 translate-z-15">
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-white">↑ Hook Rate by 85%</p>
                  <p className="font-medium text-white">↓ CPO by 22%</p>
                </div>
              </div>
            </div>
          </Card3D>
          
          {/* Card 3 */}
          <Card3D glowColor="rgba(179, 255, 23, 0.2)">
            <div className="rounded-lg overflow-hidden relative bg-pink-200/10 h-full transform-style-preserve-3d">
              <div className="w-full h-52 bg-gray-700 flex items-center justify-center translate-z-10">
                {/* Placeholder for the product package image */}
                <span className="text-gray-400">Package Image</span>
              </div>
              <div className="bg-[#006fff] p-3 translate-z-15">
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-white">↓ CPA by 30%</p>
                  <p className="font-medium text-white">↑ Hook rate by 280%</p>
                </div>
              </div>
            </div>
          </Card3D>
          
          {/* Card 4 */}
          <Card3D glowColor="rgba(179, 255, 23, 0.2)">
            <div className="rounded-lg overflow-hidden relative bg-pink-200/10 h-full transform-style-preserve-3d">
              <div className="w-full h-52 bg-gray-700 flex items-center justify-center translate-z-10">
                {/* Placeholder for the baby image */}
                <span className="text-gray-400">Baby Image</span>
              </div>
              <div className="bg-[#006fff] p-3 translate-z-15">
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-white">↑ Return customer rate by 91%</p>
                </div>
              </div>
            </div>
          </Card3D>
        </div>
        
        {/* 3 Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="text-center">
            <h3 className="text-7xl font-bold mb-2">1</h3>
            <h4 className="text-xl font-semibold mb-3">Hook, Engage, & Convert</h4>
            <p className="text-gray-300 text-sm">
              Expand your brand's visibility with targeted ad strategies that connect you with the right 
              audience, increasing your reach and driving more qualified leads to your business.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="text-center">
            <h3 className="text-7xl font-bold mb-2">2</h3>
            <h4 className="text-xl font-semibold mb-3">Test, Test, Test Some More</h4>
            <p className="text-gray-300 text-sm">
              Using a structured testing process we continuously iterate on creatives, ensuring every 
              campaign is optimized for peak performance.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="text-center">
            <h3 className="text-7xl font-bold mb-2">3</h3>
            <h4 className="text-xl font-semibold mb-3">Creative + Ad Strategy = Results</h4>
            <p className="text-gray-300 text-sm">
              Combine high-performing creatives with high performance ad strategies to connect with your
              target audience at every stage of the funnel.
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <Button 
            className="text-white font-thin text-lg"
          >
            Book Your Free Discovery Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;

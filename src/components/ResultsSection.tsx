
import React from 'react';
import { Button } from "@/components/ui/button";

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
        
        {/* Results cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {/* Card 1 */}
          <div className="rounded-lg overflow-hidden relative bg-pink-200/10">
            <img 
              src="/lovable-uploads/15e81cc9-46f1-4a30-af8a-e4aefeb71f63.png" 
              alt="Woman in black outfit" 
              className="w-full h-52 object-cover"
            />
            <div className="bg-[#B3FF17] p-3">
              <div className="flex flex-col space-y-1">
                <p className="font-medium">↑ ROAS by 33%</p>
                <p className="font-medium">↑ CTR by 14%</p>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="rounded-lg overflow-hidden relative bg-pink-200/10">
            <div className="w-full h-52 bg-gray-700 flex items-center justify-center">
              {/* Placeholder for the nail product image */}
              <span className="text-gray-400">Nail Product Image</span>
            </div>
            <div className="bg-[#B3FF17] p-3">
              <div className="flex flex-col space-y-1">
                <p className="font-medium">↑ Hook Rate by 85%</p>
                <p className="font-medium">↓ CPO by 22%</p>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="rounded-lg overflow-hidden relative bg-pink-200/10">
            <div className="w-full h-52 bg-gray-700 flex items-center justify-center">
              {/* Placeholder for the product package image */}
              <span className="text-gray-400">Package Image</span>
            </div>
            <div className="bg-[#B3FF17] p-3">
              <div className="flex flex-col space-y-1">
                <p className="font-medium">↓ CPA by 30%</p>
                <p className="font-medium">↑ Hook rate by 280%</p>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="rounded-lg overflow-hidden relative bg-pink-200/10">
            <div className="w-full h-52 bg-gray-700 flex items-center justify-center">
              {/* Placeholder for the baby image */}
              <span className="text-gray-400">Baby Image</span>
            </div>
            <div className="bg-[#B3FF17] p-3">
              <div className="flex flex-col space-y-1">
                <p className="font-medium">↑ Return customer rate by 91%</p>
              </div>
            </div>
          </div>
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
            className="bg-[#006fff] hover:bg-[#0052cc] text-white font-bold py-4 px-8 rounded-full text-lg"
          >
            BOOK YOUR FREE DISCOVERY CALL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;

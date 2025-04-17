
import React from 'react';
import { Button } from "@/components/ui/button";

const AdStrategiesSection: React.FC = () => {
  return (
    <div className="w-full bg-black py-16 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side with image and stats */}
          <div className="relative w-full md:w-1/2 max-w-md mx-auto">
            <div className="bg-[#006FFF] p-6 rounded-3xl">
              <div className="relative">
                {/* Client Logo Badge */}
                
                {/* Main Image */}
                <img 
                  src="/lovable-uploads/f587fe65-cd78-4831-bbb2-d6fc38b0ebb3.png" 
                  alt="Woman relaxing with wine" 
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          {/* Right side with content */}
          <div className="w-full md:w-1/2 mt-20 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Ad Strategies for the Age of Creative Content
            </h2>
            
            <p className="text-gray-300 mb-8">
              Today, more than ever, performance follows great creative. This is how we ensure yours leads the way:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-10">
              {/* Left Column */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-[#006FFF] mr-2">•</span>
                  <div>
                    <p className="text-white font-semibold">Creative-First Approach</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#006FFF] mr-2">•</span>
                  <div>
                    <p className="text-white font-semibold">Data-Driven Decisions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#006FFF] mr-2">•</span>
                  <div>
                    <p className="text-white font-semibold">Funnel-Specific Messaging</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-[#006FFF] mr-2">•</span>
                  <div>
                    <p className="text-white font-semibold">Advanced AI Targeting</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#006FFF] mr-2">•</span>
                  <div>
                    <p className="text-white font-semibold">Optimized Ad Volume</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#006FFF] mr-2">•</span>
                  <div>
                    <p className="text-white font-semibold">Constant Iterative Process</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              className="text-white font-thin text-center"
            >
              Book Your Free Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdStrategiesSection;

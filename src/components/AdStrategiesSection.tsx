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
                <div className="absolute -top-8 left-6 bg-white py-2 px-4 rounded-full z-10 shadow-lg">
                  <p className="font-bold text-xl">CouchHaus</p>
                </div>
                
                {/* Main Image */}
                <img 
                  src="/lovable-uploads/37f86f36-4ad6-44f3-b624-ddd5ead092c0.png" 
                  alt="Woman relaxing with wine" 
                  className="w-full rounded-2xl"
                />
                
                {/* Results Box */}
                <div className="absolute -bottom-10 right-0 bg-white p-4 rounded-xl shadow-lg max-w-[80%]">
                  <p className="font-bold text-xl">ROAS Increase of 27.83%</p>
                  <p className="font-bold text-xl">currently sitting at 10.61X</p>
                  <p className="font-bold text-xl">20.8% YOY Sales Growth</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side with content */}
          <div className="w-full md:w-1/2 mt-20 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ad Strategies Built for Today's Creative-First Landscape
            </h2>
            
            <p className="text-gray-300 mb-8">
              Today, more than ever, you NEED to focus on high-impact creatives to optimize engagement and drive maximum ad performance. This is how we get that done:
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
              className="text-black font-bold text-center"
            >
              BOOK YOUR FREE DISCOVERY CALL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdStrategiesSection;

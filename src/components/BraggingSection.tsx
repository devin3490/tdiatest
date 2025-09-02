import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import CounterValue from './CounterValue';
import Card3D from './Card3D';

const BraggingSection: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            A Quick Glimpse at What’s Possible.
          </h2>
        </div>
        
        {/* Single row of stats with counter animation and 3D effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Stat 1 */}
          <Card3D glowColor="rgba(0, 111, 255, 0.3)">
            <div className="rounded-lg bg-[#006FFF] p-8 text-center text-white h-full transform-style-preserve-3d">
              <div className="transform translate-z-20">
                <CounterValue 
                  value={1.3} 
                  prefix="$" 
                  suffix="M+" 
                  className="text-5xl md:text-6xl font-bold mb-2"
                />
                <p className="text-base md:text-lg">Ad Spend Under Management</p>
              </div>
            </div>
          </Card3D>
          
          {/* Stat 2 */}
          <Card3D glowColor="rgba(0, 111, 255, 0.3)">
            <div className="rounded-lg bg-[#006FFF] p-8 text-center text-white h-full transform-style-preserve-3d">
              <div className="transform translate-z-20">
                <CounterValue 
                  value={6} 
                  suffix="x" 
                  className="text-5xl md:text-6xl font-bold mb-2"
                />
                <p className="text-base md:text-lg">Average Return</p>
              </div>
            </div>
          </Card3D>
          
          {/* Stat 3 */}
          <Card3D glowColor="rgba(0, 111, 255, 0.3)">
            <div className="rounded-lg bg-[#006FFF] p-8 text-center text-white h-full transform-style-preserve-3d">
              <div className="transform translate-z-20">
                <CounterValue 
                  value={7.5} 
                  prefix="$" 
                  suffix="M+" 
                  className="text-5xl md:text-6xl font-bold mb-2"
                />
                <p className="text-base md:text-lg">In Client Revenue Generated</p>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </div>
  );
};

export default BraggingSection;

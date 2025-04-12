import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

const BraggingSection: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Okay...Now We're Bragging
          </h2>
        </div>
        
        {/* Top row of stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Stat 1 */}
          <div className="rounded-lg bg-[#8bfa7b] p-8 text-center text-black">
            <p className="text-5xl md:text-6xl font-bold mb-2">$20M+</p>
            <p className="text-base md:text-lg">Ad Spend Under Management</p>
          </div>
          
          {/* Stat 2 */}
          <div className="rounded-lg bg-[#8bfa7b] p-8 text-center text-black">
            <p className="text-5xl md:text-6xl font-bold mb-2">5x</p>
            <p className="text-base md:text-lg">Average Return</p>
          </div>
          
          {/* Stat 3 */}
          <div className="rounded-lg bg-[#8bfa7b] p-8 text-center text-black">
            <p className="text-5xl md:text-6xl font-bold mb-2">$100M+</p>
            <p className="text-base md:text-lg">In Client Revenue Generated</p>
          </div>
        </div>
        
        {/* Bottom row of stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Stat 4 */}
          <div className="rounded-lg bg-[#8bfa7b] p-8 text-center text-black">
            <p className="text-5xl md:text-6xl font-bold mb-2">50+</p>
            <p className="text-base md:text-lg">Platform Certifications</p>
          </div>
          
          {/* Stat 5 */}
          <div className="rounded-lg bg-[#8bfa7b] p-8 text-center text-black">
            <p className="text-5xl md:text-6xl font-bold mb-2">96%</p>
            <p className="text-base md:text-lg">Customer Retention Rate</p>
          </div>
          
          {/* Stat 6 */}
          <div className="rounded-lg bg-[#8bfa7b] p-8 text-center text-black">
            <p className="text-5xl md:text-6xl font-bold mb-2">71%</p>
            <p className="text-base md:text-lg">Average YoY Revenue Increase</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="bg-[#3944bc] hover:bg-[#313aa0] text-white font-bold py-4 px-8 rounded-full text-lg uppercase shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Free Discovery Call
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-bold px-4 py-2"
              >
                It's time to change your business!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default BraggingSection;

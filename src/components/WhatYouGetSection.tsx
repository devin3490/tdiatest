
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { Card } from "@/components/ui/card";
import ParallaxDots from './ParallaxDots';

const WhatYouGetSection: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-[#0a0a0a] py-20 font-sans relative overflow-hidden">
      <ParallaxDots 
        count={50} 
        colors={['#006FFF', '#3944bc', '#ffde00', '#ffffff']} 
        minSize={2} 
        maxSize={6} 
        className="z-0"
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          What You Get
        </h2>
        

        
        <Card className="max-w-3xl mx-auto border border-[#3944bc]/40 rounded-xl overflow-hidden bg-gradient-to-br from-[#111350] to-[#0a0b25] shadow-lg shadow-[#006FFF]/10">
          <div className="p-8 space-y-6">
            {/* List items with check marks */}
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#006fff] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">Revenue Generating Flows in Under 40 Days</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#006fff] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">
                Access Monthly Support <span className="bg-[#006fff]/90 px-2 text-white text-xs font-bold rounded ml-2">FREE</span>
              </p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#006fff] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">12 – 15 Powerhouse Email Flows</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#006fff] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">Over 40+ Emails/SMS Templates Designed for Your Brand</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#006fff] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">Strategy and Customer Mapping</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#006fff] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">Copy, Design, and Implementation</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#006fff] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">
                Access to General eComm Coaching <span className="bg-[#006fff]/90 px-2 text-white text-xs font-bold rounded ml-2">FREE</span>
              </p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#006fff] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">100% Money Back Guaranteed</p>
            </div>
          </div>
          
          {/* Guarantee section */}
          <div className="mt-6 pb-8 text-center">
            <p className="text-white text-xs uppercase tracking-wider mb-3">ALL BACKED BY A</p>
            <h3 className="text-white md:text-4xl font-bold mb-8">
              <span className="text-[#006fff]">100%</span> Money Back Guarantee
            </h3>
            
            <Button 
              className="text-white font-thin text-sm flex items-center justify-center gap-2 mx-auto"
            >
              <span>⚡</span> Book Your Free Discovery Call <span>⚡</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WhatYouGetSection;

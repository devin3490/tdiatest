
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const WhatYouGetSection: React.FC = () => {
  return (
    <div className="radial-bg w-full py-20 font-sans">
      <div className="container mx-auto max-w-4xl px-4 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          What You Get
        </h2>
        
        <div className="space-y-6">
          {/* List items with check marks */}
          <div className="flex items-center border-b border-blue-800/50 pb-4">
            <Check className="text-[#8bfa7b] mr-3 h-6 w-6 flex-shrink-0" />
            <p className="text-white text-lg">Revenue Generating Flows in Under 40 Days</p>
          </div>
          
          <div className="flex items-center border-b border-blue-800/50 pb-4">
            <Check className="text-[#8bfa7b] mr-3 h-6 w-6 flex-shrink-0" />
            <p className="text-white text-lg">
              Access Monthly Support <span className="bg-[#8bfa7b] px-2 text-black text-xs font-bold rounded ml-2">FREE</span>
            </p>
          </div>
          
          <div className="flex items-center border-b border-blue-800/50 pb-4">
            <Check className="text-[#8bfa7b] mr-3 h-6 w-6 flex-shrink-0" />
            <p className="text-white text-lg">12 – 15 Powerhouse Email Flows</p>
          </div>
          
          <div className="flex items-center border-b border-blue-800/50 pb-4">
            <Check className="text-[#8bfa7b] mr-3 h-6 w-6 flex-shrink-0" />
            <p className="text-white text-lg">Over 40+ Emails/SMS Templates Designed for Your Brand</p>
          </div>
          
          <div className="flex items-center border-b border-blue-800/50 pb-4">
            <Check className="text-[#8bfa7b] mr-3 h-6 w-6 flex-shrink-0" />
            <p className="text-white text-lg">Strategy and Customer Mapping</p>
          </div>
          
          <div className="flex items-center border-b border-blue-800/50 pb-4">
            <Check className="text-[#8bfa7b] mr-3 h-6 w-6 flex-shrink-0" />
            <p className="text-white text-lg">Copy, Design, and Implementation</p>
          </div>
          
          <div className="flex items-center border-b border-blue-800/50 pb-4">
            <Check className="text-[#8bfa7b] mr-3 h-6 w-6 flex-shrink-0" />
            <p className="text-white text-lg">
              Access to General eComm Coaching <span className="bg-[#8bfa7b] px-2 text-black text-xs font-bold rounded ml-2">FREE</span>
            </p>
          </div>
          
          <div className="flex items-center border-b border-blue-800/50 pb-4">
            <Check className="text-[#8bfa7b] mr-3 h-6 w-6 flex-shrink-0" />
            <p className="text-white text-lg">100% Money Back Guaranteed</p>
          </div>
        </div>
        
        {/* Guarantee section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">ALL BACKED BY A</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-[#8bfa7b]">100%</span> Money Back Guarantee
          </h3>
          
          <Button 
            className="bg-[#8bfa7b] hover:bg-[#7ae36c] text-black font-bold py-3 px-6 rounded-md text-lg flex items-center gap-2"
          >
            <span className="mr-1">💡</span> GET BETTER FLOWS <span className="ml-1">💡</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGetSection;

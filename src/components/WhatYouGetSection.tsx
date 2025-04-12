
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { Card } from "@/components/ui/card";

const WhatYouGetSection: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0b1e] py-20 font-sans">
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          What You Get
        </h2>
        
        <Card className="max-w-3xl mx-auto bg-black border border-[#1e2042]/50 rounded-xl overflow-hidden">
          <div className="p-8 space-y-6">
            {/* List items with check marks */}
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#ffde00] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">Revenue Generating Flows in Under 40 Days</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#ffde00] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">
                Access Monthly Support <span className="bg-[#ffde00]/90 px-2 text-black text-xs font-bold rounded ml-2">FREE</span>
              </p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#ffde00] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">12 – 15 Powerhouse Email Flows</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#ffde00] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">Over 40+ Emails/SMS Templates Designed for Your Brand</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#ffde00] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">Strategy and Customer Mapping</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#ffde00] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">Copy, Design, and Implementation</p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#ffde00] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">
                Access to General eComm Coaching <span className="bg-[#ffde00]/90 px-2 text-black text-xs font-bold rounded ml-2">FREE</span>
              </p>
            </div>
            
            <div className="flex items-center border-b border-[#1e2042]/50 pb-4">
              <div className="text-[#ffde00] mr-3">
                <Check className="h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-white text-lg">100% Money Back Guaranteed</p>
            </div>
          </div>
          
          {/* Guarantee section */}
          <div className="mt-6 pb-8 text-center">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">ALL BACKED BY A</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-[#b3ff17]">100%</span> Money Back Guarantee
            </h3>
            
            <Button 
              className="bg-[#006FFF] hover:bg-[#0052cc] text-white font-bold py-3 px-6 rounded-md text-sm flex items-center justify-center gap-2 mx-auto"
            >
              <span>⚡</span> GET BETTER FLOWS <span>⚡</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WhatYouGetSection;

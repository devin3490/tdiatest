import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Bolt } from 'lucide-react';

const EcommerceProblemSection: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0b1a] text-white py-16 font-sans">
      <div className="container mx-auto px-4 mb-16">
        {/* Top section - The eCommerce Problem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              The eCommerce Problem
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Too many brands depend on ads, uninspired email campaigns, or
              weak automations to drive revenue—only to wonder why their results
              fall short. ROAS fluctuates, profits suffer, and growth stalls.
            </p>
            <p className="text-base md:text-lg text-gray-300">
              After working with 200+ brands, we've discovered that properly set up
              email flows are the real key to profitable scaling. Imagine telling your
              brand story effectively without constantly pouring more money into
              ads—what would that do for your bottom line?
            </p>
            <div className="pt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      className="bg-[#3944bc] hover:bg-[#313aa0] text-white font-bold py-3 px-6 rounded-md text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Bolt size={20} /> GET BETTER FLOWS <Bolt size={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-bold px-4 py-2"
                  >
                    It's time to change your email marketing!
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#0a0b1a] rounded-full flex items-center justify-center border border-blue-800 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                
                {/* Orbit elements */}
                <div className="absolute w-64 h-64 rounded-full border border-blue-800 animate-spin" style={{ animationDuration: '15s' }}></div>
                
                {/* Icon boxes on the orbit */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1c3a] p-2 rounded-md border border-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#1a1c3a] p-2 rounded-md border border-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-[#1a1c3a] p-2 rounded-md border border-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#1a1c3a] p-2 rounded-md border border-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4" />
                  </svg>
                </div>

                {/* Dots on the orbit */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#B3FF17] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#B3FF17] rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#B3FF17] rounded-full"></div>
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#B3FF17] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - Your Flows Are Weak */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-[#151638] rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <div className="bg-[#a3ff12] text-black text-xs px-3 py-1 rounded-full font-bold">
                  SEND EMAIL
                </div>
                <div className="flex ml-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full -mr-2 border-2 border-[#151638]"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full -mr-2 border-2 border-[#151638]"></div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center border-2 border-[#151638]">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0d0e26] rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-1">EMAILS DELIVERED</div>
                <div className="text-4xl font-bold">156</div>
                <div className="flex items-center mt-2">
                  <div className="text-red-500 text-sm font-bold">-43%</div>
                  <div className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">↓</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Your Flows Are Weak
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Whether your brand is generating $500K or $100M a year, the problem
              is often the same: basic, ineffective email flows. And no, your standard
              abandon cart sequence isn't enough. What if we told you there are 12-
              15 crucial email automations you're neglecting? That's a ton of money
              left on the table.
            </p>
            <div className="pt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      className="bg-[#3944bc] hover:bg-[#313aa0] text-white font-bold py-3 px-6 rounded-md text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Bolt size={20} /> GET BETTER FLOWS <Bolt size={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-bold px-4 py-2"
                  >
                    It's time to change your email marketing!
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProblemSection;

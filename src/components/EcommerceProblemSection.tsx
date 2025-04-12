
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Database, Users, Search, ZapIcon } from 'lucide-react';

const EcommerceProblemSection: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0b1a] text-white py-16 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top section - The eCommerce Problem */}
        <div className="bg-[#0f1128] rounded-xl p-8 md:p-12 mb-8">
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
                <Button 
                  className="bg-[#3944bc] hover:bg-[#313aa0] text-white font-bold py-3 px-6 rounded-md text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <ZapIcon size={20} /> GET BETTER FLOWS <ZapIcon size={20} />
                </Button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="aspect-square relative">
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#151638] rounded-full flex items-center justify-center border border-blue-800 z-10 shadow-lg shadow-blue-900/20">
                    <ShoppingCart className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                {/* Orbit elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-[#2a2d55] animate-spin" style={{ animationDuration: '20s', animationTimingFunction: 'linear' }}></div>
                </div>
                
                {/* Icon boxes on the orbit */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border border-blue-800">
                  <Users className="h-5 w-5 text-white" />
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#151638] p-2 rounded-md border border-blue-800">
                  <Database className="h-5 w-5 text-white" />
                </div>
                
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border border-blue-800">
                  <Search className="h-5 w-5 text-white" />
                </div>
                
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border border-blue-800">
                  <ZapIcon className="h-5 w-5 text-white" />
                </div>

                {/* Dots on the orbit */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#B3FF17] rounded-full shadow-sm shadow-[#B3FF17]/40"></div>
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#B3FF17] rounded-full shadow-sm shadow-[#B3FF17]/40"></div>
                <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#B3FF17] rounded-full shadow-sm shadow-[#B3FF17]/40"></div>
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#B3FF17] rounded-full shadow-sm shadow-[#B3FF17]/40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Your Flows Are Weak */}
        <div className="bg-[#0f1128] rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              {/* Email metrics box */}
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
                <Button 
                  className="bg-[#3944bc] hover:bg-[#313aa0] text-white font-bold py-3 px-6 rounded-md text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <ZapIcon size={20} /> GET BETTER FLOWS <ZapIcon size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProblemSection;

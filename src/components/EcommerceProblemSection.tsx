
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Database, Users, Search, ZapIcon, Mail } from 'lucide-react';
import { useCounter } from "@/hooks/useCounter";

const EcommerceProblemSection: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);

  // Animate the orbit continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.1) % 360);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-black via-[#0a0b1a] to-black text-white py-16 font-sans relative overflow-hidden">
      {/* Add grid lines in the background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="grid-lines-horizontal"></div>
        <div className="grid-lines-vertical"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Top section - The eCommerce Problem */}
        <div className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-8 md:p-12 mb-8 border border-blue-900/20 relative overflow-hidden">
          {/* Add subtle grid line overlays */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-px w-full bg-blue-500/30 absolute top-1/4"></div>
            <div className="h-px w-full bg-blue-500/30 absolute top-2/4"></div>
            <div className="h-px w-full bg-blue-500/30 absolute top-3/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-1/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-2/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-3/4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold relative">
                The eCommerce Problem
              </h2>
              <p className="text-thin md:text-thin text-white">
                You've tried paid ads. You've launched campaigns. Maybe you even hired an agency.
                But despite all that, your ROAS is inconsistent, your CAC is rising, and your growth feels stuck.
              </p>
              <p className="text-thin md:text-thin text-white">
              At TDIA, we've helped 30+ eCom & B2B brands across North America scale smarter — not louder.
              Our AI-driven strategies and creative testing cut CAC by up to 43% on $3M+ in managed ad spend.
              </p>

              <p className="text-thin md:text-lg text-white">
               If your current strategy isn't delivering the results you want…
               What's it really costing you to keep doing things the same way?
              </p>
              <div className="pt-4">
                <Button 
                  className="text-white font-thin text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  Book Your Free Discovery Call 
                </Button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="aspect-square relative">
                {/* Email metrics box - remplacement de l'animation orbitale */}
                <div className="bg-[#161630] rounded-lg p-6 shadow-md max-w-md mx-auto">
                  {/* En-tête avec bouton Send Email et avatars */}
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center">
                      <Mail size={14} className="mr-1" />
                      SEND EMAIL
                    </div>
                    <div className="flex ml-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full -mr-2 border-2 border-[#161630]"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full -mr-2 border-2 border-[#161630]"></div>
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center border-2 border-[#161630]">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corps avec les emails livrés */}
                  <div className="bg-[#0c0c24] rounded-lg p-4 border border-gray-800">
                    <div className="text-sm text-gray-400 mb-1 text-center">EMAILS DELIVERED</div>
                    <div className="text-4xl font-bold text-white text-center mb-3">
                      {useCounter({
                        end: 156,
                        duration: 2000,
                        decimals: 0,
                      })}
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-red-500 text-sm font-bold">-43%</div>
                      <div className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        ↓
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Your Flows Are Weak */}
        <div className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-8 md:p-12 border border-blue-900/20 relative overflow-hidden">
          {/* Add subtle grid line overlays */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-px w-full bg-blue-500/30 absolute top-1/4"></div>
            <div className="h-px w-full bg-blue-500/30 absolute top-2/4"></div>
            <div className="h-px w-full bg-blue-500/30 absolute top-3/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-1/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-2/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-3/4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              {/* Email metrics box */}
              <div className="bg-[#151638] rounded-lg p-6 max-w-md mx-auto border border-blue-900/30">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">
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
                
                <div className="bg-[#0d0e26] rounded-lg p-4 mt-6 border border-blue-900/20">
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
                Your Creatives Are Holding You Back
              </h2>
              <p className="text-thin md:text-lg text-white">
                Whether you're spending $3K or $300K a month, poor creatives kill performance fast.
                Most brands recycle the same angles and formats, hoping for better ROAS.
                But without fresh UGC, optimized hooks, and structured testing — you're flying blind.
                Want to see what breakthrough ads really look like?
              </p>
              <div className="pt-4">
                <Button 
                  className="text-white font-thin text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  Book Your Free Discovery Call 
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

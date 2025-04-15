import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Database, Users, Search, ZapIcon } from 'lucide-react';

const EcommerceProblemSection: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.1) % 360);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-black via-[#0a0b1a] to-black text-white py-16 font-sans relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="grid-lines-horizontal"></div>
        <div className="grid-lines-vertical"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-8 md:p-12 mb-8 border border-blue-900/20 relative overflow-hidden">
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
                You’ve tried paid ads. You’ve launched campaigns. Maybe you even hired an agency.
                But despite all that, your ROAS is inconsistent, your CAC is rising, and your growth feels stuck.
  
                
              </p>
              <p className="text-thin md:text-thin text-white">
              At TDIA, we’ve helped 30+ eCom & B2B brands across North America scale smarter — not louder.
              Our AI-driven strategies and creative testing cut CAC by up to 43% on $3M+ in managed ad spend.
              </p>

              <p className="text-thin md:text-lg text-white">
               If your current strategy isn’t delivering the results you want…
               What’s it really costing you to keep doing things the same way?
               
              </p>
              <div className="pt-4 flex justify-center md:justify-start">
                <Button 
                  className="text-white font-thin text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  Book Your Free Discovery Call 
                </Button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#151638] rounded-full flex items-center justify-center border border-blue-600/30 z-10 shadow-lg shadow-blue-900/20 animate-pulse">
                    <ShoppingCart className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute w-32 h-32 rounded-full border border-[#006fff]/30 animate-ping opacity-30" style={{animationDuration: '3s'}}></div>
                </div>
                
                <div className="absolute inset-0">
                  <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                    {Array(16).fill(0).map((_, i) => (
                      <div key={i} className="border border-blue-800/10"></div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-[#2a2d55]/50"></div>
                </div>
                
                <div className="absolute inset-0 w-full h-full"
                  style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center center', transition: 'transform 0.1s linear' }}>
                  
                  <div 
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'users' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                    onMouseEnter={() => setHoverIcon('users')}
                    onMouseLeave={() => setHoverIcon(null)}
                  >
                    <Users className={`h-5 w-5 ${hoverIcon === 'users' ? 'text-[#006fff]' : 'text-white'}`} />
                  </div>
                  
                  <div 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'database' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                    onMouseEnter={() => setHoverIcon('database')}
                    onMouseLeave={() => setHoverIcon(null)}
                  >
                    <Database className={`h-5 w-5 ${hoverIcon === 'database' ? 'text-[#006fff]' : 'text-white'}`} />
                  </div>
                  
                  <div 
                    className={`absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'search' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                    onMouseEnter={() => setHoverIcon('search')}
                    onMouseLeave={() => setHoverIcon(null)}
                  >
                    <Search className={`h-5 w-5 ${hoverIcon === 'search' ? 'text-[#006fff]' : 'text-white'}`} />
                  </div>
                  
                  <div 
                    className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'zap' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                    onMouseEnter={() => setHoverIcon('zap')}
                    onMouseLeave={() => setHoverIcon(null)}
                  >
                    <ZapIcon className={`h-5 w-5 ${hoverIcon === 'zap' ? 'text-[#006fff]' : 'text-white'}`} />
                  </div>

                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-8 md:p-12 border border-blue-900/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="h-px w-full bg-blue-500/30 absolute top-1/4"></div>
            <div className="h-px w-full bg-blue-500/30 absolute top-2/4"></div>
            <div className="h-px w-full bg-blue-500/30 absolute top-3/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-1/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-2/4"></div>
            <div className="w-px h-full bg-blue-500/30 absolute left-3/4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Your Creatives Are Holding You Back
              </h2>
              <p className="text-thin md:text-lg text-white">
             Whether you’re spending $3K or $300K a month, poor creatives kill performance fast.
             Most brands recycle the same angles and formats, hoping for better ROAS.
             But without fresh UGC, optimized hooks, and structured testing — you’re flying blind.
             Want to see what breakthrough ads really look like?


              </p>
              <div className="pt-4 flex justify-center md:justify-start">
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

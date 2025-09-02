import React from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';

const ProfitFirstSection = () => {
  return (
    <section className="w-full bg-black py-0 font-sans relative overflow-hidden">
      <ParallaxDots 
        count={50} 
        colors={['#006FFF', '#3944bc', '#ffde00', '#ffffff']} 
        minSize={2} 
        maxSize={6} 
        className="z-0"
      />
      
      <div className="container mx-auto px-4 relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left */}
          <div className="max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 text-left">
              Profit-First Media Buying™
            </h2>
            
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6 text-left">
              From chaotic catalogs to profitable scaling.
            </h3>
            
            <p className="text-white/70 mb-6 text-base lg:text-lg leading-relaxed text-left">
              Most fashion brands collapse because their merchandising is broken — diffuse catalogs, stockouts, and over-reliance on a single hero product make ROAS volatile and budgets unstable.
            </p>

            <p className="text-white font-semibold mb-4 lg:mb-6 text-left">
              Our Profit-First Media Buying™ solves this by:
            </p>

            <ul className="space-y-3 lg:space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/70 text-sm lg:text-base">Aligning ad spend with a 5-pillar assortment strategy (core products, new drops, click-drivers, cross-sells, calculated bets)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/70 text-sm lg:text-base">Using a 3-layer account structure that separates heroes, newcomers, and retargeting</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/70 text-sm lg:text-base">Applying automated rules to protect profit and kill fatigue</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/70 text-sm lg:text-base">Scaling only when margins allow — not on guesswork</span>
              </li>
            </ul>

            <div className="mb-8">
              <Button 
                className="w-full sm:w-auto text-white font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('#/profit-first-media', '_self')}
              >
                Make Media Buying Profitable
              </Button>
            </div>

            <div className="bg-[#8bfa7b]/10 border border-[#8bfa7b]/30 rounded-lg p-4">
              <p className="text-[#8bfa7b] font-medium">
                ✅ Solves pain points: #1, #5, #6, #7, #8, #9, #12
              </p>
            </div>
          </div>

          {/* Visual - Right */}
          <div>
            <div className="w-full h-80 bg-gradient-to-br from-white/5 to-[#006fff]/5 rounded-2xl border border-white/10">
              {/* Empty space for animation */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitFirstSection;
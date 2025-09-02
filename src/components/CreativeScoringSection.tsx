import React from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';

const CreativeScoringSection = () => {
  return (
    <section className="w-full bg-black py-16 lg:py-20 font-sans relative overflow-hidden">
      <ParallaxDots 
        count={50} 
        colors={['#006FFF', '#3944bc', '#ffde00', '#ffffff']} 
        minSize={2} 
        maxSize={6} 
        className="z-0"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Visual - Left */}
          <div className="order-2 lg:order-1">
            <div className="w-full h-80 bg-gradient-to-br from-white/5 to-[#006fff]/5 rounded-2xl border border-white/10">
              {/* Empty space for animation */}
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl lg:max-w-none text-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 text-right">
                Creative Scoring OS™ (incl. Hook Rate First™)
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6 text-right">
                From ad fatigue to fresh creatives that actually scale.
              </h3>
              
              <p className="text-white/70 mb-4 text-base lg:text-lg leading-relaxed text-right">
                Fashion brands burn cash not because they lack ideas — but because they can't refresh creatives fast enough.
              </p>
              
              <div className="text-white/70 mb-6 text-base lg:text-lg leading-relaxed text-right">
                <p className="mb-2">👉 After 2–3 exposures, ads fatigue.</p>
                <p className="mb-2">👉 CPA climbs while CTR drops.</p>
                <p>👉 Without a system, teams keep "launching and praying."</p>
              </div>

              <p className="text-white font-semibold mb-4 lg:mb-6 text-right">
                Our Creative Scoring OS™ fixes that by:
              </p>

              <ul className="space-y-3 lg:space-y-4 mb-8">
                <li className="flex items-start justify-end text-right">
                  <span className="text-white/70 text-sm lg:text-base mr-3">Scoring every ad on Hook Rate, CTR, Hold Rate & ROAS</span>
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 flex-shrink-0"></div>
                </li>
                <li className="flex items-start justify-end text-right">
                  <span className="text-white/70 text-sm lg:text-base mr-3">Flagging fatigued creatives early, before CPA spikes</span>
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 flex-shrink-0"></div>
                </li>
                <li className="flex items-start justify-end text-right">
                  <span className="text-white/70 text-sm lg:text-base mr-3">Showing in 3 colors what to cut, scale, or improve</span>
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 flex-shrink-0"></div>
                </li>
                <li className="flex items-start justify-end text-right">
                  <span className="text-white/70 text-sm lg:text-base mr-3">Hook Rate First™ logic ensures only attention-grabbing ads get budget</span>
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 flex-shrink-0"></div>
                </li>
              </ul>

              <div className="mb-8">
                <Button 
                  className="w-full sm:w-auto text-white font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('#/creative-scoring-os', '_self')}
                >
                  Score Creatives & Scale Winners
                </Button>
              </div>

              <div className="bg-[#8bfa7b]/10 border border-[#8bfa7b]/30 rounded-lg p-4">
                <p className="text-[#8bfa7b] font-medium">
                  ✅ Solves pain points: #4 (Creative cadence), #10, #11, #14
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeScoringSection;
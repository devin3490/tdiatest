import React from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';

const CreativePipelineSection = () => {
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
            <div className="max-w-xl lg:max-w-none text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 text-left">
                Creative Pipeline System™
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6 text-left">
                From one-off campaigns to a creative engine that scales with trends
              </h3>
              
              <p className="text-white/70 mb-6 text-base lg:text-lg leading-relaxed text-left">
                Most fashion brands still rely on guesswork — scattered assortments, overdependence on “hero” pieces, and slow content cycles that can’t keep up with fast-moving trends. The result? Ad fatigue, rising CPAs, and stalled growth.
              </p>

              <p className="text-white font-semibold mb-4 lg:mb-6 text-left">
                With our Creative Pipeline System™, we turn your brand into a continuous creative flow :
              </p>

              <ul className="space-y-3 lg:space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Building a continuous flow of fresh creatives aligned with collections & trends</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Prioritizing winning SKUs and hooks with AI-driven testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Keeping merchandising and marketing in sync on one streamlined board</span>
                </li>
              </ul>

              <div className="mb-8">
                <Button 
                  className="w-full sm:w-auto text-white font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('#/creative-pipeline-demo', '_self')}
                >
                  See the Creative Pipeline in Action
                </Button>
              </div>

              <div className="bg-[#8bfa7b]/10 border border-[#8bfa7b]/30 rounded-lg p-4">
                <p className="text-[#8bfa7b] font-medium">
                  ✅ Solves pain points: #1, #2, #3, #4, #13
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePipelineSection;
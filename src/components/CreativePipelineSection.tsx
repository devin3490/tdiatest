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
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-md h-96">
              {/* Creative Pipeline Flow Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Hub */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#006fff] to-[#3944bc] rounded-full flex items-center justify-center shadow-2xl shadow-[#006fff]/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ffde00] to-[#006fff] rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full animate-ping bg-[#006fff]/30"></div>
                </div>
                
                {/* Orbiting Creative Cards */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={i}
                      className="absolute w-12 h-16 bg-gradient-to-br from-[#006fff]/80 to-[#ffde00]/60 rounded-lg backdrop-blur-sm border border-white/30 shadow-lg"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(${x - 24}px, ${y - 32}px)`,
                        animation: `orbit 12s linear infinite`,
                        animationDelay: `${i * 1.5}s`
                      }}
                    >
                      <div className="w-full h-2 bg-white/20 rounded-t-lg"></div>
                      <div className="p-1.5 space-y-0.5">
                        <div className="w-6 h-0.5 bg-white/40 rounded"></div>
                        <div className="w-4 h-0.5 bg-white/30 rounded"></div>
                        <div className="w-5 h-0.5 bg-white/25 rounded"></div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#006fff]/20 to-[#ffde00]/20 rounded-lg -z-10 animate-pulse"></div>
                    </div>
                  );
                })}
                
                {/* Flowing Lines */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#006fff" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#ffde00" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#8bfa7b" stopOpacity="0.4"/>
                    </linearGradient>
                  </defs>
                  {[...Array(6)].map((_, i) => (
                    <circle
                      key={i}
                      cx="50%"
                      cy="50%"
                      r={60 + i * 20}
                      fill="none"
                      stroke="url(#flowGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,10"
                      opacity={0.3 - i * 0.05}
                      style={{
                        animation: `spin ${8 + i * 2}s linear infinite`,
                        transformOrigin: '50% 50%'
                      }}
                    />
                  ))}
                </svg>
                
                {/* Trend Labels */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#8bfa7b]/20 border border-[#8bfa7b]/40 rounded-full px-3 py-1 backdrop-blur-sm animate-bounce">
                    <span className="text-[#8bfa7b] text-xs font-medium">CREATIVE FLOW</span>
                  </div>
                </div>
              </div>
              
              <style>{`
                @keyframes orbit {
                  from { transform: translate(var(--x), var(--y)) rotate(0deg) translate(120px) rotate(0deg); }
                  to { transform: translate(var(--x), var(--y)) rotate(360deg) translate(120px) rotate(-360deg); }
                }
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
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
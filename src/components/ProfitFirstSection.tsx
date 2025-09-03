import React from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';
import { useIsMobile } from '../hooks/use-mobile';

const ProfitFirstSection = () => {
  const isMobile = useIsMobile();
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
          <div className="flex items-center justify-center">
            {!isMobile && (
              <div className="relative w-full max-w-lg h-96">
              {/* Profit Growth Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* 3D Revenue Chart */}
                <div className="relative w-full h-full">
                  {/* Animated Bars */}
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-end space-x-3">
                    {[2, 4, 3, 6, 5, 8, 7, 10, 9, 12].map((height, i) => (
                      <div key={i} className="relative">
                        <div
                          className="bg-gradient-to-t from-[#006fff] via-[#3944bc] to-[#ffde00] rounded-t-lg shadow-2xl"
                          style={{
                            width: '18px',
                            height: `${height * 12}px`,
                            animation: `growUp ${2 + i * 0.2}s ease-out infinite alternate`,
                            animationDelay: `${i * 0.1}s`,
                            boxShadow: '0 0 20px rgba(0,111,255,0.5)'
                          }}
                        ></div>
                        <div className="absolute -inset-1 bg-gradient-to-t from-[#006fff]/20 to-[#ffde00]/20 rounded-lg blur-sm -z-10"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Floating KPI Cards */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-gradient-to-br from-[#8bfa7b]/30 to-[#8bfa7b]/10 border border-[#8bfa7b]/40 rounded-xl p-4 backdrop-blur-lg shadow-2xl">
                      <div className="text-[#8bfa7b] font-bold text-2xl animate-pulse">+127%</div>
                      <div className="text-white/80 text-sm">Profit Growth</div>
                      <div className="w-12 h-1 bg-[#8bfa7b] rounded-full mt-2 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-20 right-8">
                    <div className="bg-gradient-to-br from-[#ffde00]/30 to-[#ffde00]/10 border border-[#ffde00]/40 rounded-xl p-4 backdrop-blur-lg shadow-2xl">
                      <div className="text-[#ffde00] font-bold text-2xl animate-bounce">6.7x</div>
                      <div className="text-white/80 text-sm">ROAS</div>
                      <div className="w-12 h-1 bg-[#ffde00] rounded-full mt-2 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 right-12">
                    <div className="bg-gradient-to-br from-[#006fff]/30 to-[#006fff]/10 border border-[#006fff]/40 rounded-xl p-4 backdrop-blur-lg shadow-2xl">
                      <div className="text-[#006fff] font-bold text-2xl animate-pulse">€2.4M</div>
                      <div className="text-white/80 text-sm">Revenue</div>
                      <div className="w-12 h-1 bg-[#006fff] rounded-full mt-2 animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* 5-Pillar Strategy Orbits */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {['CORE', 'DROPS', 'DRIVERS', 'CROSS', 'BETS'].map((pillar, i) => {
                      const angle = (i * 72) * Math.PI / 180;
                      const radius = 80;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <div
                          key={i}
                          className="absolute w-16 h-6 bg-gradient-to-r from-[#006fff]/60 to-[#3944bc]/40 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(${x - 32}px, ${y - 12}px)`,
                            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        >
                          <span className="text-white text-xs font-medium">{pillar}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Profit Waves */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible opacity-30">
                    <defs>
                      <radialGradient id="profitGradient">
                        <stop offset="0%" stopColor="#8bfa7b" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#006fff" stopOpacity="0.1"/>
                      </radialGradient>
                    </defs>
                    {[...Array(4)].map((_, i) => (
                      <circle
                        key={i}
                        cx="50%"
                        cy="50%"
                        r={40 + i * 30}
                        fill="none"
                        stroke="url(#profitGradient)"
                        strokeWidth="2"
                        opacity={0.4 - i * 0.1}
                        style={{
                          animation: `expand ${3 + i}s ease-in-out infinite`,
                          transformOrigin: '50% 50%'
                        }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
              
              <style>{`
                @keyframes growUp {
                  0% { transform: scaleY(0.3); opacity: 0.7; }
                  100% { transform: scaleY(1); opacity: 1; }
                }
                @keyframes expand {
                  0%, 100% { transform: scale(1); opacity: 0.4; }
                  50% { transform: scale(1.1); opacity: 0.2; }
                }
                @keyframes float {
                  0%, 100% { transform: translate(var(--x), var(--y)) translateY(0px); }
                  50% { transform: translate(var(--x), var(--y)) translateY(-8px); }
                }
               `}</style>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitFirstSection;
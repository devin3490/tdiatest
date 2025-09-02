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
            <div className="w-full h-80 bg-gradient-to-br from-white/5 to-[#006fff]/5 rounded-2xl border border-white/10 p-6 relative overflow-hidden">
              {/* Creative Scoring Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Scoring Dashboard */}
                  <div className="grid grid-cols-2 gap-4 absolute inset-6">
                    {/* Hook Rate Card */}
                    <div className="bg-black/40 border border-[#8bfa7b]/30 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-[#8bfa7b] text-xs mb-1">Hook Rate</div>
                      <div className="text-white font-bold text-lg animate-pulse">87%</div>
                      <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                        <div 
                          className="bg-[#8bfa7b] h-full rounded-full"
                          style={{ width: '87%' }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* CTR Card */}
                    <div className="bg-black/40 border border-[#ffde00]/30 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-[#ffde00] text-xs mb-1">CTR</div>
                      <div className="text-white font-bold text-lg animate-bounce">4.2%</div>
                      <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                        <div 
                          className="bg-[#ffde00] h-full rounded-full animate-pulse"
                          style={{ width: '84%' }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* ROAS Card */}
                    <div className="bg-black/40 border border-[#006fff]/30 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-[#006fff] text-xs mb-1">ROAS</div>
                      <div className="text-white font-bold text-lg animate-pulse">5.7x</div>
                      <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                        <div 
                          className="bg-[#006fff] h-full rounded-full animate-pulse"
                          style={{ width: '95%' }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="bg-black/40 border border-white/20 rounded-lg p-3 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-[#8bfa7b] rounded-full mx-auto mb-2 animate-pulse flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="text-[#8bfa7b] text-xs font-medium">SCALE</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Score Indicators */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-[#8bfa7b] rounded-full animate-ping"></div>
                      <div className="w-3 h-3 bg-[#ffde00] rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                  
                  {/* Algorithm Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#006fff" stopOpacity="0.8"/>
                        <stop offset="50%" stopColor="#8bfa7b" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#ffde00" stopOpacity="0.4"/>
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20 40 Q 120 20 220 60 Q 280 100 340 40"
                      stroke="url(#scoreGradient)"
                      strokeWidth="1.5"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>
              
              <style>{`
                @keyframes expand {
                  0% { width: 20%; }
                  100% { width: 87%; }
                }
                .expand-animation {
                  animation: expand 3s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl lg:max-w-none text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 text-left">
                Creative Scoring OS™ (incl. Hook Rate First™)
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6 text-left">
                From ad fatigue to fresh creatives that actually scale.
              </h3>
              
              <p className="text-white/70 mb-4 text-base lg:text-lg leading-relaxed text-left">
                Fashion brands burn cash not because they lack ideas — but because they can't refresh creatives fast enough.
              </p>
              
              <div className="text-white/70 mb-6 text-base lg:text-lg leading-relaxed text-left">
                <p className="mb-2">👉 After 2–3 exposures, ads fatigue.</p>
                <p className="mb-2">👉 CPA climbs while CTR drops.</p>
                <p>👉 Without a system, teams keep "launching and praying."</p>
              </div>

              <p className="text-white font-semibold mb-4 lg:mb-6 text-left">
                Our Creative Scoring OS™ fixes that by:
              </p>

              <ul className="space-y-3 lg:space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70 text-sm lg:text-base">Scoring every ad on Hook Rate, CTR, Hold Rate & ROAS</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70 text-sm lg:text-base">Flagging fatigued creatives early, before CPA spikes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70 text-sm lg:text-base">Showing in 3 colors what to cut, scale, or improve</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70 text-sm lg:text-base">Hook Rate First™ logic ensures only attention-grabbing ads get budget</span>
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
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
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg h-96">
              {/* Creative Scoring Dashboard */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Processing Unit */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#006fff]/20 to-[#8bfa7b]/20 rounded-full border-2 border-[#006fff]/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#006fff] to-[#8bfa7b] rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-white font-bold text-lg">AI</span>
                    </div>
                  </div>
                  
                  {/* Rotating Rings */}
                  <div className="absolute inset-0 animate-spin" style={{ animation: 'spin 20s linear infinite' }}>
                    <div className="w-full h-full border-2 border-dashed border-[#ffde00]/40 rounded-full"></div>
                  </div>
                  <div className="absolute inset-2 animate-spin" style={{ animation: 'spin 15s linear infinite reverse' }}>
                    <div className="w-full h-full border border-dashed border-[#8bfa7b]/40 rounded-full"></div>
                  </div>
                </div>
                
                {/* Scoring Metrics Floating Around */}
                {[
                  { label: 'Hook Rate', value: '94%', color: '#8bfa7b', angle: 0 },
                  { label: 'CTR', value: '4.8%', color: '#ffde00', angle: 72 },
                  { label: 'ROAS', value: '6.2x', color: '#006fff', angle: 144 },
                  { label: 'Hold Rate', value: '85%', color: '#ff6b6b', angle: 270 }
                ].map((metric, i) => {
                  const angle = metric.angle * Math.PI / 180;
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={i}
                      className="absolute bg-gradient-to-br from-black/80 to-black/60 border rounded-xl p-3 backdrop-blur-lg shadow-2xl"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(${x - 40}px, ${y - 30}px)`,
                        borderColor: `${metric.color}40`,
                        animation: `orbit ${12 + i * 2}s linear infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    >
                      <div className="text-center">
                        <div 
                          className="font-bold text-lg animate-pulse"
                          style={{ color: metric.color }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-white/60 text-xs">{metric.label}</div>
                      </div>
                      
                      {/* Glowing effect */}
                      <div 
                        className="absolute inset-0 rounded-xl blur-lg -z-10 opacity-50"
                        style={{ backgroundColor: `${metric.color}20` }}
                      ></div>
                    </div>
                  );
                })}
                
                {/* Data Flow Lines */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#006fff" stopOpacity="0.8"/>
                      <stop offset="33%" stopColor="#8bfa7b" stopOpacity="0.6"/>
                      <stop offset="66%" stopColor="#ffde00" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  
                  {[...Array(6)].map((_, i) => (
                    <g key={i}>
                      <circle
                        cx="50%"
                        cy="50%"
                        r={60 + i * 25}
                        fill="none"
                        stroke="url(#dataFlow)"
                        strokeWidth="1"
                        strokeDasharray="8,12"
                        opacity={0.4 - i * 0.05}
                        style={{
                          animation: `spin ${10 + i * 3}s linear infinite`,
                          transformOrigin: '50% 50%'
                        }}
                      />
                    </g>
                  ))}
                </svg>
                
                {/* Status Indicators */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  <div className="w-3 h-3 bg-[#8bfa7b] rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-[#ffde00] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-3 h-3 bg-[#006fff] rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                </div>
                
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#8bfa7b]/20 border border-[#8bfa7b]/40 rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="text-[#8bfa7b] text-sm font-medium animate-pulse">OPTIMIZING</span>
                  </div>
                </div>
              </div>
              
              <style>{`
                @keyframes orbit {
                  from { transform: translate(var(--x), var(--y)) rotate(0deg) translate(140px) rotate(0deg); }
                  to { transform: translate(var(--x), var(--y)) rotate(360deg) translate(140px) rotate(-360deg); }
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
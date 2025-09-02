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
            <div className="relative w-full max-w-4xl h-96">
              {/* Kanban Board Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-[#006fff]/10 rounded-2xl border border-white/10 p-4">
                  
                  {/* Column Headers */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {['IDEA', 'PRODUCTION', 'APPROVED', 'LAUNCH'].map((stage, i) => (
                      <div key={stage} className="text-center">
                        <div className="text-white/80 text-xs font-medium mb-2 px-3 py-1.5 bg-white/10 rounded-full">
                          {stage}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Column Containers */}
                  <div className="grid grid-cols-4 gap-3 h-72 relative">
                    {[0, 1, 2, 3].map((columnIndex) => (
                      <div 
                        key={columnIndex}
                        className="bg-white/5 border border-white/10 rounded-lg p-3 relative"
                      >
                        {/* Column indicator dots */}
                        <div className="absolute top-3 right-3">
                          <div className={`w-2 h-2 rounded-full ${
                            columnIndex === 0 ? 'bg-yellow-400' :
                            columnIndex === 1 ? 'bg-orange-400' :
                            columnIndex === 2 ? 'bg-blue-400' :
                            'bg-green-400'
                          } animate-pulse`}></div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Animated Cards - positioned to stay within columns */}
                    {[
                      { id: 'ugc1', name: 'UGC 1', color: '#8bfa7b', delay: 0 },
                      { id: 'ugc2', name: 'UGC 2', color: '#ffde00', delay: 2.5 },
                      { id: 'static1', name: 'STATIC 1', color: '#006fff', delay: 5 }
                    ].map((card, cardIndex) => (
                      <div
                        key={card.id}
                        className="absolute rounded-lg border border-white/20 backdrop-blur-sm shadow-lg"
                        style={{
                          backgroundColor: `${card.color}20`,
                          borderColor: `${card.color}40`,
                          width: 'calc(25% - 20px)', // Taille adaptée à la colonne
                          height: '60px',
                          animation: `moveCardFixed 10s ease-in-out infinite`,
                          animationDelay: `${card.delay}s`,
                          left: '16px', // Position initiale dans la première colonne
                          top: `${100 + cardIndex * 25}px`,
                        }}
                      >
                        <div className="p-2 text-center h-full flex flex-col justify-center">
                          <div 
                            className="text-xs font-medium mb-1"
                            style={{ color: card.color }}
                          >
                            {card.name}
                          </div>
                          <div className="w-full h-1.5 bg-white/20 rounded-full">
                            <div 
                              className="h-full rounded-full"
                              style={{ 
                                backgroundColor: card.color,
                                animation: `progressFixed 10s ease-in-out infinite`,
                                animationDelay: `${card.delay}s`
                              }}
                            ></div>
                          </div>
                        </div>
                        
                        {/* Glowing effect */}
                        <div 
                          className="absolute inset-0 rounded-lg blur-sm -z-10 animate-pulse"
                          style={{ backgroundColor: `${card.color}15` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Flow Arrows */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                    <defs>
                      <linearGradient id="flowArrow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#006fff" stopOpacity="0.6"/>
                        <stop offset="50%" stopColor="#8bfa7b" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#ffde00" stopOpacity="0.2"/>
                      </linearGradient>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                              refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="url(#flowArrow)" />
                      </marker>
                    </defs>
                    
                    {/* Connecting arrows between columns */}
                    {[0, 1, 2].map((i) => (
                      <line
                        key={i}
                        x1={`${(i + 1) * 25 - 1}%`}
                        y1="55%"
                        x2={`${(i + 2) * 25 - 24}%`}
                        y2="55%"
                        stroke="url(#flowArrow)"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                        markerEnd="url(#arrowhead)"
                        opacity="0.4"
                        style={{
                          animation: `flowAnimation ${3 + i}s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </svg>
                  
                  {/* Pipeline Status */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#006fff]/20 border border-[#006fff]/40 rounded-full px-4 py-2 backdrop-blur-sm">
                      <span className="text-[#006fff] text-sm font-medium animate-pulse">
                        PIPELINE ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <style>{`
                @keyframes moveCardFixed {
                  0%, 15% { 
                    transform: translateX(0px);
                    opacity: 1;
                  }
                  20%, 35% { 
                    transform: translateX(calc(100% + 12px));
                    opacity: 1;
                  }
                  40%, 55% { 
                    transform: translateX(calc(200% + 24px));
                    opacity: 1;
                  }
                  60%, 85% { 
                    transform: translateX(calc(300% + 36px));
                    opacity: 1;
                  }
                  90%, 100% {
                    transform: translateX(calc(300% + 36px));
                    opacity: 0;
                  }
                }
                
                @keyframes progressFixed {
                  0% { width: 15%; }
                  20% { width: 45%; }
                  40% { width: 70%; }
                  60% { width: 90%; }
                  85% { width: 100%; }
                  100% { width: 100%; }
                }
                
                @keyframes flowAnimation {
                  0%, 100% { opacity: 0.2; }
                  50% { opacity: 0.6; }
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
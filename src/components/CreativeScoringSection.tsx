import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';

const CreativeScoringAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tiles = container.querySelectorAll('.scoring-tile');
    const hookGate = container.querySelector('.hook-gate') as HTMLElement;
    const scaleZone = container.querySelector('.scale-zone') as HTMLElement;
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) % 18000; // 18 second cycle
      
      if (elapsed < 6000) {
        // Phase 1: Initial scoring - show mixed results
        tiles.forEach((tile, index) => {
          const element = tile as HTMLElement;
          const scores = ['A', 'C', 'B', 'A', 'C', 'B'];
          const colors = ['#8bfa7b', '#ff6666', '#ffa500', '#8bfa7b', '#ff6666', '#ffa500'];
          
          element.textContent = scores[index] || 'C';
          element.style.backgroundColor = colors[index] || '#ff6666';
          element.style.transform = 'scale(1)';
          element.style.opacity = '1';
        });
        
        if (hookGate) {
          hookGate.style.borderColor = '#666';
          hookGate.style.opacity = '0.7';
        }
        
      } else if (elapsed < 12000) {
        // Phase 2: Hook Rate First filtering
        const progress = (elapsed - 6000) / 6000;
        
        tiles.forEach((tile, index) => {
          const element = tile as HTMLElement;
          const isWinner = index === 0 || index === 3; // A scores
          
          if (isWinner) {
            element.style.opacity = '1';
            element.style.transform = 'scale(1.1)';
            element.style.boxShadow = '0 0 20px rgba(139, 250, 123, 0.8)';
          } else {
            element.style.opacity = `${1 - progress * 0.6}`;
            element.style.transform = 'scale(0.9)';
            element.style.filter = 'blur(1px)';
          }
        });
        
        if (hookGate) {
          hookGate.style.borderColor = progress > 0.5 ? '#8bfa7b' : '#ffa500';
          hookGate.style.opacity = '1';
          hookGate.style.boxShadow = progress > 0.5 ? '0 0 15px rgba(139, 250, 123, 0.6)' : '';
        }
        
      } else {
        // Phase 3: Winners to scale zone
        const progress = (elapsed - 12000) / 6000;
        
        tiles.forEach((tile, index) => {
          const element = tile as HTMLElement;
          const isWinner = index === 0 || index === 3;
          
          if (isWinner) {
            const moveProgress = Math.min(progress * 2, 1);
            element.style.transform = `translateX(${moveProgress * 200}px) scale(1.2)`;
            element.style.opacity = '1';
            element.style.boxShadow = '0 0 25px rgba(139, 250, 123, 1)';
          } else {
            element.style.opacity = '0.3';
            element.style.filter = 'blur(2px)';
          }
        });
        
        if (scaleZone && progress > 0.5) {
          scaleZone.style.backgroundColor = 'rgba(139, 250, 123, 0.2)';
          scaleZone.style.borderColor = '#8bfa7b';
          scaleZone.style.boxShadow = '0 0 20px rgba(139, 250, 123, 0.4)';
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    const shouldAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (shouldAnimate) {
      animate();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-white/5 to-[#006fff]/5 rounded-2xl p-6 overflow-hidden border border-white/10">
      {/* Title */}
      <div className="absolute top-4 left-6 text-white font-bold text-lg">
        Creative Scoring System
      </div>
      
      {/* Scoring Grid - larger tiles */}
      <div className="grid grid-cols-3 gap-4 w-60 mt-12">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="scoring-tile w-16 h-16 rounded-xl text-white text-lg font-bold flex items-center justify-center transition-all duration-1000 bg-[#8bfa7b]"
          >
            A
          </div>
        ))}
      </div>
      
      {/* Hook Rate First Gate - bigger and more prominent */}
      <div className="hook-gate absolute top-28 right-32 w-24 h-32 border-4 border-gray-600 rounded-xl flex flex-col items-center justify-center transition-all duration-1000 opacity-70">
        <div className="text-sm text-white font-bold text-center">
          Hook Rate<br/>First™<br/>Filter
        </div>
      </div>
      
      {/* Scale Zone - larger and more visible */}
      <div ref={containerRef} className="scale-zone absolute top-24 right-4 w-24 h-24 bg-white/5 rounded-xl border-2 border-white/20 p-3 transition-all duration-1000">
        <h4 className="text-sm font-bold text-white text-center">Scale Zone</h4>
        <div className="text-xs text-white/70 text-center mt-1">Winners Only</div>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-6 left-6 text-sm text-white/70">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#8bfa7b] rounded"></div>
            <span>A = Scale</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#ffa500] rounded"></div>
            <span>B = Test</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#ff6666] rounded"></div>
            <span>C = Cut</span>
          </div>
        </div>
      </div>
      
      {/* Process indicator */}
      <div className="absolute bottom-2 right-6 text-xs text-white/50">
        Score → Filter → Scale
      </div>
    </div>
  );
};

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
            <CreativeScoringAnimation />
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl lg:max-w-none">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                Creative Scoring OS™ (incl. Hook Rate First™)
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6">
                From "launch and pray" to scaling only the winners.
              </h3>
              
              <p className="text-white/70 mb-6 text-base lg:text-lg leading-relaxed">
                Scaling the wrong creatives is the fastest way to burn cash. Vanity metrics (likes, impressions) hide the truth.
              </p>

              <p className="text-white font-semibold mb-4 lg:mb-6">
                Our Creative Scoring OS™ changes that:
              </p>

              <ul className="space-y-3 lg:space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Scores every ad on Hook Rate, CTR, Hold Rate & ROAS</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">3-color system shows what to cut, scale, or improve</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Hook Rate First™ logic ensures only attention-grabbing ads get scaled</span>
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
                  ✅ Solves pain points: #10, #11, #14
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
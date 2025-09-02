import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';

const CreativeScoringAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tiles = container.querySelectorAll('.scoring-tile');
    const gate = container.querySelector('.hook-gate') as HTMLElement;
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) % 8000; // 8 second loop
      
      tiles.forEach((tile, index) => {
        const element = tile as HTMLElement;
        const phase = (elapsed + index * 800) % 8000;
        
        // Reset position
        element.style.transform = 'translateX(0)';
        element.style.boxShadow = '';
        
        // Scoring phases
        if (phase < 2000) {
          // Initial scoring
          const scores = ['A', 'C', 'A', 'B'];
          const colors = ['#8bfa7b', '#ff6b6b', '#8bfa7b', '#fad500'];
          element.textContent = scores[index] || 'C';
          element.style.backgroundColor = colors[index] || '#ff6b6b';
        } else if (phase < 4000) {
          // Hook Rate First filtering
          if (index === 0 || index === 2) {
            element.style.opacity = '1';
            if (gate) gate.style.borderColor = '#8bfa7b';
          } else {
            element.style.opacity = '0.3';
            if (gate) gate.style.borderColor = '#ff6b6b';
          }
        } else if (phase < 6000) {
          // Moving winners to scale
          if (index === 0) {
            const progress = (phase - 4000) / 2000;
            element.style.transform = `translateX(${progress * 150}px)`;
            element.style.boxShadow = '0 0 20px rgba(139, 250, 123, 0.8)';
          }
        }
      });
      
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
    <div className="relative w-full h-64 bg-gradient-to-br from-white/10 to-[#006fff]/10 rounded-2xl p-8 overflow-hidden border border-white/20">
      {/* Scoring Grid */}
      <div className="grid grid-cols-2 gap-3 w-32">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`scoring-tile w-12 h-12 rounded-lg text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ${
              index < 2 ? 'bg-[#8bfa7b]' : 'bg-[#ff6b6b]'
            }`}
          >
            {index < 2 ? 'A' : 'C'}
          </div>
        ))}
      </div>
      
      {/* Hook Rate First Gate */}
      <div className="hook-gate absolute top-1/2 left-40 w-16 h-24 border-4 border-[#006fff] rounded-lg flex items-center justify-center transform -translate-y-1/2 transition-all duration-500">
        <div className="text-xs text-white font-semibold text-center">
          Hook<br/>Gate
        </div>
      </div>
      
      {/* Scale Zone */}
      <div ref={containerRef} className="absolute top-8 right-8 w-20 h-16 bg-white/10 rounded-lg border border-white/20 p-2">
        <h4 className="text-xs font-semibold text-white text-center">Scale</h4>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-8 text-xs text-white/70">
        A = Winner • B = Test • C = Cut
      </div>
    </div>
  );
};

const CreativeScoringSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black to-[#0a0a0a] py-16 lg:py-20 font-sans relative overflow-hidden">
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
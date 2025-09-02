import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';

const ProfitFirstAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chaosElements = container.querySelectorAll('.chaos-bar');
    const structureElements = container.querySelectorAll('.structure-layer');
    const rulesElements = container.querySelectorAll('.auto-rule');
    const profitGauge = container.querySelector('.profit-indicator') as HTMLElement;
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) % 16000; // 16 second loop
      
      if (elapsed < 4000) {
        // Phase 1: Chaos - volatile spending
        chaosElements.forEach((element, index) => {
          const el = element as HTMLElement;
          const volatility = Math.sin((elapsed + index * 300) / 200) * 0.5 + 0.5;
          const height = 20 + volatility * 40;
          el.style.height = `${height}px`;
          el.style.backgroundColor = volatility > 0.7 ? '#ff6b6b' : volatility > 0.4 ? '#fad500' : '#ff6b6b';
          el.style.opacity = '1';
        });
        
        // Hide structure during chaos
        structureElements.forEach(el => {
          (el as HTMLElement).style.opacity = '0.3';
        });
        rulesElements.forEach(el => {
          (el as HTMLElement).style.opacity = '0';
        });
        if (profitGauge) {
          profitGauge.style.opacity = '0.3';
          profitGauge.style.backgroundColor = '#ff6b6b';
        }
        
      } else if (elapsed < 8000) {
        // Phase 2: Structure implementation
        const progress = (elapsed - 4000) / 4000;
        
        // Fade out chaos
        chaosElements.forEach(el => {
          (el as HTMLElement).style.opacity = `${1 - progress}`;
        });
        
        // Fade in structure
        structureElements.forEach((el, index) => {
          const delay = index * 0.3;
          const elementProgress = Math.max(0, Math.min(1, (progress - delay) / 0.7));
          (el as HTMLElement).style.opacity = `${elementProgress}`;
          (el as HTMLElement).style.transform = `translateY(${(1 - elementProgress) * 20}px)`;
        });
        
      } else if (elapsed < 12000) {
        // Phase 3: Automated rules activation
        const progress = (elapsed - 8000) / 4000;
        
        chaosElements.forEach(el => {
          (el as HTMLElement).style.opacity = '0';
        });
        
        structureElements.forEach(el => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0px)';
        });
        
        // Activate rules one by one
        rulesElements.forEach((el, index) => {
          const delay = index * 0.25;
          const elementProgress = Math.max(0, Math.min(1, (progress - delay) / 0.5));
          (el as HTMLElement).style.opacity = `${elementProgress}`;
          (el as HTMLElement).style.transform = `scale(${0.8 + elementProgress * 0.2})`;
        });
        
      } else {
        // Phase 4: Profitable scaling
        const progress = (elapsed - 12000) / 4000;
        
        chaosElements.forEach(el => {
          (el as HTMLElement).style.opacity = '0';
        });
        
        structureElements.forEach(el => {
          (el as HTMLElement).style.opacity = '1';
        });
        
        rulesElements.forEach(el => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'scale(1)';
        });
        
        // Profit indicator grows
        if (profitGauge) {
          profitGauge.style.opacity = '1';
          profitGauge.style.backgroundColor = '#8bfa7b';
          profitGauge.style.transform = `scale(${1 + progress * 0.2})`;
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
    <div className="relative w-full h-64 bg-gradient-to-br from-white/10 to-[#006fff]/10 rounded-2xl p-8 overflow-hidden border border-white/20">
      {/* Chaos Phase - Volatile Spending Bars */}
      <div className="absolute top-8 left-8 flex gap-2">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={`chaos-${index}`}
            className="chaos-bar w-4 bg-[#ff6b6b] rounded transition-all duration-300"
            style={{ height: '30px' }}
          />
        ))}
        <div className="ml-2 text-xs text-white/70 self-end">Chaos</div>
      </div>
      
      {/* Structure Phase - 3 Layers */}
      <div className="absolute top-8 left-32 grid grid-cols-3 gap-3 opacity-30">
        <div className="structure-layer bg-white/10 rounded-lg border border-white/20 p-2 w-16 h-12 transition-all duration-500">
          <div className="text-xs text-white font-semibold">L1</div>
          <div className="text-xs text-white/70">Test</div>
        </div>
        <div className="structure-layer bg-white/10 rounded-lg border border-white/20 p-2 w-16 h-12 transition-all duration-500">
          <div className="text-xs text-white font-semibold">L2</div>
          <div className="text-xs text-white/70">Scale</div>
        </div>
        <div className="structure-layer bg-white/10 rounded-lg border border-white/20 p-2 w-16 h-12 transition-all duration-500">
          <div className="text-xs text-white font-semibold">L3</div>
          <div className="text-xs text-white/70">Retain</div>
        </div>
      </div>
      
      {/* Automated Rules */}
      <div className="absolute bottom-16 left-8 flex gap-2">
        {[0, 1, 2].map((index) => (
          <div
            key={`rule-${index}`}
            className="auto-rule w-6 h-6 bg-[#006fff] rounded-full flex items-center justify-center opacity-0 transition-all duration-500"
          >
            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
          </div>
        ))}
        <div className="ml-2 text-xs text-white/70 self-center">Auto Rules</div>
      </div>
      
      {/* Profit Indicator */}
      <div ref={containerRef} className="absolute bottom-8 right-8">
        <div className="profit-indicator w-16 h-8 bg-[#ff6b6b] rounded-lg flex items-center justify-center transition-all duration-500 opacity-30">
          <div className="text-xs text-white font-semibold">PROFIT</div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-2 left-2 text-xs text-white/50">
        Chaos → Structure → Rules → Profit
      </div>
    </div>
  );
};

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
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Profit-First Media Buying™
            </h2>
            
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6">
              From wasted ad spend to profitable scaling.
            </h3>
            
            <p className="text-white/70 mb-6 text-base lg:text-lg leading-relaxed">
              Most eCom accounts collapse into chaos — overspending, no segmentation, volatile ROAS.
            </p>

            <p className="text-white font-semibold mb-4 lg:mb-6">
              Our Profit-First Media Buying™ fixes this with:
            </p>

            <ul className="space-y-3 lg:space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/70">3-layer account structure for clarity</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/70">Automated rules to protect MER/ROAS</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/70">Controlled scaling triggered by profit, not guesswork</span>
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
                ✅ Solves pain points: #5, #6, #7, #8, #9, #12
              </p>
            </div>
          </div>

          {/* Visual - Right */}
          <div>
            <ProfitFirstAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitFirstSection;
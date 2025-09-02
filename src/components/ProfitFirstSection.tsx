import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';

const ProfitFirstAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chaosIndicators = container.querySelectorAll('.chaos-indicator');
    const structureLayers = container.querySelectorAll('.structure-layer');
    const autoRules = container.querySelectorAll('.auto-rule');
    const profitMeter = container.querySelector('.profit-meter') as HTMLElement;
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) % 20000; // 20 second cycle
      
      if (elapsed < 5000) {
        // Phase 1: CHAOS - Volatile spending
        chaosIndicators.forEach((indicator, index) => {
          const el = indicator as HTMLElement;
          const volatility = Math.sin((elapsed + index * 400) / 300) * 0.6 + 0.4;
          el.style.height = `${30 + volatility * 50}px`;
          el.style.backgroundColor = volatility > 0.7 ? '#ff4444' : volatility > 0.4 ? '#ff8800' : '#ff6666';
          el.style.opacity = '1';
        });
        
        structureLayers.forEach(el => (el as HTMLElement).style.opacity = '0.2');
        autoRules.forEach(el => (el as HTMLElement).style.opacity = '0.1');
        
        if (profitMeter) {
          profitMeter.style.width = '20%';
          profitMeter.style.backgroundColor = '#ff4444';
        }
        
      } else if (elapsed < 10000) {
        // Phase 2: STRUCTURE - 3-layer account
        const progress = (elapsed - 5000) / 5000;
        
        chaosIndicators.forEach(el => (el as HTMLElement).style.opacity = `${1 - progress}`);
        
        structureLayers.forEach((el, index) => {
          const delay = index * 0.3;
          const layerProgress = Math.max(0, Math.min(1, (progress - delay) / 0.4));
          (el as HTMLElement).style.opacity = `${0.2 + layerProgress * 0.8}`;
          (el as HTMLElement).style.transform = `translateY(${(1 - layerProgress) * 30}px)`;
        });
        
        if (profitMeter) {
          profitMeter.style.width = `${20 + progress * 30}%`;
          profitMeter.style.backgroundColor = progress > 0.5 ? '#ffa500' : '#ff4444';
        }
        
      } else if (elapsed < 15000) {
        // Phase 3: AUTO RULES - Protection activated
        const progress = (elapsed - 10000) / 5000;
        
        chaosIndicators.forEach(el => (el as HTMLElement).style.opacity = '0');
        structureLayers.forEach(el => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0px)';
        });
        
        autoRules.forEach((el, index) => {
          const delay = index * 0.2;
          const ruleProgress = Math.max(0, Math.min(1, (progress - delay) / 0.3));
          (el as HTMLElement).style.opacity = `${ruleProgress}`;
          (el as HTMLElement).style.transform = `scale(${0.7 + ruleProgress * 0.3})`;
        });
        
        if (profitMeter) {
          profitMeter.style.width = `${50 + progress * 30}%`;
          profitMeter.style.backgroundColor = progress > 0.5 ? '#00aa00' : '#ffa500';
        }
        
      } else {
        // Phase 4: PROFITABLE SCALING
        const progress = (elapsed - 15000) / 5000;
        
        chaosIndicators.forEach(el => (el as HTMLElement).style.opacity = '0');
        structureLayers.forEach(el => (el as HTMLElement).style.opacity = '1');
        autoRules.forEach(el => (el as HTMLElement).style.opacity = '1');
        
        if (profitMeter) {
          profitMeter.style.width = `${80 + progress * 20}%`;
          profitMeter.style.backgroundColor = '#8bfa7b';
          profitMeter.style.boxShadow = `0 0 ${10 + progress * 15}px rgba(139, 250, 123, 0.6)`;
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
        Account Evolution
      </div>
      
      {/* Chaos Phase - Volatile bars */}
      <div className="absolute top-16 left-6 flex items-end gap-2">
        <div className="text-sm text-white/70 mr-2">Chaos:</div>
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={`chaos-${index}`}
            className="chaos-indicator w-6 bg-[#ff4444] rounded-t transition-all duration-300"
            style={{ height: '40px' }}
          />
        ))}
      </div>
      
      {/* Structure Phase - 3 Layers */}
      <div className="absolute top-32 left-6 grid grid-cols-3 gap-4 opacity-20">
        <div className="structure-layer bg-white/15 rounded-lg border border-white/30 p-3 w-20 h-16 transition-all duration-1000">
          <div className="text-sm font-bold text-white">Layer 1</div>
          <div className="text-xs text-white/70">Testing</div>
        </div>
        <div className="structure-layer bg-white/15 rounded-lg border border-white/30 p-3 w-20 h-16 transition-all duration-1000">
          <div className="text-sm font-bold text-white">Layer 2</div>
          <div className="text-xs text-white/70">Scaling</div>
        </div>
        <div className="structure-layer bg-white/15 rounded-lg border border-white/30 p-3 w-20 h-16 transition-all duration-1000">
          <div className="text-sm font-bold text-white">Layer 3</div>
          <div className="text-xs text-white/70">Retarget</div>
        </div>
      </div>
      
      {/* Auto Rules */}
      <div className="absolute bottom-24 left-6 flex items-center gap-3">
        <div className="text-sm text-white/70">Rules:</div>
        {[0, 1, 2].map((index) => (
          <div
            key={`rule-${index}`}
            className="auto-rule w-8 h-8 bg-[#006fff] rounded-full flex items-center justify-center opacity-10 transition-all duration-500"
          >
            <div className="w-4 h-4 border-2 border-white rounded"></div>
          </div>
        ))}
      </div>
      
      {/* Profit Meter */}
      <div ref={containerRef} className="absolute bottom-8 left-6 right-6">
        <div className="text-sm text-white/70 mb-2">Profitability:</div>
        <div className="w-full h-6 bg-white/10 rounded-full overflow-hidden">
          <div className="profit-meter h-full bg-[#ff4444] rounded-full transition-all duration-1000" style={{ width: '20%' }}></div>
        </div>
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
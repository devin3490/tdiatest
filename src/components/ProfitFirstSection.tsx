import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const ProfitFirstAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const streams = container.querySelectorAll('.budget-stream');
    const gauge = container.querySelector('.profit-gauge') as HTMLElement;
    const gaugeNeedle = container.querySelector('.gauge-needle') as HTMLElement;
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) % 6000; // 6 second loop
      
      // Animate budget streams
      streams.forEach((stream, index) => {
        const element = stream as HTMLElement;
        const phase = (elapsed + index * 500) % 3000;
        const progress = phase / 3000;
        
        element.style.opacity = Math.sin(progress * Math.PI * 2) * 0.3 + 0.7 + '';
        element.style.transform = `scaleY(${0.8 + Math.sin(progress * Math.PI * 2) * 0.2})`;
      });
      
      // Animate profit gauge
      if (gauge && gaugeNeedle) {
        const gaugeProgress = Math.sin((elapsed / 6000) * Math.PI * 2) * 0.5 + 0.5;
        const rotation = -90 + gaugeProgress * 180;
        gaugeNeedle.style.transform = `rotate(${rotation}deg)`;
        
        // Change gauge color based on profit level
        if (gaugeProgress > 0.7) {
          gauge.style.borderColor = '#8bfa7b';
          gaugeNeedle.style.backgroundColor = '#8bfa7b';
        } else if (gaugeProgress > 0.4) {
          gauge.style.borderColor = '#fad500';
          gaugeNeedle.style.backgroundColor = '#fad500';
        } else {
          gauge.style.borderColor = '#006fff';
          gaugeNeedle.style.backgroundColor = '#006fff';
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
    <div className="relative w-full h-64 bg-gradient-to-br from-black/5 to-[#006fff]/5 rounded-2xl p-8 overflow-hidden">
      {/* 3-Layer Structure */}
      <div className="grid grid-cols-3 gap-4 h-32">
        <div className="bg-white/20 rounded-lg border border-white/30 p-3 relative">
          <h4 className="text-xs font-semibold text-foreground mb-1">Layer 1</h4>
          <p className="text-xs text-muted-foreground">Testing</p>
          <div className="budget-stream absolute bottom-0 left-1/2 w-2 h-8 bg-[#006fff] rounded-t transform -translate-x-1/2 opacity-70"></div>
        </div>
        <div className="bg-white/20 rounded-lg border border-white/30 p-3 relative">
          <h4 className="text-xs font-semibold text-foreground mb-1">Layer 2</h4>
          <p className="text-xs text-muted-foreground">Scaling</p>
          <div className="budget-stream absolute bottom-0 left-1/2 w-2 h-12 bg-[#006fff] rounded-t transform -translate-x-1/2 opacity-70"></div>
        </div>
        <div className="bg-white/20 rounded-lg border border-white/30 p-3 relative"> 
          <h4 className="text-xs font-semibold text-foreground mb-1">Layer 3</h4>
          <p className="text-xs text-muted-foreground">Retargeting</p>
          <div className="budget-stream absolute bottom-0 left-1/2 w-2 h-6 bg-[#006fff] rounded-t transform -translate-x-1/2 opacity-70"></div>
        </div>
      </div>
      
      {/* Profit Gauge */}
      <div ref={containerRef} className="absolute bottom-8 right-8 w-20 h-20">
        <div className="profit-gauge relative w-full h-full rounded-full border-4 border-[#006fff] bg-white/10">
          <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-[#006fff] transform -translate-x-1/2 origin-bottom gauge-needle transition-all duration-300"></div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-xs text-foreground font-medium mt-1">
            ROAS
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfitFirstSection = () => {
  return (
    <section className="w-full bg-muted py-16 lg:py-20 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Profit-First Media Buying™
            </h2>
            
            <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 lg:mb-6">
              From wasted ad spend to profitable scaling.
            </h3>
            
            <p className="text-muted-foreground mb-6 text-base lg:text-lg leading-relaxed">
              Most eCom accounts collapse into chaos — overspending, no segmentation, volatile ROAS.
            </p>

            <p className="text-foreground font-semibold mb-4 lg:mb-6">
              Our Profit-First Media Buying™ fixes this with:
            </p>

            <ul className="space-y-3 lg:space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">3-layer account structure for clarity</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Automated rules to protect MER/ROAS</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Controlled scaling triggered by profit, not guesswork</span>
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
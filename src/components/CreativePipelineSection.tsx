import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const CreativePipelineAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.pipeline-card');
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) % 8000; // 8 second loop
      
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const phase = (elapsed + index * 1000) % 8000;
        
        // Reset all states
        element.style.transform = 'translateX(0)';
        element.style.opacity = '0.6';
        element.style.boxShadow = '0 2px 8px rgba(0, 111, 255, 0.3)';
        
        // Animation phases
        if (phase < 2000) {
          // Backlog phase
          element.style.opacity = '0.8';
          element.style.boxShadow = '0 2px 8px rgba(0, 111, 255, 0.3)';
        } else if (phase < 4000) {
          // Moving to testing
          const progress = (phase - 2000) / 2000;
          element.style.transform = `translateX(${progress * 120}px)`;
          element.style.opacity = '0.9';
          element.style.boxShadow = '0 2px 8px rgba(0, 111, 255, 0.3)';
        } else if (phase < 6000) {
          // In testing
          element.style.transform = 'translateX(120px)';
          element.style.opacity = '1';
          if (index === 0) {
            element.style.boxShadow = '0 0 20px rgba(0, 111, 255, 0.8)';
          } else {
            element.style.boxShadow = '0 2px 8px rgba(0, 111, 255, 0.3)';
          }
        } else {
          // Moving to approved
          const progress = (phase - 6000) / 2000;
          element.style.transform = `translateX(${120 + progress * 120}px)`;
          element.style.opacity = '0.9';
          element.style.boxShadow = '0 2px 8px rgba(0, 111, 255, 0.3)';
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
    <div className="relative w-full h-64 bg-gradient-to-br from-black/5 to-[#006fff]/5 rounded-2xl p-8 overflow-hidden">
      {/* Pipeline lanes */}
      <div className="absolute inset-8">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="bg-white/20 rounded-lg border border-white/30 p-3">
            <h4 className="text-sm font-semibold text-foreground mb-2">Backlog</h4>
          </div>
          <div className="bg-white/20 rounded-lg border border-white/30 p-3">
            <h4 className="text-sm font-semibold text-foreground mb-2">In Testing</h4>
          </div>
          <div className="bg-white/20 rounded-lg border border-white/30 p-3">
            <h4 className="text-sm font-semibold text-foreground mb-2">Approved</h4>
          </div>
        </div>
        
        {/* Animated cards */}
        <div ref={containerRef} className="absolute top-16 left-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`pipeline-card absolute w-16 h-8 bg-[#006fff] rounded text-white text-xs flex items-center justify-center font-medium transition-all duration-500 ${
                index === 0 ? 'top-0' : index === 1 ? 'top-10' : 'top-20'
              }`}
              style={{ boxShadow: '0 2px 8px rgba(0, 111, 255, 0.3)' }}
            >
              {index === 0 ? 'Hook A' : index === 1 ? 'UGC B' : 'Demo C'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CreativePipelineSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Visual - Left */}
          <div className="order-2 lg:order-1">
            <CreativePipelineAnimation />
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl lg:max-w-none">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
                Creative Pipeline System™
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 lg:mb-6">
                From random creatives to a predictable growth engine.
              </h3>
              
              <p className="text-muted-foreground mb-6 text-base lg:text-lg leading-relaxed">
                Most brands create randomly — no backlog, no cadence, no clarity. That leads to ad fatigue, high CPAs, and stalled growth.
              </p>

              <p className="text-foreground font-semibold mb-4 lg:mb-6">
                With our Creative Pipeline System™, we build a continuous creative flow:
              </p>

              <ul className="space-y-3 lg:space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Backlog of testable ideas across angles, formats & avatars</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">AI-powered prioritization (winning hooks tested first)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Seamless approvals in a Notion-style board</span>
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
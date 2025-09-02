import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import ParallaxDots from './ParallaxDots';

const CreativePipelineAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.pipeline-card');
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) % 15000; // 15 second loop
      
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const phase = (elapsed + index * 3000) % 15000; // Stagger cards by 3 seconds
        
        // Reset states
        element.style.transform = 'translateX(0px)';
        element.style.opacity = '0.9';
        element.style.boxShadow = '0 4px 12px rgba(0, 111, 255, 0.3)';
        element.style.backgroundColor = '#006fff';
        
        if (phase < 3000) {
          // In Backlog
          element.style.transform = 'translateX(0px)';
        } else if (phase < 8000) {
          // Moving to Testing
          const progress = Math.min((phase - 3000) / 2000, 1);
          element.style.transform = `translateX(${progress * 250}px)`;
          if (progress >= 1) {
            element.style.boxShadow = '0 0 25px rgba(0, 111, 255, 0.8)';
            element.style.backgroundColor = '#0052cc';
          }
        } else if (phase < 12000) {
          // Moving to Approved
          const progress = Math.min((phase - 8000) / 2000, 1);
          element.style.transform = `translateX(${250 + progress * 250}px)`;
          if (progress >= 1) {
            element.style.boxShadow = '0 0 25px rgba(139, 250, 123, 0.8)';
            element.style.backgroundColor = '#8bfa7b';
          }
        } else {
          // Reset phase
          element.style.opacity = '0.6';
          element.style.transform = 'translateX(0px)';
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
    <div className="relative w-full h-80 bg-gradient-to-br from-white/5 to-[#006fff]/5 rounded-2xl p-6 overflow-hidden border border-white/10">
      {/* Pipeline lanes - larger and more visible */}
      <div className="grid grid-cols-3 gap-6 h-32 mb-8">
        <div className="bg-white/10 rounded-xl border border-white/20 p-4 flex flex-col">
          <h4 className="text-lg font-bold text-white mb-2">Backlog</h4>
          <p className="text-sm text-white/70">Ideas Queue</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-white/20 p-4 flex flex-col">
          <h4 className="text-lg font-bold text-white mb-2">In Testing</h4>
          <p className="text-sm text-white/70">Active Tests</p>
        </div>
        <div className="bg-white/10 rounded-xl border border-white/20 p-4 flex flex-col">
          <h4 className="text-lg font-bold text-white mb-2">Approved</h4>
          <p className="text-sm text-white/70">Ready to Scale</p>
        </div>
      </div>
      
      {/* Animated cards - bigger and more visible */}
      <div ref={containerRef} className="absolute top-40 left-6">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`pipeline-card absolute w-24 h-12 bg-[#006fff] rounded-lg text-white text-sm font-bold flex items-center justify-center transition-all duration-1000 ${
              index === 0 ? 'top-0' : index === 1 ? 'top-16' : 'top-32'
            }`}
            style={{ 
              boxShadow: '0 4px 12px rgba(0, 111, 255, 0.3)',
              left: '0px'
            }}
          >
            {index === 0 ? 'Hook A' : index === 1 ? 'UGC B' : 'Demo C'}
          </div>
        ))}
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-4 left-6 text-xs text-white/60">
        Pipeline Flow: Ideation → Testing → Scaling
      </div>
    </div>
  );
};

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
          <div className="order-2 lg:order-1">
            <CreativePipelineAnimation />
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl lg:max-w-none">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                Creative Pipeline System™
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6">
                From random creatives to a predictable growth engine.
              </h3>
              
              <p className="text-white/70 mb-6 text-base lg:text-lg leading-relaxed">
                Most brands create randomly — no backlog, no cadence, no clarity. That leads to ad fatigue, high CPAs, and stalled growth.
              </p>

              <p className="text-white font-semibold mb-4 lg:mb-6">
                With our Creative Pipeline System™, we build a continuous creative flow:
              </p>

              <ul className="space-y-3 lg:space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Backlog of testable ideas across angles, formats & avatars</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">AI-powered prioritization (winning hooks tested first)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#006fff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Seamless approvals in a Notion-style board</span>
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

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Play, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useIsMobile();

  const playVideo = () => {
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className="w-full flex flex-col items-center justify-center px-4 py-8 font-sans relative"
      style={{
        background: `linear-gradient(180deg, #000000 0%, #003366 50%, #000000 100%)`,
        minHeight: isMobile ? 'auto' : '100vh',
      }}
    >
      {/* Background gradients and effects */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(0, 111, 255, 0.3) 0%, transparent 70%)`,
          opacity: 0.8
        }}
      ></div>
      
      <div className="container mx-auto z-10 flex flex-col items-center">
        {/* Brand logo */}
        <div className="mb-8 flex items-center">
          <img 
            src="/lovable-uploads/a8d9986c-a98c-40ad-8122-b00d1cb73edb.png" 
            alt="class.a" 
            className="h-16" 
          />
        </div>
        
        {/* ATTN header */}
        <div className="mb-6 w-full text-center">
          <div className="bg-[#222222]/50 px-6 py-2 rounded-full inline-block">
            <p className="text-white uppercase tracking-wider font-semibold text-sm">
              ATTN: ECOMMERCE FOUNDERS
            </p>
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-5xl mx-auto mb-6 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-2">
            Your eComm Email Flows Are <span className="inline-block">💩 —</span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#b3ff00] leading-tight tracking-tight mb-2">
            We'll Build 12-15 Custom Revenue Boosting Flows in 30 Days.
          </h2>
          <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Results Guaranteed — Or You Don't Pay a Dime.
          </div>
        </div>

        {/* Logos section */}
        <div className="w-full mb-10 grid grid-cols-3 gap-4 justify-items-center">
          <img src="/lovable-uploads/c88f347d-3800-4312-be98-31ba7f554896.png" alt="shopify" className="h-12 md:h-16 object-contain" />
          <img src="/lovable-uploads/3e49c3b6-3afa-47ca-90fd-cced42929b24.png" alt="klaviyo" className="h-12 md:h-16 object-contain" />
          <img src="/lovable-uploads/0a46aa8c-913d-4b03-8ef8-3dbab100473f.png" alt="attentive" className="h-12 md:h-16 object-contain" />
          <img src="/lovable-uploads/60429fd4-b1d4-4da3-9bc4-dde2e4ef6708.png" alt="bigcommerce" className="h-12 md:h-16 object-contain" />
          <img src="/lovable-uploads/9eee0582-65db-43e5-8471-eea5b47edf35.png" alt="woocommerce" className="h-12 md:h-16 object-contain" />
          <img src="/lovable-uploads/83387c98-8746-47f1-8cb1-00fb5e0953e2.png" alt="magento" className="h-12 md:h-16 object-contain" />
        </div>

        {/* Trust proof section */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <span className="text-white font-medium text-base">Trusted by Over 200+ Shopify Brands</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} className="h-4 w-4 text-[#b3ff00] fill-[#b3ff00]" />
              ))}
            </div>
          </div>
          <p className="text-[#b3ff00] font-bold text-base">
            Over $150M in Flow Revenue (P.S: We Only Build Flows - Specialists of the Art)
          </p>
        </div>

        {/* Step 1 video section */}
        <div className="text-center w-full mb-6">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-[#0066ff]">Step 1:</span> <span className="text-white">Watch The Video Below</span>
          </h3>
        </div>

        {/* 100% money back banner */}
        <div className="text-center mb-6 w-full bg-[#0066ff]/20 py-3 rounded-md">
          <p className="text-white uppercase tracking-wider font-bold text-base">
            100% MONEY BACK GUARANTEED
          </p>
        </div>

        {/* Video placeholder */}
        <div className="w-full mb-6 relative rounded-lg overflow-hidden shadow-2xl bg-gray-800">
          <div className="w-full aspect-video flex items-center justify-center text-white">
            Video Placeholder
          </div>
          <button 
            className="absolute left-4 bottom-4 bg-[#0066ff] hover:bg-[#0052cc] text-white p-3 rounded-full play-button-pulse"
            aria-label="Play video"
            onClick={playVideo}
          >
            <Play className="h-6 w-6" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="bg-[#0066ff] text-white font-bold text-lg px-8 py-6 rounded-md shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full"
                >
                  Book Your Free Discovery Call 
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-normal px-4 py-2"
              >
                It's time to have real ROI!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {isPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-[#0066ff]"
              onClick={closeVideo}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;

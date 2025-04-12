
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

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 lg:py-16 font-sans relative"
      style={{
        background: `radial-gradient(circle at center, rgba(0, 111, 255, 0.7) 0%, rgb(0, 0, 0) 70%)`
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black w-full"></div>
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, rgba(0, 111, 255, 0.3) 0%, transparent 40%),
            radial-gradient(circle at center, rgba(0, 111, 255, 0.2) 0%, transparent 60%),
            linear-gradient(45deg, transparent 98%, rgba(255, 255, 255, 0.1) 99%, transparent 100%),
            linear-gradient(135deg, transparent 97%, rgba(255, 255, 255, 0.1) 98%, transparent 100%),
            linear-gradient(225deg, transparent 96%, rgba(255, 255, 255, 0.15) 97%, transparent 100%),
            linear-gradient(315deg, transparent 95%, rgba(255, 255, 255, 0.1) 96%, transparent 100%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 50px 50px, 60px 60px, 70px 70px, 80px 80px',
          opacity: 0.8
        }}
      ></div>
      
      <div className="container mx-auto z-10">
        
        <div className="mb-6">
          <div className="bg-opacity-20 bg-white px-6 py-2 rounded-full inline-block">
            <p className="text-white uppercase tracking-wider font-medium text-sm">
              ATTN: ECOMMERCE FOUNDERS
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight" 
              style={{
                WebkitTextStroke: '1px', 
                WebkitTextStrokeColor: 'transparent',
                WebkitTextFillColor: 'white',
                background: 'linear-gradient(to right, #000000, #006fff)',
                WebkitBackgroundClip: 'text',
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 4px rgba(0, 111, 255, 0.5)'
              }}
          >
            Your Ads Aren't Broken — They're Just Untapped Potential. We Unlock It in 30 Days.
          </h1>
          <div className="mt-2 text-3xl md:text-4xl lg:text-6xl font-bold text-[#fad500] leading-tight tracking-tight">
            Results Guaranteed — Or You Don't Pay a Dime.
          </div>
        </div>

        <div className="mb-8 brand-logos flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f089d11c59b02d40d9e18e317e8a8a982cb45d8ce3c0575ba7f2b2c98a7208a?apiKey=null&" alt="attentive" className="h-5 md:h-6" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2e1a938e5a956776f2aa1810cf5d697e2596fe9997cb309c7b0c92728fb767?apiKey=null&" alt="shopify" className="h-5 md:h-6" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/181e328673ffc0498c92ffa9cee7c547e1c468bd1b12d524f01db16d76a4ba1c?apiKey=null&" alt="klaviyo" className="h-5 md:h-6" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/97f0e5629fce9f464d238379ede8ed37374eb3196c5ae0821e262e2267ff3df4?apiKey=null&" alt="bigcommerce" className="h-5 md:h-6" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/804d31e8abf3a0af5392a37a0599349c8e6c2b286863262f34e3b22a9908f28e?apiKey=null&" alt="woocommerce" className="h-5 md:h-6" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f739e679054692185f80ab69d5df2af3dbb65256d5edc6fc2a6ba1f1ef5abb?apiKey=null&" alt="magento" className="h-5 md:h-6" />
        </div>

        <div className="mb-10 text-center">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <span className="text-white font-medium text-sm md:text-base">Trusted by Over 200+ Shopify Brands</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} className="h-3 w-3 md:h-4 md:w-4 text-[#fad500] fill-[#8B0000]" />
              ))}
            </div>
          </div>
          <p className="text-[#fad500] font-bold text-sm md:text-base">
            Over $3M in Ads Revenue (P.S: We Only Create and Optimize Ads)
          </p>
        </div>

        <div className="text-center mb-6">
          <div className="bg-[#111827] inline-block px-6 py-2 rounded-md border border-[#006FFF]/20">
            <p className="text-white uppercase tracking-wider font-normal text-sm">
              100% MONEY BACK GUARANTEED
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-10 relative rounded-lg overflow-hidden shadow-2xl bg-gray-800">
          <div className="w-full h-[400px] flex items-center justify-center text-white">
            Video Placeholder
          </div>
          <button 
            className="absolute left-4 bottom-4 bg-[#006FFF] hover:bg-[#0052cc] text-black p-3 rounded-full play-button-pulse"
            aria-label="Play video"
            onClick={playVideo}
          >
            <Play className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="bg-[#3944bc] hover:bg-[#313aa0] text-white font-normal py-4 px-8 rounded-lg text-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Book Your Free Discovery Call 
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-normal px-4 py-2"
              >
                It's time to have a reel ROI!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {isPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-[#006FFF]"
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

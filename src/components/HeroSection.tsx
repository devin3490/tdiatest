
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
    <div className="radial-bg w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 lg:py-24 font-sans">
      <div className="container mx-auto z-10">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/1b81247b-025c-40ca-beca-4f195a7d8189.png" 
            alt="classe.a logo" 
            className="h-10 mx-auto"
          />
        </div>

        {/* Target audience label */}
        <div className="mb-10">
          <div className="bg-opacity-20 bg-white px-6 py-2 rounded-full inline-block">
            <p className="text-white uppercase tracking-wider font-medium text-sm">
              ATTN: ECOMMERCE FOUNDERS
            </p>
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-6xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Your eComm Email Flows Are <span className="inline-flex items-center">💩 <span className="mx-2">—</span></span> 
            <span className="text-[#8bfa7b]">We'll Build 12–15 Custom Revenue Boosting Flows in 30 Days.</span>
          </h1>
          <div className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Results Guaranteed — Or You Don't Pay a Dime.
          </div>
        </div>

        {/* Video container */}
        <div className="max-w-4xl mx-auto my-12 relative rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="/lovable-uploads/86ce686e-a76d-473a-b356-ed4acedb6c6f.png" 
            alt="Video thumbnail" 
            className="w-full h-auto rounded-lg"
          />
          <button 
            className="absolute left-4 bottom-4 bg-[#8bfa7b] hover:bg-[#7ae36c] text-black p-3 rounded-full play-button-pulse"
            aria-label="Play video"
            onClick={playVideo}
          >
            <Play className="h-6 w-6" />
          </button>
        </div>

        {/* Guarantee badge */}
        <div className="text-center mb-6">
          <div className="bg-[#111827] inline-block px-6 py-2 rounded-md border border-[#8bfa7b]/20">
            <p className="text-white uppercase tracking-wider font-normal text-sm">
              100% MONEY BACK GUARANTEED
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="bg-[#3944bc] hover:bg-[#313aa0] text-white font-normal py-4 px-8 rounded-lg text-lg uppercase shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  👉 UPGRADE MY EMAIL FLOWS HERE 👈
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-normal px-4 py-2"
              >
                It's time to change your email marketing!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Partner logos */}
        <div className="mt-20 brand-logos flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f089d11c59b02d40d9e18e317e8a8a982cb45d8ce3c0575ba7f2b2c98a7208a?apiKey=null&" alt="attentive" className="h-6 md:h-8" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2e1a938e5a956776f2aa1810cf5d697e2596fe9997cb309c7b0c92728fb767?apiKey=null&" alt="shopify" className="h-6 md:h-8" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/181e328673ffc0498c92ffa9cee7c547e1c468bd1b12d524f01db16d76a4ba1c?apiKey=null&" alt="klaviyo" className="h-6 md:h-8" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/97f0e5629fce9f464d238379ede8ed37374eb3196c5ae0821e262e2267ff3df4?apiKey=null&" alt="bigcommerce" className="h-6 md:h-8" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/804d31e8abf3a0af5392a37a0599349c8e6c2b286863262f34e3b22a9908f28e?apiKey=null&" alt="woocommerce" className="h-6 md:h-8" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f739e679054692185f80ab69d5df2af3dbb65256d5edc6fc2a6ba1f1ef5abb?apiKey=null&" alt="magento" className="h-6 md:h-8" />
        </div>

        {/* Social proof */}
        <div className="mt-10 text-center">
          <div className="flex items-center justify-center space-x-1 mb-3">
            <span className="text-white font-medium">Trusted by Over 200+ Shopify Brands</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} className="h-4 w-4 text-[#8bfa7b] fill-[#8bfa7b]" />
              ))}
            </div>
          </div>
          <p className="text-[#8bfa7b] font-medium">
            Over $150M in Flow Revenue (P.S: We Only Build Flows - Specialists of the Art!)
          </p>
        </div>
      </div>

      {/* Video modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-[#8bfa7b]"
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

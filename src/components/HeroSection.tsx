import React, { useState } from 'react';
import { Star, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Youtube, Instagram, Video, X } from 'lucide-react';

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
        background: `radial-gradient(circle at center, rgba(0, 111, 255, 0.7) 0%, rgb(0, 0, 0) 90%)`
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
            <p className="text-white uppercase tracking-wider font-thin text-sm">
              ATTN: ECOMMERCE FOUNDERS
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            It's Not the Platform. It's the Strategy. Outsmart Big Brands with Smarter Ads That Actually Sell.
          </h1>
          <div className="mt-2 text-1xl md:text-1xl lg:text-2xl font-bold text-[#fad500] leading-tight tracking-tight">
            Scale Your Brand in 30 Days — Or You Don't Pay a Dime.
          </div>
        </div>

        <div className="mb-10 brand-logos flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <img src="/lovable-uploads/c88f347d-3800-4312-be98-31ba7f554896.png" alt="shopify" className="h-24 md:h-20" />
          <img src="/lovable-uploads/8b0c8b6b-dcb7-4936-b244-464b838e377d.png" alt="Instagram Ads" className="h-24 md:h-20" />
          <img src="/lovable-uploads/3e49c3b6-3afa-47ca-90fd-cced42929b24.png" alt="klaviyo" className="h-24 md:h-20" />
          <img src="/lovable-uploads/60429fd4-b1d4-4da3-9bc4-dde2e4ef6708.png" alt="bigcommerce" className="h-24 md:h-20" />
          <img src="/lovable-uploads/9eee0582-65db-43e5-8471-eea5b47edf35.png" alt="woocommerce" className="h-24 md:h-20" />
          <img src="/lovable-uploads/83387c98-8746-47f1-8cb1-00fb5e0953e2.png" alt="magento" className="h-24 md:h-20" />
        </div>

        <div className="mb-6 text-center">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <span className="text-white font-medium text-sm md:text-base">Trusted by Over 30+ Brands</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} className="h-3 w-3 md:h-4 md:w-4 text-[#fad500] fill-[#fad500]" />
              ))}
            </div>
          </div>
          <p className="text-[#fad500] font-bold text-sm md:text-base">
            Over $3M in Ads Revenue (we make your competitors wonder where all their customers went)
          </p>
        </div>

        <div className="text-center mb-6">
          <div className="bg-black inline-block px-6 py-2 rounded-md">
            <p className="text-white uppercase tracking-wider font-semibold text-sm">
              100% MONEY BACK GUARANTEED
            </p>
          </div>
        </div>

        <div 
          className="max-w-4xl mx-auto mb-10 relative rounded-lg overflow-hidden shadow-2xl cursor-pointer bg-gray-800"
          onClick={playVideo}
        >
          <button 
            className="absolute left-4 bottom-4 bg-[#006FFF] hover:bg-[#0052cc] text-white p-3 rounded-full play-button-pulse z-10"
            aria-label="Play video"
          >
            <Play className="h-6 w-6" />
          </button>

          <img 
            src="/lovable-uploads/8e270e3f-1038-4214-b431-75a3f1e37aa4.png" 
            alt="x6 ROAS Video testimonial" 
            className="w-full h-auto"
          />

          <div className="absolute left-4 bottom-16 flex space-x-2">
            <button className="bg-[#0066ff] p-2 rounded-full text-white">
              <Youtube className="h-5 w-5" />
            </button>
            <button className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full text-white">
              <Instagram className="h-5 w-5" />
            </button>
            <button className="bg-black p-2 rounded-full text-white">
              <Video className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="text-white font-thin text-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto px-8"
                > Book Your Free Discovery Call 
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-normal px-4 py-2"
              >
                It's time to have a real ROI!
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

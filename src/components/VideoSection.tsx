
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Play, X } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className="w-full py-16 font-sans relative" 
      style={{
        background: `radial-gradient(circle at center, rgba(0, 111, 255, 0.7) 0%, rgb(3, 4, 10) 70%)`
      }}
    >
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
      
      <div className="container mx-auto z-10 px-4 relative">
        {/* Step title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-normal">
            <span className="text-[#006FFF]">Step 1:</span> 
            <span className="text-white ml-2">Watch The Video Below</span>
          </h2>
        </div>
        
        {/* Ad Platform logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
          <img src="/lovable-uploads/0a9f5c3a-f32d-4d4d-bb6e-93fdbe7ab21d.png" alt="Facebook Ads" className="h-8 md:h-10" />
          <img src="/lovable-uploads/8b0c8b6b-dcb7-4936-b244-464b838e377d.png" alt="Instagram Ads" className="h-8 md:h-10" />
          <img src="/lovable-uploads/2f423ce1-a0eb-4fe6-9fca-52e98352b921.png" alt="Google Ads" className="h-7 md:h-9" />
        </div>
        
        {/* Guarantee badge - ALREADY ABOVE VIDEO */}
        <div className="text-center mb-6">
          <div className="bg-[#111827] inline-block px-6 py-2 rounded-md border border-[#006FFF]/20">
            <p className="text-white uppercase tracking-wider font-normal text-sm">
              100% MONEY BACK GUARANTEED
            </p>
          </div>
        </div>
        
        {/* Video container */}
        <div 
          className="max-w-4xl mx-auto mb-12 relative rounded-lg overflow-hidden shadow-2xl cursor-pointer transition-transform hover:scale-[1.01] hover:shadow-blue-500/20" 
          onClick={playVideo}
        >
          <img 
            src="/lovable-uploads/86ce686e-a76d-473a-b356-ed4acedb6c6f.png" 
            alt="Video thumbnail" 
            className="w-full h-auto rounded-lg"
          />
          <button 
            className="absolute left-4 bottom-4 bg-[#006FFF] hover:bg-[#0052cc] text-white p-3 rounded-full play-button-pulse"
            aria-label="Play video"
          >
            <Play className="h-6 w-6" />
          </button>
        </div>
        
        {/* CTA button */}
        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="text-white font-normal text-lg uppercase shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Free Discovery Call
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-normal px-4 py-2"
              >
                It's time to change your advertising!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Video modal */}
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
                src="https://www.youtube.com/embed/nPoN4ydzHmY?autoplay=1" 
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

export default VideoSection;

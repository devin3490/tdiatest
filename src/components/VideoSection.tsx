
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
    <div className="radial-bg w-full py-16 font-sans">
      <div className="container mx-auto z-10 px-4">
        {/* Step title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-normal">
            <span className="text-[#8bfa7b]">Step 1:</span> 
            <span className="text-white ml-2">Watch The Video Below</span>
          </h2>
        </div>
        
        {/* Guarantee badge */}
        <div className="text-center mb-6">
          <div className="bg-[#111827] inline-block px-6 py-2 rounded-md border border-[#8bfa7b]/20">
            <p className="text-white uppercase tracking-wider font-normal text-sm">
              100% MONEY BACK GUARANTEED
            </p>
          </div>
        </div>
        
        {/* Video container */}
        <div className="max-w-4xl mx-auto mb-12 relative rounded-lg overflow-hidden shadow-2xl">
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

export default VideoSection;

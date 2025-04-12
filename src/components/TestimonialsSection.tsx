
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import ParallaxDots from './ParallaxDots';

const TestimonialsSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full bg-black text-white py-16 font-sans relative overflow-hidden">
      <ParallaxDots 
        count={40} 
        colors={['#006fff', '#3944bc', '#ffde00']} 
        minSize={2} 
        maxSize={7} 
        className="z-0 opacity-70"
      />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Premier témoignage - côtés inversés */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          {/* Texte maintenant à gauche */}
          <div className="flex flex-col space-y-4 order-2 md:order-1">
            {/* Stars now above the title with better spacing */}
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-[#006FFF] text-2xl">★</span>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Mike Loved It, and<br />So Will You</h2>
            <p className="text-gray-300">
              The moment we activated the email flows for our client Mike, 
              the results were immediate. He witnessed a compounding 
              effect that positively impacted his bottom line, day in and day out.
            </p>
            <div className="pt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      className="bg-[#3944bc] hover:bg-[#313aa0] text-white font-bold py-2 px-6 rounded-lg text-sm shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                    >
                      👉 UPGRADE MY EMAIL FLOWS HERE 👈
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-bold px-4 py-2"
                  >
                    It's time to change your email marketing!
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          {/* Vidéo maintenant à droite - sans les cercles */}
          <div className="relative rounded-lg overflow-hidden bg-[#0c1533] p-4 order-1 md:order-2">
            <div className="relative">
              <div className="w-full aspect-video flex items-center justify-center relative overflow-hidden rounded-lg">
                {/* Video thumbnail */}
                <img 
                  src="/lovable-uploads/7663611f-941b-485c-937f-b000270c6de8.png" 
                  alt="Mike testimonial" 
                  className="w-full rounded-lg"
                />
                
                {/* Simplified overlay for video thumbnail - no orbit diagram */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  {/* Play button with pulsing effect */}
                  <div className="relative">
                    <button 
                      className="bg-[#006FFF] hover:bg-[#0052cc] text-white p-4 rounded-full transform transition-transform hover:scale-110"
                      onClick={() => setShowVideo(true)}
                    >
                      <Play className="h-6 w-6" />
                    </button>
                    {/* Pulsing effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#006FFF] animate-ping opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-[#006FFF]"
              onClick={() => setShowVideo(false)}
            >
              <span className="text-2xl">×</span>
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

export default TestimonialsSection;

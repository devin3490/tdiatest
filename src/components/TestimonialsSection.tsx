
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-16 font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Premier témoignage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div className="relative rounded-lg overflow-hidden bg-[#0c1533] p-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/7663611f-941b-485c-937f-b000270c6de8.png" 
                alt="Mike testimonial" 
                className="w-full rounded-lg"
              />
              <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#8bfa7b] hover:bg-[#7ae36c] text-black p-3 rounded-full">
                <Play className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-[#8bfa7b] text-xl">★</span>
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
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;



import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

const BrandsSection: React.FC = () => {
  return (
    <div className="bg-black w-full py-16 font-sans">
      <div className="container mx-auto z-10 px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-white uppercase tracking-wide">
            Brands We've Worked With
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto mb-14 grid grid-cols-3 gap-4">
          {/* Logo 1 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/2319dd84-1e89-423c-a0a0-b5b1aa35fbfc.png" 
              alt="Roots" 
              className="h-20 w-auto object-contain"
            />
          </div>
          
          {/* Logo 2 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/a0aeafca-5f60-4f36-a3ae-7528670fff29.png" 
              alt="Cafexo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          {/* Logo 3 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/9922aec5-4675-44c1-afa3-5e2bf6015540.png" 
              alt="Mille Et Une Noix" 
              className="h-20 w-auto object-contain"
            />
          </div>
          
          {/* Logo 4 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/904c80ac-429d-4660-88d4-4c35f39ca98a.png" 
              alt="Lockfeet" 
              className="h-14 w-auto object-contain"
            />
          </div>
          
          {/* Logo 5 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/037e2fbd-db6d-4ba7-b394-d8400d309c3d.png" 
              alt="Ika" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          {/* Logo 6 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/cbea3a38-d2f3-4d6a-beef-411cc932c37e.png" 
              alt="Annick Levesque" 
              className="h-18 w-auto object-contain"
            />
          </div>
          
          {/* Logo 7 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/e140f6c4-84e2-4967-9c45-62293e41ce00.png" 
              alt="Onyx" 
              className="h-14 w-auto object-contain"
            />
          </div>
          
          {/* Logo 8 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/7d715b48-b8df-4375-a48d-48eeec6f19c2.png" 
              alt="Runak" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          {/* Logo 9 */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/d9281956-260c-423a-8c12-4f754c23bc43.png" 
              alt="Le Coconut" 
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
        
        <div className="text-center mb-10">
          <p className="text-white text-xl font-normal">And 200+ More!</p>
        </div>
        
        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="bg-[#006fff] hover:bg-[#0066cc] text-white font-normal py-4 px-8 rounded-lg text-lg uppercase shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
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
    </div>
  );
};

export default BrandsSection;

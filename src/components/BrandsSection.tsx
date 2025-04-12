
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
          {/* Logo 1 - Roots */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/51b35d3e-4aa2-4ed3-acea-aec17c99c2cc.png" 
              alt="Roots logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Logo 2 - Cafexo */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/c9e81737-3181-455f-bd43-4066e3a4564d.png" 
              alt="Cafexo logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Logo 3 - Mille et une noix */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/9ac83d52-cf2c-4fd9-8211-6267c478a2ef.png" 
              alt="Mille et une noix logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Logo 4 - Lockfeet */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/fef58f99-7425-4014-b102-55c3b919e491.png" 
              alt="Lockfeet logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Logo 5 - Lika */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/849867d6-86f0-4088-baa6-63f6f93901a7.png" 
              alt="Lika logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Logo 6 - Annick Levesque */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/80b100b9-0baf-4646-93e7-d1229bef68cd.png" 
              alt="Annick Levesque logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Logo 7 - Onyx */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/3faab11a-2fe0-4ca1-a0ef-aae077e75536.png" 
              alt="Onyx logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Logo 8 - Runak */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/3d4fa156-9074-4c76-ac75-c8a241ea6271.png" 
              alt="Runak logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Logo 9 - Le Coconut */}
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/b204c0ad-06bb-4a68-8074-fe3e66b6e2fb.png" 
              alt="Le Coconut logo" 
              className="h-12 w-auto object-contain"
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

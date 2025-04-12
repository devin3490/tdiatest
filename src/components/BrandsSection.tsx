
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
        
        <div className="max-w-5xl mx-auto mb-14 grid grid-cols-3 gap-6">
          {/* Logo 1 - Roots */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/55f4a520-199c-4f60-a299-f4f53f4e03d5.png" 
              alt="Roots logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Logo 2 - Cafexo */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/93d97cb7-54fd-41f5-a9df-85cf0c707dec.png" 
              alt="Cafexo logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Logo 3 - Mille et une noix */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/5c9eddd3-5fef-4698-9226-2342603b8414.png" 
              alt="Mille et une noix logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Logo 4 - Lockfeet */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/6c45d0a7-a649-4ba0-8c64-5c166ffed649.png" 
              alt="Lockfeet logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Logo 5 - Lika */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/cf826ab0-ef3c-44b2-bddb-f4d89d658aa1.png" 
              alt="Lika logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Logo 6 - Annick Levesque */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/c8b3e4cb-8979-4685-b500-0e7c71f5182b.png" 
              alt="Annick Levesque logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Logo 7 - Onyx */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/5cfdadc8-4f5a-428d-b774-fb149220ee4b.png" 
              alt="Onyx logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Logo 8 - Runak */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/0be2b643-ce09-4db2-8250-f17844bd33ab.png" 
              alt="Runak logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Logo 9 - Le Coconut */}
          <div className="bg-[#111111] border border-gray-800 p-4 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/ca87324b-abc5-494c-939c-4b5f93d7f252.png" 
              alt="Le Coconut logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
        </div>
        
        <div className="text-center mb-10">
          <p className="text-white text-xl font-normal">And 40+ More!</p>
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


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
        
        <div className="max-w-6xl mx-auto mb-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <img 
              src="/lovable-uploads/fa2da3b1-56bc-47f5-b588-2a9a2e38269e.png" 
              alt="Brand logo" 
              className="h-12 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              data-brand="logo1"
            />
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-2xl font-bold tracking-wide">enVy</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-xl font-semibold tracking-wide">FOUR SIGMATIC</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-2xl font-light tracking-widest">LEGEND</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-2xl font-bold">GUIZIO</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-xl tracking-widest">R A I T H</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-lg font-semibold">PETSMONT</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-lg font-medium tracking-wider">KUSH QUEEN</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-lg italic">Hallmark</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-xl font-semibold">Freestyle</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-xl font-bold">STEPR</span>
          </div>
          
          <div className="bg-[#111111] border border-gray-800 p-8 flex items-center justify-center rounded-md">
            <span className="text-white text-xl font-light">kiwi&co</span>
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
    </div>
  );
};

export default BrandsSection;


import React from 'react';
import { Button } from "@/components/ui/button";

const CtaStrip: React.FC = () => {
  return (
    <div className="w-full">
      {/* Blue top border */}
      <div className="h-16 bg-gradient-to-b from-[#006fff] to-black"></div>
      
      {/* Black middle section */}
      <div className="bg-black py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-0">
            Ready to transform your ad strategy?
          </h3>
          <Button 
            className="text-white font-thin shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Book Your Free Discovery Call
          </Button>
        </div>
      </div>
      
      {/* White middle section */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 text-lg">
            Join dozens of successful brands who've trusted us with their growth
          </p>
        </div>
      </div>
      
      {/* Blue bottom border */}
      <div className="h-16 bg-gradient-to-b from-black to-[#006fff]"></div>
    </div>
  );
};

export default CtaStrip;

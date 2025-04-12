
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="radial-bg w-full py-16 font-sans">
      <div className="container mx-auto z-10 px-4">
        {/* Step title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-500">Step 1:</span> 
            <span className="text-white ml-2">Watch The Video Below</span>
          </h2>
        </div>
        
        {/* Guarantee badge */}
        <div className="text-center mb-6">
          <div className="bg-blue-900 inline-block px-6 py-2 rounded-md">
            <p className="text-white uppercase tracking-wider font-medium text-sm">
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
            className="absolute left-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
            aria-label="Play video"
          >
            <Play className="h-6 w-6" />
          </button>
        </div>
        
        {/* CTA button */}
        <div className="text-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase"
          >
            👉 UPGRADE MY EMAIL FLOWS HERE 👈
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

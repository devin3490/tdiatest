import React from 'react';
import { Check, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ComparisonSection: React.FC = () => {
  return (
    <div className="w-full py-20 font-sans bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl px-4 z-10 relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="text-white border-white/20 px-4 py-1 text-sm rounded-full">
            Comparison
          </Badge>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
          But, why would you <br />
          want to work <span className="italic font-normal">with us?</span>
        </h2>
        
        {/* Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Other Agencies */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white/70 mb-8">
              Other Agencies
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <X className="text-red-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-lg">Slow communication</p>
              </div>
              
              <div className="flex items-start">
                <X className="text-red-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-lg">Single channel approach</p>
              </div>
              
              <div className="flex items-start">
                <X className="text-red-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-lg">Outdated growth strategies</p>
              </div>
              
              <div className="flex items-start">
                <X className="text-red-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-lg">Lack of industry research</p>
              </div>
              
              <div className="flex items-start">
                <X className="text-red-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-lg">Outsourced to mediocre talent</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Your Business */}
          <div className="bg-gradient-to-br from-black/40 to-red-950/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              YOUR BUSINESS.
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Check className="text-highlight mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white text-lg">Constant, proactive communication</p>
              </div>
              
              <div className="flex items-start">
                <Check className="text-highlight mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white text-lg">Omni-channel approach</p>
              </div>
              
              <div className="flex items-start">
                <Check className="text-highlight mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white text-lg">Tailored best-fit solutions</p>
              </div>
              
              <div className="flex items-start">
                <Check className="text-highlight mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white text-lg">Provides industry specific expertise</p>
              </div>
              
              <div className="flex items-start">
                <Check className="text-highlight mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-white text-lg">Founders with 5+ years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;

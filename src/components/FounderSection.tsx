import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const FounderSection: React.FC = () => {
  return (
    <div className="w-full py-20 font-sans bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl px-4 z-10 relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="text-white border-white/20 px-4 py-1 text-sm rounded-full">
            Team
          </Badge>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-10">
          Meet the <span className="italic font-normal">team.</span>
        </h2>
        
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-white/80 text-lg text-center leading-relaxed">
            As a previous merchant that scaled to $500k per month, I understand what works to scale brands. 
            We put in extra care in our work because I've been in your shoes before. 
            I know what it's like to hand over a part of your business to someone else.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button 
            className="text-white font-thin text-lg"
          >
            Book Your Free Discovery Call <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        {/* Founder Photo and Details */}
        <div className="flex justify-center">
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden max-w-md">
            <div className="relative">
              <img 
                src="/lovable-uploads/b53bbceb-4b94-4f63-8bc5-b85c5a654da1.png" 
                alt="Mark Mei" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">Isaac Mikola</h3>
                <p className="text-white/70">Founder of TDIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;

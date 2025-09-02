import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';
import ParallaxDots from './ParallaxDots';

const CaseStudiesCarousel: React.FC = () => {
  return (
    <div className="w-full bg-black py-20 relative overflow-hidden">
      <ParallaxDots 
        count={60} 
        colors={['#006fff', '#1e90ff', '#3944bc']} 
        minSize={2} 
        maxSize={8} 
        className="z-0 opacity-70"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Our Client <span className="text-[#006fff]">Success Stories</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            We consistently deliver exceptional results for our e-commerce clients through our data-driven email strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large hideAway Case Study - Left Column */}
          <a href="https://tdiaagency.com/" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-[#006fff] transition-all duration-300 cursor-pointer h-full">
              <CardContent className="p-0">
                <div className="relative h-[400px]">
                  <img 
                    src="/lovable-uploads/84384628-8607-48d8-838c-7e013574f222.png" 
                    alt="hideAway case study"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-2">
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        <span className="text-[#006fff]">From 27 000$ to 85 000$ in 3 months </span><br />
                      </h2>
                      <p className="text-gray-300 mt-2 text-lg">in 30 Days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* Right Column with two smaller cards */}
          <div className="flex flex-col gap-6">
            {/* RAITH Case Study */}
            <a href="https://tdiaagency.com/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-[#006fff] transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-[190px]">
                    <img 
                      src="/lovable-uploads/87c01000-ca06-4d2c-8c65-f4b9c08ddf1e.png" 
                      alt="RAITH case study"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="mb-2">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          <span className="text-white">7x </span>Roas <br />in the cosmetics industry
                        </h2>
                        <p className="text-gray-300 mt-1">in 30 Days</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* Golf Course Supply Case Study */}
            <a href="https://tdiaagency.com/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-[#006fff] transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-[190px]">
                    <img 
                      src="/lovable-uploads/02f8bc66-3042-4b06-a33f-fa29d507dd24.png" 
                      alt="Golf Course Supply case study"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="mb-2">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          <span className="text-white">0 to 20 </span>leads in a niche market<br />
                        </h2>
                        <p className="text-gray-300 mt-1">in 30 Days</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            className="text-white font-thin"
            onClick={() => window.open('https://calendly.com/tdiaagency/30min?month=2025-09', '_blank')}
          >
            Book Your Free Discovery Call
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;

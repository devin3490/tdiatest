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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* hideAway Case Study */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-[#006fff] transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/84384628-8607-48d8-838c-7e013574f222.png" 
                  alt="hideAway case study"
                  className="w-full"
                  style={{ objectFit: 'cover', objectPosition: '0% 0%', maxHeight: '200px' }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-black text-xl font-bold mb-1">Lockfeet</h3>
                  <div className="mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      <span className="text-[006fff]">From 27 000$ to 85 000$ in 3 months </span><br />
                    </h2>
                    <p className="text-gray-300 mt-1">in 30 Days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RAITH Case Study */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-[#006fff] transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/fafc81e1-2353-47d1-85d1-8daaf131c374.png" 
                  alt="RAITH case study"
                  className="w-full"
                  style={{ objectFit: 'cover', objectPosition: '0% 33%', maxHeight: '200px' }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1">R A I T H</h3>
                  <div className="mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      <span className="text-[#006fff]">210%</span> Increase in<br />Flow Revenue
                    </h2>
                    <p className="text-gray-300 mt-1">in 30 Days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Golf Course Supply Case Study */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-[#006fff] transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/fafc81e1-2353-47d1-85d1-8daaf131c374.png" 
                  alt="Golf Course Supply case study"
                  className="w-full"
                  style={{ objectFit: 'cover', objectPosition: '0% 66%', maxHeight: '200px' }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1">GOLF COURSE SUPPLY</h3>
                  <div className="mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      <span className="text-[#006fff]">132%</span> Increase in<br />Flow Revenue
                    </h2>
                    <p className="text-gray-300 mt-1">in 30 Days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/case-studies">
            <Button 
              className="text-white font-thin"
            >
              See More Case Studies
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;

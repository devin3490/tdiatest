import React from 'react';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CaseStudies: React.FC = () => {
  return (
    <div className="w-full bg-black min-h-screen pb-20">
      {/* Header section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Our Track Record of <span className="text-[#006FFF]">Client Success</span>
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          We consistently deliver exceptional results for our clients through our creative-first approach and data-driven strategies.
        </p>
      </div>

      {/* Results grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* hideAway case study */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
            <CardContent className="p-0 relative">
              {/* Image section - now on the left */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/84384628-8607-48d8-838c-7e013574f222.png"
                  alt="Lockfeet shoes"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent p-6">
                <div className="flex items-center mb-8">
                  <h3 className="text-white text-2xl font-bold">hideAway</h3>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-[#006FFF]">328%</span> Increase in Flow Revenue
                  </h2>
                  <p className="text-gray-400 mt-2">in 30 Days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RAITH Case Study */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-[#006fff] transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/87c01000-ca06-4d2c-8c65-f4b9c08ddf1e.png" 
                  alt="RAITH case study"
                  className="w-full"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%', maxHeight: '200px' }} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
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
                  src="/lovable-uploads/02f8bc66-3042-4b06-a33f-fa29d507dd24.png" 
                  alt="Golf Course Supply case study"
                  className="w-full"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%', maxHeight: '200px' }} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
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

          {/* CTA card */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Ready to <span className="text-[#006FFF]">Grow</span> Your Business?
              </h2>
              <p className="text-gray-300 text-center mb-8 max-w-md">
                Let's discuss how our creative-first approach can help you achieve similar results for your business.
              </p>
              <Button 
                className="bg-[#006FFF] hover:bg-[#0052cc] text-black font-bold py-3 px-6 rounded-full text-center"
                onClick={() => window.open('https://calendly.com/tdiaagency/30min?month=2025-09', '_blank')}
              >
                BOOK YOUR FREE DISCOVERY CALL
                <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-gray-900 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">
                  "The creative-first approach they took with our campaigns completely transformed our business. The 328% increase in revenue speaks for itself."
                </p>
                <p className="text-white font-semibold">- CEO, hideAway</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">
                  "Their team's understanding of our target audience and creative execution helped us achieve results we never thought possible."
                </p>
                <p className="text-white font-semibold">- Marketing Director, RAITH</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaseStudies;

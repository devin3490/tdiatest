import React from 'react';
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
            <CardContent className="p-0">
              <div className="p-6">
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
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/ea533adb-d52d-4eb7-8af3-4836983d6461.png" 
                  alt="hideAway case study results"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Faith case study */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center mb-8">
                  <h3 className="text-white text-2xl font-bold">R A I T H</h3>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-[#006FFF]">210%</span> Increase in Flow Revenue
                  </h2>
                  <p className="text-gray-400 mt-2">in 30 Days</p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/public/lovable-uploads/d6ca1a03-39d3-4a4c-a2e1-f859d79b46c7.png" 
                  alt="RAITH campaign screenshots"
                  className="w-full object-cover"
                  style={{objectPosition: "50% 33%"}}
                />
              </div>
            </CardContent>
          </Card>

          {/* Golf Course case study */}
          <Card className="bg-black border border-gray-800 rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center mb-8">
                  <h3 className="text-white text-2xl font-bold">GOLF COURSE SUPPLY</h3>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-[#006FFF]">132%</span> Increase in Flow Revenue
                  </h2>
                  <p className="text-gray-400 mt-2">in 30 Days</p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/public/lovable-uploads/d6ca1a03-39d3-4a4c-a2e1-f859d79b46c7.png" 
                  alt="Golf Course Supply campaign screenshots"
                  className="w-full object-cover"
                  style={{objectPosition: "50% 66%"}}
                />
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
    </div>
  );
};

export default CaseStudies;

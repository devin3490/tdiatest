import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProblemCard {
  label: string;
  headline: string;
  text: string;
  metric?: string;
}

interface ProblemCarouselProps {
  title: string;
  cards: ProblemCard[];
  ctaText: string;
  ctaHref?: string;
}

const ProblemCarousel: React.FC<ProblemCarouselProps> = ({
  title,
  cards,
  ctaText,
  ctaHref = "#"
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const scrollPrev = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative mb-4">
        {/* Enhanced title with multiple effects */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center relative z-10">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </span>
          {/* Glow effect behind text */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#006fff]/30 via-[#4d9bff]/40 to-[#006fff]/30 bg-clip-text text-transparent blur-sm animate-pulse">
            {title}
          </span>
        </h2>
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -left-4 w-20 h-20 bg-gradient-radial from-[#006fff]/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-gradient-radial from-[#4d9bff]/15 to-transparent rounded-full blur-lg"></div>
        
        {/* Accent line */}
        <div className="flex justify-center mt-6 mb-2">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#006fff] to-transparent rounded-full shadow-lg shadow-[#006fff]/50"></div>
        </div>
      </div>
      
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            duration: 25,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent 
            className="-ml-0" 
            aria-live="polite"
            role="region"
            aria-label="Problem carousel"
          >
            {cards.map((card, index) => (
              <CarouselItem key={index} className="pl-0 basis-full">
                <div className="group bg-gradient-to-br from-[#10112b] via-[#151638] to-[#0a0b1d] rounded-xl p-8 md:p-12 border border-blue-900/20 relative overflow-hidden min-h-[600px] flex flex-col justify-center transition-colors duration-200 hover:border-[#006fff]/50 cursor-pointer">
                  {/* Enhanced grid overlay with glow effect */}
                  <div className="absolute inset-0 opacity-10 transition-opacity duration-200">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent absolute top-1/4"></div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent absolute top-2/4"></div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent absolute top-3/4"></div>
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent absolute left-1/4"></div>
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent absolute left-2/4"></div>
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent absolute left-3/4"></div>
                  </div>

                  {/* Floating accent dots */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-[#006fff] rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#4d9bff] rounded-full"></div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-radial from-[#006fff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  
                  <div className="relative z-10 space-y-8">
                    {/* Header with enhanced number and metric */}
                    <div className="flex items-start justify-between">
                      <div className="relative">
                        <span className="text-[#006fff] font-bold text-2xl bg-gradient-to-r from-[#006fff]/20 to-[#4d9bff]/20 border border-[#006fff]/50 px-6 py-3 rounded-lg backdrop-blur-sm shadow-lg shadow-[#006fff]/20">
                          {card.label}
                        </span>
                      </div>
                      {card.metric && (
                        <span className="bg-gradient-to-r from-[#006fff]/15 to-[#4d9bff]/15 border border-[#006fff]/40 text-[#006fff] px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap backdrop-blur-sm shadow-md shadow-[#006fff]/10">
                          {card.metric}
                        </span>
                      )}
                    </div>
                    
                    {/* Enhanced headline with gradient text */}
                    <div className="text-center">
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                        {card.headline}
                      </h4>
                    </div>
                    
                    {/* Enhanced description with better spacing */}
                    <div className="text-center max-w-4xl mx-auto">
                      <div className="relative">
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                          {card.text}
                        </p>
                        {/* Subtle bottom accent line */}
                        <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#006fff]/50 to-transparent mx-auto mt-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom navigation buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#151638] border border-blue-600/30 text-white hover:bg-[#006fff] hover:border-[#006fff] transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-lg"
            aria-label="Previous problem"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#151638] border border-blue-600/30 text-white hover:bg-[#006fff] hover:border-[#006fff] transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-lg"
            aria-label="Next problem"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </Carousel>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index + 1
                  ? 'bg-[#006fff] scale-110'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="pt-4">
        <Button 
          className="text-white font-thin text-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
          onClick={() => window.open('https://calendly.com/tdiaagency/30min?month=2025-09', '_blank')}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default ProblemCarousel;
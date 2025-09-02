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

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h2>
      
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
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
                <div className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-6 md:p-8 border border-blue-900/20 relative overflow-hidden min-h-[200px]">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-px w-full bg-blue-500/30 absolute top-1/4"></div>
                    <div className="h-px w-full bg-blue-500/30 absolute top-2/4"></div>
                    <div className="h-px w-full bg-blue-500/30 absolute top-3/4"></div>
                    <div className="w-px h-full bg-blue-500/30 absolute left-1/4"></div>
                    <div className="w-px h-full bg-blue-500/30 absolute left-2/4"></div>
                    <div className="w-px h-full bg-blue-500/30 absolute left-3/4"></div>
                  </div>
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#006fff] font-bold text-lg">
                        {card.label}
                      </span>
                      {card.metric && (
                        <span className="bg-[#006fff]/10 border border-[#006fff]/30 text-[#006fff] px-3 py-1 rounded-full text-sm font-medium">
                          {card.metric}
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-xl md:text-2xl font-semibold text-white">
                      {card.headline}
                    </h4>
                    
                    <p className="text-white/80 text-base leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom navigation buttons */}
          <CarouselPrevious 
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#151638] border-blue-600/30 text-white hover:bg-[#006fff] hover:border-[#006fff] transition-all duration-300"
            aria-label="Previous problem"
          />
          <CarouselNext 
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#151638] border-blue-600/30 text-white hover:bg-[#006fff] hover:border-[#006fff] transition-all duration-300"
            aria-label="Next problem"
          />
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
          asChild
        >
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      </div>
    </div>
  );
};

export default ProblemCarousel;
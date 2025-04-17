
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import Card3D from './Card3D';

// Définition du type pour les membres de l'équipe
interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const FounderSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Liste de tous les membres de l'équipe
  const teamMembers: TeamMember[] = [
    {
      name: "Isaac Mikola",
      role: "Founder of TDIA",
      photo: "/lovable-uploads/4285838e-319b-4162-9522-23ff393a6e1d.png"
    },
    {
      name: "Mahdi Almi",
      role: "Head of Creatives",
      photo: "/lovable-uploads/b3c497cb-c8cf-4cec-aa09-7e64cbe5ea55.png"
    },
    {
      name: "Tristan Langlais",
      role: "Head of Advertising",
      photo: "/lovable-uploads/e32ad8cf-c021-45ee-8bb8-f9bc5903d8c2.png"
    },
    {
      name: "Bafing Keita",
      role: "Head of Data & CRO",
      photo: "/lovable-uploads/664cb3fb-6045-474b-a673-d32ac9eb4897.png"
    },
  ];

  return (
    <div className="w-full py-20 font-sans bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl px-4 z-10 relative">
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
           At TDIA, we’ve helped brands scale by managing over $1.2M in ad spend — but what truly sets us apart is that we’ve been in your shoes. We know what it feels like to hand over a part of your business to someone else. That’s why we treat every dollar like it’s our own. Our team of senior media buyers and creatives puts extra care into every campaign — because we’re not just an agency, we’re operators too.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button className="text-white font-thin text-lg">
            Book Your Free Discovery Call <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        {/* Team Members - Desktop View */}
        {!isMobile && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {teamMembers.map((member, index) => (
              <Card3D key={index} className="bg-transparent">
                <Card key={index} className="bg-black/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-white/70">{member.role}</p>
                    </div>
                  </div>
                </Card>
              </Card3D>
            ))}
          </div>
        )}
        
        {/* Team Members - Mobile View (Carousel) */}
        {isMobile && (
          <div className="md:hidden relative mb-16">
            <Carousel className="w-full" opts={{
              align: "start",
              containScroll: "trimSnaps",
              dragFree: true
            }}>
              <CarouselContent>
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-black/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <div className="relative aspect-[3/4]">
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                          <p className="text-white/70">{member.role}</p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="static transform-none bg-black/50 border-white/20 text-white hover:bg-black/80" />
                <CarouselNext className="static transform-none bg-black/50 border-white/20 text-white hover:bg-black/80" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default FounderSection;

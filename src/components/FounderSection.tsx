
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Définition du type pour les membres de l'équipe
interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const FounderSection: React.FC = () => {
  // Liste de tous les membres de l'équipe
  const teamMembers: TeamMember[] = [
    {
      name: "Isaac Mikola",
      role: "Founder of TDIA",
      photo: "/lovable-uploads/b53bbceb-4b94-4f63-8bc5-b85c5a654da1.png"
    },
    {
      name: "Alexander Johnson",
      role: "Head of Customer Success",
      photo: "/lovable-uploads/b3c497cb-c8cf-4cec-aa09-7e64cbe5ea55.png"
    },
    {
      name: "David Williams",
      role: "Lead Strategist",
      photo: "/lovable-uploads/3f5903a7-5417-48c0-8afe-723f58b33f3a.png"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      photo: "/lovable-uploads/e32ad8cf-c021-45ee-8bb8-f9bc5903d8c2.png"
    },
    {
      name: "Ryan Edwards",
      role: "Creative Director",
      photo: "/lovable-uploads/4285838e-319b-4162-9522-23ff393a6e1d.png"
    }
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
            As a previous merchant that scaled to $500k per month, I understand what works to scale brands. 
            We put in extra care in our work because I've been in your shoes before. 
            I know what it's like to hand over a part of your business to someone else.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button className="text-white font-thin text-lg">
            Book Your Free Discovery Call <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        {/* Team Members - Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, index) => (
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
          ))}
        </div>
        
        {/* Team Members - Mobile View (Carousel) */}
        <div className="md:hidden relative mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
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
            <CarouselPrevious className="absolute left-2 bg-black/50 border-white/20 text-white hover:bg-black/80" />
            <CarouselNext className="absolute right-2 bg-black/50 border-white/20 text-white hover:bg-black/80" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;

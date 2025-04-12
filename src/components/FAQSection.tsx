
import React, { useEffect, useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const [backgroundElements, setBackgroundElements] = useState<Array<any>>([]);

  useEffect(() => {
    // Generate background elements with initial positions
    const elements = [...Array(20)].map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotate: Math.random() * 90,
      scale: 0.5 + Math.random() * 2,
      color: index % 3 === 0 ? '#006fff' : index % 3 === 1 ? '#ff0066' : '#ffffff',
      opacity: 0.07 + (Math.random() * 0.1),
      // Animation properties - using slower speeds
      direction: Math.random() > 0.5 ? 1 : -1,
      speed: 0.01 + Math.random() * 0.02, // Significantly reduced speed values
      rotationSpeed: 0.002 + Math.random() * 0.008, // Significantly reduced rotation speed
      pulsePhase: Math.random() * Math.PI * 2 // Random starting phase for pulse effect
    }));
    
    setBackgroundElements(elements);
    
    // Animation frame
    let animationFrameId: number;
    let lastTime = 0;
    
    const animate = (time: number) => {
      if (lastTime === 0) {
        lastTime = time;
      }
      
      const deltaTime = time - lastTime;
      lastTime = time;
      
      setBackgroundElements(prevElements => 
        prevElements.map(el => {
          // Update position with smoother floating motion - longer periods & smaller amplitude
          let newTop = el.top + (el.direction * el.speed * Math.sin(time/7000 + el.id) * 0.5);
          let newLeft = el.left + (el.direction * el.speed * Math.cos(time/6800 + el.id) * 0.5);
          
          // Boundary check with wraparound
          if (newTop < -10) newTop = 110;
          if (newTop > 110) newTop = -10;
          if (newLeft < -10) newLeft = 110;
          if (newLeft > 110) newLeft = -10;
          
          // Update rotation very slowly
          const newRotate = (el.rotate + el.rotationSpeed * deltaTime / 16) % 360;
          
          // Slow pulse scale effect based on sine wave with longer period
          const pulseEffect = 1 + Math.sin(time/3500 + el.pulsePhase) * 0.03; // Smaller amplitude, longer period
          
          return {
            ...el,
            top: newTop,
            left: newLeft,
            rotate: newRotate,
            currentScale: el.scale * pulseEffect
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const faqItems = [
    {
      question: "Who is this for?",
      answer: "This is for eCommerce brand owners looking to scale their business with improved conversion rates and customer retention through optimized paid advertising strategies."
    },
    {
      question: "How does your pricing work?",
      answer: "We offer flexible pricing packages based on your business needs and goals. Our pricing is transparent with no hidden fees, and we provide options for both project-based work and ongoing retainers."
    },
    {
      question: "Will this work for my eCommerce brand?",
      answer: "Yes, our strategies are specifically designed for eCommerce brands across various niches. We've helped businesses of all sizes improve their conversion rates and scale their revenue through targeted paid advertising and retention systems."
    },
    {
      question: "How much time does it require from me?",
      answer: "We understand you're busy running your business. Our process is designed to be minimally invasive, requiring just 1-2 hours per week from you after the initial onboarding period where we gather all necessary information."
    },
    {
      question: "Do you have minimum contracts?",
      answer: "We offer flexible engagement options, including month-to-month services. However, we recommend a minimum 3-month commitment to see meaningful results from our optimization strategies."
    },
    {
      question: "What platforms do you work on?",
      answer: "We specialize in all major eCommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built shops. Our advertising expertise covers Facebook/Instagram, Google, TikTok, Pinterest, and other relevant platforms for your target audience."
    }
  ];

  return (
    <div className="w-full py-20 font-sans bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated Blurred Plus Signs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundElements.map((el) => (
          <div 
            key={el.id}
            className="absolute opacity-15 blur-md"
            style={{
              top: `${el.top}%`,
              left: `${el.left}%`,
              transform: `rotate(${el.rotate}deg) scale(${el.currentScale || el.scale})`,
              color: el.color,
              opacity: el.opacity,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <Plus size={60 + Math.random() * 80} strokeWidth={1} />
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-4xl px-4 z-10 relative">
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-12 mb-12 relative overflow-hidden">
          {/* Additional smaller plus signs for this card specifically */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, index) => (
              <div 
                key={`inner-${index}`}
                className="absolute opacity-20 blur-sm"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 90}deg) scale(${0.5 + Math.random()})`,
                  color: index % 2 === 0 ? '#006fff' : '#ffffff',
                  opacity: 0.1 + (Math.random() * 0.1),
                  animation: `float-${index % 4} ${10 + Math.random() * 15}s infinite ease-in-out`
                }}
              >
                <Plus size={30 + Math.random() * 40} strokeWidth={1} />
              </div>
            ))}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 relative z-10">
            Ready to scale your<br />brand to{' '}
            <span className="italic font-normal bg-gradient-to-r from-white to-[#006fff] text-transparent bg-clip-text">
              new heights?
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8 relative z-10">
            <p className="text-white/80 text-lg text-center leading-relaxed">
              If you want to achieve ground-breaking growth with increased sales 
              and profitability from your paid ads by having a backend conversion 
              and retention system, then you're in the right place.
            </p>
          </div>
          
          <div className="flex justify-center relative z-10">
            <Button 
              className="text-white text-lg"
            >
              Book Your Free Discovery Call <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden mb-4"
              >
                <AccordionTrigger className="px-6 py-5 text-white hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-left text-lg font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-white/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      <div className="w-full h-20 bg-gradient-to-b from-transparent to-[#006fff] mt-12"></div>
    </div>
  );
};

export default FAQSection;

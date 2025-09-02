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
    // Generate background elements with static positions and uniform color
    const elements = [...Array(20)].map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotate: Math.random() * 90,
      scale: 0.5 + Math.random() * 2,
      color: '#006fff', // Uniform color
      opacity: 0.07 + (Math.random() * 0.1)
    }));
    
    setBackgroundElements(elements);
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
    <div className="w-full pt-20 pb-0 font-sans bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated Blurred Plus Signs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundElements.map((el) => (
          <div 
            key={el.id}
            className="absolute opacity-15 blur-md"
            style={{
              top: `${el.top}%`,
              left: `${el.left}%`,
              transform: `rotate(${el.rotate}deg) scale(${el.scale})`,
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
              className="text-white font-thin text-lg"
              onClick={() => window.open('https://calendly.com/tdiaagency/30min?month=2025-09', '_blank')}
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
      
      <div className="w-full h-20 bg-gradient-to-b from-[#0a0a0a] to-[#006fff] mt-12"></div>
    </div>
  );
};

export default FAQSection;

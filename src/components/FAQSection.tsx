import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <div className="radial-bg w-full py-20 font-sans bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl px-4 z-10 relative">
        {/* CTA Section */}
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-12 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Ready to scale your<br />brand to <span className="italic font-normal">new heights?</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-white/80 text-lg text-center leading-relaxed">
              If you want to achieve ground-breaking growth with increased sales 
              and profitability from your paid ads by having a backend conversion 
              and retention system, then you're in the right place.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-[#8bfa7b] hover:bg-[#7ae36c] text-black px-8 py-6 text-lg rounded-md transition-colors"
            >
              Get Your Free Audit <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        
        {/* FAQ Accordion */}
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
    </div>
  );
};

export default FAQSection;

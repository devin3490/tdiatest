import React, { useEffect, useState } from 'react';
import { ShoppingCart, Database, Users, Search, ZapIcon } from 'lucide-react';
import ProblemCarousel from './ProblemCarousel';

const EcommerceProblemSection: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);

  // Animate the orbit continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.1) % 360);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const problemData = {
    title: "The Accessories Growth Blocker",
    cards: [
      { 
        label: "01", 
        headline: "Messy Merchandising = Missed Sales", 
        text: "A scattered catalog, constant stockouts, and over-reliance on too many SKUs confuse customers and kill conversions. Winning brands simplify. We help you build your assortment around 5 proven pillars: evergreens, innovation, click-magnets, cross-sells, and calculated bets.",
        metric: "+30% lift in product discovery"
      },
      { 
        label: "02", 
        headline: "The Hero Product Trap", 
        text: "When 80–90% of your revenue relies on one item, you're exposed. Repurchase rates stay low, and once the hype fades, sales collapse. Smart brands don't gamble — they expand with controlled variations (colors, fabrics, cuts) while preparing the next heroes to carry growth forward.",
        metric: "+25% repeat revenue unlocked"
      },
      { 
        label: "03", 
        headline: "Slow \"Time-to-Value\" Kills Conversions", 
        text: "If your creative takes more than 3 seconds to deliver value, viewers drop. Low CTR, weak add-to-cart rates, and wasted clicks follow. Winning ads open instantly with the product + price, sharp angles, and clear usage context — grabbing attention before it's gone."
      },
      { 
        label: "04", 
        headline: "Creative Cadence Too Low", 
        text: "When ads fatigue after just 2–3 impressions, CPAs skyrocket. Growth brands run on a continuous production system — weekly variations, fresh formats, new angles, and diverse messages to keep performance alive."
      },
      { 
        label: "05", 
        headline: "Broken Meta Architecture", 
        text: "Over-fragmentation, constant re-learning, or budget spread too thin — your Meta campaigns never stabilize. Winning brands choose among 3 proven architectures (hyper-consolidation, controlled fragmentation, big-idea scaling) with AVP layering on top."
      },
      { 
        label: "06", 
        headline: "Underused & Misconfigured Google Ads", 
        text: "Losing your own branded demand, irrelevant Shopping results, and inflated attribution waste spend. The fix: protect your brand in Search, run PMax with new-customer focus, exclude brand traffic, enrich your feed, and run YouTube in a 2-step funnel.",
        metric: "+35% capture on high-intent traffic"
      },
      { 
        label: "07", 
        headline: "Seasonality Played Wrong", 
        text: "Budgets spread too thin, peaks missed, and ROAS swings wildly. The smart move: concentrate spend on key weeks, pilot campaigns intra-day, pre-warm leads/viewers, and use geo-targeting to win in off-seasons."
      },
      { 
        label: "08", 
        headline: "Pricing & Promo Chaos", 
        text: "Price wars crush margins, baskets drift outside your profit zone, and promos feel random. Instead, anchor prices to your positioning, adopt clear promo doctrines (credible no-promo vs orchestrated promos), bundle smartly, and ease payment options."
      },
      { 
        label: "09", 
        headline: "Weak Mobile CRO/UX", 
        text: "On mobile, the first screen shows no product, no price, no CTA — just intrusive pop-ups and slow load times. High-converting brands win with the \"3-in-3 rule\" (product, price, CTA visible instantly), sticky ATC, clear visuals (sizes, capacity, details), sequenced pop-ups, and optimized speed."
      },
      { 
        label: "10", 
        headline: "Unit Economics Blinded by Returns", 
        text: "An \"acceptable\" CAC can hide margin destruction when returns aren't factored in. Smart operators integrate returns, logistics, payments, and support into the P&L — then recalibrate CAC to reflect true profitability."
      },
      { 
        label: "11", 
        headline: "Email & SMS Revenue Leakage", 
        text: "Generic flows, poor segmentation, and low send frequency leave massive revenue on the table. Top brands layer behavioral triggers, preference data, and lifecycle stages to create hyper-relevant messaging that drives 25-40% of total revenue.",
        metric: "+35% email revenue contribution"
      },
      { 
        label: "12", 
        headline: "Retention Strategy Missing", 
        text: "First-time buyers never return because there's no systematic follow-up plan. Winning brands deploy welcome series, replenishment reminders, loyalty programs, and VIP tiers to transform one-time buyers into repeat customers and brand advocates.",
        metric: "+45% customer lifetime value"
      },
      { 
        label: "13", 
        headline: "Influencer ROI Invisibility", 
        text: "Throwing money at creators without tracking true performance beyond vanity metrics. Smart brands use unique codes, landing pages, and attribution models to measure real conversions, then double down on what works while cutting wasteful partnerships.",
        metric: "+60% influencer campaign efficiency"
      },
      { 
        label: "14", 
        headline: "Post-Purchase Experience Neglected", 
        text: "The customer journey ends at checkout instead of beginning there. High-growth brands optimize shipping notifications, unboxing experiences, and follow-up sequences to reduce returns, increase reviews, and create viral word-of-mouth marketing.",
        metric: "+25% customer satisfaction increase"
      }
    ],
    cta: { text: "Book Your Free Discovery Call", href: "/#calendly-or-link" }
  };

  return (
    <div className="w-full bg-gradient-to-b from-black via-[#0a0b1a] to-black text-white py-16 font-sans relative overflow-hidden">
      {/* Add grid lines in the background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="grid-lines-horizontal"></div>
        <div className="grid-lines-vertical"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main section - 2 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Carousel */}
          <div className="order-2 lg:order-1">
            <ProblemCarousel
              title={problemData.title}
              cards={problemData.cards}
              ctaText={problemData.cta.text}
              ctaHref={problemData.cta.href}
            />
          </div>

          {/* Right column - Animation (kept unchanged) */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative">
              {/* Center icon with pulsing effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#151638] rounded-full flex items-center justify-center border border-blue-600/30 z-10 shadow-lg shadow-blue-900/20 animate-pulse">
                  <ShoppingCart className="h-10 w-10 text-white" />
                </div>
                {/* Pulsing ring effect */}
                <div className="absolute w-32 h-32 rounded-full border border-[#006fff]/30 animate-ping opacity-30" style={{animationDuration: '3s'}}></div>
              </div>
              
              {/* Grid background */}
              <div className="absolute inset-0">
                <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                  {Array(16).fill(0).map((_, i) => (
                    <div key={i} className="border border-blue-800/10"></div>
                  ))}
                </div>
              </div>
              
              {/* Orbit circle - now animated */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-[#2a2d55]/50"></div>
              </div>
              
              {/* Icon boxes on the orbit - now animated */}
              <div className="absolute inset-0 w-full h-full"
                style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center center', transition: 'transform 0.1s linear' }}>
                
                {/* Top icon */}
                <div 
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'users' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                  onMouseEnter={() => setHoverIcon('users')}
                  onMouseLeave={() => setHoverIcon(null)}
                >
                  <Users className={`h-5 w-5 ${hoverIcon === 'users' ? 'text-[#006fff]' : 'text-white'}`} />
                </div>
                
                {/* Bottom icon */}
                <div 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'database' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                  onMouseEnter={() => setHoverIcon('database')}
                  onMouseLeave={() => setHoverIcon(null)}
                >
                  <Database className={`h-5 w-5 ${hoverIcon === 'database' ? 'text-[#006fff]' : 'text-white'}`} />
                </div>
                
                {/* Right icon */}
                <div 
                  className={`absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'search' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                  onMouseEnter={() => setHoverIcon('search')}
                  onMouseLeave={() => setHoverIcon(null)}
                >
                  <Search className={`h-5 w-5 ${hoverIcon === 'search' ? 'text-[#006fff]' : 'text-white'}`} />
                </div>
                
                {/* Left icon */}
                <div 
                  className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'zap' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                  onMouseEnter={() => setHoverIcon('zap')}
                  onMouseLeave={() => setHoverIcon(null)}
                >
                  <ZapIcon className={`h-5 w-5 ${hoverIcon === 'zap' ? 'text-[#006fff]' : 'text-white'}`} />
                </div>

                {/* Glowing dots on the orbit */}
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProblemSection;

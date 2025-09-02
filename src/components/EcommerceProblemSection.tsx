import React from 'react';
import ProblemCarousel from './ProblemCarousel';

const EcommerceProblemSection: React.FC = () => {

  const problemData = {
    title: "Why Do Your Campaigns Work One Month and Fail the Next?",
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
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Centered carousel */}
        <div className="flex justify-center">
          <div className="w-full">
            <ProblemCarousel
              title={problemData.title}
              cards={problemData.cards}
              ctaText={problemData.cta.text}
              ctaHref={problemData.cta.href}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProblemSection;

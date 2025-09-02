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
    title: "The eCommerce Problem",
    cards: [
      { 
        label: "01", 
        headline: "Messy Merchandising = Missed Sales", 
        text: "A scattered catalog, constant stockouts, and over-reliance on too many SKUs confuse customers and kill conversions. Winning brands simplify. We help you build your assortment around 5 proven pillars: evergreens, innovation, click-magnets, cross-sells, and calculated bets.",
        metric: "+30% lift in product discovery"
      },
      { 
        label: "02", 
        headline: "CAC en hausse", 
        text: "Le coût d'acquisition grimpe pendant que la croissance stagne.",
        metric: "+43% CAC"
      },
      { 
        label: "03", 
        headline: "Créatives non testées", 
        text: "Pas de boucle de feedback ni de protocole de test structuré."
      },
      { 
        label: "04", 
        headline: "Ciblage confus", 
        text: "Les audiences ne sont pas segmentées par intention et maturité."
      },
      { 
        label: "05", 
        headline: "Budget mal alloué", 
        text: "Les dollars médias ne suivent pas la hiérarchie des priorités business."
      },
      { 
        label: "06", 
        headline: "Scaling fragile", 
        text: "Chaque montée de budget casse la rentabilité.",
        metric: "50% échec"
      },
      { 
        label: "07", 
        headline: "Manque de clarté", 
        text: "Pas de visibilité temps réel ni d'insights actionnables."
      },
      { 
        label: "08", 
        headline: "Stack créatif limité", 
        text: "Peu de formats, peu d'angles, peu de variations."
      },
      { 
        label: "09", 
        headline: "Mesure incomplète", 
        text: "KPIs suivis sans contexte ni seuils de décision."
      },
      { 
        label: "10", 
        headline: "Absence de système", 
        text: "Pas de cadre comme Profit-First Media Buying™ pour guider les choix."
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

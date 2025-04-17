
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Play, X } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 lg:py-16 font-sans relative"
      style={{
        background: `radial-gradient(circle at center, rgba(0, 111, 255, 0.7) 0%, rgb(0, 0, 0) 90%)`
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black w-full"></div>
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, rgba(0, 111, 255, 0.3) 0%, transparent 40%),
            radial-gradient(circle at center, rgba(0, 111, 255, 0.2) 0%, transparent 60%),
            linear-gradient(45deg, transparent 98%, rgba(255, 255, 255, 0.1) 99%, transparent 100%),
            linear-gradient(135deg, transparent 97%, rgba(255, 255, 255, 0.1) 98%, transparent 100%),
            linear-gradient(225deg, transparent 96%, rgba(255, 255, 255, 0.15) 97%, transparent 100%),
            linear-gradient(315deg, transparent 95%, rgba(255, 255, 255, 0.1) 96%, transparent 100%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 50px 50px, 60px 60px, 70px 70px, 80px 80px',
          opacity: 0.8
        }}
      ></div>
      
      <div className="container mx-auto z-10">
        
        <div className="mb-6">
          <div className="bg-opacity-20 bg-white px-6 py-2 rounded-full inline-block">
            <p className="text-white uppercase tracking-wider font-thin text-sm">
              ATTN: ECOMMERCE FOUNDERS
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight" 
          >
            It's Not the Platform. It's the Strategy. Outsmart Big Brands with Smarter Ads That Actually Sell.
          </h1>
          <div className="mt-2 text-1xl md:text-1xl lg:text-2xl font-bold text-[#fad500] leading-tight tracking-tight">
            Scale Your Brand in 30 Days — Or You Don't Pay a Dime.
          </div>
        </div>

        <div className="mb-10 brand-logos flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <img src="/lovable-uploads/c88f347d-3800-4312-be98-31ba7f554896.png" alt="shopify" className="h-24 md:h-20" />
          <img src="/lovable-uploads/8b0c8b6b-dcb7-4936-b244-464b838e377d.png" alt="Instagram Ads" className="h-24 md:h-20" />
          <img src="/lovable-uploads/3e49c3b6-3afa-47ca-90fd-cced42929b24.png" alt="klaviyo" className="h-24 md:h-20" />
          <img src="/lovable-uploads/60429fd4-b1d4-4da3-9bc4-dde2e4ef6708.png" alt="bigcommerce" className="h-24 md:h-20" />
          <img src="/lovable-uploads/9eee0582-65db-43e5-8471-eea5b47edf35.png" alt="woocommerce" className="h-24 md:h-20" />
          <img src="/lovable-uploads/83387c98-8746-47f1-8cb1-00fb5e0953e2.png" alt="magento" className="h-24 md:h-20" />
        </div>

        {/* Trusted by section - New content from image */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <span className="text-white font-medium text-sm md:text-base">Trusted by Over 30+ Brands</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} className="h-3 w-3 md:h-4 md:w-4 text-[#fad500] fill-[#fad500]" />
              ))}
            </div>
          </div>
          <p className="text-[#fad500] font-bold text-sm md:text-base">
            Over $3M in Ads Revenue (we make your competitors wonder where all their customers went)
          </p>
        </div>

        {/* Money back guarantee badge - From the image */}
        <div className="text-center mb-6">
          <div className="bg-black inline-block px-6 py-2 rounded-md">
            <p className="text-white uppercase tracking-wider font-semibold text-sm">
              100% MONEY BACK GUARANTEED
            </p>
          </div>
        </div>

        {/* Video container - Updated with new styling */}
        <div 
          className="max-w-4xl mx-auto mb-10 relative rounded-lg overflow-hidden shadow-2xl cursor-pointer bg-gray-800"
          onClick={playVideo}
        >
          {/* Video using the testimonial image */}
          <img 
            src="/lovable-uploads/e1e2dbf9-b755-4532-9516-1dcd9a29482e.png" 
            alt="Video testimonial" 
            className="w-full h-auto"
          />
          
          {/* Blue play button in the bottom left */}
          <button 
            className="absolute left-4 bottom-4 bg-[#006FFF] hover:bg-[#0052cc] text-white p-3 rounded-full play-button-pulse"
            aria-label="Play video"
          >
            <Play className="h-6 w-6" />
          </button>

          {/* x6 ROAS overlay */}
          <div className="absolute top-4 right-4 text-[#006FFF] font-bold text-5xl drop-shadow-lg">
            x6 ROAS
          </div>

          {/* Stats table overlay */}
          <div className="absolute right-4 top-24 bg-white/90 rounded-lg shadow-lg p-2 text-xs">
            <table className="w-full">
              <thead>
                <tr className="text-gray-700">
                  <th className="px-1 py-1">Purchase ROAS</th>
                  <th className="px-1 py-1">Website purchase ROAS</th>
                  <th className="px-1 py-1">Cost per add to cart</th>
                  <th className="px-1 py-1">Adds to cart conversion</th>
                  <th className="px-1 py-1">Website adds to cart conversion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="px-1 py-1">38.26 ↙️</td>
                  <td className="px-1 py-1">38.26 ↙️</td>
                  <td className="px-1 py-1">$4.89 ↙️</td>
                  <td className="px-1 py-1">$112,074.93 ↙️</td>
                  <td className="px-1 py-1">$112,074.93 ↙️</td>
                </tr>
                <tr className="text-center">
                  <td className="px-1 py-1">40.57 ↙️</td>
                  <td className="px-1 py-1">40.57 ↙️</td>
                  <td className="px-1 py-1">$2.59 ↙️</td>
                  <td className="px-1 py-1">$366,095.60 ↙️</td>
                  <td className="px-1 py-1">$366,095.60 ↙️</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Promo inset image */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/bf6f498a-1b3b-4a51-8e46-f9c3920143e1.png"
                alt="20% Offerts" 
                className="h-32 md:h-40 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Social media icons */}
          <div className="absolute left-4 bottom-16 flex space-x-2">
            <div className="bg-[#1877f2] p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 320 512">
                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
            </div>
            <div className="bg-gradient-to-tr from-purple-600 to-orange-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </div>
            <div className="bg-[#00f2ea] p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 448 512">
                <path fill="currentColor" d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3v74.7A87.9 87.9 0 1 0 273 350.3V0h175z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="text-white font-thin text-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto px-8"
                >
                  Book Your Free Discovery Call 
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-normal px-4 py-2"
              >
                It's time to have a real ROI!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {isPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-[#006FFF]"
              onClick={closeVideo}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;

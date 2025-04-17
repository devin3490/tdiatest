
import React from "react";
import RevenueChart from "./RevenueChart";
import StatCard from "./StatCard";

const ReportsSection: React.FC = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reports</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte de statistique */}
          <div className="md:col-span-1">
            <StatCard 
              title="Chiffre d'affaires" 
              value={210000} 
              currency="€" 
              arrow="up" 
            />
          </div>
          
          <div className="md:col-span-2">
            {/* La carte est vide pour l'instant */}
            <div className="h-32"></div>
          </div>
        </div>
        
        {/* Graphique de revenus */}
        <RevenueChart 
          title="Invest Marketing"
          value={128000}
          currency="€" 
          showProgressBar={true}
        />
        
        {/* Tooltip de vente */}
        <div className="relative mt-12 mb-8">
          <div className="max-w-xs mx-auto">
            <div className="bg-[#0a0a1a] text-white p-4 rounded-lg">
              <div className="text-center mb-2">Sales</div>
              <div className="text-2xl font-bold text-center">2,678</div>
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-full bottom-0">
                <div className="w-3 h-3 bg-[#0a0a1a] rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;

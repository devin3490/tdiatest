import React from 'react';

const ProfitFirstSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left */}
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Profit-First Media Buying™
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              From wasted ad spend to profitable scaling.
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Most eCom accounts collapse into chaos — overspending, no segmentation, volatile ROAS.
            </p>

            <p className="text-gray-800 font-semibold mb-4">
              Our Profit-First Media Buying™ fixes this with:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">3-layer account structure for clarity</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Automated rules to protect MER/ROAS</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Controlled scaling triggered by profit, not guesswork</span>
              </li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                ✅ Solves pain points: #5, #6, #7, #8, #9, #12
              </p>
            </div>
          </div>

          {/* Visual - Right */}
          <div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Profit-First Buying</h3>
                <p className="text-gray-600 mt-2">Strategic ad spend optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitFirstSection;
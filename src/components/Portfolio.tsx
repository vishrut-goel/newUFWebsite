import React, { useState } from 'react';
import { PORTFOLIO, type PortfolioItem } from '../data/siteContent';

interface PortfolioProps {
  onSelectComponentForRfq: (componentName: string, material: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectComponentForRfq }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories = [
    'All',
    'Tractor & Agri',
    'Hydraulics & Valves',
    'Bearing Housings',
    'Heavy Machinery'
  ];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === selectedCategory);

  const toggleCard = (id: string) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white text-[#2D2D2D] border-t border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Left-Aligned Editorial Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-['Abel',sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#2D2D2D] font-normal tracking-tight">
            Component Portfolio
          </h2>
          <p className="mt-3 text-base text-[#6B6560] font-['DM_Sans',sans-serif] max-w-2xl">
            Cast and fully CNC-machined components supplied to tractor, hydraulic, and machinery OEMs.
          </p>

          {/* Simple Text Tabs for Categories with Copper Underline */}
          <div className="mt-8 flex items-center gap-6 sm:gap-8 overflow-x-auto border-b border-[#E8E4DF] pb-px">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`pb-3 text-sm font-['DM_Sans',sans-serif] whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                    isActive
                      ? 'border-[#9B6B4A] text-[#2D2D2D] font-medium'
                      : 'border-transparent text-[#6B6560] hover:text-[#2D2D2D]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Grid of Cards: 2 cols on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item: PortfolioItem) => {
            const isExpanded = expandedCardId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleCard(item.id)}
                className={`group bg-white rounded-xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isExpanded
                    ? 'border-[#9B6B4A] shadow-[0_2px_8px_rgba(155,107,74,0.12)]'
                    : 'border-[#E8E4DF] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-[#C49A7C]'
                }`}
              >
                <div>
                  {/* Warm Gray Placeholder Image Area (aspect-[4/3]) */}
                  <div className="aspect-[4/3] bg-[#F3F0EB] border-b border-[#E8E4DF] flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-sm font-['DM_Sans',sans-serif] text-[#6B6560] font-medium">
                      Photo Placeholder
                    </p>
                    <p className="text-xs font-['JetBrains_Mono',monospace] text-[#9B6B4A] mt-1">
                      {item.name}
                    </p>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-['Abel',sans-serif] font-normal text-base sm:text-lg text-[#2D2D2D] leading-snug tracking-tight">
                        {item.name}
                      </h3>
                    </div>

                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-['JetBrains_Mono',monospace] text-xs">
                      <span className="text-[#9B6B4A] font-medium">{item.materialGrade}</span>
                      <span className="text-[#E8E4DF]">•</span>
                      <span className="text-[#6B6560]">{item.weightRange}</span>
                    </div>

                    {/* Expandable Specifications Area */}
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-[#E8E4DF]' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm text-[#4A4744] font-['DM_Sans',sans-serif] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2 text-xs font-['DM_Sans',sans-serif] border-t border-[#F3F0EB] pt-3">
                        <div className="flex justify-between items-baseline py-1">
                          <span className="text-[#6B6560]">Machining Precision:</span>
                          <span className="font-['JetBrains_Mono',monospace] text-[#2D2D2D] font-medium text-right">
                            {item.machiningPrecision}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline py-1 border-t border-[#F3F0EB]">
                          <span className="text-[#6B6560]">Surface Finish:</span>
                          <span className="text-[#2D2D2D] font-medium text-right">
                            {item.surfaceFinish}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectComponentForRfq(item.name, item.materialGrade);
                        }}
                        className="mt-5 w-full bg-[#9B6B4A] hover:bg-[#8A5D3F] text-white text-xs font-medium py-2.5 px-4 rounded-lg transition-colors cursor-pointer font-['DM_Sans',sans-serif]"
                      >
                        Request Quote for Similar Part
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtle Card Footer / Expansion Toggle */}
                <div className="px-6 pb-5 pt-1 flex items-center justify-between text-xs text-[#6B6560] font-['DM_Sans',sans-serif]">
                  <span className="text-[11px] font-['JetBrains_Mono',monospace] uppercase tracking-wider text-[#9B6B4A]">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#6B6560] hover:text-[#2D2D2D] font-medium">
                    {isExpanded ? 'Hide Details ↑' : 'View Details ↓'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

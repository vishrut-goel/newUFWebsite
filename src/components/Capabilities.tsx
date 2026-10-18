import React from 'react';
import { CAPABILITIES } from '../data/siteContent';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#F3F0EB] text-[#2D2D2D] border-t border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Left-Aligned Editorial Header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-['Abel',sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#2D2D2D] tracking-tight font-normal">
            Our Capabilities
          </h2>
          <p className="mt-3 text-base text-[#6B6560] font-['DM_Sans',sans-serif] max-w-2xl">
            Integrated casting and high-precision CNC machining under one roof.
          </p>
        </div>

        {/* Stacked Full-Width Blocks with Generous Spacing */}
        <div className="space-y-12 sm:space-y-16">
          {CAPABILITIES.map((cap, index) => (
            <div 
              key={cap.id} 
              className="bg-white rounded-xl p-8 sm:p-10 border border-[#E8E4DF] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              {/* Title & Subtitle */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center rounded-full bg-[#F5EDE5] border border-[#E8E4DF] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9B6B4A] font-['DM_Sans',sans-serif] mb-3">
                    Capability {String(index + 1).padStart(2, '0')}
                  </div>
                <h3 className="font-['Abel',sans-serif] text-2xl sm:text-3xl text-[#2D2D2D] font-normal tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-1 text-sm text-[#6B6560] font-['DM_Sans',sans-serif]">
                  {cap.subtitle}
                </p>
                </div>
              </div>

              {/* Horizontal Divider Line in Warm Copper */}
              <div className="my-6 h-[1px] bg-[#9B6B4A] opacity-60 w-full" />

              {/* Two-Column Layout: Left Description, Right Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
                {/* Left: Description Text */}
                <div className="lg:col-span-7">
                  <p className="text-base text-[#4A4744] font-['DM_Sans',sans-serif] leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Right: Clean List / Table of Specs in Mono Font */}
                <div className="lg:col-span-5 font-mono text-xs sm:text-sm">
                  <div className="divide-y divide-[#E8E4DF] border-y border-[#E8E4DF]">
                    {cap.specs.map((spec, i) => (
                      <div 
                        key={i} 
                        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-2.5 gap-1 sm:gap-4"
                      >
                        <span className="text-[#6B6560] font-normal">{spec.label}</span>
                        <span className="text-[#2D2D2D] font-medium sm:text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Equipment list as a simple comma-separated text paragraph */}
              <div className="pt-6 border-t border-[#E8E4DF] text-xs sm:text-sm">
                <span className="font-mono text-xs uppercase tracking-wider text-[#6B6560] font-semibold mr-2">
                  Key Equipment:
                </span>
                <span className="text-[#4A4744] font-['DM_Sans',sans-serif] leading-relaxed">
                  {cap.equipmentList.join(', ')}.
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

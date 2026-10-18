import React from 'react';
import { METROLOGY_LAB } from '../data/siteContent';

export const QualityLab: React.FC = () => {
  return (
    <section id="quality" className="py-24 sm:py-32 bg-[#F3F0EB] text-[#2D2D2D] border-t border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Left-Aligned Editorial Header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-['Abel',sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#2D2D2D] font-normal tracking-tight">
            Quality Assurance &amp; Testing
          </h2>
          <p className="mt-3 text-base text-[#6B6560] font-['DM_Sans',sans-serif] max-w-2xl">
            In-house metallurgical metrology and 100% Pre-Dispatch Inspection (PDI) with complete heat code traceability.
          </p>
        </div>

        {/* Numbered List / Horizontal Rows (NOT a card grid) */}
        <div className="divide-y divide-[#E8E4DF] border-y border-[#E8E4DF]">
          {METROLOGY_LAB.map((item, index) => {
            const stepNumber = String(index + 1).padStart(2, '0');

            return (
              <div 
                key={item.id}
                className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
              >
                {/* Step Number in large copper Abel (The visual anchor) */}
                <div className="lg:col-span-2">
                  <span className="font-['Abel',sans-serif] text-4xl sm:text-5xl lg:text-6xl text-[#9B6B4A] leading-none select-none">
                    {stepNumber}
                  </span>
                </div>

                {/* Name and Equipment */}
                <div className="lg:col-span-4">
                  <h3 className="font-['Abel',sans-serif] font-normal text-lg sm:text-xl text-[#2D2D2D] leading-snug tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-['DM_Sans',sans-serif] font-semibold text-sm sm:text-base text-[#9B6B4A]">
                    {item.equipment}
                  </p>
                </div>

                {/* Test Function Description */}
                <div className="lg:col-span-4">
                  <p className="font-['DM_Sans',sans-serif] text-sm sm:text-base text-[#4A4744] leading-relaxed">
                    {item.testFunction}
                  </p>
                </div>

                {/* Standard Compliance in Mono Font */}
                <div className="lg:col-span-2 lg:text-right">
                  <span className="inline-block font-['JetBrains_Mono',monospace] text-xs text-[#2D2D2D] bg-white border border-[#E8E4DF] px-3 py-1.5 rounded">
                    {item.standardCompliance}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Understated Quality Statement / Certification Note */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-xl bg-white border border-[#E8E4DF] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="font-['DM_Sans',sans-serif] font-bold text-base sm:text-lg text-[#2D2D2D]">
              ISO 9001:2015 Certified Process Control
            </h4>
            <p className="font-['DM_Sans',sans-serif] text-sm text-[#6B6560] leading-relaxed">
              Every production melt is analyzed via spectrometer before pouring. Physical test bars and Mill Test Certificates (MTC) are supplied with each dispatch batch.
            </p>
          </div>
          <div className="shrink-0 font-['JetBrains_Mono',monospace] text-xs text-[#9B6B4A] bg-[#FAFAF7] border border-[#E8E4DF] px-4 py-2.5 rounded-lg text-center">
            Heat-Code Traceable
          </div>
        </div>

      </div>
    </section>
  );
};

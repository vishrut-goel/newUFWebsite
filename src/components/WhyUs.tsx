
import React, { useState } from 'react';
import { Award, Factory, Gauge, Leaf, ShieldCheck, X, Maximize2 } from 'lucide-react';
import { CLIENT_LOGOS, CORE_STATS, COMPANY_INFO } from '../data/siteContent';

const differentiators = [
  {
    icon: Factory,
    title: 'Casting + machining under one roof',
    text: 'One team handles foundry production, machining, inspection, and dispatch for tighter control and fewer handoffs.',
  },
  {
    icon: Gauge,
    title: 'Precision that procurement can trust',
    text: 'Machine shop capability, CMM inspection, and process discipline support repeatable OEM-grade output.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality systems built in',
    text: 'ISO 9001:2015 certification and structured inspection help ensure accountability from melt to shipment.',
  },
  {
    icon: Leaf,
    title: 'Responsible manufacturing',
    text: 'Cleaner energy, water reuse, and material recovery are built into the plant’s long-term operating model.',
  },
];

export const WhyUs: React.FC = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#FAFAF7] text-[#2D2D2D] border-t border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* TOP LEFT: Editorial Intro & Stats (Spans 5 Columns) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-px bg-[#9B6B4A] mb-4" />
              <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#6B6560] font-['DM_Sans',sans-serif]">
                Why us
              </p>
            </div>

            <h2 className="font-['Abel',sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#2D2D2D] font-normal tracking-tight leading-tight">
              The proof buyers look for is built into the plant.
            </h2>

            <p className="text-base sm:text-lg text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed">
              A world-class industrial website should answer the real buyer questions quickly: who trusts you, how you control quality, and what makes your process dependable at scale.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {CORE_STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#E8E4DF] bg-white p-4">
                  <div className="font-['Abel',sans-serif] text-2xl text-[#2D2D2D] tracking-tight">{stat.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#6B6560] font-['DM_Sans',sans-serif]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TOP RIGHT: All 4 Feature Cards (Spans 7 Columns, arranged as 2x2 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-[#E8E4DF] bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#F5EDE5] border border-[#E8E4DF] flex items-center justify-center text-[#9B6B4A] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-['Abel',sans-serif] text-2xl text-[#2D2D2D] font-normal tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM LEFT / CENTER: Client Relationships (Spans Columns 1 through 8 to align flush with ISO card) */}
          <div className="lg:col-span-8 mt-2 rounded-2xl border border-[#E8E4DF] bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#9B6B4A] font-['DM_Sans',sans-serif]">
                Trusted by leading OEMs
              </div>
              <h3 className="mt-2 font-['Abel',sans-serif] text-2xl text-[#2D2D2D] font-normal tracking-tight">
                Client relationships that validate the brand.
              </h3>
              <p className="mt-2 text-sm text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed max-w-xl">
                The old site had a client-logo section for a reason: these names do a lot of selling on their own.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {CLIENT_LOGOS.map((client) => (
                <div key={client.name} className="rounded-xl border border-[#E8E4DF] bg-[#FAFAF7] px-4 py-3 flex items-center justify-between gap-2 min-h-[80px]">
                  <div>
                    <div className="text-sm font-medium text-[#2D2D2D] font-['DM_Sans',sans-serif]">
                      {client.label}
                    </div>
                    <div className="mt-0.5 text-[10px] text-[#6B6560] font-['DM_Sans',sans-serif] leading-tight">
                      {client.name}
                    </div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9B6B4A] shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM RIGHT: ISO Certification Card (Spans Columns 9 through 12, perfectly aligned under Responsible Manufacturing) */}
          <div className="lg:col-span-4 mt-2 rounded-2xl border border-[#E8E4DF] bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#F5EDE5] border border-[#E8E4DF] flex items-center justify-center text-[#9B6B4A] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="w-full min-w-0">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#9B6B4A] font-['DM_Sans',sans-serif]">
                  ISO certification
                </div>
                <h3 className="mt-2 font-['Abel',sans-serif] text-2xl text-[#2D2D2D] font-normal tracking-tight">
                  {COMPANY_INFO.certified}
                </h3>
                <p className="mt-2 text-sm text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed">
                  Click the certificate tile to preview it in full size.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCertOpen(true)}
              className="mt-4 w-full aspect-[4/3] rounded-2xl border border-dashed border-[#D9D3CB] bg-[linear-gradient(180deg,#F8F5F0_0%,#F3F0EB_100%)] p-2 cursor-zoom-in hover:border-[#C49A7C] transition-colors overflow-hidden relative"
            >
              <img
                src="/test-assets/iso-sample.jpg"
                alt="ISO certificate sample"
                className="w-full h-full object-cover rounded-xl border border-[#E8E4DF] bg-white"
              />
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 border border-[#E8E4DF] flex items-center justify-center text-[#2D2D2D] shadow-sm">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* ISO Certificate Lightbox Modal */}
      {isCertOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#2D2D2D]/70 backdrop-blur-md"
          onClick={() => setIsCertOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl border border-[#E8E4DF] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsCertOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 border border-[#E8E4DF] flex items-center justify-center text-[#2D2D2D] hover:bg-white transition-colors"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)]">
              <div className="bg-[#FAFAF7] p-4 sm:p-6 flex items-center justify-center">
                <img
                  src="/test-assets/iso-sample.jpg"
                  alt="ISO certificate preview"
                  className="max-h-[78vh] w-full object-contain rounded-xl border border-[#E8E4DF] bg-white"
                />
              </div>

              <div className="p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-[#E8E4DF] bg-white flex flex-col justify-center gap-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#9B6B4A] font-['DM_Sans',sans-serif]">
                  Certificate preview
                </div>
                <h3 className="font-['Abel',sans-serif] text-3xl text-[#2D2D2D] font-normal tracking-tight leading-tight">
                  ISO 9001 certificate image
                </h3>
                <p className="text-sm text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed">
                  This modal is a temporary lightbox test. Once the real certificate is available, the same interaction can be used for a cleaner trust moment.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCertOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#9B6B4A] hover:bg-[#8A5D3F] text-white text-sm font-medium transition-colors cursor-pointer font-['DM_Sans',sans-serif]"
                >
                  Close preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

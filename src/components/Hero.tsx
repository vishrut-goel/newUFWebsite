import React from 'react';
import { Play } from 'lucide-react';
import { COMPANY_INFO, CLIENT_LOGOS } from '../data/siteContent';

interface HeroProps {
  onOpenRfq: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfq }) => {
  return (
    <section className="w-full bg-[#FAFAF7] border-b border-[#E8E4DF] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Overview (~60% width on desktop) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Understated Location & Industry Line */}
            <div className="space-y-3">
              <div className="w-10 h-px bg-[#9B6B4A] mb-4" />
              <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#6B6560] font-['DM_Sans',sans-serif]">
                Iron &amp; Steel Foundry — Ambala, India
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-[#E8E4DF] bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6B6560] font-['DM_Sans',sans-serif]">
                  ISO 9001:2015
                </span>
                <span className="inline-flex items-center rounded-full border border-[#E8E4DF] bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6B6560] font-['DM_Sans',sans-serif]">
                  Foundry + CNC
                </span>
                <span className="inline-flex items-center rounded-full border border-[#E8E4DF] bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6B6560] font-['DM_Sans',sans-serif]">
                  Since 1964
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Abel',sans-serif] text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#2D2D2D] font-normal tracking-tight">
              Castings &amp; Full CNC Machining Under One Roof
            </h1>

            {/* Factual Subtext */}
            <p className="text-base sm:text-lg text-[#6B6560] leading-relaxed font-normal font-['DM_Sans',sans-serif] max-w-2xl">
              Operating from our {COMPANY_INFO.plantArea.toLowerCase().replace(' land area', '')} facility in Ambala, Haryana, Uttam Foundries manufactures gray and ductile iron castings from 0.5 to 150 kg with complete in-house CNC machining. Certified to ISO 9001:2015, we produce finished components for major tractor and industrial OEMs, including Mahindra &amp; Mahindra, TMTL (Eicher), and Sonalika Tractors.
            </p>

            {/* Two Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenRfq}
                className="bg-[#9B6B4A] hover:bg-[#8A5D3F] text-white text-sm sm:text-base font-medium px-6 py-3.5 rounded-lg transition-colors cursor-pointer font-['DM_Sans',sans-serif]"
              >
                Request a Quote
              </button>

              <a
                href="#capabilities"
                className="border border-[#E8E4DF] bg-white hover:bg-[#F3F0EB] text-[#2D2D2D] text-sm sm:text-base font-medium px-6 py-3.5 rounded-lg transition-colors font-['DM_Sans',sans-serif]"
              >
                View Capabilities
              </a>
            </div>

            {/* Plain Text Key Stats with Dot Separators */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs sm:text-sm font-['DM_Sans',sans-serif]">
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E4DF] text-[#6B6560]">400 T/mo capacity</span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E4DF] text-[#6B6560]">32+ CNC machines</span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E4DF] text-[#6B6560]">0.5–150 kg range</span>
              <span className="px-3 py-1.5 rounded-full bg-[#F5EDE5] border border-[#E8E4DF] text-[#2D2D2D] font-['JetBrains_Mono',monospace]">±0.01mm tolerance</span>
            </div>

            {/* OEM Partners Mention */}
            <div className="pt-4 border-t border-[#E8E4DF] text-xs text-[#6B6560] font-['DM_Sans',sans-serif]">
              <span className="text-[#2D2D2D] font-medium mr-2">Supplying OEMs:</span>
              {CLIENT_LOGOS.map((client, idx) => (
                <span key={idx}>
                  {idx > 0 && <span className="mx-1.5 text-[#E8E4DF]">|</span>}
                  {client.label || client.name}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Media Placeholder (~40% width on desktop) */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-xl bg-[linear-gradient(180deg,#F8F5F0_0%,#F3F0EB_100%)] border border-[#E8E4DF] overflow-hidden p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="h-full rounded-2xl border border-dashed border-[#D9D3CB] bg-[radial-gradient(circle_at_top_left,_rgba(196,154,124,0.12),_transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,255,255,0.35))] flex flex-col justify-between p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-[#E8E4DF] bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] font-['DM_Sans',sans-serif]">
                      Facility media placeholder
                    </div>
                    <p className="mt-4 text-sm font-medium text-[#2D2D2D] font-['DM_Sans',sans-serif]">
                      Video and plant photography will live here.
                    </p>
                    <p className="mt-1 text-xs text-[#6B6560] font-['DM_Sans',sans-serif] max-w-sm leading-relaxed">
                      Keep this area reserved for a cinematic plant overview, then swap in motion footage once assets are ready.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white border border-[#E8E4DF] flex items-center justify-center text-[#9B6B4A] shadow-xs shrink-0">
                    <Play className="w-5 h-5 fill-[#9B6B4A] translate-x-0.5" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {['Melting', 'Molding', 'Machining'].map((label) => (
                    <div key={label} className="rounded-xl bg-white/80 border border-[#E8E4DF] px-3 py-3 text-left">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#9B6B4A] font-['DM_Sans',sans-serif]">Stage</div>
                      <div className="mt-1 text-sm text-[#2D2D2D] font-['Abel',sans-serif] tracking-tight">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

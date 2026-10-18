import React from 'react';
import { Droplets, Leaf, Recycle, SunMedium, TreePine } from 'lucide-react';

const sustainabilityPillars = [
  {
    icon: SunMedium,
    title: 'Solar power on site',
    text: 'Rooftop solar supports cleaner energy use and produces up to 2,000 units per month.',
  },
  {
    icon: Droplets,
    title: 'Water conservation',
    text: 'Rainwater harvesting and greywater reuse save up to 1.5 lakh liters of water each month.',
  },
  {
    icon: Recycle,
    title: 'Circular material use',
    text: 'Single-use plastics are recycled, and foundry waste is regenerated, remelted, and reused.',
  },
  {
    icon: TreePine,
    title: 'Green growth goals',
    text: 'Tree plantation targets aim for 200 trees annually across the plant and nearby villages.',
  },
];

const mediaFrames = [
  {
    label: 'Solar rooftop',
    caption: 'Dedicated clean-energy capacity',
  },
  {
    label: 'Water reuse loop',
    caption: 'Harvesting and greywater recovery',
  },
  {
    label: 'Waste recovery',
    caption: 'Circular reuse of foundry by-products',
  },
];

export const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-24 sm:py-32 bg-white text-[#2D2D2D] border-t border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Editorial Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="w-10 h-px bg-[#9B6B4A] mb-4" />
              <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#6B6560] font-['DM_Sans',sans-serif]">
                Sustainability & responsibility
              </p>
            </div>

            <h2 className="font-['Abel',sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#2D2D2D] font-normal tracking-tight leading-tight">
              A practical sustainability program, not just a statement.
            </h2>

            <p className="text-base sm:text-lg text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed max-w-xl">
              Uttam Foundries &amp; Ispat Pvt. Ltd. has treated sustainability as an operating discipline: cleaner energy, lower water demand, circular material recovery, and visible environmental goals tied to long-term growth.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Solar energy', 'Water reuse', 'Recycling', 'Tree plantation', 'SDG-aligned'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#E8E4DF] bg-[#FAFAF7] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6B6560] font-['DM_Sans',sans-serif]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white border border-[#E8E4DF] flex items-center justify-center text-[#9B6B4A] shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-['Abel',sans-serif] text-2xl text-[#2D2D2D] font-normal tracking-tight">
                    Aligned with UN Sustainable Development Goals
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed">
                    The company’s goals and targets support a greener manufacturing model while continuing to deliver high-quality castings and machined parts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sustainabilityPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-[#E8E4DF] bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#F5EDE5] border border-[#E8E4DF] flex items-center justify-center text-[#9B6B4A] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-['Abel',sans-serif] text-2xl text-[#2D2D2D] font-normal tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-base text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mediaFrames.map((frame) => (
                <div
                  key={frame.label}
                  className="rounded-2xl border border-dashed border-[#D9D3CB] bg-[linear-gradient(180deg,#F8F5F0_0%,#F3F0EB_100%)] p-4 sm:p-5 min-h-44 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#9B6B4A] font-['DM_Sans',sans-serif]">
                      Media placeholder
                    </div>
                    <div className="mt-3 aspect-[4/3] rounded-xl border border-[#E8E4DF] bg-white/70 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#FAFAF7] border border-[#E8E4DF] flex items-center justify-center text-[#9B6B4A]">
                        <Recycle className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-['Abel',sans-serif] text-xl text-[#2D2D2D] tracking-tight">
                      {frame.label}
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed">
                      {frame.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { COMPANY_INFO, COMPANY_HISTORY, MANAGEMENT_TEAM, CLIENT_LOGOS } from '../data/siteContent';

export const AboutCompany: React.FC = () => {
  // Top 3 management leadership (Chairman, Director Technical, Director Commercial)
  const topManagement = MANAGEMENT_TEAM.slice(0, 3);

  // Format client names from CLIENT_LOGOS data
  const clientSummary = CLIENT_LOGOS.map((client) => {
    if (client.name.includes('Mahindra')) return 'Mahindra & Mahindra';
    if (client.name.includes('TMTL')) return 'TMTL (Eicher)';
    if (client.name.includes('International')) return 'International Tractors (Sonalika)';
    return client.name;
  }).join(', ');

  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-[#2D2D2D] border-t border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Pull-Quote */}
        <div className="mb-20 sm:mb-24 max-w-4xl">
          <blockquote className="font-['Abel',sans-serif] italic text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.3] text-[#2D2D2D] tracking-tight font-normal">
            &ldquo;{COMPANY_HISTORY.quote}&rdquo;
          </blockquote>
        </div>

        {/* Asymmetric Two-Column Split: Narrative Story & Key Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Company Story */}
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-widest text-[#9B6B4A] font-mono mb-3 font-semibold">
              History & Origins
            </div>
            <h2 className="font-['Abel',sans-serif] text-2xl sm:text-3xl text-[#2D2D2D] font-normal tracking-tight mb-6">
              {COMPANY_HISTORY.title}
            </h2>

            <div className="space-y-5 text-base text-[#4A4744] font-['DM_Sans',sans-serif] leading-relaxed">
              <p>{COMPANY_HISTORY.text1}</p>
              <p>{COMPANY_HISTORY.text2}</p>
              <p>{COMPANY_HISTORY.text3}</p>
            </div>
          </div>

          {/* Right Column: Stacked Key Facts (No cards, no icons, no borders) */}
          <div className="lg:col-span-4 lg:pl-6 space-y-7 pt-1 lg:pt-10">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6560] font-['DM_Sans',sans-serif]">Founded</div>
              <div className="text-lg font-bold text-[#2D2D2D] mt-0.5 font-['DM_Sans',sans-serif]">{COMPANY_INFO.foundedYear}</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6560] font-['DM_Sans',sans-serif]">Founder</div>
              <div className="text-lg font-bold text-[#2D2D2D] mt-0.5 font-['DM_Sans',sans-serif]">{COMPANY_INFO.founder}</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6560] font-['DM_Sans',sans-serif]">Location</div>
              <div className="text-lg font-bold text-[#2D2D2D] mt-0.5 font-['DM_Sans',sans-serif]">Ambala, Haryana</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6560] font-['DM_Sans',sans-serif]">Plant Area</div>
              <div className="text-lg font-bold text-[#2D2D2D] mt-0.5 font-['DM_Sans',sans-serif]">30,000 m²</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6560] font-['DM_Sans',sans-serif]">Monthly Capacity</div>
              <div className="text-lg font-bold text-[#2D2D2D] mt-0.5 font-['DM_Sans',sans-serif]">400 Tonnes</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6560] font-['DM_Sans',sans-serif]">Green Energy</div>
              <div className="text-lg font-bold text-[#2D2D2D] mt-0.5 font-['DM_Sans',sans-serif]">100 KW Solar</div>
            </div>
          </div>

        </div>

        {/* Management Leadership: Top 3 only in horizontal layout */}
        <div className="mt-20 sm:mt-24 pt-16 border-t border-[#E8E4DF]">
          <h3 className="font-['Abel',sans-serif] text-2xl sm:text-3xl text-[#2D2D2D] font-normal tracking-tight mb-10">
            Leadership
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {topManagement.map((member, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9B6B4A] text-white flex items-center justify-center font-medium text-sm shrink-0">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-[#2D2D2D] font-['DM_Sans',sans-serif] leading-tight">
                    {member.name}
                  </h4>
                  <div className="text-xs text-[#9B6B4A] font-medium font-['DM_Sans',sans-serif]">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#6B6560] leading-relaxed pt-1 font-['DM_Sans',sans-serif]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos: Simple text line at the bottom */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E8E4DF]">
          <p className="text-sm text-[#6B6560] font-['DM_Sans',sans-serif]">
            <span className="text-[#2D2D2D] font-medium">Trusted by</span> {clientSummary}
          </p>
        </div>

      </div>
    </section>
  );
};

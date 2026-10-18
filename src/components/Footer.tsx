import React from 'react';
import { COMPANY_INFO } from '../data/siteContent';

interface FooterProps {
  onOpenRfq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfq }) => {
  return (
    <footer className="bg-[#2D2D2D] text-[#D4CECA] border-t border-[#3E3A36] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top CTA: Simple, one-line, not a huge banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 mb-14 border-b border-[#3E3A36]">
          <div>
            <h3 className="font-['Abel',sans-serif] text-2xl sm:text-3xl font-normal" style={{ color: '#FAFAF7' }}>
              Ready to discuss your next casting project?
            </h3>
            <p className="mt-1 text-sm text-[#A8A29E] font-['DM_Sans',sans-serif]">
              Send your CAD drawings or component specifications for technical review.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#C49A7C] font-['DM_Sans',sans-serif]">
              Typical response within one business day
            </p>
          </div>
          <button
            onClick={onOpenRfq}
            className="bg-[#9B6B4A] hover:bg-[#8A5D3F] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer font-['DM_Sans',sans-serif] whitespace-nowrap self-start sm:self-auto"
          >
            Get a Quote
          </button>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-[#3E3A36]">
          
          {/* Col 1: Company Name, Tagline, ISO */}
          <div className="space-y-3 font-['DM_Sans',sans-serif]">
            <h4 className="text-white font-bold tracking-wide text-sm uppercase">
              UTTAM FOUNDRIES &amp; ISPAT
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs font-['JetBrains_Mono',monospace] text-[#C49A7C] pt-1">
              {COMPANY_INFO.certified}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3 font-['DM_Sans',sans-serif]">
            <h4 className="text-xs font-['JetBrains_Mono',monospace] uppercase tracking-wider text-[#A8A29E]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-white transition-colors">
                  Materials
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors">
                  Quality
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3 font-['DM_Sans',sans-serif]">
            <h4 className="text-xs font-['JetBrains_Mono',monospace] uppercase tracking-wider text-[#A8A29E]">
              Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={`mailto:${COMPANY_INFO.salesEmail}`} 
                  className="font-['JetBrains_Mono',monospace] hover:text-white transition-colors"
                >
                  {COMPANY_INFO.salesEmail}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${COMPANY_INFO.rfqEmail}`} 
                  className="font-['JetBrains_Mono',monospace] hover:text-white transition-colors"
                >
                  {COMPANY_INFO.rfqEmail}
                </a>
              </li>
              <li className="font-['JetBrains_Mono',monospace] text-[#A8A29E]">
                {COMPANY_INFO.phone}
              </li>
              <li className="pt-1">
                <a 
                  href={COMPANY_INFO.whatsApp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C49A7C] hover:text-white transition-colors underline underline-offset-4"
                >
                  WhatsApp Direct
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Plant Location */}
          <div className="space-y-3 font-['DM_Sans',sans-serif]">
            <h4 className="text-xs font-['JetBrains_Mono',monospace] uppercase tracking-wider text-[#A8A29E]">
              Plant Location
            </h4>
            <p className="text-xs text-[#D4CECA] leading-relaxed">
              {COMPANY_INFO.location}
            </p>
            <p className="text-xs font-['JetBrains_Mono',monospace] text-[#A8A29E]">
              30,000 m² Facility Land Area
            </p>
          </div>

        </div>

        {/* Bottom: Copyright & Est. 1964 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['DM_Sans',sans-serif] text-[#8C857E]">
          <div>
            &copy; {new Date().getFullYear()} Uttam Foundries &amp; Ispat Pvt. Ltd. All rights reserved.
          </div>
          <div className="font-['JetBrains_Mono',monospace] text-[11px]">
            Est. {COMPANY_INFO.foundedYear}
          </div>
        </div>

      </div>
    </footer>
  );
};

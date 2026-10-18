import React, { useState } from 'react';
import { Type, ChevronDown, ChevronUp, X } from 'lucide-react';

export interface FontPairing {
  id: string;
  label: string;
  description: string;
  headingFont: string;
  bodyFont: string;
  /** CSS font-family value for headings */
  headingStack: string;
  /** CSS font-family value for body */
  bodyStack: string;
  vibe: string;
}

export const FONT_PAIRINGS: FontPairing[] = [
  {
    id: 'inter-inter',
    label: 'Inter / Inter',
    description: 'Clean & modern geometric sans — the Google standard.',
    headingFont: 'Inter',
    bodyFont: 'Inter',
    headingStack: "'Inter', system-ui, sans-serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    vibe: 'Tech / Modern',
  },
  {
    id: 'poppins-inter',
    label: 'Poppins / Inter',
    description: 'Rounded geometric headings paired with clean body text.',
    headingFont: 'Poppins',
    bodyFont: 'Inter',
    headingStack: "'Poppins', system-ui, sans-serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    vibe: 'Friendly / Professional',
  },
  {
    id: 'montserrat-source',
    label: 'Montserrat / Source Sans 3',
    description: 'Bold industrial headings with highly readable body paragraphs.',
    headingFont: 'Montserrat',
    bodyFont: 'Source Sans 3',
    headingStack: "'Montserrat', system-ui, sans-serif",
    bodyStack: "'Source Sans 3', system-ui, sans-serif",
    vibe: 'Industrial / Sturdy',
  },
  {
    id: 'playfair-lato',
    label: 'Playfair Display / Lato',
    description: 'Elegant serif headings with neutral humanist body text.',
    headingFont: 'Playfair Display',
    bodyFont: 'Lato',
    headingStack: "'Playfair Display', Georgia, serif",
    bodyStack: "'Lato', system-ui, sans-serif",
    vibe: 'Premium / Heritage',
  },
  {
    id: 'raleway-roboto',
    label: 'Raleway / Roboto',
    description: "Thin-weight elegant headings with Roboto's crisp body text.",
    headingFont: 'Raleway',
    bodyFont: 'Roboto',
    headingStack: "'Raleway', system-ui, sans-serif",
    bodyStack: "'Roboto', system-ui, sans-serif",
    vibe: 'Elegant / Corporate',
  },
  {
    id: 'outfit-worksans',
    label: 'Outfit / Work Sans',
    description: 'Geometric contemporary headings with a warm, practical body.',
    headingFont: 'Outfit',
    bodyFont: 'Work Sans',
    headingStack: "'Outfit', system-ui, sans-serif",
    bodyStack: "'Work Sans', system-ui, sans-serif",
    vibe: 'Contemporary / Warm',
  },
  {
    id: 'dmsans-dmsans',
    label: 'DM Sans / DM Sans',
    description: 'Low-contrast geometric sans — subtle, minimal, sharp.',
    headingFont: 'DM Sans',
    bodyFont: 'DM Sans',
    headingStack: "'DM Sans', system-ui, sans-serif",
    bodyStack: "'DM Sans', system-ui, sans-serif",
    vibe: 'Minimal / Startup',
  },
  {
    id: 'montserrat-montserrat',
    label: 'Montserrat / Montserrat',
    description: 'Bold all-Montserrat — urban and geometric throughout.',
    headingFont: 'Montserrat',
    bodyFont: 'Montserrat',
    headingStack: "'Montserrat', system-ui, sans-serif",
    bodyStack: "'Montserrat', system-ui, sans-serif",
    vibe: 'Urban / Geometric',
  },
  {
    id: 'poppins-worksans',
    label: 'Poppins / Work Sans',
    description: 'Rounded headlines with warm legible paragraphs.',
    headingFont: 'Poppins',
    bodyFont: 'Work Sans',
    headingStack: "'Poppins', system-ui, sans-serif",
    bodyStack: "'Work Sans', system-ui, sans-serif",
    vibe: 'Approachable / Warm',
  },
];

interface FontSwitcherProps {
  activePairingId: string;
  onSelectPairing: (pairing: FontPairing) => void;
}

export const FontSwitcher: React.FC<FontSwitcherProps> = ({
  activePairingId,
  onSelectPairing,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const activePairing = FONT_PAIRINGS.find((p) => p.id === activePairingId) || FONT_PAIRINGS[0];

  return (
    <div className="fixed bottom-6 right-6 z-50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Expanded Panel */}
      {isExpanded && (
        <div className="mb-3 bg-white rounded-2xl border border-slate-200 shadow-2xl w-[380px] max-h-[70vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-200">
          {/* Panel Header */}
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Type className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Font Pairing Tester</h3>
                <p className="text-[10px] text-slate-500">Compare heading + body font combos live</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Active Pairing Preview */}
          <div className="px-5 py-4 border-b border-slate-200 bg-amber-50/50 shrink-0">
            <div className="text-[10px] font-mono text-amber-700 uppercase tracking-wider font-bold mb-2">
              Currently Active
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="text-xl font-extrabold text-slate-900 tracking-tight"
                style={{ fontFamily: activePairing.headingStack }}
              >
                {activePairing.headingFont}
              </span>
              <span className="text-slate-400 text-xs">/</span>
              <span
                className="text-sm text-slate-600"
                style={{ fontFamily: activePairing.bodyStack }}
              >
                {activePairing.bodyFont}
              </span>
            </div>
            <p
              className="text-xs text-slate-500 mt-1"
              style={{ fontFamily: activePairing.bodyStack }}
            >
              {activePairing.description}
            </p>
          </div>

          {/* Pairing List */}
          <div className="overflow-y-auto flex-1 p-2">
            {FONT_PAIRINGS.map((pairing) => {
              const isActive = pairing.id === activePairingId;
              return (
                <button
                  key={pairing.id}
                  onClick={() => onSelectPairing(pairing)}
                  className={`w-full text-left p-3.5 rounded-xl mb-1 transition-all border ${
                    isActive
                      ? 'bg-amber-50 border-amber-300 ring-1 ring-amber-200'
                      : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="text-sm font-bold text-slate-900"
                        style={{ fontFamily: pairing.headingStack }}
                      >
                        {pairing.headingFont}
                      </span>
                      <span className="text-slate-300 text-xs">/</span>
                      <span
                        className="text-xs text-slate-600"
                        style={{ fontFamily: pairing.bodyStack }}
                      >
                        {pairing.bodyFont}
                      </span>
                    </div>
                    <span
                      className={`text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-amber-200 text-amber-900'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {pairing.vibe}
                    </span>
                  </div>

                  {/* Live mini-preview */}
                  <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                    <p
                      className="text-base font-extrabold text-slate-900 tracking-tight leading-tight"
                      style={{ fontFamily: pairing.headingStack }}
                    >
                      Precision Castings & CNC Machining
                    </p>
                    <p
                      className="text-[11px] text-slate-500 mt-1 leading-relaxed"
                      style={{ fontFamily: pairing.bodyStack }}
                    >
                      ISO 9001:2015 certified foundry delivering ±0.01 mm tolerance components for OEMs since 1964.
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer tip */}
          <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 shrink-0">
            <p className="text-[10px] text-slate-400 font-mono text-center">
              This tester is temporary — remove it before going live.
            </p>
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-2xl border transition-all ${
          isExpanded
            ? 'bg-amber-600 text-white border-amber-500 hover:bg-amber-700'
            : 'bg-slate-900 text-white border-slate-800 hover:bg-slate-800'
        }`}
      >
        <Type className="w-4 h-4 text-amber-400" />
        <span className="text-xs font-bold">
          {activePairing.headingFont} / {activePairing.bodyFont}
        </span>
        {isExpanded ? (
          <ChevronDown className="w-3.5 h-3.5 text-white/70" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-white/70" />
        )}
      </button>
    </div>
  );
};

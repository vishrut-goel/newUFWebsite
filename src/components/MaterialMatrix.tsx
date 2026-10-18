import React, { useState, useMemo } from 'react';
import { MATERIAL_GRADES } from '../data/siteContent';

interface MaterialMatrixProps {
  onSelectGradeForRfq: (gradeName: string) => void;
}

export const MaterialMatrix: React.FC<MaterialMatrixProps> = ({ onSelectGradeForRfq }) => {
  const [filterType, setFilterType] = useState<'All' | 'Ductile / SG Iron' | 'Gray Iron'>('All');
  const [expandedGradeId, setExpandedGradeId] = useState<string | null>(null);

  const filteredGrades = useMemo(() => {
    if (filterType === 'All') return MATERIAL_GRADES;
    return MATERIAL_GRADES.filter((grade) => grade.type === filterType);
  }, [filterType]);

  const toggleRowExpansion = (gradeId: string) => {
    setExpandedGradeId((prev) => (prev === gradeId ? null : gradeId));
  };

  return (
    <section id="materials" className="py-20 lg:py-28 bg-[#F3F0EB] border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 lg:mb-10 text-left">
          <div className="w-10 h-px bg-[#9B6B4A] mb-4" />
          <h2 className="font-['Abel',sans-serif] text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#2D2D2D] font-normal tracking-tight">
            Material Grades
          </h2>
          <p className="text-base sm:text-lg text-[#6B6560] font-['DM_Sans',sans-serif] mt-2 max-w-2xl leading-relaxed">
            Cross-reference specifications across Indian (IS), American (ASTM), and European (EN) standards. All melt heats are spectro-analyzed before pouring.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 border-b border-[#E8E4DF] overflow-x-auto pb-1">
          <nav className="flex items-center gap-6 sm:gap-8 min-w-max pb-3" aria-label="Material filters">
            {(['All', 'Ductile / SG Iron', 'Gray Iron'] as const).map((tab) => {
              const isActive = filterType === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilterType(tab)}
                  className={`relative pb-1 text-sm sm:text-base font-['DM_Sans',sans-serif] transition-colors cursor-pointer text-left ${
                    isActive
                      ? 'text-[#2D2D2D] font-medium'
                      : 'text-[#6B6560] hover:text-[#2D2D2D]'
                  }`}
                >
                  <span>{tab}</span>
                  {isActive && (
                    <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#9B6B4A]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl border border-[#E8E4DF] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#FAFAF7] border-b border-[#E8E4DF] text-xs font-medium text-[#6B6560] font-['DM_Sans',sans-serif]">
                  <th scope="col" className="py-3.5 px-4 sm:px-5 whitespace-nowrap">IS Grade</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-5 whitespace-nowrap">ASTM Grade</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-5 whitespace-nowrap">EN Grade</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-5 whitespace-nowrap">Tensile</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-5 whitespace-nowrap">Yield</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-5 whitespace-nowrap">Elongation</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-5 whitespace-nowrap">Hardness</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-5 text-right whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E4DF] font-['DM_Sans',sans-serif]">
                {filteredGrades.map((grade) => {
                  const isExpanded = expandedGradeId === grade.id;
                  return (
                    <React.Fragment key={grade.id}>
                      <tr
                        onClick={() => toggleRowExpansion(grade.id)}
                        className={`transition-colors cursor-pointer group ${
                          isExpanded ? 'bg-[#FAFAF7]' : 'hover:bg-[#FAFAF7]/70'
                        }`}
                      >
                        {/* IS Grade */}
                        <td className="py-4 px-4 sm:px-5 font-medium text-[#2D2D2D] whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span 
                              className={`text-[9px] text-[#6B6560] transition-transform duration-200 ${
                                isExpanded ? 'rotate-90 text-[#9B6B4A]' : ''
                              }`}
                              aria-hidden="true"
                            >
                              ▶
                            </span>
                            <span>{grade.isGrade}</span>
                          </div>
                        </td>

                        {/* ASTM Grade */}
                        <td className="py-4 px-4 sm:px-5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#2D2D2D] whitespace-nowrap">
                          {grade.astmGrade}
                        </td>

                        {/* EN Grade */}
                        <td className="py-4 px-4 sm:px-5 font-['JetBrains_Mono',monospace] text-xs text-[#6B6560] whitespace-nowrap">
                          {grade.enGrade}
                        </td>

                        {/* Tensile */}
                        <td className="py-4 px-4 sm:px-5 font-['JetBrains_Mono',monospace] text-xs text-[#2D2D2D] whitespace-nowrap">
                          {grade.tensileStrength}
                        </td>

                        {/* Yield */}
                        <td className="py-4 px-4 sm:px-5 font-['JetBrains_Mono',monospace] text-xs text-[#2D2D2D] whitespace-nowrap">
                          {grade.yieldStrength}
                        </td>

                        {/* Elongation */}
                        <td className="py-4 px-4 sm:px-5 font-['JetBrains_Mono',monospace] text-xs text-[#2D2D2D] whitespace-nowrap">
                          {grade.elongation}
                        </td>

                        {/* Hardness */}
                        <td className="py-4 px-4 sm:px-5 font-['JetBrains_Mono',monospace] text-xs text-[#2D2D2D] whitespace-nowrap">
                          {grade.hardness}
                        </td>

                        {/* Action */}
                        <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectGradeForRfq(grade.astmGrade);
                            }}
                            className="text-xs font-medium text-[#9B6B4A] hover:text-[#8A5D3F] px-3 py-1.5 rounded-lg border border-[#E8E4DF] hover:border-[#9B6B4A] bg-white transition-colors cursor-pointer"
                          >
                            Select
                          </button>
                        </td>
                      </tr>

                      {/* Expandable Row Content */}
                      {isExpanded && (
                        <tr className="bg-[#FAFAF7]">
                          <td colSpan={8} className="py-5 px-5 sm:px-7 border-b border-[#E8E4DF]">
                            <div className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-['DM_Sans',sans-serif]">
                                
                                {/* Microstructure */}
                                <div className="space-y-1.5">
                                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#6B6560] block">
                                    Microstructure
                                  </span>
                                  <p className="text-sm text-[#2D2D2D] font-medium leading-relaxed">
                                    {grade.microstructure}
                                  </p>
                                </div>

                                {/* Typical Applications */}
                                <div className="space-y-1.5">
                                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#6B6560] block">
                                    Typical Applications
                                  </span>
                                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                                    {grade.typicalApplications.map((app, idx) => (
                                      <span
                                        key={idx}
                                        className="bg-white border border-[#E8E4DF] px-2.5 py-1 rounded-md text-xs text-[#2D2D2D]"
                                      >
                                        {app}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Key Properties */}
                                <div className="space-y-1.5">
                                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#6B6560] block">
                                    Key Properties
                                  </span>
                                  <ul className="space-y-1 text-xs text-[#6B6560]">
                                    {grade.keyProperties.map((prop, idx) => (
                                      <li key={idx} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#9B6B4A] shrink-0" />
                                        <span>{prop}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                              </div>

                              {/* Bottom Action Strip */}
                              <div className="pt-3 border-t border-[#E8E4DF] flex flex-wrap items-center justify-between gap-3">
                                <span className="text-xs text-[#6B6560]">
                                  Melt standard: ISO 945 / ASTM E1999 spectrometer verified before pouring.
                                </span>
                                <button
                                  type="button"
                                  onClick={() => onSelectGradeForRfq(grade.astmGrade)}
                                  className="bg-[#9B6B4A] hover:bg-[#8A5D3F] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
                                >
                                  Request Quote for {grade.isGrade} ({grade.astmGrade})
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note Below the Table */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-xl bg-white border border-[#E8E4DF]">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-sm font-medium text-[#2D2D2D] font-['DM_Sans',sans-serif]">
              Need a grade not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6560] font-['DM_Sans',sans-serif] leading-relaxed">
              We produce custom chemistry formulations, inoculated ductile irons, and specific hardness ranges to OEM drawings. Request custom specifications through our RFQ process.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectGradeForRfq('')}
            className="bg-[#9B6B4A] hover:bg-[#8A5D3F] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 font-['DM_Sans',sans-serif]"
          >
            Request Custom Grade
          </button>
        </div>

      </div>
    </section>
  );
};

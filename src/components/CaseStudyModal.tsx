import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectAnother?: (id: string) => void;
  allCaseStudies?: CaseStudy[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onSelectAnother,
  allCaseStudies = []
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#080A0A]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-[#111515] border border-[#2E3634] text-[#F5F7F2] p-6 sm:p-10 lg:p-12 shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        id="case-study-modal-container"
      >
        {/* Top bar with back button & close */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#181D1C]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#C8FF3D] rounded-none" />
            <span className="text-xs font-mono-code tracking-widest text-[#C8FF3D] uppercase">
              CASE STUDY // {caseStudy.clientSector}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#AEB7B2] hover:text-[#F5F7F2] hover:bg-[#181D1C] transition-colors border border-[#242C2A]"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header Title & Summary */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-[#AEB7B2] mb-3">
            <span>LOCATION: {caseStudy.location}</span>
            <span>•</span>
            <span>PRODUCTION: {caseStudy.year}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7F2] tracking-tight mb-2">
            {caseStudy.title}
          </h2>
          {caseStudy.subtitle && (
            <p className="text-sm sm:text-base font-mono-code text-[#C8FF3D] mb-4">
              {caseStudy.subtitle}
            </p>
          )}
          <p className="text-base sm:text-lg text-[#AEB7B2] leading-relaxed max-w-3xl">
            {caseStudy.summary}
          </p>
          {caseStudy.engineeringFocus && (
            <div className="mt-4 p-3.5 bg-[#080A0A] border border-[#242C2A] text-xs font-mono-code text-[#AEB7B2] max-w-3xl">
              <span className="text-[#C8FF3D] font-bold block mb-1">CORE FOCUS:</span>
              {caseStudy.engineeringFocus}
            </div>
          )}
        </div>

        {/* Interactive Case Study Content Sections */}
        <div className="space-y-12">
          
          {/* Section: Overview */}
          <div className="border-t border-[#181D1C] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <span className="text-xs font-mono-code text-[#C8FF3D]">01 // OVERVIEW</span>
              <h3 className="text-lg font-bold text-[#F5F7F2] mt-1">What was built</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-[#AEB7B2] leading-relaxed text-sm sm:text-base">
                {caseStudy.overview}
              </p>
            </div>
          </div>

          {/* Section: The Problem */}
          <div className="border-t border-[#181D1C] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <span className="text-xs font-mono-code text-[#FF6B5C]">02 // THE PROBLEM</span>
              <h3 className="text-lg font-bold text-[#F5F7F2] mt-1">What needed solving</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-[#AEB7B2] leading-relaxed text-sm sm:text-base">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* Section: Approach */}
          <div className="border-t border-[#181D1C] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <span className="text-xs font-mono-code text-[#C8FF3D]">03 // APPROACH</span>
              <h3 className="text-lg font-bold text-[#F5F7F2] mt-1">Design & engineering</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-[#AEB7B2] leading-relaxed text-sm sm:text-base">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          {/* Section: Product Features */}
          <div className="border-t border-[#181D1C] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <span className="text-xs font-mono-code text-[#C8FF3D]">04 // PRODUCT</span>
              <h3 className="text-lg font-bold text-[#F5F7F2] mt-1">Delivered capabilities</h3>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-3">
                {caseStudy.productFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#AEB7B2]">
                    <CheckCircle2 className="w-4 h-4 text-[#C8FF3D] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Technology Stack */}
          <div className="border-t border-[#181D1C] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <span className="text-xs font-mono-code text-[#C8FF3D]">05 // TECHNOLOGY</span>
              <h3 className="text-lg font-bold text-[#F5F7F2] mt-1">Architecture & tools</h3>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap gap-2 mb-3">
                {caseStudy.technologies.map((t, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-[#181D1C] border border-[#2E3634] text-xs font-mono-code text-[#F5F7F2]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {caseStudy.technologyDetails.map((td, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AEB7B2] font-mono-code">
                    <Cpu className="w-4 h-4 text-[#AEB7B2]/70 shrink-0 mt-0.5" />
                    <span>{td}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Outcome */}
          <div className="border-t border-[#181D1C] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#080A0A]/40 p-6 border border-[#242C2A]">
            <div className="md:col-span-4">
              <span className="text-xs font-mono-code text-[#C8FF3D]">06 // OUTCOME</span>
              <h3 className="text-lg font-bold text-[#F5F7F2] mt-1">Real-world results</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-[#F5F7F2] font-medium leading-relaxed text-sm sm:text-base">
                {caseStudy.outcome}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono-code text-[#AEB7B2]/60">
                <ShieldCheck className="w-4 h-4 text-[#C8FF3D]" />
                <span>Verified production deployment • Zero fabricated metrics</span>
              </div>
            </div>
          </div>

        </div>

        {/* Other Projects Quick Navigation */}
        {allCaseStudies.length > 1 && (
          <div className="mt-12 pt-8 border-t border-[#181D1C]">
            <div className="text-xs font-mono-code text-[#AEB7B2]/70 mb-4">
              EXPLORE OTHER CASE STUDIES:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {allCaseStudies
                .filter(cs => cs.id !== caseStudy.id)
                .slice(0, 4)
                .map((other) => (
                  <button
                    key={other.id}
                    onClick={() => onSelectAnother?.(other.id)}
                    className="text-left p-3 bg-[#080A0A] border border-[#242C2A] hover:border-[#C8FF3D] transition-colors group"
                  >
                    <div className="text-[10px] font-mono-code text-[#C8FF3D] mb-1">
                      {other.clientSector}
                    </div>
                    <div className="text-xs font-semibold text-[#F5F7F2] group-hover:text-[#C8FF3D] line-clamp-1">
                      {other.title}
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Close Button Footer */}
        <div className="mt-8 pt-6 border-t border-[#181D1C] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#181D1C] text-[#F5F7F2] border border-[#2E3634] hover:border-[#C8FF3D] text-sm font-medium transition-colors cursor-pointer"
          >
            Close case study
          </button>
        </div>
      </div>
    </div>
  );
};

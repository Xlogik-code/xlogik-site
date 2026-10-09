import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';
import { ProjectMockup } from './ProjectMockup';
import { CaseStudy } from '../types';

interface WorkSectionProps {
  onOpenCaseStudy: (study: CaseStudy) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenCaseStudy }) => {
  return (
    <section 
      id="work" 
      className="py-24 sm:py-32 lg:py-40 bg-[#111515] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-[#181D1C] gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-4 bg-[#C8FF3D]" />
              <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
                03 / SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F2] tracking-tight">
              Things we've built.
            </h2>
          </div>
          <p className="text-sm text-[#AEB7B2] font-mono-code max-w-sm">
            A SELECTION OF PRODUCTS AND SYSTEMS BUILT FOR DIFFERENT PROBLEMS, TEAMS, AND WORKFLOWS.
          </p>
        </div>

        {/* Asymmetric Curated Portfolio Items - 5 Real Projects */}
        <div className="space-y-24 sm:space-y-36">
          
          {/* ========================================================================= */}
          {/* PROJECT 01: FEATURED — EXPENSO                                            */}
          {/* ========================================================================= */}
          {(() => {
            const study = CASE_STUDIES.find(s => s.id === 'expenso') || CASE_STUDIES[0];
            return (
              <div 
                key={study.id} 
                className="group relative bg-[#080A0A] border border-[#242C2A] p-6 sm:p-8 lg:p-10 hover:border-[#C8FF3D]/60 transition-all duration-300 shadow-2xl"
              >
                {/* Featured Header Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-6 border-b border-[#181D1C] gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#C8FF3D] rounded-none animate-pulse" />
                    <span className="text-xs font-mono-code font-bold tracking-wider text-[#C8FF3D] uppercase">
                      01 // FEATURED PROJECT • {study.clientSector}
                    </span>
                  </div>
                  <div className="text-xs font-mono-code text-[#AEB7B2]/70">
                    {study.location} • {study.year}
                  </div>
                </div>

                {/* Project Title & Subtitle Banner */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-start">
                  <div className="lg:col-span-7">
                    <h3 
                      onClick={() => onOpenCaseStudy(study)}
                      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F2] tracking-tight group-hover:text-[#C8FF3D] transition-colors cursor-pointer"
                    >
                      {study.title}
                    </h3>
                    {study.subtitle && (
                      <p className="mt-2 text-base sm:text-lg font-mono-code text-[#C8FF3D]">
                        {study.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="lg:col-span-5 space-y-3">
                    <p className="text-sm sm:text-base text-[#AEB7B2] leading-relaxed">
                      {study.summary}
                    </p>
                    {study.engineeringFocus && (
                      <div className="p-3 bg-[#111515] border border-[#242C2A] text-xs font-mono-code text-[#AEB7B2]">
                        <span className="text-[#C8FF3D] font-bold block mb-1">ENGINEERING FOCUS:</span>
                        {study.engineeringFocus}
                      </div>
                    )}
                  </div>
                </div>

                {/* Large Featured Screenshot / Mockup Canvas */}
                <div 
                  onClick={() => onOpenCaseStudy(study)}
                  className="cursor-pointer relative bg-[#080A0A] border border-[#242C2A] p-2 hover:border-[#C8FF3D] transition-all duration-300 overflow-hidden mb-8"
                >
                  <div className="relative overflow-hidden bg-[#080A0A] transition-transform duration-500 group-hover:scale-[1.01]">
                    <ProjectMockup id={study.id} />
                  </div>
                </div>

                {/* Bottom Technical & Action Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#181D1C] gap-4 sm:gap-6">
                  {/* Technology line */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono-code text-[#AEB7B2]/60 mr-2">TECH:</span>
                    {study.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono-code text-[#AEB7B2] bg-[#181D1C] border border-[#242C2A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Interaction */}
                  <button
                    onClick={() => onOpenCaseStudy(study)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#F5F7F2] group-hover:text-[#C8FF3D] transition-colors cursor-pointer self-start sm:self-auto shrink-0"
                  >
                    <span>View case study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8FF3D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })()}

          {/* ========================================================================= */}
          {/* PROJECT 02: STRONG SECONDARY — DRONESURVEY                                */}
          {/* ========================================================================= */}
          {(() => {
            const study = CASE_STUDIES.find(s => s.id === 'dronesurvey') || CASE_STUDIES[1];
            return (
              <div 
                key={study.id} 
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Image Container with Architectural Backing Plate (Cols 1-7) */}
                <div className="lg:col-span-7 relative">
                  <div className="hidden sm:block absolute -inset-2.5 bg-[#181D1C]/60 border border-[#242C2A] pointer-events-none" />
                  
                  <div 
                    onClick={() => onOpenCaseStudy(study)}
                    className="relative cursor-pointer bg-[#080A0A] border border-[#242C2A] p-2 hover:border-[#C8FF3D]/70 transition-all duration-300 shadow-xl overflow-hidden"
                  >
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#080A0A] transition-transform duration-500 group-hover:scale-[1.015]">
                      <ProjectMockup id={study.id} />
                    </div>
                    {/* Corner category tag */}
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-[#080A0A]/95 border border-[#242C2A] px-2.5 py-1 text-[10px] font-mono-code text-[#C8FF3D]">
                      <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none" />
                      <span>02 // {study.clientSector}</span>
                    </div>
                  </div>
                </div>

                {/* Supporting Information (Cols 8-12) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs font-mono-code text-[#AEB7B2]/70 mb-2">
                      GEOSPATIAL PLATFORM • {study.location}
                    </div>
                    <h3 
                      onClick={() => onOpenCaseStudy(study)}
                      className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F2] tracking-tight group-hover:text-[#C8FF3D] transition-colors cursor-pointer"
                    >
                      {study.title}
                    </h3>
                    {study.subtitle && (
                      <p className="mt-1 text-xs font-mono-code text-[#AEB7B2]/80">
                        {study.subtitle}
                      </p>
                    )}
                    <p className="mt-4 text-sm sm:text-base text-[#AEB7B2] leading-relaxed">
                      {study.summary}
                    </p>

                    {study.engineeringFocus && (
                      <div className="mt-4 p-3 bg-[#080A0A] border border-[#242C2A] text-xs font-mono-code text-[#AEB7B2]">
                        <span className="text-[#C8FF3D] font-bold block mb-1">ENGINEERING FOCUS:</span>
                        {study.engineeringFocus}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono-code text-[#AEB7B2] bg-[#181D1C] border border-[#242C2A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View project interaction */}
                    <button
                      onClick={() => onOpenCaseStudy(study)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#F5F7F2] group-hover:text-[#C8FF3D] transition-colors cursor-pointer"
                    >
                      <span>View case study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C8FF3D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ========================================================================= */}
          {/* PROJECT 03: SUPPORTING — TOUR DIARY                                       */}
          {/* ========================================================================= */}
          {(() => {
            const study = CASE_STUDIES.find(s => s.id === 'tour-diary') || CASE_STUDIES[2];
            return (
              <div 
                key={study.id} 
                className="group bg-[#080A0A] border border-[#242C2A] p-6 sm:p-8 lg:p-10 hover:border-[#C8FF3D]/70 transition-all duration-300 shadow-xl"
              >
                {/* Horizontal Header & Specs */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 pb-6 border-b border-[#181D1C]">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#C8FF3D] mb-2">
                      <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none" />
                      <span>03 // {study.clientSector}</span>
                    </div>
                    <h3 
                      onClick={() => onOpenCaseStudy(study)}
                      className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F2] tracking-tight group-hover:text-[#C8FF3D] transition-colors cursor-pointer"
                    >
                      {study.title}
                    </h3>
                    {study.subtitle && (
                      <p className="mt-1 text-xs font-mono-code text-[#AEB7B2]/80">
                        {study.subtitle}
                      </p>
                    )}
                    <p className="mt-4 text-sm sm:text-base text-[#AEB7B2] leading-relaxed max-w-2xl">
                      {study.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                    <div className="text-xs font-mono-code text-[#AEB7B2]/70 space-y-1.5">
                      <div>DEPLOYMENT: {study.location}</div>
                      <div>OUTPUT: OFFICIAL GOVERNMENT-FORMAT EXCEL (T.A./D.A.)</div>
                      {study.engineeringFocus && (
                        <div className="text-[#C8FF3D] pt-1">
                          FOCUS: {study.engineeringFocus}
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => onOpenCaseStudy(study)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#F5F7F2] group-hover:text-[#C8FF3D] transition-colors cursor-pointer self-start"
                    >
                      <span>View case study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C8FF3D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Horizontal Mockup */}
                <div 
                  onClick={() => onOpenCaseStudy(study)}
                  className="cursor-pointer relative bg-[#080A0A] border border-[#242C2A] p-2 hover:border-[#C8FF3D]/70 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden bg-[#080A0A] transition-transform duration-500 group-hover:scale-[1.01]">
                    <ProjectMockup id={study.id} />
                  </div>
                </div>

                {/* Tech Line */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#181D1C]">
                  {study.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono-code text-[#AEB7B2] bg-[#181D1C] border border-[#242C2A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* ========================================================================= */}
          {/* PROJECT 04: SUPPORTING — SMART BILLING                                    */}
          {/* ========================================================================= */}
          {(() => {
            const study = CASE_STUDIES.find(s => s.id === 'smart-billing') || CASE_STUDIES[3];
            return (
              <div 
                key={study.id} 
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 bg-[#080A0A] border border-[#242C2A] hover:border-[#C8FF3D]/70 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Left: Editorial Breakdown (6 cols) */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#181D1C] space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#C8FF3D] mb-3">
                      <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none" />
                      <span>04 // {study.clientSector}</span>
                    </div>
                    <h3 
                      onClick={() => onOpenCaseStudy(study)}
                      className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F2] tracking-tight group-hover:text-[#C8FF3D] transition-colors cursor-pointer"
                    >
                      {study.title}
                    </h3>
                    {study.subtitle && (
                      <p className="mt-1 text-xs font-mono-code text-[#AEB7B2]/80">
                        {study.subtitle}
                      </p>
                    )}
                    <p className="mt-4 text-sm sm:text-base text-[#AEB7B2] leading-relaxed">
                      {study.summary}
                    </p>

                    {study.engineeringFocus && (
                      <div className="mt-4 p-3 bg-[#111515] border border-[#242C2A] text-xs font-mono-code text-[#AEB7B2]">
                        <span className="text-[#C8FF3D] font-bold block mb-1">ENGINEERING FOCUS:</span>
                        {study.engineeringFocus}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6 pt-4 border-t border-[#181D1C]">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono-code text-[#AEB7B2] bg-[#181D1C] border border-[#242C2A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenCaseStudy(study)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#F5F7F2] group-hover:text-[#C8FF3D] transition-colors cursor-pointer"
                    >
                      <span>View case study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C8FF3D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right: Technical Invoicing Mockup (6 cols) */}
                <div 
                  onClick={() => onOpenCaseStudy(study)}
                  className="lg:col-span-6 p-4 sm:p-6 lg:p-8 cursor-pointer relative bg-[#111515] flex items-center justify-center overflow-hidden"
                >
                  <div className="w-full relative aspect-[16/10] sm:aspect-[4/3] bg-[#080A0A] border border-[#242C2A] transition-transform duration-500 group-hover:scale-[1.015] shadow-lg">
                    <ProjectMockup id={study.id} />
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ========================================================================= */}
          {/* PROJECT 05: SUPPORTING — SR SECURITY SERVICES (DESIGN / WEB DEV)           */}
          {/* ========================================================================= */}
          {(() => {
            const study = CASE_STUDIES.find(s => s.id === 'sr-security-services') || CASE_STUDIES[4];
            return (
              <div 
                key={study.id} 
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080A0A] border border-[#242C2A] p-6 sm:p-8 hover:border-[#C8FF3D]/70 transition-all duration-300 shadow-xl"
              >
                {/* Mockup Canvas (Cols 1-7) */}
                <div 
                  onClick={() => onOpenCaseStudy(study)}
                  className="lg:col-span-7 cursor-pointer relative bg-[#111515] border border-[#242C2A] p-2 hover:border-[#C8FF3D]/70 transition-all duration-300 shadow-xl overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#080A0A] transition-transform duration-500 group-hover:scale-[1.015]">
                    <ProjectMockup id={study.id} />
                  </div>
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-[#080A0A]/95 border border-[#242C2A] px-2.5 py-1 text-[10px] font-mono-code text-[#C8FF3D]">
                    <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none" />
                    <span>05 // {study.clientSector}</span>
                  </div>
                </div>

                {/* Supporting Description & Information (Cols 8-12) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs font-mono-code text-[#AEB7B2]/70 mb-2">
                      CORPORATE DIGITAL PRESENCE • {study.location}
                    </div>
                    <h3 
                      onClick={() => onOpenCaseStudy(study)}
                      className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F2] tracking-tight group-hover:text-[#C8FF3D] transition-colors cursor-pointer"
                    >
                      {study.title}
                    </h3>
                    {study.subtitle && (
                      <p className="mt-1 text-xs font-mono-code text-[#AEB7B2]/80">
                        {study.subtitle}
                      </p>
                    )}
                    <p className="mt-4 text-sm text-[#AEB7B2] leading-relaxed">
                      {study.summary}
                    </p>

                    {study.engineeringFocus && (
                      <div className="mt-4 p-3 bg-[#111515] border border-[#242C2A] text-xs font-mono-code text-[#AEB7B2]">
                        <span className="text-[#C8FF3D] font-bold block mb-1">DESIGN / ARCHITECTURE FOCUS:</span>
                        {study.engineeringFocus}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono-code text-[#AEB7B2] bg-[#181D1C] border border-[#242C2A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenCaseStudy(study)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#F5F7F2] group-hover:text-[#C8FF3D] transition-colors cursor-pointer"
                    >
                      <span>View case study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C8FF3D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </div>
    </section>
  );
};

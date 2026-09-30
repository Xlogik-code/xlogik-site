import React, { useState } from 'react';
import { ENGINEERING_PILLARS } from '../data/content';
import { Shield, Zap, Layers, Activity, Server, FileCheck2 } from 'lucide-react';

export const EngineeringSection: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const icons = [Layers, Zap, Shield, FileCheck2, Server, Activity];

  return (
    <section 
      id="capabilities" 
      className="py-24 sm:py-32 lg:py-40 bg-[#080A0A] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#181D1C] gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-4 bg-[#C8FF3D]" />
              <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
                04 / ENGINEERING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F2] tracking-tight">
              The details matter.
            </h2>
          </div>
          <p className="text-sm text-[#AEB7B2] font-mono-code max-w-sm">
            NO SUPERFLUOUS ABSTRACTIONS // DETERMINISTIC CODE AND VERIFIED ARCHITECTURES
          </p>
        </div>

        {/* Typography & Thin Lines Technical Layout (NO standard 6-card grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Engineering Disciplines List with Thin Divider Lines (Cols 1-7) */}
          <div className="lg:col-span-7 divide-y divide-[#181D1C] border-y border-[#181D1C]">
            {ENGINEERING_PILLARS.map((pillar, idx) => {
              const isActive = activePillarIndex === idx;
              const Icon = icons[idx % icons.length];

              return (
                <div
                  key={pillar.title}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`group py-6 sm:py-7 cursor-pointer transition-all duration-200 relative ${
                    isActive ? 'pl-4 sm:pl-6 bg-[#111515]' : 'hover:pl-2'
                  }`}
                >
                  {/* Chartreuse active side indicator line */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8FF3D]" />
                  )}

                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono-code text-xs sm:text-sm text-[#AEB7B2]/50 group-hover:text-[#C8FF3D] transition-colors">
                        /0{idx + 1}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-bold transition-colors ${
                        isActive ? 'text-[#C8FF3D]' : 'text-[#F5F7F2] group-hover:text-[#F5F7F2]'
                      }`}>
                        {pillar.title}
                      </h3>
                    </div>

                    <span className="text-xs sm:text-sm text-[#AEB7B2] text-right font-medium hidden sm:inline">
                      {pillar.summary}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-[#AEB7B2] leading-relaxed pl-8 sm:pl-10">
                    {pillar.details}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Active Deep-Dive Technical Spec Panel (Cols 8-12) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {(() => {
              const current = ENGINEERING_PILLARS[activePillarIndex];
              const CurrentIcon = icons[activePillarIndex % icons.length];

              return (
                <div className="bg-[#111515] border border-[#242C2A] p-6 sm:p-8 relative">
                  {/* Coordinate and system tag */}
                  <div className="flex items-center justify-between border-b border-[#181D1C] pb-4 mb-6 text-[11px] font-mono-code">
                    <div className="flex items-center gap-2">
                      <CurrentIcon className="w-4 h-4 text-[#C8FF3D]" />
                      <span className="text-[#F5F7F2] uppercase font-bold">
                        SPEC: {current.title}
                      </span>
                    </div>
                    <span className="text-[#C8FF3D]">STANDARDS // V4</span>
                  </div>

                  {/* Summary & Core Objective */}
                  <div className="mb-6">
                    <div className="text-xs font-mono-code text-[#AEB7B2]/70 mb-1">
                      CORE OBJECTIVE
                    </div>
                    <div className="text-xl font-bold text-[#F5F7F2] mb-3">
                      {current.summary}
                    </div>
                    <p className="text-sm text-[#AEB7B2] leading-relaxed">
                      {current.details}
                    </p>
                  </div>

                  {/* Concrete Engineering Protocols */}
                  <div className="pt-6 border-t border-[#181D1C]">
                    <div className="text-xs font-mono-code text-[#C8FF3D] mb-4">
                      VERIFIED PRACTICES & PROTOCOLS
                    </div>
                    <div className="space-y-3">
                      {current.metricsOrPractices.map((practice, pIdx) => (
                        <div 
                          key={pIdx}
                          className="flex items-center gap-3 p-2.5 bg-[#080A0A] border border-[#181D1C] text-xs font-mono-code text-[#F5F7F2]"
                        >
                          <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none shrink-0" />
                          <span>{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro telemetry indicator */}
                  <div className="mt-8 pt-4 border-t border-[#181D1C] flex justify-between items-center text-[10px] font-mono-code text-[#AEB7B2]/60">
                    <span>STATUS: ENFORCED IN CI/CD</span>
                    <span className="text-[#FF6B5C]">STRICT COMPLIANCE</span>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { WORK_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section 
      id="process" 
      className="py-24 sm:py-32 lg:py-36 bg-[#111515] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[3px] h-4 bg-[#C8FF3D]" />
            <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
              METHODOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F2] tracking-tight mb-6">
            How we work.
          </h2>
          <p className="text-base sm:text-lg text-[#AEB7B2] leading-relaxed">
            From initial problem framing to long-term operational health, our delivery process is iterative, transparent, and structured around measurable engineering milestones.
          </p>
        </div>

        {/* Clean Timeline with Chartreuse Numbers & Thin Connecting Lines */}
        <div className="relative">
          
          {/* Horizontal connecting line on large screens */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-[#242C2A] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {WORK_STEPS.map((step, idx) => (
              <div 
                key={step.number}
                className="group relative bg-[#080A0A] border border-[#181D1C] p-6 lg:p-5 flex flex-col justify-between hover:border-[#C8FF3D]/70 transition-all duration-300"
              >
                <div>
                  {/* Step Number & Pulse Point */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-code text-2xl sm:text-3xl font-extrabold text-[#C8FF3D]">
                      {step.number}
                    </span>
                    <span className="w-2 h-2 bg-[#C8FF3D] rounded-none group-hover:scale-125 transition-transform duration-200" />
                  </div>

                  {/* Step Title & Core Action */}
                  <h3 className="text-xl font-bold text-[#F5F7F2] mb-1">
                    {step.name}
                  </h3>
                  <div className="text-xs font-mono-code text-[#C8FF3D] mb-4">
                    {step.description}
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-[#AEB7B2] leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Milestone Footer */}
                <div className="mt-6 pt-4 border-t border-[#181D1C] text-[10px] font-mono-code text-[#AEB7B2]/50">
                  PHASE 0{idx + 1} VERIFICATION
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom commitment statement */}
        <div className="mt-14 pt-6 border-t border-[#181D1C] flex flex-wrap items-center justify-between text-xs font-mono-code text-[#AEB7B2]">
          <span>SPRINT CADENCE: 2-WEEK STAGING RELEASES</span>
          <span className="text-[#C8FF3D]">CONTINUOUS INTEGRATION & AUDIT LOGS</span>
        </div>
      </div>
    </section>
  );
};

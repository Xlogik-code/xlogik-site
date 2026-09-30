import React from 'react';

export const ApproachSection: React.FC = () => {
  return (
    <section 
      id="approach" 
      className="py-24 sm:py-32 lg:py-40 bg-[#111515] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Label with small chartreuse vertical line */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <div className="w-[3px] h-5 bg-[#C8FF3D]" />
          <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
            01 / APPROACH
          </span>
        </div>

        {/* Asymmetric Editorial Composition with Generous Negative Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Large Statement (Cols 1-8) */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#F5F7F2] leading-[1.14] tracking-[-0.03em]">
              Good software starts with{' '}
              <span className="font-serif-editorial italic font-normal text-[#C8FF3D]">
                understanding the problem.
              </span>
            </h2>
          </div>

          {/* Supporting Copy (Cols 9-12) */}
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#AEB7B2] leading-relaxed">
              We work with businesses that need to build something new, improve an existing product, or make complicated systems easier to operate. We bring product thinking and engineering together to turn those problems into software that can grow with the business.
            </p>
          </div>
        </div>

        {/* Editorial Footprint: 3 Core Pragmatic Tenets */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-[#181D1C] grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">PRAGMATIC SCOPING</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Direct domain discovery</h3>
            <p className="text-sm text-[#AEB7B2] leading-relaxed">
              We study the realities of your users' operational workflow before committing to architectural lines.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">COHESIVE EXECUTION</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Design and engineering united</h3>
            <p className="text-sm text-[#AEB7B2] leading-relaxed">
              Interfaces are crafted with deep knowledge of backend state machines, reducing friction between design and code.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#FF6B5C]">LONG-TERM VIABILITY</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Architecture built to endure</h3>
            <p className="text-sm text-[#AEB7B2] leading-relaxed">
              Clear code boundaries, standard toolchains, and complete documentation so your team retains full ownership.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

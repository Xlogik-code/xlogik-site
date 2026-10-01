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
              We start by understanding the problem before deciding how to solve it. That means looking at the bigger picture, asking the right questions, and making sure we're solving the right problem—not just building what was originally requested.
            </p>
          </div>
        </div>

        {/* Editorial Footprint: 3 Core Pragmatic Tenets */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-[#181D1C] grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">UNDERSTAND THE WORK</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Start with how things actually work.</h3>
            <p className="text-sm text-[#AEB7B2] leading-relaxed">
              Before we talk about technology, we learn how the business works, who uses the product, and where the current process falls short. That gives us a clearer starting point for deciding what the software actually needs to do.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">BUILD WHAT MATTERS</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Keep the product focused.</h3>
            <p className="text-sm text-[#AEB7B2] leading-relaxed">
              We focus on the parts that solve the real problem first, then make practical decisions about the product, architecture, and technology. The goal is to build something useful without adding complexity that the business doesn't need.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#FF6B5C]">MAKE IT YOURS</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Leave you with something you can own.</h3>
            <p className="text-sm text-[#AEB7B2] leading-relaxed">
              The code, documentation, and technical decisions should be clear enough for your team to understand and maintain. We build with long-term ownership in mind, whether your team continues the work with us or takes it forward on its own.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

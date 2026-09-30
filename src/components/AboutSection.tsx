import React from 'react';
import { VALUES_DATA } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 lg:py-40 bg-[#080A0A] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <div className="w-[3px] h-4 bg-[#C8FF3D]" />
          <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
            ABOUT XLOGIK
          </span>
        </div>

        {/* Editorial Headline & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 sm:mb-32">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#F5F7F2] leading-[1.12] tracking-[-0.03em]">
              Technology is complicated enough.{' '}
              <span className="font-serif-editorial italic font-normal text-[#C8FF3D]">
                Working with your technology partner shouldn't be.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <p className="text-base sm:text-lg text-[#F5F7F2] font-semibold leading-relaxed">
              XLOGIK is a Canadian software engineering and IT services company focused on building practical digital products and reliable technology systems.
            </p>
            <p className="text-sm sm:text-base text-[#AEB7B2] leading-relaxed">
              We operate without agency bureaucracy or opaque communication. We pair senior product designers with experienced systems engineers to solve complex technical problems directly.
            </p>
          </div>
        </div>

        {/* 5 Core Pillars: Engineering philosophy, Product mindset, Communication, Maintainability, Long-term thinking */}
        <div className="mb-28 pt-12 border-t border-[#181D1C] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">// 01 PHILOSOPHY</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Engineering Rigor</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              Clean code boundaries, typed schemas, and comprehensive tests that keep systems stable over years.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">// 02 PRODUCT</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Product Mindset</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              We look beyond tickets to understand how the software impacts real users and actual business operations.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">// 03 TRANSPARENCY</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Clear Communication</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              Direct access to the engineers writing the code. No middlemen, no jargon hiding delays or ambiguities.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">// 04 CRAFT</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Maintainability</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              Software your internal developers or future partners can understand, maintain, and expand with ease.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#FF6B5C]">// 05 PERSPECTIVE</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Long-Term Thinking</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              We build tools and architectures that remain assets rather than turning into technical debt twelve months later.
            </p>
          </div>
        </div>

        {/* Section 18 — VALUES (Large typography, NO generic icon cards) */}
        <div className="pt-16 border-t border-[#181D1C]">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="text-xs font-mono-code text-[#C8FF3D] uppercase tracking-widest mb-2">
                CORE PRINCIPLES
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F7F2] tracking-tight">
                Our Values.
              </h3>
            </div>
            <span className="text-xs font-mono-code text-[#AEB7B2]/50 hidden sm:inline">
              NO CLICHÉS // REAL CRITERIA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {VALUES_DATA.map((val) => (
              <div 
                key={val.number}
                className="group border-t border-[#181D1C] pt-6 space-y-4 hover:border-[#C8FF3D] transition-colors duration-300"
              >
                <div className="text-3xl sm:text-4xl font-mono-code font-bold text-[#AEB7B2]/40 group-hover:text-[#C8FF3D] transition-colors">
                  /{val.number}
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F2] tracking-tight">
                  {val.title}
                </h4>
                <p className="text-base text-[#AEB7B2] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

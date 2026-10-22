import React from 'react';
import { VALUES_DATA } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-14 sm:py-16 lg:py-20 bg-[#080A0A] border-b border-[#181D1C] relative"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12 sm:mb-14">
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
              XLOGIK is a Canadian software engineering and IT services company. We build digital products, business applications, and technology systems around the way organizations work.
            </p>
            <p className="text-sm sm:text-base text-[#AEB7B2] leading-relaxed">
              We take a practical approach to software development: understand the problem, make thoughtful technical decisions, and communicate clearly throughout the process. The aim is to deliver software that solves a real need and remains manageable as the business evolves.
            </p>
          </div>
        </div>

        {/* 5 Core Pillars: Engineering philosophy, Product mindset, Communication, Maintainability, Long-term thinking */}
        <div className="mb-12 sm:mb-14 pt-12 sm:pt-14 border-t border-[#181D1C] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">// 01 ENGINEERING</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Sound Engineering</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              We pay attention to code quality, system structure, data integrity, and testing so the software is easier to understand, maintain, and change.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">// 02 PRODUCT</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Understand the Business</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              We look at the people, processes, and business requirements behind a project before deciding how the software should work.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">// 03 TRANSPARENCY</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Clear Communication</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              We explain decisions, discuss trade-offs, and keep priorities and expectations clear as the work progresses.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#C8FF3D]">// 04 CRAFT</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Built to Be Maintained</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              We favor clear code, sensible architecture, and useful documentation so future development doesn't have to start from scratch.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-code text-[#FF6B5C]">// 05 PERSPECTIVE</div>
            <h3 className="text-base font-bold text-[#F5F7F2]">Think Beyond Launch</h3>
            <p className="text-xs text-[#AEB7B2] leading-relaxed">
              We consider how software will be operated, updated, and extended over time—not just what it takes to get the first version working.
            </p>
          </div>
        </div>

        {/* Section 18 — VALUES (Large typography, NO generic icon cards) */}
        <div className="pt-12 sm:pt-14 border-t border-[#181D1C]">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="text-xs font-mono-code text-[#C8FF3D] uppercase tracking-widest mb-2">
                CORE PRINCIPLES
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F7F2] tracking-tight">
                The principles behind our work.
              </h3>
            </div>
            <span className="text-xs font-mono-code text-[#AEB7B2]/50 hidden sm:inline">
              HOW WE MAKE DECISIONS
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

import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section 
      id="industries" 
      className="py-24 sm:py-32 lg:py-36 bg-[#111515] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[3px] h-4 bg-[#C8FF3D]" />
            <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
              06 / INDUSTRIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F2] tracking-tight mb-6">
            Different businesses. Similar engineering problems.
          </h2>
          <p className="text-base sm:text-lg text-[#AEB7B2] leading-relaxed">
            While business domains diverge, the underlying engineering requirements remain constant: clean data boundaries, fast response times, resilient pipelines, and trustworthy security.
          </p>
        </div>

        {/* Elegant List (NO eight cards) */}
        <div className="divide-y divide-[#181D1C] border-y border-[#181D1C]">
          {INDUSTRIES_DATA.map((industry, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={industry.name}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group py-7 sm:py-9 px-3 sm:px-6 transition-all duration-300 hover:bg-[#080A0A]/60 relative cursor-pointer"
              >
                {/* Chartreuse left accent indicator */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8FF3D] transition-transform duration-300 origin-top ${
                    isHovered ? 'scale-y-100' : 'scale-y-0'
                  }`} 
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  
                  {/* Industry Name with small connecting line (Cols 1-5) */}
                  <div className="lg:col-span-5 flex items-center gap-4">
                    <span 
                      className={`h-[1px] bg-[#C8FF3D] transition-all duration-300 ${
                        isHovered ? 'w-6' : 'w-0'
                      }`}
                    />
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                      isHovered ? 'text-[#C8FF3D] translate-x-1' : 'text-[#F5F7F2]'
                    }`}>
                      {industry.name}
                    </h3>
                  </div>

                  {/* Description fades in / expands (Cols 6-11) */}
                  <div className="lg:col-span-6">
                    <p className={`text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                      isHovered ? 'text-[#F5F7F2]' : 'text-[#AEB7B2]'
                    }`}>
                      {industry.description}
                    </p>

                    {/* Technical challenges tags that appear on hover */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        isHovered ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-wrap gap-2 pt-1">
                        {industry.technicalChallenges.map((ch, cIdx) => (
                          <span 
                            key={cIdx}
                            className="text-[10px] font-mono-code px-2 py-0.5 bg-[#181D1C] border border-[#242C2A] text-[#AEB7B2]"
                          >
                            // {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow indicator (Col 12) */}
                  <div className="lg:col-span-1 flex justify-end">
                    <ArrowUpRight className={`w-5 h-5 transition-transform duration-200 ${
                      isHovered ? 'text-[#C8FF3D] translate-x-1 -translate-y-1' : 'text-[#AEB7B2]/30'
                    }`} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom index footnote */}
        <div className="mt-8 flex justify-between text-xs font-mono-code text-[#AEB7B2]/60 pt-4">
          <span>8 PRIMARY SECTORS SERVED</span>
          <span className="text-[#C8FF3D]">DOMAIN EXPERTISE APPLIED DETERMINISTICALLY</span>
        </div>
      </div>
    </section>
  );
};

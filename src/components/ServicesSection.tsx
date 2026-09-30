import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="services" 
      className="py-24 sm:py-32 lg:py-36 bg-[#080A0A] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#181D1C] gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-4 bg-[#C8FF3D]" />
              <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
                02 / SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F2] tracking-tight">
              What we build.
            </h2>
          </div>
          <p className="text-sm text-[#AEB7B2] font-mono-code max-w-sm">
            END-TO-END SOFTWARE ENGINEERING // MODERN TECHNICAL DISCIPLINES
          </p>
        </div>

        {/* Sophisticated Full-Width Service List */}
        <div className="divide-y divide-[#181D1C] border-y border-[#181D1C]">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                id={`service-row-${service.id}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectService?.(service.title)}
                className="group relative cursor-pointer py-8 sm:py-10 px-4 sm:px-6 transition-all duration-300 hover:bg-[#111515]"
              >
                {/* Chartreuse vertical line on hover */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8FF3D] transition-transform duration-300 origin-top ${
                    isHovered ? 'scale-y-100' : 'scale-y-0'
                  }`} 
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start lg:items-center">
                  
                  {/* Number (Cols 1-2) */}
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-mono-code text-sm sm:text-base font-semibold text-[#AEB7B2]/50 group-hover:text-[#C8FF3D] transition-colors duration-200">
                      /{service.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-none bg-transparent group-hover:bg-[#C8FF3D] transition-colors" />
                  </div>

                  {/* Title (Cols 3-6) */}
                  <div className="md:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7F2] group-hover:text-[#C8FF3D] group-hover:translate-x-1 transition-all duration-200">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description (Cols 7-11) */}
                  <div className="md:col-span-5">
                    <p className="text-sm sm:text-base text-[#AEB7B2] leading-relaxed group-hover:text-[#F5F7F2] transition-colors duration-200">
                      {service.shortDesc}
                    </p>

                    {/* Expandable Deliverables Details on Hover */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        isHovered ? 'max-h-24 opacity-100 mt-4 pt-3 border-t border-[#242C2A]' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((item, dIdx) => (
                          <span 
                            key={dIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono-code bg-[#181D1C] border border-[#242C2A] text-[#AEB7B2]"
                          >
                            <Check className="w-3 h-3 text-[#C8FF3D]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator (Col 12) */}
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-9 h-9 border border-[#242C2A] flex items-center justify-center group-hover:border-[#C8FF3D] group-hover:bg-[#C8FF3D] transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4 text-[#AEB7B2] group-hover:text-[#080A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom micro-statement */}
        <div className="mt-8 flex flex-wrap items-center justify-between text-xs font-mono-code text-[#AEB7B2]/60 pt-4">
          <span>* ALL SERVICES DELIVERED WITH PRODUCTION MONITORING & RIGOROUS DOCUMENTATION</span>
          <span className="text-[#C8FF3D]">8 ACTIVE DISCIPLINES</span>
        </div>
      </div>
    </section>
  );
};

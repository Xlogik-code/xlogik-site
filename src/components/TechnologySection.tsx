import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/content';

export const TechnologySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<{ name: string; category: string } | null>(null);

  const displayedCategories = selectedCategory
    ? TECH_CATEGORIES.filter(c => c.category === selectedCategory)
    : TECH_CATEGORIES;

  return (
    <section 
      id="technology" 
      className="py-24 sm:py-32 lg:py-36 bg-[#111515] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[3px] h-4 bg-[#C8FF3D]" />
            <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
              TECHNOLOGY ECOSYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F2] tracking-tight mb-6">
            The right tools for the problem.
          </h2>
          <p className="text-base sm:text-lg text-[#AEB7B2] leading-relaxed">
            We choose technology based on the product, the team, and the problem — not because something happens to be popular.
          </p>
        </div>

        {/* Category Filter Chips / Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-6 border-b border-[#181D1C]">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3.5 py-1.5 text-xs font-mono-code transition-all cursor-pointer ${
              selectedCategory === null
                ? 'bg-[#C8FF3D] text-[#080A0A] font-bold'
                : 'bg-[#181D1C] text-[#AEB7B2] hover:text-[#F5F7F2] border border-[#242C2A]'
            }`}
          >
            ALL CATEGORIES ({TECH_CATEGORIES.reduce((acc, c) => acc + c.items.length, 0)})
          </button>
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(selectedCategory === cat.category ? null : cat.category)}
              className={`px-3.5 py-1.5 text-xs font-mono-code transition-all cursor-pointer ${
                selectedCategory === cat.category
                  ? 'bg-[#C8FF3D] text-[#080A0A] font-bold'
                  : 'bg-[#181D1C] text-[#AEB7B2] hover:text-[#F5F7F2] border border-[#242C2A]'
              }`}
            >
              {cat.category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Technical Index Layout (Monochrome typography with hover chartreuse & connecting lines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {displayedCategories.map((cat) => (
            <div 
              key={cat.category}
              className="bg-[#080A0A] border border-[#181D1C] p-6 relative group transition-all duration-300 hover:border-[#2E3634]"
            >
              {/* Category Header with Thin Line */}
              <div className="flex items-center justify-between border-b border-[#181D1C] pb-3 mb-5">
                <span className="text-xs font-mono-code font-bold tracking-wider text-[#AEB7B2] uppercase">
                  {cat.category}
                </span>
                <span className="text-[10px] font-mono-code text-[#AEB7B2]/40">
                  [{cat.items.length}]
                </span>
              </div>

              {/* Items List in Monochrome Typography */}
              <ul className="space-y-3">
                {cat.items.map((tech) => {
                  const isHovered = hoveredTech?.name === tech;
                  return (
                    <li
                      key={tech}
                      onMouseEnter={() => setHoveredTech({ name: tech, category: cat.category })}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="group/item flex items-center justify-between cursor-pointer py-1 text-sm font-mono-code text-[#AEB7B2] transition-colors duration-200 hover:text-[#C8FF3D]"
                    >
                      <div className="flex items-center gap-2">
                        {/* Connecting line indicator when hovered */}
                        <span 
                          className={`h-[1px] bg-[#C8FF3D] transition-all duration-200 ${
                            isHovered ? 'w-4' : 'w-0'
                          }`} 
                        />
                        <span className={`transition-all duration-200 ${
                          isHovered ? 'text-[#C8FF3D] font-bold translate-x-0.5' : 'text-[#AEB7B2]'
                        }`}>
                          {tech}
                        </span>
                      </div>

                      {isHovered && (
                        <span className="text-[9px] text-[#AEB7B2]/50 uppercase tracking-widest animate-pulse">
                          VERIFIED
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Small Category Bottom Corner Accent */}
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#242C2A] group-hover:border-[#C8FF3D]/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* Live Inspector Note */}
        <div className="mt-12 p-4 bg-[#181D1C]/60 border border-[#242C2A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-code text-[#AEB7B2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C8FF3D] rounded-none" />
            <span>
              CURRENT SELECTION:{' '}
              <strong className="text-[#F5F7F2]">
                {hoveredTech ? `${hoveredTech.name} (${hoveredTech.category})` : 'Hover any technology to view connection'}
              </strong>
            </span>
          </div>
          <span className="text-[10px] text-[#AEB7B2]/60">
            INDEXED & AUDITED IN PRODUCTION PROJECTS
          </span>
        </div>

      </div>
    </section>
  );
};

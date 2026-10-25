import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onStartConversation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartConversation }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 bg-[#080A0A] overflow-hidden border-b border-[#181D1C]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left / Editorial Content (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Technical Category Label */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6 lg:mb-4">
              <span className="w-2 h-2 bg-[#C8FF3D] rounded-none shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm font-mono-code font-semibold tracking-wider sm:tracking-widest text-[#AEB7B2] uppercase">
                XLOGIK / ENGINEERING STUDIO
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[68px] leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] font-extrabold text-[#F5F7F2] mb-6 sm:mb-8 lg:mb-6 break-words">
              Software built around the{' '}
              <span className="font-serif-editorial italic font-normal text-[#C8FF3D] inline sm:inline-block">
                way you work.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#AEB7B2] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 lg:mb-8">
              We build the software behind real business workflows - from customer-facing products and internal tools to backend systems, integrations, cloud platforms, and AI applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6">
              <button
                onClick={onStartConversation}
                id="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C8FF3D] text-[#080A0A] font-bold text-sm sm:text-base tracking-tight rounded-none hover:bg-[#d6ff66] transition-all duration-200 active:scale-[0.99] shadow-[0_0_24px_rgba(200,255,61,0.2)] cursor-pointer w-full sm:w-auto"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </button>

              <a
                href="#work"
                id="hero-secondary-cta"
                className="group inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-[#AEB7B2] hover:text-[#F5F7F2] py-2.5 sm:py-2 transition-colors duration-200 w-full sm:w-auto"
              >
                <span>Explore our work</span>
                <ArrowDown className="w-4 h-4 text-[#C8FF3D] group-hover:translate-y-1 transition-transform shrink-0" />
              </a>
            </div>

            {/* Micro Technical Index Line */}
            <div className="mt-10 sm:mt-14 lg:mt-8 pt-4 sm:pt-6 lg:pt-4 border-t border-[#181D1C] flex items-center flex-nowrap gap-x-3.5 sm:gap-x-6 md:gap-x-8 text-[8.5px] min-[360px]:text-[9.5px] min-[400px]:text-[10px] sm:text-xs font-mono-code text-[#AEB7B2]/80 tracking-tight sm:tracking-normal whitespace-nowrap">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none shrink-0" />
                <span>CANADIAN ENGINEERING STUDIO</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="w-1.5 h-1.5 bg-[#FF6B5C] rounded-none shrink-0" />
                <span>PRODUCTION-READY SYSTEMS</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <span className="text-[#AEB7B2]/40">EST. TORONTO / CALGARY</span>
              </div> */}
            </div>

          </div>

          {/* Right / Hero Technical Composition (Cols 8-12) */}
          <div className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

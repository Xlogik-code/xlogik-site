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
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 bg-[#080A0A] overflow-hidden border-b border-[#181D1C]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Editorial Content (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Technical Category Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#C8FF3D] rounded-none" />
              <span className="text-xs sm:text-sm font-mono-code font-semibold tracking-widest text-[#AEB7B2] uppercase">
                XLOGIK / SOFTWARE ENGINEERING
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.03em] font-extrabold text-[#F5F7F2] mb-8">
              Software built around the{' '}
              <span className="font-serif-editorial italic font-normal text-[#C8FF3D] inline-block">
                way you work.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#AEB7B2] font-normal leading-relaxed max-w-2xl mb-10">
              XLOGIK designs and builds web applications, mobile products, backend systems, cloud infrastructure, and AI-powered software for businesses that need technology they can depend on.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <button
                onClick={onStartConversation}
                id="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C8FF3D] text-[#080A0A] font-bold text-sm sm:text-base tracking-tight rounded-none hover:bg-[#d6ff66] transition-all duration-200 active:scale-[0.99] shadow-[0_0_24px_rgba(200,255,61,0.2)] cursor-pointer"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#work"
                id="hero-secondary-cta"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#AEB7B2] hover:text-[#F5F7F2] py-2 transition-colors duration-200"
              >
                <span>Explore our work</span>
                <ArrowDown className="w-4 h-4 text-[#C8FF3D] group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Micro Technical Index Line */}
            <div className="mt-14 pt-6 border-t border-[#181D1C] flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono-code text-[#AEB7B2]/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none" />
                <span>CANADIAN ENGINEERING STUDIO</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF6B5C] rounded-none" />
                <span>PRODUCTION-READY SYSTEMS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#AEB7B2]/40">EST. TORONTO / CALGARY</span>
              </div>
            </div>

          </div>

          {/* Right / Hero Technical Composition (Cols 8-12) */}
          <div className="lg:col-span-5 relative w-full">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

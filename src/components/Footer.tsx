import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#080A0A] border-t border-[#181D1C] pt-20 pb-12 text-[#AEB7B2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top Grid: Statement & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#181D1C]">
          
          {/* Left Column: Brand & Statement (Cols 1-5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#C8FF3D] rounded-none" />
              <span className="text-2xl font-extrabold tracking-tight text-[#F5F7F2]">
                XLOGIK
              </span>
              <span className="text-xs font-mono-code text-[#AEB7B2]/50 ml-1">
                // CANADIAN STUDIO
              </span>
            </div>

            <p className="text-base sm:text-lg text-[#F5F7F2] font-medium max-w-sm leading-relaxed">
              Software engineering for businesses building what comes next.
            </p>

            <div className="text-xs font-mono-code text-[#AEB7B2]/60 space-y-1">
              <div>REGISTRATION: CANADA FEDERAL CORPORATION</div>
              <div>LOCATIONS: TORONTO • CALGARY • MONTREAL • VANCOUVER</div>
            </div>
          </div>

          {/* Navigation Columns (Cols 6-12) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            
            {/* Column 1: Navigation */}
            <div className="space-y-3">
              <div className="text-xs font-mono-code text-[#F5F7F2] tracking-wider uppercase">
                PAGES
              </div>
              <ul className="space-y-2.5 font-medium">
                <li>
                  <a href="#services" className="hover:text-[#C8FF3D] transition-colors">Services</a>
                </li>
                <li>
                  <a href="#work" className="hover:text-[#C8FF3D] transition-colors">Selected Work</a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-[#C8FF3D] transition-colors">Capabilities</a>
                </li>
                <li>
                  <a href="#technology" className="hover:text-[#C8FF3D] transition-colors">Technology Index</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#C8FF3D] transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#C8FF3D] transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Column 2: Disciplines */}
            <div className="space-y-3">
              <div className="text-xs font-mono-code text-[#F5F7F2] tracking-wider uppercase">
                ENGINEERING
              </div>
              <ul className="space-y-2.5 font-medium text-xs font-mono-code">
                <li className="hover:text-[#C8FF3D] cursor-pointer">Web Applications</li>
                <li className="hover:text-[#C8FF3D] cursor-pointer">Mobile Platforms</li>
                <li className="hover:text-[#C8FF3D] cursor-pointer">Backend Distributed APIs</li>
                <li className="hover:text-[#C8FF3D] cursor-pointer">Deterministic AI & RAG</li>
                <li className="hover:text-[#C8FF3D] cursor-pointer">Cloud Infrastructure</li>
                <li className="hover:text-[#C8FF3D] cursor-pointer">System Modernization</li>
              </ul>
            </div>

            {/* Column 3: Connect & Legal */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <div className="text-xs font-mono-code text-[#F5F7F2] tracking-wider uppercase">
                CONNECT
              </div>
              <ul className="space-y-2.5 font-medium">
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C8FF3D] transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AEB7B2]/60" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C8FF3D] transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AEB7B2]/60" />
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@xlogik.ca" className="hover:text-[#C8FF3D] transition-colors">
                    contact@xlogik.ca
                  </a>
                </li>
                <li className="pt-2">
                  <span className="text-[11px] font-mono-code text-[#C8FF3D] block">
                    CAREERS: WE ARE HIRING SENIOR TS / GO ENGINEERS
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Massive Typographic Wordmark Section */}
        <div className="py-12 sm:py-16 border-b border-[#181D1C] overflow-hidden select-none">
          <div 
            onClick={scrollToTop}
            className="text-[64px] sm:text-[110px] md:text-[150px] lg:text-[190px] font-extrabold tracking-[-0.06em] text-[#111515] hover:text-[#181D1C] transition-colors leading-none cursor-pointer flex justify-between items-center"
            title="Back to top"
          >
            <span>XLOGIK</span>
            <span className="text-2xl sm:text-4xl font-mono-code text-[#242C2A] group-hover:text-[#C8FF3D]">↑</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#AEB7B2]/60">
          <div>
            © {new Date().getFullYear()} XLOGIK INC. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-[#F5F7F2] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#F5F7F2] cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-[#AEB7B2]/40">EST. CANADA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

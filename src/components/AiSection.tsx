import React, { useState } from 'react';
import { AI_CAPABILITIES } from '../data/content';
import { ArrowRight, ShieldAlert, CheckCircle2, Terminal } from 'lucide-react';

export const AiSection: React.FC = () => {
  const [activeCapIndex, setActiveCapIndex] = useState(1); // Default to RAG

  return (
    <section
      id="ai"
      className="py-14 sm:py-16 lg:py-20 bg-[#080A0A] border-b border-[#181D1C] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[3px] h-4 bg-[#C8FF3D]" />
            <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
              05 / AI
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F2] tracking-tight mb-6">
            AI where it actually helps.
          </h2>
          <p className="text-base sm:text-lg text-[#AEB7B2] leading-relaxed">
            We build AI features around real tasks - helping people find information, work with documents, automate repetitive steps, and get more from their existing systems. The approach depends on the problem, the data, and how much control the workflow needs.
          </p>
        </div>

        {/* Technical Architecture Pipeline Visualization (NO robot, NO brain, NO glowing orb) */}
        <div className="mb-16 bg-[#111515] border border-[#242C2A] p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-[#181D1C] pb-3 mb-6 text-xs font-mono-code text-[#AEB7B2]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C8FF3D] rounded-none" />
              <span className="text-[#F5F7F2] font-bold">AI_WORKFLOW // FROM DATA TO ACTION</span>
            </div>
            <span className="text-[#C8FF3D]">AI SYSTEM WORKFLOW</span>
          </div>

          {/* Sequential Technical Flow Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono-code">
            <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
              <div className="text-[#C8FF3D]">01 // INPUTS</div>
              <div className="text-[#F5F7F2] font-bold">Documents, forms, APIs</div>
              <p className="text-[11px] text-[#AEB7B2] font-sans leading-relaxed">
                Information is extracted from source documents and connected systems for further processing.
              </p>
            </div>

            <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
              <div className="text-[#C8FF3D]">02 // SEARCH & RETRIEVAL</div>
              <div className="text-[#F5F7F2] font-bold">Keyword and semantic search</div>
              <p className="text-[11px] text-[#AEB7B2] font-sans leading-relaxed">
                Relevant information is retrieved using search methods suited to the data and use case.
              </p>
            </div>

            <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
              <div className="text-[#FF6B5C]">03 // VALIDATION</div>
              <div className="text-[#F5F7F2] font-bold">Checks, sources, and business rules</div>
              <p className="text-[11px] text-[#AEB7B2] font-sans leading-relaxed">
                Responses and extracted data can be checked against available sources, expected formats, and application rules.
              </p>
            </div>

            <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
              <div className="text-[#C8FF3D]">04 // OUTPUTS</div>
              <div className="text-[#F5F7F2] font-bold">Answers, reports, and workflows</div>
              <p className="text-[11px] text-[#AEB7B2] font-sans leading-relaxed">
                The result can be presented to users, passed to another system, or used to support an approved workflow.
              </p>
            </div>
          </div>
        </div>

        {/* Seven AI Capabilities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Capabilities List (Cols 1-6) */}
          <div className="lg:col-span-6 divide-y divide-[#181D1C] border-y border-[#181D1C]">
            {AI_CAPABILITIES.map((cap, idx) => {
              const isSelected = activeCapIndex === idx;
              return (
                <div
                  key={cap.title}
                  onClick={() => setActiveCapIndex(idx)}
                  className={`py-4 px-3 cursor-pointer transition-all duration-200 flex items-center justify-between ${isSelected ? 'bg-[#111515] text-[#C8FF3D]' : 'text-[#F5F7F2] hover:text-[#C8FF3D]'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-code text-[#AEB7B2]/50">
                      [0{idx + 1}]
                    </span>
                    <span className="text-base sm:text-lg font-bold">
                      {cap.title}
                    </span>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#C8FF3D]' : 'text-[#AEB7B2]/40'
                    }`} />
                </div>
              );
            })}
          </div>

          {/* Selected Capability Deep-Dive Spec (Cols 7-12) */}
          <div className="lg:col-span-6 bg-[#111515] border border-[#242C2A] p-6 sm:p-8">
            {(() => {
              const selected = AI_CAPABILITIES[activeCapIndex];
              return (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#181D1C] pb-4">
                    <span className="text-xs font-mono-code text-[#C8FF3D]">
                      CAPABILITY SPECIFICATION // 0{activeCapIndex + 1}
                    </span>
                    <span className="text-xs font-mono-code text-[#AEB7B2]/60">
                      PRODUCTION INTEGRATION
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-[#F5F7F2] mb-3">
                      {selected.title}
                    </h3>
                    <p className="text-base text-[#AEB7B2] leading-relaxed">
                      {selected.description}
                    </p>
                  </div>

                  <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
                    <div className="text-xs font-mono-code text-[#AEB7B2] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF3D]" />
                      <span>HOW WE APPROACH AI</span>
                    </div>
                    <ul className="text-xs text-[#AEB7B2] space-y-1.5 list-disc list-inside font-sans">
                      <li>Test AI outputs against representative examples and expected results.</li>
                      <li>Validate important outputs and use rules or human review where needed.</li>
                      <li>Set data access, retention, and provider settings according to project requirements.</li>
                    </ul>
                  </div>

                  <div className="text-xs font-mono-code text-[#AEB7B2]/50 pt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none" />
                    <span>TECHNOLOGY CHOICES DEPEND ON THE PROJECT</span>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </div>
    </section>
  );
};

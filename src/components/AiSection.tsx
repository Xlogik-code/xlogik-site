import React, { useState } from 'react';
import { AI_CAPABILITIES } from '../data/content';
import { ArrowRight, ShieldAlert, CheckCircle2, Terminal } from 'lucide-react';

export const AiSection: React.FC = () => {
  const [activeCapIndex, setActiveCapIndex] = useState(1); // Default to RAG

  return (
    <section 
      id="ai" 
      className="py-24 sm:py-32 lg:py-40 bg-[#080A0A] border-b border-[#181D1C] relative"
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
            AI is useful when it removes friction, improves a workflow, or gives people a better way to work with information. We integrate AI into products where it solves a real problem — rather than adding AI simply because it is fashionable.
          </p>
        </div>

        {/* Technical Architecture Pipeline Visualization (NO robot, NO brain, NO glowing orb) */}
        <div className="mb-16 bg-[#111515] border border-[#242C2A] p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-[#181D1C] pb-3 mb-6 text-xs font-mono-code text-[#AEB7B2]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C8FF3D] rounded-none" />
              <span className="text-[#F5F7F2] font-bold">SYSTEM_SCHEMATIC: DETERMINISTIC AI INGESTION PIPELINE</span>
            </div>
            <span className="text-[#C8FF3D]">ZERO_HALLUCINATION_TARGET</span>
          </div>

          {/* Sequential Technical Flow Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono-code">
            <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
              <div className="text-[#C8FF3D]">01 // UNSTRUCTURED INGEST</div>
              <div className="text-[#F5F7F2] font-bold">PDF, Audio, API Feeds</div>
              <p className="text-[11px] text-[#AEB7B2] font-sans leading-relaxed">
                Raw organizational documents parsed via structural OCR & token chunking.
              </p>
            </div>

            <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
              <div className="text-[#C8FF3D]">02 // EMBEDDING & HNSW</div>
              <div className="text-[#F5F7F2] font-bold">Vector + BM25 Index</div>
              <p className="text-[11px] text-[#AEB7B2] font-sans leading-relaxed">
                Dense high-dimensional vectors stored in pgvector with lexical fallback.
              </p>
            </div>

            <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
              <div className="text-[#FF6B5C]">03 // DETERMINISTIC GUARDRAIL</div>
              <div className="text-[#F5F7F2] font-bold">Schema & Citation Match</div>
              <p className="text-[11px] text-[#AEB7B2] font-sans leading-relaxed">
                Rigid validation checks every claim against exact source file offsets.
              </p>
            </div>

            <div className="p-4 bg-[#080A0A] border border-[#181D1C] space-y-2">
              <div className="text-[#C8FF3D]">04 // ACTION EXECUTION</div>
              <div className="text-[#F5F7F2] font-bold">API Mutate or Verified UI</div>
              <p className="text-[11px] text-[#AEB7B2] font-sans leading-relaxed">
                Triggers internal operational webhooks or outputs citation-backed reports.
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
                  className={`py-4 px-3 cursor-pointer transition-all duration-200 flex items-center justify-between ${
                    isSelected ? 'bg-[#111515] text-[#C8FF3D]' : 'text-[#F5F7F2] hover:text-[#C8FF3D]'
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

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'translate-x-1 text-[#C8FF3D]' : 'text-[#AEB7B2]/40'
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
                      <span>PRAGMATIC INTEGRATION PRINCIPLES</span>
                    </div>
                    <ul className="text-xs text-[#AEB7B2] space-y-1.5 list-disc list-inside font-sans">
                      <li>Model evaluation runs against fixed test suites with regression scoring</li>
                      <li>Strict fallback to deterministic rule engines whenever confidence thresholds dip</li>
                      <li>Zero training on customer proprietary data by default</li>
                    </ul>
                  </div>

                  <div className="text-xs font-mono-code text-[#AEB7B2]/50 pt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C8FF3D] rounded-none" />
                    <span>BUILT ON OPEN STANDARDS: LANGCHAIN, LANGGRAPH, PGVECTOR, ANTHROPIC, OPENAI</span>
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

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Send, Mail, MapPin, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: initialService || 'Web Application',
    description: '',
    timeline: '1-3 months',
    budget: '$50k - $100k'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Web Application',
    'Mobile Application',
    'Backend & APIs',
    'AI & Generative AI',
    'Cloud & DevOps',
    'Data & Integrations',
    'Software Modernization',
    'Technology Consulting'
  ];

  const timelineOptions = ['Immediate (< 1 month)', '1-3 months', '3-6 months', 'Flexible / Discovery'];
  const budgetOptions = ['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate short network delay for responsive feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 lg:py-40 bg-[#080A0A] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-4 bg-[#C8FF3D]" />
              <span className="text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#C8FF3D] uppercase">
                INITIATE A PROJECT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#F5F7F2] leading-[1.1] tracking-[-0.03em]">
              Have something{' '}
              <span className="font-serif-editorial italic font-normal text-[#C8FF3D]">
                worth building?
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#AEB7B2] leading-relaxed">
              Tell us what you're working on. It doesn't need to be fully defined. An idea, an existing application, or a technical problem is enough to start the conversation.
            </p>
          </div>
        </div>

        {/* Contact Form & Office Context Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Interactive Form (Cols 1-8) */}
          <div className="lg:col-span-8 bg-[#111515] border border-[#242C2A] p-6 sm:p-10 lg:p-12 relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-14 h-14 bg-[#181D1C] border border-[#C8FF3D] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#C8FF3D]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F2]">
                  Message received.
                </h3>
                <p className="text-base text-[#AEB7B2] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#F5F7F2]">{formData.name}</strong>. One of our senior engineers will review your notes and reply within 1 business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Web Application',
                        description: '',
                        timeline: '1-3 months',
                        budget: '$50k - $100k'
                      });
                    }}
                    className="px-6 py-2.5 bg-[#181D1C] border border-[#2E3634] text-xs font-mono-code text-[#AEB7B2] hover:text-[#F5F7F2] hover:border-[#C8FF3D] transition-colors"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" id="xlogik-contact-form">
                
                {/* 1. Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-xs font-mono-code text-[#AEB7B2]">
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#080A0A]/80 border border-[#242C2A] px-4 py-3 text-sm text-[#F5F7F2] placeholder-[#AEB7B2]/40 focus:outline-none focus:border-[#C8FF3D] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-xs font-mono-code text-[#AEB7B2]">
                      WORK EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080A0A]/80 border border-[#242C2A] px-4 py-3 text-sm text-[#F5F7F2] placeholder-[#AEB7B2]/40 focus:outline-none focus:border-[#C8FF3D] transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Company */}
                <div className="space-y-2">
                  <label htmlFor="contact-company" className="block text-xs font-mono-code text-[#AEB7B2]">
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Acme Technologies Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#080A0A]/80 border border-[#242C2A] px-4 py-3 text-sm text-[#F5F7F2] placeholder-[#AEB7B2]/40 focus:outline-none focus:border-[#C8FF3D] transition-colors"
                  />
                </div>

                {/* 3. What are you building? (Pills selection) */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-code text-[#AEB7B2]">
                    WHAT ARE YOU BUILDING? *
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-1.5 text-xs font-mono-code transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#C8FF3D] text-[#080A0A] font-bold border border-[#C8FF3D]'
                              : 'bg-[#080A0A] text-[#AEB7B2] border border-[#242C2A] hover:border-[#AEB7B2]'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Project Description */}
                <div className="space-y-2">
                  <label htmlFor="contact-description" className="block text-xs font-mono-code text-[#AEB7B2]">
                    PROJECT DESCRIPTION *
                  </label>
                  <textarea
                    id="contact-description"
                    required
                    rows={4}
                    placeholder="Briefly describe the current system, technical challenge, or application you're planning to build..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#080A0A]/80 border border-[#242C2A] p-4 text-sm text-[#F5F7F2] placeholder-[#AEB7B2]/40 focus:outline-none focus:border-[#C8FF3D] transition-colors resize-y leading-relaxed"
                  />
                </div>

                {/* 5. Timeline & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono-code text-[#AEB7B2]">
                      TARGET TIMELINE
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#080A0A] border border-[#242C2A] px-4 py-3 text-sm text-[#F5F7F2] focus:outline-none focus:border-[#C8FF3D] transition-colors"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111515] text-[#F5F7F2]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono-code text-[#AEB7B2]">
                      EXPECTED BUDGET RANGE (CAD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#080A0A] border border-[#242C2A] px-4 py-3 text-sm text-[#F5F7F2] focus:outline-none focus:border-[#C8FF3D] transition-colors"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111515] text-[#F5F7F2]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 6. CTA Button */}
                <div className="pt-4 border-t border-[#181D1C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#AEB7B2]/60 font-mono-code">
                    * NDA UPON REQUEST • DIRECT TECHNICAL REVIEW
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-button"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8FF3D] text-[#080A0A] font-extrabold text-sm sm:text-base tracking-tight hover:bg-[#d6ff66] transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-[0_0_20px_rgba(200,255,61,0.25)]"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send message'}</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Direct Contact Context & Office Details (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#111515] border border-[#242C2A] p-6 space-y-6">
              <div className="text-xs font-mono-code text-[#C8FF3D]">
                DIRECT INQUIRIES
              </div>
              
              <div className="space-y-4 text-sm text-[#AEB7B2]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C8FF3D] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-[#AEB7B2]/60 font-mono-code">DIRECT EMAIL</div>
                    <a href="mailto:contact@xlogik.ca" className="text-[#F5F7F2] hover:text-[#C8FF3D] transition-colors">
                      contact@xlogik.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8FF3D] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-[#AEB7B2]/60 font-mono-code">LOCATIONS</div>
                    <div className="text-[#F5F7F2]">Toronto, ON & Calgary, AB</div>
                    <div className="text-xs text-[#AEB7B2]/60 mt-0.5">Serving clients across Canada & North America</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C8FF3D] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-[#AEB7B2]/60 font-mono-code">RESPONSE TIME</div>
                    <div className="text-[#F5F7F2]">Within 1 business day</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#181D1C] text-xs font-mono-code text-[#AEB7B2]/60">
                // SYSTEM STATE: ACCEPTING SELECT NEW CLIENT ENGAGEMENTS
              </div>
            </div>

            {/* Practical Engagement Box */}
            <div className="p-6 bg-[#181D1C]/40 border border-[#242C2A] space-y-3">
              <div className="text-xs font-mono-code text-[#FF6B5C]">
                NO PRESSURE DISCOVERY
              </div>
              <p className="text-xs text-[#AEB7B2] leading-relaxed">
                Initial conversations are exploratory technical exchanges with engineering leads, not scripted sales pitches. We determine mutual feasibility early.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

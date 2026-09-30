import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ApproachSection } from './components/ApproachSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { EngineeringSection } from './components/EngineeringSection';
import { TechnologySection } from './components/TechnologySection';
import { AiSection } from './components/AiSection';
import { IndustriesSection } from './components/IndustriesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CASE_STUDIES } from './data/content';
import { CaseStudy } from './types';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [contactServicePreset, setContactServicePreset] = useState<string | undefined>(undefined);

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setContactServicePreset(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCaseStudyById = (id: string) => {
    const found = CASE_STUDIES.find(cs => cs.id === id);
    if (found) {
      setActiveCaseStudy(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#080A0A] text-[#F5F7F2] relative selection:bg-[#C8FF3D] selection:text-[#080A0A]">
      {/* Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <main>
        {/* 00 / HERO */}
        <Hero onStartConversation={() => handleOpenContact()} />

        {/* 01 / APPROACH */}
        <ApproachSection />

        {/* 02 / SERVICES */}
        <ServicesSection onSelectService={(service) => handleOpenContact(service)} />

        {/* 03 / SELECTED WORK */}
        <WorkSection onOpenCaseStudy={(study) => setActiveCaseStudy(study)} />

        {/* 04 / ENGINEERING */}
        <EngineeringSection />

        {/* TECHNOLOGY INDEX */}
        <TechnologySection />

        {/* 05 / AI */}
        <AiSection />

        {/* 06 / INDUSTRIES */}
        <IndustriesSection />

        {/* ABOUT & VALUES */}
        <AboutSection />

        {/* METHODOLOGY / HOW WE WORK */}
        <ProcessSection />

        {/* CONTACT & INITIATION */}
        <ContactSection initialService={contactServicePreset} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Comprehensive Case Study Drawer/Modal */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onSelectAnother={handleSelectCaseStudyById}
        allCaseStudies={CASE_STUDIES}
      />
    </div>
  );
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle?: string;
  clientSector: string;
  aspectRatio: string;
  imageAlt: string;
  summary: string;
  technologies: string[];
  year: string;
  location: string;
  overview: string;
  problem: string;
  approach: string;
  productFeatures: string[];
  technologyDetails: string[];
  outcome: string;
  engineeringFocus?: string;
}

export interface EngineeringPillar {
  title: string;
  summary: string;
  details: string;
  metricsOrPractices: string[];
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface IndustryItem {
  name: string;
  description: string;
  technicalChallenges: string[];
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface WorkStep {
  number: string;
  name: string;
  description: string;
  details: string;
}

import React from 'react';
import {
  ShieldCheck,
  Terminal,
  Layers,
  Compass,
  FileSpreadsheet,
  Receipt,
  Building2,
  CheckCircle2,
  Shield,
  Globe,
  FileCheck2,
  Calendar,
  Printer
} from 'lucide-react';

interface ProjectMockupProps {
  id: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ id }) => {
  // =========================================================================
  // 01: EXPENSO (Personal Finance / AI / FinTech)
  // =========================================================================
  if (id === 'expenso') {
    return (
      <div className="w-full bg-[#080A0A] p-3 sm:p-4 lg:p-5 pt-10 sm:pt-10 lg:pt-10 flex flex-col select-none font-mono-code relative overflow-hidden">
        {/* Top Intelligence Bar */}
        <div className="flex items-center justify-between border-b border-[#242C2A] pb-3 text-[11px] text-[#AEB7B2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C8FF3D] rounded-none animate-pulse" />
            <span className="text-[#F5F7F2] font-bold tracking-wider">EXPENSO // CORE SYSTEM</span>
            <span className="text-[#AEB7B2]/40 hidden md:inline">v2.4 DETERMINISTIC</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[10px]">
            <span className="text-[#C8FF3D] hidden sm:inline">3 ACCOUNTS ACTIVE</span>
            <span className="text-[#AEB7B2] border border-[#242C2A] px-2 py-0.5 bg-[#111515]">LOCAL VAULT</span>
          </div>
        </div>

        {/* Center: Intelligence Workspace */}
        <div className="my-2 sm:my-3 space-y-2">
          {/* Top Cashflow Balance Grid */}
          <div className="grid grid-cols-3 gap-2 bg-[#111515] border border-[#181D1C] p-2.5 sm:p-3">
            <div>
              <div className="text-[9px] text-[#AEB7B2]/60 uppercase tracking-wider">TOTAL INFLOW</div>
              <div className="text-xs sm:text-sm font-bold text-[#C8FF3D] mt-0.5">+$9,240.00 <span className="text-[9px] font-normal text-[#AEB7B2]">CAD</span></div>
            </div>
            <div>
              <div className="text-[9px] text-[#AEB7B2]/60 uppercase tracking-wider">TOTAL OUTFLOW</div>
              <div className="text-xs sm:text-sm font-bold text-[#FF6B5C] mt-0.5">-$3,412.50 <span className="text-[9px] font-normal text-[#AEB7B2]">CAD</span></div>
            </div>
            <div className="text-right">
              <div className="text-[9px] text-[#AEB7B2]/60 uppercase tracking-wider">NET SURPLUS</div>
              <div className="text-xs sm:text-sm font-bold text-[#F5F7F2] mt-0.5">+$5,827.50 <span className="text-[9px] font-normal text-[#AEB7B2]">CAD</span></div>
            </div>
          </div>

          {/* Split View: Statement Stream & Conversational Query */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Left: Statement Ingestion & Categorization (7 cols) */}
            <div className="md:col-span-7 bg-[#111515] border border-[#181D1C] p-2.5 sm:p-3 space-y-2">
              <div className="flex justify-between items-center text-[10px] text-[#AEB7B2]/70 pb-1.5 border-b border-[#181D1C]">
                <span>STATEMENT INGESTION FEED</span>
                <span className="text-[#C8FF3D] text-[9px]">AUTO-CATEGORIZED</span>
              </div>
              <div className="space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between py-1 border-b border-[#181D1C]/60">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#AEB7B2]/50 text-[9px]">09/28</span>
                    <span className="text-[#F5F7F2]">AWS Cloud Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] px-1.5 py-0.2 bg-[#181D1C] text-[#AEB7B2] border border-[#242C2A]">INFRA</span>
                    <span className="text-[#FF6B5C]">-$412.30</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#181D1C]/60">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#AEB7B2]/50 text-[9px]">09/27</span>
                    <span className="text-[#F5F7F2]">Client Retainer — Montreal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] px-1.5 py-0.2 bg-[#181D1C] text-[#C8FF3D] border border-[#C8FF3D]/30">INCOME</span>
                    <span className="text-[#C8FF3D]">+$4,500.00</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#AEB7B2]/50 text-[9px]">09/26</span>
                    <span className="text-[#F5F7F2]">Hardware Dev Kit (Apple Inc)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] px-1.5 py-0.2 bg-[#181D1C] text-[#AEB7B2] border border-[#242C2A]">EQUIP</span>
                    <span className="text-[#FF6B5C]">-$1,840.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Conversational Query Grounding (5 cols) */}
            <div className="md:col-span-5 bg-[#181D1C] border border-[#2E3634] p-2.5 sm:p-3 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center gap-1.5 text-[9px] text-[#C8FF3D] font-bold mb-1.5">
                  <Terminal className="w-3 h-3" />
                  <span>NATURAL QUERY ENGINE</span>
                </div>
                <div className="p-1.5 bg-[#080A0A] border border-[#242C2A] text-[10px] text-[#F5F7F2] font-mono-code mb-2">
                  &gt; "What is my tech run-rate?"
                </div>
                <p className="text-[10px] text-[#AEB7B2] leading-relaxed">
                  Tech overhead is <span className="text-[#F5F7F2] font-bold">$412.30 CAD/mo</span>. Projected Q4 commitment remains within planned limits across statements.
                </p>
              </div>
              <div className="text-[9px] text-[#C8FF3D] pt-1.5 border-t border-[#242C2A] flex items-center justify-between">
                <span>DETERMINISTIC VERIFICATION</span>
                <span className="text-[#AEB7B2]/60">0% DRIFT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Row */}
        <div className="mt-2 flex items-center justify-between text-[10px] text-[#AEB7B2] pt-2 border-t border-[#181D1C]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C8FF3D]" />
            <span>ZERO-KNOWLEDGE STORAGE</span>
          </div>
          <span className="text-[#C8FF3D]">ARITHMETIC ACCURACY: 100%</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 02: DRONESURVEY (GIS / Geospatial / Photogrammetry)
  // =========================================================================
  if (id === 'dronesurvey') {
    return (
      <div className="w-full h-full bg-[#080A0A] px-4 pb-4 pt-10 sm:px-6 sm:pb-6 sm:pt-10 flex flex-col justify-between select-none font-mono-code relative overflow-hidden">
        {/* Top GIS Bar */}
        <div className="flex items-center justify-between border-b border-[#242C2A] pb-3 text-[11px] text-[#AEB7B2]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#C8FF3D]" />
            <span className="text-[#F5F7F2] font-bold">DRONESURVEY // BROWSER GIS VIEWER</span>
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span className="text-[#C8FF3D]">ON-DEMAND MAP TILES</span>
            <span className="text-[#AEB7B2]/70 hidden sm:inline">LARGE RASTER DATASET</span>
          </div>
        </div>

        {/* Center: Raster & Vector Layer Simulation */}
        <div className="my-3 sm:my-4 relative h-48 sm:h-64 bg-[#111515] border border-[#181D1C] p-4 overflow-hidden">
          {/* Spatial Grid Lines */}
          <div className="absolute inset-0 bg-tech-grid opacity-30" />

          {/* Spatial Vector Lines & Polygons */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 240">
            {/* Elevation Contour Lines */}
            <path
              d="M 20 180 Q 140 120 260 140 T 480 80"
              fill="none"
              stroke="#2E3634"
              strokeWidth="1.5"
            />
            <path
              d="M 20 150 Q 140 90 260 110 T 480 50"
              fill="none"
              stroke="#2E3634"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />

            {/* Cadastral Polygon (Shapefile feature) */}
            <polygon
              points="140,40 280,30 360,110 320,190 180,180"
              fill="#C8FF3D"
              fillOpacity="0.08"
              stroke="#C8FF3D"
              strokeWidth="1.5"
            />

            {/* Flight Path Waypoints (KML Log) */}
            <polyline
              points="60,200 120,160 180,110 240,70 300,50 380,80 440,130"
              fill="none"
              stroke="#FF6B5C"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Vertex Nodes */}
            <circle cx="140" cy="40" r="3.5" fill="#C8FF3D" />
            <circle cx="280" cy="30" r="3.5" fill="#C8FF3D" />
            <circle cx="360" cy="110" r="3.5" fill="#C8FF3D" />
            <circle cx="320" cy="190" r="3.5" fill="#C8FF3D" />
            <circle cx="180" cy="180" r="3.5" fill="#C8FF3D" />
          </svg>

          {/* Floating Spatial Inspector */}
          <div className="absolute top-3 left-3 bg-[#181D1C]/95 border border-[#2E3634] p-2.5 text-[10px] space-y-1 shadow-md max-w-[220px]">
            <div className="text-[#C8FF3D] font-bold">POLYGON #SHP-408</div>
            <div className="text-[#F5F7F2]">SURFACE AREA: 14,820 m²</div>
            <div className="text-[#AEB7B2]">CRS: EPSG:4326 (WGS 84)</div>
            <div className="text-[#AEB7B2]">GSD: 0.024 m/px (2.4 cm)</div>
          </div>

          {/* Active Layer Pill */}
          <div className="absolute bottom-3 right-3 bg-[#080A0A]/90 border border-[#242C2A] px-2.5 py-1.5 text-[9px] text-[#AEB7B2] flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#C8FF3D]">
              <Layers className="w-3 h-3" />
              <span>DYNAMIC TILING (GDAL/RASTERIO)</span>
            </span>
            <span className="hidden sm:inline text-[#AEB7B2]/60">VIEWPORT-BASED LOADING</span>
          </div>
        </div>

        {/* Footer Metrics Row */}
        <div className="grid grid-cols-3 gap-2 text-[10px] text-[#AEB7B2] pt-2 border-t border-[#181D1C]">
          <div>FORMATS: <span className="text-[#F5F7F2]">COG / KML / SHP</span></div>
          <div>MAP VIEW: <span className="text-[#C8FF3D]">LEAFLET</span></div>
          <div className="text-right">NO DESKTOP GIS REQUIRED</div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 03: TOUR DIARY (Government Workflow / Travel Claims / AI Automation)
  // =========================================================================
  if (id === 'tour-diary') {
    return (
      <div className="w-full h-full bg-[#080A0A] p-4 sm:p-6 pt-10 sm:pt-10 flex flex-col justify-between select-none font-mono-code relative overflow-hidden">
        {/* Top Government Platform Banner */}
        <div className="flex items-center justify-between border-b border-[#242C2A] pb-3 text-[11px] text-[#AEB7B2]">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-[#C8FF3D]" />
            <span className="text-[#F5F7F2] font-bold">TOUR DIARY // પ્રવાસ ડાયરી અને ભથ્થું</span>
          </div>
          <div className="text-[10px] text-[#C8FF3D] border border-[#C8FF3D]/30 px-2 py-0.5">
            GOVT FORMAT COMPLIANT
          </div>
        </div>

        {/* Center: Travel Legs & AI Extraction Stream */}
        <div className="my-3 sm:my-4 bg-[#111515] border border-[#181D1C] p-3.5 space-y-3">
          <div className="flex justify-between items-center text-[10px] text-[#AEB7B2] pb-1.5 border-b border-[#181D1C]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#C8FF3D]" />
              <span>SEPTEMBER 2025 // T.A./D.A. CLAIM SUMMARY</span>
            </span>
            <span className="text-[#C8FF3D]">TOTAL CLAIM: ₹14,850</span>
          </div>

          {/* Travel Leg Record Rows */}
          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between bg-[#181D1C] p-2 border-l-2 border-[#C8FF3D]">
              <div>
                <span className="text-[#F5F7F2] font-bold">12-SEP: Gandhinagar → Ahmedabad</span>
                <span className="text-[#AEB7B2]/70 text-[9px] block">HQ Verification • Distance: 44 km</span>
              </div>
              <div className="text-right">
                <span className="text-[#C8FF3D]">D.A.: ₹450.00</span>
                <span className="text-[9px] text-[#AEB7B2]/60 block">GOVT VEHICLE</span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#181D1C] p-2 border-l-2 border-[#C8FF3D]">
              <div>
                <span className="text-[#F5F7F2] font-bold">15-SEP: Ahmedabad → Vadodara → Surat</span>
                <span className="text-[#AEB7B2]/70 text-[9px] block">Field Inspection • Distance: 260 km</span>
              </div>
              <div className="text-right">
                <span className="text-[#C8FF3D]">T.A.: ₹1,820 + D.A.: ₹600</span>
                <span className="text-[9px] text-[#AEB7B2]/60 block">PUBLIC TRANSIT</span>
              </div>
            </div>
          </div>

          {/* AI Note Parse & Excel Generator badge */}
          <div className="bg-[#080A0A] p-2 border border-[#242C2A] flex items-center justify-between text-[9px] text-[#AEB7B2]">
            <span className="text-[#AEB7B2]">AI LOG PARSER: <span className="text-[#F5F7F2]">"સુરત સાઇટ મુલાકાત" → EXTRACTED 2 LEGS</span></span>
            <span className="text-[#C8FF3D] font-bold">EXCELJS FORM 14-A READY</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-between text-[10px] text-[#AEB7B2] pt-2 border-t border-[#181D1C]">
          <span>SUPABASE POSTGRESQL + RLS</span>
          <span className="text-[#C8FF3D]">CLOUDFLARE TURNSTILE VERIFIED</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 04: SMART BILLING (Billing / Business Software / AI Analytics)
  // =========================================================================
  if (id === 'smart-billing') {
    return (
      <div className="w-full h-full bg-[#080A0A] p-4 sm:p-6 pt-10 sm:pt-10 flex flex-col justify-between select-none font-mono-code relative overflow-hidden">
        {/* Top Smart Billing Header */}
        <div className="flex items-center justify-between border-b border-[#242C2A] pb-3 text-[11px] text-[#AEB7B2]">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-[#C8FF3D]" />
            <span className="text-[#F5F7F2] font-bold">SMART BILLING // CLOUD INVOICE & GST</span>
          </div>
          <div className="text-[10px] text-[#C8FF3D]">
            CGST + SGST DETERMINISTIC
          </div>
        </div>

        {/* Center: Invoicing & Analytics Stream */}
        <div className="my-3 sm:my-4 bg-[#111515] border border-[#181D1C] p-3.5 space-y-2.5">
          <div className="grid grid-cols-4 text-[9px] text-[#AEB7B2]/60 uppercase tracking-wider pb-1 border-b border-[#181D1C]">
            <span>INV_NO</span>
            <span>CUSTOMER</span>
            <span>TAX RATE</span>
            <span className="text-right">TOTAL (INR)</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="grid grid-cols-4 text-[#AEB7B2] font-mono-code py-1 border-b border-[#181D1C]/60">
              <span className="text-[#F5F7F2]">INV-2041</span>
              <span>PATEL POLYMERS</span>
              <span>GST 18%</span>
              <span className="text-right text-[#C8FF3D]">₹48,500.00</span>
            </div>
            <div className="grid grid-cols-4 text-[#AEB7B2] font-mono-code py-1 border-b border-[#181D1C]/60">
              <span className="text-[#F5F7F2]">INV-2042</span>
              <span>SHREEJI HARDWARE</span>
              <span>GST 12%</span>
              <span className="text-right text-[#C8FF3D]">₹18,240.00</span>
            </div>
            <div className="grid grid-cols-4 text-[#AEB7B2] font-mono-code py-1">
              <span className="text-[#F5F7F2]">INV-2043</span>
              <span>BARODA TEXTILES</span>
              <span>GST 5%</span>
              <span className="text-right text-[#FF6B5C]">₹12,400 (DUE)</span>
            </div>
          </div>

          {/* Bilingual AI Business Insight callout */}
          <div className="mt-2.5 p-2 bg-[#181D1C] border border-[#2E3634] space-y-1 text-[10px]">
            <div className="flex items-center justify-between text-[#C8FF3D] text-[9px]">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                <span>AI RECOVERY ADVISOR (EN / GUJARATI)</span>
              </span>
              <span>WHATSAPP REMINDERS: ACTIVE</span>
            </div>
            <p className="text-[#AEB7B2] text-[9px] leading-relaxed">
              "Outstanding receivables from Baroda Textiles are 14 days overdue. Automated WhatsApp payment reminder formatted with UPI QR code."
            </p>
          </div>
        </div>

        {/* Footer print and sync indicators */}
        <div className="flex justify-between text-[10px] text-[#AEB7B2] pt-2 border-t border-[#181D1C]">
          <span className="flex items-center gap-1.5">
            <Printer className="w-3 h-3 text-[#C8FF3D]" />
            <span>THERMAL PRINT READY (ESC/POS)</span>
          </span>
          <span className="text-[#F5F7F2]">FIREBASE REALTIME DB: SYNCED</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 05: SR SECURITY SERVICES (Corporate Website / Web Development)
  // =========================================================================
  return (
    <div className="w-full h-full bg-[#080A0A] p-4 sm:p-6 pt-10 sm:pt-10 flex flex-col justify-between select-none font-mono-code relative overflow-hidden">
      {/* Top Corporate Web Header */}
      <div className="flex items-center justify-between border-b border-[#242C2A] pb-3 text-[11px] text-[#AEB7B2]">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#C8FF3D]" />
          <span className="text-[#F5F7F2] font-bold">SR SECURITY SERVICES // CORPORATE PLATFORM</span>
        </div>
        <div className="text-[10px] text-[#C8FF3D] border border-[#C8FF3D]/30 px-2 py-0.5">
          PSARA / ISO CERTIFIED
        </div>
      </div>

      {/* Center: Structured Service Divisions & Credentials */}
      <div className="my-3 sm:my-4 bg-[#111515] border border-[#181D1C] p-3.5 space-y-3">
        {/* Core Security Divisions Grid */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-[#181D1C] p-2 border-l-2 border-[#C8FF3D] space-y-0.5">
            <span className="text-[#F5F7F2] font-bold block">01. Armed & Static Guards</span>
            <span className="text-[#AEB7B2]/70 text-[9px] block">Industrial plants & corporate parks</span>
          </div>
          <div className="bg-[#181D1C] p-2 border-l-2 border-[#C8FF3D] space-y-0.5">
            <span className="text-[#F5F7F2] font-bold block">02. Executive Bouncers & VIP</span>
            <span className="text-[#AEB7B2]/70 text-[9px] block">High-profile security & event management</span>
          </div>
          <div className="bg-[#181D1C] p-2 border-l-2 border-[#C8FF3D] space-y-0.5">
            <span className="text-[#F5F7F2] font-bold block">03. Facility Management</span>
            <span className="text-[#AEB7B2]/70 text-[9px] block">Commercial housekeeping & manpower</span>
          </div>
          <div className="bg-[#181D1C] p-2 border-l-2 border-[#C8FF3D] space-y-0.5">
            <span className="text-[#F5F7F2] font-bold block">04. Corporate Detective</span>
            <span className="text-[#AEB7B2]/70 text-[9px] block">Internal audit & verification services</span>
          </div>
        </div>

        {/* Deployment Process & Instant Enquiry callout */}
        <div className="bg-[#080A0A] p-2 border border-[#242C2A] flex items-center justify-between text-[9px]">
          <span className="text-[#AEB7B2]">6-STEP DEPLOYMENT: <span className="text-[#C8FF3D]">Audit → Roster → Deploy</span></span>
          <span className="text-[#F5F7F2] font-bold">WHATSAPP DIRECT ENQUIRY READY</span>
        </div>
      </div>

      {/* Footer stack and audit score */}
      <div className="flex justify-between text-[10px] text-[#AEB7B2] pt-2 border-t border-[#181D1C]">
        <span>REACT • TYPESCRIPT • TAILWIND CSS • VITE</span>
        <span className="text-[#C8FF3D]">MOBILE-FIRST: 100/100</span>
      </div>
    </div>
  );
};

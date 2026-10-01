import React, { useRef, useState } from 'react';

interface NodePoint {
  id: string;
  label: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  type: 'chartreuse' | 'coral' | 'graphite';
  subText: string;
  radius: number;
  labelAlign: 'left' | 'right';
}

const NODES: NodePoint[] = [
  { id: 'n1', label: 'PRODUCT.EXPERIENCE', x: 18, y: 27, type: 'chartreuse', subText: 'WEB / MOBILE', radius: 4, labelAlign: 'right' },
  { id: 'n2', label: 'APPLICATION.SYSTEMS', x: 74, y: 18, type: 'graphite', subText: 'FRONTEND / BACKEND', radius: 3, labelAlign: 'left' },
  { id: 'n3', label: 'INTEGRATIONS', x: 77, y: 38, type: 'chartreuse', subText: 'APIs / SERVICES', radius: 4, labelAlign: 'left' },
  { id: 'n4', label: 'DATA.SYSTEMS', x: 24, y: 48, type: 'coral', subText: 'SQL / NoSQL / SEARCH', radius: 3.5, labelAlign: 'right' },
  { id: 'n5', label: 'AI & AUTOMATION', x: 70, y: 60, type: 'chartreuse', subText: 'LLM / RAG / AGENTS', radius: 4.5, labelAlign: 'right' },
  { id: 'n6', label: 'CLOUD & DELIVERY', x: 76, y: 70, type: 'graphite', subText: 'CLOUD / CONTAINERS / CI-CD', radius: 3, labelAlign: 'left' },
  { id: 'n7', label: 'SECURITY & ACCESS', x: 22, y: 82, type: 'chartreuse', subText: 'AUTH / RBAC / DATA', radius: 4, labelAlign: 'right' }
];

const CONNECTIONS = [
  { from: 0, to: 1, flow: true, route: 'M 18 27 L 18 12 L 74 12 L 74 18' },
  { from: 1, to: 2, flow: true, route: 'M 74 18 L 86 18 L 86 38 L 77 38' },
  { from: 1, to: 3, flow: false, route: 'M 74 18 L 60 18 L 60 48 L 24 48' },
  { from: 3, to: 4, flow: true, route: 'M 24 48 L 24 60 L 70 60' },
  { from: 4, to: 5, flow: true, route: 'M 70 60 L 60 60 L 60 70 L 76 70' },
  { from: 3, to: 6, flow: false, route: 'M 24 48 L 12 48 L 12 82 L 22 82' },
  { from: 5, to: 6, flow: false, route: 'M 76 70 L 90 70 L 90 92 L 22 92 L 22 82' },
];

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeNode, setActiveNode] = useState<NodePoint | null>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0.5, y: 0.5 });
    setActiveNode(null);
  };

  // Parallax subtle offset calculation
  const parallaxX = (mousePos.x - 0.5) * 16;
  const parallaxY = (mousePos.y - 0.5) * 16;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[clamp(440px,calc(100svh-300px),520px)] sm:h-[clamp(460px,calc(100svh-240px),580px)] lg:h-[clamp(480px,calc(100svh-250px),620px)] bg-[#111515] border border-[#242C2A] rounded-sm overflow-hidden select-none transition-all duration-300"
      id="hero-technical-canvas"
    >
      {/* Blueprint Grid Layer */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-35" 
        style={{
          transform: `translate3d(${parallaxX * 0.3}px, ${parallaxY * 0.3}px, 0)`
        }}
      />

      {/* Structural Framing & Coordinate Calibrations */}
      <div className="absolute top-3 left-4 text-[10px] font-mono-code text-[#AEB7B2]/70 flex items-center gap-3">
        <span className="inline-block w-1.5 h-1.5 bg-[#C8FF3D] animate-pulse rounded-none" />
        <span className="tracking-widest">XLOGIK // ENGINEERING_SYSTEM</span>
      </div>

      <div className="absolute top-3 right-4 text-[10px] font-mono-code text-[#AEB7B2]/60 hidden sm:block">
        WEB / MOBILE / BACKEND / AI
      </div>

      <div className="absolute bottom-3 left-4 text-[10px] font-mono-code text-[#AEB7B2]/60 flex items-center gap-4">
        <span>SYSTEM: <strong className="text-[#C8FF3D] font-normal">ACTIVE</strong></span>
        <span className="hidden sm:inline">MODE: ENGINEERING</span>
      </div>

      <div className="absolute bottom-3 right-4 text-[10px] font-mono-code text-[#AEB7B2]/60 text-right">
        XLOGIK_SYSTEM_MAP
      </div>

      {/* Architectural Blueprint Layer (SVG) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Subtle line gradient */}
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#242C2A" />
            <stop offset="50%" stopColor="#C8FF3D" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#242C2A" />
          </linearGradient>
          <linearGradient id="coralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#242C2A" />
            <stop offset="100%" stopColor="#FF6B5C" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Structural Guide Crosshairs */}
        <line x1="10" y1="50" x2="90" y2="50" stroke="#181D1C" strokeWidth="0.3" strokeDasharray="1, 2" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="#181D1C" strokeWidth="0.3" strokeDasharray="1, 2" />

        {/* Diagonal architectural drafting guides */}
        <line x1="20" y1="20" x2="80" y2="80" stroke="#181D1C" strokeWidth="0.2" />
        <line x1="80" y1="20" x2="20" y2="80" stroke="#181D1C" strokeWidth="0.2" />

        {/* Circuit & Pipeline Connection Lines */}
        {CONNECTIONS.map((conn, idx) => {
          const fromNode = NODES[conn.from];
          const toNode = NODES[conn.to];
          const pathD = conn.route;

          const isCoralConnection = fromNode.type === 'coral' || toNode.type === 'coral';

          return (
            <g key={`conn-${idx}`}>
              {/* Static Background Path */}
              <path
                id={`connection-path-${idx}`}
                d={pathD}
                fill="none"
                stroke={isCoralConnection ? 'rgba(255, 107, 92, 0.2)' : 'rgba(200, 255, 61, 0.2)'}
                strokeWidth="0.35"
              />
              {/* Moving data packet */}
              {conn.flow && (
                <circle
                  cx="0"
                  cy="0"
                  r="0.75"
                  fill={isCoralConnection ? '#FF6B5C' : '#C8FF3D'}
                  opacity={0.85}
                >
                  <animateMotion dur="4s" repeatCount="indefinite" begin={`${idx * 0.6}s`}>
                    <mpath href={`#connection-path-${idx}`} />
                  </animateMotion>
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Interactive Node Anchors */}
      <div className="absolute inset-0">
        {NODES.map((node) => {
          // Distance to mouse for brightness reactivity
          const mouseDist = Math.hypot((node.x / 100) - mousePos.x, (node.y / 100) - mousePos.y);
          const isProximity = mouseDist < 0.22;
          const isHovered = activeNode?.id === node.id;
          let colorClass = 'bg-[#C8FF3D] shadow-[0_0_12px_rgba(200,255,61,0.4)]';
          let textColor = 'text-[#C8FF3D]';
          let borderClass = 'border-[#C8FF3D]/40';

          if (node.type === 'coral') {
            colorClass = 'bg-[#FF6B5C] shadow-[0_0_12px_rgba(255,107,92,0.4)]';
            textColor = 'text-[#FF6B5C]';
            borderClass = 'border-[#FF6B5C]/40';
          } else if (node.type === 'graphite') {
            colorClass = 'bg-[#AEB7B2]';
            textColor = 'text-[#AEB7B2]';
            borderClass = 'border-[#AEB7B2]/30';
          }

          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group pointer-events-auto"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translate3d(calc(-50% + ${parallaxX * 1.2}px), calc(-50% + ${parallaxY * 1.2}px), 0)`
              }}
              onMouseEnter={() => setActiveNode(node)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Node dot and radar rings */}
              <div className="relative flex items-center justify-center">
                {/* Subtle pulse ring on proximity or hover */}
                {(isProximity || isHovered) && (
                  <div 
                    className={`absolute rounded-full animate-ping pointer-events-none ${
                      node.type === 'coral' ? 'bg-[#FF6B5C]/20' : 'bg-[#C8FF3D]/20'
                    }`}
                    style={{ width: `${node.radius * 6}px`, height: `${node.radius * 6}px` }}
                  />
                )}
                
                {/* Node Outer ring */}
                <div 
                  className={`border ${borderClass} rounded-none transition-transform duration-200 ${
                    isHovered ? 'scale-125 border-opacity-100' : 'scale-100'
                  }`}
                  style={{ width: `${node.radius * 3.5}px`, height: `${node.radius * 3.5}px` }}
                />

                {/* Node Core */}
                <div
                  className={`absolute rounded-none transition-all duration-200 ${colorClass} ${
                    isProximity ? 'opacity-100 scale-110' : 'opacity-85'
                  }`}
                  style={{ width: `${node.radius * 1.5}px`, height: `${node.radius * 1.5}px` }}
                />
              </div>

              {/* Minimal technical label tag */}
              <div 
                className={`absolute ${node.labelAlign === 'left' ? 'right-4 text-right' : 'left-4'} top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1.5 bg-[#080A0A]/90 border border-[#242C2A] text-[9px] font-mono-code transition-all duration-200 ${
                  isHovered || isProximity ? `opacity-100 ${node.labelAlign === 'left' ? '-translate-x-1' : 'translate-x-1'}` : 'opacity-75'
                }`}
              >
                <div className={`leading-tight ${textColor}`}>
                  {node.label}
                </div>
                <div className="mt-1 text-[8px] text-[#AEB7B2]/70 font-sans tracking-wide leading-tight">
                  {node.subText}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

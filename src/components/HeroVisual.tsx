import React, { useEffect, useRef, useState } from 'react';

interface NodePoint {
  id: string;
  label: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  type: 'chartreuse' | 'coral' | 'graphite';
  subText: string;
  radius: number;
}

const NODES: NodePoint[] = [
  { id: 'n1', label: 'EDGE.GATEWAY', x: 22, y: 25, type: 'chartreuse', subText: 'TLS 1.3 / INGRESS', radius: 4 },
  { id: 'n2', label: 'SCHEMA.VAL', x: 48, y: 20, type: 'graphite', subText: 'STRICT_TS_CONTRACT', radius: 3 },
  { id: 'n3', label: 'EVENT.BUS', x: 78, y: 32, type: 'chartreuse', subText: 'PUBSUB_PERSIST', radius: 4 },
  { id: 'n4', label: 'STATE.LOCK', x: 35, y: 55, type: 'coral', subText: 'ACID_LEDGER_CHK', radius: 3.5 },
  { id: 'n5', label: 'VECTOR.STORE', x: 65, y: 62, type: 'chartreuse', subText: 'HNSW_HYBRID_IDX', radius: 4.5 },
  { id: 'n6', label: 'REPLICA.POW', x: 88, y: 75, type: 'graphite', subText: 'REGION_US_EAST', radius: 3 },
  { id: 'n7', label: 'DISPATCH.SVC', x: 20, y: 80, type: 'chartreuse', subText: 'TELEMETRY_STREAM', radius: 4 },
  { id: 'n8', label: 'AUDIT.LEDGER', x: 50, y: 88, type: 'coral', subText: 'IMMUTABLE_LOG', radius: 3.5 }
];

const CONNECTIONS = [
  { from: 0, to: 1, flow: true },
  { from: 1, to: 2, flow: true },
  { from: 1, to: 3, flow: false },
  { from: 3, to: 4, flow: true },
  { from: 2, to: 5, flow: true },
  { from: 3, to: 6, flow: false },
  { from: 4, to: 7, flow: true },
  { from: 6, to: 7, flow: false },
];

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeNode, setActiveNode] = useState<NodePoint | null>(null);
  const [pulseTick, setPulseTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 1000);
    }, 40);
    return () => clearInterval(interval);
  }, []);

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
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-[#111515] border border-[#242C2A] rounded-sm overflow-hidden select-none transition-all duration-300"
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
        <span className="tracking-widest">SYS_ARCHITECTURE // CANADA_INFRA</span>
      </div>

      <div className="absolute top-3 right-4 text-[10px] font-mono-code text-[#AEB7B2]/60 hidden sm:block">
        GRID [128.0.4] / LAT 43.6532°N
      </div>

      <div className="absolute bottom-3 left-4 text-[10px] font-mono-code text-[#AEB7B2]/60 flex items-center gap-4">
        <span>STATUS: <strong className="text-[#C8FF3D] font-normal">HEALTHY</strong></span>
        <span className="hidden sm:inline">RTL: 14ms</span>
        <span className="text-[#FF6B5C]/90">0 ERRORS</span>
      </div>

      <div className="absolute bottom-3 right-4 text-[10px] font-mono-code text-[#AEB7B2]/60 text-right">
        XLOGIK_SPEC_V4.2
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
          // Orthogonal routing path (Manhattan wiring style)
          const midX = toNode.x;
          const midY = fromNode.y;
          const pathD = `M ${fromNode.x} ${fromNode.y} L ${midX} ${midY} L ${toNode.x} ${toNode.y}`;

          // Active animated packet position along the line
          const packetProgress = ((pulseTick * 1.5 + idx * 30) % 100) / 100;
          const packetX = fromNode.x + (toNode.x - fromNode.x) * packetProgress;
          const packetY = fromNode.y + (toNode.y - fromNode.y) * packetProgress;

          const isCoralConnection = fromNode.type === 'coral' || toNode.type === 'coral';

          return (
            <g key={`conn-${idx}`}>
              {/* Static Background Path */}
              <path
                d={pathD}
                fill="none"
                stroke={isCoralConnection ? 'rgba(255, 107, 92, 0.2)' : 'rgba(200, 255, 61, 0.2)'}
                strokeWidth="0.35"
              />
              {/* Direct line */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="rgba(255, 255, 255, 0.07)"
                strokeWidth="0.25"
                strokeDasharray="0.8, 1.2"
              />
              {/* Moving data packet */}
              {conn.flow && (
                <circle
                  cx={packetX}
                  cy={packetY}
                  r="0.75"
                  fill={isCoralConnection ? '#FF6B5C' : '#C8FF3D'}
                  opacity={0.85}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Layered Architectural Graphite Surfaces */}
      <div 
        className="absolute top-1/4 left-1/3 w-64 h-48 border border-[#2E3634]/60 bg-[#181D1C]/50 backdrop-blur-xs p-3 pointer-events-none"
        style={{
          transform: `translate3d(${parallaxX * 0.7}px, ${parallaxY * 0.7}px, 0)`
        }}
      >
        <div className="flex justify-between items-center text-[9px] font-mono-code text-[#AEB7B2]/80 border-b border-[#242C2A] pb-1 mb-2">
          <span>PIPELINE_SCHEDULER</span>
          <span className="text-[#C8FF3D]">ACTIVE</span>
        </div>
        <div className="space-y-1.5 text-[9px] font-mono-code text-[#AEB7B2]/70">
          <div className="flex justify-between">
            <span>&gt; Ingest Queue</span>
            <span className="text-[#F5F7F2]">1,280 msg/s</span>
          </div>
          <div className="flex justify-between">
            <span>&gt; Worker Pool</span>
            <span className="text-[#F5F7F2]">16 cpus [Nominal]</span>
          </div>
          <div className="flex justify-between">
            <span>&gt; DB Synchronization</span>
            <span className="text-[#C8FF3D]">0.12ms sync</span>
          </div>
        </div>
        {/* Progress gauge */}
        <div className="mt-3 pt-2 border-t border-[#242C2A]">
          <div className="h-1 bg-[#080A0A] w-full overflow-hidden">
            <div 
              className="h-full bg-[#C8FF3D] transition-all duration-300"
              style={{ width: `${60 + (pulseTick % 30)}%` }}
            />
          </div>
          <div className="flex justify-between text-[8px] font-mono-code text-[#AEB7B2]/50 mt-1">
            <span>STREAM BUFFER</span>
            <span>OK</span>
          </div>
        </div>
      </div>

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
                className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-0.5 bg-[#080A0A]/90 border border-[#242C2A] text-[9px] font-mono-code transition-all duration-200 ${
                  isHovered || isProximity ? 'opacity-100 translate-x-1' : 'opacity-65'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className={textColor}>{node.label}</span>
                </div>
                <div className="text-[8px] text-[#AEB7B2]/70 font-sans tracking-wide">
                  {node.subText}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Node Detail Hover Card */}
      {activeNode && (
        <div 
          className="absolute bottom-12 right-6 max-w-xs bg-[#181D1C] border border-[#2E3634] p-3 text-left shadow-2xl z-20 pointer-events-none"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
            <span className="text-[#AEB7B2]">NODE_INSPECTION</span>
            <span className={activeNode.type === 'coral' ? 'text-[#FF6B5C]' : 'text-[#C8FF3D]'}>
              VERIFIED
            </span>
          </div>
          <div className="text-sm font-semibold text-[#F5F7F2] mb-0.5">
            {activeNode.label}
          </div>
          <div className="text-xs text-[#AEB7B2] leading-relaxed">
            {activeNode.subText} — Architectural component running distributed fault-tolerant processing.
          </div>
        </div>
      )}
    </div>
  );
};

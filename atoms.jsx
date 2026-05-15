// Shared atoms: Icon, Pill, Btn, Mono, MicroLabel, Divider, BrandMark
// All exported to window.

const ICONS = {
  arrowRight: <path d="M5 12h14M13 5l7 7-7 7"/>,
  arrowUpRight: <path d="M7 17 17 7M7 7h10v10"/>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></>,
  github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 6.77a5.07 5.07 0 0 0-.09-3.77S18.73 2.65 16 4.5a13.4 13.4 0 0 0-7 0C6.27 2.65 5.09 3 5.09 3A5.07 5.07 0 0 0 5 6.77 5.44 5.44 0 0 0 3.5 10.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24"/>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></>,
  mapPin: <><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
  fileText: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></>,
  flask: <><path d="M10 2v7.5L4 20a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-6-10.5V2"/><path d="M8 2h8M7 16h10"/></>,
  dna: <><path d="M2 15c6 0 6-6 12-6m-12 0c6 0 6 6 12 6"/><path d="M6 6h.01M6 18h.01M18 6h.01M18 18h.01"/></>,
  leaf: <><path d="M11 20A7 7 0 0 1 4 13c0-2 1-5 4-7 5-3 11-3 11-3s0 6-3 11c-2 3-5 4-7 4Z"/><path d="M2 22 17 7"/></>,
  chart: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></>,
  thermometer: <path d="M14 4v10.5a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>,
  droplet: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7Z"/>,
  search: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
  check: <path d="M20 6 9 17l-5-5"/>,
  x: <path d="M18 6 6 18M6 6l12 12"/>,
  menu: <path d="M4 12h16M4 6h16M4 18h16"/>,
};

function Icon({ name, size = 16, stroke = 1.5, style }) {
  const path = ICONS[name];
  if (!path) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth={stroke}
         strokeLinecap="round" strokeLinejoin="round" style={style}>
      {path}
    </svg>
  );
}

function Pill({ children, variant = 'neutral', dot = false }) {
  return <span className={`pill pill-${variant}`}>{dot && <span className="pill-dot"/>}{children}</span>;
}

function Btn({ children, variant = 'primary', icon, onClick, href, ...rest }) {
  const cls = `btn btn-${variant}`;
  const inner = <>{children}{icon && <Icon name={icon} size={14}/>}</>;
  if (href) return <a className={cls} href={href} onClick={onClick} {...rest}>{inner}</a>;
  return <button className={cls} onClick={onClick} {...rest}>{inner}</button>;
}

function Mono({ children, style }) {
  return <span className="mono" style={style}>{children}</span>;
}

function MicroLabel({ children, accent = false }) {
  return <div className={`micro-label${accent ? ' accent' : ''}`}>{children}</div>;
}

function Divider() {
  return <div className="hairline"/>;
}

function BrandMark({ size = 28 }) {
  // CL monogram
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" aria-label="Cássio Lima">
      <path d="M50 22 C 32 22, 22 34, 22 48 C 22 62, 32 74, 50 74"
            stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <path d="M58 22 V 74 H 78"
            stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="48" cy="48" r="2.8" fill="currentColor"/>
    </svg>
  );
}

function LeafMark({ size = 64, opacity = 0.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{opacity}}>
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 6 C 16 14, 10 30, 14 48 C 14 52, 16 56, 22 58 C 38 58, 50 46, 54 30 C 54 18, 48 10, 32 6 Z" strokeWidth="1.25"/>
        <path d="M22 58 L 50 14" strokeWidth="1"/>
        <path d="M26 50 C 32 44, 30 38, 36 32 C 42 26, 40 22, 46 18" strokeWidth="1.5"/>
        <path d="M30 54 C 36 48, 34 42, 40 36 C 46 30, 44 26, 50 22" strokeWidth="1.5" opacity="0.55"/>
      </g>
      <g fill="currentColor"><circle cx="36" cy="32" r="1.4"/><circle cx="42" cy="26" r="1.4"/><circle cx="30" cy="42" r="1.4"/></g>
    </svg>
  );
}

/* A small "Fig. 1" style scientific panel — three stacked time-series tracks
   echoing Cassio's actual NASA GISS / USDA SCAN figures. */
function FigurePanel() {
  return (
    <div className="figure-panel">
      <header className="figure-head">
        <span className="figure-tag">FIG. 1</span>
        <span className="figure-cap">Co-occurrence of heat &amp; drought · USDA SCAN · 2021</span>
      </header>
      <svg viewBox="0 0 320 220" className="figure-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heatfill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#d96d5a" stopOpacity="0.35"/>
            <stop offset="1" stopColor="#d96d5a" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="soilfill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#7df0c0" stopOpacity="0.30"/>
            <stop offset="1" stopColor="#7df0c0" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Grid */}
        <g stroke="rgba(214,234,219,0.07)" strokeWidth="0.5">
          <line x1="20" y1="40"  x2="310" y2="40"/>
          <line x1="20" y1="80"  x2="310" y2="80"/>
          <line x1="20" y1="120" x2="310" y2="120"/>
          <line x1="20" y1="160" x2="310" y2="160"/>
          <line x1="20" y1="200" x2="310" y2="200"/>
        </g>

        {/* X axis */}
        <line x1="20" y1="200" x2="310" y2="200" stroke="rgba(214,234,219,0.18)" strokeWidth="0.75"/>

        {/* Heatwave marker — vertical band */}
        <rect x="160" y="20" width="36" height="180" fill="rgba(217,109,90,0.10)"/>
        <line x1="178" y1="20" x2="178" y2="200" stroke="#d96d5a" strokeOpacity="0.5" strokeDasharray="2 3" strokeWidth="0.75"/>

        {/* Track 1 — Temperature anomaly (red, top, area + line) */}
        <path d="M 20 60 L 40 55 L 60 65 L 80 50 L 100 58 L 120 48 L 140 45 L 160 38 L 178 28 L 196 36 L 215 50 L 235 58 L 255 62 L 275 60 L 295 64 L 310 62 L 310 90 L 20 90 Z" fill="url(#heatfill)"/>
        <path d="M 20 60 L 40 55 L 60 65 L 80 50 L 100 58 L 120 48 L 140 45 L 160 38 L 178 28 L 196 36 L 215 50 L 235 58 L 255 62 L 275 60 L 295 64 L 310 62"
              fill="none" stroke="#d96d5a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Track 2 — Soil moisture (mint, middle, area + line) — depleted after heatwave */}
        <path d="M 20 110 L 40 108 L 60 105 L 80 112 L 100 108 L 120 110 L 140 106 L 160 108 L 178 115 L 196 128 L 215 138 L 235 142 L 255 138 L 275 132 L 295 128 L 310 130 L 310 160 L 20 160 Z" fill="url(#soilfill)"/>
        <path d="M 20 110 L 40 108 L 60 105 L 80 112 L 100 108 L 120 110 L 140 106 L 160 108 L 178 115 L 196 128 L 215 138 L 235 142 L 255 138 L 275 132 L 295 128 L 310 130"
              fill="none" stroke="#7df0c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Track 3 — Precipitation (bars, bottom) */}
        <g fill="rgba(95,184,147,0.65)">
          <rect x="22"  y="190" width="8" height="10"/>
          <rect x="42"  y="194" width="8" height="6"/>
          <rect x="62"  y="186" width="8" height="14"/>
          <rect x="82"  y="180" width="8" height="20"/>
          <rect x="102" y="192" width="8" height="8"/>
          <rect x="122" y="188" width="8" height="12"/>
          <rect x="142" y="196" width="8" height="4"/>
          <rect x="162" y="198" width="8" height="2"/>
          <rect x="182" y="199" width="8" height="1"/>
          <rect x="202" y="199" width="8" height="1"/>
          <rect x="222" y="197" width="8" height="3"/>
          <rect x="242" y="195" width="8" height="5"/>
          <rect x="262" y="193" width="8" height="7"/>
          <rect x="282" y="191" width="8" height="9"/>
          <rect x="302" y="194" width="8" height="6"/>
        </g>

        {/* Track labels */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="500" letterSpacing="1" fill="#9aa39c">
          <text x="20" y="32" textAnchor="start">A · TEMPERATURE ANOMALY  (°C)</text>
          <text x="20" y="102" textAnchor="start">B · SOIL HUMIDITY  (% @ 50CM)</text>
          <text x="20" y="178" textAnchor="start">C · PRECIPITATION  (MM)</text>
        </g>

        {/* Heatwave annotation */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="600" letterSpacing="1.2" fill="#d96d5a">
          <text x="178" y="16" textAnchor="middle">2021 NW HEATWAVE</text>
        </g>

        {/* X-axis ticks */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="500" fill="#6f7873">
          <text x="20"  y="214" textAnchor="start">JUN</text>
          <text x="80"  y="214" textAnchor="middle">JUL</text>
          <text x="160" y="214" textAnchor="middle">AUG</text>
          <text x="240" y="214" textAnchor="middle">SEP</text>
          <text x="310" y="214" textAnchor="end">OCT</text>
        </g>
      </svg>
      <footer className="figure-foot">
        <span>n = 92 days · 10-d moving avg</span>
        <span>Shagbark Hills, IA · USDA SCAN</span>
      </footer>
    </div>
  );
}

Object.assign(window, { Icon, Pill, Btn, Mono, MicroLabel, Divider, BrandMark, LeafMark, FigurePanel });

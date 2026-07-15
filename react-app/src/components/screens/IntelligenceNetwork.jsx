import React, { useState, useEffect } from 'react';

export default function IntelligenceNetwork() {
  const [selectedNode, setSelectedNode] = useState('volkov');
  const [weight, setWeight] = useState(70);
  const [digitalTime, setDigitalTime] = useState('00:00:00 UTC');
  const [searchQuery, setSearchQuery] = useState('');

  // Clock updates
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
      setDigitalTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const nodes = {
    volkov: {
      name: 'Konstantin Volkov',
      uid: '88493-VOL',
      type: 'Accused',
      threat: 'CRITICAL',
      reliability: 'A1 (Verified)',
      associations: [
        { name: 'The Voron Cartel', match: '84% Match' },
        { name: 'Global Logistics Inc', match: 'Direct Link' }
      ],
      description: 'Primary subject connected to illicit transfers.'
    },
    safehouse: {
      name: 'Safehouse Alpha',
      uid: 'LOC-7721',
      type: 'Location',
      threat: 'MEDIUM',
      reliability: 'B2 (Corroborated)',
      associations: [
        { name: 'K. Volkov', match: 'Frequent Visit' },
        { name: 'Sector 4 North geofence', match: 'Overlay' }
      ],
      description: 'Tactical intelligence hub safehouse.'
    },
    cayman: {
      name: 'Cayman Holding 09',
      uid: 'BNK-3302',
      type: 'Bank Account',
      threat: 'HIGH',
      reliability: 'A1 (Verified)',
      associations: [
        { name: 'K. Volkov', match: 'Account Owner' },
        { name: 'X-Corp holdings wire', match: '₹4.2 Cr' }
      ],
      description: 'Offshore shell vehicle used for layered wiring.'
    },
    case882: {
      name: 'Case: #882-FX',
      uid: 'CASE-882',
      type: 'Crime Record',
      threat: 'CRITICAL',
      reliability: 'A1 (Verified)',
      associations: [
        { name: 'Elias Vance', match: 'Co-defendant' },
        { name: 'Operation Silver-Line', match: 'Modus Operandi' }
      ],
      description: 'Active financial fraud crime docket.'
    }
  };

  const handleGenerateDossier = (nodeKey) => {
    alert(`Intelligence Dossier compiled and encrypted for: ${nodes[nodeKey].name}. Transmitting to local secure terminal...`);
  };

  return (
    <div className="flex-1 mt-16 h-[calc(100vh-64px)] relative flex overflow-hidden bg-background">
      {/* Network Canvas Area */}
      <section className="flex-grow relative bg-surface-container-lowest overflow-hidden">
        {/* Graph Visualizer Overlay */}
        <div className="absolute inset-0 z-10 p-gutter flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="glass-panel p-3 flex flex-col gap-1.5">
              <span className="font-label-caps text-[9px] text-primary uppercase font-bold">Active Analysis</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                <span className="font-data-mono text-[10px] text-on-surface">Live Sync: Op Raven-9</span>
              </div>
            </div>
            
            <div className="flex gap-1.5">
              <button onClick={() => alert("Zoom in applied")} className="glass-panel p-2 hover:bg-surface-container-highest text-on-surface-variant flex items-center">
                <span className="material-symbols-outlined text-base">zoom_in</span>
              </button>
              <button onClick={() => alert("Zoom out applied")} className="glass-panel p-2 hover:bg-surface-container-highest text-on-surface-variant flex items-center">
                <span className="material-symbols-outlined text-base">zoom_out</span>
              </button>
              <button onClick={() => setSelectedNode('volkov')} className="glass-panel p-2 hover:bg-surface-container-highest text-on-surface-variant flex items-center">
                <span className="material-symbols-outlined text-base">filter_center_focus</span>
              </button>
            </div>
          </div>

          {/* Interactive Graph Node Stage */}
          <div className="relative w-full h-full flex-grow">
            {/* SVG overlay for lines connecting nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45">
              <defs>
                <linearGradient id="grad-blue" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#adc6ff"></stop>
                  <stop offset="100%" stopColor="#4d8eff"></stop>
                </linearGradient>
              </defs>
              {/* Lines from Central Node (Volkov) at 45%, 40% */}
              <line x1="48%" y1="42%" x2="33%" y2="23%" stroke="url(#grad-blue)" strokeWidth="1" strokeDasharray="3"></line>
              <line x1="48%" y1="42%" x2="28%" y2="63%" stroke="url(#grad-blue)" strokeWidth="1"></line>
              <line x1="48%" y1="42%" x2="68%" y2="38%" stroke="#ffb4ab" strokeWidth="2"></line>
              
              {/* Labels on lines */}
              <text x="39%" y="32%" fill="#c2c6d6" fontSize="8" className="font-label-caps tracking-widest font-semibold">FREQUENTS</text>
              <text x="33%" y="52%" fill="#c2c6d6" fontSize="8" className="font-label-caps tracking-widest font-semibold">FINANCIAL LINK</text>
              <text x="54%" y="38%" fill="#ffb4ab" fontSize="8" className="font-label-caps tracking-widest font-semibold">SUSPECTED IN</text>
            </svg>

            {/* Central Node: Konstantin Volkov */}
            <div
              onClick={() => setSelectedNode('volkov')}
              className="absolute top-[38%] left-[44%] group cursor-pointer z-20"
            >
              <div className={`w-14 h-14 rounded-full glass-panel flex items-center justify-center border-2 transition-all p-0.5 ${
                selectedNode === 'volkov' ? 'border-primary scale-105 shadow-[0_0_15px_rgba(173,198,255,0.4)]' : 'border-outline-variant hover:border-primary'
              }`}>
                <img
                  className="w-full h-full rounded-full object-cover"
                  alt="Konstantin Volkov"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDls41cWO4TeZ5q5cWhFoLWaCo4HDh6uwb-R_zbVP0d6qaIXNUgPbwUNYHZjCXpOw1V9MHhxkZ3ennaP9KIJ53aSYgDgWQP7Fw3iJqRI9uPH3Owcn0KJaF4gJ_kOw3xZDJ83ox0s1EoYq7viDugP3dQ-QJSdtY_q9CCxRx2wRKEaWH_PHNzyOA7keC5XSkZEMQanIEtFLrLialtuW7fbbvfswCWziSnQx9BXHTKzw73637ZctWRiX9cTFYyKZdh0iTSQjYdLgig2JE"
                />
              </div>
              <div className="absolute top-[60px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/90 px-2 py-0.5 border border-outline-variant rounded font-data-mono text-[9px] text-primary">
                K. Volkov
              </div>
            </div>

            {/* Associated Node: Location */}
            <div
              onClick={() => setSelectedNode('safehouse')}
              className="absolute top-[18%] left-[28%] group cursor-pointer z-20"
            >
              <div className={`w-11 h-11 rounded-full glass-panel flex items-center justify-center border-2 transition-all ${
                selectedNode === 'safehouse' ? 'border-secondary scale-105 shadow-[0_0_15px_rgba(78,222,163,0.4)]' : 'border-outline-variant hover:border-secondary'
              }`}>
                <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
              </div>
              <div className="absolute top-[48px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/90 px-2 py-0.5 border border-outline-variant rounded font-data-mono text-[9px] text-secondary">
                Safehouse Alpha
              </div>
            </div>

            {/* Associated Node: Bank */}
            <div
              onClick={() => setSelectedNode('cayman')}
              className="absolute top-[58%] left-[23%] group cursor-pointer z-20"
            >
              <div className={`w-11 h-11 rounded-full glass-panel flex items-center justify-center border-2 transition-all ${
                selectedNode === 'cayman' ? 'border-tertiary scale-105 shadow-[0_0_15px_rgba(255,183,134,0.4)]' : 'border-outline-variant hover:border-tertiary'
              }`}>
                <span className="material-symbols-outlined text-tertiary text-lg">payments</span>
              </div>
              <div className="absolute top-[48px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/90 px-2 py-0.5 border border-outline-variant rounded font-data-mono text-[9px] text-tertiary">
                Cayman Holding 09
              </div>
            </div>

            {/* Associated Node: Crime */}
            <div
              onClick={() => setSelectedNode('case882')}
              className="absolute top-[33%] left-[65%] group cursor-pointer z-20"
            >
              <div className={`w-12 h-12 rounded-full glass-panel flex items-center justify-center border-2 transition-all ${
                selectedNode === 'case882' ? 'border-error scale-105 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'border-outline-variant hover:border-error'
              }`}>
                <span className="material-symbols-outlined text-error text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  gavel
                </span>
              </div>
              <div className="absolute top-[52px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/90 px-2 py-0.5 border border-outline-variant rounded font-data-mono text-[9px] text-error">
                Case: #882-FX
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Right Side: Filter Sidebar */}
      <aside className="w-80 border-l border-outline-variant bg-surface-container flex flex-col p-gutter z-20">
        <div className="mb-6 space-y-4">
          <h3 className="font-headline-sm text-sm font-semibold text-on-surface border-b border-outline-variant/30 pb-2">Network Filters</h3>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Entity Search</label>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-background border border-outline-variant py-2 px-3 text-xs outline-none focus:border-primary text-on-surface rounded"
                placeholder="Name or Alias..."
                type="text"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Node Type</label>
              <div className="flex flex-wrap gap-1.5">
                {['Accused', 'Victim', 'Location', 'Bank'].map((type) => (
                  <button
                    key={type}
                    onClick={() => alert(`Filtering by node type: ${type}`)}
                    className="bg-surface-container-highest border border-outline-variant hover:border-primary hover:text-primary px-2.5 py-1 text-[10px] font-label-caps rounded transition-colors text-on-surface-variant"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Relationship Weight</label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="accent-primary bg-outline-variant h-1 rounded-full cursor-pointer w-full my-1.5"
                type="range"
                min="0"
                max="100"
              />
              <div className="flex justify-between text-[8px] font-data-mono text-on-surface-variant opacity-60">
                <span>WEAK</span>
                <span>WEIGHT: {weight}%</span>
                <span>CRITICAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Entity Details */}
        <div className="mt-auto border-t border-outline-variant pt-4">
          <h4 className="font-label-caps text-[9px] text-on-surface-variant mb-3 uppercase tracking-wider font-semibold">Selected Entity Details</h4>
          <div className="glass-panel p-widget-padding space-y-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-primary-container/20 border border-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-lg">person</span>
              </div>
              <div className="truncate">
                <p className="font-headline-sm text-sm font-semibold text-primary truncate">{nodes[selectedNode].name}</p>
                <p className="text-[10px] opacity-60 font-data-mono">{nodes[selectedNode].uid}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 bg-surface-container-lowest/30 p-2.5 rounded border border-outline-variant/30 text-xs">
              <div>
                <p className="font-label-caps text-[8px] text-on-surface-variant uppercase font-semibold">Threat Level</p>
                <p className={`font-data-mono text-[10px] font-bold ${nodes[selectedNode].threat === 'CRITICAL' ? 'text-error animate-pulse' : 'text-tertiary-container'}`}>
                  {nodes[selectedNode].threat}
                </p>
              </div>
              <div>
                <p className="font-label-caps text-[8px] text-on-surface-variant uppercase font-semibold">Reliability</p>
                <p className="font-data-mono text-[10px] text-secondary font-semibold">{nodes[selectedNode].reliability}</p>
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <p className="font-label-caps text-[8px] text-on-surface-variant uppercase font-semibold tracking-wider">Key Associations</p>
              <ul className="space-y-1 font-body-sm text-[11px]">
                {nodes[selectedNode].associations.map((assoc, idx) => (
                  <li key={idx} className="flex justify-between border-b border-outline-variant/30 pb-1 text-on-surface-variant">
                    <span>{assoc.name}</span>
                    <span className="text-primary font-semibold">{assoc.match}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button
              onClick={() => handleGenerateDossier(selectedNode)}
              className="w-full bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container transition-colors py-2 text-[10px] font-bold uppercase tracking-wider border border-outline-variant rounded"
            >
              Generate Dossier
            </button>
          </div>
        </div>
      </aside>

      {/* Bottom Status Bar */}
      <footer className="fixed bottom-0 left-[260px] w-[calc(100%-260px)] h-8 bg-surface-container-low border-t border-outline-variant flex items-center justify-between px-gutter z-30 text-[9px] font-data-mono uppercase tracking-widest text-on-surface-variant">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Server: ALPHA-01 SECURE</span>
          </div>
          <div>
            <span>Nodes: 1,248</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>Encrypted AES-256</span>
          <span className="text-primary">{digitalTime}</span>
        </div>
      </footer>
    </div>
  );
}

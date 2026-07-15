import React, { useState } from 'react';

export default function GeospatialIntelligence() {
  const [crimeType, setCrimeType] = useState('All');
  const [district, setDistrict] = useState('Central 01');
  const [layer, setLayer] = useState('district');
  const [latLng, setLatLng] = useState({ lat: '41.8781° N', lng: '87.6298° W', alt: '597 FT' });
  const [hotspot, setHotspot] = useState({
    sector: 'Central-04B',
    id: '#9902',
    density: '14.2',
    densityChange: '▲ 12%',
    risk: '88',
    status: 'HIGH ALERT'
  });

  const handleApply = () => {
    // Generate new mock coordinates based on filters
    if (district === 'Central 01') {
      setLatLng({ lat: '40.7128° N', lng: '74.0060° W', alt: '124 FT' });
      setHotspot({
        sector: 'Central-01A',
        id: '#9901',
        density: '18.4',
        densityChange: '▲ 8%',
        risk: '92',
        status: 'HIGH ALERT'
      });
    } else if (district === 'North 02') {
      setLatLng({ lat: '42.3601° N', lng: '71.0589° W', alt: '43 FT' });
      setHotspot({
        sector: 'North-02D',
        id: '#4102',
        density: '9.8',
        densityChange: '▼ 5%',
        risk: '64',
        status: 'WARNING'
      });
    } else {
      setLatLng({ lat: '34.0522° N', lng: '118.2437° W', alt: '280 FT' });
      setHotspot({
        sector: 'West-04F',
        id: '#8829',
        density: '5.1',
        densityChange: '▼ 15%',
        risk: '32',
        status: 'SECURE'
      });
    }
    alert("Geospatial analysis applied for sector " + district);
  };

  return (
    <div className="flex-grow flex mt-16 relative h-[calc(100vh-64px)] overflow-hidden bg-surface-container-lowest">
      {/* Simulated Map Background */}
      <div
        className="absolute inset-0 w-full h-full grayscale opacity-40 mix-blend-overlay bg-cover bg-center"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKZv--O34H-DSqjAvOzDZNoSo_szNzL9tLL7EebCzIndT_4MaEEINLmmUi-4czPEqx_0eaUws3t2WuygQrY_atigk4qu__zaJ1CKici7HR0ENQasfLtdzSRz0V9kMVPmHPYIineL0u6qJP28f-jU_8CxitGn_49oQGK6t1f13spGKmD5KP26QRgkdb4KJQv2E3r_npB0IrauBtTCNfgo-8nT3f_j0fTu11oJhokM0RtQBrlD9xWgVKv-Dcg5E4nL2X8IX0zJIQDdQ')"
        }}
      ></div>

      {/* Heatmap Overlays (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6"></stop>
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0"></stop>
          </radialGradient>
          <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6"></stop>
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"></stop>
          </radialGradient>
          <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4edea3" stopOpacity="0.4"></stop>
            <stop offset="100%" stopColor="#4edea3" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
        <circle cx="350" cy="250" r="100" fill="url(#redGlow)" className="animate-pulse"></circle>
        <circle cx="850" cy="450" r="130" fill="url(#redGlow)" className="animate-pulse"></circle>
        <circle cx="580" cy="180" r="90" fill="url(#amberGlow)"></circle>
        <circle cx="280" cy="550" r="110" fill="url(#amberGlow)"></circle>
        <circle cx="1020" cy="180" r="120" fill="url(#greenGlow)"></circle>
      </svg>

      {/* Floating Filter Panel */}
      <div className="absolute top-6 left-6 z-30 glass-panel border border-outline-variant p-4 rounded-xl w-80 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-label-caps text-xs text-primary font-bold">Intelligence Filters</h3>
          <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer">tune</span>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block font-label-caps text-[9px] text-on-surface-variant uppercase mb-1">Crime Type</label>
            <select
              value={crimeType}
              onChange={(e) => setCrimeType(e.target.value)}
              className="w-full bg-background border border-outline-variant text-on-surface text-xs rounded p-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none"
            >
              <option value="All">All Incident Types</option>
              <option value="Violent">Violent Crimes</option>
              <option value="Property">Property Damage</option>
              <option value="Narcotics">Narcotics</option>
              <option value="Fraud">Financial Fraud</option>
            </select>
          </div>
          
          <div>
            <label className="block font-label-caps text-[9px] text-on-surface-variant uppercase mb-1">Date Range</label>
            <div className="flex items-center gap-2">
              <input className="bg-background border border-outline-variant text-on-surface text-xs rounded p-1.5 flex-1 focus:ring-primary outline-none" type="date" defaultValue="2026-01-01" />
              <span className="text-on-surface-variant text-xs">-</span>
              <input className="bg-background border border-outline-variant text-on-surface text-xs rounded p-1.5 flex-1 focus:ring-primary outline-none" type="date" defaultValue="2026-12-31" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-label-caps text-[9px] text-on-surface-variant uppercase mb-1">District</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-background border border-outline-variant text-on-surface text-xs rounded p-2 outline-none"
              >
                <option value="Central 01">Central 01</option>
                <option value="North 02">North 02</option>
                <option value="West 04">West 04</option>
              </select>
            </div>
            <div>
              <label className="block font-label-caps text-[9px] text-on-surface-variant uppercase mb-1">Station</label>
              <select className="w-full bg-background border border-outline-variant text-on-surface text-xs rounded p-2 outline-none">
                <option>Precinct 9</option>
                <option>Precinct 14</option>
                <option>Precinct 27</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={handleApply}
            className="w-full bg-primary/20 hover:bg-primary/30 border border-primary text-primary py-2 rounded font-bold text-xs transition-all tracking-wider"
          >
            Apply Analysis
          </button>
        </div>
      </div>

      {/* Map Layer Toggles */}
      <div className="absolute bottom-6 left-6 z-30 flex gap-2">
        <button
          onClick={() => setLayer('district')}
          className={`glass-panel border px-4 py-2 rounded-full font-label-caps text-[10px] flex items-center gap-2 transition-all ${
            layer === 'district' ? 'border-primary/50 text-primary bg-primary/10' : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-highest'
          }`}
        >
          <span className="material-symbols-outlined text-sm">layers</span> District
        </button>
        <button
          onClick={() => setLayer('city')}
          className={`glass-panel border px-4 py-2 rounded-full font-label-caps text-[10px] flex items-center gap-2 transition-all ${
            layer === 'city' ? 'border-primary/50 text-primary bg-primary/10' : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-highest'
          }`}
        >
          <span className="material-symbols-outlined text-sm">location_city</span> City
        </button>
        <button
          onClick={() => setLayer('station')}
          className={`glass-panel border px-4 py-2 rounded-full font-label-caps text-[10px] flex items-center gap-2 transition-all ${
            layer === 'station' ? 'border-primary/50 text-primary bg-primary/10' : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-highest'
          }`}
        >
          <span className="material-symbols-outlined text-sm">local_police</span> Station
        </button>
      </div>

      {/* Hotspot Details Side Panel */}
      <div className="absolute top-6 right-6 bottom-6 w-96 z-30 glass-panel border border-outline-variant rounded-xl flex flex-col overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-outline-variant bg-surface-container-highest/50">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-sm font-semibold">Hotspot Details</h2>
            <span className={`px-2 py-0.5 rounded font-label-caps text-[9px] ${
              hotspot.status === 'HIGH ALERT'
                ? 'bg-error text-on-error animate-pulse'
                : hotspot.status === 'WARNING'
                ? 'bg-tertiary-container text-on-tertiary-container'
                : 'bg-secondary-container text-on-secondary-container'
            }`}>
              {hotspot.status}
            </span>
          </div>
          <p className="font-data-mono text-[10px] text-on-surface-variant mt-1">Sector: {hotspot.sector} | ID: {hotspot.id}</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Metric Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container p-3 border border-outline-variant rounded-lg">
              <span className="font-label-caps text-[9px] text-on-surface-variant block mb-1">Crime Density</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-2xl font-bold text-error">{hotspot.density}</span>
                <span className="text-error font-data-mono text-[10px]">{hotspot.densityChange}</span>
              </div>
              <span className="text-[9px] text-on-surface-variant">Incidents per km²</span>
            </div>
            
            <div className="bg-surface-container p-3 border border-outline-variant rounded-lg">
              <span className="font-label-caps text-[9px] text-on-surface-variant block mb-1">Risk Score</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-2xl font-bold text-tertiary-container">{hotspot.risk}</span>
                <span className="text-on-surface-variant font-data-mono text-[10px]">/100</span>
              </div>
              <span className="text-[9px] text-on-surface-variant">Tactical index</span>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-label-caps text-[10px] text-on-surface">Incident Frequency (24h)</h4>
              <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer">info</span>
            </div>
            <div className="h-28 w-full bg-background/50 rounded flex items-end gap-1 p-2 border border-outline-variant">
              <div className="w-full bg-primary/20 h-1/2 rounded-t-sm"></div>
              <div className="w-full bg-primary/20 h-2/3 rounded-t-sm"></div>
              <div className="w-full bg-primary/40 h-3/4 rounded-t-sm"></div>
              <div className="w-full bg-error h-full rounded-t-sm shadow-[0_-4px_12px_rgba(239,68,68,0.3)]"></div>
              <div className="w-full bg-primary/60 h-4/5 rounded-t-sm"></div>
              <div className="w-full bg-primary/30 h-1/2 rounded-t-sm"></div>
              <div className="w-full bg-primary/20 h-1/3 rounded-t-sm"></div>
            </div>
            <div className="flex justify-between mt-1 text-[9px] text-on-surface-variant font-data-mono">
              <span>00:00</span>
              <span>08:00</span>
              <span>16:00</span>
              <span>23:59</span>
            </div>
          </div>

          {/* Detailed Metrics List */}
          <div className="space-y-3">
            <h4 className="font-label-caps text-[10px] text-on-surface">Primary Indicators</h4>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 bg-background/30 rounded border border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-error">person_pin</span>
                  <div>
                    <div className="text-xs font-bold">Assault Risk</div>
                    <div className="text-[9px] text-on-surface-variant">Elevated between 22:00-03:00</div>
                  </div>
                </div>
                <span className="font-data-mono text-[9px] text-error font-semibold">CRITICAL</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-background/30 rounded border border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container">minor_crash</span>
                  <div>
                    <div className="text-xs font-bold">Vehicle Theft</div>
                    <div className="text-[9px] text-on-surface-variant">Static trend line</div>
                  </div>
                </div>
                <span className="font-data-mono text-[9px] text-tertiary-container font-semibold">MEDIUM</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-background/30 rounded border border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">medical_services</span>
                  <div>
                    <div className="text-xs font-bold">Safe Corridors</div>
                    <div className="text-[9px] text-on-surface-variant">High patrol presence</div>
                  </div>
                </div>
                <span className="font-data-mono text-[9px] text-secondary font-semibold">SECURE</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-outline-variant bg-surface-container-highest/30">
          <button
            onClick={() => alert("Exporting geospatial telemetry dossier to PDF format.")}
            className="w-full py-2.5 bg-surface-container-highest border border-outline hover:bg-surface-container-highest/80 text-on-surface font-bold text-xs rounded transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">download</span>
            Export Sector Report
          </button>
        </div>
      </div>

      {/* Coordinate HUD Overlay */}
      <div className="absolute bottom-6 right-1/2 translate-x-1/2 z-30 bg-background/80 backdrop-blur-md px-6 py-2 rounded-full border border-outline-variant flex gap-8">
        <div className="flex items-center gap-2">
          <span className="font-label-caps text-[9px] text-on-surface-variant">LAT:</span>
          <span className="font-data-mono text-xs text-primary font-semibold">{latLng.lat}</span>
        </div>
        <div className="flex items-center gap-2 border-l border-outline-variant pl-8">
          <span className="font-label-caps text-[9px] text-on-surface-variant">LNG:</span>
          <span className="font-data-mono text-xs text-primary font-semibold">{latLng.lng}</span>
        </div>
        <div className="flex items-center gap-2 border-l border-outline-variant pl-8">
          <span className="font-label-caps text-[9px] text-on-surface-variant">ALT:</span>
          <span className="font-data-mono text-xs text-primary font-semibold">{latLng.alt}</span>
        </div>
      </div>

      {/* Legend Overlay */}
      <div className="absolute bottom-6 right-[420px] z-30 glass-panel p-3 rounded-lg border border-outline-variant space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-error shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
          <span className="text-[9px] font-label-caps">High Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></div>
          <span className="text-[9px] font-label-caps">Moderate Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.3)]"></div>
          <span className="text-[9px] font-label-caps">Secure Zone</span>
        </div>
      </div>
    </div>
  );
}

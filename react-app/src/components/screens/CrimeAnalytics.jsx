import React, { useState } from 'react';

export default function CrimeAnalytics() {
  const [activeTab, setActiveTab] = useState('pattern');

  const anomalies = [
    {
      id: 1,
      type: 'CRITICAL ANOMALY',
      title: 'Cyber fraud increase +42% in Urban areas',
      content: 'Sophisticated phishing clusters detected originating from District 4. Patterns suggest coordinated multi-vector attacks targeting digital banking credentials.',
      confidence: '94.2%',
      timestamp: '2026-07-15 14:22:01',
      color: 'error',
      icon: 'security_update_warning'
    },
    {
      id: 2,
      type: 'DEMOGRAPHIC SHIFT',
      title: 'Youth (20-35) involvement trend',
      content: 'Emerging trend shows a significant uptick in low-level digital contraband trafficking among young adults. Correlated with unemployment spikes.',
      confidence: '82%',
      timestamp: '2026-07-15 11:05:44',
      color: 'secondary',
      icon: 'group'
    }
  ];

  return (
    <div className="flex-grow overflow-y-auto max-h-[calc(100vh-64px)] mt-16 p-margin-page space-y-gutter bg-background">
      <div className="scanline"></div>
      
      {/* Page Header & Tabbed Interface */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-outline-variant/20 pb-4">
        <div>
          <h2 className="font-headline-sm text-lg font-semibold text-on-surface mb-1">Crime Analytics Dashboard</h2>
          <p className="font-data-mono text-xs text-primary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            SYSTEM STATUS: LIVE FEED ENCRYPTED [DISTRICT_B7]
          </p>
        </div>
        <div className="flex bg-surface-container-low border border-outline-variant rounded-lg p-1">
          <button
            onClick={() => setActiveTab('pattern')}
            className={`px-4 py-1.5 font-label-caps text-xs rounded transition-all ${
              activeTab === 'pattern' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Pattern Detection
          </button>
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-4 py-1.5 font-label-caps text-xs rounded transition-all ${
              activeTab === 'trends' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Trend Analysis
          </button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Left Side: Pattern Detection Cards */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
          {anomalies.map((anomaly) => (
            <div key={anomaly.id} className="glass-panel p-widget-padding rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[48px]">
                  {anomaly.icon}
                </span>
              </div>
              <div className="mb-3">
                <span className={`px-2 py-0.5 ${
                  anomaly.color === 'error' ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'
                } font-label-caps text-[9px] rounded`}>
                  {anomaly.type}
                </span>
              </div>
              <h3 className="font-headline-sm text-sm font-semibold text-on-surface mb-1.5">{anomaly.title}</h3>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">{anomaly.content}</p>
              <div className={`flex items-center justify-between font-data-mono text-[9px] ${
                anomaly.color === 'error' ? 'text-error' : 'text-secondary'
              }`}>
                <span>CONFIDENCE/CORR: {anomaly.confidence}</span>
                <span>{anomaly.timestamp}</span>
              </div>
            </div>
          ))}

          {/* Geo Overlay Map Mini widget */}
          <div className="glass-panel p-widget-padding rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">GEO-SPATIAL OVERLAY</span>
              <span className="material-symbols-outlined text-primary cursor-pointer text-[18px]">fullscreen</span>
            </div>
            <div className="w-full h-44 rounded bg-surface-container-lowest border border-outline-variant relative group overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-60 grayscale brightness-50 group-hover:grayscale-0 transition-all duration-500"
                alt="Digital map segment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfCEEJyEP1Ll8ml5PgR2472TYxtnx4ptVPgXXWXu5M5jCI5XjNurSmPvL1LUK3WRbVoW8a5R2zuoiak_3oW7MtWu9M7wefCQt2xEftMuq2UAHCAINX3PmgG89hjNuNdk3RCnpBa1U090Wb8WTmXoxjxsRJ8YkMLxBM4Rdtnm-wEkOAn6u-nLJ_mkiEA8gZWZ_u2JK2_9Yu8MvCo-0dEF9tpBoDuhvglCbeBEaeL5SW2lMdUlM2DGAno2nmJTXF7SFizR0FI3nNy-Y"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 border border-primary/40 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Multi-series Charts & Detailed Analysis */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-gutter">
          {/* Main Chart Area */}
          <div className="glass-panel p-widget-padding rounded-xl flex-grow min-h-[350px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-sm font-semibold text-on-surface">Crime Volume Comparison</h3>
              <div className="flex gap-4 font-label-caps text-[9px] uppercase tracking-wider">
                <span className="flex items-center gap-1 text-primary"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span> CURRENT YEAR</span>
                <span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-2.5 rounded-full bg-outline"></span> PREVIOUS YEAR</span>
              </div>
            </div>
            
            {/* Simulated Chart Grid */}
            <div className="flex-grow border-l border-b border-outline-variant relative flex items-end justify-between px-4 pb-4 min-h-[220px]">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                <div className="border-t border-on-surface w-full"></div>
                <div className="border-t border-on-surface w-full"></div>
                <div className="border-t border-on-surface w-full"></div>
                <div className="border-t border-on-surface w-full"></div>
              </div>
              
              {/* Visualizing Chart Data (Bars/Lines simulation) */}
              {[60, 75, 90, 55, 65, 85, 95, 70].map((currentVal, index) => {
                const prevVal = [45, 50, 70, 65, 55, 80, 85, 75][index];
                return (
                  <div key={index} className="w-1/12 h-[80%] flex items-end gap-1 group">
                    <div
                      className="w-full bg-primary/20 border-t-2 border-primary relative group-hover:bg-primary/45 transition-all"
                      style={{ height: `${currentVal}%` }}
                    ></div>
                    <div
                      className="w-full bg-outline-variant/20 border-t-2 border-outline-variant"
                      style={{ height: `${prevVal}%` }}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-3 px-4 font-data-mono text-[9px] text-on-surface-variant uppercase tracking-wider">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
          </div>

          {/* Secondary Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="glass-panel p-widget-padding rounded-xl space-y-3.5">
              <h4 className="font-label-caps text-[10px] text-on-surface-variant uppercase">DISTRICT DISPERSION</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-data-mono text-[10px]">D_NORTH_QUARTER</span>
                    <span className="text-primary font-semibold text-[10px]">78% Risk</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-data-mono text-[10px]">D_HARBOR_ZONE</span>
                    <span className="text-tertiary font-semibold text-[10px]">42% Risk</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-data-mono text-[10px]">D_CENTRAL_CORE</span>
                    <span className="text-secondary font-semibold text-[10px]">24% Risk</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: '24%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-widget-padding rounded-xl flex flex-col justify-center text-center">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">FORECASTED TREND</span>
              <div className="font-display-lg text-3xl font-bold text-primary my-2">+12.4%</div>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                Anticipated increase in digital fraud for next quarter based on historical Q4 variance model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

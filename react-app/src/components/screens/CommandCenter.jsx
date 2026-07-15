import React, { useState } from 'react';

export default function CommandCenter({ onNavigate }) {
  const [timeRange, setTimeRange] = useState('7D');
  const [alertFilter, setAlertFilter] = useState('ALL');

  const alerts = [
    {
      id: 1,
      type: 'CRITICAL',
      title: 'Critical: High Recidivism Alert',
      time: '12:44:02',
      content: "System detected Tier-1 offender 'Markov' entering restricted financial district geofence. Tactical intercept recommended.",
      color: 'error',
      icon: 'emergency'
    },
    {
      id: 2,
      type: 'ANOMALY',
      title: 'Anomaly: Digital Signal Clustering',
      time: '12:31:15',
      content: 'Spike in encrypted traffic originating from sector 7G. Correlation with previous cyber-fraud patterns identified (84% confidence).',
      color: 'tertiary',
      icon: 'hub'
    },
    {
      id: 3,
      type: 'REPORT',
      title: 'Report: Surveillance Node Active',
      time: '11:59:00',
      content: 'New satellite imagery processed for Central Plaza. 0 threats detected in recent sweep.',
      color: 'primary',
      icon: 'verified_user'
    },
    {
      id: 4,
      type: 'REPORT',
      title: 'Optimized: Patrol Route Update',
      time: '11:45:22',
      content: 'Crime rate in North Docks decreased by 12% following deployment of mobile command unit.',
      color: 'secondary',
      icon: 'trending_down'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto max-h-[calc(100vh-64px)] mt-16 p-margin-page space-y-gutter">
      {/* Top Row: Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-gutter">
        <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container to-background flex flex-col justify-between">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Total Crimes</span>
          <div className="flex flex-col mt-2">
            <span className="font-display-lg text-2xl text-on-surface font-bold">24,560</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">Global Cumulative</span>
          </div>
        </div>
        
        <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container to-background flex flex-col justify-between">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Active Cases</span>
          <div className="flex flex-col mt-2">
            <span className="font-display-lg text-2xl text-primary font-bold">4,230</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">In-Progress Ops</span>
          </div>
        </div>
        
        <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container to-background flex flex-col justify-between">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Repeat Offenders</span>
          <div className="flex flex-col mt-2">
            <span className="font-display-lg text-2xl text-tertiary font-bold">560</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">Recidivism Watch</span>
          </div>
        </div>

        <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container to-background flex flex-col justify-between border-error/30 border">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">High Risk Zones</span>
          <div className="flex flex-col mt-2">
            <span className="font-display-lg text-2xl text-error font-bold">18</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">Red Hotspots</span>
          </div>
        </div>

        <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container to-background flex flex-col justify-between">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Pending Cases</span>
          <div className="flex flex-col mt-2">
            <span className="font-display-lg text-2xl text-on-surface font-bold">1,204</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">Backlog queue</span>
          </div>
        </div>

        <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container to-background flex flex-col justify-between">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Rate Change</span>
          <div className="flex flex-col mt-2">
            <span className="font-display-lg text-2xl text-secondary font-bold">-3.2%</span>
            <span className="font-data-mono text-[10px] text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">trending_down</span>
              Last 30 Days
            </span>
          </div>
        </div>
      </div>

      {/* Middle Row: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Left: Crime Trend Area Chart */}
        <div className="lg:col-span-2 glass-panel p-gutter rounded-xl bg-gradient-to-b from-surface-container to-background relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-sm text-lg text-on-surface font-semibold">Temporal Crime Density</h2>
            <div className="flex space-x-2">
              {['24H', '7D', '1M'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 text-[10px] font-label-caps uppercase rounded transition-colors ${
                    timeRange === range ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div className="h-60 w-full flex items-end justify-between relative">
            <div className="w-full h-full relative mt-4">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#adc6ff', stopOpacity: 0.4 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#adc6ff', stopOpacity: 0 }}></stop>
                  </linearGradient>
                </defs>
                <path d="M0,180 C100,160 150,190 250,150 C350,110 400,170 500,140 C600,110 650,50 750,80 C850,110 900,100 1000,60 L1000,200 L0,200 Z" fill="url(#chartGradient)"></path>
                <path d="M0,180 C100,160 150,190 250,150 C350,110 400,170 500,140 C600,110 650,50 750,80 C850,110 900,100 1000,60" fill="none" stroke="#adc6ff" strokeWidth="3"></path>
              </svg>
              {/* Data Labels */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 font-data-mono text-[10px] text-on-surface-variant opacity-50 uppercase">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Distribution Donut */}
        <div className="glass-panel p-gutter rounded-xl bg-gradient-to-b from-surface-container to-background flex flex-col justify-between">
          <h2 className="font-headline-sm text-lg text-on-surface font-semibold mb-4">Crime Category Distribution</h2>
          <div className="flex-grow flex items-center justify-center relative my-4">
            <svg className="w-40 h-40 -rotate-90">
              <circle cx="80" cy="80" fill="transparent" r="55" stroke="#1d2027" strokeWidth="15"></circle>
              <circle cx="80" cy="80" fill="transparent" r="55" stroke="#adc6ff" strokeDasharray="345" strokeDashoffset="80" strokeWidth="15"></circle>
              <circle cx="80" cy="80" fill="transparent" r="55" stroke="#4edea3" strokeDasharray="345" strokeDashoffset="260" strokeWidth="15"></circle>
              <circle cx="80" cy="80" fill="transparent" r="55" stroke="#ffb786" strokeDasharray="345" strokeDashoffset="310" strokeWidth="15"></circle>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="font-display-lg text-2xl text-on-surface font-bold">100%</span>
              <span className="font-label-caps text-[9px] text-on-surface-variant uppercase">Verified</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex items-center text-xs text-on-surface-variant"><span className="w-2.5 h-2.5 rounded-full bg-primary mr-2"></span> Theft (35%)</div>
            <div className="flex items-center text-xs text-on-surface-variant"><span className="w-2.5 h-2.5 rounded-full bg-secondary mr-2"></span> Cyber (20%)</div>
            <div className="flex items-center text-xs text-on-surface-variant"><span className="w-2.5 h-2.5 rounded-full bg-tertiary mr-2"></span> Murder (10%)</div>
            <div className="flex items-center text-xs text-on-surface-variant"><span className="w-2.5 h-2.5 rounded-full bg-error mr-2"></span> Assault (15%)</div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Heatmap & Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* Left: Heatmap Snippet */}
        <div className="glass-panel rounded-xl bg-gradient-to-b from-surface-container to-background overflow-hidden flex flex-col min-h-[380px]">
          <div className="p-gutter border-b border-outline-variant flex justify-between items-center">
            <h2 className="font-headline-sm text-lg text-on-surface font-semibold">Geospatial Hotspots</h2>
            <span className="flex items-center text-secondary font-label-caps text-xs">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse mr-2"></span> LIVE TELEMETRY
            </span>
          </div>
          <div className="flex-grow relative overflow-hidden group min-h-[250px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfCEEJyEP1Ll8ml5PgR2472TYxtnx4ptVPgXXWXu5M5jCI5XjNurSmPvL1LUK3WRbVoW8a5R2zuoiak_3oW7MtWu9M7wefCQt2xEftMuq2UAHCAINX3PmgG89hjNuNdk3RCnpBa1U090Wb8WTmXoxjxsRJ8YkMLxBM4Rdtnm-wEkOAn6u-nLJ_mkiEA8gZWZ_u2JK2_9Yu8MvCo-0dEF9tpBoDuhvglCbeBEaeL5SW2lMdUlM2DGAno2nmJTXF7SFizR0FI3nNy-Y')"
              }}
            ></div>
            {/* UI Overlays on Map */}
            <div className="absolute top-4 right-4 space-y-2">
              <div className="glass-panel px-2.5 py-1 rounded bg-black/50 text-[10px] font-data-mono">LAT: 40.7128° N</div>
              <div className="glass-panel px-2.5 py-1 rounded bg-black/50 text-[10px] font-data-mono">LNG: 74.0060° W</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="flex -space-x-1.5">
                <div className="w-7 h-7 rounded-full border-2 border-background bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px] text-on-primary-container">local_police</span>
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px] text-on-surface">shield</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('geospatial')}
                className="bg-primary/20 backdrop-blur-md border border-primary/50 px-4 py-1.5 rounded-full text-[10px] font-label-caps uppercase text-primary hover:bg-primary/40 transition-all"
              >
                Expand View
              </button>
            </div>
          </div>
        </div>

        {/* Right: Emerging Patterns Feed */}
        <div className="glass-panel rounded-xl bg-gradient-to-b from-surface-container to-background flex flex-col h-[380px]">
          <div className="p-gutter border-b border-outline-variant flex justify-between items-center">
            <h2 className="font-headline-sm text-lg text-on-surface font-semibold">Emerging Intelligence</h2>
            <div className="flex gap-1.5">
              {['ALL', 'CRITICAL'].map((f) => (
                <button
                  key={f}
                  onClick={() => setAlertFilter(f)}
                  className={`px-2.5 py-0.5 text-[9px] font-label-caps rounded ${
                    alertFilter === f ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-gutter space-y-3">
            {alerts
              .filter((a) => alertFilter === 'ALL' || a.type === alertFilter)
              .map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded bg-surface-container-low border-l-4 ${
                    alert.color === 'error'
                      ? 'border-error'
                      : alert.color === 'tertiary'
                      ? 'border-tertiary'
                      : alert.color === 'primary'
                      ? 'border-primary'
                      : 'border-secondary'
                  } flex gap-3 hover:bg-surface-container-highest transition-colors cursor-pointer`}
                >
                  <span className={`material-symbols-outlined text-${alert.color} ${alert.icon === 'emergency' ? 'animate-pulse' : ''}`}>
                    {alert.icon}
                  </span>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <span className={`font-label-caps text-[10px] text-${alert.color} uppercase tracking-wider`}>{alert.title}</span>
                      <span className="font-data-mono text-[9px] opacity-60">{alert.time}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{alert.content}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="p-2.5 bg-surface-container-highest text-center rounded-b-xl border-t border-outline-variant">
            <button
              onClick={() => onNavigate('crime_analytics')}
              className="font-label-caps text-[10px] text-primary uppercase hover:underline"
            >
              View Intelligence Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

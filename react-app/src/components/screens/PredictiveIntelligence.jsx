import React, { useState, useEffect } from 'react';

export default function PredictiveIntelligence() {
  const [digitalClock, setDigitalClock] = useState('00:00:00 UTC');
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: 'Warning: Increase in Vehicle Theft',
      content: 'Detected in Zone 5. Escalation risk +14%.',
      severity: 'CRITICAL',
      time: '08:42:15 AM',
      color: 'error'
    },
    {
      id: 2,
      title: 'Pattern Match: Digital Fraud',
      content: 'Unusual crypto-offramp activity in Sector 9.',
      severity: 'MEDIUM',
      time: '07:15:02 AM',
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Scheduled Sweep Complete',
      content: 'No anomalies detected in Sector 4 North.',
      severity: 'ROUTINE',
      time: '04:30:00 AM',
      color: 'outline'
    }
  ]);

  // Digital clock update
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      setDigitalClock(`${h}:${m}:${s} UTC`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate 60 confidence interval bars
  const bars = Array.from({ length: 60 }).map((_, i) => {
    const height = 30 + Math.sin(i * 0.2) * 20 + Math.sin(i * 0.05) * 10 + 10;
    const spread = 12 + Math.cos(i * 0.1) * 8 + 5;
    return { height, spread };
  });

  return (
    <div className="flex-1 mt-16 p-gutter h-[calc(100vh-64px)] overflow-y-auto bg-background flex flex-col justify-between">
      <div className="space-y-gutter flex-1 pb-12">
        {/* Top Level Grid: Map & Alerts */}
        <div className="grid grid-cols-12 gap-gutter h-[480px]">
          {/* Predictive Hotspot Map */}
          <section className="col-span-12 lg:col-span-8 glass-panel rounded-xl overflow-hidden relative border border-outline-variant group min-h-[300px]">
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <div className="bg-surface-container/90 px-3 py-1 rounded border border-outline-variant flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-caps text-[9px] text-on-surface tracking-wider uppercase font-semibold">
                  Layer: Projected Hotspots (30D)
                </span>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-slate-900 overflow-hidden">
              <div
                className="w-full h-full grayscale opacity-45 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDc0JOiQNRHzo_Yj7P-9ZACcmqjumBn9mIU8KyH3JEHYk-6y2xN99vcYu8spRuxUXh5vjfacpdhWL03riQlUpS-CLF0fRaKej2lFzNMPsDVar_16_pNskOTEIWuj6JXs577YMSpqRT4h4XRLwhzabXIUb4nInQYPsPU_KjEeE0JyANmmR3s9UhT0HwVJeeyTMjbEO3TCKLc5mluSELNo7FFMU6mVEcjx0rAMGhJpkIAIwJXlTbi-0Ak1r_VccS_1bj3gGPazWIN77k')"
                }}
              ></div>
              <div className="scanline"></div>
              
              {/* Scale Overlay */}
              <div className="absolute bottom-4 left-4 flex gap-4">
                <div className="bg-background/80 p-2.5 rounded-lg border border-outline-variant">
                  <span className="font-label-caps text-[9px] block mb-1 text-on-surface-variant uppercase">DENSITY SCALE</span>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-amber-500 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Real-time Alert System Feed */}
          <section className="col-span-12 lg:col-span-4 flex flex-col gap-gutter min-h-[300px]">
            <div className="glass-panel rounded-xl flex-1 flex flex-col">
              <div className="p-widget-padding border-b border-outline-variant flex justify-between items-center bg-surface-container-highest/30">
                <h3 className="font-label-caps text-[10px] text-primary tracking-wider uppercase font-semibold">ALERT SYSTEM FEED</h3>
                <span className="material-symbols-outlined text-sm animate-pulse text-error">sensors</span>
              </div>
              <div className="flex-grow overflow-y-auto p-widget-padding space-y-3 max-h-[380px]">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 bg-surface-container-low border-l-4 rounded flex gap-3 items-start hover:bg-surface-container-highest transition-colors cursor-pointer ${
                      alert.color === 'error'
                        ? 'border-error bg-error-container/5'
                        : alert.color === 'secondary'
                        ? 'border-secondary bg-secondary-container/5'
                        : 'border-outline-variant bg-surface-container-highest/20'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-${alert.color} text-sm mt-0.5`}>
                      {alert.color === 'error' ? 'warning' : alert.color === 'secondary' ? 'info' : 'update'}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-on-background leading-tight">{alert.title}</p>
                      <p className="text-[11px] text-on-surface-variant mt-1 leading-normal">{alert.content}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className={`font-data-mono text-[9px] px-1.5 py-0.5 rounded ${
                          alert.color === 'error'
                            ? 'bg-error-container text-on-error-container font-semibold'
                            : alert.color === 'secondary'
                            ? 'bg-secondary-container/30 text-secondary'
                            : 'bg-outline-variant/30 text-on-surface-variant'
                        }`}>
                          {alert.severity}
                        </span>
                        <span className="font-data-mono text-[9px] text-on-surface-variant opacity-60">{alert.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Row: Risk Prediction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          {/* Prediction Card 1 */}
          <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container-low to-background border border-outline-variant hover:border-primary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">security</span>
              <div className="text-right">
                <span className="font-label-caps text-[9px] text-on-surface-variant block uppercase">Next Month</span>
                <span className="font-headline-sm text-sm font-bold text-primary">Cyber Crime</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">Risk Level</span>
                <span className="bg-error-container text-on-error-container text-[9px] font-bold px-2 py-0.5 rounded-full status-pulse">HIGH RISK</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant">Probability</span>
                  <span className="text-primary font-bold">82%</span>
                </div>
                <div className="w-full bg-outline-variant/30 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="font-label-caps text-[9px] text-on-surface-variant">RELIABILITY INDEX</span>
                <span className="font-data-mono text-[10px] text-secondary">0.94</span>
              </div>
            </div>
          </div>

          {/* Prediction Card 2 */}
          <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container-low to-background border border-outline-variant hover:border-secondary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-lg">payments</span>
              <div className="text-right">
                <span className="font-label-caps text-[9px] text-on-surface-variant block uppercase">14-Day Window</span>
                <span className="font-headline-sm text-sm font-bold text-secondary">Laundering</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">Risk Level</span>
                <span className="bg-amber-900/30 text-amber-500 text-[9px] font-bold px-2 py-0.5 rounded-full">MODERATE</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant">Probability</span>
                  <span className="text-secondary font-bold">48%</span>
                </div>
                <div className="w-full bg-outline-variant/30 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="font-label-caps text-[9px] text-on-surface-variant">RELIABILITY INDEX</span>
                <span className="font-data-mono text-[10px] text-secondary">0.81</span>
              </div>
            </div>
          </div>

          {/* Prediction Card 3 */}
          <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container-low to-background border border-outline-variant hover:border-tertiary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-2 rounded-lg">groups</span>
              <div className="text-right">
                <span className="font-label-caps text-[9px] text-on-surface-variant block uppercase">Next Month</span>
                <span className="font-headline-sm text-sm font-bold text-tertiary">Civil Unrest</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">Risk Level</span>
                <span className="bg-error-container text-on-error-container text-[9px] font-bold px-2 py-0.5 rounded-full status-pulse">ELEVATED</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant">Probability</span>
                  <span className="text-tertiary font-bold">67%</span>
                </div>
                <div className="w-full bg-outline-variant/30 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="font-label-caps text-[9px] text-on-surface-variant">RELIABILITY INDEX</span>
                <span className="font-data-mono text-[10px] text-secondary">0.89</span>
              </div>
            </div>
          </div>

          {/* Analysis Widget */}
          <div className="glass-panel p-widget-padding rounded-xl border border-outline-variant bg-surface-container-low flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-3xl text-outline-variant mb-1">add_chart</span>
            <h4 className="font-headline-sm text-on-surface text-xs font-semibold mb-1">Custom Analytics</h4>
            <p className="text-[11px] text-on-surface-variant px-3 leading-relaxed">
              Generate specialized forecasting for specific crime sectors.
            </p>
            <button
              onClick={() => alert("Configuring neural forecasting hyperparameters...")}
              className="mt-3 border border-outline-variant px-4 py-1.5 rounded font-label-caps text-[9px] hover:bg-outline-variant/20 transition-all font-semibold uppercase tracking-wider"
            >
              CONFIGURE ENGINE
            </button>
          </div>
        </div>

        {/* Forecast Confidence Interval Graphic */}
        <section className="glass-panel rounded-xl p-gutter overflow-hidden relative">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="font-headline-sm text-sm font-semibold text-on-surface">Aggregate Risk Projection</h3>
              <p className="text-xs text-on-surface-variant">Multi-source ensemble model prediction for the next 90 days.</p>
            </div>
            <div className="flex gap-4 font-label-caps text-[9px] tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-0.5 bg-primary rounded"></span>
                <span className="text-on-surface-variant">PROJECTED TREND</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-primary/10 border border-primary/20 rounded-sm"></span>
                <span className="text-on-surface-variant">CONFIDENCE INTERVAL (95%)</span>
              </div>
            </div>
          </div>
          
          <div className="h-44 w-full flex items-end gap-0.5 px-1 pb-1">
            {bars.map((bar, idx) => (
              <div key={idx} className="flex-grow h-full relative group">
                <div
                  className="absolute w-full bg-primary/10 border-x border-primary/15 transition-all group-hover:bg-primary/25"
                  style={{
                    height: `${bar.spread * 1.5}px`,
                    bottom: `${bar.height - (bar.spread / 2)}px`
                  }}
                ></div>
                <div
                  className="absolute w-full bg-primary h-[3px] rounded-full group-hover:bg-white transition-colors"
                  style={{
                    bottom: `${bar.height}px`
                  }}
                ></div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between px-2 pt-3 border-t border-outline-variant/20 font-data-mono text-[9px] text-on-surface-variant uppercase tracking-wider">
            <span>CURRENT (T-0)</span>
            <span>T+15d</span>
            <span>T+30d</span>
            <span>T+45d</span>
            <span>T+60d</span>
            <span>T+75d</span>
            <span>T+90d</span>
          </div>
        </section>
      </div>

      {/* System HUD Footer */}
      <footer className="h-10 px-gutter border-t border-outline-variant bg-surface-container-low flex justify-between items-center text-[10px] font-data-mono uppercase tracking-widest text-on-surface-variant mt-6">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>Engine Stability: Nominal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Processing: 41.2 TFLOPS</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>Latency: 14ms</span>
          <span className="text-primary">{digitalClock}</span>
        </div>
      </footer>
    </div>
  );
}

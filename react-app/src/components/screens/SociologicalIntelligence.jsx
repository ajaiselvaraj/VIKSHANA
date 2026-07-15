import React, { useState, useEffect } from 'react';

export default function SociologicalIntelligence() {
  const [confidence, setConfidence] = useState(98.4);

  // Fluctuate confidence slightly to simulate live feed sync
  useEffect(() => {
    const interval = setInterval(() => {
      setConfidence(prev => {
        const delta = (Math.random() * 0.2 - 0.1);
        return parseFloat((prev + delta).toFixed(1));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow overflow-y-auto max-h-[calc(100vh-64px)] mt-16 p-margin-page bg-background">
      <div className="max-w-[1600px] mx-auto space-y-6 pb-16">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 gap-4 border-b border-outline-variant/20 pb-4">
          <div>
            <h2 className="font-headline-sm text-lg font-semibold text-on-surface">Sociological Correlation Dashboard</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Advanced analytics mapping criminological outcomes against socio-economic structural variables.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => alert("Sociological dataset exported to CSV.")}
              className="px-3.5 py-1.5 border border-outline-variant text-[10px] font-label-caps hover:bg-surface-container-highest transition-colors rounded uppercase font-semibold"
            >
              Export Data
            </button>
            <button
              onClick={() => alert("Re-indexing city census microdata...")}
              className="px-3.5 py-1.5 bg-primary-container text-on-primary-container text-[10px] font-label-caps hover:opacity-90 transition-opacity rounded uppercase font-bold"
            >
              Real-Time Sync
            </button>
          </div>
        </div>

        {/* Bento Grid Section */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Demographics: Age Distribution (Col 1-4) */}
          <div className="col-span-12 md:col-span-4 glass-panel p-widget-padding rounded-xl flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="font-label-caps text-[10px] text-primary border-b border-outline-variant/30 pb-2 mb-4 uppercase tracking-wider font-semibold">AGE DISTRIBUTION ANALYTICS</h3>
              <div className="space-y-4 pt-2 text-xs">
                {/* 18-25 */}
                <div className="space-y-1">
                  <div className="flex justify-between font-data-mono text-[10px]">
                    <span>Age 18-25</span>
                    <span className="text-secondary font-semibold">42.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: '42.8%' }}></div>
                  </div>
                </div>
                {/* 26-40 */}
                <div className="space-y-1">
                  <div className="flex justify-between font-data-mono text-[10px]">
                    <span>Age 26-40</span>
                    <span className="text-primary font-semibold">31.2%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '31.2%' }}></div>
                  </div>
                </div>
                {/* 40+ */}
                <div className="space-y-1">
                  <div className="flex justify-between font-data-mono text-[10px]">
                    <span>Age 40+</span>
                    <span className="text-on-surface-variant font-semibold">26.0%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full bg-outline-variant" style={{ width: '26.0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex justify-between items-center text-[9px] font-data-mono text-on-surface-variant uppercase">
              <span>N=142,503 Records</span>
              <span className="material-symbols-outlined text-sm text-primary">info</span>
            </div>
          </div>

          {/* Gender Analysis (Col 5-8) */}
          <div className="col-span-12 md:col-span-4 glass-panel p-widget-padding rounded-xl min-h-[300px] flex flex-col justify-between">
            <h3 className="font-label-caps text-[10px] text-primary border-b border-outline-variant/30 pb-2 uppercase tracking-wider font-semibold">GENDER REPRESENTATION</h3>
            <div className="flex-grow grid grid-cols-2 gap-4 my-2">
              <div className="flex flex-col items-center justify-center border-r border-outline-variant/30 p-2">
                <p className="font-label-caps text-[9px] text-on-surface-variant mb-2 uppercase">Offenders</p>
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="56" cy="56" fill="transparent" r="44" stroke="#32353c" strokeWidth="10"></circle>
                    <circle cx="56" cy="56" fill="transparent" r="44" stroke="#adc6ff" strokeDasharray="276" strokeDashoffset="52" strokeWidth="10"></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="font-data-mono text-base font-bold text-primary">81%</span>
                    <span className="text-[8px] text-on-surface-variant uppercase font-semibold">Male</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center p-2">
                <p className="font-label-caps text-[9px] text-on-surface-variant mb-2 uppercase">Victims</p>
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="56" cy="56" fill="transparent" r="44" stroke="#32353c" strokeWidth="10"></circle>
                    <circle cx="56" cy="56" fill="transparent" r="44" stroke="#4edea3" strokeDasharray="276" strokeDashoffset="132" strokeWidth="10"></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="font-data-mono text-base font-bold text-secondary">52%</span>
                    <span className="text-[8px] text-on-surface-variant uppercase font-semibold">Female</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Socioeconomic Factors (Col 9-12) */}
          <div className="col-span-12 md:col-span-4 space-y-3.5">
            <div className="glass-panel p-3.5 rounded-xl flex items-center gap-4 hover:bg-surface-container-highest transition-all cursor-pointer">
              <div className="p-2.5 rounded bg-surface-container-lowest text-primary">
                <span className="material-symbols-outlined text-xl">domain</span>
              </div>
              <div>
                <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">URBAN DENSITY</p>
                <p className="font-bold text-on-surface text-sm">High-Risk Density</p>
                <p className="text-[9px] text-secondary font-data-mono mt-0.5">Correlation: 0.84</p>
              </div>
            </div>
            
            <div className="glass-panel p-3.5 rounded-xl flex items-center gap-4 hover:bg-surface-container-highest transition-all cursor-pointer">
              <div className="p-2.5 rounded bg-surface-container-lowest text-tertiary">
                <span className="material-symbols-outlined text-xl">groups</span>
              </div>
              <div>
                <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">MIGRATION PATTERNS</p>
                <p className="font-bold text-on-surface text-sm">Transient Sector</p>
                <p className="text-[9px] text-tertiary font-data-mono mt-0.5 font-semibold">Outflux: +12.4%</p>
              </div>
            </div>

            <div className="glass-panel p-3.5 rounded-xl flex items-center gap-4 hover:bg-surface-container-highest transition-all cursor-pointer">
              <div className="p-2.5 rounded bg-surface-container-lowest text-error">
                <span className="material-symbols-outlined text-xl">work_off</span>
              </div>
              <div>
                <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">EMPLOYMENT STATUS</p>
                <p className="font-bold text-on-surface text-sm">Volatile Index</p>
                <p className="text-[9px] text-error font-data-mono mt-0.5 font-semibold">Jobless: 14.2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Heatmap Comparison & Policy Recommendation */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Heatmap Comparison (Col 1-8) */}
          <div className="col-span-12 lg:col-span-8 glass-panel p-widget-padding rounded-xl relative overflow-hidden h-[400px]">
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
              <h3 className="font-label-caps text-[9px] text-on-surface bg-background/70 backdrop-blur px-3 py-1.5 rounded-full inline-block border border-outline-variant/40 font-semibold uppercase tracking-wider">
                COMPARATIVE SPATIAL ANALYSIS: CRIME VS. POVERTY
              </h3>
              <div className="flex gap-1.5">
                <span className="bg-primary/20 text-primary border border-primary/40 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Metric: Property Crime</span>
                <span className="bg-tertiary/20 text-tertiary border border-tertiary/40 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Overlay: Gini Index</span>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="absolute inset-0 w-full h-full bg-surface-container-lowest">
              <div
                className="w-full h-full opacity-40 mix-blend-screen bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPWJXjEJBLkVgYykADAC2ms86JbnkQpqTorQRKFx4AqzN8RLnzN-ZX97qs7k6fmguA5dMM6u4YnGbsUxJBem-gt0FDIWB5YbtT9PGquzd31oldJI19KuGUPCrvitQ962MpZ7l9WLXLCvr1gkXfY6RTrRNdyfLnHw_uKLVnD300J_gbsb-VC3413Ss0Xq-s_IQQ5TYEjKSDvUHY-jByls3RwHjuEqdNmokJASRQ5DNSZXDjbxFqijXD1LGlJwMpZvU3daWKxfqeY80')"
                }}
              ></div>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur border border-outline-variant p-3 rounded-lg w-44 z-20">
              <p className="font-label-caps text-[9px] mb-2 uppercase font-semibold text-on-surface">HOTSPOT INTENSITY</p>
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-900 via-purple-700 to-red-600 rounded-full mb-1.5"></div>
              <div className="flex justify-between text-[8px] font-data-mono text-on-surface-variant font-semibold">
                <span>LOW</span>
                <span>CRITICAL</span>
              </div>
            </div>
          </div>

          {/* Policy Recommendations (Col 9-12) */}
          <div className="col-span-12 lg:col-span-4 glass-panel p-widget-padding rounded-xl flex flex-col h-[400px]">
            <h3 className="font-label-caps text-[10px] text-primary border-b border-outline-variant/30 pb-2 mb-4 uppercase tracking-wider font-semibold">POLICY INTELLIGENCE</h3>
            
            <div className="flex-grow space-y-3 overflow-y-auto custom-scrollbar pr-1 max-h-[280px]">
              <div className="p-3 bg-surface-container-lowest border-l-2 border-primary rounded-r">
                <p className="font-bold text-xs mb-0.5 text-on-surface">Education-First Initiative</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Data suggests 18.3% crime reduction when secondary school completion rises by 5% in Zone Alpha.
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-primary">trending_down</span>
                  <span className="font-data-mono text-[9px] text-primary font-semibold">Est. -18.3% Rate</span>
                </div>
              </div>
              
              <div className="p-3 bg-surface-container-lowest border-l-2 border-secondary rounded-r">
                <p className="font-bold text-xs mb-0.5 text-on-surface">Vocational Re-entry</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Targeting 26-40 age demographic with trade certification reduces recidivism by up to 34%.
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-secondary">verified_user</span>
                  <span className="font-data-mono text-[9px] text-secondary font-semibold">Recidivism impact: High</span>
                </div>
              </div>

              <div className="p-3 bg-surface-container-lowest border-l-2 border-tertiary rounded-r">
                <p className="font-bold text-xs mb-0.5 text-on-surface">Urban Lighting Program</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Correlated spatial data shows high night-time incidents in Low Density Lighting districts.
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-tertiary">light_mode</span>
                  <span className="font-data-mono text-[9px] text-tertiary font-semibold">Priority: Immediate</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => alert("Transmitting full sociological correlation policy analysis report...")}
              className="mt-4 w-full py-2 bg-surface-container-highest border border-outline-variant hover:bg-outline-variant text-on-surface font-label-caps text-[10px] rounded transition-colors uppercase font-bold tracking-wider"
            >
              Generate Policy Report
            </button>
          </div>
        </div>

        {/* Bottom Data Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-panel p-widget-padding rounded-xl flex justify-between items-center border-t-2 border-primary">
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">EDUCATION CORRELATION</p>
              <p className="font-display-lg text-2xl text-on-surface font-bold mt-1">-0.68</p>
            </div>
            <span className="material-symbols-outlined text-primary text-3xl opacity-20">school</span>
          </div>
          
          <div className="glass-panel p-widget-padding rounded-xl flex justify-between items-center border-t-2 border-secondary">
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">POVERTY GINI COEFFICIENT</p>
              <p className="font-display-lg text-2xl text-on-surface font-bold mt-1">0.42</p>
            </div>
            <span className="material-symbols-outlined text-secondary text-3xl opacity-20">payments</span>
          </div>

          <div className="glass-panel p-widget-padding rounded-xl flex justify-between items-center border-t-2 border-tertiary">
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">SYSTEM CONFIDENCE</p>
              <p className="font-display-lg text-2xl text-on-surface font-bold mt-1">{confidence}%</p>
            </div>
            <span className="material-symbols-outlined text-tertiary text-3xl opacity-20">verified</span>
          </div>
        </div>

      </div>
    </div>
  );
}

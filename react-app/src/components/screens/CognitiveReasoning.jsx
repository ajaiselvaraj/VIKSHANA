import React, { useState } from 'react';

export default function CognitiveReasoning() {
  const [showLogicModal, setShowLogicModal] = useState(false);
  const [showWeights, setShowWeights] = useState(true);
  const [filterNoise, setFilterNoise] = useState(false);

  const handleValidate = () => {
    alert("Conclusion validated and certified in ledger: Aegis-Neural-v4.2 Hash [0x992E...F4]");
  };

  return (
    <div className="flex-grow overflow-y-auto max-h-[calc(100vh-64px)] mt-16 p-margin-page bg-background relative">
      
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4 border-b border-outline-variant/20 pb-4">
        <div>
          <h2 className="font-headline-sm text-lg font-semibold text-on-surface mb-1">XAI Conclusion Analysis: Case #PX-9921</h2>
          <div className="flex flex-wrap gap-4 items-center mt-1">
            <div className="flex items-center gap-1.5 bg-error-container/20 border border-error/30 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
              <span className="font-label-caps text-[9px] text-error font-bold uppercase tracking-wider">High Risk Conclusion</span>
            </div>
            <span className="font-data-mono text-[10px] text-on-surface-variant uppercase">Model: Aegis-Neural-v4.2</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant uppercase">Confidence: 94.2%</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => alert("XAI Dossier exported to local workspace.")}
            className="bg-surface-container border border-outline-variant px-3 py-1.5 flex items-center gap-1.5 font-label-caps text-[10px] uppercase font-bold hover:bg-surface-container-highest transition-all rounded"
          >
            <span className="material-symbols-outlined text-base">download</span> Export Report
          </button>
          <button
            onClick={handleValidate}
            className="bg-primary text-on-primary px-3.5 py-1.5 flex items-center gap-1.5 font-label-caps text-[10px] uppercase font-bold hover:opacity-90 transition-all rounded shadow-lg shadow-primary/10"
          >
            <span className="material-symbols-outlined text-base">verified</span> Validate Output
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        
        {/* Left Column: AI Evidence Trail */}
        <div className="col-span-12 lg:col-span-4">
          <div className="glass-card p-widget-padding rounded-xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-label-caps text-[10px] text-primary uppercase font-bold tracking-wider">AI Evidence Trail</h3>
              <span className="material-symbols-outlined text-on-surface-variant text-base cursor-pointer">info</span>
            </div>
            
            <div className="relative pl-10 space-y-6">
              {/* Vertical timeline line */}
              <div className="absolute left-[18px] top-2 bottom-6 w-[2px] bg-outline-variant/30" />
              
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-surface-container-highest border border-primary/50 flex items-center justify-center z-10 transition-transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-primary text-base">location_on</span>
                </div>
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded-lg">
                  <p className="font-label-caps text-[9px] text-on-surface-variant mb-1 uppercase font-semibold">Step 1: Spatio-Temporal Analysis</p>
                  <p className="text-xs text-on-surface leading-relaxed">
                    Target zone identified as high-density commercial corridor. Overlaps with 14 prior 'Force Entry' incidents in last 30 days.
                  </p>
                  <button
                    onClick={() => setShowLogicModal(true)}
                    className="mt-2 text-primary font-data-mono text-[10px] hover:underline flex items-center gap-1 font-semibold"
                  >
                    Why this location? <span className="material-symbols-outlined text-xs">help_outline</span>
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-surface-container-highest border border-primary/50 flex items-center justify-center z-10 transition-transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-primary text-base">schedule</span>
                </div>
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded-lg">
                  <p className="font-label-caps text-[9px] text-on-surface-variant mb-1 uppercase font-semibold">Step 2: Temporal Correlation</p>
                  <p className="text-xs text-on-surface leading-relaxed">
                    Current lunar cycle and late-night shift change correlate with 82% of regional commercial burglaries.
                  </p>
                  <button
                    onClick={() => alert("Displaying comparative historical metrics...")}
                    className="mt-2 text-primary font-data-mono text-[10px] hover:underline flex items-center gap-1 font-semibold"
                  >
                    View historical data <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-surface-container-highest border border-error/50 flex items-center justify-center z-10 transition-transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-error text-base">psychology</span>
                </div>
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded-lg">
                  <p className="font-label-caps text-[9px] text-on-surface-variant mb-1 uppercase font-semibold">Step 3: Offender Pattern Matching</p>
                  <p className="text-xs text-on-surface leading-relaxed">
                    Digital breadcrumbs from Darknet chatter match the specific MO seen in the target zone's recent crime spree.
                  </p>
                  <div className="mt-3 p-2 bg-error/10 border-l-2 border-error font-data-mono text-[9px] text-error font-bold rounded-r">
                    94% MO Similarity Match Detected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Explainability Graph */}
        <div className="col-span-12 lg:col-span-8 space-y-gutter flex flex-col">
          
          {/* Graph Section */}
          <div className="glass-card p-widget-padding flex flex-col justify-between flex-grow min-h-[300px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-label-caps text-[10px] text-primary uppercase font-bold tracking-wider">Explainability Causality Graph</h3>
              <div className="flex gap-4">
                <label className="flex items-center gap-1.5 font-data-mono text-[10px] text-on-surface-variant cursor-pointer select-none">
                  <input
                    checked={showWeights}
                    onChange={() => setShowWeights(!showWeights)}
                    className="rounded bg-background border-outline-variant text-primary focus:ring-0 cursor-pointer"
                    type="checkbox"
                  />
                  Show Weights
                </label>
                <label className="flex items-center gap-1.5 font-data-mono text-[10px] text-on-surface-variant cursor-pointer select-none">
                  <input
                    checked={filterNoise}
                    onChange={() => setFilterNoise(!filterNoise)}
                    className="rounded bg-background border-outline-variant text-primary focus:ring-0 cursor-pointer"
                    type="checkbox"
                  />
                  Filter Noise
                </label>
              </div>
            </div>
            
            <div className="flex-grow relative flex items-center justify-center bg-background/40 rounded-lg overflow-hidden min-h-[220px] p-4">
              {/* Simulated Graph Canvas */}
              <div className="w-full flex flex-col md:flex-row items-center justify-around gap-6 relative z-10">
                {/* Origin Cluster */}
                <div className="flex flex-col gap-4">
                  <div className="p-3 glass-card rounded border-l-4 border-tertiary w-36 hover:-translate-y-0.5 transition-transform cursor-pointer">
                    <p className="font-label-caps text-[8px] text-tertiary mb-1 uppercase font-semibold">EXTERNAL FACTOR</p>
                    <p className="text-xs font-semibold text-on-surface">Economic Stress</p>
                  </div>
                  <div className="p-3 glass-card rounded border-l-4 border-primary w-36 hover:-translate-y-0.5 transition-transform cursor-pointer">
                    <p className="font-label-caps text-[8px] text-primary mb-1 uppercase font-semibold">LOCAL DATA</p>
                    <p className="text-xs font-semibold text-on-surface">Police Presence</p>
                  </div>
                </div>
                
                {/* Arrow mockup for md/lg view */}
                <span className="material-symbols-outlined text-outline-variant hidden md:block">double_arrow</span>

                {/* Mid Cluster */}
                <div className="flex flex-col gap-4">
                  <div className="p-3 glass-card rounded border-l-4 border-tertiary-container w-44 hover:-translate-y-0.5 transition-transform cursor-pointer">
                    <p className="font-label-caps text-[8px] text-tertiary-container mb-1 uppercase font-semibold">INTERMEDIATE RESULT</p>
                    <p className="text-xs font-semibold text-on-surface">Unemployment Delta</p>
                    <div className="mt-2 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary-container w-[70%]"></div>
                    </div>
                  </div>
                  <div className="p-3 glass-card rounded border-l-4 border-secondary w-44 hover:-translate-y-0.5 transition-transform cursor-pointer">
                    <p className="font-label-caps text-[8px] text-secondary mb-1 uppercase font-semibold">BEHAVIORAL TREND</p>
                    <p className="text-xs font-semibold text-on-surface truncate">Social Media Sentiment</p>
                  </div>
                </div>

                <span className="material-symbols-outlined text-outline-variant hidden md:block">double_arrow</span>

                {/* Outcome Cluster */}
                <div>
                  <div className="p-5 bg-error-container/30 border border-error/50 rounded-xl w-48 text-center shadow-lg">
                    <p className="font-label-caps text-[9px] text-error mb-1.5 uppercase font-bold tracking-wider">FINAL CONCLUSION</p>
                    <p className="text-xs font-bold text-on-surface">Higher Theft Probability</p>
                    <p className="mt-1.5 font-data-mono text-[10px] text-on-surface-variant font-semibold">Weight: 0.892</p>
                  </div>
                </div>
              </div>

              {/* Grid Background */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#8c909f 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}
              ></div>
            </div>
          </div>

          {/* Transparency & Importance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Feature Importance (SHAP) */}
            <div className="glass-card p-widget-padding rounded-xl space-y-4">
              <h3 className="font-label-caps text-[10px] text-primary uppercase font-bold tracking-wider">Feature Importance (SHAP)</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between font-data-mono text-[10px] text-on-surface">
                    <span>Location History</span>
                    <span className="text-secondary font-semibold">42%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between font-data-mono text-[10px] text-on-surface">
                    <span>Incident Frequency</span>
                    <span className="text-secondary font-semibold">28%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: '28%' }}></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between font-data-mono text-[10px] text-on-surface">
                    <span>Economic Indicators</span>
                    <span className="text-tertiary font-semibold">15%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary" style={{ width: '15%' }}></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between font-data-mono text-[10px] text-on-surface">
                    <span>Other Factors</span>
                    <span className="text-on-surface-variant">15%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-outline" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Transparency Score */}
            <div className="glass-card p-widget-padding rounded-xl flex flex-col justify-center items-center text-center">
              <h3 className="font-label-caps text-[10px] text-primary uppercase font-bold tracking-wider mb-4 self-start">Model Transparency Score</h3>
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle className="text-surface-container-highest" cx="56" cy="56" fill="transparent" r="50" stroke="currentColor" strokeWidth="4"></circle>
                  <circle className="text-primary" cx="56" cy="56" fill="transparent" r="50" stroke="currentColor" strokeDasharray="314" strokeDashoffset="31.4" strokeWidth="6"></circle>
                </svg>
                <span className="absolute font-display-lg text-2xl font-bold text-on-surface">90</span>
              </div>
              <p className="mt-3 font-headline-sm text-xs font-semibold text-on-surface">High Interpretability</p>
              <p className="text-[10px] text-on-surface-variant mt-0.5 leading-normal">
                Minimal black-box processes detected. Safe execution.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Popover Logic Modal */}
      {showLogicModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setShowLogicModal(false)}
        >
          <div
            className="glass-card w-[440px] p-6 shadow-2xl relative rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors text-lg"
              onClick={() => setShowLogicModal(false)}
            >
              close
            </button>
            <div className="flex items-center gap-3 mb-4 border-b border-outline-variant/30 pb-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">psychology_alt</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm font-semibold text-on-surface">Spatio-Temporal Logic</h4>
                <p className="font-label-caps text-[9px] text-primary uppercase font-semibold">Model Reasoning Module</p>
              </div>
            </div>
            <div className="space-y-3.5 text-xs text-on-surface-variant leading-relaxed">
              <p>The model identified this specific location by cross-referencing <span className="text-on-surface font-semibold">Real-Time Transit Loads</span> with <span class="text-on-surface font-semibold">Street Lighting Deficits</span>.</p>
              
              <div className="p-3 bg-surface-container-highest rounded border border-outline-variant font-data-mono text-[10px]">
                <p className="text-primary mb-0.5 font-bold">DATA_STREAM_024: STREET_LIGHTING</p>
                <p>STATUS: UNREPAIRED_FAULT</p>
                <p>LAST_MAINTENANCE: 45_DAYS_AGO</p>
              </div>
              
              <p>Lack of visibility combined with the known withdrawal of private security patrols between 02:00 and 04:00 AM increases the "Opportunity Score" to critical levels.</p>
            </div>
            <div className="mt-6 pt-3 border-t border-outline-variant/30 flex justify-end">
              <button
                className="text-primary font-label-caps text-[10px] uppercase font-bold flex items-center gap-1.5 hover:underline"
                onClick={() => setShowLogicModal(false)}
              >
                Understood <span className="material-symbols-outlined text-sm">check_circle</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';

export default function TacticalUnit() {
  const [suspects, setSuspects] = useState([
    { name: 'Elias Vance', role: 'Primary Suspect', priority: 'High Priority', status: 'ACTIVE', photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCUmDJ31U_V6OgRrhB2wsKTFiZYEXmiLDZSp4CvGWimWEaQ2KIQ7AIpToXOXSuzaNcKRkGrzxbuy2rCjBQHfHe2oGFjhwiRPFeIOdeVmKrCoxoGHGGW3egFL1ViKs-7aMxcWRdBM5YcynzQ2kBgR2-HL99zGyJGCjrT2hv8VudXU8ROtuCf_WyWJfowm8M3bu6bCOEtvte7gVho1HQ1CClk04eiWi7A44EN33tH4JwWn_ImctkhDxCl8ujha1pbbQuQy1dR7FW0oI' }
  ]);

  const [evidenceCount, setEvidenceCount] = useState(12);

  const handleVerifyEvidence = () => {
    alert("Running cryptographically secure checksum verification on all 12 seised evidence drives...");
  };

  const handleGenerateReport = () => {
    alert("Operation Nightfall - Investigation dossier compiled. Report transmitted to Central Authority.");
  };

  return (
    <div className="flex-grow overflow-y-auto max-h-[calc(100vh-64px)] mt-16 p-margin-page bg-background">
      <div className="grid grid-cols-12 gap-gutter max-w-7xl mx-auto pb-16">
        
        {/* Page Header */}
        <div className="col-span-12 flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 gap-4 border-b border-outline-variant/20 pb-4">
          <div>
            <div className="flex items-center gap-1.5 text-primary font-label-caps text-xs mb-1 font-semibold uppercase">
              <span className="material-symbols-outlined text-[14px]">folder_special</span>
              Active Investigation
            </div>
            <h2 className="font-display-lg text-2xl font-bold text-on-surface">CR-2026-1024: Operation Nightfall</h2>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleVerifyEvidence}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant text-on-surface-variant font-label-caps text-[10px] rounded hover:bg-surface-container-highest transition-all uppercase tracking-wider font-semibold"
            >
              <span className="material-symbols-outlined text-sm">verified_user</span>
              Verify Evidence
            </button>
            <button
              onClick={handleGenerateReport}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-primary text-on-primary font-label-caps text-[10px] rounded hover:opacity-90 transition-all uppercase tracking-wider font-bold shadow-lg shadow-primary/10"
            >
              <span className="material-symbols-outlined text-sm">description</span>
              Generate Case Report
            </button>
          </div>
        </div>

        {/* Case Summary Generator UI */}
        <section className="col-span-12 lg:col-span-8 border border-outline-variant rounded-xl p-widget-padding flex flex-col bg-surface-container-low/40">
          <div className="flex justify-between items-center mb-6">
            <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase font-semibold">Intelligence Summary</span>
            <span className="px-2 py-0.5 bg-secondary-container/20 text-secondary text-[9px] font-bold rounded uppercase">AI Generated</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="glass-panel p-4 rounded-lg">
              <p className="font-label-caps text-[9px] text-primary mb-1 uppercase font-semibold">Case Identifier</p>
              <p className="font-data-mono text-base font-semibold text-on-surface">CR-2026-1024</p>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <p className="font-label-caps text-[9px] text-primary mb-1 uppercase font-semibold">Active Suspects</p>
              <p className="font-data-mono text-base font-semibold text-on-surface">
                05 <span className="text-on-surface-variant text-xs font-normal">Entities</span>
              </p>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <p className="font-label-caps text-[9px] text-primary mb-1 uppercase font-semibold">Total Evidence</p>
              <p className="font-data-mono text-base font-semibold text-on-surface">
                {evidenceCount} <span className="text-on-surface-variant text-xs font-normal">Cataloged</span>
              </p>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <h3 className="font-headline-sm text-sm font-semibold text-on-surface">Automated Narrative</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Operation Nightfall concerns a sophisticated series of coordinated financial thefts targeting high-net-worth individuals via localized network exploitation. Initial telemetry suggests a centralized hub operating within the metro-east district. Suspect #1 (Elias Vance) remains the primary point of interest with strong links to cross-border capital movement.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-outline-variant/30">
              {suspects.map((suspect, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest border border-outline-variant overflow-hidden">
                    <img className="w-full h-full object-cover" alt={suspect.name} src={suspect.photo} />
                  </div>
                  <div>
                    <p className="font-label-caps text-xs font-bold text-on-surface">{suspect.name}</p>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">{suspect.role} • {suspect.priority}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                </div>
                <div>
                  <p className="font-label-caps text-xs font-bold text-on-surface">Evidence EV-902</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">Encrypted Drive • Under Decryption</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Case Finder */}
        <section className="col-span-12 lg:col-span-4 flex flex-col h-full">
          <div className="glass-panel rounded-xl p-widget-padding flex flex-col justify-between h-full min-h-[360px]">
            <div className="flex justify-between items-center mb-6">
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase font-semibold">SIMILAR CASE FINDER</span>
              <div className="text-secondary font-bold text-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">bolt</span>
                92% Match
              </div>
            </div>
            
            <div className="relative h-20 mb-4 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center">
              <div className="relative z-10 text-center">
                <div className="text-2xl font-bold font-data-mono text-primary">V-2024-55</div>
                <div className="text-[9px] font-label-caps text-on-surface-variant uppercase mt-0.5">Operation Silver-Line</div>
              </div>
            </div>
            
            <div className="space-y-3.5 flex-1">
              <div className="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-label-caps text-[10px] text-primary uppercase font-semibold">Match Parameters</p>
                  <span className="text-[9px] font-data-mono text-on-surface-variant">Weighted Correlation</span>
                </div>
                <ul className="text-xs space-y-1.5 text-on-surface-variant">
                  <li className="flex justify-between"><span>Modus Operandi</span> <span className="text-secondary font-semibold">High</span></li>
                  <li className="flex justify-between"><span>Geographic Overlap</span> <span className="text-on-surface">Medium</span></li>
                  <li className="flex justify-between"><span>Digital Footprint</span> <span className="text-secondary font-semibold">Exact</span></li>
                </ul>
              </div>
              
              <div className="p-3 border-l-2 border-primary bg-primary/5 rounded-r">
                <p className="font-label-caps text-[10px] text-on-surface mb-1 uppercase font-semibold">Previous Outcome</p>
                <p className="text-[11px] text-on-surface-variant italic leading-relaxed">
                  Conviction of primary cell leaders. Assets recovered: $4.2M. Sentencing: 12-15 years detention.
                </p>
              </div>
            </div>
            
            <button
              onClick={() => alert("Loading side-by-side behavioral matrix report...")}
              className="w-full mt-4 py-2 border border-primary/30 text-primary font-label-caps text-[10px] uppercase font-bold rounded hover:bg-primary/10 transition-all"
            >
              View Detailed Comparison
            </button>
          </div>
        </section>

        {/* Investigation Timeline */}
        <section className="col-span-12 border border-outline-variant rounded-xl p-gutter bg-surface-container-low/30 mt-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline-sm text-sm font-semibold text-on-surface">Investigation Lifecycle</h3>
            <div className="flex items-center gap-4 text-on-surface-variant font-label-caps text-[9px] uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Completed</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary border border-primary pulse-red"></span> In Progress</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-outline"></span> Pending</span>
            </div>
          </div>
          
          <div className="relative overflow-x-auto py-4">
            {/* Progress Line */}
            <div className="absolute top-[38px] left-8 right-8 h-[2px] bg-outline-variant z-0"></div>
            <div className="absolute top-[38px] left-8 w-[50%] h-[2px] bg-secondary z-0"></div>
            
            <div className="flex justify-between relative z-10 min-w-[700px] px-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center w-36 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-3 border-4 border-background">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                </div>
                <p className="font-label-caps text-[10px] text-on-surface mb-0.5 uppercase tracking-wider font-semibold">FIR Filed</p>
                <p className="font-data-mono text-[9px] text-on-surface-variant">2026-02-14</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center w-36 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-3 border-4 border-background">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                </div>
                <p className="font-label-caps text-[10px] text-on-surface mb-0.5 uppercase tracking-wider font-semibold">Evidence Seizure</p>
                <p className="font-data-mono text-[9px] text-on-surface-variant">2026-03-02</p>
              </div>
              
              {/* Step 3 (Active) */}
              <div className="flex flex-col items-center w-36 text-center">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-3 border-4 border-background ring-4 ring-primary/20">
                  <span className="material-symbols-outlined text-base animate-spin">sync</span>
                </div>
                <p className="font-label-caps text-[10px] text-primary mb-0.5 uppercase tracking-wider font-bold">Interrogations</p>
                <p className="font-data-mono text-[9px] text-on-surface-variant">In Progress</p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center w-36 text-center">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-outline flex items-center justify-center mb-3 border-4 border-background">
                  <span className="material-symbols-outlined text-base">radio_button_unchecked</span>
                </div>
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-0.5 uppercase tracking-wider font-semibold">Case Review</p>
                <p className="font-data-mono text-[9px] text-on-surface-variant opacity-50">TBD</p>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col items-center w-36 text-center">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-outline flex items-center justify-center mb-3 border-4 border-background">
                  <span className="material-symbols-outlined text-base">description</span>
                </div>
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-0.5 uppercase tracking-wider font-semibold">Charge Sheet</p>
                <p className="font-data-mono text-[9px] text-on-surface-variant opacity-50">TBD</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Row: Task Queue & Live Telemetry */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-gutter mt-6">
          <div className="glass-panel p-widget-padding rounded-xl flex items-center gap-4">
            <div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-xl">terminal</span>
            </div>
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Live Uplink</p>
              <p className="font-data-mono text-[10px] text-secondary font-semibold">CONNECTED // SECURE</p>
            </div>
          </div>
          
          <div className="glass-panel p-widget-padding rounded-xl flex items-center gap-4">
            <div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center text-error">
              <span className="material-symbols-outlined text-xl">monitoring</span>
            </div>
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Threat Level</p>
              <p className="font-data-mono text-[10px] text-error font-semibold">ELEVATED (MOD 3)</p>
            </div>
          </div>
          
          <div className="glass-panel p-widget-padding rounded-xl flex items-center gap-4">
            <div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-xl">schedule</span>
            </div>
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Next Shift Handoff</p>
              <p className="font-data-mono text-[10px] text-on-surface font-semibold">02:45:12 REMAINING</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

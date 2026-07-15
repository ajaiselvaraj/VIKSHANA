import React, { useState } from 'react';

export default function OffenderProfile() {
  const [profile, setProfile] = useState({
    name: 'Raj Kumar',
    id: '4829-QX-2024',
    age: 32,
    priors: 12,
    parole: 'Revoked',
    status: 'DETAINED',
    location: 'SECTOR 4',
    marks: 'Scar on left forearm',
    alias: "'The Nightcat'",
    sector: 'Suburban Residential',
    firstArrest: 'Nov 12, 2018',
    recidivism: 87,
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0rc2uhysoG_QJRkEtOMyskFUHt-dcTH9JumiLPhQcl-jBczNPdz7tZSjCPYTbYWkEnTNPy92uMZYLvII5najC_fdPJuRhjqFJe51S8uMS2fL5TIHzjB_froY8bd2TXVPt0B7MCUIuyjnGiKPirVRmQjMsZyFXl3lwFBmcl_F8qJIDvBNfslwwsP5kUxRNUJIt-R5UCa9D57yM-05Ftx7CjLa_9TdzL8s778mYDt6R61LN_BhEzdM6hRbYVmDZsE1TZemSlh_KSAM'
  });

  const handleRevokeParole = () => {
    setProfile(prev => ({
      ...prev,
      parole: prev.parole === 'Revoked' ? 'Active' : 'Revoked'
    }));
    alert("Parole status updated for " + profile.name);
  };

  return (
    <div className="flex-1 mt-16 p-margin-page overflow-y-auto max-h-[calc(100vh-64px)] bg-background">
      <div className="max-w-7xl mx-auto space-y-6 pb-16">
        
        {/* Hero Section: Offender Identity */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Bio Photo & Quick Identity Card */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="glass-panel p-widget-padding rounded-xl relative overflow-hidden group">
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4 relative border border-outline-variant/30">
                <img className="w-full h-full object-cover" alt={profile.name} src={profile.photo} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5">
                    <span className="bg-error px-2 py-0.5 rounded text-[9px] font-bold text-on-error uppercase tracking-widest">High Risk</span>
                    <span className="bg-primary/20 backdrop-blur-md border border-primary/30 px-2 py-0.5 rounded text-[9px] font-bold text-primary uppercase tracking-widest">Active File</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-headline-md text-xl font-bold text-primary">{profile.name}</h2>
                    <p className="font-data-mono text-[10px] text-on-surface-variant">{profile.id}</p>
                  </div>
                  <button
                    onClick={() => alert(`Department index records queried for ${profile.name}`)}
                    className="p-1 border border-outline-variant hover:bg-surface-container-highest rounded-full transition-colors flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-base">more_vert</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-3">
                  <div>
                    <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">AGE</p>
                    <p className="font-headline-sm text-base font-bold text-on-surface">{profile.age}</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">PRIOR CASES</p>
                    <p className="font-headline-sm text-base font-bold text-on-surface">{profile.priors}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 bg-surface-container-highest border border-outline-variant rounded text-[10px] text-on-surface-variant">Repeat offender</span>
                  <span className="px-2.5 py-0.5 bg-surface-container-highest border border-outline-variant rounded text-[10px] text-on-surface-variant">High recidivism</span>
                  <span className="px-2.5 py-0.5 bg-error-container/30 border border-error/20 rounded text-[10px] text-error font-bold">Unpredictable</span>
                </div>
              </div>
            </div>

            {/* Risk Visualization Widget */}
            <div className="glass-panel p-widget-padding rounded-xl bg-gradient-to-b from-surface-container to-background border border-outline-variant flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-label-caps text-[10px] text-primary uppercase font-bold tracking-wider">Recidivism Forecast</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-base">monitoring</span>
              </div>
              
              <div className="flex items-center justify-center py-2 relative">
                <svg className="w-36 h-36 -rotate-90">
                  <circle className="text-outline-variant/30" cx="72" cy="72" fill="transparent" r="54" stroke="currentColor" strokeWidth="8"></circle>
                  <circle className="text-error" cx="72" cy="72" fill="transparent" r="54" stroke="currentColor" strokeDasharray="339" strokeDashoffset={339 - (339 * profile.recidivism) / 100} strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display-lg text-2xl font-bold text-error">{profile.recidivism}%</span>
                  <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">CRITICAL</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-error-container/20 rounded-lg border border-error/30 text-xs">
                <p className="text-on-error-container leading-relaxed">
                  AI-model predicts high probability of re-engagement within 45 days. Enhanced surveillance recommended.
                </p>
              </div>
            </div>
          </div>

          {/* Profiling Details & MO Section */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Personal Details & Biometrics */}
            <div className="glass-panel p-6 rounded-xl space-y-6">
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <h3 className="font-headline-sm text-sm font-semibold flex items-center gap-1.5 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base">fingerprint</span>
                  Criminal Profile Details
                </h3>
                <div className="flex gap-2 text-[10px] font-data-mono uppercase">
                  <span className="bg-surface-container-highest px-3 py-1 rounded border border-outline-variant">STATUS: {profile.status}</span>
                  <span className="bg-surface-container-highest px-3 py-1 rounded border border-outline-variant">LOC: {profile.location}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-3.5">
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Nationality</span>
                    <span className="text-on-surface font-semibold">Indian</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Height</span>
                    <span className="text-on-surface">178 cm</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Weight</span>
                    <span className="text-on-surface">74 kg</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Distinctive Marks</span>
                    <span className="text-on-surface font-semibold">{profile.marks}</span>
                  </div>
                </div>
                
                <div className="space-y-3.5">
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Alias</span>
                    <span className="text-on-surface font-semibold">{profile.alias}</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Primary Sector</span>
                    <span className="text-on-surface">{profile.sector}</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                    <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">First Arrest</span>
                    <span className="text-on-surface">{profile.firstArrest}</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/30 pb-2 items-center">
                    <span className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Current Parole</span>
                    <button
                      onClick={handleRevokeParole}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        profile.parole === 'Revoked'
                          ? 'bg-error-container text-on-error-container'
                          : 'bg-secondary-container text-on-secondary-container'
                      }`}
                    >
                      {profile.parole}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modus Operandi & Behavioral Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-xl border-l-4 border-primary">
                <h4 className="font-label-caps text-[10px] text-primary mb-4 flex items-center gap-1.5 uppercase font-bold tracking-wider">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                  MODUS OPERANDI
                </h4>
                <div className="space-y-3">
                  <div className="p-3.5 bg-surface-container-low rounded border border-outline-variant">
                    <p className="font-bold text-xs mb-1 text-on-surface">Night Burglary</p>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">
                      Utilizes high-entry points (second-story windows) between 02:00 and 04:00 AM. 
                      Demonstrates expert skill in bypassing mid-range electronic alarm systems without triggering silent alerts. 
                      Targets high-value jewelry and portable electronics exclusively.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1 text-[11px] text-on-surface-variant font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span>Pattern identified in 9 recent cases</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl border-l-4 border-error flex flex-col justify-between">
                <div>
                  <h4 className="font-label-caps text-[10px] text-error mb-4 flex items-center gap-1.5 uppercase font-bold tracking-wider">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    BEHAVIORAL ANALYSIS
                  </h4>
                  <div className="space-y-3.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-error text-base mt-0.5">report_problem</span>
                      <div>
                        <p className="font-bold text-on-surface">Escalation Tendency</p>
                        <p className="text-[11px] text-on-surface-variant leading-normal">
                          Previous incidents show a transition from stealth to confrontation when detected.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-on-surface-variant text-base mt-0.5">group</span>
                      <div>
                        <p className="font-bold text-on-surface">Social Network</p>
                        <p className="text-[11px] text-on-surface-variant leading-normal">
                          Associated with 'Sector 9' fencing syndicate. Known associates: 4.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => alert("Loading encrypted psychiatric evaluation dossier...")}
                    className="w-full py-2 bg-surface-container-highest hover:bg-outline-variant text-on-surface border border-outline-variant rounded font-label-caps text-[10px] transition-all font-bold uppercase tracking-wider"
                  >
                    View Full Psych Report
                  </button>
                </div>
              </div>
            </div>

            {/* Case Timeline (Compact Bento) */}
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">CRIMINAL TRAJECTORY TIMELINE</h3>
                <div className="flex gap-4 text-[9px] font-label-caps tracking-wider">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-error"></span>
                    <span className="text-on-surface-variant">Violent</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-on-surface-variant">Property</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-2 bg-surface-container-low rounded-full overflow-hidden mb-6">
                <div className="absolute left-0 h-full w-full bg-gradient-to-r from-primary via-primary to-error opacity-30"></div>
                <div className="absolute left-[10%] w-3 h-3 bg-primary border-2 border-background rounded-full -top-0.5"></div>
                <div className="absolute left-[30%] w-3 h-3 bg-primary border-2 border-background rounded-full -top-0.5"></div>
                <div className="absolute left-[45%] w-3 h-3 bg-primary border-2 border-background rounded-full -top-0.5"></div>
                <div className="absolute left-[70%] w-3 h-3 bg-error border-2 border-background rounded-full -top-0.5"></div>
                <div className="absolute left-[87%] w-4 h-4 bg-error border-2 border-background rounded-full -top-1 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 text-center text-xs">
                <div>
                  <p className="font-data-mono text-primary font-bold">2018</p>
                  <p className="text-on-surface-variant mt-0.5">Inception</p>
                </div>
                <div>
                  <p className="font-data-mono text-primary font-bold">2021</p>
                  <p className="text-on-surface-variant mt-0.5">Escalation</p>
                </div>
                <div>
                  <p className="font-data-mono text-error font-bold">2023</p>
                  <p className="text-on-surface-variant mt-0.5">Critical Peak</p>
                </div>
                <div>
                  <p className="font-data-mono text-error font-bold">2024</p>
                  <p className="text-on-surface-variant mt-0.5">Active Threat</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-surface-container-low border border-outline-variant rounded-lg">
            <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Total Victims</p>
            <p className="font-display-lg text-2xl font-bold text-on-surface mt-1">18</p>
          </div>
          <div className="p-4 bg-surface-container-low border border-outline-variant rounded-lg">
            <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Recovery Rate</p>
            <p className="font-display-lg text-2xl font-bold text-secondary mt-1">12%</p>
          </div>
          <div className="p-4 bg-surface-container-low border border-outline-variant rounded-lg">
            <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Surveillance Level</p>
            <p className="font-display-lg text-2xl font-bold text-primary mt-1">TIER 1</p>
          </div>
          <div className="p-4 bg-surface-container-low border border-outline-variant rounded-lg">
            <p className="font-label-caps text-[9px] text-on-surface-variant uppercase font-semibold">Data Confidence</p>
            <p className="font-display-lg text-2xl font-bold text-on-surface mt-1">94.8%</p>
          </div>
        </div>

      </div>
    </div>
  );
}

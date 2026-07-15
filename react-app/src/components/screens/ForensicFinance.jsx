import React, { useState } from 'react';

export default function ForensicFinance() {
  const [transactions, setTransactions] = useState([
    {
      id: 'TX-90422',
      timestamp: '2026.07.15 14:22:01',
      entity: 'Offshore Trust #882',
      amount: '₹12,45,000',
      type: 'SWIFT W-3',
      risk: 0.88,
      status: 'SUSPICIOUS',
      icon: 'account_balance',
      color: 'error'
    },
    {
      id: 'TX-11029',
      timestamp: '2026.07.15 14:21:44',
      entity: 'Verified Merchant: AMZ-GLOBAL',
      amount: '₹2,340',
      type: 'POS',
      risk: 0.04,
      status: 'VERIFIED',
      icon: 'shopping_cart',
      color: 'secondary'
    },
    {
      id: 'TX-39902',
      timestamp: '2026.07.15 14:18:50',
      entity: 'Crypto Bridge: KRAK-LP',
      amount: '₹88,00,000',
      type: 'WIRE-INTL',
      risk: 0.94,
      status: 'SUSPICIOUS',
      icon: 'currency_exchange',
      color: 'error'
    }
  ]);

  const handleFreeze = (id) => {
    alert(`FREEZE ORDER INITIATED: Account related to Transaction ${id} has been suspended under PolicyML-4.2.`);
  };

  const handleReview = (id) => {
    alert(`Audit log and details requested for Transaction ${id}.`);
  };

  return (
    <div className="flex-1 mt-16 p-gutter h-[calc(100vh-64px)] overflow-y-auto bg-background">
      <div className="grid grid-cols-12 gap-gutter max-w-[1600px] mx-auto">
        
        {/* Left Column: Suspicious Activity Stream */}
        <div className="col-span-12 lg:col-span-4 space-y-gutter">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-sm font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">warning</span>
              Risk Monitoring
            </h2>
            <span className="font-data-mono text-[10px] text-error flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              {transactions.filter(t => t.risk > 0.5).length} High Risk Detected
            </span>
          </div>

          {/* High Risk Card 1 */}
          <div className="glass-card p-widget-padding rounded-lg group hover:border-primary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-error/10 text-error px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">High Risk Alert</div>
              <span className="font-data-mono text-[11px] text-on-surface-variant">ID: TX-90422</span>
            </div>
            <div className="mb-4">
              <p className="text-on-surface-variant font-label-caps text-[10px] uppercase">Transaction Amount</p>
              <p className="text-2xl font-bold text-on-surface">₹45,00,000</p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-3">
              <div>
                <p className="text-[9px] font-label-caps text-on-surface-variant uppercase">Linked Cases</p>
                <p className="font-data-mono text-primary text-xs font-semibold">4 Matches</p>
              </div>
              <div>
                <p className="text-[9px] font-label-caps text-on-surface-variant uppercase">Pattern</p>
                <p className="font-data-mono text-tertiary text-xs font-semibold">Layering</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-error w-[92%] h-full"></div>
              </div>
              <span className="font-data-mono text-xs text-error font-semibold">92%</span>
            </div>
          </div>

          {/* Activity Card 2 */}
          <div className="glass-card p-widget-padding rounded-lg hover:border-primary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">Pattern Detected</div>
              <span className="font-data-mono text-[11px] text-on-surface-variant">ID: ENT-3301</span>
            </div>
            <h3 className="font-headline-sm text-sm font-semibold text-on-surface truncate">Blue Horizon Shell Co.</h3>
            <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
              Swift burst of outbound wires to offshore jurisdictions after zero activity for 180 days.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="bg-surface-container-highest p-2 rounded text-center">
                <p className="text-[9px] font-label-caps text-on-surface-variant">JURISDICTION</p>
                <p className="text-xs font-data-mono text-on-surface mt-0.5">Cayman</p>
              </div>
              <div className="bg-surface-container-highest p-2 rounded text-center">
                <p className="text-[9px] font-label-caps text-on-surface-variant">FLOW VOL</p>
                <p className="text-xs font-data-mono text-on-surface mt-0.5">₹2.1 Cr</p>
              </div>
              <div className="bg-surface-container-highest p-2 rounded text-center">
                <p className="text-[9px] font-label-caps text-on-surface-variant">CONFIDENCE</p>
                <p className="text-xs font-data-mono text-secondary font-semibold mt-0.5">88%</p>
              </div>
            </div>
          </div>

          {/* Activity Card 3 */}
          <div className="glass-card p-widget-padding rounded-lg opacity-85 hover:opacity-100 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-base">verified_user</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">New Policy Updated</p>
                <p className="text-[10px] text-on-surface-variant mt-0.5">ML-Rule-Set v4.2 Deployment Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle/Right Column: Main Visualization & Logs */}
        <div className="col-span-12 lg:col-span-8 space-y-gutter">
          {/* Transaction Network Graph Visualizer */}
          <div className="glass-card rounded-xl h-[450px] relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 p-widget-padding flex justify-between items-center bg-surface-container-lowest/40 backdrop-blur-md border-b border-outline-variant/30">
              <div>
                <h3 className="font-headline-sm text-sm font-semibold text-on-surface">Network Graph</h3>
                <p className="text-xs text-on-surface-variant">Visualizing relationship hops & fund dispersion</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-surface-container-highest px-3 py-1 rounded flex items-center gap-1.5 text-xs hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[16px]">hub</span> Force Atlas
                </button>
                <button className="bg-surface-container-highest px-3 py-1 rounded flex items-center gap-1.5 text-xs hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[16px]">filter_alt</span> Filters
                </button>
              </div>
            </div>

            {/* Mock Graph Canvas */}
            <div className="flex-grow relative h-64 bg-surface-container-lowest/20">
              {/* Legend Overlay */}
              <div className="absolute bottom-4 left-4 glass-card p-3 rounded space-y-1.5 text-[9px] z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-error shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span> High Risk Node
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span> Primary Subject
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Verified Merchant
                </div>
              </div>

              {/* Central Node Simulation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center pulse-red">
                    <span className="material-symbols-outlined text-primary text-2xl">business</span>
                  </div>
                  <div className="absolute top-16 whitespace-nowrap bg-background px-2.5 py-1 border border-primary text-primary font-data-mono text-[10px] rounded">
                    X-CORP HOLDINGS
                  </div>
                </div>
              </div>

              {/* Connected Nodes Simulation */}
              <div className="absolute top-[28%] left-[25%] group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center hover:border-error transition-all">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
                </div>
                <div className="hidden group-hover:block absolute top-full left-0 mt-2 bg-surface-container-highest p-2.5 rounded shadow-xl border border-outline-variant z-30 w-44">
                  <p className="text-[9px] font-bold text-error uppercase">UNKNOWN ENTITY</p>
                  <p className="text-[11px] font-data-mono mt-0.5">₹1.2M Outbound</p>
                </div>
              </div>

              <div className="absolute top-[22%] right-[32%]">
                <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">account_balance</span>
                </div>
              </div>

              <div className="absolute bottom-[28%] right-[22%]">
                <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">public</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Transaction Log */}
          <div className="glass-card rounded-xl overflow-hidden flex flex-col">
            <div className="p-widget-padding flex justify-between items-center border-b border-outline-variant/50">
              <h3 className="font-label-caps text-xs text-on-surface-variant uppercase font-semibold">Live Transaction Feed</h3>
              <div className="flex items-center gap-4 text-xs font-label-caps">
                <span className="flex items-center gap-1 text-secondary"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Incoming</span>
                <span className="flex items-center gap-1 text-error"><span className="w-1.5 h-1.5 bg-error rounded-full"></span> Suspicious</span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead class="bg-surface-container-high/50 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider border-b border-outline-variant">
                  <tr>
                    <th class="px-gutter py-3 font-semibold">Timestamp</th>
                    <th class="px-gutter py-3 font-semibold">Entity / Account</th>
                    <th class="px-gutter py-3 font-semibold">Value</th>
                    <th class="px-gutter py-3 font-semibold">Type</th>
                    <th class="px-gutter py-3 font-semibold">Risk Score</th>
                    <th class="px-gutter py-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-outline-variant/30 font-data-mono text-xs">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-primary/5 transition-colors">
                      <td className="px-gutter py-3.5 text-on-surface-variant">{tx.timestamp}</td>
                      <td className="px-gutter py-3.5">
                        <div className="flex items-center gap-2">
                          <span className={`material-symbols-outlined text-${tx.color} text-base`}>{tx.icon}</span>
                          <span className="text-on-surface font-semibold">{tx.entity}</span>
                        </div>
                      </td>
                      <td className="px-gutter py-3.5 text-on-surface font-bold">{tx.amount}</td>
                      <td className="px-gutter py-3.5 text-tertiary">{tx.type}</td>
                      <td className="px-gutter py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-12 bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
                            <div className={`h-full ${tx.risk > 0.5 ? 'bg-error' : 'bg-secondary'}`} style={{ width: `${tx.risk * 100}%` }}></div>
                          </div>
                          <span className={tx.risk > 0.5 ? 'text-error font-semibold' : 'text-secondary'}>{tx.risk}</span>
                        </div>
                      </td>
                      <td className="px-gutter py-3.5">
                        {tx.status === 'SUSPICIOUS' ? (
                          <div className="flex gap-2">
                            <button onClick={() => handleFreeze(tx.id)} className="text-error hover:underline font-label-caps text-[10px] uppercase font-bold">Freeze</button>
                            <button onClick={() => handleReview(tx.id)} className="text-primary hover:underline font-label-caps text-[10px] uppercase">Review</button>
                          </div>
                        ) : (
                          <button onClick={() => alert("Transaction archived.")} className="text-on-surface-variant hover:text-on-surface font-label-caps text-[10px] uppercase">Archive</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Contextual FAB */}
      <button
        onClick={() => {
          const caseName = prompt("Enter Case Name/Target Subject:");
          if (caseName) {
            alert(`New case dossier initialized for ${caseName}. Incident Alert flagged.`);
          }
        }}
        className="fixed bottom-8 right-8 bg-primary text-on-primary-fixed p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group z-50 border border-primary/30"
      >
        <span className="material-symbols-outlined text-[24px]">add_task</span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-label-caps uppercase tracking-widest text-[11px]">
          New Case Investigation
        </span>
      </button>
    </div>
  );
}

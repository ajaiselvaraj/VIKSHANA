import React, { useState } from 'react';

export default function Governance() {
  const [users, setUsers] = useState([
    { id: 'SEC-9821', name: 'Inspector Kumar', role: 'Investigator', status: 'ACTIVE', lastAuth: 'Today, 10:45 AM', initials: 'AK' },
    { id: 'SEC-4412', name: 'Sgt. Radhika Sharma', role: 'Supervisor', status: 'ACTIVE', lastAuth: 'Today, 08:12 AM', initials: 'RS' },
    { id: 'SEC-1002', name: 'Analyst John Miller', role: 'Extern-Analyst', status: 'INACTIVE', lastAuth: 'Mar 12, 06:44 PM', initials: 'JM' }
  ]);

  const [permissions, setPermissions] = useState({
    investigator: {
      viewClassified: true,
      modifyEvidence: false,
      initiateAI: true
    },
    supervisor: {
      approveSurveillance: true,
      overrideLockdowns: true,
      externalAudit: true
    }
  });

  const [auditLogs] = useState([
    {
      type: 'ACCESS_EVENT',
      time: '10:45:22 AM',
      user: 'Inspector Kumar',
      message: 'viewed FIR #8821-X (Classified)',
      meta: 'Source: Terminal-C14 • IP: 192.168.1.42',
      color: 'primary'
    },
    {
      type: 'SYSTEM_UPDATE',
      time: '10:30:05 AM',
      user: '',
      message: 'AI Core Node #04 synchronized with Central Database.',
      meta: 'Verification Code: 0x884F...AA',
      color: 'secondary'
    },
    {
      type: 'SECURITY_WARN',
      time: '10:12:44 AM',
      user: '',
      message: 'Multiple failed login attempts detected for Analyst Miller.',
      meta: 'Auto-lock protocol initiated on Node B.',
      color: 'error'
    },
    {
      type: 'AUTH_LEVEL_UP',
      time: '09:55:10 AM',
      user: 'Sgt. Radhika Sharma',
      message: 'granted temporary clearance for level 4 files.',
      meta: 'Duration: 120min • Authorized by Admin Prime.',
      color: 'primary'
    }
  ]);

  const handleAddUser = () => {
    const name = prompt("Enter personnel full name:");
    if (!name) return;
    const role = prompt("Enter role (e.g. Analyst, Investigator, Supervisor):", "Analyst");
    if (!role) return;
    const secId = 'SEC-' + Math.floor(1000 + Math.random() * 9000);
    const initials = name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().substring(0, 2);

    const newUser = {
      id: secId,
      name: name,
      role: role,
      status: 'ACTIVE',
      lastAuth: 'Just Now',
      initials: initials
    };
    setUsers([...users, newUser]);
    alert(`Personnel ${name} added successfully with ID ${secId}.`);
  };

  const handleCheckboxToggle = (role, key) => {
    setPermissions(prev => ({
      ...prev,
      [role]: {
        ...prev[role],
        [key]: !prev[role][key]
      }
    }));
  };

  return (
    <div className="flex-1 mt-16 p-gutter h-[calc(100vh-64px)] overflow-y-auto bg-background">
      <div className="max-w-[1600px] mx-auto space-y-gutter pb-16">
        
        {/* System Health Section */}
        <div>
          <h3 className="font-label-caps text-xs text-primary mb-4 flex items-center gap-2 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            System Governance & Health Monitor
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Core Database */}
            <div className="glass-panel p-widget-padding flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Core Database</span>
                  <span className="material-symbols-outlined text-secondary text-lg">database</span>
                </div>
                <div className="text-xl font-bold font-data-mono">99.99% Uptime</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 flex-grow bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-secondary w-[99.9%]" />
                </div>
                <span className="text-[9px] font-data-mono text-secondary font-semibold">STABLE</span>
              </div>
            </div>

            {/* AI Intelligence Nodes */}
            <div className="glass-panel p-widget-padding flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">AI Intelligence Nodes</span>
                  <span className="material-symbols-outlined text-primary text-lg">neurology</span>
                </div>
                <div className="text-xl font-bold font-data-mono">14 Active</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 flex-grow bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-primary w-[85%]" />
                </div>
                <span className="text-[9px] font-data-mono text-primary font-semibold">PROCESSING</span>
              </div>
            </div>

            {/* Encryption Layer */}
            <div className="glass-panel p-widget-padding flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Encryption Layer</span>
                  <span className="material-symbols-outlined text-secondary text-lg">encrypted</span>
                </div>
                <div className="text-xl font-bold font-data-mono">AES-512 Q</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 flex-grow bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-secondary w-full" />
                </div>
                <span className="text-[9px] font-data-mono text-secondary font-semibold">QUANTUM_READY</span>
              </div>
            </div>

            {/* Intrusion Attempts */}
            <div className="glass-panel p-widget-padding flex flex-col justify-between border-error/20 border">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Intrusion Attempts</span>
                  <span className="material-symbols-outlined text-error text-lg">privacy_tip</span>
                </div>
                <div className="text-xl font-bold font-data-mono text-error">03 Blocked</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 flex-grow bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-error w-[15%] status-pulse" />
                </div>
                <span className="text-[9px] font-data-mono text-error font-semibold">MONITORING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* User Management Table (8 columns) */}
          <div className="col-span-12 lg:col-span-8 space-y-gutter">
            <section className="glass-panel rounded-xl overflow-hidden flex flex-col">
              <div className="p-gutter border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <div>
                  <h4 className="font-headline-sm text-sm font-semibold text-on-surface">User Management</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Manage department personnel and access hierarchies.</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => alert("CSV audit ledger compiled and downloaded to local downloads folder.")}
                    className="px-3 py-1 bg-surface-container-highest border border-outline-variant font-label-caps text-[10px] hover:text-primary transition-colors uppercase tracking-wider font-semibold"
                  >
                    Export CSV
                  </button>
                  <button
                    onClick={handleAddUser}
                    className="px-3 py-1 bg-primary text-on-primary font-label-caps text-[10px] font-bold uppercase tracking-wider"
                  >
                    Add User
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant font-label-caps text-[10px] uppercase tracking-wider">
                      <th className="px-gutter py-3 font-semibold">Identifier</th>
                      <th className="px-gutter py-3 font-semibold">Role</th>
                      <th className="px-gutter py-3 font-semibold">Current Status</th>
                      <th className="px-gutter py-3 font-semibold">Auth Log</th>
                      <th className="px-gutter py-3 font-semibold text-right">Ops</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/30 text-xs">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-surface-container-highest/20 transition-colors">
                        <td className="px-gutter py-3.5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-[10px] font-bold text-on-surface">
                              {u.initials}
                            </div>
                            <div>
                              <div className="font-bold text-on-surface">{u.name}</div>
                              <div className="text-[10px] text-on-surface-variant font-data-mono">{u.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-gutter py-3.5 text-on-surface-variant">{u.role}</td>
                        <td className="px-gutter py-3.5">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            u.status === 'ACTIVE'
                              ? 'bg-secondary-container/20 text-secondary'
                              : 'bg-surface-container-highest text-on-surface-variant opacity-60'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${u.status === 'ACTIVE' ? 'bg-secondary' : 'bg-on-surface-variant'}`} />
                            {u.status}
                          </span>
                        </td>
                        <td className="px-gutter py-3.5 font-data-mono text-on-surface-variant">{u.lastAuth}</td>
                        <td className="px-gutter py-3.5 text-right">
                          <button
                            onClick={() => alert(`Opening advanced permissions console for ${u.name}`)}
                            className="text-on-surface-variant hover:text-primary transition-colors p-1"
                          >
                            <span className="material-symbols-outlined text-base">settings</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Access Control Settings */}
            <section className="glass-panel p-gutter rounded-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-headline-sm text-sm font-semibold text-on-surface">Access Control Matrices</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Granular permission overrides per operational role.</p>
                </div>
                <span className="material-symbols-outlined text-primary">key</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background border border-outline-variant rounded-lg">
                  <div className="flex justify-between items-center mb-4 border-b border-outline-variant/30 pb-2">
                    <span className="font-bold text-on-surface text-xs">Investigator Default</span>
                    <span className="px-2 py-0.5 bg-primary-container/10 text-primary text-[9px] font-bold border border-primary/20 rounded">ROLE_03</span>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">View Classified FIRs</span>
                      <input
                        type="checkbox"
                        checked={permissions.investigator.viewClassified}
                        onChange={() => handleCheckboxToggle('investigator', 'viewClassified')}
                        className="rounded border-outline-variant bg-surface-container-highest text-primary focus:ring-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Modify Evidence Logs</span>
                      <input
                        type="checkbox"
                        checked={permissions.investigator.modifyEvidence}
                        onChange={() => handleCheckboxToggle('investigator', 'modifyEvidence')}
                        className="rounded border-outline-variant bg-surface-container-highest text-primary focus:ring-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Initiate AI Forecasting</span>
                      <input
                        type="checkbox"
                        checked={permissions.investigator.initiateAI}
                        onChange={() => handleCheckboxToggle('investigator', 'initiateAI')}
                        className="rounded border-outline-variant bg-surface-container-highest text-primary focus:ring-0 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background border border-outline-variant rounded-lg">
                  <div className="flex justify-between items-center mb-4 border-b border-outline-variant/30 pb-2">
                    <span className="font-bold text-on-surface text-xs">Supervisor Default</span>
                    <span className="px-2 py-0.5 bg-primary-container/10 text-primary text-[9px] font-bold border border-primary/20 rounded">ROLE_01</span>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Approve Surveillance</span>
                      <input
                        type="checkbox"
                        checked={permissions.supervisor.approveSurveillance}
                        onChange={() => handleCheckboxToggle('supervisor', 'approveSurveillance')}
                        className="rounded border-outline-variant bg-surface-container-highest text-primary focus:ring-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Override Lockdowns</span>
                      <input
                        type="checkbox"
                        checked={permissions.supervisor.overrideLockdowns}
                        onChange={() => handleCheckboxToggle('supervisor', 'overrideLockdowns')}
                        className="rounded border-outline-variant bg-surface-container-highest text-primary focus:ring-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">External Audit Export</span>
                      <input
                        type="checkbox"
                        checked={permissions.supervisor.externalAudit}
                        onChange={() => handleCheckboxToggle('supervisor', 'externalAudit')}
                        className="rounded border-outline-variant bg-surface-container-highest text-primary focus:ring-0 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Audit Logs & System Activity (4 columns) */}
          <div className="col-span-12 lg:col-span-4 space-y-gutter">
            <section className="glass-panel flex flex-col h-full rounded-xl">
              <div className="p-gutter border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
                <h4 className="font-headline-sm text-sm font-semibold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[20px]">assignment</span>
                  System Audit Logs
                </h4>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container status-pulse"></span>
              </div>
              
              <div className="flex-grow overflow-y-auto p-gutter space-y-4 max-h-[580px]">
                {auditLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`border-l-2 pl-4 py-1 hover:bg-surface-container-highest/20 transition-colors ${
                      log.color === 'primary'
                        ? 'border-primary'
                        : log.color === 'secondary'
                        ? 'border-secondary'
                        : 'border-error'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1 text-[9px] font-data-mono">
                      <span className={log.color === 'error' ? 'text-error font-bold' : log.color === 'secondary' ? 'text-secondary' : 'text-primary'}>
                        {log.type}
                      </span>
                      <span className="text-on-surface-variant opacity-60">{log.time}</span>
                    </div>
                    <p className="text-xs text-on-surface leading-relaxed">
                      {log.user && <span className="font-bold text-primary mr-1">{log.user}</span>}
                      {log.message}
                    </p>
                    <p className="text-[10px] text-on-surface-variant mt-1 font-semibold">{log.meta}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-surface-container-low border-t border-outline-variant rounded-b-xl flex justify-center">
                <button
                  onClick={() => alert("Full security audit envelope generated.")}
                  className="text-on-surface-variant font-label-caps text-[9px] hover:text-primary tracking-wider transition-all uppercase font-semibold"
                >
                  Generate Audit Report
                </button>
              </div>
            </section>
          </div>
        </div>

      </div>

      {/* Floating Latency HUD */}
      <div className="fixed bottom-6 right-6 flex items-center gap-3 z-40">
        <div className="glass-panel px-4 py-2 flex items-center gap-4 rounded-full border border-primary/20 text-[10px] font-data-mono uppercase tracking-wider text-on-surface">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>DB_LATENCY: 4ms</span>
          </div>
          <div className="flex items-center gap-1.5 border-l border-outline-variant/30 pl-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>SECURE_LINK</span>
          </div>
        </div>
        <button
          onClick={() => alert("Contact system supervisor at admin-desk@sentinel.net")}
          className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all border border-primary/30"
        >
          <span className="material-symbols-outlined text-lg">support_agent</span>
        </button>
      </div>
    </div>
  );
}

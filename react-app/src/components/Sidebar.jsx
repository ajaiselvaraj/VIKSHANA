import React from 'react';

const navigationItems = [
  { id: 'command_center', name: 'Command Center', icon: 'dashboard' },
  { id: 'ai_assistant', name: 'AI Assistant', icon: 'chat_bubble' },
  { id: 'crime_analytics', name: 'Crime Analytics', icon: 'analytics' },
  { id: 'geospatial', name: 'Geospatial Hotspots', icon: 'map' },
  { id: 'forensic_finance', name: 'Forensic Finance', icon: 'monetization_on' },
  { id: 'predictive', name: 'Predictive Intel', icon: 'online_prediction' },
  { id: 'intelligence_network', name: 'Network Graph', icon: 'hub' },
  { id: 'cognitive_reasoning', name: 'Explainable AI', icon: 'psychology' },
  { id: 'sociological', name: 'Sociological Insights', icon: 'group' },
  { id: 'tactical_unit', name: 'Tactical Unit', icon: 'shield' },
  { id: 'offender_profile', name: 'Offender Profile', icon: 'badge' },
  { id: 'governance', name: 'System Admin', icon: 'settings' },
  { id: 'design_system', name: 'Design System', icon: 'palette' }
];

export default function Sidebar({ activeTab, setActiveTab, onLogout, user }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-[260px] bg-surface-container border-r border-outline-variant flex flex-col py-widget-padding z-50">
      <div className="px-gutter mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display-lg text-2xl font-bold text-primary tracking-tight">VIKSHANA</h1>
            <p className="font-label-caps text-[9px] text-on-surface-variant uppercase tracking-widest mt-1">Intelligence Division</p>
          </div>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
          </span>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 px-3 overflow-y-auto">
        {navigationItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded transition-all duration-150 font-medium ${
                isActive
                  ? 'bg-primary-container text-on-primary-container border-l-2 border-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}>
                {item.icon}
              </span>
              <span className="font-label-caps text-[11px] uppercase tracking-wider text-left">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* User profile footer */}
      <div className="px-4 py-3 border-t border-outline-variant mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold font-display-lg text-sm border border-outline">
              {user ? user.charAt(0).toUpperCase() : 'A'}
            </div>
            <div>
              <p className="text-xs font-semibold text-on-surface truncate w-32">{user || 'Agent Alpha'}</p>
              <p className="text-[10px] text-on-surface-variant font-data-mono uppercase">Level 4 Clearance</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            title="Log Out"
            className="p-1 rounded text-on-surface-variant hover:bg-error-container hover:text-on-error transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

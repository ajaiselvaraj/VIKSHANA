import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SentinelLogin from './components/screens/SentinelLogin';
import CommandCenter from './components/screens/CommandCenter';
import AIAssistant from './components/screens/AIAssistant';
import CrimeAnalytics from './components/screens/CrimeAnalytics';
import GeospatialIntelligence from './components/screens/GeospatialIntelligence';
import ForensicFinance from './components/screens/ForensicFinance';
import PredictiveIntelligence from './components/screens/PredictiveIntelligence';
import IntelligenceNetwork from './components/screens/IntelligenceNetwork';
import CognitiveReasoning from './components/screens/CognitiveReasoning';
import SociologicalIntelligence from './components/screens/SociologicalIntelligence';
import TacticalUnit from './components/screens/TacticalUnit';
import OffenderProfile from './components/screens/OffenderProfile';
import Governance from './components/screens/Governance';
import DesignSystemScreen from './components/screens/DesignSystemScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [role, setRole] = useState('');
  const [activeTab, setActiveTab] = useState('command_center');

  const handleLogin = (personnelId, userRole) => {
    setUser(personnelId || 'Agent Delta');
    setRole(userRole || 'analyst');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser('');
    setRole('');
  };

  // If not authenticated, render Sentinel Login
  if (!isAuthenticated) {
    return <SentinelLogin onLogin={handleLogin} />;
  }

  // Render active screen
  const renderScreen = () => {
    switch (activeTab) {
      case 'command_center':
        return <CommandCenter onNavigate={setActiveTab} />;
      case 'ai_assistant':
        return <AIAssistant />;
      case 'crime_analytics':
        return <CrimeAnalytics />;
      case 'geospatial':
        return <GeospatialIntelligence />;
      case 'forensic_finance':
        return <ForensicFinance />;
      case 'predictive':
        return <PredictiveIntelligence />;
      case 'intelligence_network':
        return <IntelligenceNetwork />;
      case 'cognitive_reasoning':
        return <CognitiveReasoning />;
      case 'sociological':
        return <SociologicalIntelligence />;
      case 'tactical_unit':
        return <TacticalUnit />;
      case 'offender_profile':
        return <OffenderProfile />;
      case 'governance':
        return <Governance />;
      case 'design_system':
        return <DesignSystemScreen />;
      default:
        return <CommandCenter onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} user={user} />

      {/* Main Panel Content Wrapper */}
      <main className="ml-[260px] flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Shared Top App Bar */}
        <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-background/80 backdrop-blur-xl border-b border-outline-variant flex justify-between items-center px-gutter z-40">
          <div className="flex items-center flex-grow max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">
                search
              </span>
              <input
                type="text"
                className="w-full bg-surface-container-low border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-xs focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition-colors"
                placeholder="Search case dossier, offender, telemetry coordinates..."
              />
            </div>
          </div>
          
          <div className="flex items-center gap-5 pl-4">
            <button
              onClick={() => alert("Notification panel is currently clear.")}
              className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-highest transition-all relative flex items-center"
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-error rounded-full animate-ping"></span>
            </button>
            <button
              onClick={() => alert("Security status: ALL SYSTEMS OPERATIONAL")}
              className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-highest transition-all flex items-center"
            >
              <span className="material-symbols-outlined text-xl">security</span>
            </button>
            <div className="h-6 w-px bg-outline-variant mx-1" />
            <div className="flex items-center gap-2.5">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-on-surface leading-none">{user}</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider mt-0.5 font-data-mono">
                  {role.toUpperCase()}
                </p>
              </div>
              <span className="material-symbols-outlined text-[32px] text-primary">account_circle</span>
            </div>
          </div>
        </header>

        {/* View Canvas Grid */}
        {renderScreen()}
      </main>
    </div>
  );
}
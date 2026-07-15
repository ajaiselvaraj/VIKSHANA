import React, { useState, useEffect, useRef } from 'react';

export default function SentinelLogin({ onLogin }) {
  const [personnelId, setPersonnelId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('analyst');
  const [timeStr, setTimeStr] = useState('--:--:-- UTC');
  const cardRef = useRef(null);

  // UTC clock updates
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      setTimeStr(`${h}:${m}:${s} UTC`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect on hover
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width - 0.5) * 8;
    const yPercent = (y / rect.height - 0.5) * 8;
    card.style.transform = `perspective(1000px) rotateX(${-yPercent}deg) rotateY(${xPercent}deg)`;
    card.style.transition = 'none';
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.transition = 'transform 0.5s ease';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (personnelId.trim()) {
      onLogin(personnelId, role);
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container h-screen w-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Layer with Shader */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-transparent to-surface-container-low pointer-events-none"></div>
      </div>

      {/* Security Overlay Info (Top Right) */}
      <div className="fixed top-gutter right-gutter z-50 flex items-center space-x-gutter">
        <div className="flex flex-col items-end">
          <span className="font-label-caps text-label-caps text-on-surface-variant">System Status</span>
          <div className="flex items-center space-x-2">
            <span className="font-data-mono text-data-mono text-secondary">ENCRYPTED</span>
            <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.6)]"></div>
          </div>
        </div>
        <div className="w-px h-8 bg-outline-variant"></div>
        <div className="flex flex-col items-end">
          <span className="font-label-caps text-label-caps text-on-surface-variant">Server Time</span>
          <span className="font-data-mono text-data-mono text-on-surface">{timeStr}</span>
        </div>
      </div>

      {/* Main Login Shell */}
      <main className="relative z-10 w-full max-w-[440px] px-margin-page">
        {/* Branding Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-xl bg-surface-container-highest border border-primary/30 shadow-[0_0_20px_rgba(173,198,255,0.1)]">
            <span className="material-symbols-outlined text-[36px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              security
            </span>
          </div>
          <h1 className="font-display-lg text-2xl font-bold text-on-surface tracking-tight">Sentinel Intelligence</h1>
          <p className="font-label-caps text-xs text-on-surface-variant mt-1">Tier-1 Command Access Portal</p>
        </div>

        {/* Glassmorphic Login Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-panel rounded-xl p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/20 pointer-events-none"></div>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* ID/Email Field */}
            <div className="space-y-1.5">
              <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant px-1" htmlFor="personnel-id">
                Personnel ID / Email
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                  person
                </span>
                <input
                  id="personnel-id"
                  className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg pl-10 pr-4 py-2.5 font-body-md text-on-surface placeholder:text-outline outline-none transition-all"
                  placeholder="Enter username (e.g. Agent Delta)..."
                  value={personnelId}
                  onChange={(e) => setPersonnelId(e.target.value)}
                  required
                  type="text"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant px-1" htmlFor="password">
                Security Protocol Password
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                  lock
                </span>
                <input
                  id="password"
                  className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg pl-10 pr-4 py-2.5 font-body-md text-on-surface placeholder:text-outline outline-none transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-1.5">
              <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant px-1">
                Access Tier (Role)
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                  badge
                </span>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg pl-10 pr-10 py-2.5 font-body-md text-on-surface outline-none transition-all appearance-none"
                >
                  <option value="analyst">Crime Analyst</option>
                  <option value="investigator">Investigator</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="policymaker">Policymaker</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Login Action */}
            <div className="pt-2">
              <button
                className="glow-button w-full bg-primary hover:bg-primary-container text-on-primary font-bold py-3.5 rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
                type="submit"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  login
                </span>
                <span className="font-label-caps uppercase tracking-wider text-xs">Initialize Authorization</span>
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => alert("Contact security administrator at admin@sentinel.intel for credential recovery.")}
                className="font-body-sm text-[11px] text-on-surface-variant hover:text-primary transition-colors flex items-center space-x-1 group"
              >
                <span className="material-symbols-outlined text-[14px] group-hover:rotate-12 transition-transform">
                  vpn_key
                </span>
                <span>Forgotten credentials? Request reset</span>
              </button>
            </div>
          </form>
        </div>

        {/* Warning Disclosure */}
        <div className="mt-6 p-3 rounded border border-error/20 bg-error-container/5 flex items-start space-x-3">
          <span className="material-symbols-outlined text-error status-pulse text-[18px] mt-0.5">warning</span>
          <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
            <strong className="text-error font-semibold uppercase">Authorized Personnel Only.</strong> All activity is logged and monitored under Protocol 9-A. Unauthorized access attempts will be prosecuted.
          </p>
        </div>
      </main>

      {/* Global Footer */}
      <footer className="fixed bottom-gutter w-full px-margin-page flex flex-col md:flex-row items-center justify-between z-10 text-on-surface-variant text-[11px]">
        <div className="font-label-caps uppercase tracking-wider opacity-60 mb-2 md:mb-0">
          © 2026 Aegis Intelligence Systems. Build 3.5.0-Alpha.
        </div>
        <nav className="flex items-center space-x-gutter">
          <button onClick={() => alert("Security Protocol 9-A Active")} className="font-label-caps uppercase tracking-wider hover:text-primary transition-colors flex items-center space-x-1">
            <span className="material-symbols-outlined text-[14px]">policy</span>
            <span>Security Policy</span>
          </button>
          <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
          <button onClick={() => alert("Dial secure line at ext. 900-SEC")} className="font-label-caps uppercase tracking-wider hover:text-primary transition-colors flex items-center space-x-1">
            <span className="material-symbols-outlined text-[14px]">support_agent</span>
            <span>Help Desk</span>
          </button>
        </nav>
      </footer>
    </div>
  );
}

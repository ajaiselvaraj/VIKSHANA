import React, { useState } from 'react';

export default function DesignSystemScreen() {
  const [activeTab, setActiveTab] = useState('colors');

  const colorTokens = [
    { name: 'Primary (Blue)', hex: '#adc6ff', usage: 'Active states, verified indicators, and primary navigation.' },
    { name: 'Secondary (Emerald)', hex: '#4edea3', usage: 'Success states, resolved cases, and secure connections.' },
    { name: 'Tertiary (Peach)', hex: '#ffb786', usage: 'Demographic trends, warn indices, and neutral markers.' },
    { name: 'Error (Red)', hex: '#ffb4ab', usage: 'Critical alerts, threat elevations, and revoke actions.' },
    { name: 'Background', hex: '#10131a', usage: 'Main canvas layout background.' },
    { name: 'Surface Container Lowest', hex: '#0b0e15', usage: 'Darkest underlying map layers.' },
    { name: 'Surface Container Low', hex: '#191b23', usage: 'Alert feeds and secondary panels.' },
    { name: 'Surface Container', hex: '#1d2027', usage: 'Sidebar navigation base and default buttons.' },
    { name: 'Surface Container High', hex: '#272a31', usage: 'Header bars and tab groups.' },
    { name: 'Surface Container Highest', hex: '#32353c', usage: 'Hover background highlights.' }
  ];

  const typographyTokens = [
    { name: 'Display Large', size: '36px', weight: '700 (Bold)', font: 'Inter', sample: 'Sentinel Intelligence' },
    { name: 'Headline Medium', size: '24px', weight: '600 (Semi-Bold)', font: 'Inter', sample: 'Active Investigation' },
    { name: 'Headline Small', size: '20px', weight: '600 (Semi-Bold)', font: 'Inter', sample: 'Case Summary' },
    { name: 'Body Large', size: '16px', weight: '400 (Regular)', font: 'Inter', sample: 'Overview narrative paragraph...' },
    { name: 'Body Medium', size: '14px', weight: '400 (Regular)', font: 'Inter', sample: 'Detailed list item content.' },
    { name: 'Body Small', size: '12px', weight: '400 (Regular)', font: 'Inter', sample: 'Authorized personnel disclosure text.' },
    { name: 'Data Mono', size: '13px', weight: '500 (Medium)', font: 'JetBrains Mono', sample: 'LAT: 41.8781° N' },
    { name: 'Label Caps', size: '11px', weight: '700 (Bold)', font: 'Inter', sample: 'TEMPORAL CRIME DENSITY' }
  ];

  const layoutTokens = [
    { token: 'Unit Spacing', value: '4px', description: 'Rhythm baseline multiplier' },
    { token: 'Gutter Spacing', value: '16px', description: 'Space between widgets and blocks' },
    { token: 'Margin Page', value: '24px', description: 'Layout outer container padding' },
    { token: 'Sidebar Width', value: '260px', description: 'Width of the left rail nav panel' },
    { token: 'Widget Padding', value: '12px', description: 'Padding within cards and alerts' }
  ];

  return (
    <div className="flex-1 mt-16 p-margin-page overflow-y-auto max-h-[calc(100vh-64px)] bg-background">
      <div className="max-w-[1200px] mx-auto space-y-6 pb-16">
        
        {/* Header */}
        <div className="border-b border-outline-variant/20 pb-4">
          <h2 className="font-headline-sm text-lg font-semibold text-on-surface">Design System Guidelines</h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Aegis Command Center visual guidelines, tokens, and style blocks.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-surface-container-low border border-outline-variant rounded-lg p-1 max-w-md">
          {['colors', 'typography', 'layout'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 font-label-caps text-xs rounded transition-all uppercase tracking-wider ${
                activeTab === tab ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'colors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colorTokens.map((token, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-lg border border-outline-variant/30 flex-shrink-0 shadow-lg"
                  style={{ backgroundColor: token.hex }}
                />
                <div>
                  <h4 className="font-bold text-sm text-on-surface">{token.name}</h4>
                  <p className="font-data-mono text-xs text-primary mt-0.5">{token.hex}</p>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">{token.usage}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'typography' && (
          <div className="glass-panel rounded-xl overflow-hidden border border-outline-variant">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant font-label-caps text-[10px] uppercase tracking-wider">
                  <th className="px-gutter py-3 font-semibold">Token</th>
                  <th className="px-gutter py-3 font-semibold">Properties</th>
                  <th className="px-gutter py-3 font-semibold">Sample Specimen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 text-xs">
                {typographyTokens.map((tok, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-highest/20 transition-colors">
                    <td className="px-gutter py-4">
                      <div className="font-bold text-on-surface">{tok.name}</div>
                      <div className="font-data-mono text-[10px] text-on-surface-variant mt-0.5">{tok.font}</div>
                    </td>
                    <td className="px-gutter py-4 text-on-surface-variant">
                      <div>Size: {tok.size}</div>
                      <div className="mt-0.5">Weight: {tok.weight}</div>
                    </td>
                    <td className="px-gutter py-4">
                      <div
                        style={{
                          fontFamily: tok.font === 'JetBrains Mono' ? 'JetBrains Mono' : 'Inter',
                          fontSize: tok.size,
                          fontWeight: tok.weight.startsWith('700') ? '700' : tok.weight.startsWith('600') ? '600' : '400'
                        }}
                        className="text-on-surface truncate max-w-sm"
                      >
                        {tok.sample}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'layout' && (
          <div className="glass-panel rounded-xl overflow-hidden border border-outline-variant">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant font-label-caps text-[10px] uppercase tracking-wider">
                  <th className="px-gutter py-3 font-semibold">Token</th>
                  <th className="px-gutter py-3 font-semibold">Default Value</th>
                  <th className="px-gutter py-3 font-semibold">Structural Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 text-xs">
                {layoutTokens.map((tok, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-highest/20 transition-colors">
                    <td className="px-gutter py-4 font-bold text-on-surface">{tok.token}</td>
                    <td className="px-gutter py-4 font-data-mono text-primary">{tok.value}</td>
                    <td className="px-gutter py-4 text-on-surface-variant leading-relaxed">{tok.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

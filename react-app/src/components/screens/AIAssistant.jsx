import React, { useState, useRef, useEffect } from 'react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: 'user',
      text: 'Analyze the recent crime surge in Bangalore and project trends for the next 5 years based on the FIR database.',
      time: '10:42 AM'
    },
    {
      sender: 'ai',
      text: 'I have analyzed the consolidated Karnataka State Police datasets. The trend analysis indicates a significant shift toward digital infrastructure exploits within the Bangalore Urban perimeter.',
      time: '10:43 AM',
      hasStructuredData: true
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      let aiText = "I have scanned the intelligence databanks. Processing correlation matrices...";
      let hasData = false;
      let dataPayload = null;

      const lowerText = text.toLowerCase();
      if (lowerText.includes('mysore') || lowerText.includes('maysore')) {
        aiText = "Query processed for Mysore District. Recent sweeps indicate a concentration of property offenses near tourist vectors, with a 6% overall reduction in violent crimes.";
        hasData = true;
        dataPayload = {
          location: "Mysore",
          period: "2023-2025",
          driver: "Property Crimes -6%",
          evidence: "District FIR Ledger"
        };
      } else if (lowerText.includes('female') || lowerText.includes('women')) {
        aiText = "Data isolated for female victim demographics (2023-2024 window). Domestic and cyber-stalking reports have shown an upward trend of 11.2%, while public safety index has stabilized.";
        hasData = true;
        dataPayload = {
          location: "State Grid",
          period: "2023-2024",
          driver: "Cyber-Stalking +11.2%",
          evidence: "Victim Assistance Logs"
        };
      } else if (lowerText.includes('late') || lowerText.includes('night') || lowerText.includes('11pm')) {
        aiText = "Temporal sweep completed for nocturnal offenses (11 PM - 4 AM). Anomaly clusters identified in transit corridors and commercial warehouse hubs. Crime concentration centers on logistics nodes.";
        hasData = true;
        dataPayload = {
          location: "Metropolitan Hub",
          period: "Temporal (24H)",
          driver: "Nocturnal Theft +18%",
          evidence: "Incident Telemetry"
        };
      }

      const aiMsg = {
        sender: 'ai',
        text: aiText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasStructuredData: hasData,
        data: dataPayload
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-grow flex flex-col h-[calc(100vh-64px)] mt-16 relative bg-background">
      {/* Welcome banner */}
      <div className="flex justify-center py-6 border-b border-outline-variant/20 bg-surface-container/20">
        <div className="max-w-xl text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full text-secondary">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
            <span className="font-label-caps text-[10px] tracking-widest">SECURE CHANNEL ALPHA-7 ACTIVE</span>
          </div>
          <h2 className="font-headline-sm text-base text-on-surface font-semibold">How can I assist your investigation today?</h2>
        </div>
      </div>

      {/* Messages Viewport */}
      <div className="flex-1 overflow-y-auto p-gutter space-y-6 pb-48 scroll-smooth">
        {messages.map((msg, index) => {
          const isUser = msg.sender === 'user';
          return (
            <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              {isUser ? (
                <div className="max-w-[70%] bg-surface-container-highest p-4 rounded-2xl rounded-tr-none border border-outline-variant">
                  <p className="text-sm text-on-surface leading-relaxed">{msg.text}</p>
                  <div className="flex justify-end mt-1.5 opacity-50">
                    <span className="font-data-mono text-[9px] uppercase tracking-wider">{msg.time} • DELIVERED</span>
                  </div>
                </div>
              ) : (
                <div className="max-w-[85%] space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-base">smart_toy</span>
                    </div>
                    <div className="glass-panel p-5 rounded-2xl rounded-tl-none shadow-xl border border-outline-variant/30 max-w-3xl">
                      <p className="text-sm text-on-surface leading-relaxed mb-4">{msg.text}</p>
                      
                      {msg.hasStructuredData && (
                        <div className="bg-surface-container-lowest/50 border-l-4 border-primary p-4 rounded-r-lg space-y-3">
                          <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-sm">analytics</span>
                            <span className="font-label-caps text-[10px] tracking-wider font-semibold">INTELLIGENCE SUMMARY</span>
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="space-y-0.5">
                              <p className="font-label-caps text-[9px] text-outline uppercase">Location</p>
                              <p className="font-data-mono text-xs text-secondary font-semibold">
                                {msg.data?.location || 'Bangalore'}
                              </p>
                            </div>
                            <div className="space-y-0.5">
                              <p className="font-label-caps text-[9px] text-outline uppercase">Period</p>
                              <p className="font-data-mono text-xs text-on-surface">
                                {msg.data?.period || '2021-2026'}
                              </p>
                            </div>
                            <div className="space-y-0.5">
                              <p className="font-label-caps text-[9px] text-outline uppercase">Primary Driver</p>
                              <p className="font-data-mono text-xs text-error font-semibold">
                                {msg.data?.driver || 'Cybercrime +34%'}
                              </p>
                            </div>
                            <div className="space-y-0.5">
                              <p className="font-label-caps text-[9px] text-outline uppercase">Evidence Base</p>
                              <p className="font-data-mono text-xs text-on-surface">
                                {msg.data?.evidence || 'FIR Database'}
                              </p>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-outline-variant/30">
                            <div className="w-full h-24 bg-background/50 rounded flex items-end p-2 gap-1 overflow-hidden">
                              {/* Simulated Micro-chart */}
                              <div className="w-full bg-primary/20 h-[20%] rounded-t-sm"></div>
                              <div className="w-full bg-primary/20 h-[35%] rounded-t-sm"></div>
                              <div className="w-full bg-primary/40 h-[55%] rounded-t-sm"></div>
                              <div className="w-full bg-primary/40 h-[45%] rounded-t-sm"></div>
                              <div className="w-full bg-primary/60 h-[70%] rounded-t-sm"></div>
                              <div className="w-full bg-primary/80 h-[85%] rounded-t-sm"></div>
                              <div className="w-full bg-primary h-[95%] rounded-t-sm"></div>
                            </div>
                            <p className="font-body-sm text-[10px] text-on-surface-variant mt-1.5 italic text-center">
                              Projected category density trajectory based on historical vectors
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3 mt-4">
                        <button
                          onClick={() => alert("Feedback logged to central neural network.")}
                          className="flex items-center gap-1.5 px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-highest transition-colors font-label-caps text-[9px]"
                        >
                          <span className="material-symbols-outlined text-xs">thumb_up</span>
                          HELPFUL
                        </button>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(msg.text);
                            alert("Copied message to clipboard.");
                          }}
                          className="flex items-center gap-1.5 px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-highest transition-colors font-label-caps text-[9px]"
                        >
                          <span className="material-symbols-outlined text-xs">content_copy</span>
                          COPY DATA
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Sticky Chat Input Panel */}
      <div className="absolute bottom-0 left-0 w-full p-gutter bg-gradient-to-t from-background via-background/90 to-transparent z-10">
        {/* Suggested Queries */}
        <div className="flex flex-wrap gap-2 mb-3 max-w-4xl mx-auto px-4">
          <button
            onClick={() => handleSend("Show crimes in Mysore")}
            className="px-3.5 py-1.5 bg-surface-container-high border border-outline-variant rounded-full text-xs text-on-surface-variant hover:border-primary hover:text-primary transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-xs">search_insights</span>
            Show crimes in Mysore
          </button>
          <button
            onClick={() => handleSend("Filter by female victims")}
            className="px-3.5 py-1.5 bg-surface-container-high border border-outline-variant rounded-full text-xs text-on-surface-variant hover:border-primary hover:text-primary transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-xs">female</span>
            Filter by female victims
          </button>
          <button
            onClick={() => handleSend("Late night incidents (11PM-4AM)")}
            className="px-3.5 py-1.5 bg-surface-container-high border border-outline-variant rounded-full text-xs text-on-surface-variant hover:border-primary hover:text-primary transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-xs">timer</span>
            Late night incidents (11PM-4AM)
          </button>
        </div>

        {/* Input Controls */}
        <div className="max-w-4xl mx-auto bg-surface-container border border-outline-variant rounded-2xl p-2 flex items-end gap-2 shadow-2xl focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <button
            onClick={() => alert("Select document/FIR files to upload for intelligence processing.")}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">attach_file</span>
          </button>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent border-none focus:ring-0 text-sm py-2 px-1 resize-none max-h-36 min-h-[40px] outline-none text-on-surface placeholder:text-outline/50"
            placeholder="Inquire about current crime telemetry..."
            rows={1}
          />
          <div className="flex items-center gap-1.5 pr-1">
            <button
              id="voiceBtn"
              onClick={() => setIsListening(!isListening)}
              className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all ${
                isListening
                  ? 'bg-error/10 text-error animate-pulse'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              <span className="material-symbols-outlined text-base">mic</span>
            </button>
            <button
              onClick={() => handleSend()}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary text-on-primary hover:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all"
            >
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </div>
        </div>
        <p className="text-center mt-2.5 text-[9px] text-outline font-label-caps uppercase tracking-widest opacity-40">
          Authorized Personnel Only • AES-256 Encryption Active
        </p>
      </div>
    </div>
  );
}

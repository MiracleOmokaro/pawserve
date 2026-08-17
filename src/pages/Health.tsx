import { useState, useRef, useEffect } from 'react';
import { Heart, Send, Bot, User, AlertTriangle, Info, Loader2, Mic, MicOff } from 'lucide-react';
import { firstAidGuides } from '../constants/data';
import { config } from '../constants/config';
import { useSpeechmatics } from '../hooks/useSpeechmatics';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  severity?: 'green' | 'yellow' | 'red';
};

const severityConfig = {
  green: { label: 'Low Concern', color: 'bg-accent/10 text-accent border-accent/20' },
  yellow: { label: 'Watch Closely', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  red: { label: 'Seek Vet Now', color: 'bg-red-50 text-red-700 border-red-200' },
};

/** Local first-aid engine used when Gemini is unavailable — still gives useful structured guidance. */
function localFirstAidResponse(prompt: string): { text: string; severity: 'green' | 'yellow' | 'red' } {
  const p = prompt.toLowerCase();

  const redKeys = [
    'unconscious', 'not breathing', 'seizure', 'seizures', 'convulsion', 'bleeding heavily',
    'blood everywhere', 'hit by car', 'poison', 'ate chocolate', 'ate xylitol', 'ate grapes',
    'bloated', 'bloat', 'gagging without vomiting', 'blue gums', 'pale gums', 'collapse',
    'cannot walk', 'paralyzed', 'eye out', 'broken bone', 'open wound',
  ];
  const yellowKeys = [
    'limping', 'limp', 'vomiting', 'diarrhea', 'not eating', 'won\'t eat', 'lethargy',
    'lethargic', 'coughing', 'scratching', 'itching', 'ear', 'limps', 'swollen',
    'fever', 'hot', 'drinking a lot', 'urinating a lot', 'limping after',
  ];

  let severity: 'green' | 'yellow' | 'red' = 'green';
  if (redKeys.some((k) => p.includes(k))) severity = 'red';
  else if (yellowKeys.some((k) => p.includes(k))) severity = 'yellow';

  // Match known guides
  const guide = firstAidGuides.find(
    (g) =>
      p.includes(g.condition.toLowerCase().split(' ')[0]) ||
      g.symptoms.toLowerCase().split(/[,.]/).some((s) => s.trim().length > 3 && p.includes(s.trim()))
  );

  if (guide) {
    return {
      severity: (guide.severity as 'green' | 'yellow' | 'red') || severity,
      text: `**${guide.condition}** — here's calm first-aid guidance based on what you described.\n\n**What this often looks like:** ${guide.symptoms}\n\n**What you can do now:**\n${guide.firstAidSteps}\n\n**When to see a vet:** ${guide.whenToSeeVet}\n\nI'm an AI-assisted helper, not a veterinarian. If your gut says this is serious, trust that and go.`,
    };
  }

  if (severity === 'red') {
    return {
      severity: 'red',
      text: `Based on what you described, this may need **urgent veterinary care**.\n\n**Do this now:**\n1. Keep your dog calm and warm (or cool if heat is involved) — avoid forcing food or water if they are collapsing.\n2. Note the time symptoms started and anything they may have eaten or been exposed to.\n3. Call your nearest emergency vet and go — do not wait for “one more hour” if breathing, consciousness, severe bleeding, seizures, or extreme weakness are involved.\n4. If poisoning is possible, bring the packaging if you can do so safely.\n\n**Why urgency:** Dogs cannot tell us how bad pain or internal injury is. Red-flag signs are treated as emergencies until a vet says otherwise.\n\nThis is guidance, not a diagnosis. Please seek professional care immediately.`,
    };
  }

  if (severity === 'yellow') {
    return {
      severity: 'yellow',
      text: `Thanks for describing that carefully. What you shared sounds like something to **watch closely** — not always an instant emergency, but not something to ignore.\n\n**Practical next steps:**\n1. Note when it started, whether it is getting worse, and any appetite / energy / bathroom changes.\n2. Check gums (healthy gums are usually pink, not white/blue/very pale), breathing rate at rest, and whether they can put weight on all legs.\n3. Offer water; avoid forcing food if they are nauseous.\n4. Limit hard play and jumps until you know more.\n5. Contact your regular vet today or tomorrow if it persists, worsens, or your dog seems “not themselves.”\n\n**Go sooner if:** sudden collapse, repeated vomiting, blood in stool/vomit, difficulty breathing, or refusal to put any weight on a limb after trauma.\n\nI'm here to help you think clearly — a licensed vet still owns the diagnosis.`,
    };
  }

  return {
    severity: 'green',
    text: `I heard you. From what you described, this may be in a **lower-urgency** range — still worth mindful observation.\n\n**Gentle plan:**\n1. Keep a simple log: time, what you saw, eating, drinking, energy, stools.\n2. Maintain normal routines where possible; avoid new treats or table scraps today.\n3. Recheck in a few hours. Improvement is reassuring; worsening means escalate.\n4. If you are unsure, a nurse line or same-day clinic consult is never “overreacting.”\n\n**Remember:** You know your dog's baseline. If something feels off beyond this description, trust that instinct.\n\nThis is informational first-aid style guidance, not a veterinary diagnosis.`,
  };
}

export default function Health() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm PawServe's AI health assistant. Describe your dog's symptoms and I'll give you first aid advice and tell you how urgently you should see a vet. **Note:** I'm not a substitute for professional veterinary care.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const prevFinalText = useRef('');

  const {
    state: voiceState,
    interimText,
    finalText,
    error: voiceError,
    startListening,
    stopListening,
  } = useSpeechmatics();

  useEffect(() => {
    if (finalText && finalText !== prevFinalText.current) {
      const newText = finalText.slice(prevFinalText.current.length);
      if (newText) {
        setInput((prev) => prev + (prev && !prev.endsWith(' ') && !newText.startsWith(' ') ? ' ' : '') + newText);
      }
      prevFinalText.current = finalText;
    }
  }, [finalText]);

  const handleVoiceToggle = () => {
    if (voiceState === 'listening') stopListening();
    else startListening();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      let text: string | null = null;

      // Try Gemini via Supabase edge function first
      try {
        const res = await fetch(`${config.supabase.url}/functions/v1/gemini-chat`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${config.supabase.anonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: userMessage }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data?.text && String(data.text).trim()) {
            text = String(data.text);
          }
        }
      } catch {
        // fall through to local engine
      }

      if (!text) {
        const local = localFirstAidResponse(userMessage);
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: local.text, severity: local.severity },
        ]);
        return;
      }

      const severity = text.includes('[RED]')
        ? ('red' as const)
        : text.includes('[YELLOW]')
          ? ('yellow' as const)
          : ('green' as const);

      const cleanResponse = text.replace(/\[(GREEN|YELLOW|RED)\]/g, '').trim();
      setMessages((prev) => [...prev, { role: 'assistant', content: cleanResponse, severity }]);
    } catch {
      const local = localFirstAidResponse(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: local.text, severity: local.severity },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Symptom Checker</h1>
            <p className="text-foreground/60 max-w-lg mx-auto">
              Describe your dog's symptoms and get AI-powered first aid advice and severity guidance.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden mb-4">
            <div className="h-[400px] sm:h-[500px] overflow-y-auto p-4 sm:p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-accent" />
                    </div>
                  )}
                  <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-1' : ''}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-secondary text-white rounded-tr-md'
                          : 'bg-muted text-foreground rounded-tl-md'
                      }`}
                    >
                      <div
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: msg.content
                            .replace(/\n/g, '<br/>')
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                        }}
                      />
                    </div>
                    {msg.severity && (
                      <div
                        className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                          severityConfig[msg.severity].color
                        }`}
                      >
                        <AlertTriangle className="w-3 h-3" />
                        {severityConfig[msg.severity].label}
                      </div>
                    )}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-accent" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3">
                    <Loader2 className="w-5 h-5 text-foreground/40 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-border p-4">
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Describe your dog's symptoms..."
                  rows={1}
                  className="flex-1 px-4 py-3 border border-border rounded-xl text-sm focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all duration-150 resize-none"
                  aria-label="Describe symptoms"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleVoiceToggle}
                    disabled={voiceState === 'connecting'}
                    className={`p-3 rounded-xl border transition-all duration-150 active:scale-[0.97] cursor-pointer disabled:cursor-not-allowed ${
                      voiceState === 'listening'
                        ? 'bg-destructive/10 border-destructive/30 text-destructive animate-pulse shadow-lg shadow-destructive/20'
                        : voiceState === 'connecting'
                          ? 'bg-muted border-border text-foreground/40'
                          : 'bg-card border-border text-foreground/60 hover:text-foreground hover:border-foreground/30'
                    }`}
                    aria-label={voiceState === 'listening' ? 'Stop voice input' : 'Start voice input'}
                    aria-pressed={voiceState === 'listening'}
                  >
                    {voiceState === 'connecting' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : voiceState === 'listening' ? (
                      <MicOff className="w-4 h-4" />
                    ) : (
                      <Mic className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="px-5 py-3 bg-secondary text-white rounded-xl hover:bg-secondary/90 disabled:bg-muted disabled:text-foreground/30 transition-all duration-150 active:scale-[0.97] cursor-pointer disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {voiceState === 'listening' && (
                <div className="mt-2 flex items-center gap-2 text-xs text-foreground/60" aria-live="polite">
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                  <span>Listening{interimText ? ': ' : '...'}</span>
                  {interimText && <span className="italic text-foreground/40 truncate max-w-[200px]">{interimText}</span>}
                </div>
              )}

              {voiceError && (
                <div className="mt-2 text-xs text-destructive flex items-center gap-1.5" role="alert">
                  <AlertTriangle className="w-3 h-3" />
                  <span>{voiceError}</span>
                </div>
              )}

              <p className="text-xs text-foreground/40 mt-2">
                Responses are for informational purposes only. Always consult a licensed veterinarian.
              </p>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
            <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-accent" />
              First Aid Guides
            </h2>
            <p className="text-sm text-foreground/60 mb-4">Quick reference for common dog emergencies.</p>
            <div className="space-y-2">
              {firstAidGuides.map((guide) => (
                <div key={guide.id}>
                  <button
                    onClick={() => setSelectedGuide(selectedGuide === guide.id ? null : guide.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                      selectedGuide === guide.id
                        ? 'bg-accent/10 text-accent'
                        : 'bg-muted text-foreground/70 hover:bg-muted/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{guide.condition}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          guide.severity === 'red'
                            ? 'bg-destructive'
                            : guide.severity === 'yellow'
                              ? 'bg-amber-500'
                              : 'bg-accent'
                        }`}
                      />
                    </div>
                  </button>
                  {selectedGuide === guide.id && (
                    <div className="px-4 py-3 mt-1 text-sm text-foreground/70 space-y-2">
                      <div>
                        <span className="font-medium text-foreground">Symptoms:</span>
                        <p>{guide.symptoms}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">First Aid:</span>
                        <p className="whitespace-pre-line">{guide.firstAidSteps}</p>
                      </div>
                      <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-800 text-xs">{guide.whenToSeeVet}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent/5 rounded-xl border border-accent/10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Emergency?</p>
                  <p className="text-xs text-foreground/60">
                    If your dog is unconscious, having seizures, or has severe bleeding, call your nearest emergency vet immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

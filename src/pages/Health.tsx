import { useState, useRef, useEffect } from 'react';
import { Heart, Send, Bot, User, AlertTriangle, Info, Loader2, Mic, MicOff } from 'lucide-react';
import { firstAidGuides } from '../constants/data';
import { config } from '../constants/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
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

export default function Health() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm PawServe's AI health assistant. Describe your dog's symptoms and I'll give you first aid advice and tell you how urgently you should see a vet. **Note:** I'm not a substitute for professional veterinary care.",
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

  // Append final transcribed text to input when it changes
  useEffect(() => {
    if (finalText && finalText !== prevFinalText.current) {
      const newText = finalText.slice(prevFinalText.current.length);
      if (newText) {
        setInput(prev => prev + (prev && !prev.endsWith(' ') && !newText.startsWith(' ') ? ' ' : '') + newText);
      }
      prevFinalText.current = finalText;
    }
  }, [finalText]);

  // Clear voice error after a timeout
  useEffect(() => {
    if (voiceError) {
      const timer = setTimeout(() => {}, 5000);
      return () => clearTimeout(timer);
    }
  }, [voiceError]);

  const handleVoiceToggle = () => {
    if (voiceState === 'listening') {
      stopListening();
    } else {
      startListening();
    }
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
      if (config.gemini.apiKey && config.gemini.apiKey !== 'YOUR_GEMINI_API_KEY_HERE') {
        const genAI = new GoogleGenerativeAI(config.gemini.apiKey);
        const model = genAI.getGenerativeModel({ model: config.gemini.model });

        const prompt = `You are a veterinary first aid assistant for a dog health platform called PawServe. 
A dog owner describes these symptoms: "${userMessage}"

Provide a helpful response in this format:
1. **Possible Causes** — brief list
2. **Immediate First Aid** — clear steps
3. **When to See a Vet** — clear guidance

End with a severity assessment line: 
- [GREEN] if mild, can monitor at home
- [YELLOW] if needs attention soon
- [RED] if emergency, go to vet now

Be compassionate but clear. Never diagnose definitively — always recommend consulting a vet for serious concerns.`;

        const result = await model.generateContent(prompt);
        const response = result.response.text();

        const severity = response.includes('[RED]') ? 'red' as const
          : response.includes('[YELLOW]') ? 'yellow' as const
          : 'green' as const;

        const cleanResponse = response.replace(/\[(GREEN|YELLOW|RED)\]/g, '').trim();

        setMessages((prev) => [...prev, { role: 'assistant', content: cleanResponse, severity }]);
      } else {
        // Demo mode — show a canned response
        const demoResponses = [
          {
            severity: 'yellow' as const,
            content: `**Thanks for telling me about your dog's symptoms!**

Since I'm in demo mode, here's general guidance:

**Possible Causes:** Could be related to diet, activity, or environment.

**Immediate First Aid:**
1. Keep your dog calm and comfortable
2. Monitor for any changes
3. Ensure fresh water is available

**When to See a Vet:** If symptoms persist for more than 24 hours, or if they worsen, please consult a veterinarian.

Remember to set up your Gemini API key in the config to get AI-powered responses!`,
          },
        ];

        const demo = demoResponses[0];
        setMessages((prev) => [...prev, { role: 'assistant', content: demo.content, severity: demo.severity }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm sorry, I couldn't process that request. Please try again or check that your API key is configured correctly.",
        },
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

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chat Area */}
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

          {/* Chat Messages */}
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
                      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>
                    {msg.severity && (
                      <div className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                        severityConfig[msg.severity].color
                      }`}>
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

            {/* Input */}
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
                  {/* Microphone button */}
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

                  {/* Send button */}
                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="px-5 py-3 bg-secondary text-white rounded-xl hover:bg-secondary/90 disabled:bg-muted disabled:text-foreground/30 transition-all duration-150 active:scale-[0.97] cursor-pointer disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Voice state indicators */}
              {voiceState === 'listening' && (
                <div className="mt-2 flex items-center gap-2 text-xs text-foreground/60 animate-fade-in" aria-live="polite" aria-atomic="true">
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                  <span>Listening{interimText ? ': ' : '...'}</span>
                  {interimText && (
                    <span className="italic text-foreground/40 truncate max-w-[200px] sm:max-w-[400px]">
                      {interimText}
                    </span>
                  )}
                </div>
              )}

              {voiceState === 'connecting' && (
                <div className="mt-2 flex items-center gap-2 text-xs text-foreground/60 animate-fade-in" aria-live="polite">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span>Connecting to microphone...</span>
                </div>
              )}

              {voiceError && (
                <div className="mt-2 text-xs text-destructive flex items-center gap-1.5 animate-fade-in" role="alert">
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

        {/* Sidebar — First Aid Guides */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
            <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-accent" />
              First Aid Guides
            </h2>
            <p className="text-sm text-foreground/60 mb-4">
              Quick reference for common dog emergencies.
            </p>
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
                      <span className={`w-2 h-2 rounded-full ${
                        guide.severity === 'red' ? 'bg-destructive' :
                        guide.severity === 'yellow' ? 'bg-amber-500' : 'bg-accent'
                      }`} />
                    </div>
                  </button>
                  {selectedGuide === guide.id && (
                    <div className="px-4 py-3 mt-1 text-sm text-foreground/70 space-y-2 animate-fade-in">
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
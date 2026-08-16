import { useState, useRef, useCallback } from 'react';
import { config } from '../constants/config';

export type TranscriptionState = 'idle' | 'connecting' | 'listening' | 'error';

export interface UseSpeechmaticsReturn {
  state: TranscriptionState;
  interimText: string;
  finalText: string;
  error: string | null;
  startListening: () => Promise<void>;
  stopListening: () => void;
}

const SAMPLE_RATE = 16000;
const SPEECHMATICS_WS_URL = 'wss://eu.rt.speechmatics.com/v2';

export function useSpeechmatics(): UseSpeechmaticsReturn {
  const [state, setState] = useState<TranscriptionState>('idle');
  const [interimText, setInterimText] = useState('');
  const [finalText, setFinalText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const wsRef = useRef<WebSocket | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);

  const cleanup = useCallback(() => {
    wsRef.current?.close();
    wsRef.current = null;
    processorRef.current?.disconnect();
    processorRef.current = null;
    streamRef.current?.getTracks().forEach(t => t.stop());
    streamRef.current = null;
    if (audioContextRef.current?.state !== 'closed') {
      audioContextRef.current?.close();
    }
    audioContextRef.current = null;
  }, []);

  const startListening = useCallback(async () => {
    cleanup();
    setError(null);
    setInterimText('');
    setFinalText('');
    setState('connecting');

    try {
      // 1. Fetch temporary Speechmatics token from edge function
      const tokenRes = await fetch(
        `${config.supabase.url}/functions/v1/speechmatics-token`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${config.supabase.anonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!tokenRes.ok) {
        const errData = await tokenRes.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to get transcription token');
      }

      const { token } = await tokenRes.json();

      // 2. Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: SAMPLE_RATE,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      streamRef.current = stream;

      // 3. Open WebSocket to Speechmatics
      const ws = new WebSocket(`${SPEECHMATICS_WS_URL}?jwt=${token}`);
      wsRef.current = ws;

      ws.onopen = () => {
        // Send StartRecognition message
        const startMsg = {
          message: 'StartRecognition',
          audio_format: {
            type: 'raw',
            encoding: 'pcm_s16le',
            sample_rate: SAMPLE_RATE,
          },
          transcription_config: {
            language: 'en',
            max_delay: 2,
            enable_partials: true,
          },
        };
        ws.send(JSON.stringify(startMsg));

        // 4. Start capturing audio via AudioContext
        const audioContext = new AudioContext({ sampleRate: SAMPLE_RATE });
        audioContextRef.current = audioContext;

        const source = audioContext.createMediaStreamSource(stream);
        const processor = audioContext.createScriptProcessor(4096, 1, 1);
        processorRef.current = processor;

        source.connect(processor);
        processor.connect(audioContext.destination);

        processor.onaudioprocess = (e) => {
          if (ws.readyState !== WebSocket.OPEN) return;

          const input = e.inputBuffer.getChannelData(0);
          // Convert Float32 to PCM16
          const pcm16 = new Int16Array(input.length);
          for (let i = 0; i < input.length; i++) {
            const s = Math.max(-1, Math.min(1, input[i]));
            pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
          }
          ws.send(pcm16.buffer);
        };

        setState('listening');
      };

      ws.onmessage = (e) => {
        try {
          const msg = JSON.parse(e.data);
          if (msg.message === 'AddPartialTranscript') {
            const text = msg.results?.map((r: any) => r.alternatives?.[0]?.content || '').join(' ') || '';
            setInterimText(text);
          } else if (msg.message === 'AddTranscript') {
            const text = msg.results?.map((r: any) => r.alternatives?.[0]?.content || '').join(' ') || '';
            if (text) {
              setFinalText(prev => prev + (prev ? ' ' : '') + text);
            }
            setInterimText('');
          } else if (msg.message === 'EndOfTranscript') {
            setState('idle');
          }
        } catch {
          // Ignore parse errors
        }
      };

      ws.onerror = () => {
        setError('WebSocket connection failed');
        setState('error');
        cleanup();
      };

      ws.onclose = () => {
        setState(prev => prev === 'listening' ? 'idle' : prev);
      };

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to start voice input';
      setError(message);
      setState('error');
      cleanup();
    }
  }, [cleanup]);

  const stopListening = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ message: 'EndOfStream', last_audio: true }));
    }
    cleanup();
    setState('idle');
  }, [cleanup]);

  return {
    state,
    interimText,
    finalText,
    error,
    startListening,
    stopListening,
  };
}
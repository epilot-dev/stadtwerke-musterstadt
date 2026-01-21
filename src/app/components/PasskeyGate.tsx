import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { PASSKEY, storage, STORAGE_KEY } from '@/utils';

interface PasskeyGateProps {
  children: React.ReactNode;
}

/**
 * Check storage synchronously for initial state.
 * Returns true if already verified, false otherwise.
 */
function getInitialVerificationState(): boolean {
  const stored = storage.getItem(STORAGE_KEY);
  return stored === 'true';
}

export function PasskeyGate({ children }: PasskeyGateProps) {
  const [isVerified, setIsVerified] = useState<boolean>(getInitialVerificationState);
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (passkey === PASSKEY) {
      storage.setItem(STORAGE_KEY, 'true');
      setIsVerified(true);
    } else {
      setError('Ungültiger Zugangscode');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  // Show content if verified
  if (isVerified) {
    return <>{children}</>;
  }

  // Show passkey gate
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#deff03]/10 rounded-full blur-[120px] pointer-events-none" />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            x: isShaking ? [0, -10, 10, -10, 10, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            x: { duration: 0.4 },
          }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo variant="dark" className="w-48" />
          </div>

          {/* Lock icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Geschützter Bereich</h2>
            <p className="text-gray-500">Bitte geben Sie den Zugangscode ein, um fortzufahren.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Zugangscode</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={passkey}
                onChange={(e) => {
                  setPasskey(e.target.value);
                  setError('');
                }}
                className={`h-12 rounded-xl border-gray-200 bg-gray-50 text-center text-lg tracking-widest ${
                  error ? 'border-red-500 focus:ring-red-500' : ''
                }`}
                autoFocus
              />
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </motion.div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#222222] hover:bg-black text-white font-bold text-lg rounded-full group"
            >
              Zugang freischalten
              <ArrowRight className="ml-2 w-5 h-5 group-hover:text-[#deff03] transition-colors" />
            </Button>
          </form>

          {/* Footer hint */}
          <p className="text-center text-gray-400 text-xs mt-6">
            Wenden Sie sich an Ihren Administrator, wenn Sie keinen Zugangscode haben.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useRaffle } from '../../hooks/useRaffle';
import { Loader2, Zap } from 'lucide-react';

export const CreateRaffle = () => {
  const { createRaffle, loading, isConnected } = useRaffle();
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!price || !duration) return;
    try {
      await createRaffle(price, Number(duration));
      setPrice('');
      setDuration('');
    } catch (err) {
      console.error(err);
    }
  };

  if (!isConnected) return null;

  return (
    <div className="w-full max-w-xl mx-auto mb-16 mt-8">
      <div className="glass-panel rounded-3xl p-1">
        <div className="bg-black/40 rounded-[22px] p-6">
          <div className="flex items-center gap-2 mb-6 text-blue-400">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-mono uppercase tracking-wider">Initialize Protocol</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-slate-400 ml-1">Ticket Price (ETH)</label>
                <input
                  type="number"
                  step="0.0001"
                  placeholder="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="glass-input w-full rounded-xl py-3 px-4 text-lg font-mono placeholder:text-slate-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-400 ml-1">Duration (Mins)</label>
                <input
                  type="number"
                  placeholder="10"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="glass-input w-full rounded-xl py-3 px-4 text-lg font-mono placeholder:text-slate-600"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Launch Raffle Module'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
"use client"

import { useState } from 'react';
import { useRaffle } from '../../hooks/useRaffle';
import { Loader2, Plus, Clock, Ticket } from 'lucide-react';

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
      alert("Failed to create raffle");
    }
  };

  if (!isConnected) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5 text-blue-500" />
          Create New Raffle
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          {/* Price Input */}
          <div className="flex-1 relative">
            <Ticket className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
            <input
              type="number"
              step="0.001"
              placeholder="Ticket Price (ETH)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Duration Input */}
          <div className="flex-1 relative">
            <Clock className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
            <input
              type="number"
              placeholder="Duration (Minutes)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-6 rounded-xl transition-all flex items-center gap-2 justify-center min-w-[140px]"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Launch'}
          </button>
        </form>
      </div>
    </div>
  );
};
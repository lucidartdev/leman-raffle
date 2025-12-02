'use client';

import React from 'react';
import { useRaffle, RaffleItem } from '../../hooks/useRaffle';
import { Clock, Ticket } from 'lucide-react';

export const RaffleList = () => {
  const { raffles, buyTicket, loading, isConnected } = useRaffle();

  if (raffles.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-4">
          <Ticket className="w-8 h-8 text-slate-500" />
        </div>
        <p className="text-slate-500">No active signals found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {raffles.map((raffle: RaffleItem) => (
        <div 
          key={raffle.id}
          className={`group relative glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20`}
        >
          {/* Active Status Glow Line */}
          <div className={`absolute top-0 left-0 w-full h-1 ${
            raffle.isActive 
              ? 'bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 animate-pulse' 
              : 'bg-slate-700'
          }`} />

          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-xs text-slate-500 border border-white/10 px-2 py-1 rounded">
                ID: {raffle.id.toString().padStart(3, '0')}
              </span>
              {raffle.isActive ? (
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  LIVE
                </span>
              ) : (
                <span className="text-xs text-slate-500 font-medium bg-slate-800/50 px-3 py-1 rounded-full">
                  ENDED
                </span>
              )}
            </div>

            <div className="text-center py-4 mb-4 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-4xl font-bold text-white relative z-10 font-mono tracking-tighter">
                {raffle.prize} <span className="text-lg text-slate-400">ETH</span>
              </h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Prize Pool</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 flex items-center gap-2">
                  <Ticket className="w-4 h-4" /> Entry
                </span>
                <span className="font-mono text-white">{raffle.price} ETH</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Ends
                </span>
                <span className="font-mono text-slate-300">
                  {new Date(raffle.endTime * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            </div>

            {raffle.isActive ? (
              <button
                onClick={() => buyTicket(raffle.id, raffle.price)}
                disabled={!isConnected || loading}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] disabled:opacity-50 disabled:shadow-none"
              >
                {loading ? 'Processing...' : 'Enter Draw'}
              </button>
            ) : (
              <button disabled className="w-full mt-6 bg-white/5 text-slate-500 font-medium py-3 rounded-xl cursor-not-allowed">
                Winner: {raffle.creator.slice(0,6)}...
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
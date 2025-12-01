import React from 'react';
import { useRaffle, RaffleItem } from '../../hooks/useRaffle';
import { Timer, Trophy, Wallet } from 'lucide-react';

export const RaffleList = () => {
  const { raffles, buyTicket, loading, isConnected } = useRaffle();

  // Helper to format address (e.g., 0x123...abc)
  const shortenAddress = (addr: string) => 
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  if (raffles.length === 0) {
    return (
      <div className="text-center text-slate-500 py-12">
        <p>No active raffles found. Be the first to create one!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {raffles.map((raffle: RaffleItem) => (
        <div 
          key={raffle.id}
          className={`relative group bg-slate-900/50 backdrop-blur-md border ${
            raffle.isActive ? 'border-white/10' : 'border-red-900/30 opacity-75'
          } rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300`}
        >
          {/* Header */}
          <div className="p-6 pb-4 border-b border-white/5">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded">
                #{raffle.id}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                raffle.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {raffle.isActive ? 'Active' : 'Ended'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {raffle.prize} ETH
            </h3>
            <p className="text-sm text-slate-400">Prize Pool</p>
          </div>

          {/* Details */}
          <div className="p-6 pt-4 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <Wallet className="w-4 h-4" />
                <span>Ticket Price</span>
              </div>
              <span className="font-semibold text-white">{raffle.price} ETH</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <Trophy className="w-4 h-4" />
                <span>Creator</span>
              </div>
              <span className="font-mono text-blue-400">
                {shortenAddress(raffle.creator)}
              </span>
            </div>

            {/* Action Button */}
            {raffle.isActive ? (
              <button
                onClick={() => buyTicket(raffle.id, raffle.price)}
                disabled={!isConnected || loading}
                className="w-full mt-4 bg-white text-slate-950 font-bold py-3 rounded-xl hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Processing...' : 'Buy Ticket'}
              </button>
            ) : (
              <div className="w-full mt-4 bg-slate-800 text-slate-500 font-semibold py-3 rounded-xl text-center">
                Winner Selected
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
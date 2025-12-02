import React from 'react';

export const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500 blur-md opacity-50 rounded-full"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
              L
            </div>
          </div>
          <span className="font-bold text-lg tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            LemanRaffle
          </span>
        </div>

        {/* Reown Connect Button */}
        <div className="scale-90 origin-right">
          <appkit-button />
        </div>
        
      </nav>
    </div>
  );
};
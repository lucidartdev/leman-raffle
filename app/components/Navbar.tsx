import React from 'react';

export const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
            L
          </div>
          <span className="font-bold text-xl tracking-tight">LemanRaffle</span>
        </div>

        <appkit-button />
        
      </div>
    </nav>
  );
};
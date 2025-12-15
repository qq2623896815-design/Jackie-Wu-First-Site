import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Animation delay in ms
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
        rounded-2xl 
        animate-slide-up
        hover:border-white/20 transition-colors duration-300
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Inner sheen effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
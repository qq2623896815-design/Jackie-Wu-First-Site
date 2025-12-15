import React from 'react';
import { siteConfig } from './constants';
import Background from './components/Background';
import GlassCard from './components/GlassCard';
import { Activity, Clock, ExternalLink, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <>
      <Background />
      
      <main className="min-h-screen w-full max-w-2xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-6">
        
        {/* 1. Header & Profile Section */}
        <GlassCard delay={100} className="p-8 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl relative z-10">
              <img 
                src={siteConfig.avatar} 
                alt={siteConfig.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            {/* Glow behind avatar */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                {siteConfig.name}
              </h1>
              <p className="text-cyan-200/80 font-medium text-lg mt-1">{siteConfig.role}</p>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-lg">
              {siteConfig.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-2">
              {siteConfig.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* 2. Status Section */}
        <GlassCard delay={200} className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400 shrink-0">
              <Activity size={20} />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-1">
                Current Status
              </h2>
              <p className="text-lg text-white font-medium">
                {siteConfig.status}
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs text-white/30">
                <Clock size={12} />
                <span>{siteConfig.statusTime}</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* 3. Works Gallery */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-semibold text-white/90 pl-2 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Selected Works
            <span className="text-white/20 text-sm font-normal">({siteConfig.works.length})</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.works.map((work, index) => (
              <GlassCard 
                key={work.id} 
                delay={400 + (index * 100)}
                className="group cursor-pointer hover:bg-white/10 transition-all duration-300"
              >
                <a href={work.link} className="block p-4">
                  <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 relative bg-black/20">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="text-white" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-cyan-200/70 font-medium mb-1 uppercase tracking-wide">
                        {work.category}
                      </p>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                        {work.title}
                      </h3>
                    </div>
                    <ArrowRight size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </GlassCard>
            ))}
          </div>
        </div>

        <footer className="py-8 text-center text-white/20 text-sm animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </footer>

      </main>
    </>
  );
};

export default App;
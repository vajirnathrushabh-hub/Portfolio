import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const handleShortcutClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-dark py-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-brand-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-brand-pink flex items-center justify-center text-black">
                <Sparkles className="h-4 w-4 stroke-[2.5]" />
              </div>
              <span className="font-display font-black text-lg text-white uppercase italic tracking-tighter">
                RUSHABH<span className="text-brand-pink">.</span>
              </span>
            </div>
            <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
              Empowering global brands and content creators to establish dominant visual consistency, design highly responsive web applications, and optimize ad metrics.
            </p>
          </div>

          {/* Quick shortcuts */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400 font-medium">
            <a
              href="#about"
              onClick={(e) => handleShortcutClick(e, '#about')}
              className="hover:text-white transition-colors"
            >
              About Me
            </a>
            <a
              href="#services"
              onClick={(e) => handleShortcutClick(e, '#services')}
              className="hover:text-white transition-colors"
            >
              Services Offered
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleShortcutClick(e, '#portfolio')}
              className="hover:text-white transition-colors"
            >
              Portfolio Work
            </a>
            <a
              href="#instagram"
              onClick={(e) => handleShortcutClick(e, '#instagram')}
              className="hover:text-white transition-colors"
            >
              Instagram Feed
            </a>
            <a
              href="#blog"
              onClick={(e) => handleShortcutClick(e, '#blog')}
              className="hover:text-white transition-colors"
            >
              Blog Insights
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-gray-500 font-mono">
          <p>© 2026 Rushabh Vajirnath. All Rights Reserved.</p>
          <p>
            Crafted with{' '}
            <span className="text-brand-pink" title="Passion">
              ♥
            </span>{' '}
            for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

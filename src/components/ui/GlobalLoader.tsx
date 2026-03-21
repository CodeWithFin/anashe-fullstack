"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const GlobalLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9900] bg-anashe-bg flex flex-col items-center justify-center gap-8 transition-all duration-1000">
      <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-3xl lg:text-5xl tracking-[0.3em] font-extralight text-anashe-fg">Anashe</h1>
      </div>
      <div className="w-48 h-px bg-anashe-fg/10 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-anashe-lila to-anashe-mint animate-bar-grow"></div>
      </div>
      <div className="text-[10px] tracking-[0.2em] uppercase text-anashe-fg/50 animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
        Be your best version
      </div>
    </div>
  );
};

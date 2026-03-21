"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 768) return;

    setIsVisible(true);
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(render);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={dotRef}
        className={cn(
          "fixed top-0 left-0 w-1 h-1 bg-anashe-fg rounded-full z-[9999] pointer-events-none transition-transform duration-100 ease-out",
          isHovered && "scale-[3] bg-anashe-lila"
        )}
      />
      <div 
        ref={ringRef}
        className={cn(
          "fixed top-0 left-0 w-8 h-8 border border-anashe-fg/30 rounded-full z-[9998] pointer-events-none transition-all duration-300 ease-out",
          isHovered && "w-12 h-12 bg-anashe-fg/5 border-anashe-fg/20"
        )}
      />
    </>
  );
};

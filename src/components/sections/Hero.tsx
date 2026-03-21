"use client";

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const slides = [
  { 
    title: "Face", 
    em: "Luminous", 
    sub: "Authentic Korean skincare for radiant skin.", 
    img: "https://imagedelivery.net/6HwnxsMACp9LGRV7S6ZRBA/luno.ao/2025/02/cuidados-facial-luno-ao.jpg/w=1920,q=85",
    category: "Facial Skincare"
  },
  { 
    title: "Body", 
    em: "Nourished", 
    sub: "Botanical body rituals for incomparable softness.", 
    img: "https://imagedelivery.net/6HwnxsMACp9LGRV7S6ZRBA/luno.ao/2025/02/cuidados-do-corpo-luno-ao.jpg/w=1920,q=85",
    category: "Body Care"
  },
  { 
    title: "Protection", 
    em: "Total", 
    sub: "SPF50+ specifically formulated for hot climates.", 
    img: "https://imagedelivery.net/6HwnxsMACp9LGRV7S6ZRBA/luno.ao/2025/02/protetor-solar-luno-ao.jpg/w=1920,q=85",
    category: "Sunscreen"
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].img})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-anashe-bg/95 via-anashe-bg/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 px-8 lg:px-20 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-3 text-xs tracking-widest uppercase text-anashe-lila font-normal mb-6"
        >
          <Icon icon="solar:stars-linear" /> K-Beauty
        </motion.div>
        
        <motion.h1 
          key={`title-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-5xl lg:text-7xl font-extralight tracking-tight leading-[1.1] mb-6 text-anashe-fg"
        >
          {slides[current].title}<br />
          <em className="text-anashe-peach not-italic font-extralight">{slides[current].em}</em>
        </motion.h1>

        <motion.p 
          key={`sub-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-sm lg:text-base text-anashe-fg/60 leading-relaxed max-w-sm mb-10 font-light"
        >
          {slides[current].sub}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-anashe-fg text-anashe-bg text-xs font-normal tracking-widest uppercase rounded hover:bg-anashe-lila hover:-translate-y-0.5 transition-all duration-300">
            Explore Skincare
          </button>
          <a href="#ritual" className="inline-flex items-center gap-2 text-xs font-normal tracking-widest uppercase text-anashe-fg/60 hover:text-anashe-fg transition-colors group">
            View Rituals <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-4">
        {slides.map((s, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "text-[10px] tracking-widest uppercase font-normal py-1 px-3 border-l-2 transition-all text-left whitespace-nowrap",
              current === i ? "border-anashe-lila text-anashe-fg" : "border-transparent text-anashe-fg/30 hover:text-anashe-fg/70"
            )}
          >
            {s.category}
          </button>
        ))}
      </div>

      <div className="absolute bottom-12 left-8 lg:left-20 z-10 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-0.5 rounded-full transition-all duration-300",
              current === i ? "w-8 bg-anashe-lila" : "w-4 bg-anashe-fg/20"
            )}
          />
        ))}
      </div>
    </section>
  );
};

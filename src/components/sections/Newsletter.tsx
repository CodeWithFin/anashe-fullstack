"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Newsletter = () => {
  return (
    <section className="py-32 px-6 lg:px-20 bg-gradient-to-br from-[#252726] to-[#1a1b1a] text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Icon icon="solar:stars-bold" className="text-3xl text-anashe-lila mb-6 block mx-auto animate-star-pulse" />
        <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-4">
          Your skin deserves<br /><em className="text-anashe-peach not-italic">the best of Korea.</em>
        </h2>
        <p className="text-sm text-white/50 font-light max-w-md mx-auto mb-10">
          Receive our K-Beauty Routine Guide and exclusive news before they hit the store.
        </p>
        
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Your best email" 
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-sm text-white focus:outline-none focus:border-anashe-lila/50 transition-colors placeholder:text-white/30"
          />
          <button className="bg-anashe-lila text-[#212322] text-xs font-normal tracking-widest uppercase rounded-lg px-8 py-4 hover:bg-white transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
};

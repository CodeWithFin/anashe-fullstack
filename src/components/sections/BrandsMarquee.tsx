"use client";

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "COSRX", "BEAUTY OF JOSEON", "LANEIGE", "SOME BY MI", 
  "SKIN1004", "PURITO", "ANUA", "VT COSMETICS"
];

export const BrandsMarquee = () => {
  return (
    <div className="relative bg-[#1a1b1a] border-y border-white/10 overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1a1b1a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1a1b1a] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max">
        {[...Array(2)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center"
          >
            {brands.map((brand) => (
              <div 
                key={brand} 
                className="px-10 text-xl tracking-tighter text-anashe-fg/30 hover:text-anashe-fg transition-colors cursor-pointer border-r border-white/10 whitespace-nowrap"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

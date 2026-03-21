"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: "Facial Skincare",
    count: "+80 products",
    img: "https://imagedelivery.net/6HwnxsMACp9LGRV7S6ZRBA/luno.ao/2025/02/cuidados-facial-luno-ao.jpg/w=640,h=961",
    delay: 0.1
  },
  {
    title: "Facial Cleansing",
    count: "+30 products",
    img: "https://imagedelivery.net/6HwnxsMACp9LGRV7S6ZRBA/luno.ao/2025/02/limpeza-facial.jpg/w=640,h=961",
    delay: 0.2
  },
  {
    title: "Facial Masks",
    count: "+25 products",
    img: "https://imagedelivery.net/6HwnxsMACp9LGRV7S6ZRBA/luno.ao/2025/02/marcaras-faciais.jpg/w=640,h=961",
    delay: 0.3
  }
];

export const Categories = () => {
  return (
    <section className="py-24 px-8 lg:px-20 max-w-[1600px] mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-anashe-lila font-normal mb-3">
            <Icon icon="solar:stars-linear" /> Categories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-anashe-fg">
            Your ritual,<br /><em className="text-anashe-peach not-italic">starts here.</em>
          </h2>
        </motion.div>
        
        <a href="#" className="mt-6 md:mt-0 text-xs tracking-widest uppercase font-normal text-anashe-fg/50 hover:text-anashe-fg flex items-center gap-2 transition-colors group">
          See all <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.a 
            key={cat.title}
            href="#" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: cat.delay }}
            className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-[#252726] border border-white/10 hover:border-anashe-lila/30 transition-all duration-500"
          >
            <img 
              src={cat.img} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-anashe-bg to-transparent">
              <div className="text-[10px] tracking-widest uppercase text-anashe-lila font-normal mb-1">{cat.count}</div>
              <div className="text-lg font-light text-anashe-fg">{cat.title}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

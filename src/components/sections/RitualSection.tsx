"use client";

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export const RITUAL_BY_TYPE = {
  oily: { icon: "✨", title: "Oily Skin Ritual", steps: [{n:"01", title:"Double Cleanse", desc:"Oil + BHA foam for pores."}, {n:"02", title:"Balancing Toner", desc:"Regulates oiliness."}, {n:"03", title:"Niacinamide Serum", desc:"Minimizes pores and spots."}, {n:"04", title:"Hydrating Gel", desc:"Oil-free formula."}, {n:"05", title:"SPF50+ Matte", desc:"Mandatory for morning."}] },
  dry: { icon: "💧", title: "Dry Skin Ritual", steps: [{n:"01", title:"Gentle Cleanse", desc:"Preserves natural lipids."}, {n:"02", title:"Hydrating Toner", desc:"1st hyaluronic layer."}, {n:"03", title:"Snail Essence", desc:"Repairs and regenerates."}, {n:"04", title:"Rich Cream", desc:"Locks in hydration (ceramides)."}, {n:"05", title:"SPF50+ Hydrating", desc:"Doesn't dry out."}] },
  sensitive: { icon: "🌸", title: "Sensitive Skin Ritual", steps: [{n:"01", title:"Soothing Cleanse", desc:"Alcohol and fragrance free."}, {n:"02", title:"Centella Toner", desc:"Reduces redness."}, {n:"03", title:"CICA Serum", desc:"Calms reactivity."}, {n:"04", title:"Barrier Cream", desc:"Restores skin."}, {n:"05", title:"SPF50+ Mineral", desc:"Gentler for reactive skin."}] },
  night: { icon: "🌙", title: "Night Ritual", steps: [{n:"01", title:"Double Cleanse", desc:"Removes SPF and pollution."}, {n:"02", title:"Gentle Exfoliation", desc:"AHA/BHA 2x a week."}, {n:"03", title:"Active Serum", desc:"Retinol or peptides."}, {n:"04", title:"Eye Cream", desc:"Wrinkle prevention."}, {n:"05", title:"Sleeping Mask", desc:"Hydration while dreaming."}] }
};

export const RitualSection = () => {
  const [activeType, setActiveType] = useState<keyof typeof RITUAL_BY_TYPE>('night');
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % RITUAL_BY_TYPE[activeType].steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeType]);

  const data = RITUAL_BY_TYPE[activeType];
  const prevStep = (activeStep - 1 + data.steps.length) % data.steps.length;
  const nextStep = (activeStep + 1) % data.steps.length;

  return (
    <section id="ritual" className="py-24 px-8 lg:px-20 bg-[#1e1f1e] relative overflow-hidden">
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(180,181,223,0.04)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative flex justify-center">
          <div className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full border border-white/10 flex items-center justify-center before:absolute before:inset-[-20px] before:rounded-full before:border before:border-white/5 before:animate-spin-ring">
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeType}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-32 h-32 rounded-full bg-white/5 flex items-center justify-center text-5xl"
              >
                {data.icon}
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              key={`prev-${activeStep}`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="absolute top-[10%] -left-4 lg:-left-8 bg-[#212322]/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl"
            >
              <div className="text-[10px] tracking-widest uppercase text-anashe-lila font-normal mb-0.5">Step {data.steps[prevStep].n}</div>
              <div className="text-xs font-normal text-anashe-fg">{data.steps[prevStep].title}</div>
            </motion.div>

            <motion.div 
              key={`next-${activeStep}`}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="absolute bottom-[10%] -right-4 lg:-right-8 bg-[#212322]/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl"
            >
              <div className="text-[10px] tracking-widest uppercase text-anashe-lila font-normal mb-0.5">Step {data.steps[nextStep].n}</div>
              <div className="text-xs font-normal text-anashe-fg">{data.steps[nextStep].title}</div>
            </motion.div>
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-anashe-lila font-normal mb-3">
              <Icon icon="solar:stars-linear" /> The Secret
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-anashe-fg mb-10">
              Korean Ritual<br /><em className="text-anashe-peach not-italic">Step by Step.</em>
            </h2>
          </motion.div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {(Object.keys(RITUAL_BY_TYPE) as Array<keyof typeof RITUAL_BY_TYPE>).map((type) => (
              <button 
                key={type}
                onClick={() => { setActiveType(type); setActiveStep(0); }}
                className={cn(
                  "px-4 py-2 rounded-full border text-[11px] font-normal tracking-widest uppercase transition-colors",
                  activeType === type 
                    ? "bg-anashe-fg text-anashe-bg border-anashe-fg" 
                    : "border-white/20 text-anashe-fg/50 hover:border-white/50 hover:text-anashe-fg"
                )}
              >
                {RITUAL_BY_TYPE[type].title}
              </button>
            ))}
          </div>

          <div className="flex flex-col border-t border-white/10 pt-2">
            {data.steps.map((step, i) => (
              <div 
                key={step.n}
                onClick={() => setActiveStep(i)}
                className={cn(
                  "group flex gap-5 py-5 border-b border-white/10 cursor-pointer transition-all px-3 rounded-lg",
                  i === activeStep ? "bg-white/5 pl-5" : "hover:bg-white/5"
                )}
              >
                <div className={cn(
                  "text-sm font-light transition-colors",
                  i === activeStep ? "text-anashe-lila" : "text-anashe-fg/30"
                )}>
                  {step.n}
                </div>
                <div>
                  <div className={cn(
                    "text-sm font-normal mb-1 transition-colors",
                    i === activeStep ? "text-anashe-lila" : "text-anashe-fg group-hover:text-anashe-fg/80"
                  )}>
                    {step.title}
                  </div>
                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: i === activeStep ? "auto" : 0,
                      opacity: i === activeStep ? 1 : 0,
                      marginTop: i === activeStep ? 8 : 0
                    }}
                    className="text-xs font-light text-anashe-fg/50 overflow-hidden"
                  >
                    {step.desc}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

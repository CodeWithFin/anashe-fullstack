"use client";

import Link from "next/link";
import { CheckCircle2, ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function Philosophy() {
  return (
    <section id="services" className="max-w-7xl px-6 lg:px-10 mt-14 sm:mt-20 mx-auto">
      <AnimatedSection className="border-gradient before:rounded-3xl overflow-hidden bg-white/5 rounded-3xl" 
        style={{ backdropFilter: "blur(4px) saturate(1.25)" }}
        delay={0.1}
      >
        <div className="flex items-end justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl text-white font-bricolage font-semibold tracking-tighter">Our Philosophy</h2>
          <div className="hidden sm:flex items-center gap-2">
            <Link href="#" className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 text-xs font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 border-gradient before:rounded-2xl" style={{ backdropFilter: "blur(4px) saturate(1.25)" }}>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-sans">View Science</span>
            </Link>
          </div>
        </div>

        {/* Step 1 */}
        <div className="p-6 sm:p-8 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="text-3xl sm:text-4xl text-white/70 tabular-nums font-bricolage font-semibold tracking-tighter">1</div>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-2">
                {['Active Botanicals', 'Cold-Pressed Extraction', 'Micro-Encapsulation Technology'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2">
                <div className="aspect-[4/3] w-24 sm:w-28 rounded-2xl overflow-hidden border-gradient before:rounded-2xl flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=320&h=240&fit=crop" alt="Botanicals" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] w-24 sm:w-28 rounded-2xl overflow-hidden border-gradient before:rounded-2xl flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1508007226633-b7de6a10cb16?w=320&q=80" alt="Lab" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] w-24 sm:w-28 rounded-2xl overflow-hidden border-gradient before:rounded-2xl flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1579838501521-e335871b0a6f?w=320&q=80" alt="Texture" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="md:col-span-3 md:text-right">
              <h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white font-sans">The Formula</h3>
              <p className="text-xs text-neutral-400 mt-1 font-sans">Potent, pure, and proven.</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-6 sm:p-8 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="text-3xl sm:text-4xl text-white/70 tabular-nums font-bricolage font-semibold tracking-tighter">2</div>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-2">
                {['Sustainable Harvesting', 'Glass Packaging', 'Carbon Neutral Shipping'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <div className="aspect-[16/10] w-28 sm:w-32 rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=320&h=200&fit=crop" alt="Nature" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="aspect-[16/10] w-28 sm:w-32 rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
                  <img src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?w=320&h=200&fit=crop" alt="Water" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </div>
            <div className="md:col-span-3 md:text-right">
              <h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white font-sans">The Sourcing</h3>
              <p className="text-xs text-neutral-400 mt-1 font-sans">Kind to your skin and the earth.</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="text-3xl sm:text-4xl text-white/70 tabular-nums font-bricolage font-semibold tracking-tighter">3</div>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-2">
                {['Visible Radiance in 2 Weeks', 'Strengthened Skin Barrier', 'Deep hydration'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <div className="aspect-[16/10] w-32 sm:w-40 rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
                  <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=320&h=200&fit=crop" alt="Result 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[16/10] w-32 sm:w-40 rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
                  <img src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=320&h=200&fit=crop" alt="Result 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="md:col-span-3 md:text-right">
              <h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white font-sans">The Result</h3>
              <p className="text-xs text-neutral-400 mt-1 font-sans">Skin that glows from within.</p>
            </div>
          </div>
        </div>

        {/* Action Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 border-t border-white/10">
          <p className="text-sm text-neutral-300 font-sans">Unsure where to start? Get a personalized regimen.</p>
          <div className="flex items-center gap-3">
            <Link href="#contact" className="inline-flex items-center gap-2 hover:bg-emerald-500 hover:text-white transition-colors duration-200 text-sm font-medium text-black tracking-tight bg-white/90 rounded-2xl px-4 py-2">
              <ArrowUpRight className="w-4 h-4" />
              <span className="font-sans">Shop Best Sellers</span>
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 border-gradient before:rounded-2xl" style={{ backdropFilter: "blur(4px) saturate(1.25)" }}>
              <Sparkles className="w-4 h-4" />
              <span className="font-sans">Skin Quiz</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function Collection() {
  return (
    <section className="relative w-full mx-auto max-w-7xl px-6 lg:px-10 mt-24">
      <AnimatedSection className="bg-zinc-950/60 w-full border-gradient before:rounded-3xl rounded-3xl pt-6 pr-6 pb-6 pl-6 sm:p-8" 
        style={{ backdropFilter: "blur(4px) saturate(1.25)" }}
        delay={0.1}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10">
          <div className="lg:col-span-6">
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border-gradient before:rounded-2xl bg-white/5 text-zinc-200 hover:bg-white/10 transition font-sans" 
              style={{ backdropFilter: "blur(4px) saturate(1.25)" }}
            >
              <ArrowUpRight className="w-4 h-4" />
              New Arrivals
            </Link>

            <h2 className="mt-4 text-[44px] sm:text-6xl md:text-7xl leading-[1.05] text-zinc-100 font-bricolage font-semibold tracking-tighter">
              Elevate Your Daily Ritual
            </h2>

            <div className="h-px bg-white/10 mt-6"></div>

            <div className="mt-6">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl sm:text-3xl text-zinc-100 font-bricolage font-semibold tracking-tighter">Restorative Serums</h3>
                <span className="inline-flex items-center rounded-2xl px-3 py-1 text-sm text-zinc-200 bg-white/5 border-gradient before:rounded-2xl font-sans" style={{ backdropFilter: "blur(4px) saturate(1.25)" }}>From $85</span>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">Concentrated formulas targeting fine lines, dullness, and hydration deep within.</p>
            </div>

            <div className="h-px bg-white/10 mt-6"></div>

            <div className="mt-6">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl sm:text-3xl text-zinc-100 font-bricolage font-semibold tracking-tighter">Essential Creams</h3>
                <span className="inline-flex items-center rounded-2xl px-3 py-1 text-sm text-zinc-200 bg-white/5 border-gradient before:rounded-2xl font-sans" style={{ backdropFilter: "blur(4px) saturate(1.25)" }}>From $65</span>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">Rich, barrier-building moisture that locks in hydration for 24 hours.</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="#work" className="inline-flex items-center justify-center h-14 px-6 rounded-2xl text-base font-medium text-white bg-white/5 border-gradient before:rounded-2xl hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] font-sans" 
                style={{ backdropFilter: "blur(4px) saturate(1.25)" }}
              >
                View Collection
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-2xl text-base font-medium text-neutral-900 bg-gradient-to-b from-white to-neutral-300 hover:opacity-90 transition shadow-[0_12px_40px_rgba(0,0,0,0.35)] font-sans">
                Take Skin Quiz
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[860px]" style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.6))" }}>
              <div className="rounded-3xl bg-neutral-900/60 border-gradient before:rounded-3xl p-3" 
                style={{ backdropFilter: "blur(4px) saturate(1.25)" }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-neutral-950 border border-white/10">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <span className="h-3 w-3 rounded-full bg-zinc-700"></span>
                    <span className="h-3 w-3 rounded-full bg-zinc-700/70"></span>
                    <span className="h-3 w-3 rounded-full bg-zinc-700/50"></span>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                      {/* Grid images */}
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                        <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&h=600&fit=crop" alt="Serum bottle" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30"></div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                        <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500&h=600&fit=crop" alt="Cream texture" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30"></div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 md:row-span-2">
                        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=800&fit=crop" alt="Model applying cream" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                        <img src="https://images.unsplash.com/photo-1648203107138-9e9f9dc64662?w=320&q=80" alt="Dropper" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30"></div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                        <img src="https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?w=320&q=80" alt="Product set" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative blobs */}
                  <div className="pointer-events-none absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-amber-200/5 blur-3xl"></div>
                  <div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

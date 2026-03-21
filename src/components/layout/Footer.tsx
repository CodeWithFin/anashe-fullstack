"use client";

import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <footer className="bg-[#1a1b1a] border-t border-white/10 pt-20 pb-8 px-8 lg:px-20 text-white">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 mb-16 border-b border-white/10">
          {[
            { label: 'Products Sold', val: '3800', unit: '+' },
            { label: 'Satisfied Customers', val: '98', unit: '%' },
            { label: 'Original Brands', val: '16', unit: '' },
            { label: '5-Star Reviews', val: '2400', unit: '+' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extralight tracking-tight mb-2">
                {stat.val}<span className="text-lg text-anashe-lila">{stat.unit}</span>
              </div>
              <div className="text-[10px] tracking-widest uppercase text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h1 className="text-2xl tracking-[0.2em] font-extralight text-anashe-fg mb-6">Anashe</h1>
            <p className="text-sm text-white/50 font-light leading-relaxed max-w-xs mb-8">
              Exclusive K-Beauty curation for Angola and the CPLP. Authentic products, real results.
            </p>
            <div className="flex gap-3 text-white/50">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
                <Icon icon="solar:gallery-minimalistic-linear" width="1.2em" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
                <Icon icon="solar:letter-linear" width="1.2em" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-white/30 font-normal mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Facial Skincare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Body Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sunscreens</a></li>
              <li><Link href="/brands" className="hover:text-white transition-colors">Brands</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-white/30 font-normal mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-white/30 font-normal mb-6">Account</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VIP Program</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs text-white/30 font-light">
          <div>© 2025 Anashe · Pixel Infinito, Lda · Luanda, Angola</div>
          <div className="flex gap-2">
            {['Multicaixa', 'Visa', 'Mastercard'].map((pay) => (
              <span key={pay} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">{pay}</span>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

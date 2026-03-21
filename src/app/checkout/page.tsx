"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/Toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, cartTotal, isFreeShipping } = useCart();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Nairobi'
  });

  const total = cartTotal + (isFreeShipping ? 0 : 450);

  const handleMpesaPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      showToast("Please enter your M-Pesa phone number");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/mpesa/stkpush', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          phone: formData.phone,
          orderId: Math.floor(Math.random() * 1000000).toString()
        }),
      });

      const data = await response.json();
      if (data.ResponseCode === '0') {
        showToast("STK Push sent! Please check your phone.");
      } else {
        showToast("Error initiating M-Pesa payment. Please try again.");
      }
    } catch (error) {
      showToast("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-anashe-bg font-poppins selection:bg-anashe-lila selection:text-anashe-bg overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-4">Complete your <em className="text-anashe-peach not-italic italic font-light">Journey</em></h1>
            <p className="text-white/40 font-light text-sm italic">Securely finalize your order and begin your new skincare ritual.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleMpesaPayment} className="flex flex-col gap-6 p-8 bg-[#252726]/40 backdrop-blur-md border border-white/5 rounded-2xl">
                <h3 className="text-lg font-light text-white mb-4 tracking-widest uppercase">Shipping Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/30 ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-anashe-lila transition-colors"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/30 ml-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-anashe-lila transition-colors"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-widest uppercase text-white/30 ml-2">Delivery Address</label>
                  <input 
                    required
                    type="text" 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-anashe-lila transition-colors"
                    placeholder="Apartment, Street, Area"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/30 ml-2">City</label>
                    <select 
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-anashe-lila transition-colors"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    >
                      <option value="Nairobi">Nairobi</option>
                      <option value="Mombasa">Mombasa</option>
                      <option value="Kisumu">Kisumu</option>
                      <option value="Nakuru">Nakuru</option>
                      <option value="Eldoret">Eldoret</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/30 ml-2">M-Pesa Number</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">254</span>
                      <input 
                        required
                        type="tel" 
                        maxLength={9}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#39df1b] transition-colors"
                        placeholder="712345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <button 
                    type="submit"
                    disabled={loading || items.length === 0}
                    className="flex items-center justify-center gap-2 w-full py-5 bg-[#39df1b] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded hover:shadow-[0_0_20px_rgba(57,223,27,0.3)] hover:-translate-y-1 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <Icon icon="solar:spinner-linear" className="animate-spin" width="1.5em" />
                    ) : (
                      <>Pay with M-Pesa <Icon icon="simple-icons:mpesa" className="ml-1" /></>
                    )}
                  </button>
                  <p className="text-[10px] text-white/20 text-center mt-4 uppercase tracking-widest">
                    You will receive an STK Push prompt on your phone.
                  </p>
                </div>
              </form>
            </div>

            <div>
              <div className="p-8 bg-[#252726]/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
                <h3 className="text-lg font-light text-white mb-8 tracking-widest uppercase">Order Summary</h3>
                
                <div className="flex flex-col gap-4 mb-8 max-h-[300px] overflow-y-auto hide-scroll pr-2">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#1a1b1a]">
                          <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                        </div>
                        <div>
                          <p className="text-xs text-white font-light line-clamp-1">{item.name}</p>
                          <p className="text-[10px] text-white/30">{item.quantity} × {item.price.toLocaleString()} KSH</p>
                        </div>
                      </div>
                      <span className="text-xs text-white/60">{(item.price * item.quantity).toLocaleString()} KSH</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col gap-4 pt-6 border-t border-white/5 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-light">Subtotal</span>
                    <span className="text-white font-light">{cartTotal.toLocaleString()} KSH</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-light">Shipping</span>
                    <span className="text-white font-light">{isFreeShipping ? 'FREE' : '450 KSH'}</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                  <span className="text-xs tracking-widest uppercase text-white/40">Grand Total</span>
                  <span className="text-3xl font-extralight text-anashe-peach">
                    {total.toLocaleString()} <span className="text-sm">KSH</span>
                  </span>
                </div>

                <Link href="/cart" className="flex items-center justify-center gap-2 mt-8 text-[10px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">
                  <Icon icon="solar:arrow-left-linear" /> Back to edit selection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

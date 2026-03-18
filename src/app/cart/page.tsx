"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CART_UPDATED_EVENT,
  CartItem,
  readCart,
  removeCartItem,
  updateCartItemQuantity,
} from "@/lib/cart";

function formatKsh(amount: number) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const syncCart = () => setItems(readCart());
    syncCart();

    window.addEventListener("storage", syncCart);
    window.addEventListener(CART_UPDATED_EVENT, syncCart);

    return () => {
      window.removeEventListener("storage", syncCart);
      window.removeEventListener(CART_UPDATED_EVENT, syncCart);
    };
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );
  const shippingFee = items.length > 0 ? 900 : 0;
  const total = subtotal + shippingFee;

  const changeQuantity = (item: CartItem, nextQty: number) => {
    updateCartItemQuantity(item.slug, item.size, Math.max(0, Math.min(10, nextQty)));
    setItems(readCart());
  };

  const removeItem = (item: CartItem) => {
    removeCartItem(item.slug, item.size);
    setItems(readCart());
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-neutral-950/0 to-transparent" />
      </div>

      <section className="relative border-b border-white/10">
        <Header />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-12 pt-6 sm:pb-16 sm:pt-10">
          <p className="uppercase tracking-[0.18em] text-xs text-white/60 font-sans">Your Bag</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bricolage font-semibold tracking-tighter leading-[1.05] max-w-3xl">
            Cart
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 font-sans text-base sm:text-lg">
            Review your selected rituals before checkout.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 sm:py-16">
        {items.length === 0 ? (
          <div
            className="border-gradient before:rounded-3xl rounded-3xl bg-white/[0.03] p-6 sm:p-8 lg:p-10"
            style={{ backdropFilter: "blur(6px) saturate(1.1)" }}
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border-gradient before:rounded-2xl">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <h2 className="mt-5 text-2xl sm:text-3xl font-bricolage font-semibold tracking-tight">Your cart is empty</h2>
            <p className="mt-3 text-sm sm:text-base text-white/75 font-sans max-w-xl">
              Browse our collection and add your favorite rituals.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-white/90 transition font-sans"
            >
              Go to Shop
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <article
                  key={`${item.slug}-${item.size}`}
                  className="border-gradient before:rounded-3xl rounded-3xl bg-white/[0.03] p-4 sm:p-5"
                  style={{ backdropFilter: "blur(6px) saturate(1.1)" }}
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-2xl object-cover border border-white/10"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bricolage font-semibold tracking-tight">{item.name}</h3>
                          <p className="text-xs text-white/60 font-sans mt-1">Size: {item.size}</p>
                        </div>
                        <p className="text-base font-medium text-white">{formatKsh(item.price * item.quantity)}</p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        <div className="inline-flex items-center rounded-2xl bg-white/5 border-gradient before:rounded-2xl">
                          <button
                            onClick={() => changeQuantity(item, item.quantity - 1)}
                            className="h-9 w-9 inline-flex items-center justify-center text-white/80 hover:text-white transition"
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-10 text-center text-sm font-medium text-white">{item.quantity}</span>
                          <button
                            onClick={() => changeQuantity(item, item.quantity + 1)}
                            className="h-9 w-9 inline-flex items-center justify-center text-white/80 hover:text-white transition"
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item)}
                          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition font-sans"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside
              className="h-fit lg:sticky lg:top-8 border-gradient before:rounded-3xl rounded-3xl bg-white/[0.03] p-6"
              style={{ backdropFilter: "blur(6px) saturate(1.1)" }}
            >
              <h3 className="text-2xl font-bricolage font-semibold tracking-tight">Order Summary</h3>

              <div className="mt-5 space-y-3 text-sm font-sans">
                <div className="flex items-center justify-between text-white/80">
                  <span>Subtotal</span>
                  <span>{formatKsh(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span>Shipping</span>
                  <span>{formatKsh(shippingFee)}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between text-base font-medium text-white">
                  <span>Total</span>
                  <span>{formatKsh(total)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-neutral-900 px-4 py-3 text-sm font-medium hover:bg-white/90 transition font-sans"
              >
                <ShoppingBag className="h-4 w-4" />
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="mt-3 w-full inline-flex items-center justify-center rounded-2xl border-gradient before:rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition font-sans"
                style={{ backdropFilter: "blur(4px) saturate(1.25)" }}
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

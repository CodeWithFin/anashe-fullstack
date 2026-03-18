export const CART_STORAGE_KEY = "anashe_cart";
export const CART_UPDATED_EVENT = "anashe-cart-updated";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

function isBrowser() {
  return typeof window !== "undefined";
}

export function readCart(): CartItem[] {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function getCartCount() {
  return readCart().reduce((total, item) => total + item.quantity, 0);
}

export function addToCart(item: CartItem) {
  const existing = readCart();
  const index = existing.findIndex((entry) => entry.slug === item.slug && entry.size === item.size);

  if (index >= 0) {
    const next = [...existing];
    next[index] = {
      ...next[index],
      quantity: next[index].quantity + item.quantity,
    };
    writeCart(next);
    return next;
  }

  const next = [...existing, item];
  writeCart(next);
  return next;
}

export function updateCartItemQuantity(slug: string, size: string, quantity: number) {
  const existing = readCart();
  const next = existing
    .map((item) => {
      if (item.slug !== slug || item.size !== size) return item;
      return { ...item, quantity };
    })
    .filter((item) => item.quantity > 0);

  writeCart(next);
  return next;
}

export function removeCartItem(slug: string, size: string) {
  const next = readCart().filter((item) => item.slug !== slug || item.size !== size);
  writeCart(next);
  return next;
}

export function clearCart() {
  writeCart([]);
  return [];
}

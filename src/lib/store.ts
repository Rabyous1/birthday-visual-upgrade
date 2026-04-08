import { useState, useEffect, useCallback } from 'react';

// ============ TYPES ============
export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  size: string;
  image: string;
  badge?: string;
  badgeType?: 'default' | 'new' | 'popular';
  color?: string;
  colorTag?: string;
  theme?: string;
  themeTag?: string;
  pack?: string;
  packTag?: string;
}

// ============ CART HOOK ============
export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState('');

  const addToCart = useCallback((name: string, price: number) => {
    const id = name.toLowerCase().replace(/\s+/g, '-');
    setCart(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing) {
        return prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id, name, price, qty: 1 }];
    });
    setToastMessage(`"${name}" ajouté au panier`);
    setTimeout(() => setToastMessage(''), 2800);
  }, []);

  const changeQty = useCallback((id: string, delta: number) => {
    setCart(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i);
      return updated.filter(i => i.qty > 0);
    });
  }, []);

  const totalCount = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const checkout = useCallback(() => {
    const lines = cart.map(i => `• ${i.name} ×${i.qty} = ${formatPrice(i.price * i.qty)}`).join('\n');
    const message = encodeURIComponent(
      `Bonjour BeParty ! 👋\nJe souhaite commander :\n\n${lines}\n\n*Total : ${formatPrice(totalPrice)}*\n\nMerci !`
    );
    window.open(`https://wa.me/21620566943?text=${message}`, '_blank');
  }, [cart, totalPrice]);

  return { cart, addToCart, changeQty, totalCount, totalPrice, checkout, toastMessage };
}

// ============ FORMAT PRICE ============
export function formatPrice(n: number) {
  return n.toFixed(3).replace('.', ',') + ' TND';
}

// ============ SCROLL HOOK ============
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);
  return scrolled;
}

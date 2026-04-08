import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import CategoryNav from '@/components/CategoryNav';
import ProductSections from '@/components/ProductSections';
import WhySection from '@/components/WhySection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { useCart } from '@/lib/store';

export default function Index() {
  const { cart, addToCart, changeQty, totalCount, totalPrice, checkout, toastMessage } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('decoration');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const switchCategory = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById('categoryNav');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 10;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={totalCount} onCartClick={() => setCartOpen(true)} />
      <HeroSection />
      <IntroSection onCategoryClick={switchCategory} />
      <div id="categoryNav">
        <CategoryNav activeCategory={activeCategory} onSwitch={switchCategory} />
      </div>
      <ProductSections activeCategory={activeCategory} onAddToCart={addToCart} />
      <WhySection />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onChangeQty={changeQty} totalPrice={totalPrice} onCheckout={checkout} />

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-dark text-white px-6 py-3 rounded-full text-sm font-medium z-[300] animate-fade-in whitespace-nowrap">
          ✅ {toastMessage}
        </div>
      )}

      {/* Back to top */}
      <button
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg z-[150] transition-all ${showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Remonter"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
      </button>
    </div>
  );
}

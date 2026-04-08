import { useState } from 'react';
import { useScrolled } from '@/lib/store';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark text-white/85 text-[0.78rem] h-9 hidden md:flex items-center tracking-wide">
        <div className="container flex gap-6 items-center flex-wrap">
          <span>📞 <a href="tel:+21620566943" className="hover:text-primary-light transition-colors">+216 20 566 943</a></span>
          <span>✉️ <a href="mailto:contact@beparty.tn" className="hover:text-primary-light transition-colors">contact@beparty.tn</a></span>
          <span className="ml-auto">🚚 Livraison : 4.5 TND — Gratuite dès 50 TND</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-[100] bg-white/95 backdrop-blur-lg border-b border-border transition-shadow ${scrolled ? 'shadow' : 'shadow-sm'}`}>
        <div className="container flex items-center gap-8 h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <img src="/logo-icon.png" alt="BeParty" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <div className="flex flex-col leading-none">
              <div>
                <span className="font-display font-bold text-2xl text-primary tracking-wide">BE</span>
                <span className="font-display font-bold text-2xl text-dark tracking-wide">PARTY</span>
              </div>
              <small className="text-[0.55rem] tracking-[0.12em] text-muted-foreground uppercase mt-0.5">L'ESSENTIEL POUR CÉLÉBRER</small>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2 ml-auto">
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-full bg-primary-light text-primary-dark transition-all">Anniversaire</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <button className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-foreground hover:bg-bg-gray hover:text-primary transition-all" aria-label="Rechercher">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
            <button className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-foreground hover:bg-bg-gray hover:text-primary transition-all relative" aria-label="Panier" onClick={onCartClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[0.65rem] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center pointer-events-none">{cartCount}</span>
            </button>
            <button className="flex md:hidden flex-col gap-[5px] w-[42px] h-[42px] rounded-full items-center justify-center" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={`block w-5 h-0.5 bg-foreground rounded transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-foreground rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-foreground rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex md:hidden flex-col border-t border-border bg-white px-6 py-4 gap-1">
            <a href="#" className="block font-medium text-sm px-4 py-3 rounded-sm bg-primary-light text-primary-dark">Anniversaire</a>
            <div className="mt-3 pt-4 border-t border-border flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+21620566943">📞 +216 20 566 943</a>
              <a href="mailto:contact@beparty.tn">✉️ contact@beparty.tn</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

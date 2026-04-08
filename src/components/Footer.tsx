export default function Footer() {
  return (
    <footer className="bg-dark text-white/80 pt-16" id="contact">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[.08]">
        <div>
          <div>
            <span className="font-display font-bold text-2xl text-primary">BE</span>
            <span className="font-display font-bold text-2xl text-white">PARTY</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed max-w-[280px] text-white/55">L'essentiel pour célébrer chaque moment de bonheur.</p>
          <div className="flex gap-2.5 mt-5">
            <a href="https://www.facebook.com/yourpartychecklist/" target="_blank" rel="noreferrer" className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://wa.me/+21620566943" target="_blank" rel="noreferrer" className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all" aria-label="WhatsApp">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
            <a href="https://www.instagram.com/be__party" target="_blank" rel="noreferrer" className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all" aria-label="Instagram">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.1em] text-white/40 mb-4 font-semibold">Navigation</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#decoration" className="text-sm text-white/60 hover:text-primary-light transition-colors">Décoration Murale</a></li>
            <li><a href="#kits" className="text-sm text-white/60 hover:text-primary-light transition-colors">Kits de Table</a></li>
            <li><a href="#accessoires" className="text-sm text-white/60 hover:text-primary-light transition-colors">Accessoires</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.1em] text-white/40 mb-4 font-semibold">Support</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#" className="text-sm text-white/60 hover:text-primary-light transition-colors">Centre d'aide</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-primary-light transition-colors">Ma commande</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-primary-light transition-colors">Livraison</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-primary-light transition-colors">Retours</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.1em] text-white/40 mb-4 font-semibold">Contact</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="tel:+21620566943" className="text-sm text-white/60 hover:text-primary-light transition-colors">📞 +216 20 566 943</a></li>
            <li><a href="mailto:contact@beparty.tn" className="text-sm text-white/60 hover:text-primary-light transition-colors">✉️ contact@beparty.tn</a></li>
            <li><span className="text-sm text-white/60">🕐 Lun–Sam 9h–20h</span></li>
            <li><span className="text-sm text-white/60">📍 Boumhel Elbassatine, Ben Arous</span></li>
          </ul>
        </div>
      </div>
      <div className="container flex items-center justify-between py-5 text-xs text-white/30 flex-wrap gap-3">
        <p>© 2025 BeParty — Tous droits réservés</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white/70 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white/70 transition-colors">CGV</a>
          <a href="#" className="hover:text-white/70 transition-colors">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

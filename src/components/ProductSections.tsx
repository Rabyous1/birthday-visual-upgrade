import { useState } from 'react';
import ProductCard from './ProductCard';
import { decorationProducts, kitsProducts, accessoiresProducts } from '@/data/products';

interface ProductSectionsProps {
  activeCategory: string;
  onAddToCart: (name: string, price: number) => void;
}

const colorFilters = [
  { value: 'all', label: 'Tous', dot: 'conic-gradient(#F9A8D4,#93C5FD,#FCD34D,#C084FC,#FCA5A5,#86EFAC,#F9A8D4)' },
  { value: 'rose', label: 'Rose', dot: '#F9A8D4' },
  { value: 'bleu', label: 'Bleu', dot: '#93C5FD' },
  { value: 'dore', label: 'Doré', dot: '#FCD34D' },
  { value: 'violet', label: 'Violet', dot: '#C084FC' },
  { value: 'rouge', label: 'Rouge', dot: '#FCA5A5' },
  { value: 'vert', label: 'Vert', dot: '#86EFAC' },
];

const themeFilters = [
  { value: 'all', label: 'Tous' },
  { value: 'batman', label: 'Batman' },
  { value: 'princesse', label: 'Princesse' },
  { value: 'spiderman', label: 'Spiderman' },
  { value: 'minions', label: 'Minions' },
  { value: 'licorne', label: 'Licorne' },
  { value: 'safari', label: 'Safari' },
];

const packFilters = [
  { value: 'all', label: 'Tous' },
  { value: 'bougies', label: 'Bougies' },
  { value: 'ballons', label: 'Ballons' },
  { value: 'rideaux', label: 'Rideaux' },
  { value: 'chapeaux', label: 'Chapeaux' },
  { value: 'confettis', label: 'Confettis' },
];

export default function ProductSections({ activeCategory, onAddToCart }: ProductSectionsProps) {
  const [colorFilter, setColorFilter] = useState('all');
  const [themeFilter, setThemeFilter] = useState('all');
  const [packFilter, setPackFilter] = useState('all');

  const filteredDeco = colorFilter === 'all' ? decorationProducts : decorationProducts.filter(p => p.color === colorFilter);
  const filteredKits = themeFilter === 'all' ? kitsProducts : kitsProducts.filter(p => p.theme === themeFilter);
  const filteredAcc = packFilter === 'all' ? accessoiresProducts : accessoiresProducts.filter(p => p.pack === packFilter);

  return (
    <main className="bg-bg-gray">
      {/* Decoration */}
      {activeCategory === 'decoration' && (
        <section className="py-16 animate-fade-in" key="decoration">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.1em] mb-3">Pack Décoration Murale</span>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-dark leading-tight mb-3">
                Habille tes murs <em className="italic text-primary">avec style</em>
              </h2>
              <p className="text-base text-muted-foreground max-w-[520px] mx-auto">Ballons, guirlandes, fanions — filtre par couleur pour trouver ton ambiance.</p>
            </div>

            <div className="flex items-center gap-4 mb-9 flex-wrap">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex-shrink-0">Filtrer par couleur :</span>
              <div className="flex gap-2 flex-wrap">
                {colorFilters.map(f => (
                  <button
                    key={f.value}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-[1.5px] text-[0.82rem] font-medium transition-all ${
                      colorFilter === f.value ? 'border-primary bg-primary-light text-primary-dark font-semibold' : 'border-border text-muted-foreground bg-white hover:border-primary hover:text-primary'
                    }`}
                    onClick={() => setColorFilter(f.value)}
                  >
                    <span className="w-3 h-3 rounded-full border border-black/10 inline-block flex-shrink-0" style={{ background: f.dot }} />
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDeco.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Kits */}
      {activeCategory === 'kits' && (
        <section className="py-16 animate-fade-in" key="kits">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.1em] mb-3">Kits de Table</span>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-dark leading-tight mb-3">
                La table parfaite <em className="italic text-primary">pour chaque thème</em>
              </h2>
              <p className="text-base text-muted-foreground max-w-[520px] mx-auto">Chaque kit inclut assiettes, gobelets, nappes et décorations assortis.</p>
            </div>

            <div className="flex items-center gap-4 mb-9 flex-wrap">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex-shrink-0">Filtrer par thème :</span>
              <div className="flex gap-2 flex-wrap">
                {themeFilters.map(f => (
                  <button
                    key={f.value}
                    className={`px-4 py-1.5 rounded-full border-[1.5px] text-[0.82rem] font-medium transition-all ${
                      themeFilter === f.value ? 'border-primary bg-primary-light text-primary-dark font-semibold' : 'border-border text-muted-foreground bg-white hover:border-primary hover:text-primary'
                    }`}
                    onClick={() => setThemeFilter(f.value)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKits.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Accessoires */}
      {activeCategory === 'accessoires' && (
        <section className="py-16 animate-fade-in" key="accessoires">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.1em] mb-3">Accessoires</span>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-dark leading-tight mb-3">
                Les détails qui font <em className="italic text-primary">toute la différence</em>
              </h2>
              <p className="text-base text-muted-foreground max-w-[520px] mx-auto">Des packs complets pour compléter votre décoration et rendre la fête magique.</p>
            </div>

            <div className="flex items-center gap-4 mb-9 flex-wrap">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex-shrink-0">Filtrer par type :</span>
              <div className="flex gap-2 flex-wrap">
                {packFilters.map(f => (
                  <button
                    key={f.value}
                    className={`px-4 py-1.5 rounded-full border-[1.5px] text-[0.82rem] font-medium transition-all ${
                      packFilter === f.value ? 'border-primary bg-primary-light text-primary-dark font-semibold' : 'border-border text-muted-foreground bg-white hover:border-primary hover:text-primary'
                    }`}
                    onClick={() => setPackFilter(f.value)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAcc.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

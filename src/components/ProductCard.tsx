import type { Product } from '@/lib/store';
import { formatPrice } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (name: string, price: number) => void;
}

const colorTagStyles: Record<string, string> = {
  rose: 'bg-[#FDF2F8] text-[#BE185D]',
  bleu: 'bg-[#EFF6FF] text-[#1D4ED8]',
  dore: 'bg-[#FFFBEB] text-[#92400E]',
  violet: 'bg-[#FAF5FF] text-[#6B21A8]',
  rouge: 'bg-[#FFF1F2] text-[#BE123C]',
  vert: 'bg-[#F0FDF4] text-[#166534]',
};

const themeTagStyles: Record<string, string> = {
  batman: 'bg-[#F8FAFC] text-[#1E293B]',
  princesse: 'bg-[#FDF2F8] text-[#BE185D]',
  spiderman: 'bg-[#FFF1F2] text-[#BE123C]',
  minions: 'bg-[#FEFCE8] text-[#854D0E]',
  licorne: 'bg-[#FAF5FF] text-[#6B21A8]',
  safari: 'bg-[#FFFBEB] text-[#92400E]',
};

const badgeStyles: Record<string, string> = {
  default: 'bg-primary',
  new: 'bg-accent',
  popular: 'bg-[#7C3AED]',
};

export default function ProductCard({ product, index, onAddToCart }: ProductCardProps) {
  const tagStyle = product.color ? colorTagStyles[product.color] : product.theme ? themeTagStyles[product.theme] : 'bg-[#EFF6FF] text-[#1D4ED8]';
  const tagLabel = product.colorTag || product.themeTag || product.packTag || '';

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-border transition-all hover:-translate-y-2 hover:shadow-lg animate-card-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover product-img-hover"
          loading="lazy"
          width={640}
          height={640}
        />
        {product.badge && (
          <div className={`absolute top-3 left-3 ${badgeStyles[product.badgeType || 'default']} text-white text-[0.72rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide`}>
            {product.badge}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2.5 flex-wrap">
          <span className={`inline-block text-[0.72rem] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${tagStyle}`}>
            {tagLabel}
          </span>
          <span className="inline-block text-[0.7rem] font-medium px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground">
            📐 {product.size}
          </span>
        </div>
        <h3 className="font-display text-base font-semibold text-dark leading-snug mb-2">{product.name}</h3>
        <p className="text-[0.83rem] text-muted-foreground leading-relaxed mb-3">{product.desc}</p>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-xl font-bold text-primary-dark" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {formatPrice(product.price)}
          </span>
          <button
            className="flex items-center gap-1.5 bg-primary text-primary-foreground text-[0.82rem] font-semibold px-4 py-2 rounded-full transition-all hover:bg-primary-dark hover:scale-[1.04] flex-shrink-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
            onClick={() => onAddToCart(product.name, product.price)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

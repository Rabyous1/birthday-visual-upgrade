import catDecoration from '@/assets/icons/cat-decoration.png';
import catKits from '@/assets/icons/cat-kits.png';
import catAccessoires from '@/assets/icons/cat-accessoires.png';

interface CategoryNavProps {
  activeCategory: string;
  onSwitch: (cat: string) => void;
}

const categories = [
  { id: 'decoration', label: 'Décoration Murale', icon: catDecoration },
  { id: 'kits', label: 'Kits de Table', icon: catKits },
  { id: 'accessoires', label: 'Accessoires', icon: catAccessoires },
];

export default function CategoryNav({ activeCategory, onSwitch }: CategoryNavProps) {
  return (
    <nav className="sticky top-[72px] z-[90] bg-white/95 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container flex gap-1 overflow-x-auto scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${
              activeCategory === cat.id
                ? 'text-primary border-primary font-semibold'
                : 'text-muted-foreground border-transparent hover:text-primary'
            }`}
            onClick={() => onSwitch(cat.id)}
          >
            <img src={cat.icon} alt={cat.label} className="w-5 h-5 object-contain" />
            <span className="hidden sm:inline">{cat.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

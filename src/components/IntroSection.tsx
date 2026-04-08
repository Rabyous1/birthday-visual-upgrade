import catDecoration from '@/assets/icons/cat-decoration.png';
import catKits from '@/assets/icons/cat-kits.png';
import catAccessoires from '@/assets/icons/cat-accessoires.png';

interface IntroSectionProps {
  onCategoryClick: (cat: string) => void;
}

const cards = [
  { cat: 'decoration', icon: catDecoration, title: 'Pack Décoration Murale', desc: 'Ballons, guirlandes, banderoles — choisissez votre palette de couleurs.', cta: 'Voir la déco →' },
  { cat: 'kits', icon: catKits, title: 'Kits de Table', desc: "Assiettes, gobelets, nappes à l'effigie de vos héros préférés.", cta: 'Voir les kits →' },
  { cat: 'accessoires', icon: catAccessoires, title: 'Accessoires', desc: 'Bougies, rideaux, packs ballons — les petits détails qui font tout.', cta: 'Voir les accessoires →' },
];

export default function IntroSection({ onCategoryClick }: IntroSectionProps) {
  return (
    <section className="py-20 bg-background" id="selection">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.1em] mb-3">Notre sélection</span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-dark leading-tight mb-3">
            Pour un choix <em className="italic text-primary">facile</em>
          </h2>
          <p className="text-base text-muted-foreground max-w-[520px] mx-auto">
            Tout ce qu'il vous faut pour un anniversaire parfait, organisé en 3 grandes catégories.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.cat}
              className="bg-bg-soft border-[1.5px] border-border rounded-xl p-9 cursor-pointer transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-primary-light animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => onCategoryClick(card.cat)}
            >
              <img src={card.icon} alt={card.title} className="w-16 h-16 object-contain mb-4" loading="lazy" />
              <h3 className="font-display text-lg font-semibold text-dark mb-2.5">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{card.desc}</p>
              <span className="font-semibold text-primary text-sm">{card.cta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

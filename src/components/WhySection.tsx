import whyLivraison from '@/assets/icons/why-livraison.png';
import whyQualite from '@/assets/icons/why-qualite.png';
import whySupport from '@/assets/icons/why-support.png';
import whyPaiement from '@/assets/icons/why-paiement.png';

const whyCards = [
  { icon: whyLivraison, title: 'Livraison rapide', desc: 'Livraison Aramex en 24-48h partout en Tunisie. Gratuite dès 50 TND.' },
  { icon: whyQualite, title: 'Qualité garantie', desc: 'Produits soigneusement sélectionnés, testés et emballés avec soin.' },
  { icon: whySupport, title: 'Support réactif', desc: 'Notre équipe répond 7j/7 sur WhatsApp, Instagram et par email.' },
  { icon: whyPaiement, title: 'Paiement sécurisé', desc: 'Paiement à la livraison ou en ligne 100% sécurisé.' },
];

export default function WhySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.1em] mb-3">Pourquoi nous ?</span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-dark leading-tight mb-3">
            La fête mérite <em className="italic text-primary">le meilleur</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map(card => (
            <div key={card.title} className="text-center p-9 rounded-xl border-[1.5px] border-border transition-all hover:-translate-y-1 hover:shadow">
              <img src={card.icon} alt={card.title} className="w-28 h-28 mx-auto mb-5 object-contain" loading="lazy" width={112} height={112} />
              <h3 className="font-display text-base font-semibold text-dark mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

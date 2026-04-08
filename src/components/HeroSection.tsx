import heroImage from '@/assets/hero-party.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-72px-36px)] flex items-center overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#FDF2FF] to-[#EFF6FF] px-6 py-20">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[60px] opacity-35 animate-drift bg-[radial-gradient(circle,#FBBF24,transparent)] -top-24 -right-24" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[60px] opacity-35 animate-drift bg-[radial-gradient(circle,#F9A8D4,transparent)] -bottom-20 -left-20" style={{ animationDelay: '-3s' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[60px] opacity-35 animate-drift bg-[radial-gradient(circle,#A5F3FC,transparent)] top-1/2 left-[40%]" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Content */}
      <div className="relative max-w-[580px] z-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-dark border border-primary/25 rounded-full px-4 py-1.5 text-[0.82rem] font-semibold tracking-wide uppercase mb-5">
          <img src={heroImage} alt="Gâteau anniversaire" className="w-5 h-5 rounded-full object-cover" />
          Spécial Anniversaire
        </div>
        <h1 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.15] text-dark mb-5">
          Chaque anniversaire<br />
          <em className="italic text-primary block">mérite d'être inoubliable</em>
        </h1>
        <p className="text-[1.05rem] text-muted-foreground mb-9 max-w-[460px]">
          Découvrez notre sélection exclusive de décorations, kits de table et accessoires pour créer la fête parfaite.
        </p>
        <div className="flex gap-3 flex-wrap mb-12">
          <a href="#selection" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-[0.95rem] px-7 py-3.5 rounded-full transition-all hover:bg-primary-dark hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,82,122,0.35)] hover:shadow-[0_8px_30px_rgba(232,82,122,0.45)]">
            Explorer la collection
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground font-semibold text-[0.95rem] px-7 py-3.5 rounded-full border-[1.5px] border-border transition-all hover:border-primary hover:text-primary hover:bg-primary-light">
            Nous contacter
          </a>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex flex-col">
            <strong className="text-xl font-bold text-dark leading-none">500+</strong>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Produits</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col">
            <strong className="text-xl font-bold text-dark leading-none">4.5 TND</strong>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Livraison</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col">
            <strong className="text-xl font-bold text-dark leading-none">J+2</strong>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Délai moyen</span>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none hidden lg:block">
        <img src={heroImage} alt="Décoration de fête d'anniversaire" className="absolute inset-0 w-full h-full object-cover opacity-40 rounded-l-3xl" />
        <div className="absolute top-[20%] left-[10%] bg-white/90 backdrop-blur-lg border border-white/80 rounded-lg px-5 py-3 font-semibold text-sm shadow animate-float-card">
          <img src={heroImage} alt="Ballons" className="w-6 h-6 rounded-full object-cover inline mr-2" />
          Ballons
        </div>
        <div className="absolute top-[50%] right-[15%] bg-white/90 backdrop-blur-lg border border-white/80 rounded-lg px-5 py-3 font-semibold text-sm shadow animate-float-card" style={{ animationDelay: '-2s' }}>
          <img src={heroImage} alt="Gâteaux" className="w-6 h-6 rounded-full object-cover inline mr-2" />
          Gâteaux
        </div>
        <div className="absolute bottom-[20%] left-[25%] bg-white/90 backdrop-blur-lg border border-white/80 rounded-lg px-5 py-3 font-semibold text-sm shadow animate-float-card" style={{ animationDelay: '-4s' }}>
          <img src={heroImage} alt="Déco" className="w-6 h-6 rounded-full object-cover inline mr-2" />
          Déco
        </div>
      </div>
    </section>
  );
}

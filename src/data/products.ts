// Product images
import decoRoseGold from '@/assets/products/deco-rose-gold.jpg';
import decoBleuCiel from '@/assets/products/deco-bleu-ciel.jpg';
import decoOrChampagne from '@/assets/products/deco-or-champagne.jpg';
import decoViolet from '@/assets/products/deco-violet.jpg';
import decoRougeBlanc from '@/assets/products/deco-rouge-blanc.jpg';
import decoVertOr from '@/assets/products/deco-vert-or.jpg';
import decoRideauRose from '@/assets/products/deco-rideau-rose.jpg';
import decoBanderoleOr from '@/assets/products/deco-banderole-or.jpg';

import kitBatman from '@/assets/products/kit-batman.jpg';
import kitPrincesse from '@/assets/products/kit-princesse.jpg';
import kitSpiderman from '@/assets/products/kit-spiderman.jpg';
import kitMinions from '@/assets/products/kit-minions.jpg';
import kitLicorne from '@/assets/products/kit-licorne.jpg';
import kitSafari from '@/assets/products/kit-safari.jpg';

import accBougiesColorees from '@/assets/products/acc-bougies-colorees.jpg';
import accBougiesDorees from '@/assets/products/acc-bougies-dorees.jpg';
import accBallonsNacres from '@/assets/products/acc-ballons-nacres.jpg';
import accBallonsXxl from '@/assets/products/acc-ballons-xxl.jpg';
import accRideauRoseGold from '@/assets/products/acc-rideau-rose-gold.jpg';
import accRideauEtoiles from '@/assets/products/acc-rideau-etoiles.jpg';
import accChapeaux from '@/assets/products/acc-chapeaux.jpg';
import accConfettis from '@/assets/products/acc-confettis.jpg';

import type { Product } from '@/lib/store';

export const decorationProducts: Product[] = [
  { id: 'deco-1', name: 'Pack Guirlande Fanions Rose Gold', desc: 'Guirlande fanions 3m · ballons nacrés x10 · confettis étoiles', price: 24.9, size: '3 mètres', image: decoRoseGold, badge: 'Best-seller', color: 'rose', colorTag: 'Rose' },
  { id: 'deco-2', name: 'Kit Déco Murale Bleu Ciel', desc: 'Ballons bleu ciel x20 · banderole "Happy Birthday" · étoiles dorées', price: 31.5, size: 'Kit complet', image: decoBleuCiel, color: 'bleu', colorTag: 'Bleu' },
  { id: 'deco-3', name: 'Pack Luxe Or & Champagne', desc: 'Ballons dorés métalliques x15 · rideau paillettes doré · fanions', price: 42, size: 'Rideau 90×200cm', image: decoOrChampagne, badge: 'Nouveau', badgeType: 'new', color: 'dore', colorTag: 'Doré' },
  { id: 'deco-4', name: 'Kit Pastel Violet & Lilas', desc: 'Ballons lavande x12 · guirlande lumineuse LED · étoiles argentées', price: 27.5, size: 'Guirlande 2m', image: decoViolet, color: 'violet', colorTag: 'Violet' },
  { id: 'deco-5', name: 'Pack Festif Rouge & Blanc', desc: 'Ballons rouge & blanc x20 · banderole · rubans décorés', price: 22, size: 'Kit 25 pièces', image: decoRougeBlanc, color: 'rouge', colorTag: 'Rouge' },
  { id: 'deco-6', name: 'Kit Tropical Vert & Or', desc: 'Ballons vert menthe x15 · fanions feuillages · confettis tropicaux', price: 28.9, size: 'Fanions 2.5m', image: decoVertOr, color: 'vert', colorTag: 'Vert' },
  { id: 'deco-7', name: 'Rideau de Scène Rose Poudré', desc: 'Rideau photo booth rose poudré · 200 pompons · barrettes déco', price: 35, size: '200×100cm', image: decoRideauRose, color: 'rose', colorTag: 'Rose' },
  { id: 'deco-8', name: 'Banderole "Happy Birthday" Or', desc: 'Lettres ballon dorées HAPPY BIRTHDAY · attaches incluses', price: 18.5, size: 'Chaque lettre 40cm', image: decoBanderoleOr, color: 'dore', colorTag: 'Doré' },
];

export const kitsProducts: Product[] = [
  { id: 'kit-1', name: 'Kit Table Batman Dark Knight', desc: '10 assiettes · 10 gobelets · nappe · 20 serviettes · banderole', price: 38.5, size: 'Kit 46 pièces — Pour 10 personnes', image: kitBatman, badge: 'Populaire', badgeType: 'popular', theme: 'batman', themeTag: 'Batman' },
  { id: 'kit-2', name: 'Kit Table Princesse Royale', desc: '10 assiettes roses · 10 gobelets dorés · nappe · 20 serviettes · tiare déco', price: 41, size: 'Kit 42 pièces — Pour 10 personnes', image: kitPrincesse, theme: 'princesse', themeTag: 'Princesse' },
  { id: 'kit-3', name: 'Kit Table Spiderman Marvel', desc: '10 assiettes · 10 gobelets · nappe rouge & bleu · 20 serviettes · masques', price: 39.9, size: 'Kit 45 pièces — Pour 10 personnes', image: kitSpiderman, badge: 'Best-seller', theme: 'spiderman', themeTag: 'Spiderman' },
  { id: 'kit-4', name: 'Kit Table Minions Funny', desc: '10 assiettes jaunes · 10 gobelets · nappe · 20 serviettes · lunettes fun', price: 36.5, size: 'Kit 44 pièces — Pour 10 personnes', image: kitMinions, theme: 'minions', themeTag: 'Minions' },
  { id: 'kit-5', name: 'Kit Table Licorne Magique', desc: '10 assiettes pastel · 10 gobelets · nappe arc-en-ciel · corne déco · 20 serviettes', price: 44, size: 'Kit 45 pièces — Pour 10 personnes', image: kitLicorne, badge: 'Nouveau', badgeType: 'new', theme: 'licorne', themeTag: 'Licorne' },
  { id: 'kit-6', name: 'Kit Table Safari Jungle', desc: '10 assiettes jungle · 10 gobelets · nappe verte · figurines animaux · 20 serviettes', price: 43.5, size: 'Kit 46 pièces — Pour 10 personnes', image: kitSafari, theme: 'safari', themeTag: 'Safari' },
];

export const accessoiresProducts: Product[] = [
  { id: 'acc-1', name: 'Bougies Chiffres Colorées', desc: '10 bougies chiffres multicolores avec paillettes · résistantes au vent', price: 7.5, size: '10 bougies · Hauteur 7cm', image: accBougiesColorees, badge: 'Best-seller', pack: 'bougies', packTag: 'Pack 10 bougies' },
  { id: 'acc-2', name: 'Bougies Sparkle Dorées', desc: '6 bougies étincelantes dorées · effet scintillant 3 minutes', price: 9.9, size: '6 bougies · 12cm de hauteur', image: accBougiesDorees, pack: 'bougies', packTag: 'Pack 6 bougies' },
  { id: 'acc-3', name: 'Ballons Nacrés Multicolores', desc: '30 ballons latex nacrés · pompe incluse · ficelle 5m', price: 14.9, size: '30 ballons · Diamètre gonflé 28cm', image: accBallonsNacres, pack: 'ballons', packTag: 'Pack 30 ballons' },
  { id: 'acc-4', name: 'Ballons Chiffres XXL Or', desc: '5 ballons aluminium dorés chiffres au choix · taille impressionnante', price: 22.5, size: '5 ballons · Hauteur 100cm', image: accBallonsXxl, badge: 'Nouveau', badgeType: 'new', pack: 'ballons', packTag: 'Pack 5 ballons géants' },
  { id: 'acc-5', name: 'Rideau Paillettes Rose Gold', desc: 'Rideau photo-booth rose gold · franges aluminium scintillantes', price: 12, size: '1 rideau · 200×100cm', image: accRideauRoseGold, pack: 'rideaux', packTag: 'Rideau décoratif' },
  { id: 'acc-6', name: 'Rideau Étoiles Dorées', desc: 'Rideau étoiles dorées avec guirlandes · montage facile', price: 15.5, size: '1 rideau · 200×150cm', image: accRideauEtoiles, pack: 'rideaux', packTag: 'Rideau décoratif' },
  { id: 'acc-7', name: 'Chapeaux de Fête Colorés', desc: '10 chapeaux pointus multicolores · élastique · paillettes dorées', price: 8.9, size: '10 chapeaux · Taille universelle', image: accChapeaux, pack: 'chapeaux', packTag: 'Pack 10 chapeaux' },
  { id: 'acc-8', name: 'Confettis Festifs Multicolores', desc: '200g de confettis étoiles · cœurs · ronds multicolores · biodégradables', price: 6.5, size: '200g · Confettis biodégradables', image: accConfettis, pack: 'confettis', packTag: 'Pack confettis' },
];

# Roadmap de Développement du Portfolio v2

Ce document suit les grandes étapes de la refonte de mon portfolio. L'approche est agile, axée sur la mise en place d'une architecture solide et le développement itératif des fonctionnalités.

---

### Phase 1 : Fondations & Setup Global

- [x] **1.1 : Définition des Types (Modeling)** - Remplir `src/types/index.ts` avec la modélisation de toutes nos entités.
- [x] **1.2 : Mise en place de l'Internationalisation (i18n)** - Mettre en place la structure technique (routing, dictionnaires) pour le multilingue.
- [x] **1.3 : Mise en place du Contexte de Thème (Theming)** - Créer la logique pour le changement de thème (dark/light).
- [x] **1.4 : Développement des Composants UI de base** - Coder les composants génériques (`Button`, `SectionTitle`).
- [x] **1.5 : Configuration du Favicon & de l'Identité Visuelle** - Préparer les fichiers `favicon.ico`, `apple-touch-icon.png`, etc., et les configurer dans le layout racine.
- [x] **1.6: SEO de base et accord sur les sections**
- [x] **1.7: Navbar et Footer**
- [ ] **1.8: chartes graphique de base**

### Phase 2 : Développement Itératif par Section

*Pour chaque section du portfolio, nous suivrons ce cycle :*

- [ ] **2.1 : Section Héro (Accueil)**
    - [ ] Définir les données (`data/hero.ts`).
    - [ ] Coder le composant `sections/Hero.tsx`.
    - [ ] Ajouter les textes dans les dictionnaires (`en.ts`, `fr.ts`).

- [ ] **2.2 : Section Compétences (Skills)**
    - [ ] Définir les données (`data/skills/`).
    - [ ] Coder le composant `sections/Skills.tsx`.
    - [ ] Ajouter les textes dans les dictionnaires.

- [ ] **2.3 : Section Projets (Projects)**
    - [ ] Définir les données (`data/projects/`).
    - [ ] Coder le composant `sections/Projects.tsx`.
    - [ ] Ajouter les textes dans les dictionnaires.

- [ ] **(À définir) : Section Contact & Autres Sections**
    - [ ] Valider la liste des autres sections.
    - [ ] Pour la section Contact : concevoir le formulaire et mettre en place le service d'envoi d'email (ex: EmailJS, Resend).
    - [ ] Suivre le même cycle itératif pour toutes les sections.

### Phase 3 : Finalisation, SEO & Déploiement

- [ ] **3.1 : Prompt Engineering pour le Design Global** - Rédiger un cahier des charges pour Claude afin de générer la charte graphique (CSS avec Tailwind).
- [ ] **3.2 : Intégration du Design** - Appliquer les styles Tailwind à l'ensemble des composants et sections.
- [ ] **3.3 : Ajout des Animations & Transitions** - Implémenter des animations subtiles pour l'expérience utilisateur.
- [ ] **3.4 : Optimisation du Référencement (SEO)**
    - [ ] **Métadonnées :** Configurer dynamiquement les balises `<title>` et `<meta name="description">` pour chaque langue en utilisant les métadonnées de Next.js.
    - [ ] **Données Structurées (Schema.org) :** Ajouter un script JSON-LD pour décrire ma personne aux moteurs de recherche.
    - [ ] **Accessibilité (a11y) :** S'assurer que le site est sémantiquement correct (bonnes balises HTML, attributs `alt` pour les images).
- [ ] **3.5 : Optimisation des Performances & Déploiement**
    - [ ] Optimiser les images (ex: `next/image`).
    - [ ] Déployer sur Vercel et configurer le domaine personnalisé.
    - [ ] Soumettre le sitemap à Google Search Console.

---
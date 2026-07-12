import type { Lang, } from './i18n';
import type { Project } from './projects';

interface ProjectFr {
  type: string;
  context: string;
  client?: string;
  duration: string;
  mission: string;
  analysis: string;
  intervention: string;
}

/** French copies of every project's localizable fields, keyed by project id. */
export const PROJECTS_FR: Record<string, ProjectFr> = {
  absat: {
    type: 'Plateforme Web',
    context: 'Projet de fin d’études',
    duration: '6+ mois',
    mission:
      'Absat est une plateforme web conçue pour les institutions médiatiques. Elle centralise et accélère la production de contenus : modèles graphiques, projets éditoriaux, transcription, traduction et assistance IA — le tout dans un espace de travail unique organisé par rôles (Admin, Designer, Rédacteur).',
    analysis:
      'La plateforme repose sur un frontend Next.js / TypeScript et un backend Django REST Framework avec une base MySQL. Elle intègre une authentification JWT sécurisée avec vérification par email, une gestion fine des rôles et permissions, un tableau de bord administrateur avec statistiques, et un éditeur visuel basé sur Canvas (Konva / React-Konva) dont les champs modifiables sont contrôlés par rôle.',
    intervention:
      'J’ai conçu et développé l’intégralité de la plateforme : modélisation des données (MCD/MLD), architecture de l’API REST, système de rôles et permissions, workflow de validation des modèles, éditeur visuel Canvas, bibliothèque de médias, et assistant IA pour la rédaction, la génération de titres, la transcription audio/vidéo et la traduction automatique.',
  },
  aoun: {
    type: 'Application Marketplace',
    context: 'Académique / Personnel',
    client: 'Projet universitaire',
    duration: '4 mois',
    mission:
      'Aoun est une marketplace qui connecte les utilisateurs aux travailleurs locaux — plombiers, menuisiers et autres prestataires de services. Elle apporte visibilité et confiance à un marché informel grâce à des profils professionnels vérifiés.',
    analysis:
      'Le système repose sur un backend REST Spring Boot desservant un client web React et une application mobile React Native (Expo). Fonctionnalités clés : recherche de travailleurs, profils professionnels, vérification d’identité, upload des travaux précédents, système de notation, validation par l’administrateur et gestion des litiges.',
    intervention:
      'J’ai travaillé sur toute la stack : conception de l’API backend avec Spring Boot, modélisation de la base de données, interface web React et application mobile React Native, y compris les workflows de vérification et de notation.',
  },
  doit: {
    type: 'Application macOS',
    context: 'Projet personnel',
    client: 'Initiative personnelle',
    duration: 'En cours',
    mission:
      'do-it est un gestionnaire de tâches natif pour macOS conçu pour organiser le travail et protéger la concentration. Kanban, notes simples, minuteur de focus et compagnon dans la barre de menus — tout pour planifier sa journée sans perdre le fil.',
    analysis:
      'Entièrement construite avec SwiftUI et SwiftData, l’application offre un Kanban en glisser-déposer, un tableau « Aujourd’hui », des sessions de focus type Pomodoro, des notes rapides et des notifications système, avec un compagnon léger dans la barre de menus.',
    intervention:
      'J’ai conçu et développé toute l’application : modèle de données SwiftData, interface SwiftUI complète, interactions drag-and-drop, moteur focus/Pomodoro et intégration à la barre de menus.',
  },
  '7alen': {
    type: 'Campagne de Marque',
    context: 'Professionnel',
    duration: '1 mois',
    mission:
      'Campagne de lancement pour 7alen, une application locale de livraison. Objectif : rendre un service tout neuf immédiatement reconnaissable et digne de confiance sur les réseaux sociaux et en affichage.',
    analysis:
      'Le visuel clé compose le scooter de livraison dans un ruban dynamique de catégories de services (restaurants, boucheries, boulangeries, suivi de livraison), unifié par une identité orange affirmée et une typographie bilingue arabe/français avec des appels à l’action clairs.',
    intervention:
      'J’ai créé l’ensemble du visuel de campagne : direction artistique, compositing photo, travail de lumière et de glow, système typographique bilingue et déclinaisons pour couvertures, posts et badges de stores.',
  },
  slash: {
    type: 'Identité de Marque',
    context: 'Professionnel',
    duration: '3 semaines',
    mission:
      '« Break the Line » — un visuel clé complet pour Slash Sport, média sportif mauritanien couvrant football, basketball, arts martiaux, échecs et plus.',
    analysis:
      'Le visuel découpe des athlètes nationaux dans un rythme de panneaux diagonaux « slash », en écho au nom et au logo de la marque. Une palette sombre bleu-vert aux accents électriques donne un look broadcast énergique, avec des lockups bilingues arabe/anglais.',
    intervention:
      'J’ai conçu le concept et exécuté toute la composition : détourage des athlètes, système de panneaux, étalonnage colorimétrique, lockups de marque et traitement bilingue du slogan.',
  },
  sava: {
    type: 'Identité de Club',
    context: 'Professionnel',
    duration: '2 semaines',
    mission:
      'Un blason et une identité complète pour le Sava FC. Le badge devait être moderne et compétitif tout en portant les initiales du club dans un seul emblème fluide.',
    analysis:
      'Le blason fusionne les lettres S, A, V, A et un ballon dans un emblème unique à l’intérieur d’un bouclier — documenté par une analyse du sens du logo, une grille de construction et un système de couleurs vert vif sur fond sombre.',
    intervention:
      'J’ai conçu le logo des premières recherches jusqu’au blason vectoriel final, et produit la présentation d’identité : diagramme de signification, variantes et déclinaisons pour les réseaux sociaux.',
  },
  kalimat: {
    type: 'Série Typographique',
    context: 'Série personnelle',
    duration: 'En cours',
    mission:
      'كلمات و معاني (« Mots & Sens ») — une série typographique arabe minimaliste où le design de chaque mot exprime son propre sens.',
    analysis:
      'Chaque pièce joue avec le flou, la graisse, la couleur et la composition sur un fond sombre épuré : un seul mot arabe devient tout le visuel, la forme incarnant le sens — le brouillard floute, l’absence cache des lettres, la lumière révèle.',
    intervention:
      'J’ai conçu le concept de la série et réalisé chaque pièce : choix des mots, manipulation typographique et système visuel cohérent signé sous l’identité Mel Design.',
  },
  techforge: {
    type: 'Branding de Club',
    context: 'Communautaire',
    duration: '2 semaines',
    mission:
      'Identité visuelle complète et roll-up grand format pour TechForge, club technologique universitaire — « Where Ideas Meet Innovation » — couvrant développement, IA, cybersécurité et réseaux.',
    analysis:
      'Le roll-up organise l’histoire du club en infographie bilingue arabe/français : mission, domaines, raisons de rejoindre et objectifs, illustrés d’éléments 3D dans un système vert et or dérivé du logo.',
    intervention:
      'J’ai conçu le logo du club, construit le système visuel vert/or complet et produit le roll-up : mise en page, intégration d’illustrations 3D, composition bilingue et préparation à l’impression.',
  },
  posters: {
    type: 'Design Réseaux Sociaux',
    context: 'Professionnel & Communautaire',
    client: 'Clients variés',
    duration: 'Continu',
    mission:
      'Une série continue d’affiches et de designs réseaux sociaux pour agences médias, associations et événements culturels — annonces, occasions religieuses, campagnes et promos broadcast.',
    analysis:
      'Chaque affiche équilibre typographie arabe et calligraphie avec une imagerie forte : rendus 3D, compositions de lanternes et de mosquées, mises en page bilingues et hiérarchie d’information claire, adaptées au système identitaire de chaque client.',
    intervention:
      'J’ai conçu chaque pièce de bout en bout : concept, composition, typographie, système de couleurs et production finale pour l’impression et les plateformes sociales.',
  },
};

/** Returns a project with its localizable fields swapped for the requested language. */
export function localizeProject(p: Project, lang: Lang): Project {
  if (lang !== 'fr') return p;
  const fr = PROJECTS_FR[p.id];
  if (!fr) return p;
  return { ...p, ...fr, client: fr.client ?? p.client };
}

/* ============================================================
   CREDENTIALS — French copies
   ============================================================ */
interface CredentialFr {
  title: string;
  issuer: string;
  location: string;
  kind: string;
  description: string;
}

export const CREDENTIALS_FR: Record<string, CredentialFr> = {
  'finsec-olympiad': {
    title: 'Olympiade Internationale de la Sécurité Financière',
    issuer: 'Comité international de l’Olympiade',
    location: 'Russie',
    kind: 'ATTESTATION',
    description:
      'Attestation de reconnaissance — sécurité financière, risques liés à l’IA, cybersécurité et menaces numériques.',
  },
  'nuit-info': {
    title: "Nuit de l'Info",
    issuer: 'Concours national de développement collaboratif',
    location: 'Mauritanie',
    kind: 'PARTICIPATION',
    description:
      'Compétition nocturne en équipe axée sur l’innovation, la résolution de problèmes et le prototypage rapide.',
  },
  'ai-conference': {
    title: 'Conférence IA #2',
    issuer: 'Université de Nouakchott',
    location: 'Nouakchott',
    kind: 'PARTICIPATION',
    description:
      'Deuxième conférence nationale sur l’IA — applications de l’intelligence artificielle, transformation numérique et enjeux technologiques contemporains.',
  },
};

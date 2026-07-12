'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'fr';

/* ============================================================
   UI DICTIONARY
   ============================================================ */
export const UI = {
  en: {
    hero: {
      label: 'Top Secret // Case #2026',
      sub1a: 'Fullstack',
      sub1b: ' Developer & ',
      sub1c: 'Digital',
      sub1d: ' Designer.',
      sub2a: 'Backend',
      sub2b: ' Rigor, ',
      sub2c: 'Frontend',
      sub2d: ' Interactivity & Visual Production.',
      sub3: 'Open to opportunities.',
    },
    boards: {
      dev: { title: 'EVIDENCE BOARD', sector: 'SECTOR: DEV_OPS', badge: 'REPOS' },
      design: { title: 'PRODUCTION ARCHIVE', sector: 'SECTOR: DESIGN_OPS', badge: 'ARTWORKS' },
      scanning: 'SCANNING: ACTIVE',
      archive: 'EVIDENCE ARCHIVE',
      files: 'FILES',
      evidence: 'EVIDENCE',
      decrypt: '[ CLICK TO DECRYPT ]',
      slider: 'SLIDER',
      list: 'LIST',
    },
    motion: {
      title: 'SURVEILLANCE FEED',
      sector: 'SECTOR: MOTION / VIDEO',
      playback: 'PLAYBACK: READY',
      caption: 'VIDEO EDITING × MOTION DESIGN × BROADCAST — TAPES LINK TO ORIGINAL FOOTAGE',
      archive: 'FOOTAGE ARCHIVE',
      tapes: 'TAPES',
    },
    viewer: {
      caseCrumb: 'CASE #2026',
      close: 'CLOSE TERMINAL [ESC]',
      topsecret: 'TOP SECRET // DECRYPTED',
      year: 'YEAR',
      context: 'CONTEXT',
      client: 'CLIENT',
      time: 'TIME',
      mission: 'MISSION_REPORT',
      analysis: 'TECHNICAL_ANALYSIS',
      intervention: 'MY_INTERVENTION',
      gallery: 'ADDITIONAL_EVIDENCE_LOG',
      files: 'FILES',
      tags: 'TAGS',
      stack: 'STACK',
    },
    about: {
      title: 'SUBJECT PROFILE',
      caseFile: 'CASE FILE: MD-222',
      status: 'STATUS: STUDYING / BUILDING',
      report: 'COMPETENCE_ANALYSIS_REPORT',
      readonly: '[READ_ONLY]',
      intro1: 'Hybrid profile merging ',
      introCode: 'code',
      intro2: ', ',
      introAI: 'AI',
      intro3: ' and ',
      introVisual: 'visual production',
      intro4:
        ". I don't just build websites — I design complete digital experiences, from the database schema to the final pixel.",
      academicLog: '// ACADEMIC_LOG [EDUCATION]',
      fieldOps: '// FIELD_OPERATIONS [EXPERIENCE]',
      communityOps: '// COMMUNITY_OPS [ENGAGEMENT]',
      uniLine: 'LICENCE DA2I — Web Development, Internet & Intranet Administration',
      bacLine: 'SERIES MATHEMATICS',
      agenceLine: 'Media production, visuals & AI-powered newsroom workflows (Absat)',
      i3mLine: 'Graphic design, visual identity & digital content production',
      serviLine: 'Video production, editing & creative coordination',
      imtiyazLine: 'Educational content, communication & media supports',
      techforgeLine: 'Development, AI & innovation workshops — Univ. Nouakchott',
      safaLine: 'Cultural & civic initiatives, event organization',
      equipment: 'EQUIPMENT_INVENTORY',
      hardSkills: 'HARD SKILLS',
      softSkills: 'SOFT SKILLS',
      openToWork: 'OPEN TO WORK',
      contracts: '// CONTRACTS: ENABLED',
      remote: '[REMOTE_READY]',
      downloadCv: 'DOWNLOAD CV [PDF]',
      creativity: 'CREATIVITY: HIGH',
      soft: ['Problem Solving', 'Autonomy', 'Creativity', 'Versatility', 'Documentation', 'Team Work'],
    },
    credentials: {
      title: 'CLEARANCE RECORDS',
      meta1: 'CERTIFICATES & EVENTS',
      meta2: 'AUTHENTICITY: VERIFIED',
      record: 'RECORD',
      issuer: 'ISSUER',
      location: 'LOCATION',
      archived: 'STATUS: ARCHIVED',
    },
    cta: {
      label: 'PROTOCOL_ALT // SOURCE_MODE',
      title: 'This portfolio also exists in code',
      desc: 'Inspect the raw evidence. Repositories, commits and experiments — the full investigation trail is public on GitHub.',
      btn: 'ACCESS GITHUB',
      status: 'STATUS',
      online: 'ONLINE',
      handle: 'HANDLE',
      access: 'ACCESS',
      public: 'PUBLIC',
    },
    contact: {
      channel: 'CHANNEL OPEN',
      title1: 'What if we',
      title2: 'worked together?',
      btn: 'INITIATE CONTACT',
      cv: 'DOWNLOAD CV [PDF]',
      secure: 'SECURE LINE ESTABLISHED',
      marquee: 'INITIATE PROTOCOL // START TRANSMISSION // INITIATE PROTOCOL // START TRANSMISSION //',
    },
  },
  fr: {
    hero: {
      label: 'Top Secret // Dossier #2026',
      sub1a: 'Développeur',
      sub1b: ' Fullstack & ',
      sub1c: 'Designer',
      sub1d: ' Digital.',
      sub2a: 'Rigueur',
      sub2b: ' Backend, ',
      sub2c: 'Interactivité',
      sub2d: ' Frontend & Production Visuelle.',
      sub3: 'Ouvert aux opportunités.',
    },
    boards: {
      dev: { title: 'TABLEAU DES PREUVES', sector: 'SECTEUR: DEV_OPS', badge: 'DÉPÔTS' },
      design: { title: 'ARCHIVE DE PRODUCTION', sector: 'SECTEUR: DESIGN_OPS', badge: 'CRÉATIONS' },
      scanning: 'SCAN: ACTIF',
      archive: 'ARCHIVE DES PREUVES',
      files: 'FICHIERS',
      evidence: 'PREUVE',
      decrypt: '[ CLIQUER POUR DÉCRYPTER ]',
      slider: 'SLIDER',
      list: 'LISTE',
    },
    motion: {
      title: 'FLUX DE SURVEILLANCE',
      sector: 'SECTEUR: MOTION / VIDÉO',
      playback: 'LECTURE: PRÊTE',
      caption: 'MONTAGE VIDÉO × MOTION DESIGN × BROADCAST — LES BANDES MÈNENT AUX VIDÉOS ORIGINALES',
      archive: 'ARCHIVE VIDÉO',
      tapes: 'BANDES',
    },
    viewer: {
      caseCrumb: 'DOSSIER #2026',
      close: 'FERMER LE TERMINAL [ESC]',
      topsecret: 'TOP SECRET // DÉCRYPTÉ',
      year: 'ANNÉE',
      context: 'CONTEXTE',
      client: 'CLIENT',
      time: 'DURÉE',
      mission: 'RAPPORT_DE_MISSION',
      analysis: 'ANALYSE_TECHNIQUE',
      intervention: 'MON_INTERVENTION',
      gallery: 'PREUVES_SUPPLÉMENTAIRES',
      files: 'FICHIERS',
      tags: 'TAGS',
      stack: 'STACK',
    },
    about: {
      title: 'PROFIL DU SUJET',
      caseFile: 'DOSSIER: MD-222',
      status: 'STATUT: ÉTUDES / CRÉATION',
      report: "RAPPORT_D'ANALYSE_DES_COMPÉTENCES",
      readonly: '[LECTURE_SEULE]',
      intro1: 'Profil hybride fusionnant ',
      introCode: 'code',
      intro2: ', ',
      introAI: 'IA',
      intro3: ' et ',
      introVisual: 'production visuelle',
      intro4:
        '. Je ne construis pas seulement des sites web — je conçois des expériences numériques complètes, du schéma de base de données au pixel final.',
      academicLog: '// JOURNAL_ACADÉMIQUE [FORMATION]',
      fieldOps: '// OPÉRATIONS_TERRAIN [EXPÉRIENCE]',
      communityOps: '// OPS_COMMUNAUTAIRES [ENGAGEMENT]',
      uniLine: 'LICENCE DA2I — Développement Web, Administration Internet & Intranet',
      bacLine: 'SÉRIE MATHÉMATIQUES',
      agenceLine: 'Production médiatique, visuels & workflows de rédaction propulsés par IA (Absat)',
      i3mLine: 'Design graphique, identité visuelle & production de contenus numériques',
      serviLine: 'Production vidéo, montage & coordination créative',
      imtiyazLine: 'Contenus éducatifs, communication & supports médiatiques',
      techforgeLine: 'Ateliers développement, IA & innovation — Univ. Nouakchott',
      safaLine: 'Initiatives culturelles & citoyennes, organisation d’événements',
      equipment: 'INVENTAIRE_ÉQUIPEMENT',
      hardSkills: 'COMPÉTENCES TECH',
      softSkills: 'SOFT SKILLS',
      openToWork: 'DISPONIBLE',
      contracts: '// CONTRATS: ACTIVÉS',
      remote: '[REMOTE_OK]',
      downloadCv: 'TÉLÉCHARGER LE CV [PDF]',
      creativity: 'CRÉATIVITÉ: ÉLEVÉE',
      soft: ['Résolution de problèmes', 'Autonomie', 'Créativité', 'Polyvalence', 'Documentation', 'Esprit d’équipe'],
    },
    credentials: {
      title: 'ACCRÉDITATIONS',
      meta1: 'CERTIFICATS & ÉVÉNEMENTS',
      meta2: 'AUTHENTICITÉ: VÉRIFIÉE',
      record: 'DOSSIER',
      issuer: 'ÉMETTEUR',
      location: 'LIEU',
      archived: 'STATUT: ARCHIVÉ',
    },
    cta: {
      label: 'PROTOCOLE_ALT // MODE_SOURCE',
      title: 'Ce portfolio existe aussi en code',
      desc: 'Inspectez les preuves brutes. Dépôts, commits et expérimentations — toute la piste d’enquête est publique sur GitHub.',
      btn: 'ACCÉDER AU GITHUB',
      status: 'STATUT',
      online: 'EN LIGNE',
      handle: 'PSEUDO',
      access: 'ACCÈS',
      public: 'PUBLIC',
    },
    contact: {
      channel: 'CANAL OUVERT',
      title1: 'Et si on travaillait',
      title2: 'ensemble ?',
      btn: 'INITIER LE CONTACT',
      cv: 'TÉLÉCHARGER LE CV [PDF]',
      secure: 'LIGNE SÉCURISÉE ÉTABLIE',
      marquee: 'PROTOCOLE INITIÉ // DÉBUT DE TRANSMISSION // PROTOCOLE INITIÉ // DÉBUT DE TRANSMISSION //',
    },
  },
} as const;

export type UIDict = (typeof UI)['en'];

/* ============================================================
   CONTEXT
   ============================================================ */
interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: UIDict;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: UI.en,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('mel-lang') as Lang | null;
    if (saved === 'fr' || saved === 'en') setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('mel-lang', l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: UI[lang] as UIDict }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

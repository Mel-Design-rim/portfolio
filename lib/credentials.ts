export interface Credential {
  id: string;
  title: string;
  issuer: string;
  location: string;
  year: string;
  kind: string;
  description: string;
  /** optional scan of the certificate — shown in a lightbox when present */
  image?: string;
}

export const CREDENTIALS: Credential[] = [
  {
    id: 'finsec-olympiad',
    title: 'International Financial Security Olympiad',
    issuer: 'International Olympiad Committee',
    location: 'Russia',
    year: '2026',
    kind: 'ATTESTATION',
    description:
      'Attestation of recognition — financial security, AI-related risks, cybersecurity and digital threats.',
    image: 'Winner-of-the-Qualifying-Stage-2026.pdf',
  },
  {
    id: 'nuit-info',
    title: "Nuit de l'Info",
    issuer: 'National collaborative dev competition',
    location: 'Mauritania',
    year: '2026',
    kind: 'PARTICIPATION',
    description:
      'Overnight team competition focused on innovation, problem solving and rapid prototyping.',
  },
  {
    id: 'ai-conference',
    title: 'AI Conference #2',
    issuer: 'Université de Nouakchott',
    location: 'Nouakchott',
    year: '2025',
    kind: 'PARTICIPATION',
    description:
      'Second national AI conference — applications of AI, digital transformation and contemporary tech challenges.',
  },
];

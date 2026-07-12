'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import { CREDENTIALS } from '@/lib/credentials';
import { CREDENTIALS_FR } from '@/lib/projects-fr';
import { useLang } from '@/lib/i18n';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * CLEARANCE RECORDS — certificates, attestations and event participations,
 * styled as stamped classified documents.
 */
export default function Credentials() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="credentials-section" id="credentials">
      <div className="section-header about-header">
        <h2 className="serif reveal-text">{t.credentials.title}</h2>
        <div className="mono text-dim section-header-meta reveal-text">
          {t.credentials.meta1}
          <br />
          {t.credentials.meta2}
        </div>
      </div>
      <div className="reveal-line"></div>

      <div className="credentials-grid">
        {CREDENTIALS.map((raw, i) => {
          const c = lang === 'fr' && CREDENTIALS_FR[raw.id] ? { ...raw, ...CREDENTIALS_FR[raw.id] } : raw;
          return (
          <div
            className="credential-card"
            key={c.id}
            data-reveal
            data-reveal-delay={String(i * 0.1)}
            onClick={() => c.image && setLightboxSrc(c.image)}
            data-cursor-text={c.image ? 'VIEW_DOC' : undefined}
          >
            <div className="corner tl"></div>
            <div className="corner tr"></div>
            <div className="corner bl"></div>
            <div className="corner br"></div>
            <div className="cred-head">
              <span className="cred-id mono">{t.credentials.record} #{pad(i + 1)}</span>
              <span className="cred-stamp mono">{c.kind}</span>
            </div>
            <h3 className="cred-title">{c.title}</h3>
            <div className="cred-issuer mono">
              {t.credentials.issuer}: <b>{c.issuer}</b>
              <br />
              {t.credentials.location}: <b>{c.location}</b>
            </div>
            <p className="cred-desc">{c.description}</p>
            <div className="cred-foot mono">
              <span>{t.credentials.archived}</span>
              <span className="cred-year">[{c.year}]</span>
            </div>
            
          </div>
          
          );
        })}
      </div>

      <div className={`lightbox-overlay${lightboxSrc ? ' is-open' : ''}`} onClick={() => setLightboxSrc(null)}>
        <button className="lightbox-close mono">CLOSE EVIDENCE [ESC]</button>
        <div className="lightbox-content">{lightboxSrc && <img src={lightboxSrc} alt="certificate" />}</div>
      </div>
    </section>
  );
}

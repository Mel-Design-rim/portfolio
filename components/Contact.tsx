'use client';

import { useLang } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLang();
  return (
    <section className="contact-section" id="contact">
      <div className="ambient-blob blob-2" aria-hidden="true"></div>
      <div className="bg-marquee serif" id="bgMarquee">
        {t.contact.marquee}
      </div>
      <div className="contact-terminal" data-reveal>
        <div className="mono text-accent channel-open">
          <span className="status-light"></span> {t.contact.channel}
        </div>
        <h2 className="contact-title serif">
          {t.contact.title1}
          <br />
          {t.contact.title2}
        </h2>
        <div className="mono text-accent contact-email">mel.design.rim@gmail.com</div>
        <a href="mailto:mel.design.rim@gmail.com" className="contact-btn mono" data-cursor-text="SEND_MAIL">
          {t.contact.btn}
        </a>
        <br />
        <a
          href="/assets/cv/cheikh-malaynine-aboubacrine-cv.pdf"
          download
          className="cv-download contact-cv mono"
          data-cursor-text="GET_FILE"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {t.contact.cv}
        </a>
        <div className="social-links mono">
          <a
            href="https://github.com/Mel-Design-rim"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-cursor-text="ACCESS"
          >
            <span className="bracket">[ </span>GITHUB<span className="bracket"> ]</span>
          </a>
          <a
            href="https://www.linkedin.com/in/cheikhmalaynineaboubacrin"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-cursor-text="ACCESS"
          >
            <span className="bracket">[ </span>LINKEDIN<span className="bracket"> ]</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550362242669"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-cursor-text="ACCESS"
          >
            <span className="bracket">[ </span>FACEBOOK<span className="bracket"> ]</span>
          </a>
        </div>
        <div className="mono contact-footer">
          {t.contact.secure}
          <br />
          <span>© 2026 CHEIKH MALAYNINE ABOUBACRIN</span>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { useLang, type Lang } from '@/lib/i18n';

/**
 * FR/EN switcher pinned under the top-right HUD, with a shutter
 * transition ("SWITCHING_LANG") like the original site.
 */
export default function LangSwitcher() {
  const { lang, setLang } = useLang();
  const [transitioning, setTransitioning] = useState(false);

  const switchTo = (l: Lang) => {
    if (l === lang || transitioning) return;
    setTransitioning(true);
    setTimeout(() => setLang(l), 420);
    setTimeout(() => setTransitioning(false), 900);
  };

  return (
    <>
      <div className="lang-switcher mono">
        <button
          className={`lang-btn${lang === 'fr' ? ' active' : ''}`}
          onClick={() => switchTo('fr')}
          data-cursor-text="SWITCH"
          aria-label="Français"
        >
          FR
        </button>
        <button
          className={`lang-btn${lang === 'en' ? ' active' : ''}`}
          onClick={() => switchTo('en')}
          data-cursor-text="SWITCH"
          aria-label="English"
        >
          EN
        </button>
      </div>

      <div className={`lang-transition${transitioning ? ' is-active' : ''}`} aria-hidden="true">
        <div className="shutter shutter-top"></div>
        <div className="shutter shutter-bottom"></div>
        <div className="lang-transition-ui mono">
          <div className="cyber-circle"></div>
          <div className="cyber-text">SWITCHING_LANG...</div>
        </div>
      </div>
    </>
  );
}

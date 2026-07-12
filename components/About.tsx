'use client';

import { useLang } from '@/lib/i18n';

export default function About() {
  const { t } = useLang();
  return (
    <section className="about-section" id="about">
      <div className="section-header about-header">
        <h2 className="serif">{t.about.title}</h2>
        <div className="mono text-dim section-header-meta">
          {t.about.caseFile}
          <br />
          {t.about.status}
        </div>
      </div>

      <div className="profiler-container">
        {/* -------- identity -------- */}
        <div className="profiler-module col-identity" data-reveal>
          <div className="identity-name mono">CHEIKH MALAYNINE ABOUBACRIN</div>
          <div className="fingerprint-scanner">
            <div className="scanner-frame-profile">
              <div className="scanner-grid-overlay-profile"></div>
              <div className="face-target-box-profile">
                <div className="ft-corner ft-tl"></div>
                <div className="ft-corner ft-tr"></div>
                <div className="ft-corner ft-bl"></div>
                <div className="ft-corner ft-br"></div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/profile.jpg"
                alt="Cheikh Malainine Aboubacrin — Mel Design"
                className="photo-img-profile"
              />
              <div className="scan-data-profile data-top mono">REC_ACTIVE [●]</div>
              <div className="scan-data-profile data-bot mono">ID_MATCH: 99.9%</div>
              <div className="scan-beam"></div>
            </div>
          </div>
          <div className="id-data-grid mono">
            <div>
              <span className="id-key">CLASS:</span>
              <span className="id-val">DEV × DESIGNER</span>
            </div>
            <div>
              <span className="id-key">XP_LEVEL:</span>
              <span className="id-val">LICENCE_DA2I</span>
            </div>
            <div>
              <span className="id-key">LANG_1:</span>
              <span className="id-val">AR (Native)</span>
            </div>
            <div>
              <span className="id-key">LANG_2:</span>
              <span className="id-val">FR (Fluent)</span>
            </div>
            <div>
              <span className="id-key">LANG_3:</span>
              <span className="id-val">EN (Technical)</span>
            </div>
          </div>
          <a href="mailto:mel.design.rim@gmail.com" className="status-wrapper" data-cursor-text="CONTACT_ME">
            <div className="status-bg-scroll"></div>
            <div className="status-header mono">
              <span className="status-dot"></span> SYSTEM_ALERT
            </div>
            <div className="status-main">{t.about.openToWork}</div>
            <div className="status-footer mono">
              <span>{t.about.contracts}</span>
              <span>{t.about.remote}</span>
            </div>
          </a>
          <a
            href="/assets/cv/cheikh-malaynine-aboubacrine-cv.pdf"
            download
            className="cv-download mono"
            data-cursor-text="GET_FILE"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t.about.downloadCv}
          </a>
        </div>

        {/* -------- analysis report -------- */}
        <div className="profiler-module col-behavior" data-reveal data-reveal-delay="0.1">
          <div className="analysis-header mono">
            <span>{t.about.report}</span>
            <span>{t.about.readonly}</span>
          </div>
          <div className="psych-report">
            <p className="report-intro">
              {t.about.intro1}<span className="evidence-highlight">{t.about.introCode}</span>{t.about.intro2}
              <span className="evidence-highlight">{t.about.introAI}</span>{t.about.intro3}
              <span className="evidence-highlight">{t.about.introVisual}</span>{t.about.intro4}
            </p>

            <div className="history-block">
              <h4 className="mono">{t.about.academicLog}</h4>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[UNIV. NOUAKCHOTT]</span>
                  <span className="history-period">2023—NOW</span>
                </div>
                <div>{t.about.uniLine}</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[BACCALAURÉAT]</span>
                  <span className="history-period">2023</span>
                </div>
                <div>{t.about.bacLine}</div>
              </div>
            </div>

            <div className="history-block">
              <h4 className="mono">{t.about.fieldOps}</h4>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[AGENCE D&apos;INFO INDÉPENDANTE]</span>
                  <span className="history-period">MEDIA</span>
                </div>
                <div>{t.about.agenceLine}</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[i3M AGENCY]</span>
                  <span className="history-period">DESIGN</span>
                </div>
                <div>{t.about.i3mLine}</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[SERVIPROD / RIADA]</span>
                  <span className="history-period">AUDIOVISUAL</span>
                </div>
                <div>{t.about.serviLine}</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[IMTIYAZ / BACHAER]</span>
                  <span className="history-period">EDU × MEDIA</span>
                </div>
                <div>{t.about.imtiyazLine}</div>
              </div>
            </div>

            <div className="history-block">
              <h4 className="mono">{t.about.communityOps}</h4>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[TECHFORGE CLUB]</span>
                  <span className="history-period">TECH</span>
                </div>
                <div>{t.about.techforgeLine}</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[SAFA / CHABIBA]</span>
                  <span className="history-period">CULTURE</span>
                </div>
                <div>{t.about.safaLine}</div>
              </div>
            </div>
          </div>
        </div>

        {/* -------- capabilities -------- */}
        <div className="col-capabilities-wrapper">
          <div className="profiler-module cap-top" data-reveal data-reveal-delay="0.2">
            <div className="mono equipment-label">{t.about.equipment}</div>
            <div className="tech-category">
              <span className="cat-title text-accent mono">{t.about.hardSkills}</span>
              <div className="chips-grid">
                <div className="tech-chip">React</div>
                <div className="tech-chip">Next.js</div>
                <div className="tech-chip">TypeScript</div>
                <div className="tech-chip">Tailwind</div>
                <div className="tech-chip">Python</div>
                <div className="tech-chip">Django / DRF</div>
                <div className="tech-chip">Java</div>
                <div className="tech-chip">Spring Boot</div>
                <div className="tech-chip">MySQL</div>
                <div className="tech-chip">SwiftUI</div>
                <div className="tech-chip text-accent">AI Integration</div>
                <div className="tech-chip">UI/UX</div>
                <div className="tech-chip">Video Editing</div>
              </div>
            </div>
            <div className="tech-category">
              <span className="cat-title mono">{t.about.softSkills}</span>
              <div className="chips-grid">
                {t.about.soft.map((skill) => (
                  <div className="tech-chip" key={skill}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="profiler-module cap-bottom" data-reveal data-reveal-delay="0.3">
            <div className="threat-level">
              <div className="alert-box">
                <svg className="alert-svg" viewBox="0 0 100 100">
                  <path className="triangle-bg" d="M50,15 L90,85 L10,85 Z"></path>
                  <path className="triangle-line" d="M50,15 L90,85 L10,85 Z"></path>
                  <rect className="alert-mark-bar" x="48" y="38" width="4" height="24"></rect>
                  <circle className="alert-mark-dot" cx="50" cy="73" r="3"></circle>
                </svg>
              </div>
              <div className="mono text-accent threat-text">{t.about.creativity}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

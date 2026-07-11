export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-header about-header">
        <h2 className="serif">SUBJECT PROFILE</h2>
        <div className="mono text-dim section-header-meta">
          CASE FILE: MD-222
          <br />
          STATUS: STUDYING / BUILDING
        </div>
      </div>

      <div className="profiler-container">
        {/* -------- identity -------- */}
        <div className="profiler-module col-identity" data-reveal>
          <div className="identity-name mono">MEL DESIGN RIM</div>
          <div className="fingerprint-scanner">
            <div className="scanner-frame-profile">
              <div className="scanner-grid-overlay-profile"></div>
              <div className="face-target-box-profile">
                <div className="ft-corner ft-tl"></div>
                <div className="ft-corner ft-tr"></div>
                <div className="ft-corner ft-bl"></div>
                <div className="ft-corner ft-br"></div>
              </div>
              <svg className="photo-silhouette" viewBox="0 0 200 240" aria-label="Classified identity">
                <rect width="200" height="240" fill="#0d0d0d" />
                <circle cx="100" cy="88" r="42" fill="#1c1c1c" />
                <path d="M30 240 C30 165 170 165 170 240 Z" fill="#1c1c1c" />
                <text
                  x="100"
                  y="132"
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="13"
                  fill="#2a8dff"
                  letterSpacing="2"
                >
                  CLASSIFIED
                </text>
              </svg>
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
            <div className="status-main">OPEN TO WORK</div>
            <div className="status-footer mono">
              <span>{'// CONTRACTS: ENABLED'}</span>
              <span>[REMOTE_READY]</span>
            </div>
          </a>
        </div>

        {/* -------- analysis report -------- */}
        <div className="profiler-module col-behavior" data-reveal data-reveal-delay="0.1">
          <div className="analysis-header mono">
            <span>COMPETENCE_ANALYSIS_REPORT</span>
            <span>[READ_ONLY]</span>
          </div>
          <div className="psych-report">
            <p className="report-intro">
              Hybrid profile merging <span className="evidence-highlight">code</span>,{' '}
              <span className="evidence-highlight">AI</span> and{' '}
              <span className="evidence-highlight">visual production</span>. I don&apos;t just build websites — I
              design complete digital experiences, from the database schema to the final pixel.
            </p>

            <div className="history-block">
              <h4 className="mono">{'// ACADEMIC_LOG [EDUCATION]'}</h4>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[UNIV. NOUAKCHOTT]</span>
                  <span className="history-period">2023—NOW</span>
                </div>
                <div>LICENCE DA2I — Web Development, Internet &amp; Intranet Administration</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[BACCALAURÉAT]</span>
                  <span className="history-period">2023</span>
                </div>
                <div>SERIES MATHEMATICS</div>
              </div>
            </div>

            <div className="history-block">
              <h4 className="mono">{'// FIELD_OPERATIONS [EXPERIENCE]'}</h4>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[AGENCE D&apos;INFO INDÉPENDANTE]</span>
                  <span className="history-period">MEDIA</span>
                </div>
                <div>Media production, visuals &amp; AI-powered newsroom workflows (Absat)</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[i3M AGENCY]</span>
                  <span className="history-period">DESIGN</span>
                </div>
                <div>Graphic design, visual identity &amp; digital content production</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[SERVIPROD / RIADA]</span>
                  <span className="history-period">AUDIOVISUAL</span>
                </div>
                <div>Video production, editing &amp; creative coordination</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[IMTIYAZ / BACHAER]</span>
                  <span className="history-period">EDU × MEDIA</span>
                </div>
                <div>Educational content, communication &amp; media supports</div>
              </div>
            </div>

            <div className="history-block">
              <h4 className="mono">{'// COMMUNITY_OPS [ENGAGEMENT]'}</h4>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[TECHFORGE CLUB]</span>
                  <span className="history-period">TECH</span>
                </div>
                <div>Development, AI &amp; innovation workshops — Univ. Nouakchott</div>
              </div>
              <div className="history-item">
                <div className="history-header mono">
                  <span className="history-date">[SAFA / CHABIBA]</span>
                  <span className="history-period">CULTURE</span>
                </div>
                <div>Cultural &amp; civic initiatives, event organization</div>
              </div>
            </div>
          </div>
        </div>

        {/* -------- capabilities -------- */}
        <div className="col-capabilities-wrapper">
          <div className="profiler-module cap-top" data-reveal data-reveal-delay="0.2">
            <div className="mono equipment-label">EQUIPMENT_INVENTORY</div>
            <div className="tech-category">
              <span className="cat-title text-accent mono">HARD SKILLS</span>
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
              <span className="cat-title mono">SOFT SKILLS</span>
              <div className="chips-grid">
                <div className="tech-chip">Problem Solving</div>
                <div className="tech-chip">Autonomy</div>
                <div className="tech-chip">Creativity</div>
                <div className="tech-chip">Versatility</div>
                <div className="tech-chip">Documentation</div>
                <div className="tech-chip">Team Work</div>
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
              <div className="mono text-accent threat-text">CREATIVITY: HIGH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

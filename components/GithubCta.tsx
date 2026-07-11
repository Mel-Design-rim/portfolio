export default function GithubCta() {
  return (
    <section className="immersive-cta-section">
      <div className="immersive-cta-inner" data-reveal>
        <div className="icta-corner icta-tl"></div>
        <div className="icta-corner icta-tr"></div>
        <div className="icta-corner icta-bl"></div>
        <div className="icta-corner icta-br"></div>
        <div className="icta-scanline"></div>
        <div className="icta-grid"></div>
        <div className="immersive-cta-content">
          <div className="immersive-cta-visual">
            <div className="icta-cube-container">
              <div className="icta-cube">
                <div className="icta-face icta-front"></div>
                <div className="icta-face icta-back"></div>
                <div className="icta-face icta-left"></div>
                <div className="icta-face icta-right"></div>
                <div className="icta-face icta-top"></div>
                <div className="icta-face icta-bottom"></div>
              </div>
            </div>
            <div className="icta-orbit-ring"></div>
            <div className="icta-orbit-ring icta-orbit-2"></div>
          </div>
          <div className="immersive-cta-text">
            <div className="icta-label mono">PROTOCOL_ALT {'//'} SOURCE_MODE</div>
            <h3 className="icta-title serif">This portfolio also exists in code</h3>
            <p className="icta-desc">
              Inspect the raw evidence. Repositories, commits and experiments — the full investigation trail is
              public on GitHub.
            </p>
            <a
              href="https://github.com/Mel-Design-rim"
              className="icta-btn mono"
              data-cursor-text="OPEN_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icta-btn-icon">▷</span>ACCESS GITHUB<span className="icta-btn-arrow">→</span>
            </a>
          </div>
          <div className="immersive-cta-meta mono">
            <div className="icta-meta-item">
              <span className="icta-meta-label">STATUS</span>
              <span className="icta-meta-val">
                <span className="icta-live-dot"></span>ONLINE
              </span>
            </div>
            <div className="icta-meta-item">
              <span className="icta-meta-label">HANDLE</span>
              <span className="icta-meta-val">@MEL-DESIGN-RIM</span>
            </div>
            <div className="icta-meta-item">
              <span className="icta-meta-label">ACCESS</span>
              <span className="icta-meta-val">PUBLIC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

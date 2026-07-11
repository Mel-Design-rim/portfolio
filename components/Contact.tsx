export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="ambient-blob blob-2" aria-hidden="true"></div>
      <div className="bg-marquee serif" id="bgMarquee">
        INITIATE PROTOCOL {'//'} START TRANSMISSION {'//'} INITIATE PROTOCOL {'//'} START TRANSMISSION {'//'}
      </div>
      <div className="contact-terminal" data-reveal>
        <div className="mono text-accent channel-open">
          <span className="status-light"></span> CHANNEL OPEN
        </div>
        <h2 className="contact-title serif">
          What if we
          <br />
          worked together?
        </h2>
        <div className="mono text-accent contact-email">mel.design.rim@gmail.com</div>
        <a href="mailto:mel.design.rim@gmail.com" className="contact-btn mono" data-cursor-text="SEND_MAIL">
          INITIATE CONTACT
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
          SECURE LINE ESTABLISHED
          <br />
          <span>© 2026 MEL DESIGN RIM</span>
        </div>
      </div>
    </section>
  );
}

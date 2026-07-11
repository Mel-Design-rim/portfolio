import Effects from '@/components/Effects';
import Loader from '@/components/Loader';
import Hud from '@/components/Hud';
import Cursor from '@/components/Cursor';
import Thread from '@/components/Thread';
import Hero from '@/components/Hero';
import EvidenceBoard from '@/components/EvidenceBoard';
import About from '@/components/About';
import GithubCta from '@/components/GithubCta';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      {/* hidden SEO block */}
      <section className="sr-only">
        <h1>MEL DESIGN — Fullstack Developer &amp; Digital Designer in Nouakchott, Mauritania</h1>
        <p>
          Computer science student at the University of Nouakchott (DA2I), specialized in web development, AI
          integration, UI/UX design and digital media production.
        </p>
        <nav>
          <a href="https://github.com/Mel-Design-rim">GitHub</a>
          <a href="https://www.linkedin.com/in/cheikhmalaynineaboubacrin">LinkedIn</a>
        </nav>
      </section>

      <div className="ambient-blob blob-1" aria-hidden="true"></div>
      <div className="noise-overlay" aria-hidden="true"></div>
      <div className="grid-bg" aria-hidden="true"></div>

      <Effects />
      <Loader />
      <Hud />
      <Cursor />
      <Thread />

      <main>
        <Hero />
        <EvidenceBoard />
        <About />
        <GithubCta />
        <Contact />
      </main>
    </>
  );
}

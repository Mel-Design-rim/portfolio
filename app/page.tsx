import Effects from '@/components/Effects';
import LangSwitcher from '@/components/LangSwitcher';
import { LangProvider } from '@/lib/i18n';
import MotionFeed from '@/components/MotionFeed';
import { DEV_PROJECTS, DESIGN_PROJECTS } from '@/lib/projects';
import Loader from '@/components/Loader';
import Hud from '@/components/Hud';
import Cursor from '@/components/Cursor';
import Thread from '@/components/Thread';
import Hero from '@/components/Hero';
import EvidenceBoard from '@/components/EvidenceBoard';
import About from '@/components/About';
import Credentials from '@/components/Credentials';
import GithubCta from '@/components/GithubCta';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <LangProvider>
      {/* hidden SEO block */}
      <section className="sr-only">
        <h1>Cheikh Malainine Aboubacrin — Fullstack Developer &amp; Digital Designer in Nouakchott, Mauritania</h1>
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
      <LangSwitcher />
      <Cursor />
      <Thread />

      <main>
        <Hero />
        <EvidenceBoard sectionId="projects" boardKey="dev" projects={DEV_PROJECTS} />
        <EvidenceBoard sectionId="production" boardKey="design" projects={DESIGN_PROJECTS} />
        <MotionFeed />
        <About />
        <Credentials />
        <GithubCta />
        <Contact />
      </main>
    </LangProvider>
  );
}

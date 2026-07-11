'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { LOADER_DONE_EVENT } from './Loader';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const spotlight = hero.querySelector<HTMLElement>('.spotlight-mask');
    const floats = hero.querySelectorAll<HTMLElement>('.float-item');

    // entrance after the loader curtains open
    const back = hero.querySelector('.hero-layer-back');
    const front = hero.querySelector('.hero-layer-front');
    const label = hero.querySelector('.hero-label');
    const subtitle = hero.querySelector('.hero-subtitle');
    gsap.set([back, front], { y: 90, opacity: 0, filter: 'blur(10px)' });
    gsap.set([label, subtitle], { y: 24, opacity: 0 });
    gsap.set(floats, { opacity: 0 });

    let played = false;
    const enter = () => {
      if (played) return;
      played = true;
      gsap
        .timeline()
        .to(label, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
        .to(back, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power4.out' }, '-=0.35')
        .to(front, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power4.out' }, '-=0.85')
        .to(subtitle, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to(floats, { opacity: 1, duration: 0.8, stagger: 0.15 }, '-=0.5');
    };
    window.addEventListener(LOADER_DONE_EVENT, enter);
    const fallback = setTimeout(enter, 4200);

    // mouse parallax
    const setters = Array.from(floats).map((el, i) => ({
      x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3.out' }),
      y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3.out' }),
      depth: (i + 1) * 14,
    }));
    const onMove = (e: MouseEvent) => {
      if (spotlight) {
        spotlight.style.setProperty('--x', `${e.clientX}px`);
        spotlight.style.setProperty('--y', `${e.clientY}px`);
      }
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      setters.forEach((s) => {
        s.x(nx * s.depth);
        s.y(ny * s.depth);
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      window.removeEventListener(LOADER_DONE_EVENT, enter);
      window.removeEventListener('mousemove', onMove);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="spotlight-mask"></div>
      <div className="scanner-line"></div>

      <div className="floating-container">
        <div className="float-item f-loc mono">
          LAT: 18.0735 N<br />
          LON: 15.9582 W<br />
          SECURE_GRID_222
        </div>
        <div className="float-item f-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/profile.jpg" className="f-img" alt="design evidence" />
          <span className="mono">EVIDENCE_A.jpg</span>
        </div>
        <div className="float-item f-code mono">
          &gt;&gt; analyzing logic...
          <br />
          &gt;&gt; pixels aligned
          <br />
          &gt;&gt; system optimized
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-label mono uppercase">Top Secret // Case #2026</div>
        <h1 className="hero-title serif">
          <span className="hero-layer-back">MEL</span>
          <br />
          <span className="hero-layer-front">DESIGN</span>
        </h1>
        <div className="hero-subtitle">
          <span>Fullstack</span> Developer &amp; <span>Digital</span> Designer.
          <br />
          <span>Backend</span> Rigor, <span>Frontend</span>{' '}Interactivity &amp; Visual Production.
          <br />
          Open to opportunities.
        </div>
      </div>
    </section>
  );
}

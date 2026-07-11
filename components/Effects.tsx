'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Global page effects: smooth scroll (Lenis), scroll-linked reveals
 * and the contact background marquee.
 */
export default function Effects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-text').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('.reveal-line').forEach((el) => {
        gsap.to(el, {
          scaleX: 1,
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: parseFloat(el.dataset.revealDelay || '0'),
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });

      const chipGroups = gsap.utils.toArray<HTMLElement>('.chips-grid');
      chipGroups.forEach((group) => {
        const chips = group.querySelectorAll('.tech-chip');
        if (!chips.length) return;
        gsap.fromTo(
          chips,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: { trigger: group, start: 'top 90%' },
          }
        );
      });

      const marquee = document.getElementById('bgMarquee');
      const contact = document.querySelector('.contact-section');
      if (marquee && contact) {
        gsap.to(marquee, {
          xPercent: -18,
          ease: 'none',
          scrollTrigger: { trigger: contact, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      }
    });

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}

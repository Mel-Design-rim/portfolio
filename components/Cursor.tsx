'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const mainRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLSpanElement>(null);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const main = mainRef.current;
    const data = dataRef.current;
    const coords = coordsRef.current;
    if (!main || !data || !coords) return;

    const xTo = gsap.quickTo(main, 'x', { duration: 0.18, ease: 'power3.out' });
    const yTo = gsap.quickTo(main, 'y', { duration: 0.18, ease: 'power3.out' });
    const xDataTo = gsap.quickTo(data, 'x', { duration: 0.4, ease: 'power3.out' });
    const yDataTo = gsap.quickTo(data, 'y', { duration: 0.4, ease: 'power3.out' });

    // direct DOM writes — no React re-render per mousemove
    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDataTo(e.clientX);
      yDataTo(e.clientY);
      coords.textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor-text], a, button');
      if (target) {
        main.classList.add('is-hover');
        setLabel(target.dataset.cursorText || 'OPEN');
      } else {
        main.classList.remove('is-hover');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <div className="cursor-main" ref={mainRef}>
        <div className="cursor-visual">
          <div className="cursor-label">{label}</div>
        </div>
      </div>
      <div className="cursor-data" ref={dataRef}>
        <span ref={coordsRef}>X: 0 Y: 0</span>
      </div>
    </>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * The red investigation thread drawn along the page as you scroll,
 * pinned at both ends like on an evidence board.
 */
export default function Thread() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const startPinRef = useRef<SVGCircleElement>(null);
  const endPinRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const path = pathRef.current;
    const startPin = startPinRef.current;
    const endPin = endPinRef.current;
    if (!container || !path || !startPin || !endPin) return;

    let trigger: ScrollTrigger | undefined;

    const build = () => {
      const docH = document.documentElement.scrollHeight;
      const w = window.innerWidth;
      const cx = w / 2;
      const startY = window.innerHeight * 0.22;
      const endY = docH - window.innerHeight * 0.5;

      container.style.height = `${docH}px`;
      const svg = container.querySelector('svg');
      if (svg) svg.style.height = `${docH}px`;

      const span = endY - startY;
      const d = [
        `M ${cx},${startY}`,
        `C ${cx - w * 0.32},${startY + span * 0.18} ${cx - w * 0.4},${startY + span * 0.32} ${cx},${startY + span * 0.5}`,
        `S ${cx + w * 0.4},${startY + span * 0.75} ${cx},${endY}`,
      ].join(' ');
      path.setAttribute('d', d);

      startPin.setAttribute('cx', String(cx));
      startPin.setAttribute('cy', String(startY));
      endPin.setAttribute('cx', String(cx));
      endPin.setAttribute('cy', String(endY));

      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;

      trigger?.kill();
      trigger = ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8,
        onUpdate: (self) => {
          path.style.strokeDashoffset = `${len * (1 - self.progress)}`;
        },
      });
    };

    // Build after layout settles (fonts, images)
    const t = setTimeout(build, 800);
    const onResize = () => build();
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', onResize);
      trigger?.kill();
    };
  }, []);

  return (
    <div className="thread-container" ref={containerRef} aria-hidden="true">
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <path ref={pathRef} className="thread-line" d="" />
        <circle ref={startPinRef} className="pin" r="8" />
        <circle ref={endPinRef} className="pin" r="8" />
      </svg>
    </div>
  );
}

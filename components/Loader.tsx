'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LOG_LINES = [
  'RESOURCES_LOADED',
  'PRELOADING_EVIDENCE...',
  'DOWNLOADING_ASSETS...',
  'AWAITING_DATABASE...',
  'HANDSHAKE_COMPLETE',
  'ESTABLISHING_SECURE_LINK',
  'PACKET_LOSS_0%',
  'RESOLVING_HOST_NKC.MR',
  'DECRYPTING_DRIVE_M',
  'ANALYZING_BIOMETRICS',
  'BYPASSING_FIREWALL',
  'INIT_SEQ_222',
];

export const LOADER_DONE_EVENT = 'mel:loader-done';

export default function Loader() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState<number[]>([]);
  const [freq, setFreq] = useState('12.4');
  const [counter, setCounter] = useState(0);
  const [granted, setGranted] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const cellsFrame = requestAnimationFrame(() => {
      setCells(Array.from({ length: 16 }, () => Math.floor(Math.random() * 90) + 10));
    });
    const freqInterval = setInterval(() => {
      setFreq((10 + Math.random() * 8).toFixed(1));
    }, 180);
    const lineInterval = setInterval(() => {
      setActiveLine((l) => (l + 1) % LOG_LINES.length);
    }, 160);

    const counterObj = { v: 0 };
    const tl = gsap.timeline();
    tl.to(counterObj, {
      v: 100,
      duration: 2.1,
      ease: 'power2.inOut',
      onUpdate: () => setCounter(Math.round(counterObj.v)),
    })
      .add(() => {
        setGranted(true);
        clearInterval(freqInterval);
        clearInterval(lineInterval);
      })
      .to(wrap.querySelector('.loader-ui-layer'), { opacity: 0, duration: 0.35 }, '+=0.35')
      .to(wrap.querySelector('.loader-info'), { opacity: 0, duration: 0.3 }, '<')
      .to(wrap.querySelector('.curtain-top'), { yPercent: -100, duration: 1, ease: 'power4.inOut' }, '<0.1')
      .to(wrap.querySelector('.curtain-bottom'), { yPercent: 100, duration: 1, ease: 'power4.inOut' }, '<')
      .add(() => {
        wrap.classList.add('is-done');
        window.dispatchEvent(new Event(LOADER_DONE_EVENT));
      });

    return () => {
      cancelAnimationFrame(cellsFrame);
      tl.kill();
      clearInterval(freqInterval);
      clearInterval(lineInterval);
    };
  }, []);

  return (
    <div className="loader-wrap" ref={wrapRef} aria-hidden="true">
      <div className="loader-curtain curtain-top"></div>
      <div className="loader-curtain curtain-bottom"></div>
      <div className="loader-ui-layer">
        <div className="loader-terminal">
          {LOG_LINES.map((line, i) => (
            <div key={line} className={`log-line${i === activeLine ? ' active' : ''}`}>
              {line}
            </div>
          ))}
        </div>
        <div className="loader-radar-box">
          <div className="radar-circle"></div>
          <div className="radar-coords">LAT: 18.0735 N</div>
          <div className={`radar-status${granted ? ' done' : ''}`}>
            {granted ? 'DECRYPTED' : 'SCANNING'}
          </div>
        </div>
        <div className="loader-matrix">
          {cells.map((n, i) => (
            <div key={i} className="matrix-cell">
              {n}
            </div>
          ))}
        </div>
        <div className="loader-freq">
          FREQ: <span>{freq}</span> Hz
        </div>
      </div>
      <div className="loader-info">
        <div className={`loader-status${granted ? ' granted' : ''}`}>
          {granted ? 'ACCESS GRANTED' : 'DECRYPTING'}
        </div>
        <div className="loader-counter">{counter}%</div>
      </div>
    </div>
  );
}

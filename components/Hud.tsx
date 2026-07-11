'use client';

import { useEffect, useRef } from 'react';

export default function Hud() {
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // direct DOM write — avoids a React re-render every tick
    const tick = () => {
      const el = timeRef.current;
      if (!el) return;
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      const frames = pad(Math.floor((d.getMilliseconds() / 1000) * 24));
      el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}:${frames}`;
    };
    const id = setInterval(tick, 120);
    tick();
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="hud-corner hud-tl">
        <span>CAM_04 [REC]</span>
        <span className="text-accent hud-sub">SIGNAL_STRONG</span>
      </div>
      <div className="hud-corner hud-tr">
        <span ref={timeRef}>00:00:00:00</span>
        <br />
        <span>ISO 800</span>
      </div>
      <div className="hud-corner hud-bl">
        <span className="live-dot"></span> <span>LIVE FEED</span>
      </div>
      <div className="hud-corner hud-br">
        <span className="hud-sub-dim">NKC.MR // SECURE_GRID_222</span>
        <br />
        <span>SYS. DIAGNOSTIC</span>
        <br />
        <span className="text-accent">STABLE</span>
      </div>
    </>
  );
}

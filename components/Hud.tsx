'use client';

import { useEffect, useState } from 'react';

export default function Hud() {
  const [time, setTime] = useState('00:00:00:00');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      const frames = pad(Math.floor((d.getMilliseconds() / 1000) * 24));
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}:${frames}`);
    };
    const id = setInterval(tick, 90);
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
        <span suppressHydrationWarning>{time}</span>
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

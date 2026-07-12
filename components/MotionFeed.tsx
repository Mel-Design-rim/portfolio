'use client';

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { VIDEOS } from '@/lib/videos';
import { useLang } from '@/lib/i18n';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * SURVEILLANCE FEED — dedicated slider for video / montage work.
 * Each tape links out to the original video (YouTube / Facebook).
 */
export default function MotionFeed() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const setWidthRef = useRef(0);
  const dragRef = useRef({ dragging: false, startX: 0, startPos: 0, moved: false });

  const applyPos = useCallback((pos: number, animate: boolean) => {
    const track = trackRef.current;
    const setW = setWidthRef.current;
    if (!track || !setW) return;
    let wrapped = pos % setW;
    if (wrapped > 0) wrapped -= setW;
    posRef.current = wrapped;
    if (animate) {
      gsap.to(track, { x: wrapped, duration: 0.7, ease: 'power3.out' });
    } else {
      gsap.set(track, { x: wrapped });
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      setWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  const step = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.tape-card');
    const stepW = card ? card.offsetWidth + 14 : 340;
    applyPos(posRef.current - dir * stepW, true);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { dragging: true, startX: e.clientX, startPos: posRef.current, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.dragging) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 6) d.moved = true;
    applyPos(d.startPos + dx, false);
  };
  const endDrag = () => {
    dragRef.current.dragging = false;
  };
  const onTapeClick = (e: React.MouseEvent) => {
    if (dragRef.current.moved) e.preventDefault(); // drag, not click
  };

  const tapes = [...VIDEOS, ...VIDEOS];

  return (
    <section className="projects-section motion-section" id="motion">
      <div className="section-header">
        <h2 className="serif reveal-text">{t.motion.title}</h2>
        <div className="mono text-dim reveal-text section-header-meta">
          {t.motion.sector}
          <br />
          {t.motion.playback}
        </div>
      </div>
      <div className="reveal-line"></div>

      <div className="projects-controls-bar">
        <div className="motion-caption mono">
          {t.motion.caption}
        </div>
        <div className="slider-controls">
          <button className="slider-arrow" onClick={() => step(-1)} aria-label="Previous tape" data-cursor-text="PREV">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="controls-separator"></div>
          <button className="slider-arrow" onClick={() => step(1)} aria-label="Next tape" data-cursor-text="NEXT">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="slider-container"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div className="slider-track" ref={trackRef}>
          {tapes.map((v, i) => (
            <a
              className="tape-card"
              key={`${v.id}-${i}`}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onTapeClick}
              data-cursor-text="PLAY"
              draggable={false}
            >
              <div className="tape-inner">
                <div className="corner tl"></div>
                <div className="corner tr"></div>
                <div className="corner bl"></div>
                <div className="corner br"></div>
                <div className="strip-scan-line"></div>
                <div className="tape-visual">
                  {v.platform === 'youtube' && v.ytId ? (
                    <img
                      src={`https://img.youtube.com/vi/${v.ytId}/hqdefault.jpg`}
                      className="tape-thumb"
                      alt={`Video tape ${pad((i % VIDEOS.length) + 1)}`}
                      loading="lazy"
                      draggable={false}
                    />
                  ) : (
                    <div className="tape-fb-placeholder">
                      <span className="mono">FB_FEED</span>
                      <div className="tape-fb-lines"></div>
                    </div>
                  )}
                  <div className="tape-play">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="tape-footer mono">
                  <span className="tape-id">TAPE_{pad((i % VIDEOS.length) + 1)}</span>
                  <span className="tape-platform">{v.platform === 'youtube' ? 'YOUTUBE' : 'FACEBOOK'}</span>
                  <span className="tape-rec"><span className="status-indicator"></span> REC</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="slider-badge">
          <div className="badge-barcode"></div>
          <div className="badge-content">
            <span className="badge-label">{t.motion.archive}</span>
            <span className="badge-count">{pad(VIDEOS.length)} {t.motion.tapes}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

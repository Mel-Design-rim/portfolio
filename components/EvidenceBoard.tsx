'use client';

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { type Project } from '@/lib/projects';
import { localizeProject } from '@/lib/projects-fr';
import { useLang } from '@/lib/i18n';

const pad = (n: number) => String(n).padStart(2, '0');

interface EvidenceBoardProps {
  sectionId: string;
  boardKey: 'dev' | 'design';
  projects: Project[];
}

export default function EvidenceBoard({ sectionId, boardKey, projects }: EvidenceBoardProps) {
  const { lang, t } = useLang();
  const board = t.boards[boardKey];
  const [view, setView] = useState<'slider' | 'list'>('slider');
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const setWidthRef = useRef(0);
  const dragRef = useRef({ dragging: false, startX: 0, startPos: 0, moved: false });

  /* ---------- slider positioning (infinite, 2 duplicated sets) ---------- */
  const applyPos = useCallback((pos: number, animate: boolean) => {
    const track = trackRef.current;
    const setW = setWidthRef.current;
    if (!track || !setW) return;
    // wrap into [-setW, 0)
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
  }, [view]);

  const step = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.project-strip');
    const stepW = card ? card.offsetWidth + 14 : 300;
    applyPos(posRef.current - dir * stepW, true);
  };

  /* ---------- drag ---------- */
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

  /* ---------- viewer ---------- */
  const openProject = (p: Project) => {
    if (dragRef.current.moved) return; // was a drag, not a click
    setSelected(p);
    window.__lenis?.stop();
  };
  const closeProject = useCallback(() => {
    setSelected(null);
    window.__lenis?.start();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (lightboxSrc) setLightboxSrc(null);
      else if (selected) closeProject();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, lightboxSrc, closeProject]);

  const localized = projects.map((p) => localizeProject(p, lang));
  const strips = [...localized, ...localized]; // duplicated set for seamless wrap
  const selectedIndex = selected ? projects.findIndex((p) => p.id === selected.id) : -1;
  const sel = selected ? localizeProject(selected, lang) : null;

  return (
    <section className="projects-section" id={sectionId}>
      <div className="section-header">
        <h2 className="serif reveal-text">{board.title}</h2>
        <div className="mono text-dim reveal-text section-header-meta">
          {board.sector}
          <br />
          {t.boards.scanning}
        </div>
      </div>
      <div className="reveal-line"></div>

      <div className="projects-controls-bar">
        <div className="view-mode-controls">
          <button
            className={`view-mode-btn${view === 'slider' ? ' active' : ''}`}
            onClick={() => setView('slider')}
            aria-label="Slider view"
            data-cursor-text="SLIDER"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="7" height="14" />
              <rect x="14" y="5" width="7" height="14" />
            </svg>
            <span>{t.boards.slider}</span>
          </button>
          <div className="view-mode-separator"></div>
          <button
            className={`view-mode-btn${view === 'list' ? ' active' : ''}`}
            onClick={() => setView('list')}
            aria-label="List view"
            data-cursor-text="LIST"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span>{t.boards.list}</span>
          </button>
        </div>
        {view === 'slider' && (
          <div className="slider-controls">
            <button className="slider-arrow" onClick={() => step(-1)} aria-label="Previous project" data-cursor-text="PREV">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="controls-separator"></div>
            <button className="slider-arrow" onClick={() => step(1)} aria-label="Next project" data-cursor-text="NEXT">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ---------------- SLIDER VIEW ---------------- */}
      <div
        className={`slider-container${view !== 'slider' ? ' view-hidden' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div className="slider-track" ref={trackRef}>
          {strips.map((p, i) => (
            <div
              className="project-strip"
              key={`${p.id}-${i}`}
              onClick={() => openProject(p)}
              data-cursor-text="DECRYPT"
            >
              <div className="project-strip-inner">
                <div className="corner tl"></div>
                <div className="corner tr"></div>
                <div className="corner bl"></div>
                <div className="corner br"></div>
                <div className="strip-scan-line"></div>
                <div className="strip-visual">
                  <img src={p.image} className="bg-img" alt={p.title} loading="lazy" draggable={false} />
                </div>
                <div className="strip-content">
                  <div className="strip-tech-header">
                    <div className="strip-barcode"></div>
                    <div className="strip-status">
                      <span className="uppercase">{p.type}</span>
                      <div className="status-indicator"></div>
                    </div>
                  </div>
                  <div className="strip-details">
                    <span className="strip-id">{t.boards.evidence} #{pad((i % projects.length) + 1)}</span>
                    <div className="strip-title-wrap">
                      <h3 className="strip-title">{p.title}</h3>
                    </div>
                    <div className="strip-access">{t.boards.decrypt}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-badge">
          <div className="badge-barcode"></div>
          <div className="badge-content">
            <span className="badge-label">{t.boards.archive}</span>
            <span className="badge-count">{pad(projects.length)} {board.badge}</span>
          </div>
        </div>
      </div>

      {/* ---------------- LIST VIEW ---------------- */}
      <div className={`projects-list${view !== 'list' ? ' view-hidden' : ''}`}>
        {localized.map((p, i) => (
          <div className="project-list-item" key={p.id} onClick={() => openProject(p)} data-cursor-text="DECRYPT">
            <div className="list-item-bg">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="list-item-content">
              <div className="list-item-left">
                <div className="list-item-barcode"></div>
                <div className="list-item-info">
                  <span className="list-item-id">{t.boards.evidence} #{pad(i + 1)}</span>
                  <h3 className="list-item-title serif">{p.title}</h3>
                </div>
              </div>
              <div className="list-item-center">
                <span className="list-item-type">{p.type}</span>
              </div>
              <div className="list-item-right">
                <div className="list-item-access">
                  <span>{t.boards.decrypt}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- PROJECT VIEWER ---------------- */}
      <div className={`project-viewer${selected ? ' is-open' : ''}`} role="dialog" aria-modal="true">
        {sel && (
          <>
            <div className="controls-header">
              <div className="viewer-crumb mono">
                {t.viewer.caseCrumb} <span className="crumb-sep">/</span> {t.boards.evidence} #{pad(selectedIndex + 1)}
              </div>
              <button className="close-btn mono" onClick={closeProject} data-cursor-text="CLOSE">
                {t.viewer.close}
              </button>
            </div>
            <div className="viewer-slide-wrapper">
              <img src={sel.image} className="viewer-bg" alt="" />
              <div className="project-details-overlay" data-lenis-prevent="true">
                <div className="scroll-content-inner">
                  {/* header */}
                  <div className="viewer-head">
                    <div className="mono text-accent viewer-topsecret">{t.viewer.topsecret}</div>
                    <h2 className="viewer-title serif">{sel.title}</h2>
                    <div className="mono viewer-type uppercase">{sel.type}</div>
                  </div>

                  {/* metadata strip */}
                  <div className="meta-strip mono">
                    <div className="meta-cell"><label>{t.viewer.year}</label><span>{sel.year}</span></div>
                    <div className="meta-cell"><label>{t.viewer.context}</label><span>{sel.context}</span></div>
                    <div className="meta-cell"><label>{t.viewer.client}</label><span>{sel.client}</span></div>
                    <div className="meta-cell"><label>{t.viewer.time}</label><span>{sel.duration}</span></div>
                  </div>

                  {/* hero image */}
                  <div className="viewer-hero-frame" onClick={() => setLightboxSrc(sel.image)} data-cursor-text="EXPAND">
                    <div className="corner tl"></div>
                    <div className="corner tr"></div>
                    <div className="corner bl"></div>
                    <div className="corner br"></div>
                    <div className="strip-scan-line"></div>
                    <img src={sel.image} alt={`${sel.title} main evidence`} />
                    <div className="viewer-hero-tag mono">EVIDENCE_MAIN.jpg</div>
                  </div>

                  {/* reports */}
                  <div className="report-grid">
                    <div className="report-block">
                      <h3 className="mono">{t.viewer.mission}</h3>
                      <p>{sel.mission}</p>
                    </div>
                    <div className="report-block">
                      <h3 className="mono">{t.viewer.analysis}</h3>
                      <p>{sel.analysis}</p>
                    </div>
                  </div>
                  <div className="intervention-block">
                    <h3 className="mono">{t.viewer.intervention}</h3>
                    <p>{sel.intervention}</p>
                  </div>

                  {/* tags + stack */}
                  <div className="viewer-chips-row mono">
                    <label>{t.viewer.tags}</label>
                    <div className="chips-grid">
                      {sel.tags.map((t) => (
                        <div className="tech-chip" key={t}>{t}</div>
                      ))}
                    </div>
                  </div>
                  <div className="viewer-chips-row mono">
                    <label>{t.viewer.stack}</label>
                    <div className="chips-grid">
                      {sel.stack.map((t) => (
                        <div className="tech-chip" key={t}>{t}</div>
                      ))}
                    </div>
                  </div>

                  {/* links */}
                  {sel.links.length > 0 && (
                    <div className="viewer-links-row">
                      {sel.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          data-cursor-text="VISIT"
                        >
                          {l.label} →
                        </a>
                      ))}
                    </div>
                  )}

                  {/* full gallery */}
                  {sel.evidence.length > 0 && (
                    <div className="viewer-gallery">
                      <div className="gallery-header mono">
                        <span>{t.viewer.gallery}</span>
                        <span className="text-accent">{pad(sel.evidence.length)} {t.viewer.files}</span>
                      </div>
                      <div className="gallery-grid">
                        {sel.evidence.map((src, gi) => (
                          <div className="gallery-item" key={src} onClick={() => setLightboxSrc(src)} data-cursor-text="EXPAND">
                            <img src={src} alt={`evidence ${gi + 1}`} loading="lazy" />
                            <span className="gallery-tag mono">FILE_{pad(gi + 1)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ---------------- LIGHTBOX ---------------- */}
      <div className={`lightbox-overlay${lightboxSrc ? ' is-open' : ''}`} onClick={() => setLightboxSrc(null)}>
        <button className="lightbox-close mono">CLOSE EVIDENCE [ESC]</button>
        <div className="lightbox-content">
          {lightboxSrc && <img src={lightboxSrc} alt="evidence enlarged" />}
        </div>
      </div>
    </section>
  );
}

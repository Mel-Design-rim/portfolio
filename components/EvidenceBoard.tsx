'use client';

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { type Project } from '@/lib/projects';

const pad = (n: number) => String(n).padStart(2, '0');

interface EvidenceBoardProps {
  sectionId: string;
  title: string;
  sectorMeta: string;
  badgeLabel: string;
  projects: Project[];
}

export default function EvidenceBoard({ sectionId, title, sectorMeta, badgeLabel, projects }: EvidenceBoardProps) {
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

  const strips = [...projects, ...projects]; // duplicated set for seamless wrap
  const selectedIndex = selected ? projects.indexOf(selected) : -1;

  return (
    <section className="projects-section" id={sectionId}>
      <div className="section-header">
        <h2 className="serif reveal-text">{title}</h2>
        <div className="mono text-dim reveal-text section-header-meta">
          {sectorMeta}
          <br />
          SCANNING: ACTIVE
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
            <span>SLIDER</span>
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
            <span>LIST</span>
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
                    <span className="strip-id">EVIDENCE #{pad((i % projects.length) + 1)}</span>
                    <div className="strip-title-wrap">
                      <h3 className="strip-title">{p.title}</h3>
                    </div>
                    <div className="strip-access">[ CLICK TO DECRYPT ]</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-badge">
          <div className="badge-barcode"></div>
          <div className="badge-content">
            <span className="badge-label">EVIDENCE ARCHIVE</span>
            <span className="badge-count">{pad(projects.length)} {badgeLabel}</span>
          </div>
        </div>
      </div>

      {/* ---------------- LIST VIEW ---------------- */}
      <div className={`projects-list${view !== 'list' ? ' view-hidden' : ''}`}>
        {projects.map((p, i) => (
          <div className="project-list-item" key={p.id} onClick={() => openProject(p)} data-cursor-text="DECRYPT">
            <div className="list-item-bg">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="list-item-content">
              <div className="list-item-left">
                <div className="list-item-barcode"></div>
                <div className="list-item-info">
                  <span className="list-item-id">EVIDENCE #{pad(i + 1)}</span>
                  <h3 className="list-item-title serif">{p.title}</h3>
                </div>
              </div>
              <div className="list-item-center">
                <span className="list-item-type">{p.type}</span>
              </div>
              <div className="list-item-right">
                <div className="list-item-access">
                  <span>[ CLICK TO DECRYPT ]</span>
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
        {selected && (
          <>
            <div className="controls-header">
              <button className="close-btn mono" onClick={closeProject} data-cursor-text="CLOSE">
                CLOSE TERMINAL [ESC]
              </button>
            </div>
            <div className="viewer-slide-wrapper">
              <img src={selected.image} className="viewer-bg" alt="" />
              <div className="project-details-overlay" data-lenis-prevent="true">
                <div className="scroll-content-inner">
                  <div className="interface-header">
                    <div>
                      <div className="mono text-accent viewer-topsecret">TOP SECRET // DECRYPTED</div>
                      <div className="mono overlay-id">EVIDENCE #{pad(selectedIndex + 1)}</div>
                      <div className="overlay-title-big serif">{selected.title}</div>
                    </div>
                    <div className="mono overlay-type uppercase">{selected.type}</div>
                  </div>
                  <div className="interface-grid">
                    <div className="data-sidebar">
                      <div className="mono sidebar-title">METADATA</div>
                      <div className="data-point mono">
                        <label>YEAR</label> <span>{selected.year}</span>
                      </div>
                      <div className="data-point mono">
                        <label>CONTEXT</label> <span>{selected.context}</span>
                      </div>
                      <div className="data-point mono">
                        <label>CLIENT</label> <span>{selected.client}</span>
                      </div>
                      <div className="data-point mono">
                        <label>TIME</label> <span>{selected.duration}</span>
                      </div>
                      <div className="mono sidebar-sub">
                        <label>TAGS:</label>
                        <div className="chips-grid">
                          {selected.tags.map((t) => (
                            <div className="tech-chip" key={t}>{t}</div>
                          ))}
                        </div>
                      </div>
                      <div className="mono sidebar-sub">
                        <label>STACK:</label>
                        <div className="chips-grid">
                          {selected.stack.map((t) => (
                            <div className="tech-chip" key={t}>{t}</div>
                          ))}
                        </div>
                      </div>
                      {selected.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          data-cursor-text="VISIT"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                    <div className="data-main">
                      <div className="terminal-block">
                        <h3>MISSION_REPORT</h3>
                        <p>{selected.mission}</p>
                      </div>
                      <div className="img-display">
                        <img
                          src={selected.image}
                          alt={`${selected.title} main evidence`}
                          onClick={() => setLightboxSrc(selected.image)}
                          data-cursor-text="EXPAND"
                        />
                      </div>
                      <div className="terminal-block">
                        <h3>TECHNICAL_ANALYSIS</h3>
                        <p>{selected.analysis}</p>
                      </div>
                      <div className="terminal-block">
                        <h3>MY_INTERVENTION</h3>
                        <p>{selected.intervention}</p>
                      </div>
                      {selected.evidence.length > 0 && (
                        <div className="terminal-block">
                          <h3>ADDITIONAL_EVIDENCE_LOG</h3>
                          <div className="evidence-grid">
                            {selected.evidence.map((src) => (
                              <img
                                key={src}
                                src={src}
                                alt="additional evidence"
                                onClick={() => setLightboxSrc(src)}
                                data-cursor-text="EXPAND"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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

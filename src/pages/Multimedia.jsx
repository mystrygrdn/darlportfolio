// File: src/pages/Multimedia.jsx

import { useRef, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import {
  SOCIAL_ITEMS,
  POSTER_ITEMS,
  PHOTO_ITEMS,
  VIDEO_ITEMS,
  IG_PREVIEWS,
  TABS,
} from "../data/MultimediaData";

const igp1 = IG_PREVIEWS[0];
const igp2 = IG_PREVIEWS[1];
const video1 = VIDEO_ITEMS[0].thumb;

function IGCard({ label }) {
  return (
    <div className="ig-card">
      <div className="ig-header">
        <div className="ig-avatar-wrap">
          <div className="ig-avatar-ring">
            <div className="ig-avatar">
              <FaInstagram size={22} color="#fff" />
            </div>
          </div>
        </div>
        <div className="ig-info">
          <div className="ig-handle">@darlpicss</div>
          <div className="ig-label">
            my photography instagram · visual storytelling
          </div>
        </div>
        <a
          href="https://instagram.com/darlpicss"
          target="_blank"
          rel="noreferrer"
          className="ig-follow-btn"
        >
          Follow
        </a>
      </div>
      <div className="ig-preview-grid">
        {IG_PREVIEWS.map((src, i) => (
          <div key={i} className="ig-preview-cell">
            <img src={src} alt={`ig-${i}`} />
          </div>
        ))}
      </div>
      <div className="ig-cta-row">
        <span className="ig-cta-text">{label}</span>
        <a
          href="https://instagram.com/darlpicss"
          target="_blank"
          rel="noreferrer"
          className="ig-cta-btn"
        >
          View Full Profile
          <span className="material-symbols-outlined">open_in_new</span>
        </a>
      </div>
    </div>
  );
}

export default function Multimedia() {
  const glowRef = useRef([]);
  const [tab, setTab] = useState("posters");

  useEffect(() => {
    const onMove = (e) => {
      glowRef.current.forEach((el, i) => {
        if (!el) return;
        const s = (i + 1) * 20;
        const x = (e.clientX / window.innerWidth - 0.5) * s;
        const y = (e.clientY / window.innerHeight - 0.5) * s;
        el.style.transform = `translate3d(${x}px,${y}px,0)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: #0d0d14; color: #f1f0f7; font-family: 'Inter', sans-serif; overflow-x: hidden; letter-spacing: -0.01em; }
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-size: 20px; line-height: 1; display: inline-block; vertical-align: middle; user-select: none; }

        @keyframes fadeInUp     { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn       { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulseGlow    { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(1.4); opacity: 0.7; } }
        @keyframes pulseStatus  { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes floatMain    { 0%,100% { transform: translateY(0) translateZ(40px); } 50% { transform: translateY(-15px) translateZ(40px); } }
        @keyframes floatPhoto1  { 0%,100% { transform: translateY(0) rotate(-12deg); } 50% { transform: translateY(-12px) rotate(-12deg); } }
        @keyframes floatPhoto2  { 0%,100% { transform: translateY(0) rotate(10deg); } 50% { transform: translateY(-10px) rotate(10deg); } }

        /* ── Global ── */
        .ambient-glow { position: fixed; width: 800px; height: 800px; border-radius: 50%; background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%); filter: blur(100px); z-index: 0; pointer-events: none; transition: transform 1.2s cubic-bezier(0.1,1,0.1,1); }
        .mm-page { position: relative; z-index: 1; min-height: 100vh; }
        .mm-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }

        /* ── Hero ── */
        .mm-hero { padding-top: 180px; padding-bottom: 64px; display: grid; grid-template-columns: 1.1fr 0.9fr; align-items: center; gap: 60px; }
        .mm-hero-content { display: flex; flex-direction: column; }
        .mm-hero-content > * { animation: fadeInUp .7s cubic-bezier(.16,1,.3,1) backwards; }
        .mm-hero-eyebrow { animation-delay:.05s; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #a78bfa; margin-bottom: 20px; }
        .mm-hero-title { animation-delay:.1s; font-size: clamp(40px, 6vw, 84px); font-weight: 900; line-height: 1.05; letter-spacing: -.04em; color: #fff; margin-bottom: 24px; }
        .mm-hero-title span { background: linear-gradient(135deg,#c4b5fd 0%,#818cf8 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .mm-hero-sub { animation-delay:.15s; font-size: 16px; line-height: 1.75; color: rgba(255,255,255,.5); max-width: 480px; }

        /* ── Hero Visual ── */
        .mm-hero-visual { position: relative; height: 420px; display: flex; align-items: center; justify-content: center; animation: fadeInUp 1s cubic-bezier(.16,1,.3,1) backwards; animation-delay: .25s; }
        .mm-glow-orb { position: absolute; border-radius: 50%; filter: blur(60px); pointer-events:none; }
        .mm-orb1 { width: 220px; height: 220px; background: rgba(139,92,246,.28); top:5%; right:10%; animation: pulseGlow 6s infinite alternate; }
        .mm-orb2 { width: 180px; height: 180px; background: rgba(99,102,241,.22); bottom:5%; left:10%; animation: pulseGlow 8s infinite alternate-reverse; }

        .mm-video-mock { position: relative; width: 280px; height: 180px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); background: rgba(0,0,0,0.4); backdrop-filter: blur(12px); padding: 8px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); z-index: 3; animation: floatMain 6s ease-in-out infinite; }
        .mm-video-mock-inner { width: 100%; height: 100%; border-radius: 10px; overflow: hidden; position: relative; }
        .mm-video-mock-inner img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
        .mm-play-icon-mock { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 48px; height: 48px; border-radius: 50%; background: rgba(167,139,250,0.9); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(167,139,250,0.5); }
        .mm-play-icon-mock span { color: #fff; font-size: 24px; margin-left: 3px; }

        .mm-photo-mock { position: absolute; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); padding: 6px 6px 24px 6px; background: rgba(255,255,255,0.05); backdrop-filter: blur(8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); overflow: hidden; }
        .mm-photo-mock img { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; opacity: 0.85; display: block; }
        .mm-pm-1 { width: 160px; height: 200px; top: 15%; left: 10%; animation: floatPhoto1 7s ease-in-out infinite; z-index: 1; }
        .mm-pm-2 { width: 150px; height: 190px; bottom: 10%; right: 10%; animation: floatPhoto2 8s ease-in-out infinite 1s; z-index: 4; }

        .mm-float-badge { position: absolute; bottom: 30px; right: 0; z-index: 5; background: rgba(20,20,28,.85); border: 1px solid rgba(255,255,255,.12); border-radius: 12px; padding: 10px 16px; display: flex; align-items: center; gap: 10px; backdrop-filter: blur(12px); box-shadow: 0 16px 32px rgba(0,0,0,.3); animation: floatPhoto2 5s ease-in-out infinite; }
        .mm-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #34d399; box-shadow: 0 0 10px #34d399; animation: pulseStatus 2s infinite; }
        .mm-badge-text { font-size: 12px; font-weight: 600; color: #fff; }

        /* ── Tab Bar ── */
        .mm-tab-section { margin-bottom: 56px; animation: fadeInUp .7s backwards; animation-delay: .2s; }
        .mm-tabs-scroll { display: flex; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; padding-bottom: 4px; justify-content: center; }
        .mm-tabs-scroll::-webkit-scrollbar { display: none; }
        .mm-tabs { display: inline-flex; align-items: center; gap: 10px; padding: 2px; }
        .mm-tab { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 22px; border-radius: 9999px; font-size: 13px; font-weight: 500; cursor: pointer; transition: all .3s cubic-bezier(.16,1,.3,1); background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.05); color: rgba(255,255,255,.6); white-space: nowrap; flex-shrink: 0; }
        .mm-tab:hover { background: rgba(255,255,255,.06); color: #fff; border-color: rgba(255,255,255,.12); }
        .mm-tab.active { background: rgba(167,139,250,.15); border-color: rgba(167,139,250,.4); color: #c4b5fd; box-shadow: 0 10px 20px rgba(167,139,250,.2); }
        .mm-tab .material-symbols-outlined { font-size: 16px; transition: transform .2s; }
        .mm-tab.active .material-symbols-outlined { color: #c4b5fd; }
        .mm-tab:hover .material-symbols-outlined { transform: scale(1.1); }

        /* ── Section headers ── */
        .mm-sec-eyebrow { font-size: 10.5px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: rgba(167,139,250,.65); margin-bottom: 8px; }
        .mm-sec-title { font-size: clamp(20px,2vw,28px); font-weight: 700; letter-spacing: -.022em; color: #fff; margin-bottom: 36px; }
        .mm-sec-title.has-desc { margin-bottom: 12px; }
        .mm-sec-desc { font-size: 14px; color: rgba(255,255,255,0.6); max-width: 600px; line-height: 1.6; margin-bottom: 36px; }

        /* ── Hover link button ── */
        .mm-hover-link-btn { position: absolute; top: 12px; right: 12px; width: 36px; height: 36px; border-radius: 50%; background: rgba(13,13,20,0.5); border: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; color: #fff; text-decoration: none; opacity: 0; transform: translateY(-8px) scale(0.95); transition: all 0.3s cubic-bezier(.16,1,.3,1); backdrop-filter: blur(8px); z-index: 10; }
        .mm-social-card:hover .mm-hover-link-btn, .mm-video-thumb:hover .mm-hover-link-btn { opacity: 1; transform: translateY(0) scale(1); }
        .mm-hover-link-btn:hover { background: rgba(167,139,250,0.85); border-color: #a78bfa; transform: scale(1.1) !important; }
        .mm-hover-link-btn .material-symbols-outlined { font-size: 16px; transition: transform 0.2s; }
        .mm-hover-link-btn:hover .material-symbols-outlined { transform: translate(1px,-1px); }

        /* ── Photo grid ── */
        .mm-photo-grid { columns: 3; column-gap: 16px; animation: fadeIn .5s ease backwards; }
        .mm-photo-item { break-inside: avoid; margin-bottom: 16px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,.05); position: relative; cursor: pointer; }
        .mm-photo-item img { width:100%; height:auto; display:block; opacity:.7; transition: transform .6s cubic-bezier(.16,1,.3,1), opacity .3s; }
        .mm-photo-item:hover img { transform: scale(1.04); opacity: .92; }
        .mm-photo-overlay { position:absolute; inset:0; background: linear-gradient(0deg,rgba(13,13,20,.9) 0%,transparent 60%); opacity:0; transition: opacity .35s; display:flex; align-items:flex-end; padding:16px; }
        .mm-photo-item:hover .mm-photo-overlay { opacity:1; }
        .mm-photo-title { font-size: 14px; font-weight: 700; color: #fff; }

        /* ── Poster grid ── */
        .mm-poster-grid { columns: 3; column-gap: 16px; animation: fadeIn .5s ease backwards; }
        .mm-poster-card { break-inside: avoid; margin-bottom: 16px; position: relative; border-radius: 14px; overflow: hidden; border: 1px solid rgba(255,255,255,.05); cursor: pointer; transition: border-color .3s, box-shadow .3s; }
        .mm-poster-card:hover { border-color: rgba(167,139,250,.35); box-shadow: 0 16px 36px rgba(0,0,0,.28); }
        .mm-poster-card img { width:100%; height:auto; display:block; opacity:.7; transition: transform .6s cubic-bezier(.16,1,.3,1), opacity .3s; }
        .mm-poster-card:hover img { transform: scale(1.05); opacity: .9; }
        .mm-poster-overlay { position:absolute; inset:0; background: linear-gradient(0deg,rgba(13,13,20,.92) 0%,transparent 60%); opacity:0; transition: opacity .35s; display:flex; flex-direction:column; justify-content:flex-end; padding:18px; pointer-events:none; }
        .mm-poster-card:hover .mm-poster-overlay { opacity:1; }
        .mm-poster-title { font-size: 15px; font-weight: 700; color: #fff; }
        .mm-poster-desc  { font-size: 12px; color: rgba(255,255,255,.6); margin-top: 4px; line-height: 1.4; }

        /* ── Social grid ── */
        .mm-social-grid { columns: 2; column-gap: 16px; animation: fadeIn .5s ease backwards; }
        .mm-social-card { break-inside: avoid; margin-bottom: 16px; position: relative; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,.05); cursor: pointer; transition: border-color .3s, box-shadow .3s; }
        .mm-social-card:hover { border-color: rgba(167,139,250,.35); box-shadow: 0 14px 28px rgba(0,0,0,.25); }
        .mm-social-card img { width:100%; height:auto; display:block; opacity:.85; transition: transform .55s cubic-bezier(.16,1,.3,1), opacity .3s; }
        .mm-social-card:hover img { transform: scale(1.03); opacity: 1; }
        .mm-social-overlay { position:absolute; inset:0; background: linear-gradient(0deg,rgba(13,13,20,.95) 0%,transparent 55%); opacity:0; transition: opacity .3s; display:flex; flex-direction:column; justify-content:flex-end; padding:20px; pointer-events:none; }
        .mm-social-card:hover .mm-social-overlay { opacity:1; }
        .mm-social-title { font-size: 16px; font-weight: 700; color: #fff; }
        .mm-social-desc  { font-size: 13px; color: rgba(255,255,255,.6); margin-top: 6px; line-height: 1.5; }

        /* ── Video grid ── */
        .mm-video-grid { columns: 3; column-gap: 16px; animation: fadeIn .5s ease backwards; }
        .mm-video-card { break-inside: avoid; margin-bottom: 16px; border-radius: 14px; overflow: hidden; border: 1px solid rgba(255,255,255,.05); background: rgba(255,255,255,.03); transition: border-color .3s, box-shadow .3s; }
        .mm-video-card:hover { border-color: rgba(167,139,250,.35); box-shadow: 0 16px 36px rgba(0,0,0,.28); }
        .mm-video-thumb { position: relative; overflow: hidden; cursor: pointer; }
        .mm-video-thumb img { width:100%; height:auto; display:block; opacity:.65; transition: transform .6s cubic-bezier(.16,1,.3,1), opacity .3s; }
        .mm-video-thumb:hover img { transform: scale(1.05); opacity: .85; }
        .mm-play-btn { position: absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none; }
        .mm-play-circle { width: 46px; height: 46px; border-radius: 50%; background: rgba(13,13,20,.7); border: 1px solid rgba(255,255,255,.2); display: flex; align-items: center; justify-content: center; transition: all .25s; backdrop-filter: blur(8px); }
        .mm-video-thumb:hover .mm-play-circle { background: rgba(167,139,250,.25); border-color: rgba(167,139,250,.5); transform: scale(1.1); }
        .mm-play-circle .material-symbols-outlined { font-size: 22px; color: #fff; }
        .mm-video-info { padding: 16px 18px; }
        .mm-video-title { font-size: 15px; font-weight: 600; color: #fff; letter-spacing: -.01em; margin-bottom: 6px; }
        .mm-video-desc  { font-size: 12.5px; color: rgba(255,255,255,.5); line-height: 1.6; }
        .mm-video-tech-list { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
        .mm-video-tech-badge { font-size: 10.5px; font-weight: 600; padding: 4px 12px; border-radius: 9999px; background: rgba(167,139,250,0.1); border: 1px solid rgba(167,139,250,0.25); color: #c4b5fd; font-family: monospace; }

        /* ── Instagram card ── */
        .ig-card { margin-top: 48px; padding: 24px; border-radius: 16px; background: rgba(20,20,28,0.6); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; gap: 20px; animation: fadeIn 0.8s ease backwards; }
        .ig-header { display: flex; align-items: center; gap: 16px; }
        .ig-avatar-wrap { position: relative; flex-shrink: 0; }
        .ig-avatar-ring { padding: 3px; border-radius: 50%; background: linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); display: flex; align-items: center; justify-content: center; }
        .ig-avatar { width: 48px; height: 48px; border-radius: 50%; background: #1a1a24; border: 2px solid #0d0d14; display: flex; align-items: center; justify-content: center; }
        .ig-info { flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .ig-handle { font-size: 15px; font-weight: 700; color: #fff; }
        .ig-label { font-size: 12px; color: rgba(255,255,255,0.5); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .ig-follow-btn { padding: 8px 20px; border-radius: 8px; background: #0095f6; color: #fff; font-size: 13px; font-weight: 600; text-decoration: none; transition: background 0.2s; flex-shrink: 0; }
        .ig-follow-btn:hover { background: #1877f2; }
        .ig-preview-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
        .ig-preview-cell { aspect-ratio: 1; border-radius: 8px; overflow: hidden; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); }
        .ig-preview-cell img { width: 100%; height: 100%; object-fit: cover; opacity: 1; transition: transform 0.4s; display: block; }
        .ig-preview-cell:hover img { transform: scale(1.06); }
        .ig-cta-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px; flex-wrap: wrap; }
        .ig-cta-text { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.7); }
        .ig-cta-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #c4b5fd; text-decoration: none; transition: color 0.2s; flex-shrink: 0; }
        .ig-cta-btn:hover { color: #fff; }
        .ig-cta-btn .material-symbols-outlined { font-size: 16px; }

        /* ════════════════════════════════════════
           RESPONSIVE — TABLET LANDSCAPE (≤ 1024px)
        ════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .mm-wrap { padding: 0 32px; }
          .mm-hero { gap: 48px; padding-top: 150px; }
          .mm-video-grid  { columns: 2; }
          .mm-poster-grid { columns: 2; }
          .mm-photo-grid  { columns: 3; }
          .mm-social-grid { columns: 2; }
        }

        /* ════════════════════════════════════════
           RESPONSIVE — TABLET PORTRAIT (≤ 768px)
        ════════════════════════════════════════ */
        @media (max-width: 768px) {
          .mm-wrap { padding: 0 24px; }

          /* Hero — content first, visual hidden (too cluttered on tablet) */
          .mm-hero {
            grid-template-columns: 1fr;
            padding-top: 110px;
            padding-bottom: 40px;
            gap: 40px;
          }
          .mm-hero-sub { max-width: 100%; }

          /* Compact visual for tablet — keep it but shrink */
          .mm-hero-visual { height: 300px; }
          .mm-video-mock  { width: 220px; height: 140px; }
          .mm-pm-1 { width: 120px; height: 150px; }
          .mm-pm-2 { width: 110px; height: 140px; }
          .mm-float-badge { right: 4px; bottom: 8px; padding: 8px 12px; }
          .mm-badge-text  { font-size: 11px; }

          /* Tabs scroll naturally */
          .mm-tabs-scroll { justify-content: flex-start; }

          /* Grids */
          .mm-photo-grid  { columns: 2; }
          .mm-poster-grid { columns: 2; }
          .mm-social-grid { columns: 2; }
          .mm-video-grid  { columns: 2; }

          /* IG card */
          .ig-preview-grid { grid-template-columns: repeat(4, 1fr); }
          .ig-label { display: none; }
        }

        /* ════════════════════════════════════════
           RESPONSIVE — MOBILE (≤ 480px)
        ════════════════════════════════════════ */
        @media (max-width: 480px) {
          .mm-wrap { padding: 0 16px; }

          /* Hero — hide the floating visual on mobile, too messy */
          .mm-hero {
            grid-template-columns: 1fr;
            padding-top: 90px;
            padding-bottom: 28px;
            gap: 0;
          }
          .mm-hero-visual { display: none; }
          .mm-hero-title  { font-size: clamp(36px, 10vw, 52px); margin-bottom: 16px; }
          .mm-hero-sub    { font-size: 14.5px; }

          /* Tab bar — scrollable, left-aligned with padding */
          .mm-tab-section { margin-bottom: 40px; }
          .mm-tabs-scroll { justify-content: flex-start; padding-left: 2px; }
          .mm-tab { padding: 9px 16px; font-size: 12.5px; gap: 6px; }
          .mm-tab .material-symbols-outlined { font-size: 15px; }

          /* Section header */
          .mm-sec-title { font-size: 20px; margin-bottom: 24px; }
          .mm-sec-title.has-desc { margin-bottom: 8px; }
          .mm-sec-desc  { font-size: 13px; margin-bottom: 24px; }

          /* All content grids — single column on phone */
          .mm-photo-grid  { columns: 2; column-gap: 10px; }
          .mm-poster-grid { columns: 2; column-gap: 10px; }
          .mm-social-grid { columns: 1; }
          .mm-video-grid  { columns: 1; }

          /* Tighter card padding */
          .mm-photo-item  { margin-bottom: 10px; border-radius: 10px; }
          .mm-poster-card { margin-bottom: 10px; border-radius: 10px; }
          .mm-video-card  { border-radius: 12px; }
          .mm-video-info  { padding: 14px 16px; }
          .mm-video-title { font-size: 14px; }

          /* IG card */
          .ig-card        { padding: 16px; gap: 16px; margin-top: 32px; border-radius: 14px; }
          .ig-preview-grid { grid-template-columns: repeat(3, 1fr); gap: 6px; }
          .ig-preview-cell { border-radius: 6px; }
          .ig-follow-btn  { padding: 7px 14px; font-size: 12px; }
          .ig-handle      { font-size: 14px; }
          .ig-cta-text    { font-size: 12px; }
          .ig-cta-btn     { font-size: 12px; }
          .ig-header      { gap: 12px; }
        }

        /* ════════════════════════════════════════
           RESPONSIVE — SMALL PHONE (≤ 360px)
        ════════════════════════════════════════ */
        @media (max-width: 360px) {
          .mm-wrap  { padding: 0 12px; }
          .mm-hero  { padding-top: 80px; }
          .mm-hero-title { font-size: 32px; }
          .mm-tab   { padding: 8px 12px; font-size: 12px; }
          .mm-poster-grid { columns: 1; }
          .mm-photo-grid  { columns: 2; column-gap: 8px; }
          .ig-preview-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div
        ref={(el) => (glowRef.current[0] = el)}
        className="ambient-glow"
        style={{ top: "-100px", left: "-50px" }}
      />
      <div
        ref={(el) => (glowRef.current[1] = el)}
        className="ambient-glow"
        style={{ bottom: "-150px", right: "-50px" }}
      />

      <Menu />

      <div className="mm-page">
        <div className="mm-wrap">
          {/* ── HERO ── */}
          <section className="mm-hero">
            <div className="mm-hero-content">
              <p className="mm-hero-eyebrow">My Creative Works</p>
              <h1 className="mm-hero-title">
                Multimedia
                <br />
                <span>Portfolio</span>
              </h1>
              <p className="mm-hero-sub">
                A multimedia showcase of digital art, photography, and visual
                design — bringing meaningful stories to life.
              </p>
            </div>

            <div className="mm-hero-visual">
              <div className="mm-glow-orb mm-orb1" />
              <div className="mm-glow-orb mm-orb2" />
              <div className="mm-photo-mock mm-pm-1">
                <img src={igp1} alt="photo-1" />
              </div>
              <div className="mm-video-mock">
                <div className="mm-video-mock-inner">
                  <img src={video1} alt="video-thumb" />
                  <div className="mm-play-icon-mock">
                    <span className="material-symbols-outlined">
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
              <div className="mm-photo-mock mm-pm-2">
                <img src={igp2} alt="photo-2" />
              </div>
              <div className="mm-float-badge">
                <div className="mm-badge-dot" />
                <span className="mm-badge-text">Visual Craft</span>
              </div>
            </div>
          </section>

          {/* ── TABS ── */}
          <div className="mm-tab-section">
            <div className="mm-tabs-scroll">
              <div className="mm-tabs">
                {TABS.map((t) => (
                  <button
                    key={t.key}
                    className={`mm-tab${tab === t.key ? " active" : ""}`}
                    onClick={() => setTab(t.key)}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontVariationSettings:
                          tab === t.key ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      {t.icon}
                    </span>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── SOCIAL ── */}
          {tab === "social" && (
            <section key="social">
              <p className="mm-sec-eyebrow">Content Design</p>
              <h2 className="mm-sec-title has-desc">Social Media Feeds</h2>
              <p className="mm-sec-desc">
                All social media content showcased below were meticulously
                designed using Canva.
              </p>
              <div className="mm-social-grid">
                {SOCIAL_ITEMS.map((p, i) => (
                  <div key={i} className="mm-social-card">
                    <img src={p.image} alt={p.title} />
                    <div className="mm-social-overlay">
                      <div className="mm-social-title">{p.title}</div>
                      <div className="mm-social-desc">{p.desc}</div>
                    </div>
                    <a
                      href={p.link || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="mm-hover-link-btn"
                      title="View on Instagram"
                    >
                      <span className="material-symbols-outlined">
                        open_in_new
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── POSTERS ── */}
          {tab === "posters" && (
            <section key="posters">
              <p className="mm-sec-eyebrow">Print & Digital</p>
              <h2 className="mm-sec-title has-desc">Posters & Banner Design</h2>
              <p className="mm-sec-desc">
                All posters and banners showcased below were meticulously
                designed using Canva.
              </p>
              <div className="mm-poster-grid">
                {POSTER_ITEMS.map((p, i) => (
                  <div key={i} className="mm-poster-card">
                    <img src={p.image} alt={p.title} />
                    <div className="mm-poster-overlay">
                      <div className="mm-poster-title">{p.title}</div>
                      <div className="mm-poster-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── PHOTO ── */}
          {tab === "photo" && (
            <section key="photo">
              <p className="mm-sec-eyebrow">Visual Storytelling</p>
              <h2 className="mm-sec-title">Photography</h2>
              <div className="mm-photo-grid">
                {PHOTO_ITEMS.map((p, i) => (
                  <div key={i} className="mm-photo-item">
                    <img src={p.image} alt={p.title} />
                    <div className="mm-photo-overlay">
                      <div className="mm-photo-title">{p.title}</div>
                    </div>
                  </div>
                ))}
              </div>
              <IGCard label="See the full photography portfolio on Instagram" />
            </section>
          )}

          {/* ── VIDEO ── */}
          {tab === "video" && (
            <section key="video">
              <p className="mm-sec-eyebrow">Motion & Film</p>
              <h2 className="mm-sec-title">Videography & Editing</h2>
              <div className="mm-video-grid">
                {VIDEO_ITEMS.map((p, i) => (
                  <div key={i} className="mm-video-card">
                    <div className="mm-video-thumb">
                      <img src={p.thumb} alt={p.title} />
                      <div className="mm-play-btn">
                        <div className="mm-play-circle">
                          <span className="material-symbols-outlined">
                            play_arrow
                          </span>
                        </div>
                      </div>
                      <a
                        href={p.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="mm-hover-link-btn"
                        title="Watch Video"
                      >
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                    <div className="mm-video-info">
                      <div className="mm-video-title">{p.title}</div>
                      <div className="mm-video-desc">{p.desc}</div>
                      {p.tech && (
                        <div className="mm-video-tech-list">
                          {p.tech.map((t, idx) => (
                            <span key={idx} className="mm-video-tech-badge">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <IGCard label="See the full video portfolio on Instagram" />
            </section>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
}

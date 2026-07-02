// File: src/pages/AboutMe.jsx

import { useRef, useEffect } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import darl1 from "../assets/images/darl1.webp";

// ── DATA ────────────────────────────────────────────────────────────────────

const IMAGE = darl1;

const CAREER = [
  {
    period: "JUN 2025 - Present",
    active: true,
    title: "Admin",
    place: "FocusAuto Repair Shop · Part-time Remote",
    desc: "Created and Managed transaction invoices, also managed vendor profile on INAPROC (Indonesia's government procurement portal) website",
  },
  {
    period: "JAN 2025 - FEB 2025",
    active: false,
    title: "Finance Team Member",
    place: "Badan Pusat Statistik Prov. Sulawesi Utara · Internship",
    desc: "File Archiving and Document Imaging",
  },
  {
    period: "SEP 2024 - DEC 2024",
    active: false,
    title: "Informatics Teacher",
    place: "SMPN 2 Kalawat · Kampus Mengajar Program",
    desc: "Grade 7 Informatics Teacher, PBL Wix Team Mentor, Speaker at the Students - SC Seminars and Designer of SPENDUK Student ID Cards.",
  },
];

const EDUCATION = [
  {
    period: "2022 - 2026",
    active: false,
    title: "Bachelor of Computer Science",
    place: "Universitas Sam Ratulangi · FMIPA (Information Systems)",
    desc: "Graduated with honors (GPA 3.98), focusing on web development. Participant in Innovillage 2023, PKM-PI 2024, GEMASTIK 2024 (Software Development), and the Kampus Mengajar Program 2024.",
  },
  {
    period: "2019 - 2022",
    active: false,
    title: "Senior High School",
    place: "Sekolah Dian Harapan Manado (SDH) · Science Major",
    desc: "A hardworking student who graduated with a 90/100 average. Beyond building a strong foundation in computing, high school was where I discovered my creative talents in multimedia, photography, editing, and music, also served as Head of Academic Excellence in the Student Council.",
  },
];

const SKILLS = [
  "React.js",
  "Laravel",
  "HTML & CSS",
  "JavaScript",
  "Bootstrap",
  "MySQL",
  "WordPress",
  "Elementor",
  "UI/UX Design",
  "Figma",
  "Canva",
  "Photography",
  "Video Editing",
  "CapCut",
  "Vibe Coding",
  "Google AI Studio",
  "Google Stitch",
  "GitHub",
];

const LANGUAGES = [
  { name: "Indonesian", level: "Native", percent: 100 },
  { name: "English", level: "Proficient", percent: 70 },
  { name: "Korean", level: "Basic", percent: 40 },
];

const CERTS = [
  {
    icon: "code",
    title: "WordPress Development Bootcamp",
    sub: "by Special Skill Indonesia and awarded as best student (ranked top 3) for outstanding performance throughout the bootcamp.",
  },
  {
    icon: "code",
    title: "Web Development 15.0",
    sub: "by Dibimbing",
  },
  {
    icon: "code",
    title: "Intro to Software Engineering",
    sub: "by RevoU",
  },
  {
    icon: "code",
    title: "#JuaraVibeCoding Participant",
    sub: "by GDG Live Indonesia and recognized as a Twibbon Challenge winner"
  }
];

const SOCIAL_LOGOS = {
  linkedin: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#0a66c2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig-grad)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#a78bfa">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
};

const SOCIALS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Darlene S. Asalui",
    desc: "Professional network & career updates",
    accentColor: "#0a66c2",
    accentBg: "rgba(10,102,194,0.12)",
    accentBorder: "rgba(10,102,194,0.35)",
    href: "https://www.linkedin.com/in/darl-sa01/",
    cta: "Connect",
    ctaIcon: "add",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@mystrygrdn",
    desc: "Open-source projects & code repositories",
    accentColor: "#e6edf3",
    accentBg: "rgba(230,237,243,0.07)",
    accentBorder: "rgba(230,237,243,0.2)",
    href: "https://github.com/mystrygrdn",
    cta: "Follow",
    ctaIcon: "add",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@darlpicss",
    desc: "Photography portfolio & visual stories",
    accentColor: "#e1306c",
    accentBg: "rgba(225,48,108,0.1)",
    accentBorder: "rgba(225,48,108,0.3)",
    href: "https://www.instagram.com/darlpicss/",
    cta: "Follow",
    ctaIcon: "add",
  },
  {
    id: "email",
    label: "Email",
    handle: "dzasaluilui@gmail.com",
    desc: "Project inquiries & collaboration",
    accentColor: "#a78bfa",
    accentBg: "rgba(167,139,250,0.1)",
    accentBorder: "rgba(167,139,250,0.35)",
    href: "mailto:dzasaluilui@gmail.com",
    cta: "Send Mail",
    ctaIcon: "send",
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function AboutMe() {
  const glowRef = useRef([]);

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
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: #0d0d14; color: #f1f0f7; font-family: 'Inter', sans-serif; overflow-x: hidden; letter-spacing: -0.01em; }
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-size: 20px; line-height: 1; display: inline-block; vertical-align: middle; user-select: none; }

        @keyframes fadeInUp   { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseStatus { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes barFill    { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        /* ── Global ── */
        .ambient-glow {
          position: fixed; width: 800px; height: 800px; border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%);
          filter: blur(100px); z-index: 0; pointer-events: none;
          transition: transform 1.2s cubic-bezier(0.1,1,0.1,1);
        }
        .am-page { position: relative; z-index: 1; min-height: 100vh; }
        .am-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }

        /* ── Hero ── */
        .am-hero {
          padding-top: 180px; padding-bottom: 100px;
          display: grid; grid-template-columns: 0.9fr 1.1fr;
          gap: 72px; align-items: center;
        }

        /* Portrait */
        .am-portrait-wrap { position: relative; }
        .am-portrait-glow {
          position: absolute; inset: -24px; border-radius: 2rem;
          background: rgba(167,139,250,0.07); filter: blur(48px);
          opacity: 0; transition: opacity 1s ease;
        }
        .am-portrait-wrap:hover .am-portrait-glow { opacity: 1; }
        .am-portrait-frame {
          position: relative; border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02); padding: 5px; aspect-ratio: 4/5;
        }
        .am-portrait-frame img {
          width: 100%; height: 100%; object-fit: cover; border-radius: 20px;
          filter: grayscale(30%); transition: filter 1.2s ease; display: block;
        }
        .am-portrait-wrap:hover .am-portrait-frame img { filter: grayscale(0%); }
        .am-portrait-badge {
          position: absolute; bottom: 20px; left: -16px;
          background: rgba(13,13,20,0.92); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px; padding: 10px 18px;
          display: flex; align-items: center; gap: 10px;
          backdrop-filter: blur(16px); box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }
        .am-badge-pulse {
          width: 8px; height: 8px; border-radius: 50%;
          background: #34d399; box-shadow: 0 0 12px #34d399;
          animation: pulseStatus 2s infinite; flex-shrink: 0;
        }
        .am-badge-text { font-size: 12px; font-weight: 700; color: #fff; letter-spacing: 0.04em; white-space: nowrap; }

        /* Bio */
        .am-hero-bio { display: flex; flex-direction: column; }
        .am-hero-bio > * { animation: fadeInUp 0.7s cubic-bezier(.16,1,.3,1) backwards; }
        .am-eyebrow {
          animation-delay: .05s; font-size: 11px; font-weight: 800;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #a78bfa; margin-bottom: 20px; display: block;
        }
        .am-hero-title {
          animation-delay: .1s;
          font-size: clamp(36px, 5.5vw, 72px);
          font-weight: 900; line-height: 1.06;
          letter-spacing: -0.04em; color: #fff; margin-bottom: 24px;
        }
        .am-hero-title span {
          background: linear-gradient(135deg, #c4b5fd 0%, #818cf8 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .am-hero-sub {
          animation-delay: .15s; font-size: 15.5px; line-height: 1.8;
          color: rgba(255,255,255,0.55); max-width: 500px; margin-bottom: 40px;
        }
        .am-chips { animation-delay: .2s; display: flex; flex-wrap: wrap; gap: 10px; }
        .am-chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 9999px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(255,255,255,0.8);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: default;
        }
        .am-chip:hover { border-color: rgba(167,139,250,0.4); background: rgba(167,139,250,0.06); color: #c4b5fd; }
        .am-chip .material-symbols-outlined { font-size: 15px; color: #a78bfa; }

        /* ── Section Shared ── */
        .am-section { margin-bottom: 80px; }
        .am-sec-eyebrow {
          font-size: 10.5px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(167,139,250,0.65);
          margin-bottom: 8px; display: block;
        }
        .am-sec-title {
          font-size: clamp(22px, 2.8vw, 34px); font-weight: 700;
          letter-spacing: -0.025em; color: #fff; margin-bottom: 40px;
        }
        .am-divider { width: 100%; height: 1px; background: rgba(255,255,255,0.06); margin-bottom: 80px; }

        /* ── Career & Skills Grid ── */
        .am-mid-grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 64px; }

        /* Timeline */
        .am-timeline { position: relative; padding-left: 40px; display: flex; flex-direction: column; gap: 20px; }
        .am-tl-line {
          position: absolute; left: 6px; top: 8px; bottom: 8px; width: 1px;
          background: linear-gradient(to bottom, transparent 0%, rgba(167,139,250,0.35) 15%, rgba(167,139,250,0.35) 85%, transparent 100%);
        }
        .am-tl-item { position: relative; }
        .am-tl-dot { position: absolute; left: -40px; top: 7px; width: 13px; height: 13px; border-radius: 50%; }
        .am-tl-dot.active { background: #a78bfa; box-shadow: 0 0 18px rgba(167,139,250,0.8); border: 2px solid #c4b5fd; }
        .am-tl-dot.past { background: #0d0d14; border: 1.5px solid rgba(255,255,255,0.2); }
        .am-tl-dot.edu { background: #0d0d14; border: 1.5px solid rgba(99,179,237,0.5); }
        .am-tl-card {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 20px 22px;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .am-tl-card:hover {
          background: rgba(255,255,255,0.05); border-color: rgba(167,139,250,0.25);
          box-shadow: 0 16px 32px rgba(0,0,0,0.2); transform: translateX(4px);
        }
        .am-tl-card.edu:hover { border-color: rgba(99,179,237,0.25); }
        .am-tl-period { font-size: 10.5px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 6px; display: block; }
        .am-tl-period.active { color: #a78bfa; }
        .am-tl-period.past { color: rgba(255,255,255,0.3); }
        .am-tl-period.edu { color: rgba(99,179,237,0.7); }
        .am-tl-title { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 3px; letter-spacing: -0.01em; }
        .am-tl-place { font-size: 12px; font-weight: 500; color: rgba(167,139,250,0.7); margin-bottom: 10px; display: block; }
        .am-tl-place.edu { color: rgba(99,179,237,0.65); }
        .am-tl-desc { font-size: 13px; line-height: 1.7; color: rgba(255,255,255,0.52); }

        /* Skills */
        .am-skills-col { display: flex; flex-direction: column; gap: 48px; }
        .am-skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .am-skill-tag {
          font-size: 12.5px; font-weight: 500; padding: 6px 14px; border-radius: 8px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.75); cursor: default; transition: all 0.25s;
        }
        .am-skill-tag:hover { border-color: rgba(167,139,250,0.4); color: #c4b5fd; background: rgba(167,139,250,0.05); }

        /* Language Bars */
        .am-lang-list { display: flex; flex-direction: column; gap: 28px; }
        .am-lang-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 10px; }
        .am-lang-name { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #fff; }
        .am-lang-level { font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.4); }
        .am-lang-track { height: 2px; width: 100%; background: rgba(255,255,255,0.06); border-radius: 9999px; overflow: hidden; }
        .am-lang-bar {
          height: 100%; background: linear-gradient(90deg, #a78bfa, #818cf8);
          border-radius: 9999px; transform-origin: left;
          animation: barFill 1.2s cubic-bezier(0.4,0,0.2,1) backwards;
        }

        /* ── Education + Certifications Grid ── */
        .am-edu-cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }

        /* Certifications */
        .am-cert-list { display: flex; flex-direction: column; gap: 14px; }
        .am-cert-card {
          display: flex; align-items: flex-start; gap: 18px; padding: 20px 22px;
          border-radius: 16px; background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06); text-decoration: none;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .am-cert-card:hover {
          border-color: rgba(167,139,250,0.35); background: rgba(167,139,250,0.04);
          transform: translateY(-3px); box-shadow: 0 16px 32px rgba(0,0,0,0.2);
        }
        .am-cert-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          background: rgba(167,139,250,0.1); border: 1px solid rgba(167,139,250,0.2);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.25s;
        }
        .am-cert-card:hover .am-cert-icon { background: rgba(167,139,250,0.2); }
        .am-cert-icon .material-symbols-outlined { font-size: 20px; color: #a78bfa; }
        .am-cert-title { font-size: 13.5px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .am-cert-sub { font-size: 12px; color: rgba(255,255,255,0.45); line-height: 1.5; }

        /* ── Social / Contact ── */
        .am-social-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .am-social-card {
          display: flex; flex-direction: column; padding: 24px; border-radius: 18px;
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06);
          text-decoration: none; transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .am-social-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px rgba(0,0,0,0.3); }
        .am-social-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .am-social-icon-wrap {
          width: 52px; height: 52px; border-radius: 15px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .am-social-arrow {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s; flex-shrink: 0;
        }
        .am-social-card:hover .am-social-arrow { background: rgba(255,255,255,0.12); transform: translate(2px,-2px); }
        .am-social-arrow .material-symbols-outlined { font-size: 16px; color: rgba(255,255,255,0.6); }
        .am-social-label { font-size: 11px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 6px; display: block; }
        .am-social-handle { font-size: 17px; font-weight: 700; color: #fff; letter-spacing: -0.02em; margin-bottom: 8px; word-break: break-all; }
        .am-social-desc { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.5; margin-bottom: 20px; }
        .am-social-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12.5px; font-weight: 700; padding: 8px 18px;
          border-radius: 9999px; transition: all 0.25s;
          margin-top: auto; width: fit-content;
        }

        /* ════════════════════════════════════════
           RESPONSIVE — TABLET (≤ 1024px)
        ════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .am-wrap { padding: 0 32px; }
          .am-hero { grid-template-columns: 1fr 1.3fr; gap: 48px; padding-top: 140px; padding-bottom: 80px; }
          .am-mid-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
          .am-edu-cert-grid { gap: 48px; }
        }

        /* ════════════════════════════════════════
           RESPONSIVE — TABLET PORTRAIT (≤ 768px)
        ════════════════════════════════════════ */
        @media (max-width: 768px) {
          .am-wrap { padding: 0 24px; }

          /* Hero — portrait on top, bio below */
          .am-hero {
            grid-template-columns: 1fr;
            padding-top: 100px;
            padding-bottom: 60px;
            gap: 40px;
          }
          .am-portrait-frame { max-width: 320px; margin: 0 auto; }
          .am-portrait-badge { left: 0; bottom: 16px; }

          /* Both grids go single column */
          .am-mid-grid { grid-template-columns: 1fr; gap: 56px; }
          .am-edu-cert-grid { grid-template-columns: 1fr; gap: 56px; }

          /* Social cards — 2 col still works on tablet */
          .am-social-grid { grid-template-columns: repeat(2, 1fr); }

          .am-sec-title { margin-bottom: 28px; }
          .am-divider { margin-bottom: 60px; }
          .am-section { margin-bottom: 60px; }

          /* Timeline a bit tighter */
          .am-timeline { padding-left: 32px; }
          .am-tl-dot { left: -32px; }
        }

        /* ════════════════════════════════════════
           RESPONSIVE — MOBILE (≤ 480px)
        ════════════════════════════════════════ */
        @media (max-width: 480px) {
          .am-wrap { padding: 0 16px; }

          /* Hero */
          .am-hero { padding-top: 90px; gap: 32px; }
          .am-portrait-frame { max-width: 100%; }
          .am-portrait-badge {
            left: 50%; transform: translateX(-50%);
            bottom: -18px; width: max-content;
          }
          .am-portrait-wrap { padding-bottom: 24px; }

          /* Title & sub smaller on phone */
          .am-hero-title { font-size: clamp(32px, 9vw, 48px); }
          .am-hero-sub { font-size: 14px; margin-bottom: 28px; }

          /* Chips wrap fine, reduce padding */
          .am-chip { padding: 8px 14px; font-size: 11px; }

          /* Section */
          .am-section { margin-bottom: 48px; }
          .am-divider { margin-bottom: 48px; }
          .am-sec-title { margin-bottom: 24px; }

          /* Timeline */
          .am-timeline { padding-left: 28px; gap: 16px; }
          .am-tl-line { left: 5px; }
          .am-tl-dot { left: -28px; width: 11px; height: 11px; top: 8px; }
          .am-tl-card { padding: 16px 18px; }
          .am-tl-title { font-size: 15px; }
          .am-tl-desc { font-size: 12.5px; }

          /* Skills tags smaller */
          .am-skill-tag { font-size: 11.5px; padding: 5px 12px; }

          /* Cert cards stacked */
          .am-cert-card { padding: 16px 18px; gap: 14px; }
          .am-cert-icon { width: 40px; height: 40px; flex-shrink: 0; }

          /* Social cards — full width on phone */
          .am-social-grid { grid-template-columns: 1fr; }
          .am-social-card { padding: 20px; }
          .am-social-handle { font-size: 15px; word-break: break-all; }
          .am-social-icon-wrap { width: 44px; height: 44px; border-radius: 12px; }
          .am-social-icon-wrap svg { width: 20px; height: 20px; }
        }

        /* ════════════════════════════════════════
           RESPONSIVE — SMALL PHONE (≤ 360px)
        ════════════════════════════════════════ */
        @media (max-width: 360px) {
          .am-wrap { padding: 0 14px; }
          .am-hero-title { font-size: 28px; }
          .am-chip { font-size: 10px; padding: 7px 12px; }
          .am-chips { gap: 8px; }
          .am-tl-card { padding: 14px 16px; }
          .am-social-handle { font-size: 13.5px; }
        }
      `}</style>

      <div
        ref={(el) => (glowRef.current[0] = el)}
        className="ambient-glow"
        style={{ top: "-100px", right: "-50px" }}
      />
      <div
        ref={(el) => (glowRef.current[1] = el)}
        className="ambient-glow"
        style={{ bottom: "-150px", left: "-50px" }}
      />

      <Menu />

      <div className="am-page">
        <div className="am-wrap">
          {/* ── HERO ── */}
          <section className="am-hero">
            <div className="am-portrait-wrap">
              <div className="am-portrait-glow" />
              <div className="am-portrait-frame">
                <img src={IMAGE} alt="Darlene S. Asalui" />
              </div>
              <div className="am-portrait-badge">
                <div className="am-badge-pulse" />
                <span className="am-badge-text">Open to Opportunities</span>
              </div>
            </div>

            <div className="am-hero-bio">
              <span className="am-eyebrow">About Me</span>
              <h1 className="am-hero-title">
                Hello,
                <br />
                <span>I'm Darlene !</span>
              </h1>
              <p className="am-hero-sub">
                a fresh Information Systems graduate with a 3.98 GPA, bridging
                the gap between code and creativity. From developing Laravel
                systems to mastering WordPress & Multimedia production, I build
                structured, user-centric digital experiences through proactive
                problem-solving and rapid adaptation.
              </p>
              <div className="am-chips">
                <div className="am-chip">
                  <span className="material-symbols-outlined">location_on</span>
                  Manado, Indonesia
                </div>
                <div className="am-chip">
                  <span className="material-symbols-outlined">bolt</span>
                  Available for Work
                </div>
                <div className="am-chip">
                  <span className="material-symbols-outlined">school</span>
                  Bachelor of Computer Science
                </div>
              </div>
            </div>
          </section>

          <div className="am-divider" />

          {/* ── CAREER & SKILLS ── */}
          <section className="am-section">
            <div className="am-mid-grid">
              <div>
                <span className="am-sec-eyebrow">Background</span>
                <h2 className="am-sec-title">Career Journey</h2>
                <div className="am-timeline">
                  <div className="am-tl-line" />
                  {CAREER.map((c, i) => (
                    <div key={i} className="am-tl-item">
                      <div
                        className={`am-tl-dot ${c.active ? "active" : "past"}`}
                      />
                      <div className="am-tl-card">
                        <span
                          className={`am-tl-period ${c.active ? "active" : "past"}`}
                        >
                          {c.period}
                        </span>
                        <h3 className="am-tl-title">{c.title}</h3>
                        <span className="am-tl-place">{c.place}</span>
                        <p className="am-tl-desc">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="am-skills-col">
                <div>
                  <span className="am-sec-eyebrow">Expertise</span>
                  <h2 className="am-sec-title">Skillset</h2>
                  <div className="am-skill-tags">
                    {SKILLS.map((s, i) => (
                      <span key={i} className="am-skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="am-sec-eyebrow">Communication</span>
                  <h2 className="am-sec-title">Languages</h2>
                  <div className="am-lang-list">
                    {LANGUAGES.map((l, i) => (
                      <div key={i}>
                        <div className="am-lang-row">
                          <span className="am-lang-name">{l.name}</span>
                          <span className="am-lang-level">{l.level}</span>
                        </div>
                        <div className="am-lang-track">
                          <div
                            className="am-lang-bar"
                            style={{
                              width: `${l.percent}%`,
                              animationDelay: `${i * 0.15}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="am-divider" />

          {/* ── EDUCATION + CERTIFICATIONS ── */}
          <section className="am-section">
            <div className="am-edu-cert-grid">
              <div>
                <span className="am-sec-eyebrow">Academic</span>
                <h2 className="am-sec-title">Education</h2>
                <div className="am-timeline">
                  <div className="am-tl-line" />
                  {EDUCATION.map((e, i) => (
                    <div key={i} className="am-tl-item">
                      <div className="am-tl-dot edu" />
                      <div className="am-tl-card edu">
                        <span className="am-tl-period edu">{e.period}</span>
                        <h3 className="am-tl-title">{e.title}</h3>
                        <span className="am-tl-place edu">{e.place}</span>
                        <p className="am-tl-desc">{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="am-sec-eyebrow">Achievements</span>
                <h2 className="am-sec-title">Certifications & Programs</h2>
                <div className="am-cert-list">
                  {CERTS.map((c, i) => (
                    <a
                      key={i}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="am-cert-card"
                    >
                      <div className="am-cert-icon">
                        <span className="material-symbols-outlined">
                          {c.icon}
                        </span>
                      </div>
                      <div>
                        <div className="am-cert-title">{c.title}</div>
                        <div className="am-cert-sub">{c.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="am-divider" />

          {/* ── CONNECT / SOCIAL MEDIA ── */}
          <section className="am-section">
            <span className="am-sec-eyebrow">Let's Connect</span>
            <h2 className="am-sec-title">Find Me Online</h2>
            <div className="am-social-grid">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target={s.id === "email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="am-social-card"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = s.accentBorder;
                    e.currentTarget.style.background = s.accentBg;
                    e.currentTarget.style.boxShadow =
                      "0 24px 48px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.025)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="am-social-card-top">
                    <div
                      className="am-social-icon-wrap"
                      style={{
                        background: s.accentBg,
                        border: `1px solid ${s.accentBorder}`,
                      }}
                    >
                      {SOCIAL_LOGOS[s.id]}
                    </div>
                    <div className="am-social-arrow">
                      <span className="material-symbols-outlined">
                        arrow_outward
                      </span>
                    </div>
                  </div>

                  <span className="am-social-label">{s.label}</span>
                  <div className="am-social-handle">{s.handle}</div>
                  <p className="am-social-desc">{s.desc}</p>

                  <div
                    className="am-social-cta"
                    style={{
                      background: s.accentBg,
                      border: `1px solid ${s.accentBorder}`,
                      color: s.accentColor,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "14px" }}
                    >
                      {s.ctaIcon}
                    </span>
                    {s.cta}
                  </div>
                </a>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}

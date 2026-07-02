import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import darlenePic from "../assets/images/darl.webp";

const BG_IMAGE = darlenePic;

const NAV_ITEMS = [
  { label: "Home", icon: "person", fill: true, to: "/" },
  { label: "Web Dev", icon: "code", fill: false, to: "/web-dev" },
  { label: "Multimedia", icon: "layers", fill: false, to: "/multimedia" },
  { label: "About", icon: "edit_note", fill: false, to: "/about-me" },
];

const CONTACT = [
  {
    icon: "mail",
    text: "dzasaluilui@gmail.com",
    href: "mailto:dzasaluilui@gmail.com",
  },
  {
    icon: "link",
    text: "linkedin.com/in/darl-sa01",
    href: "https://linkedin.com/in/darl-sa01",
  },
];

export default function Home() {
  const location = useLocation();

  // Smooth nav indicator position
  const navRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updatePillPosition = () => {
      if (!navRef.current) return;
      const activeEl = navRef.current.querySelector(".nav-link.active");
      if (!activeEl) {
        setPill({ left: 0, width: 0 });
        return;
      }
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setPill({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    };

    // Jalankan langsung saat render / ganti rute
    updatePillPosition();

    // Jalankan ulang jika ukuran window berubah (penting untuk responsivitas)
    window.addEventListener("resize", updatePillPosition);

    // Kadang font eksternal/ikon merubah layout setelah termuat, recalculate untuk akurasi
    document.fonts?.ready.then(updatePillPosition);

    return () => {
      window.removeEventListener("resize", updatePillPosition);
    };
  }, [location.pathname]);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #05050c;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-size: 18px;
          line-height: 1;
          display: inline-block;
          vertical-align: middle;
          user-select: none;
        }

        /* ── Background foto — diam, tidak parallax ── */
        .home-bg {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          object-position: 60% center;
          z-index: 0;
          transform: scale(1.00);
          transform-origin: center center;
        }

        /* ── Gradient overlay ── */
        .home-vignette {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            to right,
            rgba(5,5,12,0.92) 0%,
            rgba(5,5,12,0.55) 50%,
            rgba(5,5,12,0.15) 100%
          );
        }

        /* ── UI layer ── */
        .home-ui {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 64px;
          color: #e5e2e1;
        }

        /* ── Hero name ── */
        .hero-name {
          font-size: clamp(42px, 7.5vw, 110px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: #ffffff;
          max-width: 500px;
        }

        /* ── Eyebrow ── */
        .hero-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a78bfa;
        }

        /* ── Contact grid ── */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, max-content);
          gap: 12px 32px;
          padding-top: 20px;
          padding-bottom: 8px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: rgba(202,196,212,0.7);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .contact-item:hover {
          color: #ffffff;
        }
        .contact-item .material-symbols-outlined {
          color: rgba(167,139,250,0.7);
        }

        /* ── Glass nav pill container ── */
        .glass-nav {
          margin-top: 32px;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 0;
          padding: 6px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
          position: relative;
        }

        /* ── Sliding highlight behind active item ── */
        .nav-slider {
          position: absolute;
          top: 6px;
          height: calc(100% - 12px);
          border-radius: 9999px;
          background: rgba(255,255,255,0.12);
          transition: left 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      width 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Each nav link ── */
        .nav-link {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(202,196,212,0.6);
          text-decoration: none;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .nav-link:hover { color: #ffffff; }
        .nav-link.active { color: #ffffff; }
        .nav-link .material-symbols-outlined {
          transition: transform 0.2s ease, font-variation-settings 0.2s ease;
        }
        .nav-link:hover .material-symbols-outlined {
          transform: scale(1.08);
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .home-ui      { padding: 32px 24px; }
          .hero-name    { font-size: 48px; }
          .contact-grid { grid-template-columns: 1fr; gap: 16px; }
          .glass-nav    { margin-top: 32px; width: 100%; justify-content: space-around; }
          .nav-link     { padding: 12px 16px; flex-grow: 1; justify-content: center; }
          .nav-label    { display: none; }
        }
      `}</style>

      {/* Foto background — diam */}
      <img
        src={BG_IMAGE}
        alt="Darlene S. Asalui portrait"
        className="home-bg"
        fetchPriority="high"
        decoding="async"
      />

      {/* Gradient overlay */}
      <div className="home-vignette" />

      {/* UI layer */}
      <div className="home-ui">
        <header />

        <main
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "24px",
            maxWidth: "720px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span className="hero-eyebrow">
              Web Dev &amp; Multimedia Portfolio
            </span>

            <h1 className="hero-name">Darlene S. Asalui</h1>

            <div className="contact-grid">
              {CONTACT.map(({ icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                  <span>{text}</span>
                </a>
              ))}
            </div>

            {/* Glass nav dengan sliding indicator */}
            <nav className="glass-nav" ref={navRef}>
              {/* Sliding pill background */}
              <div
                className="nav-slider"
                style={{ left: pill.left, width: pill.width }}
              />

              {NAV_ITEMS.map(({ label, icon, fill, to }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={label}
                    to={to}
                    className={`nav-link${isActive ? " active" : ""}`}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontVariationSettings:
                          fill || isActive ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      {icon}
                    </span>
                    <span className="nav-label">{label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </main>
      </div>
    </>
  );
}
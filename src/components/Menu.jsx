import React, { useRef, useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", icon: "person", to: "/" },
  { label: "Web Dev", icon: "code", to: "/web-dev" },
  { label: "Multimedia", icon: "layers", to: "/multimedia" },
  { label: "About", icon: "edit_note", to: "/about-me" },
];

export default function Menu() {
  const location = useLocation();
  const navRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  const updatePill = useCallback(() => {
    if (!navRef.current) return;
    const el = navRef.current.querySelector(".wd-nav-link.active");
    if (!el) return;
    const nr = navRef.current.getBoundingClientRect();
    const lr = el.getBoundingClientRect();
    setPill({ left: lr.left - nr.left, width: lr.width });
  }, []);

  useEffect(() => {
    // Delay sedikit agar layout sudah stabil sebelum pill muncul
    const t = setTimeout(() => {
      setReady(true);
      updatePill();
    }, 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    updatePill();
  }, [location.pathname, updatePill]);

  useEffect(() => {
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  return (
    <>
      <style>{`

        .wd-nav {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          display: flex;
          align-items: center;
          padding: 5px;
          border-radius: 9999px;
          background: rgba(20, 20, 28, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.4),
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          white-space: nowrap;
        }

        .wd-nav-slider {
          position: absolute;
          top: 5px;
          height: calc(100% - 10px);
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.11);
          border: 1px solid rgba(255, 255, 255, 0.08);
          opacity: 0;
          transition:
            left 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
            width 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity 0.3s ease;
          pointer-events: none;
          z-index: 0;
        }

        .wd-nav-slider.ready {
          opacity: 1;
        }

        .wd-nav-link {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.45);
          text-decoration: none;
          transition:
            color 0.3s ease,
            transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          user-select: none;
        }

        .wd-nav-link:hover {
          color: rgba(255, 255, 255, 0.85);
          transform: translateY(-1px);
        }

        .wd-nav-link.active {
          color: #fff;
        }

        .wd-nav-link .material-symbols-outlined {
          font-size: 16px;
          transition:
            transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity 0.3s ease;
        }

        .wd-nav-link:hover .material-symbols-outlined {
          transform: scale(1.18) translateY(-1px);
        }

        .wd-nav-link.active .material-symbols-outlined {
          transform: scale(1.1);
        }

        /* Tablet */
        @media (max-width: 768px) {
          .wd-nav {
            top: 16px;
          }
          .wd-nav-link {
            padding: 9px 16px;
            font-size: 12.5px;
          }
        }

        /* Mobile — icon only */
        @media (max-width: 480px) {
          .wd-nav {
            top: 14px;
            padding: 4px;
          }
          .wd-nav-link {
            padding: 9px 14px;
            gap: 0;
          }
          .wd-nav-link .nav-label {
            display: none;
          }
          .wd-nav-slider {
            top: 4px;
            height: calc(100% - 8px);
          }
        }
      `}</style>

      <nav className="wd-nav" ref={navRef}>
        <div
          className={`wd-nav-slider${ready ? " ready" : ""}`}
          style={{ left: pill.left, width: pill.width }}
        />
        {NAV_ITEMS.map(({ label, icon, to }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={label}
              to={to}
              className={`wd-nav-link${isActive ? " active" : ""}`}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontVariationSettings: isActive
                    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    : "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {icon}
              </span>
              <span className="nav-label">{label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

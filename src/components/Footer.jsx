// File: src/components/Footer.jsx

import React from "react";

export default function Footer() {
  return (
    <>
      <style>{`
        .wd-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px 0 32px;
          border-top: 1px solid rgba(255,255,255,.06);
          margin-top: 80px;
          width: 100%;
        }
        .wd-footer-copy {
          font-size: 12px;
          color: rgba(255,255,255,.2);
          font-family: monospace;
          letter-spacing: 0.04em;
        }
        .wd-footer-copy span {
          color: rgba(167,139,250,.55);
        }
      `}</style>

      <footer className="wd-footer">
        <p className="wd-footer-copy">
          made with <span>♥</span> by Darlene S. Asalui · © 2026
        </p>
      </footer>
    </>
  );
}

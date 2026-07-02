import { useRef, useEffect, useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { PROJECTS } from "../data/WebDevData";

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);
  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };
  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 40) setCurrent((c) => (c + 1) % images.length);
    if (diff < -40) setCurrent((c) => (c - 1 + images.length) % images.length);
    touchStart.current = null;
  };
  return (
    <div
      className="img-slider"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="img-slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="img-slider-img"
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="slider-arrow left" onClick={prev}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="slider-arrow right" onClick={next}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <div className="slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`slider-dot${i === current ? " active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function WebDev() {
  const glowRef = useRef([]);
  const [active, setActive] = useState(null);

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

        @keyframes fadeInUp    { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes floatCode   { 0%,100% { transform:rotateY(-15deg) rotateX(5deg) translateZ(50px) translateY(0); } 50% { transform:rotateY(-10deg) rotateX(8deg) translateZ(50px) translateY(-18px); } }
        @keyframes floatBadge  { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-14px); } }
        @keyframes floatIcon   { 0%,100% { transform:translateY(0); } 50% { transform:translateY(14px); } }
        @keyframes pulseGlow   { 0% { transform:scale(1); opacity:0.4; } 100% { transform:scale(1.4); opacity:0.7; } }
        @keyframes pulseStatus { 0%,100% { opacity:1; } 50% { opacity:0.35; } }

        .ambient-glow { position:fixed; width:800px; height:800px; border-radius:50%; background:radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%); filter:blur(100px); z-index:0; pointer-events:none; transition:transform 1.2s cubic-bezier(0.1,1,0.1,1); }

        .wd-page      { position:relative; z-index:1; min-height:100vh; }
        .wd-container { max-width:1200px; margin:0 auto; padding:0 40px; }

        /* ════ HERO ════ */
        .wd-hero { padding-top:220px; padding-bottom:140px; display:grid; grid-template-columns:1fr 1.1fr; align-items:center; gap:60px; }
        .wd-hero-content { display:flex; flex-direction:column; align-items:flex-start; }
        .wd-hero-content > * { animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) backwards; }
        .wd-hero-label { animation-delay:.1s; font-size:12px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#a78bfa; margin-bottom:24px; text-shadow:0 0 20px rgba(167,139,250,.4); }
        .wd-hero-title { animation-delay:.2s; font-size:clamp(40px,6vw,84px); font-weight:900; line-height:1.05; letter-spacing:-.04em; color:#fff; margin-bottom:32px; }
        .wd-hero-title span { background:linear-gradient(135deg,#c4b5fd 0%,#818cf8 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .wd-hero-sub { animation-delay:.3s; font-size:16px; line-height:1.75; color:rgba(255,255,255,.6); max-width:480px; margin-bottom:48px; }
        .wd-btn { animation-delay:.4s; display:inline-flex; align-items:center; gap:10px; padding:16px 36px; border-radius:9999px; background:linear-gradient(180deg,rgba(255,255,255,.08) 0%,rgba(255,255,255,.02) 100%); border:1px solid rgba(255,255,255,.15); color:#fff; font-size:14px; font-weight:500; cursor:pointer; text-decoration:none; transition:all .4s cubic-bezier(.16,1,.3,1); box-shadow:0 4px 30px rgba(0,0,0,.15); }
        .wd-btn:hover { border-color:rgba(167,139,250,.6); background:rgba(139,92,246,.1); transform:translateY(-2px); box-shadow:0 12px 40px rgba(139,92,246,.25); }
        .wd-btn .material-symbols-outlined { font-size:18px; transition:transform .3s; }
        .wd-btn:hover .material-symbols-outlined { transform:translateY(3px); }

        .wd-hero-visual { position:relative; width:100%; height:450px; display:flex; align-items:center; justify-content:center; perspective:1200px; transform-style:preserve-3d; animation:fadeInUp 1s cubic-bezier(.16,1,.3,1) backwards; animation-delay:.5s; }
        .abstract-shape { position:absolute; border-radius:50%; filter:blur(60px); z-index:1; }
        .shape-1 { width:250px; height:250px; background:rgba(139,92,246,.3); top:10%; right:15%; animation:pulseGlow 6s infinite alternate; }
        .shape-2 { width:200px; height:200px; background:rgba(99,102,241,.25); bottom:10%; left:15%; animation:pulseGlow 8s infinite alternate-reverse; }
        
        .glass-panel { position:relative; width:100%; max-width:440px; background:linear-gradient(135deg,rgba(30,30,42,.7) 0%,rgba(15,15,22,.8) 100%); border:1px solid rgba(255,255,255,.1); border-radius:20px; padding:28px; backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); box-shadow:0 40px 80px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.1); transform:rotateY(-15deg) rotateX(5deg) translateZ(50px); animation:floatCode 7s ease-in-out infinite; z-index:2; }
        .glass-panel-header { display:flex; gap:8px; margin-bottom:24px; }
        .mac-dot { width:12px; height:12px; border-radius:50%; }
        .mac-dot.r { background:#ff5f56; box-shadow:0 0 10px rgba(255,95,86,.5); }
        .mac-dot.y { background:#ffbd2e; box-shadow:0 0 10px rgba(255,189,46,.5); }
        .mac-dot.g { background:#27c93f; box-shadow:0 0 10px rgba(39,201,63,.5); }
        .glass-code { font-family:'Fira Code',monospace; font-size:13px; line-height:1.7; color:#a9b7c6; overflow-x:auto; }
        .c-kw { color:#c4b5fd; font-weight:500; } .c-fn { color:#818cf8; font-weight:500; } .c-str { color:#34d399; } .c-tag { color:#f472b6; }
        
        .glass-status-badge { position:absolute; top:-20px; right:10px; background:rgba(20,20,28,.8); border:1px solid rgba(255,255,255,.12); padding:12px 20px; border-radius:14px; display:flex; align-items:center; gap:12px; color:#fff; font-size:13px; font-weight:600; backdrop-filter:blur(12px); animation:floatBadge 5s ease-in-out infinite reverse; z-index:3; box-shadow:0 20px 40px rgba(0,0,0,.3); white-space:nowrap; }
        .status-dot { width:8px; height:8px; background:#34d399; border-radius:50%; box-shadow:0 0 12px #34d399; animation:pulseStatus 2s infinite; }
        .floating-icon-badge { position:absolute; bottom:-15px; left:10px; width:54px; height:54px; border-radius:16px; background:linear-gradient(135deg,rgba(167,139,250,.2) 0%,rgba(139,92,246,.05) 100%); border:1px solid rgba(167,139,250,.3); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(12px); animation:floatIcon 6s ease-in-out infinite 1s; z-index:3; box-shadow:0 15px 30px rgba(0,0,0,.2); }
        .floating-icon-badge .material-symbols-outlined { color:#c4b5fd; font-size:24px; }

        /* ════ SECTION HEADER ════ */
        .wd-section-header { margin-bottom:48px; border-bottom:1px solid rgba(255,255,255,.07); padding-bottom:18px; }
        .wd-section-label  { font-size:11px; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(255,255,255,.35); margin-bottom:8px; display:block; }
        .wd-section-title  { font-size:clamp(24px,2.8vw,34px); font-weight:700; letter-spacing:-.02em; color:#fff; }

        /* ════ TIMELINE ════ */
        .wd-timeline { position:relative; padding-left:120px; }
        .wd-timeline::before { content:''; position:absolute; left:14px; top:12px; bottom:12px; width:1px; background:linear-gradient(to bottom,rgba(255,255,255,.08) 0%,rgba(167,139,250,.4) 30%,rgba(167,139,250,.4) 70%,rgba(255,255,255,.04) 100%); }

        .wd-item { position:relative; margin-bottom:16px; border:1px solid rgba(255,255,255,.05); border-radius:14px; background:rgba(255,255,255,.03); transition:all .4s cubic-bezier(.16,1,.3,1); cursor:pointer; }
        .wd-item:hover { background:rgba(255,255,255,.05); border-color:rgba(255,255,255,.09); }
        .wd-item.open  { background:rgba(255,255,255,.06); border-color:rgba(167,139,250,.25); box-shadow:0 20px 40px rgba(0,0,0,.2); }

        .wd-node-wrapper { position:absolute; left:-120px; top:26px; display:flex; align-items:center; gap:28px; width:120px; justify-content:flex-end; }
        .wd-item-year-label { font-size:12px; font-weight:600; color:rgba(255,255,255,.35); font-family:monospace; transition:color .3s; }
        .wd-item:hover .wd-item-year-label, .wd-item.open .wd-item-year-label { color:#c4b5fd; }
        .wd-item-dot { width:9px; height:9px; border-radius:50%; background:#0d0d14; border:2px solid rgba(255,255,255,.25); margin-right:-5px; z-index:2; transition:all .4s cubic-bezier(.16,1,.3,1); }
        .wd-item:hover .wd-item-dot, .wd-item.open .wd-item-dot { border-color:#c4b5fd; background:#a78bfa; transform:scale(1.4); box-shadow:0 0 14px #a78bfa; }

        .wd-item-header   { display:flex; align-items:center; justify-content:space-between; padding:20px 24px; gap:16px; }
        .wd-item-meta     { display:flex; flex-direction:column; gap:4px; }
        .wd-item-title    { font-size:clamp(16px,1.8vw,21px); font-weight:600; color:#fff; letter-spacing:-.015em; transition:color .3s; }
        .wd-item:hover .wd-item-title { color:#ddd6fe; }
        .wd-item-category { font-size:11.5px; font-weight:500; color:rgba(255,255,255,.4); }
        .wd-expand-icon { flex-shrink:0; width:34px; height:34px; border-radius:50%; border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.04); display:flex; align-items:center; justify-content:center; transition:all .3s cubic-bezier(.16,1,.3,1); }
        .wd-item:hover .wd-expand-icon { border-color:rgba(255,255,255,.18); background:rgba(255,255,255,.08); }
        .wd-item.open  .wd-expand-icon { transform:rotate(135deg); border-color:rgba(167,139,250,.45); background:rgba(139,92,246,.14); }
        .wd-expand-icon .material-symbols-outlined { font-size:16px; color:rgba(255,255,255,.5); transition:color .3s; }
        .wd-item.open .wd-expand-icon .material-symbols-outlined { color:#c4b5fd; }

        .wd-item-detail {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height .8s cubic-bezier(.16,1,.3,1), opacity .5s ease;
        }
        .wd-item.open .wd-item-detail { max-height: 2000px; opacity: 1; }

        .wd-panel-wrap {
          border-top: 1px solid rgba(255,255,255,.06);
          background: rgba(0,0,0,.18);
          border-radius: 0 0 14px 14px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .wd-panel-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
          margin-bottom: 20px;
        }

        .wd-img-col { display: flex; flex-direction: column; gap: 16px; width: 100%; }

        .img-slider {
          position: relative;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.07);
          background: #0a0a10;
        }
        .img-slider-track {
          display: flex;
          transition: transform .45s cubic-bezier(.4,0,.2,1);
        }
        .img-slider-img {
          min-width: 100%;
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: center;
          opacity: .85;
          flex-shrink: 0;
          display: block;
          background: #0a0a10;
        }

        .slider-arrow { position:absolute; top:50%; transform:translateY(-50%); width:30px; height:30px; border-radius:50%; background:rgba(13,13,20,.8); border:1px solid rgba(255,255,255,.14); color:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; z-index:5; padding:0; backdrop-filter:blur(4px); }
        .slider-arrow:hover { background:rgba(167,139,250,.4); border-color:rgba(167,139,250,.6); }
        .slider-arrow.left  { left:10px; }
        .slider-arrow.right { right:10px; }
        .slider-arrow .material-symbols-outlined { font-size:16px; }

        .slider-dots { position:absolute; bottom:10px; left:50%; transform:translateX(-50%); display:flex; gap:5px; z-index:5; background:rgba(0,0,0,.55); padding:5px 10px; border-radius:20px; backdrop-filter:blur(4px); }
        .slider-dot  { width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,.35); border:none; cursor:pointer; transition:all .25s; padding:0; }
        .slider-dot.active { background:#fff; transform:scale(1.4); }

        .wd-links-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
        .wd-link-btn  { display:inline-flex; align-items:center; justify-content:center; gap:7px; padding:10px 20px; border-radius:8px; font-size:12px; font-weight:600; text-decoration:none; transition:all .25s; flex: 1; min-width: 130px; text-align: center; }
        .wd-link-btn .material-symbols-outlined { font-size:13px; }
        .wd-link-btn.primary   { background:#fff; color:#0d0d14; }
        .wd-link-btn.primary:hover   { background:#e4e1ed; transform:translateY(-2px); box-shadow:0 6px 14px rgba(255,255,255,.12); }
        .wd-link-btn.secondary { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.12); color:rgba(255,255,255,.85); }
        .wd-link-btn.secondary:hover { color:#fff; background:rgba(255,255,255,.1); border-color:rgba(255,255,255,.25); transform:translateY(-2px); }
        .wd-link-btn.journal   { background:rgba(167,139,250,.12); border:1px solid rgba(167,139,250,.32); color:#e0d2fe; }
        .wd-link-btn.journal:hover   { background:rgba(167,139,250,.22); transform:translateY(-2px); }

        .wd-meta-col { display: flex; flex-direction: column; gap: 20px; width: 100%; }
        .wd-meta-block { display: flex; flex-direction: column; gap: 8px; }
        .wd-meta-label { font-size:10px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; color:#a78bfa; }
        .wd-meta-role  { font-size:13.5px; line-height:1.65; color:rgba(255,255,255,.9); font-weight:500; }

        .wd-tech-list  { display:flex; flex-wrap:wrap; gap:6px; }
        .wd-tech-badge { font-size:10.5px; font-weight:600; padding:4px 11px; border-radius:6px; background:rgba(167,139,250,.1); border:1px solid rgba(167,139,250,.22); color:#c4b5fd; font-family:'Fira Code',monospace; }

        .wd-panel-bottom { border-top: 1px solid rgba(255,255,255,.05); padding-top: 20px; display: flex; flex-direction: column; gap: 8px; }
        .wd-panel-bottom .wd-desc-label { font-size:10px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; color:#a78bfa; }
        .wd-panel-bottom .wd-desc-text  { font-size:13.5px; line-height:1.75; color:rgba(255,255,255,.68); }

        /* ════ RESPONSIVE BREAKPOINTS ════ */
        @media (max-width: 992px) {
          .wd-hero { grid-template-columns: 1fr; text-align: center; padding-top: 160px; padding-bottom: 80px; gap: 50px; }
          .wd-hero-content { align-items: center; }
          .wd-hero-sub { margin: 0 auto 40px; }
          .wd-hero-visual { height: 380px; }
          .glass-panel { transform: rotateY(0deg) rotateX(0deg) translateZ(0); animation: none; padding: 20px; }
        }

        @media (max-width: 768px) {
          .wd-container { padding: 0 24px; }
          .wd-timeline { padding-left: 40px; }
          .wd-timeline::before { left: 14px; }
          .wd-node-wrapper { left: -40px; width: 40px; top: 24px; justify-content: center; gap: 0; }
          .wd-item-year-label { display: none; }
          .wd-item-dot { margin-right: 0; }
          .wd-panel-top { grid-template-columns: 1fr; gap: 20px; }
          .wd-panel-wrap { padding: 20px; }
          .wd-item-header { padding: 16px; }
        }

        @media (max-width: 480px) {
          .wd-container { padding: 0 16px; }
          .wd-hero { padding-top: 130px; }
          .wd-hero-title { font-size: 36px; }
          .glass-panel { padding: 16px; }
          .glass-code { font-size: 11px; }
          .glass-status-badge { top: -15px; right: 5px; padding: 8px 14px; font-size: 11px; }
          .floating-icon-badge { bottom: -10px; left: 5px; width: 44px; height: 44px; }
          .floating-icon-badge .material-symbols-outlined { font-size: 20px; }
          .wd-link-btn { width: 100%; flex: none; }
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

      <div className="wd-page">
        <div className="wd-container">
          {/* ── Hero ── */}
          <section className="wd-hero">
            <div className="wd-hero-content">
              <span className="wd-hero-label">My Work</span>
              <h1 className="wd-hero-title">
                Web
                <br />
                Development
                <br />
                <span>Projects</span>
              </h1>
              <p className="wd-hero-sub">
                Showcasing my web development projects — focused on building
                high-performance and fully responsive web applications.
              </p>
              <a href="#projects" className="wd-btn">
                Explore Portfolio
                <span className="material-symbols-outlined">
                  arrow_downward
                </span>
              </a>
            </div>

            <div className="wd-hero-visual">
              <div className="abstract-shape shape-1" />
              <div className="abstract-shape shape-2" />
              <div className="glass-panel">
                <div className="glass-status-badge">
                  <div className="status-dot" />
                  System Online
                </div>
                <div className="floating-icon-badge">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div className="glass-panel-header">
                  <span className="mac-dot r" />
                  <span className="mac-dot y" />
                  <span className="mac-dot g" />
                </div>
                <pre className="glass-code">
                  <code>
                    <span className="c-kw">const</span>{" "}
                    <span className="c-fn">buildExperience</span> = (){" "}
                    <span className="c-kw">=&gt;</span> {"{"}
                    {"\n"} <span className="c-kw">return</span> ({"\n"} &lt;
                    <span className="c-tag">UI_Core</span>&gt;
                    {"\n"} &lt;<span className="c-tag">CinematicGlow</span>{" "}
                    <span className="c-fn">intensity</span>=
                    <span className="c-str">"100%"</span> /&gt;
                    {"\n"} &lt;<span className="c-tag">FluidMotion</span>{" "}
                    <span className="c-fn">spring</span>=
                    <span className="c-str">"bouncy"</span> /&gt;
                    {"\n"} &lt;/<span className="c-tag">UI_Core</span>&gt;{"\n"}{" "}
                    );{"\n"}
                    {"}"};
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* ── Timeline ── */}
          <section id="projects">
            <div className="wd-section-header">
              <span className="wd-section-label">My Works</span>
              <h2 className="wd-section-title">All Projects</h2>
            </div>

            <div className="wd-timeline">
              {PROJECTS.map((p, i) => (
                <div
                  key={i}
                  className={`wd-item${active === i ? " open" : ""}`}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div className="wd-node-wrapper">
                    <span className="wd-item-year-label">{p.year}</span>
                    <div className="wd-item-dot" />
                  </div>

                  <div className="wd-item-header">
                    <div className="wd-item-meta">
                      <h3 className="wd-item-title">{p.title}</h3>
                      <span className="wd-item-category">{p.category}</span>
                    </div>
                    <div className="wd-expand-icon">
                      <span className="material-symbols-outlined">add</span>
                    </div>
                  </div>

                  {/* ══ EXPAND PANEL ══ */}
                  <div className="wd-item-detail">
                    <div className="wd-panel-wrap">
                      <div className="wd-panel-top">
                        <div className="wd-img-col">
                          <ImageSlider images={p.images} />
                        </div>

                        <div className="wd-meta-col">
                          {p.role && (
                            <div className="wd-meta-block">
                              <p className="wd-meta-label">My Role</p>
                              <p className="wd-meta-role">{p.role}</p>
                            </div>
                          )}
                          <div className="wd-meta-block">
                            <p className="wd-meta-label">Tech Stack</p>
                            <div className="wd-tech-list">
                              {p.tech.map((t) => (
                                <span key={t} className="wd-tech-badge">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {(p.live || p.github || p.journal) && (
                            <div className="wd-links-row">
                              {p.live && (
                                <a
                                  href={p.live}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="wd-link-btn primary"
                                >
                                  Live Demo{" "}
                                  <span className="material-symbols-outlined">
                                    open_in_new
                                  </span>
                                </a>
                              )}
                              {p.github && (
                                <a
                                  href={p.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="wd-link-btn secondary"
                                >
                                  GitHub Repo
                                </a>
                              )}
                              {p.journal && (
                                <a
                                  href={p.journal}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="wd-link-btn journal"
                                >
                                  Read Journal{" "}
                                  <span className="material-symbols-outlined">
                                    menu_book
                                  </span>
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="wd-panel-bottom">
                        <p className="wd-desc-label">Project Overview</p>
                        <p className="wd-desc-text">{p.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}

// File: src/data/WebDevData.js

import bakasePic1 from "../assets/images/WebDev/bakasePic1.webp";
import bakasePic2 from "../assets/images/WebDev/bakasePic2.webp";
import todoPic1 from "../assets/images/WebDev/todoPic1.webp";
import todoPic2 from "../assets/images/WebDev/todoPic2.webp";
import cartrackingPic1 from "../assets/images/WebDev/cartrackingPic1.webp";
import cartrackingPic2 from "../assets/images/WebDev/cartrackingPic2.webp";
import cartrackingPic3 from "../assets/images/WebDev/cartrackingPic3.webp";
import cartrackingPic4 from "../assets/images/WebDev/cartrackingPic4.webp";
import portowpPic1 from "../assets/images/WebDev/portowpPic1.webp";
import portowpPic2 from "../assets/images/WebDev/portowpPic2.webp";
import portowpPic3 from "../assets/images/WebDev/portowpPic3.webp";
import otolensPic1 from "../assets/images/WebDev/otolensPic1.webp";
import otolensPic2 from "../assets/images/WebDev/otolensPic2.webp";
import otolensPic3 from "../assets/images/WebDev/otolensPic3.webp";
import otolensPic4 from "../assets/images/WebDev/otolensPic4.webp";
import otolensPic5 from "../assets/images/WebDev/otolensPic5.webp";

export const PROJECTS = [
  {
    year: "2026",
    title: "OtoLens",
    category: "#JuaraVibeCoding 2026 by GDG Cloud Jakarta Project",
    role: "Full-Stack Engineer — Vibe coded the entire system & integrated Gemini AI",
    tech: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Google AI Studio",
      "Google Gemini",
      "VibeCoding",
    ],
    description:
      "OtoLens is a fully responsive web-based Neural Diagnostic Engine designed to detect hidden structural defects in used cars, developed as part of #JuaraVibeCoding 2026 an event by GDG Cloud Jakarta. Powered by Google Gemini 1.5 Flash API via the @google/genai SDK, the application performs real-time visual scanning to map chassis anomalies, rust, and body damage with interactive hotspots. Features include the Gem or Zonk verdict for non-technical buyers and instant dynamic PDF report generation (EN/ID) for negotiation proof, fully deployed on Google Cloud Run",
    github: "https://github.com/mystrygrdn/OtoLens-JVC2026.git",
    live: "https://otolens-neural-diagnostic-engine-672972200100.asia-southeast1.run.app/",
    images: [otolensPic1, otolensPic2, otolensPic3, otolensPic4, otolensPic5],
  },
  {
    year: "2026",
    title: "Personal Portfolio WordPress",
    category: "Special Skills WordPress Camp Mini Project",
    role: "WordPress Developer — Built all components",
    tech: ["WordPress", "Elementor", "Pantheon"],
    description:
      "Developed a professional portfolio website as the final project for the WordPress Development Camp by Special Skills, where I secured a spot as one of the Top 3 Students based on quiz scores and project performance. Built using WordPress and Elementor, and deployed through Pantheon, this site serves as a clean digital landing page to showcase my expertise in Front-End Development and UI/UX Design through responsive layouts, professional branding, and a streamlined user experience.",
    github: "https://github.com/mystrygrdn/my-wordpress-portfolio.git",
    live: "https://dev-wordpress-repo.pantheonsite.io/home/",
    images: [portowpPic1, portowpPic2, portowpPic3],
  },
  {
    year: "2026",
    title: "Car Service Status Tracking System",
    category: "Thesis Project",
    role: "Full-Stack Developer — Developed the entire application and documentation.",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    description:
      "Developed a web-based near real-time car service status tracking system for FocusAuto Repair Shop Kalasey as an undergraduate thesis project at Sam Ratulangi University. Built using Laravel and Bootstrap, the system allows customers to independently monitor their vehicle's repair progress through a live status tracker, while admins can manage service data and generate invoices, replacing the previous manual WhatsApp-based update system.",
    github:
      "https://github.com/mystrygrdn/WebBased-CarServiceTrackingSystem-FocusAutoKalasey.git",
    journal:
      "https://publikasi.teknokrat.ac.id/index.php/jatika/article/view/1609",
    images: [
      cartrackingPic1,
      cartrackingPic2,
      cartrackingPic3,
      cartrackingPic4,
    ],
  },
  {
    year: "2026",
    title: "To-Do List Life Dashboard",
    category: "RevoU Coding Camp Mini Project",
    role: "Front-End Developer — Built all components",
    tech: ["HTML5", "CSS", "Vanilla JavaScript", "VibeCoding", "Kiro"],
    description:
      "Developed a web-based productivity dashboard as part of the RevoU Coding Camp Batch 09 March 2026 mini project using Kiro. The application helps users organize daily activities through features such as a to-do list, focus timer (Pomodoro), real-time clock, and quick access links to favorite websites.",
    github:
      "https://github.com/mystrygrdn/CodingCamp-9Mar26-DarleneSyaroonAsalui.git",
    live: "https://mystrygrdn.github.io/CodingCamp-9Mar26-DarleneSyaroonAsalui/",
    images: [todoPic1, todoPic2],
  },
  {
    year: "2024",
    title: "BAKASe",
    category: "GEMASTIK 2024 Project",
    role: "Front-End Developer — Developed the Landing Page and Main Website interface.",
    tech: ["CSS", "Bootstrap", "HTML"],
    description:
      "BAKASe is created by the ENTRI Team for the GEMASTIK 2024 competition in the Software Development Division. BAKASe is a web-based app that helps students at Sam Ratulangi University exchange used items. The idea is to reduce waste by reusing items that are still in good condition but often thrown away.",
    github: "",
    live: "",
    images: [bakasePic2, bakasePic1],
  },
];

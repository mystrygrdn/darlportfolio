import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

// Halaman selain Home baru di-load saat dibutuhkan (code-splitting),
// jadi initial load pertama kali buka website jadi lebih ringan/cepat.
const WebDev = lazy(() => import("./pages/WebDev"));
const Multimedia = lazy(() => import("./pages/Multimedia"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
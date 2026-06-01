import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import Multimedia from "./pages/Multimedia";
import AboutMe from "./pages/AboutMe";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

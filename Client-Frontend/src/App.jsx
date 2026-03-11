import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Services from "./Pages/Services";

import { useDisableInspect, SecurityToast } from "./utils/disableInspect";

export default function App() {

  const toast = useDisableInspect(); // ✅ correct

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* 🔔 security toast */}
      <SecurityToast
        message={toast.message}
        show={toast.show}
      />
    </>
  );
}

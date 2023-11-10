import React, { useRef } from "react";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Fleet from "./components/Fleet";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Promotions from "./components/Promotions";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const aboutUsRef = useRef(null);
  const fleetRef = useRef(null);
  const servicesRef = useRef(null);
  const promotionsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar
        aboutUsRef={aboutUsRef}
        fleetRef={fleetRef}
        servicesRef={servicesRef}
        promotionsRef={promotionsRef}
        contactRef={contactRef}
      />
      <Hero />
      <AboutUs ref={aboutUsRef} />
      <Fleet ref={fleetRef} />
      <Services ref={servicesRef} />
      <Promotions ref={promotionsRef} />
      <Contact ref={contactRef} />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

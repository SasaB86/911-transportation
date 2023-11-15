import React from "react";
import { Element } from "react-scroll";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Fleet from "./components/Fleet";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <AboutUs />
      </Element>

      <Element name="fleet">
        <Fleet />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

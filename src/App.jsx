import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Packages from "./components/Packages.jsx";
import Destinations from "./components/Destinations.jsx";
import Safety from "./components/Safety.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { SITE, waLink } from "./config.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Packages />
        <Destinations />
        <Safety />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <a
        className="wa-float"
        href={waLink(`Hi ${SITE.guideName}, I'd like to know more about a tour in Bangladesh.`)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span aria-hidden="true">💬</span>
      </a>
    </>
  );
}

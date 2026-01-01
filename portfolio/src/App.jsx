import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Resume />
      <Footer />
    </>
  );
}

export default App;
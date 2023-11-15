import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import { Hero } from "./components/hero/hero";
import { Parallax } from "./components/parallax/Parallax";
import { Project } from "./components/projects/Project";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax />
      </section>
      <section id="Portfolio">
        <Project />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;

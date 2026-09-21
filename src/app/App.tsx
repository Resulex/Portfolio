import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Experience } from "./components/experience";
import { TechStack } from "./components/tech-stack";
import { Projects } from "./components/projects";
import { Education } from "./components/education";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

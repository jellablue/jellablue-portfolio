import Hero from "@/components/Hero";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default async function Home() {

  return (
    <main className="w-full">
        {/* Hero */}
      <section id="hero" className="scroll-mt-24">
        <Hero/>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24">
        <About/>
      </section>

      {/* Projects */}
       <section id="projects" className="scroll-mt-24">
        <Projects/>
      </section>
      
      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <Contact/>
      </section>
     
    </main>
  );
}


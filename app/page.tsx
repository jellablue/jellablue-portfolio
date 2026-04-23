import Hero from "@/components/Hero";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default async function Home() {

  return (
    <main>
        {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-8">
        <Hero/>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center justify-center px-8">
        <About/>
      </section>

      {/* Projects */}
       <section id="projects" className="min-h-screen flex items-center justify-center px-8">
        <Projects/>
      </section>
      
      {/* Contact */}
      <section id="contact"  className="min-h-screen flex items-center justify-center px-8">
        <Contact/>
      </section>
     
    </main>
  );
}


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divider />
      <Education />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Achievements />
      <Footer />
    </main>
  );
}

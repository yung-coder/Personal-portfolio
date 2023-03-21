import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import StarsCanvas from "../../components/Stars";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#050816]">
      <div className="relative z-0">
        <StarsCanvas />
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0">
        <StarsCanvas />
        <AboutMe />
      </div>
      <div className="relative z-0">
        <StarsCanvas />
        <Skills />
      </div>
      <div className="relative z-0">
        <StarsCanvas />
        <Contact />
      </div>
      <div className="relative z-0">
        <StarsCanvas />
        <Projects />
      </div>
    </main>
  );
}

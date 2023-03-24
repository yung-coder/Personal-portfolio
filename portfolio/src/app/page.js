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
import { Black_Han_Sans, Reenie_Beanie, Luckiest_Guy } from "next/font/google";
import ProjectApi from "../../components/ProjectApi";

const hans = Black_Han_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const Lucky = Luckiest_Guy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lucky",
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-[#050816] ${Lucky.variable} font-sans`}>
      <div className="relative z-0" id="home">
        <StarsCanvas />
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0" id="About">
        <StarsCanvas />
        <AboutMe />
      </div>
      <div className="relative z-0" id="skills">
        <StarsCanvas />
        <Skills />
      </div>
      <div className="relative z-0 mt-3" id="Project">
        <StarsCanvas />
        <ProjectApi />
      </div>
      <div className="relative z-0" id="Contact">
        <StarsCanvas />
        <Contact />
      </div>
    </main>
  );
}

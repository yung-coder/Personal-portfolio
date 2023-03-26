import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import StarsCanvas from "../../components/models/Stars";
import { Black_Han_Sans, Luckiest_Guy, Poppins } from "next/font/google";
import AboutMe from "../../Sections/AboutMe";
import Skills from "../../Sections/Skills";
import ProjectApi from "../../Sections/ProjectApi";
import Contact from "../../Sections/Contact";

const hans = Black_Han_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const Lucky = Luckiest_Guy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lucky",
});

const Popins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-pop",
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${Popins.variable} font-sans`}>
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
      <div className="relative z-0" id="Project">
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

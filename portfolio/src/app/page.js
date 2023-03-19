import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import StarsCanvas from "../../components/Stars";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black">
      <div className="relative z-0">
        <StarsCanvas />
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <div className="relative z-0">
        <StarsCanvas />
        <Contact />
      </div>
    </main>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className='background'>
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <Contact />
    </main>
  );
}

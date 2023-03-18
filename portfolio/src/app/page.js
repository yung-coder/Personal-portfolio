import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className='background'>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

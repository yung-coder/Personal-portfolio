import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Pic from "../../public/assests/two.jpg";
import Hero from "../../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className=" w-screen h-screen bg-[#3730a3]">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

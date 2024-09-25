import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Footer from "@/Components/ui/Footer";
import NavBar from "@/Components/ui/NavBar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Wrapper from "@/Components/ui/Wrapper";
import Container from "@/Components/ui/Container";
import SectionBadge from "@/Components/ui/SectionBadge";
import Intro from "@/Components/ui/Intro";

export default function Home() {
  return (
<main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
  <div className="max-w-7xl w-full">
   <NavBar/>
    <Hero/>
    <br />
    <br />
    <Intro/>
    <Grid/>
    <Footer/>

  </div>
</main>
  );
}

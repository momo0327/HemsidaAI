import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import Footer from "@/Components/ui/Footer";
import NavBar from "@/Components/ui/NavBar";
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

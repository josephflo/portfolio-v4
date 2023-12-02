import About from "@/components/About";
import Heroe from "@/components/Heroe";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="overflow-hidden mx-auto ">
      <Heroe />
      <About />
      <Projects />
    </main>
      
     )
}

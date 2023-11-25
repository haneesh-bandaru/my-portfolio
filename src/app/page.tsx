"use client";
import NavBar from "@/components/navBar/navBar";
import Homed from "@/components/home/homed";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#DDE6ED" }}>
      <NavBar />
      <Homed />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}

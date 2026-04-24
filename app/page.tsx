import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Edge from "@/components/Edge";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="space-y-20">

      <Navbar />

      <Hero />            {/* Home */}
      <Stats />           {/* Stats */}
      <Clients />         {/* Clients */}
      <Edge />            {/* Accredian Edge */}
      <Testimonials />    {/* Testimonials */}
      <Contact />         {/* Contact */}

    </main>
  );
}
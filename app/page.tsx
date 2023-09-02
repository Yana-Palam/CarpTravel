import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Career from "@/components/Career";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Career />
      <Contacts />
    </main>
  );
}

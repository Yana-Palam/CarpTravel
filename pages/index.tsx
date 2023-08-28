import { FC } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Career from "@/components/Career";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
};

export default Home;

import { FC } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Career from "@/components/Career";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Career />
    </>
  );
};

export default Home;

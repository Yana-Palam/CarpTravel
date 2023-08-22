import { FC } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
};

export default Home;

import { FC } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header className="absolute z-10 top-0 left-0 w-full pt-9 md:pt-6">
      <div className="container flex justify-between items-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

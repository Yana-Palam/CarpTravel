"use client";

import { FC, useState } from "react";
import { Link } from "react-scroll";
import { navigation } from "@/helpers/navigation";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${
        !isOpen ? "" : "mob-menu fixed z-20 top-0 left-0 h-screen w-screen"
      } `}
    >
      <nav className={`${!isOpen ? "hidden" : "block"} md:block`}>
        <ul className={"flex flex-col gap-12 md:flex-row md:gap-[56px]"}>
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <Link
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-[18px] md:text-[14px]  tracking-[1.4px] cursor-pointer"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        onClick={toggleModal}
        className={`${
          isOpen ? "absolute  top-[43px] right-5" : "block md:hidden"
        } block text-sm tracking-[1.4px] uppercase cursor-pointer`}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
};

export default Navbar;

import { FC } from "react";
import { Link } from "react-scroll";

const navigation = [
  { id: 1, title: "About", path: "about" },
  { id: 2, title: "Services", path: "services" },
  { id: 3, title: "Career", path: "career" },
  { id: 4, title: "Gallery", path: "gallery" },
  { id: 5, title: "Contacts", path: "contacts" },
];

const Navbar: FC = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-[56px]">
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              to={path}
              spy={true}
              smooth={true}
              duration={500}
              className="text-sm/[17px] tracking-[1.4px] cursor-pointer"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

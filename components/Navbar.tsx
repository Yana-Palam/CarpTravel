import { FC } from "react";

const navigation = [
  { id: 1, title: "About", path: "" },
  { id: 2, title: "Services", path: "#services" },
  { id: 3, title: "Career", path: "#career" },
  { id: 4, title: "Gallery", path: "#gallery" },
  { id: 5, title: "Contacts", path: "#contacts" },
];

const Navbar: FC = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-[56px]">
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <a href={path} className="text-sm/[17px] tracking-[1.4px]">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

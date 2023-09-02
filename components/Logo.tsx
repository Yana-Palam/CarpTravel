import { FC } from "react";
import Image from "next/image";
import content from "../helpers/content.json";

const Logo: FC = () => {
  return (
    <a className="block" href="/">
      <Image
        src="/logo.png"
        priority
        width={61}
        height={22}
        alt="logo"
        className="mb-[2px]"
      />
      <p className="logo-text">{content.header.logoText}</p>
    </a>
  );
};

export default Logo;

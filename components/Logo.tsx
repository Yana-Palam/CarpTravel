import { FC } from "react";
import Image from "next/image";
import styles from "../styles/Logo.module.css";

const Logo: FC = () => {
  return (
    <div>
      <Image
        src="/logo.png"
        width={61}
        height={22}
        alt="logo"
        className="mb-[2px]"
      />
      <p className={styles.text}>CarpTravel</p>
    </div>
  );
};

export default Logo;

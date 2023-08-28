import { FC } from "react";
import Image from "next/image";
import bg from "../public/images/contacts-bg.jpg";
import ContactsForm from "./ContactsForm";
import { socialLinks } from "@/utils/contacts";

const Contacts: FC = () => {
  return (
    <section className="section relative" id="contacts">
      <Image
        src={bg}
        alt="forest"
        fill
        quality={100}
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="container">
        <h2 className="section-title mb-9 xl:mb-[71px]">
          Contact <span className="section-title-accent">us</span>
        </h2>
        <div className="xl:flex xl:gap-[231px]">
          <div className="flex flex-col md:flex-wrap mb-3 md:h-[83px] md:gap-x-[90px] md:mb-16 md:content-start xl:h-auto">
            <div className="xl:mb-[124px]">
              <div className="flex gap-5 justify-end mb-6 text-sm xl:text-[18px] xl:mb-16">
                <div className="flex flex-col md:w-[221px] md:text-right">
                  <a href="tel:+380981234567" className="leading-[1.33]">
                    +38 (098) 12 34 567
                  </a>
                  <a href="tel:+380981234567" className="leading-[1.33]">
                    +38 (098) 12 34 567
                  </a>
                </div>
                <p className="min-w-[81px] basis-[81px] text-[12px] font-extralight">
                  Phone number
                </p>
              </div>
              <div className="flex gap-5 justify-end mb-[26px] text-sm xl:text-[18px] md:mb-0 ">
                <div className="md:w-[221px] md:text-right">
                  <a
                    href="mailto:support@carptravel.com"
                    className="leading-[1.33]"
                  >
                    support@carptravel.com
                  </a>
                </div>
                <p className="min-w-[81px] basis-[81px] text-[12px] font-extralight ">
                  E-mail
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-end text-sm md:justify-start xl:text-[18px] xl:flex-row-reverse">
              <p className="text-[12px] font-extralight xl:min-w-[81px] xl:basis-[81px]">
                Follow us
              </p>
              <ul className="flex flex-col leading-[1.33] min-w-[81px] basis-[81px] md:leading-[1.5]  xl:basis-[221px] xl:text-right">
                {socialLinks.map(({ text, link }, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      className="hover:underline transition-all duration-300"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;

import type { RegisterOptions } from "react-hook-form";
import { emailRegex, fullNameRegex, phoneRegex } from "./regex";

export const advantages = [
  {
    title: "Professional development",
    text: "We offer growth opportunities and a creative environment to nurture your talents.",
  },
  {
    title: "Teamwork",
    text: "Join our close-knit family, where support and inspiration abound.",
  },
  {
    title: "Stimulating work environment",
    text: "Flexibility and remote options for a comfortable experience.",
  },
  {
    title: "Exciting challenges",
    text: "Unleash your potential through unforgettable projects showcasing Carpathian beauty.",
  },
];

export const registerOptions: Record<string, RegisterOptions> = {
  fullName: {
    required: "Required",
    pattern: {
      value: fullNameRegex,
      message: "Incorrect name",
    },
  },
  email: {
    required: "Required",
    pattern: {
      value: emailRegex,
      message: "Incorrect email",
    },
  },

  position: {
    required: "Required",
  },

  phone: {
    required: "Required",

    pattern: {
      value: phoneRegex,
      message: "Incorrect phone",
    },
  },

  message: {
    required: "Required",
    minLength: {
      value: 30,
      message: "Min 30 characters",
    },
  },

  policy: {
    required: "Required",
  },
};

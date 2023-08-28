import type { RegisterOptions } from "react-hook-form";
import { emailRegex, fullNameRegex } from "./regex";

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

  message: {
    required: "Required",
    minLength: {
      value: 30,
      message: "Min 30 characters",
    },
  },
};

export const socialLinks = [
  { text: "facebook", link: "#" },
  { text: "instagram", link: "#" },
  { text: "youtube", link: "#" },
  { text: "tiktok", link: "#" },
];

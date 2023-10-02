import axios from "axios";
import { ContactsFormFields } from "@/types";
import { CareerFormFields } from "@/types";

export const sendContactDataToTelegram = async (data: ContactsFormFields) => {
  let message = "Заявка з сайту:\n";

  for (const [key, value] of Object.entries(data)) {
    message += `${key}: ${value}\n`;
  }

  try {
    const response = await axios.post(`/api/telegram`, {
      text: message,
    });
  } catch (error) {
    throw new Error();
  }
};

export const sendCareerDataToTelegram = async (data: CareerFormFields) => {
  let message = "Заявка з сайту:\n";

  for (const [key, value] of Object.entries(data)) {
    message += `${key}: ${value}\n`;
  }

  try {
    const response = await axios.post(`/api/telegram`, {
      text: message,
    });
  } catch (error) {
    throw new Error();
  }
};

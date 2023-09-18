import axios from "axios";
import { ContactsFormFields } from "@/types";
import { CareerFormFields } from "@/types";
const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
const API_TELEGRAM_URL = process.env.NEXT_PUBLIC_API_TELEGRAM_URL;

export const sendContactDataToTelegram = async (data: ContactsFormFields) => {
  let message = "Заявка з сайту:\n";

  for (const [key, value] of Object.entries(data)) {
    message += `${key}: ${value}\n`;
  }

  try {
    await axios.post(`${API_TELEGRAM_URL}${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
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
    await axios.post(`${API_TELEGRAM_URL}${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
    });
  } catch (error) {
    throw new Error();
  }
};

import axios from "axios";
const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
const API_TELEGRAM_URL = process.env.NEXT_PUBLIC_API_TELEGRAM_URL;

export const sendDataToTelegram = async (data: any) => {
  let message = "Заявка з сайту:\n";

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      message += `${key}: ${data[key]}\n`;
    }
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

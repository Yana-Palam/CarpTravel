import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
  const API_TELEGRAM_URL = process.env.NEXT_PUBLIC_API_TELEGRAM_URL;
  const URI_API = `${API_TELEGRAM_URL}${BOT_TOKEN}/sendMessage`;

  const message = await req.json();
  try {
    const response = await axios.post(URI_API, {
      chat_id: CHAT_ID,
      text: message.text,
      parse_mode: "HTML",
    });

    if (response.data.result) {
      return NextResponse.json({ status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}

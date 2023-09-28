import axios from "axios";
import { CareerFormFields } from "@/types";
const GOOGLE_SHEETS_SCRIPT_URL = process.env
  .NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL as string;

export const sendDataToGoogleSheets = async (data: CareerFormFields) => {
  try {
    await axios.post(GOOGLE_SHEETS_SCRIPT_URL, data);
  } catch (error) {
    throw new Error();
  }
};

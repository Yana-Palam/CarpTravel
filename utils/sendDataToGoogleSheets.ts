import axios from "axios";
import { CareerFormFields } from "@/types";

export const sendDataToGoogleSheets = async (data: CareerFormFields) => {
  const reqData = { ...data, phone: data.phone.replace("+", " +") };
  try {
    await axios.post("/api/googleSheet", reqData);
  } catch (error) {
    throw new Error();
  }
};

import axios from "axios";
import { contact } from "./types";

export const fetchContacts = async (token : string , setContacts : React.Dispatch<React.SetStateAction<contact[]>>) => {
    try {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/contact`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContacts(data.data.contacts);
    } catch (error) {
      console.log(error);
    }
  };
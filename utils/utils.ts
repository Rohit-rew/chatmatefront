import { msgPacket } from "@/pages/chat";
import axios from "axios";
import { userInfo } from "context/currentUserContext";
import { contact } from "./types";

export const fetchContacts = async (
  token: string,
  setContacts: React.Dispatch<React.SetStateAction<contact[]>>
) => {
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


export const getUserDataFromCookies = async (token : string ) => {
  try {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data
  } catch (error) {
    console.log(error);
  }
};

export const saveMsgToLocalStorage =  (currentUserInfo : userInfo
   , payload : msgPacket)=>{
  if (typeof window !== undefined) {
    const messages = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_PREFIX}${currentUserInfo.id}${
        currentUserInfo.email == payload.sender.email
          ? payload.sentTo
          : payload.sender.email
      }`
    );
    if (messages) {
      const parsedMessages = JSON.parse(messages);
      localStorage.setItem(
        `${process.env.NEXT_PUBLIC_PREFIX}${currentUserInfo.id}${
          currentUserInfo.email == payload.sender.email
            ? payload.sentTo
            : payload.sender.email
        }`,
        JSON.stringify([...parsedMessages, payload])
      );
    } else {
      localStorage.setItem(
        `${process.env.NEXT_PUBLIC_PREFIX}${currentUserInfo.id}${
          currentUserInfo.email == payload.sender.email
            ? payload.sentTo
            : payload.sender.email
        }`,
        JSON.stringify([payload])
      );
    }
  }

}
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { ChatWindowContext } from "context/chatWinContext";
import { chatType } from "./chatLogs";
import { currentUserInfoContext } from "context/currentUserContext";
import { contact } from "utils/types";

//types
type propTypes = {
  contact: { name: string; email: string; id: string };
  deleteContact: (id: string) => void;
};

export default function Contact({ contact, deleteContact }: propTypes) {
  const { setChatWindowOpen, setCurrChatWinDetails } =
    React.useContext(ChatWindowContext);

  const {currentUser} = React.useContext(currentUserInfoContext)

  const clickHandler = () => {
    setChatWindowOpen(true);
    setCurrChatWinDetails({ contact: contact});

    // save chat log tolocal storage
    if(typeof window !== "undefined"){
      const chatLogs = localStorage.getItem(`${process.env.NEXT_PUBLIC_PREFIX}${currentUser?.id}CL`)
      if(chatLogs){
        const parsedChatLogs = JSON.parse(chatLogs)
        const existingChatLog = parsedChatLogs.filter((con : contact) =>{
            return con.email == contact.email
        })
        if(existingChatLog.length > 0){
          return ;
        }else{
          localStorage.setItem(`${process.env.NEXT_PUBLIC_PREFIX}${currentUser?.id}CL` , JSON.stringify([...parsedChatLogs ,contact]))
        }

      }else{
        localStorage.setItem(`${process.env.NEXT_PUBLIC_PREFIX}${currentUser?.id}CL` , JSON.stringify([contact]))
      }
    }
  };

  return (
    <div
      onClick={clickHandler}
      className="contact w-full bg-gray-200 rounded p-2 flex gap-4 items-center justify-between hover:cursor-pointer"
    >
      <div className="flex  gap-4">
        <Image
          className="shadow rounded-full"
          src={"/userimage.png"}
          alt=""
          width={50}
          height={50} 
        />
        <div className="flex flex-col">
          <p className="text-lg">{contact.name}</p>
          <p className="text-gray-400 text-sm">Email : {contact.email}</p>
        </div>
      </div>

      <FontAwesomeIcon
        onClick={(e) => {
          e.stopPropagation();
          deleteContact(contact.id);
        }}
        className=" right-2 text-xl text-red-300"
        icon={faTrashCan}
      />
    </div>
  );
}

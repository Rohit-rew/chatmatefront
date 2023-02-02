import React from "react";
import Image from "next/image";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { ChatWindowContext } from "context/chatWinContext";


import { chatType } from "./chatLogs";
type propTypes = {
  chat: chatType
};

export default function ChatCard({ chat }: propTypes) {
  const {setChatWindowOpen , setCurrChatWinDetails} = React.useContext(ChatWindowContext)


  const handleClick= ()=>{
    setChatWindowOpen(true)
    setCurrChatWinDetails({contact : chat.contact , messages : chat.messages})
  }

  return (
    <div onClick={handleClick} className="contact w-full bg-white border p-3 flex gap-4 items-center justify-between">
      <div className="flex  gap-4">
        <Image
          placeholder={"blur"}
          blurDataURL={"/userimage.png"}
          className="shadow rounded-full w-50 h-50"
          src={"/userimage.png"}
          alt=""
          width={50}
          height={50} 
        />
        <div className="flex flex-col">
          <p className="text-lg">{chat.contact.name}</p>
          <p className="text-gray-400 text-sm"> {chat.messages[chat.messages.length-1]?.msg}</p>
        </div>
      </div>

      <FontAwesomeIcon
        className=" right-2 text-xl text-red-300"
        icon={faTrashCan}
      />
    </div>
  );
}

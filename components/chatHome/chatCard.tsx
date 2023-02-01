import React from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

type propTypes = {
  chat: { name: string; lastMessage: string };
};

export default function ChatCard({ chat }: propTypes) {
  return (
    <div className="contact w-full bg-white border p-3 flex gap-4 items-center justify-between">
      <div className="flex  gap-4">
        <Image
          className="shadow rounded-full"
          src={"/userimage.png"}
          alt=""
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <p className="text-lg">{chat.name}</p>
          <p className="text-gray-400 text-sm"> {chat.lastMessage}</p>
        </div>
      </div>

      <FontAwesomeIcon
        className=" right-2 text-xl text-red-300"
        icon={faTrashCan}
      />
    </div>
  );
}

import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


type propTypes = {
  name : string,
  idOrEmail : string
  closeChatWIndow :  React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChatHeader({name , idOrEmail , closeChatWIndow} : propTypes) {

  return (
    <div className="bg-blue-500 w-full px-4 py-2 shadow-xl z-10 rounded-t fixed top-0 max-w-xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Image
            className="rounded-full bg-yellow-400 shadow"
            src="/userimage.png"
            alt=""
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <h2 className="text-xl text-white">{name}</h2>
            <p className="text-xs text-gray-300">{idOrEmail}</p>
          </div>
        </div>

        <FontAwesomeIcon onClick={()=>closeChatWIndow(false)} className="text-white text-2xl" icon={faArrowLeft} />
      </div>
    </div>
  );
}

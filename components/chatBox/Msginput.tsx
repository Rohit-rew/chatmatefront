import React from "react";

// font awesome
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// types
import { messageInputPropT } from "utils/types";

export default function Msginput({message , setmessage , sendMessage} : messageInputPropT) {
  return (
    <div className="w-full bg-blue-500 flex justify-center items-center px-4 py-2 fixed bottom-0 gap-2 max-w-xl">
      <input 
      onChange={(e)=>setmessage(e.target.value)}
      value={message}
      className="w-full h-10 rounded outline-none p-2" />
      <button 
        onClick={sendMessage}
      className="flex p-2 bg-white rounded items-center gap-2">
        <FontAwesomeIcon icon={faMessage} />
        Send
      </button>
    </div>
  );
}

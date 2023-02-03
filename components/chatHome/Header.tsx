import React from "react";

//components
import Menu from "components/chatHome/menu";
import UserInfo from "components/chatHome/UserInfo";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faContactBook , faRestroom } from "@fortawesome/free-solid-svg-icons";
import { chatHomeHeaderT } from "utils/types";



export default function Header({
  view,
  setView,
}: chatHomeHeaderT) {
  return (
    <header className="w-full bg-blue-500 fixed top-0  max-w-xl gap-1 shadow flex flex-col">
      <div className="flex justify-between px-4 py-2">
        <UserInfo />
        <Menu />
      </div>

      <div className="bg-blue-500 w-full h-12 flex justify-between border-t border-black">
        <button
          onClick={() => setView("chats")}
          className={`w-2/4 text-white border-r flex items-center justify-center gap-2 ${Boolean(view == "chats") ? "shadow-inner bg-blue-400" : "" } `}
        >
          {" "}
          <FontAwesomeIcon icon={faMessage} /> Chats
        </button>
        <button
          onClick={() => setView("rooms")}
          className={`w-2/4 text-white border-r flex items-center justify-center gap-2 ${Boolean(view == "rooms") ? "shadow-inner bg-blue-400" : "" } `}
        >
          {" "}
          <FontAwesomeIcon icon={faRestroom} /> Rooms
        </button>
        <button
          onClick={() => setView("contacts")}
          className={`w-2/4 text-white flex items-center justify-center gap-2 shadow ${Boolean(view == "contacts") ? "shadow-inner bg-blue-400" : "" }`}
        >
          {" "}
          <FontAwesomeIcon icon={faContactBook} />
          Contacts
        </button>
      </div>
      
    </header>
  );
}

 

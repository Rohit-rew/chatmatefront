import React from "react";

//components
import Menu from "components/chatHome/menu";
import UserInfo from "components/chatHome/UserInfo";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faContactBook } from "@fortawesome/free-solid-svg-icons";

type propTypes = {
  setChatsLog: React.Dispatch<React.SetStateAction<boolean>>;
  isChatsLogOpen: boolean;
};

export default function Header({
  isChatsLogOpen,
  setChatsLog,
}: propTypes) {
  return (
    <header className="w-full bg-blue-500 fixed top-0  max-w-xl gap-1 shadow flex flex-col">
      <div className="flex justify-between px-4 py-2">
        <UserInfo />
        <Menu />
      </div>

      <div className="bg-blue-500 w-full h-12 flex justify-between border-t border-black">
        <button
          onClick={() => setChatsLog(true)}
          className={`w-2/4 text-white border-r flex items-center justify-center gap-2 ${isChatsLogOpen ? "shadow-inner bg-blue-400" : "" } `}
        >
          {" "}
          <FontAwesomeIcon icon={faMessage} /> Chats
        </button>
        <button
          onClick={() => setChatsLog(false)}
          className={`w-2/4 text-white flex items-center justify-center gap-2 shadow ${!isChatsLogOpen ? "shadow-inner bg-blue-400" : "" }`}
        >
          {" "}
          <FontAwesomeIcon icon={faContactBook} />
          Contacts
        </button>
      </div>
      
    </header>
  );
}

 

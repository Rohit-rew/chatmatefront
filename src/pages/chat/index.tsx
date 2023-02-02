import React from "react";

// components
import Header from "components/chatHome/Header";
import ChatLogs from "components/chatHome/chatLogs";
import ContactLogs from "components/chatHome/contactLogs";
import ChatBox from "components/chatBox/chatBox";

import { ChatWindowContext } from "context/chatWinContext";

//types
import { contact } from "utils/types";
import CreateRoomModal from "components/chatHome/createRoomModal";
import { roomContext } from "context/createRoomContext";
export type chatWindowDetails = {
  contact: contact;
  message: [];
};

export default function ChatHome() {
  const [isChatsLogOpen, setChatsLog] = React.useState<boolean>(true);
  const { isChatWindowOpen } = React.useContext(ChatWindowContext);
  const {iscreateRoomModal} = React.useContext(roomContext)

  return (
    <div className="flex justify-center items-center bg-gray-200 background-gradient ">
      <div className=" Contacts w-full h-screen bg-white flex flex-col gap-2 overflow-scroll pt-20 max-w-xl">
        <Header isChatsLogOpen={isChatsLogOpen} setChatsLog={setChatsLog} />
        {isChatsLogOpen && <ChatLogs />}
        {!isChatsLogOpen && <ContactLogs />}
      </div>

      {isChatWindowOpen && <ChatBox />}

      {iscreateRoomModal && <CreateRoomModal />}
    </div>
  );
}

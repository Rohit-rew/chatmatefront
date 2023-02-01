import React from "react";

// components
import Header from "components/chatHome/Header";
import ChatLogs from "components/chatHome/chatLogs";
import ContactLogs from "components/chatHome/contactLogs";

export default function ChatHome() {
  const [isChatsLogOpen, setChatsLog] = React.useState<boolean>(true);

  return (
    <div className="flex justify-center items-center bg-gray-200 background-gradient ">
      <div className=" Contacts w-full h-screen bg-white flex flex-col gap-2 overflow-scroll pt-20 max-w-xl">
        <Header isChatsLogOpen={isChatsLogOpen} setChatsLog={setChatsLog} />
        {isChatsLogOpen && <ChatLogs />}
        {!isChatsLogOpen && <ContactLogs />}
      </div>
    </div>
  );
}
 
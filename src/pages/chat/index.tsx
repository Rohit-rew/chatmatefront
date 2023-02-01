import React from "react";
import Image from "next/image";

// components
import Contacts from "components/chat/Contacts";
import ChatBox from "components/chat/chatBox";

export default function ChatHome() {
  return (
    <div className="flex justify-center items-center bg-gray-200 background-gradient ">
          <Contacts />
          {/* <ChatBox /> */}
    </div>
  );
}

import React from "react";
import ChatCard from "./chatCard";


export default function ChatLogs() {
  const chatLogs = [
    {
      name: "mohit kumar",
      lastMessage: "Hello how are you",
    },
    {
      name: "mohit kumar",
      lastMessage: "Hello how are you",
    },
    {
      name: "mohit kumar",
      lastMessage: "Hello how are you",
    },
    {
      name: "mohit kumar",
      lastMessage: "Hello how are you",
    },
  ];

  return (
    <div className="flex flex-col pt-16">
        {chatLogs.map(chat=>{
            return <ChatCard chat={chat}/>
        })}
    </div>
  );
}

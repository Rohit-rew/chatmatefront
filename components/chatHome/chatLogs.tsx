import React from "react";
import { contact } from "utils/types";
import ChatCard from "./chatCard";

export type message = {
  msg: string;
  sentBy: string;
  sentTo: string;
};

export type chatType = {
  contact: contact;
  messages: message[];
};

export default function ChatLogs() {
  const chatLogs: chatType[] = [ // need to fix this
    {
      contact: { name: "Mohit Kumar", email: "mohit.rew@gmail.com" },
      messages: [
        {
          msg: "hellow how are you",
          sentBy: "asd32qwed23e",
          sentTo: "cldlc8l620000nmiyfme1dc8j",
        },
        {
          msg: "I am good man",
          sentBy: "cldlc8l620000nmiyfme1dc8j",
          sentTo: "423434rerf34r",
        },
      ],
    }, 
  ];

  return (
    <div className="flex flex-col pt-16">
      {chatLogs.map((chat, i) => {
        return <ChatCard key={i} chat={chat} />;
      })}
    </div>
  );
}

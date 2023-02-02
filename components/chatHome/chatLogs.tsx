import React from "react";
import { contact } from "utils/types";
import ChatCard from "./chatCard";

export type message = {
  msg: string;
  sender: { name: string; email: string; id: string };
  sentTo: string;
  time: Date;
};

export type chatType = {
  contact: contact;
  messages: message[];
};

export default function ChatLogs() {
 
// fetching chat logs from database

  const chatLogs: chatType[] = [
  // need to fix this
  {
    contact: { name: "Mohit Kumar", email: "mohit.rew@gmail.com" },
    messages: [
      {
        msg: "hellow how are you",
        sender: { email: "asdasd@asdasd.asd", id: "asdasd", name: "pakiya" },
        sentTo: "email@email.com",
        time: Date.now(),
      },
    ],
  },


]; 

  return (
    <div className="flex flex-col pt-16">
      {chatLogs?.map((chat: chatType, i: number) => {
        return <ChatCard key={i} chat={chat} />;
      })}
    </div>
  );
}





















import { currentUserInfoContext } from "context/currentUserContext";
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
  const { currentUser } = React.useContext(currentUserInfoContext);

  // fetching chat logs from local storage

  const [chatLogs, setChatLogs] = React.useState(() => {
    if (typeof window !== "undefined") {
      const chatLogFromLocal = localStorage.getItem(
        `${process.env.NEXT_PUBLIC_PREFIX}${currentUser?.id}CL`
      );
      if (chatLogFromLocal) {
        return JSON.parse(chatLogFromLocal);
      } else {
        return [];
      }
    }  
  });

  // const chatLogs: chatType[] = [
  // // need to fix this
  // {
  //   contact: { name: "Mohit Kumar", email: "mohit.rew@gmail.com" },
  //   messages: [
  //     {
  //       msg: "hellow how are you",
  //       sender: { email: "asdasd@asdasd.asd", id: "asdasd", name: "pakiya" },
  //       sentTo: "email@email.com",
  //       time: Date.now(),
  //     },
  //   ],
  // },

  // ];

  return (
    <div className="flex flex-col pt-16">
      {chatLogs?.map((chat: contact, i: number) => {
        return <ChatCard key={i} contact={chat} />;
      })}
    </div>
  );
}

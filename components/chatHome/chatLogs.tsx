import React from "react";

//components
import ChatCard from "./chatCard";

import { currentUserInfoContext } from "context/currentUserContext";

//types
import { contactT } from "utils/types";


export default function ChatLogs() {
  const { currentUser } = React.useContext(currentUserInfoContext);

  // fetching chat logs from local storage
  const [chatLogs, setChatLogs] = React.useState<contactT[]>();

  React.useEffect(() => {
    console.log("runs")
    if (typeof window !== "undefined") {
      const chatLogFromLocal = localStorage.getItem(
        `${process.env.NEXT_PUBLIC_PREFIX}${currentUser?.id}CL`
      );
      if (chatLogFromLocal) {
        setChatLogs(JSON.parse(chatLogFromLocal));
      } else { 
        setChatLogs([]);
      }
    }
  } , [0]);

  return (
    <div className="flex flex-col pt-16">
      {chatLogs?.map((chat: contactT, i: number) => {
        return <ChatCard key={i} contact={chat} />;
      })}
    </div>
  );
}

import React from "react";

//components
import ChatHeader from "./chatHeader";
import Msginput from "./Msginput";

import { ChatWindowContext } from "context/chatWinContext";
import { currentUserInfoContext } from "context/currentUserContext";

export default function ChatBox() {
  const { currChatWinDetails } = React.useContext(ChatWindowContext);
  const {currentUser} = React.useContext(currentUserInfoContext)

  return (
    <div className="chat w-full bg-white flex flex-col shadow rounded flex flex-col justify-between max-w-xl absolute top-0 h-screen">
      <ChatHeader />

      <div className="p-4 overflow-scroll flex flex-col gap-2 pt-24 pb-24 chat-background h-screen justify-end">
        {currChatWinDetails?.messages.map((msg) => {
          return (
            <div
              className={` p-2 rounded max-w-xs shadow  ${
                msg.sentTo == currentUser?.id
                  ? "bg-blue-100 self-end"
                  : "bg-gray-100 self-start"
              }`}
            >
              <p className="text-xs text-gray-500">10:11 AM</p>
              {msg.msg}
            </div>
          );
        })}
      </div>

      <Msginput />
    </div>
  );
}

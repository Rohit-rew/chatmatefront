import ChatHeader from "components/chatBox/chatHeader";
import Msginput from "components/chatBox/Msginput";
import { roomContext } from "context/createRoomContext";
import React from "react";

export default function RoomChatBox() {
  const [message, setMessage] = React.useState("");
  const { setChatBox, chatBoxDetails } = React.useContext(roomContext);

  const sendMessage = () => {};

  return (
    <div className="chat w-full bg-white flex flex-col shadow rounded flex flex-col justify-between max-w-xl absolute top-0 h-screen">
      <ChatHeader
        closeChatWIndow={setChatBox}
        idOrEmail={chatBoxDetails?.id!}
        name={chatBoxDetails?.roomName!}
      />

      <div className="p-4 overflow-scroll flex flex-col gap-2 pt-24 pb-24 chat-background h-screen justify-end">
        // messages will render here
      </div>

      <Msginput
        message={message}
        setmessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

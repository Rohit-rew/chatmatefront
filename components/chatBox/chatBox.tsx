import React from "react";

//components
import ChatHeader from "./chatHeader";
import Msginput from "./Msginput";
import Message from "./message";

// contexts
import { ChatWindowContext } from "context/chatWinContext";
import { currentUserInfoContext } from "context/currentUserContext";

// types
import { msgPacketT } from "utils/types";

//socket
import { socket } from "@/pages/chat";

export default function ChatBox({render} : {render : number}) {
  const [message, setMessage] = React.useState("");
  const { currChatWinDetails, setChatWindowOpen } = React.useContext(ChatWindowContext);
  const { currentUser } = React.useContext(currentUserInfoContext);
  const [messages, setMesages] = React.useState<msgPacketT[] | undefined>();

  const sendMessage = () => {
    if(!currentUser) return
    socket.emit(`one-on-one`, {
      msg: message,
      sentTo: currChatWinDetails?.contact.email,
      sender: currentUser, 
      time: Date.now(),
    }); 
    setMessage(""); 
  };

  React.useEffect(()=>{
    if (typeof window !== undefined) {
      const msgFromLocal = localStorage.getItem(
        `${process.env.NEXT_PUBLIC_PREFIX}${currentUser!.id}${currChatWinDetails?.contact.email}`
      );
      if (msgFromLocal) {
        setMesages(JSON.parse(msgFromLocal!))
      } else { 
        setMesages([])
      }
    }
  } , [render])
  

  return (
    <div className="chat w-full bg-white flex flex-col shadow rounded flex flex-col justify-between max-w-xl absolute top-0 h-screen">
      <ChatHeader name={currChatWinDetails!.contact.name} idOrEmail={currChatWinDetails!.contact.email} closeChatWIndow={setChatWindowOpen}/>

      <div className="p-4 overflow-scroll flex flex-col gap-2 pt-24 pb-24 chat-background h-screen justify-end">
        {messages?.map((msg) => {
          return <Message message={msg} currentUserId={currentUser!.id} />;
        })}
      </div>

      <Msginput
        message={message}
        setmessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

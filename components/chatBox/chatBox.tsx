import React from "react";

//components
import ChatHeader from "./chatHeader";
import Msginput from "./Msginput";

import { ChatWindowContext } from "context/chatWinContext";
import { currentUserInfoContext } from "context/currentUserContext";

// socket.io
import { io, Socket } from "socket.io-client";
import { useCookies } from "react-cookie";
import { chatType, message } from "components/chatHome/chatLogs";
import Message from "./message";
let socket: Socket;

export default function ChatBox() {
  const [message, setMessage] = React.useState("");
  const { currChatWinDetails, setCurrChatWinDetails } =
    React.useContext(ChatWindowContext);
  const { currentUser } = React.useContext(currentUserInfoContext);
  const [cookies, setCookies] = useCookies(["chatmate"]);

  const [messages , setMesages] = React.useState<message[] | undefined>(()=>{
    const msgFromLocal = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_PREFIX}${currChatWinDetails?.contact.email}`
    );
    if(msgFromLocal){
      return JSON.parse(msgFromLocal!)
    }else{
      return []
    }
  })

  const sendMessage = () => {
    socket.emit(`one-on-one`, {
      msg: message,
      sentTo: currChatWinDetails?.contact.email,
      sender: currentUser,
      time: Date.now(),
    });
    setMessage("");
  };

  React.useEffect(() => {
    const connectSocket = () => {
      if (!cookies.chatmate) return;
      socket = io(`${process.env.NEXT_PUBLIC_SERVER_URL}`, {
        extraHeaders: {
          Authorization: `Bearer ${cookies.chatmate}`,
        },
      });
      socket.on("connect", () => {
        console.log(socket.connected);
      });
    };
    connectSocket();

    socket.on(`${currentUser?.email}`, (payload) => {
      console.log(payload);
      setCurrChatWinDetails((preval: any) => {
        return { ...preval, messages: [...preval.messages, payload] };
      });

      // writing to local storage
      if (typeof window !== undefined) {
        const messages = localStorage.getItem(
          `${process.env.NEXT_PUBLIC_PREFIX}${currChatWinDetails?.contact.email}`
        );
        if (messages) {
          const parsedMessages = JSON.parse(messages);
          setMesages([...parsedMessages , payload])
          localStorage.setItem(
            `${process.env.NEXT_PUBLIC_PREFIX}${currChatWinDetails?.contact.email}`,
            JSON.stringify([...parsedMessages, payload])
          );
        } else {
          localStorage.setItem(
            `${process.env.NEXT_PUBLIC_PREFIX}${currChatWinDetails?.contact.email}`,
            JSON.stringify([payload])
          );
          setMesages([payload])
        }
        

      }
    });

    return () => {
      socket.off(`${currentUser?.email}`).off();
      socket.off(`connect`).off();
    };
  }, [0]);

  return (
    <div className="chat w-full bg-white flex flex-col shadow rounded flex flex-col justify-between max-w-xl absolute top-0 h-screen">
      <ChatHeader />

      <div className="p-4 overflow-scroll flex flex-col gap-2 pt-24 pb-24 chat-background h-screen justify-end">
        {messages?.map((msg) => {
          return <Message message={msg} currentUserId={currentUser?.id} />;
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

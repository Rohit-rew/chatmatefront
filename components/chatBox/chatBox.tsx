import React from "react";

//components
import ChatHeader from "./chatHeader";
import Msginput from "./Msginput";

import { ChatWindowContext } from "context/chatWinContext";
import { currentUserInfoContext } from "context/currentUserContext";

// socket.io
import { io, Socket } from "socket.io-client";
import { useCookies } from "react-cookie";
let socket: Socket;

export default function ChatBox() {
  const [message, setMessage] = React.useState("");
  const { currChatWinDetails } = React.useContext(ChatWindowContext);
  const { currentUser } = React.useContext(currentUserInfoContext);
  const [cookies, setCookies] = useCookies(["chatmate"]);

  const sendMessage = () => {
    socket.emit(`one-on-one`, { msg : message , sentTo : currChatWinDetails?.contact.email , sentBy : currentUser?.email }); 
    setMessage("");
  }; 
   

  const [messages , setMesages] = React.useState([])

  console.log(messages)

  React.useEffect(() => {
    const connectSocket = () => {
      if(!cookies.chatmate) return

      socket = io(`${process.env.NEXT_PUBLIC_SERVER_URL}`, {
        extraHeaders: {
          Authorization: `Bearer ${cookies.chatmate}`,
        },
      });

      socket.on("connect" , ()=>{
        console.log(socket.connected)
      })
    };
    connectSocket();

    socket.on(`${currentUser?.email}`, (payload) => {
      setMesages(preval=>{
        return [...preval , payload]
      });
    });

    return() => {
      socket.off(`${currentUser?.email}`).off();
      socket.off(`connect`).off();
    }
  }, []);
 
  return ( 
    <div className="chat w-full bg-white flex flex-col shadow rounded flex flex-col justify-between max-w-xl absolute top-0 h-screen">
      <ChatHeader />

      <div className="p-4 overflow-scroll flex flex-col gap-2 pt-24 pb-24 chat-background h-screen justify-end">
        {currChatWinDetails?.messages.map((msg) => {
          return (
            <div
              className={` p-2 rounded max-w-xs shadow  ${
                msg.sentBy == currentUser?.id
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

      <Msginput
        message={message}
        setmessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

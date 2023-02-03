import React from "react";
// cookies
import { useCookies } from "react-cookie";

// components
import Header from "components/chatHome/Header";
import ChatLogs from "components/chatHome/chatLogs";
import ContactLogs from "components/chatHome/contactLogs";
import ChatBox from "components/chatBox/chatBox";
import CreateRoomModal from "components/chatHome/createRoomModal";
import RoomLogs from "components/room/roomLogs";

//contexts
import { ChatWindowContext } from "context/chatWinContext";
import { roomContext } from "context/createRoomContext";
import { currentUserInfoContext } from "context/currentUserContext";

//types
import { contact } from "utils/types";
export type chatWindowDetails = {
  contact: contact;
  message: [];
};

//socket
import { SocketCon } from "utils/socketConnection";
import { Socket } from "socket.io-client";
export let socket : Socket ;

export default function ChatHome() {
  const [view, setView] = React.useState<string>("chats");
  const { isChatWindowOpen } = React.useContext(ChatWindowContext);
  const {iscreateRoomModal} = React.useContext(roomContext)
  const [cookies, setCookies] = useCookies(["chatmate"]);
  const {currentUser} = React.useContext(currentUserInfoContext)


  React.useEffect(() => {
    if(!cookies.chatmate) return
    const socketInstace = new SocketCon(cookies.chatmate)
    socket = socketInstace.socket

    socket.on(`${currentUser?.email}`, (payload) => {
      console.log(payload)
      // writing to local storage
      
      // if (typeof window !== undefined) {
      //   const messages = localStorage.getItem(
      //     `${process.env.NEXT_PUBLIC_PREFIX}${currentUser?.id}${currChatWinDetails?.contact.email}`
      //   );
      //   if (messages) {
      //     const parsedMessages = JSON.parse(messages);
      //     localStorage.setItem(
      //       `${process.env.NEXT_PUBLIC_PREFIX}${currentUser?.id}${currChatWinDetails?.contact.email}`,
      //       JSON.stringify([...parsedMessages, payload])
      //     );
      //   } else {
      //     localStorage.setItem(
      //       `${process.env.NEXT_PUBLIC_PREFIX}${currentUser?.id}${currChatWinDetails?.contact.email}`,
      //       JSON.stringify([payload])
      //     );
      //   }
      // }
    });

    return () => {
      socket.off(`${currentUser?.email}`).off();
      socket.off(`connect`).off();
    };
  }, [0]);

  return (
    <div className="flex justify-center items-center bg-gray-200 background-gradient ">
      <div className=" Contacts w-full h-screen bg-white flex flex-col gap-2 overflow-scroll pt-20 max-w-xl">
        <Header setView={setView} view={view} />
        {Boolean(view == "chats") && <ChatLogs />}
        {Boolean(view == "rooms") && <RoomLogs/>}
        {Boolean(view == "contacts") && <ContactLogs />}
      </div>

      {isChatWindowOpen && <ChatBox />}
      {iscreateRoomModal && <CreateRoomModal />}
    </div>
  );
}

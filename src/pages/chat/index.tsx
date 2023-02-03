import React from "react";
// cookies
import { useCookies } from "react-cookie";
import axios from "axios";

//utils
import { saveMsgToLocalStorage } from "utils/utils";

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
import { currentUserInfoContext, userInfo } from "context/currentUserContext";
import { RequestContext } from "next/dist/server/base-server";


//types
import { contact } from "utils/types";
export type chatWindowDetails = {
  contact: contact;
  message: [];
};
type propTypes = {
  currentUserInfo: userInfo;
};
export type msgPacket = {
  msg: string
  sentTo: string
  sender: userInfo;
  time: Date;
};

//socket
import { SocketCon } from "utils/socketConnection";
import { Socket } from "socket.io-client";
export let socket: Socket;

export default function ChatHome({ currentUserInfo }: propTypes) {
  const [view, setView] = React.useState<string>("chats");
  const { isChatWindowOpen } = React.useContext(ChatWindowContext);
  const { iscreateRoomModal } = React.useContext(roomContext);
  const [cookies, setCookies] = useCookies(["chatmate"]);
  const { setCurrentUser } = React.useContext(currentUserInfoContext);
  const [render, makeRender] = React.useState<number>(12323);

  React.useEffect(() => {
    setCurrentUser(currentUserInfo);
    const token = cookies.chatmate;
    if (!token) return;

    const socketInstace = new SocketCon(token);
    socket = socketInstace.socket;
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on(`${currentUserInfo.email}`, (payload : msgPacket) => {
      console.log(payload);
      saveMsgToLocalStorage(currentUserInfo , payload)
      makeRender(Math.random());
    });

    return () => { // clean up func
      socket.off(`connect`).off();
      socket.off(`${currentUserInfo.email}`).off();
    };
  }, [0]);

  return (
    <div className="flex justify-center items-center bg-gray-200 background-gradient ">
      <div className=" Contacts w-full h-screen bg-white flex flex-col gap-2 overflow-scroll pt-20 max-w-xl">
        <Header setView={setView} view={view} />
        {Boolean(view == "chats") && <ChatLogs />}
        {Boolean(view == "rooms") && <RoomLogs />}
        {Boolean(view == "contacts") && <ContactLogs />}
      </div>

      {isChatWindowOpen && <ChatBox render={render} />}
      {iscreateRoomModal && <CreateRoomModal />}
    </div>
  );
}






export async function getServerSideProps(req: RequestContext, res: Response) {
  const cookies = req.req.cookies;
  const token = cookies.chatmate;
  let currentUserInfo;
  if (!token) return;
  try {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    currentUserInfo = data.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      currentUserInfo: currentUserInfo || null,
    },
  };
}

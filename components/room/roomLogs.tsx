import { roomContext } from "context/createRoomContext";
import Image from "next/image";
import React from "react";
import RoomCard from "./roomCard";
import RoomChatBox from "./roomChatBox";

export default function RoomLogs() {

    const {isChatBoxOpen} = React.useContext(roomContext)

  const rooms = [
    {
      roomName: "My room",
      id: "f54f574f57",
      members: [
        "rohit.rew@gmail.com",
        "mohit.rew@gmail.com",
        "sakshi@gmail.com",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col pt-16 h-screen w-full border">
        {rooms.map((room, i) => {
          return <RoomCard key={i} room={room} />;
        })}{" "}
      </div>

      {isChatBoxOpen && <RoomChatBox />}
    </>
  );
}

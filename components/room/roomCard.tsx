import React from "react";
import Image from "next/image";
import { roomContext } from "context/createRoomContext";

type propType = {
  room: { roomName: string; id: string; members: string[] };
};

export default function RoomCard({ room }: propType) {
  const { setChatBox, setChatBoxDetails } = React.useContext(roomContext);

  const handleClick = () => {
    setChatBox(true);
    setChatBoxDetails(room);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full flex p-2  border items-center justify-between"
    >
      <div className="flex gap-4">
        <Image
          src={"/groupimage.png"}
          width={50}
          height={50}
          className="rounded-full "
          alt=""
        />
        <div className="flex flex-col">
          <p>{room.roomName}</p>
          <p className="text-sx text-gray-400">{room.id}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <p>Members</p>
        <p className="text-center">{room.members.length}</p>
      </div>
    </div>
  );
}

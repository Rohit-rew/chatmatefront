import Image from "next/image";
import React from "react";


import { currentUserInfoContext } from "context/currentUserContext";


export default function UserInfo() {
  const { currentUser} = React.useContext(currentUserInfoContext)


  return (
    <div className="flex gap-2 items-center">
      <Image
        src="/userimage.png"
        alt=""
        width={50}
        height={50}
        className="rounded-full bg-gray-400 shadow"
      />

      <div className="flex flex-col">
        <h2 className="text-xl text-white">{currentUser?.name}</h2>
        <p className="text-xs text-gray-300">{currentUser?.email}</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { useCookies } from "react-cookie";

import axios from "axios";

import { currentUserInfoContext } from "context/currentUserContext";



//types
type userInfo = {
  name: string;
  email: string;
  id: string;
};

export default function UserInfo() {
  const [cookie, setCookies] = useCookies(["chatmate"]);
  const {setCurrentUser , currentUser} = React.useContext(currentUserInfoContext)

  React.useEffect(() => {
    const getUserDataFromCookies = async () => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
          {
            headers: {
              Authorization: `Bearer ${cookie.chatmate}`,
            },
          }
        );
        setCurrentUser(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserDataFromCookies();
  }, [0]);

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

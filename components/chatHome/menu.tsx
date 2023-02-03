import React from "react";
import Router from "next/router";


// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListDots,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

//cookies
import { useCookies } from "react-cookie";

//contexts
import { roomContext } from "context/createRoomContext";

export default function Menu() {
  const [isMenueOpen, setIsMenueOpen] = React.useState<boolean>(false);

  const [cookies, setCookies , removeCookie] = useCookies(["chatmate"]);

  const {setCreateRoomModal} = React.useContext(roomContext)

  const handleClick = () => {
    // detete the existing cookies and send to home route
    removeCookie("chatmate")
    Router.push("/");
  };

  return (
    <div className="flex items-center relative">
      <FontAwesomeIcon
        onClick={() => setIsMenueOpen((preval) => !preval)}
        className="bg-white p-2 rounded w-4"
        icon={!isMenueOpen ? faListDots : faClose}
      />
      {isMenueOpen && (
        <div className="absolute bg-white top-10 right-0 shadow-xl border border rounded select-none">
          <button
            onClick={handleClick}
            className="p-2 px-2 hover:bg-gray-200 w-40"
          >
            Logout
          </button>
          <button onClick={()=>setCreateRoomModal(true)} className="p-2 px-2 hover:bg-gray-200 w-40">
            Create Room
          </button>
        </div>
      )}
    </div>
  );
}

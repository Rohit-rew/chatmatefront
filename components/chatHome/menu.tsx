import React from "react";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faListDots,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import Router from "next/router";

export default function Menu() {

  const [isMenueOpen, setIsMenueOpen] = React.useState<boolean>(false);

  const [cookies , setCookies] = useCookies(["chatmate"])

  const handleClick = ()=>{
    // detete the existing cookies and send to home route
    setCookies("chatmate" , "" ,{
      path: "/",
      sameSite: true,
      maxAge: 1,
    })
    Router.push("/")
  }

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
                className="p-2 px-2 hover:bg-gray-200 w-40">
                Logout
              </button>
              <button className="p-2 px-2 hover:bg-gray-200 w-40">
                Create Room
              </button>
            </div>
          )}
        </div>
  );
}

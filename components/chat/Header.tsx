import React from 'react'
import Image from 'next/image'

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faListDots , faClose } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

     // toggles the menue 
  const [isMenueOpen , setIsMenueOpen] = React.useState<boolean>(false)

  return (
    <header className=" w-full bg-blue-500 fixed top-0 px-4 py-2 max-w-xl flex flex-col gap-4 shadow">
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 items-center">
            <Image
              src="/userimage.png"
              alt=""
              width={50}
              height={50}
              className="rounded-full bg-gray-400 shadow"
            />
            <h2 className="text-xl text-white">Rohit Kumar</h2>
          </div>
          <div className="flex items-center relative">
            <FontAwesomeIcon
              onClick={()=>setIsMenueOpen(preval => !preval)}
              className="bg-white p-2 rounded w-4"
              icon={!isMenueOpen ? faListDots : faClose}
            />  
            {isMenueOpen && <div className="absolute bg-white top-10 right-0 shadow-xl border border rounded select-none">
                <button className="p-2 px-2 hover:bg-gray-200 w-40">Logout</button>
                <button className="p-2 px-2 hover:bg-gray-200 w-40">Create Room</button>
            </div>}
          </div>
        </div>

        <div className="flex gap-2">
          <input
            className=" w-full p-2 outline-none rounded h-8"
            placeholder="Search a user or a Room"
          />
          <FontAwesomeIcon className="bg-white p-2 rounded" icon={faSearch} />
        </div>
      </header>
  )
}

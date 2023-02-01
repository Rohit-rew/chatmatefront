import React from "react";
import Image from "next/image";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

export default function ChatBox() {
  return (
    <div className="chat w-full h-full bg-white flex flex-col shadow rounded flex flex-col justify-between chat-background max-w-xl">
      <div className="bg-blue-500 w-full px-4 py-2 shadow-xl z-10 rounded-t fixed top-0 max-w-xl">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full bg-yellow-400 shadow"
            src="/userimage.png"
            alt=""
            width={50}
            height={50}
          />
          <h2 className="text-xl text-white">Mohit Singh</h2>
        </div>
      </div>

      <div className="p-4 overflow-scroll flex flex-col gap-2 pt-24 pb-24">
        <div className="bg-gray-100 p-2 rounded max-w-xl self-start shadow">
          Hello top
        </div>
        <div className="bg-blue-100 p-2 rounded max-w-xl self-end shadow">
          Hello there how are you
        </div>
        <div className="bg-gray-100 p-2 rounded max-w-xl self-start shadow">
          Hello
        </div>
        <div className="bg-blue-100 p-2 rounded max-w-xl self-end shadow">
          Hello there how are you
        </div>
        <div className="bg-gray-100 p-2 rounded max-w-xl self-start shadow">
          Hello
        </div>
        <div className="bg-blue-100 p-2 rounded max-w-xl self-end shadow">
          Hello there how are you
        </div>
        <div className="bg-gray-100 p-2 rounded max-w-xl self-start shadow">
          Hello
        </div>
        <div className="bg-blue-100 p-2 rounded max-w-xl self-end shadow">
          Hello there how are you
        </div>
        <div className="bg-gray-100 p-2 rounded max-w-xl self-start shadow">
          Hello
        </div>
        <div className="bg-gray-100 p-2 rounded max-w-xl self-start shadow">
          Hello
        </div>
        <div className="bg-gray-100 p-2 rounded max-w-xl self-start shadow">
          Hello
        </div>
        <div className="bg-blue-100 p-2 rounded max-w-xl self-end shadow">
          Hello there how are you
        </div>
        <div className="bg-blue-100 p-2 rounded max-w-xl self-end shadow">
          Hello there how are you
        </div>
        <div className="bg-blue-100 p-2 rounded max-w-xl self-end shadow">
          Cooolll mannnn
        </div>
      </div>

      <div className="w-full bg-blue-500 flex justify-center items-center px-4 py-2 fixed bottom-0 gap-2 max-w-xl">
        <input className="w-full h-10 rounded outline-none p-2" />
        <button className="flex p-2 bg-white rounded items-center gap-2">
          <FontAwesomeIcon icon={faMessage} />
          Send
        </button>
      </div>
      
    </div>
  );
}

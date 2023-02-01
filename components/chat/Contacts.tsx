import React from "react";
import Image from "next/image";
import Header from "./Header";

export default function Contacts() {
  return (
    <div className=" Contacts w-full h-screen bg-white flex flex-col gap-2 overflow-scroll pt-20 max-w-xl">
      
      <Header />

      <div className="flex flex-col gap-2 p-2 pt-10">
        <div className="contact w-full h-20 bg-gray-200 rounded"></div>
        <div className="contact w-full h-20 bg-gray-200 rounded"></div>
        <div className="contact w-full h-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

import {  message } from "components/chatHome/chatLogs";
import React from "react";

type propTypes = {
    message : message
    currentUserId : string | undefined
}

export default function Message({message , currentUserId} : propTypes) {


  return (
    <div
      className={` p-2 rounded max-w-xs shadow  ${
        message.sender.id == currentUserId
          ? "bg-blue-100 self-end"
          : "bg-gray-100 self-start"
      }`}
    >
      <p className="text-xs text-gray-500">
        {new Date(message.time).toLocaleString("in", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>
      {message.msg}
    </div>
  );
}

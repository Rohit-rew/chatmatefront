import React, { ReactNode } from "react";

// types
import { chatWinContextT, chatWinDetailsT } from "utils/types";

const defaultValue = {
  isChatWindowOpen: false,
  setChatWindowOpen() {},
  setCurrChatWinDetails() {},
  currChatWinDetails: undefined,
};

// context setup
const ChatWindowContext = React.createContext<chatWinContextT>(defaultValue);
const { Provider } = ChatWindowContext;


export default function ChatWinContext({ children }: {children : ReactNode}) {
  const [isChatWindowOpen, setChatWindowOpen] = React.useState<boolean>(false);
  const [currChatWinDetails, setCurrChatWinDetails] = React.useState<chatWinDetailsT>();
  

  return (
    <Provider
      value={{
        isChatWindowOpen, 
        setChatWindowOpen,
        currChatWinDetails,
        setCurrChatWinDetails,
      }}
    >
      {children}
    </Provider>
  );
}

export { ChatWindowContext };

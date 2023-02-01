import React, { ReactNode } from "react";

const defaultValue = {
  isChatWindowOpen: false,
  setChatWindowOpen() {},
  setCurrChatWinDetails() {},
  currChatWinDetails: undefined,
};

type chatWinContext = {
  isChatWindowOpen: boolean;
  setChatWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrChatWinDetails: React.Dispatch<
    React.SetStateAction<chatWinDetails | undefined>
  >;
  currChatWinDetails: chatWinDetails | undefined;
};

import { message } from "components/chatHome/chatLogs";
import { contact } from "utils/types";
type chatWinDetails = {
  contact: contact;
  messages: message[];
};

const ChatWindowContext = React.createContext<chatWinContext>(defaultValue);
const { Provider } = ChatWindowContext;

//types
type propTypes = {
  children: ReactNode;
};

export default function ChatWinContext({ children }: propTypes) {
  const [isChatWindowOpen, setChatWindowOpen] = React.useState<boolean>(false);
  const [currChatWinDetails, setCurrChatWinDetails] =
    React.useState<chatWinDetails>();

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

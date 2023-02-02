import "@/styles/globals.css";
import type { AppProps } from "next/app";

import ChatWinContext from "context/chatWinContext";
import CurrentUserContext from "context/currentUserContext";
import CreateRoomContext from "context/createRoomContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CreateRoomContext>
      <CurrentUserContext>
        <ChatWinContext>
          <Component {...pageProps} />
        </ChatWinContext>
      </CurrentUserContext>
    </CreateRoomContext>
  );
}

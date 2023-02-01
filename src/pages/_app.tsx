import "@/styles/globals.css";
import type { AppProps } from "next/app";

import ChatWinContext from "context/chatWinContext";
import CurrentUserContext from "context/currentUserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentUserContext>
      <ChatWinContext>
        <Component {...pageProps} />
      </ChatWinContext>
    </CurrentUserContext>
  );
}

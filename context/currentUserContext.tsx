import axios from "axios";
import React, { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { currentUserInfoT, currUserInfoContextT } from "utils/types";

const defaultvalue = {
  currentUser: { name: "", email: "", id: "" },
  setCurrentUser() {},
};

//context setup
const currentUserInfoContext =
  React.createContext<currUserInfoContextT>(defaultvalue);
const { Provider } = currentUserInfoContext;


export default function CurrentUserContext({ child }: { child: ReactNode }) {
  const [cookie] = useCookies(["chatmate"]);

  const [currentUser, setCurrentUser] = React.useState<currentUserInfoT>();

  React.useEffect(() => {
    if (!cookie.chatmate) return;
    const getUserDataFromCookies = async (token: string) => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("setting current user");
        setCurrentUser(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserDataFromCookies(cookie.chatmate);
  }, [0]);

  return <Provider value={{ currentUser, setCurrentUser }}>{child}</Provider>;
}

export { currentUserInfoContext };

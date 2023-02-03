import axios from "axios";
import React, { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { getUserDataFromCookies } from "utils/utils";

const defaultvalue = {
  currentUser: { name: "", email: "", id: "" },
  setCurrentUser() {},
};

type currUserInfoContext = {
  currentUser : userInfo | undefined,
  setCurrentUser : React.Dispatch<React.SetStateAction<userInfo | undefined>>
};

export type userInfo = {
  name: string;
  email: string;
  id: string;
};

const currentUserInfoContext =
  React.createContext<currUserInfoContext>(defaultvalue);
const { Provider } = currentUserInfoContext;

//types
type propTypes = {
  children: ReactNode;
};

export default function CurrentUserContext({ children }: propTypes) {
  const [cookie , setCookies] = useCookies(["chatmate"])

  const [currentUser, setCurrentUser] = React.useState<userInfo>();
  console.log(currentUser)
  React.useEffect(()=>{

    if(!cookie.chatmate) return
    const getUserDataFromCookies = async (token : string ) => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
       console.log("setting current user")
        setCurrentUser(data.data)
      } catch (error) {
        console.log(error);
      }
    };
    getUserDataFromCookies(cookie.chatmate)
  }, [0])

  return (
    <Provider value={{ currentUser, setCurrentUser }}>{children}</Provider>
  );
}

export { currentUserInfoContext };

import React, { ReactNode } from "react";

const defaultvalue = {
  currentUser: { name: "", email: "", id: "" },
  setCurrentUser() {},
};

type currUserInfoContext = {
  currentUser : userInfo | undefined,
  setCurrentUser : React.Dispatch<React.SetStateAction<userInfo | undefined>>
};

type userInfo = {
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
  const [currentUser, setCurrentUser] = React.useState<userInfo>();

  return (
    <Provider value={{ currentUser, setCurrentUser }}>{children}</Provider>
  );
}

export { currentUserInfoContext };

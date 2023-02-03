export type contactT = {
  name: string;
  email: string;
  id: string;
};

type formSubmitFunctionT = (e: React.FormEvent<HTMLFormElement>) => void;
type errorMsgT = String | null;

export type signUpFormT = {
  signUp: formSubmitFunctionT;
  nameErrorMsg: errorMsgT;
  emailErrorMsg: errorMsgT;
  passErrorMsg: errorMsgT;
  confirmPassErrorMsg: errorMsgT;
};

export type loginFormT = {
  login: formSubmitFunctionT;
  emailErrorMsg: errorMsgT;
  passErrorMsg: errorMsgT;
};

export type currentUserInfoT = {
  email: string;
  id: string;
  name: string;
};

export type chathomeT = {
  currentUserInfo: currentUserInfoT;
};

export type msgPacketT = {
  msg: string;
  sentTo: string;
  sender: currentUserInfoT;
  time: Date;
};

export type chatHomeHeaderT = {
  setView: React.Dispatch<React.SetStateAction<string>>;
  view: string;
};

export type chatCardPropT = {
  contact: contactT;
};

export type addContactModalPropT = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type addContactFormPropT = {
  createContact: (e: React.FormEvent<HTMLFormElement>) => void;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  errorMsg: string;
};

export type chatHeaderPropT = {
  name: string;
  idOrEmail: string;
  closeChatWIndow: React.Dispatch<React.SetStateAction<boolean>>;
};

export type messagePropT = {
  message: msgPacketT;
  currentUserId: string;
};

export type messageInputPropT = {
  message: string;
  setmessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
};

export type chatWinDetailsT = {
  contact: contactT;
};

export type chatWinContextT = {
  isChatWindowOpen: boolean;
  setChatWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrChatWinDetails: React.Dispatch<
    React.SetStateAction<chatWinDetailsT | undefined>
  >;
  currChatWinDetails: chatWinDetailsT | undefined;
};

export type currUserInfoContextT = {
  currentUser: currentUserInfoT | undefined;
  setCurrentUser: React.Dispatch<
    React.SetStateAction<currentUserInfoT | undefined>
  >;
};

import React from "react";
import { useCookies } from "react-cookie";

//axios
import axios from "axios";

//types
import { addContactModalPropT } from "utils/types";

//components
import AddContactForm from "./addContactForm";

export default function AddContactModal({ closeModal }: addContactModalPropT) {
    const [errorMsg, setErrorMsg] = React.useState("");
    const [cookies] = useCookies(["chatmate"]);
  
    const createContact = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMsg("");
  
      const name = e.currentTarget.username.value;
      const email = e.currentTarget.email.value;
  
      if (name && email) {
        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/contact`,
            { name, email },
            { headers: { Authorization: `Bearer ${cookies.chatmate}` } }
          );
          closeModal(false);
        } catch (error) {
          console.log(error); //show error to user
        }
      } else {
        setErrorMsg("both fields are necessary");
      }
    };
  
    return (
      <div className="absolute w-full max-w-xl h-screen bg-black bg-opacity-80 top-0 p-4 flex justify-center items-center ">
        <AddContactForm
          errorMsg={errorMsg}
          createContact={createContact}
          closeModal={closeModal}
        />
      </div>
    );
  }
import React from "react";
import Image from "next/image";

//font awesome
import { faSearch, faAdd, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//components
import Contact from "./contact";
import AddContactForm from "./addContactForm";

//axiso
import axios from "axios";
import { useCookies } from "react-cookie";

//types
type contact = {
  name: string;
  email: string;
  id: string;
};

export default function ContactLogs() {
  const [isAddContactModal, setAddContactModal] = React.useState(false);
  const [contacts, setContacts] = React.useState<contact[]>([]);
  const [cookies, setCookies] = useCookies(["chatmate"]);

  React.useEffect(() => {
    if (!cookies.chatmate) return;
    const fetchContacts = async () => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/contact`,
          { headers: { Authorization: `Bearer ${cookies.chatmate}` } }
        );
        setContacts(data.data.contacts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  });

  const deleteContact = async (id: string) => {
    try {
      const data = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/contact/${id}`,
        { headers: { Authorization: `Bearer ${cookies.chatmate}` } }
      );
      console.log(data);
    } catch (error) {
      console.log(error); //show error to user
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-2 pt-16 overscroll-none">
        <div className="flex justify-center px-4 w-full ">
          <FontAwesomeIcon
            onClick={() => setAddContactModal(true)}
            className="bg-blue-500 rounded-full p-2 text-white w-8 h-8 justify-self-center"
            icon={faAdd}
          />
        </div>

        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          );
        })}
      </div>

      {isAddContactModal && <AddContactModal closeModal={setAddContactModal} />}
    </>
  );
}

//types
type propTypes = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AddContactModal({ closeModal }: propTypes) {
  const [errorMsg, setErrorMsg] = React.useState("");
  const [cookies, setCookies] = useCookies(["chatmate"]);


  const createContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const name = e.currentTarget.username.value;
    const email = e.currentTarget.email.value;

    if (name && email) {
      try {
        const data = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact` , {name , email} , {headers : {Authorization : `Bearer ${cookies.chatmate}`}} )
        closeModal(false)
      } catch (error) {
        console.log(error) //show error to user
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

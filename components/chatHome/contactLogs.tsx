import React from "react";
import Image from "next/image";

//font awesome
import { faSearch, faAdd, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//components
import Contact from "./contact";
import AddContactModal from "./addContactModal";


//axiso
import axios from "axios";
import { useCookies } from "react-cookie";
import { fetchContacts } from "utils/utils";

//types
import { contactT } from "utils/types";


export default function ContactLogs() {
  const [isAddContactModal, setAddContactModal] = React.useState(false);
  const [contacts, setContacts] = React.useState<contactT[]>([]);
  const [cookies, setCookies] = useCookies(["chatmate"]);

  React.useEffect(() => {
    if (!cookies.chatmate) return;
    fetchContacts(cookies.chatmate , setContacts);
  });

  const deleteContact = async (id: string) => {
    try {
      const data = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/contact/${id}`,
        { headers: { Authorization: `Bearer ${cookies.chatmate}` } }
      );
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




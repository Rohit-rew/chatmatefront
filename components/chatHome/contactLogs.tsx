import React from "react";

//font awesome
import { faSearch, faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactLogs() {
  const [isAddContactModal, setAddContactModal] = React.useState(false);

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

        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
        <div className="contact w-full h-10 bg-gray-200 rounded">contact</div>
      </div>

      {isAddContactModal && <AddContactModal closeModal={setAddContactModal} />}
    </>
  );
}

type propTypes = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AddContactModal({ closeModal }: propTypes) {
  return (
    <div className="absolute w-full max-w-xl h-screen bg-black bg-opacity-80 top-0 p-4 flex justify-center items-center ">
      <form className="w-full h-60 bg-white shadow-2xl border rounded relative overscroll-none flex flex-col justify-between p-3">
        <FontAwesomeIcon
          onClick={() => closeModal(false)}
          className="absolute right-2 top-2 text-2xl "
          icon={faClose}
        />

        <div className="flex flex-col ">
          <label className="text-xl">Name</label>
          <input
            id="email"
            className="border border-gray-400 rounded h-10 px-2"
            type={"email"}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xl">Email</label>
          <input
            id="email"
            className="border border-gray-400 rounded h-10 px-2"
            type={"email"}
          />
        </div>

        <button className="bg-green-500 rounded text-white py-2">
          Add Contact
        </button>
      </form>
    </div>
  );
}

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

//types
import { addContactFormPropT } from "utils/types";

export default function AddContactForm({
  createContact,
  closeModal,
  errorMsg
}: addContactFormPropT) {
  return (
    <form
      onSubmit={(e) => createContact(e)}
      className="w-full h-60 bg-white shadow-2xl border rounded relative overscroll-none flex flex-col justify-between p-3"
    >
      <FontAwesomeIcon
        onClick={() => closeModal(false)}
        className="absolute right-2 top-2 text-2xl "
        icon={faClose}
      />

      <div className="flex flex-col ">
        <label className="text-xl">Name</label>
        <input
          id="username"
          className="border border-gray-400 rounded h-10 px-2"
          type={"text"}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xl">Email</label>
        <input
          id="email"
          className="border border-gray-400 rounded h-10 px-2"
          type={"email"}
        />

        {errorMsg && (
          <p className="text-red-500 text-sm">{errorMsg}</p>
        )}
      </div>

      <button type="submit" className="bg-blue-500 rounded text-white py-2">
        Add Contact
      </button>
    </form>
  );
}

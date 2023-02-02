import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { contact } from 'utils/types';
import { roomContext } from 'context/createRoomContext';

type propTypes = {
    contacts : contact[]
    selectContact : (e : React.ChangeEvent<HTMLInputElement>)=>void
    createRoom : (e : React.FormEvent<HTMLFormElement>)=>void
}

export default function CreateRoomForm({contacts , selectContact , createRoom} : propTypes) {

    const {setCreateRoomModal} = React.useContext(roomContext)

 
    
  return (
    <form
    onSubmit={(e)=>createRoom(e)} 
    className="w-full bg-white shadow-2xl border rounded relative overscroll-none flex flex-col justify-between p-3 gap-4">
    <FontAwesomeIcon
        onClick={()=>setCreateRoomModal(false)}
      className="absolute right-2 top-2 text-2xl "
      icon={faClose}
    />

    <div className="flex flex-col">
      <label className="text-xl">Room Name</label>
      <input
        id="username"
        className="border border-gray-400 rounded h-10 px-2"
        type={"text"}
      />
    </div>

    <h2>Add contacts to room</h2>

    <div className="w-full h-40 border border-black p-2 overflow-scroll">

      {contacts.map(contact=>{
        return <div className="flex gap-2">
            <input 
            value={contact.email}
            name={contact.email}
            onChange={(e)=>selectContact(e)} type={"checkbox"} className=""/>
           {contact.name}</div>
      })}

    </div>
      
      <button type='submit' className="text-white bg-green-500  py-1 rounded text-xl">Create</button>

  </form>
  )
}

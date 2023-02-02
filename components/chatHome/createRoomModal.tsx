import React from "react";



import axios from "axios";
import { useCookies } from "react-cookie";

// utils
import { fetchContacts } from "utils/utils";
import { contact } from "utils/types";
import CreateRoomForm from "./createRoomForm";

export default function CreateRoomModal() {

  const [cookies , setCookies] = useCookies()
  const [contacts , setContacts] = React.useState<contact[]>([])
  const [selectedContacts , setSelectedContacts] = React.useState<string[]>([])
    
  const selectContact = (e : React.ChangeEvent<HTMLInputElement>)=>{
    let currEmail = e.currentTarget.name
      if(e.target.checked){
        setSelectedContacts(preval=>{
          return [...preval , currEmail]
        })
      }else{
        setSelectedContacts(preval=>{
          const emails = preval.filter(email=>email !== currEmail)
          return [...emails]
        })
      }
  }

  const createRoom = (e:React.FormEvent<HTMLFormElement>)=>{

  }

  React.useEffect(()=>{
    if (!cookies.chatmate) return; 
    fetchContacts(cookies.chatmate , setContacts);
  }, [0])

  return (
    <div className="absolute w-full max-w-xl h-screen bg-black bg-opacity-80 top-0 p-4 flex justify-center items-center ">
        <CreateRoomForm contacts={contacts} selectContact={selectContact} createRoom={createRoom}/>
    </div>
  );
}

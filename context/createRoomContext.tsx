import React, { ReactNode } from 'react'

type roomContext = {
    iscreateRoomModal : boolean
    setCreateRoomModal : React.Dispatch<React.SetStateAction<boolean>>
    isChatBoxOpen : boolean
    setChatBox : React.Dispatch<React.SetStateAction<boolean>>
    setChatBoxDetails : React.Dispatch<React.SetStateAction<chatBoxDetails | undefined>>
    chatBoxDetails : chatBoxDetails | undefined
}

const defaultValue  ={
    iscreateRoomModal : false,
    setCreateRoomModal(){},
    isChatBoxOpen : false,
    setChatBox(){},
    setChatBoxDetails(){},
    chatBoxDetails : {roomName : "" , id : "" , members : [""] }
} 


// context setup
const roomContext = React.createContext<roomContext>(defaultValue)
const {Provider} = roomContext


type chatBoxDetails = {
    roomName : string,
    id : string,
    members : string[] 
}

export default function CreateRoomContext({children} : {children : ReactNode}) {
    const [iscreateRoomModal , setCreateRoomModal] = React.useState<boolean>(false)
    const [isChatBoxOpen , setChatBox] = React.useState<boolean>(false)
    const [chatBoxDetails , setChatBoxDetails] = React.useState<chatBoxDetails | undefined>(undefined)


  return (
    <Provider value={{iscreateRoomModal , setCreateRoomModal , isChatBoxOpen , setChatBox , setChatBoxDetails , chatBoxDetails}}>
        {children}
    </Provider>
  )
}

export {roomContext}

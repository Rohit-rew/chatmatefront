import React, { ReactNode } from 'react'

type roomContext = {
    iscreateRoomModal : boolean
    setCreateRoomModal : React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue  ={
    iscreateRoomModal : false,
    setCreateRoomModal(){}
}

const roomContext = React.createContext<roomContext>(defaultValue)
const {Provider} = roomContext

type propTypes = {
    children : ReactNode
}

export default function CreateRoomContext({children} : propTypes) {

    const [iscreateRoomModal , setCreateRoomModal] = React.useState<boolean>(false)

  return (
    <Provider value={{iscreateRoomModal , setCreateRoomModal}}>
        {children}
    </Provider>
  )
}

export {roomContext}

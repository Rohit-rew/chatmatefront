import React from 'react'
import Router from 'next/router'

//types
type propTypes = {
    route : any
}

export default function SuccessSignUpMessage({route}:propTypes) {
  return (
    <div className="quizcreateModal absolute w-full h-full  bg-black bg-opacity-80 box-border p-5 flex justify-center items-center">
        <div className="w-full bg-white rounded relative max-w-xl p-5 flex flex-col gap-6 justify-center items-center">
            <h2 className='text-2xl'>Signed Up Successfull </h2>

            <p className='text-center'>You have successfully Signed Up. Please click on the below button to login</p>

            <button onClick={()=>Router.push(route)} className='bg-green-500 w-full py-2 rounded text-xl text-white shadow'>Login</button>
          
        </div>
      </div>
  )
}
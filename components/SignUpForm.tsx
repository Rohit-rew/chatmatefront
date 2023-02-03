import React from 'react'

// types
import { signUpFormT } from 'utils/types'

export default function SignUpForm({signUp ,nameErrorMsg , emailErrorMsg , passErrorMsg , confirmPassErrorMsg} : signUpFormT) {

  return (
   <form
          onSubmit={(e) => signUp(e)}
          className="w-full max-w-md bg-white rounded-xl shadow p-5 flex flex-col justify-between "
        >
          <div className="flex flex-col gap-1 h-28">
            <label className="text-xl">Name</label>
            <input
              id="namee"
              className="border border-gray-400 rounded h-10 px-2"
              type={"text"}
            />
            {nameErrorMsg && <p className="text-red-500 text-sm">{nameErrorMsg}</p>}
          </div>
          <div className="flex flex-col gap-2 h-28">
            <label className="text-xl">Email</label>
            <input
              id="email"
              className="border border-gray-400 rounded h-10 px-2"
              type={"email"}
            />
            {emailErrorMsg && <p className="text-red-500 text-sm">{emailErrorMsg}</p>}
          </div>

          <div className="flex flex-col gap-2 h-28">
            <label className="text-xl">Password</label>
            <input
              id="password"
              className="border border-gray-400 rounded h-10 px-2"
              type={"password"}
            />
            {passErrorMsg && <p className="text-red-500 text-sm">{passErrorMsg}</p>}
          </div>

          <div className="flex flex-col gap-2 h-28">
            <label className="text-xl">Confirm Password</label>
            <input
              id="confirmPassword"
              className="border border-gray-400 rounded h-10 px-2"
              type={"password"}
            />
            {confirmPassErrorMsg && <p className="text-red-500 text-sm">{confirmPassErrorMsg}</p>}
          </div>

          <button type="submit" className="bg-black text-white py-2 rounded">
            Sign Up
          </button>
        </form>
  )
}

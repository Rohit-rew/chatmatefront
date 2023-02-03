import React from "react";
import Image from "next/image";
import Router from "next/router";


export default function WelcomeView() {
  return (
    <div className="welcome-background-gradient h-screen bg-green-500 p-5 flex flex-col justify-start items-center gap-32 sm:justify-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-center text-6xl font-semibold leading-20">
          Welcome to
        </h1>
        <Image
          className="place-center"
          src={"/mainimage.png"}
          alt="logoimage"
          width={275}
          height={275}
        />
      </div>

      <div className="flex flex-col gap-10 max-w-md w-full">
        <button
          onClick={() => Router.push("/accounts/login")}
          className="border border-black rounded-2xl shadow py-4 text-black text-xl bg-white font-semibold hover:border-red-500"
        >
          Login
        </button>
        <button
          onClick={() => Router.push("/accounts/signup")}
          className="border border-black rounded-2xl shadow py-4 text-white text-xl bg-black font-semibold hover:border-red-500"
        >
          SignUp
        </button>
      </div>
    </div>
  );
}

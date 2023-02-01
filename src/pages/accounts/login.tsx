import LoginForm from "components/LoginForm";
import Link from "next/link";
import React from "react";

//axios
import axios, { AxiosError } from "axios";
import Router from "next/router";

export default function Login() {
  const [emailError, setEmailError] = React.useState<null | String>(null);
  const [passError, setPassError] = React.useState<null | String>(null);

  const loginUser = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // remove any preset error
    setEmailError(null);
    setPassError(null);

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    if (email && password) {
      console.log("submitted");
      console.log(email, password);

      // make Login API call here
      try {
        const data = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login` , {email , password})
        const token = data.data.token 
        console.log(token) // set this token to cookies or storage
        Router.push("/chat")
      } catch (error) {
        if(error instanceof AxiosError){
          setEmailError("Invalid credentials")
          setPassError("Invalid credentials")
        }else{
          setEmailError("something went wrong")
        }
      }

    } else if (!email && !password) {// frontend validation
      setEmailError("Please enter email");
      setPassError("Please enter Password");
    } else if (!password) {
      setPassError("Please enter Password");
    } else if (!email) {
      setEmailError("Please enter email");
    }
  };

  return (
    <div className="background-gradient h-screen bg-green-500 p-5 flex flex-col justify-start items-center gap-32 sm:justify-center">
      <h1 className="text-center text-5xl font-semibold leading-20">
        User Login
      </h1>

      <div className="w-full flex flex-col items-center gap-5 ">
        <LoginForm
          login={loginUser}
          emailErrorMsg={emailError}
          passErrorMsg={passError}
        />
        <Link href={"/accounts/signup"}>
          <p className="underline">Don't have a account ? Signup Here</p>
        </Link>
      </div>
    </div>
  );
}

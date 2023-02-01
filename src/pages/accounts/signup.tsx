import React from "react";

//components
import SignUpForm from "components/SignUpForm";
import Link from "next/link";
import SuccessSignUpMessage from "components/SuccessSignUpMessage";

//axios
import axios, { AxiosError } from "axios";

export default function Signup() {
  const [nameErrorMsg, setNameErrorMsg] = React.useState<String | null>(null);
  const [emailErrorMsg, setEmailErrorMsg] = React.useState<String | null>(null);
  const [passErrorMsg, setpassErrorMsg] = React.useState<String | null>(null);
  const [confirmPassErrorMsg, setconfirmPassErrorMsg] =
    React.useState<String | null>(null);
    const [isregistered , setIsregistered] = React.useState<Boolean>(false)


  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // remove any preset error
    setNameErrorMsg(null)
    setEmailErrorMsg(null);
    setpassErrorMsg(null);
    setconfirmPassErrorMsg(null);

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const confirmPassword = e.currentTarget.confirmPassword.value;
    const name = e.currentTarget.namee.value;

    if (name && email && password && confirmPassword) {
      if (password != confirmPassword) {
        setpassErrorMsg("passwords do not match");
        setconfirmPassErrorMsg("passwords do not match");
        return;  
      }
      // api call to backend
      try {
        const data = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/signup` , {name , email , password , confirmPassword})
        setIsregistered(true)
      } catch (error) {
        if(error instanceof AxiosError){
          setEmailErrorMsg(error.response?.data.msg)
        }else{
          setNameErrorMsg("something went wrong")
        }
      }

    } else if (!name && !email && !password && confirmPassword) { //frontend validations
      setEmailErrorMsg("please enter email");
      setpassErrorMsg("please enter password");
      setconfirmPassErrorMsg("please confirm your password");
    } else if (!name) {
      setNameErrorMsg("Please enter name");
    } else if (!email) {
      setEmailErrorMsg("Please enter email");
    } else if (!password) {
      setpassErrorMsg("Please enter password");
    } else if (!confirmPassword) {
      setconfirmPassErrorMsg("Please confirm your password");
    }
  };

  return (
    <div className="background-gradient min-h-screen bg-green-500 p-5 flex flex-col justify-center items-center gap-10 sm:justify-around">
      <h1 className="text-center text-5xl font-semibold leading-20">
        User SignUp
      </h1>

      <div className="w-full flex flex-col items-center gap-5 ">
        <SignUpForm
          signUp={signUp}
          nameErrorMsg={nameErrorMsg}
          emailErrorMsg={emailErrorMsg}
          passErrorMsg={passErrorMsg}
          confirmPassErrorMsg={confirmPassErrorMsg}
        />

        <Link href={"/accounts/login"}>
          <p className="underline">Already a user ? Login here</p>
        </Link>
      </div>
      {isregistered && <SuccessSignUpMessage route={"/accounts/login"}/>}
    </div>
  );
}

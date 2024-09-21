"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./signInCard";
import { SignUpCard } from "./signUpCard";


export const AuthScreen = () => {
    const [state,setState] = useState<SignInFlow>("signIn")

    return (
        <div className="text-black justify-center items-center flex h-full bg-[#5C3B58]">
           <div className="md:h-auto md:w-[420px]">
           {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
           </div>
        </div>
    )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";
import { useState } from "react";
// import {motion} from "framer-motion"

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
}


export const SignUpCard = ({
    setState
}:
SignUpCardProps
) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
       <Card className="h-full w-full p-8">
       <CardHeader className="pt-0 px-0">
        <CardTitle className="">
        Sign Up
        </CardTitle>
        <CardDescription>
        Use your email or another service to continue
       </CardDescription>   
       </CardHeader>
       <div className="flex flex-col gap-y-2.5">
             <Button
             disabled={false}
             onClick={()=>{}}
             variant={"outline"}
             size="lg"
             className="w-full relative"
             >
                Continue with <FcGoogle className="size-5 ml-2 mb-0.5"/>
             </Button>
             <Button
             disabled={false}
             onClick={()=>{}}
             variant={"outline"}
             size="lg"
             className="w-full relative"
             >
                Continue with <FaGithub className="size-5 ml-2 mb-0.5"/>
             </Button>
             <Separator />
             <span className="text-center items-center justify-center mb-4">or</span>
        </div>
       <CardContent className="space-y-5 px-0 pb-0">
           <form className="space-y-4">   
               <Input
               disabled={false}
               value={email}
               onChange={(e)=>{setEmail(e.target.value)}}
               placeholder="Email"
               type="email"
               required
               />
               <Input
               disabled={false}
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               placeholder="Password"
               type="password"
               required
               />
                <Input
               disabled={false}
               value={confirmPassword}
               onChange={(e)=>{setConfirmPassword(e.target.value)}}
               placeholder="Confirm Password"
               type="password"
               required
               />
               <Button 
               type="submit"
               className="w-full"
               size="lg"
               disabled={false}
               >
                Continue
               </Button>
           </form>
        <p className="text-xs text-muted-foreground">
            Already have an account?{" "} 
            <span 
            onClick={()=>setState("signIn")}
            className="text-red-700 cursor-pointer hover:underline">Sign In</span>
        </p>
       </CardContent>
       </Card>
    )
}
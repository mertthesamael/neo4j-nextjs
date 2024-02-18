"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import useDebounce from "@/hooks/use-debounce"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import AuthButton from "../Buttons/auth-button"


export function LoginForm() {
    const [userName, setUserName] = useState<string>("")
    const router = useRouter()
    const {toast} = useToast()
    const login = async (formData: FormData) => {
      const res: any = await signIn("verify-password", {
        username: userName,
        password: formData.get('password'),
        redirect: false
        //callbackUrl:'/verification'
      });
      if(res.error){
        //"CredentialsSignin"
        console.log(res.error)
        return toast({
          variant: "destructive",
          title:  "Please check your credentials",
          description: "There was a problem with your request.",
        })
      }
      return router.push('/app')
    }
  return (
    <Card className="">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login!</CardTitle>
        <CardDescription>
          Enter your credentials below to login.
        </CardDescription>
      </CardHeader>
      <form action={login}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username" >Username</Label>
            <Input autoComplete="off" id="username" pattern="[^ ]+" onChange={(e) => setUserName(e.target.value)}  placeholder="merto" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <AuthButton text="Login" />
        </CardFooter>
      </form>
    </Card>
  )
}
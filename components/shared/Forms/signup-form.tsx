"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import useDebounce from "@/hooks/use-debounce"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import { Suspense, useState } from "react"
import AuthButton from "../Buttons/auth-button"


export function SignupForm() {
  const [userName, setUserName] = useState<string>("")
  const debouncedUsername = useDebounce(userName, 700)
  const router = useRouter()
  const { toast } = useToast()
  const signupAction = async (formData: FormData) => {
    const res: any = await signIn("signup", {
      username: userName,
      password: formData.get('password'),
      redirect: false
      //callbackUrl:'/verification'
    });
    if (res.error) {
      //"CredentialsSignin"
      console.log(res.error)
      return toast({
        variant: "destructive",
        title: res.error === 'CredentialsSignin' ? "This Username Already Exist" : "Oops.. Something went wrong >.<",
        description: "There was a problem with your request.",
      })
    }
    return router.push('/app')
  }
  return (
    <Card className="">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your username and password below to create your account.
        </CardDescription>
      </CardHeader>
      <div className="w-full items-center flex justify-center py-2">
        <div className="rounded-full p-1 border-2">
          <Avatar className='size-16'>
            <AvatarImage src={`https://avatar.vercel.sh/${debouncedUsername}`}></AvatarImage>
            <AvatarFallback className={`bg-gray-400/20 h-full w-full grid place-items-center`}>{userName?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <form action={signupAction}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input pattern="[^ ]+" autoComplete="off" id="username" onChange={(e) => setUserName(e.target.value)} placeholder="merto" />
            <span className="text-xs text-foreground">No spaces.</span>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <AuthButton text="Create Account" />
        </CardFooter>
      </form>
    </Card>
  )
}
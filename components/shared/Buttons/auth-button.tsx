"use client"
import { createUser, getUserByID, getUsers } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import React, { FC } from 'react'
import { useFormStatus } from 'react-dom'
import Spinner from '../Loaders/spinner'

type AuthButtonProps = {
  text:string
}

const AuthButton: FC<AuthButtonProps> = ({ text }) => {
  const session = useSession()
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type='submit' className='w-full font-bold'>
        {pending ? <Spinner className='!stroke-white w-6 h-6' /> : text}
    </Button>
  )
}

export default AuthButton;
"use client"
import React, { FC } from 'react'
import { LogOut } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
type UserAreaProps = {
  user: any
}

const UserArea: FC<UserAreaProps> = ({ user }) => {
  if (user.error) {
    return null
  }
  //console.log(user.data)
  return (
    <div className='flex items-center gap-2 h-full cursor-default'>
      <div className={cn(buttonVariants({ variant: "default" }), 'flex items-center gap-2 px-1')}>
        <div className='p-[2px] rounded-full border-2 border-secondary grid place-items-center'>
          <Avatar className='size-6'>
            <AvatarImage src={user.data.user_img}></AvatarImage>
            <AvatarFallback className='text-white'>{user.data.user_name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
        <span className='font-bold max-w-[10ch] truncate'>{user.data.user_name}</span>
      </div>
      <Button onClick={() => signOut()} variant="outline" className='border-primary' size="icon"><LogOut className='stroke-primary ' /></Button>
    </div>
  )
}

export default UserArea;
"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BellRing, ChevronDown, ChevronUp, LogOut, Moon, Sun } from 'lucide-react';
import { FC, useState } from 'react';
import { signOut } from 'next-auth/react';

type UserInfoProps = {
    user: {
        name: string,
        image: string,
        email: string
    }
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div className={`w-full overflow-hidden`}>
            <div className='py-[14px]'>
                <div className={`flex w-full  gap-4 items-center `}>
                    <Avatar>
                        <AvatarImage src={user.image} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className='flex justify-between w-full items-center'>
                        <div className='flex flex-col'>
                            <h2 className='font-bold text-sm w-[10ch] truncate'>{user.name}</h2>
                            <span className='text-ghost-text text-[10px] truncate'>{'Joker'}</span>
                        </div>
                        <Button onClick={() => signOut()} variant="outline" className='size-8 hover:border-primary bg-transparent 
                        [&_path]:hover:stroke-primary
                        [&_polyline]:hover:stroke-primary
                        [&_line]:hover:stroke-primary
                        '  size="icon"><LogOut /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
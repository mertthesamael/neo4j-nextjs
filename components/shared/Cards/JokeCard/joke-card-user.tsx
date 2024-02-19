import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TUser } from '@/types/TUser';
import React, { FC } from 'react'

type JokeCardUserProps = {
author:TUser
type:'front'|'back'
}

const JokeCardUser: FC<JokeCardUserProps> = ({ author,type }) => {
    const style = {
        "front": "",
        "back": "text-primary"
    }[type]
    return (
        <div className='flex gap-2 items-center'>
            <Avatar className={`size-6 ${style}`}>
                <AvatarImage src={author.user_img}></AvatarImage>
                <AvatarFallback>{author.user_name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className='max-w-[10ch] truncate'>{author.user_name}</span>
        </div>
    )
}

export default JokeCardUser;
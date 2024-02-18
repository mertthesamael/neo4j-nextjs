"use client"
import React, { FC } from 'react'
import '@/style/post-card.css'
import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Heart } from 'lucide-react'

type PostCardProps = {

}

const PostCard: FC<PostCardProps> = ({ }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front  flex flex-col">
                    <div className='w-full h-full text-left capitalize'>
                        <span className='text-white font-medium'>contenasdpasdasdjkaklkjda daskld ja kask ldlasklj asj aklşdjlj klaşsjlt</span>
                    </div>
                    <div className='text-primary flex justify-between w-full items-center'>
                        <div className='flex gap-2 items-center'>
                            <Avatar className='size-6'>
                                <AvatarImage src='https://avatar.vercel.sh/asdasd'></AvatarImage>
                                <AvatarFallback>M</AvatarFallback>
                            </Avatar>
                            <span className='max-w-[10ch] truncate'>Author</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Heart ></Heart>
                            <span>31</span>
                        </div>
                    </div>
                </div>
                <div className="flip-card-back flex flex-col">
                    <div className='w-full h-full text-left capitalize'>
                        <span className='text-secondary font-medium'>contenasdpasdasdjkaklkjda daskld ja kask ldlasklj asj aklşdjlj klaşsjlt</span>
                    </div>
                    <div className='text-primary flex justify-between w-full items-center'>
                        <div className='flex gap-2 items-center'>
                            <Avatar className='size-6'>
                                <AvatarImage src='https://avatar.vercel.sh/asdasd'></AvatarImage>
                                <AvatarFallback>M</AvatarFallback>
                            </Avatar>
                            <span className='max-w-[10ch] text-secondary'>Author</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Heart className='stroke-secondary'></Heart>
                            <span className='text-secondary'>31</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
"use client"
import { likeJoke } from '@/actions/auth';
import { Heart } from 'lucide-react';
import React, { FC, startTransition, useOptimistic } from 'react'

type JokeCardActionProps = {
    type: 'front' | 'back',
    likes: number,
    isLiked?: boolean,
    postID: string
}

const JokeCardAction: FC<JokeCardActionProps> = ({ type, likes, isLiked, postID }) => {
    const [optimisticLike, addOptimisticLike] = useOptimistic(
        likes,
        (state: number) => (++state)
    )
    const likeHandler = async() => {
        addOptimisticLike(optimisticLike)
        await likeJoke(postID)
    }
    const style = {
        "front": `stroke-primary ${isLiked ? 'fill-primary' : ''}`,
        "back": `stroke-secondary ${isLiked ? 'fill-secondary' : ''}`
    }[type]
    return (
        <div className='flex items-center gap-2'>
            <form action={likeHandler}>
            <button type='submit' >
                <Heart className={`${style}`}></Heart>
            </button>
            </form>
            <span>{optimisticLike}</span>
        </div>
    )
}

export default JokeCardAction;
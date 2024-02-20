"use client"
import { likeJoke, unlikeJoke } from '@/actions/auth';
import { Heart } from 'lucide-react';
import React, { FC, useOptimistic } from 'react'
import { useFormStatus } from 'react-dom';

type JokeCardActionProps = {
    type: 'front' | 'back',
    likes: number,
    isLiked?: boolean,
    postID: string
}

const LikeButton = ({type,isLiked}:{type:'front'|'back',isLiked?:boolean}) => {
    const { pending } = useFormStatus()
    const style = {
        "front": `stroke-primary ${isLiked ? 'fill-primary' : ''}`,
        "back": `stroke-secondary ${isLiked ? 'fill-secondary' : ''}`
    }[type]
    return (
        <button disabled={pending} type='submit' className='flex items-center' >
            <Heart className={`${style}`}></Heart>
        </button>
    )

}
const JokeCardAction: FC<JokeCardActionProps> = ({ type, likes, isLiked, postID }) => {
    const [optimisticIsLiked, setOptimisticIsLiked] = useOptimistic(
        isLiked,
        (state?: boolean) => (!state)
    )
    const [optimisticLike, addOptimisticLike] = useOptimistic(
        likes,
        (state: number, value: number) => (value)
    )
    const likeHandler = async () => {
        if (!isLiked) {
            addOptimisticLike((optimisticLike + 1))
            setOptimisticIsLiked(true)
            await likeJoke(postID)
        } else if (isLiked) {
            addOptimisticLike((optimisticLike - 1))
            setOptimisticIsLiked(false)
            await unlikeJoke(postID)
        }

    }

    return (
        <div className='flex items-center gap-2'>
            <span className='w-[4ch] truncate text-right'>{optimisticLike}</span>
            <form action={likeHandler}>
                <LikeButton isLiked={optimisticIsLiked} type={type} />
            </form>
        </div>
    )
}

export default JokeCardAction;
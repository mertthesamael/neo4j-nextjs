import React, { FC } from 'react'
import '@/style/post-card.css'
import { TJoke } from '@/types/TJoke'
import JokeCardUser from './joke-card-user'
import JokeCardAction from './joke-card-action'
import { getUserByID, isJokeLiked } from '@/actions/auth'
import { getJokeLikes } from '@/actions/jokes'

type PostCardProps = {
    joke: TJoke
}

const PostCard: FC<PostCardProps> = async ({ joke }) => {
    const { data: creator } = await getUserByID(joke.userID);
    const { data: likes } = await getJokeLikes(joke.postID);
    const isLiked = await isJokeLiked(joke.postID)
    if (!creator) {
        return null
    }
    return (
        <div className="flip-card" >
            <div className="flip-card-inner">
                <div className="flip-card-front  flex flex-col">
                    <div className='w-full h-full text-left capitalize'>
                        <span className='text-white font-medium text-2xl'>{joke.buildup}</span>
                    </div>
                    <div className='text-primary flex justify-between w-full items-center'>
                        <JokeCardUser author={creator} type='front' />
                        <JokeCardAction isLiked={isLiked} postID={joke.postID} likes={likes} type='front' />
                    </div>
                </div>
                <div className="flip-card-back flex flex-col">
                    <div className='w-full h-full text-left capitalize'>
                        <span className='text-secondary font-medium text-2xl'>{joke.punchline}</span>
                    </div>
                    <div className='flex justify-between w-full items-center'>
                        <JokeCardUser author={creator} type='back' />
                        <JokeCardAction isLiked={isLiked} postID={joke.postID} likes={likes} type='back' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
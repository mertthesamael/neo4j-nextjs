"use client"
import React, { FC, useEffect, useRef, useState } from 'react'
import '@/style/post-card.css'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Forward } from 'lucide-react'
import { createJoke } from '@/actions/auth'
import { useFormStatus } from 'react-dom'
import Spinner from '../../Loaders/spinner'
import { useToast } from '@/components/ui/use-toast'

type NewPostCardProps = {
}
type JokeINput = {
    buildup: string
    punchline: string
}
const SubmitButton = ({ type }: { type: 'front' | 'back' }) => {
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} type='submit' variant={type === 'back' ? 'secondary' : 'default'} size={'icon'}>{pending ? <Spinner className='size-4' /> : <Forward />}</Button>
    )
}
const NewPostCard: FC<NewPostCardProps> = ({ }) => {
    const [isFlipped, setIsFlipped] = useState<boolean>()
    const [jokeContent, setJokeContent] = useState<JokeINput>()
    const cardRef = useRef<HTMLDivElement>(null)
    const { toast } = useToast()
    useEffect(() => {
        if (cardRef.current) {
            if (isFlipped) {
                cardRef.current.style.transform = 'rotateY(180deg)'
            } else if (!isFlipped) {
                cardRef.current.style.transform = 'rotateY(0deg)'
            }

        }
    }, [isFlipped])
    const jokeHandler = async () => {
        const res = await createJoke(jokeContent?.buildup, jokeContent?.punchline)
        if(res.error && typeof res.error === 'string'){
            return toast({title:'Check your fields',description:<span>{res.error}</span>,variant:'destructive'})
        }
        setIsFlipped(false)
        setJokeContent({buildup:'',punchline:''})
        
    }
    return (
        <div className="new-flip-card" >
            <div ref={cardRef} className="new-flip-card-inner">
                <div className="new-flip-card-front gap-4 flex flex-col">
                    <div className='w-full h-full text-left capitalize'>
                        {/* <span className='text-white font-medium text-2xl'>{joke.buildup}</span> */}
                        <Textarea defaultValue={jokeContent?.buildup} value={jokeContent?.buildup} onChange={(e) => setJokeContent({ buildup: e.target.value, punchline: jokeContent?.punchline ?? '' })} maxLength={95} className='h-full max-h-[50ch] overflow-hidden resize-none text-foreground text-2xl' />
                    </div>
                    <div className='text-primary flex justify-between w-full items-center'>
                        {/* <JokeCardUser author={creator} type='front' />
                        <JokeCardAction isLiked={isLiked} postID={joke.postID} likes={likes} type='front' /> */}
                        <Button onClick={() => setIsFlipped(prev => !prev)}>Edit Punchline</Button>
                        <form action={jokeHandler}>
                            <SubmitButton type='front' />
                        </form>
                    </div>
                </div>
                <div className="new-flip-card-back gap-4 flex flex-col">
                    <div className='w-full h-full text-left capitalize'>
                        {/* <span className='text-secondary font-medium text-2xl'>{joke.punchline}</span> */}
                        <Textarea defaultValue={jokeContent?.punchline} value={jokeContent?.punchline} onChange={(e) => setJokeContent({ punchline: e.target.value, buildup: jokeContent?.buildup ?? '' })} className='h-full bg-primary resize-none text-secondary text-2xl' />
                    </div>
                    <div className='flex justify-between w-full items-center'>
                        {/* <JokeCardUser author={creator} type='back' />
                        <JokeCardAction isLiked={isLiked} postID={joke.postID} likes={likes} type='back' /> */}
                        <Button variant={'secondary'} onClick={() => setIsFlipped(prev => !prev)}>Edit Buildup</Button>
                        <form action={jokeHandler}>
                            <SubmitButton type='back' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPostCard;
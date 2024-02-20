import { getLikedJokes } from '@/actions/jokes'
import ContentBodyApp from '@/components/layout/app-layout/ContentBodyApp'
import PostCard from '@/components/shared/Cards/JokeCard'
import React, { FC } from 'react'

type PageProps = {

}

const Page: FC<PageProps> = async ({ }) => {
  const { data: jokes, error } = await getLikedJokes()
  return (
    <ContentBodyApp>
      <div style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(315px, 1fr))",
      }} className='grid w-full gap-y-8 place-items-center py-8'>
        {(!jokes || !jokes?.length) ? <h1>No jokes liked recently.</h1> : jokes.map((el, _i) => <PostCard joke={el} key={_i} />)}
      </div>
    </ContentBodyApp>
  )
}

export default Page;
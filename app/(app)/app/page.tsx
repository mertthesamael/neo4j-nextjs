import { getJokes } from '@/actions/jokes'
import ContentBodyApp from '@/components/layout/app-layout/ContentBodyApp'
import PostCard from '@/components/shared/Cards/JokeCard'
import FakeLoader from '@/components/shared/Loaders/fake-fetch-component'
import React, { FC } from 'react'

type PageProps = {

}

const Page: FC<PageProps> = async ({ }) => {
  const {data:jokes, error} = await getJokes()
  console.log("JOKES=>",jokes)
  if(!jokes){
    return null
  }
  return (
    <ContentBodyApp>
        <FakeLoader duration={2000}/>
      <div style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(315px, 1fr))",
      }} className='grid w-full gap-y-8 place-items-center py-8'>
        {jokes.map((el, _i) => <PostCard joke={el} key={_i} />)}
      </div>
    </ContentBodyApp>
  )
}

export default Page;
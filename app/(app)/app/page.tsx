import { getJokes } from '@/actions/jokes'
import ContentBodyApp from '@/components/layout/app-layout/ContentBodyApp'
import PostCard from '@/components/shared/Cards/JokeCard'
import NewPostCard from '@/components/shared/Cards/JokeCard/new-joke-card'
import FakeLoader from '@/components/shared/Loaders/fake-fetch-component'
import React, { FC } from 'react'

type PageProps = {

}

const Page: FC<PageProps> = async ({ }) => {
  const { data: jokes, error } = await getJokes()
  if (!jokes) {
    return null
  }
  return (
    <ContentBodyApp>
      <div style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(315px, 1fr))",
      }} className='grid overflow-auto w-full gap-y-8 place-items-center py-8'>
        <NewPostCard />
        {jokes.map((el, _i) => <PostCard joke={el} key={_i} />)}
      </div>
    </ContentBodyApp>
  )
}

export default Page;
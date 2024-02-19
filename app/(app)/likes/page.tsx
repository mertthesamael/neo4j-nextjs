import ContentBodyApp from '@/components/layout/app-layout/ContentBodyApp'
import PostCard from '@/components/shared/Cards/post-card'
import FakeLoader from '@/components/shared/Loaders/fake-fetch-component'
import React, { FC } from 'react'

type PageProps = {

}

const Page: FC<PageProps> = async ({ }) => {

  return (
    <ContentBodyApp>
        <FakeLoader duration={2000}/>
      <div style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
      }} className='grid w-full gap-y-8 place-items-center py-8'>
        {Array(5).fill(0).map((el, _i) => <PostCard key={_i} />)}
      </div>
    </ContentBodyApp>
  )
}

export default Page;
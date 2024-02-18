import ContentBody from '@/components/layout/ContentBody'
import PostCard from '@/components/shared/Cards/post-card'
import React, { FC } from 'react'

type PageProps = {

}

const Page: FC<PageProps> = ({ }) => {
  return (
    <ContentBody>
      <div style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
      }} className='grid w-full gap-y-8 place-items-center py-8'>
        {Array(5).fill(0).map((el, _i) => <PostCard key={_i} />)}
      </div>
    </ContentBody>
  )
}

export default Page;
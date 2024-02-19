import { fakeLoader } from '@/lib/utils'
import React, { FC } from 'react'

type FakeLoaderProps = {
  duration:number
}

const FakeLoader: FC<FakeLoaderProps> = async ({ duration }) => {
    const data = await fakeLoader(duration)
  return (
    <>
    </>
  )
}

export default FakeLoader;
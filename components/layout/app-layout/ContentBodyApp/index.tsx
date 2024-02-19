import React, { FC, Suspense } from 'react'
import ContentBodyHeader from '../Header'
import Spinner from '@/components/shared/Loaders/spinner'

type ContentBodyProps = {
    children: React.ReactNode
}

const ContentBodyApp: FC<ContentBodyProps> = ({ children }) => {
    return (
        <section className='w-full flex flex-col items-center rounded-lg bg-background h-full px-6'>
            <Suspense fallback={<div className='w-full h-full grid place-items-center '><Spinner /></div>}>
                <ContentBodyHeader />
                {children}
            </Suspense>
        </section>
    )
}

export default ContentBodyApp;
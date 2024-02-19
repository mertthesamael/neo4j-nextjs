import React, { FC } from 'react'

type ContentBodyProps = {
    children: React.ReactNode
}

const ContentBody: FC<ContentBodyProps> = ({ children }) => {
    return (
        <section className='w-full grid place-items-center bg-background h-full px-6'>
            {children}
        </section>
    )
}

export default ContentBody;
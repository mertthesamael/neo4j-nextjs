import React, { FC } from 'react'

type ContentBodyProps = {
    children: React.ReactNode
}

const ContentBody: FC<ContentBodyProps> = ({ children }) => {
    return (
        <section className='w-full h-full'>
            {children}
        </section>
    )
}

export default ContentBody;
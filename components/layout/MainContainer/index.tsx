import React, { FC } from 'react'

type MainContainerProps = {
    children: React.ReactNode
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
    return (
        <main className='w-full h-full relative flex flex-col rounded-lg overflow-hidden'>
            {children}  
        </main>
    )
}

export default MainContainer;
import React, { FC } from 'react'

type MainContainerProps = {
    children: React.ReactNode
}

const MainContainerApp: FC<MainContainerProps> = ({ children }) => {
    return (
        <main className='w-full h-full relative flex gap-[8px] bg-black rounded-lg overflow-hidden'>
            {children}  
        </main>
    )
}

export default MainContainerApp;
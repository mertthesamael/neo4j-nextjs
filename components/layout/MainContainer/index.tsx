import React, { FC } from 'react'

type MainContainerProps = {
    children: React.ReactNode
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
    return (
        <main className='w-full max-w-[1440px] flex flex-col  min-h-[calc(100dvh-90px)]'>
            {children}
        </main>
    )
}

export default MainContainer;
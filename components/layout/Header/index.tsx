
import React, { FC } from 'react'
import UserArea from './user-area';
import { getUserByID } from '@/actions/auth';
import { getSession } from '@/lib/auth';

type HeaderProps = {

}

const Header: FC<HeaderProps> = async ({ }) => {
  const session = await getSession()
  //console.log(session)
  return (
    <header className='w-full px-6 bg-background left-0 flex items-center justify-between h-[70px] absolute top-0 z-20 backdrop-blur-md'>
      <div className='h-full flex items-center bg-background'>
        <h1 className='text-xl font-bold text-primary bg-background'>Jokedd</h1>
      </div>
      <nav className='bg-background'>
        {session?.user && <UserArea user={await getUserByID(session.user.email as string)} />}
      </nav>
    </header>
  )
}

export default Header;
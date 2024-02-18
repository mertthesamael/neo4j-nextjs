import AuthButton from '@/components/shared/Buttons/auth-button';
import { Button } from '@/components/ui/button';
import React, { FC } from 'react'
import UserArea from './user-area';
import { getServerSession } from 'next-auth';
import { getUserByID } from '@/actions/auth';
import { getSession } from '@/lib/auth';

type HeaderProps = {

}

const Header: FC<HeaderProps> = async ({ }) => {
  const session = await getSession()
  //console.log(session)
  return (
    <header className='w-full max-w-[1440px]  flex items-center justify-between h-[90px] sticky top-0 z-20 backdrop-blur-md'>
      <div className='h-full flex items-center'>
        <h1 className='text-2xl font-bold text-primary'>Jokedd</h1>
      </div>
      <nav>
        {session?.user && <UserArea user={await getUserByID(session.user.email as string)} />}
      </nav>
    </header>
  )
}

export default Header;
import React, { FC } from 'react'
import SidebarUserArea from './components/UserArea';
import SidebarNavigationButton from './components/nav-button';
import { CNavigations } from '@/constants/CNavigations';

type SidebarProps = {

}

const Sidebar: FC<SidebarProps> = ({ }) => {
    return (
        <aside className='min-w-[248px] h-full flex flex-col gap-5 px-4 bg-background rounded-lg'>
            <div className='border-b-2 py-[12px] border-secondary h-[70px] flex items-center'>
                <h1 className='text-xl font-bold text-primary'>Jokedd</h1>
            </div>
            <ul className={`flex flex-col gap-1 h-full w-full`}>
                {CNavigations.map((el, _i) => (
                    <li key={_i} className={`w-full`}>
                        <SidebarNavigationButton label={el.label} href={el.href} />
                    </li>
                ))}
            </ul>
            <div className='border-t-2 border-secondary'>
                <SidebarUserArea />
            </div>
        </aside>
    )
}

export default Sidebar;
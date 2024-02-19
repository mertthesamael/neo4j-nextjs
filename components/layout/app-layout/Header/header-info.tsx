"use client"
import { CNavigationLabels } from '@/constants/CNavigations'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

type HeaderInfoProps = {

}

const HeaderInfo: FC<HeaderInfoProps> = ({ }) => {
    const pathName = usePathname()
    const { label, description } = CNavigationLabels.find(el => pathName.length === 1 ? pathName.includes(el.href) : el.href === '/'+pathName.split('/')[1]) as any
    return (
        <div className='flex flex-col'>
            <h1 className='font-bold '>{label}</h1>
            <span className='text-xs font-medium text-[12px] text-ghost-text'>{description}</span>
        </div>
    )
}

export default HeaderInfo;
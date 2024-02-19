"use client"
import RouteIcon from '@/components/shared/Icons/route-icon'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

type HeaderIconProps = {

}

const HeaderIcon: FC<HeaderIconProps> = ({ }) => {
    const pathName = usePathname()
    return <RouteIcon route={'/' + pathName.split('/')[1] as any} className={`stroke-ghost-text`} />
}

export default HeaderIcon;
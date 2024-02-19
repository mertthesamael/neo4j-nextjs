"use client"
import React, { FC } from 'react'

type SidebarActiveIndicatorProps = {

}

const SidebarActiveIndicator: FC<SidebarActiveIndicatorProps> = ({ }) => {
    
   
    return (
        <span style={{ borderRadius: '0px 9.85px 9.35px 0px' }} className='transition-all w-[5px] h-[29px] bg-primary absolute -left-[14px]' />
    )
}

export default SidebarActiveIndicator;
import React, { FC } from 'react'
import HeaderIcon from './header-icon';
import HeaderInfo from './header-info';


type ContentBodyHeaderProps = {

}

const ContentBodyHeader: FC<ContentBodyHeaderProps> = ({ }) => {
    return (
        <div className='border-b-2 w-full py-[12px] border-secondary h-[70px] flex items-center'>
            <div className='flex items-center gap-4'>
                <HeaderIcon />
                <HeaderInfo />
            </div>
        </div>
    )
}

export default ContentBodyHeader;
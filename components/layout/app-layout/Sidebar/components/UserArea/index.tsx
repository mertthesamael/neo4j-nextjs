import "server-only"
import React, { FC } from 'react'
import { getSession } from "@/lib/auth";
import { notFound } from "next/navigation";
import UserInfo from "./user-info";

type SidebarUserAreaProps = {

}

const SidebarUserArea: FC<SidebarUserAreaProps> = async ({ }) => {
    const session = await getSession()
    if(!session?.user){
        return notFound()
    }
    return (
        <UserInfo user={{name:session.user.name as string,image:session.user.image as string,email:session.user.email}} />
    )
}

export default SidebarUserArea;
"use server"

import { read } from "@/lib/neo4j"
import { TJoke } from "@/types/TJoke"
import { revalidateTag } from "next/cache"



export const getJokes = async () => {

    try {
        const res = await read(`
        MATCH (p:post)
        RETURN p
        LIMIT 25
        `)
        const posts : TJoke[] = res.map((el:any) => el.p.properties)
        revalidateTag('get-all-jokes')
        return {status:'ok',data:posts}
    } catch (err) {
        console.log(err)
        return {status:'error',error:err}
    }
    
}

export const getJokeLikes = async (postID: string) => {

    try {
        const res = await read(`
        MATCH (:post {postID: '${postID}'})<-[r:LIKES]-()
        RETURN COUNT(r) AS likeCount
        `)
        if (!res[0]) {
            throw new Error("Error")
        }

        const count = res[0].likeCount['low']
        return {status:'ok',data:count}
    } catch (err) {
        console.log(err)
        return {status:'error',error:err}
    }

}
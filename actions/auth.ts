"use server"
import { getSession } from "@/lib/auth"
import { read, write } from "@/lib/neo4j"
import { generateRandomString } from "@/lib/utils"
import { TUser } from "@/types/TUser"
import { Node } from "neo4j-driver"
import { revalidatePath, revalidateTag } from "next/cache"


export const createUser = async (userName: string, password: string) => {
    const date = new Date()
    var formattedDate =
        "datetime('" +
        date.toISOString().slice(0, 19) + // Extracting only the date and time portion, excluding milliseconds and timezone
        "Z')";
    const randomID = generateRandomString(12)
    try {
        await write(`
        CREATE (u:user {
            userID: '${randomID}',
            password: '${password}',
            created_at: ${formattedDate},
            user_name: '${userName}',
            user_img:"https://avatar.vercel.sh/${userName}"
        })
        `)
        const res = await getUserByID(randomID)
        if (res.error) {
            throw new Error(typeof res.error === 'string' ? res.error : 'Unexpected Error')
        }
        return { status: 'ok', data: res.data as TUser }
    } catch (err) {
        console.log(err)
        return { status: 'error', error: err instanceof Error ? err.message : err }
    }
}

export const getUserByID = async (userID: string) => {
    try {
        const res = await write(`
        MATCH (u:user {userID: '${userID}'})
        RETURN u
        `)
        const userNode: Node = res[0]['u']
        const userProperties = userNode.properties
        const user: TUser = {
            userID: userProperties.userID,
            user_name: userProperties.user_name,
            created_at: userProperties.created_at,
            user_img: userProperties.user_img
        }
        return { status: 'ok', data: user }
    } catch (err) {
        console.log(err)
        return { status: 'error', error: err instanceof Error ? err.message : err }
    }
}
export const getUserByUsername = async (user_name: string) => {
    try {
        const res = await write(`
        MATCH (u:user {user_name: '${user_name}'})
        RETURN u
        `)
        const userNode: Node = res[0]['u']
        const userProperties = userNode.properties
        const user = {
            userID: userProperties.userID,
            user_name: userProperties.user_name,
            created_at: new Date(userProperties.created_at).toISOString(),
            user_img: userProperties.user_img,
            password: userProperties.password
        }
        return { status: 'ok', data: user }
    } catch (err) {
        console.log(err)
        return { status: 'error', error: err instanceof Error ? err.message : err }
    }
}
export const getUsers = async () => {
    try {
        const res = await write(`
        MATCH (u:user)
        RETURN u
        LIMIT 25
        `)
        return res
    } catch (err) {
        console.log(err)
        return err
    }
}

export const likeJoke = async (postID: string) => {
    const session = await getSession()
    try {
        if (!session) {
            throw new Error("Not Authenticated")
        }
        const res = await write(`
        MATCH (u:user {userID: '${session.user.id}'})
        MATCH (p:post {postID: '${postID}'})
        CREATE (u)-[:LIKES]->(p)
        `)
       
        revalidatePath('get-all-jokes')
        return { status: 'ok', data: true }
    } catch (err) {
        return { status: 'error', error: 'err' }
    }
}

export const isJokeLiked = async (userName: string, postID: string) => {

    try {
        const res = await read(`
        MATCH (u:user {user_name: '${userName}'})-[r:LIKES]->(p:post {postID: '${postID}'})
RETURN r
        `)
        if (!res[0]) {
            return false
        }
        return true
    } catch (err) {
        console.log(err)
        return err
    }

}
import { read } from "@/lib/neo4j"
import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"


export const dynamic = 'force-dynamic'
export const GET = async () => {

    try {
        revalidateTag('testing')
        
        return NextResponse.json({ response: 'producst' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })
    }
}
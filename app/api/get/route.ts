import { read } from "@/lib/neo4j"
import { NextResponse } from "next/server"


export const dynamic = 'force-dynamic'
export const GET = async () => {

    try {
        const res = await read(`
        MATCH (n:Product)
        RETURN n
        LIMIT 25
        `)
        const producst = res.map((row:any) => row.n)
        
        return NextResponse.json({ response: producst }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })
    }
}
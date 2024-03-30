import { db } from "@/db"

export const POST=async()=>{
    const products=await db.query({
        topk:12,
        vector:[0,0,0],
        includeMetadata:true,
    })

    return new Response(JSON.stringify(products))
}
import prisma from "@/lib/prisma"
import {NextResponse} from "next/server"

export async function POST(req: Request){
    const body = await req.json()

    const discussion = await prisma.discussion.create({
        data: {
            topic: body.topic,
            content:body.content,
            authorId:body.authorId,
        }
    })
    return NextResponse.json(discussion);
}
export async function GET(){
    try{
        const discussions = await prisma.discussion.findMany({
            include:{
                author:{
                    select:{name:true}
                },
            },
            orderBy:{createdAt:"desc"}
        })
        return NextResponse.json(discussions)
    }catch(err){
        console.log(err)
        return NextResponse.json({error: "Failed to fetch the discussions"}, {status:500})
    }
}
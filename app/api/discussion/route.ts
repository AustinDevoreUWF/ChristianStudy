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
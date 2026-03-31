import prisma from "@/lib/prisma"
import { Content } from "next/font/google"
import {NextResponse} from "next/server"

export async function POST(req: Request){
    const body = await req.json()

    const comment = await prisma.comment.create({
        data: {
            content: body.content,

        }
    })
    return NextResponse.json(comment);
}
import prisma from "@/lib/prisma"
import {NextResponse} from "next/server"

export async function POST(req: Request){
  const body = await req.json()
  
    const User = await prisma.user.create({
        data:{
            email: body.email,
            password: body.password,
            name: body.name,
        }
    })
    
    return NextResponse.json(User)
  
}
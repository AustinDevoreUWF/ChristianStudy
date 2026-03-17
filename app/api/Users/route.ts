import prisma from "@/lib/prisma"
import {NextResponse} from "next/server"
import {Prisma} from "@prisma/client"

export async function POST(req: Request){
  try{
    const body = await req.json()
  
    const User = await prisma.user.create({
        data:{
            email: body.email,
            password: body.password,
            name: body.name,
        }
    })
    
    return NextResponse.json(User,{status:201})

    }catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002")
            return NextResponse.json({error:"This email is already in use."},{status:400})
        console.error(err)
        return NextResponse.json({error:"User creation Failed"}, {status:500});
    }
}
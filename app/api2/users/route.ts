import prisma from "@/lib/prisma"
import {NextResponse} from "next/server"
import {Prisma} from "@prisma/client"
import bcrypt from "bcrypt"

export async function POST(req: Request){
  try{
    const body = await req.json()
  
    const hashedPassword = await bcrypt.hash(body.password, 10)

    const User = await prisma.user.create({
        data:{
            email: body.email,
            password: hashedPassword,
            name: body.name,
        }
    })
    
    return NextResponse.json(
        {
            id: User.id,
            email: User.email,
            name: User.name,
        },{status:201})

    }catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002")
            return NextResponse.json({error:"This email is already in use."},{status:400})
        console.error(err)
        return NextResponse.json({error:"User creation Failed"}, {status:500});
    }
}
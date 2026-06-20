import { NextResponse } from "next/server";
import {getWeekly, updateFeaturedDiscussion, updateSaint, updateReadings, updateFeaturedScripture} from "@/services/weekly";


export async function GET(req:Request){
    try{
        const weekly = await getWeekly()
        return Response.json({message:"Weekly Recieved", weekly}, {status:200})
    }catch(err:any){
        return Response.json({message:err.message||"An error occured"},{status:400})
    }
}
export async function POST(req:Request, section:string){
    
    try{
        const body = await req.json()
        const {section, ...data} = body

        switch(section){
            case "discussion":
                return NextResponse.json(await updateFeaturedDiscussion(data))
            case "saint":
                return NextResponse.json(await updateSaint(data))
            case "readings":
                return NextResponse.json(await updateReadings(data))
            case "featuredScripture":
                return NextResponse.json(await updateFeaturedScripture(data))
            default:
                return NextResponse.json({ error: "Unknown section" }, { status: 400 })
            }
    }catch(err:any){
        const errorMessage = err.message;
        console.log(errorMessage);
        return Response.json({message:err.message||"Unknown error updating values"},{status:500})
    }
}

import { createDiscussion} from "@/services/posts";

export async function POST(req:Request){
    const body = await req.json();
    console.log("Received body:", body);
    const {title, text, authorId} = body;
    if(!title || !text || !authorId){
        return Response.json({error:"Missing Fields"}, {status:400});
    }
    try{
        const discussion = await createDiscussion(title, text, authorId);
        return Response.json({message:"Discussion Created", discussion:discussion},{status:200})
    }catch(err:any){
        return Response.json({error:err.message||"Failed to create discussion"},{status:500})
    }
}
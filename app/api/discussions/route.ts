import { createDiscussion} from "@/services/posts";
import { getAllDiscussions } from "@/services/posts";

export async function POST(req:Request){
    const body = await req.json();
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

export async function GET(){
    try{
        const discussions = await getAllDiscussions();
        return Response.json({discussions:discussions},{status:200})
    }catch(err:any){
        return Response.json({error:err.message||"Failed to fetch discussions"},{status:500})
    }
}
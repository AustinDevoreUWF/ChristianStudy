import { getAllDiscussions } from "@/services/posts";

export async function GET(){
    try{
        const discussions = await getAllDiscussions();
        return Response.json({discussions:discussions},{status:200})
    }catch(err:any){
        return Response.json({error:err.message||"Failed to fetch discussions"},{status:500})
    }
}
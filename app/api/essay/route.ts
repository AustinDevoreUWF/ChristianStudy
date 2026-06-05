import { createEssay } from "@/services/weekly";
import { getAllEssays } from "@/services/weekly";

export async function POST(req: Request){
    const body = await req.json()
    const {title, category, text, authorId} = body;

    if(!title||!category||!text||!authorId){
        return Response.json({message:"Missing Required Fields"},{status:400});
    }
    try{
        const essay = await createEssay(title,category,text,authorId)
         return Response.json({message:"Essay Created",essay},{status:200});
    }catch(err:any){
        return Response.json({error:"Failure to create"},{status:500})
    }
}
export async function GET(){
    try{
        const essays = await getAllEssays();
        return Response.json({message:"Retrieved All Essays ",essays},{status:200});
    }catch(err:any){
        return Response.json({message:err.message||"Failed to retrieve essays "},{status:500});
    }

}
import { deleteEssay } from "@/services/weekly";



export async function DELETE(req:Request){
    const body = await req.json()
    const {id} = body
    
    if(!id){
        return Response.json({message:"Missing required Field"},{status:400})
    }
    
    try{
        const essay = await deleteEssay(id)
        return Response.json({message:"Success",essay},{status:200})
    }catch(err: any){
        return Response.json({message:err.message||"Error Deleting Essay"},{status:500});
    }
}
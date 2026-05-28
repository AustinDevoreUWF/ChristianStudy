import { deleteDiscussion } from "@/services/posts";
//get params from url, with param bein type param containing id of type strng
export async function DELETE(req:Request){
    const {searchParams} = new URL(req.url)
    const id = parseInt(searchParams.get('id')!)
    const deleted = await deleteDiscussion(id)
    return Response.json(deleted);    
}
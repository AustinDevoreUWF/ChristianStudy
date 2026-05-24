import { createReply } from "@/services/posts"; 

//we are taking in a Request Object from the api call
export async function POST(req:Request){
    //bring body as a json object so we can work with it
    const body = await req.json()
    const {title,text,authorId,discussionId,parentId} = body 

    if(!title || !text || !discussionId || !authorId){
        return Response.json({message:"Missing Required Fields"}, {status:400})
    }
    try{
        const newReply = await createReply(title,text,discussionId,authorId,parentId)
        return Response.json({message:"Successfully Create Reply"},{status:200})
    }catch(e){
        console.log(e)
        return Response.json({message:"Error Creating Reply"},{status:500})

    }
}
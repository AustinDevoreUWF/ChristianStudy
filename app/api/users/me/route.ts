import { getCurrentUser } from "@/services/users";

export async function GET(req:Request){
    const auth = req.headers.get("authorization")
    if(!auth){
        return Response.json({error:"Unauthorized"},{status:401});
    }
    //token is the second part of the auth header which is (bearer, tokenNum).
    const token = auth.split(" ")[1];
    try{
        const userProfile = await getCurrentUser(token);
        if(!userProfile){
            return Response.json({error:"User not found"},{status:404});
        }return Response.json({userProfile});
    }catch(err){
        return Response.json({error:"Invalid Token"},{status:401});
    }
}
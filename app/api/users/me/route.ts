import { getCurrentUser } from "@/services/users";

export async function GET(req:Request){
    const auth = req.headers.get("authorization")
    if(!auth){
        return Response.json({error:"Unauthorized"},{status:401});
    }
    //token is the secon part of the auth header which is (bearer, tokenNum).
    const token = auth.split(" ")[1];
    const user = await getCurrentUser(token);

    return Response.json({user});
}
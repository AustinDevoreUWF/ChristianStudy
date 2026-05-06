import {loginUser} from "@/services/users"

export async function POST(req:Request){
        //get userEmail and Password from the req.Json()
        const {userEmail, password} = await req.json()
        //if no userEmail or password, return a response as json ({error},{status}})
        if(!userEmail || !password){
            return Response.json({error:"Missing Fields"}, {status:400});
        }//work on this now
        try{
            //set a user obj = to the email and pass we got from json
            const user = await loginUser(userEmail,password)
            return Response.json({message:"Successfully Logged-in", user:user.user, token:user.token},{status:200})
        }catch(err:any){
            return Response.json({error:err.message||"Login Failed"},{status:500})
        }
    }   

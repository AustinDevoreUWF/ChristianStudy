import type { NextApiRequest, NextApiResponse } from "next";
import { registerUser } from "@/services/users";

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method !== "POST"){
        return res.status(405).json({error: "Method not allowed"});
    }
    const {userName, userEmail, password} = req.body;
    if(!userName||!userEmail||!password){
        return res.status(400).json({error:"Missing Required Feilds"})
    }
    try{
        const user = await registerUser(userName,userEmail,password);
        return res.status(200).json({
            message:"Successfully Registered!",
            user: user.user.toJSON(),//the user part of User (User holds token too)
            token:user.token
        })
    }catch(err:any){
        console.error(err);
        return res.status(400).json({error:err.message||"Registration Failed"})
    }
}
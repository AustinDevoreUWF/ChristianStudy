import {registerUser} from "@/services/users"

export async function POST(req:Request){
        const {userName, userEmail, password} = await req.json()
        if (!userName || !userEmail || !password) {
            return Response.json(
              { error: "Missing fields" },
              { status: 400 }
            );
        }
        try{
            const user = await registerUser(userName, userEmail, password)
            return Response.json(
              {message:"Successfully Registered",
                user: user.user,token: user.token},
                {status:200}
              );
        }catch(err:any){
            return Response.json(
              {error: err.message||"Registration Failed"},
              {status:400}
            );

        }
    }

import { loginUser } from "@/services/users";
import { registerUser } from "@/services/users";

//Create a user
export async function POST(req: Request) {
  const body = await req.json();
  const { userName, userEmail, password } = body;

  if (!userName || !userEmail || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  try {
    const user = await registerUser(userName, userEmail, password);

    return new Response(
      JSON.stringify({
        message: "Successfully Registered!",
        user: user.user.toJSON(),
        token: user.token,
      }),
      { status: 200 }
    );
  } catch (err: any) {
        console.error("REGISTER ERROR:", err);
    return new Response(JSON.stringify({ error: err.message || "Registration Failed"}), { status: 400 });
  }
}
//Login a User
export async function GET(req: Request){
  const body = await req.json()
  const {userEmail, password} = body;
//if missing field
  if(!userEmail || !password){
    return new Response(JSON.stringify({error:"Missing fields"}), {status:400});
  }
//call Service method loginUser() assign user and token to const user
  try{
    const user = await loginUser(userEmail, password);
    return new Response(
      JSON.stringify({
        message:"Successfully Logged-in",
        user: user.user.toJSON(),
        token: user.token,
      }),
      {status:200}
    );
//catch any errors here
  } catch(err:any){
    console.error("LOGIN ERROR:",err);
    return new Response(JSON.stringify({error:err.message || "Login Failed"}));
  }
}
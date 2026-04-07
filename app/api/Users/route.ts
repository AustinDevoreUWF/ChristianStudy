import { registerUser } from "@/services/users";

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
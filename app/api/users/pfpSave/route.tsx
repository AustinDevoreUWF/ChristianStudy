import { setPFP } from "@/services/users";

export async function PUT(req: Request) {
  try {
    const { userName, profilePic } = await req.json();
    await setPFP(userName, profilePic);
    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: "Failed to update" }, { status: 500 });
  }
}
// app/api/users/me/route.ts
import { getCurrentUser, setPFP } from "@/services/users";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary once at the top of the combined file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🟢 1. GET METHOD: Fetches the current user profile
export async function GET(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = auth.split(" ")[1];
  try {
    const userProfile = await getCurrentUser(token);
    if (!userProfile) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    return Response.json({ userProfile });
  } catch (err) {
    return Response.json({ error: "Invalid Token" }, { status: 401 });
  }
}

// 🟢 2. PUT METHOD: Uploads image to Cloudinary AND immediately saves it to the DB
export async function PUT(req: Request) {
  try {
    const { userName, image } = await req.json(); // image is your base64 string

    if (!userName || !image) {
      return Response.json({ error: "Missing userName or image data" }, { status: 400 });
    }

    // Action A: Upload base64 string to Cloudinary
    const result = await cloudinary.uploader.upload(image, {
      folder: "profile-pics",
    });

    // Action B: Use the secure URL from Cloudinary and immediately update the DB
    await setPFP(userName, result.secure_url);

    // Return the final saved image URL back to the frontend
    return Response.json({ success: true, url: result.secure_url }, { status: 200 });

  } catch (err: any) {
    console.error("Profile update error:", err.message);
    return Response.json({ error: err.message || "Failed to update profile picture" }, { status: 500 });
  }
}
// app/api/upload/route.ts
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req: Request) {
  try {
    const { image } = await req.json()  // base64 string

    const result = await cloudinary.uploader.upload(image, {
      folder: "profile-pics",  // organizes uploads in cloudinary dashboard
    })

    return Response.json({ url: result.secure_url }, { status: 200 })
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}
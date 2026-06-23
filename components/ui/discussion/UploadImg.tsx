export async function UploadImage(file: File): Promise<string> {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    console.log("Uploading to:", url);

    const res = await fetch(url, { method: "POST", body: data });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error("Cloudinary upload failed:", res.status, errorBody);
        throw new Error(`Image upload failed: ${errorBody}`);
    }

    const json = await res.json();
    return json.secure_url as string;
}
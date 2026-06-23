import { NextResponse, NextRequest } from "next/server";
import { getWeekly, updateFeaturedDiscussion, updateSaint, updateReadings, updateFeaturedScripture } from "@/services/weekly";
import { verifyAdmin } from "@/src/lib/Admin"; 
export async function POST(request: NextRequest) {
    const adminUser = await verifyAdmin(request);

    if (!adminUser) {
        return NextResponse.json({ error: "Unauthorized access denied" }, { status: 401 });
    }

    try {
        const body = await request.json(); 
        const { section, ...data } = body;

        switch (section) {
            case "discussion":
                return NextResponse.json(await updateFeaturedDiscussion(data));
            case "saint":
                return NextResponse.json(await updateSaint(data));
            case "readings":
                return NextResponse.json(await updateReadings(data));
            case "featuredScripture":
                return NextResponse.json(await updateFeaturedScripture(data));
            default:
                return NextResponse.json({ error: "Unknown section" }, { status: 400 });
        }
    } catch (err: any) {
        return NextResponse.json({ message: err.message || "Unknown error updating values" }, { status: 500 });
    }
}
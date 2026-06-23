import { PrismaClient } from "../generated/prisma"
import { PrismaNeon } from "@prisma/adapter-neon"
import * as dotenv from "dotenv"
dotenv.config()

const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
    await prisma.weekly.upsert({
        where: { id: 1 },
        update: {},
        create: {
    id: 1,
    saintName: "Saint Name Here",
    saintDescription: "Description here",
    saintFeastDay: "Feast day info",
    featuredScriptureRef: "John 3:16", // <-- Use this instead of book/chapter/verse
    featuredScriptureSummary: "For God so loved the world...", 
    discussionTitle: "Weekly Discussion Title",
    discussionDescription: "Discussion details",
    discussionImage: "",
    discussionCloses: ""
}
    })
    console.log("Seeded weekly record")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
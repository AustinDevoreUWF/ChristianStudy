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
            scriptureChapter: "",
            scriptureVerse: "",
            scriptureBook: "",
            saintName: "",
            saintDescription: "",
            saintFeastDay: "",
        }
    })
    console.log("Seeded weekly record")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
/*
  Warnings:

  - You are about to drop the column `scriptureBook` on the `Weekly` table. All the data in the column will be lost.
  - You are about to drop the column `scriptureChapter` on the `Weekly` table. All the data in the column will be lost.
  - You are about to drop the column `scriptureVerse` on the `Weekly` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_discussionId_fkey";

-- AlterTable
CREATE SEQUENCE weekly_id_seq;
ALTER TABLE "Weekly" DROP COLUMN "scriptureBook",
DROP COLUMN "scriptureChapter",
DROP COLUMN "scriptureVerse",
ALTER COLUMN "id" SET DEFAULT nextval('weekly_id_seq');
ALTER SEQUENCE weekly_id_seq OWNED BY "Weekly"."id";

-- CreateTable
CREATE TABLE "Essay" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Essay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScriptureCitation" (
    "id" SERIAL NOT NULL,
    "scriptureBook" TEXT NOT NULL,
    "scriptureChapter" TEXT NOT NULL,
    "scriptureVerse" TEXT NOT NULL,
    "weeklyId" INTEGER NOT NULL,

    CONSTRAINT "ScriptureCitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EssayToWeekly" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_EssayToWeekly_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EssayToWeekly_B_index" ON "_EssayToWeekly"("B");

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_discussionId_fkey" FOREIGN KEY ("discussionId") REFERENCES "Discussion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Essay" ADD CONSTRAINT "Essay_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScriptureCitation" ADD CONSTRAINT "ScriptureCitation_weeklyId_fkey" FOREIGN KEY ("weeklyId") REFERENCES "Weekly"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EssayToWeekly" ADD CONSTRAINT "_EssayToWeekly_A_fkey" FOREIGN KEY ("A") REFERENCES "Essay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EssayToWeekly" ADD CONSTRAINT "_EssayToWeekly_B_fkey" FOREIGN KEY ("B") REFERENCES "Weekly"("id") ON DELETE CASCADE ON UPDATE CASCADE;

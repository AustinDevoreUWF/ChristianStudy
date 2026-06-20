/*
  Warnings:

  - You are about to drop the column `scriptureBook` on the `ScriptureCitation` table. All the data in the column will be lost.
  - You are about to drop the column `scriptureChapter` on the `ScriptureCitation` table. All the data in the column will be lost.
  - You are about to drop the column `scriptureVerse` on the `ScriptureCitation` table. All the data in the column will be lost.
  - Added the required column `reference` to the `ScriptureCitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `ScriptureCitation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ScriptureCitation" DROP COLUMN "scriptureBook",
DROP COLUMN "scriptureChapter",
DROP COLUMN "scriptureVerse",
ADD COLUMN     "reference" TEXT NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Weekly" ADD COLUMN     "discussionCloses" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "discussionDescription" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "discussionImage" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "discussionTitle" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "featuredScriptureRef" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "featuredScriptureSummary" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "id" SET DEFAULT 1,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "saintName" SET DEFAULT '',
ALTER COLUMN "saintDescription" SET DEFAULT '',
ALTER COLUMN "saintFeastDay" SET DEFAULT '';
DROP SEQUENCE "weekly_id_seq";

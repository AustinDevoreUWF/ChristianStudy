-- CreateTable
CREATE TABLE "Weekly" (
    "id" INTEGER NOT NULL,
    "scriptureChapter" TEXT NOT NULL,
    "scriptureVerse" TEXT NOT NULL,
    "scriptureBook" TEXT NOT NULL,
    "saintName" TEXT NOT NULL,
    "saintDescription" TEXT NOT NULL,
    "saintFeastDay" TEXT NOT NULL,

    CONSTRAINT "Weekly_pkey" PRIMARY KEY ("id")
);

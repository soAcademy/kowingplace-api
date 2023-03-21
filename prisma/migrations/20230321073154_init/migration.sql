/*
  Warnings:

  - Added the required column `openCloseId` to the `durationCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "durationCategory" ADD COLUMN     "openCloseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "durationCategory" ADD CONSTRAINT "durationCategory_openCloseId_fkey" FOREIGN KEY ("openCloseId") REFERENCES "OpenClose"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

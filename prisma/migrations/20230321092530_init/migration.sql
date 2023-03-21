/*
  Warnings:

  - Made the column `userInternalId` on table `CoWork` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CoWork" DROP CONSTRAINT "CoWork_userInternalId_fkey";

-- AlterTable
ALTER TABLE "CoWork" ALTER COLUMN "userInternalId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CoWork" ADD CONSTRAINT "CoWork_userInternalId_fkey" FOREIGN KEY ("userInternalId") REFERENCES "UserInternal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
